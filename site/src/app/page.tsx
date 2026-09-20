"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Features } from "@/components/Features";
import { Pipeline } from "@/components/Pipeline";
import { AntiSlop } from "@/components/AntiSlop";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <ScrollReveal />
      <Marquee />
      <Hero />
      <Features />
      <Pipeline />
      <AntiSlop />
      <Footer />
    </div>
  );
}
