// import { authOptions } from "./auth";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOGIN_PATH = "/auth/login";
export async function middleware(request: NextRequest) {
  const resolve = () => {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("front-pathname", request.nextUrl.pathname);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  };

  const loginUrl = request.nextUrl.origin + LOGIN_PATH;
  const isLoginPage = request.nextUrl.pathname === LOGIN_PATH;

  if (isLoginPage) return resolve();
  const token = request.cookies.get("token")?.value;
  if (!token) return NextResponse.redirect(loginUrl);
  try {
    const { loggedIn, user } = await fetch(
      request.nextUrl.origin + "/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      }
    ).then((res) => res.json());
    if (!loggedIn) return NextResponse.redirect(loginUrl);
    return resolve();
  } catch (e) {
    console.log(e);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = { matcher: ["/admin/:path"] };
