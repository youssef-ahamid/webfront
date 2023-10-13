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
  action?: React.ReactNode;
}

const Navbar = ({
  links,
  action,
  children,
  logo = "/logo.png",
}: NavbarProps) => {
  return (
    <>
      <nav className="flex justify-between align-center py-3">
        <Image src={logo} alt="logo" width={100} height={100} />
        <ul className="flex space-x-4">
          {links.map((link) => (
            <li key={link.href}>
              <Anchor {...link} autoActivate />
            </li>
          ))}
        </ul>
        {action && <div>{action}</div>}
      </nav>
      {children}
    </>
  );
};

export default Navbar;
