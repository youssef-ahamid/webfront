import { Badge, Box, CTA, OnEnter, Reveal, Navbar, Page } from "@/components";
import Anchor from "@/components/server/Anchor";

export default function Home() {
  return (
    <Page>
      <Page.PaddedContent>
        <Badge>June 2023</Badge>
        <div className="min-h-screen">
          <CTA>
            <CTA.Title>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptas.
            </CTA.Title>
            <CTA.Action>Request a call</CTA.Action>
          </CTA>
        </div>
      </Page.PaddedContent>
      <Reveal duration={0.3} direction="top-to-bottom">
        <Box color="primary" size="w-[300px] h-32" />
      </Reveal>
    </Page>
  );
}
