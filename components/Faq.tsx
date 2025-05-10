'use client'
import React, { useState, useRef, useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css' // You c

import { CardSpotlight } from './ui/card-spotlight'

export function Faq() {
    const [activeIndex, setActiveIndex] = useState<number | null>()
    const answerRefs = useRef([]) // Create a ref for each answer container

    const handleQuestionClick = (index: number | null) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    const faqData = [
        {
            question: 'What services do you offer?',
            answer: 'We provide end-to-end solutions in software development, embedded firmware, electronics design, and app development. Our expertise spans across multiple domains, ensuring that we can cater to a wide range of technical requirements. Whether you need a custom software application, a robust embedded system, or a cutting-edge electronic design, we have the skills and experience to deliver high-quality results tailored to your needs.',
            color: 'purple',
        },
        {
            question: 'Can you develop a complete product?',
            answer: 'Absolutely! We specialize in taking your ideas from concept to reality. Our team can handle everything from initial prototyping and design to production and deployment. This includes hardware design, firmware development, software integration, and testing. We ensure that every aspect of the product is meticulously crafted to meet your specifications and industry standards.',
            color: 'blue',
        },
        {
            question: 'Do you offer OEM products?',
            answer: 'Yes, we offer OEM (Original Equipment Manufacturer) products that can be customized to meet your specific requirements. Our solutions are designed to seamlessly integrate into your existing systems or workflows, providing you with a tailored product that aligns with your business goals. Whether it’s a custom PCB, firmware, or software, we ensure that our OEM products deliver exceptional performance and reliability.',
            color: 'green',
        },
        {
            question: 'Which industries do you serve?',
            answer: 'We serve a diverse range of industries, including IoT (Internet of Things), industrial automation, consumer electronics, automotive, healthcare, and more. Our multidisciplinary expertise allows us to adapt to the unique challenges and requirements of each industry, delivering innovative solutions that drive efficiency, productivity, and growth.',
            color: 'orange',
        },
        {
            question: 'How can I collaborate with you?',
            answer: 'Collaborating with us is simple and straightforward. You can reach out to us via email or fill out the contact form on our website. Once we receive your inquiry, our team will get in touch with you to discuss your project requirements in detail. We’ll work closely with you to understand your vision, provide expert guidance, and develop a tailored solution that meets your objectives.',
            color: 'red',
        },
    ]

    useEffect(() => {
        AOS.init({
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,

            offset: -500,
            delay: 0,
            duration: 1000,
            easing: 'ease-in-out',
            once: false,
            mirror: true,
            anchorPlacement: 'top-top',
        })

        return () => {
            AOS.refreshHard() // Clean up AOS animations when leaving the page
        }
    }, [])
    return (
        <section className="faq py-12 bg-black  w-full" id="faq">
            <div className="container mx-auto px-4 flex flex-col gap-5 w-full justify-center items-center">
                <h1 className="text-6xl font-semibold mb-12">
                    Faq<span className="text-purple-500">'s</span>{' '}
                </h1>

                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className="w-full  max-w-xl sm:max-w-2xl md:max-w-3xl border border-white rounded-lg overflow-hidden"
                        data-aos="fade-up"
                    >
                        <div className="w-full text-start">
                            <CardSpotlight color={faq.color}>
                                <div
                                    className={`question text-sm md:text-md lg:text-lg font-semibold py-4 px-4 sm:px-6 md:px-8 relative cursor-pointer text-white ${
                                        activeIndex === index ? 'active' : ''
                                    }`}
                                    onClick={() => handleQuestionClick(index)}
                                >
                                    {faq.question}
                                    <span
                                        className={`absolute right-4 transform transition-transform duration-200 ${
                                            activeIndex === index
                                                ? 'rotate-45'
                                                : ''
                                        } text-white`}
                                    >
                                        +
                                    </span>
                                </div>

                                <div
                                    className="answercont overflow-hidden transition-all duration-300"
                                    //@ts-ignore
                                    ref={(el: any) =>
                                        //@ts-ignore
                                        (answerRefs.current[index] = el)
                                    }
                                    style={{
                                        maxHeight:
                                            activeIndex === index
                                                ? //@ts-ignore
                                                  `${answerRefs.current[index]?.scrollHeight}px`
                                                : 0,
                                    }}
                                >
                                    <div className="answer py-4 px-4 sm:px-6 md:px-8 text-gray-300">
                                        {faq.answer}
                                    </div>
                                </div>
                            </CardSpotlight>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
