"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/translations";

const navLinks: { key: TranslationKey; href: string }[] = [
  { key: "nav.coverage", href: "#coverage" },
  { key: "nav.howItWorks", href: "#how-it-works" },
  { key: "nav.reviews", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleButton = (
    <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.8rem", fontWeight: 700 }}>
      <button
        onClick={() => setLanguage("en")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px 6px",
          fontWeight: 700,
          fontSize: "0.8rem",
          transition: "color 0.3s",
          color: language === "en" ? "#C9A040" : scrolled ? "rgba(10,45,90,0.45)" : "rgba(255,255,255,0.45)",
        }}
      >
        EN
      </button>
      <span style={{ color: scrolled ? "rgba(10,45,90,0.25)" : "rgba(255,255,255,0.25)" }}>|</span>
      <button
        onClick={() => setLanguage("es")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px 6px",
          fontWeight: 700,
          fontSize: "0.8rem",
          transition: "color 0.3s",
          color: language === "es" ? "#C9A040" : scrolled ? "rgba(10,45,90,0.45)" : "rgba(255,255,255,0.45)",
        }}
      >
        ES
      </button>
    </div>
  );

  const mobileToggle = (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", fontSize: "0.85rem", fontWeight: 700, padding: "8px 0" }}>
      <button
        onClick={() => setLanguage("en")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "6px 10px",
          fontWeight: 700,
          fontSize: "0.85rem",
          color: language === "en" ? "#C9A040" : "rgba(10,45,90,0.4)",
        }}
      >
        EN
      </button>
      <span style={{ color: "rgba(10,45,90,0.2)" }}>|</span>
      <button
        onClick={() => setLanguage("es")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "6px 10px",
          fontWeight: 700,
          fontSize: "0.85rem",
          color: language === "es" ? "#C9A040" : "rgba(10,45,90,0.4)",
        }}
      >
        ES
      </button>
    </div>
  );

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease-in-out",
        backgroundColor: scrolled ? "#FFFFFF" : "transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(10,45,90,0.12)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          height: "80px",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        {/* Logo + Company Name */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0, textDecoration: "none" }}>
          <Image
            src="/logo-transparent.png"
            alt="New Horizons Benefits Group"
            width={400}
            height={400}
            style={{
              height: "165px",
              width: "165px",
              objectFit: "contain",
            }}
            priority
          />
          <span
            className="hidden sm:block"
            style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              transition: "color 0.3s",
              color: scrolled ? "#0A2D5A" : "#FFFFFF",
            }}
          >
            New Horizons Benefits Group
          </span>
        </Link>

        {/* Desktop Nav Links + Toggle + CTA */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: "32px" }}>
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                transition: "color 0.3s",
                color: scrolled ? "#0A2D5A" : "#FFFFFF",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A040")}
              onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? "#0A2D5A" : "#FFFFFF")}
            >
              {t(link.key)}
            </a>
          ))}

          {toggleButton}

          <a
            href="#lead-form"
            style={{
              display: "inline-block",
              backgroundColor: "#C9A040",
              color: "#0A2D5A",
              padding: "12px 24px",
              fontSize: "0.875rem",
              fontWeight: 700,
              borderRadius: "10px",
              textDecoration: "none",
              boxShadow: "0 2px 12px rgba(201,160,64,0.3)",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#A07C20";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#C9A040";
            }}
          >
            {t("nav.cta")}
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}
        >
          {mobileOpen ? (
            <X size={28} style={{ color: scrolled ? "#0A2D5A" : "#FFFFFF", transition: "color 0.3s" }} />
          ) : (
            <Menu size={28} style={{ color: scrolled ? "#0A2D5A" : "#FFFFFF", transition: "color 0.3s" }} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className="md:hidden"
        style={{
          overflow: "hidden",
          backgroundColor: "#FFFFFF",
          boxShadow: mobileOpen ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
          maxHeight: mobileOpen ? "400px" : "0",
          opacity: mobileOpen ? 1 : 0,
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "8px 24px 24px" }}>
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "12px 16px",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#0A2D5A",
                textDecoration: "none",
                borderRadius: "8px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E8F0FA")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              {t(link.key)}
            </a>
          ))}

          {mobileToggle}

          <a
            href="#lead-form"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block",
              marginTop: "12px",
              padding: "12px 24px",
              textAlign: "center",
              fontSize: "0.875rem",
              fontWeight: 700,
              backgroundColor: "#C9A040",
              color: "#0A2D5A",
              borderRadius: "10px",
              textDecoration: "none",
            }}
          >
            {t("nav.cta")}
          </a>
        </div>
      </div>
    </nav>
  );
}
