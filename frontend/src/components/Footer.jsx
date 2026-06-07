import { Film, ArrowUpRight } from 'lucide-react';
import { IconBrandGithub, IconBrandX, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-zinc-950 text-zinc-400 border-t border-zinc-900/60 px-6 md:px-16 lg:px-24 xl:px-44 pt-16 pb-8 overflow-hidden z-10">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 pb-12 border-b border-zinc-900/60">
        
        <div className="lg:col-span-2 flex flex-col items-start gap-4">
          <div className="flex items-center gap-2 text-white font-bold text-xl tracking-wider uppercase cursor-pointer" onClick={() => handleNav('/')}>
            <div className="p-2 rounded-xl bg-primary text-white shadow-md shadow-primary/20">
              <Film className="w-5 h-5 fill-current" />
            </div>
            Cine<span className="text-primary font-light text-base lowercase tracking-normal">Elite</span>
          </div>
          <p className="max-w-xs text-sm text-zinc-500 leading-relaxed font-normal">
            Your premium destination for immersive cinema tracking, upcoming blockbusters, and instant ticket reservations.
          </p>
        </div> 

        <div className="flex flex-col gap-4">
          <p className="text-white text-xs font-bold uppercase tracking-widest text-zinc-200">Navigation</p>
          <ul className="flex flex-col gap-2.5 text-sm font-medium">
            <li onClick={() => handleNav('/')} className="hover:text-white transition-colors duration-200 cursor-pointer">Home</li>
            <li onClick={() => handleNav('/movies')} className="hover:text-white transition-colors duration-200 cursor-pointer">Movies</li>
            <li onClick={() => handleNav('/theaters')} className="hover:text-white transition-colors duration-200 cursor-pointer">Theaters</li>
            <li onClick={() => handleNav('/releases')} className="hover:text-white transition-colors duration-200 cursor-pointer">Releases</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-white text-xs font-bold uppercase tracking-widest text-zinc-200">Legal & Support</p>
          <ul className="flex flex-col gap-2.5 text-sm font-medium">
            <li onClick={() => handleNav('/privacy')} className="hover:text-white transition-colors duration-200 cursor-pointer">Privacy Policy</li>
            <li onClick={() => handleNav('/terms')} className="hover:text-white transition-colors duration-200 cursor-pointer">Terms of Service</li>
            <li onClick={() => handleNav('/help')} className="hover:text-white transition-colors duration-200 cursor-pointer">Help Center</li>
            <li onClick={() => handleNav('/contact')} className="hover:text-white transition-colors duration-200 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-white text-xs font-bold uppercase tracking-widest text-zinc-200">Connect</p>
          <div className="flex flex-col gap-3">
            {/* rel="noreferrer" :
            Hide the Referral Data (Privacy): It strips away the Referer header from the HTTP request. The destination website will see your visitor arriving,
             but they will have absolutely no idea they came from your app. It will just look like "Direct Traffic" in their analytics.
             Break the Tab Connection (Security):It prevents the new page from accessing your original page through the JavaScript property window.opener. */}
            <a href="https://github.com" target="_blank" rel="noreferrer" className="group flex items-center gap-1.5 text-sm
             hover:text-white transition-colors duration-200">
              Github <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 
              group-hover:-translate-y-0.5 transition-all duration-200 text-zinc-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="group flex items-center gap-1.5 text-sm
             hover:text-white transition-colors duration-200">
              Twitter / X <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 
              group-hover:-translate-y-0.5 transition-all duration-200 text-zinc-500" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group flex items-center gap-1.5 text-sm
             hover:text-white transition-colors duration-200">
              Instagram <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5
               group-hover:-translate-y-0.5 transition-all duration-200 text-zinc-500" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group flex items-center gap-1.5 text-sm
             hover:text-white transition-colors duration-200">
              Linkedin <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5
               group-hover:-translate-y-0.5 transition-all duration-200 text-zinc-500" />
            </a>
          </div>
        </div>

      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-medium text-zinc-600">
        <p>&copy; {currentYear} CineElite. All rights reserved.</p>
        
        <div className="flex items-center gap-4">
          <a href="#" className="p-2 rounded-xl bg-zinc-900/30 border border-zinc-800/40 hover:border-zinc-700/60
           hover:text-white transition-all duration-300">
            <IconBrandGithub className="w-4 h-4" />
          </a>
          <a href="#" className="p-2 rounded-xl bg-zinc-900/30 border border-zinc-800/40 hover:border-zinc-700/60
           hover:text-white transition-all duration-300">
            <IconBrandX className="w-4 h-4" />
          </a>
          <a href="#" className="p-2 rounded-xl bg-zinc-900/30 border border-zinc-800/40 hover:border-zinc-700/60
           hover:text-white transition-all duration-300">
            <IconBrandInstagram className="w-4 h-4" />
          </a>
          <a href="#" className="p-2 rounded-xl bg-zinc-900/30 border border-zinc-800/40 hover:border-zinc-700/60
           hover:text-white transition-all duration-300">
            <IconBrandLinkedin className="w-4 h-4" />
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;