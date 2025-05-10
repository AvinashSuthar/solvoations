'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

// Import images
import project1Image from '../public/images/project-1.png'
import project2Image from '../public/images/project-2.png'
import project5Image from '../public/images/project-5.png'
import project6Image from '../public/images/project-6.png'
import project9Image from '../public/images/project-9.png'

import AOS from 'aos'
import 'aos/dist/aos.css' // You c

// Video paths
const starComputersVideo = '/videos/star-computers.mp4'
const himflixVideo = '/videos/Himflix.mp4'
const miniSpotifyVideo = '/videos/Mini-Spotify.mp4'
const musicaVideo = '/videos/musica.mp4'
const weatherVideo = '/videos/weather.mp4'

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
                {filteredProjects.map((p) => (
                    <div
                        data-aos="zoom-in-up"
                        key={p.id}
                        className="group relative overflow-hidden border border-gray-700 rounded-xl bg-[#181818] transition-transform transform hover:scale-105 shadow-lg"
                    >
                        <div className="relative w-full aspect-video">
                            <Image
                                src={p.image}
                                alt={p.title}
                                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                                loading="lazy"
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
