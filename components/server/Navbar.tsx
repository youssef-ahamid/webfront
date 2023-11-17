import { ThemeColors } from "@nextui-org/react";
import Anchor from "./Anchor";
import Image from "next/image";
import Page from "./Page";
import { Appear } from "../interactive";

export type NavbarLink = {
  href: string;
  label: string;
  color?: keyof ThemeColors;
  active?: boolean;
};

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  links: NavbarLink[];
  logo?: string;
  action?: React.ReactNode;
}

const Navbar = ({
  links,
  action,
  children,
  logo = "https://placehold.co/200x80/EEE/31343C",
  ...props
}: NavbarProps) => {
  return (
    <Page.PaddedContent {...props}>
      <nav className="flex justify-between align-center py-3">
        <Appear>
          <img src={logo} alt="logo" className="w-28" />
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
            <Appear delay={0.6}>{action}</Appear>
          </div>
        )}
      </nav>
      {children}
    </Page.PaddedContent>
  );
};

export default Navbar;
