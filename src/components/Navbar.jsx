import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { StateContextCustom } from "../Context/StateContext";
import { FaShopify } from "react-icons/fa";
const Navbar = () => {
  const {
    search,
    setSearch,
    state: { cart },
  } = StateContextCustom();
  console.log(cart);
  return (
    <div className=" bg-white container mx-auto flex justify-around shadow rounded p-10 items-center">
      <Link to={"/"}>
        <div className=" flex items-center "> 
          <FaShopify className=" text-[#B81426] text-3xl" />
          <h2 className=" text-[22px] font-semibold">MMS-Shop</h2>
        </div>
      </Link>
      <div className="flex gap-5 items-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className=" border-b-2 outline-none border-b-teal-500 bg-transparent p-2"
        />
        <Link to={"/addtocart"}>
          <div className=" relative">
            <AiOutlineShoppingCart className="text-3xl text-[#B81426]" />
            <span className=" absolute bottom-6 bg-teal-500 p-1 rounded-[100%] h-5 w-5 flex items-center justify-center text-white left-7">
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
