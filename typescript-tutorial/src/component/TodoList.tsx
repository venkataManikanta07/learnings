import React from "react";
import { todoModel } from "../models/todoModel";
import SingleTodo from "./SingleTodo";
import "../App.css"

interface Props {
  todos: todoModel[];
  setTodos: React.Dispatch<React.SetStateAction<todoModel[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="todoListContainer">
      {todos.map((todo) => (
        <SingleTodo key={todo.id} todo = {todo} setTodos = {setTodos} todos = {todos} />
      ))}
    </div>
  );
};

export default TodoList;
