import {
  Badge,
  Box,
  CTA,
  OnEnter,
  Reveal,
  Navbar,
  Page,
  Section,
  Button,
  Hero,
} from "@/components";
import Anchor from "@/components/server/Anchor";

export default function Home() {
  return (
    <Page>
      <Hero
        title="hp-hero-title"
        subtitle="hp-hero-subtitle"
        action={<Button contentId="hp-hero-cta" />}
        graphicUrl="https://placehold.co/600x400/EEE/31343C"
      />
      <Section
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas."
        number="01"
        header="About"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas."
        action={<Button>Get Started</Button>}
      />
    </Page>
  );
}
