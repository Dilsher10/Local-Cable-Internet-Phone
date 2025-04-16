// import React, { useState } from "react";
import "./at&t-wireless.scss";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import xfintyTvHeroBg from "../../assets/images/xfinity-tv-hero-bg.jpg";
// import SubNav from "../../components/sub-nav/SubNav";
// import { atandtNavLinks } from "../../assets/data/navLinks/at&tNavLinks";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import PackageTable from "../../components/package-table/PackageTable";
import CTA from "../../components/cta-section/CTA";
import atandatdealsposter from "../../assets/images/atandatdealsposter.png";
import signal from "../../assets/images/signal.png";
import mobone from "../../assets/images/mobone.png";
import mobtwo from "../../assets/images/mobtwo.png";
import mobthree from "../../assets/images/mobthree.png";
import mobfour from "../../assets/images/mobfour.png";
import { GoArrowUpRight } from "react-icons/go";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "AT&T Wireless Plans",
};

const AtandtWireless = () => {
  // const [faq, setFaq] = useState(null);

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "AT&T Wireless Plans",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "Nationwide 5G availability",
      "Save up to $40 per line with multiple phone lines",
      "Upgrade with unlimited premium data to get full-speed internet",
      "Save up to $1,000 towards an iPhone 14",
    ],
    buttonName: "check availability",
    buttonPath: "#",
    price: "AT&T mobile plans start at $35.00/mo.*",
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
        "Price",
        "Price per line with 4 lines",
        "Data",
        "5G",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "AT&T 4GB Plan",
            "$50.00/mo.",
            "$40.00/mo.",
            "4 GB premium data",
            "No",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "AT&T Unlimited Starter",
            "$65.00/mo.",
            "$35.00/mo.",
            "Unlimited standard data",
            "Yes",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "AT&T Unlimited Extra",
            "$75.00/mo.",
            "$40.00/mo.",
            "50 GB premium data",
            "Yes",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "AT&T Unlimited Premium",
            "$85.00/mo.",
            "$50.00/mo.",
            "Unlimited premium data",
            "Yes",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="atandt-wireless">
      {/* <SubNav links={atandtNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Top AT&T <span> Mobile deals </span>
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
          "Interested in bundling AT&T Wireless plans with other AT&T services?"
        }
        desc={"Enter your zip code below to see AT&T offers in your area."}
      />

      <div className="section atandt-bundle-deals ">
        <div className="head">
          <h2 className="sect-heading">
            AT&T bundle deals:
            <span> free $200, 25% monthly discounts, and more </span>
          </h2>
          <p className="sect-desc">
            Whether you’re a new or existing AT&T customer, you can still get
            great deals with an AT&T internet and DIRECTV STREAM bundle.
            Although AT&T doesn’t offer traditional bundle discounts, AT&T still
            includes offers like a Visa reward card worth up to $200, 25% off
            AT&T Wireless plans when you bundle AT&T cell phone and internet
            service, and three months of free premium cable channels.
            <br />
            Visit our AT&T deals page to learn more about AT&T’s best offers.
          </p>
        </div>
        <Image src={atandatdealsposter} alt="atandatdealsposter" />
      </div>

      <div className="section atandt-wireless-plans-include-unlimited-premium-data">
        <div className="head">
          <h2 className="sect-heading">
            AT&T wireless plans include
            <span> unlimited premium data </span>
          </h2>
          <p className="sect-desc">
            Looking for a phone plan to make it easy to upload TikToks or watch
            YouTube? Do you simply need a cheap phone plan for making calls?
            With AT&T Wireless, you’ll have wireless plans that fit every
            budget. AT&T 4GB Plan comes with reliable 4G LTE service, a 4 GB
            mobile data cap, and AT&T ActiveArmor mobile security for only $50
            per month. If you upgrade to AT&T’s Unlimited plans, you’ll get
            features like 5G support, hotspot access, and premium mobile data.
            These Unlimited plans will be a great fit if you’re regularly
            streaming music or watching videos on your phone.
            <br />
            When it comes to AT&T and mobile data, AT&T’s Unlimited plans have
            two types of data: standard data and premium data. With AT&T’s
            standard data, you can still use your smartphone to find directions
            or listen to music, but if AT&T’s network has a lot of traffic, your
            internet might temporarily go slower. With premium data, you’ll get
            full-speed mobile data at any time and won’t have to worry about
            slower internet speeds. AT&T Unlimited Extra comes with 50 GB of
            premium data, and AT&T Unlimited Premium comes with unlimited
            premium data.
            <br />
            Best of all? AT&T offers sizable discounts of up to $40 per line
            depending on the number of lines you add to your plan, making AT&T
            Wireless an incredible deal for families and large households.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change.
        </p>
        <div className="package-table-container channels">
          <Image src={signal} alt="mark" className="mark" />
          <h4>Want AT&T Wireless phone plans?</h4>
          <br />
          <p>
            Read our
            <span className="link">
              <Link href={"/"}>AT&T Wireless review</Link>
            </span>{" "}
            for a full breakdown of AT&T Wireless prices, plans, and more.
          </p>
        </div>
      </div>

      <div className="section atandt-wireless-features">
        <div className="head">
          <h2 className="sect-heading">
            AT&T
            <span> wireless features </span>
          </h2>
          <p className="sect-desc">
            AT&T phone plans come with the standard features you’d expect, and
            they also come with bells and whistles that may be unfamiliar for
            new customers. Let’s break down some of the best AT&T Wireless
            features below.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Compare unlimited wireless plans</h4>
          <br />
          <div className="row">
            <div className="columns">
              <h3>AT&T Unlimited Starter</h3>
              <br />
              <br />
              <p>
                <b>Price: $35.00/mo.*</b>
                <br />
                *Per line with four lines.
              </p>
              <br />
              <ul>
                <li>
                  · Add content - use ENTER key for new LI line.Unlimited calls,
                  texts, and data
                </li>
                <li>· 5G access</li>
                <li>· 3 GB hotspot data per month</li>
                <li>
                  · Free AT&T ActiveArmor protection for spam call screening
                </li>
                <li>· Standard definition video streaming</li>
              </ul>
            </div>
            <div className="columns">
              <h3>AT&T Unlimited Extra</h3>
              <br />
              <br />
              <p>
                <b>Price: $40.00/mo.*</b>
                <br />
                *Per line with four lines.
              </p>
              <br />
              <ul>
                <li>·Unlimited calls, texts, and 50 GB of premium data</li>
                <li>·5G access</li>
                <li>·15 GB hotspot data per month</li>
                <li>
                  ·AT&T ActiveArmor advanced protection with spam blocking,
                  public Wi-Fi security, and more
                </li>
                <li>·Standard definition video streaming</li>
              </ul>
            </div>
            <div className="columns">
              <h3>AT&T Unlimited Premium</h3>
              <br />
              <br />
              <p>
                <b>Price: $50.00/mo.*</b>
                <br />
                *Per line with four lines.
              </p>
              <br />
              <ul>
                <li>·Unlimited calls, texts, and premium mobile data</li>
                <li>·5G access</li>
                <li>·50 GB hotspot data per month</li>
                <li>
                  ·AT&T ActiveArmor advanced protection with spam blocking,
                  public Wi-Fi security, and more
                </li>
                <li>·4K video streaming</li>
                <li>
                  ·Eligible Signature Program members can save up to $10/mo.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="package-table-container channels">
          <h4>ActiveArmor blocks spam, protects your phone</h4>
          <br />
          <p>
            Sick of filtering Scam Likely calls off your phone daily? With AT&T
            ActiveArmor, your phone can remain secure and private.
            <br />
            ActiveArmor is a free AT&T Wireless service that blocks spam calls
            from reaching your phone. If you upgrade to AT&T Unlimited Extra or
            AT&T Unlimited Premium, you can get more ActiveArmor features
            that’ll protect you from hackers, identify thieves, and spammers.
            All three AT&T Wireless Unlimited plans come with AT&T ActiveArmor.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Unlimited talk, text, and data</h4>
          <br />
          <p>
            Every AT&T Wireless plan comes with unlimited talk and text to help
            you keep in touch with friends and family anytime. AT&T Unlimited
            Extra and Unlimited Premium come with full-speed premium data if
            you’re regularly streaming Spotify or watching Netflix when you’re
            out and about. If you simply need internet access, save with AT&T
            Unlimited Starter’s standard mobile data.
          </p>
        </div>
      </div>

      <div className="section atandt-phone-column">
        <div className="head">
          <h2 className="sect-heading">
            AT&T phones:{" "}
            <span> get Apple, Samsung, and Google’s latest models </span>
          </h2>
          <p className="sect-desc">
            AT&T Wireless has the most popular and fastest smartphones. On some
            AT&T plans, you can even get these new phones for free.
          </p>
        </div>
        <div className="row-mobile">
          <div className="inner-two">
            <div className="inner-two-one">
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
              <Image src={mobone} className="" />
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
              <Image src={mobtwo} className="" />
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
              <Image src={mobthree} className="" />
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
              <Image src={mobfour} className="" />
            </div>
          </div>
        </div>
      </div>

      <div className="section atandt-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> AT&T wireless </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What is AT&T's cheapest
                unlimited plan?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  AT&T Unlimited Starter is AT&T’s cheapest unlimited plan. For
                  $65 per month for one line, you’ll get unlimited calls, texts,
                  and mobile data. You’ll also get 5G access, 3 GB of monthly
                  hotspot data, and AT&T ActiveArmor security protection.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What is AT&T's cheapest unlimited plan?"}
            cssClass={"faq-content"}
          >
            <p>
              AT&T Unlimited Starter is AT&T’s cheapest unlimited plan. For $65
              per month for one line, you’ll get unlimited calls, texts, and
              mobile data. You’ll also get 5G access, 3 GB of monthly hotspot
              data, and AT&T ActiveArmor security protection.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How much is a one-person
                AT&T plan?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  A one-person AT&T Wireless plan costs between $50 and $85 per
                  month. AT&T’s cheapest plan is AT&T 4 GB ($50 per month), and
                  its most expensive plan is AT&T Unlimited Premium ($85 per
                  month).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" How much is a one-person AT&T plan?"}
            cssClass={"faq-content"}
          >
            <p>
              A one-person AT&T Wireless plan costs between $50 and $85 per
              month. AT&T’s cheapest plan is AT&T 4 GB ($50 per month), and its
              most expensive plan is AT&T Unlimited Premium ($85 per month).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does AT&T have a senior
                plan?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Through the AT&T Unlimited 55+ plan, customers who are 55
                  years or older can get a discounted AT&T Wireless plan priced
                  at $60 monthly for one line or $80 monthly for two lines.
                  AT&T’s unlimited plan for seniors includes unlimited calls,
                  texts, and data within North America, 5G access, AT&T
                  ActiveArmor, and unlimited texts from the US to more than 200
                  countries.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does AT&T have a senior plan?"}
            cssClass={"faq-content"}
          >
            <p>
              Through the AT&T Unlimited 55+ plan, customers who are 55 years or
              older can get a discounted AT&T Wireless plan priced at $60
              monthly for one line or $80 monthly for two lines. AT&T’s
              unlimited plan for seniors includes unlimited calls, texts, and
              data within North America, 5G access, AT&T ActiveArmor, and
              unlimited texts from the US to more than 200 countries.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How do I access my AT&T
                wireless account?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  To access your AT&T wireless account, visit
                  https://www.att.com/acctmgmt/login.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" How do I access my AT&T wireless account?"}
            cssClass={"faq-content"}
          >
            <p>
              To access your AT&T wireless account, visit
              https://www.att.com/acctmgmt/login.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> What is the $30 plan for
                AT&T?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  AT&T’s $30 prepaid phone plan includes 5 GB of monthly 4G LTE
                  data, AT&T ActiveArmor coverage, unlimited calls, and
                  unlimited texts.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" What is the $30 plan for AT&T?"}
            cssClass={"faq-content"}
          >
            <p>
              AT&T’s $30 prepaid phone plan includes 5 GB of monthly 4G LTE
              data, AT&T ActiveArmor coverage, unlimited calls, and unlimited
              texts.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default AtandtWireless;
