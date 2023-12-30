import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const query = new URL(request.nextUrl.href).searchParams;

  if (query.get("lang")) {
    requestHeaders.set("front-lang", query.get("lang") === "ar" ? "ar" : "en");
  }

  requestHeaders.set("front-pathname", request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
