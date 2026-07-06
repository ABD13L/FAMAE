import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ChevronDown, Compass, Heart, FolderOpen, X, ArrowLeft, ArrowRight, User } from 'lucide-react';
import { Member } from './types';
import StarryBackground from './components/StarryBackground';
import MemberCard from './components/MemberCard';
import { UTPLogoSVG, FISCLogoSVG } from './components/AcademicLogos';
import astridImg from './astrid.jpeg';
import abdielImg from './abdiel.jpeg';
import mariaImg from './maria.jpeg';
import fernandoImg from './fernando.jpeg';
import eduardoImg from './eduardo.png';

const INTEGRANTES: Member[] = [
  {
    id: 'm1',
    name: 'Carrillo, Eduardo',
    role: 'Prueba y Calidad',
    initials: 'EC',
    bio: 'me gusta el blender',
    imageUrl: eduardoImg,
    presentation: `Mi nombre es Eduardo Carrillo, soy graduado del Colegio Guillermo Endara Galimany y actualmente curso la carrera de Licenciatura en Ingeniería de Sistemas y Computación.

Me considero una persona que sabe disfrutar plenamente de la vida y de los pequeños pero valiosos momentos que nos ofrece el día a día. Para mí, la música es un elemento indispensable; es la banda sonora que me acompaña y me motiva en cada jornada.

Desde muy pequeño he tenido un fuerte vínculo con el deporte, comenzando con el fútbol, pasando por el baloncesto el cual sigo practicando ocasionalmente y, de manera muy especial en la actualidad, el entrenamiento en el gimnasio. Ir al gimnasio no es solo una rutina física para mí, sino un espacio fundamental que me permite despejar la mente, liberar el estrés y recargar energías.

Fortalezas, Habilidades y Destrezas:
Si tuviera que definir mi mayor fortaleza, es la perseverancia y la resiliencia. Soy alguien que casi nunca se rinde ante las dificultades; cuando me propongo una meta o inicio un proyecto, me comprometo a luchar y dar el máximo esfuerzo hasta el final, buscando siempre soluciones en lugar de rendirme ante los obstáculos.

Hobbies y Pasatiempos:
En mis tiempos libres, me apasiona mantenerme en movimiento. Mis principales pasatiempos están ligados a la actividad física: jugar fútbol, practicar baloncesto y ser constante con mis entrenamientos en el gimnasio.

¿Por qué elegí mi carrera y cuál es mi motivación?:
Mi filosofía de vida es el crecimiento constante: buscar la manera de ser mejor hoy de lo que fui ayer. Elegí estudiar Ingeniería de Sistemas y Computación porque veo en la tecnología el camino para materializar mis ambiciones. Mi meta principal es culminar con éxito mis estudios y obtener mi título profesional. Aspiro a integrarme y aportar valor en una empresa de alto prestigio a nivel global o, idealmente, convertirme en un emprendedor capaz de fundar y liderar mi propia compañía tecnológica.`,
  },
  {
    id: 'm2',
    name: 'Gómez, María',
    role: 'Productor Visual',
    initials: 'MG',
    bio: 'me gusta el blender',
    imageUrl: mariaImg,
    presentation: `Mi nombre completo es María Valentina Gómez Ávila y tengo 20 años y soy estudiante de Ingeniería en Sistemas Computacionales. Me considero una persona responsable, organizada y comprometida con las metas que me propongo. Siempre trato de dar lo mejor de mí en cada actividad y me gusta aprender cosas nuevas que me ayuden a crecer tanto en lo personal como en lo académico.

Disfruto trabajar en equipo, ya que considero que compartir ideas y colaborar con otras personas permite obtener mejores resultados. También soy perseverante y procuro enfrentar los retos con una actitud positiva, buscando siempre mejorar y adquirir nuevas habilidades.

En mi tiempo libre me gusta escuchar música, ver series y pasar tiempo con mi familia y amigos. Mi objetivo es seguir preparándome para desarrollarme como una profesional competente y aportar de manera positiva en los proyectos en los que participe.`,
  },
  {
    id: 'm3',
    name: 'Ortega, Abdiel',
    role: 'Modelador',
    initials: 'AO',
    bio: 'La paciencia esculpe el render.',
    imageUrl: abdielImg,
    presentation: `Mi nombre es Abdiel Ortega, tengo 20 años, soy de Panamá y estudio Ingeniería en Sistemas y Computación en la UTP. Siempre me ha llamado la atención cómo se conecta el código con la parte visual, así que mis expectativas con este curso de Herramientas de Computación Gráfica son aprender a dominar el flujo de modelado, texturizado y animación en Blender y Krita para aplicarlo a mis proyectos personales, además de entender cómo funcionan los gráficos a bajo nivel usando OpenGL.

Fuera de los estudios y la programación, en mi tiempo libre me gusta jugar baloncesto y leer un buen libro.`,
  },
  {
    id: 'm4',
    name: 'Pineda, Fernando',
    role: 'Animador',
    initials: 'FP',
    bio: 'me gusta el blender',
    imageUrl: fernandoImg,
    presentation: `Mi nombre es Fernando Pineda. Tengo 21 años soy de Panamá, Estudio Ingeniería en Sistemas Computacionales y espero que este curso me permita adquirir una base sólida sobre gráficos por computadora y entender cómo se relacionan las distintas herramientas que vamos a utilizar.

Me gustaría aprender los fundamentos de Krita para el dibujo digital, comprender los conceptos básicos de OpenGL para conocer cómo funciona el renderizado gráfico y desarrollar habilidades iniciales en Blender para el modelado y la creación de escenas 3D.

También espero que el curso sea bastante práctico, de modo que pueda aplicar los conocimientos en proyectos que me ayuden a fortalecer mi aprendizaje.`,
  },
  {
    id: 'm5',
    name: 'Rodríguez, Astrid',
    role: 'Texturizador',
    initials: 'AR',
    bio: 'Me gusta el blender',
    imageUrl: astridImg,
    presentation: `Mi nombre es Astrid Rodríguez y tengo 20 años.

Entre mis hobbies están aprender nuevas recetas de cocina y escuchar música.

Actualmente soy de la carrera Ingeniería en Sistemas y Computación.

Me considero una persona divertida, sociable y curiosa.`,
  }
];

export default function App() {
  const [starDensity] = useState<number>(80);
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);

  // Keyboard accessibility to close profile presentation slide
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMemberId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeMemberIndex = INTEGRANTES.findIndex(m => m.id === selectedMemberId);
  const activeMember = activeMemberIndex !== -1 ? INTEGRANTES[activeMemberIndex] : null;

  const handleNextMember = () => {
    if (activeMemberIndex !== -1) {
      const nextIndex = (activeMemberIndex + 1) % INTEGRANTES.length;
      setSelectedMemberId(INTEGRANTES[nextIndex].id);
    }
  };

  const handlePrevMember = () => {
    if (activeMemberIndex !== -1) {
      const prevIndex = (activeMemberIndex - 1 + INTEGRANTES.length) % INTEGRANTES.length;
      setSelectedMemberId(INTEGRANTES[prevIndex].id);
    }
  };

  const handleScrollToContent = () => {
    document.getElementById('integrantes-anchor')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-sans selection:bg-white selection:text-black overflow-x-hidden">
      {/* Twilight Twinkling Star Sky Background */}
      <StarryBackground density={starDensity} />

      {/* Decorative top ambient fog */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none z-10" />

      {/* Aesthetic Floating Status bar (Anti-slop, minimalist, highly functional) */}
      <header className="fixed top-0 inset-x-0 h-16 bg-slate-950/40 backdrop-blur-xl border-b border-white/10 z-50 px-6 md:px-12 transition-all">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Minimal glowing circular icon logo */}
            <div className="w-8 h-8 rounded-full bg-white/95 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <span className="font-display font-bold text-slate-950 text-xs tracking-wider">F</span>
            </div>
            <span className="font-display font-light text-sm tracking-widest text-slate-300 group-hover:text-white transition-colors">
              FAMAE
            </span>
          </div>

          {/* Quick aesthetic navigation pills */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 p-1 rounded-full backdrop-blur-md animate-fade-in">
            <button
              onClick={() => {
                document.getElementById('portada-anchor')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-1.5 rounded-full text-xs font-mono tracking-wider text-slate-400 hover:text-white transition-all duration-300"
            >
              [Portada]
            </button>
            <button
              onClick={() => {
                document.getElementById('famae-anchor')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-1.5 rounded-full text-xs font-mono tracking-wider text-slate-400 hover:text-white transition-all duration-300"
            >
              [FAMAE]
            </button>
            <button
              onClick={() => {
                document.getElementById('integrantes-anchor')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-1.5 rounded-full text-xs font-mono tracking-wider text-slate-400 hover:text-white transition-all duration-300"
            >
              [Integrantes]
            </button>
            <span className="w-[1px] h-4 bg-white/15 mx-1" />
            <a
              href="https://drive.google.com/drive/folders/198T7FTjzb0sylaSr7hPgbPeyNYXLQL4P"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full text-xs font-mono tracking-wider text-amber-300 hover:text-amber-200 hover:bg-amber-500/10 transition-all duration-300 flex items-center gap-1.5"
            >
              <FolderOpen className="w-3.5 h-3.5" />
              <span>[Drive]</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-24">

        {/* SECTION 0: PORTADA ACADÉMICA / PRESENTACIÓN */}
        <section id="portada-anchor" className="min-h-[85vh] flex flex-col justify-center items-center py-12 relative border-b border-white/5 scroll-mt-24">
          
          {/* Academic Cover Page: Logos flanking the main academic headings at the exact same height */}
          <div className="w-full max-w-5xl mx-auto px-4 font-mono">
            <div className="grid grid-cols-1 md:grid-cols-[130px_1fr_130px] items-center gap-6 md:gap-8 text-center">
              
              {/* Left corner: Official UTP Logo */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center md:justify-start"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 hover:scale-105 transition-transform duration-300">
                  <UTPLogoSVG />
                </div>
              </motion.div>

              {/* Center Academic Headings (At the same height/level as the flanking corner logos) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-3.5 text-center flex flex-col justify-center"
              >
                <p className="text-xs sm:text-sm text-slate-400 tracking-[0.25em] uppercase font-bold">
                  Universidad Tecnológica de Panamá
                </p>
                
                <h1 className="font-display font-medium text-base sm:text-lg md:text-xl text-white tracking-[0.25em] uppercase leading-relaxed">
                  UNIVERSIDAD TECNOLÓGICA DE PANAMÁ
                </h1>
                
                <h2 className="font-display font-light text-xs sm:text-sm md:text-base text-purple-300 tracking-wider uppercase leading-relaxed">
                  FACULTAD DE INGENIERÍA DE SISTEMAS COMPUTACIONALES
                </h2>
                
                <p className="text-[10px] sm:text-xs text-slate-400 tracking-[0.25em] uppercase">
                  DEPARTAMENTO DE COMPUTACIÓN Y SIMULACIÓN DE SISTEMAS
                </p>
              </motion.div>

              {/* Right corner: Official FISC Logo */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center md:justify-end"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 hover:scale-105 transition-transform duration-300">
                  <FISCLogoSVG />
                </div>
              </motion.div>

            </div>

            <div className="h-[1px] w-12 bg-white/10 mx-auto my-8" />

            {/* Rest of the Cover Page Details (All centered plain text format) */}
            <div className="max-w-3xl mx-auto text-center space-y-6 font-mono">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="space-y-3"
              >
                <p className="font-sans font-light text-xs sm:text-sm text-slate-300 tracking-wider uppercase">
                  CARRERA LICENCIATURA EN INGENIERÍA DE SISTEMAS Y COMPUTACIÓN
                </p>
                
                <p className="text-xs sm:text-sm text-emerald-400 tracking-[0.2em] uppercase font-semibold">
                  HERRAMIENTAS DE COMPUTACIÓN GRÁFICA
                </p>
              </motion.div>

              <div className="h-[1px] w-12 bg-white/10 mx-auto" />

              {/* Project Title Plain Text */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-1 py-1"
              >
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">
                  Título del Proyecto:
                </p>
                <h3 className="font-display font-light text-2xl sm:text-3xl text-white tracking-[0.2em] uppercase">
                  Portafolio.
                </h3>
              </motion.div>

              <div className="h-[1px] w-12 bg-white/10 mx-auto" />

              {/* Team Members List (Plain Text, centered list) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-3"
              >
                <p className="text-xs text-purple-300 uppercase tracking-[0.18em] font-medium">
                  Integrantes:
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300 tracking-wider">
                  <p>Carrillo, Eduardo <span className="text-slate-500 ml-2">8-1016-2078</span></p>
                  <p>Gómez, María <span className="text-slate-500 ml-2">6-728-474</span></p>
                  <p>Ortega, Abdiel <span className="text-slate-500 ml-2">8-1032-656</span></p>
                  <p>Pineda, Fernando <span className="text-slate-500 ml-2">8-1020-709</span></p>
                  <p>Rodríguez, Astrid <span className="text-slate-500 ml-2">6-727-1960</span></p>
                </div>
              </motion.div>

              <div className="h-[1px] w-12 bg-white/10 mx-auto" />

              {/* Professor & Academic Semester Block (Plain Text, centered) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-6"
              >
                <div className="space-y-1.5">
                  <p className="text-xs text-emerald-300 uppercase tracking-[0.18em] font-medium">
                    Profesor:
                  </p>
                  <p className="text-sm sm:text-base text-slate-200 tracking-wider">
                    Ing. Samuel Jiménez
                  </p>
                </div>

                <div className="h-[1px] w-12 bg-white/10 mx-auto" />

                <div className="space-y-1">
                  <p className="text-xs text-slate-400 tracking-[0.2em] uppercase">
                    SEMESTRE I, 2026
                  </p>
                </div>
              </motion.div>

              {/* Folder styled drive link and explore project button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="pt-6 flex flex-wrap justify-center gap-4"
              >
                <a
                  href="https://drive.google.com/drive/folders/198T7FTjzb0sylaSr7hPgbPeyNYXLQL4P"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 hover:border-amber-500/40 rounded-xl text-amber-300 hover:text-amber-200 font-mono text-[11px] uppercase tracking-widest transition-all duration-300 backdrop-blur-md cursor-pointer"
                >
                  <FolderOpen className="w-4 h-4 text-amber-400" />
                  <span className="font-semibold">Portafolio en Drive</span>
                </a>

                <button
                  onClick={() => {
                    document.getElementById('famae-anchor')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-slate-300 hover:text-white font-mono text-[11px] uppercase tracking-widest transition-all duration-300 backdrop-blur-md cursor-pointer"
                >
                  <span>Explorar FAMAE</span>
                  <ChevronDown className="w-4 h-4 text-slate-400 animate-bounce" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* HERO SECTION: Minimal, majestic, clean display */}
        <section id="famae-anchor" className="min-h-[80vh] flex flex-col justify-center items-center text-center py-16 relative scroll-mt-24">
          
          {/* Subtle cosmic background indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="h-[1px] w-8 bg-white/10" />
            <Sparkles className="w-4 h-4 text-white/80 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-slate-400">
              [Módulo de Presentación]
            </span>
            <span className="h-[1px] w-8 bg-white/10" />
          </motion.div>

          {/* Majestic Heading "FAMAE" */}
          <div className="relative">
            {/* Absolute background blur light directly behind text */}
            <div className="absolute -inset-x-12 top-10 h-12 bg-white/10 blur-3xl rounded-full opacity-40" />
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light text-7xl sm:text-8xl md:text-9xl text-white tracking-[0.18em] uppercase select-none leading-none pl-[0.18em]"
            >
              FAMAE
            </motion.h1>
          </div>

          {/* Subtitle description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-light text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed mt-8 tracking-wide text-center"
          >
            El nombre FAMAE tiene un significado especial para nuestro grupo, ya que está formado por las
            iniciales de cada uno de sus integrantes: Fernando, Abdiel, María, Astrid y Eduardo. Al unir
            estas letras, creamos un nombre corto, fácil de recordar y que representa la participación de todos
            los miembros del equipo por igual. No fue escogido al azar, sino como una forma de identificar
            nuestro trabajo y demostrar que cada integrante forma parte importante del resultado final.
          </motion.p>

          {/* Interactive Scroll Down Prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{ duration: 2, delay: 0.8, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute bottom-8 flex flex-col items-center gap-2 cursor-pointer"
            onClick={handleScrollToContent}
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-500">
              [Desplazar para explorar]
            </span>
            <ChevronDown className="w-4 h-4 text-slate-400 animate-bounce" />
          </motion.div>
        </section>

        {/* SECTION 1: INTEGRANTES (MUST BE FIRST) */}
        <section id="integrantes-anchor" className="scroll-mt-24 py-16 border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <Compass className="w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-widest font-medium text-slate-400">[01 / Integrantes]</span>
              </div>
              <h2 className="font-display text-3xl font-light text-white tracking-tight">
                Integrantes del Equipo
              </h2>
              <p className="font-sans font-light text-sm text-slate-400 max-w-md">
                Conoce a los miembros de FAMAE y sus roles en el desarrollo de este proyecto.
              </p>
            </div>
            <div className="font-mono text-xs text-slate-500 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
              [ESTADO: COMPILADO]
            </div>
          </div>

          {/* Grid Layout for members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTEGRANTES.map((member, index) => (
              <MemberCard
                key={member.id}
                member={member}
                index={index}
                onClick={() => setSelectedMemberId(member.id)}
              />
            ))}
          </div>
        </section>

      </main>

      {/* Slide Presentation Detail Overlay View */}
      <AnimatePresence>
        {activeMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-2xl z-50 flex items-center justify-center p-4 md:p-6"
          >
            {/* Ambient glowing blobs inside modal */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />

            <div className="relative w-full max-w-3xl bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] md:max-h-[85vh] backdrop-blur-md">
              {/* Top border ambient line */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Header inside Modal */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-slate-950/40">
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
                  Presentación de Integrante • {activeMemberIndex + 1} de {INTEGRANTES.length}
                </span>
                <button
                  onClick={() => setSelectedMemberId(null)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
                  title="Cerrar presentación (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Dynamic scrollable presentation slide content */}
              <div className="flex-1 overflow-y-auto px-6 py-8 md:p-10 space-y-8 scrollbar-thin">
                {/* Profile Photo resting elegantly at the top of the details */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-5">
                    <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-purple-500/25 to-emerald-500/25 blur-sm opacity-70" />
                    <div className="w-28 h-28 rounded-full bg-white/10 p-1 backdrop-blur-md border border-white/20 shadow-lg relative">
                      <div className="w-full h-full rounded-full bg-white/95 overflow-hidden flex items-center justify-center">
                        {activeMember.imageUrl ? (
                          <img
                            src={activeMember.imageUrl}
                            alt={`Foto de ${activeMember.name}`}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover select-none"
                          />
                        ) : (
                          <span className="font-display font-medium text-slate-800 text-3xl tracking-wider select-none">
                            {activeMember.initials}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-light text-white tracking-tight">
                    {activeMember.name}
                  </h3>
                  <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
                    <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-semibold">
                      {activeMember.role}
                    </span>
                    <span className="font-sans text-xs text-slate-400 italic">
                      "{activeMember.bio}"
                    </span>
                  </div>
                </div>

                {/* Presentation Text */}
                <div className="max-w-2xl mx-auto">
                  <div className="font-sans font-light text-sm sm:text-base text-slate-300 leading-relaxed space-y-4 bg-white/[0.02] border border-white/5 p-6 rounded-2xl md:p-8 backdrop-blur-sm">
                    {activeMember.presentation ? (
                      activeMember.presentation.split('\n\n').map((paragraph, pIdx) => (
                        <p key={pIdx} className="tracking-wide text-justify">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-slate-500 italic text-center">
                        No hay presentación detallada disponible.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Slider Bottom Navigation Controls */}
              <div className="px-6 py-4 border-t border-white/5 bg-slate-950/40 flex items-center justify-between">
                <button
                  onClick={handlePrevMember}
                  className="flex items-center gap-2 px-3 py-2 sm:px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-slate-300 hover:text-white font-mono text-xs tracking-wider transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Anterior</span>
                </button>

                {/* Progress Indicators/Dots */}
                <div className="flex gap-2.5">
                  {INTEGRANTES.map((m, idx) => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedMemberId(m.id)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === activeMemberIndex
                          ? 'bg-white scale-125 shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                          : 'bg-white/20 hover:bg-white/40'
                      }`}
                      title={`Ver presentación de ${m.name}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNextMember}
                  className="flex items-center gap-2 px-3 py-2 sm:px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-slate-300 hover:text-white font-mono text-xs tracking-wider transition-all cursor-pointer"
                >
                  <span className="hidden sm:inline">Siguiente</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer area */}
      <footer className="relative z-10 bg-slate-950/80 border-t border-white/5 py-8 text-center text-xs font-mono text-slate-500 tracking-wider backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span>© 2026 </span>
            <span className="text-slate-400 font-medium">FAMAE [Académico]</span>
            <span className="text-slate-600"> • [Portafolio]</span>
          </div>
          
          <div className="flex items-center gap-1 text-[11px] text-slate-600">
            <span>[Hecho con]</span>
            <Heart className="w-3 h-3 text-slate-700 hover:text-rose-500/80 transition-colors cursor-pointer" />
            <span>[para el aprendizaje]</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
