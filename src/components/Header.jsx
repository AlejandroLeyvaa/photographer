import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';

const Header = ({ children, cls = null }) => {
  return (
    <header className={('header', cls)}>
      <Link to='/about'>
        <span>About</span>
      </Link>
      <Hero />
    </header>
  );
};

export default Header;
