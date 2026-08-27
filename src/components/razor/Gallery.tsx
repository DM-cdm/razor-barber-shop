import { GALLERY } from "./media";

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 md:px-[7vw] mb-12 md:mb-16">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-primary text-[11px] tracking-mega uppercase">/ 05</span>
              <span className="h-px w-16 bg-border" />
            </div>
            <h2
              className="font-heading font-extrabold uppercase text-foreground leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Galeria
              <br />
              Salonu
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-end">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light">
              Autentyczne kadry z salonu przy Mikołowskiej 4. To nie portfolio — to archiwum
              miejsca, w którym precyzja jest standardem.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-5 md:px-[7vw] pb-6 snap-x snap-mandatory">
        {GALLERY.map((s, i) => (
          <div
            key={s.url}
            className="relative shrink-0 w-[78vw] sm:w-[55vw] md:w-[34vw] lg:w-[26vw] aspect-3/4 snap-start group overflow-hidden"
          >
            <img
              src={s.url}
              alt={`RAZOR Barber Shop Mysłowice — ${s.caption}`}
              loading="lazy"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute bottom-0 inset-x-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-px bg-primary" />
                <span className="text-[9px] uppercase tracking-mega text-primary">RAZOR</span>
              </div>
              <h3 className="font-heading font-semibold uppercase text-foreground text-xl md:text-2xl leading-none">
                {s.caption}
              </h3>
            </div>
            <span className="absolute top-4 right-4 font-heading text-foreground/30 text-2xl">0{i + 1}</span>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-[1400px] px-5 md:px-[7vw] mt-8">
        <a
          href="https://www.instagram.com/razorbarbershopmce/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-[11px] uppercase tracking-ultra text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="w-8 h-px bg-primary" /> Więcej zdjęć na @razorbarbershopmce
        </a>
      </div>
    </section>
  );
}
