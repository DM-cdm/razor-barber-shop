import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/razor/Navbar";
import Hero from "@/components/razor/Hero";
import Services from "@/components/razor/Services";
import Reviews from "@/components/razor/Reviews";
import Booking from "@/components/razor/Booking";
import Gallery from "@/components/razor/Gallery";
import About from "@/components/razor/About";
import Footer from "@/components/razor/Footer";

const title = "RAZOR Barber Shop — Mysłowice | Precyzja Jest Trwała";
const description =
  "Męski barbershop w Mysłowicach, Mikołowska 4. Strzyżenie, broda, golenie brzytwą. Rezerwacja online, cennik, galeria i opinie.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Reviews />
        <Booking />
        <Gallery />
        <About />
      </main>
      <Footer />
    </div>
  );
}
