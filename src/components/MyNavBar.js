import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import icon from "../media/logo.svg";

export default function MyNavBar() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <img
            alt=""
            src={icon}
            width="24"
            height="24"
            className="d-inline-block align-top"
          />{" "}
          ExamCQ
          <Nav className="ms-auto">
            <Nav.Link disabled className="font-link">
              Dashboard
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
