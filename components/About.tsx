import { cn } from "@/lib/utils";
import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function About() {
  return (
    <div
      id="about"
      className="relative flex h-[50rem]
     w-full justify-center text-center pt-20  bg-white dark:bg-black"
    >
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="flex flex-col items-center">
        <h2 className="text-6xl font-bold m-20">About Us</h2>
        <TextGenerateEffect
          className={cn("max-w-4xl")}
          duration={0}
          filter={false}
          words=" We are a team of passionate freelancers dedicated to delivering
          innovative tech solutions. Our expertise spans across embedded
          systems, app development, and web development."
        />
        <TextGenerateEffect
          duration={0}
          filter={false}
          className={cn("max-w-4xl mt-10")}
          words="  We believe in collaboration, creativity, and cutting-edge technology
          to bring your ideas to life. From circuit design to intelligent code,
          we ensure efficiency and reliability."
        />
        <p className="mb-10 max-w-4xl text-xl"></p>
        <p className="max-w-4xl text-xl"></p>
      </div>
    </div>
  );
}
