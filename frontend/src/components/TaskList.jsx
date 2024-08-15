import React from "react";
import TaskItem from "./TaskItem";
const TaskList = ({ tasks }) => {
  return (
    <div>
      <h1>My Todos</h1>
      {tasks?.map((task) => (
        <TaskItem
          key={task._id}
          title={task.title}
          description={task.description}
          expirationDate={task.expirationDate}
          priority={task.priority}
        />
      ))}
    </div>
  );
};

export default TaskList;
