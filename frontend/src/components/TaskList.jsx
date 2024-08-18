import React from "react";
import TaskItem from "./TaskItem";
import Button from "react-bootstrap/Button";
import TodoContext from "../context/todos";
import { useContext } from "react";
import * as Icon from "react-bootstrap-icons";
const TaskList = () => {
  const {
    tasks,
    filteredTasks,
    showUncompletedTasks,
    showCompletedTasks,
    showAllTasks,
    showImportantTasks,
    showUnimportantTasks,
  } = useContext(TodoContext);

  const displayTasks = filteredTasks.length > 0 ? filteredTasks : tasks;

  return (
    <>
      <div className="adjust-center">
        <div className="custom-nav">
          <Button
            onClick={showAllTasks}
            variant="outline-secondary"
            className="me-5"
          >
            All Todos
          </Button>
          <Button onClick={showImportantTasks} variant="outline-danger">
            <Icon.SortDown width="35" height="30" />
          </Button>
          <Button onClick={showUnimportantTasks} variant="outline-success">
            <Icon.SortUpAlt width="35" height="30" />
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
