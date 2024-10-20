import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
// import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
// import Breadcrum from "./conponents/Breadcrum/breadcrum";
import BreadCrum from "../conponents/Breadcrum/Bredcrum";
// import ProductDisplay from "../components/ProductDisplay/productdisplay";
import Productdisplay from "../conponents/ProductDisplay/productdisplay";
import Description from "../conponents/Description/Description";
import RelatedComponents from "../conponents/Related Content/RelatedComponent";

const Product = () => {
  const { AllProduct } = useContext(ShopContext);
  const { productId } = useParams();
  // const productID = useParams();
  const product = AllProduct.find((e) => e.id === Number(productId));
  return (
    <div className="products">
      {/* {console.log(productID.productId)} */}
      <BreadCrum product={product} />
      <Productdisplay product={product} />
      <Description />
      <RelatedComponents />
    </div>
  );
};

export default Product;
