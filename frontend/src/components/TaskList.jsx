import React from "react";
import TaskItem from "./TaskItem";
import Button from "react-bootstrap/Button";

const TaskList = ({
  tasks,
  deleteTask,
  editTask,
  addInline,
  showUncompletedTasks,
  showCompletedTasks,
  showAllTasks,
}) => {
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
        {tasks?.map((task) => (
          <TaskItem
            key={task._id}
            _id={task._id}
            title={task.title}
            description={task.description}
            expirationDate={task.expirationDate}
            priority={task.priority}
            isCompleted={task.isCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
            addInline={addInline}
          />
        ))}
      </div>
    </>
  );
};

export default TaskList;
