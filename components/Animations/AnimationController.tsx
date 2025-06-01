'use client'

import { useEffect } from 'react'
import gsap from 'gsap'

type AnimationType =
    | 'fade-in-up'
    | 'scale-in'
    | 'slide-left'
    | 'spring-left'
    | 'spring-right'
    | 'spring-bottom'
    | 'spring-top-right'
    | 'spring-top-left'
    | 'spring-bottom-right'
    | 'custom'
    | 'slide-right'

interface AnimationControllerProps {
    selector: string
    animation?: AnimationType
    delay?: number
    duration?: number
    stagger?: number
    customAnimation?: {
        from?: gsap.TweenVars
        to?: gsap.TweenVars
    }
}

export default function AnimationController({
    selector,
    animation = 'fade-in-up',
    delay = 0,
    duration = 1,
    stagger = 300,
    customAnimation,
}: AnimationControllerProps) {
    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>(selector)
        if (!elements.length) return

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEls: HTMLElement[] = []

                entries.forEach((entry) => {
                    const el = entry.target as HTMLElement
                    if (entry.isIntersecting) {
                        visibleEls.push(el)
                    } else {
                        // Reset styles when element exits the viewport
                        gsap.set(el, { clearProps: 'all' })
                    }
                })

                if (visibleEls.length) {
                    let fromVars: gsap.TweenVars = {}
                    let toVars: gsap.TweenVars = {
                        delay,
                        duration,
                        stagger: stagger / 1000, // convert to seconds
                    }

                    switch (animation) {
                        case 'fade-in-up':
                            fromVars = { opacity: 0, y: 240 }
                            toVars = { ...toVars, opacity: 1, y: 0 }
                            break

                        case 'scale-in':
                            fromVars = { scale: 0.7, opacity: 0 }
                            toVars = {
                                ...toVars,
                                scale: 1,
                                opacity: 1,
                                stagger: 0.2,
                                duration: 1.3,
                                ease: 'back.out(1.7)',
                            }
                            break

                        case 'slide-left':
                            fromVars = { x: 500, opacity: 0 }
                            toVars = {
                                ...toVars,
                                x: 0,
                                opacity: 1,
                                duration: 1.5,
                            }
                            break
                        case 'slide-right':
                            fromVars = { x: -500, opacity: 0 }
                            toVars = {
                                ...toVars,
                                x: 0,
                                opacity: 1,
                                duration: 1.5,
                            }
                            break

                        case 'spring-left':
                            fromVars = { x: -400, opacity: 0 }
                            toVars = {
                                ...toVars,
                                x: 0,
                                opacity: 1,
                                ease: 'elastic.out(1, 0.4)',
                                duration: 1.2,
                            }
                            break

                        case 'spring-right':
                            fromVars = { x: 200, opacity: 0 }
                            toVars = {
                                ...toVars,
                                x: 0,
                                opacity: 1,
                                ease: 'elastic.out(1, 0.4)',
                                duration: 2.2,
                            }
                            break

                        case 'spring-bottom':
                            fromVars = { y: 400, opacity: 0 }
                            toVars = {
                                ...toVars,
                                y: 0,
                                opacity: 1,
                                ease: 'elastic.out(1, 0.4)',
                                duration: 2.2,
                            }
                            break

                        case 'spring-top-right':
                            fromVars = { x: 200, y: -200, opacity: 0 }
                            toVars = {
                                ...toVars,
                                x: 0,
                                y: 0,
                                opacity: 1,
                                ease: 'back.out(1.7)',
                                duration: 1.3,
                            }
                            break

                        case 'spring-top-left':
                            fromVars = { x: -200, y: -200, opacity: 0 }
                            toVars = {
                                ...toVars,
                                x: 0,
                                y: 0,
                                opacity: 1,
                                ease: 'back.out(1.7)',
                                duration: 1.3,
                            }
                            break

                        case 'spring-bottom-right':
                            fromVars = { x: 200, y: 200, opacity: 0 }
                            toVars = {
                                ...toVars,
                                x: 0,
                                y: 0,
                                opacity: 1,
                                ease: 'back.out(1.7)',
                                duration: 1.3,
                            }
                            break

                        case 'custom':
                            fromVars = customAnimation?.from || {}
                            toVars = {
                                ...toVars,
                                ...(customAnimation?.to || {}),
                            }
                            break
                    }

                    gsap.set(visibleEls, fromVars)
                    gsap.to(visibleEls, toVars)
                }
            },
            {
                root: null,
                threshold: 0.1,
            },
        )

        elements.forEach((el) => observer.observe(el))

        return () => {
            elements.forEach((el) => observer.unobserve(el))
        }
    }, [selector, animation, delay, duration, stagger, customAnimation])

    return null
}
