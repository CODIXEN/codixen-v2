import { ScrollProgress } from "@/components/scroll-progress";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Segments } from "@/components/sections/segments";
import { ClientStories } from "@/components/sections/client-stories";
import { Founder } from "@/components/sections/founder";
import { Industries } from "@/components/sections/industries";
import { Process } from "@/components/sections/process";
import { WhyChoose } from "@/components/sections/why-choose";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { FAQS, SERVICES } from "@/lib/content";

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
      sameAs: [
        "https://twitter.com/codixen",
        "https://www.linkedin.com/company/codixen",
      ],
    },
    {
      "@type": "ProfessionalService",
      name: "CODIXEN",
      image: "https://codixen.com/og.png",
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
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <WhoWeAre />
        <Projects />
        <Services />
        <Segments />
        <ClientStories />
        <Founder />
        <Industries />
        <Process />
        <WhyChoose />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
