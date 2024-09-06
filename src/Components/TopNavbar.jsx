import React from 'react';
import { Navbar, Nav, NavItem, NavLink, Button } from 'react-bootstrap';
import favImage from '../assets/favicon.png'
import { useEffect, useState } from "react";
const TopNavbar = () => {
    const [sticky, setSticky] = useState(false)


    useEffect(() => {
     window.addEventListener('scroll' , ()=>{
      window.scrollY >50 ? setSticky(true) : setSticky(false) 
     })
    }, [])
    
  return (
    <div className={` bg-transparent fixed-top  ${sticky ? 'dark-nav' : ''}`}>
    <Navbar   expand="lg"  className='container'>
      <Navbar.Brand href="#home">
        <img src={favImage} alt="Logo" width="40" height="40" className='rounded'  />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto px-5" variant="light">
          <NavItem>
            <NavLink href="#home" className='text-white'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about" className='text-white'>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact" className='text-white'>Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact" className='text-white'>Upload</NavLink>
          </NavItem>
        </Nav>
        <Button variant="primary" href="/PricingPlansPage">Join</Button>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default TopNavbar;