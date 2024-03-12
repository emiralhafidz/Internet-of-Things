import Hamburger from "../assets/menu.png";
import DashboardIcon from "../assets/dashboard.png";
import TableIcon from "../assets/chart.png";
import GraphIcon from "../assets/graph.png";
import LogoutIcon from "../assets/logout.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      id: 1,
      path: "/dashboard",
      icon: DashboardIcon,
      name: "Dashboard",
    },
    {
      id: 2,
      path: "/table",
      icon: TableIcon,
      name: "Table",
    },
    {
      id: 3,
      path: "/graphics",
      icon: GraphIcon,
      name: "Graphics",
    },
  ];
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="top">
          <span>User</span>
          <img src={Hamburger} alt="" />
        </div>
        <div className="links">
          <ul>
            {menuItem.map((item, id) => (
              <li key={id}>
                {" "}
                <Link
                  to={item.path}
                  className="navLinks"
                  activeclassName="active"
                >
                  <img src={item.icon} alt="" />
                  <div className="link">{item.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <main className="pages">{children}</main>
    </div>
  );
};

export default Sidebar;
