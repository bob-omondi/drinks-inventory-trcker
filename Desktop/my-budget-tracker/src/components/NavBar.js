import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <>
      
      <Navbar class="navbar navbar-expand-lg navbar-dark bg-dark" >
        <Container>
          <Navbar/>
          <NavLink to="/about">BudgetFlow</NavLink>
          <NavLink to="/main"></NavLink>
          <NavLink to="#home"></NavLink>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;