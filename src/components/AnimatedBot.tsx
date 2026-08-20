import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Zap, Check, Lightbulb, Database, Filter } from 'lucide-react';

interface AnimatedBotProps {
  step: number; // 0: idle, 1: user typing, 2: searching, 3: assistant typing / eureka, 4: complete
  className?: string;
  onPoke?: () => void;
}

export default function AnimatedBot({ step, className = '', onPoke }: AnimatedBotProps) {
  const [isPoked, setIsPoked] = useState(false);

  const handleBotClick = () => {
    setIsPoked(true);
    if (onPoke) onPoke();
    setTimeout(() => setIsPoked(false), 1200);
  };

  // Determine current mood/state
  const isIdle = step === 0;
  const isListening = step === 1;
  const isSearching = step === 2;
  const isFound = step === 3;
  const isDelivered = step === 4;

  return (
    <div 
      className={`relative flex flex-col items-center justify-center select-none ${className}`}
      onClick={handleBotClick}
    >
      {/* ── Status Pill above Bot ── */}
      <motion.div
        layout
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-3 z-30"
      >
        <AnimatePresence mode="wait">
          {isIdle && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="px-3 py-1 bg-gray-900/85 backdrop-blur-md text-gray-300 rounded-full text-[11px] font-medium flex items-center gap-1.5 shadow-sm border border-gray-700/50"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Ready & Listening</span>
            </motion.div>
          )}

          {isListening && (
            <motion.div
              key="listening"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="px-3 py-1 bg-violet-900/90 backdrop-blur-md text-violet-200 rounded-full text-[11px] font-medium flex items-center gap-1.5 shadow-md border border-violet-500/40"
            >
              <Zap className="w-3 h-3 text-amber-300 animate-bounce" />
              <span>Capturing Intent...</span>
            </motion.div>
          )}

          {isSearching && (
            <motion.div
              key="searching"
              initial={{ opacity: 0, scale: 0.8, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="px-3.5 py-1 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full text-[11px] font-semibold flex items-center gap-1.5 shadow-lg shadow-violet-500/25 border border-violet-400/40 animate-pulse"
            >
              <Search className="w-3 h-3 animate-spin" />
              <span>Searching Catalog (0.04s)</span>
            </motion.div>
          )}

          {isFound && (
            <motion.div
              key="found"
              initial={{ opacity: 0, scale: 0.8, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="px-3.5 py-1 bg-emerald-600 text-white rounded-full text-[11px] font-semibold flex items-center gap-1.5 shadow-lg shadow-emerald-500/25 border border-emerald-400/40"
            >
              <Lightbulb className="w-3 h-3 text-yellow-300 animate-pulse" />
              <span>Match Found!</span>
            </motion.div>
          )}

          {isDelivered && (
            <motion.div
              key="delivered"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="px-3 py-1 bg-vyor-purple text-white rounded-full text-[11px] font-semibold flex items-center gap-1.5 shadow-md shadow-vyor-purple/20 border border-violet-300/30"
            >
              <Check className="w-3 h-3 text-emerald-300" />
              <span>Resolved • 98% Match</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── Holographic Floating Search Tags around Bot during Searching ── */}
      <AnimatePresence>
        {isSearching && (
          <>
            {/* Tag 1: Left Top */}
            <motion.div
              initial={{ opacity: 0, x: -10, y: -5, scale: 0.7 }}
              animate={{ opacity: 1, x: -28, y: -16, scale: 1 }}
              exit={{ opacity: 0, x: -5, scale: 0.6 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-6 z-20 pointer-events-none hidden sm:flex items-center gap-1 px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-indigo-200 text-[10px] font-bold text-indigo-700"
            >
              <Database className="w-3 h-3 text-indigo-500" />
              <span>10,000+ SKUs</span>
            </motion.div>

            {/* Tag 2: Right Top */}
            <motion.div
              initial={{ opacity: 0, x: 10, y: 0, scale: 0.7 }}
              animate={{ opacity: 1, x: 28, y: -5, scale: 1 }}
              exit={{ opacity: 0, x: 5, scale: 0.6 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute right-0 top-12 z-20 pointer-events-none hidden sm:flex items-center gap-1 px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-violet-200 text-[10px] font-bold text-violet-700"
            >
              <Filter className="w-3 h-3 text-violet-500" />
              <span>Silent Switches</span>
            </motion.div>

            {/* Tag 3: Left Bottom */}
            <motion.div
              initial={{ opacity: 0, x: -10, y: 15, scale: 0.7 }}
              animate={{ opacity: 1, x: -22, y: 28, scale: 1 }}
              exit={{ opacity: 0, x: -5, scale: 0.6 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="absolute left-0 bottom-10 z-20 pointer-events-none hidden sm:flex items-center gap-1 px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-emerald-200 text-[10px] font-bold text-emerald-700"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>Budget &lt; $150</span>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Holographic Eureka Lightbulb in State 3 ── */}
      <AnimatePresence>
        {isFound && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.3 }}
            animate={{ opacity: 1, y: -24, scale: 1.1 }}
            exit={{ opacity: 0, y: -30, scale: 0.5 }}
            transition={{ type: 'spring', damping: 10, stiffness: 200 }}
            className="absolute top-2 z-30 pointer-events-none flex flex-col items-center"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-300 flex items-center justify-center text-gray-900 shadow-xl shadow-yellow-400/50 border-2 border-white">
              <Lightbulb className="w-5 h-5 text-gray-900 fill-yellow-100" />
            </div>
            <div className="w-2 h-2 bg-yellow-400 rotate-45 -mt-1" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Robot Body Container with Hover Physics ── */}
      <motion.div
        animate={
          isPoked
            ? { y: [0, -18, 0], rotate: [0, -8, 8, -4, 0], scale: [1, 1.08, 1] }
            : isSearching
            ? { y: [-3, 3, -3], rotate: [-2, 2, -2] }
            : isFound
            ? { y: [-6, 0, -6], rotate: [0, 4, 0] }
            : { y: [0, -8, 0], rotate: [0, 1, 0] }
        }
        transition={{
          y: { duration: isSearching ? 0.8 : 3, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: isSearching ? 0.8 : 4, repeat: Infinity, ease: 'easeInOut' },
          default: { duration: 0.6 }
        }}
        className="relative w-32 h-40 sm:w-40 sm:h-48 flex flex-col items-center justify-center cursor-pointer group"
        title="Click to interact with VyorBot"
      >
        {/* Holographic Radar Ring during Search */}
        {isSearching && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.95, 1.2, 0.95], rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-violet-400/60 pointer-events-none -z-10 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          />
        )}

        {/* Outer Glow Halo */}
        <div
          className={`absolute inset-2 rounded-full blur-2xl transition-all duration-700 pointer-events-none -z-10 ${
            isSearching
              ? 'bg-violet-500/30 scale-125'
              : isFound
              ? 'bg-amber-400/25 scale-125'
              : isDelivered
              ? 'bg-emerald-400/20 scale-110'
              : 'bg-violet-400/15 scale-100'
          }`}
        />

        {/* ── Main SVG Robot Artwork ── */}
        <svg
          viewBox="0 0 200 240"
          className="w-full h-full drop-shadow-xl overflow-visible"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="chassisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#F3F4F8" />
              <stop offset="100%" stopColor="#E2E5EE" />
            </linearGradient>

            <linearGradient id="metalDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2A2D37" />
              <stop offset="100%" stopColor="#12141A" />
            </linearGradient>

            <linearGradient id="visorGlass" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0B0E17" />
              <stop offset="100%" stopColor="#181D2D" />
            </linearGradient>

            <linearGradient id="violetGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>

            <linearGradient id="cyanEyeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#67E8F9" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>

            <linearGradient id="amberEyeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>

            <linearGradient id="emeraldEyeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6EE7B7" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>

            <filter id="eyeGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ── 1. ANTENNA ── */}
          <g>
            {/* Antenna stalk */}
            <rect x="97" y="16" width="6" height="24" rx="3" fill="url(#metalDark)" />
            {/* Antenna connector ring */}
            <rect x="94" y="34" width="12" height="4" rx="2" fill="#7C3AED" />
            {/* Antenna glowing orb */}
            <circle
              cx="100"
              cy="14"
              r="8"
              fill={isSearching ? '#EC4899' : isFound ? '#F59E0B' : '#8B5CF6'}
              className="transition-colors duration-500"
            />
            <circle
              cx="100"
              cy="14"
              r="13"
              fill={isSearching ? '#EC4899' : isFound ? '#F59E0B' : '#8B5CF6'}
              opacity="0.3"
              className={isSearching ? 'animate-ping' : 'animate-pulse'}
            />
            {/* Signal waves when listening/searching */}
            {(isListening || isSearching) && (
              <g stroke="#8B5CF6" strokeWidth="2" fill="none" opacity="0.8">
                <path d="M 86,10 A 16,16 0 0,0 86,18" className="animate-pulse" />
                <path d="M 80,6 A 24,24 0 0,0 80,22" opacity="0.5" />
                <path d="M 114,10 A 16,16 0 0,1 114,18" className="animate-pulse" />
                <path d="M 120,6 A 24,24 0 0,1 120,22" opacity="0.5" />
              </g>
            )}
          </g>

          {/* ── 2. HEAD CHASSIS ── */}
          <g>
            {/* Left Ear Node */}
            <rect x="36" y="70" width="10" height="26" rx="5" fill="url(#metalDark)" />
            <circle cx="41" cy="83" r="3" fill="#8B5CF6" />

            {/* Right Ear Node */}
            <rect x="154" y="70" width="10" height="26" rx="5" fill="url(#metalDark)" />
            <circle cx="159" cy="83" r="3" fill="#8B5CF6" />

            {/* Head Outer Shell */}
            <rect
              x="44"
              y="38"
              width="112"
              height="88"
              rx="40"
              fill="url(#chassisGrad)"
              stroke="#D1D5DB"
              strokeWidth="2"
            />

            {/* Head Gloss Highlight */}
            <path
              d="M 64,44 Q 100,39 136,44"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />

            {/* ── VISOR SCREEN (Black curved glass) ── */}
            <rect
              x="54"
              y="54"
              width="92"
              height="58"
              rx="24"
              fill="url(#visorGlass)"
              stroke="#2E3346"
              strokeWidth="2"
            />

            {/* Visor Glass Reflection */}
            <path
              d="M 60,60 L 110,60 L 96,74 L 60,74 Z"
              fill="#FFFFFF"
              opacity="0.08"
            />

            {/* ── VISOR EYE EXPRESSIONS ── */}
            <g filter="url(#eyeGlow)">
              {/* STATE 0: IDLE (Curious glowing eyes with subtle blink) */}
              {isIdle && (
                <g>
                  <ellipse cx="80" cy="83" rx="9" ry="12" fill="url(#cyanEyeGrad)" />
                  <ellipse cx="120" cy="83" rx="9" ry="12" fill="url(#cyanEyeGrad)" />
                  <circle cx="83" cy="79" r="3.5" fill="#FFFFFF" />
                  <circle cx="123" cy="79" r="3.5" fill="#FFFFFF" />
                </g>
              )}

              {/* STATE 1: LISTENING (Eyes glance down-right at chat input) */}
              {isListening && (
                <g>
                  <ellipse cx="84" cy="86" rx="10" ry="11" fill="url(#cyanEyeGrad)" />
                  <ellipse cx="124" cy="86" rx="10" ry="11" fill="url(#cyanEyeGrad)" />
                  <circle cx="88" cy="88" r="3.5" fill="#FFFFFF" />
                  <circle cx="128" cy="88" r="3.5" fill="#FFFFFF" />
                </g>
              )}

              {/* STATE 2: SEARCHING (Scanning Matrix Radar Sweep) */}
              {isSearching && (
                <g>
                  {/* Radar sweep lines */}
                  <rect x="62" y="80" width="76" height="4" rx="2" fill="#8B5CF6" opacity="0.4" />
                  <rect x="62" y="86" width="76" height="2" rx="1" fill="#8B5CF6" opacity="0.2" />
                  
                  {/* Moving scanning beam */}
                  <rect x="75" y="72" width="22" height="22" rx="11" fill="none" stroke="#EC4899" strokeWidth="2.5" />
                  <line x1="75" y1="83" x2="97" y2="83" stroke="#EC4899" strokeWidth="2" />
                  <line x1="86" y1="72" x2="86" y2="94" stroke="#EC4899" strokeWidth="2" />
                  
                  {/* Target Crosshair & Points */}
                  <circle cx="118" cy="83" r="4" fill="#06B6D4" className="animate-ping" />
                  <circle cx="118" cy="83" r="3" fill="#67E8F9" />
                </g>
              )}

              {/* STATE 3: FOUND / GENERATING (Happy Eureka Arcs ^ ^) */}
              {isFound && (
                <g stroke="url(#amberEyeGrad)" strokeWidth="4.5" strokeLinecap="round" fill="none">
                  {/* Happy Arch Eyes */}
                  <path d="M 72,87 Q 80,74 88,87" />
                  <path d="M 112,87 Q 120,74 128,87" />
                  {/* Cute blush dots */}
                  <circle cx="68" cy="94" r="3.5" fill="#F43F5E" opacity="0.6" stroke="none" />
                  <circle cx="132" cy="94" r="3.5" fill="#F43F5E" opacity="0.6" stroke="none" />
                </g>
              )}

              {/* STATE 4: DELIVERED (Sparkling Star / Beaming Happy Eyes) */}
              {isDelivered && (
                <g fill="url(#emeraldEyeGrad)">
                  <path d="M 80,73 L 83,81 L 91,84 L 83,87 L 80,95 L 77,87 L 69,84 L 77,81 Z" />
                  <path d="M 120,73 L 123,81 L 131,84 L 123,87 L 120,95 L 117,87 L 109,84 L 117,81 Z" />
                  <circle cx="68" cy="94" r="3" fill="#10B981" opacity="0.5" />
                  <circle cx="132" cy="94" r="3" fill="#10B981" opacity="0.5" />
                </g>
              )}
            </g>
          </g>

          {/* ── 3. NECK & TORSO ── */}
          <g>
            {/* Neck Joint */}
            <rect x="88" y="124" width="24" height="10" rx="4" fill="url(#metalDark)" />

            {/* Torso Plate */}
            <path
              d="M 60,132 L 140,132 Q 146,170 128,190 L 72,190 Q 54,170 60,132 Z"
              fill="url(#chassisGrad)"
              stroke="#D1D5DB"
              strokeWidth="2"
            />

            {/* Torso Center Reactor Core */}
            <circle cx="100" cy="160" r="14" fill="url(#metalDark)" />
            <circle
              cx="100"
              cy="160"
              r="9"
              fill={isSearching ? '#EC4899' : isFound ? '#F59E0B' : '#7C3AED'}
              className={isSearching ? 'animate-ping' : 'animate-pulse'}
              opacity="0.85"
            />
            <circle
              cx="100"
              cy="160"
              r="5"
              fill="#FFFFFF"
            />

            {/* ── 4. ARMS & GESTURES ── */}
            {/* Left Arm: Resting or Holding Console */}
            <g transform={isSearching ? "rotate(-10 50 145)" : "rotate(0 50 145)"}>
              <rect x="42" y="140" width="14" height="34" rx="7" fill="url(#chassisGrad)" stroke="#CBD5E1" strokeWidth="1.5" />
              <circle cx="49" cy="176" r="7" fill="url(#metalDark)" />
              {isSearching && (
                <rect x="34" y="174" width="18" height="12" rx="3" fill="#3B82F6" opacity="0.8" />
              )}
            </g>

            {/* Right Arm: Pointing towards chat dialog in state 3/4, or scanning in state 2 */}
            <g
              transform={
                isFound || isDelivered
                  ? "rotate(-40 150 145) translate(8, -8)"
                  : isSearching
                  ? "rotate(-20 150 145) translate(4, -4)"
                  : "rotate(0 150 145)"
              }
              className="transition-transform duration-500 ease-out"
            >
              <rect x="144" y="140" width="14" height="34" rx="7" fill="url(#chassisGrad)" stroke="#CBD5E1" strokeWidth="1.5" />
              <circle cx="151" cy="176" r="7" fill="url(#metalDark)" />
              {/* Extended pointer finger / laser pointer in state 3 & 4 */}
              {(isFound || isDelivered) && (
                <g>
                  <rect x="149" y="180" width="6" height="14" rx="3" fill="#7C3AED" />
                  <circle cx="152" cy="196" r="3" fill="#A78BFA" className="animate-ping" />
                </g>
              )}
            </g>
          </g>

          {/* ── 5. ANTIGRAVITY THRUSTER & ENERGY BASE ── */}
          <g>
            {/* Thruster Emitter Ring */}
            <ellipse cx="100" cy="192" rx="22" ry="7" fill="url(#metalDark)" />
            <ellipse cx="100" cy="194" rx="16" ry="5" fill="#7C3AED" />

            {/* Ion Glow Cone */}
            <path
              d="M 86,195 Q 100,230 100,235 Q 100,230 114,195 Z"
              fill="url(#violetGlowGrad)"
              opacity={isSearching ? 0.75 : 0.45}
              className="animate-pulse"
            />
            <circle cx="100" cy="216" r="3" fill="#FFFFFF" opacity="0.8" className="animate-ping" />
          </g>
        </svg>

        {/* Floating Sparkles when Found */}
        {isFound && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="absolute -top-1 right-2 text-amber-400"
          >
            <Sparkles className="w-5 h-5 fill-amber-300" />
          </motion.div>
        )}
      </motion.div>

      {/* ── Neural Beam Connector to Chat (Right Side) ── */}
      {(isSearching || isFound) && (
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 0.8, width: 32 }}
          className="absolute right-0 top-1/2 -mr-4 hidden md:flex items-center pointer-events-none"
        >
          <div className="h-0.5 w-full bg-gradient-to-r from-violet-500 via-indigo-400 to-transparent animate-pulse" />
        </motion.div>
      )}
    </div>
  );
}
