import React from 'react';

const IndustriesTargetedSection = () => {
  return (
    <section className="w-full bg-black relative overflow-hidden pt-20 pb-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-20 left-3/4 w-1 h-1 bg-red-300 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-32 right-1/4 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '5s' }}></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight mb-8">
            Industries Targeted
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed">
            In Q1 2025, cyberattacks surged across multiple sectors, with{' '}
            <strong className="text-white font-semibold">five industries</strong>{' '}
            standing out as the most frequently targeted, based on{' '}
            <strong className="text-white font-semibold">average weekly attacks</strong>{' '}
            per organization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustriesTargetedSection; 