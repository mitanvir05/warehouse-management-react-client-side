import React, { useEffect, useState } from "react";
import Inventory from "./Inventory";

const Inventories = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((response) => response.json())
      .then((data) => setInventories(data));
  }, []);
  return (
    <div className="container">
      <h1 className="text-primary">Total : {inventories.length}</h1>
      <div className="row">
        {inventories.map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
      </div>
      <button className="btn btn-primary m-4 text-center">
        Manage Inventory
      </button>
    </div>
  );
};

export default Inventories;
