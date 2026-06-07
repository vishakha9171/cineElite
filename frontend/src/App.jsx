// React Hooks and Def
import {Routes,Route, useLocation} from 'react-router-dom'

// external packages
import {Toaster} from 'react-hot-toast' //for notifications                

// components
import Footer from './components/Footer'
import Navbar from './components/Navbar'

// pages
import Home  from './pages/Home'
import Favorite from './pages/Favorite'
import MyBookings from './pages/MyBookings'
import SeatLayout from './pages/SeatLayout'
import MovieDetail from './pages/MovieDetail'
import Movies from './pages/Movies'


function App() {

  // to check current route is admin or not
  // useLocation hook is used to check the active path currently
  const isAdminRoute=useLocation().pathname.startsWith('./admin');

  return (
    <>
      <Toaster/>   

      {!isAdminRoute && <Navbar/>}

      {/* Redirect to pages */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:id" element={<MovieDetail/>}/>
        <Route path="/movies/:id/:date" element={<SeatLayout/>}/>
        <Route path="/my-bookings" element={<MyBookings/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
      </Routes>

      {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
