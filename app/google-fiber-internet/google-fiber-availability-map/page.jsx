// import React, { useState } from "react";
import "./google-fiber-Internet-review-availability-map.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { googlefiberinternetNavLinks } from "../../assets/data/navLinks/googlefiberinternetNavLinks";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import quotationsIcon from "../../assets/images/quotations.svg";
import googlefiberinternetmap from "../../assets/images/google-fiber-internet-map.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Google Fiber Availability"
};

const GoogleFiberInternetReviewAvailabilityMap = () => {
  //   const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="google-fiber-Internet-review-availability-map">
      {/* <SubNav links={googlefiberinternetNavLinks} /> */}
      <div className="hidden-costs-hero global-inner-hero">
        <h1> Google Fiber Availability</h1>
        <p>
          Here’s what you need to know if you’re interested in Google Fiber
          internet availability.
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
          <h4>Interested in Google Fiber internet?</h4>
          <p>
            Google Fiber has rolled out service on a city-by-city basis across
            the U.S. Enter your zip code below to confirm if
            <span className="link">
              <Link href={"#"}> Google Fiber is available </Link>
            </span>{" "}
            in your area.
          </p>
          <br />
        </div>
      </div>

      <StickyHeader />

      <div className="section important-links">
        <div className="head">
          <h2 className="sect-heading">
            Google Fiber <span>availability map </span>
          </h2>
          <p className="sect-desc">
            Do you want Google Fiber internet service? Google Fiber is available
            in more than 20 cities across the U.S. Check our map and visit
            Google Fiber to see if service is available in your area.
          </p>
        </div>

        <div className="all-links">
          <Link href={"#"}> check availability</Link>
        </div>
        <br />
        <Image src={googlefiberinternetmap} alt="googlefiberinternetmap" />
      </div>

      <div className="section plans">
        <div className="head">
          <h2 className="sect-heading">
            Google Fiber internet <span> plans </span>
          </h2>
          <p className="sect-desc">
            With download speeds between 1,000–8,000 Mbps, Google Fiber offers
            some of the fastest fiber internet plans on the market. Google Fiber
            isn’t widely available, but if you’re in an area with coverage,
            you’ll get internet plans that can handle big downloads, TikTok
            swiping, and everything in between. <br />
            Check out our full Google Fiber review to learn more about the
            service.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4> Google Fiber availability by state</h4>
          <p className="after-heading">
            Google Fiber has rolled out service across more than 20 cities in
            the U.S. If you’re in one of the following cities, you may have
            Google Fiber coverage:
          </p>
          <ul className="channel-list">
            <li>Atlanta, GA</li>
            <li>Austin, TX</li>
            <li>Charlotte, NC</li>
            <li>Chicago, IL</li>
            <li>Denver, CO</li>
            <li>Des Moines, IA</li>
            <li>Huntsville, AL</li>
            <li>Kansas City, KS</li>
            <li>Kansas City, MO</li>
            <li>Lakewood, CO</li>
            <li>Mesa, AZ</li>
            <li>Miami, FL</li>
            <li>Nashville, TN</li>
            <li>Oakland, CA</li>
            <li>Orange County, CA</li>
            <li>Provo, UT</li>
            <li>San Antonio, TX</li>
            <li>San Diego, CA</li>
            <li>San Francisco, CA</li>
            <li>Salt Lake City, UT</li>
            <li>Seattle, WA</li>
            <li>The Triangle, NC</li>
            <li>West Des Moines, IA</li>
          </ul>
          <p className="below-table left">
            Google also regularly adds new cities to its Google Fiber network.
            The following towns are on Google Fiber’s upcoming coverage list:
          </p>
          <ul className="channel-list">
            <li>Chandler, AZ</li>
            <li>Lakewood, CO</li>
            <li>Wheat Ridge, CO</li>
            <li>Pocatello, ID</li>
            <li>Council Bluffs, IA</li>
            <li>Bellevue, NE</li>
            <li>Omaha, NE</li>
            <li>Tega Cay, SC</li>
            <li>Murfreesboro, TN</li>
            <li>Logan, UT</li>
          </ul>
        </div>
      </div>

      <CTA
        heading={"interested in Google Fiber internet?"}
        desc={
          "Enter your zip code below to confirm if Google Fiber is available in your area:"
        }
      />

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>Google Fiber availability </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Where is Google Fiber
                available?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>Google Fiber is available in the following cities:</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Where is Google Fiber available?"}
            cssClass={"faq-content"}
          >
            <p>Google Fiber is available in the following cities:</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How much is Google Fiber?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Google Fiber costs $70.00–$150.00/mo. and has download speeds
                  between 1,000–8,000 Mbps.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" How much is Google Fiber?"}
            cssClass={"faq-content"}
          >
            <p>
              Google Fiber costs $70.00–$150.00/mo. and has download speeds
              between 1,000–8,000 Mbps.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span>Is Google Fiber available in
                my area?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Google Fiber regularly adds new cities to its service network.
                  The following cities are slated to get Google Fiber coverage
                  in the future:
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"Is Google Fiber available in my area?"}
            cssClass={"faq-content"}
          >
            <p>
              Google Fiber regularly adds new cities to its service network. The
              following cities are slated to get Google Fiber coverage in the
              future:
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
                <Link href={"#"}> Google Fiber Internet Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}> Best Fiber Internet Providers</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}> Is Gigabit Internet Worth It?</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default GoogleFiberInternetReviewAvailabilityMap;
