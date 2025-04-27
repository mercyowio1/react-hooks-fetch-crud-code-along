import React, { useState } from "react";

function ItemForm({ handleAddItem }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  const handleSubmit = (e) => {
    //i want to take the data and post it somewhere
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name: name,
      category: category,
      isInCart: false,
    };
    console.log("papppa", newItem);
    fetch("http://localhost:4000/items", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("thiiiis is my new item", data);
        handleAddItem(data);
      });
  };
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
