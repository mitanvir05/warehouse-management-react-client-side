import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InventoryDetail = () => {
  const { _id } = useParams();
  const [inventoriesDetail, setInventoriesDetail] = useState({});
  let url = `http://localhost:5000/inventory/${_id}`;
  useEffect(() => {
    let url = `http://localhost:5000/inventory/${_id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setInventoriesDetail(data));
  }, [_id, inventoriesDetail]);

  const handleDelivered = () => {
    let quantity = inventoriesDetail?.quantity;
    quantity = parseInt(quantity) - 1;

    if (quantity < 0) {
      return alert("Invalid quantity");
    }
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    });
  };

  const handleQuantity = (e) => {
    e.preventDefault();

    let quantity = inventoriesDetail?.quantity;
    console.log(e.target);
    const addQuantity = parseInt(e?.target?.quantity?.value);
    console.log(addQuantity);

    if (addQuantity > 0) {
      quantity = parseInt(quantity) + addQuantity;
      const updatedInventory = { quantity };

      const url = `http://localhost:5000/inventory/${_id}`;

      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedInventory),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert("quantity updated successfully");
          e?.target?.reset();
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please insert positive number of quantity");
      e?.target?.reset();
      return;
    }
  };

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
          <button onClick={handleDelivered} className="btn btn-primary">
            Delivered
          </button>
        </div>
      </div>

      <div>
        <form onSubmit={handleQuantity}>
          <input
            className="m-2"
            placeholder="Enter Quantity"
            name="quantity"
            type="text"
            required
          />
          <button className="btn btn-primary" type="submit">
            Add Quantity
          </button>
        </form>
      </div>
    </div>
  );
};

export default InventoryDetail;
