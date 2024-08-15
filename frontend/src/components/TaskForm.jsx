import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const TaskForm = ({ handleAddTask }) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="titleId">
        <Form.Label>Task Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="descId">
        <Form.Label>Task Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Enter description"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="expirationDateId">
        <Form.Label>Expiration Date</Form.Label>
        <Form.Control type="date" placeholder="Enter date" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="priorityId">
        <Form.Select aria-label="Default select example">
          <option>Choose Priority</option>
          <option value="1">Very Important</option>
          <option value="2">Important</option>
          <option value="3">Not Important</option>
        </Form.Select>
      </Form.Group>

      <Button onClick={handleAddTask} variant="primary" type="submit">
        Add Task
      </Button>
    </Form>
  );
};

export default TaskForm;
