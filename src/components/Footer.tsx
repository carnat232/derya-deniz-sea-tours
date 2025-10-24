import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src={logo} 
              alt="Derya Deniz 1 Boat Tours Logo" 
              className="h-20 w-auto mb-4 brightness-0 invert"
            />
            <h3 className="text-xl font-bold mb-4">DERYA DENIZ 1</h3>
            <p className="text-sm opacity-90 mb-4">
              Experience unforgettable boat tours along the beautiful Northern Cyprus coast.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Home
              </Link>
              <Link to="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                About
              </Link>
              <Link to="/services" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Services
              </Link>
              <Link to="/gallery" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Gallery
              </Link>
              <Link to="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="tel:+905338408119" 
                className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <Phone className="h-4 w-4" />
                +90 533 840 81 19
              </a>
              <a 
                href="mailto:Mustykoc1986@gmail.com" 
                className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <Mail className="h-4 w-4" />
                Mustykoc1986@gmail.com
              </a>
              <div className="flex items-start gap-2 text-sm opacity-90">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Kyrenia, Northern Cyprus</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-90">
              © 2025 DERYA DENIZ 1 | All Rights Reserved
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="https://www.google.com/maps/search/Derya+Deniz+1+Boat+Tours+Kyrenia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm opacity-90 hover:opacity-100 transition-all duration-300 inline-flex items-center gap-2 hover:scale-105"
                aria-label="Find us on Google Maps"
              >
                <MapPin className="h-5 w-5" />
                <span className="hidden sm:inline">Google Maps</span>
              </a>
              <a 
                href="https://wa.me/905338408119" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm opacity-90 hover:opacity-100 transition-all duration-300 inline-flex items-center gap-2 hover:scale-105"
                aria-label="Contact us on WhatsApp"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
