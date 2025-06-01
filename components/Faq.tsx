'use client'
import React, { useState, useRef } from 'react'

import { CardSpotlight } from './ui/card-spotlight'
import { faqData } from '@/data/index'
import AnimationController from './Animations/AnimationController'

export function Faq() {
    const [activeIndex, setActiveIndex] = useState<number | null>()
    const answerRefs = useRef([]) // Create a ref for each answer container

    const handleQuestionClick = (index: number | null) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className="faq py-12 bg-black  w-full" id="faq">
            <div className="container mx-auto px-4 flex flex-col gap-5 w-full justify-center items-center">
                <h1 className="text-6xl font-semibold mb-12">
                    Faq<span className="text-purple-500">'s</span>{' '}
                </h1>

                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className="w-full  max-w-xl sm:max-w-2xl md:max-w-3xl border border-white rounded-lg overflow-hidden fade-in-up opacity-0"
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
                                        className={`absolute right-3 top-1/5 transform text-3xl transition-transform duration-200 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ${
                                            activeIndex === index
                                                ? 'rotate-45'
                                                : ''
                                        } `}
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
