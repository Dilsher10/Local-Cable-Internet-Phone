// import React, { useState } from "react";
import "./peacock-mbl-on.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { peacockNavLinks } from "../../assets/data/navLinks/peacockNavLinks";
import peacockmbl from "../../assets/images/peacock-mbl.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import peacock from "../../assets/images/peacock-photo.png";
import peacockicon from "../../assets/images/peacock-icon.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import mblstadium from "../../assets/images/mblstadium.png";
import mblhighlights from "../../assets/images/mblhighlights.png";
import ballofbase from "../../assets/images/ball-of-base.png";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import { FaCheck } from "react-icons/fa6";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "MLB SUNDAY LEADOFF"
};

const PeacockMlbOn = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: peacock,
      rating: "(3.5/5)",
      starImg: star,
      desc: "19 MLB games",
      buttonText: "Read peacock review",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: peacockmbl,

    cardsStrip: [
      {
        subtitle: "Free Trial",
        title: "None",
        icon: peacockicon,
      },
      {
        subtitle: "Price:",
        title: "$5.99–$11.99/mo. or $59.99–$119.99/yr.",
        icon: peacockicon,
      },

      {
        subtitle: "MLB content:",
        title: "19 live games, full match replays, and studio shows.",
        icon: peacockicon,
      },
    ],

    tableData: [
      {
        head: ["Plan", "price", "Live MLB games", "Details"],

        body: [
          {
            content: [
              "1.",
              "Peacock Premium (with ads)",
              "$5.99/mo.",
              <FaCheck key="Fa1" className="check-icon" />,
            ],
            linkPath: "#",
          },
          {
            content: [
              "2.",
              "Peacock Premium Plus (no ads)",
              "$11.99/mo.",
              <FaCheck key="Fa2" className="check-icon" />,
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "Plus $72.99/mo recurring for YouTube TV. Compatible device and internet connection required. Offers and availability may vary by location and are subject to change.",
  };
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="peacock-mbl-on">
      {/* <SubNav links={peacockNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">How To Watch MLB SUNDAY LEADOFF 2023</h2>
          <p className="sect-desc">
            Peacock returns to the diamond to deliver 19 MLB games this season.
            We researched the streaming service to help you decide if it’s worth
            adding to your TV plan.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is Peacock good?</h4>
          <p>
            MLB Sunday Leadoff is a weekly Major League Baseball (MLB) broadcast
            that streams exclusively on Sunday mornings on Peacock. Produced by
            NBC Sports, the broadcast is only accessible through one of
            Peacock’s premium subscription plans.
            <br />
            Peacock will stream its exclusive MLB games across 19 Sundays during
            the 2023 season. Keep reading to find out if the streaming service
            is worth it for MLB fans and to view the entire MLB Sunday
            Leadoff schedule.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th>
                    Prospects <IoThumbsUpSharp className="icon" />
                  </th>
                  <th>
                    Consequences <IoThumbsDownSharp className="icon" />
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td> Inexpensive pricing</td>
                  <td> Only 19 exclusive MLB games this season</td>
                </tr>
                <tr>
                  <td> Exclusive NBCUniversal content</td>
                  <td> Lackluster interface</td>
                </tr>
                <tr>
                  <td>Large on-demand library of TV shows and movies</td>
                  <td>Limited original content</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Want complete MLB coverage?"}
        desc={"Enter your zip code below to see TV providers with more games."}
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
          <Link href={"#"}>MLB Sunday Leadoff schedule </Link>
          <Link href={"#"}>Peacock MLB content </Link>
          <Link href={"#"}>Other options for watching MLB games </Link>
        </div>
      </div>

      <div className="section for-mlb-fans">
        <div className="head">
          <h2 className="sect-heading">
            Is Peacock worth it <span>for MLB fans?</span>
          </h2>
          <p className="sect-desc">
            We don’t recommend signing up for Peacock just to watch its 19
            exclusive MLB games. With 30 teams playing 162 games throughout the
            regular season, Peacock only provides you with a sliver of baseball
            action. You’ll actually get one more MLB game per week with Apple
            TV+’s Friday Night Baseball offering for $6.99 a month. But the main
            benefit of having Peacock over Apple TV+ is that you’ll have access
            to several other live sports and a much larger library of on-demand
            TV shows and movies.
            <br />
            If you can’t survive the MLB season without accessing every live
            game from your favorite team, you’ll need Peacock in your TV lineup.
            But you might not need it for the entire MLB season. That’s where
            the schedule below comes in handy.
            <br />
            For instance, if you’re a Chicago White Sox fan, you can pay for a
            single month of Peacock to watch the team’s lone MLB Sunday
            Leadoff broadcast on August 6. Just be sure to cancel your
            subscription before the month is up.
          </p>
        </div>
        <Image src={mblstadium} alt="mblstadium" />
        <br />
        <p className="below-table">
          Peacock’s presentation of an MLB Sunday Leadoff game as seen on a
          Google Chrome web browser.
        </p>
      </div>

      <div className="section schedule">
        <div className="head">
          <h2 className="sect-heading">
            2023 MLB Sunday Leadoff <span> schedule</span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Game</th>
                <th>Date</th>
                <th>Time (ET)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Colorado Rockies at Philadelphia Phillies</td>
                <td>April 23, 2023</td>
                <td>12:05 p.m.</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Chicago Cubs at Miami Marlins</td>
                <td>April 30, 2023</td>
                <td>12:05 p.m.</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Baltimore Orioles at Atlanta Braves*</td>
                <td>May 7, 2023</td>
                <td>11:35 a.m.</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Los Angeles Angels at Cleveland Guardians</td>
                <td>May 14, 2023</td>
                <td>11:35 a.m.</td>
              </tr>
              <tr>
                <td>5.</td>
                <td>New York Yankees at Cincinnati Reds</td>
                <td>May 21, 2023</td>
                <td>11:35 a.m.</td>
              </tr>
              <tr>
                <td>6.</td>
                <td>Los Angeles Dodgers at Tampa Bay Rays</td>
                <td>May 28, 2023</td>
                <td>11:35 a.m.</td>
              </tr>
              <tr>
                <td>7.</td>
                <td>St. Louis Cardinals at Pittsburgh Pirates</td>
                <td>June 4, 2023</td>
                <td>11:35 a.m.</td>
              </tr>
              <tr>
                <td>8.</td>
                <td>Arizona Diamondbacks at Detroit Tigers</td>
                <td>June 11, 2023</td>
                <td>11:35 a.m.</td>
              </tr>
              <tr>
                <td>9.</td>
                <td>Baltimore Orioles at Chicago Cubs</td>
                <td>June 18, 2023</td>
                <td>1:05 p.m.</td>
              </tr>
              <tr>
                <td>10.</td>
                <td>Minnesota Twins at Baltimore Orioles</td>
                <td>July 2, 2023</td>
                <td>12:05 p.m.</td>
              </tr>
              <tr>
                <td>11.</td>
                <td>Texas Rangers at Washington Nationals</td>
                <td>July 9, 2023</td>
                <td>12:05 p.m.</td>
              </tr>
              <tr>
                <td>12.</td>
                <td>San Francisco Giants at Pittsburgh Pirates</td>
                <td>July 16, 2023</td>
                <td>12:05 p.m.</td>
              </tr>
              <tr>
                <td>13.</td>
                <td>San Diego Padres at Detroit Tigers</td>
                <td>July 23, 2023</td>
                <td>12:05 p.m.</td>
              </tr>
              <tr>
                <td>14.</td>
                <td>Los Angeles Angels at Toronto Blue Jays</td>
                <td>July 30, 2023</td>
                <td>12:05 p.m.</td>
              </tr>
              <tr>
                <td>15.</td>
                <td>Chicago White Sox at Cleveland Guardians</td>
                <td>August 6, 2023</td>
                <td>12:05 p.m.</td>
              </tr>
              <tr>
                <td>16.</td>
                <td>Detroit Tigers at Boston Red Sox</td>
                <td>August 13, 2023</td>
                <td>12:05 p.m.</td>
              </tr>
              <tr>
                <td>17.</td>
                <td>Seattle Mariners at Houston Astros</td>
                <td>August 20, 2023</td>
                <td>1:05 p.m.</td>
              </tr>
              <tr>
                <td>18.</td>
                <td>Los Angeles Angels at New York Mets</td>
                <td>August 27, 2023</td>
                <td>12:05 p.m.</td>
              </tr>
              <tr>
                <td>19.</td>
                <td>Philadelphia Phillies at Milwaukee Brewers</td>
                <td>September 3, 2023</td>
                <td>12:05 p.m.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <br />
        <p className="below-table">*Game also airs on NBC.</p>
      </div>

      <div className="section for-mlb-fans">
        <div className="head">
          <h2 className="sect-heading">
            MLB content <span>on Peacock</span>
          </h2>
          <p className="sect-desc">
            Apart from its 19 exclusive live MLB games, Peacock hosts the
            SiriusXM All-Star Futures Game—which takes place at T-Mobile Park in
            Seattle this July. The streaming service also includes an MLB hub
            page featuring baseball-related highlights from NBC Sports and
            fantasy baseball coverage from NBC Sports EDGE. During the season,
            you can also find classic MLB games and other on-demand content from
            the MLB Film & Video Archive on Peacock.
            <br />
            MLB fans can find other sports news and game recaps on the NBC
            Sports Peacock channel. The always-on channel offers daily coverage,
            including sports talk shows like The Dan Patrick Show and The Rich
            Eisen Show that frequently cover baseball.
          </p>
        </div>
        <Image src={mblhighlights} alt="mblstadium" />
        <br />
        <p className="below-table">
          Peacock’s MLB hub as seen on a Google Chrome web browser.
        </p>
        <div className="package-table-container channels">
          <Image src={ballofbase} className="mark" alt="" />
          <h4>Other options for watching MLB games</h4>
          <p className="after-heading">
            Like the NFL, you can find a lot of live MLB coverage across several
            different platforms—which we highlight in our How to Watch MLB
            Games guide.
            <br />
            MLB’s expansive broadcast plan is a double-edged sword for baseball
            fans. With many viewing options, it’s easy to catch live games with
            even the most basic TV setup. But you’ll need several TV
            subscriptions to access every regular-season MLB game.
            <br />
            We recommend DIRECTV for the most MLB access because it offers every
            national MLB channel and a wide selection of regional sports
            networks (RSNs)—those are essential for watching locally televised
            games. You can even add MLB EXTRA INNINGS® to your plan for full
            out-of-market access.
            <br />
            If you’re a cord-cutter, MLB.TV will get you the same out-of-market
            games as MLB EXTRA INNINGS. And you can also check out Apple TV+ for
            its exclusive Friday Night Baseball doubleheaders.
          </p>
        </div>
      </div>

      <CTA
        heading={"Looking for the best TV provider for your home?"}
        desc={"Enter your zip code below to see TV providers with more games."}
      />

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Peacock for watching MLB worth it?</span>
          </h2>
          <p className="sect-desc">
            With premium plans starting at $5.99 a month, Peacock provides an
            inexpensive way to watch exclusive MLB games. The streaming service
            also has live and on-demand coverage from several other major sports
            leagues, including NFL, Premier League, and IndyCar Series events.
            <br />
            While Peacock only offers 19 live MLB games this season, it has a
            massive library of on-demand movies and TV shows to hold you over
            between each matchup. After all, nothing says baseball more than Rob
            Lowe singing “Take Me Out to the Ball Game” on Parks and Recreation.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> get peacock</Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> MLB on Peacock </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Are MLB games free on
                Peacock?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  No, MLB games aren’t free on Peacock. You’ll need to subscribe
                  to one of Peacock’s premium plans to access MLB Sunday
                  Leadoff matchups..
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Are MLB games free on Peacock?"}
            cssClass={"faq-content"}
          >
            <p>
              No, MLB games aren’t free on Peacock. You’ll need to subscribe to
              one of Peacock’s premium plans to access MLB Sunday
              Leadoff matchups..
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How many MLB games are on
                Peacock?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  In 2023, Peacock will stream 19 exclusive MLB games as a part
                  of its MLB Sunday Leadoff schedule. That’s one game more than
                  what the service aired in 2022.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" How many MLB games are on Peacock?"}
            cssClass={"faq-content"}
          >
            <p>
              In 2023, Peacock will stream 19 exclusive MLB games as a part of
              its MLB Sunday Leadoff schedule. That’s one game more than what
              the service aired in 2022.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What MLB channels are on
                Peacock?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Peacock currently has no MLB-themed channels, but you can
                  catch MLB content on the streaming service’s NBC Sports
                  channel. Head over to our Peacock Live TV page for more
                  information on its 24/7 channels.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" What MLB channels are on Peacock?"}
            cssClass={"faq-content"}
          >
            <p>
              Peacock currently has no MLB-themed channels, but you can catch
              MLB content on the streaming service’s NBC Sports channel. Head
              over to our Peacock Live TV page for more information on its 24/7
              channels.
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
          <h4>Methodology:</h4>
          <p>
            To determine Peacock’s worth for MLB fans, our sports experts spent
            over 10 hours researching and comparing Peacock’s baseball
            programming to other MLB viewing options. We based our
            recommendations on Peacock’s pricing and MLB game count, with
            on-demand content quantity also taken into consideration.
            <br />
            Check out our
            <span className="link">
              <Link href={"#"}>How We Rank </Link> page to learn more about our
              methods.
            </span>
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}> Peacock Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>How to Watch MLB Games</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>MLB.TV Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>MLB EXTRA INNINGS Review</Link>
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

export default PeacockMlbOn;
