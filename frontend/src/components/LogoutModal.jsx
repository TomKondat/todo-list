import React from "react";
import "./styles.css";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import * as Icon from "react-bootstrap-icons";
import { useLogoutMutation } from "../slices/userApiSlice";
import { logoutUser } from "../slices/authSlice";
import { useDispatch } from "react-redux";

const LogouteModal = ({ showModal, handleCloseModal }) => {
  const [logout] = useLogoutMutation();

  const dispatch = useDispatch();

  const handleDelete = async () => {
    await logout();
    dispatch(logoutUser());
    handleCloseModal();
  };
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          Logout &nbsp;
          <Icon.Trash color="red" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to logout?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Logout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LogouteModal;
