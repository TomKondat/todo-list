import Header from "./components/Header";
import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    const _id = Math.floor(Math.random() * 10000) + 1;
    const title = e.target.form[0].value;
    const description = e.target.form[1].value;
    const expirationDate = e.target.form[2].value;
    const priority = e.target.form[3].value;
    const newTask = {
      _id,
      title,
      description,
      expirationDate,
      priority,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (e) => {
    const id = e.target.value;
    const updatedTasks = tasks.filter((task) => task._id !== parseInt(id));
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      setTasks(tasks);
    }
  }, []);

  return (
    <>
      <Header handleAddTask={handleAddTask} />
      <div className="container">
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </>
  );
}

export default App;
