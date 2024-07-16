"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CombinedEcommercePage() {
  const [step, setStep] = useState("home");
  const router = useRouter();

  useEffect(() => {
    if (step === "home") {
      let dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: "view_item_list",
        items: [
          {
            id: "12345",
            name: "Semente dos Deuses",
            category: "Acessórios",
            price: 50.0,
          },
        ],
      });
    } else if (step === "product") {
      let dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: "view_item",
        item: {
          id: "12345",
          name: "Semente dos Deuses",
          category: "Acessórios",
          price: 50.0,
        },
      });
    } else if (step === "cart") {
    }
  }, [step]);

  const handleSelectItem = () => {
    setStep("product");
  };

  const handleAddToCart = () => {
    console.log("asd");
    let dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: "add_to_cart",
      item: {
        id: "12345",
        name: "Semente dos Deuses",
        category: "Acessórios",
        price: 50.0,
      },
    });
    setStep("cart");
  };

  const handleContinueShopping = () => {
    setStep("home");
  };

  return (
    <div className="">
      <main className="p-8 w-full">
        {step === "home" && (
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">
              Bem-vindo à Loja Dragon Ball
            </h1>
            <p className="text-lg mb-4">
              Explore nossos produtos exclusivos do universo Dragon Ball.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="bg-white shadow-lg rounded-lg p-4">
                <img
                  src="https://pa1.aminoapps.com/6617/dba273cc3d8f5abf180705d5b04f3041a7f3bf08_00.gif"
                  alt="Semente dos Deuses"
                  className="mb-4 w-full h-48 object-cover"
                />
                <h2 className="text-2xl font-bold mb-2 text-black">
                  Semente dos Deuses
                </h2>
                <p className="text-lg mb-2 text-gray-800">Preço: R$ 50,00</p>
                <button
                  onClick={handleSelectItem}
                  className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Ver detalhe de produto
                </button>
              </div>
            </div>
          </div>
        )}

        {step === "product" && (
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-4xl font-bold mb-6 text-center text-black">
              Semente dos Deuses
            </h1>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <img
                src="https://pa1.aminoapps.com/6426/57144d65ccf46a9b8c33fbf71c36af71a8b0905b_hq.gif"
                alt="Semente dos Deuses"
                className="w-full md:w-1/2 h-auto mb-6 md:mb-0"
              />
              <div className="md:ml-6 text-black">
                <p className="text-lg mb-4">
                  <strong>Categoria:</strong> Acessórios
                </p>
                <p className="text-lg mb-4">
                  <strong>Preço:</strong> R$ 50,00
                </p>
                <button
                  onClick={handleAddToCart}
                  className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-700 transition duration-200"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
            <div className="mt-6 text-black">
              <h2 className="text-2xl font-bold mb-4">Descrição do Produto</h2>
              <p className="text-lg">
                A Semente dos Deuses é um item lendário do universo Dragon Ball,
                conhecido por restaurar completamente a energia e a saúde de
                quem a consome. Ideal para colecionadores e fãs da série, este
                item é indispensável para qualquer arsenal de batalha.
              </p>
            </div>
          </div>
        )}

        {step === "cart" && (
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-4xl font-bold mb-6 text-center text-black">
              Carrinho de Compras
            </h1>
            <div className="text-black">
              <p className="text-lg mb-4">
                <strong>Produto:</strong> Semente dos Deuses
              </p>
              <p className="text-lg mb-4">
                <strong>Categoria:</strong> Acessórios
              </p>
              <p className="text-lg mb-4">
                <strong>Preço:</strong> R$ 50,00
              </p>
            </div>
            <button
              onClick={handleContinueShopping}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
            >
              Continuar Comprando
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
