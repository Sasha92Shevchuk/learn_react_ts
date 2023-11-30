import React, { FC } from "react";
import { Task } from "../../App";
interface ITodoItemProps {
  todo: Task; //{ id: number; text: string }; те ж саме
  onDelete: (id: number) => void;
}

export const TodoItem: FC<ITodoItemProps> = ({ todo, onDelete }) => {
  return (
    <li>
      <p>{todo.text}</p>
      <button onClick={() => onDelete(todo.id)}>delete</button>
    </li>
  );
};
