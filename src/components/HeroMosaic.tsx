"use client";

import React from "react";

export default function HeroMosaic() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "460px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
      }}
    >
      <style>{`
        /* Smooth, relaxed in-place cross spin (anchored at center 35px 35px) */
        @keyframes spinCrossStatic {
          0% {
            transform: rotate(0deg);
          }
          35% {
            transform: rotate(90deg);
          }
          50% {
            transform: rotate(90deg);
          }
          85% {
            transform: rotate(180deg);
          }
          100% {
            transform: rotate(180deg);
          }
        }

        .static-cross-spin {
          animation: spinCrossStatic 5.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
          transform-origin: 35px 35px;
        }

        .static-tile-hover {
          transition: filter 0.3s ease, opacity 0.3s ease;
          cursor: pointer;
        }

        .static-tile-hover:hover {
          filter: drop-shadow(0 0 14px rgba(2, 132, 199, 0.5));
          opacity: 0.95;
        }
      `}</style>

      <svg
        viewBox="0 0 420 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      >
        {/* ======================================================== */}
        {/* 4 FLOATING ACCENT DIAMONDS (STATIC POSITIONS, SMOOTH)    */}
        {/* ======================================================== */}

        {/* Floating accent diamond 1 (top-left) - Locked at (40, 10) */}
        <g transform="translate(40, 10)">
          <polygon points="12,0 24,12 12,24 0,12" fill="#38bdf8" opacity="0.85">
            <animate
              attributeName="points"
              dur="4.0s"
              repeatCount="indefinite"
              values="12,0 24,12 12,24 0,12; 12,3 21,12 12,21 3,12; 12,-2 26,12 12,26 -2,12; 12,0 24,12 12,24 0,12"
            />
          </polygon>
        </g>

        {/* Floating accent diamond 2 (top right) - Locked at (370, 45) */}
        <g transform="translate(370, 45)">
          <polygon points="10,0 20,10 10,20 0,10" fill="#0284c7" opacity="0.8">
            <animate
              attributeName="points"
              dur="4.2s"
              repeatCount="indefinite"
              values="10,0 20,10 10,20 0,10; 10,3 17,10 10,17 3,10; 10,-2 22,10 10,22 -2,10; 10,0 20,10 10,20 0,10"
            />
          </polygon>
        </g>

        {/* Floating accent diamond 3 (mid left) - Locked at (68, 140) */}
        <g transform="translate(68, 140)">
          <polygon points="14,0 28,14 14,28 0,14" fill="#0f172a">
            <animate
              attributeName="points"
              dur="3.8s"
              repeatCount="indefinite"
              values="14,0 28,14 14,28 0,14; 14,3 25,14 14,25 3,14; 14,-2 30,14 14,30 -2,14; 14,0 28,14 14,28 0,14"
            />
          </polygon>
        </g>

        {/* ======================================================== */}
        {/* ROW 1 TILES (STATIC GRIDS, SMOOTH MORPHISM)              */}
        {/* ======================================================== */}

        {/* Tile (0,0) - (col 1, row 1): Locked at (130, 10) */}
        <g transform="translate(130, 10)" className="static-tile-hover">
          <path d="M0,0 C38.6,0 70,31.4 70,70 L0,70 Z" fill="#38bdf8">
            <animate
              attributeName="d"
              dur="4.2s"
              repeatCount="indefinite"
              values="M0,0 C38.6,0 70,31.4 70,70 L0,70 Z; M0,0 C52,8 76,42 70,70 L0,70 Z; M0,0 C22,-6 62,18 70,70 L0,70 Z; M0,0 C38.6,0 70,31.4 70,70 L0,70 Z"
            />
          </path>
        </g>

        {/* Tile (1,0) - (col 2, row 1): Locked at (210, 10) */}
        <g transform="translate(210, 10)" className="static-tile-hover">
          <circle cx="16" cy="16" r="14" fill="#7dd3fc">
            <animate attributeName="r" values="14; 17.5; 10.5; 14" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="54" cy="16" r="14" fill="#0284c7">
            <animate attributeName="r" values="14; 10; 18; 14" dur="3.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="16" cy="54" r="14" fill="#0369a1">
            <animate attributeName="r" values="14; 18; 10; 14" dur="3.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="54" cy="54" r="14" fill="#bae6fd">
            <animate attributeName="r" values="14; 10.5; 17.5; 14" dur="3.9s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Tile (2,0) - (col 3, row 1): Locked at (290, 10) */}
        <g transform="translate(290, 10)" className="static-tile-hover">
          <path d="M0,0 L70,0 L70,70 Z" fill="#1e293b">
            <animate
              attributeName="d"
              dur="4.5s"
              repeatCount="indefinite"
              values="M0,0 L70,0 L70,70 Z; M0,0 L70,0 L70,70 C52,48 26,20 0,0 Z; M0,0 L70,0 L70,70 C44,55 18,28 0,0 Z; M0,0 L70,0 L70,70 Z"
            />
          </path>
          <path d="M0,0 L0,70 L70,70 Z" fill="#e2e8f0">
            <animate
              attributeName="d"
              dur="4.5s"
              repeatCount="indefinite"
              values="M0,0 L0,70 L70,70 Z; M0,0 L0,70 L70,70 C52,48 26,20 0,0 Z; M0,0 L0,70 L70,70 C44,55 18,28 0,0 Z; M0,0 L0,70 L70,70 Z"
            />
          </path>
        </g>

        {/* ======================================================== */}
        {/* ROW 2 TILES (COL 1 TO COL 4) - STATIC GRIDS, SMOOTH       */}
        {/* ======================================================== */}

        {/* Tile (0,1) - (col 1, row 2): Locked at (130, 90) */}
        <g transform="translate(130, 90)" className="static-tile-hover">
          <rect x="0" y="0" width="30" height="30" rx="3" fill="#0f172a">
            <animate attributeName="rx" values="3; 14; 1; 3" dur="3.8s" repeatCount="indefinite" />
          </rect>
          <rect x="40" y="0" width="30" height="30" rx="3" fill="#0284c7">
            <animate attributeName="rx" values="3; 1; 14; 3" dur="4.0s" repeatCount="indefinite" />
          </rect>
          <rect x="0" y="40" width="30" height="30" rx="3" fill="#0284c7">
            <animate attributeName="rx" values="3; 14; 2; 3" dur="3.9s" repeatCount="indefinite" />
          </rect>
          <rect x="40" y="40" width="30" height="30" rx="3" fill="#0f172a">
            <animate attributeName="rx" values="3; 2; 14; 3" dur="3.7s" repeatCount="indefinite" />
          </rect>
        </g>

        {/* Tile (1,1) - (col 2, row 2): Locked at (210, 90) */}
        <g transform="translate(210, 90)" className="static-tile-hover">
          <rect x="0" y="0" width="70" height="70" rx="4" fill="#0284c7">
            <animate attributeName="rx" values="4; 16; 2; 4" dur="4.2s" repeatCount="indefinite" />
          </rect>
          <g className="static-cross-spin">
            <path
              d="M35,12 L35,58 M12,35 L58,35"
              stroke="#ffffff"
              strokeWidth="8"
              strokeLinecap="round"
            >
              <animate attributeName="stroke-width" values="8; 11; 5; 8" dur="3.2s" repeatCount="indefinite" />
            </path>
            <circle cx="35" cy="35" r="7" fill="#ffffff">
              <animate attributeName="r" values="7; 10.5; 4.5; 7" dur="3.2s" repeatCount="indefinite" />
            </circle>
          </g>
        </g>

        {/* Tile (2,1) - (col 3, row 2): Locked at (290, 90) */}
        <g transform="translate(290, 90)" className="static-tile-hover">
          <polygon points="0,0 70,0 35,70" fill="#0f172a">
            <animate
              attributeName="points"
              dur="4.0s"
              repeatCount="indefinite"
              values="0,0 70,0 35,70; 5,6 65,3 35,64; -2,-2 72,5 33,72; 0,0 70,0 35,70"
            />
          </polygon>
        </g>

        {/* Tile (3,1) - (col 4, row 2): Locked at (370, 90) */}
        <g transform="translate(370, 90)" className="static-tile-hover">
          <path d="M0,0 L0,70 C38.6,70 70,38.6 70,0 Z" fill="#38bdf8">
            <animate
              attributeName="d"
              dur="4.4s"
              repeatCount="indefinite"
              values="M0,0 L0,70 C38.6,70 70,38.6 70,0 Z; M0,0 L0,70 C52,60 75,28 70,0 Z; M0,0 L0,70 C24,74 60,46 70,0 Z; M0,0 L0,70 C38.6,70 70,38.6 70,0 Z"
            />
          </path>
        </g>

        {/* ======================================================== */}
        {/* ROW 3 TILES (COL 1 TO COL 4) - STATIC GRIDS, SMOOTH       */}
        {/* ======================================================== */}

        {/* Tile (0,2) - (col 1, row 3): Locked at (130, 170) */}
        <g transform="translate(130, 170)" className="static-tile-hover">
          <circle cx="35" cy="35" r="34" fill="#e0f2fe">
            <animate attributeName="r" values="34; 37.5; 30.5; 34" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="35" cy="35" r="22" fill="#0284c7">
            <animate attributeName="r" values="22; 17.5; 25.5; 22" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="35" cy="35" r="10" fill="#0f172a">
            <animate attributeName="r" values="10; 13.5; 6.5; 10" dur="3.2s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Tile (1,2) - (col 2, row 3): Locked at (210, 170) */}
        <g transform="translate(210, 170)" className="static-tile-hover">
          <path d="M0,70 L70,0 L70,70 Z" fill="#0f172a">
            <animate
              attributeName="d"
              dur="4.2s"
              repeatCount="indefinite"
              values="M0,70 L70,0 L70,70 Z; M0,70 L70,0 L70,70 C48,48 18,64 0,70 Z; M0,70 L70,0 L70,70 C58,40 30,50 0,70 Z; M0,70 L70,0 L70,70 Z"
            />
          </path>
          <path d="M0,0 L70,0 L0,70 Z" fill="#38bdf8">
            <animate
              attributeName="d"
              dur="4.2s"
              repeatCount="indefinite"
              values="M0,0 L70,0 L0,70 Z; M0,0 L70,0 C48,48 18,64 0,70 Z; M0,0 L70,0 C58,40 30,50 0,70 Z; M0,0 L70,0 L0,70 Z"
            />
          </path>
        </g>

        {/* Tile (2,2) - (col 3, row 3): Locked at (290, 170) */}
        <g transform="translate(290, 170)" className="static-tile-hover">
          <path d="M70,70 C31.4,70 0,38.6 0,0 L70,0 Z" fill="#0284c7">
            <animate
              attributeName="d"
              dur="4.4s"
              repeatCount="indefinite"
              values="M70,70 C31.4,70 0,38.6 0,0 L70,0 Z; M70,70 C22,58 6,28 0,0 L70,0 Z; M70,70 C42,74 14,48 0,0 L70,0 Z; M70,70 C31.4,70 0,38.6 0,0 L70,0 Z"
            />
          </path>
        </g>

        {/* Tile (3,2) - (col 4, row 3): Locked at (370, 170) */}
        <g transform="translate(370, 170)" className="static-tile-hover">
          <path d="M0,70 C38.6,70 70,38.6 70,0 L0,0 Z" fill="#1e293b">
            <animate
              attributeName="d"
              dur="4.3s"
              repeatCount="indefinite"
              values="M0,70 C38.6,70 70,38.6 70,0 L0,0 Z; M0,70 C48,62 68,28 70,0 L0,0 Z; M0,70 C26,74 54,46 70,0 L0,0 Z; M0,70 C38.6,70 70,38.6 70,0 L0,0 Z"
            />
          </path>
        </g>

        {/* ======================================================== */}
        {/* ROW 4 TILES (COL 1 TO COL 4) - STATIC GRIDS, SMOOTH       */}
        {/* ======================================================== */}

        {/* Tile (0,3) - (col 1, row 4): Locked at (130, 250) */}
        <g transform="translate(130, 250)" className="static-tile-hover">
          <circle cx="35" cy="35" r="35" fill="#0f172a">
            <animate attributeName="r" values="35; 37.5; 32.5; 35" dur="3.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="35" cy="35" r="18" fill="#ffffff">
            <animate attributeName="r" values="18; 22; 13; 18" dur="3.4s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Tile (1,3) - (col 2, row 4): Locked at (210, 250) */}
        <g transform="translate(210, 250)" className="static-tile-hover">
          <rect x="0" y="0" width="70" height="70" rx="6" fill="#1e293b">
            <animate attributeName="rx" values="6; 15; 3; 6" dur="3.8s" repeatCount="indefinite" />
          </rect>
          <polygon points="0,0 35,0 0,35" fill="#38bdf8">
            <animate
              attributeName="points"
              dur="3.6s"
              repeatCount="indefinite"
              values="0,0 35,0 0,35; 0,0 46,0 0,46; 0,0 24,0 0,24; 0,0 35,0 0,35"
            />
          </polygon>
        </g>

        {/* Tile (2,3) - (col 3, row 4): Locked at (290, 250) */}
        <g transform="translate(290, 250)" className="static-tile-hover">
          <path d="M0,0 C38.6,0 70,31.4 70,70 L70,0 Z" fill="#38bdf8">
            <animate
              attributeName="d"
              dur="4.2s"
              repeatCount="indefinite"
              values="M0,0 C38.6,0 70,31.4 70,70 L70,0 Z; M0,0 C48,10 68,42 70,70 L70,0 Z; M0,0 C28,-6 70,22 70,70 L70,0 Z; M0,0 C38.6,0 70,31.4 70,70 L70,0 Z"
            />
          </path>
          <path d="M0,0 L0,70 C0,70 35,70 70,70 Z" fill="#0284c7">
            <animate
              attributeName="d"
              dur="4.2s"
              repeatCount="indefinite"
              values="M0,0 L0,70 C0,70 35,70 70,70 Z; M0,0 L0,70 C12,62 44,76 70,70 Z; M0,0 L0,70 C-6,72 26,64 70,70 Z; M0,0 L0,70 C0,70 35,70 70,70 Z"
            />
          </path>
        </g>

        {/* Tile (3,3) - (col 4, row 4): Locked at (370, 250) */}
        <g transform="translate(370, 250)" className="static-tile-hover">
          <polygon points="35,0 70,35 35,70 0,35" fill="#0f172a">
            <animate
              attributeName="points"
              dur="3.8s"
              repeatCount="indefinite"
              values="35,0 70,35 35,70 0,35; 35,5 65,35 35,65 5,35; 35,-3 73,35 35,73 -3,35; 35,0 70,35 35,70 0,35"
            />
          </polygon>
        </g>

        {/* ======================================================== */}
        {/* ROW 5 - BOTTOM EDGE FEATURES (STATIC GRIDS, SMOOTH)      */}
        {/* ======================================================== */}

        {/* Accent Diamond - Locked at (90, 335) */}
        <g transform="translate(90, 335)">
          <polygon points="16,0 32,16 16,32 0,16" fill="#0284c7">
            <animate
              attributeName="points"
              dur="4.0s"
              repeatCount="indefinite"
              values="16,0 32,16 16,32 0,16; 16,4 28,16 16,28 4,16; 16,-2 34,16 16,34 -2,16; 16,0 32,16 16,32 0,16"
            />
          </polygon>
        </g>

        {/* Bottom Arch (Navy) - Locked at (180, 330) */}
        <g transform="translate(180, 330)" className="static-tile-hover">
          <path d="M0,70 C0,31.4 31.4,0 70,0 C108.6,0 140,31.4 140,70 Z" fill="#0f172a">
            <animate
              attributeName="d"
              dur="4.6s"
              repeatCount="indefinite"
              values="M0,70 C0,31.4 31.4,0 70,0 C108.6,0 140,31.4 140,70 Z; M0,70 C0,22 24,-8 70,-8 C116,-8 140,22 140,70 Z; M0,70 C0,40 38,10 70,10 C102,10 140,40 140,70 Z; M0,70 C0,31.4 31.4,0 70,0 C108.6,0 140,31.4 140,70 Z"
            />
          </path>
          <circle cx="70" cy="50" r="18" fill="#ffffff">
            <animate attributeName="r" values="18; 22; 14; 18" dur="3.4s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Bottom Right Quarter Circle - Locked at (330, 330) */}
        <g transform="translate(330, 330)" className="static-tile-hover">
          <path d="M0,0 C38.6,0 70,31.4 70,70 L0,70 Z" fill="#0284c7">
            <animate
              attributeName="d"
              dur="4.2s"
              repeatCount="indefinite"
              values="M0,0 C38.6,0 70,31.4 70,70 L0,70 Z; M0,0 C48,6 74,38 70,70 L0,70 Z; M0,0 C24,-6 62,18 70,70 L0,70 Z; M0,0 C38.6,0 70,31.4 70,70 L0,70 Z"
            />
          </path>
        </g>
      </svg>
    </div>
  );
}
