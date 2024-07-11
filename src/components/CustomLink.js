"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function CustomLink({ href, children, ...props }) {
  const searchParams = useSearchParams();
  const gtmId = searchParams.get("gtmId");
  const gtmDebug = searchParams.get("gtm_debug");

  const buildHref = () => {
    let newHref = href;
    if (gtmId || gtmDebug) {
      const url = new URL(href, window.location.origin);
      if (gtmId) {
        url.searchParams.set("gtmId", gtmId);
      }
      if (gtmDebug) {
        url.searchParams.set("gtm_debug", gtmDebug);
      }
      newHref = url.pathname + url.search;
    }
    return newHref;
  };

  return (
    <Link href={buildHref()} {...props}>
      {children}
    </Link>
  );
}
