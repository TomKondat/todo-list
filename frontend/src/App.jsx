import Header from "./components/Header";
import { useState, useEffect } from "react";
function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    const title = e.target.form[0].value;
    const description = e.target.form[1].value;
    const expirationDate = e.target.form[2].value;
    const priority = e.target.form[3].value;
    const newTask = {
      title,
      description,
      expirationDate,
      priority,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      setTasks(tasks);
    } else {
      alert("No tasks found in local storage");
    }
  }, []);

  return (
    <>
      <Header handleAddTask={handleAddTask} />
      <div className="container"></div>
    </>
  );
}

export default App;
