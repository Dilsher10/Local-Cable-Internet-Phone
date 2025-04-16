// import React, { useState } from "react";
import "./centurylink-bundles.scss";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import SubNav from "../../components/sub-nav/SubNav";
// import { centurylinkNavLinks } from "../../assets/data/navLinks/centurylinkNavLinks";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import xfintyTvHeroBg from "../../assets/images/xfinity-tv-hero-bg.jpg";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
import dotted from "../../assets/images/dotted.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "CenturyLink Bundles"
};

const CenturyLinkBundles = () => {
  //   const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }
  //   setFaq(i);
  // };
  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "CenturyLink bundles ",
    desc: "Are you and your household trying to binge-watch the latest hit series, video call for work, or just browse social media? Read on to find an AT&T plan that will work best for you. Plus, many come with perks like:",
    points: [
      "Download speeds up to 940Mbps ",
      "Bundle DISH or DIRECTV satellite TV ",
      "No contracts or data caps ",
      "Home phone service also available ",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Internet packages starting at $90/mo.",
  };
  let packageTableData = [
    {
      head: [
        "Package",
        "price",
        "Download speeds up to",
        "Channel count",
        "Phone plan",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Internet + TV Select",
            "$109.98/mo. for 12 mos.",
            "300 Mbps",
            "125+ channels",
            "Add unlimited nationwide calls for $19.99/mo.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Internet Ultra + TV Select",
            "$129.98/mo. for 12 mos.",
            "500 Mbps",
            "125+ channels",
            "Add unlimited nationwide calls for $19.99/mo.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Internet Gig + TV Select",
            "$149.98/mo. for 12 mos.",
            "1,000 Mbps",
            "125+ channels",
            "Add unlimited nationwide calls for $19.99/mo.",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataBundles = [
    {
      head: ["Package", "price", "Channel count", "DVR", "Details"],

      body: [
        {
          content: ["1.", "DISH", "$92.99–$117.99/mo.", "190–290+", "500 hrs."],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "DIRECTV",
            "$69.99–$159.99/mo.",
            "190–290+",
            "450 hrs.",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="centurylink-bundles">
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
          change. Not all offers available in all areas. Simply Unlimited Phone:
          Taxes and fees apply. Rate excludes CTL Fees not to exceed
          $4.00/mo/line. Offer Details. <br />
          * Speed may not be available in your area. Paperless billing required.
          Taxes and fees apply. Online ONLY. Free Modem. <br />
          † Speed may not be available in your area. Maximum download/upload
          speed of up to 940Mbps via a wired connection. Paperless billing
          required. Taxes and fees apply. Offer details. Offer includes
          professional installation at customer’s eligible location. <br />‡
          Paperless billing or prepaid required. Additional taxes, fees, and
          surcharges apply. Get the fastest Internet speed available at your
          location (max speed is up to 140Mbps.)
        </p>
      </div>

      <CTA
        heading={
          " CenturyLink has excellent TV, internet, and phone bundle options."
        }
        desc={"Enter your zip code below to see availability in your area."}
      />

      <div className="section get-phone-bundles">
        <div className="head">
          <h2 className="sect-heading">
            Best CenturyLink <span> TV and internet bundles </span>
          </h2>
          <p className="sect-desc">
            CenturyLink’s fast fiber and DSL internet plans offer great internet
            performance regardless of where you live. CenturyLink has download
            speeds of up to 940Mbps, so you can stream TV shows and browse the
            internet without missing a beat. <br />
            CenturyLink doesn’t have its own TV service anymore. But during
            checkout, you can add a DIRECTV or DISH plan with your internet
            service for live TV coverage. CenturyLink also has landline phone
            plans if your home needs reliable phone service. <br />
            Check out our CenturyLink internet guide for a full breakdown of
            CenturyLink’s internet options.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change.Simply Unlimited Phone: Taxes and
          fees apply. Rate excludes CTL Fees not to exceed $4.00/mo/line. Offer
          Details. <br />
          † Speed may not be available in your area. Maximum download/upload
          speed of up to 940Mbps via a wired connection. Paperless billing
          required. Taxes and fees apply. Offer details. Offer includes
          professional installation at customer’s eligible location. <br />‡
          Paperless billing or prepaid required. Additional taxes, fees, and
          surcharges apply. Get the fastest Internet speed available at your
          location (max speed is up to 140Mbps.)
        </p>
        <br />
        <br />
        <div className="package-table-container channels">
          <Image className="mark" src={dotted} alt="mark" />
          <h4>CenturyLink internet bundles and deals</h4>
          <p>
            CenturyLink enrollment deals often include free internet equipment
            and waived installation fees. Visit CenturyLink to see current
            promotions in your area.
          </p>
          <br />
          <hr />
          <div className="btn">
            <Link href={"/"}>find centuryLink Deals</Link>
          </div>
        </div>
      </div>

      <div className="section dish-directv-bundles ">
        <div className="head">
          <h2 className="sect-heading">
            CenturyLink TV bundles: <span> DISH vs DIRECTV </span>
          </h2>
          <p className="sect-desc">
            Unlike many internet providers, CenturyLink doesn’t directly offer
            TV services. Instead, you can add DIRECTV or DISH to your internet
            plan. Although neither provider works directly with CenturyLink,
            both providers have great benefits, like lengthy price guarantees
            and high channel counts. Check out our DISH vs. DIRECTV breakdown to
            learn more about each provider.
          </p>
        </div>
        <PackageTable item={packageTableDataBundles} />
        <div className="package-table-container channels">
          <Image className="mark" src={dotted} alt="mark" />
          <h4>CenturyLink availability</h4>
          <br />
          <p>CenturyLink is available in sixteen states throughout the US.</p>
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
            <Link href={"/"}> check centuryLink Availability</Link>
          </div>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> CenturyLink bundles </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Does DIRECTV bundle with
                CenturyLink?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Yes, CenturyLink does bundle with DIRECTV. You can add any
                  plan from DIRECTV to your CenturyLink bundle and combine both
                  services onto a single bill.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Does DIRECTV bundle with CenturyLink?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, CenturyLink does bundle with DIRECTV. You can add any plan
              from DIRECTV to your CenturyLink bundle and combine both services
              onto a single bill.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does DISH bundle with
                CenturyLink?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>Yes, DISH bundles its TV plans with CenturyLink.</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does DISH bundle with CenturyLink?"}
            cssClass={"faq-content"}
          >
            <p>Yes, DISH bundles its TV plans with CenturyLink.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Can you get TV through
                CenturyLink?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  You can get TV service with CenturyLink, but CenturyLink no
                  longer directly offers TV plans. Instead, you’ll add DISH or
                  DIRECTV service to your bundle.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Can you get TV through CenturyLink?"}
            cssClass={"faq-content"}
          >
            <p>
              You can get TV service with CenturyLink, but CenturyLink no longer
              directly offers TV plans. Instead, you’ll add DISH or DIRECTV
              service to your bundle.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What is the highest speed
                CenturyLink offers?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  CenturyLink’s highest internet plan comes with 940Mbps
                  download speeds and 500Mbps upload speeds.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" What is the highest speed CenturyLink offers?"}
            cssClass={"faq-content"}
          >
            <p>
              CenturyLink’s highest internet plan comes with 940Mbps download
              speeds and 500Mbps upload speeds.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default CenturyLinkBundles;
