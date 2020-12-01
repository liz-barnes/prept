import React, { StrictMode } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';

export default function NavBar() {
  return (
      <StrictMode>
      <Navbar expand='md' className='navbar justify-content-between'>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <Link className='nav-bar-home' to='/'>Home</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-bar-flash' to='/flash-card'>Flash Cards</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-bar-my-cards' to='/my-cards'>My Cards</Link>
            </NavItem>
          </Nav>
          </Navbar>
    </StrictMode>
  );
}
