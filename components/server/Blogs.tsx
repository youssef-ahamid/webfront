import Button from "../interactive/Button";
import Link from "next/link";
import { Container } from "./Container";
import { FadeIn } from "../interactive/FadeIn";
import { Border } from "./Border";
import { PageIntro } from "./PageIntro";
import Image from "next/image";
import front from "@/utils/front";
import { siteConfig } from "@/config/site";
import Badge from "./Badge";
import { Content } from "../interactive";

export async function Blogs({}: {}) {
  const articles = (await front.Post.getWhere("siteId", siteConfig.id)).filter(
    (p) => p.published
  );

  return (
    <>
      <Container className="mt-24 sm:mt-32 lg:mt-40 w-full">
        <div className="space-y-24 lg:space-y-32">
          {articles.map((article) => (
            <FadeIn key={article.slug}>
              <article className="group">
                <Border className="pt-16">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <Content as="h2" size="header/sm">
                        <Link href={`/press/${article.slug}`}>
                          {article.title}
                        </Link>
                      </Content>
                      <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                        <dt className="sr-only">Published</dt>
                        <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
                          <Badge>
                            <time
                              dateTime={article.createdAt}
                              className="whitespace-nowrap"
                            >
                              {new Date(article.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                }
                              )}
                            </time>
                          </Badge>
                        </dd>
                        <dd className="mt-6 flex gap-x-4">
                          <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                            <Image
                              alt=""
                              src={article.image!}
                              width={160}
                              height={160}
                              className="h-40 w-40 object-cover grayscale group-hover:filter-none transition duration-500 motion-safe:group-hover:scale-105"
                            />
                          </div>
                        </dd>
                      </dl>
                      <Content className="mt-6 max-w-2xl">
                        {article.description}
                      </Content>
                      <Link href={`/press/${article.slug}`}>
                        <Button
                          aria-label={`Read more: ${article.title}`}
                          className="mt-8"
                          size="md"
                        >
                          Read more
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Border>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </>
  );
}
