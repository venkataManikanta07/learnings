import React, { useRef } from "react";
import "./InputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleTodos: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleTodos }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleTodos(e);
          inputRef.current?.blur();
        }}
        className="input"
      >
        <input
          ref={inputRef}
          placeholder="Enter your todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="inputBox"
          type="text"
        />
        <button className="inputButton">Go</button>
      </form>
    </div>
  );
};

export default InputField;
