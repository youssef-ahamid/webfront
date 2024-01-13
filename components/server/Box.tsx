import { ThemeColors } from "@nextui-org/react";
import clsx from "clsx";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: keyof ThemeColors;
  light?: boolean;
  size?: string;
}

export default function Box({
  children,
  className,
  color,
  size,
  light = false,
  ...props
}: BoxProps) {
  return (
    <div
      {...props}
      className={clsx(
        "group p-8 flex flex-col justify-center transition",
        className,
        light ? `bg-${color}-100` : `bg-${color}`,
        size
      )}
    >
      {children}
    </div>
  );
}

Box.Props = {} as BoxProps;
