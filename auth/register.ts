import { prisma } from "@/db";
import { zodValidate } from "@/utils/zod";
import { z } from "zod";
import { Credentials } from "./types";
import { hash } from "bcrypt";
import { signJwt } from "./jwt";

export default async function register(
  payload: Credentials & { name: string }
) {
  const data = zodValidate(payload, {
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string(),
  });
  if (!data.success)
    throw {
      status: 400,
      error: data.issues,
      message: "Invalid registration data",
    };
  const exists = await prisma.user.findFirst({
    where: { email: data.data.email },
  });
  if (exists) throw { status: 409, message: "User already exists" };

  const user = await prisma.user.create({
    data: {
      email: data.data.email,
      password: await hash(data.data.password, 10),
      name: data.data.name,
    },
  });

  const token = signJwt({ id: user.id, email: user.email, name: user.name });
  return { user, token };
}
