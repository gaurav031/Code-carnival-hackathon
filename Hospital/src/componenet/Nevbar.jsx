import { NavLink } from "react-router-dom";

function Nevbar() {
  return (
    <nav id="nav">
      <NavLink to="/" className="Link">
        Home
      </NavLink>

      <NavLink to="/login" className="Link">
        Login
      </NavLink>
    </nav>
  );
}

export default Nevbar;
