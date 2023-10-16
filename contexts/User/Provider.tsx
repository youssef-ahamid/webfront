import { ComponentProps } from "react";
import UserContext from "./Context";
import { User } from "@prisma/client";

export default function UserContextProvider({
  children,
  user,
}: ComponentProps<"div"> & { user?: User }) {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
