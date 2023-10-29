import Object from "./Object";
import { z } from "zod";

const Form = new Object(
  "Form",
  {
    id: z.string(),
    name: z.string(),
    fields: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        type: z.enum(["text", "textarea", "select", "singleSelect"]),
        required: z.boolean().default(false),
      })
    ),
    siteId: z.string(),
  },
  "orm/form"
);

export default Form;
