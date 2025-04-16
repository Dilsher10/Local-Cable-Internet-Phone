// import React, { useState } from "react";
import "./optimum-shop-mobile.scss";
// import { optimumNavLinks } from "../../assets/data/navLinks/optimumNavLinks";
import xfintyTvHeroBg from "../../assets/images/xfinity-deals-hero-bg.jpg";
// import SubNav from "../../components/sub-nav/SubNav";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import PackageCard from "../../components/package-card/PackageCard";
import CTA from "../../components/cta-section/CTA";
import quotations from "../../assets/images/quotations.svg";
import mobileone from "../../assets/images/mobileone.png";
import mobiletwo from "../../assets/images/mobiletwo.png";
import mobilethree from "../../assets/images/mobilethree.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Optimum Mobile Plans",
};

const OptimumShopMobile = () => {
  // const [faq, setFaq] = useState();

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "Optimum Mobile Plans",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "Up to 50 GB of mobile data",
      "5G access on every plan",
      "Unlimited calls and texts",
      "Bigger discounts when you add more lines",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Optimum Mobile plans starting at $15.00/mo.*",
  };
  let packageTableData = [
    {
      head: [
        "Plan",
        "Monthly price (single line)",
        "Monthly price (2–4 lines)",
        "Monthly price (5 lines)",
        "Data allowance",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "1 GB",
            "$15.00/line",
            "$15.00/line",
            "$15.00/line",
            "1 GB",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "3 GB",
            "$25.00/line",
            "$25.00/line",
            "$25.00/line",
            "3 GB",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Unlimited",
            "$45.00/line",
            "$30.00/line",
            "$25.00/line",
            "20 GB",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Unlimited Max",
            "$55.00/line",
            "$40.00/line",
            "$35.00/line",
            "50 GB",
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
    <div className="optimum-shop-mobile">
      {/* <SubNav links={optimumNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Best <span> Optimum Mobile Service </span> Offers
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
        heading={"Interested in Optimum Services?"}
        desc={
          "Optimum Internet customers get the best savings on Optimum Mobile. Enter your zip code below to see if Optimum is available in your area."
        }
      />

      <div className="section optimum-mobile-plans">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> Mobile plans </span>
          </h2>
          <p className="sect-desc">
            Optimum Mobile’s four plans offer a variety of excellent coverage
            and mobile data options for any household. The budget-friendly 1 GB
            and 3 GB plans come with 1 GB or 3 GB of premium mobile data, and
            they’re a great fit if you’re looking for basic phone service. You
            also get great features, like nationwide 5G coverage and unlimited
            talk and text.
            <br />
            Optimum Mobile’s Unlimited and Unlimited Max plans give you premium
            features like 50 GB of mobile data, HD video streaming, and mobile
            hotspot access. You get the most from Optimum Mobile’s Unlimited
            plans if you’re regularly scrolling TikTok or streaming music off
            your phone.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change.
        </p>
        <br />
        <div className="package-table-container channels">
          <h4>Optimum Mobile family plans: save with more lines</h4>
          <br />
          <p>
            Do you need a cell phone package that covers the kids’ Instagram
            scrolling and grandma’s phone calls? Mix and match Optimum phone
            plans to build a cell phone plan that fits everyone’s phone habits.
            Plus, Optimum Mobile offers staggered discounts for its Unlimited
            plans—add more lines, and your monthly rate per line gets smaller.
          </p>
        </div>
        <br />
        <div className="package-table-container channels">
          <Image src={quotations} alt="mark" className="mark" />
          <h4>Interested in Optimum Mobile?</h4>
          <br />
          <p>
            Check out our Optimum Mobile review to learn more about Optimum’s
            cell phone plans.
          </p>
        </div>
      </div>

      <div className="section optimum-mobile-features">
        <div className="head">
          <h2 className="sect-heading">
            Optimum Mobile features: <span> get more without paying more </span>
          </h2>
          <p className="sect-desc">
            Whether you simply need cell phone service or you’re looking for an
            all-in-one cell phone plan, there’s a lot to like with Optimum
            Mobile. Let’s break down Optimum Mobile’s best features.
          </p>
        </div>

        <br />
        <div className="package-table-container channels">
          <h4>Savings</h4>
          <br />
          <p>
            Whether you simply need cell phone service or you’re looking for an
            all-in-one cell phone plan, there’s a lot to like with Optimum
            Mobile. Let’s break down Optimum Mobile’s best features. plans—add
            more lines, and your monthly rate per line gets smaller.
          </p>
        </div>
        <br />
        <div className="package-table-container channels">
          <h4>5G network</h4>
          <br />
          <p>
            Every Optimum Mobile plan comes with 5G access, so you can get the
            fastest download speeds on your phone. If you don’t have a phone
            with 5G support, you can still connect to Optimum Mobile’s LTE
            network for decent internet speeds.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>5G phones</h4>
          <br />
          <p>
            Do you need a new smartphone? Optimum sells a variety of budget,
            midrange, and premium smartphones with 5G support.
          </p>
        </div>
      </div>

      <div className="section optimum-cell-phones">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> cell phones </span>
          </h2>
          <p className="sect-desc">
            Optimum Mobile offers the newest and fastest smartphones like the
            Samsung Galaxy S22, Apple iPhone 14, and the Samsung Galaxy Z Flip4.
            You can also bring your current cell phone to Optimum Mobile if it’s
            compatible with Optimum’s cell phone network.
          </p>
        </div>
        <div className="mobile-view">
          <div>
            <Image src={mobileone} alt="" />
          </div>
          <div>
            <Image src={mobiletwo} alt="" />
          </div>
          <div>
            <Image src={mobilethree} alt="" />
          </div>
        </div>
      </div>

      <div className="section optimum-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Optimum Mobile </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span>What network does Optimum
                Mobile use?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Optimum Mobile uses T-Mobile’s 4G LTE and 5G coverage map for
                  service.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"What network does Optimum Mobile use?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum Mobile uses T-Mobile’s 4G LTE and 5G coverage map for
              service.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is Optimum Mobile the same
                as Altice Mobile?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Optimum Mobile and Altice Mobile are the same company. Altice
                  Mobile is the old name for Optimum Mobile.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Is Optimum Mobile the same as Altice Mobile?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum Mobile and Altice Mobile are the same company. Altice
              Mobile is the old name for Optimum Mobile.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span>How do I set up an Optimum
                Mobile account?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  To set up an Optimum Mobile account, you can visit an Optimum
                  store or use Optimum’s website.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"How do I set up an Optimum Mobile account?"}
            cssClass={"faq-content"}
          >
            <p>
              To set up an Optimum Mobile account, you can visit an Optimum
              store or use Optimum’s website.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Is Optimum cheaper than
                Verizon?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>Optimum Mobile is cheaper than Verizon’s Unlimited plans.</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Is Optimum cheaper than Verizon?"}
            cssClass={"faq-content"}
          >
            <p>Optimum Mobile is cheaper than Verizon’s Unlimited plans.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Does Optimum give seniors a
                discount?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Optimum Mobile does not offer senior discounts, but Optimum
                  does have senior discounts for internet service.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" Does Optimum give seniors a discount?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum Mobile does not offer senior discounts, but Optimum does
              have senior discounts for internet service.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default OptimumShopMobile;
