import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import auth from "../../js/auth/auth";
import "../../css/theheader.css";

export default function TheHeader() {
  const user = useSelector((state) => state.userReducer.user);
  // const dispatch = useDispatch();

  const logout = () => {
    auth.logout();
  };

  return (
    <header>
      <Navbar bg="light" variant="light" expand="md">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <strong style={{ fontSize: "27px" }}>
              <span class="color-react">R</span>
              <span class="color-dodgerblue">Novel</span>
            </strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={"/"}>
              <Nav.Link as={NavLink} to="/" activeClassName="active">
                Trang chủ
              </Nav.Link>
              <Nav.Link as={NavLink} to="/About" activeClassName="active">
                About
              </Nav.Link>
              {user ? (
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              ) : (
                <Nav.Link as={NavLink} to="/Login" activeClassName="active">
                  Login
                </Nav.Link>
              )}
              {/* <Nav.Link as={Link} to="/Login" >Login</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
