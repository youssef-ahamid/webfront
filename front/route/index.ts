import { NextRequest, NextResponse } from "next/server";
import { FrontClient } from "../Client";
import { cookies } from "next/headers";

export function createFrontRouteHandler(client: FrontClient) {
  const GET = async (
    request: NextRequest,
    { params: { path } }: { params: { path: string[] } }
  ) => {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    if (path[0] === "auth") {
      const token = searchParams.get("token");
      const redirect = searchParams.get("redirect") || "/";
      url.pathname = redirect;
      url.search = "";
      try {
        const user = await client.authenticate(token!);
        cookies().set("token", token!);
        cookies().set("user", JSON.stringify(user));
        return NextResponse.redirect(url);
      } catch (e){
        console.log(e);
        return NextResponse.redirect(
          "https://front.memoized.tech/login/?redirect=" +
            encodeURIComponent(url.href)
        );
      }
    }

    return NextResponse.next();
  };

  return { GET };
}
