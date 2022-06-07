import { NavLink } from 'react-router-dom';
import '../style/Navbar.css';
// import user from '../img/user.svg';

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink className='logo' to='/bookstore'>
          Bookstore CMS
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to='/bookstore'
        >
          BOOKS
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to='/Categories'
        >
          CATEGORIES
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
