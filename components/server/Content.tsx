import { FontSize, fontSizes } from "@/config/fontSizes";
import clsx from "clsx";

interface ContentProps
  extends React.HTMLAttributes<
    | HTMLHeadingElement
    | HTMLParagraphElement
    | HTMLSpanElement
    | HTMLQuoteElement
  > {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "q";
  size?: FontSize;
}
export default function Content({
  as: Component = "p",
  size = "body/md",
  className,
  ...props
}: ContentProps) {
  return <Component {...props} className={clsx(fontSizes[size], className)} />;
}

Content.Props = {} as ContentProps;
