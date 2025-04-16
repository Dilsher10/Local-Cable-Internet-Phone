// import React, { useState } from "react";
import "./spark-light-review.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { sparklightNavLinks } from "../../assets/data/navLinks/sparklightNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import sparklightgirl from "../../assets/images/spark-light-review-girl.png";
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
import Searchbar from "../../components/searchbar/Searchbar";

export const metadata = {
  title: "Sparklight Review: Plans, Pricing, And More"
};

const SparkLightReview = () => {
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
        subtitle: "Channel count:",
        title: "20–100+",
        icon: sparklighticon,
      },
      {
        subtitle: " Price:",
        title: "Starting at $40/mo.",
        icon: sparklighticon,
      },
      {
        subtitle: "Download speeds:",
        title: "50–1,000 Mbps",
        icon: sparklighticon,
      },
    ],

    tableData: [
      {
        head: [
          "Top plans",
          "Price* ",
          "Download speeds up to",
          "Channel count",
          "Phone plan",
          "Details ",
        ],

        body: [
          {
            content: [
              "1.",
              "Best for casual users",
              "$196.75/mo.*",
              "200 Mbps",
              "Up to 100 channels ",
              "Unlimited local & long distance",
            ],
            linkPath: "# ",
          },
          {
            content: [
              "2.",
              "Best for average internet users ",
              "$65/mo.* ",
              "200 Mbps ",
              "N/A ",
              "N/A ",
            ],
            linkPath: "# ",
          },
          {
            content: [
              "3.",
              "Best for high-speed internet ",
              "$115/mo.* ",
              "1, 000 Mbps ",
              "N/A ",
              "N/A ",
            ],
            linkPath: "# ",
          },
        ],
      },
    ],

    bottomDesc:
      "Data as of post date. Offers and availability may vary by location and are subject to change.",
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
        "Data Cap",
        "Details",
      ],

      body: [
        {
          content: [
            "1. ",
            "Internet 50",
            "$40.00/mo.*",
            "50 Mbps",
            "3 Mbps",
            "1,000 GB",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.  ",
            " Internet 200",
            "$65.00/mo.*",
            "200 Mbps",
            "20 Mbps",
            "700 GB",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3. ",
            " Internet 300",
            "$70.00/mo.*",
            "300 Mbps",
            "20 Mbps",
            "1,200 GB",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Internet 400",
            "$85.00/mo.*",
            "400 Mbps",
            "30 Mbps",
            "1,200 GB",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "Internet 600",
            "$95.00/mo.*",
            "600 Mbps",
            "40 Mbps",
            "1,500 GB",
          ],
          linkPath: "#",
        },
        {
          content: [
            "6.",
            "Internet Gig",
            "$115.00/mo.**",
            "1,000 Mbps",
            "60 Mbps",
            "1,500 GB",
          ],
          linkPath: "#",
        },
      ],
    },
  ];

  let packageTableDataTvPackage = [
    {
      head: ["Package", "Price", "Channel Count", "Details"],

      body: [
        {
          content: ["1.", "Economy", "$54.00/mo.", "20+"],
          linkPath: "#",
        },
        {
          content: ["2.", "Standard", "$121.75/mo.", "100+"],
          linkPath: "#",
        },
        {
          content: ["3.", "Digital Value Pack add-on", "Add $16.00/mo.", "24+"],
          linkPath: "#",
        },
      ],
    },
  ];

  let packageTableDataChannelLineUp = [
    {
      head: [
        "Package",
        "Included Popular Channels",
        "Missing Popular Channels",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Economy",
            "ABC, CBS, FOX, NBC, and Telemundo",
            "Disney Channel, ESPN, HISTORY",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Standard",
            "ESPN, Disney Channel, HISTORY",
            "Pac-12 Networks, NFL Network, Nickelodeon, MTV",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Digital Value Pack add-on",
            "Disney XD, FYI, NFL Network, Lifetime Movie Network, Science Channel",
            "N/A",
          ],
          linkPath: "#",
        },
      ],
    },
  ];

  let packageTableDataPhonePackage = [
    {
      head: [
        "Package",
        "Price",
        "Download speeds up to",
        "Channel count",
        "Phone plan",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Std. Cable + Std. Phone + Internet 200",
            "$196.75/mo.*",
            "200 Mbps",
            "100+",
            "Unlimited local & long distance",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Std. Cable + Std. Phone + Internet 300",
            "$206.75/mo.*",
            "300 Mbps",
            "100+",
            "Unlimited local & long distance",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Std. Cable + Std. Phone + Internet 600",
            "$231.75/mo.*",
            "600 Mbps",
            "100+",
            "Unlimited local & long distance",
          ],
          linkPath: "#",
        },
      ],
    },
  ];

  return (
    <div className="spark-light-review">
      {/* <SubNav links={sparklightNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Sparklight Review: Plans, Pricing, And More
          </h2>
          <p className="sect-desc">
            Casual internet users will find Sparklight's internet and TV plans
            acceptable—but Sparklight's data caps might turn off a lot of users.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            If you’re a casual internet user—we mean occasionally checking email
            and social media kind of casual—and you aren’t fond of the other
            internet providers in your area, Sparklight, formerly called Cable
            ONE, is an acceptable option.
            <br />
            But if you use the internet for streaming shows, uploading photos to
            social media, or looking at a bunch of pictures, Sparklight’s data
            caps will be a huge problem. You could end up paying an extra $50 a
            month in overage fees or even getting moved up to a more expensive
            plan without your go-ahead.
          </p>
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
                  <td> No contracts</td>
                  <td> A super short trial period for discounted pricing</td>
                </tr>
                <tr>
                  <td> Download speeds up to 1,000 Mbps </td>
                  <td> Ridiculously tiny data caps</td>
                </tr>
                <tr>
                  <td> 30-day money-back guarantee </td>
                  <td>
                    A policy to upgrade to a higher package after data cap
                    overages
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
          <Link href={"#"}>Internet packages and prices </Link>
          <Link href={"#"}>TV packages and prices </Link>
          <Link href={"#"}>Channels </Link>
          <Link href={"#"}>Bundles packages and prices </Link>
        </div>
      </div>

      <CTA
        heading={"Find out if Sparklight is available in your area"}
        desc={"Enter your zip code above to find out."}
      />

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={dotted} alt="dotted" />
          <h4>Sparklight deals</h4>
          <p>
            Sparklight isn’t offering any big deals or perks right now. We’ll
            update this section when that changes.
          </p>
        </div>
      </div>

      <div className="section internet-bundles">
        <div className="head">
          <h2 className="sect-heading">
            Sparklight <span> internet packages </span>
          </h2>
          <p className="sect-desc">
            Contract-free internet plans are awesome—you can leave your provider
            whenever you want without paying the dreaded early termination fee.
            Sure, sometimes you have to pay a bit more for the freedom, but it’s
            worth it. Sparklight’s got that good no-contract energy on lockdown.
            But it’s poisoned by the terrible data caps it enforces. If you
            exceed the cap, Sparklight charges $10 a month for an extra 100 GB,
            up to 400 GB for $40 a month. If you exceed even that cap,
            Sparklight slows your connection to a crawl for the rest of the data
            cycle. <br />
            Since Sparklight internet plans are already fairly expensive, you
            might wanna shop around for a provider that has cheaper plans with
            higher caps. But if Sparklight internet service is your only option,
            or you’re fed up with other providers in your area, Internet 200
            ($65 a month, 200 Mbps, 700GB data allowance) ought to accommodate
            lots of gaming and video streaming before you encounter overage fees
            and forced package upgrades. <br />
            To learn more about which Sparklight internet plan is best for you,
            head over to our Sparklight internet review. We’ll explain
            everything you need to know about data caps and the impact they’ll
            have on your fun internet times.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data as of post date. Offers and availability may vary by location and
          are subject to change.
        </p>
      </div>

      <div className="section tv-packages">
        <div className="head">
          <h2 className="sect-heading">
            Sparklight <span> TV packages </span>
          </h2>
          <p className="sect-desc">
            After the fiasco that is Sparklight internet data caps, Sparklight
            TV packages are relatively straightforward, if overpriced. Ignore
            the Economy package ($54.00 a month, up to 20 channels). It’s not
            worth paying monthly for all the same local channels (and their
            subchannels) that you can get with an over-the-air (OTA) antenna,
            which costs as little as $30.00 and is easy to install by yourself.{" "}
            <br />
            Standard Cable TV ($121.75 a month) has up to 100 channels—the basic
            channels you’d expect, minus Viacom channels like MTV and
            Nickelodeon. And it’s overall slimness doesn’t warrant the price
            tag, considering you can get 290+ channels (including Viacom
            channels) from DISH for over $10 cheaper per month. If you want more
            channels, Sparklight has the Digital Value Pack add-on ($16 a
            month), which has 24 more channels including NFL Network, Game Show
            Network, CBS Sports, Discovery Life, Science Channel, and Lifetime
            Movie Network. <br />
            Interestingly, like Verizon Fios and DIRECTV STREAM (formerly AT&T
            TV), Sparklight has also switched from delivering your channels via
            cable to a streaming TV setup. You’ll use an Amazon Fire TV Stick
            (first one’s free) instead of a cable box. The cloud DVR stores 200
            HD hours and you’ll have unlimited simultaneous recordings. Also,
            each of Sparklight’s TV plans requires an additional $12 Sparklight
            TV Plus charge, which includes the ability to watch on up to six
            screens, plus 200 hours of DVR recording. Don’t worry, we’ve already
            included this charge in our pricing info to make it easier for ya.
            <br />
            For more help choosing the best Sparklight TV plan for you, head
            over to our Sparklight TV review. We’ve got some helpful tips on
            DVRs that you won’t want to miss.
          </p>
        </div>
        <PackageTable item={packageTableDataTvPackage} />
        <br />
        <p className="below-table">
          Data as of post date. Offers and availability may vary by location and
          are subject to change.
        </p>
      </div>

      <div className="section channel-lineup">
        <div className="head">
          <h2 className="sect-heading">
            Sparklight <span> channel lineup </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>see full sparklight channel lineup </Link>
        </div>
        <PackageTable item={packageTableDataChannelLineUp} />
        <br />
        <p className="below-table">
          Data as of post date. Offers and availability may vary by location and
          are subject to change.
        </p>
      </div>

      <div className="section phone-packages">
        <div className="head">
          <h2 className="sect-heading">
            Sparklight bundles;{" "}
            <span> Sparklight internet + TV + phone packages </span>
          </h2>
          <p className="sect-desc">
            Sparklight has a couple of bundles that can help you save money
            overall, but they can get pretty expensive compared to the
            competition. Above you’ll see a few of the best three-service
            combos, but there are plenty of bundles for just two services too.
            <br />
            There are also some weird price problems you should watch out for
            with Sparklight’s bundles. Head on over to the our Sparklight bundle
            review for the full scoop.
          </p>
        </div>
        <PackageTable item={packageTableDataPhonePackage} />
        <br />
        <p className="below-table">
          Data as of post date. Offers and availability may vary by location and
          are subject to change.
        </p>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Sparklight worth it?</span>
          </h2>
          <p className="sect-desc">
            We’re not about to propose marriage to Sparklight. Not that it even
            offers a contract—but you’ll pay a premium to avoid getting stuck in
            a two-year agreement. Also, Sparklight’s data caps aren’t fair for
            modern internet usage, and its channel count is low. But if you live
            alone, or have a small family, the Sparklight plan for you is
            Internet 200 ($65 a month, 200 Mbps, 700 GB data allowance) would
            allow you to do a good amount of gaming and video streaming before
            getting hit with overage fees and forced package upgrades. <br />
            If you’re looking to bundle, the TV + phone + Internet 200 bundle
            ($196.75 a month, up to 100 channels, 200 Mbps, 700 GB data cap, and
            unlimited calling) should still accommodate plenty of live TV
            streaming and online gaming—you’ll just have to watch your data cap.{" "}
            <br />
            Or, if Sparklight doesn’t sound like it’s for you, enter your zip
            code below to find other providers.
          </p>
        </div>
        <Searchbar />
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Sparklight </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Is Sparklight cable a
                streaming TV service?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  As of Dec. 15, Sparklight started delivering its TV service
                  via the internet. So Sparklight is now technically a live TV
                  streaming service, but the company is calling it “streaming
                  cable.” Sparklight TV packages and pricing won’t change,
                  though. And neither will the channels in each Sparklight TV
                  plan.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Is Sparklight cable a streaming TV service?"}
            cssClass={"faq-content"}
          >
            <p>
              As of Dec. 15, Sparklight started delivering its TV service via
              the internet. So Sparklight is now technically a live TV streaming
              service, but the company is calling it “streaming cable.”
              Sparklight TV packages and pricing won’t change, though. And
              neither will the channels in each Sparklight TV plan.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is Sparklight internet
                good?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Sparklight (once known as Cable ONE) internet is just okay.
                  All of its internet plans have individualized speeds and data
                  caps, and, on the more affordable plans, they’re both a bit
                  stingy compared to almost any other provider—so watch out for
                  overage fees. But Sparklight doesn’t require contracts, so you
                  can leave whenever you want.
                  <br />
                  See below for Sparklight’s vital statistics. For a deeper
                  look, read our Sparklight internet review.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Is Sparklight internet good?"}
            cssClass={"faq-content"}
          >
            <p>
              Sparklight (once known as Cable ONE) internet is just okay. All of
              its internet plans have individualized speeds and data caps, and,
              on the more affordable plans, they’re both a bit stingy compared
              to almost any other provider—so watch out for overage fees. But
              Sparklight doesn’t require contracts, so you can leave whenever
              you want.
              <br />
              See below for Sparklight’s vital statistics. For a deeper look,
              read our Sparklight internet review.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does Sparklight require a
                contract?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  No, Sparklight plans are month-to-month, so you can duck out
                  any time without having to worry about paying early
                  termination fees.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does Sparklight require a contract?"}
            cssClass={"faq-content"}
          >
            <p>
              No, Sparklight plans are month-to-month, so you can duck out any
              time without having to worry about paying early termination fees.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What kind of internet is
                Sparklight?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Sparklight offers cable internet, which isn’t quite as
                  advanced as fiber-to-home internet. But since Sparklight plans
                  reach up to 1,000 Mbps in download speeds, it’s certainly not
                  shabby.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" What kind of internet is Sparklight?"}
            cssClass={"faq-content"}
          >
            <p>
              Sparklight offers cable internet, which isn’t quite as advanced as
              fiber-to-home internet. But since Sparklight plans reach up to
              1,000 Mbps in download speeds, it’s certainly not shabby.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Why is Cable ONE now
                Sparklight?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Sparklight has some fancy explanations for it, but in
                  short—branding. Sparklight isn’t a new company or separate
                  from Cable ONE at all; it just changed the big sign out front.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" Why is Cable ONE now Sparklight?"}
            cssClass={"faq-content"}
          >
            <p>
              Sparklight has some fancy explanations for it, but in
              short—branding. Sparklight isn’t a new company or separate from
              Cable ONE at all; it just changed the big sign out front.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Does Sparklight have a data
                cap?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Each Sparklight plan comes with an individualized speed and
                  data allowance—both of which are pretty ugly. We feel like
                  Sparklight plans aren’t worth it until you get to Internet
                  200, which gives you 200 Mbps and a 700 GB cap for $65 a
                  month.
                  <br />
                  If you want to bundle with a Sparklight TV package,
                  Sparklight’s internet, TV, and phone bundle with Internet 200
                  is $196.75 a month for up to 100 channels, 200 Mbps, a 700 GB
                  cap, and unlimited calling. It’s not the greatest, but it’s
                  okay if Sparklight’s your only option.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" Does Sparklight have a data cap?"}
            cssClass={"faq-content"}
          >
            <p>
              Each Sparklight plan comes with an individualized speed and data
              allowance—both of which are pretty ugly. We feel like Sparklight
              plans aren’t worth it until you get to Internet 200, which gives
              you 200 Mbps and a 700 GB cap for $65 a month.
              <br />
              If you want to bundle with a Sparklight TV package, Sparklight’s
              internet, TV, and phone bundle with Internet 200 is $196.75 a
              month for up to 100 channels, 200 Mbps, a 700 GB cap, and
              unlimited calling. It’s not the greatest, but it’s okay if
              Sparklight’s your only option.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> Is Sparklight better than
                Centurylink?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  If you can get a Centurylink fiber-optic connection where you
                  live, it’s better than Sparklight internet service.
                  Centurylink’s fiber internet plan gets you up to 940 Mbps
                  download and upload speeds with a 1 TB data cap for $65 a
                  month. For the same price, Sparklight has only a cable
                  internet connection with 200 Mbps download speeds, 20 Mbps
                  upload speeds, and a 700 GB data cap.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={" Is Sparklight better than Centurylink?"}
            cssClass={"faq-content"}
          >
            <p>
              If you can get a Centurylink fiber-optic connection where you
              live, it’s better than Sparklight internet service. Centurylink’s
              fiber internet plan gets you up to 940 Mbps download and upload
              speeds with a 1 TB data cap for $65 a month. For the same price,
              Sparklight has only a cable internet connection with 200 Mbps
              download speeds, 20 Mbps upload speeds, and a 700 GB data cap.
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
            At CableTV.com, our TV writers research and test cable TV and
            internet providers like Sparklight, comparing plans, bundles,
            pricing, features, and functionality with other top providers of the
            same services. For more on how we do things, please see our
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
          See also: Sparklight Internet | Sparklight TV | Sparklight Channel
          lineup | Sparklight Bundles | Sparklight Voice | Sparklight Customer
          service
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default SparkLightReview;
