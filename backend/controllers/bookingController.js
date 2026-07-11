import Show from "../models/Show.js";
import Booking from "../models/Booking.js";

// API to check if seats are available or not
const checkSeatsAvailability = async (showId, selectedSeats) => {
  try {
    const showData = await Show.findById(showId);
    if (!showData) return false;

    const occupiedSeats = showData.occupiedSeats;

    const isAnySeatTaken = selectedSeats.some(seat => occupiedSeats[seat]);

    return !isAnySeatTaken;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

// API to book seats and store them in db
export const createBooking = async (req, res) => {
  try {
    const { userId } = req.auth();
    const { showId, selectedSeats } = req.body;

    // This line uses JavaScript destructuring to extract the origin property from the incoming HTTP request headers object (req.headers).
    // This header tells your backend exactly where the request came from (the domain name, protocol, and port).
    // while integrate a payment gateway,you pass this origin value to the payment service so it knows exactly which domain to redirect the user back to
    const { origin } = req.headers;

    // Check if the seat is available for the selected show
    const isAvailable = await checkSeatsAvailability(showId, selectedSeats);

    if (!isAvailable) {
      return res.json({ 
        success: false, 
        message: "Selected Seats are not available." 
      });
    }

    // Get the show details
    const showData = await Show.findById(showId).populate('movie');

    // Create a new booking
    const booking = await Booking.create({
      user: userId,
      show: showId,
      amount: showData.showPrice * selectedSeats.length,
      bookedSeats: selectedSeats
    });

    // Update the show document's occupied seats mapping
    selectedSeats.map((seat) => {
      showData.occupiedSeats[seat] = userId;
    });

    // Tell Mongoose that the Mixed/Object field has been modified so it persists on save
    showData.markModified('occupiedSeats');

    await showData.save();

    // integrate Stripe/Razorpay later,payment link generation

    res.json({ success: true, message:"booked successfully" });

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Controller to fetch a quick list of all reserved seat keys for a specific show
export const getOccupiedSeats = async (req, res) => {
  try {
    const { showId } = req.params;
    const showData = await Show.findById(showId);

    // This line extracts all the keys (the seat names) from your occupiedSeats object and stores them inside a standard array.
    const occupiedSeats = showData.occupiedSeats ? Object.keys(showData.occupiedSeats) : [];

    res.json({ success: true, occupiedSeats });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};