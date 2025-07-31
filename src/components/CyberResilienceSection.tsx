import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import cyberSphere from "@/assets/cyber-sphere.jpg";

const CyberResilienceSection = () => {
const [animationStarted, setAnimationStarted] = useState(false);

useEffect(() => {
    const timer = setTimeout(() => setAnimationStarted(true), 500);
    return () => clearTimeout(timer);
}, []);

// Chart data for Regional Cyber Resilience
const chartData = [
    { region: "Latin America", data: [42, 10, 14, 34] },
    { region: "Africa", data: [36, 27, 27, 9] },
    { region: "Asia", data: [30, 29, 31, 9] },
    { region: "Middle East", data: [21, 29, 36, 13] },
    { region: "Europe", data: [19, 19, 44, 17] },
    { region: "North America", data: [0, 10, 55, 28] },
];

return (
    <section className="w-full min-h-screen bg-black relative overflow-hidden">

    {/* Animated background elements */}
    <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-20 left-3/4 w-1 h-1 bg-red-300 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-32 right-1/4 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '5s' }}></div>
    </div>

    <div className="container mx-auto px-6 py-20">
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side - Horizontal Stacked Bar Chart */}
        <div className="flex flex-col justify-center">
            <div className="space-y-8">
                {/* Chart */}
                <div className="space-y-4">
                    {chartData.map(({ region, data }, index) => {
                        const [notConf, neutral, conf, veryConf] = data;
                        const barSegments = [
                            { value: notConf, color: '#FF4C4C', label: 'Not Confident' },
                            { value: neutral, color: '#8D99AE', label: 'Neutral' },
                            { value: conf, color: '#3A86FF', label: 'Confident' },
                            { value: veryConf, color: '#2B2D42', label: 'Very Confident' },
                        ];
                        return (
                            <div key={region} className="flex items-center gap-4 group">
                                <div className="w-24 text-sm text-white font-medium">{region}</div>
                                <div className="flex-1 flex h-8 rounded-lg overflow-hidden">
                                    {barSegments.map((seg, i) => (
                                        <div
                                            key={seg.label}
                                            className="relative flex items-center justify-center h-full transition-all duration-300 ease-in-out cursor-pointer group/bar hover:z-10"
                                            style={{
                                                width: `${seg.value}%`,
                                                background: seg.color,
                                                minWidth: seg.value ? 24 : 0,
                                                boxShadow: seg.value ? '0 2px 8px 0 rgba(0,0,0,0.10)' : 'none',
                                                borderRadius: i === 0 ? '8px 0 0 8px' : i === 3 ? '0 8px 8px 0' : '0',
                                                marginLeft: i === 0 ? 0 : '-2px',
                                                border: 'none',
                                                opacity: seg.value ? 1 : 0,
                                                transition: 'transform 0.2s cubic-bezier(.4,0,.2,1), box-shadow 0.2s cubic-bezier(.4,0,.2,1)',
                                                transform: 'scale(1)',
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                        >
                                            {seg.value > 0 && (
                                                <span className="text-xs font-medium text-white/90 drop-shadow-sm select-none" style={{
                                                    textShadow: '0 1px 4px rgba(0,0,0,0.18)',
                                                    letterSpacing: '0.01em',
                                                }}>
                                                    {seg.value}%
                                                </span>
                                            )}
                                            {/* Tooltip */}
                                            {seg.value > 0 && (
                                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-black/80 text-white text-xs opacity-0 group-hover/bar:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-20 shadow-lg border border-white/10">
                                                    {seg.label}
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                {/* Legend */}
                <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs select-none">
                    <div className="flex items-center gap-2">
                        <span className="inline-block w-4 h-4 rounded bg-[#FF4C4C]"></span>
                        <span className="text-white">Not confident</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="inline-block w-4 h-4 rounded bg-[#8D99AE]"></span>
                        <span className="text-white">Neutral</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="inline-block w-4 h-4 rounded bg-[#3A86FF]"></span>
                        <span className="text-white">Confident</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="inline-block w-4 h-4 rounded bg-[#2B2D42]"></span>
                        <span className="text-white">Very confident</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Side - Content Panel */}
        <div className="flex flex-col justify-center">
            <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-red-300 font-medium">Efficient Workflow</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-normal text-white leading-tight">
                    Create and edit cyber resilience as easy as 1, 2 & 3
                </h1>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                
                <Button 
                    size="lg" 
                    className="bg-transparent border border-white/30 text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group"
                >
                    Learn more
                    <div className="w-4 h-4 border border-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                </Button>
            </div>
        </div>
        </div>
    </div>
    </section>
);
};

export default CyberResilienceSection;