"use client";
import React, { useState } from 'react';
import { Slide } from 'react-awesome-reveal';

const services = [
  {
    name: 'Family Law',
    description: 'Our Family Law attorneys provide counsel and representation in all aspects of family law, including divorce, child custody, child support, alimony, and more.',
    details: 'Detailed explanation about Family Law services, including the benefits of consulting our experts and how we ensure a smooth process during legal disputes.',
  },
  {
    name: 'Personal Injury',
    description: 'Our Personal Injury attorneys provide compassionate and experienced representation to individuals who have been injured due to the negligence of another.',
    details: 'We specialize in Personal Injury claims and aim to secure maximum compensation for our clients, handling everything from legal paperwork to representation in court.',
  },
  {
    name: 'Criminal Defense',
    description: 'Our Criminal Defense attorneys provide tenacious and strategic representation to individuals facing criminal charges.',
    details: 'Our Criminal Defense team is dedicated to protecting your rights and achieving the best possible outcome in your case, no matter the complexity.',
  },
  {
    name: 'Business Law',
    description: 'Our Business Law attorneys provide legal counsel and representation to businesses of all sizes, from start-ups to large corporations.',
    details: 'We assist businesses with everything from formation and contracts to mergers and dispute resolution, ensuring legal compliance and strategic growth.',
  },
  {
    name: 'Real Estate Law',
    description: 'Our Real Estate Law attorneys provide legal counsel and representation to individuals and businesses involved in real estate transactions.',
    details: 'Our Real Estate services include document preparation, title checks, dispute resolution, and smooth closing procedures for buyers and sellers alike.',
  },
  {
    name: 'Estate Planning',
    description: 'Our Estate Planning attorneys provide legal counsel and representation to individuals and families seeking to plan for the future.',
    details: 'We offer comprehensive estate planning services, including drafting wills, setting up trusts, and ensuring smooth asset transfer for your loved ones.',
  },
];

const Hero = () => {
  const [selectedService, setSelectedService] = useState<{name: string; description: string; details: string;} | null>(null);

  return (
    <section className="bg-white py-8">
      <Slide direction="up" triggerOnce>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-orange-200 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-gray-800">{service.name}</h3>
              <p className="mt-2 text-lg text-gray-600">{service.description}</p>
              <button
                className="mt-4 text-orange-700 underline hover:text-orange-900"
                onClick={() => setSelectedService(service)}
              >
                Read More
              </button>
            </div>
          ))}
        </div>

        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-2xl font-bold text-gray-800">{selectedService.name}</h3>
              <p className="mt-4 text-lg text-gray-600">{selectedService.details}</p>
              <button
                className="mt-6 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700"
                onClick={() => setSelectedService(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      </Slide>
    </section>
  );
};

export default Hero;
