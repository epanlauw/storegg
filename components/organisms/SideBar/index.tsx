import React from "react";
import Profile from "./Profile";
import Footer from "./Footer";
import Data from "./data";
import MenuItem from "./MenuItem";

const SideBar = () => {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          {Data.map((item, index) => (
            <MenuItem
              key={index}
              title={item.title}
              active={item.active}
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
