// import React, { useState } from "react";
import "./cox-internet.scss";
// import { coxNavLinks } from "../../assets/data/navLinks/coxNavLinks";
import xfintyTvHeroBg from "../../assets/images/xfinity-deals-hero-bg.jpg";
// import SubNav from "../../components/sub-nav/SubNav";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import PackageCard from "../../components/package-card/PackageCard";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
import signal from "../../assets/images/signal.png";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Cox Internet Plans, Prices, And Packages",
};

const CoxInternet = () => {
  // const [faq, setFaq] = useState();

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "Cox Internet Plans, Prices, And Packages",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "Download speed up to 2,000 Mbps",
      "Prepaid Cox internet plan offers flexibility and convenience",
      "Free Wi-Fi access with Cox hotspot network",
      "Protect your home internet with free Cox Security Suite",
    ],
    buttonName: "Check availability",
    buttonPath: "#",
    price: "Internet plans starting at $49.99/mo.",
  };

  let packageTableData = [
    {
      head: [
        "Plan",
        "Price",
        "Download speeds up to",
        "Upload speeds",
        "Details",
      ],

      body: [
        {
          content: ["1.", "Go Fast", "$49.99/mo.*", "100 Mbps", "5 Mbps"],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "StraightUp Internet",
            "$50.00/mo.**",
            "100 Mbps",
            "3 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Go Faster",
            "$69.99/mo.*",
            "250 Mbps",
            "Up to 10 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Go Even Faster",
            "$89.99/mo.†",
            "500 Mbps",
            "10 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "Go Super Fast",
            "$109.99/mo.‡",
            "1,000 Mbps",
            "35 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Go Beyond Fast",
            "$149.99/mo.*",
            "2,000 Mbps",
            "100 Mbps",
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
    <div className="cox-internet">
      {/* <SubNav links={coxNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Top Cox <span> internet plans </span>
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
        <p> </p>
      </div>

      <CTA
        heading={"interested in cox services?"}
        desc={
          "Interested in getting Cox internet service at your home? Enter your zip code below to see Cox services in your area."
        }
      />

      <div className="section cox-internet-packages-get-fast-speeds-and-flexibility">
        <div className="head">
          <h2 className="sect-heading">
            <span>Cox internet packages: </span> get fast speeds and flexibility
          </h2>
          <p className="sect-desc">
            Cox’s cable internet plans come with competitive first-year pricing
            and great speed options. Go Fast offers steady 100 Mbps speeds for a
            budget-friendly $49.99 per month. If you’re looking for
            straightforward internet service, we’d recommend Cox’s prepaid
            StraightUp Internet service ($50 per month). StraightUp Internet has
            contract-free service, 100 Mbps speeds, a bundled Wi-Fi gateway, and
            a two-year price guarantee.
            <br />
            If you need faster internet service, Cox won’t leave you
            empty-handed. Cox’s other internet packages have download speeds
            between 250 Mbps and 2,000 Mbps, so you’ll have great options if
            your household is full of gamers, Netflix watchers, or
            work-from-home employees who require smooth Zoom calls.
            <br />
            Cox’s internet plans come with a standard 1.25 TB data cap, but if
            your household is full of heavy internet users, you can upgrade to
            an unlimited data internet plan. The price for Cox’s unlimited data
            upgrade is $49.99 per month.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change. *No annual contract or
          cancellation fees. **Not available in all areas. No term agreement.
          Same price for 2 yrs. Pricing, packages, and policies are subject to
          change, including when adjusting or removing services or equipment.
          †For 12 mos. No annual contract. ‡For 12 mos. w/ 1-yr. term agreement.
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
        <br />
        <div className="package-table-container channels">
          <Image src={signal} alt="mark" className="mark" />
          <h4>Looking for Cox internet service?</h4>
          <br />
          <p>
            Visit our{" "}
            <span className="link">
              <Link href={"#"}>Cox internet review for a full</Link>
            </span>{" "}
            breakdown of Cox’s internet plans.
          </p>
        </div>
      </div>

      <div className="section cox-internet-service-service-features">
        <div className="head">
          <h2 className="sect-heading">
            <span>Cox </span> internet service features
          </h2>
          <p className="sect-desc">
            Cox includes many bonus add-ons alongside its internet plans, so
            let’s break down a few of the biggest Cox internet features.
          </p>
        </div>
      </div>

      <div className="section cox-faq">
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
                <span>{faq === 1 ? "-" : "+"}</span>What's the cheapest Cox
                internet?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  The cheapest Cox internet plans are Go Fast ($49.99 per month)
                  and StraightUp Internet ($50.00 per month). Both plans have
                  100 Mbps download speeds, but Go Fast is a standard internet
                  plan, while StraightUp Internet is a prepaid plan.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"What's the cheapest Cox internet?"}
            cssClass={"faq-content"}
          >
            <p>
              The cheapest Cox internet plans are Go Fast ($49.99 per month) and
              StraightUp Internet ($50.00 per month). Both plans have 100 Mbps
              download speeds, but Go Fast is a standard internet plan, while
              StraightUp Internet is a prepaid plan.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How much is the best Cox
                internet?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Our pick for the best Cox internet plan is Go Faster. The Cox
                  internet plan costs $69.99 monthly for your first year and
                  includes 250 Mbps download speeds.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"How much is the best Cox internet?"}
            cssClass={"faq-content"}
          >
            <p>
              Our pick for the best Cox internet plan is Go Faster. The Cox
              internet plan costs $69.99 monthly for your first year and
              includes 250 Mbps download speeds.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How fast is Cox internet
                speed?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Cox’s internet speeds range from $49.99–$149.99/mo.. The
                  fastest 2,000 Mbps plan is also known as Go Beyond Fast.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"How fast is Cox internet speed?"}
            cssClass={"faq-content"}
          >
            <p>
              Cox’s internet speeds range from $49.99–$149.99/mo.. The fastest
              2,000 Mbps plan is also known as Go Beyond Fast.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Can I just get Wi-Fi from
                Cox?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  It’s possible to get Cox Wi-Fi internet service by itself. The
                  Go Fast plan comes with the Cox Panoramic WiFi gateway, which
                  provides free home Wi-Fi access. If you’re on Cox’s other
                  internet plans, you can rent the gateway for $12 monthly.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={"Can I just get Wi-Fi from Cox?"}
            cssClass={"faq-content"}
          >
            <p>
              It’s possible to get Cox Wi-Fi internet service by itself. The Go
              Fast plan comes with the Cox Panoramic WiFi gateway, which
              provides free home Wi-Fi access. If you’re on Cox’s other internet
              plans, you can rent the gateway for $12 monthly.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Is Cox 500 Mbps good?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Yes, 500 Mbps is an excellent download speed if you’re looking
                  to support a family with several devices. Cox’s 500 Mbps plan
                  costs $89.99/mo.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"Is Cox 500 Mbps good?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, 500 Mbps is an excellent download speed if you’re looking to
              support a family with several devices. Cox’s 500 Mbps plan costs
              $89.99/mo.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> Does Cox have internet
                plans for seniors?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  No, unfortunately, Cox does not offer any senior discounts.
                  However, seniors can still save if they qualify for the
                  Connect2Compete program for low-income families.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"Does Cox have internet plans for seniors?"}
            cssClass={"faq-content"}
          >
            <p>
              No, unfortunately, Cox does not offer any senior discounts.
              However, seniors can still save if they qualify for the
              Connect2Compete program for low-income families.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default CoxInternet;
