"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProductPage() {
  const router = useRouter();

  useEffect(() => {
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
  }, []);

  const handleAddToCart = () => {
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
    router.push("/ecommerce/cart");
  };

  return (
    <main className="p-8 w-full">
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
            conhecido por restaurar completamente a energia e a saúde de quem a
            consome. Ideal para colecionadores e fãs da série, este item é
            indispensável para qualquer arsenal de batalha.
          </p>
        </div>
      </div>
    </main>
  );
}
