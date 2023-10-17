import { ThemeColors } from "@nextui-org/react";
import Anchor from "./Anchor";
import Image from "next/image";
import Page from "./Page";

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
  logo = "/logo.png",
}: NavbarProps) => {
  return (
    <Page.PaddedContent>
      <nav className="flex justify-between align-center py-3">
        <Image src={logo} alt="logo" width={100} height={100} />
        <ul className="space-x-4 hidden md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Anchor {...link} autoActivate />
            </li>
          ))}
        </ul>
        {action && <div>{action}</div>}
      </nav>
      {children}
    </Page.PaddedContent>
  );
};

export default Navbar;
