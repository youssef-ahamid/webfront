import front from "@/utils/front";
import { Metadata } from "next";

export const baseSeo: Metadata = {
  applicationName: "Ayman Shahin Group Website",
  referrer: "origin-when-cross-origin",
  keywords: [
    "ASG",
    "Ayman Shahin Group",
    "Ayman Shahin",
    "FMCG",
    "Ayman Afandy Group",
    "Ayman Afandy",
    "Ayman Afandy Group",
    "Ayman Afandy LLC",
    "Ayman Afandy For Export",
    "Ayman Afandy Duty-Free",
    "Ayman Afandy Duty Free",
    "Ayman Afandy DutyFree",
    "Egypt",
    "Egyptian",
    "Egyptian FMCG",
    "Egyptian FMCG Company",
    "Ayman A",
  ],
  authors: [
    { name: "Memoized Tech House", url: "https://memoized.tech" },
    { name: "Youssef Abdelhamid", url: "https://github.com/youssef-ahamid" },
  ],
  creator: "Youssef Abdelhamid",
  publisher: "Ayman Shahin Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "?lang=en",
      ar: "?lang=ar",
    },
  },
  openGraph: {
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const getSeoForPage = (path: string) => {
  return async () => {
    const page = await front.Page.methods.getOneBySlug(path);
    return {
      ...baseSeo,
      title: { absolute: `Ayman Shahin Group | ${page.title}` },
      description: page.description,
      openGraph: {
        ...baseSeo.openGraph,
        title: { absolute: `Ayman Shahin Group | ${page.title}` },
        description: page.description,
        images: page.image
          ? [
              {
                url: page.image,
                width: 800,
                height: 600,
                alt: page.title,
              },
            ]
          : baseSeo.openGraph?.images,
      },
    };
  };
};

export const getSeoForBlogPost = () => {
  return async ({ params }: { params: { slug: string } }) => {
    const post = await front.Post.methods.getOneBySlug(params.slug);

    return {
      ...baseSeo,
      title: { absolute: `Ayman Shahin Group | ${post.title} | Blog` },
      description: post.description,
      openGraph: {
        ...baseSeo.openGraph,
        title: { absolute: `Ayman Shahin Group | ${post.title} | Blog` },
        description: post.description,
        images: post.image
          ? [
              {
                url: post.image,
                width: 800,
                height: 600,
                alt: post.title,
              },
            ]
          : baseSeo.openGraph?.images,
      },
    };
  };
};

import { Blog } from "schema-dts";
import { siteConfig } from "./site";
export const BlogPostLD = (post: typeof front.Post.Type): Blog => {
  return {
    "@type": "Blog",
    headline: post.title,
    image: post.image,
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: "Ayman Shahin Group",
    },
    publisher: {
      "@type": "Organization",
      name: "Ayman Shahin Group",
      logo: {
        "@type": "ImageObject",
        url: `https://${siteConfig.domain}/logo.png`,
      },
    },
    text: post.content.replace(/<[^>]*>?/gm, ""),
    isAccessibleForFree: "True",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://${siteConfig.domain}/press/${post.slug}`,
    },

    abstract: post.description,

    blogPost: {
      "@type": "BlogPosting",
      headline: post.title,
      image: post.image,
      datePublished: post.createdAt,
      dateModified: post.updatedAt,
    },

    countryOfOrigin: "Egypt",
    inLanguage: "en",
  };
};
