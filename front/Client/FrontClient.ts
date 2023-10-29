import Page from "./Page";
import Post from "./Post";
import ContentEdit from "./ContentEdit";
import Asset from "./Asset";
import frontFetch from "../fetch";
import { User } from "@prisma/client";
import Form from "./Form";
import FormSubmission from "./FormSubmission";

export default class FrontClient {
  constructor() {
    this.Page = Page;
    this.Post = Post;
    this.ContentEdit = ContentEdit;
    this.Asset = Asset;
    this.Form = Form;
    this.FormSubmission = FormSubmission;
  }

  public Page: typeof Page;
  public Post: typeof Post;
  public ContentEdit: typeof ContentEdit;
  public Asset: typeof Asset;
  public Form: typeof Form;
  public FormSubmission: typeof FormSubmission;

  public async authenticate(token: string) {
    const res = await frontFetch<{ loggedIn: boolean; user: User }>(
      "login",
      "POST",
      {
        token,
      }
    );
    if (!res?.loggedIn) throw new Error("Invalid token");

    Page.setToken(token);
    Post.setToken(token);
    ContentEdit.setToken(token);
    Asset.setToken(token);
    Form.setToken(token);
    FormSubmission.setToken(token);

    return res.user;
  }
}
