import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | HIE Global Inc.",
  description:
    "Connect with Oriental Trimmings USA, Inc. corporate office in Phoenix, Arizona.",
};

export default function ContactPage() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
      }}
    >
      <Navbar />

      {/* Contact Header Section */}
      <section
        style={{
          paddingTop: "130px",
          paddingBottom: "48px",
          background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div className="container" style={{ textAlign: "center", maxWidth: "780px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "9999px",
              backgroundColor: "#e0f2fe",
              color: "#0369a1",
              fontSize: "0.85rem",
              fontWeight: 700,
              marginBottom: "16px",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
            }}
          >
            <MapPin size={16} />
            Corporate Office
          </div>

          <h1
            style={{
              fontSize: "clamp(2.3rem, 4vw, 3.1rem)",
              fontWeight: 800,
              color: "#1e293b",
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              marginBottom: "16px",
            }}
          >
            Contact Us
          </h1>

          <p
            style={{
              fontSize: "1.08rem",
              color: "#64748b",
              lineHeight: 1.7,
            }}
          >
            Connect directly with our USA corporate office in Phoenix, Arizona
            for wholesale orders, designer collaborations, and inquiries.
          </p>
        </div>
      </section>

      {/* Main Contact Details Section (No Form) */}
      <section style={{ paddingTop: "50px", paddingBottom: "90px" }}>
        <div className="container">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
