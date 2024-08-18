import React from "react";
import TaskItem from "./TaskItem";
import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import TodoContext from "../context/todos";
import { useContext } from "react";
import * as Icon from "react-bootstrap-icons";
const TaskList = () => {
  const {
    filteredTasks,
    showUncompletedTasks,
    showCompletedTasks,
    showAllTasks,
    showImportantTasks,
    showUnimportantTasks,
  } = useContext(TodoContext);

  return (
    <>
      <div className="adjust-center">
        <div className="custom-nav">
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="tooltip-all" className="custom-tooltip">
                Show All Todos
              </Tooltip>
            }
          >
            <Button
              onClick={showAllTasks}
              variant="outline-secondary"
              className="me-5"
            >
              <Icon.ListUl width="35" height="30" />
            </Button>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="tooltip-all" className="custom-tooltip">
                Sort Most Important
              </Tooltip>
            }
          >
            <Button onClick={showImportantTasks} variant="outline-danger">
              <Icon.SortDown width="35" height="30" />
            </Button>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="tooltip-all" className="custom-tooltip">
                Sort Least Important
              </Tooltip>
            }
          >
            <Button onClick={showUnimportantTasks} variant="outline-success">
              <Icon.SortUpAlt width="35" height="30" />
            </Button>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="tooltip-all" className="custom-tooltip">
                Show Uncompleted Todos
              </Tooltip>
            }
          >
            <Button onClick={showUncompletedTasks} variant="outline-primary">
              <Icon.Square width="35" height="30" />
            </Button>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="tooltip-all" className="custom-tooltip">
                Show Completed Todos
              </Tooltip>
            }
          >
            <Button onClick={showCompletedTasks} variant="outline-primary">
              <Icon.CheckSquare width="35" height="30" />
            </Button>
          </OverlayTrigger>
        </div>
      </div>
      <div>
        {filteredTasks?.map((task) => (
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
