"use client";
import React, { useState, useRef } from "react";
import { HoverBorderGradient } from "./ui/Border";

export function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>();
  const answerRefs = useRef([]); // Create a ref for each answer container

  const handleQuestionClick = (index: number | null) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What services do you offer?",
      answer:
        "End-to-end solutions in software, embedded firmware, electronics, and app development.",
    },
    {
      question: "Can you develop a complete product?",
      answer:
        "Yes, from prototype to production, including design and integration.",
    },
    {
      question: "Do you offer OEM products?",
      answer: "Yes, with customized solutions for specific needs.",
    },
    {
      question: "Which industries do you serve?",
      answer: "IoT, automation, electronics, automotive, and more.",
    },
    {
      question: "How can I collaborate with you?",
      answer: "Contact us via email or form to discuss your project.",
    },
  ];

  return (
    <section className="faq py-12 bg-black  w-full" id="faq">
      <div className="container mx-auto px-4 flex flex-col gap-5 w-full justify-center items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-white">
          FAQs
        </h2>

        {faqData.map((faq, index) => (
          <div
            key={index}
            className="w-full  max-w-xl sm:max-w-2xl md:max-w-3xl border border-white rounded-lg overflow-hidden"
          >
            <div className="w-full text-start">
              <div
                className={`question text-base sm:text-lg font-semibold py-4 px-4 sm:px-6 md:px-8 relative cursor-pointer text-white ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => handleQuestionClick(index)}
              >
                {faq.question}
                <span
                  className={`absolute right-4 transform transition-transform duration-200 ${
                    activeIndex === index ? "rotate-45" : ""
                  } text-white`}
                >
                  +
                </span>
              </div>

              <div
                className="answercont overflow-hidden transition-all duration-300"
                //@ts-ignore
                ref={(el: any) => (answerRefs.current[index] = el)}
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
