// import React, { useState } from "react";
import "./direct-tv-nfl-sunday-ticket.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { directtvNavLinks } from "../../assets/data/navLinks/directtvNavLinks";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "NFL SUNDAY TICKET",
};

const DirectTvNFLSundayTicket = () => {
  // const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="direct-tv-nfl-sunday-ticket">
      {/* <SubNav links={directtvNavLinks} /> */}
      <div className="direct-tv-nfl-sunday-ticket-hero global-inner-hero">
        <h1>NFL SUNDAY TICKET No Longer On DIRECTV</h1>
        <p>
          NFL Sunday Ticket is the ultimate TV package for gridiron fanatics,
          but DIRECTV customers must look elsewhere to find the out-of-market
          service in 2023.
        </p>
      </div>

      <div className="section best-internet-tv-offer">
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

      <div className="section endnote endnote-start">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>NFL Sunday Ticket has moved to YouTube</h4>
          <p>
            Football fans looking for out-of-market NFL games in 2023 can get
            NFL Sunday Ticket through YouTube TV and YouTube Primetime Channels.
            The change in providers comes after YouTube’s parent company,
            Google, signed a seven-year deal for NFL Sunday Ticket.
            <br />
            Check out our new{" "}
            <span className="link">
              <Link href={"#"}> NFL Sunday Ticket Review </Link>
            </span>{" "}
            to browse the service’s new pricing and playback features.
            <br />
            In a blockbuster move that rivals the Aaron Rodgers trade, NFL
            Sunday Ticket left DIRECTV for YouTube TV and YouTube Primetime
            Channels. DIRECTV subscribers can no longer add out-of-market NFL
            games to their plans. But it doesn’t mean a separate subscription to
            YouTube TV is necessary.
            <br />
            If you’re a DIRECTV subscriber despite its lack of NFL Sunday
            Ticket, you can still get the out-of-market package as a standalone
            streaming subscription through YouTube Primetime Channels. Of
            course, now you’ll need a reliable internet service provider to
            watch those games. But you can bundle internet providers like AT&T
            and CenturyLink with DIRECTV.
          </p>
          <br />
          <h4>Pro tip:</h4>
          <p>
            Learn more about bundling AT&T and CenturyLink with DIRECTV by
            visiting our Best Internet Providers to Use with DIRECTV guide.
          </p>
        </div>
      </div>

      <CTA
        heading={"Find the best NFL TV plan in your area"}
        desc={
          "Enter your zip code below to see your town’s top TV and internet providers."
        }
      />

      <div className="section direct-tv-nfl-channels">
        <div className="head">
          <h2 className="sect-heading">
            NFL channels <span> on DIRECTV </span>
          </h2>
          <p className="sect-desc">
            Even without NFL Sunday Ticket, DIRECTV carries key NFL channels and
            other vital sports networks. That means you can still watch
            in-market NFL games and most primetime matchups this season. The
            main exception is that
            <span className="link">
              <Link href={"#"}>Thursday Night Football </Link>
            </span>{" "}
            games stream exclusively on
            <span className="link">
              <Link href={"#"}> Amazon Prime Video. </Link>
            </span>
            We listed DIRECTV’s NFL channels below, but you can also head to our{" "}
            <span className="link">
              <Link href={"#"}> DIRECTV Sports. </Link>
            </span>{" "}
            page for a more in-depth look at package offerings.
          </p>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th> </th>
                <th>Channel</th>
                <th>Channel number</th>
                <th>NFL content</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1. </td>
                <td> ABC</td>
                <td>Varies </td>
                <td>Select Monday Night Football games air on ABC.</td>
              </tr>
              <tr>
                <td>2. </td>
                <td> CBS</td>
                <td>Varies </td>
                <td>
                  In-market Sunday afternoon games air on CBS. The channel will
                  also televise the upcoming Super Bowl.
                </td>
              </tr>
              <tr>
                <td>3. </td>
                <td> ESPN</td>
                <td>206 </td>
                <td>
                  ESPN is the primary home of Monday Night Football alongside
                  ESPN Deportes.
                </td>
              </tr>
              <tr>
                <td>4. </td>
                <td> ESPN2</td>
                <td>209 </td>
                <td>
                  Every Monday Night Football with Peyton and Eli broadcast airs
                  on ESPN2.
                </td>
              </tr>
              <tr>
                <td>5. </td>
                <td> FOX</td>
                <td>Varies </td>
                <td>Like CBS, FOX airs in-market Sunday afternoon games.</td>
              </tr>
              <tr>
                <td>6. </td>
                <td> NBC</td>
                <td>Varies </td>
                <td>NBC carries every Sunday Night Football broadcast.</td>
              </tr>
              <tr>
                <td>7. </td>
                <td> NFL Network</td>
                <td>212 </td>
                <td>
                  NFL Network airs 24/7 NFL coverage, including select live
                  games, the NFL Scouting Combine, and the NFL Draft.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
        <br />
      </div>

      <div className="section direct-tv-nfl-sunday-ticket-for-businesses">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV offers <span> NFL Sunday Ticket for businesses </span>
          </h2>
          <p className="sect-desc">
            Commercial businesses can still get NFL Sunday Ticket through
            DIRECTV. In 2023, the satellite TV provider signed a multi-year deal
            to continue distributing out-of-market NFL games to bars,
            restaurants, and other establishments in the U.S.
            <br />
            Businesses interested in ordering NFL Sunday Ticket can call{" "}
            <span className="link">
              <Link href={"#"}>+1-866-488-0503</Link>
            </span>{" "}
            or{" "}
            <span className="link">
              <Link href={"#"}>shop DIRECTV’s business packages </Link>
            </span>{" "}
            online.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} alt="quotationsIcon" className="mark" />
          <h4>Pro tip:</h4>
          <br />
          <p>
            Football fans looking to watch NFL Sunday Ticket at a bar or
            restaurant can use the{" "}
            <span className="link">
              <Link href={"#"}>DIRECTV Sports Bar Finder App</Link>
            </span>{" "}
            to locate a nearby venue.
          </p>
        </div>
      </div>

      <div className="section direct-tv-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> NFL Sunday Ticket on DIRECTV </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How much does NFL Sunday
                Ticket cost on DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  NFL Sunday Ticket costs $349.00 per season on YouTube TV and
                  $449.00 per season on YouTube Primetime Channels. When the
                  out-of-market package was last available on DIRECTV, it cost
                  $293.94 per season.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" How much does NFL Sunday Ticket cost on DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>
              NFL Sunday Ticket costs $349.00 per season on YouTube TV and
              $449.00 per season on YouTube Primetime Channels. When the
              out-of-market package was last available on DIRECTV, it cost
              $293.94 per season.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Can DIRECTV FOR BUSINESS
                customers get NFL Sunday Ticket in 2023?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Yes, NFL Sunday Ticket is still available to DIRECTV FOR
                  BUSINESS customers. In May 2023, DIRECTV made a deal with the
                  NFL’s EverPass Media to distribute out-of-market NFL games on
                  Sunday afternoons to commercial venues like bars and
                  restaurants. Games air on DIRECTV channels 9552 to 9565.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={
              " Can DIRECTV FOR BUSINESS customers get NFL Sunday Ticket in 2"
            }
            cssClass={"faq-content"}
          >
            <p>
              Yes, NFL Sunday Ticket is still available to DIRECTV FOR BUSINESS
              customers. In May 2023, DIRECTV made a deal with the NFL’s
              EverPass Media to distribute out-of-market NFL games on Sunday
              afternoons to commercial venues like bars and restaurants. Games
              air on DIRECTV channels 9552 to 9565.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does DIRECTV STREAM have
                NFL Sunday Ticket?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  No, NFL Sunday Ticket is unavailable as an add-on through
                  DIRECTV STREAM. But you can sign up for a standalone NFL
                  Sunday Ticket streaming subscription via YouTube Primetime
                  Channels.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does DIRECTV STREAM have NFL Sunday Ticket?"}
            cssClass={"faq-content"}
          >
            <p>
              No, NFL Sunday Ticket is unavailable as an add-on through DIRECTV
              STREAM. But you can sign up for a standalone NFL Sunday Ticket
              streaming subscription via YouTube Primetime Channels.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Is NFL RedZone on DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Yes, DIRECTV offers NFL RedZone in its Sports Pack add-on.
                  After its contract for NFL Sunday Ticket ended, DIRECTV’s RED
                  ZONE CHANNEL went dark. But DIRECTV struck a deal with the
                  league for the Scott Hanson–hosted NFL RedZone channel before
                  the 2023 season.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Is NFL RedZone on DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, DIRECTV offers NFL RedZone in its Sports Pack add-on. After
              its contract for NFL Sunday Ticket ended, DIRECTV’s RED ZONE
              CHANNEL went dark. But DIRECTV struck a deal with the league for
              the Scott Hanson–hosted NFL RedZone channel before the 2023
              season.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote direct-tv-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Related articles:</h4>
          <ul>
            <li>
              <span className="link">
                <Link href={"#"}>
                  · How To Get NFL Sunday Ticket Without DIRECTV
                </Link>{" "}
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"#"}>· Is NFL Sunday Ticket Leaving DIRECTV?</Link>{" "}
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"#"}>· How To Watch NFL Games</Link>{" "}
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"#"}>· Best Streaming Services for Sports</Link>{" "}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default DirectTvNFLSundayTicket;
