import React from "react";
import { Link } from "react-router-dom";
import "../../conponents/Breadcrum/bredcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
import "./bredcrum.css";

const BreadCrum = (props) => {
  const { product } = props;

  return (
    <div className="breadcrum">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        Home
      </Link>
      <img src={arrow_icon} alt="" />
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        Shop
      </Link>
      <img src={arrow_icon} alt="" />
      <Link
        to={
          product.category === "Men"
            ? "/mens"
            : product.category === "Women"
            ? "/womens"
            : "/kids"
        }
        style={{ textDecoration: "none", color: "black" }}
      >
        {product.category}
      </Link>

      <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  );
};

export default BreadCrum;
