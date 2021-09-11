import { useState } from "react";
import { addTask } from "../api";
import "./AddTaskBar.css";

const AddTaskBar = ({ forceUpdate }) => {
  const [newTask, setNewTask] = useState("");

  //     useEffect(() => {
  //
  //     }, [updateFunc])

  const addnewTask = (e) => {
    e.preventDefault();
    if (newTask) {
      addTask(newTask).then((res) => {
        setNewTask("");
        forceUpdate();
      });
    }
  };

  return (
    <form className="AddTaskBar">
      <h1 className="title">simplyTODO</h1>
      <br />

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addnewTask}>ADD TASK</button>
    </form>
  );
};

export default AddTaskBar;
