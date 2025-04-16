'use client'
import React, { useState } from "react";
import "./navbar.scss";
import Image from 'next/image'
import Link from 'next/link'
import { NavLink } from "../NavLink/NavLink";
import logo from '../../assets/images/logo.png'
import { mainNavLinks } from "../../assets/data/navLinks/mainNavLinks";
import { IoIosArrowDown } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";


const Navbar = () => {
  const [dropdown, setDropdown] = useState([]);

  const onMouseEnterhandler = (dropDownId) => {
    setDropdown((prev) => {
      let arr = [...prev];
      arr[dropDownId] = true;
      return arr;
    });
  };

  const onMouseLeavehandler = (dropDownId) => {
    setDropdown((prev) => {
      let arr = [...prev];
      arr[dropDownId] = false;
      return arr;
    });
  };
  return (
    <div className="navbar">
      <div className="logo">
        <Link href="/">
          <Image
            src={logo}
            alt="company-logo"/>
        </Link>
      </div>

      <ul className="nav-links">
        {mainNavLinks.map((item) => {
          //
          if (!item.children) {
            return (
              <li key={item.id}>
                {/* <NavLink to={item.path}>{item.name}</NavLink> */}
                <Link href={item.path}>{item.name}</Link>
                <IoIosArrowDown className="dropdown-icon" />
              </li>
            );
          }

          //
          return (
            <li
              onMouseEnter={() => onMouseEnterhandler(item.id)}
              onMouseLeave={() => onMouseLeavehandler(item.id)}
              key={item.id}
            >
              <div className="item">
                {/* <NavLink to={item.path}>{item.name}</NavLink> */}
                <NavLink href={item.path}>{item.name}</NavLink>
                <IoIosArrowDown className="dropdown-icon" />
              </div>

              {dropdown[item.id] && (
                <ul className="dropdown-menu">
                  {item.children.map((item) => (
                    <li key={item.id}>
                      
                      <Link href={item.path}>
                        {item.name}

                        <div className="icon-box">
                          <GoArrowUpRight className="upright-arrow-icon" />
                        </div>
                      </Link>
                      
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Navbar