import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div>
      <div className="header-title">
        <h1>My Todos</h1>
      </div>
      {tasks?.map((task) => (
        <TaskItem
          key={task._id}
          _id={task._id}
          title={task.title}
          description={task.description}
          expirationDate={task.expirationDate}
          priority={task.priority}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
