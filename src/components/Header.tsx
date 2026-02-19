import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Strona główna" },
  { to: "/about", label: "O nas" },
  { to: "/schedule", label: "Harmonogram" },
  { to: "/calendar", label: "Kalendarz" },
  { to: "/team", label: "Zespół" },
  { to: "/gallery", label: "Galeria" },
  { to: "/contact", label: "Kontakt" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-3xl font-bold tracking-wider text-accent" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            🥋 TKD TEAM
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-secondary ${
                location.pathname === l.to ? "bg-secondary text-accent" : "text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {open && (
        <nav className="md:hidden border-t bg-background pb-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary ${
                location.pathname === l.to ? "text-accent" : "text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
