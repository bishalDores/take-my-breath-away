import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const menu = [
    {
      name: "Flight",
      path: "/",
      selected: false,
    },
    {
      name: "Bus",
      path: "/",
      selected: true,
    },
    {
      name: "Hotel",
      path: "/",
      selected: false,
    },
    {
      name: "Holiday",
      path: "/",
      selected: false,
    },
    {
      name: "Visa",
      path: "/",
      selected: false,
    },
    {
      name: "Visa Guide",
      path: "/",
      selected: false,
    },
  ];

  const toggleDrawer = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <div className="nav_wrapper">
      <div className="container nav_wrapper-inner">
        <div className="logo">
          <Link href="/">
            <a>
              <img src="/images/logo.png" alt="Share Trip Logo" />
            </a>
          </Link>
        </div>
        <div className="menus">
          <ul>
            {menu.map((m, i) => (
              <li key={i}>
                <Link href={m.path}>
                  <a className={m.selected ? "selected" : ""}>{m.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hamburger_icon" onClick={toggleDrawer}>
          <MenuIcon />
        </div>
      </div>
      <MobileMenu open={showMobileMenu} toggleDrawer={toggleDrawer} menu={menu} />
    </div>
  );
};

export default Navbar;
