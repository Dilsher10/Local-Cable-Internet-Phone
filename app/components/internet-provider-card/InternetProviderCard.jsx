import React from "react";
import "./internet-provider-card.scss";
import Link from "next/link";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import spectrum from "../../assets/images/brand-logos/spectrum.svg";

const InternetProviderCard = ({
  id,
  img,
  tagName,
  packageName,
  packagePoints,
  price,
  linkPath
}) => {
  return (
    <div className="package-card" key={id}>
      <div className="logo">
        <Image src={img} alt="provider-logo" />
      </div>

      <div className="tag">
        <p>{tagName}</p>
      </div>

      <div>
        <h4 className="package-name">{packageName}</h4>

        <ul className="package-points">
          {packagePoints?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <Link href={linkPath}>
        <p>{price}</p>
        <div className="arrow-icon-box">
          <GoArrowUpRight className="upright-arrow-icon" />
        </div>
      </Link>
    </div>
  );
};

export default InternetProviderCard;