import { Badge, Box, CTA, OnEnter, Reveal } from "@/components";
import Anchor from "@/components/server/Anchor";

export default function Home() {
  return (
    <>
      <Anchor href="/gg" color="danger">
        about us
      </Anchor>
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
      <Reveal duration={0.3} direction="top-to-bottom">
        <Box color="primary" size="w-[300px] h-32" />
      </Reveal>
    </>
  );
}
