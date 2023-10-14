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
      <PagePaddedContent>
        <Navbar
          links={[
            {
              href: "/",
              label: "Home",
              color: "primary",
            },
            {
              href: "/gg",
              label: "About",
              color: "warning",
            },
          ]}
          action={
            <Anchor href="/gg" color="danger" active>
              Get Started
            </Anchor>
          }
        />
      </PagePaddedContent>
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
            href: "/",
            label: "Home",
            color: "primary",
          },
          {
            href: "/gg",
            label: "About",
            color: "warning",
          },
          {
            href: "/gg",
            label: "Careers",
            color: "foreground",
          },
        ]}
        socialLinks={[
          {
            href: "/",
            label: "Home",
            color: "primary",
          },
          {
            href: "/gg",
            label: "About",
            color: "warning",
          },
        ]}
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
