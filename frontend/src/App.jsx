import Header from "./components/Header";
import { useEffect, useContext } from "react";
import TaskList from "./components/TaskList";
import TodoContext from "./context/todos";

function App() {
  const { getTasks } = useContext(TodoContext);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <TaskList />
      </div>
    </>
  );
}

export default App;
