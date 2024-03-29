import { Content } from "@/components/interactive";
import clsx from "clsx";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  contentId?: string;
}

export default function Badge({ children, className, contentId, ...props }: BadgeProps) {
  return (
    <div
      {...props}
      className={clsx(
        "relative group max-w-min px-4 h-8 flex flex-col justify-center rounded-2xl border-1 border-gray-200",
        className
      )}
    >
      <Content as="span" size="caption/sm" className="whitespace-nowrap" color="gray-600" contentId={contentId}>
        {children}
      </Content>
    </div>
  );
}

Badge.Props = {} as BadgeProps;
