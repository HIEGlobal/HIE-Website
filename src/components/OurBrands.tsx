import React from "react";
import Image from "next/image";
import { ExternalLink, Sparkles } from "lucide-react";

export default function OurBrands() {
  const brands = [
    {
      name: "Embellished Homes",
      logo: "/images/brands/embellished-homes.jpg",
      tagline: "Luxury Home Furnishings & Fine Décor",
      description:
        "Exquisite handcrafted home accents, artisanal textiles, and statement pieces designed for sophisticated living spaces.",
      url: "https://embellishedhomes.com",
      accent: "#1e293b",
      pill: "Home Décor",
    },
    {
      name: "Goofy Paws",
      logo: "/images/brands/goofy-paws.png",
      tagline: "Designer Pet Living & Accessories",
      description:
        "Chic, comfortable, and durable pet accessories, bedding, and play products manufactured with pet safety in mind.",
      url: "https://goofypaws.org",
      accent: "#6366f1",
      pill: "Pet Lifestyle",
    },
    {
      name: "Oriental Trimmings",
      logo: "/images/brands/oriental-trimmings.png",
      tagline: "Artisanal Trimmings, Tassels & Textiles",
      description:
        "World-class decorative trims, tassels, braids, and textile embellishments crafted with traditional Indian artistry.",
      url: "https://orientaltrimmings.com",
      accent: "#0ea5e9",
      pill: "Textile Artistry",
    },
    {
      name: "Vatican Homes",
      logo: "/images/brands/vatican-homes.jpg",
      tagline: "Classic Elegance & Architectural Décor",
      description:
        "Timeless home aesthetics, holiday centerpieces, and heritage-inspired decorative accents crafted across wood, stone, and metal.",
      url: "https://vaticanhomes.com",
      accent: "#0f172a",
      pill: "Holiday & Heritage",
    },
  ];

  // Duplicate list for infinite marquee loop
  const marqueeBrands = [...brands, ...brands, ...brands];

  return (
    <section
      id="brands"
      style={{
        paddingTop: "90px",
        paddingBottom: "110px",
        backgroundColor: "#f8fafc",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid #e2e8f0",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "760px",
            margin: "0 auto 50px",
          }}
        >
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
            <Sparkles size={16} />
            Our Brand Portfolio
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.7rem)",
              fontWeight: 800,
              color: "#1e293b",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Explore Our Specialized Brands
          </h2>

          <p
            style={{
              fontSize: "1.08rem",
              color: "#64748b",
              lineHeight: 1.7,
            }}
          >
            HIE Global Inc. powers a distinguished family of home d&eacute;cor,
            lifestyle, and holiday brands. Click any brand to visit their
            official website.
          </p>
        </div>

        {/* 1. Animated Scrolling Marquee Ticker */}
        <div style={{ marginBottom: "60px" }}>
          <div className="marquee-container">
            <div className="marquee-track">
              {marqueeBrands.map((b, idx) => (
                <a
                  key={idx}
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "14px",
                    padding: "16px 28px",
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    boxShadow: "0 6px 16px rgba(15, 23, 42, 0.05)",
                    border: "1px solid #e2e8f0",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    transition: "all 0.25s ease",
                  }}
                  className="marquee-item"
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100px",
                      height: "40px",
                    }}
                  >
                    <Image
                      src={b.logo}
                      alt={b.name}
                      fill
                      sizes="100px"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "#1e293b",
                      }}
                    >
                      {b.name}
                    </span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "#0284c7",
                        fontWeight: 600,
                      }}
                    >
                      {b.pill}
                    </span>
                  </div>
                  <ExternalLink size={14} color="#94a3b8" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Interactive Pop-Animated Brand Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "28px",
          }}
          className="brands-grid"
        >
          {brands.map((brand, idx) => (
            <a
              key={idx}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-pop-card"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "32px 24px 28px",
                boxShadow:
                  "0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.03)",
                border: "1px solid #e2e8f0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {/* Category Pill */}
              <span
                style={{
                  alignSelf: "flex-end",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "#0369a1",
                  backgroundColor: "#e0f2fe",
                  padding: "3px 10px",
                  borderRadius: "9999px",
                  marginBottom: "16px",
                }}
              >
                {brand.pill}
              </span>

              {/* Brand Logo Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "90px",
                  marginBottom: "20px",
                  padding: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 768px) 100vw, 260px"
                />
              </div>

              {/* Title & Tagline */}
              <h3
                style={{
                  fontSize: "1.22rem",
                  fontWeight: 800,
                  color: "#1e293b",
                  marginBottom: "6px",
                }}
              >
                {brand.name}
              </h3>

              <div
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "#0284c7",
                  marginBottom: "14px",
                }}
              >
                {brand.tagline}
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.86rem",
                  color: "#64748b",
                  lineHeight: 1.55,
                  marginBottom: "24px",
                  flexGrow: 1,
                }}
              >
                {brand.description}
              </p>

              {/* Action Button */}
              <div
                className="brand-visit-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  backgroundColor: "#f1f5f9",
                  color: "#1e293b",
                  border: "1px solid #e2e8f0",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                Visit Website
                <ExternalLink size={15} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
