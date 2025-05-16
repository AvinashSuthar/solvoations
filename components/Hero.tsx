'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { BookACall } from './BookACall'
const words = [
    { text: 'Ideas', imgPath: '/images/ideas.svg' },
    { text: 'Concepts', imgPath: '/images/concepts.svg' },
    { text: 'Designs', imgPath: '/images/designs.svg' },
    { text: 'Code', imgPath: '/images/code.svg' },
    { text: 'Ideas', imgPath: '/images/ideas.svg' },
    { text: 'Concepts', imgPath: '/images/concepts.svg' },
    { text: 'Designs', imgPath: '/images/designs.svg' },
    { text: 'Code', imgPath: '/images/code.svg' },
]

const Hero = () => {
    useGSAP(() => {
        // Top Left
        gsap.fromTo(
            '.hero-text h1 .animate-top-left',
            {
                y: -250,
                x: -250,
                opacity: 0,
                rotate: -90,
            },
            {
                y: 0,
                x: 0,
                opacity: 1,
                rotate: 0,
                duration: 1,
                ease: 'power2.inOut',
            },
        )

        // Top Right
        gsap.fromTo(
            '.hero-text h1 .animate-top-right',
            {
                y: -250,
                x: 250,
                opacity: 0,
                rotate: 90,
            },
            {
                y: 0,
                x: 0,
                opacity: 1,
                rotate: 0,
                duration: 1,
                ease: 'power2.inOut',
            },
        )

        // Bottom Left
        gsap.fromTo(
            '.hero-text h1 .animate-bottom-left',
            {
                y: 250,
                x: -250,
                opacity: 0,
                rotate: -90,
            },
            {
                y: 0,
                x: 0,
                opacity: 1,
                rotate: 0,
                duration: 1,
                ease: 'power2.inOut',
            },
        )

        // Bottom Right
        gsap.fromTo(
            '.hero-text h1 .animate-bottom-right',
            {
                y: 250,
                x: 250,
                opacity: 0,
                rotate: 90,
            },
            {
                y: 0,
                x: 0,
                opacity: 1,
                rotate: 0,
                duration: 1,
                ease: 'power2.inOut',
            },
        )

        // Top Center
        gsap.fromTo(
            '.hero-text h1 .animate-top-center',
            {
                y: -250,
                opacity: 0,
                rotate: -45,
            },
            {
                y: 0,
                opacity: 1,
                rotate: 0,
                duration: 1,
                ease: 'power2.inOut',
            },
        )

        // Bottom Center
        gsap.fromTo(
            '.hero-text h1 .animate-bottom-center',
            {
                y: 250,
                opacity: 0,
                rotate: 45,
            },
            {
                y: 0,
                opacity: 1,
                rotate: 0,
                duration: 1,
                ease: 'power2.inOut',
            },
        )
        gsap.fromTo(
            'div h6  ',
            {
                y: 250,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,

                duration: 1.5,
                ease: 'power2.inOut',
            },
        )

        // Left Center
        gsap.fromTo(
            '.hero-text h1 .animate-left-center',
            {
                x: -250,
                opacity: 0,
                rotate: -45,
            },
            {
                x: 0,
                opacity: 1,
                rotate: 0,
                duration: 1,
                ease: 'power2.inOut',
            },
        )

        // Right Center
        gsap.fromTo(
            '.hero-text h1 .animate-right-center',
            {
                x: 250,
                opacity: 0,
                rotate: 45,
            },
            {
                x: 0,
                opacity: 1,
                rotate: 0,
                duration: 1,
                ease: 'power2.inOut',
            },
        )
    })

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
                {/* <h1 className="text-5xl md:text-6xl lg:text-7xl my-3 z-10 text-white px-4 py-5 font-bold textspace-x-2  duration-150 transition-all transition-delay-200 animate-fade-in">
                    Innovative Tech{' '}
                    <span className="text-purple-500">Solutions</span>
                </h1> */}

                <div className="hero-text ">
                    <h1 className="md:-translate-x-1/7 lg:-translate-x-1/7 -translate-x-2/12">
                        <span className="animate-top-left inline-block">
                            Shaping
                        </span>
                        <span className="slide">
                            <span className="wrapper">
                                {words.map((word, index) => (
                                    <span
                                        key={index}
                                        className="flex items-center md:gap-3 gap-1 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
                                    >
                                        <img
                                            src={word.imgPath}
                                            alt="person"
                                            className="md:p-2 p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                                        />
                                        <span>{word.text}</span>
                                    </span>
                                ))}
                            </span>
                        </span>
                    </h1>
                    <h1>
                        <span className="animate-top-left inline-block">
                            into&nbsp;
                        </span>
                        <span className="animate-top-right inline-block">
                            Real&nbsp;
                        </span>
                        <span className="animate-bottom-left inline-block">
                            Projects&nbsp;
                        </span>
                        <span className="animate-bottom-right inline-block">
                            that&nbsp;
                        </span>
                        <span className="animate-left-center inline-block">
                            Deliver&nbsp;
                        </span>
                        <span className="animate-right-center inline-block">
                            Results
                        </span>
                    </h1>
                </div>

                <h6 className="text-neutral-400 text-lg  mt-4">
                    We bring your ideas to life with cutting-edge technology.
                </h6>
                <div>
                    <BookACall />
                </div>
            </div>
        </section>
    )
}

export default Hero
