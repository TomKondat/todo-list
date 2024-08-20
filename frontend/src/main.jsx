import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store.js";
import { TodoProvider } from "./context/todos";

createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    <TodoProvider>
      <App />
    </TodoProvider>
  </ReduxProvider>
);
