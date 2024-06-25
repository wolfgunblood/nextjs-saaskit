"use client"
import { Bento } from "@/components/Bento";
import CTA from "@/components/cta";
import { FAQ } from "@/components/FAQs";
import Features from "@/components/Features";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import { Press } from "@/components/Press";
import { Pricing } from "@/components/Pricing";
import Image from "next/image";

export default function Home() {
  return (
      <>
      <Navbar />
      <Hero />
      {/* <Press /> */}
      <Features />
      <Pricing />
      <FAQ />
      <Testimonial />
      <CTA />
      <Footer />
      </>
  );
}
