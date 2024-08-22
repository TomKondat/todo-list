// import { createContext, useState, useEffect } from "react";
// import { useGetTodosQuery, useAddTodoMutation } from "./../slices/todoApiSlice";

// const TodoContext = createContext();

// const TodoProvider = ({ children }) => {
//   const { data, isLoading, error } = useGetTodosQuery();
//   const todosArr = data?.todos;

//   const [addTo] = useAddTodoMutation();
//   console.log(`addTo: ${addTo}`);

//   const [tasks, setTasks] = useState([]);
//   useEffect(() => {
//     setTasks(todosArr);
//   }, [todosArr]);

//   const addTask = async (e) => {
//     e.preventDefault();
//     const title = e.target.form[0].value;
//     const description = e.target.form[1].value;
//     const expirationDate = e.target.form[2].value;
//     const priority = e.target.form[3].value;
//     const newTask = {
//       title,
//       description,
//       expirationDate,
//       priority,
//       isCompleted: false,
//     };

//     try {
//       const { data: addedTask } = await addTo(newTask);
//       const updatedTasks = [...tasks, addedTask];
//       setTasks(updatedTasks);
//     } catch (error) {
//       console.error("Failed to add task:", error);
//     }
//   };
//   const deleteTask = (e) => {
//     const id = e.target.value;
//     const updatedTasks = tasks.filter((task) => task._id !== parseInt(id));
//     setTasks(updatedTasks);
//   };

//   const editTask = (e) => {
//     e.preventDefault();
//     const _id = e.target.value;
//     const title = e.target.form[0].value;
//     const description = e.target.form[1].value;
//     const expirationDate = e.target.form[2].value;
//     const priority = e.target.form[3].value;
//     const updatedTasks = tasks.map((task) => {
//       if (task._id === parseInt(_id)) {
//         return {
//           ...task,
//           title,
//           description,
//           expirationDate,
//           priority,
//         };
//       }
//       return task;
//     });
//     setTasks(updatedTasks);
//   };

//   const addInline = (id) => {
//     const updatedTasks = tasks.map((task) =>
//       task._id === id ? { ...task, isCompleted: !task.isCompleted } : task
//     );
//     setTasks(updatedTasks);
//   };

//   const sharedVaribles = {
//     tasks,
//     addTask,
//     editTask,
//     addInline,
//     deleteTask,
//   };
//   return (
//     <TodoContext.Provider value={sharedVaribles}>
//       {children}
//     </TodoContext.Provider>
//   );
// };
// export { TodoProvider };
// export default TodoContext;
