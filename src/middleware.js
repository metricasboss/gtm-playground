import { NextResponse } from "next/server";

export function middleware(request) {
  const url = new URL(request.url);
  const gtmId = url.searchParams.get("gtmId");

  const response = NextResponse.next();

  if (gtmId) {
    response.headers.set("x-gtm-id", gtmId);
  }

  return response;
}
