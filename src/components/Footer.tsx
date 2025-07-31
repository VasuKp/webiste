import { Globe, Users, Shield } from "lucide-react";

const Footer = () => (
  <footer className="py-16 bg-background border-t border-border">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Company */}
        <div>
          <div className="text-2xl font-bold mb-6 text-primary">IntelliTech X</div>
          <p className="text-tech-gray mb-6 leading-relaxed">
            Empowering the next generation of AI-driven applications with
            cutting-edge technology and unmatched performance.
          </p>
          <div className="flex space-x-4">
            {[Globe, Users, Shield].map((Icon, index) => (
              <div key={index} className="w-10 h-10 bg-tech-dark rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <Icon className="h-5 w-5 text-tech-gray hover:text-primary transition-colors" />
              </div>
            ))}
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {["Platform", "Documentation", "API Reference", "Tutorials", "Community"].map((link) => (
              <li key={link}>
                <a href="#" className="text-tech-gray hover:text-foreground transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-6">Resources</h4>
          <ul className="space-y-4">
            {["Blog", "Case Studies", "White Papers", "Webinars", "Support"].map((link) => (
              <li key={link}>
                <a href="#" className="text-tech-gray hover:text-foreground transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Company */}
        <div>
          <h4 className="font-semibold mb-6">Company</h4>
          <ul className="space-y-4">
            {["About", "Careers", "Press", "Partners", "Contact"].map((link) => (
              <li key={link}>
                <a href="#" className="text-tech-gray hover:text-foreground transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-tech-gray mb-4 md:mb-0">
          © 2024 IntelliTech X. All rights reserved.
        </div>
        <div className="flex space-x-6 text-sm">
          <a href="#" className="text-tech-gray hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="text-tech-gray hover:text-foreground transition-colors">Terms of Service</a>
          <a href="#" className="text-tech-gray hover:text-foreground transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 