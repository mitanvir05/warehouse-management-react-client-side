import React from "react";
import { useNavigate } from "react-router-dom";

const Inventory = ({ inventory }) => {
  const { _id, name, img, description, price, quantity, supplier } = inventory;
  const navigate = useNavigate();
  const navigateToInventoryDetail = (_id) => {
    navigate(`/inventory/${_id}`);
  };
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card ">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h3>{price}</h3>
          <h6> Quantity : {quantity}</h6>
          <h6>Supplier : {supplier}</h6>
          <p className="card-text">{description}</p>
          <button
            onClick={() => navigateToInventoryDetail(_id)}
            className="btn btn-primary"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
