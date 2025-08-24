import React from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

const ProductGrid = ({ products, selectedCategory, onAddToCart }) => {
  // filter products based on selectedCategory
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(p => p.category === selectedCategory);

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          oldPrice={product.oldPrice}   // optional
          fewLeft={product.fewLeft}     // optional
          onAddToCart={() => onAddToCart(product)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
