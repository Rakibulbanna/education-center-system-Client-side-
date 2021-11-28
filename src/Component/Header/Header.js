import Button from '@restart/ui/esm/Button';
import React from 'react';
import {  Nav, Navbar } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div >
            <Navbar className="menu-link w-100 p-3 m-10 b" collapseOnSelect expand="lg" id="navbar" >
                {/* <Container className="b"> */}
                                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

     <Nav className="me-auto b">
         
        <NavLink to="/" className="navbar-brand text-white logo-space logo-sp">Education center system</NavLink>
          <NavLink  exact to="/home" className="navbar-brand text-white link-sp ">Home</NavLink>
          <NavLink exact to="/about" className="navbar-brand text-white link-sp ">About</NavLink>
          <NavLink exact  to="/course" className="navbar-brand text-white link-sp ">Course/Services</NavLink>
          <NavLink exact to="/mentor" className="navbar-brand text-white link-sp ">Mentor</NavLink> 
       
        
     </Nav>


                    </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>
        </div>
    );
};

export default Header;