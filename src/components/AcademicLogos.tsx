import React, { useState } from 'react';

export const UTPLogoSVG: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Purple Outer Shield */}
        <circle cx="50" cy="50" r="48" fill="#5c1f83" />
        <circle cx="50" cy="50" r="45" stroke="#f1c40f" strokeWidth="1.5" />
        
        {/* Stylized Panama Map in emerald green */}
        <path 
          d="M 18 52 C 22 46, 26 48, 30 50 C 34 52, 38 46, 42 44 C 46 42, 50 48, 54 48 C 58 48, 62 42, 66 45 C 70 48, 74 44, 78 46 C 82 48, 86 52, 90 50" 
          stroke="#10b981" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
          opacity="0.75" 
          fill="none" 
        />
        
        {/* Inner decorative dotted ring */}
        <circle cx="50" cy="50" r="38" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
        
        {/* Classic Bold White Text UTP */}
        <text 
          x="50" 
          y="58" 
          fontFamily="Georgia, serif, system-ui" 
          fontSize="20" 
          fontWeight="bold" 
          fill="#ffffff" 
          textAnchor="middle" 
          letterSpacing="1.2"
          style={{ filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.65))' }}
        >
          UTP
        </text>
        
        {/* Four Golden Stars / Diamonds */}
        <polygon points="50,15 52,18 50,21 48,18" fill="#f1c40f" />
        <polygon points="15,50 18,52 21,50 18,48" fill="#f1c40f" />
        <polygon points="85,50 82,52 79,50 82,48" fill="#f1c40f" />
        <polygon points="50,85 52,82 50,79 48,82" fill="#f1c40f" />
      </svg>
    );
  }

  return (
    <img
      src="https://utp.ac.pa/sites/default/files/documentos/2024/imagen/3_logo_utp_-_cmyk_oficial.jpg"
      alt="Logo UTP Oficial"
      referrerPolicy="no-referrer"
      className={`${className} object-contain rounded-full border border-white/5 filter drop-shadow-[0_0_10px_rgba(168,85,247,0.45)] select-none bg-white`}
      onError={() => setFailed(true)}
    />
  );
};

export const FISCLogoSVG: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Dark Emerald green circular backing */}
        <circle cx="50" cy="50" r="48" fill="#064e3b" />
        <circle cx="50" cy="50" r="45" stroke="#10b981" strokeWidth="1.5" />
        
        {/* Grid / Network simulation lines */}
        <circle cx="50" cy="50" r="34" stroke="#047857" strokeWidth="0.85" strokeDasharray="4 2" />
        <circle cx="50" cy="50" r="22" stroke="#047857" strokeWidth="0.85" strokeDasharray="2 2" />
        <line x1="15" y1="50" x2="85" y2="50" stroke="#047857" strokeWidth="0.75" opacity="0.5" />
        <line x1="50" y1="15" x2="50" y2="85" stroke="#047857" strokeWidth="0.75" opacity="0.5" />
        <line x1="25" y1="25" x2="75" y2="75" stroke="#047857" strokeWidth="0.75" opacity="0.5" />
        <line x1="25" y1="75" x2="75" y2="25" stroke="#047857" strokeWidth="0.75" opacity="0.5" />
        
        {/* Tech Nodes */}
        <circle cx="50" cy="16" r="2" fill="#34d399" />
        <circle cx="50" cy="84" r="2" fill="#34d399" />
        <circle cx="16" cy="50" r="2" fill="#34d399" />
        <circle cx="84" cy="50" r="2" fill="#34d399" />
        <circle cx="50" cy="50" r="3.5" fill="#10b981" />
        
        {/* FISC text in bold sans font */}
        <text 
          x="50" 
          y="55" 
          fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif" 
          fontSize="13" 
          fontWeight="900" 
          fill="#ffffff" 
          textAnchor="middle" 
          letterSpacing="1.8"
          style={{ filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.65))' }}
        >
          FISC
        </text>
      </svg>
    );
  }

  return (
    <img
      src="https://utp.ac.pa/sites/default/files/documentos/2024/imagen/91_logo_5_fisc_oficial_-_rgb.png"
      alt="Logo FISC Oficial"
      referrerPolicy="no-referrer"
      className={`${className} object-contain rounded-full border border-white/5 filter drop-shadow-[0_0_10px_rgba(16,185,129,0.45)] select-none bg-white`}
      onError={() => setFailed(true)}
    />
  );
};
