import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        backgroundColor: "#f1f5f9",
        paddingTop: "70px",
        paddingBottom: "36px",
        borderTop: "1px solid #e2e8f0",
      }}
    >
      <div className="container">
        {/* Main Footer Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "56px",
            alignItems: "flex-start",
            paddingBottom: "50px",
            borderBottom: "1px solid #cbd5e1",
          }}
          className="footer-main-grid"
        >
          {/* Left: Keep in touch & social */}
          <div>
            {/* Logo and Brand */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "20px",
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
                />
              </div>
              <span
                style={{
                  fontSize: "1.32rem",
                  fontWeight: 800,
                  color: "#0f172a",
                  letterSpacing: "-0.01em",
                }}
              >
                HIE Global <span style={{ color: "#0284c7" }}>Inc.</span>
              </span>
            </div>

            <h3
              style={{
                fontSize: "1.7rem",
                fontWeight: 800,
                color: "#1e293b",
                marginBottom: "8px",
                letterSpacing: "-0.01em",
              }}
            >
              Let&apos;s keep in touch!
            </h3>

            <p
              style={{
                fontSize: "0.98rem",
                color: "#64748b",
                marginBottom: "24px",
                maxWidth: "460px",
                lineHeight: 1.6,
              }}
            >
              Connect with our international leadership team. We respond to all
              enterprise and partnership inquiries within 1 business day.
            </p>
          </div>

          {/* Right: 2 Link Columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "36px",
            }}
          >
            {/* Column 1: Useful Links */}
            <div>
              <span
                style={{
                  display: "block",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#64748b",
                  letterSpacing: "0.08em",
                  marginBottom: "16px",
                }}
              >
                Navigation
              </span>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <li>
                  <Link
                    href="/"
                    style={{ fontSize: "0.9rem", color: "#475569" }}
                    className="footer-link"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#brands"
                    style={{ fontSize: "0.9rem", color: "#475569" }}
                    className="footer-link"
                  >
                    Our Brands
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    style={{ fontSize: "0.9rem", color: "#475569" }}
                    className="footer-link"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Other Resources */}
            <div>
              <span
                style={{
                  display: "block",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#64748b",
                  letterSpacing: "0.08em",
                  marginBottom: "16px",
                }}
              >
                Information
              </span>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <li>
                  <Link
                    href="/contact"
                    style={{ fontSize: "0.9rem", color: "#475569" }}
                    className="footer-link"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    style={{ fontSize: "0.9rem", color: "#475569" }}
                    className="footer-link"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    style={{ fontSize: "0.9rem", color: "#475569" }}
                    className="footer-link"
                  >
                    Global Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            paddingTop: "28px",
            textAlign: "center",
            fontSize: "0.85rem",
            color: "#64748b",
          }}
        >
          Copyright © 2026{" "}
          <strong style={{ color: "#1e293b" }}>HIE Global Inc.</strong> All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
