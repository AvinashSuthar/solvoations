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
    <section className="faq py-12 bg-black" id="faq">
      <div className=" mx-auto px-4 flex-col flex gap-5 justify-center items-center">
        <h2 className=" text-2xl font-semibold mb-8">FAQs</h2>

        {faqData.map((faq, index) => (
          <div key={index}>
            <HoverBorderGradient
              containerClassName=""
              as="button"
              className="bg-gray-950 "
            >
              <div className="lg:w-300 md:w-150 w-90 text-start" key={index}>
                <div
                  className={`question text-lg font-semibold py-4 px-8 relative cursor-pointer ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => handleQuestionClick(index)}
                >
                  {faq.question}
                  <span
                    className={`absolute right-4 transform transition-transform duration-200 ${
                      activeIndex === index ? "rotate-45" : ""
                    }`}
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
                  <div className="answer py-4 px-8">{faq.answer}</div>
                </div>
              </div>
            </HoverBorderGradient>
          </div>
        ))}
      </div>
    </section>
  );
}
