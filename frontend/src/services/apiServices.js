import axios from "axios";

const editTodoById = async (
  id,
  title,
  priority,
  expirationDate,
  description
) => {
  const config = {
    data: { id, title, priority, expirationDate, description },
    withCredentials: true,
    method: "post",
  };

  const url = `/api/api/todo/${id}`;
  try {
    const res = await axios.patch(url, config);
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
};

const createTodo = async (title, priority, expirationDate, description) => {
  const config = {
    data: { title, priority, expirationDate, description },
    withCredentials: true,
    method: "post",
  };

  const url = "/api/todo";
  try {
    const res = await axios.post(url, config);
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
};

const getTodos = async () => {
  const url = "/http://localhost:8000/api/todo";
  try {
    const res = await axios.get(url);
    console.log(res.data);
    return res;
  } catch (err) {
    console.log(err.message);
  }
};
export { editTodoById, createTodo, getTodos };
