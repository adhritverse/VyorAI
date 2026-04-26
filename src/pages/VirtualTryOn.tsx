import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shirt, Sparkles, Loader2, CheckCircle2, Play, Pause, RefreshCw, Layers } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const clothingOptions = [
  {
    id: '1',
    name: 'Urban Techwear Jacket',
    category: 'Outerwear',
    color: 'bg-slate-800',
    description: 'A sleek, functional jacket perfect for the modern cyberpunk aesthetic.',
  },
  {
    id: '2',
    name: 'Minimalist Cotton Tee',
    category: 'Casual',
    color: 'bg-white',
    description: 'Everyday comfort with a clean, unbranded look.',
  },
  {
    id: '3',
    name: 'Bespoke Wool Suit',
    category: 'Formal',
    color: 'bg-indigo-900',
    description: 'Tailored perfection for high-stakes meetings.',
  },
  {
    id: '4',
    name: 'Streetwear Graphic Hoodie',
    category: 'Casual',
    color: 'bg-rose-600',
    description: 'Bold designs on premium heavyweight cotton.',
  }
];

export default function VirtualTryOn() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTryOn = (id: string) => {
    setSelectedItem(id);
    setIsProcessing(true);
    setShowResult(false);

    // Simulate AI processing time
    setTimeout(() => {
      setIsProcessing(false);
      setShowResult(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }, 2500);
  };

  const togglePlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" />
            Neural Rendering Beta
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Virtual <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Try On</span>
          </h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            Experience our next-generation digital fitting room. Select an item below to see it instantly mapped onto a human model with stunning realism.
          </p>
        </AnimatedSection>

        {/* Main Interface */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Catalog */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-900">Digital Wardrobe</h3>
              <span className="text-sm text-gray-500 font-medium">4 items available</span>
            </div>
            
            <div className="grid gap-4">
              {clothingOptions.map((item) => (
                <AnimatedSection key={item.id}>
                  <div 
                    className={`p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                      selectedItem === item.id 
                        ? 'border-indigo-500 bg-indigo-50/30 shadow-md scale-[1.02]' 
                        : 'border-gray-100 bg-white hover:border-gray-300 hover:shadow-sm'
                    }`}
                    onClick={() => handleTryOn(item.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-inner ${item.color}`}>
                        <Shirt className={`w-6 h-6 ${item.color === 'bg-white' ? 'text-gray-800' : 'text-white'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-gray-900 text-lg">{item.name}</h4>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">{item.description}</p>
                        
                        <button 
                          className={`w-full py-2.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-colors ${
                            selectedItem === item.id 
                              ? 'bg-indigo-600 text-white' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {selectedItem === item.id && isProcessing ? (
                            <><Loader2 className="w-4 h-4 animate-spin" /> Processing Neural Mesh...</>
                          ) : selectedItem === item.id && showResult ? (
                            <><CheckCircle2 className="w-4 h-4" /> Currently Wearing</>
                          ) : (
                            <><Layers className="w-4 h-4" /> Try it on</>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right Column: Video Preview */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.2} className="h-full">
              <div className="bg-gray-900 rounded-[32px] p-2 h-full min-h-[500px] flex flex-col relative overflow-hidden shadow-2xl border border-gray-800">
                
                {/* Status Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800/60 z-10 bg-gray-900/80 backdrop-blur-md absolute top-0 left-0 right-0 rounded-t-[30px]">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${isProcessing ? 'bg-amber-400 animate-pulse' : showResult ? 'bg-green-400' : 'bg-gray-500'}`} />
                    <span className="text-sm font-medium text-gray-300">
                      {isProcessing ? 'Synthesizing output...' : showResult ? 'Live Neural Render' : 'Awaiting selection'}
                    </span>
                  </div>
                  {showResult && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">30 FPS</span>
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">4K Gen</span>
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="flex-1 relative rounded-[24px] overflow-hidden bg-[#050505] mt-14 mb-2 mx-2 flex items-center justify-center">
                  
                  <AnimatePresence mode="wait">
                    {!selectedItem && !isProcessing && !showResult && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center p-8"
                      >
                        <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Shirt className="w-8 h-8 text-gray-600" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-300 mb-2">Select an item to begin</h3>
                        <p className="text-gray-500 text-sm max-w-xs mx-auto">Choose an article of clothing from the wardrobe to see the virtual try-on in action.</p>
                      </motion.div>
                    )}

                    {isProcessing && (
                      <motion.div 
                        key="processing"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center w-full max-w-md mx-auto"
                      >
                        {/* Scanning Animation */}
                        <div className="relative w-48 h-64 mx-auto mb-8 border border-gray-800 rounded-2xl overflow-hidden bg-gray-900/50">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Shirt className="w-16 h-16 text-gray-700" />
                          </div>
                          <motion.div 
                            animate={{ y: [0, 256, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-0 right-0 h-1 bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)] z-10"
                          />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2 flex items-center justify-center gap-2">
                          <Loader2 className="w-5 h-5 animate-spin text-indigo-400" />
                          Generating 3D Mesh
                        </h3>
                        <p className="text-sm text-gray-500">Mapping garment physics to human topology...</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Video Player - Only visible when showing result */}
                  <div className={`absolute inset-0 transition-opacity duration-700 ${showResult ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                    <video 
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      loop
                      muted
                      playsInline
                    >
                      <source src="/try-on.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Video Controls Overlay */}
                    {showResult && (
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/60 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10 shadow-2xl">
                        <button 
                          onClick={togglePlayback}
                          className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                        >
                          {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                        </button>
                        <div className="w-px h-6 bg-white/20" />
                        <button 
                          onClick={() => {
                            if (videoRef.current) {
                              videoRef.current.currentTime = 0;
                              videoRef.current.play();
                              setIsPlaying(true);
                            }
                          }}
                          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium"
                        >
                          <RefreshCw className="w-4 h-4" /> Replay
                        </button>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </div>
  );
}
