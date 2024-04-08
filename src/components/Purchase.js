import React from "react";

const PurchaseButton = () => {
  const handlePurchase = (e) => {
    e.preventDefault();

    let dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: "purchase",
      ecommerce: {
        transaction_id: "T_12345_12",
        value: 25.42,
        tax: 4.9,
        shipping: 5.99,
        currency: "USD",
        coupon: "SUMMER_SALE",
        items: [
          {
            item_id: "SKU_12345",
            item_name: "Stan and Friends Tee",
            affiliation: "Google Merchandise Store",
            coupon: "SUMMER_FUN",
            discount: 2.22,
            index: 0,
            item_brand: "Google",
            item_category: "Apparel",
            item_category2: "Adult",
            item_category3: "Shirts",
            item_category4: "Crew",
            item_category5: "Short sleeve",
            item_list_id: "related_products",
            item_list_name: "Related Products",
            item_variant: "green",
            location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
            price: 9.99,
            quantity: 1,
          },
        ],
      },
      user_data: {
        email: "lucian@metricasboss.com.br",
        phone: "+5521989541666",
      },
    });
    console.log("Evento de compra disparado com sucesso");
  };

  return (
    <button
      id="finalizar"
      onClick={handlePurchase}
      className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
    >
      Finalizar pedido
    </button>
  );
};

export default PurchaseButton;
