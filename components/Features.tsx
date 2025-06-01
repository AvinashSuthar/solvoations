const abilities = [
    {
        imgPath: '/images/seo.png',
        title: 'Quality Focus',
        desc: 'Delivering high-quality results while maintaining attention to every detail.',
    },
    {
        imgPath: '/images/chat.png',
        title: 'Reliable Communication',
        desc: 'Keeping you updated at every step to ensure transparency and clarity.',
    },
    {
        imgPath: '/images/time.png',
        title: 'On-Time Delivery',
        desc: 'Making sure projects are completed on schedule, with quality & attention to detail.',
    },
]

const FeatureCards = () => {
    return (
        <div className="w-full padding-x-lg my-3">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
                {abilities.map(({ imgPath, title, desc }, index) => (
                    <div
                        key={title}
                        className="border border-black-50 bg-black-100; rounded-xl p-8 flex flex-col gap-4 fade-in-up opacity-0"
                    >
                        <div className="size-14 flex items-center justify-center rounded-full">
                            <img src={imgPath} alt={title} />
                        </div>
                        <h3 className="text-white text-2xl font-semibold mt-2">
                            {title}
                        </h3>
                        <p className="text-white-50 text-lg">{desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeatureCards
