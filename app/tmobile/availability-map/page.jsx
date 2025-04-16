// import React, { useState } from "react";
import "./t-mobile-availability-map.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { tmobileNavLinks } from "../../assets/data/navLinks/tmobileNavLinks";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import quotationsIcon from "../../assets/images/quotations.svg";
import framegloble from "../../assets/images/frame-globle.png";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "T-Mobile Availability"
};

const TMobileAvailabilityMap = () => {
  //   const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="t-mobile-availability-map">
      {/* <SubNav links={tmobileNavLinks} /> */}
      <div className="availability-hero global-inner-hero">
        <h1>T-Mobile Availability</h1>
        <p>
          Here’s what you need to know if you’re interested in T-Mobile home
          internet or cell phone availability.
        </p>
      </div>

      <div className="section best-internet-tv-offer">
        <div className="cards">
          {bestOffersTemporary.map((item, index) => (
            <PackageCard
              key={index}
              id={index}
              img={item.img}
              tagName={item.tagName}
              packageName={item.packageName}
              packagePoints={item.packagePoints}
              price={item.price}
              linkPath={item.linkPath}
            />
          ))}
        </div>
      </div>

      <div className="section endnote endnote-start">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Interested in T-Mobile internet?</h4>
          <p>
            T-Mobile’s home internet availability varies on a city-by-city basis
            because of T-Mobile’s staggered rollout approach. Enter your zip
            code below to confirm if T-Mobile internet has availability in your
            area.
          </p>
        </div>
      </div>
      <StickyHeader />

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            T-Mobile home internet <span> availability map</span>
          </h2>
          <p className="sect-desc">
            Are you interested in T-Mobile 5G Home Internet service? Our map
            lists all the states and major cities with T-Mobile 5G Home
            Internet, available across over 40 million homes.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>check availability</Link>
        </div>
        <br />
        <Image src={framegloble} alt="frame-globle" />
      </div>

      <CTA
        heading={"Interested in T-Mobile services?"}
        desc={
          "Enter your zip code below to see internet service providers in your area."
        }
      />

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>T-Mobile availability </span> FAQ
          </h2>

          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>

        <div className="faq-wrapper">
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(1)}>
                <span>{faq === 1 ? "-" : "+"}</span> Where is T-Mobile home
                internet available?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  T-Mobile 5G Home Internet is available across all 50 states,
                  but varies on a city-by-city basis. You may qualify for
                  service if you’re close to a major or mid-sized city.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Where is T-Mobile home internet available?"}
            cssClass={"faq-content"}
          >
            <p>
              T-Mobile 5G Home Internet is available across all 50 states, but
              varies on a city-by-city basis. You may qualify for service if
              you’re close to a major or mid-sized city.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is T-Mobile internet
                available in my area?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  T-Mobile home internet may be available if you live near a
                  city with T-Mobile 5G coverage. Nationwide 5G coverage is
                  available with T-Mobile, but home internet service is rolling
                  out on a staggered basis.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Is T-Mobile internet available in my area?"}
            cssClass={"faq-content"}
          >
            <p>
              T-Mobile home internet may be available if you live near a city
              with T-Mobile 5G coverage. Nationwide 5G coverage is available
              with T-Mobile, but home internet service is rolling out on a
              staggered basis.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> When will T-Mobile 5G Home
                Internet be available in my area?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  T-Mobile is regularly adding new cities to its home internet
                  coverage. Check with T-Mobile for updates on when coverage
                  will be available in your area.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={
              " When will T-Mobile 5G Home Internet be available in my area?"
            }
            cssClass={"faq-content"}
          >
            <p>
              T-Mobile is regularly adding new cities to its home internet
              coverage. Check with T-Mobile for updates on when coverage will be
              available in your area.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote page-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />

          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>T-Mobile 5G Home Internet Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}> T-Mobile Deals</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>5G Home Internet Guide</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default TMobileAvailabilityMap;
