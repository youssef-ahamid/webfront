import Object from "./Object";
import { z } from "zod";

const Post = new Object(
  "Post",
  {
    name: z.string(),
    content: z.string(),
    slug: z.string(),
  },
  "orm/post"
);

export default Post;
