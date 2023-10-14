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
        title="Lorem ipsum dolor sit amet."
        subtitle="Id morbi risus lectus proin et. Duis nunc ipsum lorem parturient ut est nunc. Sollicitudin proin etiam vestibulum sagittis morbi lobortis amet sed. Imperdiet dui eget in id sollicitudin ve"
        action={<Button>Get Started</Button>}
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
