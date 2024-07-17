import { Inter } from "next/font/google";
import "./globals.css";

import { headers } from "next/headers";
import Navbar from "@/components/Navbar";
import InteractionMonitor from "@/components/InteractionMonitor";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Playground Métricas Boss",
  description:
    "O Playground Métricas Boss é uma ferramenta interativa para testar disparos de tags no Google Tag Manager (GTM)",
};

export default function RootLayout({ children, searchParams }) {
  const gtmId = headers().get("X-Gtm-Id");

  return (
    <html lang="en">
      <InteractionMonitor />
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer', "${gtmId}");
              `,
          }}
        ></script>
      </head>
      <body className={`${inter.className} min-h-screen`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <div className="flex">
          <Navbar />
          <main className="p-8 w-full dark:bg-gray-900 bg-gray-50">
            <div className="max-w-4xl">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
