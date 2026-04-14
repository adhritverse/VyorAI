import { Navbar } from "@/components/Navbar";
import { HeroGSAP } from "@/components/HeroGSAP";
import { Marquee } from "@/components/Marquee";
import dynamic from "next/dynamic";

// Lazy-load below-fold components — they won't block initial paint
const Products = dynamic(() => import("@/components/Products").then(m => ({ default: m.Products })), {
    loading: () => <div className="min-h-screen bg-[#0D1B2A]" />,
});
const ApiPlatform = dynamic(() => import("@/components/ApiPlatform").then(m => ({ default: m.ApiPlatform })), {
    loading: () => <div className="min-h-[60vh] bg-[#0D1B2A]" />,
});
const About = dynamic(() => import("@/components/About").then(m => ({ default: m.About })), {
    loading: () => <div className="min-h-[60vh] bg-[#0D1B2A]" />,
});
const Footer = dynamic(() => import("@/components/Footer").then(m => ({ default: m.Footer })), {
    loading: () => <div className="h-96 bg-[#0D1B2A]" />,
});
const FAQ = dynamic(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })), {
    loading: () => <div className="min-h-[40vh] bg-[#0D1B2A]" />,
});

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="bg-[#0D1B2A] selection:bg-vyor-purple/30">
                <HeroGSAP />
                <Marquee />
                <Products />
                <ApiPlatform />
                <About />
                <FAQ />
            </main>
            <Footer />
        </>
    );
}

