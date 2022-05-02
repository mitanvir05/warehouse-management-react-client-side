import React from "react";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Inventory from "../Inventory/Inventories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventory></Inventory>
    </div>
  );
};

export default Home;
