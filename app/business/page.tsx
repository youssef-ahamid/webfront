import { Anchor, CTA, Navbar, Page, World } from "@/components";
import { links } from "@/components/server/Page";

export default function Business() {
  return (
    <>
      <Navbar
        className="absolute top-0 left-0 right-0 z-10 text-white"
        links={links}
        action={
          <div className="flex space-x-2">
            <Anchor href="?lang=en" color="primary" active>
              EN
            </Anchor>
            <Anchor href="?lang=ar" color="danger">
              AR
            </Anchor>
          </div>
        }
      />
      <World />
    </>
  );
}