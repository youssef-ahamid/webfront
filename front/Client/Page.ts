import Object from "./Object";
import { z } from "zod";

const Page = new Object(
  "Page",
  {
    title: z.string(),
    content: z.string(),
    description: z.string(),
    image: z.string(),
    slug: z.string(),
  },
  "orm/page",
  {
    getOneBySlug: (here, slug: string) => {
      return here.getOneWhere("slug", encodeURIComponent(slug));
    },
  }
);

export default Page;
