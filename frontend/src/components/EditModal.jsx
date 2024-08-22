import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useEditTodoMutation } from "../slices/todoApiSlice";
import * as Icon from "react-bootstrap-icons";
import { format } from "date-fns";

const EditModal = ({
  showEditModal,
  handleCloseEditModal,
  _id,
  prevTitle,
  prevDescription,
  prevExpirationDate,
  prevPriority,
}) => {
  const [title, setTitle] = useState(prevTitle);
  const [description, setDescription] = useState(prevDescription);
  const [expirationDate, setExpirationDate] = useState(
    format(new Date(prevExpirationDate), "yyyy-MM-dd")
  );
  const [priority, setPriority] = useState(prevPriority);

  useEffect(() => {
    setTitle(prevTitle);
    setDescription(prevDescription);
    setExpirationDate(format(new Date(prevExpirationDate), "yyyy-MM-dd"));
    setPriority(prevPriority);
  }, [prevTitle, prevDescription, prevExpirationDate, prevPriority]);

  const [editTodo] = useEditTodoMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editTodo({
        data: {
          title,
          description,
          expirationDate,
          priority,
        },
        todoId: _id,
      }).unwrap();
    } catch (err) {
      console.error("Failed to edit the todo: ", err);
    }
  };
  return (
    <Modal show={showEditModal} onHide={handleCloseEditModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          Edit &nbsp;
          <Icon.PencilSquare color="green" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* form */}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="titleId">
            <Form.Label>Task Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="descId">
            <Form.Label>Task Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="expirationDateId">
            <Form.Label>Expiration Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter date"
              required
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="priorityId">
            <Form.Select
              aria-label="Default select example"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="Not Important">Not Important</option>
              <option value="Important">Important</option>
              <option value="Very Important">Very Important</option>
            </Form.Select>
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEditModal}>
              Close
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={handleCloseEditModal}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
