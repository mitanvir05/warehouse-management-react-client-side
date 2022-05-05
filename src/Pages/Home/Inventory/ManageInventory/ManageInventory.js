import React from "react";
import useInventories from "../../../../hooks/useInventories";

const ManageInventory = () => {
  const [inventories] = useInventories();
  return (
    <div>
      <h4>Manage Inventory</h4>
      {inventories.map((inventory) => (
        <div key={inventory._id}>
          <h1>{inventory.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default ManageInventory;
