'use client'
import React, { useEffect, useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { cn } from '@/lib/utils'
import animationData from '@/public/confettie.json'

import { TextArea } from './ui/textarea'
import emailjs from 'emailjs-com'
import { BiPhone } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'
import { WorldMap } from './ui/WorldMap'
import dynamic from 'next/dynamic'
import { toast } from 'sonner'
import AOS from 'aos'
import 'aos/dist/aos.css' // You c

export function Contact() {
    const [copied, setCopied] = useState(false)
    useEffect(() => {
        AOS.init({
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 20,
            throttleDelay: 20,

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

    function validateForm() {
        const name = document.getElementById('name') as HTMLInputElement
        const email = document.getElementById('email') as HTMLInputElement
        const text = document.getElementById('text') as HTMLTextAreaElement

        if (!name.value || !email.value || !text.value) {
            toast.error('Please fill in all fields')
            return false
        }
        return true
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!validateForm()) {
            return
        }
        setCopied(true)

        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('text'),
        }
        console.log(data)
        emailjs.init('o6FCj7eybSWlzKniL')
        emailjs
            .send('service_gy57yxh', 'template_1hohhlv', data)
            .then(() => {
                console.log('Message sent successfully')
                toast.success('Message sent successfully')
                setTimeout(() => {
                    setCopied(false)
                }, 2000)
                form.reset()
            })
            .catch(() => {
                toast.error('Message failed to send')
                setCopied(false)
                console.log('Message failed to send')
            })
    }

    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    const Lottie = dynamic(() => import('react-lottie'), {
        ssr: false,
    })

    // const LazyWorldMap = dynamic(
    //     () => import('./ui/WorldMap').then((mod) => mod.WorldMap),
    //     {
    //         ssr: false, // only render on client
    //         loading: () => <p>Loading map...</p>,
    //     },
    // )

    return (
        <div
            id="contact"
            className="relative w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed transition-opacity duration-500 ease-in-out bg"
        >
            <div className="absolute inset-0 z-0 ">
                <img
                    src="/world.jpg"
                    alt="background"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>
            <div className="flex flex-col justify-center items-center bg-transparent z-20 text-white p-4 w-full">
                <h1 className="text-6xl font-semibold mb-12">
                    Contact <span className="text-purple-500">Us</span>{' '}
                </h1>
                <div className="flex justify-around flex-col md:flex-row lg:flex-row   w-full items-center min-h-[90%] ">
                    <div className="gap-10 flex flex-col  max-w-[90%]">
                        <h1
                            data-aos="fade-up"
                            className="lg:text-5xl md:text-4xl text-2xl"
                        >
                            Get in touch with us
                        </h1>
                        <div
                            data-aos="fade-up"
                            className="flex flex-col gap-4 m-3"
                        >
                            <div>
                                <div className="flex items-center gap-2">
                                    <BiPhone className="lg:text-2xl md:text-xl text-lg" />
                                    <span className="text-purple-500 lg:text-2xl md:text-xl text-lg">
                                        {' '}
                                        +91 74248 58358
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <MdEmail className="lg:text-2xl md:text-xl text-lg" />
                                    <span className="text-purple-500 lg:text-2xl md:text-xl text-lg">
                                        {' '}
                                        solvoations@gmail.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="fade-up"
                        className="flex flex-col justify-center items-center max-w-[90%]"
                    >
                        <div className="relative inline-flex overflow-hidden rounded-md p-[1px] ">
                            <span
                                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                            />
                            <span
                                className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-md bg-black px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
                            >
                                <div className=" relative shadow-input bg-transparent mx-auto w-full max-w-md rounded-none  p-4 md:rounded-2xl md:p-8 dark:bg-black">
                                    <div
                                        className={`absolute -bottom-5 right-0  ${
                                            copied ? 'block' : 'hidden'
                                        }`}
                                    >
                                        {/* <img src="/confetti.gif" alt="confetti" /> */}
                                        <Lottie
                                            options={defaultOptions}
                                            height={400}
                                            width={400}
                                        />
                                    </div>

                                    <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                                        Welcome to Solvaotions
                                    </h2>
                                    <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
                                        Fill the details and submit the form our
                                        team will connect with you in next 24
                                        hours.
                                    </p>

                                    <form
                                        className="my-8"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                                            <LabelInputContainer>
                                                <Label htmlFor="name">
                                                    Name
                                                </Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    placeholder="don"
                                                    type="text"
                                                />
                                            </LabelInputContainer>
                                        </div>
                                        <LabelInputContainer className="mb-4">
                                            <Label htmlFor="email">
                                                Email Address
                                            </Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                placeholder="solvaotions@Solvaotions.tech"
                                                type="email"
                                            />
                                        </LabelInputContainer>
                                        <LabelInputContainer className="mb-4">
                                            <Label htmlFor="text">
                                                Your Message
                                            </Label>
                                            <TextArea
                                                id="text"
                                                name="text"
                                                placeholder="Type your message here"
                                                type="text"
                                                className="h-32"
                                            />
                                        </LabelInputContainer>

                                        <button
                                            className="group/btn relative block h-10 w-full text-sm rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200 ease-in-out"
                                            type="submit"
                                        >
                                            Submit
                                            <BottomGradient />
                                        </button>
                                    </form>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    )
}

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => {
    return (
        <div className={cn('flex w-full flex-col space-y-2', className)}>
            {children}
        </div>
    )
}
