import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Inventory from "./Inventory";

const Inventories = () => {
  const navigate = useNavigate();

  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((response) => response.json())
      .then((data) => setInventories(data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-primary text-center m-4">
        Available Products : {inventories.length}
      </h1>
      <div className="row">
        {inventories?.slice(1, 7).map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
      </div>
      <button
        onClick={() => navigate("/manage_inventory")}
        className="btn btn-primary m-4 text-center"
      >
        Manage Inventory
      </button>
    </div>
  );
};

export default Inventories;
