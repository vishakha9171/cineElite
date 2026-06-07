import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
// if we want to export any one fx,array or obj from a file and that is not exported default in that 
// file then we need to place that fx or array etc in {} ....o/w if exported default then just without {}
import {assets} from '../assets/assets'

// icons package
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react'
// auth package
import { useClerk, UserButton, useUser } from '@clerk/react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation() 

  const { user } = useUser() // To check if the user is signed in or not
  const { openSignIn } = useClerk() // Opens the Clerk Auth sign-in modal overlay

  // Used to highlight the active tab dynamically
  const isActive = (path) => location.pathname === path

  return (
    // max-md:hidden -> "Apply this style only on screens smaller than 768 pixels(Phones only)."
    // md:On 768px and larger screens (Tablets & Desktops)
    <div className='fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[85%] lg:w-[75%] flex items-center justify-between px-6 py-3 rounded-full backdrop-blur-md bg-black/40 border border-white/10 shadow-2xl transition-all duration-300'>
      
      {/* logo */}
      <Link to='/' className='flex items-center z-50' onClick={() => window.scrollTo(0, 0)}>
        <img src={assets.logo} alt='QuickShow Logo' className='w-28 md:w-32 h-auto object-contain select-none'/>
      </Link>

      {/* links */}
      <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-semibold max-md:text-xl z-50 
        flex flex-col md:flex-row items-center max-md:justify-center gap-8 md:gap-6 lg:gap-8 md:px-6 py-2 max-md:h-screen 
        md:rounded-full max-md:bg-black/95 max-md:text-white md:text-white/80
        md:absolute md:left-1/2 md:-translate-x-1/2
        overflow-hidden transition-[width] duration-500 ease-in-out ${isOpen ? 'max-md:w-full' : 'max-md:w-0'}`}>

        <XIcon 
          className='md:hidden absolute top-6 right-6 w-7 h-7 cursor-pointer hover:scale-110 active:scale-95 transition-transform'
          onClick={() => setIsOpen(false)}
        />
        
        {/* Interactive Links with Hover States */}
        <Link 
          onClick={() => { window.scrollTo(0, 0); setIsOpen(false); }} 
          to='/' 
          className={`hover:text-white transition-colors duration-300 ${isActive('/') ? 'text-white font-bold md:bg-white/10 md:px-4 md:py-1.5 md:rounded-full' : ''}`}
        >
          Home
        </Link>
        <Link 
          onClick={() => { window.scrollTo(0, 0); setIsOpen(false); }} 
          to='/movies' 
          className={`hover:text-white transition-colors duration-300 ${isActive('/movies') ? 'text-white font-bold md:bg-white/10 md:px-4 md:py-1.5 md:rounded-full' : ''}`}
        >
          Movies
        </Link>
        <Link 
          onClick={() => { window.scrollTo(0, 0); setIsOpen(false); }} 
          to='/theaters' 
          className={`hover:text-white transition-colors duration-300 ${isActive('/theaters') ? 'text-white font-bold md:bg-white/10 md:px-4 md:py-1.5 md:rounded-full' : ''}`}
        >
          Theaters
        </Link>
        <Link 
          onClick={() => { window.scrollTo(0, 0); setIsOpen(false); }} 
          to='/releases' 
          className={`hover:text-white transition-colors duration-300 ${isActive('/releases') ? 'text-white font-bold md:bg-white/10 md:px-4 md:py-1.5 md:rounded-full' : ''}`}
        >
          Releases
        </Link>
        <Link 
          onClick={() => { window.scrollTo(0, 0); setIsOpen(false); }} 
          to='/favorite' 
          className={`hover:text-white transition-colors duration-300 ${isActive('/favorite') ? 'text-white font-bold md:bg-white/10 md:px-4 md:py-1.5 md:rounded-full' : ''}`}
        >
          Favorites
        </Link>
      </div>

      <div className='flex items-center gap-4 md:gap-5 z-10'>

        <SearchIcon className='max-md:hidden w-5 h-5 text-white/80 hover:text-white cursor-pointer hover:scale-105 active:scale-95 transition-all' />
        
        {user ? (
          <div className='flex items-center border border-white/10 p-0.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors'>
            <UserButton afterSignOutUrl="/">
              <UserButton.MenuItems>
                <UserButton.Action 
                  label='My Bookings' 
                  labelIcon={<TicketPlus width={15} height={15} />}
                  onClick={() => navigate('/my-bookings')} 
                />
              </UserButton.MenuItems>
            </UserButton> 
          </div>
        ) : (
          <button 
            onClick={openSignIn} 
            className='px-5 py-1.5 sm:px-6 sm:py-2 bg-linear-to-r from-red-600 to-rose-500 hover:from-red-500 hover:to-rose-400 text-white font-semibold text-sm transition-all duration-300 rounded-full shadow-lg hover:shadow-red-500/20 active:scale-95 cursor-pointer'
          >
            Login
          </button>
        )}

        <MenuIcon 
          onClick={() => setIsOpen(!isOpen)} 
          className='md:hidden w-7 h-7 text-white cursor-pointer hover:scale-105 active:scale-95 transition-transform'
        />
      </div>
    </div>
  )
}

export default Navbar