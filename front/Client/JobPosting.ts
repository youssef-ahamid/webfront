import { fieldSchema } from "./Form";
import Object from "./Object";
import { z } from "zod";

const jobPostingSchema = {
  title: z.string(),
  description: z.string(),
  location: z.string(),
  content: z.string().optional(),
  department: z.string(),
  questionnaire: z.array(fieldSchema),
};

const JobPosting = new Object("JobPosting", jobPostingSchema, "orm/jobPosting");

export default JobPosting;
