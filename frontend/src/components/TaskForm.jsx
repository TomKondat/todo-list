import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const TaskForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="titleId">
        <Form.Label>Task Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="descId">
        <Form.Label>Task Description</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="Enter desc.." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="dateId">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="Enter date" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="importanceId">
        <Form.Label>Importance</Form.Label>
        <Form.Control type="number" placeholder="Enter importance" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TaskForm;
