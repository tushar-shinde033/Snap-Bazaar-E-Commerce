import React from "react";
import UncontrolledExample from "../conponents/Hero/Hero";
import { Popular } from "../conponents/Popular/Popular";
import { Offer } from "../conponents/Offers/Offer";
import { NewCollection } from "../conponents/NewCollection/NewCollection";
import { Newsletter } from "../conponents/Newsletter/Newsletter";

function Shop() {
  return (
    <div>
      <UncontrolledExample />
      <Popular />
      <Offer />
      <NewCollection />
      <Newsletter />
    </div>
  );
}

export default Shop;
