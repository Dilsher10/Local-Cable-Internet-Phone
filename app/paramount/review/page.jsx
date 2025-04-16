// import React, { useState } from "react";
import "./paramount-review.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { paramountNavLinks } from "../../assets/data/navLinks/paramountNavLinks";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import paramountbro from "../../assets/images/paramount-review-bro.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import paramount from "../../assets/images/paramount.png";
import paramounticon from "../../assets/images/paramount-icon.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import dotted from "../../assets/images/dotted.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import PackageTable from "../../components/package-table/PackageTable";
import CTA from "../../components/cta-section/CTA";
import { FaCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import paramountsceeen1 from "../../assets/images/paramount-sceeen-1.png";
import paramountsceeen2 from "../../assets/images/paramount-screen-2.png";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Paramount Plus Review"
};

const ParamountReview = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: paramount,
      rating: "(3.5/5)",
      starImg: star,
      desc: "Best value",
      buttonText: "compare to other services",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: paramountbro,

    cardsStrip: [
      {
        subtitle: "Free trial:",
        title: "30-day free trial (Best trial offer)",
        icon: paramounticon,
      },
      {
        subtitle: "Price:",
        title: "$5.99–$11.99/mo. or $59.99–$119.99/yr.",
        icon: paramounticon,
      },
      {
        subtitle: "Live channels:",
        title: "4",
        icon: paramounticon,
      },
      {
        subtitle: "On-demand library:",
        title: "36,000+ titles",
        icon: paramounticon,
      },
    ],

    tableData: [
      {
        head: [
          "Plan",
          "price",
          "Hours of content",
          "Video",
          "Streams",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Essential (with ads)",
              "$5.99/mo.",
              "30,000+",
              "1080p, 4K",
              "3",
            ],
            linkPath: "#",
          },
          {
            content: [
              "2.",
              "Paramount+ With SHOWTIME (no ads)",
              "$13.99/mo.",
              "30,000+",
              "1080p, 4K",
              "3",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "Data effective as of post date. Offers and availability may vary by location and are subject to change.",
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
        "Plan",
        "price",
        "Hours of content",
        "Video",
        "Streams",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Essential (with ads)",
            "$5.99/mo.",
            "30,000+",
            "1080p, 4K",
            "3",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Paramount+ With SHOWTIME (no ads)",
            "$13.99/mo.",
            "30,000+",
            "1080p, 4K",
            "3",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataCompetition = [
    {
      head: [
        "Service",
        "Price",
        "Video",
        "Streams",
        "Compatible Devices",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Paramount+",
            "$5.99–$11.99/mo. or $59.99–$119.99/yr.",
            "1080p",
            "3",
            "12+",
          ],
          linkPath: "#", // Replace with actual "View Plan" link
        },
        {
          content: [
            "2.",
            "Netflix",
            "$6.99–$22.99/mo.",
            "1080p, 4K",
            "2–4",
            "14+",
          ],
          linkPath: "#", // Replace with actual "View Plan" link
        },
        {
          content: ["3.", "Hulu", "$7.99–$17.99/mo.", "1080p, 4K", "2", "13+"],
          linkPath: "#", // Replace with actual "View Plan" link
        },
        {
          content: [
            "4.",
            "Prime Video",
            "$8.99–$14.99/mo. or $139.00/yr.",
            "1080p, 4K",
            "3",
            "13+",
          ],
          linkPath: "#", // Replace with actual "View Plan" link
        },
        {
          content: [
            "5.",
            "Disney+",
            "$7.99–$13.99/mo. or $139.99/yr.",
            "1080p, 4K",
            "4",
            "13+",
          ],
          linkPath: "#", // Replace with actual "View Plan" link
        },
        {
          content: [
            "6.",
            "Max",
            "$9.99–$19.99/mo. or $99.99–$199.99/yr.",
            "1080p, 4K",
            "2–4",
            "10+",
          ],
          linkPath: "#", // Replace with actual "View Plan" link
        },
        {
          content: ["7.", "Apple TV+", "$6.99/mo.", "1080p, 4K", "6", "7+"],
          linkPath: "#", // Replace with actual "View Plan" link
        },
        {
          content: [
            "8.",
            "Peacock",
            "$5.99–$11.99/mo. or $59.99–$119.99/yr.",
            "1080p, 4K",
            "3",
            "12+",
          ],
          linkPath: "#", // Replace with actual "View Plan" link
        },
        {
          content: [
            "9.",
            "Discovery+",
            "$4.99–$8.99/mo.",
            "1080p, 4K",
            "4",
            "12+",
          ],
          linkPath: "#", // Replace with actual "View Plan" link
        },
      ],
    },
  ];

  return (
    <div className="paramount-review">
      {/* <SubNav links={paramountNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Paramount Plus Review: Cost, Plans, Shows, And More
          </h2>
          <p className="sect-desc">
            We've tested Paramount+ for over a year and found that it's loaded
            with shows and movies from CBS, Comedy Central, Paramount Network,
            and more.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is Paramount Plus good?</h4>
          <p>
            Paramount+ is a rebrand of CBS All Access, which was a scattershot
            of originals, older shows, random movies, and stacks upon stacks of
            Star Trek. In our review of CBS All Access, we suggested that CBS
            All Access could just as easily be titled Star Trek+, but Paramount+
            spreads the entertainment love more evenly and widely. <br />
            In all, Paramount+ features around 30,000 shows from CBS, Comedy
            Central, Paramount Network, BET, MTV, VH1, and other channels, and
            hundreds of movies from the Paramount Pictures library. It’s a lot
            like CBS All Access, plus more. <br />
            CBS All Access fans won’t find anything to complain about with
            Paramount+, and newcomers will probably be less confused—it’s not
            just about CBS TV shows. We thought CBS All Access was OK;
            Paramount+ comes much closer to good (but not quite perfect) with
            more content from all of ViacomCBS’s networks, plus a bundle with
            SHOWTIME.
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
                  <td> Cheap plans and bundles</td>
                  <td> Unskippable Paramount+ ads</td>
                </tr>
                <tr>
                  <td> Deep library of TV shows and movies</td>
                  <td> Small lineup of originals</td>
                </tr>
                <tr>
                  <td>Local CBS livestream ($11.99 version)</td>
                  <td> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Need better internet speeds for streaming?"}
        desc={
          "Enter your zip code to check out better speeds or prices available from internet providers in your area."
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
          <Link href={"#"}> Plans and pricing </Link>
          <Link href={"#"}> Paramount Plus vs. the competition </Link>
          <Link href={"#"}> Shows on Paramount Plus </Link>
          <Link href={"#"}> Specs and features </Link>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={dotted} className="mark" alt="" />
          <h4>Paramount Plus free trials and deals </h4>
          <p>
            Paramount+, like CBS All Access before it, offers a seven-day free
            trial period to try out the service. You can also sign up for a full
            year of Paramount+ for 50% off, which is a great discount that can
            seriously add up.
          </p>
        </div>
      </div>

      <div className="section cost">
        <div className="head">
          <h2 className="sect-heading">
            Paramount Plus <span> plans and pricing </span>
          </h2>
          <p className="sect-desc">
            Paramount+ recently increased its ad-supported tier by a dollar,
            from $4.99 a month to $5.99 a month. The new, cheaper Essential plan
            also dropped local CBS station live TV streaming, as well as offline
            downloads for mobile viewing.
            <br />
            Also, be aware that “no ads” on the Paramount+ With SHOWTIME plan
            only applies to on-demand content—you’re still going to see ads on
            live TV, because it’s live.
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
            Paramount Plus <span> vs. the competition </span>
          </h2>
          <p className="sect-desc">
            Paramount+ falls in the inexpensive end of the streaming pack, in
            line with Apple TV+ and Discovery+. Only the ad-supported free tier
            of Peacock goes for less per month.
          </p>
        </div>
        <PackageTable item={packageTableDataCompetition} />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section cost">
        <div className="head">
          <h2 className="sect-heading">
            Shows and movies <span> on Paramount Plus </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Paramount Plus shows and movies</h4>
          <p className="after-heading">
            With over 30,000 hours TV shows and movies, Paramount+ can hold its
            own against corporate vault streamers like Peacock and Max. Like
            those two, Paramount+ features content-specific hubs: CBS, Comedy
            Central, BET, MTV, Nickelodeon, and Smithsonian Channel. You can
            also find shows, movies, and live TV through the top menu. We have a
            few recs in our What to Watch on Paramount+ guide, btw. <br />
            You’re able to watch the latest episodes of CBS shows the day after
            they’ve aired on CBS live TV, including comedies, dramas, late-night
            talk shows (like The Late Show with Stephen Colbert and The Late
            Late Show with James Corden), and news (like 60 Minutes, Face the
            Nation, and 48 Hours). <br />
            There’s also a deep trove of shows and stand-up specials from Comedy
            Central, as well as all 10 seasons of VH1 staple RuPaul’s Drag Race,
            and every Star Trek series and movie from the ‘60s forward.
            Previously aired CBS specials like The Grammy Awards can also be
            found on Paramount+. <br />
            There are a few high-profile omissions from Paramount+’s library.
            The big one you won’t find is popular Paramount Network drama
            Yellowstone, which streams seasons 1–4 exclusively on Peacock. If
            you’re looking for Kevin Costner’s Sons of Anarchy on a Ranch, it’s
            not on Paramount+. A close runner-up: former CBS series The Big Bang
            Theory (it’s on Max). The Paramount+ live TV streaming channels
            (Premium plan only) are composed of CBS (your local station), CBSN
            (24/7 news), CBS Sports HQ (around-the-clock sports analysis and
            live games), and ET Live (Entertainment Tonight on a perpetual
            loop).
          </p>
          <br />
          <ul className="channel-list">
            <li>Young Sheldon</li>
            <li>Evil</li>
            <li>The Neighborhood</li>
            <li>FBI</li>
            <li>Mom</li>
            <li>Love Island</li>
            <li>Chappelle’s Show</li>
            <li>Comedy Central standup specials</li>
            <li>Daria</li>
            <li>Bar Rescue</li>
            <li>Wings</li>
            <li>Tosh.0</li>
            <li>Key & Peele</li>
            <li>RuPaul’s Drag Race</li>
            <li>All Rise</li>
            <li>CSI</li>
            <li>Survivor</li>
            <li>The Good Wife</li>
            <li>Beverly Hills, 90210</li>
            <li>Big Brother</li>
            <li>Star Trek series</li>
            <li>Peppa Pig</li>
            <li>SpongeBob SquarePants</li>
            <li>The Fairly Oddparents</li>
            <li>Blue’s Clues</li>
            <li>Bob the Builder</li>
            <li>The Backyardigans</li>
            <li>Bubble Guppies</li>
            <li>CatDog</li>
            <li>Are You Afraid of the Dark?</li>
            <li>Clarissa Explains it All</li>
            <li>Dora the Explorer</li>
            <li>Doug</li>
            <li>Crashletes</li>
            <li>iCarly</li>
            <li>Kung Fu Panda: Legends of Awesomeness</li>
            <li>Inspector Gadget</li>
            <li>Strawberry Shortcake</li>
            <li>Super Mario World</li>
            <li>Teenage Mutant Ninja Turtles</li>
            <li>The Thundermans</li>
            <li>Indiana Jones movies</li>
            <li>Charlie’s Angels: Full Throttle</li>
            <li>Sin City</li>
            <li>From Dusk till Dawn</li>
            <li>Grease</li>
            <li>The Uninvited</li>
            <li>Vanilla Sky</li>
            <li>Failure to Launch</li>
            <li>Minority Report</li>
            <li>Black Sheep</li>
            <li>Election</li>
            <li>Kingpin</li>
            <li>Nacho Libre</li>
            <li>Scrooged</li>
            <li>Sahara</li>
            <li>Snow Day</li>
            <li>Up in Smoke</li>
            <li>Aeon Flux</li>
            <li>Star Trek movies</li>
          </ul>
        </div>

        <div className="package-table-container channels">
          <h4>SHOWTIME on Paramount Plus</h4>
          <p className="after-heading">
            SHOWTIME is now officially part of Paramount+, and you can no longer
            purchase it as a standalone service. Instead, you can find SHOWTIME
            content with the $11.99/mo., ad-free “Paramount+ with SHOWTIME”
            plan. It’s a pretty good deal for a streaming bundle, and it grants
            you access to a lot of great content.
          </p>
          <br />
          <h4>SHOWTIME titles (partial list):</h4>
          <ul className="channel-list">
            <li>Billions</li>
            <li>Couples Therapy</li>
            <li>Dexter: New Blood</li>
            <li>Homeland</li>
            <li>Queer as Folk</li>
            <li>Shameless</li>
            <li>The Tudors</li>
            <li>Yellowjackets</li>
            <li>Ziwe</li>
            <li>1917</li>
            <li>Bodies Bodies Bodies</li>
            <li>Forrest Gump</li>
            <li>Kinky Boots</li>
            <li>Marcel the Shell with Shoes On</li>
            <li>Thelma & Louise</li>
          </ul>
        </div>

        <div className="package-table-container channels">
          <h4>Paramount Plus original shows and movies </h4>
          <p className="after-heading">
            The Paramount+ roster of exclusive originals is small but growing,
            and includes critical hits like The Good Fight, Why Women Kill, and
            the latest adaptation of Stephen King’s The Stand. There’s also a
            trifecta of excellent Star Trek series, and a new crime thriller,
            Mayor of Kingstown. Grease: Rise of the Pink Ladies was also very
            good, but it disappeared from the service just a few weeks after its
            finale.
            <br />
            On the other side of the reviews, Jordan Peele’s Twilight Zone
            revival has received mixed reactions, and so-so series Strange Angel
            and Tell Me a Story were both canceled after two seasons. Apart from
            a small but growing number of gems, the value of Paramount+ isn’t
            yet in the originals.
          </p>
          <br />
          <h4>Paramount Plus originals (partial list):</h4>
          <ul className="channel-list">
            <li>Mayor of Kingstown</li>
            <li>1883</li>
            <li>Guilty Party</li>
            <li>Star Trek: Lower Decks</li>
            <li>The Game</li>
            <li>School Spirits</li>
            <li>The Good Fight</li>
            <li>Evil</li>
            <li>Mike Judge’s Beavis & Butt-Head</li>
            <li>iCarly</li>
            <li>Star Trek: Discovery</li>
            <li>Star Trek: Picard</li>
          </ul>
        </div>

        <div className="package-table-container channels">
          <h4>Paramount Plus live sports </h4>
          <p className="after-heading">
            Live sports on Paramount+ is limited to what’s carried by CBS TV and
            cable’s CBS Sports Network (Paramount+ With SHOWTIME plan only). NFL
            games (including the Super Bowl on select years), NCAA March Madness
            games (excluding those aired on TBS, TNT, and truTV), Masters golf,
            and college hockey (yes, it’s a thing) can be found on Paramount+.
            <br />
            Paramount+ also features a healthy lineup of UEFA and NWSL soccer
            coverage. It probably won’t cater to all of your sports needs, but
            Paramount+ has a bit more than most other on-demand streaming
            services.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Paramount Plus local channels </h4>
          <p className="after-heading">
            You get exactly one local channel with Paramount+: a live feed of
            your area CBS affiliate ($11.99 tier only). Since all CBS shows are
            available on-demand, Paramount+ doesn’t offer a cloud DVR to record
            anything from its live feed.
            <br />
            Also, the live schedule doesn’t include any local or news
            programming, just CBS’s primetime series. You’ll have to find The
            Drew Barrymore Show on your own.
          </p>
        </div>
      </div>

      <div className="section competition">
        <div className="head">
          <h2 className="sect-heading">
            Paramount Plus <span> specs and features </span>
          </h2>
          <p className="sect-desc">
            Paramount+ carries over the same specs and features from CBS All
            Access; no major overhauls came with the rebrand.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4> Multiple streams</h4>
          <p className="after-heading">
            Along with its plans and pricing changes, Paramount+ also upped its
            simultaneous streams from two to three, which is the average for
            most streaming services (what’s up with two, Hulu?). <br />
            The Premium/SHOWTIME tier of Paramount+ allows for offline downloads
            of most content for viewing on-the-go, minus Comedy Central, BET,
            MTV, Smithsonian, and some Nickelodeon shows; the ad-supported tier
            does not.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Service</th>
                  <th>Included streams</th>
                  <th>Offline downloads</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1. </td>
                  <td>Paramount+ with ads </td>
                  <td>3 </td>
                  <td>No </td>
                </tr>
                <tr>
                  <td>2. </td>
                  <td>Paramount+ with SHOWTIME </td>
                  <td>3 </td>
                  <td>Yes </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Compatible devices </h4>
          <p className="after-heading">
            What CBS All Access got right was making itself available on all the
            major streaming platforms, which means Paramount+ likely won’t be
            absent from your device. Unless it’s a Nintendo.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th>Device</th>
                  <th>Disney+</th>
                  <th>Hulu</th>
                  <th>ESPN+</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. Amazon Fire Cube, Stick, TV</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>2. Android phones, tablets</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>3. Android TV (Sony Bravia, NVIDIA SHIELD)</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>4. Apple AirPlay</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>5. Apple TV (4th gen.)</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>6. Apple TV 4K</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>7. Chromecast, Chromecast with Google TV</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>8. Cox Contour 2, Contour Stream</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>9. Echo Show</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>10. Facebook Portal TV</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>11. iPhone, iPad (Touch, iPod, iPad Mini)</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>12. LG Smart TV (with webOS)</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>13. Nintendo Switch</td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                </tr>
                <tr>
                  <td>14. NVIDIA SHIELD TV Pro</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                </tr>
                <tr>
                  <td>15. Oculus Go</td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                </tr>
                <tr>
                  <td>16. Oculus Quest</td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                </tr>
                <tr>
                  <td>17. PC (web browsers)</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>18. Mac (web browsers)</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>19. PlayStation 3, 4, 5</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>20. Roku, Roku TV</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>21. Samsung TVs (select models)</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>22. TiVo Stream 4K</td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                </tr>
                <tr>
                  <td>23. VIZIO SmartCast TV (select models)</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>24. Wii</td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                </tr>
                <tr>
                  <td>25. Xbox One, Xbox Series S, Xbox Series X</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>26. Xfinity X1</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Video and audio quality </h4>
          <p className="after-heading">
            Paramount+ streams at 1080p HD on-demand, though live TV is more in
            the 720p range due to the nature of livestreaming. As we mentioned
            in our CBS All Access review, it’s kind of a shame that shows like
            Star Trek: Discovery can’t get the 4K treatment, but Paramount+’s
            1080p resolution still looks (dilithium) crystal clear.
          </p>
          <br />
          <Image src={paramountsceeen1} alt="paramountsceeen1" />
          <br />
          <p className="after-heading">
            The Paramount+ home screen is fairly easy to navigate, with a top
            menu, six channel (or “Brand”) hubs, and descending rows featuring
            “Latest Full Episodes” from CBS, “Trending Shows,” “Recently Added
            Shows,” “On Now” livestreams, “Sports,” and more.
          </p>
          <br />
          <Image src={paramountsceeen2} alt="paramountsceeen2" />
          <br />
          <p className="after-heading">
            While the shows and movies sections are neatly sortable by genre,
            like “Comedy,” “Drama,” “Documentary,” etc., the hubs don’t offer
            the same navigation. Sure, it would be redundant to search “Comedy”
            within the Comedy Central hub, but some specific options (like
            “Standup” or “Animation”) would be nice. Paramount+ streams in
            standard 2.0 stereo audio.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Paramount Plus worth it?</span>
          </h2>
          <p className="sect-desc">
            If you were already a CBS All Access subscriber, you now have
            Paramount+, so it’s not like we have to convince you to switch—it’s
            the same service, but with more shows. For those who were on the
            fence about CBS All Access, however, Paramount+ is easier to define:
            it’s not just NCIS and Star Trek reruns. <br />
            The real selling point of Paramount+ is its deep catalog of shows
            from CBS, Comedy Central, BET, Nickelodeon, and MTV—that’s a gold
            mine of content by itself. The original shows are getting better all
            the time, but Paramount+ is going to have to step up production to
            compete with Netflix and Hulu. Plus, the new bundle with SHOWTIME
            also helps bump up Paramount+’s quality. <br />
            Lastly, Paramount+ doesn’t offer much for sports or movie fans.
            Unless you’re into European soccer and dusty flicks you haven’t
            watched since the last time you visited a Blockbuster Video, that
            is.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> get Paramount +</Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Paramount Plus </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How much does Paramount
                Network cost?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Paramount Network can cost you anywhere from $5.99 per month
                  (for select on-demand content on Paramount+) to roughly
                  $50.00–$100.00 per month for a live TV streaming service or
                  traditional cable TV provider that carries the channel.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" How much does Paramount Network cost?"}
            cssClass={"faq-content"}
          >
            <p>
              Paramount Network can cost you anywhere from $5.99 per month (for
              select on-demand content on Paramount+) to roughly $50.00–$100.00
              per month for a live TV streaming service or traditional cable TV
              provider that carries the channel.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is Yellowstone on Paramount
                Plus?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Kevin Costner cable hit Yellowstone, which first runs on
                  Paramount Network, is not streaming on Paramount+. Since it’s
                  not owned or produced by Paramount Network or ViacomCBS, the
                  production company was free to shop Yellowstone to other
                  streaming outlets. The first four seasons of Yellowstone are
                  currently streaming on Peacock.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Is Yellowstone on Paramount Plus?"}
            cssClass={"faq-content"}
          >
            <p>
              Kevin Costner cable hit Yellowstone, which first runs on Paramount
              Network, is not streaming on Paramount+. Since it’s not owned or
              produced by Paramount Network or ViacomCBS, the production company
              was free to shop Yellowstone to other streaming outlets. The first
              four seasons of Yellowstone are currently streaming on Peacock.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What's the difference
                between Paramount Plus and Paramount Network?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Paramount Plus and Paramount Network aren’t the same thing.
                  Paramount+ is the new name of the original streaming service
                  CBS All Access, while Paramount Network (formerly Spike TV) is
                  a cable/satellite TV channel. Both are owned by ViacomCBS.
                  Paramount+ streams some shows from Paramount Network (like Bar
                  Rescue and Ink Master) but doesn’t have the rights to other
                  popular series (like Yellowstone and Lip Sync Battle).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={
              " What's the difference between Paramount Plus and Paramount Network?"
            }
            cssClass={"faq-content"}
          >
            <p>
              Paramount Plus and Paramount Network aren’t the same thing.
              Paramount+ is the new name of the original streaming service CBS
              All Access, while Paramount Network (formerly Spike TV) is a
              cable/satellite TV channel. Both are owned by ViacomCBS.
              Paramount+ streams some shows from Paramount Network (like Bar
              Rescue and Ink Master) but doesn’t have the rights to other
              popular series (like Yellowstone and Lip Sync Battle).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span>Did Paramount Plus replace
                CBS All Access?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  In March 2021, Paramount+ became the new name of CBS All
                  Access. Paramount+ is a rebrand, not a replacement, of the
                  same streaming service, which will function as it did before,
                  with new content additions from networks Comedy Central, BET,
                  MTV, and Smithsonian Channel.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={"Did Paramount Plus replace CBS All Access?"}
            cssClass={"faq-content"}
          >
            <p>
              In March 2021, Paramount+ became the new name of CBS All Access.
              Paramount+ is a rebrand, not a replacement, of the same streaming
              service, which will function as it did before, with new content
              additions from networks Comedy Central, BET, MTV, and Smithsonian
              Channel.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> What is the monthly cost of
                Paramount Plus?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Paramount Plus costs $5.99–$11.99/mo. or $59.99–$119.99/yr..
                  In June 2023 the basic, ad-supported Paramount+ Essential plan
                  increased its price from $4.99 to $5.99 per month, and the
                  Premium plan (now renamed as Paramount+ with SHOWTIME)
                  increased from $9.99 to $11.99 per month. Learn more about
                  Paramount+ bundles here.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" What is the monthly cost of Paramount Plus?"}
            cssClass={"faq-content"}
          >
            <p>
              Paramount Plus costs $5.99–$11.99/mo. or $59.99–$119.99/yr.. In
              June 2023 the basic, ad-supported Paramount+ Essential plan
              increased its price from $4.99 to $5.99 per month, and the Premium
              plan (now renamed as Paramount+ with SHOWTIME) increased from
              $9.99 to $11.99 per month. Learn more about Paramount+ bundles
              here.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> How do I get Paramount Plus
                for free?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  You can get Paramount Plus for free with a free 7-day trial or
                  by logging into the Paramount Plus app using your current
                  cable, satellite, or live TV streaming login.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" How do I get Paramount Plus for free?"}
            cssClass={"faq-content"}
          >
            <p>
              You can get Paramount Plus for free with a free 7-day trial or by
              logging into the Paramount Plus app using your current cable,
              satellite, or live TV streaming login.
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
            Our experts employed hours of hands-on testing with Paramount+,
            rating the streaming service on bang for your buck, reliability,
            features, and customer satisfaction. Then we matched up Paramount+
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
                <Link href={"#"}>What to Watch on Paramount+</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best On-Demand Streaming Services</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Streaming Devices</Link>
              </span>
            </li>{" "}
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>How to Watch Yellowstone</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default ParamountReview;
