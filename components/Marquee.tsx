"use client";


export function Marquee() {
    const texts = [
        "AI Interaction Layer",
        "Contextual Intelligence",
        "Real-time Automation",
        "Sub-50ms Inference",
        "Neural Workflow SDK",
        "Virtual Enterprise Studio",
        "Emotion Analytics Engine",
    ];

    return (
        <div className="py-6 md:py-8 border-y border-white/5 bg-white/[0.02] overflow-hidden whitespace-nowrap flex relative">
            {/* Edge fades using the exact background color of the hero/main */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#0D1B2A] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#0D1B2A] to-transparent z-10 pointer-events-none" />

            <div className="flex gap-8 items-center px-4 will-change-transform animate-[marquee_40s_linear_infinite]">
                {/* 4 loops to guarantee screens of any width avoid cutoffs before repetition */}
                {[...texts, ...texts, ...texts, ...texts].map((text, i) => (
                    <div key={i} className="flex items-center gap-8">
                        <span className="text-sm md:text-base font-semibold text-neutral-500 uppercase tracking-[0.2em]">
                            {text}
                        </span>
                        <span className="text-vyor-purple/50 text-xs md:text-sm">✦</span>
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
}

