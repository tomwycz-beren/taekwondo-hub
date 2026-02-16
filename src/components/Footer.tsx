import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-primary text-primary-foreground">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-2xl mb-3">TKD TEAM</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Building discipline, confidence and strength through the art of Taekwondo since 2005.
          </p>
        </div>
        <div>
          <h4 className="text-lg mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <Link to="/schedule" className="hover:text-primary-foreground transition-colors">Schedule</Link>
            <Link to="/team" className="hover:text-primary-foreground transition-colors">Our Team</Link>
            <Link to="/gallery" className="hover:text-primary-foreground transition-colors">Gallery</Link>
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact Us</Link>
          </div>
        </div>
        <div>
          <h4 className="text-lg mb-3">Training Hours</h4>
          <div className="text-sm text-primary-foreground/70 space-y-1">
            <p>Mon / Wed / Fri: 16:00 – 21:00</p>
            <p>Thursday: 18:00 – 19:30</p>
            <p>Saturday: 10:00 – 13:30</p>
            <p>Sun: Closed</p>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} TKD Team. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
