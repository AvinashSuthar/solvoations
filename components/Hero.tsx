'use client'

import { BookACall } from './BookACall'

const Hero = () => {
    return (
        <section
            id="home"
            className={`w-full h-screen flex items-center justify-center text-center relative overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed transition-opacity duration-100 ease-in-out bg`}
            style={{ backgroundImage: "url('/images/bg4.webp')" }}
        >
            <div className="relative z-10 text-white  px-4 py-5">
                {/* <TextGenerateEffect
                    className={cn('text-7xl font-bold')}
                    words="Innovative Tech Solutions"
                /> */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl my-3 z-10 text-white px-4 py-5 font-bold textspace-x-2  duration-150 transition-all transition-delay-200 animate-fade-in">
                    Innovative Tech{' '}
                    <span className="text-purple-500">Solutions</span>
                </h1>

                <div className="mt-4 h-6"></div>

                {/* <TextGenerateEffect
                    className={cn('text-2xl font-semibold')}
                    words="We bring your ideas to life with cutting-edge technology."
                /> */}

                <h6 className="text-neutral-200 text-xl font-semibold mt-4">
                    We bring your ideas to life with cutting-edge technology.
                </h6>

                <BookACall />
            </div>
        </section>
    )
}

export default Hero
