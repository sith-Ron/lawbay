import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-orange-200 py-1 px-4'>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center text-center text-black px-4 md:px-12 gap-6">
                <p className="text-base md:text-xl max-w-3xl leading-relaxed">
                    A registered professional law firm based in Tanzania, specializing in Corporate Governance,
                    Mergers & Acquisitions, Investment, Intellectual Property Law, Real Estate, Conveyancing,
                    and Tax Planning. With over ten years of collective experience, we offer innovative legal
                    business solutions nationwide from our headquarters in Arusha.
                </p>
                <img src="./law.png" alt="Law firm logo" className='w-16 md:w-20 h-auto' />
            </div>
            <a
                href="http://www.lawbay.co.tz"
                className="mt-6 px-6 md:px-8 py-3 md:py-4 bg-orange-300 text-black rounded-lg text-base md:text-lg font-medium hover:bg-orange-100 transition"
            >
                Learn More
            </a>
        </div>
    )
}

export default Hero