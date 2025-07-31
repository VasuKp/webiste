import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroGlobe from "@/assets/hero-globe.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col overflow-hidden particles">
    {/* Animated Globe Background */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-40 animate-slow-spin"
      style={{ backgroundImage: `url(${heroGlobe})` }}
    />
    <div className="absolute inset-0 bg-hero-gradient" />
    
    {/* Animated Globe Orbits */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-96 h-96 md:w-[600px] md:h-[600px]">
        {/* Orbit rings */}
        <div className="absolute inset-0 border border-primary/20 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-4 border border-primary/10 rounded-full animate-spin-reverse"></div>
        <div className="absolute inset-8 border border-primary/5 rounded-full animate-spin-slow"></div>
        {/* Orbital particles */}
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full animate-orbit-1 shadow-glow"></div>
        <div className="absolute top-1/4 right-0 w-2 h-2 bg-primary/70 rounded-full animate-orbit-2 shadow-glow"></div>
        <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-primary/50 rounded-full animate-orbit-3 shadow-glow"></div>
        <div className="absolute bottom-0 right-1/3 w-3 h-3 bg-primary/80 rounded-full animate-orbit-4 shadow-glow"></div>
      </div>
    </div>
    
    {/* Network connections */}
    <div className="absolute inset-0 opacity-30">
      <svg className="w-full h-full" viewBox="0 0 1920 1080">
        <defs>
          <linearGradient id="connection" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(348 100% 50%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(348 100% 50%)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          d="M200,300 Q600,200 1200,400 T1600,600"
          stroke="url(#connection)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M300,700 Q800,500 1400,300 T1700,800"
          stroke="url(#connection)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <path
          d="M100,500 Q500,800 900,600 T1500,400"
          stroke="url(#connection)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </svg>
    </div>
    
    {/* Main Content - Perfect center positioning */}
    <div className="container mx-auto px-6 relative z-10 text-center flex-1 flex items-center justify-center">
      <div className="animate-fade-in-up w-full">
        {/* Welcome Badge */}
        <span className="inline-block px-5 py-2 mb-6 rounded-full glass-badge text-white font-semibold tracking-wide text-sm">
          ✦ Welcome to Cybersecurity Umbrella 
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Switzer', sans-serif" }}>
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-200 bg-clip-text text-transparent">Secure Today. Lead Tomorrow.</span><br />
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-200 bg-clip-text text-transparent">Cybersecurity services</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-tech-gray mb-12 max-w-3xl mx-auto leading-relaxed">
          Our vision is to become a global leader in cybersecurity innovation, empowering enterprises, governments, educators, and digital organizations with secure, intelligent, and scalable platforms. 
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button className="btn-tech-primary text-lg px-12 py-6 bg-red-500 hover:bg-red-600 border-none text-white">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="btn-tech-secondary text-lg px-12 py-6">
            Watch Demo
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
