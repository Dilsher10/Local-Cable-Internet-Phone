// import React, { useState } from "react";
import "./shop-verizon-bundles.scss";
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
import quotations from "../../assets/images/quotations.svg";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Verizon TV And Internet Packages"
};

const ShopVerizonBundles = () => {
  // const [faq, setFaq] = useState(null);

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "Verizon TV And Internet Packages",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "Download speeds up to 940 Mbps",
      "Watch 425+ cable channels with Fios TV",
      "Unlimited nationwide phone coverage",
      "Save $25/mo. with qualifying Verizon Wireless plan",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Plans starting at $124.99/mo.",
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
        "Price",
        "Download speed",
        "Channels",
        "Home phone",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "300 Mbps + Your Fios TV",
            "$124.99/mo.",
            "300 Mbps",
            "125+ channels",
            "Add for $25/mo.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "500 Mbps + More Fios TV",
            "$168.99/mo.",
            "500 Mbps",
            "225+ channels",
            "Add for $25/mo.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "1 Gig + The Most Fios TV + Home Phone",
            "$233.99/mo.",
            "1 Gig",
            "425+ channels",
            "Free nationwide calling and more",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="shop-verizon-bundles">
      {/* <SubNav links={verizonNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Top Verizon fios <span> deals and promotions </span>
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
        heading={"Do you want a Verizon triple play bundle?"}
        desc={
          "Enter your zip code below to see if Verizon TV and internet packages are available in your area."
        }
      />

      <div className="section verizon-bundle-deals">
        <div className="head">
          <h2 className="sect-heading">
            Verizon
            <span> bundle deals </span>
          </h2>
          <p className="sect-desc">
            You’ll get the best Verizon bundle deals when you package Verizon’s
            phone, internet, or TV plans together. We selected a few of
            Verizon’s best triple play bundles to highlight their prices and
            show what you’ll get in each package.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          *With Autopay and paper-free billing. Qualifying mobile plans include
          One Unlimited for iPhone, 5G Play More, 5G Do More, and 5G Get More.
          <br />
          Data effective as of post date. Offers and availability vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section verizon-mix-watch-package">
        <div className="head">
          <h2 className="sect-heading">
            Mix and match Verizon
            <span> TV and internet packages</span>
          </h2>
          <p className="sect-desc">
            Need fast internet and local channels? Are you a Verizon Wireless
            customer looking for additional savings? Pay only for the services
            you want when you come to Verizon.
            <br />
            You can mix and match between eleven TV, home phone, internet, and
            cell phone plans to build the best Verizon Fios package deal for
            your household. If you have a qualifying Verizon Wireless cell phone
            plan, you’ll save an additional $25 per month on any Verizon Fios
            internet plan.
          </p>
        </div>

        <div className="package-table-container channels">
          <Image src={quotations} alt="mark" className="mark" />
          <h4>Looking for Verizon bundle deals?</h4>
          <br />
          <p>
            Visit our{" "}
            <span className="link">
              <Link href={"/"}>Verizon bundles guide for a full</Link>
            </span>{" "}
            breakdown of Verizon’s TV, internet, and phone package deals.{" "}
          </p>
        </div>
      </div>

      <div className="section verizon-bundle-features">
        <div className="head">
          <h2 className="sect-heading">
            Verizon
            <span> bundle features </span>
          </h2>
          <p className="sect-desc">
            When you get a Verizon bundle, you’ll also get peace of mind with
            the convenience of bundling services on one bill. Here’s what you
            need to know about Verizon’s best bundle features.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Easy management</h4>
          <br />
          <p>
            With resources like the My Verizon mobile app, Verizon’s website,
            and its network of local retail stores, you’ll never run out of
            helpful options for managing your Verizon account.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>DVR</h4>
          <br />
          <p>
            Get up to 200 hours of DVR storage—so you don’t miss a second of
            your favorite shows—when you add Verizon’s DVR service to your TV
            plan. Access and manage your DVR anytime with the Fios TV Mobile
            app.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Voicemail</h4>
          <br />
          <p>
            Stay updated on your latest voicemails with Verizon’s management
            tools. You can access your home voicemail inbox on your Verizon
            smartphone or Fios TV box. You can also get text or email
            notifications for new voicemail messages.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Premium entertainment</h4>
          <br />
          <p>
            Keep current on new premium cable shows like The Last of Us and
            Yellowjackets with Fios TV. The Most Fios TV plan includes premium
            cable channels EPIX, SHOWTIME®, and STARZ®. You can also add HBO Max
            and CINEMAX® for an additional monthly fee.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Personalized TV options</h4>
          <br />
          <p>
            Build a TV setup that fits your household’s TV habits with Verizon.
            <br />
            Every Fios TV plan comes with one free set-top box, and you can add
            additional boxes at any time for your living room, bedroom, and
            everywhere in between. With the Your Fios TV or Fios TV Test Drive
            plans, you can also build a customized channel lineup that reflects
            your channel preferences.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>On Demand</h4>
          <br />
          <p>
            Watch the latest TV shows and movies for free with Verizon Fios On
            Demand. The streaming service includes purchasable or rentable
            content, and you can access it on your Fios TV box or the Fios TV
            Mobile app.
          </p>
        </div>
      </div>

      <div className="section verizon-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>Verizon TV and internet packages </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span>What is the best Verizon
                Fios package deal?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  The best Verizon Fios package for most households is the 500
                  Mbps + More Fios TV bundle. On this plan, you’ll have maximum
                  download speeds of 500 Mbps and 225+ channels. It’ll be the
                  best fit if your household has multiple people who regularly
                  watch live sports or stream HD movies.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"What is the best Verizon Fios package deal?"}
            cssClass={"faq-content"}
          >
            <p>
              The best Verizon Fios package for most households is the 500 Mbps
              + More Fios TV bundle. On this plan, you’ll have maximum download
              speeds of 500 Mbps and 225+ channels. It’ll be the best fit if
              your household has multiple people who regularly watch live sports
              or stream HD movies.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What is the cheapest
                Verizon package?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>The cheapest Verizon package is 300 Mbps + Your Fios TV.</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" What is the cheapest Verizon package?"}
            cssClass={"faq-content"}
          >
            <p>The cheapest Verizon package is 300 Mbps + Your Fios TV.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does Verizon offer a senior
                discount on Fios?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  No, Verizon does not offer a standard senior discount.
                  Instead, it offers discounts through the Affordable
                  Connectivity Program. Enrollment in a qualifying program, like
                  Medicaid, may help you get Fios’ 300 Mbps plan for free.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does Verizon offer a senior discount on Fios?"}
            cssClass={"faq-content"}
          >
            <p>
              No, Verizon does not offer a standard senior discount. Instead, it
              offers discounts through the Affordable Connectivity Program.
              Enrollment in a qualifying program, like Medicaid, may help you
              get Fios’ 300 Mbps plan for free.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span>What is Fios streaming
                connection bundle?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  The Fios TV streaming connection add-on lets you stream Fios
                  TV to unlimited devices. If you upgrade to The Most Fios TV,
                  you’ll get this add-on for free, but on other Fios TV plans,
                  you’ll only have the add-on for a two-month trial.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={"What is Fios streaming connection bundle?"}
            cssClass={"faq-content"}
          >
            <p>
              The Fios TV streaming connection add-on lets you stream Fios TV to
              unlimited devices. If you upgrade to The Most Fios TV, you’ll get
              this add-on for free, but on other Fios TV plans, you’ll only have
              the add-on for a two-month trial.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default ShopVerizonBundles;
