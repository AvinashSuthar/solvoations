import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Faq } from '@/components/Faq'
import FeatureCards from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { NavbarR } from '@/components/Navbar'
import Projects from '@/components/Projects'
import { Services } from '@/components/Services'
import { Toaster } from '@/components/ui/sonner'

export default function Home() {
    return (
        <div className="bg-black flex flex-col justify-center items-center">
            <NavbarR />
            <Hero />
            <About />
            <div className="max-w-[95%] flex justify-center flex-col items-center">
                <FeatureCards />

                <Faq />
                <Projects />
                <Services />
            </div>
            <Contact />
            <Footer />
            <Toaster />
        </div>
    )
}
