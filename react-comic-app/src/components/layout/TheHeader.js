import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  Link,
} from "react-router-dom";

import auth from "../../js/auth/auth";

export default function TheHeader(props) {

  const user = useSelector(state => state.userReducer.user);
  // const dispatch = useDispatch();

  const logout = () => {
    auth.logout();
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand to="/">Comic-React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/About" >About</Nav.Link>
            {
              user ? (<Nav.Link onClick={logout} >Logout</Nav.Link>) : (<Nav.Link as={Link} to="/Login" >Login</Nav.Link>)
            }
            {/* <Nav.Link as={Link} to="/Login" >Login</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}