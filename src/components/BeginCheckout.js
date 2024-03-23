import React from "react";

const BeginCheckoutButton = () => {
  const handleBeginCheckout = (e) => {
    e.preventDefault();

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "begin_checkout",
      ecommerce: {
        currency: "BRL",
        value: 9.99,
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
    });
  };

  return (
    <button
      onClick={handleBeginCheckout}
      className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-yellow-700 transition duration-200"
    >
      Iniciar Compra
    </button>
  );
};

export default BeginCheckoutButton;
