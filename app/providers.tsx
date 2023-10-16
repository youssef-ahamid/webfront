"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { MouseProvider, UserProvider } from "@/contexts";
import Cursor from "@/components/interactive/Cursor";
import { User } from "@prisma/client";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
  user?: User;
}

export function Providers({ children, themeProps, user }: ProvidersProps) {
  console.log(user);
  return (
    <NextUIProvider>
      <NextThemesProvider {...themeProps}>
        <UserProvider user={user}>
          <MouseProvider>
            <Cursor />
            {children}
          </MouseProvider>
        </UserProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
