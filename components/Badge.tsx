import { Content } from "@/components";
import clsx from "clsx";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <div
      {...props}
      className={clsx(
        "relative group max-w-min px-4 h-8 flex flex-col justify-center rounded-2xl border-1 border-gray-200",
        className
      )}
    >
      <Content as="span" size="caption/sm" className="whitespace-nowrap" color="gray-600">
        {children}
      </Content>
    </div>
  );
}

Badge.Props = {} as BadgeProps;
