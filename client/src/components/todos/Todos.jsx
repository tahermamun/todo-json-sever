import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";
import "./todo.css";
const Todos = () => {
  const [todoData, setTodoData] = useState([]);
  let dataFetch;
  useEffect(() => {
    dataFetch = () => {
      fetch("http://localhost:3000/todos")
        .then((response) => response.json())
        .then((res) => setTodoData(res));
    };
    dataFetch();
  }, []);

    //   decide how to show data in pagination
    const itemPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    let start = (currentPage - 1) * itemPerPage;
    let end = start + itemPerPage;
    const displayTodo = todoData.slice(start, end);

    const prevPage = () => {
      if (start > 0) {
        setCurrentPage((prev) => prev - 1);
      }
    };
    const nextPage = () => {
      if (end < todoData.length) {
        setCurrentPage((prev) => prev + 1);
      }
    };

  return (
    <div className="all_todo_box">
      <h1>{todoData.length}</h1>
      {displayTodo.map((item) => (
        <TodoCard key={item.id} item={item} dataFetch={dataFetch} />
      ))}
      <div>
        <button onClick={prevPage}>prev</button>
        <button onClick={() => nextPage()}>next</button>
      </div>
    </div>
  );
};

export default Todos;
