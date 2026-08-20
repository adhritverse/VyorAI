import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCheck, ShoppingBag, ArrowUpRight, Search, Star, ShieldCheck } from 'lucide-react';

export interface ScenarioData {
  id?: string;
  userText: string;
  assistantText: string;
  typingDurationMs?: number;
  searchDurationMs?: number;
  foundDurationMs?: number;
  product: {
    name: string;
    price: string;
    originalPrice: string;
    discount: string;
    tag: string;
    rating: string;
    imageBg: string;
  };
}

export const SCENARIOS: Record<'juice' | 'fashion' | 'gadgets', ScenarioData> = {
  juice: {
    id: 'juice',
    userText: 'Cold press slow juicer for fresh fruit juice under ₹2,999.',
    assistantText: 'Top pick! Wonderchef Nutri-Blend Cold Press Slow Juicer with 100% fruit pulp extraction at ₹2,499.',
    typingDurationMs: 4000,
    searchDurationMs: 4000,
    foundDurationMs: 4000,
    product: {
      name: 'Wonderchef Nutri-Blend Slow Juicer',
      price: '₹2,499',
      originalPrice: '₹5,999',
      discount: '58% off',
      tag: 'Cold Press • 100% Yield',
      rating: '4.9',
      imageBg: 'from-orange-500 to-amber-600'
    }
  },
  fashion: {
    id: 'fashion',
    userText: 'Chikankari Anarkali Kurti in lavender under ₹1,999 for Diwali.',
    assistantText: 'Mil gaya! Ada Lucknowi Pure Cotton Anarkali is 50% off at ₹1,499 with 1-Day delivery.',
    typingDurationMs: 4000,
    searchDurationMs: 4000,
    foundDurationMs: 4000,
    product: {
      name: 'Ada Lucknowi Pure Cotton Anarkali',
      price: '₹1,499',
      originalPrice: '₹2,999',
      discount: '50% off',
      tag: 'Pure Cotton • Hand-Embroidered',
      rating: '4.8',
      imageBg: 'from-fuchsia-600 to-purple-600'
    }
  },
  gadgets: {
    id: 'gadgets',
    userText: 'Suggest 55" 4K Smart TV and 1.5 Ton Inverter AC with fast cooling.',
    assistantText: 'Top match! Xiaomi 55" 4K QLED at ₹29,999 and Voltas 1.5 Ton Inverter AC at ₹34,990.',
    typingDurationMs: 2000,
    searchDurationMs: 2000,
    foundDurationMs: 4500,
    product: {
      name: 'Xiaomi 55" 4K QLED Smart TV',
      price: '₹29,999',
      originalPrice: '₹54,999',
      discount: '45% off',
      tag: '4K QLED • Dolby Atmos • 120Hz',
      rating: '4.8',
      imageBg: 'from-amber-500 to-orange-600'
    }
  }
};

interface InfinityDemoProps {
  className?: string;
  videoSrc?: string;
  scenario?: ScenarioData;
}

export default function InfinityDemo({
  className = '',
  videoSrc = '/sec1_bot.mp4',
  scenario = SCENARIOS.juice
}: InfinityDemoProps) {
  const vidDesktopRef = useRef<HTMLVideoElement>(null);
  const vidMobileRef = useRef<HTMLVideoElement>(null);

  const [step, setStep] = useState(0);
  const [userTyped, setUserTyped] = useState('');
  const [assistantTyped, setAssistantTyped] = useState('');

  // Video seeking helper functions for state-machine sync (Desktop + Mobile)
  const onQuerySubmit = () => {
    [vidDesktopRef.current, vidMobileRef.current].forEach((v) => {
      if (v) {
        v.currentTime = 0;
        v.play().catch(() => {});
      }
    });
  };

  const onAnswerRender = () => {
    [vidDesktopRef.current, vidMobileRef.current].forEach((v) => {
      if (v) {
        v.currentTime = 4; // Jump straight to the "eureka / answer" moment in clip
        v.play().catch(() => {});
      }
    });
  };

  // Performance and Accessibility Guards
  useEffect(() => {
    const videos = [vidDesktopRef.current, vidMobileRef.current].filter(Boolean) as HTMLVideoElement[];
    if (videos.length === 0) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      videos.forEach((v) => v.pause());
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      videos.forEach((v) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      });
    });

    if (vidDesktopRef.current) observer.observe(vidDesktopRef.current);
    if (vidMobileRef.current) observer.observe(vidMobileRef.current);

    return () => observer.disconnect();
  }, []);

  // Synchronized Chat + Video Loop
  useEffect(() => {
    let isMounted = true;

    const runSequence = async () => {
      while (isMounted) {
        if (!isMounted) break;
        // Step 0: Reset & Idle
        setStep(0);
        setUserTyped('');
        setAssistantTyped('');
        await new Promise((r) => setTimeout(r, 400));

        if (!isMounted) break;
        // Step 1: User Typing
        setStep(1);
        const typingDurationMs = scenario.typingDurationMs || 4000;
        const totalChars = scenario.userText.length;
        const perCharDelay = typingDurationMs / totalChars;

        for (let i = 1; i <= totalChars; i++) {
          if (!isMounted) break;
          setUserTyped(scenario.userText.slice(0, i));
          await new Promise((r) => setTimeout(r, perCharDelay));
        }

        if (!isMounted) break;
        await new Promise((r) => setTimeout(r, 150));

        if (!isMounted) break;
        // Step 2: Message Submitted -> Robot Searching & Typing Indicator
        setStep(2);
        onQuerySubmit();
        const searchDurationMs = scenario.searchDurationMs || 4000;
        await new Promise((r) => setTimeout(r, searchDurationMs));

        if (!isMounted) break;
        // Step 3: Answer arrives & Video seeks to Eureka
        setStep(3);
        onAnswerRender();
        const foundTotalMs = scenario.foundDurationMs || 4000;
        const answerText = scenario.assistantText;
        const streamDurationMs = 700;
        const perCharStream = streamDurationMs / answerText.length;

        for (let i = 1; i <= answerText.length; i++) {
          if (!isMounted) break;
          setAssistantTyped(answerText.slice(0, i));
          await new Promise((r) => setTimeout(r, perCharStream));
        }

        if (!isMounted) break;
        // Step 4: Show product card for remaining time
        setStep(4);
        const cardDisplayMs = Math.max(foundTotalMs - streamDurationMs, 1500);
        await new Promise((r) => setTimeout(r, cardDisplayMs));
      }
    };

    runSequence();

    return () => {
      isMounted = false;
    };
  }, [scenario]);

  return (
    <div
      className={`relative w-full bg-transparent p-0 overflow-visible ${className}`}
    >
      {/* ── Desktop: Bottom-aligned grid matching height of query box body (height - header) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20 xl:gap-24 items-end">
        
        {/* ── Left Column: Robot Video sized precisely to query box body (height minus header) ── */}
        <div className="hidden md:flex w-full h-[380px] lg:h-[395px] items-center justify-center relative bg-transparent overflow-visible self-end">
          <div className="relative w-full h-full flex items-center justify-center bg-transparent">
            <video
              ref={vidDesktopRef}
              src={videoSrc}
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
              aria-label="VyorAI assistant robot"
              className="w-full h-full object-contain mix-blend-multiply md:scale-[1.35] lg:scale-[1.42] xl:scale-[1.48] [transform:scaleX(-1)]"
              style={{
                maskImage: 'radial-gradient(120% 120% at 50% 48%, #000 75%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(120% 120% at 50% 48%, #000 75%, transparent 100%)'
              }}
            />
          </div>
        </div>

        {/* ── Right Column: Flipkart Aesthetic Chat Window ── */}
        <div className="w-full flex flex-col justify-between h-[485px] sm:h-[490px] md:h-[490px] bg-white rounded-[24px] sm:rounded-[32px] border border-gray-200/90 shadow-xl sm:shadow-2xl overflow-hidden p-0">
          
          {/* 1. Flipkart-Themed Header (~55px height) */}
          <div className="px-4 sm:px-5 py-3 sm:py-3.5 bg-gradient-to-r from-[#2874F0] via-[#246adb] to-[#1a5bc7] text-white flex items-center justify-between shadow-md shrink-0">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FFE11B] text-[#2874F0] flex items-center justify-center font-extrabold text-xs sm:text-sm shadow-xs shrink-0">
                <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2874F0]" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-xs sm:text-sm tracking-tight text-white truncate">
                    VyorKart Assistant
                  </span>
                  <span className="text-[#FFE11B] text-[11px] sm:text-xs font-black italic tracking-tighter shrink-0">
                    Plus✦
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-blue-100/90 font-normal leading-none mt-0.5 truncate">
                  Explore 10M+ Assured Products
                </p>
              </div>
            </div>

            {/* Subtle Live Badge */}
            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-white/10 rounded-full border border-white/20 text-[10px] text-white font-medium shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live</span>
            </div>
          </div>

          {/* 2. Sub-Header Delivery & Pincode Pill Banner (Visible on Desktop md+, Hidden on Phones) */}
          <div className="hidden md:flex mx-3 sm:mx-4 mt-2.5 sm:mt-3 px-3 sm:px-3.5 py-1.5 bg-[#F1F3F6] border border-gray-200/70 rounded-xl items-center justify-between text-[10px] sm:text-[11px] text-gray-600 gap-2 shrink-0">
            <span className="flex items-center gap-1 font-medium text-gray-700 truncate">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2874F0] shrink-0" />
              <span className="truncate">Delivering to <strong>Bangalore - 560001</strong></span>
            </span>
            <span className="text-[#388e3c] font-bold text-[9px] sm:text-[10px] bg-emerald-50 px-1.5 sm:px-2 py-0.5 rounded border border-emerald-200 shrink-0">
              Free Delivery
            </span>
          </div>

          {/* ── Mobile-Only In-Card Transparent Video (Increased 2x for Phones) ── */}
          <div className="block md:hidden w-full h-[190px] xs:h-[215px] sm:h-[235px] relative overflow-hidden bg-transparent my-1 shrink-0">
            <div className="relative w-full h-full flex items-center justify-center bg-transparent">
              <video
                ref={vidMobileRef}
                src={videoSrc}
                muted
                loop
                playsInline
                autoPlay
                preload="auto"
                aria-label="VyorAI assistant robot mobile"
                className="w-full h-full object-contain mix-blend-multiply scale-[1.85] xs:scale-[1.95] sm:scale-[2.05] [transform:scaleX(-1)]"
                style={{
                  maskImage: 'radial-gradient(115% 115% at 50% 45%, #000 70%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(115% 115% at 50% 45%, #000 70%, transparent 100%)'
                }}
              />
            </div>
          </div>

          {/* 3. Chat Stream Messages */}
          <div className="p-3 sm:p-5 flex-1 flex flex-col gap-2.5 sm:gap-3 justify-end text-xs sm:text-[13px] bg-gradient-to-b from-white via-slate-50/40 to-[#F1F3F6]/30 overflow-hidden">
            
            {/* User Message Bubble */}
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="bg-[#E7F8E8] border border-emerald-100 rounded-2xl rounded-tr-xs p-2.5 sm:p-3 self-end max-w-[92%] sm:max-w-[90%] text-gray-900 shadow-2xs leading-snug font-medium flex items-end gap-2 justify-between"
              >
                <span className="break-words">{scenario.userText}</span>
                <CheckCheck className="w-3.5 h-3.5 text-[#2874F0] shrink-0 mb-0.5" />
              </motion.div>
            )}

            {/* Step 2: Searching / Thinking Indicator */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white border border-[#2874F0]/20 rounded-2xl rounded-tl-xs px-3 sm:px-4 py-2.5 sm:py-3 self-start max-w-[95%] sm:max-w-[90%] text-gray-700 shadow-sm flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2874F0] animate-spin shrink-0" />
                <span className="text-[11px] sm:text-xs text-gray-600 font-medium truncate">
                  Searching 10M+ Assured catalogs...
                </span>
                <span className="flex items-center gap-1 ml-0.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2874F0] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2874F0] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2874F0] animate-bounce" style={{ animationDelay: '300ms' }} />
                </span>
              </motion.div>
            )}

            {/* Assistant Response Bubble */}
            {step >= 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="bg-white border border-gray-200/90 rounded-2xl rounded-tl-xs p-3 sm:p-4 self-start max-w-full text-gray-900 shadow-md leading-snug"
              >
                <div className="flex gap-2 sm:gap-2.5 items-start">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#2874F0] flex items-center justify-center text-white text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5">
                    ✦
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-800 font-medium break-words">
                      {assistantTyped}
                      {step === 3 && (
                        <span className="inline-block w-1.5 h-3.5 ml-1 bg-[#2874F0] align-middle animate-pulse" />
                      )}
                    </p>

                    {/* Step 4: Fully Responsive Product Recommendation Card */}
                    <AnimatePresence>
                      {step >= 4 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 10 }}
                          transition={{ duration: 0.3 }}
                          className="bg-gradient-to-b from-white to-slate-50 rounded-xl sm:rounded-2xl border border-gray-200 p-2.5 sm:p-3.5 flex flex-col gap-2 sm:gap-2.5 shadow-sm overflow-hidden"
                        >
                          {/* Top Row: Thumbnail + Title + Pricing */}
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                              <div
                                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-tr ${scenario.product.imageBg} flex items-center justify-center text-white shrink-0 shadow-xs`}
                              >
                                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                              </div>
                              <div className="min-w-0">
                                <h4 className="font-bold text-[11px] sm:text-sm text-gray-900 leading-snug line-clamp-1">
                                  {scenario.product.name}
                                </h4>
                                <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
                                  {/* Flipkart Green Rating Badge */}
                                  <span className="bg-[#388e3c] text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.2 rounded flex items-center gap-0.5 shadow-2xs shrink-0">
                                    <span>{scenario.product.rating}</span>
                                    <Star className="w-2.5 h-2.5 fill-white" />
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Price & Discount */}
                            <div className="flex flex-col items-end shrink-0">
                              <div className="flex items-baseline gap-1 sm:gap-1.5">
                                <span className="font-extrabold text-xs sm:text-base text-gray-900">
                                  {scenario.product.price}
                                </span>
                                <span className="text-[10px] sm:text-[11px] text-gray-400 line-through">
                                  {scenario.product.originalPrice}
                                </span>
                              </div>
                              <span className="text-[9px] sm:text-[10px] text-[#388e3c] font-bold">
                                {scenario.product.discount}
                              </span>
                            </div>
                          </div>

                          {/* Specification Tag Line */}
                          <div className="text-[10px] sm:text-[11px] text-gray-500 bg-[#F1F3F6] px-2 sm:px-2.5 py-1 rounded-md sm:rounded-lg flex items-center justify-between gap-1">
                            <span className="truncate">{scenario.product.tag}</span>
                            <span className="text-emerald-700 font-semibold shrink-0 text-[9px] sm:text-[10px]">⚡ In Stock</span>
                          </div>

                          {/* Action Buttons: 50/50 Grid */}
                          <div className="grid grid-cols-2 gap-2 pt-0.5 sm:pt-1">
                            <button className="py-1.5 sm:py-2 bg-[#FB641B] hover:bg-[#e85b17] text-white text-[11px] sm:text-xs font-bold rounded-lg sm:rounded-xl transition-all flex items-center justify-center gap-1 shadow-xs shadow-orange-500/20 cursor-pointer">
                              <span>Buy Now</span>
                              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                            </button>
                            <button className="py-1.5 sm:py-2 bg-[#FF9F00] hover:bg-[#e68f00] text-white text-[11px] sm:text-xs font-bold rounded-lg sm:rounded-xl transition-all flex items-center justify-center cursor-pointer">
                              Add to Cart
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* 4. Flipkart-Style Search Input Bar at Bottom */}
          <div className="p-2.5 sm:p-3.5 bg-[#F1F3F6]/80 border-t border-gray-200 flex gap-2 items-center shrink-0">
            <div className="flex-1 bg-white border border-gray-300 focus-within:border-[#2874F0] rounded-full h-9 sm:h-10 px-3 sm:px-3.5 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-1 overflow-hidden">
                <Search className="w-3.5 h-3.5 text-[#2874F0] shrink-0" />
                <span className="text-gray-800 text-[11px] sm:text-xs truncate">
                  {step === 0 && (
                    <span className="text-gray-400">Search for products, brands and more...</span>
                  )}
                  {step === 1 && userTyped}
                  {step >= 2 && <span className="text-gray-400">Ask another query...</span>}
                </span>
              </div>
            </div>

            <div
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all ${
                step === 1
                  ? 'bg-[#2874F0] text-white shadow-md scale-105'
                  : 'bg-white border border-gray-300 text-[#2874F0]'
              }`}
            >
              ↵
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
