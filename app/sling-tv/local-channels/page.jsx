// import React, { useState } from "react";
import "./sling-tv-local-channels.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { slingtvNavLinks } from "../../assets/data/navLinks/slingtvNavLinks";
import helpgirl from "../../assets/images/helpsupportgirl.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";
import CTA from "../../components/cta-section/CTA";

export const metadata = {
  title: "Sling TV local Channels"
};

const SlingTvLocalChannels = () => {
  //   const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="sling-tv-local-channels">
      {/* <SubNav links={slingtvNavLinks} /> */}
      <div className="hidden-cost-hero global-inner-hero">
        <h1>Sling tV local Channels</h1>
        <p>
          Need your local channels? Sling TV has a unique way of streaming them,
          and it doesn’t factor into your monthly bill. (Hint: remember
          antennas?)
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

      <StickyHeader />

      <div className="section online">
        <div className="head">
          <h2 className="sect-heading">
            <span> Watching local channels </span> with Sling TV
          </h2>
          <p className="sect-desc">
            If you live in any of the cities listed below, you’ll be able to
            stream local FOX and NBC channels directly through Sling TV (Sling
            Blue and Sling Orange + Blue plans only).
          </p>
        </div>
        <div className="post-grid">
          <div className="package-table-container channels">
            <h4>FOX</h4>
            <br />
            <ul>
              <li>Atlanta</li>
              <li>Austin</li>
              <li>Charlotte</li>
              <li>Chicago</li>
              <li>Dallas/Ft. Worth</li>
              <li>Detroit</li>
              <li>Gainesville</li>
              <li>Houston</li>
              <li>Los Angeles</li>
              <li>Minneapolis/St. Paul</li>
              <li>New York</li>
              <li>Orlando/Daytona/Melbourne</li>
              <li>Philadelphia</li>
              <li>Phoenix</li>
              <li>San Francisco/Oakland/San Jose</li>
              <li>Tampa/St. Petersburg</li>
              <li>Washington D.C.</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>NBC</h4>
            <br />
            <ul>
              <li>Boston</li>
              <li>Chicago</li>
              <li>Dallas/Ft. Worth</li>
              <li>Hartford/New Haven</li>
              <li>Los Angeles</li>
              <li>Miami/Ft. Lauderdale</li>
              <li>New York</li>
              <li>Philadelphia</li>
              <li>San Diego</li>
              <li>San Francisco/Oakland/San Jose</li>
              <li>Washington D.C.</li>
            </ul>
          </div>
        </div>
      </div>

      <CTA
        heading={"You’ll need a fast internet plan to stream all that TV"}
        desc={
          "Wanna speed up your download speeds? Enter your zip code below to see top internet providers in your area."
        }
      />

      <div className="section airtv">
        <div className="head">
          <h2 className="sect-heading">
            Watching local channels <span> with Sling TV and AirTV </span>
          </h2>
          <p className="sect-desc">
            Sling TV offers different versions of its AirTV device, which acts
            as an interface between an over-the-air digital antenna and your
            streaming device (Roku, Apple TV, Amazon Fire TV, etc.). It places
            local broadcast channels into Sling TV’s channel grid, and even has
            DVR capability.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>get sling TV</Link>
        </div>
        <div className="package-table-container channels">
          <h4>AirTV Mini</h4>
          <br />
          <p>
            The AirTV Mini doesn’t integrate local channels into Sling TV; it’s
            simply a dongle-sized streaming device similar to Chromecast with
            Google TV or TiVo Stream. It can stream up to 4K resolution and
            features built-in Google Chromecast and voice search.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>AirTV 2</h4>
          <br />
          <p>
            Paired with an OTA antenna, the AirTV 2 can integrate local
            broadcast channels into Sling TV’s channel lineup, allowing you to
            watch local channels on up to two TVs at home or one mobile device
            outside your home network. Connected to an external hard drive, the
            AirTV 2 can also record local channels.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>AirTV Anywhere</h4>
          <br />
          <p>
            Sling TV’s deluxe AirTV Anywhere device interfaces with an OTA
            antenna and your streaming device and allows for up to four
            simultaneous TV streams in home or one on the go. AirTV Anywhere
            also has a built-in 1TB DVR for recording local channels.
            <br />
            Sling TV offers several discounts and antenna bundles for its AirTV
            devices. Check out our Sling TV Deals guide for more info.
          </p>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>Sling TV local channels </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Does Sling TV have local
                channels?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Sling TV streams FOX and NBC affiliate channels in some US
                  cities, like Los Angeles, New York City, and Atlanta. To get
                  all local broadcast channels anywhere, Sling TV offers an
                  AirTV interface device, which pairs with a digital
                  over-the-air antenna to pull free local channels into its
                  channel lineup.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Does Sling TV have local channels?"}
            cssClass={"faq-content"}
          >
            <p>
              Sling TV streams FOX and NBC affiliate channels in some US cities,
              like Los Angeles, New York City, and Atlanta. To get all local
              broadcast channels anywhere, Sling TV offers an AirTV interface
              device, which pairs with a digital over-the-air antenna to pull
              free local channels into its channel lineup.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Which Sling TV package has
                local channels?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Sling TV’s Sling Blue ($40 a month) and Sling Orange + Blue
                  ($55 a month) plans feature local FOX and NBC channels in some
                  markets. The Sling Orange ($40 a month) plan carries no local
                  channels.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Which Sling TV package has local channels?"}
            cssClass={"faq-content"}
          >
            <p>
              Sling TV’s Sling Blue ($40 a month) and Sling Orange + Blue ($55 a
              month) plans feature local FOX and NBC channels in some markets.
              The Sling Orange ($40 a month) plan carries no local channels.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How can I stream local
                channels for free?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  There are few options for streaming local channels for free
                  without a subscription to a live TV streaming service. But,
                  for the one-time cost of a digital OTA antenna, you can
                  receive dozens of area broadcast channels, including ABC, CBS,
                  FOX, NBC, The CW, and PBS affiliates, for nothing.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How can I stream local channels for free?"}
            cssClass={"faq-content"}
          >
            <p>
              There are few options for streaming local channels for free
              without a subscription to a live TV streaming service. But, for
              the one-time cost of a digital OTA antenna, you can receive dozens
              of area broadcast channels, including ABC, CBS, FOX, NBC, The CW,
              and PBS affiliates, for nothing.
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
                <Link href={"#"}> Sling TV Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}> Sling TV Deals</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Sling TV Channels </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default SlingTvLocalChannels;
