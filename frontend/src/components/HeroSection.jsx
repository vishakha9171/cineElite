import {assets} from '../assets/assets';
import { Play, Info, CalendarIcon, ClockIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate();

  return (

    // The Gradient Mask (absolute inset-0...): Added a clever double-sided gradient overlay. On mobile devices,
    //  it fades beautifully from the bottom up (bg-gradient-to-t). On desktop displays, it fades gracefully from left to right (md:bg-gradient-to-r).
    //  This anchors your layout safely in dark tones so white text stays incredibly crisp over any image background color.
    <div className='relative w-full h-screen flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-16 lg:px-36 
    bg-[url("/backgroundImage.png")] bg-cover bg-center'>
      
      <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent md:bg-linear-to-r md:from-zinc-950/90
       md:via-zinc-950/40 md:to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-start gap-5 max-w-2xl">
        
        <img 
          src={assets.marvelLogo} 
          alt="Marvel Studios" 
          className="h-7 md:h-9 object-contain object-left drop-shadow-md"
        />
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase drop-shadow-lg">
          Avengers: <span className="text-zinc-200 font-medium block sm:inline">Doomsday</span>
        </h1>
        
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm font-medium tracking-wide text-zinc-300">
          <span className="bg-zinc-800/80 px-2.5 py-0.5 rounded border border-zinc-700">Action</span>
          <span className="bg-zinc-800/80 px-2.5 py-0.5 rounded border border-zinc-700">Adventure</span>
          <span className="bg-zinc-800/80 px-2.5 py-0.5 rounded border border-zinc-700">Sci-Fi</span>
          
          <div className="flex items-center gap-1.5 ml-1">
            <CalendarIcon className="w-4 h-4 text-zinc-400" /> 
            <span>2026</span>
          </div>
          
          <div className="flex items-center gap-1.5">
            <ClockIcon className="w-4 h-4 text-zinc-400" /> 
            <span>2h 30m</span>
          </div>
        </div>
        
        <p className="max-w-lg text-sm md:text-base text-zinc-400 leading-relaxed font-normal drop-shadow">
          The Doomsday subtitle, the return of the Russo brothers, and the casting of Downey as Doctor Doom 
          were all announced at Marvel Studios' SDCC panel in July 2024. The announcement involved multiple 
          people dressed as Doom appearing on stage, including Downey, who unmasked himself to reveal his 
          casting to the audience.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 mt-2 w-full sm:w-auto">
          <button 
            onClick={() => navigate('/movies')} 
            className="flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold bg-primary hover:bg-primary-dull
            text-white transition-all duration-300 transform hover:scale-[1.02] rounded-xl shadow-lg shadow-primary/20 cursor-pointer w-full sm:w-auto"
          >
            <Play className="w-4 h-4 fill-current" />
            Explore Movies
          </button>

          <button 
            onClick={() => navigate('/movies/:id')}
            className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold bg-zinc-100/10 hover:bg-zinc-100/20 text-white border
             border-zinc-500/30 backdrop-blur-md transition-all duration-300 transform hover:scale-[1.02] rounded-xl cursor-pointer w-full sm:w-auto"
          >
            <Info className="w-4 h-4" />
            More Info
          </button>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;