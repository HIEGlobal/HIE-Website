"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        backgroundColor: scrolled
          ? "rgba(255, 255, 255, 0.94)"
          : "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: scrolled
          ? "0 4px 20px -2px rgba(15, 23, 42, 0.08)"
          : "none",
        borderBottom: scrolled
          ? "1px solid rgba(226, 232, 240, 0.8)"
          : "1px solid rgba(226, 232, 240, 0.4)",
      }}
    >
      <div
        className="container-wide"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "50px",
              height: "50px",
              flexShrink: 0,
            }}
          >
            <Image
              src="/logo.png"
              alt="HIE Global Inc. Logo"
              fill
              sizes="50px"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <span
            style={{
              fontSize: "1.32rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#0f172a",
              lineHeight: 1,
            }}
          >
            HIE Global <span style={{ color: "#0284c7" }}>Inc.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
          className="desktop-nav"
        >
          <Link
            href="/"
            style={{
              fontSize: "0.92rem",
              fontWeight: 600,
              color: "#475569",
              transition: "color 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#0284c7")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#475569")}
          >
            Home
          </Link>
          <Link
            href="/#brands"
            style={{
              fontSize: "0.92rem",
              fontWeight: 600,
              color: "#475569",
              transition: "color 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#0284c7")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#475569")}
          >
            Our Brands
          </Link>
          <Link
            href="/contact"
            style={{
              fontSize: "0.92rem",
              fontWeight: 600,
              color: "#475569",
              transition: "color 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#0284c7")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#475569")}
          >
            Contact Us
          </Link>
        </nav>

        {/* CTA Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
          className="nav-actions"
        >
          <Link
            href="/contact"
            className="btn btn-primary btn-sm nav-cta-btn"
            style={{
              borderRadius: "8px",
              padding: "9px 20px",
              fontWeight: 600,
              fontSize: "0.88rem",
            }}
          >
            Get In Touch
            <ArrowUpRight size={16} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            style={{
              padding: "6px",
              color: "#1e293b",
              borderRadius: "6px",
              display: "none",
            }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #e2e8f0",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            style={{ fontSize: "1rem", fontWeight: 600, color: "#334155" }}
          >
            Home
          </Link>
          <Link
            href="/#brands"
            onClick={() => setMobileOpen(false)}
            style={{ fontSize: "1rem", fontWeight: 600, color: "#334155" }}
          >
            Our Brands
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{ fontSize: "1rem", fontWeight: 600, color: "#334155" }}
          >
            Contact Us
          </Link>
          
        </div>
      )}
    </header>
  );
}
