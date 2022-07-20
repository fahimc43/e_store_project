import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Shop from "../components/Shop/Shop";
import Slider from "../components/Slider/Slider";

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div>
      <Navbar cart={cart} />
      <Slider />
      <Shop products={products} handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default Home;
