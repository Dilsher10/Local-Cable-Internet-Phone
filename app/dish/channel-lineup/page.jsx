// import React, { useState } from "react";
import "./dish-channel-lineUp.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { dishNavLinks } from "../../assets/data/navLinks/dishNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import dishchannel from "../../assets/images/dishchannel.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import dish from "../../assets/images/dish.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";
import quotations from "../../assets/images/quotations.svg";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa6";

export const metadata = {
  title: "DISH TV Guide And Channel Lineup"
};

const DishChannelLineUp = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: dish,
      rating: "(4.5/5)",
      starImg: star,
      desc: "Editor's choice",
      buttonText: "Compare Plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: dishchannel,

    cardsStrip: [],

    tableData: [
      {
        head: [
          "Top plans",
          "Pricing",
          "Channels Count",
          "DVR",
          "Popular channels",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Best value",
              "$99.99/mo.",
              "240+",
              "500 hrs.",
              "Boomerang, CBS Sports Network, and Cooking Channel",
            ],
            linkPath: "#",
          },

          {
            content: [
              "2.",
              "Best for sports",
              "$94.99/mo.",
              "190+",
              "500 hrs.",
              "Regional and college sports networks including ESPN, Fox Sports, and Big Ten Network",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "Data as of post date. Offers and availability may vary by location and are subject to change.",
  };
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="dish-channel-lineup">
      {/* <SubNav links={dishNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">DISH TV Guide And Channel Lineup</h2>
          <p className="sect-desc">
            Our DISH channel guide has channel numbers, plans, pricing, and
            more.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-dish-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Get your favorite DISH channels</h4>
          <p>
            As our Editor’s Choice for best overall TV provider and our best TV
            provider for families (read our{" "}
            <span className="link">
              <Link href={"#"}>best TV providers review</Link>
            </span>{" "}
            for more information),{" "}
            <span className="link">
              <Link href={"#"}>DISH</Link>
            </span>{" "}
            has a lot to offer, and it can be overwhelming to sort through the
            details. Not to worry, we’ve done all the research for you and
            compiled this DISH TV channel list to break down the details of
            every channel number, plan, and price.
          </p>
        </div>
      </div>

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
          <Link href={"#"}>DISH channel lineup</Link>
          <Link href={"#"}>Add-on packages </Link>
          <Link href={"#"}>Channel packs</Link>
        </div>
      </div>

      <CTA
        heading={"Curious what other TV providers are in your area?"}
        desc={"Enter your zip code below to see providers in your area."}
      />

      <div className="section dish-channel-lineup">
        <div className="head">
          <h2 className="sect-heading">
            DISH <span> channel lineup</span>
          </h2>
          <p className="sect-desc">
            Looking for{" "}
            <span className="link">
              <Link href={"#"}>HBO Max</Link>
            </span>{" "}
            <span className="link">
              <Link href={"#"}>Food Network</Link>
            </span>{" "}
            <span className="link">
              <Link href={"#"}> National Geographic</Link>
            </span>{" "}
            or another specific channel? Click on the links above to find
            exactly what you’re looking for.
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
                <th>Dish channel number</th>
                <th>Flex Pack (50+ channels)</th>
                <th>America’s Top 120 (190 channels)</th>
                <th> America’s Top 120+ (190+ channels)</th>
                <th>America’s Top 200 (240+ channels)</th>
                <th>America’s Top 250 (290+ channels)</th>
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
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="divider">
        <p>Explore DISH TV Plans</p>
      </div>

      <div className="section dish-network-adons">
        <div className="head">
          <h2 className="sect-heading">
            DISH Network <span> Ad-ons and packages </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DISH add-on packages</h4>
          <p className="after-heading">
            If you have specialized interests and don’t want all of the channels
            in one of the more expensive packages, you can try a slimmer plan
            and supplement it with an add-on package for less.{" "}
          </p>
          <ul className="heading-ul">
            <li>
              Multi-Sport Pack* ($13/mo.)
              <ul>
                <li>· beIN Sports</li>
                <li>· beIN Sports en Español</li>
                <li>· Big Ten Network</li>
                <li>· ESPN Buzzer Beater</li>
                <li>· FS2</li>
                <li>· Longhorn Network</li>
                <li>· MLB Network</li>
                <li>· MLB Strike Zone</li>
                <li>· NBA TV</li>
                <li>· NHL Network</li>
                <li>· Outside TV</li>
                <li>· Pac-12 Network</li>
                <li>· SEC Network</li>
                <li>· Over 25 regional sports networks</li>
              </ul>
            </li>
            <li>
              DISH Movie Pack ($10/mo.)
              <ul>
                <li>· Crime & Investigation</li>
                <li>· EPIX</li>
                <li>· EPIX2</li>
                <li>· EPIX Hits</li>
                <li>· FXM</li>
                <li>· Hallmark Movies & Mysteries</li>
                <li>· HDNet Movies</li>
                <li>· IndiePlex</li>
                <li>· MGM</li>
                <li>· MoviePlex</li>
                <li>· PixL</li>
                <li>· RetroPlex</li>
                <li>· Sony Movie Channel</li>
                <li>· STARZ ENCORE Suspense</li>
                <li>· STARZ Kids & Family</li>
              </ul>
            </li>
            <li>
              SHOWTIME® ($10/mo.)
              <ul>
                <li>· SHOWTIME EAST</li>
                <li>· SHOWTIME WEST</li>
                <li>· SHOWTIME 2</li>
                <li>· SHOWTIME SHOWCASE</li>
                <li>· SHOWTIME EXTREME</li>
                <li>· SHOWTIME BEYOND</li>
                <li>· The Movie Channel</li>
                <li>· The Movie Channel Xtra</li>
                <li>· Flix</li>
              </ul>
            </li>
            <li>
              STARZ ($10/mo.)
              <ul>
                <li>· STARZ Encore</li>
                <li>· STARZ East</li>
                <li>· STARZ West</li>
                <li>· STARZ Edge</li>
                <li>· STARZ Cinema</li>
                <li>· STARZ Comedy</li>
                <li>· STARZ In BlackSTARZ Kids & Family</li>
              </ul>
            </li>
            <li>
              STARZ ENCORE Movie Pack ($6/mo.)
              <ul>
                <li>· STARZ ENCORE West</li>
                <li>· STARZ ENCORE Westerns</li>
                <li>· STARZ ENCORE Action</li>
                <li>· STARZ ENCORE Suspense</li>
                <li>· STARZ ENCORE Black</li>
                <li>· STARZ ENCORE Classic</li>
                <li>· STARZ ENCORE Family</li>
                <li>· MoviePlex</li>
              </ul>
            </li>
            <li>
              EPIX ($7/mo.)
              <ul>
                <li>· EPIX</li>
                <li>· EPIX2</li>
                <li>· EPIX Drive-In</li>
                <li>· EPIX Hits</li>
              </ul>
            </li>
            <li>
              HBO Max ($15/mo.)
              <p>
                After being exclusive to DIRECTV for several years, HBO is back
                at DISH—as the streaming service HBO Max.
              </p>
            </li>
            <li>
              Other add-ons
              <ul>
                <li>· Other add-ons</li>
                <li>· TheBlaze ($5/mo.)</li>
                <li>· FOX Soccer Plus ($15/mo.)</li>
              </ul>
            </li>
          </ul>
          <hr />
          <div className="btn">
            <Link href={"#"}>View DISH TV Plans</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>DISH channel packs</h4>
          <p className="after-heading">
            (If you’re looking for more programming en español, DISH also offers
            a full range of Spanish-language TV packages.)
          </p>
          <ul className="heading-ul">
            <li>
              Locals Pack ($12/mo.)
              <ul>
                <li>· ABC affiliates</li>
                <li>· CBS affiliates</li>
                <li>· FOX affiliates</li>
                <li>· NBC affiliates</li>
                <li>· The CW affiliates</li>
                <li>· PBS affiliates</li>
                <li>· ION affiliates</li>
                <li>· MeTV affiliates</li>
                <li>· Estrella affiliates</li>
                <li>· Telemundo affiliates</li>
              </ul>
            </li>
            <li>
              National Action Pack ($12/mo.)
              <ul>
                <li>· AXS TV</li>
                <li>· Crime & Investigation</li>
                <li>· ESPN</li>
                <li>· ESPN2</li>
                <li>· FOX Sports 1</li>
                <li>· Fuse</li>
                <li>· MOTOR TREND</li>
                <li>· TV Games Network</li>
                <li>· TVG2</li>
              </ul>
            </li>
            <li>
              Regional Action Pack ($12/mo.)
              <ul>
                <li>· Big Ten Network</li>
                <li>· ESPN Buzzer Beater</li>
                <li>· FS2</li>
                <li>· Longhorn Network</li>
                <li>· Outside TV</li>
                <li>· Pac-12 Network</li>
                <li>· Regional Sports</li>
                <li>· SEC Network</li>
                <li>· World Fishing Network</li>
              </ul>
            </li>
            <li>
              Kids Pack ($10/mo.)
              <ul>
                <li>· Animal Planet</li>
                <li>· BabyFirstTV</li>
                <li>· Boomerang</li>
                <li>· Disney Channel East</li>
                <li>· Disney Channel West</li>
                <li>· Disney Junior</li>
                <li>· Disney XD</li>
                <li>· Nick Jr.</li>
                <li>· Nicktoons</li>
              </ul>
            </li>
            <li>
              News Pack ($10/mo.)
              <ul>
                <li>· BBC World News</li>
                <li>· Bloomberg Television</li>
                <li>· CNBC</li>
                <li>· Fox Business Network</li>
                <li>· Fox News Channel</li>
                <li>· MSNBC</li>
                <li>· TheBlaze</li>
                <li>· Weather Channel</li>
              </ul>
            </li>
            <li>
              Heartland Pack ($6/mo.)
              <ul>
                <li>·BabyFirstTV</li>
                <li>·Discovery Family</li>
                <li>·Game Show Network</li>
                <li>·Hallmark Channel</li>
                <li>·Hallmark Drama</li>
                <li>·Hallmark Mysteries & Movies</li>
                <li>·OWN</li>
                <li>·PixL</li>
                <li>·RFD-TV</li>
                <li>·Ride TV</li>
                <li>·The Cowboy Channel</li>
                <li>·Uplifting Entertainment</li>
              </ul>
            </li>
            <li>
              Variety Pack ($6/mo.)
              <ul>
                <li>· BET</li>
                <li>· Bravo</li>
                <li>· Crime & Investigation</li>
                <li>· Freeform</li>
                <li>· Investigation Discovery (ID)</li>
                <li>· Lifetime Movie Network</li>
              </ul>
            </li>
            <li>
              Outdoor Pack ($4/mo.)
              <ul>
                <li>· Outdoor Channel</li>
                <li>· Outside TV</li>
                <li>· Sportsman Channel</li>
                <li>· World Fishing Network</li>
              </ul>
            </li>
            <li>
              Stars & Stripes Pack ($10/mo.)
              <ul>
                <li>· American Heroes</li>
                <li>· Destination America</li>
                <li>· Crime & Investigation</li>
                <li>· The Cowboy Channel</li>
                <li>· STARZ ENCORE Westerns</li>
                <li>· GetTV</li>
                <li>· Justice Network</li>
                <li>· Reelz</li>
                <li>· Smithsonian Channel</li>
              </ul>
            </li>
            <li>
              Latino Bonus Pack ($10/mo.)
              <ul>
                <li>· beIN Sports en Español</li>
                <li>· Caracol TV</li>
                <li>· CBeebies</li>
                <li>· CNN en Español</li>
                <li>· Disney XD</li>
                <li>· ESPN Deportes</li>
                <li>· Telemundo</li>
                <li>· UniMás</li>
                <li>· Univision</li>
                <li>· Univision Deportes</li>
              </ul>
            </li>
          </ul>
          <p className="after-heading">
            All add-on and channel packs require Flex Pack or higher.
          </p>
          <hr />
          <div className="btn">
            <Link href={"#"}>View DISH TV Plans</Link>
          </div>
        </div>
      </div>

      <div className="section dish-faq">
        <div className="head">
          <h2 className="sect-heading">
            DISH <span> channel lineups </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How much is the basic DISH
                package?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Flex Pack, DISH's channel-skinny base package, starts at
                  $57.99 per month. It features 50 channels, a mix of popular
                  networks and fillers that DISH will not-so-gently suggest you
                  beef-up with an add-on package-because what's another $10 on
                  top of 58 bucks? Flex isn't fully-loaded, but it's one of the
                  cheapest deals in satellite TV.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" How much is the basic DISH package?"}
            cssClass={"faq-content"}
          >
            <p>
              Flex Pack, DISH's channel-skinny base package, starts at $57.99
              per month. It features 50 channels, a mix of popular networks and
              fillers that DISH will not-so-gently suggest you beef-up with an
              add-on package-because what's another $10 on top of 58 bucks? Flex
              isn't fully-loaded, but it's one of the cheapest deals in
              satellite TV.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How much does it cost to
                add HBO® to a DISH package?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  You can add{" "}
                  <span className="link">
                    <Link href={"#"}>HBO Max</Link>
                  </span>{" "}
                  to your DISH channel package for $15 per month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" How much does it cost to add HBO® to a DISH package?"}
            cssClass={"faq-content"}
          >
            <p>
              You can add{" "}
              <span className="link">
                <Link href={"#"}>HBO Max</Link>
              </span>{" "}
              to your DISH channel package for $15 per month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What sports channels are
                available on DISH?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  DIRECTV is generally thought of as the more sports-centric
                  satellite TV brand, but DISH also offers a fair amount of
                  ballin' action. A few of the sports channels DISH carries
                  include the following:
                </p>
                <ul>
                  <li>· ESPN</li>
                  <li>· ESPN2</li>
                  <li>· NBA TV</li>
                  <li>· MLB Network</li>
                  <li>· NHL Network</li>
                  <li>· FS1</li>
                  <li>· FS2</li>
                  <li>· FOX Soccer Plus</li>
                  <li>· CBS Sports Network</li>
                  <li>· beIN Sports</li>
                  <li>· Pac-12 Network</li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" What sports channels are available on DISH?"}
            cssClass={"faq-content"}
          >
            <p>
              DIRECTV is generally thought of as the more sports-centric
              satellite TV brand, but DISH also offers a fair amount of ballin'
              action. A few of the sports channels DISH carries include the
              following:
            </p>
            <ul>
              <li>· ESPN</li>
              <li>· ESPN2</li>
              <li>· NBA TV</li>
              <li>· MLB Network</li>
              <li>· NHL Network</li>
              <li>· FS1</li>
              <li>· FS2</li>
              <li>· FOX Soccer Plus</li>
              <li>· CBS Sports Network</li>
              <li>· beIN Sports</li>
              <li>· Pac-12 Network</li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does DISH have NFL RedZone?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  No. In 2020, the NFL pulled NFL RedZone-and the NFL
                  Network-from DISH or its streaming service Sling TV. Cox,
                  DIRECTV, fuboTV, Mediacom, Optimum, Spectrum, Verizon Fios,
                  and Xfinity still carry both channels.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Does DISH have NFL RedZone?"}
            cssClass={"faq-content"}
          >
            <p>
              No. In 2020, the NFL pulled NFL RedZone-and the NFL Network-from
              DISH or its streaming service Sling TV. Cox, DIRECTV, fuboTV,
              Mediacom, Optimum, Spectrum, Verizon Fios, and Xfinity still carry
              both channels.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>What movie channels are
                available on DISH?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  DISH carries plenty of channels for film buffs-including HBO
                  Max, which is back at DISH after a years-long absence. DISH's
                  movie channels lineup and add-on packages include these
                  favorites:
                </p>
                <ul>
                  <li>· HBO Max</li>
                  <li>· SHOWTIME (6 channels)</li>
                  <li>· STARZ (8 channels)</li>
                  <li>· STARZ ENCORE (7 channels)</li>
                  <li>· The Movie Channel (2 channels)</li>
                  <li>· EPIX (4 channels)</li>
                  <li>· FXM</li>
                  <li>· IFC</li>
                  <li>· SundanceTV</li>
                  <li>· HDNet</li>
                  <li>· MoviePlex</li>
                  <li>· IndiePlex</li>
                  <li>· RetroPlex</li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"What movie channels are available on DISH?"}
            cssClass={"faq-content"}
          >
            <p>
              DISH carries plenty of channels for film buffs-including HBO Max,
              which is back at DISH after a years-long absence. DISH's movie
              channels lineup and add-on packages include these favorites:
            </p>
            <ul>
              <li>· HBO Max</li>
              <li>· SHOWTIME (6 channels)</li>
              <li>· STARZ (8 channels)</li>
              <li>· STARZ ENCORE (7 channels)</li>
              <li>· The Movie Channel (2 channels)</li>
              <li>· EPIX (4 channels)</li>
              <li>· FXM</li>
              <li>· IFC</li>
              <li>· SundanceTV</li>
              <li>· HDNet</li>
              <li>· MoviePlex</li>
              <li>· IndiePlex</li>
              <li>· RetroPlex</li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>What kids' channels are
                available on DISH?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  Don't forget the little ones; they might look up from their
                  phones and tablets occasionally to check out the big TV in the
                  room. DISH's kiddie programming includes these channels:
                </p>
                <ul>
                  <li>· Disney Channel</li>
                  <li>· Disney Jr.</li>
                  <li>· Disney XD</li>
                  <li>· Boomerang</li>
                  <li>· Nickelodeon</li>
                  <li>· Nick Jr.</li>
                  <li>· Nicktoons</li>
                  <li>· Cartoon Network</li>
                  <li>· Animal Planet</li>
                  <li>· Discovery Family</li>
                  <li>· PBS</li>
                  <li>· BabyFirstTV</li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"What kids' channels are available on DISH?"}
            cssClass={"faq-content"}
          >
            <p>
              Don't forget the little ones; they might look up from their phones
              and tablets occasionally to check out the big TV in the room.
              DISH's kiddie programming includes these channels:
            </p>
            <ul>
              <li>· Disney Channel</li>
              <li>· Disney Jr.</li>
              <li>· Disney XD</li>
              <li>· Boomerang</li>
              <li>· Nickelodeon</li>
              <li>· Nick Jr.</li>
              <li>· Nicktoons</li>
              <li>· Cartoon Network</li>
              <li>· Animal Planet</li>
              <li>· Discovery Family</li>
              <li>· PBS</li>
              <li>· BabyFirstTV</li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(7)}>
                <span>{faq === 7 ? "-" : "+"}</span>Is DISH internet available
                in my area?
              </h3>

              <div className={`faq-content ${faq === 7 ? "show" : ""}`}>
                <p>
                  Don't let the 120 in the package's name fool you. America's
                  Top 120 offers 190 channels that feature a solid mix of
                  channels to keep a diverse audience entertained. It really
                  shines when it comes to sports. DISH's America's Top 120
                  package includes these sports-oriented channels:
                </p>
                <ul>
                  <li>· ESPN</li>
                  <li>· ESPN2</li>
                  <li>· ESPNEWS ESPNU</li>
                  <li>· Fox Sports 1</li>
                  <li>· Fox Sports 2</li>
                  <li>· MLB Extra Innings</li>
                  <li>· NBC Sports Network</li>
                  <li>· NHL Center Ice</li>
                  <li>· Ride TV</li>
                  <li>· TV Games Network</li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={"Is DISH internet available in my area?"}
            cssClass={"faq-content"}
          >
            <p>
              Don't let the 120 in the package's name fool you. America's Top
              120 offers 190 channels that feature a solid mix of channels to
              keep a diverse audience entertained. It really shines when it
              comes to sports. DISH's America's Top 120 package includes these
              sports-oriented channels:
            </p>
            <ul>
              <li>· ESPN</li>
              <li>· ESPN2</li>
              <li>· ESPNEWS ESPNU</li>
              <li>· Fox Sports 1</li>
              <li>· Fox Sports 2</li>
              <li>· MLB Extra Innings</li>
              <li>· NBC Sports Network</li>
              <li>· NHL Center Ice</li>
              <li>· Ride TV</li>
              <li>· TV Games Network</li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(8)}>
                <span>{faq === 8 ? "-" : "+"}</span>What is the Best DISH
                Network package?
              </h3>

              <div className={`faq-content ${faq === 8 ? "show" : ""}`}>
                <p>
                  America's Top 200 is DISH's best package. This robust plan
                  offers entertainment for a household with varied interests and
                  TV-watching needs. It's a dream come true for true TV
                  fanatics.In addition to popular networks like A&E and Bravo,
                  it has numerous sports channels, including NHL Network, NBA
                  TV, and MLB Network. Music fans will appreciate more than 70
                  SiriusXM music channels.Local channels are included and the
                  two-year price lock gives you ample time to take advantage of
                  the package's benefits.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"8"}
            title={"What is the Best DISH Network package?"}
            cssClass={"faq-content"}
          >
            <p>
              America's Top 200 is DISH's best package. This robust plan offers
              entertainment for a household with varied interests and
              TV-watching needs. It's a dream come true for true TV fanatics.In
              addition to popular networks like A&E and Bravo, it has numerous
              sports channels, including NHL Network, NBA TV, and MLB Network.
              Music fans will appreciate more than 70 SiriusXM music
              channels.Local channels are included and the two-year price lock
              gives you ample time to take advantage of the package's benefits.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: DISH Internet | DISH Channel Lineup | DISH Bundles | DISH
          Customer Service
        </p>
      </div>

      <div className="section endnote dish-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Methodology:</h4>
          <p>
            The TV experts at CableTV.com log dozens of hours researching and
            testing TV providers like DISH, comparing plans, pricing, channel
            lineups, features, reliability, promotions, testing the checkout
            process, and more. We then offer our analysis to readers to help
            inform their search for TV service. To learn more about our
            methodology, read our
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
            page.
          </p>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default DishChannelLineUp;
