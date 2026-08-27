import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LegalDocument from "@/components/sections/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms of Service | New Horizons Financial Services",
  description:
    "Privacy Policy and Terms of Service for New Horizons Benefits Group, a d/b/a of New Horizons Financial Services LLC, including our SMS communications and data sharing practices.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <LegalDocument />
      <Footer />
    </>
  );
}
