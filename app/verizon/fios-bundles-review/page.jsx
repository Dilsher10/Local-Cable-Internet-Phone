// import React, { useState } from "react";
import "./verizon-fios-bundles-review.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { verizonNavLinks } from "../../assets/data/navLinks/verizonNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import coxreviewboy from "../../assets/images/coxreviewboy.png";
import star from "../../assets/images/star.png";
import verizoncheckicon from "../../assets/images/verizoncheckicon.png";
import verizonlogo from "../../assets/images/verizonlogo.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import dotted from "../../assets/images/dotted.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Verizon Fios Packages Review: Internet, TV, And Bundles"
};

const VerizonFiosBundlesReview = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: verizonlogo,
      rating: "(4.2/5)",
      starImg: star,
      desc: "$500 contract buyout when you switch",
      buttonText: "compare packages",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: coxreviewboy,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "verizon Fios",
        icon: verizoncheckicon,
      },
      {
        subtitle: "Price:",
        title: "$119.99–$208.99/mo.",
        icon: verizoncheckicon,
      },
      {
        subtitle: "Internet speed:",
        title: "300 Mbps up to 940 Mbps",
        icon: verizoncheckicon,
      },
      {
        subtitle: "Channel count:",
        title: "125–425+",
        icon: verizoncheckicon,
      },
    ],

    tableData: [
      {
        head: [
          "Top bundle packages",
          "Price*",
          "Download speeds up to ",
          "Channel count ",
          "Details ",
        ],

        body: [
          {
            content: [
              "1. ",
              "Fios Internet 1 Gig + The Most Fios TV",
              "$208.99/mo.",
              "940 Mbps",
              "425+",
            ],
            linkPath: "# ",
          },
          {
            content: [
              "2. ",
              "Internet 300 + Your Fios TV",
              "$124.99/mo.",
              "300 Mbps",
              "125+",
            ],
            linkPath: "# ",
          },
        ],
      },
    ],

    bottomDesc:
      "Data is as of time of post. Offers and availability may vary by location and are subject to change.",
  };
  let packageTableData = [
    {
      head: [
        "Package",
        "Price",
        "Download speeds up to",
        "channel count",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Fios Internet 1 Gig + The Most Fios TV",
            "$208.99/mo.",
            "940 Mbps",
            "425+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Fios Internet 1 Gig + More Fios TV",
            "$188.99/mo.",
            "940 Mbps",
            "300+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Fios Internet 500 + Your Fios TV",
            "$144.99/mo.",
            "500 Mbps",
            "125+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Fios Internet 300 + Your Fios TV",
            "$124.99/mo.",
            "300 Mbps",
            "125+",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="verizon-fios-bundles-review">
      {/* <SubNav links={verizonNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Verizon Fios Packages Review: Internet, TV, And Bundles
          </h2>
          <p className="sect-desc">
            There are plenty of Verizon Fios package combos to choose from, even
            if there are few discounts. See if bundling Verizon Fios TV and
            internet makes sense for you.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-verizon-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Are Verizon Fios packages and bundles good?</h4>
          <p>
            Verizon Fios packages and bundles are pretty good. You get a lot of
            TV channels and fast internet at a reasonable price.
            <br />
            With Verizon Fios, you can easily combine internet, TV, and phone
            services together. While Fios TV and phone are carried over the
            internet, you can still get TV even without buying Fios internet
            service (phone has to be bundled with internet, though).
            <br />
            Verizon Fios’s internet and TV packages come in several varieties
            that differ in download speed, channel count, and pricing—but
            there’s only one VoIP (Voice over Internet Protocol) landline phone
            plan. If you’re looking for a dazzling array of phone plans, check
            out Verizon Wireless.
          </p>

          <h4>Verizon Fios pros and cons</h4>
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
                  <td>Fast internet plans</td>
                  <td>Just one VoIP phone plan</td>
                </tr>
                <tr>
                  <td>Most TV channels of any provider</td>
                  <td>Limited fiber-optic availability</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Find out if Verizon bundles are available in your area"}
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
          <Link href={"#"}>Promotions and deals</Link>
          <Link href={"#"}>TV and internet packages</Link>
        </div>
      </div>

      <div className="section verizon-blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"></p>
        </div>
        <div className="package-table-container channels">
          <Image src={dotted} alt="mark" className="mark" />
          <h4>Verizon Fios promotions and deals</h4>
          <br />
          <p>
            Verizon does deals, deals, and more deals (especially during the
            holiday season). Check out our{" "}
            <span className="link">
              <Link href={"#"}>Verizon Fios Deals page </Link>
            </span>{" "}
            for the most current offers.{" "}
          </p>
        </div>
      </div>

      <div className="section verizon-internet-plans-and-prices">
        <div className="head">
          <h2 className="sect-heading">
            <span>Verizon Fios bundle</span> packages and prices
          </h2>
          <p className="sect-desc">
            There are currently only a few possible combinations between Verizon
            Fios’s internet and TV plans, but there are none we wouldn’t
            recommend. Each Verizon internet and TV bundle offers a decent
            amount of speed and channels. Most other providers have at least one
            clunker in the mix, but we don’t see one here. With whichever
            package, you’ll probably be satisfied. Verizon’s Fios Gigabit
            Connection + The Most Fios TV package is the “treat yourself”
            splurge deal with the fastest fiber internet speed Verizon offers,
            along with its top tier TV package. We like that it feels decadent
            but costs only $208.99 a month—not bad for the immense speed and
            viewing options.
            <br />
            But, for a more budget-friendly deal, Fios Gigabit Connection + More
            Fios TV isn’t a style-cramping compromise. It’s still just as fast
            at 940 Mbps of download speed, and the flexibility of the More Fios
            TV plan makes it easy to get the channels you really want.
            <br />
            Since Verizon Fios TV is internet-based, it requires an internet
            connection—though you can get Fios TV as a standalone service. The
            TV receiver would have access to internet data to operate, but you
            wouldn’t be able use it as a standard internet connection. But why
            wouldn’t you want internet service? Exactly.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change. See full disclaimer.
        </p>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} alt="mark" className="mark" />
          <h4>Verizon Fios vs. other internet and TV bundles</h4>
          <br />
          <p>
            We named Fios Internet 1 Gig + The Most Fios TV the best overall
            cable and internet deal because it has a reliable internet
            connection, included equipment, and Verizon’s top-notch customer
            service.
            <br />
            But if you’re feeling sour that Verizon Fios internet and TV bundles
            don’t come with discounts, keep your chin up. Verizon Fios has tons
            of competitors ready to make it rain savings.
            <br />
            Xfinity Preferred Pro+ Double Play is our best bundle for discounts,
            thanks to Xfinity’s $20-per-month savings when you package TV and
            internet. Add phone service, and you’ll get $40 off the total.
            Pretty sleek!
            <br />
            Optimum’s bundles cost about the same as Verizon Fios’s, with
            similar speeds and channel counts. And while Optimum’s sign-up
            promotions might entice you, Verizon Fios’s deals are pretty fancy
            too. Most importantly, Verizon Fios ranks higher in our TV customer
            satisfaction and internet customer satisfaction surveys.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take:{" "}
            <span> Are Verizon Fios packages and bundles worth it? </span>
          </h2>
          <p className="sect-desc">
            We think Verizon bundles are worth it for most folks who want live
            TV with their home internet service.
            <br />
            While you don’t receive any discounts for bundling Verizon Fios
            services, all the options are still relatively cheap for what you’re
            getting. The speeds are generous, as are the channel counts. So if
            you need more than just internet service, Verizon internet and TV
            bundles are a convenient deal.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>get a Verizon Fios package</Link>
        </div>
      </div>

      <CTA
        heading={"Wanna see other internet, TV, and bundle packages?"}
        desc={"Enter your zip code below to find out!"}
      />

      <div className="section verizon-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Verizon Fios packages </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Can I package Verizon Fios
                and Verizon Wireless services?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  While Verizon doesn’t offer any designated Fios bundles that
                  include wireless phone service, you can get $10 toward a phone
                  or tablet by combining your Verizon mobile plan with a Fios
                  Home Internet plan.
                  <br />
                  You can also combine a Verizon Unlimited wireless plan with
                  any Fios internet plan, or a Fios Gigabit Connection internet
                  plan with a shared wireless plan, and save $10 a month (with
                  the $10 toward a phone or tablet also included).
                  <br />
                  Or you can combine a Verizon Unlimited wireless plan with a
                  Fios Gigabit Connection and save $20 a month, plus still get
                  the $10 phone or tablet discount.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Can I package Verizon Fios and Verizon Wireless services?"}
            cssClass={"faq-content"}
          >
            <p>
              While Verizon doesn’t offer any designated Fios bundles that
              include wireless phone service, you can get $10 toward a phone or
              tablet by combining your Verizon mobile plan with a Fios Home
              Internet plan.
              <br />
              You can also combine a Verizon Unlimited wireless plan with any
              Fios internet plan, or a Fios Gigabit Connection internet plan
              with a shared wireless plan, and save $10 a month (with the $10
              toward a phone or tablet also included).
              <br />
              Or you can combine a Verizon Unlimited wireless plan with a Fios
              Gigabit Connection and save $20 a month, plus still get the $10
              phone or tablet discount.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does Verizon Fios offer
                senior discounts?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  While Verizon Fios doesn’t offer senior discounts on internet,
                  seniors who participate in the Supplemental Security Income
                  (SSI) program or Veterans Pension and Survivors Benefit can
                  save $30 monthly on internet with the Affordable Connectivity
                  Program.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does Verizon Fios offer senior discounts?"}
            cssClass={"faq-content"}
          >
            <p>
              While Verizon Fios doesn’t offer senior discounts on internet,
              seniors who participate in the Supplemental Security Income (SSI)
              program or Veterans Pension and Survivors Benefit can save $30
              monthly on internet with the Affordable Connectivity Program.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How much does Fios Triple
                Play really cost?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Verizon Fios’s internet, TV, and phone services run from
                  $144.99 to $224.99 per month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How much does Fios Triple Play really cost?"}
            cssClass={"faq-content"}
          >
            <p>
              Verizon Fios’s internet, TV, and phone services run from $144.99
              to $224.99 per month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does Verizon have deals for
                existing customers?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Verizon Fios offers TV and internet deals—plus some cool
                  perks—for existing customers. For example, you can get a $100
                  gift card when you refer a friend to Verizon Fios. To check
                  out Verizon’s latest deals, head to Verizon’s existing
                  customer deals page.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Does Verizon have deals for existing customers?"}
            cssClass={"faq-content"}
          >
            <p>
              Verizon Fios offers TV and internet deals—plus some cool perks—for
              existing customers. For example, you can get a $100 gift card when
              you refer a friend to Verizon Fios. To check out Verizon’s latest
              deals, head to Verizon’s existing customer deals page.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote verizon-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Methodology:</h4>
          <p>
            Our TV and internet experts compared Verizon Fios’s bundles to the
            competition by rating its bundles on value, channel count, and
            potential savings. We also used our annual{" "}
            <span className="link">
              <Link href={"/"}>internet customer satisfaction</Link>
            </span>{" "}
            and TV customer satisfaction surveys to see how real Verizon Fios
            customers felt about their provider.
            <br />
            To learn more about our research and testing, check out our{" "}
            <span className="link">
              <Link href={"/"}> How We Rank</Link>
            </span>{" "}
            page.
          </p>
          <h4>Related articles</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"/"}>Xfinity Bundles Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"/"}>Optimum Bundles Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"/"}>AT&T Bundles Review</Link>
              </span>
            </li>
          </ul>
          <h4>Disclaimers</h4>
          <p>
            *w/ Auto Pay + taxes & equip charges. General: For new eligible TV
            and/or Internet res. custs. Availability varies. Wired & wireless
            Internet speeds vary due to device limits, multiple users, network &
            other factors. See Verizon.com/yourspeed for more info. $15/mo.
            router and $99 setup charges & other taxes & terms may apply. Auto
            Pay (ACH or bank debit card only) & paper-free billing req’d. for
            Internet service. Subj. to credit approval & may require a deposit.
            Fios TV: $12/mo. STB charge may apply.
          </p>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Verizon Overview | Verizon TV | Verizon Channel lineups |
          Verizon Internet | Verizon Phone | Verizon Customer service
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default VerizonFiosBundlesReview;
