import { ThemeColors } from "@nextui-org/react";
import Anchor from "./Anchor";
import Image from "next/image";

export type NavbarLink = {
  href: string;
  label: string;
  color?: keyof ThemeColors;
  active?: boolean;
};

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  links: NavbarLink[];
  logo?: string;
}

const Navbar = ({ links, children, logo = "/logo.png" }: NavbarProps) => {
  return (
    <nav className="flex justify-between align-center">
      <Image src={logo} alt="logo" width={100} height={100} />
      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link.href}>
            <Anchor {...link} autoActivate>
              {link.label}
            </Anchor>
          </li>
        ))}
      </ul>
      {children && <div>{children}</div>}
    </nav>
  );
};

export default Navbar;
