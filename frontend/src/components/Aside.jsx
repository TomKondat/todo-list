import Offcanvas from "react-bootstrap/Offcanvas";
import TaskForm from "./TaskForm";

const Aside = ({ show, handleClose, handleAddTask }) => {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Add New Task</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <TaskForm handleAddTask={handleAddTask} />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Aside;
