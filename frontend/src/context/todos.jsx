import { createContext, useState, useEffect } from "react";

const TodoContext = createContext();

const Provider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  const addTask = (e) => {
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

    const updatedTasks = [...tasks, newTask];
    const sorted = sortByExpirationDate(updatedTasks);
    setTasks(sorted);
    localStorage.setItem("tasks", JSON.stringify(sorted));
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
    const updatedTasks = tasks.map((task) => {
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
    });
    const sorted = sortByExpirationDate(updatedTasks);
    setTasks(sorted);
    localStorage.setItem("tasks", JSON.stringify(sorted));
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

  const showImportantTasks = () => {
    tasks.sort((a, b) => b.priority - a.priority);
    setFilteredTasks([...tasks]);
  };

  const showUnimportantTasks = () => {
    tasks.sort((a, b) => a.priority - b.priority);
    setFilteredTasks([...tasks]);
  };

  const showAllTasks = () => {
    const sorted = sortByExpirationDate(tasks);
    setFilteredTasks(sorted);
  };

  const sortByExpirationDate = (tasks) => {
    return tasks.sort((a, b) => {
      return new Date(a.expirationDate) - new Date(b.expirationDate);
    });
  };

  const getTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      setTasks(tasks);
    }
  };

  const sharedVaribles = {
    tasks,
    filteredTasks,
    addTask,
    getTasks,
    editTask,
    addInline,
    showUncompletedTasks,
    showCompletedTasks,
    showAllTasks,
    deleteTask,
    showImportantTasks,
    showUnimportantTasks,
  };
  return (
    <TodoContext.Provider value={sharedVaribles}>
      {children}
    </TodoContext.Provider>
  );
};
export { Provider };
export default TodoContext;
