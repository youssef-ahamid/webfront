"use client";

import { Button } from "@/components/interactive";
import Hero from "@/components/server/Hero";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);
  return (
    <Hero
      titleContent="Something went wrong!"
      boxes={false}
      centered
      action={
        <div className="flex flex-row space-x-2">
          <Button onClick={() => reset()}>Try again</Button>
          <Link href="/">
            <Button color="secondary">Back to home</Button>
          </Link>
        </div>
      }
    />
  );
}
