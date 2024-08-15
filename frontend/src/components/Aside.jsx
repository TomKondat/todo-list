import Offcanvas from "react-bootstrap/Offcanvas";
import TaskForm from "./TaskForm";

const Aside = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Add New Task</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <TaskForm />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Aside;
