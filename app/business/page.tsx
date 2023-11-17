import { Anchor, CTA, Navbar, Page, World } from "@/components";

export default function Business() {
  return (
    <>
      <Navbar
        className="absolute top-0 left-0 right-0 z-10 text-white"
        links={[
          {
            href: "#about",
            label: "About us",
            color: "success",
          },
          {
            href: "/business",
            label: "Our Business",
            color: "primary",
          },
          {
            href: "/careers",
            label: "Careers",
            color: "warning",
          },
          {
            href: "#press",
            label: "Press",
            color: "danger",
          },
          {
            href: "/contact",
            label: "Get in touch",
            color: "default",
          },
        ]}
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
