import React from 'react';
import firstImage from '../assets/first.png';

const industries = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    title: 'Education',
    stat: '4,484',
    unit: 'attacks',
    desc: (
      <>
        Educational institutions were the hardest hit, largely due to their broad attack surface, <span className="font-semibold text-white">limited cybersecurity funding</span>, and <span className="font-semibold text-white">high volume of personally identifiable information (PII)</span>.
      </>
    ),
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    title: 'Telecommunications',
    stat: '2,664',
    unit: 'attacks',
    desc: (
      <>
        The telecommunications industry plays a critical role in <span className="font-semibold text-white">global connectivity</span>, making it an attractive target for threat actors aiming to disrupt essential services.
      </>
    ),
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Government',
    stat: '2,678',
    unit: 'attacks',
    desc: (
      <>
        Government agencies hold vast amounts of sensitive citizen data and critical national infrastructure. Their high-profile nature and <span className="font-semibold text-white">geopolitical significance</span> make them constant targets.
      </>
    ),
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0L4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 006.364-6.364L12 7.636z" />
      </svg>
    ),
    title: 'Healthcare & Medical',
    stat: '2,430',
    unit: 'attacks',
    desc: (
      <>
        The healthcare sector continues to face significant cyber risk due to the value of <span className="font-semibold text-white">electronic health records (EHRs)</span> and operational <span className="font-semibold text-white">dependency on interconnected medical devices</span>.
      </>
    ),
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Automotive',
    stat: '2,145',
    unit: 'attacks',
    desc: (
      <>
        As modern vehicles become increasingly connected through <span className="font-semibold text-white">digital ecosystems</span>, the automotive industry has emerged as a key cyber target for threat actors.
      </>
    ),
  },
];

const IndustriesGridSection = () => {
  return (
         <section className="w-full bg-black py-12">
      <div className="container mx-auto px-6">
                 <div className="grid grid-cols-12 gap-6">
          {/* First row: 2 cards, each col-span-6 */}
          {industries.slice(0, 2).map((industry, idx) => (
            <div key={idx} className="group relative col-span-12 md:col-span-6 overflow-hidden">
                                                           <div className="relative bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 border border-gray-600/40 rounded-3xl p-5 h-full hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 backdrop-blur-sm bg-opacity-20">
                {/* Background image */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <img
                    src={firstImage}
                    alt=""
                    className="w-full h-full object-cover opacity-20"
                  />
                </div>
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/8 via-red-600/4 to-red-700/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl backdrop-blur-md"></div>
                
                <div className="relative z-10">
                  {/* Header with icon and title */}
                                     <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                                             <div className="p-3 bg-gradient-to-br from-red-500/20 via-red-600/15 to-red-700/20 rounded-2xl border border-red-500/30 backdrop-blur-sm bg-opacity-30">
                        {industry.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{industry.title}</h3>
                                                 <div className="flex items-baseline gap-2">
                           <span className="text-3xl font-bold text-red-500">{industry.stat}</span>
                           <span className="text-sm text-gray-400 font-medium">{industry.unit}</span>
                         </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="text-gray-300 leading-relaxed text-base">
                    {industry.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Second row: 3 cards, each col-span-4 */}
          {industries.slice(2).map((industry, idx) => (
            <div key={idx} className="group relative col-span-12 md:col-span-4 overflow-hidden">
                             <div className="relative bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 border border-gray-600/40 rounded-3xl p-6 h-full hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 backdrop-blur-sm bg-opacity-20">
                {/* Background image */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <img
                    src={firstImage}
                    alt=""
                    className="w-full h-full object-cover opacity-20"
                  />
                </div>
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/8 via-red-600/4 to-red-700/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl backdrop-blur-md"></div>
                
                <div className="relative z-10">
                  {/* Header with icon and title */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                                             <div className="p-2 bg-gradient-to-br from-red-500/20 via-red-600/15 to-red-700/20 rounded-xl border border-red-500/30 backdrop-blur-sm bg-opacity-30">
                        {industry.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{industry.title}</h3>
                                                 <div className="flex items-baseline gap-1">
                           <span className="text-2xl font-bold text-red-500">{industry.stat}</span>
                           <span className="text-xs text-gray-400 font-medium">{industry.unit}</span>
                         </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="text-gray-300 leading-relaxed text-sm">
                    {industry.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGridSection;