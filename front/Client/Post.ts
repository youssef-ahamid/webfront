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
  "orm/post"
);

export default Post;
