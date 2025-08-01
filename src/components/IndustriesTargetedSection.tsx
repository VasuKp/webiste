import React from 'react';

const IndustriesTargetedSection = () => {
  return (
         <section className="w-full bg-black relative overflow-hidden pt-12 pb-8">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-16 left-16 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-24 w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-24 left-1/3 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '4.5s' }}></div>
        <div className="absolute top-32 left-2/3 w-2 h-2 bg-red-300 rounded-full animate-pulse" style={{ animationDelay: '6s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '7.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
                     {/* Enhanced Title with gradient */}
           <div className="mb-4">
             <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Industries{' '}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Targeted
              </span>
            </h2>
          </div>
          
                     {/* Enhanced Description with better typography */}
           <div className="mb-8">
             <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl">
              In Q1 2025, cyberattacks surged across multiple sectors, with{' '}
              <span className="text-white font-semibold bg-red-500/10 px-3 py-1.5 rounded-lg border border-red-500/20">
                five industries
              </span>{' '}
              standing out as the most frequently targeted, based on{' '}
              <span className="text-white font-semibold bg-red-500/10 px-3 py-1.5 rounded-lg border border-red-500/20">
                average weekly attacks
              </span>{' '}
              per organization.
            </p>
          </div>

                     {/* Professional stats grid with enhanced design */}
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4 w-full max-w-4xl">
              <div className="group relative p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-red-400 mb-2 group-hover:text-red-300 transition-colors">
                 Q1 2025
               </div>
                               <div className="text-gray-300 text-sm font-medium">Analysis Period</div>
                <div className="text-gray-500 text-xs mt-1">Latest threat intelligence</div>
             </div>
             
                           <div className="group relative p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-red-400 mb-2 group-hover:text-red-300 transition-colors">
                  5
                </div>
                <div className="text-gray-300 text-sm font-medium">Critical Industries</div>
                <div className="text-gray-500 text-xs mt-1">Most vulnerable sectors</div>
             </div>
             
                           <div className="group relative p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-red-400 mb-2 group-hover:text-red-300 transition-colors">
                  Weekly
                </div>
                <div className="text-gray-300 text-sm font-medium">Attack Frequency</div>
                <div className="text-gray-500 text-xs mt-1">Ongoing threat monitoring</div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesTargetedSection; 