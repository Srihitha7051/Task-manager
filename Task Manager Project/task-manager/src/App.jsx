import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Dashboard from "./components/Dashboard";
import SearchBar from "./components/SearchBar";

function App() {

  const [filter, setFilter] = useState("All");

  const [tasks, setTasks] = useState(() => {
    const savedTasks =
      localStorage.getItem("tasks");
    return savedTasks
      ? JSON.parse(savedTasks)
      : [];
  });

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter(
        (task) => task.id !== id
      )
    );
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed:
                !task.completed,
            }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
  const matchesSearch = task.title
    .toLowerCase()
    .includes(search.toLowerCase());

  if (filter === "Completed") {
    return matchesSearch && task.completed;
  }

  if (filter === "Pending") {
    return matchesSearch && !task.completed;
  }

  return matchesSearch;
});

  const editTask = (id, newTitle) => {
  setTasks(
    tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            title: newTitle,
          }
        : task
    )
  );
};


  return (
    <>
      <Navbar />

      <div className="container">
        <Dashboard tasks={tasks} />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        

        <TaskForm addTask={addTask} />

        <TaskList
  tasks={filteredTasks}
  deleteTask={deleteTask}
  toggleComplete={toggleComplete}
  editTask={editTask}
/>
      </div>
    </>
  );
}

export default App;