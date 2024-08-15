import React from "react";
import Accordion from "react-bootstrap/Accordion";
import InputGroup from "react-bootstrap/InputGroup";
import "./styles.css";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const TaskItem = ({
  _id,
  title,
  description,
  expirationDate,
  priority,
  deleteTask,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Accordion defaultActiveKey="1" className="custom-accordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
              <p>{description}</p>
              <p>{expirationDate}</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button onClick={handleShow} variant="light">
          ❌
        </Button>
      </InputGroup>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
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
    </>
  );
};

export default TaskItem;
