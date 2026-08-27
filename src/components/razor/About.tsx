import { INTERIOR_IMG } from "./media";

const stats = [
  { value: "2 100+", label: "Polubień na Facebooku" },
  { value: "Od 2016", label: "Pierwszy barber w mieście" },
  { value: "100%", label: "Męskie rzemiosło" },
];

export default function About() {
  return (
    <section className="relative bg-background py-24 md:py-32 grain">
      <div className="mx-auto max-w-[1400px] px-5 md:px-[7vw]">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 relative overflow-hidden order-2 lg:order-1">
            <img
              src={INTERIOR_IMG}
              alt="Wnętrze RAZOR Barber Shop — Mikołowska 4, Mysłowice"
              loading="lazy"
              className="w-full h-[320px] md:h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent" />
            <div className="absolute top-5 left-5 text-[10px] uppercase tracking-mega text-foreground/70">
              Mikołowska 4 · Mysłowice
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-primary text-[11px] tracking-mega uppercase">/ 06</span>
              <span className="h-px w-16 bg-border" />
            </div>
            <h2
              className="font-heading font-extrabold uppercase text-foreground leading-none mb-8"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Laboratorium
              <br />
              Męskiej Tożsamości
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light mb-6">
              RAZOR Barber Shop to nie miejsce na „strzyżenie". To pierwszy barber shop
              w Mysłowicach, otwarty we wrześniu 2016 roku przy ulicy Mikołowskiej 4. Przestrzeń,
              w której mężczyzna definiuje siebie na nowo — od konsultacji, przez precyzję cięcia,
              po wykończenie brzytwą.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Stal, skóra, cisza i chirurgiczne światło. Barberzy z szerokim doświadczeniem — od
              tradycyjnych strzyżeń po specjalistyczną stylizację zarostu i rytuały brody.
            </p>

            <div className="grid grid-cols-3 gap-4 border-t border-border pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-heading font-bold text-primary text-3xl md:text-4xl leading-none">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-ultra text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
