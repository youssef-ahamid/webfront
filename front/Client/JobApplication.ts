import Object from "./Object";
import { z } from "zod";

const jobApplicationSchema = {
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  resumeSlug: z.string().optional(),
  questionnaire: z.array(
    z.object({
      fieldId: z.string(),
      response: z.string(),
    })
  ),
  jobPostingId: z.string(),
};

const JobApplication = new Object(
  "JobApplication",
  jobApplicationSchema,
  "orm/jobApplication"
);

export default JobApplication;
