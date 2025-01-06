import { useEffect, useState } from "react";
import "./App.css";
import InputField from "./component/InputField";
import { todoModel } from "./models/todoModel";
import TodoList from "./component/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<todoModel[]>([]);

  const handleTodos = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos((prevTodos) => {
        const updatedTodos = [
          ...prevTodos,
          { id: Date.now(), todo, isDone: false },
        ];
        return updatedTodos;
      });
    }
  };
  useEffect(() => {
    console.log("Todos ", todos)
  }, [todos])
  return (
    <div className="app">
      <h1>Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleTodos={handleTodos} />
      <TodoList todos = {todos} setTodos = {setTodos}/>
    </div>
  );
};

export default App;
