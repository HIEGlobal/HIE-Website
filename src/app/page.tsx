import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OurBrands from "@/components/OurBrands";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      <Navbar />
      <HeroSection />
      <OurBrands />
      <Footer />
    </main>
  );
}
