import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import * as Icon from "react-bootstrap-icons";

const EditModal = ({ showEditModal, handleCloseEditModal, _id }) => {
  const handleSaveChanges = (e) => {
    handleCloseEditModal();
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
              <option value="1">Not Important</option>
              <option value="2">Important</option>
              <option value="3">Very Important</option>
            </Form.Select>
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEditModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSaveChanges} value={_id}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
