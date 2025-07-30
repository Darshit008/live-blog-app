"use client";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect } from "react"
export default function ThemeClient({ children }) {
  useEffect(() => {
    document.documentElement.classList.add("light")
    document.documentElement.style.colorScheme = "light"
  }, [])

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
