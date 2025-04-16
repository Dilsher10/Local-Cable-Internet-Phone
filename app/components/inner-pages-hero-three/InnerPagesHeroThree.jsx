import React from "react";
import "./inner-pages-hero-three.scss";
import Link from "next/link";
import Image from "next/image";

const InnerPagesHeroThree = ({ data }) => {
  return (
    <div className="inner-pages-hero-three">
      <div className="grid-container">
        <div className="column">
          <div className="inner-one">
            <Image src={data.column1.logo} alt="dish" className="logo" />
            <p>
              Editorial Ratings <span>{data.column1.rating}</span>
            </p>
            <Image src={data.column1.starImg} alt="star" className="rating" />
          </div>
        </div>
        <div className="column">
          <div className="inner-two">
            <h4>{data.column2.heading}</h4>
            <ul>
              {data.column2.listItems.map((item, index) => (
                <li key={index}>
                  {item.text.map((part, partIndex) =>
                    part.isLink ? (
                      <Link key={partIndex} href={part.link}>
                        {part.text}
                      </Link>
                    ) : (
                      <span key={partIndex}>{part.text}</span>
                    )
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="column two-col-space">
          <div className="inner-three">
            <Image
              src={data.column3.img}
              alt="youngdelivery"
              className="youngdelivery"
            />
          </div>
        </div>
        <div className="column two-col-space">
          <div className="inner-four">
            <div className="link">{data.column4.link}</div>
            <Link href={"#"}>
              <p>
                {data.column4.callback1}
                <span>{data.column4.callback2}</span>
              </p>
              <div className="arrow-icon-box">{data.column4.buttonIcon}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerPagesHeroThree;
