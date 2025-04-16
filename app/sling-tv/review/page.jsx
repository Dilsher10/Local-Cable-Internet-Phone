// import React, { useState } from "react";
import "./sling-tv-review.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { slingtvNavLinks } from "../../assets/data/navLinks/slingtvNavLinks";
import slingbroreview from "../../assets/images/sling-free-review.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import sling from "../../assets/images/sling.png";
import slingicon from "../../assets/images/sling-icon.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import dotted from "../../assets/images/dotted.png";
import slingtv from "../../assets/images/sling-tv.png";
import slingbike from "../../assets/images/bike-sling.png";
import PackageTable from "../../components/package-table/PackageTable";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Sling TV Review: Cost, Plans, And More"
};

const SlingTvReview = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: sling,
      rating: "(4.0/5)",
      starImg: star,
      desc: "Good free TV option",
      buttonText: "read full review",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: slingbroreview,

    cardsStrip: [
      {
        subtitle: "Free Trial:",
        title: "Varies",
        icon: slingicon,
      },
      {
        subtitle: "Channels:",
        title: "30-50+",
        icon: slingicon,
      },
      {
        subtitle: "Price:",
        title: "$40.00–$55.00/mo.",
        icon: slingicon,
      },
      {
        subtitle: "Cloud DVR:",
        title: "50 hrs.",
        icon: slingicon,
      },
    ],

    tableData: [
      {
        head: ["Plan", "price", "Channels", "Streams", "Cloud DVR", "Details"],

        body: [
          {
            content: ["1.", "Sling Orange", "$40/mo.", "30+", "1", "50 hrs."],
            linkPath: "#",
          },
          {
            content: ["2.", "Sling Blue", "$40/mo.", "40+", "3", "50 hrs."],
            linkPath: "#",
          },
          {
            content: [
              "3.",
              "Sling Orange + Blue",
              "$50/mo.",
              "45+",
              "4",
              "50 hrs.",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      " Data effective as of post date. Offers and availability may vary by location and are subject to change.",
  };
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  let packageTableData = [
    {
      head: ["Plan", "price", "Channels", "Streams", "Cloud DVR", "Details"],

      body: [
        {
          content: ["1.", "Sling Orange", "$40/mo.", "30+", "1", "50 hrs."],
          linkPath: "#",
        },
        {
          content: ["2.", "Sling Blue", "$40/mo.", "40+", "3", "50 hrs."],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Sling Orange + Blue",
            "$50/mo.",
            "45+",
            "4",
            "50 hrs.",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDatacompetition = [
    {
      head: ["Service", "Price", "Channels", "Streams", "Cloud DVR", "Details"],

      body: [
        {
          content: [
            "1.",
            "Sling TV",
            "$40.00–$55.00/mo.",
            "30–45+",
            "1–4",
            "50 hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "YouTube TV",
            "$72.99/mo.",
            "100+",
            "3",
            "Unlimited (9 mos.)",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Hulu + Live TV",
            "$76.99–$89.99/mo.",
            "85+",
            "2",
            "Unlimited (9 mos.)",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Philo",
            "$25.00/mo.",
            "70+",
            "3",
            "Unlimited (1 yr.)",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "fuboTV",
            "$74.99–$94.99/mo.",
            "150–220+",
            "10",
            "1,000 hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "6.",
            "DIRECTV STREAM",
            "$69.99–$159.99/mo.",
            "75–150+",
            "3–unlimited",
            "20 hrs.",
          ],
          linkPath: "#",
        },
        {
          content: ["7.", "Vidgo", "$69.99–$99.99/mo.", "110–150+", "3", "N/A"],
          linkPath: "#",
        },
      ],
    },
  ];

  return (
    <div className="sling-tv-review">
      {/* <SubNav links={slingtvNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Sling TV Review: Cost, Plans, And More
          </h2>
          <p className="sect-desc">
            Sling TV is an decent live TV streaming service on its own, but
            channel add-ons and customization capabilities are where it really
            shines.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is Sling TV good?</h4>
          <p>
            For the customizer who prefers to build their own channel lineups
            and doesn’t mind the extra costs of add-on packages, Sling TV is a
            great choice because it’s loaded with more options than a Cheesecake
            Factory menu. No matter what you’re into, there’s probably an add-on
            package for it.
            <br />
            Sling TV is one of the original live TV streaming services and still
            one of the least expensive. Besides its three plans, Sling Orange,
            Sling Blue (both $40 a month), and Sling Orange + Blue ($55 a
            month), Sling TV offers dozens of add-on channel packages. It also
            provides deals on over-the-air antennas to pick up the local
            channels it doesn’t carry (which is most of them).
            <br />
            Regular TV viewers who just want to watch their shows and channels
            might find Sling TV’s plans a bit confusing, if not lacking. Sling
            TV’s antenna workarounds to get local channels also might be more
            trouble than most are willing to deal with, even at relatively low
            live TV streaming prices.
            <br />
            But fear not—we’re going to walk you through it all, potential
            Slingers.
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
                  <td> Low pricing</td>
                  <td> Limited local channels</td>
                </tr>
                <tr>
                  <td> 30+ add-on options</td>
                  <td> No HBO or CINEMAX</td>
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
          <Link href={"#"}>Free trials and deals </Link>
          <Link href={"#"}>Plans and pricing </Link>
          <Link href={"#"}>Sling TV vs. the competition </Link>
          <Link href={"#"}>Channels </Link>
          <Link href={"#"}>Specs and features </Link>
          <Link href={"#"}>Video and audio quality </Link>
        </div>
      </div>

      <CTA
        heading={"Need better internet speeds for streaming?"}
        desc={
          "Enter your zip code to check out better speeds or prices available from internet providers in your area."
        }
      />

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={dotted} className="mark" alt="" />
          <h4>Sling TV free trials and deals </h4>
          <p>
            Sling TV doesn’t offer a free trial period anymore, but there are
            still plenty of deals to be had. Check out our Sling TV Deals guide
            for all the latest money-saving options.
          </p>
        </div>
      </div>

      <div className="section cost">
        <div className="head">
          <h2 className="sect-heading">
            Sling TV <span> plans and pricing </span>
          </h2>
          <p className="sect-desc">
            The difference between Sling Orange and Sling Blue shakes out like
            this: Sling Orange is tailored toward sports and family channels
            (like ESPN and Disney); Sling Blue has more entertainment and news
            channels (like Syfy and MSNBC).
            <br />
            We like Sling Orange + Blue because it features a decent combined
            channel lineup for just $55 a month, which is at least $10 cheaper
            than close competitors YouTube TV and Hulu + Live TV (but $30 more
            than Philo). But if either the Orange or the Blue plan alone covers
            your channel needs, go for it.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section competition">
        <div className="head">
          <h2 className="sect-heading">
            Sling TV <span> vs. the competition </span>
          </h2>
          <p className="sect-desc">
            Like we said, only Philo offers less-expensive live TV streaming
            than Sling TV. But, while Philo may have a few more channels, it
            can’t compete with Sling TV’s plethora of add-on options. And at
            least Sling TV streams sports and local channels; Philo has exactly
            zero.
            <br />
            Check out our Best Streaming Services guide for more on live TV
            streaming details and options.
          </p>
        </div>
        <PackageTable item={packageTableDatacompetition} />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section cost">
        <div className="head">
          <h2 className="sect-heading">
            Sling <span> TV channels </span>
          </h2>
          <p className="sect-desc">
            If you’re switching from cable or satellite TV to streaming, Sling
            TV’s channel lineups will look skinnier than Machine Gun Kelly on a
            juice cleanse. Even the combined Sling Orange + Blue plan is missing
            several popular channels, like Nickelodeon, Paramount Network, and
            CBS Sports Network.
            <br />
            You can get those channels, and nearly a hundred more, with Sling
            TV’s Extra add-on packages, which range from $6 to $11 more a month.
            Check out our Sling TV channel lineups and add-ons guide for the
            full picture (better hydrate first—it’s a big list).
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Sling TV sports channels</h4>
          <p className="after-heading">
            Sling Orange has ESPN, ESPN2, and Stadium sports channels included
            in its plan, and Sling Blue has FS1, NBC Sports Network, and NFL
            Network. That’s not an impressive sports lineup, even when combined
            into the Sling Orange + Blue plan.
            <br />
            Fortunately, Sling TV’s add-on packages are here for you, sports
            fans: Sling TV’s Sports Extra package delivers 26 more sports
            channels, including NBA TV, Pac-12 Network, and beIN Sports. For
            just $11 a month, this bridges the sportsball gap nicely.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Sling TV local channels</h4>
          <p className="after-heading">
            Sling TV would rather give or sell you an over-the-air antenna than
            pay for the rights to stream most local ABC, CBS, FOX, NBC, The CW,
            or PBS stations. This keeps Sling TV’s costs down and, as they say
            in the pizza biz, they pass the savings onto you.
            <br />
            Sling TV does carry ABC, NBC, and FOX stations in some markets, but
            only in the Blue and/or Orange + Blue plans. However, with Sling
            TV’s AirTV setup, you can use an antenna to integrate over-the-air
            channels into your on-screen guide. It takes a little more effort
            but works seamlessly once hooked up.
          </p>
        </div>
      </div>

      <div className="section features">
        <div className="head">
          <h2 className="sect-heading">
            Sling TV <span> specs and features </span>
          </h2>
          <p className="sect-desc">
            Sling TV has the usual live TV streaming features, like a cloud DVR
            and a simultaneous streams cap, and it’s compatible with most
            streaming TV devices, tablets, smartphones, and web browsers. Aside
            from its unique AirTV/antenna integration capabilities, Sling TV is
            a straightforward, meat-and-potatoes service (or quinoa-and-kale, if
            you prefer).
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Sling TV DVR</h4>
          <p className="after-heading">
            Sling TV’s included 50 hours of cloud DVR space isn’t bad—especially
            considering it used to give you just 10 hours. Meanwhile, the
            200-hour upgrade for an extra $5 a month is another example of how
            Sling TV’s add-ons can add up: if you’re not careful, your monthly
            bill can creep up into cable and satellite TV price territory.
          </p>
          <br />
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Plan</th>
                  <th>Storage</th>
                  <th>Price</th>
                  <th>Upgrades</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td> 1. </td>
                  <td> Sling Orange, Sling Blue, Sling Orange + Blue </td>
                  <td> 50 hrs. </td>
                  <td> Included </td>
                  <td> 200 hrs. ($5/mo.) </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Sling TV simultaneous streams</h4>
          <p className="after-heading">
            Confused? So are we. Sling Orange carries more sports and kids’
            channels, but it’s limited to a single stream, whereas Sling Blue
            offers three streams. If we were suspicious types, we’d think it’s a
            trick to get you to upgrade to Sling Orange + Blue’s sweet
            four-stream plan.
          </p>
          <br />
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Plan</th>
                  <th>Streams</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td> 1. </td>
                  <td> Sling Orange </td>
                  <td> 1 </td>
                </tr>
                <tr>
                  <td> 2. </td>
                  <td> Sling Blue </td>
                  <td> 3 </td>
                </tr>

                <tr>
                  <td> 3. </td>
                  <td> Sling Orange + Blue </td>
                  <td> 4 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Sling TV supported devices</h4>
          <p className="after-heading">
            Sorry, PlayStation, Nintendo, and Wii streamers—Sling TV’s got
            nothing for you.
          </p>
          <br />
          <ul className="channel-list">
            <li>AirTV</li>
            <li>Amazon Fire Cube, Stick, TV</li>
            <li>Android phones, tablets</li>
            <li>Android TV</li>
            <li>Apple TV (4th gen.)</li>
            <li>Apple TV 4K</li>
            <li>Chromecast, Chromecast with Google TV</li>
            <li>Echo Show</li>
            <li>iPhone, iPad</li>
            <li>LG TVs (select models)</li>
            <li>NVIDIA SHIELD Pro TV</li>
            <li>Oculus</li>
            <li>PC, Mac web browsers</li>
            <li>Portal</li>
            <li>Roku Ultra, Express, Premiere, Stick, TV</li>
            <li>Samsung TVs (select models)</li>
            <li>TiVo Stream</li>
            <li>Xbox One</li>
            <li>Xfinity X1</li>
          </ul>
        </div>
      </div>

      <div className="section cost">
        <div className="head">
          <h2 className="sect-heading">
            Sling <span> TV video and audio quality </span>
          </h2>
          <p className="sect-desc">
            Sling TV streams at 720p and 30 fps (frames per second), with some
            sports and premium channels streaming at 60 fps. It’s an HD picture
            close to what you get from most cable providers but slightly lower
            resolution than satellite TV.
          </p>
        </div>
        <Image src={slingbike} alt="" />
        <p className="below-table">Sling TV live stream of FX</p>
        <br />
        <p>
          Sling TV audio is standard 2.0 stereo, with some on-demand content in
          Dolby 5.1 Surround. As with all streaming services—live and
          on-demand—the faster your internet connection, the better your Sling
          TV picture will stream. We recommend at least 25 Mbps of download
          speed—more than what streaming services suggest—because we know you’re
          not using the internet to just watch Sling TV.
        </p>
        <br />
        <Image src={slingtv} alt="" />
        <p className="below-table">Sling TV's on-demand menu</p>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Sling TV worth it?</span>
          </h2>
          <p className="sect-desc">
            NFL Sunday Ticket offers live out-of-market access on Sunday
            afternoons and is now available through YouTube TV and YouTube’s
            Primetime Channels hub. The major downside to NFL Sunday Ticket is
            its high price tag. It’s also only accessible to those with a
            high-speed internet connection, which costs extra and may not be
            available everywhere.
            <br />
            If you don’t need every live matchup, we highlight other NFL viewing
            options in our How To Watch NFL Games guide. Most cable and
            satellite TV providers carry the main NFL channels. But pairing NFL+
            with an over-the-air HD antenna or an inexpensive live TV streaming
            service is one great way to tune in without breaking the bank.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> get Sling TV </Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Sling TV </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What is Sling Watch Party?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Sling TV lets you invite up to three guests for a Sling Watch
                  Party, a Zoom-like experience where you can see and chat with
                  other people while watching a show or movie. Currently, Sling
                  Watch Parties are limited to Chrome and Safari browsers, and
                  they aren’t available for premium channels, local channels, or
                  pay-per-view events.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What is Sling Watch Party?"}
            cssClass={"faq-content"}
          >
            <p>
              Sling TV lets you invite up to three guests for a Sling Watch
              Party, a Zoom-like experience where you can see and chat with
              other people while watching a show or movie. Currently, Sling
              Watch Parties are limited to Chrome and Safari browsers, and they
              aren’t available for premium channels, local channels, or
              pay-per-view events.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span>Does Sling TV carry local
                channels?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Sling TV carries only local ABC, NBC, and FOX channels (Sling
                  Blue and/or Sling Orange + Blue plans only) and not in every
                  area of the country. To get local CBS, FOX, NBC, The CW, and
                  PBS channels, Sling TV offers various over-the-air antenna
                  deals to receive them for free.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"Does Sling TV carry local channels?"}
            cssClass={"faq-content"}
          >
            <p>
              Sling TV carries only local ABC, NBC, and FOX channels (Sling Blue
              and/or Sling Orange + Blue plans only) and not in every area of
              the country. To get local CBS, FOX, NBC, The CW, and PBS channels,
              Sling TV offers various over-the-air antenna deals to receive them
              for free.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does Sling TV have live
                sports channels?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Sling TV features ESPN, ESPN2, and Stadium in its Orange plan,
                  and it carries FS1, NBC Sports Network, and NFL Network in its
                  Blue plan—all are included in the combo Orange + Blue plan.
                  <br />
                  Sling TV’s Sports Extra add-on package includes 26 more sports
                  channels for an additional $11 a month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does Sling TV have live sports channels?"}
            cssClass={"faq-content"}
          >
            <p>
              Sling TV features ESPN, ESPN2, and Stadium in its Orange plan, and
              it carries FS1, NBC Sports Network, and NFL Network in its Blue
              plan—all are included in the combo Orange + Blue plan.
              <br />
              Sling TV’s Sports Extra add-on package includes 26 more sports
              channels for an additional $11 a month.
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
            Our experts employed hours of hands-on testing with Sling TV, rating
            the streaming service on bang for your buck, reliability, features,
            and customer satisfaction. Then we matched up Max (formerly HBO Max)
            with other on-demand streaming services head to head to give a
            clearer picture of its strengths and weaknesses. For more
            information on our methodology, check out our{" "}
            <span className="link">
              <Link href={"#"}>How We Rank </Link> page.
            </span>
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}> Sling TV vs. YouTube TV</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Sling TV vs. Hulu + Live TV</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Sling Orange vs. Sling Blue</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default SlingTvReview;
