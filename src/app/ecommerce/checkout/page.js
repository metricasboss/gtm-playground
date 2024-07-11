"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [shippingInfoAdded, setShippingInfoAdded] = useState(false);
  const [paymentInfoAdded, setPaymentInfoAdded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: "checkout",
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

  const handleAddShippingInfo = () => {
    let dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: "add_shipping_info",
      shipping_tier: "Standard",
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
    setShippingInfoAdded(true);
  };

  const handleAddPaymentInfo = () => {
    let dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: "add_payment_info",
      payment_type: "Credit Card",
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
    setPaymentInfoAdded(true);
  };

  const handlePurchase = () => {
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
    router.push("/ecommerce/order");
  };

  return (
    <>
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Checkout
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 border rounded-lg bg-gray-50">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">
              Informações de Envio
            </h2>
            {!shippingInfoAdded ? (
              <button
                onClick={handleAddShippingInfo}
                className="w-full px-6 py-3 mb-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
              >
                Adicionar Informações de Envio
              </button>
            ) : (
              <p className="text-lg text-green-700">
                Informações de envio adicionadas
              </p>
            )}
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">
              Informações de Pagamento
            </h2>
            {shippingInfoAdded && !paymentInfoAdded ? (
              <button
                onClick={handleAddPaymentInfo}
                className="w-full px-6 py-3 mb-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
              >
                Adicionar Informações de Pagamento
              </button>
            ) : paymentInfoAdded ? (
              <p className="text-lg text-green-700">
                Informações de pagamento adicionadas
              </p>
            ) : (
              <p className="text-lg text-gray-500">
                Adicione primeiro as informações de envio
              </p>
            )}
          </div>
        </div>
        {paymentInfoAdded && (
          <div className="mt-8 flex justify-end">
            <button
              onClick={handlePurchase}
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-700 transition duration-200"
            >
              Confirmar Compra
            </button>
          </div>
        )}
      </div>
    </>
  );
}
