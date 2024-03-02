import { NavLink } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import {
  BiSolidUserDetail,
  BiStats,
  BiMessageSquareDetail,
} from "react-icons/bi";
import { RiLogoutBoxFill } from "react-icons/ri";
import "../styles/sidebar.css";
function Sidebar() {
  return (
    <div className="menu">
      <div className="logo">
        <FaUserDoctor className="logo-icon" />
        <h2>Doctor</h2>
      </div>

      <div className="menu--list">
        <NavLink to={"patientrecodrd"} className="item">
          <BiSolidUserDetail className="icon" />
          Patient Recodrd
        </NavLink>

        <NavLink to={"addnewpatient"} className="item">
          <AiOutlineUserAdd className="icon" />
          Add New Patient
        </NavLink>

        <NavLink to={"medicinedetail"} className="item">
          <BiStats className="icon" />
          Medicne Detail
        </NavLink>

        <NavLink to={"doctordetail"} className="item">
          <BiMessageSquareDetail className="icon" />
          Docter Detail
        </NavLink>

        <NavLink to={"sinout"} className="item">
          <RiLogoutBoxFill className="icon" />
          Sign Out
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
