// import React, { useState } from "react";
import "./t-mobile-shop-5g-home-internet.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { tmobileNavLinks } from "../../assets/data/navLinks/tmobileNavLinks";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import xfintyTvHeroBg from "../../assets/images/xfinity-tv-hero-bg.jpg";
import signal from "../../assets/images/signal.png";
import frameglobelgre from "../../assets/images/frame-globel-gre.png";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import PackageCard from "../../components/package-card/PackageCard";
import CTA from "../../components/cta-section/CTA";
import dotted from "../../assets/images/dotted.png";
import jiju from "../../assets/images/jiju.png";
import PackageTable from "../../components/package-table/PackageTable";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "T-Mobile 5G Home Internet"
};

const TMobileShop5gHomeInternet = () => {
  //   const [faq, setFaq] = useState();

  let packageTableData = [
    {
      head: [
        "package",
        "Price",
        "Download speeds",
        "Channels",
        " Promotions",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Spectrum Internet",
            "Starting at $49.99/mo. for 12 mos.",
            "Up to 300 Mbps",
            "N/A",
            "90-day Peacock Premium subscription",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "T-Mobile 5G Home Internet",
    desc: "Are you and your household trying to binge-watch the latest hit series, video call for work, or just browse social media? Read on to find an AT&T plan that will work best for you. Plus, many come with perks like:",
    points: [
      "Download speeds up to 245 Mbps ",
      "Save $20/mo. with phone bundle",
      "New customers get free $200 gift card",
      "Try free for 15 days",
    ],
    buttonName: "check availability",
    buttonPath: "#",
    price: "T-Mobile deals starting at $50.00/mo.",
  };
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="t-mobile-shop-5g-home-internet">
      {/* <SubNav links={tmobileNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Top t-mobile <span> internet plans </span>
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
        heading={"Interested in T-Mobile 5G Home Internet?"}
        desc={
          "Enter your zip code below to see if T-Mobile 5G Home Internet is available in your area."
        }
      />

      <div className="section endnote is-good">
        <div className="head">
          <h2 className="sect-heading">
            T-Mobile 5G Home Internet <span> prices and plans </span>
          </h2>
          <p className="sect-desc">
            Are you sick of your internet provider’s price hikes and fees? With
            T-Mobile 5G Home Internet, you’ll pay one price for stress-free
            internet service.
            <br />
            T-Mobile 5G Home Internet is T-Mobile’s home internet plan. T-Mobile
            5G Home Internet gets your home online using T-Mobile’s 5G data
            network—it’s the same network that lets you scroll TikTok and watch
            YouTube on your phone. T-Mobile’s main 5G Home Internet plan comes
            with download speeds up to 245 Mbps, making it a great fit if your
            household needs the internet for Netflix nights, work emails, or
            gaming.
          </p>
        </div>

        <PackageTable item={packageTableData} />
        <p className="below-table">
          *With AutoPay. <br />
          **Requires one T-Mobile Magenta MAX phone line.
        </p>
      </div>

      <div className="section endnote blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"> </p>
        </div>
        <div className="endnote-container">
          <Image src={dotted} alt="dotted" />
          <h4>Limited time offer:</h4>
          <p>T-Mobile offers great deals on T-Mobile 5G Home Internet:</p>
          <ul>
            <li>New customers get a free $200 gift card</li>
            <li>Free 15-day trial period</li>
            <li>T-Mobile covers $750 in early termination fees</li>
            <li>Discounted Philo TV for one year</li>
          </ul>
          <p>
            Check out our T-Mobile deals page for the latest T-Mobile deals.
          </p>
        </div>
        <br />
        <br />
      </div>

      <div className="section availability">
        <div className="head">
          <h2 className="sect-heading">
            T-Mobile 5G Home internet <span> availability </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <Image src={frameglobelgre} alt="frame-globel-gre" />
        <div className="package-table-container channels">
          <Image src={signal} alt="signal" className="mark" />
          <h4>Ready to get T-Mobile 5G Home Internet?</h4>
          <p className="after-heading">
            Visit our{" "}
            <span className="link">
              <Link href={"/"}>T-Mobile 5G Home Internet review for our </Link>
            </span>
            full take on T-Mobile’s home internet service.
          </p>
          <br />
          <hr />
          <div className="btn">
            <Link href={"#"}>check availability</Link>
          </div>
        </div>
      </div>

      <div className="section deals">
        <div className="head">
          <h2 className="sect-heading">
            T-Mobile 5G Home Internet <span> features </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Pay the same price with T-Mobile’s Price Lock guarantee </h4>
          <p className="after-heading">
            Cable internet subscribers are well aware of the dreaded annual
            price increase, but on T-Mobile, these sneaky price hikes are a
            problem of the past. T-Mobile’s Price Lock guarantee means that
            you’ll pay the same price as long as you have T-Mobile 5G Home
            Internet.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>T-Mobile hotspot options</h4>
          <p className="after-heading">
            Want to bring your T-Mobile 5G internet service out on the road?
            Your T-Mobile 5G Home Internet equipment must stay in your home, but
            you can still add a 5G hotspot to your service plan. Read our
            T-Mobile hotspot guide to learn more about your mobile internet
            options on T-Mobile.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>
            No equipment fees, unlimited data, and free T-Mobile 5G gateway
          </h4>
          <p className="after-heading">
            Don’t worry about rental fees from T-Mobile. When you sign up for
            T-Mobile 5G Home Internet, you’ll get a free T-Mobile 5G Gateway to
            get your home online. Plus, T-Mobile bundles unlimited data with
            every plan, so you won’t have to deal with data caps and costly
            overage fees.
          </p>
          <Image src={jiju} alt="jiju" />
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            T-Mobile 5G Home internet <span> FAQ</span>
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
                <span>{faq === 1 ? "-" : "+"}</span> How fast is T-Mobile 5G
                Home Internet?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  T-Mobile has download speeds up to 245 Mbps. Your exact
                  download speed will depend on your area’s network traffic and
                  T-Mobile 5G coverage.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" How fast is T-Mobile 5G Home Internet?"}
            cssClass={"faq-content"}
          >
            <p>
              T-Mobile has download speeds up to 245 Mbps. Your exact download
              speed will depend on your area’s network traffic and T-Mobile 5G
              coverage.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is T-Mobile 5G Home
                Internet good?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  T-Mobile 5G Home Internet is good for households that need
                  basic or budget-friendly internet service. With maximum
                  download speeds of 245 Mbps, T-Mobile will be slower than
                  cable or fiber internet, but at $50 per month (or $30 monthly
                  with a T-Mobile phone plan), it’ll be much cheaper than
                  competing providers.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Is T-Mobile 5G Home Internet good?"}
            cssClass={"faq-content"}
          >
            <p>
              T-Mobile 5G Home Internet is good for households that need basic
              or budget-friendly internet service. With maximum download speeds
              of 245 Mbps, T-Mobile will be slower than cable or fiber internet,
              but at $50 per month (or $30 monthly with a T-Mobile phone plan),
              it’ll be much cheaper than competing providers.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Is T-Mobile 5G Home
                Internet available in my area?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  T-Mobile has rolled out 5G Home Internet coverage on a
                  city-by-city basis, so its availability depends on your
                  address.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Is T-Mobile 5G Home Internet available in my area?"}
            cssClass={"faq-content"}
          >
            <p>
              T-Mobile has rolled out 5G Home Internet coverage on a
              city-by-city basis, so its availability depends on your address.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How does T-Mobile 5G Home
                Internet work?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  T-Mobile 5G Home Internet connects your home to the internet
                  using T-Mobile’s 5G mobile data network. Unlike cable or fiber
                  internet service, T-Mobile 5G Home Internet doesn’t require
                  you to have cables physically installed into your home.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" How does T-Mobile 5G Home Internet work?"}
            cssClass={"faq-content"}
          >
            <p>
              T-Mobile 5G Home Internet connects your home to the internet using
              T-Mobile’s 5G mobile data network. Unlike cable or fiber internet
              service, T-Mobile 5G Home Internet doesn’t require you to have
              cables physically installed into your home.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default TMobileShop5gHomeInternet;
