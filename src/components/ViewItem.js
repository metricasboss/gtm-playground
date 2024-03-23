import React from "react";

const ViewItemButton = () => {
  const handleViewItem = () => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "view_item",
      ecommerce: {
        currency: "USD",
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

    console.log("Evento view_item disparado.");
  };

  return (
    <button
      onClick={handleViewItem}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-green-700"
    >
      Visualizar Produto
    </button>
  );
};

export default ViewItemButton;
