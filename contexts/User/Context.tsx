import { User } from "@prisma/client";
import { createContext } from "react";

const UserContext = createContext<{
  user?: User;
}>({});

export default UserContext;
