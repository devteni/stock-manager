import { useState } from 'react';
import { Link } from 'react-router-dom';

const Links = [
  {
    text: 'home',
    link: '/',
  },
  {
    text: 'about',
    link: '/about',
  },
  {
    text: 'careers',
    link: '/careers',
  },
  {
    text: 'developers',
    link: '/',
  },
];

const authLinks = [
  {
    text: 'login',
    link: '/login',
  },
  {
    text: 'signup',
    link: '/signup',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    const navlinks = document.getElementsByClassName('nav-links')[0];
    navlinks.classList.toggle('hidden');
    setIsOpen(!isOpen);
  };
  return (
    <nav className="nav">
      <p className="logo" style={{ fontStyle: 'italic', color: 'black' }}>
        Stock manager
      </p>

      <ul className="hidden nav-links" id="nav-links">
        {Links.map((link, i) => {
          return (
            <li key={i} className="nav-link">
              <Link to={link.link}>{link.text}</Link>
            </li>
          );
        })}

        <ul className="" id="authLinks">
          {authLinks.map((link, i) => {
            return (
              <li key={i} className="nav-link">
                <Link to={link.link}>{link.text}</Link>
              </li>
            );
          })}
        </ul>
      </ul>

      <span className="toggle-btn" onClick={() => handleClick()}>
        <span className="bar"></span>
        <span className="bar"></span>
      </span>
    </nav>
  );
};

export default Navbar;
