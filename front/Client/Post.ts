import { siteConfig } from "@/config/site";
import Object from "./Object";
import { z } from "zod";

const Post = new Object(
  "Post",
  {
    id: z.string(),
    title: z.string(),
    description: z.string(),
    content: z.string(),
    slug: z.string(),
    image: z.string().optional(),
    published: z.boolean().default(false),
    siteId: z.string(),
    userId: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
  },
  "orm/post",
  {
    getOneBySlug: async (here, slug: string) => {
      return (await here.getWhere("slug", encodeURIComponent(slug))).filter(
        (p) => p.siteId === siteConfig.id
      )[0];
    },
  }
);

export default Post;
