'use client'
import React, { JSX } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaCode } from 'react-icons/fa'
import { FcElectronics } from 'react-icons/fc'
import { CiMobile3 } from 'react-icons/ci'
import { CanvasRevealEffect } from './ui/CanvasRevealEffect'

export function Services() {
    return (
        <section
            className="w-full bg-black py-20 px-4 text-center"
            id="services"
        >
            <h1 className="text-6xl font-semibold mb-12">
                Our <span className="text-purple-500">Services</span>{' '}
            </h1>

            <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-8 spring-bottom opacity-0">
                <Card
                    title="Embedded"
                    icon={<AceternityIcon order={<FcElectronics />} />}
                    des="We specialize in developing robust embedded systems that seamlessly integrate hardware with software. Our solutions are tailored for high efficiency, low power consumption, and real-time performance. Whether it's IoT devices, microcontroller programming, or firmware development, we bring precision engineering and deep technical expertise to every project to ensure reliable and scalable embedded systems."
                >
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
                    />
                </Card>

                <Card
                    title="Web Development"
                    icon={<AceternityIcon order={<FaCode />} />}
                    des="We create responsive, dynamic, and fully scalable websites that are tailored specifically to your brand and business goals. From landing pages to complex web applications, we ensure seamless performance across all devices. Our solutions focus on speed, accessibility, and modern design to provide your users with an exceptional browsing experience."
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
                        colors={[
                            [255, 166, 158],
                            [221, 255, 247],
                        ]}
                        dotSize={2}
                    />
                </Card>

                <Card
                    title="App Development"
                    icon={<AceternityIcon order={<CiMobile3 />} />}
                    des="We specialize in building high-performance, scalable, and user-friendly mobile applications tailored for both Android and iOS platforms. Whether you're launching a startup or enhancing an existing service, our cross-platform development approach ensures fast delivery, seamless functionality, and a great user experience — all powered by the latest technologies and frameworks."
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </section>
    )
}

const Card = ({
    title,
    icon,
    children,
    des,
}: {
    title: string
    icon: React.ReactNode
    children?: React.ReactNode
    des: string
}) => {
    const [hovered, setHovered] = React.useState(false)
    const [isMobile, setIsMobile] = React.useState<boolean | null>(null)

    React.useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkIsMobile()
        window.addEventListener('resize', checkIsMobile)

        return () => window.removeEventListener('resize', checkIsMobile)
    }, [])

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative border border-black/[0.2] dark:border-white/[0.2] group/canvas-card flex items-center justify-center max-w-sm w-full p-6 lg:h-[35rem] h-auto rounded-3xl bg-gradient-to-br from-[#04071d] to-[#0c0e23]"
        >
            <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
            <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
            <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
            <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

            <AnimatePresence>
                {(hovered || isMobile) && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 h-full w-full"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20 px-4 pt-6">
                <div
                    className={`text-center ${
                        hovered && isMobile
                            ? 'opacity-0 -translate-y-4'
                            : 'opacity-100'
                    } transition duration-200 min-w-40 mx-auto flex items-center justify-center`}
                >
                    {icon}
                </div>

                <h2 className="text-center text-2xl md:text-3xl mt-6 font-bold transition duration-200 text-white">
                    {title}
                </h2>

                <p className="text-sm mt-4 text-center text-[#E4ECFF] leading-relaxed">
                    {des}
                </p>
            </div>
        </div>
    )
}

const AceternityIcon = ({ order }: { order: JSX.Element }) => {
    return (
        <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl">
                {order}
            </span>
        </button>
    )
}

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
            />
        </svg>
    )
}
