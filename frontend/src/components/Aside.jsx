import Offcanvas from "react-bootstrap/Offcanvas";
import TaskForm from "./TaskForm";
import * as Icon from "react-bootstrap-icons";

const Aside = ({ show, handleClose, handleAddTask }) => {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          Add New Task &nbsp;
          <Icon.FileEarmarkPlus color="blue" />
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <TaskForm handleAddTask={handleAddTask} />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Aside;
