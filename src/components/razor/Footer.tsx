import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const BOOKSY_URL = "https://booksy.com/pl-pl/39011_razor-barber-shop_barber-shop_12300_myslowice";

const hours = [
  { day: "Poniedziałek", time: "10:00 — 18:00" },
  { day: "Wtorek", time: "10:00 — 18:00" },
  { day: "Środa", time: "10:00 — 18:00" },
  { day: "Czwartek", time: "10:00 — 18:00" },
  { day: "Piątek", time: "10:00 — 18:00" },
  { day: "Sobota", time: "10:00 — 16:00" },
  { day: "Niedziela", time: "Zamknięte" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-background border-t border-border pt-20 pb-10">
      <div className="mx-auto max-w-[1400px] px-5 md:px-[7vw]">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 pb-16 border-b border-border">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-primary text-[11px] tracking-mega uppercase">/ 07</span>
              <span className="h-px w-16 bg-border" />
            </div>
            <h2
              className="font-heading font-extrabold uppercase text-foreground leading-[0.9]"
              style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" }}
            >
              Zarezerwuj
              <br />
              <span className="text-primary">Swoje Miejsce</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end gap-3">
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between px-8 py-5 bg-primary text-primary-foreground text-[11px] uppercase tracking-ultra font-semibold hover:bg-foreground transition-colors duration-300"
            >
              Rezerwuj w Booksy
              <span className="w-6 h-px bg-current group-hover:w-12 transition-all" />
            </a>
            <a
              href="#booking"
              className="group inline-flex items-center justify-between px-8 py-5 border border-border text-foreground text-[11px] uppercase tracking-ultra hover:border-primary hover:text-primary transition-colors duration-300"
            >
              Wybierz termin tutaj
              <span className="w-6 h-px bg-primary group-hover:w-12 transition-all" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-heading text-3xl font-black tracking-ultra text-foreground">RAZOR</span>
              <span className="h-4 w-px bg-border" />
              <span className="text-[10px] tracking-mega uppercase text-muted-foreground">Barber Shop</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Męski barbershop w Mysłowicach. Precyzja jest trwała. Rzemiosło bez kompromisów.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/razorbarbershopmce/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/razorbarbershopmce/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={14} className="text-primary" />
              <span className="text-[10px] uppercase tracking-mega text-muted-foreground">Adres</span>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              Mikołowska 4<br />
              41-400 Mysłowice<br />
              Śląskie, Polska
            </p>
            <a
              href="https://maps.google.com/?q=Mikołowska+4+Mysłowice"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-[10px] uppercase tracking-ultra text-primary hover:text-foreground transition-colors"
            >
              Zobacz na mapie →
            </a>
          </div>

          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Phone size={14} className="text-primary" />
              <span className="text-[10px] uppercase tracking-mega text-muted-foreground">Kontakt</span>
            </div>
            <a href="tel:+48516740010" className="block text-foreground/70 hover:text-primary transition-colors">
              516 740 010
            </a>
            <a
              href="https://www.instagram.com/razorbarbershopmce/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              @razorbarbershopmce
            </a>
          </div>

          <div className="md:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <Clock size={14} className="text-primary" />
              <span className="text-[10px] uppercase tracking-mega text-muted-foreground">Godziny</span>
            </div>
            <ul className="space-y-1.5">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{h.day.slice(0, 3)}.</span>
                  <span className={h.time === "Zamknięte" ? "text-muted-foreground/50" : "text-foreground/80"}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <span className="text-[10px] uppercase tracking-ultra text-muted-foreground">
            © {new Date().getFullYear()} RAZOR Barber Shop · Mysłowice
          </span>
          <span className="text-[10px] uppercase tracking-mega text-muted-foreground">Precyzja Jest Trwała</span>
        </div>
      </div>
    </footer>
  );
}
