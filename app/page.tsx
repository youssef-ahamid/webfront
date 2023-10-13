import { Badge, Button, CTA, Content } from "@/components";
import Anchor from "@/components/Anchor";

export default function Home() {
  return (
    <>
      <Anchor href="/gg" color="danger">
        about us
      </Anchor>
      <Badge>June 2023</Badge>
      <CTA>
        <CTA.Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptas.
        </CTA.Title>
        <CTA.Action>Request a call</CTA.Action>
      </CTA>
    </>
  );
}
