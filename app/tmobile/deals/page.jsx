// import React, { useState } from "react";
import "./t-mobile-deals.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { tmobileNavLinks } from "../../assets/data/navLinks/tmobileNavLinks";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import xfintyTvHeroBg from "../../assets/images/xfinity-tv-hero-bg.jpg";
import quotationsIcon from "../../assets/images/quotations.svg";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import PackageCard from "../../components/package-card/PackageCard";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "T-Mobile Deals And Promotions"
};

const TMobileDeals = () => {
  //   const [faq, setFaq] = useState();

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "T-Mobile Deals And Promotions",
    desc: "Are you and your household trying to binge-watch the latest hit series, video call for work, or just browse social media? Read on to find an AT&T plan that will work best for you. Plus, many come with perks like:",
    points: [
      "Pay only $30/mo. for T-Mobile 5G Home Internet with phone bundle ",
      "Free Netflix and Apple TV+ with qualifying phone plan ",
      " No price increases with T-Mobile Price Lock",
      "Save up to $650 on early termination fees ",
    ],
    buttonName: "check availability",
    buttonPath: "#",
    price: "T-Mobile deals starting at $30.00/mo.",
  };
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="t-mobile-deals">
      {/* <SubNav links={tmobileNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Top t-mobile <span> Deals and promotions </span>
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
      </div>

      <CTA
        heading={
          "T-Mobile offers excellent deals for its phone and internet customers."
        }
        desc={
          "Enter your zip code below to see T-Mobile’s home internet availability in your area."
        }
      />

      <div className="section important-links">
        <div className="head">
          <h2 className="sect-heading">
            Jump to <span>important links</span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>

        <div className="all-links">
          <Link href={"#"}> Bundle T-Mobile phone and 5G Home Internet </Link>
          <Link href={"#"}>Get $50 free </Link>
          <Link href={"#"}>Free Netflix, Apple TV+, and more </Link>
          <Link href={"#"}>Save up to $650 in early termination fees </Link>
          <Link href={"#"}> Free Blink smart security package </Link>
        </div>
      </div>

      <div className="section deals">
        <div className="head">
          <h2 className="sect-heading">
            T-Mobile <span> deals and promotions </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>T-Mobile deal #1: Bundle T-Mobile phone and 5G Home Internet </h4>
          <p className="after-heading">
            Get the biggest T-Mobile phone deals when you bundle T-Mobile 5G
            Home Internet with at least one Magenta MAX, Go5G Next, or Go5G Plus
            phone line. You’ll get a $20 monthly discount on T-Mobile 5G Home
            Internet, bringing your monthly internet price down to only $30.
          </p>
          <br />
          <hr />
          <div className="btn">
            <Link href={"#"}>check availability</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>T-Mobile deal #2: Get $50 free</h4>
          <p className="after-heading">
            Get a $50 virtual Prepaid Mastercard® when you sign up for T-Mobile
            5G Home Internet. Who doesn’t like free money?
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} alt="quotationsIcon" className="mark" />
          <h4>Interested in T-Mobile internet service?</h4>
          <p className="after-heading">
            Check out our
            <span className="link">
              <Link href={"#"}> T-Mobile 5G Home Internet review </Link>
            </span>{" "}
            to learn more about T-Mobile’s home internet service. Enter your zip
            code below to see if T-Mobile offers internet in your area.
          </p>
          <br />
          <hr />
          <div className="btn">
            <Link href={"#"}>get this deal</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>T-Mobile deal #3: Free streaming subscriptions </h4>
          <p className="after-heading">
            T-Mobile 5G Home Internet customers get deals like a free year of
            VIX Premium, four months of free Pandora Premium, and six months of
            free SiriusXM Streaming Platinum. You’ll also get free Netflix and
            Apple TV+ subscriptions when you add Go5G Next, Go5G, or Go5G Plus
            cell phone lines.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>T-Mobile deal #4: Save on early termination fees </h4>
          <p className="after-heading">
            Are you interested in T-Mobile 5G Home Internet but locked into a
            long-term contract with your current provider? T-Mobile will cover
            up to $650 in early termination fees, so you can jump to T-Mobile
            without missing a beat.
          </p>
          <hr />
          <div className="btn">
            <Link href={"#"}>check availability </Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>T-Mobile deal #5: Free Blink smart security package </h4>
          <p className="after-heading">
            Who wouldn’t want extra home security, especially if it’s free? For
            a limited time, you’ll get a free Blink Outdoor 4 and Mini Pan-Tilt
            Camera (a $179.98 value) when you switch to T-Mobile Home Internet.
          </p>
          <hr />
          <div className="btn">
            <Link href={"#"}>check availability </Link>
          </div>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            T-Mobile <span> deals</span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Does T-Mobile have Black
                Friday deals?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Yes, T-Mobile regularly offers Black Friday deals, including
                  free phones, new line discounts, and bundled accessories.
                  Check out our Black Friday deals guide for the latest Black
                  Friday offers.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Does T-Mobile have Black Friday deals?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, T-Mobile regularly offers Black Friday deals, including free
              phones, new line discounts, and bundled accessories. Check out our
              Black Friday deals guide for the latest Black Friday offers.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does T-Mobile have deals
                for existing customers?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Yes, T-Mobile regularly offers deals and perks for current
                  T-Mobile customers through its T-Mobile Tuesdays promotion.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does T-Mobile have deals for existing customers?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, T-Mobile regularly offers deals and perks for current
              T-Mobile customers through its T-Mobile Tuesdays promotion.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How do I get the best deal
                at T-Mobile?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  You’ll get the best deal at T-Mobile when you combine services
                  and add more lines to your account. T-Mobile offers increasing
                  line discounts when you add multiple lines to your cell phone
                  plan. T-Mobile also discounts home internet service when you
                  add at least one Magenta MAX line to your plan.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How do I get the best deal at T-Mobile?"}
            cssClass={"faq-content"}
          >
            <p>
              You’ll get the best deal at T-Mobile when you combine services and
              add more lines to your account. T-Mobile offers increasing line
              discounts when you add multiple lines to your cell phone plan.
              T-Mobile also discounts home internet service when you add at
              least one Magenta MAX line to your plan.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default TMobileDeals;
