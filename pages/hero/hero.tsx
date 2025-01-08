import { Slide } from 'react-awesome-reveal';
import React from 'react'


const HeroSection = () => {
    return (
        <div className="pt-20">
            <Slide direction="left" triggerOnce>

                <div className="relative">
                    <div
                        className="absolute inset-0 z-0 bg-black bg-cover bg-center"
                        style={{ backgroundImage: "url('./law.png')", opacity: "0.3" }}
                    />
                    <div className="relative flex flex-col items-center justify-center min-h-screen text-white dark:text-white py-8 px-4">
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center text-center px-4 md:px-12 gap-6">
                            <p className="text-base md:text-xl max-w-3xl leading-snug">
                                A registered professional law firm based in Tanzania, specializing
                                in Corporate Governance, Mergers & Acquisitions, Investment,
                                Intellectual Property Law, Real Estate, Conveyancing, and Tax
                                Planning. With over ten years of collective experience, we offer
                                innovative legal business solutions nationwide from our headquarters
                                in Arusha.
                            </p>
                        </div>


                        <a
                            href="http://www.lawbay.co.tz"
                            className="relative z-10 mt-6 px-6 md:px-8 py-3 md:py-4 bg-orange-300 text-black rounded-lg text-base md:text-lg font-medium hover:bg-orange-100 transition"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default HeroSection;