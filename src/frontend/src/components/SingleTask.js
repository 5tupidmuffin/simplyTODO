import { deleteTask, updateTask } from "../api";
import { useState } from "react";

import "./SingleTask.css";

const SingleTask = ({ task, forceUpdate, updateList }) => {
  const [todo, setTodo] = useState(task.todo);
  const [isVisible, setIsVisible] = useState("hidden");

  const removeTask = (id) => {
    deleteTask(id).then((res) => {
      forceUpdate();
    });
  };

  const editTask = (id) => {
    if (todo) {
      updateTask(id, todo).then((res) => {
        forceUpdate();
      });
    }
  };

  return (
    <li>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        onBlur={() => editTask(task._id)}
      />
      <button onClick={() => removeTask(task._id)}>Delete</button>
    </li>
  );
};

export default SingleTask;
