import { Hero, LogoCloud, Page, Reveal, Section } from "@/components";
import {
  ASELogo,
  AlTahya,
  AstraLogo,
  Fisherman,
  Funday,
  Moussy,
  SweetLife,
} from "@/images";

export default function Export() {
  return (
    <Page>
      <Hero
        title="export-hero-title"
        subtitle="export-hero-subtitle"
        graphicUrl={ASELogo}
      />

      <Page.PaddedContent>
        <Reveal
          direction="left-to-right"
          duration={1.4}
          className="max-w-none w-full"
        >
          <div className="w-full h-px bg-foreground/40 mb-1 mt-32" />
        </Reveal>
      </Page.PaddedContent>

      <Section
        title="section-1-title"
        titleContent="Decades of Expertise"
        header="What Sets Us Apart"
        subtitle="section-1-subtitle"
        subtitleContent="With over 30 years of profound expertise in brand development and leveraging the extensive reach of Ayman Shahin Group, Ayman Shahin Export has emerged as a leading force in the export landscape of Egypt. Our longstanding commitment to excellence positions us as a reliable partner for brands aspiring to make a mark beyond borders."
        number="01"
        className="mb-16"
      />
      <Section
        title="section-2-title"
        titleContent="Adaptability and Innovation"
        header="What Sets Us Apart"
        subtitle="section-2-subtitle"
        subtitleContent="Understanding the dynamic shifts in global markets, Ayman Shahin Export excels in adaptability, guiding clients to navigate challenging markets and providing them with robust tools to manage risks effectively. Insights, innovation, and technology form the pillars of our approach, allowing us to craft customized solutions that cater to the unique needs of each client in diverse markets."
        number="02"
        className="mb-16"
      />

      <LogoCloud
        title="clients-title"
        titleContent="Our Export Partners"
        items={[
          { name: "SweetLife", logo: SweetLife },
          { name: "Fisherman", logo: Fisherman },
          { name: "AlTahya", logo: AlTahya },
          { name: "Astra", logo: AstraLogo },
          { name: "Moussy", logo: Moussy },
          { name: "Funday", logo: Funday },
        ]}
      />

      <Section
        title="section-3-title"
        titleContent="Our Global Reach"
        header="What Sets Us Apart"
        subtitle="section-3-subtitle"
        subtitleContent="In line with our commitment to facilitating international trade and fostering strong partnerships, Ayman Shahin Export has proudly expanded its footprint across a diverse array of countries. Our export division has become a trusted partner in nations such as the United States, Palestine, Jordan, Libya, Lebanon, Iraq, Morocco, Saudi Arabia, Sudan, the United Arab Emirates, Kuwait, Canada, Yemen, Oman, Qatar, and Syria."
        number="03"
        className="mb-16"
      />
    </Page>
  );
}
