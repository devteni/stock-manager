import { useState } from 'react';

const Links = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Login',
    link: '/login',
  },
  {
    text: 'Signup',
    link: '/signup',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const btn = document.getElementsByClassName('toggle-btn')[0];

  const handleClick = (e) => {
    const navlinks = document.getElementsByClassName('nav-links')[0];
    console.log(navlinks);
    if (isOpen) {
      // set the display of the navlinks to block and display over other elements
      navlinks.style.display = 'flex';
      navlinks.style.flexDirection = 'column';
    } else {
      navlinks.style.display = 'none';
    }
    setIsOpen(!isOpen);
  };
  return (
    <nav className="nav">
      <p className="logo">Stock manager</p>
      <a href="#" className="toggle-btn" onClick={() => handleClick()}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <ul className="hidden nav-links" id="nav-links">
        {Links.map((link, i) => {
          return (
            <li key={i} className="nav-link">
              {link.text}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
