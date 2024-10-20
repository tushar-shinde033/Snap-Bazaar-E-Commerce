import React from "react";
import "./Popular.css";
import { DataProduct } from "../Assets/Data";
import Item from "../Item/Item";

export const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {DataProduct.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_Price={item.newPrice}
              old_Price={item.oldPrice}
            />
          );
        })}
      </div>
    </div>
  );
};
