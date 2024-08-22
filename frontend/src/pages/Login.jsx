import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useLoginMutation } from "../slices/userApiSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({
        email,
        password,
      }).unwrap();
      setSuccessMessage("Login successful!");
      setErrorMessage("");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.error("Failed to login: ", err);
      setErrorMessage("Failed to login");
      setSuccessMessage("");
    }
  };

  return (
    <>
      <h1 className="header-title">Login</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>

        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};

export default Login;
