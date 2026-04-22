"use client";

import {
  AlertCircle,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/translations";

const cards: { icon: typeof AlertCircle; titleKey: TranslationKey; textKey: TranslationKey }[] = [
  {
    icon: AlertCircle,
    titleKey: "why.card1Title",
    textKey: "why.card1Text",
  },
  {
    icon: Users,
    titleKey: "why.card2Title",
    textKey: "why.card2Text",
  },
  {
    icon: TrendingUp,
    titleKey: "why.card3Title",
    textKey: "why.card3Text",
  },
];

export default function WhyLifeInsurance() {
  useScrollReveal();
  const { t } = useLanguage();

  const scrollToForm = () => {
    document
      .getElementById("lead-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{ backgroundColor: "#FFFFFF" }}>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left — Text Content */}
          <div className="reveal-left">
            <span
              className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#C9A040" }}
            >
              {t("why.label")}
            </span>

            <h2
              className="mb-4 font-extrabold"
              style={{
                color: "#0A2D5A",
                fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
                lineHeight: 1.2,
              }}
            >
              {t("why.headline")}
            </h2>

            <p
              className="mb-6 leading-relaxed"
              style={{
                color: "#334155",
                fontSize: "1.125rem",
                fontFamily: "var(--font-serif)",
              }}
            >
              {t("why.body1")}
            </p>

            <p
              className="mb-6 leading-relaxed"
              style={{
                color: "#334155",
                fontSize: "1.125rem",
                fontFamily: "var(--font-serif)",
              }}
            >
              {t("why.body2")}
            </p>

            <button
              onClick={scrollToForm}
              className="group flex items-center gap-2 border-0 bg-transparent font-semibold transition-all duration-300 hover:gap-3"
              style={{
                color: "#C9A040",
                fontSize: "1rem",
                cursor: "pointer",
                padding: 0,
              }}
            >
              {t("why.cta")}
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right — Stat Cards */}
          <div className="flex flex-col gap-5">
            {cards.map((card, i) => (
              <div
                key={card.titleKey}
                className="reveal-right flex items-start gap-4 rounded-2xl bg-white p-5"
                style={{
                  boxShadow: "0 2px 20px rgba(20,79,143,0.08)",
                  borderLeft: "4px solid #C9A040",
                  transitionDelay: `${i * 0.15}s`,
                }}
              >
                <card.icon
                  size={24}
                  className="mt-0.5 shrink-0"
                  style={{ color: "#C9A040" }}
                />
                <div>
                  <p
                    className="font-bold mb-1"
                    style={{ color: "#0A2D5A", fontSize: "0.95rem" }}
                  >
                    {t(card.titleKey)}
                  </p>
                  <p
                    className="leading-relaxed"
                    style={{ color: "#334155", fontSize: "0.95rem" }}
                  >
                    {t(card.textKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
