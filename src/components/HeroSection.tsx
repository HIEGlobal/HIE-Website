"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import HeroMosaic from "./HeroMosaic";

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        paddingTop: "150px",
        paddingBottom: "110px",
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background ambient lighting effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[420px] w-[650px] rounded-full bg-sky-100/60 blur-3xl opacity-60" />
      </div>

      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          <div style={{ maxWidth: "640px" }}>
            <h1
              style={{
                fontSize: "clamp(2.3rem, 4vw, 3.4rem)",
                fontWeight: 800,
                color: "#1e293b",
                lineHeight: 1.18,
                letterSpacing: "-0.03em",
                marginBottom: "24px",
              }}
            >
              HIE Global Inc.
            </h1>

            <div
              style={{
                fontSize: "1.05rem",
                color: "#475569",
                lineHeight: 1.75,
                marginBottom: "36px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                Formerly Oriental Trimmings, with a legacy of over 40 years of manufacturing in India, HIE
                Global is one of the finest sources of home d&eacute;cor items
                ranging across all categories. With a state-of-the-art
                manufacturing facilities in the heart of Delhi making products
                across textiles, wood, stone and metals.
              </p>

              <p>
                HIE Global is one stop for all home d&eacute;cor and holiday
                products. Our tie-ups and collaborations with leading designers
                in the United States ensures that our customers get the finest
                and most unique designs.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <Link
                href="/#brands"
                className="btn btn-primary btn-lg"
                style={{
                  borderRadius: "6px",
                  boxShadow: "0 10px 20px -3px rgba(2, 132, 199, 0.35)",
                }}
              >
                Explore Our Brands
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="btn btn-dark btn-lg"
                style={{
                  borderRadius: "6px",
                  boxShadow: "0 10px 20px -3px rgba(30, 41, 59, 0.3)",
                }}
              >
                <Mail size={18} />
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Side: Shape Morphism Animation (Hidden on mobile phones) */}
          <div className="hero-mosaic-wrapper hidden md:flex justify-center items-center">
            <HeroMosaic />
          </div>
        </div>
      </div>
    </section>
  );
}
