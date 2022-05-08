import React from "react";
import { useNavigate } from "react-router-dom";
import useInventories from "../../../../hooks/useInventories";

const ManageInventory = () => {
  const [inventories, setInventories] = useInventories();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const remaining = inventories.filter(
            (inventory) => inventory._id !== id
          );
          setInventories(remaining);
        });
    }
  };
  const navigate = useNavigate();
  const navigateToInventoryDetail = (_id) => {
    navigate(`/inventory/${_id}`);
  };
  return (
    <div>
      <h4 className="text-center">Manage Inventory</h4>
      {inventories.map((inventory) => (
        <div key={inventory._id}>
          <div className="w-50 mx-auto g-5 m-3 d-flex col-sm-12 col-md-6 col-lg-4">
            <div className="card ">
              <img src={inventory.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{inventory.name}</h5>
                <h3>{inventory.price}</h3>
                <h6> Quantity : {inventory.quantity}</h6>
                <h6>Supplier : {inventory.supplier}</h6>
                <p className="card-text">{inventory.description}</p>
                <button
                  onClick={() => handleDelete(inventory._id)}
                  className="btn btn-primary"
                >
                  Delete
                </button>
                <button
                  onClick={() => navigateToInventoryDetail(inventory._id)}
                  className="btn btn-primary m-2"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageInventory;
