import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InventoryDetail = () => {
  const { _id } = useParams();
  const [inventoriesDetail, setInventoriesDetail] = useState([]);
  useEffect(() => {
    fetch("inventory.json")
      .then((response) => response.json())
      .then((data) => setInventoriesDetail(data));
  }, [_id]);
  return (
    <div>
      <h2>this is details {_id}</h2>
      <h2> {inventoriesDetail.name}</h2>
    </div>
  );
};

export default InventoryDetail;
