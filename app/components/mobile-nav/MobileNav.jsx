'use client'
import React, { useEffect, useState } from "react";
import "./mobile-nav.scss";
import { RiMenu2Fill } from "react-icons/ri";
import logo from "../../assets/images/logo.png";
import Sidebar from "../Sidebar/Sidebar";
import Link from 'next/link'
import Image from 'next/image'

// import { useLocation } from "react-router-dom";
import { usePathname } from 'next/navigation'


const MobileNav = () => {
    const[sidebar, setSidebar] = useState(false)
    // const location = useLocation()
    const location = usePathname();

    useEffect(() => (
        setSidebar(false)
    ), [location])
  return (
    <div className="mobile-nav">
      <div className="icon-box" onClick={() => {setSidebar(true)}}>
        <RiMenu2Fill className="icon"/>
      </div>

      <Link href="/" className="logo">
      <Image
            src={logo}
            alt="logo"/>
      </Link>

      {
        sidebar && <Sidebar closeSidebar={setSidebar} />
      }
    </div>
  );
};

export default MobileNav;
