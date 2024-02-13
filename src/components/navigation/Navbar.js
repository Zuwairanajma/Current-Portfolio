import { useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="bg-purple-500 text-neutral-50 w-full p-3 flex justify-between items-center fixed top-0 z-50">
      <div className="font-lobster text-2xl cursor-pointer hover:-translate-y-1 hover:underline transition-all">
        <Link to="/">Juwairiyya</Link>
      </div>
      <div className="sm:hidden">
        <FontAwesomeIcon
          icon={toggle ? faTimes : faBars}
          className={`text-white text-xl cursor-pointer ${toggle ? 'fa-times-icon' : 'fa-bars-icon'}`}
          onClick={toggleHandler}
        />
      </div>
      <div
        className={`${
          toggle ? 'flex' : 'hidden'
        } sm:flex sm:items-center sm:gap-4 sm:justify-end`}
      >
        <ul className="flex flex-col sm:flex-row items-center gap-4">
          <li className="font-lobster text-2xl cursor-pointer hover:-translate-y-1 hover:underline transition-all">
            <Link to="/about" onClick={toggleHandler}>
              About
            </Link>
          </li>
          <li className="font-lobster text-2xl cursor-pointer hover:-translate-y-1 hover:underline transition-all">
            <Link to="/projects" onClick={toggleHandler}>
              Projects
            </Link>
          </li>
          <li className="font-lobster text-2xl cursor-pointer hover:-translate-y-1 hover:underline transition-all">
            <Link to="/contact" onClick={toggleHandler}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
