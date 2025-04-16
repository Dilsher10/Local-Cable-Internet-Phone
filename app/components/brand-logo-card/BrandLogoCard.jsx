'use client'
import React, { useEffect, useState } from 'react'
import "./brand-logo-card.scss"
import Link from "next/link";
import Image from "next/image";

const BrandLogoCard = ({id, linkPath, img, linkName}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoaded(true);
        }, 200);

        return () => clearTimeout(timeout);
    }, []);
  return (
    <Link href={linkPath} key={id}  className='brand-logo-card'>
        <div className="white-color-overlay"></div>
        <div className="blue-color-overlay"></div>
        <Image src={img} alt="verizon-logo" />
        {/* <Link href="#" className="link-name">{linkName}</Link> */}
    </Link>
  )
}

export default BrandLogoCard