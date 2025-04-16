// import React, { useState } from "react";
import "./xfinity-internet.scss";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import xfinityInternetHeroBg from "../../assets/images/xfinity-internet-hero-bg.jpg";
// import SubNav from "../../components/sub-nav/SubNav";
import { xfinityNavLinks } from "../../assets/data/navLinks/xfinityNavLinks";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import PackageTable from "../../components/package-table/PackageTable";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import Image from "next/image";
import xfinityEquipments from "../../assets/images/xfinity-equipments.jpg";
// import Newsletter from "../../components/newsletter/Newsletter";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Xfinity Internet Plans, Prices, And Speeds"
};

const XfinityInternet = () => {
  // const [accordion, setAccordion] = useState();
  // const [faq, setFaq] = useState();

  const heroContent = {
    img: xfinityInternetHeroBg,
    heading: "Xfinity Internet Plans, Prices, And Speeds",
    desc: "Discover Xfinity internet plans with various prices and speeds to suit your needs. Experience reliable connectivity and fast speeds with Xfinity.",
    points: [
      "Get blazing fast download speeds up to 1,200 Mbps, always reliable.",
      "Save up to $40 every month when you bundle with TV and phone services!",
      "Access Xfinity Wi-Fi hotspots for free.",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Internet packages starting at $19.99/mo.",
  };

  let packageTableData = [
    {
      head: [
        "Package",
        "Price",
        "download speeds",
        "upload speeds up to",
        "Details",
      ],

      body: [
        {
          content: ["1.", "Connect", "$19.99–$30.00/mo.", "75 Mbps", "5 Mbps"],
          linkPath: "#",
        },

        {
          content: [
            "2.",
            "Connect More",
            "$25.00-$35.00/mo.",
            "200 Mbps",
            "5 Mbps",
          ],
          linkPath: "#",
        },

        {
          content: ["3.", "Fast", "$35.00–$55.00/mo.", "400 Mbps", "5 Mbps"],
          linkPath: "#",
        },

        {
          content: [
            "4.",
            "Superfast",
            "$60.00–$65.00/mo.",
            "800 Mbps",
            "10 Mbps",
          ],
          linkPath: "#",
        },

        {
          content: [
            "5.",
            "Gigabit",
            "$60.00–$70.00/mo.",
            "1000 Mbps",
            "15 Mbps",
          ],
          linkPath: "#",
        },

        {
          content: [
            "6.",
            "Gigabit Extra",
            "$70.00–$80.00/mo.",
            "1200 Mbps",
            "35 Mbps",
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
    <div className="xfinity-internet">
      {/* <SubNav links={xfinityNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-internet-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Top <span>internet </span> deals
          </h2>
          <p className="sect-desc">
            Discover great savings with our handpicked collection of top TV
            deals. We've searched high and low to find you special offers and
            bundles that give you lots of value without sacrificing quality.
            Check out these amazing deals to enhance your home entertainment and
            internet activities while sticking to your budget.
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

      <div className="section xfinity-internet-cost">
        <div className="head">
          <h2 className="sect-heading">
            How much does Xfinity internet <span>truly cost? </span>
          </h2>
          <p className="sect-desc">
            Find out how much you'll need to pay for Xfinity internet
            service.git
          </p>
        </div>

        <PackageTable item={packageTableData} />
        <p>
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <CTA
        heading={"Interested in Xfinity service?"}
        desc={
          "Xfinity internet plans vary by region. Enter your zip code below to see which packages are available in your area."
        }
      />

      <div className="section xfinity-internet-plans">
        <div className="head">
          <h2 className="sect-heading">
            Compare <span>Xfinity internet plans</span> in your area
          </h2>
          <p className="sect-desc">
            Saying a brand is good, or a brand sucks is one thing. But comparing
            their deets head to head will give you a clearer picture of your
            options.
          </p>
        </div>

        <div className="package-table-container west-region">
          <h4>Xfinity Internet: West region</h4>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            *For the first 12 months with a 1-year agreement. Includes $10/mo
            automatic payments and paperless billing discount. **For the first
            24 months with No Term Agreement. Includes $10/mo automatic payments
            and paperless billing discount. Data effective as of publish date.
            Offers and availability may vary by location and are subject to
            change.
          </p>
        </div>

        <div className="package-table-container central-region">
          <h4>Xfinity Internet: Central region</h4>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            *For 12 months. No term contract. Taxes and equipment not included.
            Includes $10/mo automatic payments and paperless billing discount.
            **For 24 months. No term contract. Taxes not included. Includes
            $10/mo automatic payments and paperless billing discount. Data
            effective as of publish date. Offers and availability may vary by
            location and are subject to change.
          </p>
        </div>

        <div className="package-table-container northeast-region">
          <h4>Xfinity Internet: Northeast region</h4>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            *For the first 12 months with a 1-year agreement.**For 24 months
            with 1-year term contract. Includes $10/mo automatic payments and
            paperless billing discount. Taxes and equipment not included. Data
            effective as of publish date. Offers and availability may vary by
            location and are subject to change.
          </p>
        </div>

        {/* <div className="accordion">
          <div className="item">
            <h3 className="title" onClick={() => setAccordion(!accordion)}>
              <span>{accordion === true ? "-" : "+"}</span> Which Xfinity region
              i’m in?
            </h3>

            <div
              className={`faq-content custom-table ${
                accordion === true ? "show" : ""
              }`}
            >
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>West region</th>
                    <th>Central region</th>
                    <th>Northeast region</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>Arizona</td>
                    <td>Alabama</td>
                    <td>Connecticut</td>
                  </tr>

                  <tr>
                    <td>2.</td>
                    <td>California</td>
                    <td>Arkansas</td>
                    <td>Delaware</td>
                  </tr>

                  <tr>
                    <td>3.</td>
                    <td>Colorado</td>
                    <td>Florida</td>
                    <td>District Of Columbia</td>
                  </tr>

                  <tr>
                    <td>4.</td>
                    <td>Arizona</td>
                    <td>Alabama</td>
                    <td>Connecticut</td>
                  </tr>

                  <tr>
                    <td>5.</td>
                    <td>California</td>
                    <td>Arkansas</td>
                    <td>Delaware</td>
                  </tr>

                  <tr>
                    <td>6.</td>
                    <td>Colorado</td>
                    <td>Florida</td>
                    <td>District Of Columbia</td>
                  </tr>

                  <tr>
                    <td>7.</td>
                    <td>Arizona</td>
                    <td>Alabama</td>
                    <td>Connecticut</td>
                  </tr>

                  <tr>
                    <td>8.</td>
                    <td>California</td>
                    <td>Arkansas</td>
                    <td>Delaware</td>
                  </tr>

                  <tr>
                    <td>9.</td>
                    <td>Colorado</td>
                    <td>Florida</td>
                    <td>District Of Columbia</td>
                  </tr>

                  <tr>
                    <td>10.</td>
                    <td>Arizona</td>
                    <td>Alabama</td>
                    <td>Connecticut</td>
                  </tr>

                  <tr>
                    <td>11.</td>
                    <td>California</td>
                    <td>Arkansas</td>
                    <td>Delaware</td>
                  </tr>

                  <tr>
                    <td>12.</td>
                    <td>Colorado</td>
                    <td>Florida</td>
                    <td>District Of Columbia</td>
                  </tr>

                  <tr>
                    <td>13.</td>
                    <td>Arizona</td>
                    <td>Alabama</td>
                    <td>Connecticut</td>
                  </tr>

                  <tr>
                    <td>14.</td>
                    <td>California</td>
                    <td>Arkansas</td>
                    <td>Delaware</td>
                  </tr>

                  <tr>
                    <td>15.</td>
                    <td>Colorado</td>
                    <td>Florida</td>
                    <td>District Of Columbia</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> */}

        <Accordion
          id={"1"}
          title={"Which Xfinity region i’m in?"}
          cssClass={"faq-content custom-table"}
        >
          <table>
            <thead>
              <tr>
                <th></th>
                <th>West region</th>
                <th>Central region</th>
                <th>Northeast region</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1.</td>
                <td>Arizona</td>
                <td>Alabama</td>
                <td>Connecticut</td>
              </tr>

              <tr>
                <td>2.</td>
                <td>California</td>
                <td>Arkansas</td>
                <td>Delaware</td>
              </tr>

              <tr>
                <td>3.</td>
                <td>Colorado</td>
                <td>Florida</td>
                <td>District Of Columbia</td>
              </tr>

              <tr>
                <td>4.</td>
                <td>Arizona</td>
                <td>Alabama</td>
                <td>Connecticut</td>
              </tr>

              <tr>
                <td>5.</td>
                <td>California</td>
                <td>Arkansas</td>
                <td>Delaware</td>
              </tr>

              <tr>
                <td>6.</td>
                <td>Colorado</td>
                <td>Florida</td>
                <td>District Of Columbia</td>
              </tr>

              <tr>
                <td>7.</td>
                <td>Arizona</td>
                <td>Alabama</td>
                <td>Connecticut</td>
              </tr>

              <tr>
                <td>8.</td>
                <td>California</td>
                <td>Arkansas</td>
                <td>Delaware</td>
              </tr>

              <tr>
                <td>9.</td>
                <td>Colorado</td>
                <td>Florida</td>
                <td>District Of Columbia</td>
              </tr>

              <tr>
                <td>10.</td>
                <td>Arizona</td>
                <td>Alabama</td>
                <td>Connecticut</td>
              </tr>

              <tr>
                <td>11.</td>
                <td>California</td>
                <td>Arkansas</td>
                <td>Delaware</td>
              </tr>

              <tr>
                <td>12.</td>
                <td>Colorado</td>
                <td>Florida</td>
                <td>District Of Columbia</td>
              </tr>

              <tr>
                <td>13.</td>
                <td>Arizona</td>
                <td>Alabama</td>
                <td>Connecticut</td>
              </tr>

              <tr>
                <td>14.</td>
                <td>California</td>
                <td>Arkansas</td>
                <td>Delaware</td>
              </tr>

              <tr>
                <td>15.</td>
                <td>Colorado</td>
                <td>Florida</td>
                <td>District Of Columbia</td>
              </tr>
            </tbody>
          </table>
        </Accordion>
      </div>

      <div className="divider">
        <h4>Want to see what we think about Xfinity internet?</h4>
        <p>
          Like, what we really think? Check out our full{" "}
          <span>
            <Link href={"#"}>Xfinity internet review</Link>
          </span>
          .
        </p>
      </div>

      <div className="section xfinity-internet-equipments">
        <div className="head">
          <h2 className="sect-heading">
            Experience <span>top user-rated</span> Xfinity internet equipment
            and services
          </h2>

          <p className="sect-desc">
            From the xFi modem and router to its 18 million+ available hotspots
            around the US, Xfinity has some of the best internet equipment on
            the market. But don’t take our word for it. Check out our annual
            <span>
              <Link href={"#"}> internet customer satisfaction survey </Link>
            </span>
            to see how Xfinity internet equipment compares to the competition
            (spoiler alert: Xfinity kills it). <br />
            For more detailed info on all Xfinity equipment and services, see
            our comprehensive
            <span>
              <Link href={"#"}> Xfinity equipment guide </Link>
            </span>
            .
          </p>
        </div>

        <div className="sideimg-card">
          <Image src={xfinityEquipments} alt="thumbnail" />

          <div className="sideimg-card-content">
            <h4 className="title">Xfinity X1 DVR</h4>
            <div className="desc">
              <p>
                You showed up to save money, and we’re here for it. When you
                pick the right Xfinity bundle, you’ll get exactly what you
                deserve—a great deal. We’ve researched prices and compiled
                pricing comparison tables for
              </p>

              <ul>
                <li>User-friendly interface</li>
                <li>Award-winning voice remote</li>
                <li>Record up to 5 shows while watching another</li>
              </ul>

              <p>
                For more on the X1, read our in-depth
                <span>
                  <Link href="#">Xfinity X1 review</Link>
                </span>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="sideimg-card">
          <Image src={xfinityEquipments} alt="thumbnail" />

          <div className="sideimg-card-content">
            <h4 className="title">Xfinity X1 DVR</h4>
            <div className="desc">
              <p>
                You showed up to save money, and we’re here for it. When you
                pick the right Xfinity bundle, you’ll get exactly what you
                deserve—a great deal. We’ve researched prices and compiled
                pricing comparison tables for
              </p>

              <ul>
                <li>User-friendly interface</li>
                <li>Award-winning voice remote</li>
                <li>Record up to 5 shows while watching another</li>
              </ul>

              <p>
                For more on the X1, read our in-depth
                <span>
                  <Link href="#">Xfinity X1 review</Link>
                </span>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="sideimg-card">
          <Image src={xfinityEquipments} alt="thumbnail" />

          <div className="sideimg-card-content">
            <h4 className="title">Xfinity X1 DVR</h4>
            <div className="desc">
              <p>
                You showed up to save money, and we’re here for it. When you
                pick the right Xfinity bundle, you’ll get exactly what you
                deserve—a great deal. We’ve researched prices and compiled
                pricing comparison tables for
              </p>

              <ul>
                <li>User-friendly interface</li>
                <li>Award-winning voice remote</li>
                <li>Record up to 5 shows while watching another</li>
              </ul>

              <p>
                For more on the X1, read our in-depth
                <span>
                  <Link href="#">Xfinity X1 review</Link>
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <CTA
        heading={"Ready to surf the web?"}
        desc={
          "Enter your zip code to see if Xfinity internet is available in your area."
        }
      />

      <div className="section xfinity-internet-faq">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span>Internet</span> FAQ
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
                <ul>
                  <li>
                    <span className="bold">Choice TV: </span>
                    $20.00–$25.00/mo., 10+ channels
                  </li>
                  <li>
                    <span className="bold">Popular TV: </span>
                    $50.00–$60.00/mo., 125+ channels
                  </li>
                  <li>
                    <span className="bold">Ultimate TV: </span>
                    $68.50–$80.00/mo., 185+ channels
                  </li>
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
            title={"What are Xfinity TV packages?"}
            cssClass={"faq-content"}
          >
            <p>
              Xfinity TV packages by Comcast come through a cable connection
              with up to 185+ channels. Most packages also include 20 hours of
              DVR storage via the X1 DVR box, plus the Xfinity Stream app.
            </p>
            <ul>
              <li>
                <span className="bold">Choice TV: </span>
                $20.00–$25.00/mo., 10+ channels
              </li>
              <li>
                <span className="bold">Popular TV: </span>
                $50.00–$60.00/mo., 125+ channels
              </li>
              <li>
                <span className="bold">Ultimate TV: </span>
                $68.50–$80.00/mo., 185+ channels
              </li>
            </ul>

            <p>
              Check to see what Xfinity TV packages are available in your area.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What is the cheapest
                Xfinity TV package?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  The cheapest Xfinity TV package is{" "}
                  <span className="bold"> Choice TV</span>, a basic cable
                  package that offers 10+ channels for $20.00–$25.00/mo.
                </p>
                <p>
                  The cheapest regular cable package is{" "}
                  <span className="bold"> Popular TV</span> ($50.00–$60.00/mo.,
                  125+ channels).
                </p>
                <p>
                  Looking for more ways to cut monthly costs? We like the way
                  you think! View Xfinity’s{" "}
                  <span className="link">
                    <Link href={"#"}>current deals and promotions</Link>
                  </span>
                  .
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"3"}
            title={"What is the cheapest Xfinity TV package?"}
            cssClass={"faq-content"}
          >
            <p>
              The cheapest Xfinity TV package is{" "}
              <span className="bold"> Choice TV</span>, a basic cable package
              that offers 10+ channels for $20.00–$25.00/mo.
            </p>
            <p>
              The cheapest regular cable package is{" "}
              <span className="bold"> Popular TV</span> ($50.00–$60.00/mo., 125+
              channels).
            </p>
            <p>
              Looking for more ways to cut monthly costs? We like the way you
              think! View Xfinity’s{" "}
              <span className="link">
                <Link href={"#"}>current deals and promotions</Link>
              </span>
              .
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What are Xfinity tV
                packages?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Xfinity TV packages by Comcast come through a cable connection
                  with up to 185+ channels. Most packages also include 20 hours
                  of DVR storage via the X1 DVR box, plus the Xfinity Stream
                  app.
                </p>
                <ul>
                  <li>
                    <span className="bold">Choice TV: </span>
                    $20.00–$25.00/mo., 10+ channels
                  </li>
                  <li>
                    <span className="bold">Popular TV: </span>
                    $50.00–$60.00/mo., 125+ channels
                  </li>
                  <li>
                    <span className="bold">Ultimate TV: </span>
                    $68.50–$80.00/mo., 185+ channels
                  </li>
                </ul>

                <p>
                  Check to see what Xfinity TV packages are available in your
                  area.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"4"}
            title={"What are Xfinity TV packages?"}
            cssClass={"faq-content"}
          >
            <p>
              Xfinity TV packages by Comcast come through a cable connection
              with up to 185+ channels. Most packages also include 20 hours of
              DVR storage via the X1 DVR box, plus the Xfinity Stream app.
            </p>
            <ul>
              <li>
                <span className="bold">Choice TV: </span>
                $20.00–$25.00/mo., 10+ channels
              </li>
              <li>
                <span className="bold">Popular TV: </span>
                $50.00–$60.00/mo., 125+ channels
              </li>
              <li>
                <span className="bold">Ultimate TV: </span>
                $68.50–$80.00/mo., 185+ channels
              </li>
            </ul>

            <p>
              Check to see what Xfinity TV packages are available in your area.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What are Xfinity tV
                packages?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Xfinity TV packages by Comcast come through a cable connection
                  with up to 185+ channels. Most packages also include 20 hours
                  of DVR storage via the X1 DVR box, plus the Xfinity Stream
                  app.
                </p>
                <ul>
                  <li>
                    <span className="bold">Choice TV: </span>
                    $20.00–$25.00/mo., 10+ channels
                  </li>
                  <li>
                    <span className="bold">Popular TV: </span>
                    $50.00–$60.00/mo., 125+ channels
                  </li>
                  <li>
                    <span className="bold">Ultimate TV: </span>
                    $68.50–$80.00/mo., 185+ channels
                  </li>
                </ul>

                <p>
                  Check to see what Xfinity TV packages are available in your
                  area.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"5"}
            title={"What are Xfinity TV packages?"}
            cssClass={"faq-content"}
          >
            <p>
              Xfinity TV packages by Comcast come through a cable connection
              with up to 185+ channels. Most packages also include 20 hours of
              DVR storage via the X1 DVR box, plus the Xfinity Stream app.
            </p>
            <ul>
              <li>
                <span className="bold">Choice TV: </span>
                $20.00–$25.00/mo., 10+ channels
              </li>
              <li>
                <span className="bold">Popular TV: </span>
                $50.00–$60.00/mo., 125+ channels
              </li>
              <li>
                <span className="bold">Ultimate TV: </span>
                $68.50–$80.00/mo., 185+ channels
              </li>
            </ul>

            <p>
              Check to see what Xfinity TV packages are available in your area.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> What are Xfinity tV
                packages?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Xfinity TV packages by Comcast come through a cable connection
                  with up to 185+ channels. Most packages also include 20 hours
                  of DVR storage via the X1 DVR box, plus the Xfinity Stream
                  app.
                </p>
                <ul>
                  <li>
                    <span className="bold">Choice TV: </span>
                    $20.00–$25.00/mo., 10+ channels
                  </li>
                  <li>
                    <span className="bold">Popular TV: </span>
                    $50.00–$60.00/mo., 125+ channels
                  </li>
                  <li>
                    <span className="bold">Ultimate TV: </span>
                    $68.50–$80.00/mo., 185+ channels
                  </li>
                </ul>

                <p>
                  Check to see what Xfinity TV packages are available in your
                  area.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"6"}
            title={"What are Xfinity TV packages?"}
            cssClass={"faq-content"}
          >
            <p>
              Xfinity TV packages by Comcast come through a cable connection
              with up to 185+ channels. Most packages also include 20 hours of
              DVR storage via the X1 DVR box, plus the Xfinity Stream app.
            </p>
            <ul>
              <li>
                <span className="bold">Choice TV: </span>
                $20.00–$25.00/mo., 10+ channels
              </li>
              <li>
                <span className="bold">Popular TV: </span>
                $50.00–$60.00/mo., 125+ channels
              </li>
              <li>
                <span className="bold">Ultimate TV: </span>
                $68.50–$80.00/mo., 185+ channels
              </li>
            </ul>

            <p>
              Check to see what Xfinity TV packages are available in your area.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default XfinityInternet;
