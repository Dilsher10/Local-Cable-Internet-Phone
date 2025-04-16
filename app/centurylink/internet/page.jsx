// import React, { useState } from "react";
import "./centurylink-internet.scss";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import SubNav from "../../components/sub-nav/SubNav";
// import { centurylinkNavLinks } from "../../assets/data/navLinks/centurylinkNavLinks";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import xfintyTvHeroBg from "../../assets/images/xfinity-tv-hero-bg.jpg";
import signal from "../../assets/images/signal.png";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
import dotted from "../../assets/images/dotted.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";


export const metadata = {
  title: "CenturyLink Internet Plans"
};

const CenturyLinkInternet = () => {
  //   const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }
  //   setFaq(i);
  // };

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "CenturyLink Internet Plans",
    desc: "Are you and your household trying to binge-watch the latest hit series, video call for work, or just browse social media? Read on to find an AT&T plan that will work best for you. Plus, many come with perks like:",
    points: [
      "Download speeds up to 940Mbps ",
      "No data caps or contracts",
      "Flat-rate pricing",
      "Affordable fiber internet",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Plans starting at $30/mo.",
  };

  let packageTableData = [
    {
      head: [
        "Package",
        "Price",
        "Download Speeds Up To",
        "Upload Speeds Up To",
        "Connection type",
        "Details",
      ],

      body: [
        {
          content: [
            "1. ",
            "CenturyLink Fiber Internet 200 Mbps",
            "$30.00/mo.*",
            "Up to 200 Mbps",
            "Up to 200 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.  ",
            "CenturyLink Fiber Internet 500 Mbps",
            "$50.00/mo.*",
            "Up to 500 Mbps",
            "Up to 500 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3. ",
            "CenturyLink Fiber Gigabit",
            "$75.00/mo.*",
            "Up to 940 Mbps",
            "Up to 940 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Simply Unlimited Internet",
            "$55.00/mo.*",
            "Up to 100 Mbps",
            "Up to 10 Mbps",
            "DSL",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="centurylink-internet">
      {/* <SubNav links={centurylinkNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-mobile-bundles-offers">
        <div className="head">
          <h2 className="sect-heading">
            Top centuryLink <span> internet plans </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Aliquam risus odio vulputate
            pretium varius. Phasellus aliquam hac lacus fames elit. Suspendisse
            nunc fermentum commodo sit tempus. Ultricies id at magna turpis
            neque.
          </p>
        </div>

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
        <p className="below-table">
          Data effective as of publish date. Pricing and speeds are subject to
          change. Not all offers available in all areas. <br />
          * Speed may not be available in your area. Paperless billing required.
          Taxes and fees apply. Online ONLY. Free Modem. <br />
          † Speed may not be available in your area. Maximum download/upload
          speed of up to 940 Mbps via a wired connection. Paperless billing
          required. Taxes and fees apply. Offer details. Offer includes
          professional installation at customer’s eligible location. <br />‡
          Paperless billing or prepaid required. Additional taxes, fees, and
          surcharges apply. Get the fastest Internet speed available at your
          location (max speed is up to 140 Mbps.)
        </p>
      </div>

      <CTA
        heading={
          "CenturyLink has some of the most affordable and high-value fiber internet plans around."
        }
        desc={"Enter your zip code below to see availability in your area."}
      />

      <div className="section get-phone-bundles">
        <div className="head">
          <h2 className="sect-heading">
            CenturyLink internet <span> plans and prices </span>
          </h2>
          <p className="sect-desc">
            Are you tired of slow download speeds? With CenturyLink internet,
            you’ll get excellent internet performance that doesn’t break the
            bank.
            <br />
            CenturyLink’s three fiber internet plans offer speeds up to 940Mbps,
            making downloads a breeze. With pricing that starts at only $30
            monthly, you won’t pay a premium for performance. The Simply
            Unlimited Internet plan offers steady DSL performance for households
            without CenturyLink fiber coverage.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data effective as of publish date. Pricing and speeds are subject to
          change. Not all offers available in all areas. <br />
          * Speed may not be available in your area. Paperless billing required.
          Taxes and fees apply. Online ONLY. Free Modem. <br />
          † Speed may not be available in your area. Maximum download/upload
          speed of up to 940 Mbps via a wired connection. Paperless billing
          required. Taxes and fees apply. Offer details. Offer includes
          professional installation at customer’s eligible location. <br />‡
          Paperless billing or prepaid required. Additional taxes, fees, and
          surcharges apply. Get the fastest Internet speed available at your
          location (max speed is up to 140 Mbps.)
        </p>
        <br />
        <br />
        <div className="package-table-container channels">
          <Image className="mark" src={dotted} alt="mark" />
          <h4>CenturyLink internet bundles and deals</h4>
          <p>
            CenturyLink’s best deals include free installation, TV gadgets, and
            cash cards. Visit CenturyLink to see current promotions in your
            area.
          </p>
          <br />
          <hr />
          <div className="btn">
            <Link href={"/"}>find centuryLink Deals</Link>
          </div>
        </div>
      </div>

      <div className="section internet-features">
        <div className="head">
          <h2 className="sect-heading">
            CenturyLink <span> internet features </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
      </div>

      <div className="section get-phone-bundles">
        <div className="head">
          <h2 className="sect-heading">
            CenturyLink <span> availability & bundles </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4> CenturyLink availability</h4>
          <p>CenturyLink is available in sixteen states throughout the US.</p>
          <br />
          <ul className="channel-list">
            <li>Arizona</li>
            <li>Colorado</li>
            <li>Florida</li>
            <li>Idaho</li>
            <li>Iowa</li>
            <li>Minnesota</li>
            <li>Montana</li>
            <li>Nebraska</li>
            <li>Nevada</li>
            <li>New Mexico</li>
            <li>North Dakota</li>
            <li>Oregon</li>
            <li>South Dakota</li>
            <li>Utah</li>
            <li>Washington</li>
            <li>Wyoming</li>
          </ul>
          <br />
          <hr />
          <div className="btn">
            <Link href={"/"}>check centuryLink Availability</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>CenturyLink TV, internet, and phone bundles</h4>
          <p>
            During checkout, you can bundle DISH or DIRECTV service with your
            CenturyLink internet plan. CenturyLink also offers home phone
            service for DSL and fiber internet customers. Check out our full
            CenturyLink bundles guide to learn more..
          </p>
        </div>
        <div className="package-table-container channels">
          <Image className="mark" src={signal} alt="mark" />
          <h4>Want to get CenturyLink fiber internet?</h4>
          <p>
            Read our full CenturyLink internet review to learn more about
            CenturyLink’s internet plans.
          </p>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> CenturyLink internet </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Is CenturyLink internet
                down?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  You can use CenturyLink’s outage tool on the CenturyLink
                  mobile app or website to confirm if service is out in your
                  area.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Is CenturyLink internet down?"}
            cssClass={"faq-content"}
          >
            <p>
              You can use CenturyLink’s outage tool on the CenturyLink mobile
              app or website to confirm if service is out in your area.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How much is CenturyLink
                internet?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>CenturyLink internet plans start at $30 per month.</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" How much is CenturyLink internet?"}
            cssClass={"faq-content"}
          >
            <p>CenturyLink internet plans start at $30 per month.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Is CenturyLink internet
                good?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Overall, CenturyLink is good for an internet provider. If your
                  area has CenturyLink fiber internet service, you’ll get great
                  internet service, but CenturyLink’s DSL internet plan is older
                  and slower than the competition.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Is CenturyLink internet good?"}
            cssClass={"faq-content"}
          >
            <p>
              Overall, CenturyLink is good for an internet provider. If your
              area has CenturyLink fiber internet service, you’ll get great
              internet service, but CenturyLink’s DSL internet plan is older and
              slower than the competition.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does CenturyLink provide a
                free modem?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  CenturyLink’s DSL plan doesn’t include a free modem, but you
                  can get a free modem if you upgrade to CenturyLink Fiber
                  Gigabit.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Does CenturyLink provide a free modem?"}
            cssClass={"faq-content"}
          >
            <p>
              CenturyLink’s DSL plan doesn’t include a free modem, but you can
              get a free modem if you upgrade to CenturyLink Fiber Gigabit.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default CenturyLinkInternet;
