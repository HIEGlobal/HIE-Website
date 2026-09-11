import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";

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

            {/* Social Icon Buttons */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              {/* Twitter / X */}
              <a
                href="/contact"
                aria-label="Twitter"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  color: "#0284c7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                }}
                className="social-btn"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="/contact"
                aria-label="LinkedIn"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  color: "#0a66c2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                }}
                className="social-btn"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="/contact"
                aria-label="Facebook"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  color: "#1877f2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                }}
                className="social-btn"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Global Portal */}
              <a
                href="/contact"
                aria-label="Global Web Portal"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  color: "#1e293b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                }}
                className="social-btn"
              >
                <Globe size={18} />
              </a>
            </div>
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
