'use client'

import React, { useState } from "react";
import "./sidebar-item.scss";
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";

const SidebarItem = ({ item, key }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className={`sidebar-item ${open ? "open" : ""}`} key={key}>
      <div className="sidebar-item-title">
        <Link href={item.path}>{item.name}</Link>
        <IoIosArrowDown className="drop-icon" onClick={() => setOpen(!open)} />
      </div>

      <ul className="sidebar-item-content">
        {item.children.map((item, index) => (
          <li key={index}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default SidebarItem;
