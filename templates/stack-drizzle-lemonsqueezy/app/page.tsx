"use client"
import About from "@/components/About";
import { Bento } from "@/components/Bento";
import CTA from "@/components/cta";
import { FAQ } from "@/components/FAQs";
import Features from "@/components/Features";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import HowComponent from "@/components/How";
import Testimonial from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import { Press } from "@/components/Press";
import { Pricing } from "@/components/Pricing";
import TestimonialSecond from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
      <>
      <Navbar />
      <Hero />
      <About />
      <HowComponent />
      {/* <Features /> */}
      <Pricing />
      <FAQ />
      {/* <Testimonial /> */}
      <TestimonialSecond />
      <CTA />
      <Footer />
      </>
  );
}
