import React from "react";

const Inventory = ({ inventory }) => {
  const { name, img, description, price } = inventory;
  return (
    <div>
      <img src={img} alt="" />
      <h3>this is {name}</h3>
    </div>
  );
};

export default Inventory;
