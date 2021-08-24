import "./Header.css";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/find-area" className="nav-link">
              Area
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/hypotenuse" className="nav-link">
              Hypotenuse
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/is-triangle" className="nav-link">
              Is Triangle?
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/quiz" className="nav-link">
              Quiz
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
