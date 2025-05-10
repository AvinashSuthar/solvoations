import { socialMedia } from '@/data'

const Footer = () => {
    return (
        <footer
            className="w-full lg:mb-0 md:mb-[50px] mb-[60px] mt-[100px] md:[mt-10px] lg:[mt-10px] pb-10 "
            id="footer"
        >
            <div className=" flex flex-col md:flex-row  justify-between items-center text-center md:text-left">
                <p className="md:text-base my-4   text-sm md:font-normal font-light">
                    Copyright © {new Date().getFullYear()}{' '}
                    <span className="text-purple-400">Solvaotions</span>
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <div
                            key={info.id}
                            className="w-10  h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <a
                                href={
                                    info.link.startsWith('http')
                                        ? info.link
                                        : `https://${info.link}`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={info.img}
                                    alt="icons"
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
