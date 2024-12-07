import HeroSection from "@/components/Sections/Hero/Hero";
import Features from "@/components/Sections/Features/Features";
import { TechStack } from "@/components/Sections/Hero/TechStack";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Features />
      <TechStack />
    </main>
  );
}
