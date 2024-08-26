import React from "react";
import Accordion from "react-bootstrap/Accordion";
import InputGroup from "react-bootstrap/InputGroup";
import "./styles.css";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import * as Icon from "react-bootstrap-icons";
import EditModal from "./EditModal";
import { useSetIsCompletedMutation } from "../slices/todoApiSlice";
import { useSelector } from "react-redux";

const TaskItem = ({
  _id,
  title,
  description,
  expirationDate,
  priority,
  isCompleted,
}) => {
  const user = useSelector((state) => state.auth?.user);
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

  const [setIsCompleted] = useSetIsCompletedMutation();

  const handleComplete = async () => {
    await setIsCompleted(_id);
  };
  return (
    <>
      {user ? (
        <>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              onChange={handleComplete}
              checked={isCompleted}
              aria-label="Checkbox for following text input"
              className={
                priority === "Not Important"
                  ? "accordion-style-not-important"
                  : priority === "Important"
                  ? "accordion-style-important "
                  : "accordion-style-very-important "
              }
            />

            <Accordion
              defaultActiveKey="1"
              className={
                priority === "Not Important"
                  ? "accordion-style-not-important custom-accordion"
                  : priority === "Important"
                  ? "accordion-style-important custom-accordion"
                  : "accordion-style-very-important custom-accordion"
              }
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header
                  className={
                    isCompleted ? "completed-task" : "uncompleted-task"
                  }
                >
                  <strong
                    className={
                      priority === "Not Important"
                        ? "not-important"
                        : priority === "Important"
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
                    {priority === "Not Important"
                      ? "Not Important"
                      : priority === "Important"
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
            prevTitle={title}
            prevDescription={description}
            prevExpirationDate={expirationDate}
            prevPriority={priority}
          />
        </>
      ) : (
        <>
          <div>
            <h1>Empty</h1>
          </div>
        </>
      )}
    </>
  );
};

export default TaskItem;
