"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/translations";

const stats: { valueKey: TranslationKey; labelKey: TranslationKey }[] = [
  { valueKey: "stats.value1", labelKey: "stats.label1" },
  { valueKey: "stats.value2", labelKey: "stats.label2" },
  { valueKey: "stats.value3", labelKey: "stats.label3" },
];

export default function StatsBar() {
  const { t } = useLanguage();

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #C9A040 0%, #E8C97A 60%, #C9A040 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "40px 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.valueKey}
              style={{
                flex: "1 1 200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                padding: "16px 32px",
                textAlign: "center",
                position: "relative",
              }}
            >
              {/* Vertical Divider */}
              {i > 0 && (
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "20%",
                    width: "1px",
                    height: "60%",
                    background: "rgba(255,255,255,0.25)",
                  }}
                  className="hidden md:block"
                />
              )}

              <span
                style={{
                  color: "#0A2D5A",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 500,
                  fontSize: "2.25rem",
                  lineHeight: 1,
                }}
              >
                {t(stat.valueKey)}
              </span>
              <span
                style={{
                  color: "rgba(10,45,90,0.75)",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  maxWidth: "180px",
                }}
              >
                {t(stat.labelKey)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
