"use client";

import { Heart, BookOpen, Building2 } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/translations";

const cards: {
  number: string;
  icon: typeof Heart;
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
  hookKey: TranslationKey;
}[] = [
  {
    number: "01",
    icon: Heart,
    titleKey: "who.card1Title",
    bodyKey: "who.card1Body",
    hookKey: "who.card1Hook",
  },
  {
    number: "02",
    icon: BookOpen,
    titleKey: "who.card2Title",
    bodyKey: "who.card2Body",
    hookKey: "who.card2Hook",
  },
  {
    number: "03",
    icon: Building2,
    titleKey: "who.card3Title",
    bodyKey: "who.card3Body",
    hookKey: "who.card3Hook",
  },
];

export default function WhoIsItFor() {
  useScrollReveal();
  const { t } = useLanguage();

  return (
    <section style={{ backgroundColor: "#E8F0FA" }}>
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        {/* Header */}
        <span
          className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest"
          style={{ color: "#C9A040" }}
        >
          {t("who.label")}
        </span>

        <h2
          className="mx-auto mb-4 font-extrabold"
          style={{
            color: "#0A2D5A",
            fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
            lineHeight: 1.2,
          }}
        >
          {t("who.headline")}
        </h2>

        <p
          className="mx-auto mb-12 max-w-xl leading-relaxed"
          style={{ color: "#334155", fontSize: "1.05rem" }}
        >
          {t("who.subheadline")}
        </p>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={card.number}
              className="reveal flex flex-col items-center rounded-2xl bg-white p-8 text-center transition-all duration-300"
              style={{
                boxShadow: "0 2px 20px rgba(20,79,143,0.08)",
                transitionDelay: `${i * 0.15}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(20,79,143,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 20px rgba(20,79,143,0.08)";
              }}
            >
              {/* Number Badge */}
              <span
                className="mb-4 inline-block rounded px-2 py-0.5 text-sm"
                style={{
                  color: "#C9A040",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 500,
                  border: "1px solid rgba(201,160,64,0.4)",
                }}
              >
                {card.number}
              </span>

              {/* Icon */}
              <card.icon
                size={40}
                className="mb-3"
                style={{ color: "#144F8F" }}
              />

              {/* Title */}
              <h3
                className="mb-3 text-xl font-extrabold"
                style={{ color: "#0A2D5A" }}
              >
                {t(card.titleKey)}
              </h3>

              {/* Body */}
              <p
                className="mb-4 text-sm leading-relaxed"
                style={{ color: "#334155" }}
              >
                {t(card.bodyKey)}
              </p>

              {/* Hook */}
              <p
                className="mt-auto text-sm italic"
                style={{
                  color: "#A07C20",
                  fontFamily: "var(--font-serif)",
                }}
              >
                {t(card.hookKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
