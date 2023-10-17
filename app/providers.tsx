"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { MouseProvider, UserProvider } from "@/contexts";
import Cursor from "@/components/interactive/Cursor";
import { Page, User } from "@prisma/client";
import ContentProvider from "@/contexts/Content/Provider";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
  user?: User;
  page?: Page;
}

export function Providers({ children, themeProps, user, page }: ProvidersProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider {...themeProps}>
        <UserProvider user={user}>
          <ContentProvider page={page}>
            {/* <MouseProvider> */}
              {/* <Cursor /> */}
              {children}
            {/* </MouseProvider> */}
          </ContentProvider>
        </UserProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
