import React from "react";
import Accordion from "react-bootstrap/Accordion";
import InputGroup from "react-bootstrap/InputGroup";
import "./styles.css";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import * as Icon from "react-bootstrap-icons";
import EditModal from "./EditModal";

const TaskItem = ({
  _id,
  title,
  description,
  expirationDate,
  priority,
  deleteTask,
  editTask,
}) => {
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

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Accordion defaultActiveKey="1" className="custom-accordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
              <p>
                <strong>Description: </strong>
                {description}
              </p>
              <p>
                <strong>Expiration Date: </strong>
                {new Date(expirationDate).toLocaleDateString()}
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button onClick={handleShow} variant="outline-danger">
          <Icon.Trash />
        </Button>
        <Button onClick={handleShowEditModal} variant="outline-secondary">
          <Icon.Pen />
        </Button>
      </InputGroup>

      <DeleteModal
        show={show}
        handleClose={handleClose}
        deleteTask={deleteTask}
        _id={_id}
      />

      <EditModal
        showEditModal={showEditModal}
        handleCloseEditModal={handleCloseEditModal}
        editTask={editTask}
        _id={_id}
      />
    </>
  );
};

export default TaskItem;
