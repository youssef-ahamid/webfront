import Object from "./Object";
import { z } from "zod";

export const fieldSchema = z.object({
  id: z.string(),
  slug: z.string().optional(),
  title: z.string(),
  type: z.enum([
    "text",
    "textarea",
    "email",
    "number",
    "tel",
    "url",
    "select",
    "checkbox",
    "radio",
    "date",
    "time",
    "file",
  ]),
  required: z.boolean().default(false),
});

const Form = new Object(
  "Form",
  {
    id: z.string(),
    name: z.string(),
    fields: z.array(fieldSchema),
    siteId: z.string(),
  },
  "orm/form"
);

export default Form;
