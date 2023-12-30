import { Button } from "@/components/interactive";
import Hero from "@/components/server/Hero";
import Page from "@/components/server/Page";
import Link from "next/link";
import { useEffect } from "react";

export default function Error404() {
  useEffect(() => {
    throw new Error("404");
  }, []);
  return (
    <Page cta={false}>
      <Hero
        titleContent="Page not found"
        subtitleContent="404"
        boxes={false}
        centered
        action={
          <div className="flex flex-row space-x-2">
            <Button href="/" as="a">
              Back to home
            </Button>
          </div>
        }
      />
    </Page>
  );
}
