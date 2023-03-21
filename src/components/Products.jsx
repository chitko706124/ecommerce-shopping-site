import React from "react";
import { StateContextCustom } from "../Context/StateContext";
import Product from "./Product";

const Products = () => {
  const {
    state: { products },
  } = StateContextCustom();
  return (
    
    <div className=" flex flex-wrap gap-10 justify-center mt-20">
      {products.map((item) => {
        return <Product key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Products;
