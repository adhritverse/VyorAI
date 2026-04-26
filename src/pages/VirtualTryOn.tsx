import { Sparkles } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export default function VirtualTryOn() {
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
            Experience our next-generation digital fitting room. Watch how our AI perfectly maps garments to human topology in real-time.
          </p>
        </AnimatedSection>

        {/* Video Presentation */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-[32px] p-2 shadow-2xl border border-gray-800">
              <div className="rounded-[24px] overflow-hidden bg-[#050505] relative aspect-[9/16] sm:aspect-video flex items-center justify-center">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/try-on.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            <div className="mt-12 grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Photorealistic</h3>
                <p className="text-gray-500">Stunning 4K resolution with physically accurate fabric drape and lighting.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time</h3>
                <p className="text-gray-500">Sub-millisecond latency for immediate feedback and interaction.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Seamless Integration</h3>
                <p className="text-gray-500">Easily connect our try-on API to your existing e-commerce storefront.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
