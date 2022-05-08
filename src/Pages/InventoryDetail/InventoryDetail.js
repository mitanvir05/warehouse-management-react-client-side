import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InventoryDetail = () => {
  const { _id } = useParams();
  const [inventoriesDetail, setInventoriesDetail] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${_id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setInventoriesDetail(data));
  }, [_id]);
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card ">
        <img src={inventoriesDetail.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{inventoriesDetail.name}</h5>
          <h3>{inventoriesDetail.price}</h3>
          <h6> Quantity : {inventoriesDetail.quantity}</h6>
          <h6>Supplier : {inventoriesDetail.supplier}</h6>
          <p className="card-text">{inventoriesDetail.description}</p>
          <button className="btn btn-primary">Delivered</button>
        </div>
      </div>

      <div>
        <input className="m-2" placeholder="Enter Quantity" type="number" />
        <button className="btn btn-primary">Add Quantity</button>
      </div>
    </div>
  );
};

export default InventoryDetail;
