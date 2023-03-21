import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { StateContextCustom } from "../Context/StateContext";

const Cart = ({
  item,
  increasePrice,
  decreasePrice,
  mainTotal,
  setMainTotal,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = StateContextCustom();
  const increase = () => {
    setQuantity(quantity + 1);
    increasePrice(item.price);
  };
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      decreasePrice(item.price);
    }
  };

  const delBtn = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
    setMainTotal(mainTotal - item.price);
  };

  const price = quantity * item.price;
  return (
    <div className=" flex justify-around mb-5 items-center bg-white p-5">
      <div className=" flex gap-7 items-center w-[400px] h-[140px] ">
        <img className=" max-w-[100px] h-[150 px]" src={item.image} alt="" />
        <div className="">
          <h2 className=" text-gray-500 font-semibold">
            {item.title.substring(0, 25)}...
          </h2>
          <h2>${price.toFixed(2)}</h2>
          <p onClick={delBtn} className=" cursor-pointer text-red-500">
            remove
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <p onClick={increase} className=" cursor-pointer text-xl">
          <IoIosArrowUp />
        </p>
        <p>{quantity}</p>
        <p onClick={decrease} className=" cursor-pointer text-xl">
          <IoIosArrowDown />
        </p>
      </div>
    </div>
  );
};

export default Cart;
