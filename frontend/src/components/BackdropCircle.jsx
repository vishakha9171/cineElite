const AuroraBackdrop = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-rose-600/20 blur-[130px] 
      mix-blend-screen animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-12 left-10 w-[400px] h-[400px] rounded-full bg-purple-600/15 blur-[120px] 
      mix-blend-screen" />
    </div>
  );
};

export default AuroraBackdrop;