"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function BeforeGoogleTagManager() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Garante que só execute uma vez
    if (isFirstRender.current) {
      isFirstRender.current = false;

      const pageCategory = (() => {
        if (pathname.startsWith("/blog")) return "Blog";
        if (pathname.startsWith("/about")) return "About";
        if (pathname.startsWith("/contact")) return "Contact";
        // Adicione outras regras conforme necessário
        return "Home"; // Categoria padrão
      })();

      if (!window.localStorage.getItem("uuid")) {
        window.localStorage.setItem(
          "uuid",
          Math.random().toString(36).substring(2)
        );
      }

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        user_id: window.localStorage.getItem("uuid"),
        pageCategory: pageCategory,
      });
    }
  }, [pathname]);

  return null;
}
