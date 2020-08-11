import React from 'react';
import './Header.scss';
import Navbar from './Navbar/Navbar.jsx';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navbar></Navbar>
      </header>
    )
  }
}

export default Header;
