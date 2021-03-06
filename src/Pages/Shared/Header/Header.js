import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="blogs">
                Blogs
              </Nav.Link>
              {user && (
                <>
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to="manage_inventory">
                      Manage Inventories
                    </Nav.Link>
                    <Nav.Link as={Link} to="add_item">
                      Add Item
                    </Nav.Link>
                  </Nav>
                </>
              )}
              {user ? (
                <button onClick={handleSignOut}>SignOut</button>
              ) : (
                <Nav.Link eventKey={2} as={Link} to="login">
                  Login
                </Nav.Link>
              )}
              <Nav.Link as={Link} to="about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
