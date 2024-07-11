"use client";
import AddToCartButton from "@/components/AddToCart";
import BeginCheckoutButton from "@/components/BeginCheckout";
import OrderPlacedButton from "@/components/OrderPlacedButton";
import ProductViewButton from "@/components/ProductViewButton";
import PurchaseButton from "@/components/Purchase";
import ViewItemButton from "@/components/ViewItem";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    window.variavel = 1000;
    document.getElementById("cta").addEventListener("click", function () {
      var toasty = document.getElementById("toasty");
      toasty.classList.remove("hidden", "opacity-0");
      setTimeout(function () {
        toasty.classList.add("opacity-0");
        setTimeout(function () {
          toasty.classList.add("hidden");
        }, 700);
      }, 1000);
    });
  }, []);

  const handleEvent = (e) => {
    let dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: "add_to_cart",
      value: 9.9,
      currency: "BRL",
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-8">
      <div className="flex flex-col p-20 border-4 border-dotted border-indigo-500 mt-6 ">
        <button
          id="cta"
          onClick={handleEvent}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
        >
          Clique aqui para chamar o Goku!
        </button>
        <img
          id="toasty"
          src="https://www.pintarcolorir.com.br/wp-content/uploads/2015/10/Goku-para-colorir-01.png"
          alt="Toasty"
          className="hidden opacity-0 transition-opacity duration-700 fixed bottom-0 right-0 z-50"
          style={{ width: "400px" }}
        />
      </div>
      <div className="flex flex-col p-20 border-4 border-dotted border-indigo-500">
        <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
          Clique para comprar uma semente dos Deuses
        </h2>
        <img
          className="mb-6"
          src="https://pa1.aminoapps.com/6570/633040bea024b4bce82a439ab9b0579a27b5160b_00.gif"
        />
        <div className="flex flex-col gap-2">
          <ProductViewButton />
          <OrderPlacedButton />
        </div>
      </div>
    </main>
  );
}
