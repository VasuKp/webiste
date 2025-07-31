import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeatureHighlights from '../components/FeatureHighlights';
import ShowcaseSection1 from '../components/ShowcaseSection1';
import ShowcaseSection2 from '../components/ShowcaseSection2';
import IndustryPartners from '../components/IndustryPartners';
import Testimonials from '../components/Testimonials';
import StatisticsBar from '../components/StatisticsBar';
import Footer from '../components//Footer';
import IntelliTechCTA from "@/components/IntelliTechCTA";
import CyberResilienceSection from "@/components/CyberResilienceSection";
import IndustriesTargetedSection from "@/components/IndustriesTargetedSection";
import IndustriesGridSection from "@/components/IndustriesGridSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <IntelliTechCTA />
      <IndustriesTargetedSection />
      <IndustriesGridSection />
      <CyberResilienceSection />
      <FeatureHighlights />
      <ShowcaseSection1 />
      <ShowcaseSection2 />
      <StatisticsBar />
      <IndustryPartners />
      <Testimonials />
      
      <Footer />
    </>
  );
}
