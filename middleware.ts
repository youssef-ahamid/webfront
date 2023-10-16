// import { authOptions } from "./auth";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { api } from "./utils/api";

const LOGIN_PATH = "/auth/login";
export async function middleware(request: NextRequest) {
  const loginUrl = request.nextUrl.origin + LOGIN_PATH;
  const isLoginPage = request.nextUrl.pathname === LOGIN_PATH;

  if (isLoginPage) return NextResponse.next();
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
    return NextResponse.next();
  } catch (e) {
    console.log(e);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = { matcher: ["/admin/:path"] };
