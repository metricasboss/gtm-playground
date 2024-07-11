"use client";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
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
  }, []);

  const handleSelectItem = () => {
    let dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: "select_item",
      item: {
        id: "12345",
        name: "Semente dos Deuses",
        category: "Acessórios",
        price: 50.0,
      },
    });
  };

  return (
    <div className="">
      <main className=" p-8 w-full">
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
              <a
                href="/ecommerce/product"
                onClick={handleSelectItem}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
              >
                Ver detalhe de produto
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
