import React from "react";
import Profile from "./Profile";
import Footer from "./Footer";
import Data from "./data";
import MenuItem from "./MenuItem";

interface SideBarProps {
  activeMenu: "Overview" | "Transactions" | "Settings";
}

const SideBar = (props: SideBarProps) => {
  const { activeMenu } = props;

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          {Data.map((item, index) => (
            <MenuItem
              key={index}
              title={item.title}
              active={activeMenu === item.title}
              icon={item.icon}
              href={item.href}
            />
          ))}
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default SideBar;
