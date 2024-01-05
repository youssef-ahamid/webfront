import Object from "./Object";
import { z } from "zod";

const Asset = new Object(
  "Asset",
  {
    name: z.string(),
    fileId: z.string(),
    slug: z.string(),
    public: z.boolean(),
    siteId: z.string(),
  },
  "orm/asset",
);

export default Asset;
