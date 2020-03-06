import React, { Component } from "react";
import {Nav, Navbar} from 'react-bootstrap';

class Header extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <React.Fragment>
          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Projects</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
          </Navbar>
          <br />
      </React.Fragment>
    );
  }
}

export default Header;
