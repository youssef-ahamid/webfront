import { User } from "@prisma/client";
import { cookies } from "next/headers";

export default function getUser() {
  const user = cookies().get("user")?.value;
  console.log("cookie user", user)
  if (!user) return null;
  return JSON.parse(user) as User;
}
