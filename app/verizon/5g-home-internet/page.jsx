// import React, { useState } from "react";
import "./shop-verizon-5g-home-internet.scss";
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
import signal from "../../assets/images/signal.png";
// import Newsletter from "../../components/newsletter/Newsletter";
import cartinternet from "../../assets/images/cartinternet.png";
import flameinternet from "../../assets/images/flameinternet.png";
import touchwhite from "../../assets/images/touchwhite.png";

export const metadata = {
  title: "Verizon 5G Home Internet"
};

const ShopVerizon5gHomeInternet = () => {
  // const [faq, setFaq] = useState(null);

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "Verizon 5G Home Internet",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "Fast download speeds up to 1,000 Mbps",
      "Save more than 40% with a Verizon Wireless phone bundle",
      "No contracts or data caps",
      "Price guaranteed up to 3 years",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Plans starting at $35.00/mo.",
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
        "Package",
        "Verizon bundle price",
        "Base price",
        "Download speed",
        "Price guarantee",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "5G Home",
            "$35.00/mo.",
            "$60.00/mo.",
            "85–300 Mbps",
            "2 years",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "5G Home Plus",
            "$45.00/mo.",
            "$80.00/mo.",
            "300–1,000 Mbps",
            "3 years",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="shop-verizon-5g-home-internet">
      {/* <SubNav links={verizonNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Verizon 5G Home <span> internet plans </span>
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
        heading={"Interested in getting Verizon 5G Home Internet?"}
        desc={
          "Enter your zip code below to see if Verizon offers 5G Home Internet coverage in your area."
        }
      />

      <div className="section verizon-home-internet-plans-and-price">
        <div className="head">
          <h2 className="sect-heading">
            Verizon 5G Home Internet plans and prices
            <span> starting at $35/mo. </span>
          </h2>
          <p className="sect-desc">
            Tired of paying too much for home internet?
            <br />
            Verizon 5G Home Internet is Verizon’s wireless home internet
            service, and it’s a great deal if you’re a Verizon Wireless customer
            or you’re looking for internet service with affordable pricing.
            Verizon 5G Home Internet delivers full-speed internet service to
            your home using Verizon’s 5G mobile network.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          *With Autopay and paper-free billing. Qualifying mobile plans include
          5G Play More, 5G Do More, and 5G Get More.
          <br />
          Data effective as of post date. Offers and availability vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section verizon-vs">
        <div className="head">
          <h2 className="sect-heading">
            Verizon 5G Home <span> vs.</span> Verizon 5G Home Plus
          </h2>
          <p className="sect-desc">
            Verizon 5G Home Internet comes with two plans: 5G Home and 5G Home
            Plus.
            <br />
            5G Home is Verizon’s base internet plan, and it comes with download
            speeds between 85 and 300 Mbps. You’ll also get a two-year price
            guarantee, along with a free Wi-Fi 6 router and a $50 Amazon gift
            card. 5G Home will be a perfect fit if you’re just looking for basic
            home internet service. You’ll be set with 5G Home if you’re mainly
            checking emails or watching YouTube when you’re online.
            <br />
            5G Home Plus is Verizon’s fastest 5G Home Internet plan, and it
            comes with internet speeds between 300 Mbps and 1,000 Mbps. Along
            with the free Wi-Fi router, you’ll also get add-ons like a
            three-year price guarantee, plus either a free Amazon Echo Show 10
            or a $200 Amazon gift card. This Verizon 5G Home internet plan will
            be good if your household has multiple people who regularly watch
            Netflix, play online games, or take video calls.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={signal} alt="mark" className="mark" />
          <h4>Ready to get Verizon 5G Home Internet?</h4>
          <br />
          <p>
            Visit our{" "}
            <span className="link">
              <Link href={"/"}>Verizon 5G Home Internet review</Link>
            </span>{" "}
            for a full breakdown of Verizon’s 5G Home Internet plans.
          </p>
        </div>
      </div>

      <div className="section verizon-5g-home-internet-availability">
        <div className="head">
          <h2 className="sect-heading">
            Verizon 5G Home <span> internet availability </span>
          </h2>
          <p className="sect-desc">
            Verizon 5G Home Internet is available in more than 900 cities
            including Atlanta, Miami, and Salt Lake City. Verizon’s availability
            varies by region but you can use Verizon’s address tool to confirm
            if Verizon 5G Home Internet is available at your address.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>check Verizon 5G Home internet availability</Link>
        </div>
      </div>

      <div className="section verizon-5g-home-features">
        <div className="head">
          <h2 className="sect-heading">
            Verizon 5G <span> internet features </span>
          </h2>
          <p className="sect-desc">
            Deciding between cable internet or 5G home internet? Whether you’re
            doing work or gaming, Verizon 5G Home Internet comes with great
            features that narrow the gap between other internet providers.
            Here’s what you need to know about Verizon 5G internet if you’re
            interested in making the jump.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>No contracts or hidden fees</h4>
          <br />
          <p>
            Cable internet providers might have a desirable sticker price, but
            they also slip in hidden equipment fees and service charges that add
            to your monthly bill. With Verizon 5G Home Internet, the price you
            see is the price you’ll pay.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Fast enough for your whole home </h4>
          <br />
          <p>
            With download speeds up to 1,000 Mbps, you’ll have enough internet
            speed to support your entire household’s Hulu nights, gaming
            sessions, and Zoom calls.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>No equipment fees or data caps </h4>
          <br />
          <p>
            Both Verizon 5G Home Internet plans include a free Wi-Fi 6 router
            that’ll handle internet traffic from your home’s smart TVs, phones,
            and gaming consoles without breaking a sweat. Verizon also did away
            with data caps, so you won’t have to deal with overage fees or
            eyeing your family’s data usage at the end of every month.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>
            Verizon 5G Home Internet deals: free Walmart+, soundbar discounts,
            and more{" "}
          </h4>
          <br />
          <p>
            You’ll always get a good deal with Verizon 5G Home Internet, as past
            freebies have included free Disney+ subscriptions, Verizon TV
            hardware, and Google smart home gadgets. Verizon’s current deals
            include free Amazon Echo Shows and Amazon gift cards.
          </p>
        </div>
      </div>

      <div className="section free-verizon-internet">
        <div className="head">
          <h2 className="sect-heading">
            Get Verizon 5G Home internet <span> for free </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="row">
          <div className="columns blue-bg">
            <Image src={touchwhite} className="" alt="touchwhite" />
            <h3>Step 1: Apply to Affordable Connectivity Program</h3>
            <br />
            <p>
              If you qualify for the Affordable Connectivity Program (ACP), you
              may be able to get free Verizon Fios internet service. The ACP is
              the best Verizon internet plan for seniors.
              <br />
              Visit CableTV.com’s low-income internet guide to learn more about
              the program.
            </p>
          </div>
          <div className="columns">
            <Image src={cartinternet} alt="cartinternet" className="" />
            <h3>Step 2: Order Verizon Fios internet</h3>
            <br />
            <p>
              Verizon Fios’ 300 Mbps plan is free after you apply ACP and
              Verizon Forward discounts. Verizon Forward is a Verizon discount
              program for only ACP enrollees.
            </p>
          </div>
          <div className="columns">
            <Image src={flameinternet} alt="flameinternet" />
            <h3>Step 3: Get free Verizon home internet</h3>
            <br />
            <p>
              Visit Verizon’s customer service page or call Verizon at
              +1-800-Verizon to apply your ACP and Verizon Forward discounts and
              get free Verizon internet.
            </p>
          </div>
        </div>
      </div>

      <div className="section verizon-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Verizon 5G Home internet </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How fast is 5G home
                internet from Verizon?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Verizon 5G Home Internet has download speeds up to 1,000 Mbps.
                  Your exact internet performance depends on factors like
                  Verizon’s 5G coverage and internet traffic in your area.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" How fast is 5G home internet from Verizon?"}
            cssClass={"faq-content"}
          >
            <p>
              Verizon 5G Home Internet has download speeds up to 1,000 Mbps.
              Your exact internet performance depends on factors like Verizon’s
              5G coverage and internet traffic in your area.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Can I get Verizon 5G in my
                home?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  You may be able to get Verizon 5G Home Internet in your home.
                  Verizon 5G Home Internet has coverage in major cities like
                  Houston and Chicago, but availability varies by address.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Can I get Verizon 5G in my home?"}
            cssClass={"faq-content"}
          >
            <p>
              You may be able to get Verizon 5G Home Internet in your home.
              Verizon 5G Home Internet has coverage in major cities like Houston
              and Chicago, but availability varies by address.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How many square feet is
                Verizon 5G home internet?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  When you add an extender to to your Verizon 5G Home Internet
                  router, you should have a coverage range between 1,600 and
                  3,200 square feet. Your home’s exact coverage range will
                  depend on factors like concrete walls and glass windows that
                  are near the router.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How many square feet is Verizon 5G home internet?"}
            cssClass={"faq-content"}
          >
            <p>
              When you add an extender to to your Verizon 5G Home Internet
              router, you should have a coverage range between 1,600 and 3,200
              square feet. Your home’s exact coverage range will depend on
              factors like concrete walls and glass windows that are near the
              router.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What is the download speed
                of Verizon 5G Home Internet?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Verizon 5G Home Internet has download speeds up to 1,000 Mbps.
                  Your exact download speed depends on factors including your
                  Verizon 5G Home Internet plan and Verizon’s 5G coverage in
                  your area.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" What is the download speed of Verizon 5G Home Internet?"}
            cssClass={"faq-content"}
          >
            <p>
              Verizon 5G Home Internet has download speeds up to 1,000 Mbps.
              Your exact download speed depends on factors including your
              Verizon 5G Home Internet plan and Verizon’s 5G coverage in your
              area.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default ShopVerizon5gHomeInternet;
