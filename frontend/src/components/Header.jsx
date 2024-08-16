import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import Aside from "./Aside";

const Header = ({ handleAddTask }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Todo List</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="header-title">
        <h1>My Todos</h1>
      </div>
      <div className="adjust-center">
        <div className="custom-nav">
          <Button
            onClick={handleShow}
            variant="outline-primary"
            className="me-2"
          >
            Add new task
          </Button>
          <Button variant="outline-primary">Show Uncomplete</Button>
          <Button>Show Completed</Button>
        </div>
      </div>
      <Aside
        show={show}
        handleClose={handleClose}
        handleAddTask={handleAddTask}
      />
    </>
  );
};

export default Header;
