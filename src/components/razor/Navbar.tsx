import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Rytuał", href: "#ritual" },
  { label: "Usługi", href: "#services" },
  { label: "Opinie", href: "#opinie" },
  { label: "Rezerwacja", href: "#booking" },
  { label: "Galeria", href: "#gallery" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-[7vw]">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#ritual" className="flex items-center gap-3">
            <span className="font-heading text-2xl md:text-3xl font-black tracking-ultra text-foreground">
              RAZOR
            </span>
            <span className="hidden sm:block h-4 w-px bg-border" />
            <span className="hidden sm:block text-[10px] tracking-mega uppercase text-muted-foreground">
              Barber Shop
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] uppercase tracking-ultra text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              className="text-[11px] uppercase tracking-ultra px-5 py-2.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Umów wizytę
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground p-2"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-background border-t border-border/60 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-4 gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm uppercase tracking-ultra text-muted-foreground hover:text-primary border-b border-border/50"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="mt-3 text-center text-[11px] uppercase tracking-ultra px-5 py-3 border border-primary text-primary"
          >
            Umów wizytę
          </a>
        </nav>
      </div>
    </header>
  );
}
