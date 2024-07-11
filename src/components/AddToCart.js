import React from "react";

const AddToCartButton = () => {
  const handleAddToCart = () => {
    window.dataLayer = window.dataLayer || [];
    // Diretamente para o Google Analytics
    window.gtag("event", "refund", {
      currency: "USD",
      transaction_id: "T_12345", // Transaction ID. Required for purchases and refunds.
      value: 12.21,
      coupon: "SUMMER_FUN",
      shipping: 3.33,
      tax: 1.11,
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
    });

    console.log("Evento add_to_cart disparado.");
  };

  return (
    <button
      onClick={handleAddToCart}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    >
      Adicionar ao Carrinho
    </button>
  );
};

export default AddToCartButton;
