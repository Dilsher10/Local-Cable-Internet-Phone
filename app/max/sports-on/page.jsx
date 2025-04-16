// import React, { useState } from "react";
import "./max-sports-on.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { maxNavLinks } from "../../assets/data/navLinks/maxNavLinks";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import max from "../../assets/images/max-logo.png";
import maxicon from "../../assets/images/max-icon.png";
import maxbro from "../../assets/images/max-bro.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
import baseball from "../../assets/images/ball-of-base.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "B/R Sports On Max: MLB, NBA"
};

const MaxSportsOn = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: max,
      rating: "(3.5/5)",
      starImg: star,
      desc: "Live sports from TBS, TNT, and truTV",
      buttonText: "Read max review",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: maxbro,

    cardsStrip: [
      {
        subtitle: "Add-on price:",
        title: "$9.99/mo. (starting March 2024)",
        icon: maxicon,
      },
      {
        subtitle: "Price:",
        title: "$9.99–$19.99/mo. or $99.99–$199.99/yr. ",
        icon: maxicon,
      },
      {
        subtitle: "Live sports:",
        title: "MLB, NBA, NHL, March Madness, U.S. Soccer, and more",
        icon: maxicon,
      },
    ],

    tableData: [
      {
        head: ["Plan", "price", "Channels", "Download Speed", "Details"],

        body: [
          {
            content: ["1.", "Ultimate Ad-Free", "$19.99/mo.", "4", "4K"],
            linkPath: "#",
          },
          {
            content: ["2.", "Ad-Free", "$15.99/mo.", "2", "1080p"],
            linkPath: "#",
          },
          {
            content: ["3.", "With Ads ", "$9.99/mo.", "2 ", "1080p"],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc: "",
  };
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  let maxPlanData = [
    {
      head: [
        "Plan",
        "Price",
        "B/R Sports Add-On Price",
        "Max Plan + Add-On Price",
        "Details",
      ],
      body: [
        {
          content: [
            "1.",
            "Ultimate Ad-Free",
            "$19.99/mo.",
            "$9.99/mo.",
            "$19.98/mo.",
          ],
          linkPath: "# ",
        },
        {
          content: ["2.", "Ad-Free", "$15.99/mo.", "$9.99/mo.", "$25.98/mo."],
          linkPath: "# ",
        },
        {
          content: ["3.", "With Ads", "$9.99/mo.", "$9.99/mo.", "$29.98/mo."],
          linkPath: "# ",
        },
      ],
    },
  ];

  return (
    <div className="max-sports-on">
      {/* <SubNav links={maxNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            B/R Sports On Max: MLB, NBA, And More
          </h2>
          <p className="sect-desc">
            Score a front-row seat to your favorite teams with Max’s
            game-changing B/R Sports Add-On. Here’s everything you need to know!
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />

          <h4>What is the B/R Sports Add-On?</h4>
          <p>
            The Bleacher Report (B/R) Sports Add-On is a premium sports package
            for subscribers of Max (formerly HBO Max). It requires a Max base
            plan and costs an extra $9.99 a month. Excitingly, all Max
            subscribers get free access to the add-on through February 29, 2024.
            <br />
            Content-wise, the B/R Sports Add-On unlocks a wide range of live
            sports—including MLB, NHL, NBA, March Madness, and U.S. Soccer
            games. Its coverage primarily consists of select events that air on
            TBS, TNT, and truTV.
          </p>
        </div>
      </div>

      <CTA
        heading={"Game day starts here!"}
        desc={
          "Enter your zip code below to find the best internet provider for streaming live sports."
        }
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
          <Link href={"#"}>Plans and prices </Link>
          <Link href={"#"}>Live sports on Max </Link>
          <Link href={"#"}>B/R Sports Add-On alternatives </Link>
        </div>
      </div>

      <div className="section cost">
        <div className="head">
          <h2 className="sect-heading">
            How much is the <span> B/R Sports Add-On? </span>
          </h2>
          <p className="sect-desc">
            The B/R Sports Add-On costs $9.99 a month. However, the good news is
            that Max subscribers get it free until March 2024. To access the
            add-on, you’ll need a base Max subscription—available in different
            tiers. Max plans range from $9.99 to $19.99 a month. When factoring
            in the cost of the Max base plan, the B/R Sports Add-On’s total
            monthly price spans from $19.98 to $29.98 a month.
            <br />
            It’s worth noting that even at the higher end of its price range,
            the B/R Sports Add-On offers an affordable way to access live sports
            from TBS, TNT, and truTV. The next cheapest way to get those
            channels is through Sling TV—starting at $40.00 a month.
          </p>
        </div>
        <PackageTable item={maxPlanData} />
        <p className="below-table">
          Data effective as of post date. Compatible device and internet
          connection required. Offers and availability may vary by location and
          are subject to change.
        </p>
        <div className="package-table-container channels">
          <Image src={baseball} className="mark" alt="quotations" />
          <h4>Live sports on Max</h4>
          <p className="after-heading">
            The B/R Sports Add-On gives Max subscribers an exhilarating lineup
            of sports—including 300+ live games per year. There’s national MLB,
            NBA, and NHL coverage and select games from the men’s March Madness
            tournament. Soccer fans can also watch USMNT and USWNT friendlies
            and U.S. Soccer competitions like the SheBelieves Cup.
            <br />
            Beyond games, the add-on offers exclusive events like The Match and
            studio shows like Inside the NBA. Below is a partial list of B/R
            Sports Add-On programs.
          </p>
          <ul className="channel-list">
            <li>24 Hours of Le Mans</li>
            <li>Inside the NBA</li>
            <li>NBA on TNT</li>
            <li>NBA In-Season Tournament</li>
            <li>NBA All-Star Saturday Night</li>
            <li>NBA All-Star Game</li>
            <li>NBA Playoffs</li>
            <li>MLB on TBS</li>
            <li>MLB Playoffs</li>
            <li>NHL on TNT</li>
            <li>NHL Heritage Classic</li>
            <li>NHL Winter Classic</li>
            <li>NHL Playoffs</li>
            <li>NCAA Men’s Basketball Tournament</li>
            <li>The Match</li>
            <li>U.S. Soccer</li>
            <li>USMNT and USWNT friendlies</li>
            <li>SheBelieves Cup</li>
          </ul>
        </div>
      </div>

      <div className="section add-ons">
        <div className="head">
          <h2 className="sect-heading">
            Other ways to watch <span> TBS, TNT, and truTV </span>
          </h2>
          <p className="sect-desc">
            Several options exist if you want to access TBS, TNT, and truTV
            without the B/R Sports Add-On. Most cable, satellite, and live TV
            streaming services offer the three channels. If you go that route,
            you’ll get 24/7 coverage from each network—not just sports
            programming.
            <br />
            The most cost-effective way to enjoy TBS, TNT, and truTV is with
            Sling TV’s Sling Blue plan. It costs $40.00 a month and has over 35
            other channels, so you can enjoy a popular mix of sports and
            entertainment.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Pro tip:</h4>
          <p className="after-heading">
            Even without the add-on, Max subscribers can still enjoy access to
            premium HBO Sports content—including fan favorites like Hard Knocks.
          </p>
        </div>
      </div>

      <CTA
        heading={"Get the best sports coverage in town"}
        desc={
          "Enter your zip code to see your area’s top TV and internet providers."
        }
      />

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is the B/R Sports Add-On worth it?</span>
          </h2>
          <p className="sect-desc">
            The B/R Sports Add-On provides exceptional value to sports fans who
            lack access to TBS, TNT, and truTV. However, it’s important to note
            that non-Max subscribers will need a Max base plan to enjoy the
            add-on. So, while the add-on costs $9.99 a month (starting March
            2024), you’ll actually pay at least $19.98 a month when you combine
            it with a Max base plan.
            <br />
            But don’t let the combined cost deter you. The B/R Sports Add-On
            offers exclusive live sports content that makes the investment
            worthwhile—especially compared to other streaming options. In fact,
            it remains competitively priced, considering that the next most
            affordable way to access TBS, TNT, and truTV is through Sling TV.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> get max</Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> B/R Sports on Max </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What sports does Max have?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Max features live MLB, NBA, and NHL games through its B/R
                  Sports Add-On. The add-on also includes most NCAA Men’s
                  Basketball Tournament games and select U.S. Soccer matches
                  featuring the USMNT and USWNT. Outside the B/R Sports Add-On,
                  Max subscribers can watch Hard Knocks and other HBO Sports
                  content.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What sports does Max have?"}
            cssClass={"faq-content"}
          >
            <p>
              Max features live MLB, NBA, and NHL games through its B/R Sports
              Add-On. The add-on also includes most NCAA Men’s Basketball
              Tournament games and select U.S. Soccer matches featuring the
              USMNT and USWNT. Outside the B/R Sports Add-On, Max subscribers
              can watch Hard Knocks and other HBO Sports content.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is Max streaming NBA games?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Yes, Max streams NBA games. Most matchups that air on TNT and
                  TBS stream on Max—including NBA In-Season Tournament coverage,
                  the NBA All-Star Game, and select NBA playoff games.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Is Max streaming NBA games?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, Max streams NBA games. Most matchups that air on TNT and TBS
              stream on Max—including NBA In-Season Tournament coverage, the NBA
              All-Star Game, and select NBA playoff games.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Are live sports free on
                Max?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Yes, live sports are free on Max during the B/R Sports Add-On
                  promotional period. After February 29, 2024, you must pay
                  $9.99 a month for the add-on to watch live sports on Max.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Are live sports free on Max?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, live sports are free on Max during the B/R Sports Add-On
              promotional period. After February 29, 2024, you must pay $9.99 a
              month for the add-on to watch live sports on Max.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Can you get the B/R Sports
                Add-On without Max?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  No, a Max base plan is required when signing up for the B/R
                  Sports Add-On. Pricing and availability may vary if you
                  receive Max through a TV provider. However, most providers
                  carry TBS, TNT, and truTV for watching much of the same Warner
                  Bros. Discovery Sports content.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Can you get the B/R Sports Add-On without Max?"}
            cssClass={"faq-content"}
          >
            <p>
              No, a Max base plan is required when signing up for the B/R Sports
              Add-On. Pricing and availability may vary if you receive Max
              through a TV provider. However, most providers carry TBS, TNT, and
              truTV for watching much of the same Warner Bros. Discovery Sports
              content.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote page-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />

          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Max Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Max Channels</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>What Channel Is TNT On?</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Streaming Services for Sports</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default MaxSportsOn;
