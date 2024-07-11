"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();

  useEffect(() => {
    let dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: "view_cart",
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

  const handleBeginCheckout = () => {
    let dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: "begin_checkout",
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
    router.push("/ecommerce/checkout");
  };

  return (
    <main className="p-8 w-full">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-black">
          Carrinho de Compras
        </h1>
        <div className="flex flex-col">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-black">Itens no Carrinho</h2>
            <div className="flex items-center justify-between border-b py-4">
              <img
                src="https://pa1.aminoapps.com/6426/57144d65ccf46a9b8c33fbf71c36af71a8b0905b_hq.gif"
                alt="Semente dos Deuses"
                className="w-24 h-24"
              />
              <div className="flex-1 ml-4 text-black">
                <h3 className="text-lg font-semibold">Semente dos Deuses</h3>
                <p className="text-sm">Categoria: Acessórios</p>
                <p className="text-sm">Preço: R$ 50,00</p>
                <p className="text-sm">Quantidade: 1</p>
              </div>
              <p className="text-lg font-semibold text-black">R$ 50,00</p>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              onClick={handleBeginCheckout}
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
