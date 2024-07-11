"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ConfirmationPage() {
  const router = useRouter();

  useEffect(() => {
    // Simula a limpeza do carrinho ou qualquer outra ação de finalização de pedido
    // Esta parte pode variar dependendo de como você está gerenciando o estado do carrinho
    let dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: "purchase",
      transaction_id: "T12345",
      affiliation: "Online Store",
      value: 50.0,
      currency: "BRL",
      tax: 0,
      shipping: 15,
      items: [
        {
          id: "12345",
          name: "Semente dos Deuses",
          category: "Acessórios",
          price: 50.0,
          quantity: 1,
        },
      ],
    });
  }, []);

  return (
    <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Pedido Confirmado
      </h1>
      <p className="text-lg text-center text-gray-700 mb-8">
        Obrigado por sua compra! Seu pedido foi confirmado com sucesso.
      </p>
      <div className="flex flex-col items-center">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold mb-2 text-gray-700">
            Detalhes do Pedido
          </h2>
          <p className="text-lg text-gray-700">Semente dos Deuses</p>
          <p className="text-lg text-gray-700">Preço: R$ 50,00</p>
          <p className="text-lg text-gray-700">Quantidade: 1</p>
          <p className="text-lg text-gray-700">
            Total: R$ 65,00 (incluindo frete)
          </p>
        </div>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
        >
          Voltar à Página Inicial
        </button>
      </div>
    </div>
  );
}
