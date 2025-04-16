// import React, { useState } from "react";
import "./cox-availability.scss";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { coxNavLinks } from "../../assets/data/navLinks/coxNavLinks";
import PackageCard from "../../components/package-card/PackageCard";
// import SubNav from "../../components/sub-nav/SubNav";
import quotationsIcon from "../../assets/images/quotations.svg";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import coveragemap from "../../assets/images/coveragemap.png";
import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Cox Availability"
};

const CoxAvailability = () => {
  // const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="cox-availability">
      {/* <SubNav links={coxNavLinks} /> */}
      <div className="cox-costs-hero global-inner-hero">
        <h1>Cox Availability</h1>
        <p>
          Find out where you can get TV and internet services from Cox
          Communications.
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
          <h4>Cox availability map</h4>
          <p>
            Cox offers internet, cable TV, home phone, and security services to
            more than 6.5 million customers. Do you want to get Cox TV or
            internet service? Check out our coverage map.
          </p>
          <Image src={coveragemap} alt="coveragemap" className="coveragemap" />
        </div>
      </div>

      <CTA
        heading={"Find out if Cox provides service in your area"}
        desc={
          "Enter your zip code below to see if Cox is available in your neighborhood:"
        }
      />

      <div className="section cox-services-availability">
        <div className="head">
          <h2 className="sect-heading">
            Cox <span> Services Availability </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Cox internet availability</h4>
          <p className="after-heading">
            Cox offers cable internet service in 18 states across the US
            including California, Ohio, and Massachusetts. Cox’s home internet
            packages offer download speeds between 25 Mbps to 1,000 Mbps, and
            they come with access to Cox’s network of Wi-Fi hotspots.
            <br />
            Cox’s fiber internet network is currently a work in progress, and
            whether or not your house can get fiber depends on where you live.
            But Cox fiber internet offers faster internet performance and upload
            speeds compared to Cox cable internet, so we’d recommend springing
            for fiber if it’s available in your neighborhood.
            <br />
            Check out our full Cox internet review to learn more about Cox
            internet plans and speed options.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Cox TV availability</h4>
          <p className="after-heading">
            As a Cox TV subscriber, you get a full lineup of HD channels, and
            you can add premium services such as HBO Max™ or SHOWTIME® during
            the checkout process. Visit our full Cox TV review to learn more
            about the provider’s TV options.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Cox bundle availability</h4>
          <p className="after-heading">
            If you want to save time and enjoy the convenience of a single bill,
            you can bundle Cox phone, cable TV, and cable internet services. Cox
            also offers home security services, although you won’t get a bundle
            discount by adding them to your subscription.
            <br />
            Read our Cox bundle review to learn more about the provider’s
            bundling options.
          </p>
        </div>
      </div>

      <div className="section cox-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Cox availability </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span>What is the cheapest Cox
                package?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  If you live in a state with Cox service, you can get Cox cable
                  internet at your home. Use our availability tool above to see
                  if Cox internet is available in your area.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"What is the cheapest Cox package?"}
            cssClass={"faq-content"}
          >
            <p>
              If you live in a state with Cox service, you can get Cox cable
              internet at your home. Use our availability tool above to see if
              Cox internet is available in your area.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What is the best Cox
                bundle?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Cox’s fiber-optic internet network is primarily available for
                  Cox Business customers.
                  <br />
                  But for home customers, Cox fiber availability depends on
                  whether Cox has upgraded its local networks in your service
                  area or not. If you want fiber internet, we’d recommend
                  contacting Cox customer service at +1-800-234-3993 to confirm
                  fiber availability beforehand.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" What is the best Cox bundle?"}
            cssClass={"faq-content"}
          >
            <p>
              Cox’s fiber-optic internet network is primarily available for Cox
              Business customers.
              <br />
              But for home customers, Cox fiber availability depends on whether
              Cox has upgraded its local networks in your service area or not.
              If you want fiber internet, we’d recommend contacting Cox customer
              service at +1-800-234-3993 to confirm fiber availability
              beforehand.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What is the Cox
                economy_pack?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Cox is available in only 18 states, so it’s not technically
                  nationwide. The provider has a footprint in these states
                  across the country:
                </p>
                <ul>
                  <li>· Arizona</li>
                  <li>· Arkansas</li>
                  <li>· California</li>
                  <li>· Connecticut</li>
                  <li>· Florida</li>
                  <li>· Georgia</li>
                  <li>· Idaho</li>
                  <li>· Iowa</li>
                  <li>· Kansas</li>
                  <li>· Louisiana</li>
                  <li>· Massachusetts</li>
                  <li>· Nebraska</li>
                  <li>· Nevada</li>
                  <li>· North Carolina</li>
                  <li>· Ohio</li>
                  <li>· Oklahoma</li>
                  <li>· Rhode Island</li>
                  <li>· Virginia</li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" What is the Cox economy_pack?"}
            cssClass={"faq-content"}
          >
            <p>
              Cox is available in only 18 states, so it’s not technically
              nationwide. The provider has a footprint in these states across
              the country:
            </p>
            <ul>
              <li>· Arizona</li>
              <li>· Arkansas</li>
              <li>· California</li>
              <li>· Connecticut</li>
              <li>· Florida</li>
              <li>· Georgia</li>
              <li>· Idaho</li>
              <li>· Iowa</li>
              <li>· Kansas</li>
              <li>· Louisiana</li>
              <li>· Massachusetts</li>
              <li>· Nebraska</li>
              <li>· Nevada</li>
              <li>· North Carolina</li>
              <li>· Ohio</li>
              <li>· Oklahoma</li>
              <li>· Rhode Island</li>
              <li>· Virginia</li>
            </ul>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Optimum Overview | Optimum Internet | Optimum TV | Optimum
          Channel Lineup | Optimum Customer Service | Change or Cancel Optimum |
          Optimum Hidden Costs
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default CoxAvailability;
