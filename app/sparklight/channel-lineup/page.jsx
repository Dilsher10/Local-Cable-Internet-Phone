// import React, { useState } from "react";
import "./spark-light-channel-lineup.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { sparklightNavLinks } from "../../assets/data/navLinks/sparklightNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import sparklightgirl from "../../assets/images/sparklight-channel-girl.png";
import star from "../../assets/images/star.png";
import sparklighticon from "../../assets/images/sparklight-icon.png";
import sparklight from "../../assets/images/sparklight.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import { FaCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Sparklight Channel Lineup"
};

const SparkLightChannelLineUp = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: sparklight,
      rating: "(3.0/5)",
      starImg: star,
      desc: "No contract, money-back guarantee",
      buttonText: "view plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: sparklightgirl,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "sparklight",
        icon: sparklighticon,
      },
      {
        subtitle: "TV Packages Price:",
        title: "$42.00–$121.75/mo.",
        icon: sparklighticon,
      },
      {
        subtitle: "Channel count:",
        title: "20–100+",
        icon: sparklighticon,
      },
    ],

    tableData: [
      {
        head: ["Package", "Price* ", "Channel count up to", "Details "],

        body: [
          {
            content: [
              "1.",
              "Standard TV Best for no-contract cable",
              "$121.75/mo. ",
              "100 channels ",
            ],
            linkPath: "# ",
          },
        ],
      },
    ],

    bottomDesc:
      "Data is as of time of post. Offers and availability may vary by location and are subject to change.",
  };

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="spark-light-channel-lineup">
      {/* <SubNav links={sparklightNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">Sparklight Channel Lineup</h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is Cox Communications good?</h4>
          <p>
            We’ve organized a{" "}
            <span className="link">
              <Link href={"#"}> Sparklight TV guide </Link>
            </span>{" "}
            for all three Sparklight TV packages. Learn which channels you can
            expect with your Economy Cable TV, Standard Cable TV, or Digital
            Value Pack plan.
          </p>
        </div>
      </div>

      <CTA
        heading={"Curious what other TV providers are in your area?"}
        desc={"Enter your zip code above to find out."}
      />

      <div className="section tv-channels-lineup">
        <div className="head">
          <h2 className="sect-heading">
            Sparklight <span> TV channels </span>
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
                <th>TV Starter (75+ channels)</th>
                <th>Contour TV (140+ channels)</th>
                <th>Contour TV Ultimate (250+ channels)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>1. </th>
                <th id="a">A&E </th>
                <th>
                  {" "}
                  <FaCheck className="check-icon" />{" "}
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>2. </th>
                <th>ABC</th>
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
                <th>3. </th>
                <th>Afro</th>
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
                <th>
                  {" "}
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
                <th>6. </th>
                <th>MTV Live</th>
                <th>
                  {" "}
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  {" "}
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
              </tr>
              <tr>
                <th>7. </th>
                <th>Universo</th>
                <th>
                  {" "}
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
                <th>
                  {" "}
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
              </tr>
              <tr>
                <th> 9.</th>
                <th>Z Living</th>
                <th>
                  {" "}
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
                <th>
                  {" "}
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
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Sparklight channel lineup </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Does Sparklight have
                Paramount Network?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  No, Sparklight doesn’t offer Paramount Network. It doesn’t
                  have most other Viacom channels, either, so you’ll be missing
                  out on BET, Comedy Central, MTV, and Nickelodeon. However,
                  Sparklight does have Viacom’s SHOWTIME®, which you can add to
                  your Sparklight plan for another $10.99 per month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Does Sparklight have Paramount Network?"}
            cssClass={"faq-content"}
          >
            <p>
              No, Sparklight doesn’t offer Paramount Network. It doesn’t have
              most other Viacom channels, either, so you’ll be missing out on
              BET, Comedy Central, MTV, and Nickelodeon. However, Sparklight
              does have Viacom’s SHOWTIME®, which you can add to your Sparklight
              plan for another $10.99 per month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does Sparklight have MTV?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>MTV is not available with any of the Sparklight packages.</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does Sparklight have MTV?"}
            cssClass={"faq-content"}
          >
            <p>MTV is not available with any of the Sparklight packages.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How many channels does
                Sparklight have?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Sparklight offers up to 20 channels on the Economy plan and up
                  to 100 channels on the Standard plan. You can also supplement
                  your watching with the Digital Value Pack, which has another
                  27 channels. To learn more about these plans, check out our
                  Sparklight TV review.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How many channels does Sparklight have?"}
            cssClass={"faq-content"}
          >
            <p>
              Sparklight offers up to 20 channels on the Economy plan and up to
              100 channels on the Standard plan. You can also supplement your
              watching with the Digital Value Pack, which has another 27
              channels. To learn more about these plans, check out our
              Sparklight TV review.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Sparklight Overview | Sparklight Internet | Sparklight TV |
          Sparklight Voice | Sparklight Bundles | Sparklight Customer service
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default SparkLightChannelLineUp;
