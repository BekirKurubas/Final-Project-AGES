import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function LoginPageContent() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Username:", username);
    console.log("Submitted Email:", email);
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#FF0000",
          height: "550px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "140px",
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
              <b
                style={{
                  fontSize: "70px",
                  color: "white",
                }}
              >
                AGES
              </b>
            </h1>
          </div>

          <Container
            style={{
              width: "400px",
              marginTop: "0px",
              marginBottom: "150px",
            }}
          >
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

              <Form.Group
                controlId="formBasicEmail"
                style={{ marginBottom: "30px", color: "white" }}
              >
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

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
                <b>Login</b>
              </Button>
            </Form>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LoginPageContent;
