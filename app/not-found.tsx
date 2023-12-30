import { Button } from "@/components/interactive";
import Hero from "@/components/server/Hero";
import Page from "@/components/interactive/Page";
import Link from "next/link";

export default function Error404() {
  return (
    <Page cta={false}>
      <Hero
        titleContent="404"
        subtitleContent="Page not found"
        boxes={false}
        centered
        action={
          <div className="flex flex-row space-x-2">
            <Link href="/">
              <Button color="secondary">Back to home</Button>
            </Link>
          </div>
        }
      />
    </Page>
  );
}
