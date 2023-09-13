import Image from "next/image";
import React from "react";
import Menu from "./Menu";
import Data from "./data";
import Auth from "./Auth";
import ToggleMenu from "./ToggleMenu";

const Navbar = () => {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src="/icon/logo.svg" width={60} height={60} />
          </a>
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              {Data.MenuItem.map((menu, index) => (
                <Menu
                  key={index}
                  title={menu.title}
                  active={menu.active}
                  href={menu.href}
                />
              ))}

              <Auth isLogin />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
