import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h1>Please Insert Details</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          type="text"
          {...register("name")}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="text"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-2"
          placeholder="Supplier name"
          type="text"
          {...register("supplier")}
        />
        <textarea
          className="mb-2"
          placeholder="Description"
          type="text"
          {...register("description")}
        />
        <input
          className="mb-2"
          placeholder="Image Link"
          type="text"
          {...register("img")}
        />
        <input
          className="mb-5 btn btn-primary"
          value="Add Item"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddItem;
