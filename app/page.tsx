import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Specs from "../components/Specs";
import Philosophy from "../components/Philosophy";
import Protocol from "../components/Protocol";
import ContactFooter from "../components/ContactFooter";

export default function Home() {
  return (
    <main className="w-full flex-col flex min-h-screen bg-[var(--background)]">
       <Nav />
       <Hero />
       <Features />
       <Specs />
       <Philosophy />
       <Protocol />
       <ContactFooter />
    </main>
  );
}
