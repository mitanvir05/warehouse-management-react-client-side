import React, { useEffect, useState } from "react";
import Inventory from "./Inventory";

const Inventories = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("inventory.json")
      .then((response) => response.json())
      .then((data) => setInventories(data));
  }, []);
  return (
    <div className="row">
      <div className="container">
        <h1 className="text-primary">Total : {inventories.length}</h1>
        {inventories.map((inventory) => (
          <Inventory key={inventory.id} inventory={inventory}></Inventory>
        ))}
      </div>
    </div>
  );
};

export default Inventories;
