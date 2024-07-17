"use client";
import { useEffect } from "react";

export default function ClickEvent() {
  useEffect(() => {
    const handleAnimation = () => {
      const toasty = document.getElementById("toasty");
      if (toasty) {
        toasty.classList.remove("hidden", "opacity-0");
        setTimeout(() => {
          toasty.classList.add("opacity-0");
          setTimeout(() => {
            toasty.classList.add("hidden");
          }, 700);
        }, 1000);
      }
    };

    document.getElementById("cta").addEventListener("click", handleAnimation);
    return () => {};
  }, []);

  const handleClickEvent = () => {
    let dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: "button_click",
      button_id: "cta",
      button_text: "Clique aqui para testar o evento de clique!",
    });

    // Introduce a deliberate delay
    const start = new Date().getTime();
    while (new Date().getTime() - start < 300) {
      // Loop for 300 milliseconds
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl leading-tight tracking-tight font-extrabold text-gray-900 dark:text-gray-50 js-toc-ignore">
        Teste de Evento de Clique
      </h1>
      <p className="my-5 text-xl 4xl:text-lead text-gray-600 dark:text-gray-400">
        Este teste demonstra como configurar e disparar eventos de clique no
        Google Tag Manager (GTM). Quando você clica no botão abaixo, um evento
        de clique é enviado para a camada de dados.
      </p>
      <button
        id="cta"
        onClick={() => {
          handleClickEvent();
        }}
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
      >
        Clique aqui para testar o evento de clique!
      </button>
      <img
        id="toasty"
        src="https://www.pintarcolorir.com.br/wp-content/uploads/2015/10/Goku-para-colorir-01.png"
        alt="Toasty"
        className="hidden opacity-0 transition-opacity duration-700 fixed bottom-0 right-0 z-50"
        style={{ width: "400px" }}
      />
    </div>
  );
}
