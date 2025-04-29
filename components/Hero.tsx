"use client";

import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BookACall } from "./BookACall";

const Hero = () => {
  return (
    <section
                                  id="home"
      className={`w-full h-screen flex items-center justify-center text-center relative overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed transition-opacity duration-500 ease-in-out bg`}
      style={{ backgroundImage: "url('/images/bg4.webp')" }}
    >
      <div className="relative z-10 text-white  px-4 py-5">
                        <TextGenerateEffect
                          className={cn("text-7xl font-bold")}
                          duration={4}
                          filter={false}
                          words="Innovative Tech Solutions"
                        />
        <div className="mt-4 h-6"></div>

        <TextGenerateEffect
          className={cn("")}
          duration={4}
          filter={false}
          words="We bring your ideas to life with cutting-edge technology."
        />

        <BookACall />
      </div>
    </section>
  );
};

export default Hero;
