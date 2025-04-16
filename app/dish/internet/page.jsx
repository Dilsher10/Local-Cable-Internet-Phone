import React from "react";
import "./dish-internet.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { dishNavLinks } from "../../assets/data/navLinks/dishNavLinks";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "DISH Internet: Plans, Prices, And More"
};

const DishInternet = () => {
  return (
    <div className="dish-internet">
      {/* <SubNav links={dishNavLinks} /> */}
      <div className="dish-any-whereapp-hero global-inner-hero">
        <h1>DISH Internet: Plans, Prices, And More</h1>
        <p>
          DISH no longer offers internet service, but we spent a week
          researching the best DISH internet options.
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
          <h4>Does DISH have internet?</h4>
          <p>
            There is no such thing as DISH internet anymore, but that doesn’t
            mean you’re out of luck with internet service—you’ll just have to
            get your own internet plan. Our top DISH internet picks feature
            internet service providers (ISP) with great internet pricing and
            deals that don’t require a TV bundle.
            <br />
            CenturyLink has some of the most affordable fiber internet plans
            around, while AT&T’s high-end download speeds are unbeatable.
            T-Mobile’s 5G Home Internet service offers great rates and wireless
            internet service if it’s available in your neighborhood.
          </p>
        </div>
      </div>

      <CTA
        heading={"Find out what internet is available"}
        desc={
          "Enter your zip code below to see the best internet plans in your area."
        }
      />

      <div className="section important-links">
        <div className="head">
          <h2 className="sect-heading">
            Jump to <span> important links </span>
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
          <Link href={"#"}>Best DISH internet</Link>
          <Link href={"#"}>Compare DISH internet head to head</Link>
          <Link href={"#"}>Other top DISH internet plans</Link>
          <Link href={"#"}>What to look for</Link>
        </div>
      </div>
      <div className="section head-to-hear">
        <div className="head">
          <h2 className="sect-heading">
            Compare DISH internet <span> head to head </span>
          </h2>
          <p className="sect-desc">
            Our picks for the best DISH internet plans share a few things: low
            prices, fast internet speeds, and no contract restrictions. All
            three of our top ISPs don’t have TV plans, so you can keep DISH
            without worrying about your DISH contract.
            <br />
            With CenturyLink, you’ll get stellar download and upload speeds for
            less than $70 monthly. AT&T’s fiber internet plans offer
            top-in-class performance with speeds that top out at 5,000Mbps. And
            if budget and no-installation flexibility are your biggest concerns,
            T-Mobile 5G Home Internet is 100% wireless and offers excellent
            rates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DishInternet;
