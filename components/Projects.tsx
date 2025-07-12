'use client'
import { categories, projects } from '@/data'
import { useGSAP } from '@gsap/react'
import React, { useState } from 'react'
import gsap from 'gsap'
import AnimationController from './Animations/AnimationController'

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')

    const filteredProjects =
        selectedCategory === 'All'
            ? projects
            : projects.filter((p) => p.category === selectedCategory)

    useGSAP(() => {
        gsap.fromTo(
            '.scale-in',
            {
                scale: 0,
                opacity: 0,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
            },
        )
    }, [filteredProjects])

    return (
        <section
            id="projects"
            className="min-h-screen bg-black px-5 py-10 text-center"
        >
            <AnimationController selector=".scale-in" animation="scale-in" />
            <h1 className="text-6xl font-semibold mb-12">
                Our <span className="text-purple-500">Projects</span>{' '}
            </h1>
            <div className="mb-8 flex flex-wrap gap-4 justify-center sm:justify-start">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-full transition text-sm font-medium ${
                            selectedCategory === cat
                                ? 'bg-white text-black'
                                : 'text-white border border-white hover:bg-white hover:text-black'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((p) => (
                    <div
                        key={p.id}
                        className="group opacity-0 scale-in relative overflow-hidden border border-gray-700 rounded-xl bg-[#181818] transition-transform transform hover:scale-105 shadow-lg"
                    >
                        <div className="relative w-full aspect-video">
                            <img
                                width={500}
                                height={500}
                                src={p.image}
                                alt={p.title}
                                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                            />
                            <video
                                src={p.video}
                                autoPlay
                                muted
                                loop
                                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-sm text-green-400">
                                {p.progress}
                            </p>
                            <h3 className="text-xl font-semibold text-white">
                                {p.title}
                            </h3>
                            <p className="text-white mt-1 text-sm">
                                {p.description}
                            </p>
                            <a
                                href={p.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                            >
                                View Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
