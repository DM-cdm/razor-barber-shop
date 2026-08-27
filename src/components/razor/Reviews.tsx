import { Star, Award, Trophy, ThumbsUp } from "lucide-react";

const awards = ["2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018"];

const ratingBlocks = [
  { icon: Star, value: "9,6 / 10", label: "Ocena Orły Fryzjerstwa", sub: "na podstawie 330 opinii" },
  { icon: Trophy, value: "8 lat", label: "Laureat plebiscytu", sub: "2018 — 2026, złoty medal co roku" },
  { icon: ThumbsUp, value: "2 100+", label: "Polubień na Facebooku", sub: "201 osób tu było" },
];

export default function Reviews() {
  return (
    <section id="opinie" className="relative bg-surface py-24 md:py-32 border-y border-border/60">
      <div className="mx-auto max-w-[1400px] px-5 md:px-[7vw]">
        <div className="grid md:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-primary text-[11px] tracking-mega uppercase">/ 03</span>
              <span className="h-px w-16 bg-border" />
            </div>
            <h2
              className="font-heading font-extrabold uppercase text-foreground leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Uznany
              <br />
              Rzemiosłem
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-end">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light">
              Nie my o tym mówimy — mówią o tym klienci i jury plebiscytu Orły Fryzjerstwa.
              Pozytywne recenzje podkreślają profesjonalizm, skuteczną obsługę oraz sympatyczny
              zespół.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border mb-16">
          {ratingBlocks.map((b) => (
            <div key={b.label} className="bg-surface p-8 md:p-10 flex flex-col">
              <b.icon size={24} className="text-primary mb-5" />
              <div className="font-heading font-extrabold text-foreground text-5xl md:text-6xl leading-none mb-3">
                {b.value}
              </div>
              <div className="text-sm uppercase tracking-ultra text-foreground/70 font-medium">{b.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{b.sub}</div>
            </div>
          ))}
        </div>

        <div className="border border-border bg-background p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Award size={18} className="text-primary" />
            <span className="text-[11px] uppercase tracking-ultra text-muted-foreground">
              Plebiscyt Orły Fryzjerstwa — Laureat i Złoty Medal
            </span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3 md:gap-4">
            {awards.map((year) => (
              <div
                key={year}
                className="flex flex-col items-center text-center py-4 border border-primary/30 bg-primary/5 group hover:bg-primary transition-colors duration-300"
              >
                <span className="font-heading font-bold text-primary group-hover:text-primary-foreground text-2xl leading-none">
                  {year}
                </span>
                <span className="mt-2 text-[8px] uppercase tracking-mega text-muted-foreground group-hover:text-primary-foreground/70">
                  Laureat + Złoto
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-border">
            <p className="text-muted-foreground text-sm max-w-md">
              Osiem lat z rzędu na podium plebiscytu Orły Fryzjerstwa — w tym złoty medal każdego
              roku.
            </p>
            <a
              href="https://www.orlyfryzjerstwa.pl/profile-29417-razor-barber-shop"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-[11px] uppercase tracking-ultra text-primary hover:text-foreground transition-colors"
            >
              Zobacz profil na Orłach →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
