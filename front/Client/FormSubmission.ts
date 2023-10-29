import Object from "./Object";
import { z } from "zod";

const FormSubmission = new Object(
  "FormSubmission",
  {
    formId: z.string(),
    data: z.array(
      z.object({
        fieldId: z.string(),
        response: z.string(),
      })
    ),
  },
  "orm/formSubmission"
);

export default FormSubmission;
