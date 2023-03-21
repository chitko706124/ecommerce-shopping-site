import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StateContextCustom } from "../Context/StateContext";
import Cart from "./Cart";

const AddToCart = () => {
  const [mainTotal, setMainTotal] = useState(0);
  const {
    state: { cart },
  } = StateContextCustom();

  useEffect(() => {
    setMainTotal(total);
  }, []);

  const increasePrice = (price) => {
    setMainTotal(mainTotal + price);
  };

  const decreasePrice = (price) => {
    setMainTotal(mainTotal - price);
  };

  const total = () => cart.reduce((pv, cv) => pv + cv.price, 0);
  return (
    <>
      {cart.length === 0 ? (
        <div className=" h-screen">
          <h1 className=" text-[#B81426] text-center text-3xl mt-20 mb-5">
            Your Cart Is Empty
          </h1>
          <Link to={"/"}>
            <div className=" flex justify-center">
              <button className=" bg-teal-500 px-4 py-1 text-white rounded">
                Fill It
              </button>
            </div>
          </Link>
        </div>
      ) : (
        <div>
          <div className=" mt-20 container mx-auto  flex flex-col ">
            {cart?.map((item) => {
              return (
                <Cart
                  key={item.id}
                  item={item}
                  increasePrice={increasePrice}
                  decreasePrice={decreasePrice}
                  mainTotal={mainTotal}
                  setMainTotal={setMainTotal}
                />
              );
            })}
          </div>
          <hr className=" my-4 border-2 w-[70%] mx-auto" />
          <div className=" flex justify-around">
            <h2 className=" text-2xl ">Total</h2>
            <p className=" text-2xl">${mainTotal.toFixed(2)}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AddToCart;
