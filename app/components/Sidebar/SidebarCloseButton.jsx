'use client'
import React from 'react'
import "./sidebar.scss";
import { FaLongArrowAltLeft } from "react-icons/fa";


const SidebarCloseButton = ({closeHandler}) => {
  return (
        <FaLongArrowAltLeft
            className="icon"
            onClick={() => {
                closeHandler(false);
            }}
        />
  )
}

export default SidebarCloseButton