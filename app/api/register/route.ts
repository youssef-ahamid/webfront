import { authenticate } from "@/auth";
import register from "@/auth/register";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { email, password, name } = await req.json();
  if (!email || !password || !name)
    return NextResponse.json({ message: "Missing credentials" });

  try {
    const { user, token } = await register({ email, password, name });
    await authenticate({ email, password, token });
    cookies().set("user", JSON.stringify(user));
    return NextResponse.json({ success: true, user });
  } catch (e) {
    const error = e as { status: number; message: string; error?: any };
    return NextResponse.json({ success: false, message: error.message });
  }
};
