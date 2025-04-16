import React from "react";
import "./inner-pages-hero-two.scss";
import PackageTable from "../package-table/PackageTable";
import Image from "next/image";

const InnerPagesHeroTwo = ({ data }) => {

  return (
    <div className="inner-pages-hero-two">
      <div className="inner-content">
        <div className="inner-two">
          <div className="inner-two-one">
            <div className="button-div">
              <button className="tv-providers active-btn">
                <div className="icon-box">  
                  {
                    data.card1.buttonIcon 
                  }
                </div>
                <p className="buttontext">{data.card1.buttonText}</p>
              </button>
            </div>
            <div className="center-content">
              <Image src={data.card1.logo} alt="provider-logo" className="xfinitylogo" />
              <p>
                Editorial Ratings<span> {data.card1.rating}</span>
              </p>
              <Image src={data.card1.starImg} alt="star-rating" className="star" />
            </div>
            <div className="inner-content">
              <p>
                {data.card1.desc}
              </p>
            </div>
          </div>
          <div className="inner-two-two">
            <Image src={data.card2Img} className="" alt="reviewman" />
          </div>
        </div>

        <div className="inner-four-columns">
          {data.cardsStrip.map((item, index) => (
            <div className="column-one" key={index}>
              <div className="text">
                <p>{item.subtitle}</p>
                <h6>{item.title}</h6>
              </div>
              <div className="icon">
                <Image src={item.icon} alt="provider-icon" className="cross" />
              </div>
            </div>
          ))}
          {/* <div className="column-one">
            <div className="text">
              <p>Service provider:</p>
              <h6>xfinity</h6>
            </div>
            <div className="icon">
              <Image src={cross} alt="" className="cross" />
            </div>
          </div>
          <div className="column-one">
            <div className="text">
              <p>Internet speed:</p>
              <h6>75–6,000 Mbps</h6>
            </div>
            <div className="icon">
              <Image src={cross} alt="" className="cross" />
            </div>
          </div>
          <div className="column-one">
            <div className="text">
              <p>Price:</p>
              <h6>$24.99–$299.95/mo.</h6>
            </div>
            <div className="icon">
              <Image src={cross} alt="" className="cross" />
            </div>
          </div>
          <div className="column-one">
            <div className="text">
              <p>Channels:</p>
              <h6>10–185+ Channels</h6>
            </div>
            <div className="icon">
              <Image src={cross} alt="" className="cross" />
            </div>
          </div> */}
        </div>

        <PackageTable item={data.tableData} />

        <p className="last-para">{data.bottomDesc}</p>
      </div>
    </div>
  );
};

export default InnerPagesHeroTwo;
