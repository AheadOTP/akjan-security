import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import '../styles/BsNavbar.css';

function BsNavbar() {
  return (
    <Navbar collapseOnSelect fixedTop className="BsNavBar">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="">React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <Link to='/about'>About</Link>
          <NavItem eventKey={1} href="">О нас</NavItem>
          <NavItem eventKey={2} href="">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="">Link Right</NavItem>
          <NavItem eventKey={2} href="">Link Right</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BsNavbar;
