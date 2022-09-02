import React from "react";
import Drawer from "@mui/material/Drawer";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Link from "next/link";

const MobileMenu = ({ open, toggleDrawer, menu }) => {
  return (
    <div>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        sx={{
          "& .MuiPaper-root": {
            width: "75%",
          },
        }}
      >
        <div className="mobile_menu_wrapper">
          <div className="close_icon">
            <HighlightOffIcon onClick={toggleDrawer} />
          </div>
          <div className="mobile_menu_list">
            <ul>
              {menu.map((m, i) => (
                <li key={i}>
                  <Link href={m.path}>
                    <a>{m.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
