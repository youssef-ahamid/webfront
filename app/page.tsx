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
} from "@/components";
import Anchor from "@/components/server/Anchor";

export default function Home() {
  return (
    <Page>
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
