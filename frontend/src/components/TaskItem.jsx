import React from "react";
import Accordion from "react-bootstrap/Accordion";
import InputGroup from "react-bootstrap/InputGroup";
import "./styles.css";
const TaskItem = ({ title, description, expirationDate, priority }) => {
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
      </InputGroup>
    </>
  );
};

export default TaskItem;
