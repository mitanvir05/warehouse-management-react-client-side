import React from "react";
import FrequentlyAsked from "../../FrequentlyAsked/FrequentlyAsked";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Inventory from "../Inventory/Inventories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventory></Inventory>
      <FrequentlyAsked></FrequentlyAsked>
    </div>
  );
};

export default Home;
