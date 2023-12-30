import clsx from "clsx";
import Navbar from "./Navbar";
// import Anchor from "./Anchor";
import Footer from "./Footer";
import Button from "../interactive/Button";
import CTA from "./CTA";
// import { t } from "@/utils/t";
import dictionary from "@/dictionary.json";
import { Lang } from "@/app/layout";
import { getLang } from "@/actions/lang";

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  cta?: boolean;
}

async function Page({ children, className, cta = true, ...props }: PageProps) {
  const lang = await getLang();
  const t = (key: keyof (typeof dictionary)[Lang]) => dictionary[lang][key];

  const links = [
    {
      href: "/about",
      label: t("about"),
      color: "success",
    },
    {
      href: "/business/distribution",
      label: t("distribution"),
      color: "primary",
    },
    {
      href: "/business/manufacturing",
      label: t("manufacturing"),
      color: "primary",
    },
    {
      href: "/business/export",
      label: t("export"),
      color: "primary",
    },
    {
      href: "/careers",
      label: t("careers"),
      color: "warning",
    },
    {
      href: "/press",
      label: t("press"),
      color: "danger",
    },
    {
      href: "/contact",
      label: t("contact"),
      color: "default",
    },
  ];

  return (
    <main
      {...props}
      className={clsx("flex-grow flex flex-col items-start", className)}
    >
      <Navbar links={links} action />
      {children}

      {cta && (
        <CTA>
          <CTA.Title contentId="main-cta-title" />
          <CTA.Action contentId="main-cta-action" />
        </CTA>
      )}
      <Footer
        links={links}
        socialLinks={[]}
        action={
          cta && (
            <Button
              size="md"
              startContent={
                <div className="relative mr-1">
                  <div className="w-2 h-2 bg-background rounded-full animate-ping absolute" />
                  <div className="w-2 h-2 bg-background rounded-full" />
                </div>
              }
            >
              {t("getInTouch")}
            </Button>
          )
        }
      />
    </main>
  );
}

Page.Props = {} as PageProps;

export function PagePaddedContent({
  children,
  className,
  ...props
}: PageProps) {
  return (
    <div
      {...props}
      className={clsx("container mx-auto max-w-7xl p-6", className)}
    >
      {children}
    </div>
  );
}

export default Page;
