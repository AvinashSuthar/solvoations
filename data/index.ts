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
const project7Image =
    'https://res.cloudinary.com/dnjiqvkrc/image/upload/v1753581360/WhatsApp_Image_2025-07-02_at_1.38.12_AM_aoblx0.jpg'

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
export const socialMedia = [
    {
        id: 1,
        img: '/git.svg',
        link: 'https://github.com/Solvoations',
    },
    {
        id: 2,
        img: '/twit.svg',
        link: 'https://x.com/solvaotion2025',
    },
    {
        id: 3,
        img: '/link.svg',
        link: 'https://www.linkedin.com/in/solvaotion-tech-927108354',
    },
    {
        id: 4,
        img: '/insta.svg',
        link: 'https://www.instagram.com/solvaotion',
    },
]

export const faqData = [
    {
        question: 'What services do you offer?',
        answer: 'We provide end-to-end solutions in software development, embedded firmware, electronics design, and app development. Our expertise spans across multiple domains, ensuring that we can cater to a wide range of technical requirements. Whether you need a custom software application, a robust embedded system, or a cutting-edge electronic design, we have the skills and experience to deliver high-quality results tailored to your needs.',
        color: 'purple',
    },
    {
        question: 'Can you develop a complete product?',
        answer: 'Absolutely! We specialize in taking your ideas from concept to reality. Our team can handle everything from initial prototyping and design to production and deployment. This includes hardware design, firmware development, software integration, and testing. We ensure that every aspect of the product is meticulously crafted to meet your specifications and industry standards.',
        color: 'blue',
    },
    {
        question: 'Do you offer OEM products?',
        answer: 'Yes, we offer OEM (Original Equipment Manufacturer) products that can be customized to meet your specific requirements. Our solutions are designed to seamlessly integrate into your existing systems or workflows, providing you with a tailored product that aligns with your business goals. Whether it’s a custom PCB, firmware, or software, we ensure that our OEM products deliver exceptional performance and reliability.',
        color: 'green',
    },
    {
        question: 'Which industries do you serve?',
        answer: 'We serve a diverse range of industries, including IoT (Internet of Things), industrial automation, consumer electronics, automotive, healthcare, and more. Our multidisciplinary expertise allows us to adapt to the unique challenges and requirements of each industry, delivering innovative solutions that drive efficiency, productivity, and growth.',
        color: 'orange',
    },
    {
        question: 'How can I collaborate with you?',
        answer: 'Collaborating with us is simple and straightforward. You can reach out to us via email or fill out the contact form on our website. Once we receive your inquiry, our team will get in touch with you to discuss your project requirements in detail. We’ll work closely with you to understand your vision, provide expert guidance, and develop a tailored solution that meets your objectives.',
        color: 'red',
    },
]

export const projects = [
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
        progress: 'Completed',
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
    {
        id: '6',
        title: 'IOT Firmware OTA update on ESP32 over AWS',
        category: 'Embedded',
        image: project2Image,
        description:
            'Developed a secure OTA firmware update system for ESP32 devices with AWS integration for seamless delivery and communication. Credentials and configurations were securely stored onboard. The solution included rollback safety, thorough testing, and clear documentation for reliable and efficient updates.',
        links: { live: 'weatherVideo' },
        progress: 'Completed',
    },
    {
        id: '7',
        title: 'Ropay',
        category: 'Embedded',
        image: project7Image,
        description:
            'Designed and developed a smart plug-and-play device for water RO rental systems with subscription-based control. Enabled real-time monitoring and alerts through a mobile app, web dashboard, Wi-Fi, and BLE. Integrated automated features like flow cutoff, diagnostics, and water quality tracking. Delivered a scalable solution that enhanced operational efficiency and improved the customer experience for service providers.',
        links: { live: 'weatherVideo' },
        progress: 'Completed',
    },
]

export const categories = [
    'All',
    'App Development',
    'Web Development',
    'Embedded',
]
