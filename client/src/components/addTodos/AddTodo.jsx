import React, { useState } from "react";

const AddTodo = () => {
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      id: 101,
      todo: data,
      completed: false,
    };

console.log(obj);


fetch("http://localhost:3000/todos", {
  method: "POST",
  body: JSON.stringify(obj),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});



  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setData(e.target.value)} type="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
