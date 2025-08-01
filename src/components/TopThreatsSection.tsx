import React from 'react';

interface Threat {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const TopThreatsSection: React.FC = () => {
  const threats: Threat[] = [
    {
      id: 1,
      title: "AI-Driven Malware",
      description: "Advanced AI-powered malware that can adapt and evolve in real-time, making traditional detection methods ineffective.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Zero-Day Exploits",
      description: "Previously unknown vulnerabilities that attackers discover and exploit before security patches are available.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Quantum Computing Threats",
      description: "Quantum computers capable of breaking current encryption standards, posing risks to data security.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Ransomware-as-a-Service",
      description: "Sophisticated ransomware platforms sold to cybercriminals, making advanced attacks accessible to non-technical threat actors.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "5G and Security Risks",
      description: "Expanded attack surface from 5G networks and IoT devices, creating new vulnerabilities in critical infrastructure.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Insider Threats",
      description: "Malicious or negligent actions by employees, contractors, or partners with authorized access to systems.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
    },
    {
      id: 7,
      title: "OT and IT Convergence Risks",
      description: "Security challenges from the integration of operational technology with information technology systems.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 8,
      title: "Cloud Container Vulnerabilities",
      description: "Security risks in containerized applications and microservices deployed in cloud environments.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 19l3 3 3-3M7 7l3-3 3 3" />
        </svg>
      ),
    },
    {
      id: 9,
      title: "Supply Chain Attacks",
      description: "Gartner predicts that by 2025, 45% of organizations will face supply chain attacks. Limited visibility into supplier security and growing system interdependencies make these threats more severe.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      id: 10,
      title: "Social Engineering using Deepfake",
      description: "In 2025, social engineering, powered by generative AI, will be the top security threat. Attackers will go beyond phishing, using deepfake calls, SMS scams, and fake social media personas.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-black py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.03),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-gradient-to-br from-red-500/25 via-red-600/20 to-red-700/25 rounded-2xl border border-red-500/30 backdrop-blur-sm shadow-lg shadow-red-500/15">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-red-400">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Top <span className="text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text">10 Threats</span> 2025
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Stay ahead of emerging cybersecurity challenges with our comprehensive analysis of the most critical threats facing organizations in 2025.
          </p>
        </div>

        {/* Main Threats Grid - Threats 1-8 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Threats 1-4 */}
          <div className="space-y-6">
            {threats.slice(0, 4).map((threat) => (
              <div key={threat.id} className="group relative overflow-hidden">
                <div className="relative bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-gray-900/70 border border-gray-600/40 rounded-2xl p-6 h-full hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/25 transition-all duration-500 backdrop-blur-sm bg-opacity-25 transform hover:scale-[1.01]">
                  {/* Background Effects */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-red-500/6 via-red-600/4 to-red-700/6"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(220,38,38,0.08),transparent_50%)]"></div>
                  </div>
                  
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/8 via-red-600/5 to-red-700/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl backdrop-blur-md"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="text-5xl font-black text-gray-400/25 leading-none tracking-tight">
                          {threat.id}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-gradient-to-br from-red-500/25 via-red-600/20 to-red-700/25 rounded-xl border border-red-500/30 backdrop-blur-sm shadow-md">
                            {threat.icon}
                          </div>
                          <h3 className="text-lg font-bold text-white leading-tight">{threat.title}</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm font-light">
                          {threat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Threats 5-8 */}
          <div className="space-y-6">
            {threats.slice(4, 8).map((threat) => (
              <div key={threat.id} className="group relative overflow-hidden">
                <div className="relative bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-gray-900/70 border border-gray-600/40 rounded-2xl p-6 h-full hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/25 transition-all duration-500 backdrop-blur-sm bg-opacity-25 transform hover:scale-[1.01]">
                  {/* Background Effects */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-red-500/6 via-red-600/4 to-red-700/6"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(220,38,38,0.08),transparent_50%)]"></div>
                  </div>
                  
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/8 via-red-600/5 to-red-700/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl backdrop-blur-md"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="text-5xl font-black text-gray-400/25 leading-none tracking-tight">
                          {threat.id}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-gradient-to-br from-red-500/25 via-red-600/20 to-red-700/25 rounded-xl border border-red-500/30 backdrop-blur-sm shadow-md">
                            {threat.icon}
                          </div>
                          <h3 className="text-lg font-bold text-white leading-tight">{threat.title}</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm font-light">
                          {threat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Threats 9-10 */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {threats.slice(8, 10).map((threat) => (
            <div key={threat.id} className="group relative overflow-hidden">
              <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-600/50 rounded-2xl p-6 h-full hover:border-red-500/60 hover:shadow-xl hover:shadow-red-500/30 transition-all duration-500 backdrop-blur-md bg-opacity-30 transform hover:scale-[1.02]">
                {/* Background Effects */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-red-500/10 via-red-600/6 to-red-700/10"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(220,38,38,0.12),transparent_50%)]"></div>
                </div>
                
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/12 via-red-600/8 to-red-700/12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl backdrop-blur-lg"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="text-6xl font-black text-gray-400/20 leading-none tracking-tight">
                        {threat.id}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-gradient-to-br from-red-500/35 via-red-600/30 to-red-700/35 rounded-xl border border-red-500/40 backdrop-blur-md shadow-lg">
                          {threat.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white leading-tight">{threat.title}</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-sm font-light">
                        {threat.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500/25 via-red-600/20 to-red-700/25 rounded-2xl border border-red-500/40 backdrop-blur-md shadow-xl shadow-red-500/15 hover:shadow-red-500/25 transition-all duration-500 transform hover:scale-105">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-red-400">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-white font-semibold text-base">Stay Protected with Advanced Threat Intelligence</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopThreatsSection; 