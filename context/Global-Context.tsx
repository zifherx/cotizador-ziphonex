"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
import { REACT_CHILDREN_TYPE } from "@/common/types";

export function GlobalContext({ children }: REACT_CHILDREN_TYPE) {
  return (
    <SessionProvider>
      {children}
      <Toaster />
    </SessionProvider>
  );
}
