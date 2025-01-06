import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-orange-200'>
            <div className="relative z-10 flex flex-row items-center justify-center text-center text-black px-6 md:px-12">
                <h1 className="text-2xl md:text-6xl font-bold uppercase mb-2">
                    Where Law Meets Business
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
                    A registered professional law firm based in Tanzania, specializing in Corporate Governance,
                    Mergers & Acquisitions, Investment, Intellectual Property Law, Real Estate, Conveyancing,
                    and Tax Planning. With over ten years of collective experience, we offer innovative legal
                    business solutions nationwide from our headquarters in Arusha.
                </p>
            </div>
            <a
                href="http://www.lawbay.co.tz"
                className="px-8 py-4 bg-orange-300 text-black rounded-lg text-lg font-medium hover:bg-orange-100 transition"
            >
                Learn More
            </a>
        </div>
    )
}

export default Hero