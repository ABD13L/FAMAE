import { motion } from 'motion/react';
import { AcademicSection } from '../types';
import * as Icons from 'lucide-react';

interface PrototypeSectionProps {
  section: AcademicSection;
  index: number;
  key?: string;
}

export default function PrototypeSection({ section, index }: PrototypeSectionProps) {
  // Dynamically get the Lucide icon
  const IconComponent = Icons[section.iconName] || Icons.HelpCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for responsive glide
      }}
      className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:bg-white/10 overflow-hidden"
    >
      {/* Subtle background glow effect within card */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-white/[0.03] pointer-events-none" />

      {/* Grid Pattern overlay inside the card to represent an empty blueprint state */}
      <div className="absolute inset-0 opacity-[0.015] group-hover:opacity-[0.03] transition-opacity pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative flex flex-col md:flex-row md:items-stretch md:justify-between gap-6">
        {/* Left column: Badge, Title, description metadata */}
        <div className="flex-1 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* Unique Frosted Dot icon representing active mockup state */}
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/35 transition-all duration-300">
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-slate-400 tracking-widest uppercase">
                    Módulo {section.num}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl font-light text-white tracking-tight group-hover:text-white transition-colors duration-300">
                {section.title}
              </h3>
              <div className="h-px w-32 bg-white/10 group-hover:w-48 transition-all duration-500" />
              <p className="text-sm text-slate-400 font-sans font-light max-w-xl leading-relaxed">
                {section.subtitle}
              </p>
            </div>
          </div>

          <div className="pt-2">
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">
              Estado: Prototipo Limpio
            </span>
          </div>
        </div>

        {/* Right column: High-fidelity minimalist blueprint layout representations (The requested empty "no content" state) */}
        <div className="w-full md:w-80 shrink-0 rounded-2xl bg-slate-950/40 border border-white/5 p-5 relative overflow-hidden flex flex-col justify-center">
          {/* Subtle glowing anchor point in top right */}
          <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/50 transition-colors" />

          {/* Dotted schematic lines represent content awaiting uploading */}
          <div className="space-y-3.5">
            {/* Skeletal layout header */}
            <div className="flex items-center justify-between">
              <div className="h-2.5 w-24 bg-white/10 rounded group-hover:bg-white/20 transition-colors" />
              <div className="h-2 w-10 bg-white/5 rounded" />
            </div>

            {/* Skeletal text lines */}
            <div className="space-y-2">
              <div className="h-1.5 w-full bg-white/5 rounded" />
              <div className="h-1.5 w-5/6 bg-white/5 rounded" />
              <div className="h-1.5 w-4/6 bg-white/5 rounded" />
            </div>

            {/* Simulated file upload node or outline placeholder */}
            <div className="border border-dashed border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center bg-white/[0.02]">
              <div className="w-6 h-6 rounded-full bg-white/10 border border-white/10 flex items-center justify-center mb-1.5">
                <Icons.Plus className="w-3 h-3 text-white/60 group-hover:text-white transition-colors" />
              </div>
              <span className="font-mono text-[9px] text-slate-400 tracking-wider uppercase group-hover:text-slate-200 transition-colors">
                Sin Contenido
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic absolute positioning label */}
      <div className="absolute bottom-3 right-6 hidden md:block">
        <span className="font-mono text-[8px] text-slate-600 group-hover:text-slate-400 transition-colors uppercase tracking-[0.2em]">
          SEC_MOCK_0{index + 1}
        </span>
      </div>
    </motion.div>
  );
}
