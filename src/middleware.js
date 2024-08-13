import { NextResponse } from "next/server";

export function middleware(request) {
  const url = new URL(request.url);
  const gtmId = url.searchParams.get("gtmId");

  const response = NextResponse.next();

  // Captura o pathname para definir a categoria da página
  const pathname = url.pathname;
  let pageCategory = "Other"; // Categoria padrão

  if (
    pathname.startsWith("/click-event") ||
    pathname.startsWith("/form-test") ||
    pathname.startsWith("/iframe") ||
    pathname.startsWith("/javascript") ||
    pathname.startsWith("/search")
  ) {
    pageCategory = "How To";
  } else if (pathname.startsWith("/")) {
    pageCategory = "Home";
  } else if (pathname.startsWith("/ecommerce")) {
    pageCategory = "Ecommerce";
  }

  response.headers.set("x-page-category", pageCategory);

  // Captura o idioma preferido do navegador
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const language = acceptLanguage.split(",")[0]; // Pega o primeiro idioma preferido
    response.headers.set("x-user-language", language);
  }

  if (gtmId) {
    response.headers.set("x-gtm-id", gtmId);
  }

  return response;
}
