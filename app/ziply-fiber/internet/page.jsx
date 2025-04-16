// import React, { useState } from "react";
import "./ziply-fiber-internet.scss";
import xfintyTvHeroBg from "../../assets/images/xfinity-tv-hero-bg.jpg";
// import SubNav from "../../components/sub-nav/SubNav";
// import { ziplyfiberNavLinks } from "../../assets/data/navLinks/ziplyfiberNavLinks";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import CTA from "../../components/cta-section/CTA";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import PackageCard from "../../components/package-card/PackageCard";
import PackageTable from "../../components/package-table/PackageTable";
import PackagePricing from "../../components/package-pricing/PackagePricing";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import quotations from "../../assets/images/quotations.svg";
import dotted from "../../assets/images/dotted.png";
// import Newsletter from "../../components/newsletter/Newsletter";

const ZiplyFiberInternet = () => {
  // const [faq, setFaq] = useState(null);

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "Ziply Fiber Internet Plans",
    desc: "Are you and your household trying to binge-watch the latest hit series, video call for work, or just browse social media? Read on to find an AT&T plan that will work best for you. Plus, many come with perks like:",
    points: [
      "Download speeds up to 10,000Mbps",
      "Fiber internet plans start at $20/mo.",
      "No contracts or data caps",
      "30-day money-back guarantee",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Internet packages starting at $20.00/month",
  };

  let packageTableData = [
    {
      head: [
        "Package",
        "Price",
        "Download speeds",
        "Upload speeds up to",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Spectrum Internet",
            "Starting at $49.99/mo. for 12 mos.",
            "Up to 300 Mbps",
            "10 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Spectrum Internet® Ultra",
            "Starting at $69.99/mo. for 12 mos.",
            "Up to 500 Mbps",
            "20 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Spectrum Internet Gig",
            "Starting at $89.99/mo. for 12 mos.",
            "Up to 1000 Mbps",
            "35 Mbps",
          ],
          linkPath: "#",
        },
      ],
    },
  ];

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="ziply-fiber-internet">
      {/* <SubNav links={ziplyfiberNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Top Ziply <span> fiber internet plans</span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
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
      </div>

      <CTA
        heading={"Are you interested in Ziply Fiber internet plans?"}
        desc={
          "Enter your zip code below to see if Ziply Fiber is available in your area."
        }
      />

      <div className="section internet-service">
        <div className="head">
          <h2 className="sect-heading">
            Ziply Fiber internet plans:{" "}
            <span> fast fiber internet service</span>
          </h2>
          <p className="sect-desc">
            Ziply Fiber offers the fastest fiber internet packages around. With
            download speeds up to 10,000Mbps, your household will comfortably
            download games, take Zoom calls, and stream TV for years to come.
            Plus, you won’t have to break your budget to get Ziply Fiber’s great
            internet plans because they start at only $20 monthly. If Ziply
            Fiber isn’t available in your area, you’ll still be able to get
            Ziply’s DSL Internet plan for basic service.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change. <br />
          For new residential customers only. No annual contract required.
          Prices shown are before taxes and fees and require autopay and
          paperless billing. One-time introductory price for first 12 months.
          Afterwards, standard pricing applies. <br />
          *for the first 12 mos. with Autopay and paperless billing.
        </p>

        <div className="package-table-container channels">
          <Image className="mark" src={quotations} alt="quotations" />
          <h4>Want Ziply Fiber internet?</h4>
          <p className="after-heading">
            Visit our Ziply Fiber internet review to learn more about Ziply
            Fiber’s plans and pricing.
          </p>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={dotted} alt="dotted" />
          <h4>Ziply Fiber internet deals</h4>
          <p>
            Ziply’s best internet deals include a free month of internet
            service, waived installation fees, and bundled Whole Home WiFi
            upgrades. Check out Ziply’s plans to learn more about its current
            offers.
          </p>
          <br />
          <hr />
          <div className="btn">
            <Link href={"#"}>view ziply deals</Link>
          </div>
        </div>
      </div>

      <div className="section features">
        <div className="head">
          <h2 className="sect-heading">
            Ziply Fiber internet <span> features </span>
          </h2>
          <p className="sect-desc">
            When you sign up for Spectrum internet, you’ll get much more than an
            internet connection at your home. Let’s break down everything that
            comes with your Spectrum internet plan.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Unlimited data</h4>
          <p className="after-heading">
            Is your household regularly watching the latest 4K movies or
            downloading large video games? With Ziply Fiber, you won’t have to
            worry about data caps or expensive penalty fees. Every Ziply Fiber
            plan comes with unlimited data.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>No contracts</h4>
          <p className="after-heading">
            Get internet on your own schedule thanks to Ziply’s no-contract
            plans. Ziply doesn’t lock you into a long-term contract with
            expensive early termination fees.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Great upload speeds</h4>
          <p className="after-heading">
            Every Ziply Fiber plan has great upload speeds of up to 10,000Mbps,
            so you’ll have smooth Zoom calls and quick Google Drive backups.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Ziply Fiber availability</h4>
          <p className="after-heading">
            Ziply operates in Oregon, Washington, Idaho, and Montana. Ziply’s
            fiber network covers a lot of major and mid-sized cities in the
            Pacific Northwest, but exact availability depends on your address.
            Check out our Ziply Fiber availability map to learn more about
            Ziply’s coverage area.
          </p>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Ziply Fiber internet </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How much does Ziply
                internet cost?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>Ziply internet costs between $20.00–$300.00/mo..</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" How much does Ziply internet cost?"}
            cssClass={"faq-content"}
          >
            <p>Ziply internet costs between $20.00–$300.00/mo..</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is Ziply Fiber down?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Ziply Fiber may occasionally experience service outages. Check
                  Ziply’s outage tool on your Ziply account to confirm outages
                  in your area.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Is Ziply Fiber down?"}
            cssClass={"faq-content"}
          >
            <p>
              Ziply Fiber may occasionally experience service outages. Check
              Ziply’s outage tool on your Ziply account to confirm outages in
              your area.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Is Ziply Fiber good?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Ziply Fiber offers low prices for fiber internet service, but
                  its four-state footprint is small compared to other fiber
                  internet providers.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Is Ziply Fiber good?"}
            cssClass={"faq-content"}
          >
            <p>
              Ziply Fiber offers low prices for fiber internet service, but its
              four-state footprint is small compared to other fiber internet
              providers.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span>Who owns Ziply Fiber?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  WaveDivision Capital owns Ziply Fiber. Frontier and Verizon
                  previously managed the provider.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={"Who owns Ziply Fiber?"}
            cssClass={"faq-content"}
          >
            <p>
              WaveDivision Capital owns Ziply Fiber. Frontier and Verizon
              previously managed the provider.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Is T-Mobile Home Internet
                4G or 5G?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  T-Mobile Internet uses 5G and 4G. T-Mobile Home Internet will
                  connect to T-Mobile’s 5G network for the fastest speeds, but
                  it can also use T-Mobile’s 4G network as a backup option if
                  your area’s 5G network is experiencing high traffic or slow
                  speeds.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" Is T-Mobile Home Internet 4G or 5G?"}
            cssClass={"faq-content"}
          >
            <p>
              T-Mobile Internet uses 5G and 4G. T-Mobile Home Internet will
              connect to T-Mobile’s 5G network for the fastest speeds, but it
              can also use T-Mobile’s 4G network as a backup option if your
              area’s 5G network is experiencing high traffic or slow speeds.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> How many devices can I
                connect to my T-Mobile home internet?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  T-Mobile’s internet gateway can connect up to 64 devices to
                  your T-Mobile home internet connection.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={
              " How many devices can I connect to my T-Mobile home internet?"
            }
            cssClass={"faq-content"}
          >
            <p>
              T-Mobile’s internet gateway can connect up to 64 devices to your
              T-Mobile home internet connection.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default ZiplyFiberInternet;
