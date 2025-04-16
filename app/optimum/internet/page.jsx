// import React, { useState } from "react";
import "./optimum-internet.scss";
// import { optimumNavLinks } from "../../assets/data/navLinks/optimumNavLinks";
import xfintyTvHeroBg from "../../assets/images/xfinity-tv-hero-bg.jpg";
// import SubNav from "../../components/sub-nav/SubNav";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import PackageCard from "../../components/package-card/PackageCard";
import CTA from "../../components/cta-section/CTA";
import mark from "../../assets/images/mark.png";
import dotted from "../../assets/images/dotted.png";
import signal from "../../assets/images/signal.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import PackageTable from "../../components/package-table/PackageTable";
import PackagePricing from "../../components/package-pricing/PackagePricing";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Optimum Internet Plans, Speeds, And Prices"
};

const OptimumInternet = () => {
  // const [faq, setFaq] = useState();

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "Optimum Internet Plans, Speeds, And Prices",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "Get fiber internet speeds up to 5 Gbps",
      "Free Gateway 6 and Wi-Fi extender",
      "Free Wi-Fi hotspot network",
      "Free Visa® gift card up to $300",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Internet plans starting at $40.00/mo.",
  };
  let packageTableData = [
    {
      head: [
        "Package",
        "Price*",
        "Download speeds up to",
        "Upload speeds up to",
        "Connection type",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Optimum 300 ",
            "$40.00/mo. ",
            "300 Mbps ",
            "20 Mbps ",
            "Cable",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Optimum 500 ",
            "$60.00/mo. ",
            "500 Mbps ",
            "20 Mbps ",
            "Cable ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Optimum 1 Gig Internet ",
            "$80.00/mo. ",
            "940 Mbps ",
            "35 Mbps ",
            "Cable ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Fiber Internet 300 ",
            "$40.00/mo. ",
            "300 Mbps ",
            "300 Mbps ",
            "Fiber ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "Fiber Internet 500 ",
            "$60.00/mo. ",
            "500 Mbps ",
            "500 Mbps ",
            "Fiber ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "6.",
            "Fiber Internet 1 Gig ",
            "$80.00/mo. ",
            "940 Mbps ",
            "940 Mbps ",
            "Fiber ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "7.",
            "Fiber Internet 2 Gig ",
            "$100.00/mo. ",
            "2,000 Mbps ",
            "2,000 Mbps ",
            "Fiber ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "8.",
            "Fiber Internet 5 Gig ",
            "$180.00/mo. ",
            "5,000 Mbps ",
            "5,000 Mbps ",
            "Fiber ",
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
    <div className="optimum-internet">
      {/* <SubNav links={optimumNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Best <span>Optimum Internet Service </span> Offers
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
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
        <br />
        <p></p>
      </div>

      <CTA
        heading={"Interested in Optimum Internet Services?"}
        desc={
          "Type in your zip code to see Optimum’s internet plans in your area."
        }
      />

      <div className="section optimum-internet-plans-and-packages">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> internet plans and packages </span> have fast
            downloads
          </h2>
          <p className="sect-desc">
            Optimum has two types of internet: Optimum Fiber and Optimum
            Internet. If your neighborhood has Optimum Fiber coverage, you’ll
            get Optimum’s best fiber internet plans with download speeds up to
            5,000 Mbps. Fiber internet also comes with equal upload and download
            speeds, so you’ll have zero wait times during video calls or Google
            Drive transfer sessions.
            <br />
            If your house gets only Optimum Internet, you’ll still have fast
            cable internet speeds that’ll be more than enough for your entire
            household. Optimum Internet offers download speeds up to 940 Mbps,
            and customers will also get a free Gateway 6 router/modem and Wi-Fi
            extender.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-text">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change. * for 1 yr. Plus taxes, equip.
          charges and fees.
        </p>
        <br />
        <div className="package-table-container channels">
          <Image src={mark} alt="mark" className="mark" />
          <h4>Is Suddenlink still around?</h4>
          <br />
          <p>
            Optimum and Suddenlink have merged, so Suddenlink is no longer open
            for business. But if you’re in one of the 17 states that previously
            had Suddenlink service, you can now get Optimum’s great prices and
            internet plans.
          </p>
          <hr className="hr" />
          <div className="btn">
            <Link href={"#"}>get optimum internet</Link>
          </div>
        </div>
      </div>

      <div className="section spectrum-internet-speed">
        <div className="head">
          <h2 className="sect-heading">
            Optimum internet speeds <span> mean no waits </span>
          </h2>
          <p className="sect-desc">
            Optimum’s internet plans are no slouch, but to get the most out of
            your Optimum plan, you’ll need an internet speed that matches your
            household’s needs. Here’s what you’ll get with three of Optimum’s
            most popular internet plans.
          </p>
        </div>
        <PackagePricing />
      </div>

      <div className="section optimum-blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"></p>
        </div>
        <br />
        <div className="package-table-container channels">
          <Image src={dotted} alt="mark" className="mark" />
          <h4>Get the best deal with Optimum internet bundles</h4>
          <br />
          <p>
            Optimum’s TV and internet bundles come with extensive channel
            lineups and great hardware like the Optimum Stream TV box, which
            includes apps like Netflix and more than 50 free TV channels.
            <br />
            You can also bundle Optimum Mobile with your internet plan for
            affordable cell phone service. Optimum Mobile’s smartphone plans
            include large data caps, 5G coverage, and low monthly rates.
          </p>
        </div>
      </div>

      <div className="section optimum-save-time">
        <div className="head">
          <h2 className="sect-heading">
            Save time <span> using Optimum Wi-Fi plans </span>
          </h2>
          <p className="sect-desc">
            You won’t have to lift a finger if you want Optimum Wi-Fi service.
            Every Optimum internet plan includes a free Gateway 6 router/modem
            and a Wi-Fi signal extender. Optimum internet subscribers can also
            access Optimum’s nationwide hotspot network for free Wi-Fi access at
            any time.
          </p>
        </div>
        <br />
        <div className="package-table-container channels">
          <Image src={signal} alt="mark" className="mark" />
          <h4>Want to learn more about Optimum internet?</h4>
          <br />
          <p>
            Check out our full Optimum internet review for a full breakdown of
            Optimum’s internet plans.
          </p>
        </div>
      </div>

      <div className="section optimum-internet-features">
        <div className="head">
          <h2 className="sect-heading">
            Learn about Optimum <span> internet features </span>
          </h2>
          <p className="sect-desc">
            Optimum’s internet plans come with benefits beyond its fast download
            speeds. Let’s break down a few of Optimum’s best features.
          </p>
        </div>
      </div>

      <div className="section optimum-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Optimum internet </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What is the cheapest
                Optimum internet package?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Optimum’s cheapest internet package costs $40 per month and
                  provides speeds up to 300 Mbps. But Optimum’s other plans
                  cover a range of speeds up to 5,000 Mbps, with the most
                  expensive package costing $180 per month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What is the cheapest Optimum internet package?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum’s cheapest internet package costs $40 per month and
              provides speeds up to 300 Mbps. But Optimum’s other plans cover a
              range of speeds up to 5,000 Mbps, with the most expensive package
              costing $180 per month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is Optimum 300 Mbps good?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Yes, Optimum 300 Mbps is a good deal because it provides
                  enough speed for most households for only $40 a month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Is Optimum 300 Mbps good?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, Optimum 300 Mbps is a good deal because it provides enough
              speed for most households for only $40 a month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What is the best Optimum
                Wi-Fi plan?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  The best Optimum Wi-Fi plans are Optimum 300 and Optimum 1
                  Gig. Optimum 300 ($40 per month) offers the best value for
                  most households, while Optimum 1 Gig has fast 940 Mbps maximum
                  download speeds.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" What is the best Optimum Wi-Fi plan?"}
            cssClass={"faq-content"}
          >
            <p>
              The best Optimum Wi-Fi plans are Optimum 300 and Optimum 1 Gig.
              Optimum 300 ($40 per month) offers the best value for most
              households, while Optimum 1 Gig has fast 940 Mbps maximum download
              speeds.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How much is Optimum
                internet by itself?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Optimum internet plans start at $40 per month for the first 12
                  months.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" How much is Optimum internet by itself?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum internet plans start at $40 per month for the first 12
              months.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>What is Optimum Internet?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Optimum Internet is the name for Optimum’s cable internet
                  plans. If you’re in one of the 20 states with Optimum service,
                  you can sign up for an Optimum internet service plan at home.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"What is Optimum Internet?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum Internet is the name for Optimum’s cable internet plans.
              If you’re in one of the 20 states with Optimum service, you can
              sign up for an Optimum internet service plan at home.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>What Optimum Internet plan
                is best?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  The Optimum internet plan with the best value is the Optimum
                  300 Mbps plan, which is best for most households. If you’re
                  looking for the fastest speed, the Optimum Fiber Internet 5
                  Gig plan is the company’s top offering.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"What Optimum Internet plan is best?"}
            cssClass={"faq-content"}
          >
            <p>
              The Optimum internet plan with the best value is the Optimum 300
              Mbps plan, which is best for most households. If you’re looking
              for the fastest speed, the Optimum Fiber Internet 5 Gig plan is
              the company’s top offering.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default OptimumInternet;
