import Header from "./components/Header";
import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
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
      isCompleted: false,
    };

    const updatedTasks = [...tasks, newTask].sort((a, b) => {
      return new Date(a.expirationDate) - new Date(b.expirationDate);
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (e) => {
    const id = e.target.value;
    const updatedTasks = tasks.filter((task) => task._id !== parseInt(id));
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const editTask = (e) => {
    e.preventDefault();
    const _id = e.target.value;
    const title = e.target.form[0].value;
    const description = e.target.form[1].value;
    const expirationDate = e.target.form[2].value;
    const priority = e.target.form[3].value;
    const updatedTasks = tasks
      .map((task) => {
        if (task._id === parseInt(_id)) {
          return {
            ...task,
            title,
            description,
            expirationDate,
            priority,
          };
        }
        return task;
      })
      .sort((a, b) => {
        return new Date(a.expirationDate) - new Date(b.expirationDate);
      });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const addInline = (id) => {
    const updatedTasks = tasks.map((task) =>
      task._id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const showUncompletedTasks = () => {
    const uncompletedTasks = tasks.filter((task) => !task.isCompleted);
    setFilteredTasks(uncompletedTasks);
  };

  const showCompletedTasks = () => {
    const completedTasks = tasks.filter((task) => task.isCompleted);
    setFilteredTasks(completedTasks);
  };

  const showAllTasks = () => {
    setFilteredTasks([]);
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
        <TaskList
          tasks={filteredTasks.length > 0 ? filteredTasks : tasks}
          deleteTask={deleteTask}
          editTask={editTask}
          addInline={addInline}
          showUncompletedTasks={showUncompletedTasks}
          showCompletedTasks={showCompletedTasks}
          showAllTasks={showAllTasks}
        />
      </div>
    </>
  );
}

export default App;
