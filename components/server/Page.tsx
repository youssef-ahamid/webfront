import clsx from "clsx";
import Navbar from "./Navbar";
import Anchor from "./Anchor";

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {}

function Page({ children, className, ...props }: PageProps) {
  return (
    <main {...props} className={clsx("flex-grow", className)}>
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
        >
          <Anchor href="/gg" color="danger" active>
            Get Started
          </Anchor>
        </Navbar>
      </PagePaddedContent>
      {children}
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
