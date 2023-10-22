import { User } from "@prisma/client";
import { cookies } from "next/headers";

export default function getUser() {
  const user = cookies().get("user")?.value;
  if (!user) return null;
  return JSON.parse(user) as User;
}
