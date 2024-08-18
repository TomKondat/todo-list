import React from "react";
import "./styles.css";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import * as Icon from "react-bootstrap-icons";
import { useContext } from "react";
import TodoContext from "../context/todos";

const DeleteModal = ({ show, handleClose, _id }) => {
  const { deleteTask } = useContext(TodoContext);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Delete &nbsp;
          <Icon.Trash color="red" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={deleteTask} value={_id}>
          Delete Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
