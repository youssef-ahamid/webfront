import { prisma } from "@/db";
import { signJwt } from "./jwt";

const createToken = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw { status: 404, message: "User not found" };

  try {
    const token = signJwt(
      { id: user.id, email: user.email },
      {
        expiresIn: "2 days",
      }
    );

    return { token, user };
  } catch (error) {
    throw { status: 500, message: "Unable to sign token", error };
  }
};

export default createToken;
