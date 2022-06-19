import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Rozbalit navigaci"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse navbar-collapse" + (navOpen ? " show" : "")}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Zkušenosti
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/dovednosti"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Dovednosti
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/o-me"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                O mě
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/reference"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Reference
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
