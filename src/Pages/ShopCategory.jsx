import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../conponents/Item/Item";
import dropdown_icon from "../conponents/Assets/dropdown_icon.png";
import "./CSS/ShopCatogry.css";

const ShopCategory = (props) => {
  const { AllProduct } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" className="shopcategory-banner" />
      <div className="shopcategory-indexsort">
        <p style={{ fontSize: "18px", fontWeight: "500" }}>
          <span>Showing 1-12 </span>out of 36 Products
        </p>
        <div
          className="shopcategory-sort"
          style={{ fontSize: "16px", fontWeight: "500" }}
        >
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {AllProduct.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
