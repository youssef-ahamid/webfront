import { authenticate } from "@/auth";
import createToken from "@/auth/createToken";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { email, password, token } = await req.json();
  if (!token && (!email || !password))
    return NextResponse.json({ message: "Missing credentials" });

  try {
    const user = await authenticate({ email, password, token } as any);
    const { token: newToken } = await createToken(user.email!);
    cookies().set("token", newToken);
    cookies().set("user", JSON.stringify(user));
    return NextResponse.json({ loggedIn: true, user, token: newToken });
  } catch (e) {
    const error = e as { status: number; message: string; error?: any };
    return NextResponse.json({ loggedIn: false, message: error.message });
  }
};
