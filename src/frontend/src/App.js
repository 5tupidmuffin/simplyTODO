import { useEffect, useState } from "react";
import AddTaskBar from "./components/AddTaskBar";
import TaskList from "./components/TaskList";
import { fetchTasks } from "./api";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loadingTasks, setLoadingTasks] = useState(true);
  const [isError, setIsError] = useState(false);
  const [dummy, setDummy] = useState(true); // to trigger rerender from child components

  const forceUpdate = () => {
    setDummy((prev) => (prev ? false : true));
  };
  useEffect(() => {}, [dummy]); // force rerender

  useEffect(() => {
    // fetch the list
    fetchTasks()
      .then((res) => {
        setTasks(res);
        setLoadingTasks(false);
      })
      .catch((error) => {
        console.log(error);
        setIsError(error);
      });
  }, []); // on initial render only

  useEffect(() => {
    fetchTasks().then((res) => setTasks(res));
  }, [dummy]);

  if (isError) {
    return <h1 className="error">{isError.message}</h1>;
  }

  if (loadingTasks) {
    return <h1 className="loading">Loading Tasks....</h1>;
  }

  return (
    <div className="App">
      <AddTaskBar forceUpdate={forceUpdate} />
      <TaskList tasks={tasks} forceUpdate={forceUpdate} />
    </div>
  );
};

export default App;
