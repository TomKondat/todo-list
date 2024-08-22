import React from "react";
import "./styles.css";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import * as Icon from "react-bootstrap-icons";
import { useDeleteTodoMutation } from "../slices/todoApiSlice";

const DeleteModal = ({ show, handleClose, _id }) => {
  const [deleteTodo] = useDeleteTodoMutation();

  const handleDelete = async () => {
    await deleteTodo(_id);
  };
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
        <Button variant="danger" onClick={handleDelete}>
          Delete Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
