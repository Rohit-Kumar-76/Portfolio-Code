import Contact from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonial";
import { WhyChoose } from "@/components/Whyus";
import Workflow from "@/components/Workflow";
import Button from "@/components/Button";
import Image from "next/image";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>

      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Workflow />
      <WhyChoose />
      <TechStack />
      <Pricing />
      <Contact />
      <FAQ />
    </main>
  );
}
