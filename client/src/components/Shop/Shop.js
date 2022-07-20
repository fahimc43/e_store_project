import React, { useState } from "react";
import PaginationLine from "../PaginationLine/PaginationLine";
import Product from "../Product/Product";

function Shop(props) {
  const products = props.products;
  const handleAddToCart = props.handleAddToCart;

  // const [post, setPost] = useState([])
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  // Get current posts
  const indexOfLastProduct = currentPage * postsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center m-10 p-5">
        <h2>Loading...</h2>
      </div>
    );
  }

  // Page numbers navigate
  // const pageNumbers = [];
  // for (let i = 0; i <= Math.ceil(products.length / postsPerPage); i++) {
  //   pageNumbers.push(i);
  // }
  // console.log(pageNumbers);

  return (
    <>
      <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6 mx-5 rounded-lg">
        <div className="w-4/5 mx-auto flex justify-center items-center">
          <div className="flex flex-wrap -mx-4">
            {/* <h1>Products: {products.length}</h1> */}
            {currentProducts.map((product) => (
              <Product
                key={product.key}
                product={product}
                handleAddToCart={handleAddToCart}
              ></Product>
            ))}
          </div>
        </div>
        <PaginationLine
          setCurrentPage={setCurrentPage}
          products={products.length}
        />
      </div>
    </>
  );
}

export default Shop;
