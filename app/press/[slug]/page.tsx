import { Hero, PaddedContent, Page, Reveal } from "@/components";
import front from "@/utils/front";
import Markdown from "react-markdown";

import { BlogPostLD, getSeoForBlogPost } from "@/config/seo";
import { LD } from "@/components/server/LD";
export const generateMetadata = getSeoForBlogPost();

export default async function Press({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await front.Post.getOneWhere("slug", slug);

  return (
    <>
      <Page cta={false}>
        <Hero
          title={post.title}
          subtitle={post.description}
          color="danger"
          graphicUrl={post.image}
        />

        <PaddedContent>
          <Reveal
            direction="left-to-right"
            duration={1.4}
            className="max-w-none w-full"
          >
            <div className="w-full h-px bg-foreground/40 mb-1 mt-32" />
          </Reveal>
        </PaddedContent>

        <Markdown className="w-full max-w-2xl mx-auto py-24 prose">
          {post.content}
        </Markdown>
      </Page>
      <LD {...BlogPostLD(post)} />
    </>
  );
}
