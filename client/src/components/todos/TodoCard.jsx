const TodoCard = (props) => {
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json()) // or res.json()
      .then((res) => console.log(res));

     
  };

  return (
    <div className="todoCard">
      <h3>
        {props.item.id} - {props.item.todo}
      </h3>
      <button>Complete</button>
      <button onClick={() => handleDelete(props.item.id)}>Delete</button>
    </div>
  );
};

export default TodoCard;
