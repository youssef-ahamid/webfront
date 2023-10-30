import Object from "./Object";
import { z } from "zod";

const jobApplicationSchema = {
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  resume: z.string().optional(),
  linkedin: z.string().optional(),
  coverLetter: z.string().optional(),
  jobPostingId: z.string(),
};

const JobApplication = new Object(
  "JobApplication",
  jobApplicationSchema,
  "orm/jobApplication"
);

export default JobApplication;
