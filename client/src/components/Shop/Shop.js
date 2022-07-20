import React from "react";
import Product from "../Product/Product";

function Shop(props) {
  const products = props.products;
  const handleAddToCart = props.handleAddToCart;
  return (
    <>
      <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6 mx-5 rounded-lg">
        <div className="w-4/5 mx-auto flex justify-center items-center">
          <div className="flex flex-wrap -mx-4">
            {/* <h1>Products: {products.length}</h1> */}
            {products.map((product) => (
              <Product
                key={product.key}
                product={product}
                handleAddToCart={handleAddToCart}
              ></Product>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
