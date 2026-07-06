import { useMemo } from 'react';
import { Star } from '../types';

interface StarryBackgroundProps {
  density?: number;
}

export default function StarryBackground({ density = 80 }: StarryBackgroundProps) {
  // Generate random background stars on mount with very gentle twinkling speeds (6s to 14s)
  const stars = useMemo(() => {
    const generatedStars: Star[] = [];
    for (let i = 0; i < density; i++) {
      generatedStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.2 + 0.8, // stars between 0.8px and 3.0px
        duration: Math.random() * 8 + 6, // super smooth, slow twinkle between 6s and 14s
        delay: Math.random() * 8, // scattered delays up to 8s
      });
    }
    return generatedStars;
  }, [density]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-slate-950">
      
      {/* 1. Deepest Layer: Nebulae & Ambient Glows (Static) */}
      <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] rounded-full bg-indigo-500/5 blur-[140px]" />
      <div className="absolute bottom-1/3 right-10 w-[45vw] h-[45vw] rounded-full bg-purple-500/5 blur-[120px]" />
      <div className="absolute top-1/2 left-2/3 w-[30vw] h-[30vw] rounded-full bg-blue-500/5 blur-[100px]" />
      
      {/* 2. Constellations Layer (Static) */}
      <div className="absolute inset-0">
        {/* Las Pléyades Constellation */}
        <div className="absolute top-[18%] right-[6%] sm:right-[12%] w-52 h-52 opacity-80">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-blue-500/5 blur-3xl animate-pulse" />
          
          <svg className="absolute inset-0 w-full h-full text-blue-300/25" viewBox="0 0 100 100" fill="none">
            <line x1="28" y1="22" x2="35" y2="30" stroke="currentColor" strokeWidth="0.85" />
            <line x1="35" y1="30" x2="48" y2="45" stroke="currentColor" strokeWidth="0.85" />
            <line x1="48" y1="45" x2="38" y2="55" stroke="currentColor" strokeWidth="0.85" />
            <line x1="38" y1="55" x2="20" y2="38" stroke="currentColor" strokeWidth="0.85" />
            <line x1="20" y1="38" x2="26" y2="35" stroke="currentColor" strokeWidth="0.85" />
            <line x1="26" y1="35" x2="28" y2="22" stroke="currentColor" strokeWidth="0.85" />
            <line x1="48" y1="45" x2="70" y2="52" stroke="currentColor" strokeWidth="0.85" />
            <line x1="70" y1="52" x2="73" y2="40" stroke="currentColor" strokeWidth="0.85" />
          </svg>

          {[
            { id: 1, x: 48, y: 45, size: 5.2, delay: 0.2, duration: 4.5 },
            { id: 2, x: 70, y: 52, size: 4.6, delay: 0.5, duration: 5 },
            { id: 3, x: 73, y: 40, size: 3.8, delay: 0.9, duration: 6 },
            { id: 4, x: 38, y: 55, size: 4.2, delay: 1.2, duration: 4 },
            { id: 5, x: 35, y: 30, size: 4.4, delay: 0.7, duration: 5.5 },
            { id: 6, x: 20, y: 38, size: 4.3, delay: 1.5, duration: 4.2 },
            { id: 7, x: 28, y: 22, size: 4.0, delay: 2.1, duration: 4.8 },
            { id: 8, x: 26, y: 35, size: 3.2, delay: 1.8, duration: 6.2 },
            { id: 9, x: 34, y: 15, size: 3.0, delay: 2.5, duration: 5.8 }
          ].map((s) => (
            <div
              key={`pleiades-${s.id}`}
              className="absolute rounded-full bg-blue-50 animate-twinkle flex items-center justify-center"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                boxShadow: `0 0 ${s.size * 3}px rgba(191, 219, 254, 1), 0 0 ${s.size * 6}px rgba(59, 130, 246, 0.7)`,
                ['--twinkle-duration' as any]: `${s.duration}s`,
                ['--twinkle-delay' as any]: `${s.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Ursa Major Constellation */}
        <div className="absolute top-[14%] left-[6%] sm:left-[12%] w-56 h-40 opacity-75">
          <svg className="absolute inset-0 w-full h-full text-blue-100/20" viewBox="0 0 100 100" fill="none">
            <line x1="90" y1="15" x2="75" y2="22" stroke="currentColor" strokeWidth="0.85" />
            <line x1="75" y1="22" x2="62" y2="32" stroke="currentColor" strokeWidth="0.85" />
            <line x1="62" y1="32" x2="48" y2="40" stroke="currentColor" strokeWidth="0.85" />
            <line x1="48" y1="40" x2="44" y2="65" stroke="currentColor" strokeWidth="0.85" />
            <line x1="44" y1="65" x2="18" y2="70" stroke="currentColor" strokeWidth="0.85" />
            <line x1="18" y1="70" x2="24" y2="45" stroke="currentColor" strokeWidth="0.85" />
            <line x1="24" y1="45" x2="48" y2="40" stroke="currentColor" strokeWidth="0.85" />
          </svg>

          {[
            { id: 1, x: 90, y: 15, size: 4.2, delay: 0.3, duration: 4.2 },
            { id: 2, x: 75, y: 22, size: 4.0, delay: 0.8, duration: 5.1 },
            { id: 3, x: 62, y: 32, size: 4.4, delay: 1.1, duration: 4.6 },
            { id: 4, x: 48, y: 40, size: 4.1, delay: 0.4, duration: 5.8 },
            { id: 5, x: 44, y: 65, size: 4.3, delay: 1.6, duration: 4.1 },
            { id: 6, x: 18, y: 70, size: 4.5, delay: 2.2, duration: 4.9 },
            { id: 7, x: 24, y: 45, size: 4.6, delay: 1.9, duration: 5.3 }
          ].map((s) => (
            <div
              key={`ursamajor-${s.id}`}
              className="absolute rounded-full bg-white animate-twinkle"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                boxShadow: `0 0 ${s.size * 3}px rgba(255, 255, 255, 1), 0 0 ${s.size * 6}px rgba(147, 197, 253, 0.6)`,
                ['--twinkle-duration' as any]: `${s.duration}s`,
                ['--twinkle-delay' as any]: `${s.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Cassiopeia Constellation */}
        <div className="absolute top-[52%] left-[4%] sm:left-[8%] w-44 h-28 opacity-75">
          <svg className="absolute inset-0 w-full h-full text-blue-100/20" viewBox="0 0 100 100" fill="none">
            <line x1="10" y1="20" x2="30" y2="55" stroke="currentColor" strokeWidth="0.85" />
            <line x1="30" y1="55" x2="50" y2="30" stroke="currentColor" strokeWidth="0.85" />
            <line x1="50" y1="30" x2="70" y2="70" stroke="currentColor" strokeWidth="0.85" />
            <line x1="70" y1="70" x2="90" y2="40" stroke="currentColor" strokeWidth="0.85" />
          </svg>

          {[
            { id: 1, x: 10, y: 20, size: 4.2, delay: 0.5, duration: 4.8 },
            { id: 2, x: 30, y: 55, size: 4.4, delay: 1.2, duration: 5.2 },
            { id: 3, x: 50, y: 30, size: 4.1, delay: 0.2, duration: 4.1 },
            { id: 4, x: 70, y: 70, size: 4.5, delay: 2.1, duration: 5.9 },
            { id: 5, x: 90, y: 40, size: 4.0, delay: 1.5, duration: 4.6 }
          ].map((s) => (
            <div
              key={`cassiopeia-${s.id}`}
              className="absolute rounded-full bg-white animate-twinkle"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                boxShadow: `0 0 ${s.size * 3}px rgba(255, 255, 255, 1), 0 0 ${s.size * 6}px rgba(147, 197, 253, 0.6)`,
                ['--twinkle-duration' as any]: `${s.duration}s`,
                ['--twinkle-delay' as any]: `${s.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Orion Constellation */}
        <div className="absolute top-[45%] right-[4%] sm:right-[8%] w-48 h-64 opacity-[0.78]">
          <svg className="absolute inset-0 w-full h-full text-blue-100/20" viewBox="0 0 100 100" fill="none">
            <line x1="25" y1="20" x2="75" y2="25" stroke="currentColor" strokeWidth="0.85" />
            <line x1="25" y1="20" x2="50" y2="12" stroke="currentColor" strokeWidth="0.85" />
            <line x1="50" y1="12" x2="75" y2="25" stroke="currentColor" strokeWidth="0.85" />
            <line x1="25" y1="20" x2="40" y2="48" stroke="currentColor" strokeWidth="0.85" />
            <line x1="75" y1="25" x2="60" y2="52" stroke="currentColor" strokeWidth="0.85" />
            <line x1="40" y1="48" x2="50" y2="50" stroke="currentColor" strokeWidth="0.85" />
            <line x1="50" y1="50" x2="60" y2="52" stroke="currentColor" strokeWidth="0.85" />
            <line x1="40" y1="48" x2="30" y2="80" stroke="currentColor" strokeWidth="0.85" />
            <line x1="60" y1="52" x2="70" y2="82" stroke="currentColor" strokeWidth="0.85" />
            <line x1="30" y1="80" x2="70" y2="82" stroke="currentColor" strokeWidth="0.85" />
          </svg>

          {[
            { id: 1, x: 25, y: 20, size: 5.2, delay: 0.1, duration: 4.0, isRed: true },
            { id: 2, x: 75, y: 25, size: 4.5, delay: 0.9, duration: 5.4 },
            { id: 3, x: 50, y: 12, size: 3.5, delay: 1.4, duration: 6.0 },
            { id: 4, x: 40, y: 48, size: 4.2, delay: 0.6, duration: 4.7 },
            { id: 5, x: 50, y: 50, size: 4.3, delay: 1.1, duration: 5.0 },
            { id: 6, x: 60, y: 52, size: 4.2, delay: 1.7, duration: 4.9 },
            { id: 7, x: 30, y: 80, size: 4.4, delay: 2.3, duration: 5.2 },
            { id: 8, x: 70, y: 82, size: 5.5, delay: 0.3, duration: 4.3, isRigel: true }
          ].map((s) => (
            <div
              key={`orion-${s.id}`}
              className={`absolute rounded-full animate-twinkle ${s.isRed ? 'bg-orange-200' : s.isRigel ? 'bg-blue-50' : 'bg-white'}`}
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                boxShadow: s.isRed 
                  ? `0 0 ${s.size * 4}px rgba(251, 146, 60, 1), 0 0 ${s.size * 7}px rgba(239, 68, 68, 0.6)` 
                  : s.isRigel 
                  ? `0 0 ${s.size * 4}px rgba(191, 219, 254, 1), 0 0 ${s.size * 8}px rgba(59, 130, 246, 0.7)`
                  : `0 0 ${s.size * 3}px rgba(255, 255, 255, 1), 0 0 ${s.size * 6}px rgba(147, 197, 253, 0.6)`,
                ['--twinkle-duration' as any]: `${s.duration}s`,
                ['--twinkle-delay' as any]: `${s.delay}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* 3. Starfield Layer (Static) */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: star.size > 2 ? '0 0 8px rgba(255, 255, 255, 0.8)' : 'none',
              ['--twinkle-duration' as any]: `${star.duration}s`,
              ['--twinkle-delay' as any]: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* 4. Special Glittering / Twinkling Stars (Static) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={`special-${i}`}
            className="absolute animate-twinkle"
            style={{
              left: `${15 + i * 15 + Math.random() * 5}%`,
              top: `${20 + (i % 3) * 25 + Math.random() * 5}%`,
              ['--twinkle-duration' as any]: `${5 + i}s`,
              ['--twinkle-delay' as any]: `${i * 1.5}s`,
            }}
          >
            <svg
              className="w-3.5 h-3.5 text-white/50 drop-shadow-[0_0_8px_rgba(255,255,255,0.85)]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
            </svg>
          </div>
        ))}
      </div>
      
    </div>
  );
}
