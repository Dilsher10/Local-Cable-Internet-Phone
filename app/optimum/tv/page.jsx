// import React, { useState } from "react";
import "./optimum-tv.scss";
// import { optimumNavLinks } from "../../assets/data/navLinks/optimumNavLinks";
import xfintyTvHeroBg from "../../assets/images/xfinity-tv-hero-bg.jpg";
// import SubNav from "../../components/sub-nav/SubNav";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import PackageCard from "../../components/package-card/PackageCard";
import dotted from "../../assets/images/dotted.png";
import quotations from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Optimum TV Packages, Plans, And Prices",
};

const OptimumTv = () => {
  // const [faq, setFaq] = useState();

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "Optimum TV Packages, Plans, And Prices",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "Get up to 420 channels",
      "No contracts or mandatory equipment fees",
      "Free Visa® gift card up to $200",
      "TV service requires an Optimum internet plan",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Cable TV packages starting at $35.00/mo.*",
  };
  let packageTableData = [
    {
      head: ["Plan name", "Price*", "Channel count", "Details"],

      body: [
        {
          content: ["1.", "Basic TV", "+$35.00/mo.", "50+"],
          linkPath: "#",
        },
        {
          content: ["2.", "Core TV", "+$75.00/mo.", "220+"],
          linkPath: "#",
        },
        {
          content: ["3.", "Select TV", "+$95.00/mo.", "340+"],
          linkPath: "#",
        },
        {
          content: ["4.", "Premier TV", "+$115.00/mo.", "420+"],
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
    <div className="optimum-tv">
      {/* <SubNav links={optimumNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Best <span> Optimum TV Service </span> Offers
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
        <p>*Requires an Optimum internet plan.</p>
        <div className="package-table-container channels">
          <Image src={dotted} alt="mark" className="mark" />
          <h4>Is Suddenlink the same as Optimum?</h4>
          <br />
          <p>
            Optimum and Suddenlink have combined forces, so Suddenlink is no
            longer open for business. But former Suddenlink customers can now
            sign up for Optimum’s excellent TV plans.
          </p>
          <hr className="hr" />
          <div className="btn">
            <Link href={"#"}>get optimum TV</Link>
          </div>
        </div>
      </div>

      <CTA
        heading={"Interested in Optimum TV Services?"}
        desc={
          "Interested in Optimum cable TV service? Enter your zip code below to see if Optimum services your neighborhood."
        }
      />

      <div className="section optimum-cable-packages">
        <div className="head">
          <h2 className="sect-heading">
            Optimum cable packages: <span> Get top channels </span>
          </h2>
          <p className="sect-desc">
            Optimum’s four cable plans (which also require an Optimum internet
            subscription) come with sizable channel counts that’ll fit any
            household. Let’s break down what you’ll get with each Optimum cable
            TV package.
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
          <h4>Basic TV</h4>
          <br />
          <p>
            Basic TV is Optimum’s entry-level TV package. For $35 per month,
            you’ll get more than 50 local channels, including CBS, ABC, and FOX.
            Basic TV will be a great fit for budget-conscious Optimum
            subscribers who want to keep up with their network TV shows and
            local news.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Core TV</h4>
          <br />
          <p>
            Core TV ($75 per month) offers a solid lineup of more than 220 basic
            cable channels, including ESPN, Disney Channel, and HGTV. It’s best
            suited for families who want the most popular basic cable channels
            at an affordable price.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Select TV</h4>
          <br />
          <p>
            Select TV ($95 per month) upgrades on Core TV’s lineup with more
            than 340 basic cable channels. Select TV also includes Disney XD,
            Magnolia Network, and The Cooking Channel.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Premier TV</h4>
          <br />
          <p>
            If you want the most channels in your Optimum TV package, look no
            further. Premier TV ($115 per month) comes with a hefty lineup of
            more than 420 cable channels like HBO and STARZ—that’s only $20 more
            monthly for a ton of premium content, including access to Max™
            (normally $15.99 per month) along with hit shows like Yellowjackets
            and P-Valley.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotations} className="mark" alt="" />
          <h4>Interested in Optimum cable TV?</h4>
          <br />
          <p>
            Visit our full Optimum cable TV review to learn more about Optimum’s
            TV plans.
          </p>
        </div>
      </div>

      <div className="section optimum-apps-cable">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> TV apps and cable deals </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
      </div>

      <div className="section optimum-about-features">
        <div className="head">
          <h2 className="sect-heading">
            Learn about Optimum <span> TV features </span>
          </h2>
          <p className="sect-desc">
            When you sign up for Optimum cable TV, you’ll get a lot more than
            just TV service. Let’s break down some of Optimum’s best TV
            features.
          </p>
        </div>
      </div>

      <div className="section optimum-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Optimum TV </span> FAQ
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
                Optimum package?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  The cheapest Optimum Internet package is Optimum 300 ($40
                  monthly), and the cheapest Optimum TV package is Basic TV (an
                  additional $35 monthly).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What is the cheapest Optimum package?"}
            cssClass={"faq-content"}
          >
            <p>
              The cheapest Optimum Internet package is Optimum 300 ($40
              monthly), and the cheapest Optimum TV package is Basic TV (an
              additional $35 monthly).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How much is Optimum TV a
                month?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Optimum TV plans cost between $35.00–$115.00/mo.. However,
                  Optimum also requires TV subscribers to have an internet plan,
                  and the cheapest Optimum internet and TV bundle costs $75 per
                  month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" How much is Optimum TV a month?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum TV plans cost between $35.00–$115.00/mo.. However, Optimum
              also requires TV subscribers to have an internet plan, and the
              cheapest Optimum internet and TV bundle costs $75 per month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does Optimum have deals for
                existing customers?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Optimum doesn’t have many deals for existing customers, but
                  some deals include affordable cell phone plans through Optimum
                  Mobile.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does Optimum have deals for existing customers?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum doesn’t have many deals for existing customers, but some
              deals include affordable cell phone plans through Optimum Mobile.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Can I watch Optimum TV on
                my computer?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  You can watch Optimum TV by visiting Optimum’s TV to GO web
                  page. You can also watch Optimum TV by downloading the Optimum
                  TV mobile app.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Can I watch Optimum TV on my computer?"}
            cssClass={"faq-content"}
          >
            <p>
              You can watch Optimum TV by visiting Optimum’s TV to GO web page.
              You can also watch Optimum TV by downloading the Optimum TV mobile
              app.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>What does Optimum Basic
                include?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Optimum’s Basic TV plan includes around 50 TV channels like
                  NBC and ABC for an additional $35 per month. It’s a local
                  channel package, so you won’t get basic cable channels like
                  CNN or TBS.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"What does Optimum Basic include?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum’s Basic TV plan includes around 50 TV channels like NBC
              and ABC for an additional $35 per month. It’s a local channel
              package, so you won’t get basic cable channels like CNN or TBS.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default OptimumTv;
