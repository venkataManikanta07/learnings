import React from "react";
import { todoModel } from "../models/todoModel";
import { Trash2, Pencil, Check } from "lucide-react";
import "../App.css";

interface Props {
  todo: todoModel;
  todos: todoModel[];
  setTodos: React.Dispatch<React.SetStateAction<todoModel[]>>;
}
const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id != id);
    setTodos(newTodos);
  };

  const handleCheck = (id: number) => {
    
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, isDone : true}
      }
      return todo; 
    });
    setTodos(newTodos)
  };
  return (
    <div className="singleTodoContainer">
      {todo.isDone ? <h4 className="isDone">{todo.todo}</h4> : <h4>{todo.todo}</h4>}
      <div>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <Trash2 />
        </span>
        <span className="icon" onClick={() => handleCheck(todo.id)}>
          <Check />
        </span>
      </div>
    </div>
  );
};

export default SingleTodo;
