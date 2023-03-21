import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StateContextCustom } from "../Context/StateContext";

const Detail = () => {
  const [item, setItem] = useState({});
  const { dispatch } = StateContextCustom();

  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await api.json();
    setItem(data);
  };

  return (
    <div className="">
      <div className=" container mx-auto mt-10  bg-white">
        <div className="row flex p-10 gap-5">
          <div className=" col-6">
            <img src={item.image} className=" max-w-sm" />
          </div>
          <div className=" col-6 items-center flex">
            <div>
              <h2 className=" mb-5 text-white font-semibold bg-[#c03646] p-1 rounded-lg max-w-max">
                {item.title}
              </h2>
              <p className=" text-gray-600 mb-5">{item.description}</p>
              <p>Price = ${item.price}</p>
            <button
              onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
              className=" transform transition hover:scale-90 mr-2 bg-teal-500 rounded shadow text-white px-5 py-1"
            >
              Add to cart
            </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
