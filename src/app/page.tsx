import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingCTA } from "@/components/floating-cta";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Clients } from "@/components/sections/clients";
import { Services } from "@/components/sections/services";
import { TechStack } from "@/components/sections/tech-stack";
import { Projects } from "@/components/sections/projects";
import { Industries } from "@/components/sections/industries";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
// Hidden until real testimonials are in — restore with <ClientStories /> below.
// import { ClientStories } from "@/components/sections/client-stories";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { FAQS, FOUNDER, SERVICES, SOCIALS } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://codixen.com/#org",
      name: "CODIXEN",
      url: "https://codixen.com",
      description:
        "Premium software development agency building custom web apps, SaaS platforms, and AI-powered products.",
      email: "hello@codixen.com",
      logo: "https://codixen.com/iconicon.svg",
      sameAs: SOCIALS.map((s) => s.href),
      founder: {
        "@type": "Person",
        name: FOUNDER.name,
        jobTitle: FOUNDER.role,
      },
    },
    {
      "@type": "ProfessionalService",
      name: "CODIXEN",
      image: "https://codixen.com/opengraph-image",
      url: "https://codixen.com",
      priceRange: "$$$",
      areaServed: "Worldwide",
      makesOffer: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <Clients />
        {/* Funnel order: offer → proof → why us → how → fit → objections → convert. */}
        <Services />
        <Projects />
        {/* <ClientStories /> */}
        <About />
        <Process />
        <Industries />
        <TechStack />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
