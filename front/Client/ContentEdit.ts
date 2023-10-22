import Object from "./Object";
import { z } from "zod";

const ContentEdit = new Object(
  "contentEdit",
  {
    pageId: z.string(),
    userId: z.string(),
    content: z.any(),
  },
  "orm/contentEdit"
);

export default ContentEdit;
