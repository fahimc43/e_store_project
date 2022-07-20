import React from "react";
import Rating from "react-rating";
import { UilShoppingCart } from "@iconscout/react-unicons";
import { UilStar } from "@iconscout/react-unicons";
import { UisStar } from "@iconscout/react-unicons-solid";

import "./Product.style.scss";

function Product(props) {
  const handleAddToCart = props.handleAddToCart;
  const { img, name, seller, price, stock, star } = props.product;
  return (
    <>
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
          <div className="relative pb-48 overflow-hidden">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={img}
              alt={name}
            />
          </div>
          <div className="px-4 pb-4 pt-2">
            <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
              Only {stock} left in stock
            </span>
            <h2 className="mt-2 mb-2 font-bold line-clamp-2">{name}</h2>
            <p className="text-gray-400">By: {seller}</p>
            <div className="mt-2 flex items-center">
              <span className="text-sm font-semibold">us</span>&nbsp;
              <span className="font-bold text-xl">{price}</span>&nbsp;
              <span className="text-sm font-semibold">$</span>
            </div>
            <div className=" flex justify-start items-center">
              <Rating
                initialRating={star}
                readonly
                emptySymbol={<UilStar className="text-orange-300 w-4" />}
                fullSymbol={<UisStar className="text-orange-300 w-4" />}
              ></Rating>
              <p className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3 -mt-1">
                {star}.0
              </p>
            </div>
            <div className="flex justify-start mt-2">
              <button
                onClick={() => handleAddToCart(props.product)}
                className="flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <UilShoppingCart size="20" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
