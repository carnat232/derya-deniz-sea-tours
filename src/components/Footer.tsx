import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
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

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © 2025 DERYA DENIZ 1 BOAT TOURS | All Rights Reserved
          </p>
          <div className="mt-2">
            <a 
              href="https://www.google.com/maps/search/Derya+Deniz+1+Boat+Tours+Kyrenia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm opacity-90 hover:opacity-100 transition-opacity inline-flex items-center gap-1"
            >
              <MapPin className="h-3 w-3" />
              Find us on Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
