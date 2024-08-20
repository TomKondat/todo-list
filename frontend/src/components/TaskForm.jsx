import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import TodoContext from "../context/todos";

const TaskForm = () => {
  const { addTask } = useContext(TodoContext);

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
          <option value="Not Important">Not Important</option>
          <option value="Important">Important</option>
          <option value="Very Important">Very Important</option>
        </Form.Select>
      </Form.Group>

      <Button onClick={addTask} variant="primary" type="submit">
        Add Task
      </Button>
    </Form>
  );
};

export default TaskForm;
