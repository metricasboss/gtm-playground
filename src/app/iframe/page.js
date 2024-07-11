"use client";
import { useEffect } from "react";

export default function Iframe() {
  useEffect(() => {
    const handlePostMessage = (event) => {
      if (event.origin !== window.location.origin) {
        // Ignore messages from other origins
        return;
      }

      if (event.data && event.data.type === "dataLayer") {
        console.log("Received data from iframe:", event.data.user_data);
        const data = event.data;
        // Faça algo com os dados recebidos
        window.dataLayer.push(data);
      }
    };

    window.addEventListener("message", handlePostMessage);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("message", handlePostMessage);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 gap-8 border-dashed border-4 border-indigo-500">
      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
        Teste de Comunicação com Iframe
      </h1>
      <iframe
        width="900"
        height="600"
        src="/iframe/form"
        title="Iframe Form"
        className="border border-dashed border-indigo-500"
      ></iframe>
    </main>
  );
}
