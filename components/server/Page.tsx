import clsx from "clsx";
import Navbar from "./Navbar";
import Anchor from "./Anchor";
import Footer from "./Footer";
import Button from "./Button";
import CTA from "./CTA";

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {}

function Page({ children, className, ...props }: PageProps) {
  return (
    <main
      {...props}
      className={clsx("flex-grow flex flex-col items-start", className)}
    >
      <Navbar
        links={[
          {
            href: "#about",
            label: "About us",
            color: "success",
          },
          {
            href: "#business",
            label: "Our Business",
            color: "primary",
          },
          {
            href: "#press",
            label: "Press",
            color: "danger",
          },
          {
            href: "#contact",
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
      {children}

      <CTA>
        <CTA.Title>
          The most advanced platform for building static sites
        </CTA.Title>
        <CTA.Action>Get Started</CTA.Action>
      </CTA>
      <Footer
        links={[
          {
            href: "#about",
            label: "About us",
            color: "success",
          },
          {
            href: "#business",
            label: "Our Business",
            color: "primary",
          },
          {
            href: "#press",
            label: "Press",
            color: "danger",
          },
          {
            href: "#contact",
            label: "Get in touch",
            color: "default",
          },
        ]}
        socialLinks={[]}
        action={
          <Button
            size="md"
            startContent={
              <div className="relative mr-1">
                <div className="w-2 h-2 bg-background rounded-full animate-ping absolute" />
                <div className="w-2 h-2 bg-background rounded-full" />
              </div>
            }
          >
            Get in touch
          </Button>
        }
      />
    </main>
  );
}

Page.Props = {} as PageProps;

function PagePaddedContent({ children, className, ...props }: PageProps) {
  return (
    <div
      {...props}
      className={clsx("container mx-auto max-w-7xl p-6", className)}
    >
      {children}
    </div>
  );
}

Page.PaddedContent = PagePaddedContent;

export default Page;
