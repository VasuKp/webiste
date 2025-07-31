import React from 'react';
import firstImage from '../assets/firstimage.jpg';

const industries = [
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white/80"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20v-6m0 0V4m0 10c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" /></svg>
    ),
    title: 'Education',
    stat: '4,484 attacks',
    desc: (
      <>
        Educational institutions were the hardest hit, largely due to their broad attack surface, <span className="font-semibold text-white">limited cybersecurity funding</span>, and <span className="font-semibold text-white">high volume of personally identifiable information (PII)</span>. The sector's shift toward digital learning platforms and remote access infrastructure has further amplified vulnerabilities.
      </>
    ),
    bg: firstImage,
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white/80"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20v-6m0 0V4m0 10c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" /></svg>
    ),
    title: 'Telecommunications',
    stat: '2,664 attacks',
    desc: (
      <>
        The telecommunications industry plays a critical role in <span className="font-semibold text-white">global connectivity</span>, making it an attractive target for threat actors aiming to disrupt essential services. Attackers exploit outdated infrastructure, unpatched systems, and the <span className="font-semibold text-white">increased use of IoT and 5G technologies</span> to infiltrate networks and carry out espionage or DDoS attacks.
      </>
    ),
    bg: firstImage,
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white/80"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20v-6m0 0V4m0 10c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" /></svg>
    ),
    title: 'Government',
    stat: '2,678 attacks',
    desc: (
      <>
        Government agencies hold vast amounts of sensitive citizen data and critical national infrastructure. Their high-profile nature and <span className="font-semibold text-white">geopolitical significance</span> make them constant targets for state-sponsored attacks, data breaches, and hacktivism.
      </>
    ),
    bg: firstImage,
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white/80"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20v-6m0 0V4m0 10c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" /></svg>
    ),
    title: 'Healthcare & Medical',
    stat: '2,430 attacks',
    desc: (
      <>
        The healthcare sector continues to face significant cyber risk due to the value of <span className="font-semibold text-white">electronic health records (EHRs)</span> and operational <span className="font-semibold text-white">dependency on interconnected medical devices</span>. Attackers often exploit this environment with ransomware, knowing that downtime can directly impact patient safety, making victims more likely to pay.
      </>
    ),
    bg: firstImage,
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white/80"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20v-6m0 0V4m0 10c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" /></svg>
    ),
    title: 'Automotive',
    stat: '2,145 attacks',
    desc: (
      <>
        As modern vehicles become increasingly connected through <span className="font-semibold text-white">digital ecosystems</span>, the automotive industry has emerged as a key cyber target. Threat actors focus on exploiting vulnerabilities in autonomous systems, supply chains, and customer data platforms, potentially aiming at intellectual property theft or supply chain disruption.
      </>
    ),
    bg: firstImage,
  },
];

const glassCard = "bg-gradient-to-br from-black/60 via-black/40 to-black/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg";

const IndustriesGridSection = () => {
  return (
    <section className="w-full bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-8">
          {/* First row: 2 cards, each col-span-6 */}
          {industries.slice(0, 2).map((industry, idx) => (
            <div key={idx} className={`relative group col-span-12 md:col-span-6 min-h-[340px] flex flex-col justify-between overflow-hidden ${glassCard}`}>
              {/* Background image */}
              <img src={industry.bg} alt="" className="absolute inset-0 w-full h-full object-cover object-center z-0 group-hover:scale-105 transition-transform duration-500" />
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/30 backdrop-blur-md z-10" />
              {/* Content */}
              <div className="relative z-20 p-8 flex flex-col h-full justify-between">
                <div className="mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-1 leading-tight">{industry.title}</h3>
                <div className="text-xl font-normal text-white mb-2">{industry.stat}</div>
                <div className="text-base text-gray-300 leading-relaxed">{industry.desc}</div>
              </div>
            </div>
          ))}
          {/* Second row: 3 cards, each col-span-4 */}
          {industries.slice(2).map((industry, idx) => (
            <div key={idx} className={`relative group col-span-12 md:col-span-4 min-h-[340px] flex flex-col justify-between overflow-hidden ${glassCard}`}>
              <img src={industry.bg} alt="" className="absolute inset-0 w-full h-full object-cover object-center z-0 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/30 backdrop-blur-md z-10" />
              <div className="relative z-20 p-8 flex flex-col h-full justify-between">
                <div className="mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-1 leading-tight">{industry.title}</h3>
                <div className="text-xl font-normal text-white mb-2">{industry.stat}</div>
                <div className="text-base text-gray-300 leading-relaxed">{industry.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGridSection;