import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Products } from "@/components/Products";
import { ApiPlatform } from "@/components/ApiPlatform";
import { Features } from "@/components/Features";
import { SplineSceneBasic } from "@/components/ui/demo";
import { RadialOrbitalTimelineDemo } from "@/components/ui/radial-orbital-timeline-demo";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="bg-[#0B0F19] selection:bg-purple-500/30">
                <Hero />
                <Marquee />
                <Products />
                <Features />

                <RadialOrbitalTimelineDemo />
                <ApiPlatform />
                <About />
            </main>
            <Footer />
        </>
    );
}
