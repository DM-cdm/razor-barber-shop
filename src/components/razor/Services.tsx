import { useState } from "react";
import { Plus, Minus, Clock, Tag } from "lucide-react";
import { INTERIOR_IMG } from "./media";

const services = [
  {
    no: "01",
    name: "Strzyżenie — Maszynka",
    price: "od 45 zł",
    duration: "30 min",
    desc: "Szybkie, precyzyjne strzyżenie maszynką. Czyste linie, jednolita długość, klasyczny efekt bez kompromisów.",
    includes: ["Konsultacja", "Strzyżenie maszynką", "Linia karku", "Stylizacja na gotowo"],
  },
  {
    no: "02",
    name: "Strzyżenie Klasyczne",
    price: "od 50 zł",
    duration: "45 min",
    desc: "Strzyżenie nożyczkami i maszynką dopasowane do kształtu twarzy i struktury włosów. Precyzja w każdym detalu.",
    includes: ["Konsultacja", "Mycie", "Nożyczki + maszynka", "Stylizacja"],
  },
  {
    no: "03",
    name: "Strzyżenie Barberskie",
    price: "od 60 zł",
    duration: "60 min",
    desc: "Pełny rytuał barberski — strzyżenie, modelowanie, gorący ręcznik i wykończenie brzytwą.",
    includes: ["Konsultacja", "Strzyżenie + modelowanie", "Gorący ręcznik", "Wykończenie brzytwą", "Stylizacja"],
  },
  {
    no: "04",
    name: "Strzyżenie + Zarost",
    price: "od 45 zł",
    duration: "60 min",
    desc: "Kompleks — strzyżenie połączone z modelowaniem zarostu. Spójna linia od włosów po brodę.",
    includes: ["Strzyżenie", "Modelowanie zarostu", "Linia policzków", "Stylizacja"],
  },
  {
    no: "05",
    name: "Strzyżenie + Broda",
    price: "od 55 zł",
    duration: "75 min",
    desc: "Strzyżenie i pełny rytuał brody — gorący ręcznik, olejki, golenie brzytwą konturu.",
    includes: ["Strzyżenie", "Gorący ręcznik", "Golenie konturu brzytwą", "Olejki i balsam", "Stylizacja"],
  },
  {
    no: "06",
    name: "Rytuał Brody",
    price: "od 50 zł",
    duration: "45 min",
    desc: "Sam rytuał brody — od gorącego ręcznika po golenie brzytwą i pielęgnację. Czas tylko dla Ciebie.",
    includes: ["Gorący ręcznik", "Golenie brzytwą", "Pielęgnacja olejkami", "Modelowanie"],
  },
];

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-[7vw]">
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20">
          <div className="md:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-primary text-[11px] tracking-mega uppercase">/ 02</span>
              <span className="h-px w-16 bg-border" />
            </div>
            <h2
              className="font-heading font-extrabold uppercase text-foreground leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Menu
              <br />
              Usług
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 flex flex-col justify-end">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light max-w-xl">
              Każda pozycja to specyfikacja techniczna — nie lista cen. Wybierz rytuał, który
              odpowiada Twojej definicji precyzji.
            </p>
          </div>
        </div>

        <div className="border-t border-border">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <div key={s.no} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full grid grid-cols-12 items-center gap-4 py-6 md:py-8 text-left group"
                >
                  <span className="col-span-2 md:col-span-1 font-heading text-primary text-xl md:text-2xl">
                    {s.no}
                  </span>
                  <span className="col-span-10 md:col-span-6 font-heading font-semibold uppercase text-foreground text-2xl md:text-4xl leading-none group-hover:text-primary transition-colors duration-300">
                    {s.name}
                  </span>
                  <span className="hidden md:flex col-span-3 items-center gap-2 text-muted-foreground text-sm">
                    <Clock size={14} /> {s.duration}
                  </span>
                  <span className="hidden md:block col-span-1 text-right text-foreground/80 font-medium">
                    {s.price}
                  </span>
                  <span className="col-span-12 md:col-span-1 flex justify-end text-primary">
                    {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="grid md:grid-cols-12 gap-6 pb-10 pt-2">
                    <div className="md:col-span-1" />
                    <div className="md:col-span-5">
                      <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {s.includes.map((inc) => (
                          <span
                            key={inc}
                            className="text-[10px] uppercase tracking-ultra px-3 py-1.5 border border-border text-muted-foreground"
                          >
                            {inc}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-3 flex flex-col gap-1 justify-center">
                      <span className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-ultra">
                        <Tag size={12} /> {s.price}
                      </span>
                      <span className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-ultra">
                        <Clock size={12} /> {s.duration}
                      </span>
                    </div>
                    <div className="md:col-span-3 flex items-end">
                      <a
                        href="#booking"
                        className="w-full text-center text-[11px] uppercase tracking-ultra px-5 py-3.5 bg-primary text-primary-foreground font-semibold hover:bg-foreground transition-colors duration-300"
                      >
                        Umów tę usługę
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 md:mt-24 relative overflow-hidden">
          <img
            src={INTERIOR_IMG}
            alt="Wnętrze RAZOR Barber Shop w Mysłowicach"
            loading="lazy"
            className="w-full h-[260px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <span className="text-[10px] uppercase tracking-mega text-foreground/80">
              Mikołowska 4 · Mysłowice · Od 2016
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
