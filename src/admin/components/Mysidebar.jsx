import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import logo from '../assets/images/logo.png'
function Mysidebar() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const [menuExpanded, setMenuExpanded] = useState(false);

  const toggleMenu = () => {
    setMenuExpanded(!menuExpanded);
  };

  return (
    <>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="sidebar-nav" onClick={toggleNavbar} />
        <Navbar.Collapse id="sidebar-nav" className={`${expanded ? 'show' : ''}`}>
          <Nav className="flex-column w-100">
            <Nav.Link as={Link} to='/adminhome'><img src={logo} alt="not-available"/></Nav.Link>
            <Nav.Link as={Link} to="/adminhome">Admin Home</Nav.Link>
            {/* <Nav.Link onClick={toggleMenu} className="d-flex align-items-center border">
              <span className="ml-auto">
                Admin Menu
                {menuExpanded ? <FaChevronDown /> : <FaChevronRight />}
              </span>
            </Nav.Link>
            {menuExpanded && (
              <Nav className="ml-3 flex-column">
                <Nav.Link as={Link} to="/adminmenu/burger">Burger</Nav.Link>
                <Nav.Link as={Link} to="/adminmenu/pizza">Pizza</Nav.Link>
                <Nav.Link as={Link} to="/adminmenu/desi">Desi</Nav.Link>
              </Nav>
            )} */}
            <Nav.Link as={Link} to="/adminmenu">Admin Menu</Nav.Link>
            <Nav.Link as={Link} to="/admindeal">Admin Deal</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/adminhome" className="mx-auto d-lg-none">Admin</Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Mysidebar;
