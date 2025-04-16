import React from "react";
import "./inner-pages-hero.scss";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const InnerPagesHero = ({ data }) => {
  const { img, heading, desc, points, buttonName, buttonPath, price } = data; 
  return (
    <div className="inner-pages-hero">
      <Image 
        src={img} 
        alt="packages & pricing" 
        className="bg-img"
        objectFit="cover"
        objectPosition="center" />

      <div className="inner-pages-hero-content">  
        <h1 className="heading">{heading}</h1>

        <p className="desc">{desc}</p> 
 
        <ul className="points">
          {points.map((item, index) => (
            <li key={index}>
              <BsFillCheckCircleFill className="tick-icon" />
              <p>{item}</p>
            </li>
          ))}
        </ul>

        <Link href={buttonPath}>{buttonName}</Link>

        <p className="price">{price}</p>
      </div>
    </div>
  );
};

export default InnerPagesHero;
