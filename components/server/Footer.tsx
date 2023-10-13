import { ThemeColors } from "@nextui-org/react";
import Anchor from "./Anchor";
import Image from "next/image";
import { NavbarLink } from "./Navbar";
import Box from "./Box";
import Page from "./Page";
import { Reveal } from "../interactive";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  links: NavbarLink[];
  socialLinks: NavbarLink[];
  logo?: string;
  action?: React.ReactNode;
}

const Footer = ({
  links,
  socialLinks,
  children,
  action,
  logo = "/logo.png",
}: FooterProps) => {
  return (
    <footer className="pt-24">
      <div className="px-8">
        <div className="w-full bg-foreground/10 h-px" />
        <div className="flex flex-col space-y-8 sm:space-y-0 sm:flex-row sm:justify-between align-start py-3 my-12">
          <Image src={logo} alt="logo" width={44} height={44} />
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <Anchor {...link} autoActivate />
              </li>
            ))}
          </ul>
          <ul className="flex flex-col">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <Anchor {...link} />
              </li>
            ))}
          </ul>
          {action && <div>{action}</div>}
        </div>
      </div>
      <div className="w-screen flex items-end justify-stretch">
        <Reveal direction="bottom-to-top" duration={0.6} className="w-full max-w-none">
          <Box size="flex-1 h-28 sm:h-48" color="primary" />
        </Reveal>
        <Reveal direction="bottom-to-top" duration={0.9} className="w-full max-w-none">
          <Box size="flex-1 h-24 sm:h-36" color="primary" light />
        </Reveal>
        <Reveal direction="bottom-to-top" duration={0.5} className="w-full max-w-none">
          <Box size="flex-1 h-44 sm:h-80" color="foreground" />
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
