import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhatWeTake } from "@/components/sections/WhatWeTake";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <WhatWeTake />
      <AboutTeaser />
      <ServiceAreas />
      <Testimonials />
      <FAQ />
      <CTABand />
    </>
  );
}
