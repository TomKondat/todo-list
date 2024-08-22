import React from "react";
import TaskItem from "./TaskItem";
import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useGetTodosQuery } from "./../slices/todoApiSlice";

const TaskList = () => {
  const { data, isLoading, error } = useGetTodosQuery();
  const todosArr = data?.todos;

  return (
    <>
      <div className="header-title">
        <h1>My Todos</h1>
      </div>
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
            <Button variant="outline-secondary" className="me-5">
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
            <Button variant="outline-danger">
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
            <Button variant="outline-success">
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
            <Button variant="outline-primary">
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
            <Button variant="outline-primary">
              <Icon.CheckSquare width="35" height="30" />
            </Button>
          </OverlayTrigger>
        </div>
      </div>
      <div>
        {todosArr?.map((task) => (
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
