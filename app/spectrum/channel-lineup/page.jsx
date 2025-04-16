// import React, { useState } from "react";
import "./spectrum-channel-lineups.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { spectrumNavLinks } from "../../assets/data/navLinks/spectrumNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import spectrum from "../../assets/images/Spectrum.png";
import { GoArrowUpRight } from "react-icons/go";
import voiceboy from "../../assets/images/voiceboy.png";
import star from "../../assets/images/star.png";
import asidespectrum from "../../assets/images/asidespectrum.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";
import quotations from "../../assets/images/quotations.svg";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Spectrum Channel Lineup Guide"
};

const SpectrumChannelLineUps = () => {
  // const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  let heroData = {
    card1: {
      logo: spectrum,
      rating: "(3.45/5)",
      starImg: star,
      desc: "$500 contract buyout when you switch",
      buttonText: "Compare Plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: voiceboy,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "spectrum",
        icon: asidespectrum,
      },
      {
        subtitle: "Popular add-ons:",
        title:
          "Entertainment View, Sports View, Latino View, Max™, SHOWTIME®, MGM+, STARZ®",
        icon: asidespectrum,
      },
      {
        subtitle: "Price:",
        title: "$59.99/mo.",
        icon: asidespectrum,
      },
      {
        subtitle: "Channels",
        title: "150+",
        icon: asidespectrum,
      },
    ],

    tableData: [
      {
        head: [
          "Top packages",
          "Price* ",
          "Channel count",
          "Details",
          "Available on Spectrum TV app",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Spectrum TV® Select Signature",
              "$59.99/mo. for 12 mos.*",
              "150+",
              "Thousands of movies and shows on demand",
              "/",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "Data effective as of publish date. Offers and availability may vary by location and are subject to change. See full disclaimer.",
  };
  let packageTableData = [
    {
      head: ["package", "Price", "Channel count", "Details"],

      body: [
        {
          content: [
            "1.",
            "Spectrum Internet®",
            "$39.99/mo. for 12 mos.°",
            "145+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Latino View (add-on)",
            "$12.00/mo. for 12 mos.",
            "70+",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataTwo = [
    {
      head: ["package", "Price", "Download speeds", "Data cap", "Details"],

      body: [
        {
          content: [
            "1.",
            "Spectrum Internet®",
            "$49.99/mo. for 12 mos.",
            "Up to 300 Mbps (wireless speeds may vary)",
            "N/A",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Spectrum Internet Ultra",
            "$69.99/mo. for 12 mos.",
            "Up to 500 Mbps (wireless speeds may vary)",
            "N/A",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Spectrum Internet 1Gig",
            "$89.99/mo. for 12 mos.",
            "Up to 1 Gbps (wireless speeds may vary)",
            "N/A",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="spectrum-channel-lineups">
      {/* <SubNav links={spectrumNavLinks} /> */}

      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">Spectrum Channel Lineup Guide</h2>
          <p className="sect-desc">
            Our research-intensive guide to Spectrum’s channel lineups will help
            you pick a TV package that’s just right.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-spectrum-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Spectrum channel update:</h4>
          <p>
            Cable TV provider
            <span className="link">
              <Link href={"#"}>Spectrum </Link>
            </span>
            has one simple, affordable package—Spectrum TV® Select
            Signature—with 150+ HD channels. It also happens to be the cheapest
            standalone TV package we’ve found. Spectrum’s add-on packs and
            premium channels are also reasonably priced so that you can create
            quite a package for yourself. We’ve compiled this Spectrum channel
            lineup guide so you’ll know exactly what’s available.
          </p>
          <br />
          <h4>Spectrum channel update:</h4>
          <p>
            As of September 11, 2023, the carrier dispute between Charter
            Communications and Disney has been resolved. Spectrum TV customers
            once again have access to Disney-owned channels like ESPN, Disney
            Channel, and ABC. Spectrum TV Select customers will also receive
            subscriptions to the ad-supported Disney+ plan in the near future,
            while Spectrum TV Select Plus customers will gain access to ESPN+.
          </p>
        </div>
      </div>

      <CTA
        heading={
          "Don't know if Spectrum is available in your area? Let's find out."
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
          <Link href={"#"}>Spectrum TV channels by package</Link>
          <Link href={"#"}>Premium channels, add-ons, and upgrades</Link>
          <Link href={"#"}>Spectrum TV package and bundles</Link>
        </div>
      </div>

      <div className="section spectrum-tv-channels-packages">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> TV channels </span> by package
          </h2>
          <p className="sect-desc">
            To find out what channels are available with your Spectrum TV
            package, check out Spectrum’s online{" "}
            <span className="link">
              <Link href={"#"}> channel lineup tool. </Link>
            </span>{" "}
            There you can sort by packages, premium channels, and add-ons to see
            exactly which channels you’ll be getting with your plan.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Spectrum premium channels</h4>
          <p className="after-heading">
            If you want more movies, TV series, and live sports—just more
            popular channels—you can add the following channel add-on packs and
            premium channels to your Spectrum subscription.
            <br />
            See what custom TV packages you can concoct with Spectrum TV Select
            Signature and the following add-ons:
          </p>
          <ul>
            <li>· CINEMAX ($10.00/mo.)</li>
            <li>
              · Entertainment View ($12.00/mo.): Includes 70+ channels like
              Cooking Channel, NFL Network, OWN, and more.
            </li>
            <li>
              · Max ($16.00/mo.): Includes total access to the{" "}
              <span className="link">
                <Link href={"#"}>Max </Link>
              </span>{" "}
              on-demand streaming service.
            </li>
            <li>
              · SHOWTIME ($10.00/mo.): Includes{" "}
              <span className="link">
                <Link href={"#"}> SHOWTIME </Link>
              </span>{" "}
              streaming content through{" "}
              <span className="link">
                <Link href={"#"}> SHOWTIME Anytime </Link>
              </span>
            </li>
            <li>
              · STARZ & STARZ ENCORE® ($9.00/mo.): Includes six premium channels
              and{" "}
              <span className="link">
                <Link href={"#"}> STARZ On Demand. </Link>
              </span>
            </li>
            <li>· THE MOVIE CHANNELTM ($5.00/mo.)</li>
            <li>· MGM+ ($6.00/mo.)</li>
          </ul>
        </div>

        <div className="package-table-container channels">
          <h4>Spectrum sports channel add-ons</h4>
          <p className="after-heading">
            Hey, sports fans: If you just gotta have more sports content, check
            out these add-ons. We included SHOWTIME here, too, since it carries
            live boxing and MMA events.
          </p>
          <ul>
            <li>
              · FOX Soccer Plus ($10.00/mo.): Live soccer and rugby spanning the
              globe.
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> MLB EXTRA INNINGS </Link>
              </span>
              ($139.99/season): Enjoy 90 out-of-market games every week.
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> NBA League Pass </Link>
              </span>{" "}
              ($99.00/half-season): Up to 40 out-of-market basketball games
              weekly.
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> NHL Center Ice </Link>
              </span>{" "}
              ($79.00/season): Up to 40 out-of-market ice hockey games weekly.
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> SHOWTIME® </Link>
              </span>
              ($10.00/mo.): SHOWTIME’s six live feeds show live boxing and MMA
              events.
            </li>
            <li>
              · Sports View ($7.00/mo.): 20 sports channels, including NFL
              Network, NFL RedZone, NHL Network, and more).
            </li>
          </ul>
          <br />
          <p>
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change.{" "}
            <span className="link">
              <Link href={"#"}>See full disclaimer. </Link>
            </span>
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Spectrum Latino packages</h4>
          <p className="after-heading">
            Spectrum includes some Spanish-language channels, like Telemundo and
            Univision, in its regular packages. But you can get muchos más in
            Spectrum’s Latino TV plans.
            <br />
            Mi Plan Latino includes 80+ Spanish-language channels from Mexico,
            Latin America, and Spain—plus 60+ English-language channels from TV
            Select Signature.
          </p>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change. See full disclaimer.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Spectrum international add-ons</h4>
          <p className="after-heading">
            Jagshemash! If you’d like to keep up with news and shows from
            another country, Spectrum offers the following international channel
            packs. Unfortunately, you can watch them only with the Spectrum TV
            app—fortunately, it’s free with your Spectrum TV subscription.
          </p>
          <ul className="channel-list">
            <li>· Filipino View—8 channels ($19.99/mo.)</li>
            <li>· India View—3 channels ($14.99/mo.)</li>
            <li>· India View Premium—7 channels ($29.99/mo.)</li>
            <li>· Japanese View—1 channel ($14.99/mo.)</li>
            <li>· Korean View—6 channels ($12.99/mo.)</li>
            <li>· Latino View—70+ channels ($12.00/mo.)</li>
            <li>· Chinese View—6 channels ($9.99/mo.)</li>
            <li>· Punjabi View—2 channels ($4.99/mo.)</li>
            <li>· Vietnamese View—2 channels ($9.99/mo.)</li>
          </ul>
          <p>
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Spectrum TV plans and packages</h4>
          <p className="after-heading">
            If you’ve found the channel lineup you want, here’s a reminder of
            pricing and other vital statistics of Spectrum’s TV packages that we
            mentioned way up top.
          </p>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change. See full disclaimer.
          </p>
        </div>
      </div>

      <div className="section bundles-and-pricing">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum TV and internet <span> bundles and pricing </span>
          </h2>
          <p className="sect-desc">
            And, of course, you can bundle Spectrum TV with Spectrum high-speed
            internet service, but Spectrum no longer offers pre-packaged bundles
            at a discounted rate. Instead, you simply choose one of these
            internet plans when you sign up for TV Select Signature.
          </p>
          <PackageTable item={packageTableDataTwo} />
          <p className="below-table">
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change. See full disclaimer.
          </p>
        </div>
      </div>

      <div className="section spectrum-review-faq">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span>TV channel lineup</span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Does Spectrum have a TV
                guide channel?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Yes, Spectrum has a TV guide schedule. Just visit the Spectrum
                  website and sign in to your Spectrum account to see your local
                  TV listings. Or you can also just fire up your TV and punch
                  the Guide button on your remote control to check out the
                  Spectrum TV guide.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"Does Spectrum have a TV guide channel?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, Spectrum has a TV guide schedule. Just visit the Spectrum
              website and sign in to your Spectrum account to see your local TV
              listings. Or you can also just fire up your TV and punch the Guide
              button on your remote control to check out the Spectrum TV guide.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What channels are in
                Spectrum's basic package?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  To find out which channels come with Spectrum TV* Select
                  Signature, check out Spectrum's online{" "}
                  <span className="link">
                    <Link href={"#"}> channel lineup tool. </Link>
                  </span>
                  Read our full{" "}
                  <span className="link">
                    <Link href={"#"}> Spectrum TV review </Link>
                  </span>{" "}
                  if you're interested in all the details.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"What channels are in Spectrum's basic package?"}
            cssClass={"faq-content"}
          >
            <p>
              To find out which channels come with Spectrum TV* Select
              Signature, check out Spectrum's online{" "}
              <span className="link">
                <Link href={"#"}> channel lineup tool. </Link>
              </span>
              Read our full{" "}
              <span className="link">
                <Link href={"#"}> Spectrum TV review </Link>
              </span>{" "}
              if you're interested in all the details.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How much is NBA League Pass
                with Spectrum?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  You can get a half-season{" "}
                  <span className="link">
                    <Link href={"#"}> NBA League Pass </Link>
                  </span>{" "}
                  through Spectrum for $49.99.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"How much is NBA League Pass with Spectrum?"}
            cssClass={"faq-content"}
          >
            <p>
              You can get a half-season{" "}
              <span className="link">
                <Link href={"#"}> NBA League Pass </Link>
              </span>{" "}
              through Spectrum for $49.99.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote spectrum-review-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Learn more about Spectrum services</h4>

          <h4>Related Articles:</h4>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Spectrum Internet </Link>
              </span>{" "}
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Spectrum TV Plans </Link>
              </span>{" "}
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Spectrum Customer Service </Link>
              </span>{" "}
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Spectrum Bundles</Link>
              </span>{" "}
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Spectrum Phone Service </Link>
              </span>{" "}
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Check Availability in Your Area </Link>
              </span>{" "}
            </li>
          </ul>
          <h4>Disclaimer:</h4>

          <p>
            Limited time offer; subject to change; valid to qualified
            residential customers who have not subscribed to any services within
            the previous 30 days and who have no outstanding obligation to
            Charter. Spectrum TV Select Signature promotion price is $59.99/mo;
            standard rates apply after yr 1. Taxes, fees, and surcharges
            (broadcast surcharge up to $23.20/mo) extra and subject to change
            during and after the promotional period; installation/network
            activation, equipment and additional services are extra. General
            Terms: TV: TV equipment required; charges may apply. Channel and HD
            programming availability based on level of service and location.
            Account credentials may be required to stream some TV content
            online. Services subject to all applicable service terms and
            conditions, subject to change. Services not available in all areas.
            Restrictions apply. Enter your address to determine availability.
          </p>
          <p>
            Limited time offer; subject to change; valid to qualified
            residential customers who have not subscribed to any services within
            the previous 30 days and who have no outstanding obligation to
            Charter. Spectrum Internet ® promotion price is $49.99/mo; standard
            rates apply after yr. 1. Taxes, fees and surcharges extra and
            subject to change during and after the promotional period;
            installation/network activation, equipment and additional services
            are extra. General Terms: INTERNET: Speed based on wired connection
            and may vary by address. Wireless speeds may vary. Services subject
            to all applicable service terms and conditions, subject to change.
            Services not available in all areas. Restrictions apply. Enter your
            address to determine availability. ©2022 Charter Communications.
          </p>
          <p>
            Limited time offer; subject to change; valid to qualified
            residential customers who have not subscribed to any services within
            the previous 30 days and who have no outstanding obligation to
            Charter. Spectrum Internet® Ultra promotion price is $69.99/mo;
            standard rates apply after yr. 1. Taxes, fees and surcharges extra
            and subject to change during and after the promotional period;
            installation/network activation, equipment and additional services
            are extra. General Terms: INTERNET: Speed based on wired connection
            and may vary by address. Wireless speeds may vary. Services subject
            to all applicable service terms and conditions, subject to change.
            Services not available in all areas. Restrictions apply. Enter your
            address to determine availability. ©2022 Charter Communications.
          </p>
          <p>
            Limited time offer; subject to change; valid to qualified
            residential customers who have not subscribed to any services within
            the previous 30 days and who have no outstanding obligation to
            Charter. Spectrum Internet® Gig promotion price is $89.99/mo;
            standard rates apply after yr. 1. Taxes, fees and surcharges extra
            and subject to change during and after the promotional period;
            installation/network activation, equipment and additional services
            are extra. General Terms: INTERNET: Speed based on wired connection
            and may vary by address. Wireless speeds may vary. Services subject
            to all applicable service terms and conditions, subject to change.
            Services not available in all areas. Restrictions apply. Enter your
            address to determine availability. ©2022 Charter Communications.
          </p>
          <p>
            Speed based on wired connection. Available Internet speeds may vary
            by address. Gig capable modem required for Gig speed. For a list of
            Gig capable modems, visit spectrum.net/modem.
          </p>
        </div>
      </div>
      {/* <Newsletter /> */}
    </div>
  );
};

export default SpectrumChannelLineUps;
