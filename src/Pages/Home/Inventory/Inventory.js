import React from "react";

const Inventory = ({ inventory }) => {
  const { name, img, description, price } = inventory;
  return (
    <div className="g-5 mt-4 col-sm-12 col-md-6 col-lg-4">
      <div className="card ">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h3>{price}</h3>
          <p className="card-text">{description}</p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
