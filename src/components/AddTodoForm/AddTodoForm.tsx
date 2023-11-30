import React, { FC, useState, FormEvent } from "react";

interface IAddTodoFormProps {
  onAdd: (text: string) => void;
}

export const AddTodoForm: FC<IAddTodoFormProps> = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAdd(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        name="task"
        placeholder="add task..."
        onChange={(e) => setNewTodo(e.target.value)}
      />
    </form>
  );
};
