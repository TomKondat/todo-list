import React from "react";
import TaskItem from "./TaskItem";
import Button from "react-bootstrap/Button";
import TodoContext from "../context/todos";
import { useContext } from "react";

const TaskList = () => {
  const {
    tasks,
    filteredTasks,
    showUncompletedTasks,
    showCompletedTasks,
    showAllTasks,
  } = useContext(TodoContext);

  const displayTasks = filteredTasks.length > 0 ? filteredTasks : tasks;

  return (
    <>
      <div className="adjust-center">
        <div className="custom-nav">
          <Button onClick={showAllTasks} variant="outline-secondary">
            All Todos
          </Button>
          <Button onClick={showUncompletedTasks} variant="outline-primary">
            Uncomplete Todos
          </Button>
          <Button onClick={showCompletedTasks} variant="outline-primary">
            Completed Todos
          </Button>
        </div>
      </div>
      <div>
        {displayTasks?.map((task) => (
          <TaskItem
            key={task._id}
            _id={task._id}
            title={task.title}
            description={task.description}
            expirationDate={task.expirationDate}
            priority={task.priority}
            isCompleted={task.isCompleted}
          />
        ))}
      </div>
    </>
  );
};

export default TaskList;
