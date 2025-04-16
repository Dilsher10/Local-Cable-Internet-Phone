// import React, { useState } from "react";
import "./xfinity-bundles.scss";
import { xfinityNavLinks } from "../../assets/data/navLinks/xfinityNavLinks";
// import SubNav from "../../components/sub-nav/SubNav";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import xfinityInternetHeroBg from "../../assets/images/xfinity-internet-hero-bg.jpg";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import Image from "next/image";
import xfinityBundlesAndDeals from "../../assets/images/xfinity-bundles-and-deals.jpg";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Xfinity TV And Internet Packages"
};

const XfinityBundles = () => {
  // const [faq, setFaq] = useState();

  const heroContent = {
    img: xfinityInternetHeroBg,
    heading: "Xfinity TV And Internet Packages",
    desc: "Get Xfinity TV and Internet packages for your home entertainment needs, with various options tailored to your preferences and budget. Enjoy seamless streaming and connectivity with Xfinity's combined TV and Internet plans.",
    points: [
      "Save up to $40/mo. bundling TV and internet",
      "Access to Xfinity Wi-Fi hotspots",
      "Cancel anytime",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "TV and internet packages starting at $39.00/mo.",
  };
  let packageTableData = [
    {
      head: [
        "Package",
        "Price",
        "Download speeds",
        "Channel count",
        "Phone plan",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Fast Internet + Popular TV",
            "$85.00/mo.*",
            "400 Mbps",
            "125+",
            "N/A",
          ],
          linkPath: "#",
        },

        {
          content: [
            "2.",
            "Superfast Internet + Ultimate TV",
            "$110.00/mo.",
            "800 Mbps",
            "185+",
            "N/A",
          ],
          linkPath: "#",
        },

        {
          content: [
            "3.",
            "Gigabit Extra Internet + Ultimate TV + Voice",
            "$135.00/mo.",
            "1200 Mbps",
            "185+",
            "Unlimited calling nationwide",
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
    <div className="xfinity-bundles">
      {/* <SubNav links={xfinityNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-xfinity-bundles-offers">
        <div className="head">
          <h2 className="sect-heading">
            <span>Best</span> Best Xfinity bundles (West)
          </h2>
          <p className="sect-desc">
            Enjoy diverse channel options and convenient streaming features
            tailored to your preferences. Discover the perfect package to
            elevate your entertainment experience.
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
        heading={"Interested in Xfinity service?"}
        desc={
          "Xfinity bundles vary by region. Enter your zip code below to see which packages are available in your area."
        }
      />

      <div className="section xfinity-bundles">
        <div className="watch-card">
          <div className="watch-card-content">
            <h4 className="title">
              Get Xfinity internet deals that can save you up to $60 every
              month.
            </h4>
            <p className="desc">
              We understand you want to save money. With Xfinity bundles, you
              can save between $20 and $60 each month. The more services you
              bundle, the more money you save. For example, if you bundle TV and
              internet, you save $20 per month; if you bundle TV, internet, and
              phone, you save $40 per month; and if you bundle TV, internet,
              phone, and home security, you save $60 per month. We've done the
              research to compare prices and put together tables so you can see
              the best Xfinity internet bundle deals in your area. Also, if you
              qualify, you can get up to $30 per month off any internet plan
              through the Affordable Connectivity Program (ACP). Check to see if
              you're eligible and explore all of Xfinity's current deals and
              promotions.
            </p>
          </div>
          <Image src={xfinityBundlesAndDeals} alt="thumbnail" />
        </div>
      </div>

      <div className="section bundle-packages">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity packages <span> in your area</span>
          </h2>
          <p className="sect-desc">
            Discover Xfinity packages available nearby and choose from a range
            of options tailored to your preferences. Explore now for
            entertainment that suits your area
          </p>
        </div>
        <div className="package-table-container west-region">
          <h4>Xfinity TV and internet: West region</h4>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            *Internet: For 24 months. No term contract. Taxes not included.
            Includes $10/mo automatic payments and paperless billing discount.
            Not available in all areas. TV: No term contract. Broadcast TV fee
            and regional sports fee extra; price subj to change. Taxes and
            equipment not included.Data effective as of publish date. Offers and
            availability may vary by location and are subject to change.
          </p>
        </div>

        <div className="package-table-container west-region">
          <h4>Xfinity TV and internet: Central region</h4>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            *Internet: For 24 months. No term contract. Taxes not included.
            Includes $10/mo automatic payments and paperless billing discount.
            Not available in all areas. TV: No term contract. Broadcast TV fee
            and regional sports fee extra; price subj to change. Taxes and
            equipment not included.Data effective as of publish date. Offers and
            availability may vary by location and are subject to change.
          </p>
        </div>

        <div className="package-table-container west-region">
          <h4>Xfinity TV and internet: Northeast region</h4>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            *Internet: For 24 months. No term contract. Taxes not included.
            Includes $10/mo automatic payments and paperless billing discount.
            Not available in all areas. TV: No term contract. Broadcast TV fee
            and regional sports fee extra; price subj to change. Taxes and
            equipment not included.Data effective as of publish date. Offers and
            availability may vary by location and are subject to change.
          </p>
        </div>

        <div className="faq-wrapper">
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(1)}>
                <span>{faq === 1 ? "-" : "+"}</span> Which Xfinity region i’m
                in?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Xfinity is available in most US states, but you'll have to
                  check if it services your neighborhood. Enter your{" "}
                  <span className="link">
                    <Link href={"#"}>zip code above</Link>
                  </span>{" "}
                  to check Xfinity availability in your area.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"Which Xfinity region i’m in?"}
            cssClass={"faq-content"}
          >
            <p>
              Xfinity is available in most US states, but you'll have to check
              if it services your neighborhood. Enter your{" "}
              <span className="link">
                <Link href={"#"}>zip code above</Link>
              </span>{" "}
              to check Xfinity availability in your area.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider-two">
        <h4>Do you want to know our thoughts on Xfinity deals and packages?</h4>
        <p>Check out our full Xfinity bundles review.</p>
      </div>
      <div className="section xfinity-services">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span> services</span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Pharetra morbi nisl etiam
            laoreet ac donec morbi. Nulla eu a dictumst turpis vestibulum
            consequat quis suspendisse neque. Mi tempor viverra odio libero. Mus
            volutpat vel integer leo cursus enim urna congue elementum.
          </p>
        </div>
      </div>
      <CTA
        heading={"Ready to cut monthly costs on TV and internet?"}
        desc={
          "Enter your zip code to see if Xfinity bundles are available in your area."
        }
      />

      <div className="section xfinity-bundles-faq">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span>bundles</span> FAQ
          </h2>

          <p className="sect-desc">
            TL;DR? Xfinity kills it. For more detailed info on all Xfinity
            equipment and services, see our comprehensive Xfinity equipment
            guide.
          </p>
        </div>

        <div className="faq-wrapper">
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(1)}>
                <span>{faq === 1 ? "-" : "+"}</span> What are Xfinity tV
                packages?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Xfinity TV packages by Comcast come through a cable connection
                  with up to 185+ channels. Most packages also include 20 hours
                  of DVR storage via the X1 DVR box, plus the Xfinity Stream
                  app.
                </p>
                <ul className="">
                  <li>· Choice TV: $20.00–$25.00/mo., 10+ channels</li>
                  <li>· Popular TV: $50.00–$60.00/mo., 125+ channels</li>
                  <li>· Ultimate TV: $68.50–$80.00/mo., 185+ channels</li>
                </ul>
                <p>
                  Check to see what Xfinity TV packages are available in your
                  area.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"1"}
            title={"What are Xfinity TV packages?"}
            cssClass={"faq-content"}
          >
            <p>
              Xfinity TV packages by Comcast come through a cable connection
              with up to 185+ channels. Most packages also include 20 hours of
              DVR storage via the X1 DVR box, plus the Xfinity Stream app.
            </p>
            <ul className="">
              <li>· Choice TV: $20.00–$25.00/mo., 10+ channels</li>
              <li>· Popular TV: $50.00–$60.00/mo., 125+ channels</li>
              <li>· Ultimate TV: $68.50–$80.00/mo., 185+ channels</li>
            </ul>
            <p>
              Check to see what Xfinity TV packages are available in your area.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What is the cheapest
                xfinity tV Package?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Xfinity TV packages by Comcast come through a cable connection
                  with up to 185+ channels. Most packages also include 20 hours
                  of DVR storage via the X1 DVR box, plus the Xfinity Stream
                  app.
                </p>
                <ul className="">
                  <li>· Choice TV: $20.00–$25.00/mo., 10+ channels</li>
                  <li>· Popular TV: $50.00–$60.00/mo., 125+ channels</li>
                  <li>· Ultimate TV: $68.50–$80.00/mo., 185+ channels</li>
                </ul>
                <p>
                  Check to see what Xfinity TV packages are available in your
                  area.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"2"}
            title={"What is the cheapest Xfinity TV package?"}
            cssClass={"faq-content"}
          >
            <p>
              Xfinity TV packages by Comcast come through a cable connection
              with up to 185+ channels. Most packages also include 20 hours of
              DVR storage via the X1 DVR box, plus the Xfinity Stream app.
            </p>
            <ul className="">
              <li>· Choice TV: $20.00–$25.00/mo., 10+ channels</li>
              <li>· Popular TV: $50.00–$60.00/mo., 125+ channels</li>
              <li>· Ultimate TV: $68.50–$80.00/mo., 185+ channels</li>
            </ul>
            <p>
              Check to see what Xfinity TV packages are available in your area.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Can you get xfinity tV
                without cable?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Xfinity TV packages by Comcast come through a cable connection
                  with up to 185+ channels. Most packages also include 20 hours
                  of DVR storage via the X1 DVR box, plus the Xfinity Stream
                  app.
                </p>
                <ul className="">
                  <li>· Choice TV: $20.00–$25.00/mo., 10+ channels</li>
                  <li>· Popular TV: $50.00–$60.00/mo., 125+ channels</li>
                  <li>· Ultimate TV: $68.50–$80.00/mo., 185+ channels</li>
                </ul>
                <p>
                  Check to see what Xfinity TV packages are available in your
                  area.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"3"}
            title={"Can you get xfinity TV without cable?"}
            cssClass={"faq-content"}
          >
            <p>
              Xfinity TV packages by Comcast come through a cable connection
              with up to 185+ channels. Most packages also include 20 hours of
              DVR storage via the X1 DVR box, plus the Xfinity Stream app.
            </p>
            <ul className="">
              <li>· Choice TV: $20.00–$25.00/mo., 10+ channels</li>
              <li>· Popular TV: $50.00–$60.00/mo., 125+ channels</li>
              <li>· Ultimate TV: $68.50–$80.00/mo., 185+ channels</li>
            </ul>
            <p>
              Check to see what Xfinity TV packages are available in your area.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> what is the best package to
                get on xfinity tV?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Comcast and Xfinity are the same thing-you can't trip us up
                  with your trick question!
                </p>
                <p>
                  In 2010, Comcast started using Xfinity as its trade name for
                  TV, internet, and phone services.
                  <br />
                  And as part of Comcast, Xfinity has built-in relationships
                  with Comcast's other products, such as NBCUniversal. That's
                  one of the reasons you'll get the{" "}
                  <span className="link">
                    <Link href={"#"}>Peacock Premium</Link>
                  </span>{" "}
                  streaming service for free with your Xfinity cable TV service.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"4"}
            title={"what is the best package to get on xfinity TV?"}
            cssClass={"faq-content"}
          >
            <p>
              Comcast and Xfinity are the same thing-you can't trip us up with
              your trick question!
            </p>
            <p>
              In 2010, Comcast started using Xfinity as its trade name for TV,
              internet, and phone services.
              <br />
              And as part of Comcast, Xfinity has built-in relationships with
              Comcast's other products, such as NBCUniversal. That's one of the
              reasons you'll get the{" "}
              <span className="link">
                <Link href={"#"}>Peacock Premium</Link>
              </span>{" "}
              streaming service for free with your Xfinity cable TV service.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>can you just get xfinity tV?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  The best Xfinity deal is Superfast Internet + Ultimate TV,
                  which provides 800 Mbps download speeds and 185+ cable
                  channels. Your savings may vary by region, though, and
                  depending on where you live, it could cost $115-$120 a month.
                </p>
                <p>
                  For more on Xfinity's money-saving double plays, head over to
                  our{" "}
                  <span className="link">
                    <Link href={"#"}>Xfinity bundles review</Link>
                  </span>
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"5"}
            title={"Can you just get xfinity tV?"}
            cssClass={"faq-content"}
          >
            <p>
              The best Xfinity deal is Superfast Internet + Ultimate TV, which
              provides 800 Mbps download speeds and 185+ cable channels. Your
              savings may vary by region, though, and depending on where you
              live, it could cost $115-$120 a month.
            </p>
            <p>
              For more on Xfinity's money-saving double plays, head over to our{" "}
              <span className="link">
                <Link href={"#"}>Xfinity bundles review</Link>
              </span>
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>what channels are in the
                xfinity’s basic package?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  According to our{" "}
                  <span className="link">
                    <Link href={"#"}>customer satisfaction survey,</Link>
                  </span>{" "}
                  62% of Xfinity customers are satisfied with their internet
                  service. In addition, 69% of Xfinity customers are satisfied
                  with their internet speed, tying it for first place with
                  Verizon. Cable service will always be dependent on how heavy
                  usage is in your network, so for more reliable speeds, we
                  recommend{" "}
                  <span className="link">
                    <Link href={"#"}>fiber internet</Link>
                  </span>
                  if you have the option.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"6"}
            title={"What channels are in the xfinity’s basic package?"}
            cssClass={"faq-content"}
          >
            <p>
              According to our{" "}
              <span className="link">
                <Link href={"#"}>customer satisfaction survey,</Link>
              </span>{" "}
              62% of Xfinity customers are satisfied with their internet
              service. In addition, 69% of Xfinity customers are satisfied with
              their internet speed, tying it for first place with Verizon. Cable
              service will always be dependent on how heavy usage is in your
              network, so for more reliable speeds, we recommend{" "}
              <span className="link">
                <Link href={"#"}>fiber internet</Link>
              </span>
              if you have the option.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default XfinityBundles;
