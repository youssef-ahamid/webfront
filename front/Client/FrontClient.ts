import Page from "./Page";
import Post from "./Post";
import ContentEdit from "./ContentEdit";
import Asset from "./Asset";
import frontFetch from "../fetch";
import { User } from "@prisma/client";
import Form from "./Form";
import FormSubmission from "./FormSubmission";
import JobApplication from "./JobApplication";
import JobPosting from "./JobPosting";

export default class FrontClient {
  constructor() {
    this.Page = Page;
    this.Post = Post;
    this.ContentEdit = ContentEdit;
    this.Asset = Asset;
    this.Form = Form;
    this.FormSubmission = FormSubmission;
    this.JobPosting = JobPosting;
    this.JobApplication = JobApplication;
  }

  public Page: typeof Page;
  public Post: typeof Post;
  public ContentEdit: typeof ContentEdit;
  public Asset: typeof Asset;
  public Form: typeof Form;
  public FormSubmission: typeof FormSubmission;
  public JobPosting: typeof JobPosting;
  public JobApplication: typeof JobApplication;

  public async authenticate(token: string) {
    const res = await frontFetch<{ loggedIn: boolean; user: User }>("login", {
      method: "POST",
      body: {
        token,
      },
    });
    if (!res?.loggedIn) throw new Error("Invalid token");

    this.Page.setToken(token);
    this.Post.setToken(token);
    this.ContentEdit.setToken(token);
    this.Asset.setToken(token);
    this.Form.setToken(token);
    this.FormSubmission.setToken(token);
    this.JobApplication.setToken(token);
    this.JobPosting.setToken(token);

    return res.user;
  }
}
