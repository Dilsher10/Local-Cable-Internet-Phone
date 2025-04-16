// import React, { useState } from "react";
import "./cox-review.scss";
// import SubNav from "../components/sub-nav/SubNav";
// import { coxNavLinks } from "../assets/data/navLinks/coxNavLinks";
import InnerPagesHeroTwo from "../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import coxreviewboy from "../assets/images/coxreviewboy.png";
import star from "../assets/images/star.png";
import coxmark from "../assets/images/coxmark.png";
import coxlogo from "../assets/images/coxlogo.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../assets/images/quotations.svg";
import dotted from "../assets/images/dotted.png";
import network from "../assets/images/network.png";
import coxdvr from "../assets/images/coxdvr.png";
import Link from "next/link";
import CTA from "../components/cta-section/CTA";
import PackageTable from "../components/package-table/PackageTable";
import Searchbar from "../components/searchbar/Searchbar";
// import Newsletter from "../components/newsletter/Newsletter";
import Image from "next/image";
import Accordion from "../components/accordion/Accordion";

export const metadata = {
  title: "Cox Communications Review"
};

const CoxReview = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: coxlogo,
      rating: "(3.95/5)",
      starImg: star,
      desc: "Affordable internet plans",
      buttonText: "compare plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: coxreviewboy,

    cardsStrip: [
      {
        subtitle: "Internet speeds:",
        title: "150 Mbps–1,000 Mbps",
        icon: coxmark,
      },
      {
        subtitle: "Channel count:",
        title: "75–250+",
        icon: coxmark,
      },
      {
        subtitle: "Price:",
        title: "Starting at $49.99",
        icon: coxmark,
      },
      {
        subtitle: "Data cap:",
        title: "1 TB",
        icon: coxmark,
      },
    ],

    tableData: [
      {
        head: [" ", " ", " ", " ", " ", " "],

        body: [
          {
            content: [" ", " ", " ", " ", " ", " "],
            linkPath: "# ",
          },
        ],
      },
    ],

    bottomDesc:
      "*For 12 mos. w/ 1-yr. term agreement. Data is as of time of post. Offers and availability may vary by location and are subject to change.",
  };
  let packageTableData = [
    {
      head: [
        "Package",
        "Price",
        "Download speeds up to",
        "Upload speeds",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Go Fast (no contract)",
            "$49.99/mo. *",
            "100 Mbps",
            "5 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Go Faster",
            "$69.99/mo.*",
            "250 Mbps",
            "Up to 10 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Go Even Faster",
            "$89.99/mo.†",
            "500 Mbps",
            "10 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Go Super Fast",
            "$109.99/mo.‡",
            "1,000 Mbps",
            "35 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "Go Beyond Fast",
            "$149.99/mo.*",
            "2,000 Mbps",
            "100 Mbps",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataTvPlansAndPrice = [
    {
      head: ["Package", "Price", "Channel count", "Details"],

      body: [
        {
          content: ["1.", "Contour TV Starter", "$56.00/mo.", "75+"],
          linkPath: "#",
        },
        {
          content: ["2.", "Contour TV Preferred", "$99.00/mo.", "170+"],
          linkPath: "#",
        },
        {
          content: ["3.", "Contour TV Ultimate", "$139.00/mo.", "250+"],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataBundles = [
    {
      head: [
        "Package",
        "Price",
        "Download speeds up to",
        "Channel count",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Go Faster + Contour TV Preferred",
            "$168.99/mo.*",
            "250 Mbps",
            "170+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Go Even Faster + Contour TV Preferred",
            "$188.99/mo.**",
            "500 Mbps",
            "170+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Go Super Fast + Contour TV Preferred",
            "$198.99/mo.†",
            "1,000 Mbps",
            "170+",
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
    <div className="cox-review">
      {/* <SubNav links={coxNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Cox Communications Review 2024: Cable TV And Internet Plans
          </h2>
          <p className="sect-desc">
            Cox piles on the bundles, but cheap, fast internet plans are its
            strong suit. We researched the best Cox plans so you don't have to.
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
            Cox cable internet and TV service are good for some folks. Internet
            is Cox’s strongest area of service: its higher cable tiers are fast
            but relatively inexpensive.
            <br />
            <span className="link">
              <Link href={"#"}>Cox internet</Link>
            </span>{" "}
            is also the only Cox service that we’d recommend as a standalone
            product, since its cable TV, home phone, and home security services
            are just average. At best, Cox’s bundles are more convenient than
            anything since they’re quite pricy compared to the competition.
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
                  <td>Affordable internet service</td>
                  <td>Average TV, phone, and home security services</td>
                </tr>
                <tr>
                  <td>Excellent equipment</td>
                  <td>12–24-month service contracts depending on plan</td>
                </tr>
              </tbody>
            </table>
          </div>
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
          <Link href={"#"}>Deals and promotions </Link>
          <Link href={"#"}>Internet plans</Link>
          <Link href={"#"}>TV plans</Link>
          <Link href={"#"}>Bundles</Link>
          <Link href={"#"}>The competition</Link>
          <Link href={"#"}>Equipment</Link>
        </div>
      </div>

      <CTA
        heading={"Find out if Cox is available in your area"}
        desc={"Enter your zip code below to find out!"}
      />

      <div className="section cox-blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"></p>
        </div>
        <div className="package-table-container channels">
          <Image src={dotted} alt="mark" className="mark" />
          <h4>Cox cable and internet deals and promotions</h4>
          <br />
          <p>
            Cox usually offers discounts for seniors and low-income families as
            well as bundle discounts. For the most up-to-date promotions and
            deals, visit{" "}
            <span className="link">
              <Link href={"#"}>our Cox Deals and Promotions</Link>
            </span>{" "}
            page.
          </p>
        </div>
      </div>

      <div className="section cox-internet-plans-and-prices">
        <div className="head">
          <h2 className="sect-heading">
            Cox <span> internet plans and prices </span>
          </h2>
          <p className="sect-desc">
            If you choose to go with Cox, we say stick with an internet-only
            plan. Cox internet plans are reasonably priced for the download
            speeds you get.
            <br />
            If all you need is basic internet service, Cox’s Go Fast plan has
            speeds that would be plenty for most households. And it’s the only
            Cox plan that comes with internet equipment included, which is
            normally an extra $14 monthly.
            <br />
            We’ll say this, though: competitors like Xfinity and Spectrum offer
            similar plans that are often cheaper than Cox internet, so sniff
            around a bit before you commit to Cox.
            <br />
            Interested in Cox internet? For more details, check out our full
            review of Cox’s internet packages.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          PackagePriceDownload speeds up toUpload speedsGo Fast (no
          contract)$49.99/mo. *100 Mbps5 MbpsVIEW PLANGo Faster$69.99/mo. *250
          MbpsUp to 10 MbpsVIEW PLANGo Even Faster$89.99/mo. †500 Mbps10
          MbpsVIEW PLANGo Super Fast$109.99/mo. ‡1,000 Mbps35 MbpsVIEW PLANGo
          Beyond Fast$149.99/mo. *2,000 Mbps100 MbpsVIEW PLAN
          <br />
          *No annual contract or cancellation fees. †For 12 mos. No annual
          contract. ‡For 12 mos. w/ 1-yr. term agreement. Data effective as of
          post date. Offers and availability may vary by location and are
          subject to change.
        </p>
      </div>

      <div className="section cox-tv-plans-and-prices">
        <div className="head">
          <h2 className="sect-heading">
            Cox <span> TV plans and prices </span>
          </h2>
          <p className="sect-desc">
            TBH, Cox cable TV plans aren’t that great unless you splurge for the
            Contour TV Ultimate plan. High prices and mediocre channel lineups
            aren’t what most folks want from their TV service, amirite?
            <br />
            Instead of getting a Cox TV plan, we recommend pairing a Cox
            internet plan with a live TV streaming service like YouTube TV or
            bundling your TV and internet with another cable provider like
            Spectrum.
            <br />
            Glutton for TV punishment? Check out our complete review of Cox TV
            service.
          </p>
        </div>
        <PackageTable item={packageTableDataTvPlansAndPrice} />
        <br />
        <p className="below-table">
          ‡ 1 Year Term Agreement. Data effective as of post date. Offers and
          availability may vary by location and are subject to change.
        </p>
        <div className="package-table-container channels">
          <Image src={network} alt="helpsupportgirl" className="mark" />
          <h4>Cox TV channel lineups</h4>
          <br />
          <p>
            Like we said, we’re not huge fans of Cox’s channel lineups. Hundreds
            of channels at your fingertips sound great in theory, but the devil
            is always in the details.
            <br />
            Cox channel lineups include a lot of filler and very little killer
            unless you’re a fan of music and shopping channels. Again, stick
            with a standalone internet plan if you go with Cox and save yourself
            from all those midnight shopping sprees on QVC.
            <br />
            Morbidly curious? How bad can Cox channel lineups be? We got the
            deets on our comprehensive Cox channel lineup page.
          </p>
        </div>
      </div>

      <CTA
        heading={"Cox not cutting it?"}
        desc={
          "Enter your zip code below to see other TV and internet providers in your area."
        }
      />

      <div className="section cox-internet-and-tv-bundles">
        <div className="head">
          <h2 className="sect-heading">
            Cox <span> internet and TV bundles </span>
          </h2>
          <p className="sect-desc">
            Cox offers a ton of internet and TV bundles across all of its
            service areas. We like options just like the next guy, but that’s
            about the only thing we like about Cox bundles. Sure, Cox offers a
            bundle discount on most plans. But Cox internet and TV bundles are
            expensive, and you can easily get a better bundle deal from
            competitors like Xfinity and Spectrum.
            <br />
            Cox bundles your only option? Learn more about Cox’s internet and TV
            bundling combos.
          </p>
        </div>
        <PackageTable item={packageTableDataBundles} />
        <br />
        <p className="below-table">
          *No annual contract or cancellation fees. **for 12 mos. No annual
          contract. † for 12 mos. w/ 1-yr. term agreement. Data effective as of
          post date. Offers and availability may vary by location and are
          subject to change.
        </p>
      </div>

      <div className="section cox-competition">
        <div className="head">
          <h2 className="sect-heading">
            Cox <span> vs. the competition </span>
          </h2>
          <p className="sect-desc">
            Cox has a lot of competitors out there. Depending on where you live,
            your other TV and internet provider options may include AT&T,
            DIRECTV, DISH, CenturyLink, Spectrum, Verizon Fios, and Xfinity.
            <br />
            One place that Cox stands out is its low starting prices for
            internet. Cox’s low-priced Go Fast plan is an affordable option
            that’s perfect if you don’t have a lot of folks at home fighting for
            Wi-Fi. But you should also consider other budget-friendly internet
            service providers like Verizon Fios and Xfinity.
            <br />
            To learn more about how Cox stands up against the competition, check
            out our full reviews.
          </p>
        </div>
        <div className="two-column">
          <div>
            <h4>Cox TV versus articles</h4>
            <br />
            <ul>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>Cox vs. DIRECTV</Link>
                </span>
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>Cox vs. DISH TV</Link>
                </span>
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>Cox vs. Xfinity TV</Link>
                </span>
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>Cox vs. DIRECTV STREAM</Link>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4>Cox internet versus articles</h4>
            <br />
            <ul>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>Cox vs. AT&T Internet</Link>
                </span>
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>Cox vs. Spectrum Internet</Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section cox-internet-equipment">
        <div className="head">
          <h2 className="sect-heading">
            Cox <span> internet and TV equipment </span>
          </h2>
          <p className="sect-desc">
            We’ll say this about Cox: the cable provider offers pretty baller
            equipment. Just know that its suped-up tech comes at a price. It’s
            Cox—what did you expect?
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Cox Contour DVR/receiver</h4>
          <br />
          <p>The Cox Contour DVR service is available in four variations:</p>
          <ul>
            <li>
              · Starter DVR service: record 1 channel, 50 hrs. storage, free for
              12 mos. ($5.00/mo. after)
            </li>
            <li>
              · Essential DVR service: record 2 channels, 250 hrs. storage,
              $10.00/mo. for 12 mos. ($13.50/mo. after)
            </li>
            <li>
              · Preferred DVR service: record 6 channels, 250 hrs. storage,
              $20.00/mo.
            </li>
            <li>
              · Ultimate DVR service: record 24 channels, 1,000 hrs. storage,
              $30.00/mo.
            </li>
          </ul>
          <p>
            We named the Contour 24 DVR (with Ultimate DVR service) one of our
            best DVRs. All Cox DVRs include installed streaming apps, like
            Netflix, Amazon Prime Video, Pandora, YouTube, and Tubi.
            <br />
            But if you really love DVRs, go for DISH Network or DIRECTV, which
            both offer more storage at a better price.
          </p>
          <br />
          <Image src={coxdvr} alt="coxdvr" />
        </div>
        <div className="package-table-container channels">
          <h4>Cox Contour Stream Player</h4>
          <br />
          <p>
            If you’re looking to move into the world of TV streaming, Cox now
            has its own TV streaming device called the Cox Contour Stream Player
            (pictured above on the left).
            <br />
            The Cox Contour Stream Player features a bunch of preloaded
            on-demand streaming apps, such as HBO Max and Amazon Prime Video,
            which you subscribe to separately.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Cox Panoramic WiFi modem/router</h4>
          <br />
          <p>
            You can choose to use your own modem/router, but Cox’s Panoramic
            WiFi Gateway is very good for company-supplied gear—though you’ll
            have to pay a $14 monthly rental fee.
            <br />
            On the other hand, Cox will only sell—not rent—Panoramic WiFi Pods.
            These devices will run you $129.99 a pop, and you may need more than
            one to create a Wi-Fi mesh across your home.
            <br />
            Like Eero and other mesh networks, Panoramic WiFi Pods plug into A/C
            wall sockets to equalize coverage over a larger household area,
            eliminating dead spots.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Cox internet and TV worth it? </span>
          </h2>
          <p className="sect-desc">
            Internet is the only Cox service we’d recommend on its own, but the
            bundles offer convenient ways to build upon it if you want a
            discount. Even if Cox is the only provider in your area, you should
            be able to secure a fast internet hookup or bundle that won’t cause
            you to rage against the tele-monopoly. There are worse companies to
            work with (we’ve reviewed ‘em, trust us).
            <br />
            See if Cox is available in your hometown by entering your zip code
            below.
          </p>
        </div>
        <Searchbar />
      </div>

      <div className="section cox-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Cox cable and internet </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Does Cox offer senior
                discounts?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  While Cox doesn’t offer any senior discounts, the FCC offers
                  $30 per month off internet for low-income households,
                  including those on Medicaid, Federal Public Housing
                  Assistance, and Supplemental Security Income. Read more about
                  the Affordable Connectivity Program in our guide to low-income
                  internet.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"Does Cox offer senior discounts?"}
            cssClass={"faq-content"}
          >
            <p>
              While Cox doesn’t offer any senior discounts, the FCC offers $30
              per month off internet for low-income households, including those
              on Medicaid, Federal Public Housing Assistance, and Supplemental
              Security Income. Read more about the Affordable Connectivity
              Program in our guide to low-income internet.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How do I order Cox
                internet?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Once you determine the Cox residential internet plan that best
                  suits your needs, you purchase a few different ways.
                  <br />
                  As you’re shopping for internet plans on the Cox site, a chat
                  window will pop up offering different types of help. One of
                  the options you can select is specifically for adding new
                  services. If you’re making a change to a current service, you
                  can type a specific request in the chat window to start your
                  order.
                  <br />
                  If you would prefer to speak to a customer service sales
                  representative, call +1-844-573-0474. If you prefer to place
                  an order in person, find out if there’s a Cox store in your
                  area and you can discuss options and start service at one of
                  their locations.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"How do I order Cox internet?"}
            cssClass={"faq-content"}
          >
            <p>
              Once you determine the Cox residential internet plan that best
              suits your needs, you purchase a few different ways.
              <br />
              As you’re shopping for internet plans on the Cox site, a chat
              window will pop up offering different types of help. One of the
              options you can select is specifically for adding new services. If
              you’re making a change to a current service, you can type a
              specific request in the chat window to start your order.
              <br />
              If you would prefer to speak to a customer service sales
              representative, call +1-844-573-0474. If you prefer to place an
              order in person, find out if there’s a Cox store in your area and
              you can discuss options and start service at one of their
              locations.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How do I get a better deal
                with Cox?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Once you’ve defined your service needs—and what kind of budget
                  you have to spend—you can try to negotiate a lower bill with a
                  Cox customer service representative.
                  <br />
                  Whether you’re calling via phone to discuss your bill or
                  popping into a Cox store, be prepared by having a copy of your
                  bill handy.
                  <br />
                  If you’re going to quote offers from other competitors, it’s
                  good to have those on hand, too. Inquire about current deals
                  and promotions and how those may apply to your plan. Find out
                  if your history of on-time payments can work in your favor.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"How do I get a better deal with Cox?"}
            cssClass={"faq-content"}
          >
            <p>
              Once you’ve defined your service needs—and what kind of budget you
              have to spend—you can try to negotiate a lower bill with a Cox
              customer service representative.
              <br />
              Whether you’re calling via phone to discuss your bill or popping
              into a Cox store, be prepared by having a copy of your bill handy.
              <br />
              If you’re going to quote offers from other competitors, it’s good
              to have those on hand, too. Inquire about current deals and
              promotions and how those may apply to your plan. Find out if your
              history of on-time payments can work in your favor.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Can I pay my Cox bill over
                the phone?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Call +1-800-234-3993 to make a payment. If you are calling
                  outside of business hours or don’t want to speak to a customer
                  service representative, the automated system can take you
                  through the payment process. If it is during business hours,
                  the prompts will help you speak with an agent.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={"Can I pay my Cox bill over the phone?"}
            cssClass={"faq-content"}
          >
            <p>
              Call +1-800-234-3993 to make a payment. If you are calling outside
              of business hours or don’t want to speak to a customer service
              representative, the automated system can take you through the
              payment process. If it is during business hours, the prompts will
              help you speak with an agent.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>How can I watch TV on my
                mobile device?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Watch TV on the go with the Cox Contour App. Download the app
                  for Apple, android, or your PC/Mac to take your favorite shows
                  with you wherever you go. Once you are a Cox subscriber, you
                  can log in to the app and watch TV channels based on the Cox
                  TV package you selected.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"How can I watch TV on my mobile device?"}
            cssClass={"faq-content"}
          >
            <p>
              Watch TV on the go with the Cox Contour App. Download the app for
              Apple, android, or your PC/Mac to take your favorite shows with
              you wherever you go. Once you are a Cox subscriber, you can log in
              to the app and watch TV channels based on the Cox TV package you
              selected.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>Can I customize channels in
                my Cox package?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  Watch TV on the go with the Cox Contour App. Download the app
                  for Apple, android, or your PC/Mac to take your favorite shows
                  with you wherever you go. Once you are a Cox subscriber, you
                  can log in to the app and watch TV channels based on the Cox
                  TV package you selected.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"Can I customize channels in my Cox package?"}
            cssClass={"faq-content"}
          >
            <p>
              Watch TV on the go with the Cox Contour App. Download the app for
              Apple, android, or your PC/Mac to take your favorite shows with
              you wherever you go. Once you are a Cox subscriber, you can log in
              to the app and watch TV channels based on the Cox TV package you
              selected.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(7)}>
                <span>{faq === 7 ? "-" : "+"}</span>Can I customize channels in
                my Cox package?
              </h3>

              <div className={`faq-content ${faq === 7 ? "show" : ""}`}>
                <p>
                  Cox TV plans and packages come with a specific channel lineup.
                  You can customize by adding more channels, additional
                  equipment, and a DVR. Take a look at our Cox Cable TV Plans:
                  Packages, Pricing, and More page to see which TV package fits
                  the needs and desires of your household. From there, you can
                  see if there are add-ons that will take your TV viewing
                  experience to the max.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={"Can I customize channels in my Cox package?"}
            cssClass={"faq-content"}
          >
            <p>
              Cox TV plans and packages come with a specific channel lineup. You
              can customize by adding more channels, additional equipment, and a
              DVR. Take a look at our Cox Cable TV Plans: Packages, Pricing, and
              More page to see which TV package fits the needs and desires of
              your household. From there, you can see if there are add-ons that
              will take your TV viewing experience to the max.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote cox-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Methodology:</h4>
          <p>
            We tested Cox internet and TV for nine months and then compared the
            cable provider to its major competitors. We dug deep on internet
            speeds, channel counts, equipment, and pricing, among other things.
            <br />
            To learn more about our research and testing, check out our
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
            page.
          </p>
          <h4>Still need some help deciding on Cox?</h4>

          <p>
            Read our full reviews on{" "}
            <span className="link">
              <Link href={"#"}> Cox TV, Cox internet</Link>
            </span>{" "}
            and{" "}
            <span className="link">
              <Link href={"#"}>Cox bundles</Link>
            </span>{" "}
            We also have the full{" "}
            <span className="link">
              <Link href={"#"}> Cox channel lineup here.</Link>
            </span>
          </p>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Cox TV | Cox Internet | Cox Bundles | Cox Channel Lineup |
          Cox Customer Service
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default CoxReview;
