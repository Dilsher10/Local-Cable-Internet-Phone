// import React, { useState } from "react";
import "./shop-verizon-wireless.scss";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import xfintyTvHeroBg from "../../assets/images/xfinity-tv-hero-bg.jpg";
// import SubNav from "../../components/sub-nav/SubNav";
// import { verizonNavLinks } from "../../assets/data/navLinks/verizonNavLinks";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import PackageTable from "../../components/package-table/PackageTable";
import CTA from "../../components/cta-section/CTA";
import dotted from "../../assets/images/dotted.png";
import signal from "../../assets/images/signal.png";
import zflip from "../../assets/images/zflip.png";
import iphone12mini from "../../assets/images/iphone12mini.png";
import mobiletwos from "../../assets/images/mobiletwos.png";
import clockmobile from "../../assets/images/clockmobile.png";
// import Newsletter from "../../components/newsletter/Newsletter";
import { GoArrowUpRight } from "react-icons/go";

export const metadata = {
  title: "Verizon Mobile Plans",
};

const ShopVerizonWireless = () => {
  // const [faq, setFaq] = useState(null);

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "Verizon Mobile Plans",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "Enjoy nationwide 5G coverage",
      "Get unlimited data on every plan",
      "Add discounts on Disney Bundle, Apple Music, and more",
      "Save up to 50% with Verizon home internet",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Verizon mobile plans start at $25.00/mo.*",
  };

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };

  let packageTableData = [
    {
      head: [
        "Plan",
        "Base price*",
        "Price per line with 4 lines*",
        "Data",
        "5G",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Unlimited Welcome ",
            "$65.00/mo. ",
            "$25.00/mo. ",
            "Unlimited standard data ",
            "Yes ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Unlimited Plus",
            "$80.00/mo.",
            "$30.00/mo.",
            "Unlimited premium data",
            "5G Ultra Wideband",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="shop-verizon-wireless">
      {/* <SubNav links={verizonNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Top Verizon fios s <span> Mobile plans </span>
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
      </div>

      <CTA
        heading={
          "Interested in bundling Verizon mobile plans with other Verizon services?"
        }
        desc={
          "Enter your zip code below to see your area’s Verizon mobile and internet offers."
        }
      />

      <div className="section verizon-blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"></p>
        </div>
        <div className="package-table-container channels">
          <Image src={dotted} alt="mark" className="mark" />
          <h4>Verizon mobile deals: Free gift cards and trade-in deals</h4>
          <br />
          <p>
            Verizon’s best deals include huge mobile and internet bundle
            discounts, trade-in deals for new customers, and free home theater
            equipment. Check out our{" "}
            <span className="link">
              <Link href={"/"}>Verizon deals guide</Link>
            </span>{" "}
            for the latest Verizon mobile and internet savings.
          </p>
        </div>
      </div>

      <div className="section verizon-tv">
        <div className="head">
          <h2 className="sect-heading">
            Verizon
            <span> mobile plans </span>
          </h2>
          <p className="sect-desc">
            Verizon keeps things simple with its two Unlimited plans and myPlan
            à la carte system. With either Unlimited plan, you get unlimited
            calling, texts, and mobile data in the U.S., Mexico, and Canada.
            <br />
            Unlimited Welcome is an excellent option for users interested in
            basic service, as you get Verizon’s standard mobile features and
            benefits like service without data caps. For an additional $5
            monthly, Unlimited Plus includes bonus features like unlimited
            premium data, 30GB of mobile hotspot data, 5G Ultra Wideband access
            for faster internet speeds, and discounts up to 50% on other Verizon
            services.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change.
          <br />
          *Plus taxes and fees. With Auto Pay and paper-free billing. $10/mo
          more without Auto Pay.
        </p>
        <div className="package-table-container channels">
          <h4>Verizon myPlan: Save on streaming, music, and more</h4>
          <br />
          <p>
            With Verizon myPlan, Verizon Unlimited customers can bundle great
            perks with their phone service. myPlan offers include discounted
            rates on services like Apple Music and the{" "}
            <span className="link">
              <Link href={"/"}>Disney Bundle—you</Link>
            </span>{" "}
            add perks to your cell phone line, and you can change your perk
            lineup anytime. Best of all, each perk costs only $10 monthly.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Verizon myPlan deals</h4>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th> </th>
                  <th>Verizon myPlan perk</th>
                  <th>Details</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1. </td>
                  <td>Disney Bundle</td>
                  <td>Watch Disney+, Hulu, and ESPN+</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>100GB mobile hotspot data</td>
                  <td>Connect devices to the internet with your phone</td>
                </tr>
                <tr>
                  <td>3. </td>
                  <td>Apple One </td>
                  <td>Get Apple Music, Apple TV+, iCloud, and Apple Arcade </td>
                </tr>
                <tr>
                  <td>4. </td>
                  <td>Walmart+ membership </td>
                  <td>Discounts for Walmart shoppers </td>
                </tr>
                <tr>
                  <td>5. </td>
                  <td> Apple Music Family</td>
                  <td> Share Apple Music with up to six people</td>
                </tr>
                <tr>
                  <td>6. </td>
                  <td>Smartwatch Data & Safety </td>
                  <td>Unlimited smartwatch data </td>
                </tr>
                <tr>
                  <td>7. </td>
                  <td>+play monthly credit </td>
                  <td> Get a $15 subscription credit</td>
                </tr>
                <tr>
                  <td>8. </td>
                  <td>3 TravelPass days </td>
                  <td>Get full cell phone coverage internationally </td>
                </tr>
                <tr>
                  <td>9. </td>
                  <td>The Most Fios TV </td>
                  <td>Store and access files remotely </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="section verizon-blank">
        <div className="head">
          <h2 className="sect-heading">
            Verizon <span> most popular smartphones and features </span>
          </h2>
          <p className="sect-desc">
            Verizon’s mobile plans are just one part of the provider’s vast
            service catalog. Let’s break down Verizon’s other features for
            mobile customers.
          </p>
        </div>
        <div className="row-mobile">
          <div className="inner-two">
            <div className="inner-two-one">
              <div className="button-div">
                <Link href={"#"}>
                  <p> get Samsung galaxy z flip 4</p>
                  <div className="arrow-icon-box">
                    <GoArrowUpRight className="upright-arrow-icon" />
                  </div>
                </Link>
              </div>
              <Image src={zflip} className="" />
            </div>
            <div className="inner-two-two">
              <div className="button-div">
                <Link href={"#"}>
                  <p>
                    {" "}
                    <GoArrowUpRight className="upright-arrow-icon" />
                  </p>
                  {/* <div className="arrow-icon-box">
                    <GoArrowUpRight className="upright-arrow-icon" />
                  </div> */}
                </Link>
              </div>
              <Image src={mobiletwos} className="" />
            </div>
          </div>
        </div>
        <div className="row-mobile">
          <div className="inner-two">
            <div className="inner-two-two">
              <div className="button-div">
                <Link href={"#"}>
                  <p>
                    {" "}
                    <GoArrowUpRight className="upright-arrow-icon" />
                  </p>
                  {/* <div className="arrow-icon-box">
                    <GoArrowUpRight className="upright-arrow-icon" />
                  </div> */}
                </Link>
              </div>
              <Image src={clockmobile} className="" />
            </div>
            <div className="inner-two-two">
              <div className="button-div">
                <Link href={"#"}>
                  <p>
                    {" "}
                    <GoArrowUpRight className="upright-arrow-icon" />
                  </p>
                  {/* <div className="arrow-icon-box">
                    <GoArrowUpRight className="upright-arrow-icon" />
                  </div> */}
                </Link>
              </div>
              <Image src={iphone12mini} className="" />
            </div>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Verizon mobile customer service</h4>
          <br />
          <p>
            With Verizon’s nationwide network of brick-and-mortar retail stores,
            it’s easy to check out the latest smartphones and learn more about
            Verizon’s services in person. Verizon also placed second overall in
            our annual
            <span className="link">
              <Link href={"/"}>internet customer satisfaction survey</Link>
            </span>{" "}
            so its agents are likely able to answer your customer service
            questions.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Verizon internet and mobile bundles</h4>
          <br />
          <p>
            Stack big discounts when you get a Verizon mobile and internet
            bundle. Verizon cuts up to 50% off your internet bill depending on
            the Verizon internet service you sign up for. You also save up to
            $10 monthly per line on an Unlimited Verizon mobile plan when it’s
            part of an internet bundle.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Verizon Bring Your Own Device savings</h4>
          <br />
          <p>
            You don’t have to replace your phone if you’re a new Verizon
            customer. Depending on your phone model and Verizon Unlimited plan,
            you can get up to $540 in bill credits when you bring your existing
            phone to Verizon.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={signal} alt="" className="mark" />
          <h4>Interested in a Verizon mobile and internet bundle?</h4>
          <br />
          <p>
            Read our{" "}
            <span className="link">
              <Link href={"/"}>Verizon Fios</Link>
            </span>{" "}
            and{" "}
            <span className="link">
              <Link href={"/"}>Verizon 5G</Link>
            </span>{" "}
            Home Internet guides for full breakdowns of each home internet
            service.
          </p>
        </div>
      </div>

      <div className="section verizon-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Verizon Wireless </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What is the cheapest phone
                plan Verizon has?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Verizon’s cheapest unlimited plan is Unlimited Welcome. It
                  starts at $65 per month, but with four lines, you can lower
                  your per-line rate to only $25 monthly.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What is the cheapest phone plan Verizon has?"}
            cssClass={"faq-content"}
          >
            <p>
              Verizon’s cheapest unlimited plan is Unlimited Welcome. It starts
              at $65 per month, but with four lines, you can lower your per-line
              rate to only $25 monthly.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is T-Mobile better than
                Verizon?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  It depends on factors like your location and exact service
                  needs. T-Mobile’s prices are generally lower than Verizon, but
                  Verizon has great bundle deal offerings and services like its
                  Fios home internet.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Is T-Mobile better than Verizon?"}
            cssClass={"faq-content"}
          >
            <p>
              It depends on factors like your location and exact service needs.
              T-Mobile’s prices are generally lower than Verizon, but Verizon
              has great bundle deal offerings and services like its Fios home
              internet.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Are Verizon phones
                unlocked?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Verizon phones are temporarily locked for 60 days after
                  purchase. After this period, Verizon unlocks the phones.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Are Verizon phones unlocked?"}
            cssClass={"faq-content"}
          >
            <p>
              Verizon phones are temporarily locked for 60 days after purchase.
              After this period, Verizon unlocks the phones.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How much do Verizon plans
                actually cost?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Verizon Unlimited plans cost between $65 and $80 monthly for a
                  single line and $25 to $30 monthly for four lines.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" How much do Verizon plans actually cost?"}
            cssClass={"faq-content"}
          >
            <p>
              Verizon Unlimited plans cost between $65 and $80 monthly for a
              single line and $25 to $30 monthly for four lines.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default ShopVerizonWireless;
