import About from "@/components/About";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import WhyUs from "@/components/WhyUs/WhyUs";
import Services from "@/components/Services/Services";
import FAQ from "@/components/FAQ/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <FAQ />
      <CTA />
    </main>
  );
}
