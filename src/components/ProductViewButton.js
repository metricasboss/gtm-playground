import React from "react";

const ProductViewButton = () => {
  const handleViewItem = () => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "product_view",
      pageCategory: "Product",
      pageDepartment: "Feminino",
      pageUrl: "http://www.outershoes.com.br/sandy-marinho-cinza-/p",
      pageTitle: "SANDY - Outer Shoes",
      skuStockOutFromShelf: [],
      skuStockOutFromProductDetail: [],
      shelfProductIds: [],
      accountName: "outershoes",
      pageFacets: [],
      productId: "2004357",
      skuStocks: { 31090: 2 },
      productName: "SANDY - MARINHO-CINZA UNICO",
      productBrandId: 1,
      productBrandName: "Outer Shoes",
      productDepartmentId: 1000005,
      productDepartmentName: "Feminino",
      productCategoryId: 1000013,
      productCategoryName: "Bolsas e Mochilas",
      productListPriceFrom: "779",
      productListPriceTo: "779",
      productPriceFrom: "779",
      productPriceTo: "779",
      sellerId: "1",
      sellerIds: "1",
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

export default ProductViewButton;
