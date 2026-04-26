import React, { useRef } from "react";
import { motion } from "framer-motion";
import { HeartPulse, Terminal, Activity, CheckCircle2, Puzzle, Shirt, BoxSelect, Fingerprint } from "lucide-react";
import InfinityDemo from './InfinityDemo';

interface Product {
    id: string;
    title: string;
    description: string;
    features?: string[];
    icon: React.ComponentType<{ className?: string }>;
    span: string;
    delay: number;
    theme: string;
    glowColor: string;
    isComingSoon?: boolean;
}

const products = [
    {
        id: "infinity",
        title: "Infinity (Plugin SDK)",
        description: "Develop, train, and deploy custom neural architectures directly into our ecosystem.",
        features: [
            "Access multi-modal underlying models natively",
            "Auto-scaling infrastructure for infinite scale",
            "Monetize and distribute to the community"
        ],
        icon: Puzzle,
        span: "md:col-span-3",
        delay: 0.1,
        theme: "indigo",
        glowColor: "rgba(99,102,241,0.12)"
    },
    {
        id: "tryon",
        title: "AI Virtual Try-On",
        description: "Achieve hyper-realistic photorealistic garment mapping for e-commerce.",
        features: [
            "Real-time fabric drape simulation",
            "Lighting and shadow harmonization",
            "Sub-second inference times"
        ],
        icon: Shirt,
        span: "md:col-span-2",
        delay: 0.2,
        theme: "pink",
        glowColor: "rgba(236,72,153,0.12)"
    },
    {
        id: "stress",
        title: "Stress Detection",
        description: "Analyze micro-expressions and voice frequencies for real-time detection.",
        icon: Activity,
        span: "md:col-span-1",
        delay: 0.3,
        theme: "vyor",
        glowColor: "rgba(124,58,237,0.12)"
    },
    {
        id: "omni",
        title: "Omni-Engine",
        description: "A centralized command module for asynchronous orchestration.",
        isComingSoon: true,
        icon: BoxSelect,
        span: "md:col-span-1",
        delay: 0.4,
        theme: "blue",
        glowColor: "rgba(59,130,246,0.12)"
    },
    {
        id: "api",
        title: "Developer API",
        description: "Robust, zero-latency RESTful and GraphQL endpoints.",
        features: [
            "99.99% Guaranteed Uptime SLAs",
            "Edge caching and global CDN",
        ],
        icon: Fingerprint,
        span: "md:col-span-2",
        delay: 0.5,
        theme: "yellow",
        glowColor: "rgba(234,179,8,0.12)"
    }
];



function TryOnDemo() {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-gray-50">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />

            <div className="relative w-48 h-64 sm:w-56 sm:h-72 rounded-xl overflow-hidden border border-gray-200 shadow-xl group">
                <img
                    src="https://40e507dd0272b7bb46d376a326e6cb3c.cdn.bubble.io/cdn-cgi/image/w=512,h=512,f=auto,dpr=1.25,fit=contain/f1774108885173x302146137275330900/Asset%205010.png"
                    alt="Fashion Model"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-vyor-purple/20 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]">
                    <svg viewBox="0 0 100 100" className="w-full h-full opacity-40 stroke-vyor-purple stroke-[0.5] fill-none" preserveAspectRatio="none">
                        {Array.from({ length: 15 }).map((_, i) => (
                            <line key={`h-${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} className="hidden group-hover:block" />
                        ))}
                        {Array.from({ length: 10 }).map((_, i) => (
                            <line key={`v-${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100" className="hidden group-hover:block" />
                        ))}
                    </svg>
                </div>

                <motion.div
                    className="absolute left-0 right-0 h-0.5 bg-vyor-violet shadow-[0_0_15px_3px_rgba(124,92,252,0.5)] z-20"
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />

                <motion.div
                    className="absolute inset-x-0 h-24 bg-gradient-to-t from-vyor-purple/20 to-transparent z-10 pointers-events-none mix-blend-overlay"
                    animate={{ top: ['-24%', '100%', '-24%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />

                <motion.div className="absolute top-[35%] left-[40%] w-2 h-2 rounded-full border border-vyor-purple bg-vyor-purple/30 shadow-[0_0_10px_rgba(124,92,252,0.4)]" animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
                <motion.div className="absolute top-[60%] right-[30%] w-2 h-2 rounded-full border border-vyor-purple bg-vyor-purple/30 shadow-[0_0_10px_rgba(124,92,252,0.4)]" animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }} />
            </div>

            <motion.div
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-md border border-gray-100 rounded px-2.5 py-1.5 flex items-center gap-2 shadow-sm z-30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0.8, 1, 1, 0.8], scale: [0.95, 1, 1, 0.95] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
                <div className="w-1.5 h-1.5 bg-vyor-violet rounded-full animate-pulse shadow-[0_0_5px_rgba(124,92,252,0.5)]" />
                <span className="text-[10px] uppercase text-gray-800 font-mono tracking-wider font-bold">Scanning Fabric</span>
            </motion.div>

            <div className="absolute bottom-6 left-6 right-6 flex justify-between gap-2 overflow-hidden px-1">
                <motion.div className="bg-white/90 backdrop-blur-md px-2 py-1 rounded text-[8px] sm:text-[9px] border border-gray-100 font-mono text-gray-800 shadow-sm" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity, delay: 0 }}>MATCH: 98.4%</motion.div>
                <motion.div className="bg-white/90 backdrop-blur-md px-2 py-1 rounded text-[8px] sm:text-[9px] border border-gray-100 font-mono text-vyor-violet shadow-sm font-bold" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }}>[GARMENT_ID_X7]</motion.div>
            </div>
        </div>
    );
}

function StressDemo() {
    const [bpm, setBpm] = React.useState(72);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setBpm(prev => {
                const change = Math.floor(Math.random() * 5) - 2;
                return Math.max(65, Math.min(85, prev + change));
            });
        }, 1200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6 gap-4 bg-white">
            <div className="w-full flex justify-between px-2 text-[10px] md:text-xs uppercase text-gray-500 font-mono items-center font-bold">
                <span className="flex items-center gap-2">
                    <HeartPulse className="w-3.5 h-3.5 text-vyor-purple" />
                    Live Biometrics
                </span>
                <span className="text-vyor-violet font-bold bg-violet-50 px-2 py-0.5 rounded border border-violet-100">
                    <motion.span key={bpm} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>{bpm}</motion.span> BPM
                </span>
            </div>
            <div className="w-full h-24 border border-gray-200 bg-gray-50 rounded-[16px] flex items-center overflow-hidden relative shadow-inner">
                <motion.div
                    className="absolute inset-y-0 w-[200%] flex"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 2, repeat: Infinity }}
                >
                    {/* Animated EKG SVG */}
                    <svg viewBox="0 0 400 100" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                        <motion.path
                            d="M 0,50 L 50,50 L 60,30 L 70,70 L 80,10 L 90,90 L 100,40 L 110,50 L 200,50 L 250,50 L 260,30 L 270,70 L 280,10 L 290,90 L 300,40 L 310,50 L 400,50"
                            fill="none"
                            stroke="url(#ekg-gradient)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        />
                        <defs>
                            <linearGradient id="ekg-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0" />
                                <stop offset="50%" stopColor="#7c5cfc" stopOpacity="1" />
                                <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 pointer-events-none" />

                <div className="absolute bottom-2 left-4 flex gap-1.5 items-center z-10 bg-white/80 px-2 py-1 rounded backdrop-blur-sm border border-gray-100 shadow-sm">
                    <div className="flex gap-1">
                        <motion.div className="w-1.5 h-3 bg-vyor-purple/40 rounded-sm" animate={{ height: [12, 16, 12] }} transition={{ duration: 1, repeat: Infinity }} />
                        <motion.div className="w-1.5 h-4 bg-vyor-purple/60 rounded-sm" animate={{ height: [16, 24, 16] }} transition={{ duration: 1.2, repeat: Infinity }} />
                        <motion.div className="w-1.5 h-2 bg-vyor-violet rounded-sm shadow-[0_0_8px_rgba(124,92,252,0.4)]" animate={{ height: [8, 12, 8] }} transition={{ duration: 0.8, repeat: Infinity }} />
                    </div>
                    <span className="text-[9px] uppercase tracking-widest text-gray-800 ml-1 font-bold">Optimal</span>
                </div>
            </div>
        </div>
    );
}

function OmniDemo() {
    const circuitPaths = [
        "M 50 50 L 50 20 L 10 20",
        "M 50 50 L 80 50 L 80 10",
        "M 50 50 L 50 80 L 90 80",
        "M 50 50 L 20 50 L 20 90",
    ];

    return (
        <div className="relative w-full h-full flex items-center justify-center group overflow-hidden bg-gray-50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_100%)] opacity-80" />

            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                <defs>
                    <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>

                {circuitPaths.map((path, i) => (
                    <g key={i}>
                        <path
                            d={path}
                            stroke="rgba(59, 130, 246, 0.15)"
                            strokeWidth="0.5"
                            fill="none"
                        />

                        <motion.path
                            d={path}
                            stroke="url(#pulseGradient)"
                            strokeWidth="1"
                            fill="none"
                            strokeDasharray="20 80"
                            animate={{ strokeDashoffset: [100, 0] }}
                            transition={{
                                duration: 3 + i * 0.5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />

                        <motion.circle
                            cx={path.split(' ')[4]}
                            cy={path.split(' ')[5]}
                            r="0.8"
                            fill="#3b82f6"
                            initial={{ opacity: 0.1 }}
                            animate={{ opacity: [0.1, 0.8, 0.1], scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                        />
                    </g>
                ))}
            </svg>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                <motion.div
                    className="w-48 h-48 border border-blue-500/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <motion.div
                className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur-xl border border-blue-200 rounded-2xl flex items-center justify-center z-20 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                animate={{
                    y: [0, -4, 0],
                    boxShadow: [
                        "0 0 20px rgba(59,130,246,0.1)",
                        "0 0 40px rgba(59,130,246,0.2)",
                        "0 0 20px rgba(59,130,246,0.1)"
                    ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="absolute inset-0 bg-blue-50 rounded-2xl blur-md" />
                <BoxSelect className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 relative z-10" />

                <motion.div
                    className="absolute inset-0 border-2 border-blue-200 rounded-2xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                <motion.div
                    className="absolute inset-2 bg-blue-100 rounded-lg"
                    animate={{ opacity: [0.1, 0.6, 0.1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.div>

            <div className="absolute top-4 right-4 flex flex-col items-end gap-1 opacity-60 font-mono text-[8px] text-blue-600 font-bold">
                <div className="flex items-center gap-1">
                    <span className="w-1 h-1 bg-blue-600 rounded-full animate-pulse" />
                    OMNI_LINK: ESTABLISHED
                </div>
                <div className="text-[6px] opacity-80">PULSE: 72 BPM</div>
            </div>
        </div>
    );
}

function ApiDemo() {
    const [line, setLine] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setLine(l => (l >= 4 ? 0 : l + 1));
        }, 1200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-gray-50 overflow-hidden p-6 gap-6">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.02)_0%,transparent_70%)]" />

            <div className="w-full max-w-[280px] bg-black border border-gray-800 rounded-xl overflow-hidden font-mono text-[10px] shadow-2xl z-20 hover:border-gray-700 transition-colors relative">
                <div className="flex items-center justify-between px-3 py-2 border-b border-gray-800 bg-gray-900">
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/90" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/90" />
                        <div className="w-2 h-2 rounded-full bg-green-500/90" />
                    </div>
                    <div className="text-gray-400 flex items-center gap-1.5 sm:gap-2">
                        <Terminal className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        vyor-api.js
                    </div>
                </div>
                <div className="p-4 sm:p-5 text-gray-300 leading-relaxed min-h-[140px] sm:min-h-[160px] relative">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2">
                        <span className="text-pink-400">import</span> {'{ Vyor }'} <span className="text-pink-400">from</span> <span className="text-blue-400">'@vyor/sdk'</span>;
                    </motion.div>

                    {line >= 1 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4">
                            <span className="text-pink-400">const</span> vyor = <span className="text-pink-400">new</span> <span className="text-yellow-200">Vyor</span>('vy_abc123');
                        </motion.div>
                    )}

                    {line >= 2 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2 hidden sm:block">
                            <span className="text-gray-500">// Initialize instant execution</span>
                        </motion.div>
                    )}

                    {line >= 3 && (
                        <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}>
                            <div><span className="text-pink-400">const</span> result = <span className="text-pink-400">await</span> vyor.<span className="text-green-400">run</span>({'{'}</div>
                            <div className="pl-4">model: <span className="text-blue-400">'vision-v2'</span>,</div>
                            <div className="pl-4">image: imgBuffer</div>
                            <div>{'}'});</div>
                        </motion.div>
                    )}

                    {line >= 4 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            className="absolute bottom-4 right-4 bg-gray-800 border border-gray-700 backdrop-blur-md text-gray-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg flex items-center gap-1.5 sm:gap-2 font-mono text-[9px] sm:text-[10px] shadow-lg"
                        >
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                            <span>Executed in 45ms</span>
                        </motion.div>
                    )}
                </div>
            </div>
            <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-indigo-500/5 blur-[40px] rounded-full mix-blend-multiply" />
        </div>
    );
}

function ProductVisual({ id }: { id: string }) {
    if (id === "infinity") return <InfinityDemo />;
    if (id === "tryon") return <TryOnDemo />;
    if (id === "stress") return <StressDemo />;
    if (id === "omni") return <OmniDemo />;
    if (id === "api") return <ApiDemo />;
    return null;
}

const themeColors: Record<string, { border: string, hoverBorder: string, glow: string, accent: string }> = {
    indigo: { border: 'border-indigo-100/50', hoverBorder: 'group-hover:border-indigo-400', glow: 'shadow-[0_0_30px_rgba(99,102,241,0.12)]', accent: 'text-indigo-600' },
    pink: { border: 'border-pink-100/50', hoverBorder: 'group-hover:border-pink-400', glow: 'shadow-[0_0_30px_rgba(236,72,153,0.12)]', accent: 'text-pink-600' },
    vyor: { border: 'border-vyor-purple/10', hoverBorder: 'group-hover:border-vyor-purple', glow: 'shadow-[0_0_30px_rgba(124,58,237,0.12)]', accent: 'text-vyor-purple' },
    blue: { border: 'border-blue-100/50', hoverBorder: 'group-hover:border-blue-400', glow: 'shadow-[0_0_30px_rgba(59,130,246,0.12)]', accent: 'text-blue-600' },
    yellow: { border: 'border-yellow-100/50', hoverBorder: 'group-hover:border-yellow-400', glow: 'shadow-[0_0_30px_rgba(234,179,8,0.12)]', accent: 'text-yellow-600' },
};

function ProductCard({ product }: { product: Product }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    const isWide = product.span === "md:col-span-2" || product.span === "md:col-span-3";
    const isFullWidth = product.span === "md:col-span-3";
    const theme = themeColors[product.theme] || themeColors.vyor;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || !glowRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        glowRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, ${product.glowColor || 'rgba(0,0,0,0.04)'}, transparent 50%)`;
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: product.delay * 0.3, duration: 0.4, ease: "easeOut" }}
            className={`group relative rounded-2xl md:rounded-[20px] bg-white overflow-hidden flex flex-col ${isWide ? 'md:flex-row' : ''} ${product.span} ${isFullWidth ? 'md:h-[460px]' : isWide ? 'md:h-[420px]' : ''} transition-all duration-500 hover:shadow-xl ${theme.border} ${theme.hoverBorder} ${theme.glow} border shadow-sm`}
        >
            <div
                ref={glowRef}
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 md:group-hover:opacity-100 z-20 rounded-[20px] hidden md:block"
            />

            {product.isComingSoon && (
                <div className="absolute top-4 right-4 md:top-6 md:right-6 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-black/90 backdrop-blur-md text-white text-[9px] md:text-[10px] font-bold border border-gray-800 z-20 uppercase tracking-widest shadow-lg">
                    Coming Soon
                </div>
            )}

            <div className={`p-5 md:p-8 flex flex-col z-10 flex-1 ${isWide ? 'md:w-[45%] md:flex-none' : 'w-full'} justify-start relative bg-white`}>
                <div className="flex flex-col h-full justify-start">
                    <div className="flex items-center gap-2.5 md:gap-3 mb-3 md:mb-4">
                        <div className={`p-2 md:p-2.5 rounded-lg md:rounded-xl bg-gray-50 border border-gray-100 shadow-inner group-hover:bg-violet-50 transition-all duration-300`}>
                            <product.icon className={`w-4 h-4 md:w-7 md:h-7 ${theme.accent} transition-colors duration-300`} />
                        </div>
                        <h3 className={`${isFullWidth ? 'text-lg sm:text-xl md:text-3xl' : isWide ? 'text-lg sm:text-xl md:text-[26px]' : 'text-lg md:text-2xl'} font-bold tracking-tight text-gray-900`}>{product.title}</h3>
                    </div>
                    <p className={`${isFullWidth ? 'text-[13px] sm:text-[14px] md:text-base' : 'text-[13px] md:text-[14px]'} text-gray-500 leading-relaxed mb-4 md:mb-6 ${isFullWidth ? 'max-w-xl' : 'max-w-sm'}`}>{product.description}</p>
                </div>

                {product.features && (
                    <ul className="space-y-2 md:space-y-2.5 mt-auto mb-1">
                        {product.features.map((feature, idx) => (
                            <li key={idx} className={`flex items-center gap-2 md:gap-2.5 text-[12px] sm:text-[13px] md:text-[14px] font-medium text-gray-600 transition-colors duration-300`}>
                                <span className={`rounded-full bg-vyor-purple group-hover:bg-vyor-violet transition-colors duration-300 shrink-0 w-1 h-1 md:w-1.5 md:h-1.5`} />
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className={`relative flex items-center justify-center bg-gray-50 overflow-hidden transition-colors duration-500 ${isWide
                ? `w-full md:w-[55%] border-t md:border-t-0 md:border-l border-gray-100 md:flex-none ${isFullWidth ? 'h-[300px] sm:h-[320px] md:h-auto md:flex-1' : 'flex-1 min-h-[220px] md:min-h-[260px]'}`
                : `w-full h-[200px] md:h-auto md:min-h-[220px] border-t border-gray-100`
                }`}>
                <ProductVisual id={product.id} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/20 pointer-events-none" />
            </div>
        </motion.div>
    );
}

export default function ProductsGrid() {
    return (
        <section id="products" className="py-12 sm:py-16 md:py-24 relative z-10 overflow-hidden bg-white">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(124,92,252,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 md:mb-24 gap-4 sm:gap-8"
                >
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2.5 md:gap-3 mb-4 md:mb-6">
                            <div className="h-px w-6 md:w-8 bg-vyor-purple" />
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-vyor-violet">Intelligence Ecosystem</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter text-black mb-3 sm:mb-6 leading-tight">
                            Build scalable modular applications with Vyor AI Engine.
                        </h2>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-[1240px] mx-auto">
                    {products.map((product, i) => (
                        <ProductCard key={i} product={product as Product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
