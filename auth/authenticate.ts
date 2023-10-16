import { prisma } from "@/db";
import { compare } from "bcrypt";
import { AuthenticationPayload } from "./types";
import { verifyJwt } from "./jwt";

export default async function authenticate(credentials: AuthenticationPayload) {
  if ("token" in credentials && credentials.token) {
    const decoded = verifyJwt<{ id: string }>(credentials.token);
    if (!decoded) throw { status: 401, message: "Invalid token" };
    const tokenUser = await prisma.user.findUnique({
      where: { id: decoded.id },
    });
    if (!tokenUser) throw { status: 401, message: "Invalid token" };
    return tokenUser;
  }

  if (!("email" in credentials) || !("password" in credentials)) {
    throw { status: 400, message: "Missing credentials" };
  }

  const user = await prisma.user.findFirst({
    where: { email: credentials.email },
  });
  if (!user)
    throw { status: 404, message: "User not found. Please sign up instead" };

  const isValid = await compare(credentials.password, user.password);
  if (!isValid) throw { status: 401, message: "Invalid password" };

  return user;
}
