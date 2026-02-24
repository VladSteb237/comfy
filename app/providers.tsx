"use client";
import React from "react";
import ThemeProvider from "./theme-provider";
import { Toaster } from "@/components/ui/sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Toaster position="top-center" />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Providers;
