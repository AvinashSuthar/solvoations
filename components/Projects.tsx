'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

// Import images
const project1Image =
    'https://res.cloudinary.com/dedt8znoc/image/upload/v1747412469/project-1_m5vj80.png'
const project2Image =
    'https://res.cloudinary.com/dedt8znoc/image/upload/v1747412470/project-2_djrrh7.png'
const project5Image =
    'https://res.cloudinary.com/dedt8znoc/image/upload/v1747412470/project-5_g0kqoa.png'
const project6Image =
    'https://res.cloudinary.com/dedt8znoc/image/upload/v1747412470/project-6_ynz1qt.png'
const project9Image =
    'https://res.cloudinary.com/dedt8znoc/image/upload/v1747412470/project-9_yrrppj.png'

import AOS from 'aos'
import 'aos/dist/aos.css' // You c

// Video paths
const starComputersVideo =
    'https://res.cloudinary.com/dedt8znoc/video/upload/v1747412706/star_computers_khs42s.mp4'
const himflixVideo =
    'https://res.cloudinary.com/dedt8znoc/video/upload/v1747412674/Himflix_pbgbzk.mp4'
const miniSpotifyVideo =
    'https://res.cloudinary.com/dedt8znoc/video/upload/v1747412733/Mini_Spotify_sxab5h.mp4'
const musicaVideo =
    'https://res.cloudinary.com/dedt8znoc/video/upload/v1747412660/musica_ym9sr0.mp4'
const weatherVideo =
    'https://res.cloudinary.com/dedt8znoc/video/upload/v1747412645/weather_xhtgkq.mp4'

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')

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

    const projects = [
        {
            id: '1',
            title: 'Star Computers',
            category: 'Web Development',
            image: project6Image,
            video: starComputersVideo,
            description: 'A website for a laptop selling shop.',
            links: { live: starComputersVideo },
            progress: 'Completed',
        },
        {
            id: '2',
            title: 'Himflix OTT Platform',
            category: 'App Development',
            image: project1Image,
            video: himflixVideo,
            description: 'An OTT platform for Himalayan movies and web series.',
            links: { live: himflixVideo },
            progress: 'Completed',
        },
        {
            id: '3',
            title: 'Mini Spotify',
            category: 'Web Development',
            image: project9Image,
            video: miniSpotifyVideo,
            description: 'A mini version of Spotify, to enjoy music.',
            links: { live: miniSpotifyVideo },
            progress: 'Working on it',
        },
        {
            id: '4',
            title: 'Musica',
            category: 'App Development',
            image: project2Image,
            video: musicaVideo,
            description: 'A Flutter app for music lovers.',
            links: { live: musicaVideo },
            progress: 'In Progress',
        },
        {
            id: '5',
            title: 'Weather Forecast App',
            category: 'App Development',
            image: project5Image,
            video: weatherVideo,
            description:
                'A Flutter-based mobile app for real-time weather forecast.',
            links: { live: weatherVideo },
            progress: 'Completed',
        },
    ]

    const categories = ['All', 'App Development', 'Web Development', 'Embedded']
    const filteredProjects =
        selectedCategory === 'All'
            ? projects
            : projects.filter((p) => p.category === selectedCategory)

    return (
        <section
            id="projects"
            className="min-h-screen bg-black px-5 py-10 text-center"
        >
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
                {filteredProjects.map((p, index) => (
                    <div
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                        key={p.id}
                        className="group relative overflow-hidden border border-gray-700 rounded-xl bg-[#181818] transition-transform transform hover:scale-105 shadow-lg"
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
