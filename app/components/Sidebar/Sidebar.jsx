import React from "react";
import "./sidebar.scss";
import SidebarCloseButton from "./SidebarCloseButton"
import logo from '../../assets/images/logo.png'
import SidebarItem from "./SidebarItem";
import { mainNavLinks } from "../../assets/data/navLinks/mainNavLinks";
import Link from 'next/link';
import Image from 'next/image'

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className={`sidebar`}>
      <div className="header">
        <SidebarCloseButton closeHandler = {closeSidebar}/>
        {/* <FaLongArrowAltLeft
          className="icon"
          onClick={() => {
            closeSidebar(false);
          }}
        /> */}

        <Link href="/" className="logo">
          <Image
            src={logo}
            alt="logo"/>
        </Link>
      </div>
      <ul className="links">
        {mainNavLinks.map((item, index) => (
          <SidebarItem item={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
