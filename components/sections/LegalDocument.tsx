"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/translations";

const EMAIL = "robert@newhorizonsbenefits.com";
const PHONE_DISPLAY = "(469) 831-2672";
const PHONE_TEL = "+14698312672";

const headingStyle: React.CSSProperties = {
  fontSize: "1.25rem",
  fontWeight: 700,
  color: "#0A2D5A",
  marginTop: "36px",
  marginBottom: "10px",
};

const bodyStyle: React.CSSProperties = {
  color: "#334155",
  fontSize: "1rem",
  lineHeight: 1.75,
};

const linkStyle: React.CSSProperties = {
  color: "#144F8F",
  fontWeight: 600,
  textDecoration: "none",
  borderBottom: "1px solid rgba(20,79,143,0.3)",
};

/** Heading + paragraph pair, the shape every clause on this page takes. */
function Clause({
  headingKey,
  bodyKey,
}: {
  headingKey: TranslationKey;
  bodyKey: TranslationKey;
}) {
  const { t } = useLanguage();
  return (
    <>
      <h3 style={headingStyle}>{t(headingKey)}</h3>
      <p style={bodyStyle}>{t(bodyKey)}</p>
    </>
  );
}

/** Closing contact clause — intro line followed by linked email and phone. */
function ContactClause({
  headingKey,
  bodyKey,
}: {
  headingKey: TranslationKey;
  bodyKey: TranslationKey;
}) {
  const { t } = useLanguage();
  return (
    <>
      <h3 style={headingStyle}>{t(headingKey)}</h3>
      <p style={bodyStyle}>{t(bodyKey)}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          marginTop: "12px",
          padding: "16px 20px",
          borderRadius: "12px",
          backgroundColor: "#E8F0FA",
          border: "1px solid rgba(20,79,143,0.15)",
        }}
      >
        <a href={`mailto:${EMAIL}`} style={linkStyle}>
          {EMAIL}
        </a>
        <a href={`tel:${PHONE_TEL}`} style={linkStyle}>
          {PHONE_DISPLAY}
        </a>
      </div>
    </>
  );
}

export default function LegalDocument() {
  const { t } = useLanguage();

  const jumpLinkStyle: React.CSSProperties = {
    display: "inline-block",
    padding: "10px 22px",
    borderRadius: "9999px",
    border: "1px solid #C9A040",
    color: "#C9A040",
    fontSize: "0.875rem",
    fontWeight: 600,
    textDecoration: "none",
    transition: "background-color 0.3s, color 0.3s",
  };

  return (
    <>
      {/* Dark header band — also gives the fixed navbar a surface to sit on */}
      <header style={{ background: "var(--gradient-hero)" }}>
        <div
          className="mx-auto max-w-7xl px-6"
          style={{ paddingTop: "140px", paddingBottom: "64px" }}
        >
          <div style={{ maxWidth: "46rem" }}>
            <span
              className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#C9A040" }}
            >
              {t("legal.eyebrow")}
            </span>
            <h1
              className="font-extrabold"
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
                lineHeight: 1.15,
                marginBottom: "16px",
              }}
            >
              {t("legal.title")}
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "1rem",
                marginBottom: "4px",
              }}
            >
              {t("legal.entity")}
            </p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem" }}>
              {t("legal.effective")}
            </p>

            <div
              style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "28px" }}
            >
              <a
                href="#privacy"
                style={jumpLinkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#C9A040";
                  e.currentTarget.style.color = "#0A2D5A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#C9A040";
                }}
              >
                {t("legal.jumpPrivacy")}
              </a>
              <a
                href="#terms"
                style={jumpLinkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#C9A040";
                  e.currentTarget.style.color = "#0A2D5A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#C9A040";
                }}
              >
                {t("legal.jumpTerms")}
              </a>
            </div>
          </div>
        </div>
      </header>

      <main style={{ backgroundColor: "#F8FAFD" }}>
        <div className="mx-auto max-w-7xl px-6" style={{ paddingTop: "56px", paddingBottom: "72px" }}>
          <article
            className="rounded-2xl bg-white"
            style={{
              maxWidth: "46rem",
              padding: "clamp(28px, 5vw, 56px)",
              boxShadow: "var(--shadow-card)",
              border: "1px solid rgba(20,79,143,0.08)",
            }}
          >
            {/* ---------- Privacy Policy ---------- */}
            <section id="privacy" style={{ scrollMarginTop: "100px" }}>
              <h2
                className="font-extrabold"
                style={{ color: "#0A2D5A", fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "8px" }}
              >
                {t("legal.privacy.heading")}
              </h2>
              <p
                style={{
                  color: "#64748B",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  marginBottom: "20px",
                }}
              >
                {t("legal.effective")}
              </p>
              <p style={bodyStyle}>{t("legal.privacy.intro")}</p>

              <Clause
                headingKey="legal.privacy.collectHeading"
                bodyKey="legal.privacy.collectBody"
              />
              <Clause
                headingKey="legal.privacy.useHeading"
                bodyKey="legal.privacy.useBody"
              />
              <Clause
                headingKey="legal.privacy.smsHeading"
                bodyKey="legal.privacy.smsBody"
              />
              <Clause
                headingKey="legal.privacy.sharingHeading"
                bodyKey="legal.privacy.sharingBody"
              />
              <ContactClause
                headingKey="legal.privacy.contactHeading"
                bodyKey="legal.privacy.contactBody"
              />
            </section>

            <hr
              style={{
                border: "none",
                borderTop: "1px solid #CBD5E1",
                marginTop: "48px",
                marginBottom: "48px",
              }}
            />

            {/* ---------- Terms of Service ---------- */}
            <section id="terms" style={{ scrollMarginTop: "100px" }}>
              <h2
                className="font-extrabold"
                style={{ color: "#0A2D5A", fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "8px" }}
              >
                {t("legal.terms.heading")}
              </h2>
              <p
                style={{
                  color: "#64748B",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  marginBottom: "20px",
                }}
              >
                {t("legal.effective")}
              </p>
              <p style={bodyStyle}>{t("legal.terms.intro")}</p>

              <Clause
                headingKey="legal.terms.servicesHeading"
                bodyKey="legal.terms.servicesBody"
              />
              <Clause
                headingKey="legal.terms.smsHeading"
                bodyKey="legal.terms.smsBody"
              />
              <Clause
                headingKey="legal.terms.guaranteeHeading"
                bodyKey="legal.terms.guaranteeBody"
              />
              <ContactClause
                headingKey="legal.terms.contactHeading"
                bodyKey="legal.terms.contactBody"
              />
            </section>
          </article>

          <Link
            href="/"
            style={{
              display: "inline-block",
              marginTop: "32px",
              color: "#144F8F",
              fontSize: "0.95rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            {t("legal.backHome")}
          </Link>
        </div>
      </main>
    </>
  );
}
