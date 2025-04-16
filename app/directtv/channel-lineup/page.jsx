// import React, { useState } from "react";
import "./direct-tv-channel-line-up.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { directtvNavLinks } from "../../assets/data/navLinks/directtvNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import directtvchannellineup from "../../assets/images/directtvchannellineup.png";
import star from "../../assets/images/star.png";
import dsign from "../../assets/images/dsign.png";
import directtvlogo from "../../assets/images/directtvlogo.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa6";
// import Newsletter from "../../components/newsletter/Newsletter";
import quotations from "../../assets/images/quotations.svg";

export const metadata = {
  title: "DIRECTV Channel Lineup Guide"
};

const DirectTvChannelLineUp = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: directtvlogo,
      rating: "(4.5/5)",
      starImg: star,
      desc: "Best for sports",
      buttonText: "Read DIRECTV Review",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: directtvchannellineup,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "DIRECTV",
        icon: dsign,
      },
      {
        subtitle: "Channel count:",
        title: "165–340+",
        icon: dsign,
      },
      {
        subtitle: "Price:",
        title: "$69.99–$159.99/mo.",
        icon: dsign,
      },
      {
        subtitle: "DVR:",
        title: "200 hrs. included",
        icon: dsign,
      },
    ],

    tableData: [
      {
        head: [
          "Packages",
          "Price for first year",
          "Channel count",
          "Popular channels",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "ENTERTAINMENT All Included",
              "$64.99/mo.*",
              "165+",
              "ESPN, Hallmark Channel, and TNT",
            ],
            linkPath: "#",
          },

          {
            content: [
              "2.",
              "CHOICE™ All Included",
              "$84.99/mo.*",
              "200+",
              "NFL Network, NBA TV, and regional sports networks",
            ],
            linkPath: "#",
          },
          {
            content: [
              "3.",
              "ULTIMATE All Included",
              "$109.99/mo.*",
              "270+",
              "BBC World News, CBS Sports Network, and Lifetime Movie Network",
            ],
            linkPath: "#",
          },
          {
            content: [
              "4.",
              "PREMIER™ All Included",
              "$154.99/mo.*",
              "340+",
              "HBO®, CINEMAX®, and SHOWTIME®",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "*For 12 mos. plus taxes and fees. w/ 24-mo agmt. Autopay & Paperless bill req'd. Prices higher in 2nd year. Regional Sports Fee up to $11.99/mo. is extra & applies. Data effective as of post date. Offers and availability may vary by location and are subject to change.",
  };
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="direct-tv-channel-line-up">
      {/* <SubNav links={directtvNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">DIRECTV Channel Lineup Guide</h2>
          <p className="sect-desc">
            Find out channel numbers, plans, pricing, and more with our DIRECTV
            channel lineup guide.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-direct-tv-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            5-day free trial: Tired of cable and satellite TV but not quite sure
            if you wanna cut the cord? DIRECTV STREAM is a good streaming
            alternative for folks who want the look and feel of old-school TV
            without the installation requirements, equipment fees, and other
            headaches that come with cable.
            <br />
            Each DIRECTV package has a unique channel lineup. Lucky for you, we
            know how important getting the right channel lineup is, so we’re
            here to be your DIRECTV guide.
            <br />
            If you’re looking for a comprehensive look at DIRECTV’s channel
            packages, we’ve put together a complete list for you to compare
            below.
          </p>
          <br />
        </div>
      </div>

      <CTA
        heading={"Curious what other TV providers are in your area?"}
        desc={"Enter your zip code below to find out!"}
      />

      <div className="section important-links">
        <div className="head">
          <h2 className="sect-heading">
            Jump to <span>important links</span>
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
          <Link href={"#"}>DIRECTV channel lineup </Link>
          <Link href={"#"}>DIRECTV regional sports networks</Link>
        </div>
      </div>

      <div className="section direct-tv-channel-lineup">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV <span> channels </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>
        <div className="hash-linking">
          <div className="alphabets">
            {" "}
            <Link href="#a">a</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">b</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">c</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">d</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">e</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">f</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">g</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">h</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">i</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">j</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">k</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">l</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">m</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">n</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">o</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">p</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">q</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">r</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">s</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">t</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">u</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">v</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">w</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">x</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">y</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#z">z</Link>
          </div>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th> </th>
                <th>Channels</th>
                <th>Channel number</th>
                <th>ENTERTAINMENT</th>
                <th>CHOICE™</th>
                <th>ULTIMATE</th>
                <th>PREMIER™</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>1. </th>
                <th id="a">A&E </th>
                <th>118 </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>2. </th>
                <th>ABC</th>
                <th>651</th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>3. </th>
                <th>Afro</th>
                <th>554</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>4. </th>
                <th>American Heroes Channel (AHC)</th>
                <th>151</th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>5. </th>
                <th>BBC America</th>
                <th>654 / 656</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>6. </th>
                <th>MTV Live</th>
                <th>230</th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>7. </th>
                <th>Universo</th>
                <th>845</th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>8. </th>
                <th>WE tv</th>
                <th>544 / 456 / 546</th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th> 9.</th>
                <th>Z Living</th>
                <th>121</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>10. </th>
                <th id="z">Zona Futbol</th>
                <th>568</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="divider">
        <p>view DIRECTV Plans</p>
      </div>

      <div className="section direct-tv-regional-sports-networks">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV <span> regional sports networks </span>
          </h2>
          <p className="sect-desc">
            DIRECTV offers several regional sports networks (RSNs) in the CHOICE
            package and above. Each RSN is available to you based on your
            location.
            <br />
            If you want more regional sports access, you can include DIRECTV
            SPORTS PACK with your plan and get around 40 more out-of-market
            networks. We highlight this add-on and many others on our DIRECTV
            Sports Packages page.
            <br />
            To see which DIRECTV RSNs are available in your area, enter your zip
            code on DIRECTV’s local RSN lookup tool.
          </p>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th> </th>
                <th>Channels</th>
                <th>Channel number</th>
                <th>ENTERTAINMENT</th>
                <th>CHOICE™</th>
                <th>ULTIMATE</th>
                <th>PREMIER™</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>1. </th>
                <th id="a">A&E </th>
                <th>118 </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>2. </th>
                <th>ABC</th>
                <th>651</th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>3. </th>
                <th>Afro</th>
                <th>554</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>4. </th>
                <th>American Heroes Channel (AHC)</th>
                <th>151</th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>5. </th>
                <th>BBC America</th>
                <th>654 / 656</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>6. </th>
                <th>MTV Live</th>
                <th>230</th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>7. </th>
                <th>Universo</th>
                <th>845</th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>8. </th>
                <th>WE tv</th>
                <th>544 / 456 / 546</th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th> 9.</th>
                <th>Z Living</th>
                <th>121</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>10. </th>
                <th id="z">Zona Futbol</th>
                <th>568</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change. **Customers with CHOICE,™ ULTIMATE
          and MÁS ULTRA™ only receive Regional Sports Networks for their market
          based on ZIP. Most Regional Sports Networks available in all markets
          for PREMIER™ and LO MÁXIMO.™ Blackout restrictions and other
          conditions apply to all sports programming.
        </p>
      </div>

      <div className="section direct-tv-favorites">
        <div className="head">
          <h2 className="sect-heading">
            CableTV.com <span> Favorites </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
      </div>

      <div className="section direct-tv-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>DIRECTV channel lineups </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What channel is ESPN on
                DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>You can watch ESPN on DIRECTV’s channel 206.</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What channel is ESPN on DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>You can watch ESPN on DIRECTV’s channel 206.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What channel is ABC on
                DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Depending on where you live, ABC’s channel number changes on
                  the DIRECTV lineup. Here are the channel numbers for the
                  most-searched cities:
                </p>
                <ul>
                  <li>· Boise, ID: CH 6</li>
                  <li>· Colorado Springs, CO: CH 13</li>
                  <li>· El Paso, TX: CH 7</li>
                  <li>· Houston, TX: CH 13</li>
                  <li>· Las Vegas, NV: CH 7</li>
                  <li>· Los Angeles, CA: CH 7</li>
                  <li>· Miami, FL: CH 10</li>
                  <li>· San Antonio, TX: CH 12</li>
                  <li>· San Diego, CA: CH 10</li>
                  <li>· Tucson, AZ: CH 9</li>
                  <li>· Tulsa, OK: CH 8</li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" What channel is ABC on DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>
              Depending on where you live, ABC’s channel number changes on the
              DIRECTV lineup. Here are the channel numbers for the most-searched
              cities:
            </p>
            <ul>
              <li>· Boise, ID: CH 6</li>
              <li>· Colorado Springs, CO: CH 13</li>
              <li>· El Paso, TX: CH 7</li>
              <li>· Houston, TX: CH 13</li>
              <li>· Las Vegas, NV: CH 7</li>
              <li>· Los Angeles, CA: CH 7</li>
              <li>· Miami, FL: CH 10</li>
              <li>· San Antonio, TX: CH 12</li>
              <li>· San Diego, CA: CH 10</li>
              <li>· Tucson, AZ: CH 9</li>
              <li>· Tulsa, OK: CH 8</li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What channel is CBS on
                DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  DIRECTV changes CBS’s channel number based on where you live.
                  For a more comprehensive list of CBS channel numbers, check
                  out our What Channel Is CBS On? guide. Otherwise, here are the
                  channel numbers for the most-searched cities:
                </p>
                <ul>
                  <li>· Boise, ID: CH 2</li>
                  <li>· Colorado Springs, CO: CH 11</li>
                  <li>· El Paso, TX: CH 4</li>
                  <li>· Houston, TX: CH 11</li>
                  <li>· Las Vegas, NV: CH 2</li>
                  <li>· Los Angeles, CA: CH 2</li>
                  <li>· Miami, FL: CH 4</li>
                  <li>· San Antonio, TX: CH 5</li>
                  <li>· San Diego, CA: CH 8</li>
                  <li>· Tucson, AZ: CH 13</li>
                  <li>· Tulsa, OK: CH 6</li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" What channel is CBS on DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>
              DIRECTV changes CBS’s channel number based on where you live. For
              a more comprehensive list of CBS channel numbers, check out our
              What Channel Is CBS On? guide. Otherwise, here are the channel
              numbers for the most-searched cities:
            </p>
            <ul>
              <li>· Boise, ID: CH 2</li>
              <li>· Colorado Springs, CO: CH 11</li>
              <li>· El Paso, TX: CH 4</li>
              <li>· Houston, TX: CH 11</li>
              <li>· Las Vegas, NV: CH 2</li>
              <li>· Los Angeles, CA: CH 2</li>
              <li>· Miami, FL: CH 4</li>
              <li>· San Antonio, TX: CH 5</li>
              <li>· San Diego, CA: CH 8</li>
              <li>· Tucson, AZ: CH 13</li>
              <li>· Tulsa, OK: CH 6</li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What channel is CNN on
                DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>CNN is channel 202 on DIRECTV.</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" What channel is CNN on DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>CNN is channel 202 on DIRECTV.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>What channel is FOX on
                DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  You’ll find FOX on a different channel depending on where you
                  live. If you’re having trouble finding yours on the DIRECTV
                  channel guide, here are the channel numbers for the
                  most-searched cities:
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"What channel is FOX on DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>
              You’ll find FOX on a different channel depending on where you
              live. If you’re having trouble finding yours on the DIRECTV
              channel guide, here are the channel numbers for the most-searched
              cities:
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>What channel is FOX News on
                DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>You can watch FOX News on DIRECTV channel 360.</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"What channel is FOX News on DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>You can watch FOX News on DIRECTV channel 360.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(7)}>
                <span>{faq === 7 ? "-" : "+"}</span>What channel is NBC on
                DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 7 ? "show" : ""}`}>
                <p>
                  The NBC channel number on DIRECTV varies depending on your
                  location. Our What Channel is NBC On? page offers a more
                  comprehensive NBC channel list for major US cities, but here
                  are some of the channel numbers in the most-searched cities:
                </p>
                <ul>
                  <li>· Boise, ID: CH 2</li>
                  <li>· Colorado Springs, CO: CH 11</li>
                  <li>· El Paso, TX: CH 4</li>
                  <li>· Houston, TX: CH 11</li>
                  <li>· Las Vegas, NV: CH 2</li>
                  <li>· Los Angeles, CA: CH 2</li>
                  <li>· Miami, FL: CH 4</li>
                  <li>· San Antonio, TX: CH 5</li>
                  <li>· San Diego, CA: CH 8</li>
                  <li>· Tucson, AZ: CH 13</li>
                  <li>· Tulsa, OK: CH 6</li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={"What channel is NBC on DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>
              The NBC channel number on DIRECTV varies depending on your
              location. Our What Channel is NBC On? page offers a more
              comprehensive NBC channel list for major US cities, but here are
              some of the channel numbers in the most-searched cities:
            </p>
            <ul>
              <li>· Boise, ID: CH 2</li>
              <li>· Colorado Springs, CO: CH 11</li>
              <li>· El Paso, TX: CH 4</li>
              <li>· Houston, TX: CH 11</li>
              <li>· Las Vegas, NV: CH 2</li>
              <li>· Los Angeles, CA: CH 2</li>
              <li>· Miami, FL: CH 4</li>
              <li>· San Antonio, TX: CH 5</li>
              <li>· San Diego, CA: CH 8</li>
              <li>· Tucson, AZ: CH 13</li>
              <li>· Tulsa, OK: CH 6</li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(8)}>
                <span>{faq === 8 ? "-" : "+"}</span> Which sports channels are
                available on DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 8 ? "show" : ""}`}>
                <p>
                  In addition to regional sports networks and out-of-market
                  league packages, you can catch sporting events across
                  DIRECTV’s lineup of over 40 sports channels. These include:
                </p>
                <ul>
                  <li>· Big Ten Network (BTN)</li>
                  <li>· CBS Sports Network</li>
                  <li>· ESPN Classic</li>
                  <li>· ESPN Deportes</li>
                  <li>· ESPNews</li>
                  <li>· ESPNU</li>
                  <li>· FOX Deportes</li>
                  <li>· FOX Soccer Plus</li>
                  <li>· FOX Sports 1 (FS1)</li>
                  <li>· FOX Sports 2 (FS2)</li>
                  <li>· Golf Channel</li>
                  <li>· GolTV</li>
                  <li>· MLB Network</li>
                  <li>· NBA TV</li>
                  <li>· NFL Network</li>
                  <li>· NHL Network</li>
                  <li>· Outdoor Channel</li>
                  <li>· Pursuit Channel</li>
                  <li>· SEC Network</li>
                  <li>· SPORTS MIX</li>
                  <li>· Sportsman Channel</li>
                  <li>· Tennis Channel</li>
                  <li>· TUDN</li>
                  <li>· TVG</li>
                  <li>· TyC Sports</li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"8"}
            title={" Which sports channels are available on DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>
              In addition to regional sports networks and out-of-market league
              packages, you can catch sporting events across DIRECTV’s lineup of
              over 40 sports channels. These include:
            </p>
            <ul>
              <li>· Big Ten Network (BTN)</li>
              <li>· CBS Sports Network</li>
              <li>· ESPN Classic</li>
              <li>· ESPN Deportes</li>
              <li>· ESPNews</li>
              <li>· ESPNU</li>
              <li>· FOX Deportes</li>
              <li>· FOX Soccer Plus</li>
              <li>· FOX Sports 1 (FS1)</li>
              <li>· FOX Sports 2 (FS2)</li>
              <li>· Golf Channel</li>
              <li>· GolTV</li>
              <li>· MLB Network</li>
              <li>· NBA TV</li>
              <li>· NFL Network</li>
              <li>· NHL Network</li>
              <li>· Outdoor Channel</li>
              <li>· Pursuit Channel</li>
              <li>· SEC Network</li>
              <li>· SPORTS MIX</li>
              <li>· Sportsman Channel</li>
              <li>· Tennis Channel</li>
              <li>· TUDN</li>
              <li>· TVG</li>
              <li>· TyC Sports</li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(9)}>
                <span>{faq === 9 ? "-" : "+"}</span>Which kids channels are
                available on DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 9 ? "show" : ""}`}>
                <p>
                  The DIRECTV channel list includes a variety of kid favorites
                  for your family to enjoy:
                </p>
                <ul>
                  <li>· BabyFirst</li>
                  <li>· Boomerang</li>
                  <li>· Cartoon Network</li>
                  <li>· Discovery Family Channel</li>
                  <li>· Disney Channel</li>
                  <li>· Disney Junior</li>
                  <li>· Disney XD</li>
                  <li>· PBS Kids</li>
                  <li>· Nickelodeon</li>
                  <li>· Nicktoons</li>
                  <li>· STARZ Kids & Family</li>
                  <li>· TeenNick</li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"9"}
            title={"Which kids channels are available on DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>
              The DIRECTV channel list includes a variety of kid favorites for
              your family to enjoy:
            </p>
            <ul>
              <li>· BabyFirst</li>
              <li>· Boomerang</li>
              <li>· Cartoon Network</li>
              <li>· Discovery Family Channel</li>
              <li>· Disney Channel</li>
              <li>· Disney Junior</li>
              <li>· Disney XD</li>
              <li>· PBS Kids</li>
              <li>· Nickelodeon</li>
              <li>· Nicktoons</li>
              <li>· STARZ Kids & Family</li>
              <li>· TeenNick</li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(10)}>
                <span>{faq === 10 ? "-" : "+"}</span>Which movie channels are
                available on DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 10 ? "show" : ""}`}>
                <p>
                  You’ll find 30 movie stations available across DIRECTV’s
                  channel lineups:
                </p>
                <ul>
                  <li>· AMC</li>
                  <li>· BET</li>
                  <li>· Cine Estelar</li>
                  <li>· Cine Mexicano</li>
                  <li>· Cine Nostalgia</li>
                  <li>· Cinelatino</li>
                  <li>· CINEMAX</li>
                  <li>· De Película</li>
                  <li>· De Película Clásico</li>
                  <li>· DIRECTV CINEMA</li>
                  <li>· EPIX</li>
                  <li>· Flix</li>
                  <li>· FUSION</li>
                  <li>· FX Movie Channel</li>
                  <li>· GZ Television</li>
                  <li>· Hallmark Movies and Mysteries</li>
                  <li>· HBO</li>
                  <li>· HDNET MOVIES</li>
                  <li>· IFC</li>
                  <li>· Kapatid</li>
                  <li>· Lifetime Movie Network</li>
                  <li>· The Movie Channel</li>
                  <li>· REELZ</li>
                  <li>· SHOWTIME</li>
                  <li>· Sony Movie Channel</li>
                  <li>· STARZ</li>
                  <li>· STARZ ENCORE</li>
                  <li>· SundanceTV</li>
                  <li>· VGN TV</li>
                  <li>· ViendoMovies</li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"10"}
            title={"Which movie channels are available on DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>
              You’ll find 30 movie stations available across DIRECTV’s channel
              lineups:
            </p>
            <ul>
              <li>· AMC</li>
              <li>· BET</li>
              <li>· Cine Estelar</li>
              <li>· Cine Mexicano</li>
              <li>· Cine Nostalgia</li>
              <li>· Cinelatino</li>
              <li>· CINEMAX</li>
              <li>· De Película</li>
              <li>· De Película Clásico</li>
              <li>· DIRECTV CINEMA</li>
              <li>· EPIX</li>
              <li>· Flix</li>
              <li>· FUSION</li>
              <li>· FX Movie Channel</li>
              <li>· GZ Television</li>
              <li>· Hallmark Movies and Mysteries</li>
              <li>· HBO</li>
              <li>· HDNET MOVIES</li>
              <li>· IFC</li>
              <li>· Kapatid</li>
              <li>· Lifetime Movie Network</li>
              <li>· The Movie Channel</li>
              <li>· REELZ</li>
              <li>· SHOWTIME</li>
              <li>· Sony Movie Channel</li>
              <li>· STARZ</li>
              <li>· STARZ ENCORE</li>
              <li>· SundanceTV</li>
              <li>· VGN TV</li>
              <li>· ViendoMovies</li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(11)}>
                <span>{faq === 11 ? "-" : "+"}</span>Which DIRECTV channels are
                in 4K Ultra HD?
              </h3>

              <div className={`faq-content ${faq === 11 ? "show" : ""}`}>
                <p>DIRECTV offers six 4K Ultra-HD channels:.</p>
                <ul>
                  <li>
                    1.Channel 104: Documentaries, original programs, and other
                    shows in 4K
                  </li>
                  <li>2.Channel 105: Live sporting events in 4K</li>
                  <li>3.Channel 106: Live sporting events in 4K</li>
                  <li>4.Channel 107: Pay-per-view movies in 4K</li>
                  <li>5.Channel 108: Pay-per-view movies in 4K</li>
                  <li>6.Channel 1104: On-demand content in 4K</li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"11"}
            title={"Which DIRECTV channels are in 4K Ultra HD?"}
            cssClass={"faq-content"}
          >
            <p>DIRECTV offers six 4K Ultra-HD channels:.</p>
            <ul>
              <li>
                1.Channel 104: Documentaries, original programs, and other shows
                in 4K
              </li>
              <li>2.Channel 105: Live sporting events in 4K</li>
              <li>3.Channel 106: Live sporting events in 4K</li>
              <li>4.Channel 107: Pay-per-view movies in 4K</li>
              <li>5.Channel 108: Pay-per-view movies in 4K</li>
              <li>6.Channel 1104: On-demand content in 4K</li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(12)}>
                <span>{faq === 12 ? "-" : "+"}</span>What channels are we losing
                on DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 12 ? "show" : ""}`}>
                <p>
                  In 2023, DIRECTV is losing the NFL SUNDAY TICKET, an
                  out-of-market football TV package that carried every regional
                  Sunday football game regardless of location. To get your fix
                  of out-of-market games in the 2023–2024 season, you’ll have to
                  subscribe to the rebranded NFL Sunday Ticket via YouTube TV.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"12"}
            title={"What channels are we losing on DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>
              In 2023, DIRECTV is losing the NFL SUNDAY TICKET, an out-of-market
              football TV package that carried every regional Sunday football
              game regardless of location. To get your fix of out-of-market
              games in the 2023–2024 season, you’ll have to subscribe to the
              rebranded NFL Sunday Ticket via YouTube TV.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(13)}>
                <span>{faq === 13 ? "-" : "+"}</span>Where can I see other TV
                provider channel guides?
              </h3>

              <div className={`faq-content ${faq === 13 ? "show" : ""}`}>
                <p>
                  Not satisfied with the DIRECTV channel lineup? That’s fine.
                  Check out other large TV providers’ (traditional and live TV
                  streaming) channel lists below.
                </p>
                <ul>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}>DISH channel guide</Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}>Xfinity channel guide</Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}>Spectrum channel guide</Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}>Sling TV channel guide</Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}>YouTube TV channel guide</Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"13"}
            title={"Where can I see other TV provider channel guides?"}
            cssClass={"faq-content"}
          >
            <p>
              Not satisfied with the DIRECTV channel lineup? That’s fine. Check
              out other large TV providers’ (traditional and live TV streaming)
              channel lists below.
            </p>
            <ul>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>DISH channel guide</Link>
                </span>
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>Xfinity channel guide</Link>
                </span>
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>Spectrum channel guide</Link>
                </span>
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>Sling TV channel guide</Link>
                </span>
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>YouTube TV channel guide</Link>
                </span>
              </li>
            </ul>
          </Accordion>
        </div>
      </div>

      <div className="section endnote direct-tv-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Methodology:</h4>
          <p>
            Our TV-watching experts have spent hundreds of hours researching all
            of the big cable providers to bring up up-to-date information on
            their plans, prices, and channel lineups. For more on our process,
            head over to
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
          </p>
          <h4>Related articles:</h4>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>DIRECTV Review</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>DIRECTV Troubleshooting Guide</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>DISH vs. DIRECTV Satellite TV Comparison</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>DIRECTV Bundles</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>DIRECTV Customer service</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default DirectTvChannelLineUp;
