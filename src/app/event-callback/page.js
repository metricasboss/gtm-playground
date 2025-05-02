"use client";
import { useRouter } from "next/navigation";

export default function ClickEvent() {

const router = useRouter();

  const handleClickEvent = () => {
    let dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: "button_click",
      button_id: "cta",
      button_text: "Clique aqui para testar o evento de clique!",
      "eventCallback": function () {
        router.push("/event-callback/another-page");
      },
      eventTimeout: 1000 // Tempo em milissegundos para o evento ser disparado
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl leading-tight tracking-tight font-extrabold text-gray-900 dark:text-gray-50 js-toc-ignore">
        Teste de Evento de Clique com event Callback
      </h1>
      <p className="my-5 text-xl 4xl:text-lead text-gray-600 dark:text-gray-400">
        Este teste demonstra como configurar e disparar eventos de clique no
        Google Tag Manager (GTM) adicionando o evento persnalizado apos a injeção no Google Tag Manager. Quando você clica no botão abaixo, um evento
        de clique é enviado para a camada de dados e após ele te redireciona.
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
