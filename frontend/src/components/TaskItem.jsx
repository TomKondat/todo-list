import React from "react";
import Accordion from "react-bootstrap/Accordion";
import InputGroup from "react-bootstrap/InputGroup";
import "./styles.css";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import * as Icon from "react-bootstrap-icons";
import EditModal from "./EditModal";
import TodoContext from "../context/todos";
import { useContext } from "react";

const TaskItem = ({
  _id,
  title,
  description,
  expirationDate,
  priority,
  isCompleted,
}) => {
  const { addInline } = useContext(TodoContext);
  //delete modal states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //-----------------------------------

  //edit modal states
  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = () => setShowEditModal(true);
  //-----------------------------------
  const handleComplete = () => {
    addInline(_id);
  };
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox
          onChange={handleComplete}
          checked={isCompleted}
          aria-label="Checkbox for following text input"
          className="accordion-style "
        />
        <Accordion
          defaultActiveKey="1"
          className="custom-accordion accordion-style"
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header
              className={isCompleted ? "completed-task" : "uncompleted-task"}
            >
              <strong
                className={
                  priority === "1"
                    ? "not-important"
                    : priority === "2"
                    ? "important"
                    : "very-important"
                }
              >
                {title}
              </strong>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <strong>Priority: </strong>
                {priority === "1"
                  ? "Not Important"
                  : priority === "2"
                  ? "Important"
                  : "Very Important"}
              </p>
              <p>
                <strong>Expiration Date: </strong>
                {new Date(expirationDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Description: </strong>
                {description}
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button onClick={handleShow} variant="outline-danger">
          <Icon.Trash />
        </Button>
        <Button onClick={handleShowEditModal} variant="outline-secondary">
          <Icon.Pencil />
        </Button>
      </InputGroup>
      <DeleteModal show={show} handleClose={handleClose} _id={_id} />

      <EditModal
        showEditModal={showEditModal}
        handleCloseEditModal={handleCloseEditModal}
        _id={_id}
      />
    </>
  );
};

export default TaskItem;
