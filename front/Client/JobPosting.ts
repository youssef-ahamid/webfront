import Object from "./Object";
import { z } from "zod";

const jobPostingSchema = {
  id: z.string(),
  title: z.string(),
  description: z.string(),
  location: z.string(),
  content: z.string().optional(),
  department: z.string(),
  userId: z.string(),
  siteId: z.string(),
  createdAt: z.string(),
};

const JobPosting = new Object("JobPosting", jobPostingSchema, "orm/jobPosting");

export default JobPosting;
