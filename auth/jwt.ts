import { sign, verify, type SignOptions, VerifyOptions } from "jsonwebtoken";

export const signJwt = (payload: object, options: SignOptions = {}) =>
  sign(payload, process.env["NEXTAUTH_SECRET"] as string, options);

export const verifyJwt = <T>(
  token: string,
  options: VerifyOptions = {}
): T | null => {
  try {
    return verify(
      token,
      process.env["NEXTAUTH_SECRET"] as string,
      options
    ) as T;
  } catch (error) {
    console.log(error);
    return null;
  }
};
