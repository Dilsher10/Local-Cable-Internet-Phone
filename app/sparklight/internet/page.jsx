// import React, { useState } from "react";
import "./spark-light-internet.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { sparklightNavLinks } from "../../assets/data/navLinks/sparklightNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import sparklightgirl from "../../assets/images/spark-light-internet.png";
import star from "../../assets/images/star.png";
import sparklighticon from "../../assets/images/sparklight-icon.png";
import sparklight from "../../assets/images/sparklight.png";
import dotted from "../../assets/images/dotted.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Sparklight Internet Review"
};

const SparkLightInternet = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: sparklight,
      rating: "(3.0/5)",
      starImg: star,
      desc: "No contract, money-back guarantee",
      buttonText: "view plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: sparklightgirl,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "sparklight",
        icon: sparklighticon,
      },
      {
        subtitle: " Price:",
        title: "$40.00–$115.00/mo.",
        icon: sparklighticon,
      },
      {
        subtitle: "Channel count:",
        title: "50–100+",
        icon: sparklighticon,
      },
    ],

    tableData: [
      {
        head: [
          "Package",
          "Price* ",
          "Download speeds up to",
          "Upload speeds up to",
          "Data cap",
          "Details ",
        ],

        body: [
          {
            content: [
              "1.",
              "Internet 200",
              "$65.00/mo.*",
              "200 Mbps ",
              "20 Mbps ",
              "700 GB",
            ],
            linkPath: "# ",
          },
          {
            content: [
              "2.",
              "Internet Gig",
              "$115.00/mo.**",
              "1,000 Mbps",
              "50 Mbps",
              "1,500 GB",
            ],
            linkPath: "# ",
          },
        ],
      },
    ],

    bottomDesc:
      "Data is as of time of post. Offers and availability may vary by location and are subject to change.",
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
        "Price* ",
        "Download speeds up to",
        "Upload speeds up to",
        "Data cap",
        "Details ",
      ],

      body: [
        {
          content: [
            "1.",
            "Internet 200",
            "$65.00/mo.*",
            "200 Mbps ",
            "20 Mbps ",
            "700 GB",
          ],
          linkPath: "# ",
        },
        {
          content: [
            "2.",
            "Internet Gig",
            "$115.00/mo.**",
            "1,000 Mbps",
            "50 Mbps",
            "1,500 GB",
          ],
          linkPath: "# ",
        },
      ],
    },
  ];
  return (
    <div className="spark-light-internet">
      {/* <SubNav links={sparklightNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading"> Sparklight Internet Review</h2>
          <p className="sect-desc">
            Here's what you need to know about Sparklight's five internet plans.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            At first, Sparklight’s no-contract plans and high download speeds
            make it look like an ideal internet provider. But watch out for its
            restrictive data caps—those could end up costing you more than you’d
            expect.
          </p>
          <br />
          <h4>Sparklight (Cable ONE) pros & cons</h4>
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
                  <td> Download speeds as fast as 1,000 Mbps</td>
                  <td> A super short trial period for discounted pricing</td>
                </tr>
                <tr>
                  <td> No annual contracts </td>
                  <td> Ridiculously small data caps on slower packages</td>
                </tr>
                <tr>
                  <td> Unlimited data add-on available </td>
                  <td>
                    {" "}
                    A data-cap policy to automatically upgrade your package if
                    you go over too many times{" "}
                  </td>
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
          <Link href={"#"}> Internet packages and prices </Link>
          <Link href={"#"}> Internet + TV bundles packages and prices </Link>
          <Link href={"#"}> Promotions</Link>
        </div>
      </div>

      <CTA
        heading={"Find out if Sparklight is available in your area"}
        desc={"Enter your zip code above to find out."}
      />

      <div className="section internet-bundles">
        <div className="head">
          <h2 className="sect-heading">
            Best Sparklight (Cable ONE) <span> internet packages </span>
          </h2>
          <p className="sect-desc">
            The Internet 200 package is a good choice if you stream TV online.
            Your home will have enough data to stream full HD shows up to 10
            hours a day, plus do other fun things like check social media and
            play video games. <br />
            Keep in mind that if you have a lot of people at home or if you
            stream 4K movies, you’ll use up 700 GB of data a lot faster than
            most. <br />
            If that sounds like you, you might want to try Internet Gig. It
            comes with more than twice as much data (1,500 GB) as Internet 200
            and download speeds up to five times faster. It’s a great way to
            avoid running into data caps, but it’s undeniably pricey.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data as of post date. Offers and availability may vary by location and
          are subject to change.
        </p>
      </div>

      <div className="section internet-packages">
        <div className="head">
          <h2 className="sect-heading">
            Sparklight (Cable ONE) internet <span> packages and pricing </span>
          </h2>
          <p className="sect-desc">
            Each of Sparklight’s internet plans come with painfully restrictive
            data caps. Data caps aren’t an unusual practice—many Internet
            Service Providers (ISPs) use them to discourage users from
            downloading super huge files that will eat up bandwidth and slow
            download speeds for their neighbors. The thing is, most ISPs have
            1,000 GB data caps. That’s enough data for you to stream 10 hours of
            TV every day, and then some. <br />
            So if you use the internet like it’s 2020 and not 1998, you’ll
            probably run into overage fees. That’s $10 for every 100 GB you go
            over your data plan, with a price cap of $50 per month. Go over your
            data allowance too many times, and Sparklight reserves the right to
            bump you up to a more expensive plan whenever it sees fit. It’s not
            nice, and it’s not fair, but it is in the user agreement, so you
            agree to it (in the most technical sense) when you sign up. <br />
            If you don’t want a pricey high-speed plan that comes with more
            data, you can bow to Sparklight’s data caps by carefully monitoring
            your internet usage. You can check the numbers on your online
            customer portal, but that will, ironically, cost data to do. And
            you’ll definitely need to start depriving yourself of binge-watching
            Netflix Originals.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data as of post date. Offers and availability may vary by location and
          are subject to change.
        </p>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} alt="quotations" className="mark" />
          <h4>Pro Tip:</h4>
          <p className="after-heading">
            Check out our data caps explainer to learn more about data caps and
            how they affect your internet service.
          </p>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={dotted} alt="dotted" />
          <h4>Sparklight (Cable ONE) internet perks, cool stuff, and deals</h4>
          <p>
            Sparklight doesn’t have any deals going on right now, but we’ll let
            you know here if that changes.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Are Sparklight Internet worth it?</span>
          </h2>
          <p className="sect-desc">
            If you plan on using the internet, you can’t get away with signing
            up for Sparklight’s cheapest plan. Go with Internet 200 or a faster
            plan, or else you’ll probably run into some serious data-cap fines.
            If you have a large household and already know you’ll have a lot of
            demand on your Sparklight Wi-Fi network, go for Internet Gig.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> sign up for sparklight today</Link>
        </div>
      </div>

      <CTA
        heading={"Find out if Sparklight is available in your area"}
        desc={"Enter your zip code above to find out."}
      />

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Sparklight (Cable ONE) internet </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What kind of internet is
                Sparklight (Cable ONE)?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Sparklight, previously known as Cable ONE, sells cable (or
                  broadband) internet, which uses coaxial copper cables to
                  deliver your cat pictures and memes.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What kind of internet is Sparklight (Cable ONE)?"}
            cssClass={"faq-content"}
          >
            <p>
              Sparklight, previously known as Cable ONE, sells cable (or
              broadband) internet, which uses coaxial copper cables to deliver
              your cat pictures and memes.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What is Sparklight's (Cable
                ONE's) internet speed?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Depending on the package you get, you can get up to 50, 200,
                  400, 600, 700, or 1,000 Mbps download speeds.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" What is Sparklight's (Cable ONE's) internet speed?"}
            cssClass={"faq-content"}
          >
            <p>
              Depending on the package you get, you can get up to 50, 200, 400,
              600, 700, or 1,000 Mbps download speeds.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does Sparklight have
                unlimited data?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Sparklight doesn’t include unlimited internet data with its
                  packages. If you exceed your plan’s data cap, Sparklight
                  charges $10 a month for an extra 100 GB, up to 400 GB for $40
                  a month. If you exceed even that cap, Sparklight slows your
                  connection to a crawl for the rest of the data cycle.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does Sparklight have unlimited data?"}
            cssClass={"faq-content"}
          >
            <p>
              Sparklight doesn’t include unlimited internet data with its
              packages. If you exceed your plan’s data cap, Sparklight charges
              $10 a month for an extra 100 GB, up to 400 GB for $40 a month. If
              you exceed even that cap, Sparklight slows your connection to a
              crawl for the rest of the data cycle.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does Sparklight (Cable ONE)
                throttle internet?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Sparklight claims not to throttle internet connections. But if
                  you use over the 5 TB in a data cycle, Sparklight will slow
                  your connection to around 10 Mbps until the next data cycle
                  begins.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Does Sparklight (Cable ONE) throttle internet?"}
            cssClass={"faq-content"}
          >
            <p>
              Sparklight claims not to throttle internet connections. But if you
              use over the 5 TB in a data cycle, Sparklight will slow your
              connection to around 10 Mbps until the next data cycle begins.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How much data do you need
                to stream TV?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Go for a data allowance of 600 GB. Everyone in your household
                  will be able to stream 1080p TV up to a cumulative of 10 hours
                  daily, with data left over for all your other internet
                  activities.
                  <br />
                  Pay attention to the video quality of the shows you stream—you
                  could be using up to 7.2 GB of data per hour. More exactly,
                  720p uses 0.9 GB per hour, 1080p uses 1.5 GB an hour, and 4K
                  Ultra HD uses 7.2 GB per hour.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" How much data do you need to stream TV?"}
            cssClass={"faq-content"}
          >
            <p>
              Go for a data allowance of 600 GB. Everyone in your household will
              be able to stream 1080p TV up to a cumulative of 10 hours daily,
              with data left over for all your other internet activities.
              <br />
              Pay attention to the video quality of the shows you stream—you
              could be using up to 7.2 GB of data per hour. More exactly, 720p
              uses 0.9 GB per hour, 1080p uses 1.5 GB an hour, and 4K Ultra HD
              uses 7.2 GB per hour.
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
            To find out how Sparklight stacked up against the competition, we
            broke down Sparklight’s internet plans in areas including price,
            download speeds, and upload speeds. We also used our annual internet
            customer satisfaction survey to see what real Sparklight internet
            customers thought about the ISP.
            <br />
            To learn more about our methodology, check out our
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
          </p>
          <h4>Disclaimer</h4>
          <p>
            *Equipment, taxes, fees, and any applicable surcharge extra. $10
            charge for each add’l 100GB; Up to $30/mo
            <br />
            **Equipment, taxes, fees, and any applicable surcharge extra. Actual
            speeds vary and are subject to equipment limitations. Wi-Fi speeds
            will be substantially lower. Up to $30/mo.
          </p>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Sparklight Overview | Sparklight TV | Sparklight Bundles |
          Sparklight Voice | Sparklight Channel lineup | Sparklight Customer
          service
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default SparkLightInternet;
