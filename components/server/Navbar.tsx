import { ThemeColors } from "@nextui-org/react";
import Anchor from "./Anchor";
import Image from "next/image";
import Page from "./Page";
import { Appear } from "../interactive";
import LangActions from "./LangActions";
import { getLang } from "@/actions/lang";
import { PaddedContent } from ".";

export type NavbarLink = {
  href: string;
  label: string;
  color?: keyof ThemeColors;
  active?: boolean;
};

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  links: NavbarLink[];
  logo?: string;
  action?: boolean;
}

const Navbar = async ({
  links,
  action = true,
  children,
  logo = "https://placehold.co/200x80/EEE/31343C",
  ...props
}: NavbarProps) => {
  const lang = await getLang();
  return (
    <PaddedContent {...props}>
      <nav className="flex justify-between align-center py-3">
        <Appear>
          <a href="/">
            <img src={logo} alt="logo" className="w-28" />
          </a>
        </Appear>
        <ul className="space-x-4 hidden md:flex">
          {links.map((link, i) => (
            <li key={link.href}>
              <Appear delay={0.2 + i / 10}>
                <Anchor {...link} autoActivate />
              </Appear>
            </li>
          ))}
        </ul>
        {action && (
          <div>
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
