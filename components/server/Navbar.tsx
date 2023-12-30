import { ThemeColors } from "@nextui-org/react";
import Anchor from "./Anchor";
import Image, { StaticImageData } from "next/image";
import Page from "./Page";
import { Appear } from "../interactive";
import LangActions from "./LangActions";
import { getLang } from "@/actions/lang";
import { PaddedContent } from ".";
import { ASGLogoNoBG } from "@/images";
import clsx from "clsx";

export type NavbarLink = {
  href: string;
  label: string;
  color?: keyof ThemeColors;
  active?: boolean;
};

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  links: NavbarLink[];
  logo?: string | StaticImageData;
  action?: boolean;
}

const Navbar = async ({
  links,
  action = true,
  children,
  logo = ASGLogoNoBG,
  ...props
}: NavbarProps) => {
  const lang = await getLang();
  return (
    <PaddedContent {...props}>
      <nav className="flex justify-between align-center py-3">
        <Appear className="">
          <a href="/">
            <Image
              src={logo}
              alt="logo"
              className={clsx(
                "w-full min-h-24 object-contain max-h-32 md:max-h-48 -mt-12 md:-mt-16 shrink-0",
                lang === "ar" ? "md:-mr-12 -mr-6" : "md:-ml-12 -ml-6"
              )}
            />
          </a>
        </Appear>
        <ul className="space-x-4 hidden lg:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          {links.map((link, i) => (
            <li key={link.href}>
              <Appear delay={0.2 + i / 10}>
                <Anchor {...link} autoActivate />
              </Appear>
            </li>
          ))}
        </ul>
        {action && (
          <div className="shrink-0">
            <Appear delay={0.6}>
              <LangActions lang={lang} />
            </Appear>
          </div>
        )}
      </nav>
      {children}
    </PaddedContent>
  );
};

export default Navbar;
