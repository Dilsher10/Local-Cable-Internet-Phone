// import React, { useState } from "react";
import "./cox-channel-line-up.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { coxNavLinks } from "../../assets/data/navLinks/coxNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import channellineupcox from "../../assets/images/channellineupcox.png";
import star from "../../assets/images/star.png";
import coxmark from "../../assets/images/coxmark.png";
import coxlogo from "../../assets/images/coxlogo.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";
import { FaCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

export const metadata = {
  title: "Cox Channel Lineup: Plans, Channels, And More"
};

const CoxChannelLineUp = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: coxlogo,
      rating: "(3.95/5)",
      starImg: star,
      desc: "Affordable internet plans",
      buttonText: "Sign up for cox",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: channellineupcox,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "Cox",
        icon: coxmark,
      },
      {
        subtitle: "Price:",
        title: "$25.00–$190.99/mo.",
        icon: coxmark,
      },
      {
        subtitle: "Channel count:",
        title: "75–250+",
        icon: coxmark,
      },
    ],

    tableData: [
      {
        head: [
          "Recommended packages ",
          "Price* ",
          "Channel count ",
          "Popular channels ",
          "Details ",
        ],

        body: [
          {
            content: [
              "1.",
              "Contour TV ",
              "$99.00/mo. ",
              "140+ ",
              "ESPN, Hallmark, and more ",
            ],
            linkPath: "# ",
          },
          {
            content: [
              "2.",
              "Contour TV Ultimate",
              "$139.00/mo.",
              "250+",
              "HBO, SHOWTIME, and more",
            ],
            linkPath: "# ",
          },
        ],
      },
    ],

    bottomDesc:
      "*For 12 mos. Data effective as of post date. Offers and availability may vary by location and are subject to change.",
  };

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="cox-channel-line-up">
      {/* <SubNav links={coxNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Cox Channel Lineup: Plans, Channels, And More
          </h2>
          <p className="sect-desc">
            Find out what Cox TV channels come with Starter TV, Contour TV, and
            Contour TV Ultimate.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-cox-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is Cox Communications good?</h4>
          <p>
            Looking for the Cox channel lineup? Well, you’ve come to the right
            place. Cox TV channels come in four packages:
          </p>
          <ul>
            <li>
              <span className="link">
                <Link href={"#"}> · TV Starter</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"#"}> · Contour TV</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"#"}> · Contour TV Ultimate</Link>
              </span>
            </li>
          </ul>
          <p>
            Cox Contour TV and internet bundles start at $102.99 per month,
            which is decent considering you get 140+ live channels in addition
            to high-speed internet. Use our alphabetical guide below to easily
            find the channel you are looking for.
          </p>
          <br />
          <h4>Pro tip:</h4>
          <p>
            Looking for a specific channel? If you are using a laptop or
            computer press Ctrl + F (or Command + F on Macs) and type in the
            channel name. If Cox offers that channel you will be shown which
            package(s) it’s part of.
          </p>
        </div>
      </div>

      <CTA
        heading={"Interested in Cox TV and internet plans?"}
        desc={
          "Enter your zip code below to see if Cox is available in your neighborhood."
        }
      />

      <div className="section cox-tv-channels-lineup">
        <div className="head">
          <h2 className="sect-heading">
            Cox <span> TV channels </span> by package
          </h2>
          <p className="sect-desc">
            A note about channel numbers: Cox TV listings—and those of other
            cable TV providers—vary depending on your area. So if you want to
            know the channel number for a particular network, the best way to
            find it is to visit the Cox channel lineup page. If you can’t find
            it there, contact Cox customer support and ask a rep.
            <br />
            For more details on Cox TV plans, check out our comprehensive
            review.
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
                <th>Optional</th>
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
                <th>Optional</th>
                <th>Optional</th>
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
                <th>Optional</th>
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

      <div className="section cox-tv-channels-packs">
        <div className="head">
          <h2 className="sect-heading">
            Cox <span> channel packs </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="row">
          <div className="columns">
            <h3>Variety Pak</h3>
            <br />
            <p>
              <b>Price: </b> $12/mo.
              <br />
              <span>(Cox Contour subscription or higher required.)</span>
            </p>
            <br />
            <h6>Channels included:</h6>
            <br />
            <ul>
              <li> · BBC America</li>
              <li> · BET Her</li>
              <li> · Boomerang</li>
              <li> · CMT</li>
              <li> · Cooking Channel</li>
              <li> · Crime & Investigation</li>
              <li> · Disney Junior</li>
              <li> · Lifetime</li>
              <li> · LOGO</li>
              <li> · MTV2</li>
              <li> · Nicktoons</li>
              <li> · STARZ ENCORE Family</li>
            </ul>
          </div>
          <div className="columns">
            <h3>Movie Pak</h3>
            <br />
            <p>
              <b>Price: </b> $12/mo.
              <br />
              <span>(Cox Contour subscription or higher required.)</span>
            </p>
            <br />
            <h6>Channels included:</h6>
            <br />
            <ul>
              <li> · FX Movie Channel</li>
              <li> · Flix</li>
              <li> · IndiePlex</li>
              <li> · MGM+</li>
              <li> · RetroPlex</li>
              <li> · STARZ ENCORE</li>
              <li> · STARZ ENCORE Action</li>
              <li> · STARZ ENCORE Black</li>
              <li> · STARZ ENCORE Classic</li>
              <li> · STARZ ENCORE Suspense</li>
              <li> · STARZ ENCORE Westerns</li>
              <li> · Sundance TV</li>
            </ul>
          </div>
          <div className="columns">
            <h3>Sports & Information Pak</h3>
            <br />
            <p>
              <b>Price: </b> $10/mo.
              <br />
              <span>(Cox Contour subscription or higher required.)</span>
            </p>
            <br />
            <h6>Channels included:</h6>
            <br />
            <ul>
              <li> · ACC Network</li>
              <li> · CBS Sports Network</li>
              <li> · ESPNews</li>
              <li> · ESPNU</li>
              <li> · FanDuel Racing</li>
              <li> · NBA TV</li>
              <li> · NFL Network</li>
              <li> · NHL Network</li>
              <li> · Stadium College Sports Atlantic</li>
              <li> · Stadium College Sports Central</li>
              <li> · Stadium College Sports Pacific</li>
              <li> · Tennis Channel</li>
              <li> · Viceland</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="columns">
            <h3>Variety Pak</h3>
            <br />
            <p>
              <b>Price: </b> $10/mo.
              <br />
              <span>(Cox Contour subscription or higher required.)</span>
            </p>
            <br />
            <h6>Channels included:</h6>
            <br />
            <ul>
              <li> · BTN</li>
              <li> · Longhorn Network</li>
              <li> · MLB Strike Zone</li>
              <li> · NBA TV</li>
              <li> · NFL Network</li>
              <li> · NFL RedZone</li>
              <li> · NBC Sports Network</li>
              <li> · Outdoor Channel</li>
              <li> · PAC 12 Network</li>
              <li> · Pursuit Network</li>
              <li> · TUDN</li>
              <li> · World Fishing Network</li>
              <li> · Zona Futbol</li>
            </ul>
          </div>
          <div className="columns">
            <h3>Sports & Information Pak</h3>
            <br />
            <p>
              <b>Price: </b> $10/mo.
              <br />
              <span>(Cox Contour subscription or higher required.)</span>
            </p>
            <br />
            <h6>Channels included:</h6>
            <br />
            <ul>
              <li> · Boomerang en Español</li>
              <li> · Cine Sony</li>
              <li> · CNN en Español</li>
              <li> · Discovery en Español</li>
              <li> · Discovery Familia</li>
              <li> · Disney XD en Español</li>
              <li> · FOX Deportes</li>
              <li> · Galavisión</li>
              <li> · MTV Tr3s</li>
              <li> · NBC Universo</li>
              <li> · UniMás</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section cox-add-on-packages-and-channels">
        <div className="head">
          <h2 className="sect-heading">
            Cox <span> add-on packages and channels </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="row">
          <div className="columns">
            <h3>SHOWTIME</h3>
            <br />
            <p>
              <b>Price: </b> $11/mo.
              <br />
              <span>(Cox Contour subscription or higher required.)</span>
            </p>
            <br />
            <h6>Channels included:</h6>
            <br />
            <ul>
              <li> · SHOWTIME</li>
              <li> · SHOWTIME 2</li>
              <li> · SHOWCASE</li>
              <li> · SHOWTIME EXTREME</li>
              <li> · SHOWTIME BEYOND</li>
              <li> · SHOWTIME NEXT</li>
              <li> · SHOWTIME FAMILY ZONE</li>
              <li> · SHOWTIME WOMEN</li>
              <li> · SHOWTIME HD</li>
              <li> · SHOWCASE HD</li>
              <li> · SHOWTIME EXTREME HD</li>
            </ul>
          </div>
          <div className="columns">
            <h3>STARZ</h3>
            <br />
            <p>
              <b>Price: </b> $9/mo.
              <br />
              <span>(Cox Contour subscription or higher required.)</span>
            </p>
            <br />
            <h6>Channels included:</h6>
            <br />
            <ul>
              <li> · STARZ</li>
              <li> · STARZ HD</li>
              <li> · STARZ Edge</li>
              <li> · STARZ Edge HD</li>
              <li> · STARZ Cinema</li>
              <li> · STARZ Comedy</li>
              <li> · STARZ Comedy HD</li>
              <li> · STARZ In Black</li>
              <li> · STARZ In Black HD</li>
              <li> · STARZ Kids & Family</li>
              <li> · STARZ Kids & Family HD</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="columns">
            <h3>MGM+</h3>
            <br />
            <p>
              <b>Price: </b> $6/mo. for 12 months
              <br />
              <span> </span>
            </p>
          </div>
          <div className="columns">
            <h3>HBO</h3>
            <br />
            <p>
              <b>Price: </b> $15/mo.
              <br />
              <span>(Cox Contour subscription or higher required.)</span>
            </p>
            <br />
            <h6>Channels included:</h6>
            <br />
            <ul>
              <li> · HBO</li>
              <li> · HBO Max App</li>
              <li> · HBO2</li>
              <li> · HBO Comedy</li>
              <li> · HBO Family</li>
              <li> · HBO Signature</li>
              <li> · HBO Zone</li>
              <li> · HBO Latino</li>
            </ul>
          </div>
          <div className="columns">
            <h3>CINEMAX</h3>
            <br />
            <p>
              <b>Price: </b> $12/mo.
              <br />
              <span>(Cox Contour subscription or higher required.)</span>
            </p>
            <br />
            <h6>Channels included:</h6>
            <br />
            <ul>
              <li> · CINEMAX</li>
              <li> · 5StarMax</li>
              <li> · ActionMax</li>
              <li> · ThrillerMax</li>
              <li> · MaxHD</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section cox-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Cox channel lineup </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What channels are included
                in Cox Contour TV?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Cox’s Contour TV package includes dozens of popular cable
                  channels, including AMC, Cartoon Network/Adult Swim, TNT, TBS,
                  ESPN, FOX Sports, Syfy, USA, Paramount Network, Pop,
                  Investigation Discovery, Oxygen, CNN, FOX News, and MSNBC.
                  Local channels, too, if you’re into that.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"What channels are included in Cox Contour TV?"}
            cssClass={"faq-content"}
          >
            <p>
              Cox’s Contour TV package includes dozens of popular cable
              channels, including AMC, Cartoon Network/Adult Swim, TNT, TBS,
              ESPN, FOX Sports, Syfy, USA, Paramount Network, Pop, Investigation
              Discovery, Oxygen, CNN, FOX News, and MSNBC. Local channels, too,
              if you’re into that.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is Netflix free with Cox
                Contour TV?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  The Contour DVR/receiver comes with a pre-installed Netflix
                  app, but it requires your own subscription login—it’s
                  convenient but not free. Amazon Prime Video, Pandora, YouTube,
                  and Tubi apps are also included with the Contour DVR/receiver.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"Is Netflix free with Cox Contour TV?"}
            cssClass={"faq-content"}
          >
            <p>
              The Contour DVR/receiver comes with a pre-installed Netflix app,
              but it requires your own subscription login—it’s convenient but
              not free. Amazon Prime Video, Pandora, YouTube, and Tubi apps are
              also included with the Contour DVR/receiver.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How much does Contour TV
                from Cox cost?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Cox’s standalone Contour TV package with 140+ channels costs
                  $99.99 per month. DVR/receiver rental ranges from $10.00 to
                  $19.99 per month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"How much does Contour TV from Cox cost?"}
            cssClass={"faq-content"}
          >
            <p>
              Cox’s standalone Contour TV package with 140+ channels costs
              $99.99 per month. DVR/receiver rental ranges from $10.00 to $19.99
              per month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What channel is ESPN on
                Cox?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  The onscreen Cox TV guide (not to mention those of other cable
                  TV providers) will show different channel numbers for ESPN in
                  different areas. But you can try checking the Cox channel
                  lineup page for more information.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={"What channel is ESPN on Cox?"}
            cssClass={"faq-content"}
          >
            <p>
              The onscreen Cox TV guide (not to mention those of other cable TV
              providers) will show different channel numbers for ESPN in
              different areas. But you can try checking the Cox channel lineup
              page for more information.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>What channel is ESPN2 on
                Cox?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  What channel ESPN2 is on Cox depends on where you live. Check
                  the Cox channel lineup page for more information.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"What channel is ESPN2 on Cox?"}
            cssClass={"faq-content"}
          >
            <p>
              What channel ESPN2 is on Cox depends on where you live. Check the
              Cox channel lineup page for more information.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>What channel is FOX on Cox?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  FOX will have different channel numbers in different areas.
                  Check the Cox channel lineup page for more information.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"What channel is FOX on Cox?"}
            cssClass={"faq-content"}
          >
            <p>
              FOX will have different channel numbers in different areas. Check
              the Cox channel lineup page for more information.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(7)}>
                <span>{faq === 7 ? "-" : "+"}</span>What channel is Freeform on
                Cox?
              </h3>

              <div className={`faq-content ${faq === 7 ? "show" : ""}`}>
                <p>
                  Freeform’s channel number on Cox is determined by where you
                  live. Check the Cox channel lineup page for more information.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={"What channel is Freeform on Cox?"}
            cssClass={"faq-content"}
          >
            <p>
              Freeform’s channel number on Cox is determined by where you live.
              Check the Cox channel lineup page for more information.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(8)}>
                <span>{faq === 8 ? "-" : "+"}</span>What channel is TNT on Cox?
              </h3>

              <div className={`faq-content ${faq === 8 ? "show" : ""}`}>
                <p>
                  We’re starting to sound like a broken record, but TNT’s
                  channel number on Cox also depends on your location. Check the
                  Cox channel lineup page for more information.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"8"}
            title={"What channel is TNT on Cox?"}
            cssClass={"faq-content"}
          >
            <p>
              We’re starting to sound like a broken record, but TNT’s channel
              number on Cox also depends on your location. Check the Cox channel
              lineup page for more information.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>See also: Cox Overview | Cox TV | Cox Internet | Cox Bundles</p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default CoxChannelLineUp;
