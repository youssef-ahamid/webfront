import Page from "./Page";
import Post from "./Post";
import ContentEdit from "./ContentEdit";
import Asset from "./Asset";
import frontFetch from "../fetch";
import { User } from "@prisma/client";

export default class FrontClient {
  constructor() {
    this.Page = Page;
    this.Post = Post;
    this.ContentEdit = ContentEdit;
    this.Asset = Asset;
  }

  public Page: typeof Page;
  public Post: typeof Post;
  public ContentEdit: typeof ContentEdit;
  public Asset: typeof Asset;

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

    return res.user;
  }
}
