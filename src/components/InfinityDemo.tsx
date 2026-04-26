import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function InfinityDemo() {
    const [step, setStep] = useState(0);
    const [userTyped, setUserTyped] = useState("");
    const [assistantTyped, setAssistantTyped] = useState("");

    const userText = "Looking for a mechanical keyboard with silent switches under $150.";
    const assistantText = "I found 3 perfect matches in stock! The Keychron Q1 Pro features silent red switches and fits your budget.";

    React.useEffect(() => {
        let isMounted = true;

        const runSequence = async () => {
            while (isMounted) {
                if (isMounted) { setStep(0); setUserTyped(""); setAssistantTyped(""); }

                await new Promise(r => setTimeout(r, 1000));
                if (!isMounted) break;
                setStep(1);

                for (let i = 1; i <= userText.length; i++) {
                    if (!isMounted) break;
                    setUserTyped(userText.slice(0, i));
                    await new Promise(r => setTimeout(r, 30));
                }
                if (!isMounted) break;

                await new Promise(r => setTimeout(r, 400));
                if (!isMounted) break;
                setStep(2);

                await new Promise(r => setTimeout(r, 600));
                if (!isMounted) break;
                setStep(3);

                for (let i = 1; i <= assistantText.length; i++) {
                    if (!isMounted) break;
                    setAssistantTyped(assistantText.slice(0, i));
                    await new Promise(r => setTimeout(r, 20));
                }
                if (!isMounted) break;
                setStep(4);

                await new Promise(r => setTimeout(r, 5000));
            }
        };

        runSequence();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-white overflow-hidden p-3 sm:p-6">
            <div className="absolute inset-x-4 lg:inset-x-8 inset-y-8 border border-gray-100 rounded-xl bg-gray-50 flex-col overflow-hidden opacity-40 pointer-events-none filter blur-[2px] hidden sm:flex">
                <div className="w-full h-12 border-b border-gray-100 flex items-center px-6 gap-4 bg-gray-50">
                    <div className="w-24 h-4 bg-gray-200 rounded-full" />
                    <div className="w-16 h-2 bg-gray-100 rounded-full" />
                </div>
                <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-6 flex-1 opacity-80">
                    <div className="bg-gray-100 rounded-xl w-full h-32 md:h-40" />
                    <div className="bg-gray-100 rounded-xl w-full h-32 md:h-40 hidden sm:block" />
                    <div className="bg-gray-100 rounded-xl w-full h-32 md:h-40 hidden md:block" />
                </div>
            </div>

            <div className="relative w-full max-w-[290px] sm:max-w-[320px] md:max-w-[420px] lg:max-w-md bg-white border border-gray-200 rounded-2xl md:rounded-[24px] shadow-xl flex flex-col z-10 overflow-hidden">
                <div className="px-3 py-2 sm:p-3 md:p-4 border-b border-gray-100 bg-white bg-gradient-to-r from-vyor-purple/5 to-transparent flex items-center gap-2 sm:gap-3 relative z-20 shrink-0">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-vyor-violet animate-pulse shadow-[0_0_15px_rgba(124,92,252,0.6)]" />
                    <span className="text-gray-900 font-semibold text-xs sm:text-sm tracking-tight opacity-90">VyorAI Assistant</span>
                </div>

                <div className="p-3 sm:p-4 flex-1 flex flex-col gap-2.5 sm:gap-4 justify-end text-[11px] sm:text-sm md:text-base font-normal relative z-10 min-h-[120px] sm:min-h-[140px] md:min-h-[180px]">
                    {step >= 2 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-gray-50 border border-gray-100 rounded-xl sm:rounded-2xl rounded-br-none p-2.5 sm:p-3 md:p-4 self-end max-w-[88%] text-gray-800 shadow-sm font-medium leading-relaxed"
                        >
                            {userText}
                        </motion.div>
                    )}

                    {step >= 3 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-violet-50 border border-violet-100 rounded-xl sm:rounded-2xl rounded-bl-none p-2.5 sm:p-3.5 md:p-4 self-start max-w-[92%] text-violet-900 shadow-sm backdrop-blur-md font-medium leading-relaxed"
                        >
                            <div className="flex gap-2 sm:gap-3 items-start">
                                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-vyor-violet mt-0.5 shrink-0" />
                                <div className="leading-relaxed">
                                    {assistantTyped}
                                    <span className={`inline-block w-1 sm:w-1.5 h-3 sm:h-3.5 md:h-4 ml-0.5 sm:ml-1 bg-vyor-violet align-middle ${step === 3 ? "animate-pulse" : "hidden"}`} />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>

                <div className="px-2.5 py-2 sm:p-3 md:p-4 border-t border-gray-100 flex gap-2 items-center bg-white relative z-20 shrink-0">
                    <div className="flex-1 bg-gray-50 border border-gray-200 rounded-full h-8 sm:h-10 md:h-12 px-3 sm:px-4 flex items-center relative overflow-hidden">
                        {(step === 0 || step === 1) && (
                            <span className="text-gray-800 text-[11px] sm:text-sm tracking-wide truncate">
                                {userTyped}
                                {step === 1 && (
                                    <span className="inline-block w-1 sm:w-1.5 h-3 sm:h-3.5 bg-gray-400 align-middle ml-0.5 animate-pulse" />
                                )}
                            </span>
                        )}
                        {step === 0 && userTyped.length === 0 && (
                            <span className="text-gray-400 text-[11px] sm:text-sm tracking-wide absolute left-3 sm:left-4">Type your request...</span>
                        )}
                        {step >= 2 && (
                            <span className="text-gray-400 text-[11px] sm:text-sm tracking-wide">Type your request...</span>
                        )}
                    </div>
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${step === 1 ? 'bg-vyor-purple text-white shadow-md' : 'bg-violet-100 text-vyor-violet hover:bg-vyor-purple hover:text-white'}`}>
                        <span className="text-xs sm:text-sm font-bold">↵</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
