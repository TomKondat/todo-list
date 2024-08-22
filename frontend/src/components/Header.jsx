import React from "react";
import {
  Form,
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

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-all" className="custom-tooltip">
                    Add New Todo
                  </Tooltip>
                }
              >
                <Button onClick={handleShow} variant="light">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/interface-solid-7/30/interface-solid-task-add-512.png"
                    width="35"
                    height="35"
                  />
                </Button>
              </OverlayTrigger>
              <Nav.Link as={Link} to="/login">
                <Button variant="light">Login</Button>
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                <Button variant="light">Register</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Aside show={show} handleClose={handleClose} />
    </>
  );
};

export default Header;
