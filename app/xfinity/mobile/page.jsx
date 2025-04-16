// import React, { useState } from "react";
// import SubNav from "../../components/sub-nav/SubNav";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { xfinityNavLinks } from "../../assets/data/navLinks/xfinityNavLinks";
import xfinityInternetHeroBg from "../../assets/images/xfinity-internet-hero-bg.jpg";
import "./xfinity-mobile.scss";
import Link from "next/link";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import PackageCard from "../../components/package-card/PackageCard";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Xfinity Mobile Plans, Packages, And Deals 2024"
};

const XfinityMobile = () => {
  // const [faq, setFaq] = useState(null);

  const heroContent = {
    img: xfinityInternetHeroBg,
    heading: "Xfinity Mobile Plans, Packages, And Deals 2024",
    desc: "Discover Xfinity Mobile's 2024 plans, packages, and deals. Save on your internet bill while enjoying excellent phone service with a variety of options to suit your needs.",
    points: [
      "Save up to $1,000 on Samsung Galaxy phones",
      "Up to 50 GB of high-speed mobile data",
      "Nationwide 5G coverage for fast downloads",
      "Mix and match phone plans for more savings",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "TV packages starting at $15.00/mo.",
  };

  let packageTableData = [
    {
      head: [
        "Plan",
        "Monthly price (single line)",
        "Monthly price (2–4 lines) speeds",
        "Monthly price (5–10 lines)",
        "Data allowance",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "By The Gig",
            "$15.00/mo.",
            "$15.00/mo.",
            "$15.00/mo.",
            "10 GB",
          ],
          linkPath: "#",
        },

        {
          content: [
            "2.",
            "By The Gig",
            "$15.00/mo.",
            "$15.00/mo.",
            "$15.00/mo.",
            "10 GB",
          ],
          linkPath: "#",
        },

        {
          content: [
            "3.",
            "By The Gig",
            "$15.00/mo.",
            "$15.00/mo.",
            "$15.00/mo.",
            "10 GB",
          ],
          linkPath: "#",
        },

        {
          content: [
            "4.",
            "By The Gig",
            "$15.00/mo.",
            "$15.00/mo.",
            "$15.00/mo.",
            "10 GB",
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
    <div className="xfinity-mobile">
      {/* <SubNav links={xfinityNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section xfinity-deals-and-promotions">
        <div className="head">
          <h2 className="sect-heading">
            Best Xfinity <span>offers and discounts </span>
          </h2>
          <p className="sect-desc">
            <span>
              <Link href={"#"}>Xfinity</Link>
            </span>{" "}
            is available in most places in the US. In some areas, it’s the only
            choice for cable TV and internet. That’s not always bad because
            Xfinity offers many good and fairly cheap plans (along with a few
            very expensive ones). Whether you want a budget or premium Xfinity
            service, we’ve collected several bundles and promotions to help you
            save money on your monthly bill.
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

        <p className="bottom-line">
          *Price with two or more phone lines. Data effective as of publish
          date. Offers and availability may vary by location and are subject to
          change.
        </p>
      </div>

      <CTA
        heading={"Want Xfinity service?"}
        desc={
          "Xfinity Mobile needs you to have an Xfinity internet plan. Type in your zip code below to find out if Xfinity provides internet service where you live."
        }
      />

      <div className="section xfinity-mobile-pricing">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity Mobile prices: pay a little, get a lot!
          </h2>
          <p className="sect-desc">
            Want to save money on your phone bill? Xfinity Mobile has special
            deals just for people who use Xfinity Internet. If you only need
            phone service, our By the Gig plan is really affordable. With By the
            Gig, you pay one fixed price each month for phone service and
            internet that can be shared among different people. You also get
            cool stuff like HD video and super-fast 5G internet. If you spend a
            lot of time on apps like TikTok or YouTube, our Unlimited plans are
            perfect for you. You get up to 50 GB of fast internet every month,
            so you don't have to worry about extra charges. Families with lots
            of phones can save even more with our discounts for extra lines. The
            more lines you add, the less you pay each month.
          </p>
        </div>

        <PackageTable item={packageTableData} />
      </div>

      <div className="section xfinity-mobile-faq">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span>Mobile</span> FAQ
          </h2>

          <p className="sect-desc">
            TL;DR? Xfinity kills it. For more detailed info on all Xfinity
            equipment and services, see our comprehensive Xfinity equipment
            guide.
          </p>
        </div>

        <div className="faq-wrapper">
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(1)}>
                <span>{faq === 1 ? "-" : "+"}</span> What are Xfinity tV
                packages?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Xfinity TV packages by Comcast come through a cable connection
                  with up to 185+ channels. Most packages also include 20 hours
                  of DVR storage via the X1 DVR box, plus the Xfinity Stream
                  app.
                </p>
                <ul>
                  <li>
                    <span className="bold">Choice TV: </span>
                    $20.00–$25.00/mo., 10+ channels
                  </li>
                  <li>
                    <span className="bold">Popular TV: </span>
                    $50.00–$60.00/mo., 125+ channels
                  </li>
                  <li>
                    <span className="bold">Ultimate TV: </span>
                    $68.50–$80.00/mo., 185+ channels
                  </li>
                </ul>

                <p>
                  Check to see what Xfinity TV packages are available in your
                  area.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"2"}
            title={"What are Xfinity TV packages?"}
            cssClass={"faq-content"}
          >
            <p>
              Xfinity TV packages by Comcast come through a cable connection
              with up to 185+ channels. Most packages also include 20 hours of
              DVR storage via the X1 DVR box, plus the Xfinity Stream app.
            </p>
            <ul>
              <li>
                <span className="bold">Choice TV: </span>
                $20.00–$25.00/mo., 10+ channels
              </li>
              <li>
                <span className="bold">Popular TV: </span>
                $50.00–$60.00/mo., 125+ channels
              </li>
              <li>
                <span className="bold">Ultimate TV: </span>
                $68.50–$80.00/mo., 185+ channels
              </li>
            </ul>

            <p>
              Check to see what Xfinity TV packages are available in your area.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What is the cheapest
                Xfinity TV package?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  The cheapest Xfinity TV package is{" "}
                  <span className="bold"> Choice TV</span>, a basic cable
                  package that offers 10+ channels for $20.00–$25.00/mo.
                </p>
                <p>
                  The cheapest regular cable package is{" "}
                  <span className="bold"> Popular TV</span> ($50.00–$60.00/mo.,
                  125+ channels).
                </p>
                <p>
                  Looking for more ways to cut monthly costs? We like the way
                  you think! View Xfinity’s{" "}
                  <span className="link">
                    <Link href={"#"}>current deals and promotions</Link>
                  </span>
                  .
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"3"}
            title={"What is the cheapest Xfinity TV package?"}
            cssClass={"faq-content"}
          >
            <p>
              The cheapest Xfinity TV package is{" "}
              <span className="bold"> Choice TV</span>, a basic cable package
              that offers 10+ channels for $20.00–$25.00/mo.
            </p>
            <p>
              The cheapest regular cable package is{" "}
              <span className="bold"> Popular TV</span> ($50.00–$60.00/mo., 125+
              channels).
            </p>
            <p>
              Looking for more ways to cut monthly costs? We like the way you
              think! View Xfinity’s{" "}
              <span className="link">
                <Link href={"#"}>current deals and promotions</Link>
              </span>
              .
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What are Xfinity tV
                packages?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Xfinity TV packages by Comcast come through a cable connection
                  with up to 185+ channels. Most packages also include 20 hours
                  of DVR storage via the X1 DVR box, plus the Xfinity Stream
                  app.
                </p>
                <ul>
                  <li>
                    <span className="bold">Choice TV: </span>
                    $20.00–$25.00/mo., 10+ channels
                  </li>
                  <li>
                    <span className="bold">Popular TV: </span>
                    $50.00–$60.00/mo., 125+ channels
                  </li>
                  <li>
                    <span className="bold">Ultimate TV: </span>
                    $68.50–$80.00/mo., 185+ channels
                  </li>
                </ul>

                <p>
                  Check to see what Xfinity TV packages are available in your
                  area.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"4"}
            title={"What are Xfinity TV packages?"}
            cssClass={"faq-content"}
          >
            <p>
              Xfinity TV packages by Comcast come through a cable connection
              with up to 185+ channels. Most packages also include 20 hours of
              DVR storage via the X1 DVR box, plus the Xfinity Stream app.
            </p>
            <ul>
              <li>
                <span className="bold">Choice TV: </span>
                $20.00–$25.00/mo., 10+ channels
              </li>
              <li>
                <span className="bold">Popular TV: </span>
                $50.00–$60.00/mo., 125+ channels
              </li>
              <li>
                <span className="bold">Ultimate TV: </span>
                $68.50–$80.00/mo., 185+ channels
              </li>
            </ul>

            <p>
              Check to see what Xfinity TV packages are available in your area.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What are Xfinity tV
                packages?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Xfinity TV packages by Comcast come through a cable connection
                  with up to 185+ channels. Most packages also include 20 hours
                  of DVR storage via the X1 DVR box, plus the Xfinity Stream
                  app.
                </p>
                <ul>
                  <li>
                    <span className="bold">Choice TV: </span>
                    $20.00–$25.00/mo., 10+ channels
                  </li>
                  <li>
                    <span className="bold">Popular TV: </span>
                    $50.00–$60.00/mo., 125+ channels
                  </li>
                  <li>
                    <span className="bold">Ultimate TV: </span>
                    $68.50–$80.00/mo., 185+ channels
                  </li>
                </ul>

                <p>
                  Check to see what Xfinity TV packages are available in your
                  area.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"5"}
            title={"What are Xfinity TV packages?"}
            cssClass={"faq-content"}
          >
            <p>
              Xfinity TV packages by Comcast come through a cable connection
              with up to 185+ channels. Most packages also include 20 hours of
              DVR storage via the X1 DVR box, plus the Xfinity Stream app.
            </p>
            <ul>
              <li>
                <span className="bold">Choice TV: </span>
                $20.00–$25.00/mo., 10+ channels
              </li>
              <li>
                <span className="bold">Popular TV: </span>
                $50.00–$60.00/mo., 125+ channels
              </li>
              <li>
                <span className="bold">Ultimate TV: </span>
                $68.50–$80.00/mo., 185+ channels
              </li>
            </ul>

            <p>
              Check to see what Xfinity TV packages are available in your area.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> What are Xfinity tV
                packages?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Xfinity TV packages by Comcast come through a cable connection
                  with up to 185+ channels. Most packages also include 20 hours
                  of DVR storage via the X1 DVR box, plus the Xfinity Stream
                  app.
                </p>
                <ul>
                  <li>
                    <span className="bold">Choice TV: </span>
                    $20.00–$25.00/mo., 10+ channels
                  </li>
                  <li>
                    <span className="bold">Popular TV: </span>
                    $50.00–$60.00/mo., 125+ channels
                  </li>
                  <li>
                    <span className="bold">Ultimate TV: </span>
                    $68.50–$80.00/mo., 185+ channels
                  </li>
                </ul>

                <p>
                  Check to see what Xfinity TV packages are available in your
                  area.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"6"}
            title={"What are Xfinity TV packages?"}
            cssClass={"faq-content"}
          >
            <p>
              Xfinity TV packages by Comcast come through a cable connection
              with up to 185+ channels. Most packages also include 20 hours of
              DVR storage via the X1 DVR box, plus the Xfinity Stream app.
            </p>
            <ul>
              <li>
                <span className="bold">Choice TV: </span>
                $20.00–$25.00/mo., 10+ channels
              </li>
              <li>
                <span className="bold">Popular TV: </span>
                $50.00–$60.00/mo., 125+ channels
              </li>
              <li>
                <span className="bold">Ultimate TV: </span>
                $68.50–$80.00/mo., 185+ channels
              </li>
            </ul>

            <p>
              Check to see what Xfinity TV packages are available in your area.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default XfinityMobile;
