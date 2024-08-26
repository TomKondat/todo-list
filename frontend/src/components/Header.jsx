import React, { useEffect } from "react";
import {
  Tooltip,
  OverlayTrigger,
  Nav,
  Navbar,
  Button,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import Aside from "./Aside";
import LogouteModal from "./LogoutModal";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let username = userInfo ? userInfo.username : null;

  if (username) {
    username = username.replace(/^"|"$/g, "");
  }

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4697/4697260.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav.Link as={Link} to="/">
            <Navbar.Brand>Todo List</Navbar.Brand>
          </Nav.Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>

            <Nav>
              {!username ? (
                <>
                  <Nav.Link as={Link} to="/register">
                    <Button variant="light">Register</Button>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login">
                    <Button variant="light">Login</Button>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip id="tooltip-all" className="custom-tooltip">
                        Add New Todo
                      </Tooltip>
                    }
                  >
                    <Nav.Link>
                      <Button onClick={handleShow} variant="light">
                        <img
                          src="https://cdn2.iconfinder.com/data/icons/interface-solid-7/30/interface-solid-task-add-512.png"
                          width="30"
                          height="30"
                        />
                      </Button>
                    </Nav.Link>
                  </OverlayTrigger>
                  <p className="username"> {username}</p>
                  <Nav.Link>
                    <Button onClick={handleShowModal} variant="outline-danger">
                      Logout
                    </Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <LogouteModal showModal={showModal} handleCloseModal={handleCloseModal} />
      <Aside show={show} handleClose={handleClose} />
    </>
  );
};

export default Header;
