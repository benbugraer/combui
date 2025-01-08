import HeroSection from "@/components/Sections/Hero/Hero";
import { TechStack } from "@/components/Sections/Hero/TechStack";
import Footer from "@/components/Sections/Footer/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section>
        <TechStack />
      </section>
      <Footer />
    </main>
  );
}
