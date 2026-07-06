import { motion } from 'motion/react';
import { Member } from '../types';
import { User } from 'lucide-react';

interface MemberCardProps {
  member: Member;
  index: number;
  onClick?: () => void;
  key?: string;
}

export default function MemberCard({ member, index, onClick }: MemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onClick={onClick}
      className="group relative flex flex-col items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center transition-all duration-300 hover:bg-white/10 cursor-pointer"
    >
      {/* Absolute subtle shimmer gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] to-white/[0.04] rounded-3xl pointer-events-none" />

      {/* Pure white circle with frosted glass ring representing photo placement as per theme specification */}
      <div className="relative mb-6">
        {/* Animated subtle outer ring */}
        <div className="absolute -inset-2 rounded-full border border-white/5 group-hover:border-white/10 transition-all duration-500 group-hover:scale-105" />

        {/* Frosted outer circular container */}
        <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          {/* Pure white inner card disk with shadow or image */}
          <div className="w-18 h-18 rounded-full bg-white/95 shadow-lg flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:bg-white">
            {member.imageUrl ? (
              <img
                src={member.imageUrl}
                alt={`Foto de ${member.name}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
            ) : (
              <>
                {/* Elegant initials in dark text for highest visibility and design fidelity */}
                <span className="font-display font-medium text-slate-800 text-lg tracking-wider select-none group-hover:scale-110 transition-transform duration-300">
                  {member.initials}
                </span>
                
                {/* Faint elegant profile mockup placeholder vector */}
                <div className="absolute bottom-0 w-8 h-5 rounded-t-full bg-slate-900/10 opacity-40 group-hover:opacity-60 transition-opacity" />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Name and Role */}
      <h3 className="font-display text-lg font-medium text-white tracking-tight transition-colors">
        {member.name}
      </h3>
      <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mt-1.5 font-medium">
        {member.role}
      </p>

      {/* Bio / Description Placeholder */}
      {member.bio && (
        <p className="text-xs text-slate-500 font-sans mt-3.5 leading-relaxed max-w-[210px]">
          {member.bio}
        </p>
      )}

      {/* Interactivity indicators */}
      <div className="mt-5 flex items-center gap-1.5 text-[10px] font-mono text-slate-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <User className="w-3 h-3 text-slate-300" />
        <span>Ver Perfil</span>
      </div>
    </motion.div>
  );
}
