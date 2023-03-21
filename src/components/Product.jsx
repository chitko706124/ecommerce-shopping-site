import React from "react";
import { Link } from "react-router-dom";
import { StateContextCustom } from "../Context/StateContext";

const Product = (props) => {
  const { title, description, price, image,id } = props;
  const { dispatch } = StateContextCustom();
  return (
    <div className="shadow-lg rounded flex w-72 flex-col p-3 h-[300px] bg-white transform transition hover:scale-110">
      <img src={image} alt="" className=" max-w-[150px] h-[180px]" />
      <div>
        <h2 className=" text-gray-500 text-xl font-semibold">
          {title.substring(0, 25)}
        </h2>
        <p>${price}</p>
        <button
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: props })}
          className=" transform transition hover:scale-90 mr-2 bg-teal-500 rounded shadow text-white px-5 py-1"
        >
          Add to cart
        </button>
        <Link to={`/detail/${id}`}>
          <button className=" transform transition hover:scale-90 bg-[#B81426] rounded shadow text-white px-5 py-1">
            Detail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
