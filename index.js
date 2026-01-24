<div className="relative h-screen w-full flex flex-col items-center justify-center bg-zinc-950 overflow-hidden">
  {/* The Background Effect */}
  <PixelTrail
    pixelSize={24}
    fadeDuration={500}
    pixelClassName="bg-zinc-800" // Subtle trail color
    className="absolute inset-0 z-0"
  />

  {/* The Content (Z-Index 10 to sit ON TOP of pixels) */}
  <div className="z-10 text-center space-y-6 pointer-events-none">
    <h1 className="text-6xl font-bold text-zinc-100 tracking-tighter">Irfan Salim</h1>
    <p className="text-zinc-400 text-xl">Data Analyst</p>
    
    {/* Enable pointer events for the button */}
    <div className="pointer-events-auto mt-8">
      <ParticleButton className="bg-white text-black hover:bg-zinc-200">
        Download Resume
      </ParticleButton>
    </div>
  </div>
</div>


// Sources:
// 1. https://github.com/MIst3rM/LaunchPoint-Frontend