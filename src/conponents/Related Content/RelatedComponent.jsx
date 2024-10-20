import React from "react";
import "./relatedcomponent.css";
import { DataProduct } from "../Assets/Data";
import Item from "../Item/Item";

const RelatedComponents = () => {
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproduct-item">
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

export default RelatedComponents;
