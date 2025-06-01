import AnimationController from './Animations/AnimationController'

export function About() {
    return (
        <div
            id="about"
            className="relative flex h-[70rem] md:h-[55rem] lg:h-[40rem] 
     w-full justify-center text-center pt-20 text-white  bg-white dark:bg-black"
            style={{
                backgroundImage: "url('/about.jpg')",
                backgroundSize: 'cover',
            }}
        >
            <AnimationController selector=".fade-in-up" />

            <div className="flex flex-col items-center">
                <h1 className="text-6xl font-semibold mb-12 fade-in-up opacity-0">
                    About <span className="text-purple-500">Us</span>{' '}
                </h1>
                <div className=" grid gap-3 max-w-4xl text-justify px-5">
                    <h1 className="text-3xl text-white text-center   font-semibold fade-in-up opacity-0">
                        Your Partner in Digital Growth
                    </h1>
                    <p className="text-lg text-neutral-400 lg:text-xl mt-10 fade-in-up opacity-0">
                        Solvaotions is a leading provider of comprehensive
                        digital solutions, specializing in embedded systems,
                        full-stack web and app development. Our mission is to
                        empower businesses by delivering innovative and scalable
                        solutions tailored to meet their unique needs. Whether
                        it's crafting seamless user experiences or building
                        robust backend systems, we are your trusted partner in
                        driving digital growth and success.
                    </p>
                    <p className="text-lg text-neutral-400 lg:text-xl mt-10 fade-in-up opacity-0">
                        At Solvaotions, we pride ourselves on our commitment to
                        excellence and customer satisfaction. Our team of
                        experienced professionals works collaboratively to
                        transform your ideas into reality, leveraging
                        cutting-edge technologies and industry best practices.
                        Together, we aim to create impactful solutions that not
                        only meet your expectations but also exceed them,
                        ensuring your business stays ahead in an ever-evolving
                        digital landscape.
                    </p>
                </div>
                <p className="mb-10 max-w-4xl text-xl"></p>
                <p className="max-w-4xl text-xl"></p>
            </div>
        </div>
    )
}
