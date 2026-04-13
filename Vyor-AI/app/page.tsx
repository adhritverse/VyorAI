import { Navbar } from "@/components/Navbar";
import { HeroGSAP } from "@/components/HeroGSAP";
import { Marquee } from "@/components/Marquee";
import { Products } from "@/components/Products";
import { ApiPlatform } from "@/components/ApiPlatform";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="bg-[#030712] selection:bg-emerald-500/30">
                <HeroGSAP />
                <Marquee />
                <Products />
                <ApiPlatform />
                <About />
            </main>
            <Footer />
        </>
    );
}
