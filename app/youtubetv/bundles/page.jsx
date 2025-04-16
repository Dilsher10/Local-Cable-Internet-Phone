// import React, { useState } from "react";
import "./youtubetv-bundles.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { youtubetvNavLinks } from "../../assets/data/navLinks/youtubetvNavLinks";
import youtubetvbundlesboy from "../../assets/images/youtubetv-bundle-boy.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import youtubetv from "../../assets/images/youtubetv+icon.png";
import youtubetvicon from "../../assets/images/youtubetv-icon.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import dotted from "../../assets/images/dotted.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
import Searchbar from "../../components/searchbar/Searchbar";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "YouTube TV Bundles: Cost, Discounts, And More"
};

const YoutubeTvBundles = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: youtubetv,
      rating: "(3.5/5)",
      starImg: star,
      desc: "Save $10–$15/mo. when you bundle",
      buttonText: "view plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: youtubetvbundlesboy,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "YouTube TV and Frontier",
        icon: youtubetvicon,
      },
      {
        subtitle: "Bundle pricing:",
        title: "$112.98–$217.98/mo.*",
        icon: youtubetvicon,
      },
      {
        subtitle: "Channels:",
        title: "100+",
        icon: youtubetvicon,
      },
      {
        subtitle: "Download speeds:",
        title: "500–5,000 Mbps",
        icon: youtubetvicon,
      },
    ],

    tableData: [
      {
        head: ["Plan", "Mid-season price", "Channels", "Streams", "Details"],

        body: [
          {
            content: [
              "1.",
              "Frontier Fiber 500 + YouTube TV",
              "$112.98/mo.†",
              "N/A",
              "500Mbps",
            ],
            linkPath: "#",
          },
          {
            content: [
              "2.",
              "Frontier Fiber 5 Gig",
              "$217.98/mo.**",
              "500Mbps",
              "500Mbps",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "Data as of post date. Offers and availability are subject to change. Pricing includes $10/mo. promotional discount on YouTube TV for up to 12 mos. † w/ Auto Pay & Paperless Bill per month. Max speeds are wired. Wi-Fi, actual & average speeds vary. One-time charge on disconnect applies. ** w/ Auto Pay & Paperless Bill per month. Max speeds are wired. Wi-Fi, actual & average speeds vary. One-time charge on disconnect applies.",
  };
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };

  let packageTableData = [
    {
      head: ["Package", "Mid-season price", "Channels", "Streams", , "Details"],

      body: [
        {
          content: ["1.", "YouTube TV ", "$72.99/mo. ", "100+", "3"],
          linkPath: "#",
        },
      ],
    },
  ];

  let packageTableDataPrice = [
    {
      head: [
        "Service",
        "Bundle Price",
        "Download Speeds",
        "Upload Speeds",
        "Internet Type",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Frontier Internet + YouTube TV",
            "$112.98/mo.*",
            "N/A",
            "N/A",
            "DSL",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Frontier Fiber 500 + YouTube TV",
            "$112.98/mo.†",
            "500Mbps",
            "500Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Frontier Fiber 1 Gig + YouTube TV",
            "$132.98/mo.‡",
            "1,000Mbps",
            "1,000Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Frontier Fiber 2 Gig + YouTube TV",
            "$162.98/mo.¶",
            "2,000Mbps",
            "2,000Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "Frontier Fiber 5 Gig + YouTube TV",
            "$217.98/mo.**",
            "5,000Mbps",
            "5,000Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
      ],
    },
  ];

  return (
    <div className="youtubetv-bundles">
      {/* <SubNav links={youtubetvNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            YouTube TV Bundles 2024: Cost, Discounts, And More
          </h2>
          <p className="sect-desc">
            Only Frontier Internet has discounted bundles with YouTube TV, but
            you can pair the popular live TV streaming service with any ISP.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            Frontier Internet stopped selling TV service and now offers the only
            official YouTube TV bundles. There’s only one catch: You must live
            in the Frontier Internet service area and have had no previous
            YouTube TV experience (not even a free trial).
            <br />
            If you can’t get Frontier Internet, don’t sweat it. YouTube TV—our
            best live TV streaming service—is available almost anywhere. You can
            probably find a deal comparable to Frontier bundles locally, but
            you’ll have to subscribe to them separately.
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
                  <td> $10–$15/mo. discount for 12 mos.</td>
                  <td> Limited service area</td>
                </tr>
                <tr>
                  <td> Up to a 3-yr. price guarantee</td>
                  <td> No contract</td>
                </tr>
                <tr>
                  <td> No contract</td>
                  <td> </td>
                </tr>
                <tr>
                  <td> Speeds up to 5,000Mbps</td>
                  <td> </td>
                </tr>
                <tr>
                  <td> 100+ channels</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>Unlimited cloud DVR</td>
                  <td> </td>
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
          <Link href={"#"}>Bundle YouTube TV with Frontier Internet </Link>
          <Link href={"#"}>
            Bundle YouTube TV with other internet providers{" "}
          </Link>
        </div>
      </div>

      <CTA
        heading={"Can you get Frontier internet service where you live?"}
        desc={"  Drop your zip code below to find out now."}
      />

      <div className="section frontier">
        <div className="head">
          <h2 className="sect-heading">
            Bundle <span> YouTube TV with Frontier Internet </span>
          </h2>
          <p className="sect-desc">
            Swapping traditional TV for simpler, more flexible live TV
            streaming—and offering a built-in discount—already makes
            Frontier/YouTube TV bundles superior to almost any other
            internet-and-TV bundle. Frontier offers five bundles with YouTube
            TV. Depending on your location, you can get DSL internet (speeds
            depend on your location) or fiber-optic connections (500–5,000
            Mbps). Fiber internet is super fast and has symmetrical upload
            speeds, so it’s the best internet type for performance and overall
            value. Here’s hoping you live in Frontier’s fiber zone. <br />
            On the TV tip, YouTube TV is our perennial favorite live TV
            streaming service—a key reason we say Frontier’s YouTube TV bundles
            beat traditional TV provider bundles. Streaming TV is simpler and
            more flexible, with no contracts, no fees, and no cable box
            requirement. Plus, YouTube TV has over 100 popular channels and free
            unlimited cloud DVR. <br />
            Also, Frontier bundles give you $10 or $15 off YouTube TV (regularly
            $72.99 monthly) for 12 months. As we said before, bundle discounts
            are rare. Let’s take a look at both offers.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="quotations" />
          <h4>Pro tip:</h4>
          <p className="after-heading">
            Frontier Internet serves 25 states, but its most significant
            presence is in California, Texas, Indiana, Florida, Alabama, and
            Arizona.
          </p>
        </div>
      </div>

      <div className="section cost">
        <div className="head">
          <h2 className="sect-heading">
            YouTube TV <span> plans and prices </span>
          </h2>
          <p className="sect-desc">
            Existing Frontier Internet customers can get the standard free trial
            of YouTube TV, then pay only $62.99 a month for 12 months—a savings
            of $10.00 monthly—and you can cancel any time. Customers with
            Frontier Internet and current Frontier TV or Fiber TV service get
            the standard YouTube TV free trial plus $15.00 off (monthly payment:
            $57.99) for up to 12 months.
            <br />
            If that sounds good to you, let’s check out the specific
            Frontier/YouTube TV bundles.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data as of post date. Offers and availability are subject to change.
        </p>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="quotations" />
          <h4>Pro tip:</h4>
          <p className="after-heading">
            YouTube TV free trials can be 7–21 days. The Frontier deal’s terms
            and conditions don’t define “standard free trial,” so assume it
            lasts seven days.
          </p>
        </div>
      </div>

      <div className="section prices">
        <div className="head">
          <h2 className="sect-heading">
            Frontier Internet + <span> YouTube TV bundles and prices </span>
          </h2>
          <p className="sect-desc">
            In Frontier’s DSL service area, there’s only one bundle: Frontier
            Internet with YouTube TV ($112.98 a month). Unfortunately, you’ll
            have to (enter your zip code) on the Frontier site to see available
            DSL speeds.
            <br />
            Frontier’s fiber bundles with YouTube TV start with Frontier Fiber
            Internet 500 with YouTube TV ($112.98 monthly), which has 500Mbps,
            no data caps, over 100 channels, and unlimited cloud DVR. That plan
            will work for most people, but larger households and power users
            will want one of the faster plans.
          </p>
        </div>
        <PackageTable item={packageTableDataPrice} />
        <p className="below-table">
          Data as of post date. Offers and availability are subject to change.{" "}
          <br />
          * w/ Auto Pay & Paperless Bill for 24 mos. One-time charges apply. Max
          speeds are wired. Wi-Fi, actual & average speeds vary. <br />† w/ Auto
          Pay & Paperless Bill per month. Max speeds are wired. Wi-Fi, actual &
          average speeds vary. One-time charge on disconnect applies. <br />
          ‡ w/ Auto Pay & Paperless Bill per month. Max wired speed
          1000/1000Mbps. Location dependent. Wi-Fi, actual & average speeds
          vary. One-time charge on disconnect applies. <br />¶ w/ Auto Pay &
          Paperless Bill per month. Max speeds are wired. Wi-Fi, actual &
          average speeds vary. One-time charge on disconnect applies.
        </p>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={dotted} className="mark" alt="" />
          <h4>Bundle YouTube TV with other internet providers </h4>
          <p>
            If you can get AT&T, Optimum, or Xfinity internet service where you
            live, all three providers have 500Mbps plans for $60.00–$70.00 a
            month. With YouTube TV ($72.99 monthly, no discount), you’ll pay
            $133.00–$143.00 total. That’s $20–$30 more than Frontier Fiber 500
            ($112.98 monthly). So, hopefully, you live in Frontier’s area.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take:{" "}
            <span> Are YouTube TV and frontier bundles worth it?</span>
          </h2>
          <p className="sect-desc">
            By swapping out traditional TV plans for YouTube TV, Frontier
            created internet and TV bundles with simplicity, flexibility, and an
            actual bundle discount. That’s amazing—we love it! If you can get
            Frontier Internet where you live, take advantage of these bundles.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> view plans</Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> YouTube TV bundle </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What YouTube TV bundles are
                available?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Frontier Internet has the only official YouTube TV bundles—one
                  with DSL internet ($112.98 monthly) and four with fiber-optic
                  connections ($112.98–$217.98 monthly, with 500–5,000Mbps).
                  Enter your zip code below to see if you can get Frontier where
                  you live.
                </p>
                <br />
                <Searchbar />
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What YouTube TV bundles are available?"}
            cssClass={"faq-content"}
          >
            <p>
              Frontier Internet has the only official YouTube TV bundles—one
              with DSL internet ($112.98 monthly) and four with fiber-optic
              connections ($112.98–$217.98 monthly, with 500–5,000Mbps). Enter
              your zip code below to see if you can get Frontier where you live.
            </p>
            <br />
            <Searchbar />
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How much are YouTube TV
                bundles?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  YouTube TV bundles through Frontier Internet cost
                  $112.98–$217.98 monthly for internet speeds up to 5,000Mbps,
                  100+ channels, and free unlimited cloud DVR.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" How much are YouTube TV bundles?"}
            cssClass={"faq-content"}
          >
            <p>
              YouTube TV bundles through Frontier Internet cost $112.98–$217.98
              monthly for internet speeds up to 5,000Mbps, 100+ channels, and
              free unlimited cloud DVR.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Is there a discount for
                YouTube TV bundles?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Frontier Internet offers a $10–$15 monthly discount (for up to
                  12 months) on YouTube TV bundles. To be eligible, you must
                  live in the Frontier service area and not be a current or
                  former YouTube TV subscriber or have done a YouTube TV free
                  trial.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Is there a discount for YouTube TV bundles?"}
            cssClass={"faq-content"}
          >
            <p>
              Frontier Internet offers a $10–$15 monthly discount (for up to 12
              months) on YouTube TV bundles. To be eligible, you must live in
              the Frontier service area and not be a current or former YouTube
              TV subscriber or have done a YouTube TV free trial.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Can I pay for the YouTube
                TV bundle for a year?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Unfortunately, Frontier Internet’s YouTube TV bundles have no
                  annual payment option.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Can I pay for the YouTube TV bundle for a year?"}
            cssClass={"faq-content"}
          >
            <p>
              Unfortunately, Frontier Internet’s YouTube TV bundles have no
              annual payment option.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> How much is the HBO Max
                YouTube TV bundle?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  You would pay $88.98 monthly if you subscribe to Max ($15.99
                  monthly) through YouTube TV ($72.99 per month).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" How much is the HBO Max YouTube TV bundle?"}
            cssClass={"faq-content"}
          >
            <p>
              You would pay $88.98 monthly if you subscribe to Max ($15.99
              monthly) through YouTube TV ($72.99 per month).
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
            The TV and internet experts at CableTV.com have thousands of hours
            of experience researching and testing streaming TV services and
            internet service providers. For this YouTube TV bundles guide, we
            researched pricing, plans, bundles, content, deals, features, and
            more for YouTube TV, Frontier Internet, and other internet service
            providers like AT&T, Optimum, and Xfinity. We then analyzed the data
            to make accurate, helpful recommendations for our readers. For more
            on our process, see our
            <span className="link">
              <Link href={"/"}>How We Rank page.</Link>
            </span>
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Hulu + Live TV review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best TV Providers</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best TV Streaming Services</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Live TV Streaming Services</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>9 Streaming Bundles to Replace Cable</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default YoutubeTvBundles;
