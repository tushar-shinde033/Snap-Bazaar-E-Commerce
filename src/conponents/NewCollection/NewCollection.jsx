import React from "react";
import "./NewCollection.css";
import newCollections from "../Assets/new_collections";
import Item from "../Item/Item";

export const NewCollection = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newCollections.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_Price={item.new_price}
              old_Price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
