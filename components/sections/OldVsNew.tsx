"use client";

import { useEffect, useRef } from "react";
import { X as XIcon, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/translations";

const oldKeys: TranslationKey[] = [
  "oldvsnew.old1",
  "oldvsnew.old2",
  "oldvsnew.old3",
  "oldvsnew.old4",
  "oldvsnew.old5",
  "oldvsnew.old6",
];

const newKeys: TranslationKey[] = [
  "oldvsnew.new1",
  "oldvsnew.new2",
  "oldvsnew.new3",
  "oldvsnew.new4",
  "oldvsnew.new5",
  "oldvsnew.new6",
];

export default function OldVsNew() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

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

    const els = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#E8F0FA",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
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
            {t("oldvsnew.label")}
          </span>
          <h2
            style={{
              color: "#0A2D5A",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            {t("oldvsnew.headline")}
          </h2>
          <p
            style={{
              color: "#64748B",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            {t("oldvsnew.subheadline")}
          </p>
        </div>

        {/* Comparison Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "24px",
            alignItems: "stretch",
          }}
          className="comparison-grid"
        >
          {/* Old / Traditional Card */}
          <div
            className="reveal-left"
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              padding: "40px 32px",
              border: "1px solid #CBD5E1",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top bar - gray */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "#94A3B8",
              }}
            />
            <h3
              style={{
                color: "#64748B",
                fontSize: "1.25rem",
                fontWeight: 700,
                marginBottom: "8px",
              }}
            >
              {t("oldvsnew.oldTitle")}
            </h3>
            <p
              style={{
                color: "#94A3B8",
                fontSize: "0.85rem",
                marginBottom: "28px",
              }}
            >
              {t("oldvsnew.oldSubtitle")}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {oldKeys.map((key) => (
                <div
                  key={key}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      minWidth: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: "rgba(239, 68, 68, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "1px",
                    }}
                  >
                    <XIcon size={14} style={{ color: "#EF4444" }} />
                  </div>
                  <span
                    style={{
                      color: "#64748B",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {t(key)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* New / Modern Card */}
          <div
            className="reveal-right"
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              padding: "40px 32px",
              border: "2px solid #C9A040",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 4px 24px rgba(201, 160, 64, 0.15)",
            }}
          >
            {/* Top bar - gold */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "linear-gradient(90deg, #C9A040, #E8C97A)",
              }}
            />
            {/* Recommended badge */}
            <div
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "linear-gradient(135deg, #C9A040, #E8C97A)",
                color: "#0A2D5A",
                fontSize: "0.7rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                padding: "4px 12px",
                borderRadius: "999px",
              }}
            >
              {t("oldvsnew.recommended")}
            </div>
            <h3
              style={{
                color: "#0A2D5A",
                fontSize: "1.25rem",
                fontWeight: 700,
                marginBottom: "8px",
              }}
            >
              {t("oldvsnew.newTitle")}
            </h3>
            <p
              style={{
                color: "#64748B",
                fontSize: "0.85rem",
                marginBottom: "28px",
              }}
            >
              {t("oldvsnew.newSubtitle")}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {newKeys.map((key) => (
                <div
                  key={key}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      minWidth: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: "rgba(201, 160, 64, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "1px",
                    }}
                  >
                    <Check size={14} style={{ color: "#C9A040" }} />
                  </div>
                  <span
                    style={{
                      color: "#334155",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {t(key)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (min-width: 1024px) {
          .comparison-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
