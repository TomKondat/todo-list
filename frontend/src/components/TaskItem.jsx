import React from "react";
import Accordion from "react-bootstrap/Accordion";
import InputGroup from "react-bootstrap/InputGroup";
import "./styles.css";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

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
              <p>
                <strong>Description: </strong>
                {description}
              </p>
              <p>
                <strong>Expiration Date: </strong>
                {expirationDate}
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button onClick={handleShow} variant="light">
          ❌
        </Button>
        <Button onClick={handleShow} variant="outline-info">
          Edit
        </Button>
      </InputGroup>

      <DeleteModal
        show={show}
        handleClose={handleClose}
        deleteTask={deleteTask}
        _id={_id}
      />
    </>
  );
};

export default TaskItem;
