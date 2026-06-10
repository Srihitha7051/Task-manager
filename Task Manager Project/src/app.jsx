import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </>
  );
}

export default App;