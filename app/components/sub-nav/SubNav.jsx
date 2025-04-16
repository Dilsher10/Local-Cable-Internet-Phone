import React from "react";
import Link from "next/link";
import "./sub-nav.scss";
import { BsCheck2 } from "react-icons/bs";
import { NavLink } from "../NavLink/NavLink";

const SubNav = ({ links }) => {
  return (
    <div className="sub-nav">
      {links.map((item, index) => (
        <NavLink key={index} href={item.path}>
          <div className="icon-box">
            <BsCheck2 className="check-icon" />
          </div>
          <p>{item.name}</p>
        </NavLink>
      ))}
    </div> 
  );
};

export default SubNav;
