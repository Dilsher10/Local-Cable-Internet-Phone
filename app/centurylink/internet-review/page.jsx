// import React, { useState } from "react";
import "./centurylink-internet-review.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { centurylinkNavLinks } from "../../assets/data/navLinks/centurylinkNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import centurylinkinternetreviewboy from "../../assets/images/centurylink-internet-review-boy.png";
import star from "../../assets/images/star.png";
import centurylinkicon from "../../assets/images/centurylink-icon.png";
import centurylink from "../../assets/images/centurylink.png";
import dotted from "../../assets/images/dotted.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import quotationsIcon from "../../assets/images/quotations.svg";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "CenturyLink Internet Review",
};

const CenturyLinkInternetReview = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: centurylink,
      rating: "(3.1/5)",
      starImg: star,
      desc: "SPECIAL OFFER: Get Fiber internet for as low as $30/mo for 12 months.",
      buttonText: "View Plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: centurylinkinternetreviewboy,

    cardsStrip: [
      {
        subtitle: "Download speeds:",
        title: "Up to 100–940 Mbps",
        icon: centurylinkicon,
      },
      {
        subtitle: "Upload speeds:",
        title: "Up to 10–940 Mbps",
        icon: centurylinkicon,
      },
      {
        subtitle: "Price:",
        title: "$30.00–$75.00/mo.",
        icon: centurylinkicon,
      },
      {
        subtitle: "Data cap:",
        title: "Unlimited",
        icon: centurylinkicon,
      },
      {
        subtitle: "Contract:",
        title: "N/A",
        icon: centurylinkicon,
      },
    ],

    tableData: [
      {
        head: [
          " Package",
          "Price* ",
          "Download speeds",
          "Upload speeds",
          "Details ",
        ],

        body: [
          {
            content: [
              "1.",
              "CenturyLink Fiber Internet 200 Mbps",
              "$30.00/mo.†",
              "Up to 200 Mbps",
              "Up to 200 Mbps",
            ],
            linkPath: "# ",
          },
          {
            content: [
              "2.",
              "CenturyLink Fiber Gigabit",
              "$75.00/mo.†",
              "Up to 940 Mbps",
              "Up to 940 Mbps",
            ],
            linkPath: "# ",
          },
        ],
      },
    ],

    bottomDesc:
      "Data is as of time of post. Offers and availability may vary by location and are subject to change. * Speed may not be available in your area. Paperless billing required. Taxes and fees apply. Online ONLY. Free Modem. † Speed may not be available in your area. Maximum download/upload speed of up to 940 Mbps via a wired connection. Paperless billing required. Taxes and fees apply. Offer details. Offer includes professional installation at customer’s eligible location.",
  };

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };

  let packageTableData = [
    {
      head: [
        "Package",
        "Price",
        "Download Speeds Up To",
        "Upload Speeds Up To",
        "Connection type",
        "Details",
      ],

      body: [
        {
          content: [
            "1. ",
            "CenturyLink Fiber Internet 200 Mbps",
            "$30.00/mo.*",
            "Up to 200 Mbps",
            "Up to 200 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.  ",
            "CenturyLink Fiber Internet 500 Mbps",
            "$50.00/mo.*",
            "Up to 500 Mbps",
            "Up to 500 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3. ",
            "CenturyLink Fiber Gigabit",
            "$75.00/mo.*",
            "Up to 940 Mbps",
            "Up to 940 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Simply Unlimited Internet",
            "$55.00/mo.*",
            "Up to 100 Mbps",
            "Up to 10 Mbps",
            "DSL",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataBunles = [
    {
      head: [
        "Package",
        "Price",
        "Download Speeds Up To",
        "Upload Speeds Up To",
        "Phone plan",
        "Details",
      ],

      body: [
        {
          content: [
            "1. ",
            "Fiber Internet 200 Mbps + Simply Unlimited Home Phone",
            "$70.00/mo.*",
            "Up to 200 Mbps",
            "Up to 200 Mbps",
            "Unlimited nationwide calling",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.  ",
            "Fiber Internet 200 Mbps + Simply Unlimited Home Phone",
            "$90.00/mo.*",
            "Up to 500 Mbps",
            "Up to 500 Mbps",
            "Unlimited nationwide calling",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3. ",
            "Fiber Gigabit + Simply Unlimited Home Phone",
            "$115.00/mo.*",
            "Up to 940 Mbps",
            "Up to 940 Mbps",
            "Unlimited nationwide calling",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Simply Unlimited Internet + Simply Unlimited Home Phone",
            "$95.00/mo.*",
            "Up to 100 Mbps",
            "Up to 10 Mbps",
            "Unlimited nationwide calling",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="centurylink-internet-review">
      {/* <SubNav links={centurylinkNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            CenturyLink Internet Review: Plans, Prices, Deals, And More
          </h2>
          <p className="sect-desc">
            We break down the value and costs of CenturyLink’s fiber internet
            and DSL internet plans.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4> Is CenturyLink internet good?</h4>
          <p>
            CenturyLink landed smack in the middle of our internet customer
            satisfaction survey—below competitors like Verizon Fios, AT&T, and
            Xfinity. <br />
            That said, we still think CenturyLink Fiber Internet is an excellent
            deal (if you can get it). With plans as low as $30 monthly,
            CenturyLink Fiber Internet is among the cheaper fiber options on the
            market. But if you’re stuck with CenturyLink DSL, you’ll have much
            slower internet speeds for $50 monthly.
          </p>
          <h4>CenturyLink pros and cons</h4>
          <br />
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
                  <td> Affordable fiber internet plan</td>
                  <td> Inconsistent DSL internet speeds</td>
                </tr>
                <tr>
                  <td>Fast upload and download speeds with fiber internet </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>Straightforward pricing </td>
                  <td> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Find out if CenturyLink is available in your area"}
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
          <Link href={"#"}> CenturyLink internet plans </Link>
          <Link href={"#"}> CenturyLink internet and phone bundles </Link>
          <Link href={"#"}> deals</Link>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={dotted} alt="dotted" />
          <h4>CenturyLink internet deals</h4>
          <p>
            CenturyLink often offers new-customer incentives like a $100 reward
            card. Keep an eye out for the current promotion when you’re signing
            up. <br />
            And if you need help paying for internet, the Affordable
            Connectivity Program can help you save $30 monthly off your internet
            bill. Check out our free and low-income internet guide to learn
            more.
          </p>
        </div>
      </div>

      <div className="section internet-packages">
        <div className="head">
          <h2 className="sect-heading">
            CenturyLink <span> internet plans and pricing </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data effective as of publish date. Pricing and speeds are subject to
          change. Not all offers available in all areas. <br />
          * Speed may not be available in your area. Paperless billing required.
          Taxes and fees apply. Online ONLY. Free Modem. <br />
          † Speed may not be available in your area. Maximum download/upload
          speed of up to 940 Mbps via a wired connection. Paperless billing
          required. Taxes and fees apply. Offer details. Offer includes
          professional installation at customer’s eligible location. <br />‡
          Paperless billing or prepaid required. Additional taxes, fees, and
          surcharges apply. Get the fastest Internet speed available at your
          location (max speed is up to 100 Mbps.)
        </p>
        <div className="package-table-container channels">
          <h4>CenturyLink Fiber Internet</h4>
          <p className="after-heading">
            If it’s available in your area, we recommend CenturyLink Fiber
            Internet. Fiber internet technology gives you a more reliable
            connection and faster upload and download speeds than cable or DSL
            internet.
            <br />
            On top of that high performance, these plans are among the cheapest.
            Check out how CenturyLink Fiber Internet’s starting plan compares to
            the competition’s:
          </p>
          <br />
          <ul>
            <li>CenturyLink: 200 Mbps for $30.00/mo.</li>
            <li>AT&T: 100 Mbps for $55.00/mo.</li>
            <li>Spectrum: 300 Mbps for $49.99/mo.</li>
            <li>Verizon Fios: 300 Mbps for $49.99/mo.</li>
            <li>Xfinity: 75 Mbps for $24.99/mo.</li>
          </ul>
          <br />
          <p>
            Plus, every CenturyLink Fiber Internet plan includes your fiber
            gateway—equipment that Xfinity charges $14 monthly for. And all
            CenturyLink plans come without annual contracts, so you won’t face
            early termination charges for canceling your internet service.{" "}
            <br />
            We recommend most folks go for CenturyLink’s 200 Mbps plan, a good
            internet speed for day-to-day needs. That’s plenty to scroll through
            social media and stream TV. But if your family streams multiple
            shows simultaneously, consider upgrading to the Gigabit plan
            instead. <br />
            If you’re in or near a major city with CenturyLink coverage, there’s
            a decent chance you can get fiber internet. But if you’re not? Then
            your only CenturyLink option will be the Simply Unlimited Internet
            DSL plan.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Simply Unlimited Internet</h4>
          <p className="after-heading">
            To the fiber internet-deprived: DSL can still be workable. With
            maximum download speeds of 100 Mbps, Simply Unlimited Internet is
            slower than fiber, and its upload speeds lag even farther behind. It
            still supports occasional Netflix sessions, but your video calls
            might get choppy. <br />
            We’re fans of Simply Unlimited Internet’s unlimited data and
            no-contract pricing. You won’t have to worry about expensive data
            overage fees or sudden, massive price hikes. <br />
            Like with most DSL plans, your CenturyLink DSL options will depend
            on the area-availability goblin. Simply Unlimited Internet comes
            with the fastest speed available at your address. So you might get a
            100 Mbps plan, or you could live in an area where CenturyLink
            guarantees only “up to 1.5 Mbps.” (I do.) And that’s unfortunate.{" "}
            <br />
            We’d recommend Simply Unlimited Internet only if your address gets a
            download speed of at least 40 Mbps. Your internet won’t be blazing
            fast, but you’ll be able to check your email or watch videos. <br />
            But if your address gets less than 40 Mbps from CenturyLink, you’ll
            probably have better luck with a competing internet provider.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>Pro tip:</h4>
          <p className="after-heading">
            You’ll need a modem and Wi-Fi router for Simply Unlimited Internet.
            CenturyLink offers a modem/router combo for $15 per month or you can
            buy it outright for $200. <br />
            You can also purchase third-party equipment, but that requires some
            homework and might cost more than CenturyLink’s $200 modem/router.
            Check out our CenturyLink-compatible modem guide to learn more about
            your hardware options.
          </p>
        </div>
      </div>

      <CTA
        heading={"What internet providers are near me?"}
        desc={
          "Enter your zip code below to check out your fiber, cable, and DSL internet options."
        }
      />

      <div className="section internet-bundles">
        <div className="head">
          <h2 className="sect-heading">
            CenturyLink <span> internet and phone bundles</span>
          </h2>
          <p className="sect-desc">
            Everybody loves a bundle, especially when it means a discount.
            CenturyLink doesn’t offer TV service, so your only bundle option
            will be CenturyLink phone service. And since CenturyLink no longer
            offers standalone phone service, you won’t get a bundle discount for
            phone service. <br />
            CenturyLink offers three home phone plans: Connected Voice Basic
            Plan ($30 monthly) and Professional Plan ($40 monthly) are for fiber
            internet customers, while Simply Unlimited Home Phone ($50.00
            monthly) includes features like call waiting and caller ID for DSL
            customers. You’ll also pay a one-time $35.00 activation fee to turn
            on your home phone service with CenturyLink. <br />
            Check out our CenturyLink bundle and CenturyLink phone guides to
            learn more about the ISP’s offerings.
          </p>
        </div>
        <PackageTable item={packageTableDataBunles} />
        <br />
        <p className="below-table">
          Data effective as of publish date. Pricing and speeds are subject to
          change. Not all offers available in all areas. <br />
          * Speed may not be available in your area. Paperless billing required.
          Taxes and fees apply. Online ONLY. Free Modem. <br />
          † Speed may not be available in your area. Maximum download/upload
          speed of up to 940 Mbps via a wired connection. Paperless billing
          required. Taxes and fees apply. Offer details. Offer includes
          professional installation at customer’s eligible location. <br />
          ‡ Paperless billing or prepaid required. Additional taxes, fees, and
          surcharges apply. Get the fastest Internet speed available at your
          location (max speed is up to 100 Mbps.)** Taxes and fees apply. Rate
          excludes CTL Fees not to exceed $4.00/mo/line. Offer Details. <br />
        </p>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is centuryLink internet worth it?</span>
          </h2>
          <p className="sect-desc">
            We love CenturyLink’s shockingly straightforward pricing on its
            fiber internet and Simply Unlimited Internet plans. <br />
            But your CenturyLink experience will heavily depend on where you
            live. CenturyLink Fiber Internet is a great fiber internet option,
            but if your neighborhood only gets Simply Unlimited Internet, it’ll
            be a coin toss whether you’ll get 1 Mbps or 100 Mbps internet
            speeds. <br />
            Fortunately, no contracts means you can give CenturyLink a shot
            without getting trapped by a lengthy contract and early termination
            fees.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> view centuryLink internet plans </Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> CenturyLink internet </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How do I change my
                CenturyLink Wi-Fi password?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Here’s how to change your Wi-Fi password if you have a newer
                  CenturyLink modem and it’s already connected to a device:
                </p>
                <br />
                <ul>
                  <li>Open a browser window and go to http://192.168.0.1.</li>
                  <li>
                    Log in with the Admin username and password. You can find
                    the default information on the modem sticker. If you used a
                    custom username and passphrase, log in with those.
                  </li>
                  <li>
                    Under “Wireless Setup,” choose “2.4 GHz” (see upper
                    left-hand corner).
                  </li>
                  <li>
                    Under “Wireless Security,” choose the SSID you want to edit
                    from the drop-down menu.
                  </li>
                  <li>
                    In the second drop-down menu (“Security Type”), select
                    desired security type (it’ll more than likely involve WPA2).
                  </li>
                  <li>
                    In the third drop-down menu (“Encryption Type”), select
                    “both.”
                  </li>
                  <li>
                    Under “Enter security key/passphrase,” choose the default
                    passphrase or enter your own. Custom passphrases must have
                    8–63 characters. You may use any letter from A–Z, any number
                    from 0–9, and blank spaces.
                  </li>
                  <li>Hit “Apply.”</li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" How do I change my CenturyLink Wi-Fi password?"}
            cssClass={"faq-content"}
          >
            <p>
              Here’s how to change your Wi-Fi password if you have a newer
              CenturyLink modem and it’s already connected to a device:
            </p>
            <br />
            <ul>
              <li>Open a browser window and go to http://192.168.0.1.</li>
              <li>
                Log in with the Admin username and password. You can find the
                default information on the modem sticker. If you used a custom
                username and passphrase, log in with those.
              </li>
              <li>
                Under “Wireless Setup,” choose “2.4 GHz” (see upper left-hand
                corner).
              </li>
              <li>
                Under “Wireless Security,” choose the SSID you want to edit from
                the drop-down menu.
              </li>
              <li>
                In the second drop-down menu (“Security Type”), select desired
                security type (it’ll more than likely involve WPA2).
              </li>
              <li>
                In the third drop-down menu (“Encryption Type”), select “both.”
              </li>
              <li>
                Under “Enter security key/passphrase,” choose the default
                passphrase or enter your own. Custom passphrases must have 8–63
                characters. You may use any letter from A–Z, any number from
                0–9, and blank spaces.
              </li>
              <li>Hit “Apply.”</li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How do I cancel CenturyLink
                internet?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  To cancel your CenturyLink internet or home phone service,
                  call 1-800-244-1111 between 8:00 a.m. and 6:00 p.m.,
                  Monday–Friday.
                  <br />
                  Expect a CenturyLink representative to try to keep your
                  business by offering alternatives to cancellation. Sometimes
                  those customer-retention deals are pretty decent, so there’s
                  no harm in listening. But if you’re sure you want to cancel,
                  stay strong. No means no.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" How do I cancel CenturyLink internet?"}
            cssClass={"faq-content"}
          >
            <p>
              To cancel your CenturyLink internet or home phone service, call
              1-800-244-1111 between 8:00 a.m. and 6:00 p.m., Monday–Friday.
              <br />
              Expect a CenturyLink representative to try to keep your business
              by offering alternatives to cancellation. Sometimes those
              customer-retention deals are pretty decent, so there’s no harm in
              listening. But if you’re sure you want to cancel, stay strong. No
              means no.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What modems are compatible
                with CenturyLink?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  At the moment, CenturyLink supports 31 different modems from
                  manufacturers like Actiontec, Adtran, Calix, Cisco, D-Link,
                  Technicolor, Westrell, and ZyXEL. We’ve narrowed down the list
                  with our guide to the best CenturyLink-compatible modems.
                  <br />
                  If you’d like modem help from a real human, call CenturyLink
                  at 1-877-837-5738 or chat with tech support.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" What modems are compatible with CenturyLink?"}
            cssClass={"faq-content"}
          >
            <p>
              At the moment, CenturyLink supports 31 different modems from
              manufacturers like Actiontec, Adtran, Calix, Cisco, D-Link,
              Technicolor, Westrell, and ZyXEL. We’ve narrowed down the list
              with our guide to the best CenturyLink-compatible modems.
              <br />
              If you’d like modem help from a real human, call CenturyLink at
              1-877-837-5738 or chat with tech support.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Can I use my own router
                with CenturyLink?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Yes, you may use your own router with CenturyLink service. If
                  you don’t already have one, and you also need a DSL modem, we
                  recommend some great modem-router combos in our guide to the
                  best CenturyLink-compatible modems.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Can I use my own router with CenturyLink?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, you may use your own router with CenturyLink service. If you
              don’t already have one, and you also need a DSL modem, we
              recommend some great modem-router combos in our guide to the best
              CenturyLink-compatible modems.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does CenturyLink have a
                data cap?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  CenturyLink fiber and DSL internet plans have no data cap.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" Does CenturyLink have a data cap?"}
            cssClass={"faq-content"}
          >
            <p>CenturyLink fiber and DSL internet plans have no data cap.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> How do I set up my
                CenturyLink voicemail?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  To set up your CenturyLink voicemail, use the following steps:
                </p>
                <br />
                <ul>
                  <li>
                    If you have your welcome letter, dial the retrieval number.
                  </li>
                  <li>
                    If you don’t have your welcome letter, you can find it by
                    dialing 1-800-669-7676. Alternatively, press *98 from your
                    home phone to continue setup.
                  </li>
                  <li>Follow voice prompts.</li>
                  <li>Create a 4–15 digit password.</li>
                  <li>
                    Record your name so that callers know they’ve reached the
                    right person.
                  </li>
                  <li>
                    Choose from two pre-recorded voicemail greetings or record a
                    personalized message.
                  </li>
                  <li>
                    You’re done. Now sit by your phone and wait to see if anyone
                    loves you.
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" How do I set up my CenturyLink voicemail?"}
            cssClass={"faq-content"}
          >
            <p>
              To set up your CenturyLink voicemail, use the following steps:
            </p>
            <br />
            <ul>
              <li>
                If you have your welcome letter, dial the retrieval number.
              </li>
              <li>
                If you don’t have your welcome letter, you can find it by
                dialing 1-800-669-7676. Alternatively, press *98 from your home
                phone to continue setup.
              </li>
              <li>Follow voice prompts.</li>
              <li>Create a 4–15 digit password.</li>
              <li>
                Record your name so that callers know they’ve reached the right
                person.
              </li>
              <li>
                Choose from two pre-recorded voicemail greetings or record a
                personalized message.
              </li>
              <li>
                You’re done. Now sit by your phone and wait to see if anyone
                loves you.
              </li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> How much does it cost to
                install CenturyLink internet?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  CenturyLink offers standard installation for $15 and
                  professional installation for $99. The standard installation
                  includes a welcome kit with DIY instructions, cords, and
                  equipment.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={" How much does it cost to install CenturyLink internet?"}
            cssClass={"faq-content"}
          >
            <p>
              CenturyLink offers standard installation for $15 and professional
              installation for $99. The standard installation includes a welcome
              kit with DIY instructions, cords, and equipment.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(7)}>
                <span>{faq === 7 ? "-" : "+"}</span> How much is CenturyLink
                unlimited internet?
              </h3>

              <div className={`faq-content ${faq === 7 ? "show" : ""}`}>
                <p>
                  CenturyLink costs $50 per month for unlimited DSL internet and
                  $30 to $75 per month for unlimited fiber internet. CenturyLink
                  doesn’t have data caps, so every plan has unlimited data.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"8"}
            title={" How much is CenturyLink unlimited internet?"}
            cssClass={"faq-content"}
          >
            <p>
              CenturyLink costs $50 per month for unlimited DSL internet and $30
              to $75 per month for unlimited fiber internet. CenturyLink doesn’t
              have data caps, so every plan has unlimited data.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(8)}>
                <span>{faq === 8 ? "-" : "+"}</span> Is CenturyLink down?
              </h3>

              <div className={`faq-content ${faq === 8 ? "show" : ""}`}>
                <p>
                  You can use CenturyLink’s outage tool on its support webpage
                  and mobile app to see if there’s an outage in your area.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"9"}
            title={" Is CenturyLink down?"}
            cssClass={"faq-content"}
          >
            <p>
              You can use CenturyLink’s outage tool on its support webpage and
              mobile app to see if there’s an outage in your area.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(8)}>
                <span>{faq === 8 ? "-" : "+"}</span> What is CenturyLink?
              </h3>

              <div className={`faq-content ${faq === 8 ? "show" : ""}`}>
                <p>
                  CenturyLink is an internet provider based in the Pacific
                  Northwest. It offers phone and internet service throughout 16
                  states in the US.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"10"}
            title={" What is CenturyLink?"}
            cssClass={"faq-content"}
          >
            <p>
              CenturyLink is an internet provider based in the Pacific
              Northwest. It offers phone and internet service throughout 16
              states in the US.
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
            We broke down the fine print for every CenturyLink DSL and fiber
            internet plan, rating each in areas including value, internet
            performance, and cost. We also used our annual internet customer
            satisfaction survey to see how real CenturyLink customers felt about
            the ISP. For more information on our methodology, check out our
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
            page.
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Internet Providers</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Xfinity vs. CenturyLink</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>How to Install CenturyLink</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="divider">
        <p> See also: Overview | Bundles | Phone | Customer Service</p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default CenturyLinkInternetReview;
