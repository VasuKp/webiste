import partnerFlipp from "@/assets/flipp-color.png";
import partnerAware from "@/assets/aware.png";
import partnerIBM from "@/assets/IBM_Color.png";
import partnerZartek from "@/assets/zartek.jpeg";
import partnerVMware from "@/assets/VMware_color.png";
import partnerAlienVault from "@/assets/alien.jpeg";
import partnerOrion from "@/assets/orion-color.jpeg";
import partnerOCE from "@/assets/OCE-color.jpeg";
import partnerEcCouncil from "@/assets/Ec_Council-Color.png";
import partnerSplunk from "@/assets/Splunk.png";
import partnerKaspersky from "@/assets/kaspersky.png";

const IndustryPartners = () => (
  <section className="py-20 bg-black relative overflow-hidden">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-[0.2em] text-white">INDUSTRY PARTNERS</h2>
      <div className="mx-auto w-32 h-1 bg-white/60 rounded-full mt-6" />
    </div>
    {/* Sliding Partners Container */}
    <div className="relative">
      <div className="flex animate-slide-left w-fit overflow-x-auto whitespace-nowrap scrollbar-hide">
        {/* First set of partners */}
        <div className="flex items-center gap-4 md:gap-8 lg:gap-10 w-fit px-2 md:px-6 lg:px-8">
          {[partnerOrion, partnerFlipp, partnerAware, partnerIBM, partnerZartek, partnerVMware, partnerAlienVault, partnerOCE, partnerEcCouncil, partnerSplunk, partnerKaspersky].map((src, idx) => (
            <div key={idx} className="flex items-center justify-center h-20 w-40 md:h-28 md:w-60 lg:h-40 lg:w-80 bg-transparent border border-white rounded-xl overflow-hidden">
              <img src={src} alt="Partner Logo" className="max-h-full max-w-full object-contain filter grayscale hover:filter-none scale-90 hover:scale-100 transition-all duration-300" />
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center gap-4 md:gap-8 lg:gap-10 w-fit px-2 md:px-6 lg:px-8">
          {[partnerOrion, partnerFlipp, partnerAware, partnerIBM, partnerZartek, partnerVMware, partnerAlienVault, partnerOCE, partnerEcCouncil, partnerSplunk, partnerKaspersky].map((src, idx) => (
            <div key={idx} className="flex items-center justify-center h-20 w-40 md:h-28 md:w-60 lg:h-40 lg:w-80 bg-transparent border border-white rounded-xl overflow-hidden">
              <img src={src} alt="Partner Logo" className="max-h-full max-w-full object-contain filter grayscale hover:filter-none scale-90 hover:scale-100 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default IndustryPartners; 