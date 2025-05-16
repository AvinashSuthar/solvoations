import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Script from 'next/script'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Solvaotions - Digital Solutions for Your Business',
    description:
        'Solvaotions specializes in web development, mobile app development, and embedded system development, providing cutting-edge digital solutions.',
    keywords:
        'Embedded Solutions, Software Developement, digital Agency, solvaotions ,Avinash suthar,  Web Development',
    openGraph: {
        title: 'Solvaotions - Digital Solutions for Your Business',
        description:
            'Solvaotions specializes in web development, mobile app development, and embedded system development, providing cutting-edge digital solutions.',
        url: 'https://solvaotions.tech',
        siteName: 'Solvaotions',
        locale: 'en_US',
        images: [
            {
                url: 'https://solvaotions.tech/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Solvaotions',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Solvaotions - Digital Solutions for Your Business',
        description:
            'Solvaotions specializes in web development, mobile app development, and embedded system development, providing cutting-edge digital solutions.',
        creator: '@avinashsuthar',
        site: '@avinashsuthar',
        images: ['https://solvaotions.tech/og-image.jpg'],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <Script
                    id="json-ld"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Organization',
                            name: 'Solvaotions',
                            url: 'https://solvaotions.tech',
                            mainEntity: {
                                '@type': 'Organization',
                                '@id': 'https://solvaotions.tech',
                                name: 'Solvaations',
                                url: 'https://solvaotions.tech',
                                logo: 'https://solvaotions.tech/logo.png',

                                sameAs: [
                                    'https://github.com/AvinashSuthar',
                                    'https://www.linkedin.com/in/avinash-suthar-970a56230',
                                    'https://www.instagram.com/avinashsutharr',
                                    'https://x.com/avinash__suthar',
                                    'https://github.com/Solvoations',
                                    'https://x.com/solvaotion2025',
                                    'https://www.linkedin.com/in/solvaotion-tech-927108354',
                                    'https://www.instagram.com/solvaotion',
                                ],
                                contactPoint: {
                                    '@type': 'ContactPoint',
                                    telephone: '+91-1234567890',
                                    contactType: 'Customer Service',
                                    areaServed: 'IN',
                                    availableLanguage: 'English',
                                },

                                worksFor: {
                                    '@type': 'Organization',
                                },
                            },

                            sameAs: [
                                'https://github.com/AvinashSuthar',
                                'https://www.linkedin.com/in/avinash-suthar-970a56230',
                                'https://www.instagram.com/avinashsutharr',
                                'https://x.com/avinash__suthar',
                                'https://github.com/Solvoations',
                                'https://x.com/solvaotion2025',
                                'https://www.linkedin.com/in/solvaotion-tech-927108354',
                                'https://www.instagram.com/solvaotion',
                            ],
                            jobTitle: 'Software Developer',
                            worksFor: {
                                '@type': 'Organization',
                                name: 'Solvaations',
                                url: 'https://solvaotions.tech',
                                logo: 'https://solvaotions.tech/logo.png',
                            },
                        }),
                    }}
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
