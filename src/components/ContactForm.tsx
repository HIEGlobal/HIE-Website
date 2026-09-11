"use client";

import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Printer,
  Building2,
} from "lucide-react";

export default function ContactForm() {
  return (
    <div style={{ maxWidth: "760px", margin: "0 auto" }}>
      {/* Single Section: USA Corporate Location */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          padding: "44px 40px",
          boxShadow:
            "0 20px 40px -15px rgba(15, 23, 42, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)",
          border: "1px solid #e2e8f0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top Accent Gradient Bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #0284c7 0%, #0369a1 100%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "4px 14px",
            borderRadius: "9999px",
            backgroundColor: "#e0f2fe",
            color: "#0369a1",
            fontSize: "0.8rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            marginBottom: "18px",
          }}
        >
          <Building2 size={14} />
          USA Corporate Location
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 800,
            color: "#1e293b",
            lineHeight: 1.25,
            marginBottom: "22px",
            letterSpacing: "-0.01em",
          }}
        >
          Oriental Trimmings USA, Inc.
        </h2>

        {/* Physical Address Card */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "16px",
            marginBottom: "24px",
            padding: "18px 20px",
            backgroundColor: "#f8fafc",
            borderRadius: "14px",
            border: "1px solid #e2e8f0",
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "10px",
              backgroundColor: "#e0f2fe",
              color: "#0284c7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              marginTop: "2px",
            }}
          >
            <MapPin size={20} />
          </div>
          <div>
            <div
              style={{
                fontSize: "0.74rem",
                color: "#64748b",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "3px",
              }}
            >
              Physical Address
            </div>
            <div
              style={{
                fontSize: "1.05rem",
                color: "#1e293b",
                fontWeight: 600,
                lineHeight: 1.5,
              }}
            >
              2942 N. 24th Street, Suite 114,
              <br />
              Phoenix, AZ 85016, USA
            </div>
          </div>
        </div>

        {/* Contact Details Stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Phone / Telephone */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "16px 20px",
              borderRadius: "14px",
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: "#f0fdf4",
                color: "#16a34a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Phone size={18} />
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "#64748b",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                Ph / Telephone
              </div>
              <div>
                <a
                  href="tel:+14803225889"
                  style={{
                    fontSize: "1.08rem",
                    fontWeight: 700,
                    color: "#0284c7",
                    textDecoration: "none",
                  }}
                >
                  (480) 322-5889
                </a>
              </div>
            </div>
          </div>

          {/* Fax */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "16px 20px",
              borderRadius: "14px",
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: "#f1f5f9",
                color: "#475569",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Printer size={18} />
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "#64748b",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                Fax
              </div>
              <div
                style={{
                  fontSize: "1.02rem",
                  fontWeight: 600,
                  color: "#334155",
                }}
              >
                (602) 218-7499
              </div>
            </div>
          </div>

          {/* Email */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "16px 20px",
              borderRadius: "14px",
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: "#e0f2fe",
                color: "#0284c7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Mail size={18} />
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "#64748b",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                Email Address
              </div>
              <a
                href="mailto:info@orientaltrimmings.com"
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#0284c7",
                  textDecoration: "none",
                }}
              >
                info@orientaltrimmings.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
