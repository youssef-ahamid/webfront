import { FontSize, fontSizes } from "@/config/fontSizes";
import clsx from "clsx";
import content from "@/content.json";
export interface ContentProps
  extends React.HTMLAttributes<
    | HTMLHeadingElement
    | HTMLParagraphElement
    | HTMLSpanElement
    | HTMLQuoteElement
  > {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "q";
  size?: FontSize;
  contentId?: ContentKey;
}

export type ContentKey = keyof typeof content;

export default function Content({
  as: Component = "p",
  size = "body/md",
  className,
  contentId,
  children,
  contentEditable,
  ...props
}: ContentProps) {
  if (contentId) {
    children = content[contentId];
    // contentEditable = await isAdminView(); // TODO: check if content admin
  }
  return (
    <Component {...props} className={clsx(fontSizes[size], className)}>
      {children}
    </Component>
  );
}

Content.Props = {} as ContentProps;
