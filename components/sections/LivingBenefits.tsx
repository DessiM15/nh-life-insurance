"use client";

import { useEffect, useRef } from "react";
import {
  Home,
  Car,
  PiggyBank,
  Users,
  Wallet,
  HeartPulse,
  Brain,
  Activity,
} from "lucide-react";

const livingBenefits = [
  { label: "Cancer", icon: HeartPulse, angle: 150 },
  { label: "Heart Attack", icon: Activity, angle: 90 },
  { label: "Stroke", icon: Brain, angle: 30 },
];

const protectedAssets = [
  { label: "Home", icon: Home },
  { label: "Car", icon: Car },
  { label: "Retirement", icon: PiggyBank },
  { label: "Family", icon: Users },
  { label: "Savings", icon: Wallet },
];

export default function LivingBenefits() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      style={{
        background: "linear-gradient(180deg, #0A2D5A 0%, #0E3A6E 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "100px 24px 0",
      }}
    >
      {/* Header */}
      <div className="reveal" style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto 56px" }}>
        <span
          style={{
            display: "inline-block",
            color: "#C9A040",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "16px",
            fontFamily: "var(--font-mono)",
          }}
        >
          LIVING BENEFITS
        </span>
        <h2
          style={{
            color: "#FFFFFF",
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: "20px",
          }}
        >
          Protection That Works While You&apos;re Still Here
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "1.15rem",
            lineHeight: 1.7,
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
          }}
        >
          Don&apos;t raid your retirement. Don&apos;t sell your home. Modern life insurance
          gives you access to funds when you need them most — while you&apos;re still alive.
        </p>
      </div>

      {/* Dome Visual */}
      <div className="reveal" style={{ display: "flex", justifyContent: "center", position: "relative" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "780px",
          }}
          className="dome-container"
        >
          {/* Mobile benefit pills - shown as flex row above dome on small screens */}
          <div
            className="mobile-benefit-pills"
            style={{
              display: "none",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            {livingBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.label}
                  style={{
                    background: "rgba(201, 160, 64, 0.15)",
                    border: "1px solid rgba(201, 160, 64, 0.5)",
                    borderRadius: "999px",
                    padding: "10px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#C9A040",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  <Icon size={18} />
                  {benefit.label}
                </div>
              );
            })}
          </div>

          {/* Dome aspect ratio container */}
          <div style={{ position: "relative", paddingBottom: "55%" }}>
            {/* Radial backdrop glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(ellipse 80% 90% at 50% 100%, rgba(201,160,64,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Outer glow ring */}
            <div
              className="dome-glow"
              style={{
                position: "absolute",
                bottom: 0,
                left: "2%",
                right: "2%",
                height: "100%",
                borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
                border: "2px solid rgba(201, 160, 64, 0.2)",
                pointerEvents: "none",
              }}
            />

            {/* Main dome */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: "5%",
                right: "5%",
                height: "95%",
                borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
                background: "linear-gradient(180deg, rgba(201,160,64,0.12) 0%, rgba(201,160,64,0.04) 60%, transparent 100%)",
                border: "2px solid rgba(201, 160, 64, 0.35)",
                borderBottom: "none",
                overflow: "hidden",
              }}
            >
              {/* Inner shimmer */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(201,160,64,0.06) 0%, transparent 70%)",
                }}
              />
            </div>

            {/* Ground line */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent, rgba(201,160,64,0.4), transparent)",
              }}
            />

            {/* Desktop benefit pills - arc-positioned */}
            {livingBenefits.map((benefit, i) => {
              const Icon = benefit.icon;
              // Calculate arc positions for 3 items
              const positions = [
                { left: "2%", bottom: "55%" },   // Left: Cancer
                { left: "50%", bottom: "95%", transform: "translateX(-50%)" }, // Top center: Heart Attack
                { right: "2%", bottom: "55%" },   // Right: Stroke
              ];
              const pos = positions[i];
              return (
                <div
                  key={benefit.label}
                  className="desktop-benefit-pill"
                  style={{
                    position: "absolute",
                    ...pos,
                    background: "rgba(10, 45, 90, 0.9)",
                    border: "1px solid rgba(201, 160, 64, 0.5)",
                    borderRadius: "999px",
                    padding: "10px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#C9A040",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    zIndex: 5,
                    boxShadow: "0 2px 12px rgba(201, 160, 64, 0.2)",
                  }}
                >
                  <Icon size={18} />
                  {benefit.label}
                </div>
              );
            })}

            {/* Protected assets inside dome */}
            <div
              style={{
                position: "absolute",
                bottom: "8%",
                left: "12%",
                right: "12%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "flex-end",
                zIndex: 3,
              }}
            >
              {protectedAssets.map((asset, i) => {
                const Icon = asset.icon;
                return (
                  <div
                    key={asset.label}
                    className="dome-float"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "6px",
                      animationDelay: `${i * 0.5}s`,
                    }}
                  >
                    <Icon
                      size={38}
                      style={{
                        color: "rgba(255,255,255,0.7)",
                      }}
                      className="dome-asset-icon"
                    />
                    <span
                      className="dome-asset-label"
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {asset.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="reveal" style={{ textAlign: "center", padding: "48px 0 72px" }}>
        <button
          onClick={scrollToForm}
          style={{
            background: "#C9A040",
            color: "#0A2D5A",
            padding: "16px 48px",
            fontSize: "1.05rem",
            fontWeight: 800,
            borderRadius: "14px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 6px 28px rgba(201,160,64,0.45)",
            transition: "background 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#A07C20")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#C9A040")}
        >
          See What You Qualify For →
        </button>
      </div>

      {/* Bottom wave to StatsBar gold */}
      <div style={{ position: "relative", marginTop: "-1px" }}>
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "64px", display: "block" }}
        >
          <path
            d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z"
            fill="#C9A040"
          />
        </svg>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .dome-container {
            max-width: 380px !important;
          }
          .mobile-benefit-pills {
            display: flex !important;
          }
          .desktop-benefit-pill {
            display: none !important;
          }
          .dome-asset-icon {
            width: 28px !important;
            height: 28px !important;
          }
          .dome-asset-label {
            font-size: 0.65rem !important;
          }
        }
      `}</style>
    </section>
  );
}
