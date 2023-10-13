import { Badge, Box, CTA, Reveal, Navbar, Anchor } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar
        links={[
          {
            href: "/",
            label: "Home",
            color: "primary",
            active: true,
          },
          {
            href: "/gg",
            label: "About",
            color: "warning",
            active: false,
          },
        ]}
      />
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
