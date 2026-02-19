import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-primary text-primary-foreground">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-2xl mb-3">TKD TEAM</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Budujemy dyscyplinę, pewność siebie i siłę poprzez sztukę taekwondo od 2005 roku.
          </p>
        </div>
        <div>
          <h4 className="text-lg mb-3">Szybkie linki</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <Link to="/schedule" className="hover:text-primary-foreground transition-colors">Harmonogram</Link>
            <Link to="/team" className="hover:text-primary-foreground transition-colors">Nasz zespół</Link>
            <Link to="/gallery" className="hover:text-primary-foreground transition-colors">Galeria</Link>
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">Kontakt</Link>
          </div>
        </div>
        <div>
          <h4 className="text-lg mb-3">Godziny treningów</h4>
          <div className="text-sm text-primary-foreground/70 space-y-1">
            <p>Pon / Śr / Pt: 16:00 – 21:00</p>
            <p>Czwartek: 18:00 – 19:30</p>
            <p>Sobota: 10:00 – 13:30</p>
            <p>Niedziela: Zamknięte</p>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} TKD Team. Wszelkie prawa zastrzeżone.
      </div>
    </div>
  </footer>
);

export default Footer;
