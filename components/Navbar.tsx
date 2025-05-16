'use client'
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from '@/components/ui/Navbar'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export function NavbarR() {
    const navItems = [
        { name: 'Home', link: '#home' },
        { name: 'Services', link: '#services' },
        { name: 'About', link: '#about' },
        { name: 'Projects', link: '#projects' },
        { name: 'FAQs', link: '#faq' },
        { name: 'Contact', link: '#contact' },
    ]

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navbarRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()
        tl.from(navbarRef.current, {
            y: -200,
            opacity: 0,
            duration: 1.5,
            ease: 'bounce.out',
        })
    }, [])
    return (
        <div ref={navbarRef} className=" w-full sticky top-0 z-50 navbar">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody className="">
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-8">
                        <NavbarButton variant="secondary" href="#contact">
                            <div className="relative inline-flex h-8 overflow-hidden rounded-md p-[1px] focus:outline-none">
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

                                <span
                                    className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md
                             bg-slate-950 px-3 text-sm font-medium text-white backdrop-blur-xs gap-2 `}
                                >
                                    <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                                        Get in Touch
                                    </span>
                                </span>
                            </div>
                        </NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-shadow-white text-center w-full mx-auto
                                "
                            >
                                <span className="block text-center">
                                    {item.name}
                                </span>
                            </a>
                        ))}
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
            {/* Navbar */}
        </div>
    )
}
