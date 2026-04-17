"use client";

import {
  AlertCircle,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const cards = [
  {
    icon: AlertCircle,
    title: "Most People Are Underinsured",
    text: "Nearly half of Americans don't have enough life insurance to cover their family's needs if something unexpected happens.",
  },
  {
    icon: Users,
    title: "Employer Coverage Falls Short",
    text: "Group life insurance through your job typically covers just 1\u20132x your salary \u2014 far less than most families need.",
  },
  {
    icon: TrendingUp,
    title: "Rates Go Up Every Year",
    text: "The younger and healthier you are, the less you'll pay. Locking in coverage now can save you thousands over your lifetime.",
  },
];

export default function WhyLifeInsurance() {
  useScrollReveal();

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
              Why Life Insurance Matters
            </span>

            <h2
              className="mb-4 font-extrabold"
              style={{
                color: "#0A2D5A",
                fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
                lineHeight: 1.2,
              }}
            >
              Your Family&apos;s Financial Future Shouldn&apos;t Be Left to Chance.
            </h2>

            <p
              className="mb-6 leading-relaxed"
              style={{
                color: "#334155",
                fontSize: "1.125rem",
                fontFamily: "var(--font-serif)",
              }}
            >
              If something happened to you tomorrow, could your family keep up
              with the mortgage, bills, and daily expenses? Life insurance
              ensures your loved ones are protected — no matter what.
            </p>

            <p
              className="mb-6 leading-relaxed"
              style={{
                color: "#334155",
                fontSize: "1.125rem",
                fontFamily: "var(--font-serif)",
              }}
            >
              Yet nearly half of Americans have no life insurance at all, and
              many who do are severely underinsured. Whether you&apos;re relying
              on employer coverage or have no policy in place, the gap between
              what you have and what your family needs could be devastating.
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
              See how affordable real coverage can be
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right — Stat Cards */}
          <div className="flex flex-col gap-5">
            {cards.map((card, i) => (
              <div
                key={i}
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
                    {card.title}
                  </p>
                  <p
                    className="leading-relaxed"
                    style={{ color: "#334155", fontSize: "0.95rem" }}
                  >
                    {card.text}
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
