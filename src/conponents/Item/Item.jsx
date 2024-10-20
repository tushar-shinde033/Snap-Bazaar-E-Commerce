import React from "react";
import "./item.css";
import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" onClick={window.scrollTo(0, 0)} />
      </Link>

      <p style={{ fontSize: "17px", fontWeight: "500" }}>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          {props.new_Price ? "₹" : ""}
          {props.new_Price}
        </div>
        <div className="item-price-old">
          {props.old_Price ? "₹" : ""}
          {props.old_Price}
        </div>
      </div>
    </div>
  );
};

export default Item;
