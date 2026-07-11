import stripe from "stripe";
// backend is using ES Modules (import/export syntax), which strictly requires to include
//  the .js file extension for your local file imports.
import Booking from "../models/Booking.js";

export const stripeWebhooks = async (request, response) => {
  const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);
  const sig = request.headers["stripe-signature"];

  let event;

  // Verify webhook signature authenticity
  try {
    event = stripeInstance.webhooks.constructEvent(
      request.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    return response.status(400).send(`Webhook Error: ${error.message}`);
  }

  // Handle the specific verified webhook payload events
  try {
    switch (event.type) {
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object;
        
        // Query the Stripe API to find the checkout session associated with this Payment Intent
        const sessionList = await stripeInstance.checkout.sessions.list({
          payment_intent: paymentIntent.id
        });

        const session = sessionList.data[0];
        const { bookingId } = session.metadata;

        // Mark the booking as paid inside MongoDB database
        await Booking.findByIdAndUpdate(bookingId, {
          isPaid: true,
          paymentLink: ""
        });

        break;
      }

      default:
        console.log('Unhandled event type:', event.type);
    }

    response.json({ received: true });

  } catch (err) {
    console.error("Webhook processing error:", err);
    response.status(500).json({ success: false, message: "Internal server webhook processing error" });
  }
};