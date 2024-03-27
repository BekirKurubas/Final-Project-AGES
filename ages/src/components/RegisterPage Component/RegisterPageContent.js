import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function RegisterPageContent() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Username:", username);
    console.log("Submitted Email:", email);
    console.log("Submitted Password:", password);
    console.log("Submitted Password Again:", passwordAgain);
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#FF0000",
        height: "700px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "80px",
        marginBottom: "80px",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "70px",
          }}
        >
          <h1>
            <b style={{ fontSize: "70px", color: "white" }}>AGES</b>
          </h1>
        </div>

        <Container style={{ width: "400px" }}>
          <Form onSubmit={handleSubmit} style={{ color: "white" }}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <br />

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <br />

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <br />

            <Form.Group controlId="formBasicPasswordAgain">
              <Form.Label>Password Again</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password again"
                value={passwordAgain}
                onChange={(e) => setPasswordAgain(e.target.value)}
              />
            </Form.Group>
            <br />

            <Button
              variant="primary"
              type="submit"
              style={{
                marginTop: "10px",
                backgroundColor: "white",
                width: "100%",
                color: "#FF0000",
              }}
            >
              <b>Register</b>
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default RegisterPageContent;
