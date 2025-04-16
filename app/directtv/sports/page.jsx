// import React, { useState } from "react";
import "./direct-tv-sports.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { directtvNavLinks } from "../../assets/data/navLinks/directtvNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import ladydirecttv from "../../assets/images/ladydirecttv.png";
import star from "../../assets/images/star.png";
import dsign from "../../assets/images/dsign.png";
import directtvlogo from "../../assets/images/directtvlogo.png";
import CTA from "../../components/cta-section/CTA";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import quotations from "../../assets/images/quotations.svg";
import network from "../../assets/images/network.png";
import dollarbubble from "../../assets/images/dollarbubble.png";
import stars from "../../assets/images/stars.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import PackageTable from "../../components/package-table/PackageTable";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa6";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "DIRECTV Sports Packages"
};

const DirectTvSports = () => {
  // const [faq, setFaq] = useState();
  let heroData = {
    card1: {
      logo: directtvlogo,
      rating: " (4.0/5)",
      starImg: star,
      desc: "Best TV provider for sports",
      buttonText: "read DIRECTV Review",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: ladydirecttv,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "DIRECTV",
        icon: dsign,
      },
      {
        subtitle: "Channel count:",
        title: "165–340+",
        icon: dsign,
      },
      {
        subtitle: "Price:",
        title: "$69.99–$159.99/mo.",
        icon: dsign,
      },
      {
        subtitle: "DVR:",
        title: "200 hrs. included",
        icon: dsign,
      },
    ],

    tableData: [
      {
        head: [
          "Package",
          "Price for first year",
          "Channel count",
          "Popular channels",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "ENTERTAINMENT All Included",
              "$64.99/mo.*",
              "165+",
              "ESPN, ESPN2, and FS1",
            ],
            linkPath: "#",
          },

          {
            content: [
              "2.",
              "CHOICE™ All Included",
              "$84.99/mo.*",
              "200+",
              "NFL Network, NBA TV, and regional sports networks",
            ],
            linkPath: "#",
          },
          {
            content: [
              "3.",
              "ULTIMATE All Included ",
              "$109.99/mo.* ",
              "270+ ",
              "CBS Sports Network, Golf Channel, and NHL Network ",
            ],
            linkPath: "#",
          },
          {
            content: [
              "4.",
              "PREMIER™All Included ",
              "$154.99/mo.* ",
              "340+ ",
              "ESPN College Extra, Stadium College Sports, and Outdoor Channel ",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "*for 24 mos. plus taxes and fees. Data effective as of post date. Offers and availability may vary by location and are subject to change.",
  };
  // let packageTableData = [ 
  //   {
  //     head: ["Package", "Price*", "Satellite", "Internet", "Details"],

  //     body: [
  //       {
  //         content: [
  //           "1.",
  //           "MLB EXTRA INNINGS®",
  //           "$139.99/season",
  //           <FaCheck id="Fa1" className="check-icon" />,
  //           <ImCross id="Im1" className="cross-icon" />,
  //         ],
  //         linkPath: "#",
  //       },
  //       {
  //         content: [
  //           "2.",
  //           "MLB EXTRA INNINGS®",
  //           "$139.99/season",
  //           <FaCheck id="Fa2" className="check-icon" />,
  //           <ImCross id="Im2" className="cross-icon" />,
  //         ],
  //         linkPath: "#",
  //       },
  //       {
  //         content: [
  //           "3.",
  //           "MLB EXTRA INNINGS®",
  //           "$139.99/season",
  //           <FaCheck id="Fa3" className="check-icon" />,
  //           <ImCross id="Im3" className="cross-icon" />,
  //         ],
  //         linkPath: "#",
  //       },
  //     ],
  //   },
  // ];
  let packageTableDataOfferings = [
    {
      head: ["Add-on", "Price*", "Channel count", "Key channels", "Details"],

      body: [
        {
          content: [
            "1.",
            "DIRECTV Deportes",
            "$4.99/mo.",
            "5+",
            "ESPN Deportes, Fox Deportes, and TUDN",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "México Plus",
            "$7.99/mo.",
            "25+",
            "Estrella TV, Multimedios, and Telemundo",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "En Español",
            "$14.99/mo.",
            "60+",
            "ESPN Deportes, Fox Deportes, and Telemundo",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Américas Plus",
            "$7.99/mo.",
            "15+",
            "Telemundo, UniMás, and UNIVERSO",
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
    <div className="direct-tv-sports">
      {/* <SubNav links={directtvNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">DIRECTV Sports Packages</h2>
          <p className="sect-desc">
            Our experts highlight what sports fans can receive through DIRECTV,
            including sports channels and league-specific packages.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-direct-tv-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            5-day free trial: Tired of cable and satellite TV but not quite sure
            if you wanna cut the cord?
            <span className="link">
              <Link href={"#"}> DIRECTV STREAM </Link>
            </span>{" "}
            is a good streaming alternative for folks who want the look and feel
            of old-school TV without the installation requirements, equipment
            fees, and other headaches that come with cable.
          </p>
          <br />
          <h4>Are DIRECTV Sport channels good?</h4>
          <p>
            DIRECTV offers some of the most comprehensive TV packages for sports
            fans. DIRECTV carries out-of-market packages for several major
            league sports. Plus, its lineup of over 20 basic sports channels
            ensures you’ll get coverage of the biggest sporting competitions
            worldwide.
            <br />
            Keep reading for a complete list of sports packages and channels,
            including Spanish-language options for those who enjoy watching
            sports en español.
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
                  <td>Over 20 basic sports channels</td>
                  <td>Expensive plans</td>
                </tr>
                <tr>
                  <td>Wide regional sports network (RSN) availability</td>
                  <td>2-year contract</td>
                </tr>
                <tr>
                  <td>Spanish-language options</td>
                  <td>Bulky equipment requirements</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Is DIRECTV available in your area?"}
        desc={
          "Enter your zip code below to see top TV services in your neighborhood."
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
          <Link href={"#"}>DIRECTV sports packages</Link>
          <Link href={"#"}>DIRECTV sports channels </Link>
          <Link href={"#"}>DIRECTV Spanish-language sports packages</Link>
        </div>
      </div>

      <div className="section direct-tv-blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
        </div>
        <div className="package-table-container channels">
          <Image src={stars} alt="" className="mark" />
          <h4>Is DIRECTV worth it for sports fans?</h4>
          <br />
          <p>
            To say DIRECTV is worth it for sports fans is an understatement
            because DIRECTV is our favorite TV service provider for sports. The
            satellite TV provider offers over 20 sports channels and includes
            one of the largest regional sports network (RSN) selections.
            <br />
            DIRECTV also has several other sports add-ons, like MLB EXTRA
            INNINGS® and NBA League Pass. The add-ons don’t come with any
            DIRECTV plan. But they bring you out-of-market sports coverage, so
            you get the most games from the leagues you love.
            <br />
            The downside to DIRECTV is its cost. While its base plans come with
            many channels, the prices are steep and require a two-year contract.
            On top of that, there’s the sizeable satellite dish that gets
            installed on your property—a less-than-ideal setup for anyone who
            lives in an apartment or condo.
            <br />
            If you don’t love inconvenient equipment installation and ticky-tack
            upcharges (Who doesn’t?), you can get a comparable DIRECTV STREAM
            plan without satellite dishes or DVR fees. All you need is a good
            internet connection and a streaming device, and you’re in business.
          </p>
        </div>
      </div>

      <div className="section direct-tv-sports-packages">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV <span> sports packages </span>
          </h2>
          <p className="sect-desc">
            DIRECTV offers out-of-market sports packages for MLB, NBA, and NHL
            fans. Each package varies in cost—with discounts sometimes available
            mid-season.
            <br />
            While regional blackout restrictions apply to each package, having
            the DIRECTV CHOICE plan or above will ensure you have access to most
            games blacked out on the out-of-market sports package. The only
            exception to this is when exclusive games play on streaming
            services, like in the case of MLB games on Apple TV+ and Peacock.
          </p>
        </div>
        <div className="package-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Package </th>
                  <th>Price*</th>
                  <th>Satellite</th>
                  <th>Internet</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>MLB EXTRA INNINGS®</td>
                  <td>$139.99/season</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <Link href={"#"}>View Plans</Link> 
                  </td>
                </tr>        
                <tr>
                  <td>2.</td>
                  <td>MLB EXTRA INNINGS®</td>
                  <td>$139.99/season</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <Link href={"#"}>View Plans</Link> 
                  </td>
                </tr>     
                <tr>
                  <td>3.</td>
                  <td>MLB EXTRA INNINGS®</td>
                  <td>$139.99/season</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <Link href={"#"}>View Plans</Link> 
                  </td>
                </tr>             
              </tbody>
            </table>
          </div>
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change. Blackout restrictions and other
          conditions apply to all sports programming.
        </p>

        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>Pro tip:</h4>
          <br />
          <p>
            The longtime DIRECTV-exclusive NFL Sunday Ticket heads to YouTube TV
            for the 2023 season. Learn everything there is to know about the
            change in our guide: Is NFL Sunday Ticket Leaving DIRECTV?
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>DIRECTV Sports Pack</h4>
          <br />
          <p>
            DIRECTV also offers its own sports package appropriately named
            DIRECTV Sports Pack for $13.99 a month. It gets you over 40
            out-of-market sports networks regardless of your location—including
            higher-tiered sports channels like ESPN College Extra, MLB Strike
            Zone, and Next Level Sports.
            <br />
            But a word of caution—even when you have the out-of-market sports
            networks through DIRECTV Sports Pack, professional out-of-market
            games are still subject to blackout restrictions. That means you’ll
            need one of the league-specific packages from the section above to
            get out-of-market MLB, NBA, and NHL coverage.
            <br />
            The following is a complete list of channels available through
            DIRECTV Sports Pack.
          </p>
          <ul className="channel-list">
            <li>· ACC Network</li>
            <li>· Altitude Sports</li>
            <li>· Bally Sports Arizona</li>
            <li>· Bally Sports Cincinnati</li>
            <li>· Bally Sports Detroit</li>
            <li>· Bally Sports Florida</li>
            <li>· Bally Sports Great Lakes</li>
            <li>· Bally Sports Midwest</li>
            <li>· Bally Sports North</li>
            <li>· Bally Sports Ohio</li>
            <li>· Bally Sports Oklahoma</li>
            <li>· Bally Sports San Diego</li>
            <li>· Bally Sports SoCal</li>
            <li>· Bally Sports South</li>
            <li>· Bally Sports Southeast</li>
            <li>· Bally Sports Southwest</li>
            <li>· Bally Sports Sun</li>
            <li>· Bally Sports West</li>
            <li>· Bally Sports Wisconsin</li>
            <li>· CBS Sports Network</li>
            <li>· ESPN College Extra</li>
            <li>· Longhorn Network</li>
            <li>· MSG</li>
            <li>· MSG Sportsnet</li>
            <li>· Mid-Atlantic Sports Network (MASN)</li>
            <li>· MLB Strike Zone</li>
            <li>· Monumental Sports Network</li>
            <li>· NBC Sports Bay Area</li>
            <li>· NBC Sports Boston</li>
            <li>· NBC Sports California</li>
            <li>· NBC Sports Chicago</li>
            <li>· NESN</li>
            <li>· Next Level Sports</li>
            <li>· NFL RedZone</li>
            <li>· Outdoor Channel</li>
            <li>· ROOT SPORTS Northwest</li>
            <li>· Space City Home Network</li>
            <li>· Spectrum SportsNet</li>
            <li>· Spectrum SportsNet LA</li>
            <li>· SportsNet New York (SNY)</li>
            <li>· SportsNet Pittsburgh</li>
            <li>· SportsNet Rocky Mountain</li>
            <li>· SportsNet Rocky Mountain West</li>
            <li>· TUDN</li>
            <li>· TVG</li>
            <li>· YES Network</li>
          </ul>
        </div>
      </div>

      <div className="section direct-tv-sports-channels">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV <span> sports channels </span>
          </h2>
          <p className="sect-desc">
            With over 20 basic sports channels, DIRECTV has you covered when it
            comes to catching major sporting events. You’ll need a higher-tiered
            TV plan to access every sports channel that DIRECTV offers, but
            we’ve listed everything in the table below so you can decide which
            plan suits you the best.
            <br />
            Omitted from the table are entertainment channels that air sports on
            a part-time basis. But have no fear, channels like TBS, TNT, truTV,
            and USA Network are available in every DIRECTV base plan. That means
            you won’t miss out on nationally televised NBA, NHL, and MLB
            games—including crucial playoff matchups.
          </p>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th> </th>
                <th>Channel</th>
                <th>Channel number</th>
                <th>ENTERTAINMENT</th>
                <th>CHOICE™</th>
                <th>ULTIMATE</th>
                <th>PREMIER™</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1. </td>
                <td>A&E </td>
                <td>118 </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
              </tr>
              <tr>
                <td>2. </td>
                <td>ABC </td>
                <td>651 </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
              </tr>
              <tr>
                <td>3. </td>
                <td>Afro </td>
                <td>554 </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
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
                <td>4. </td>
                <td>American Heroes Channel (AHC) </td>
                <td>151 </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
              </tr>
              <tr>
                <td>5. </td>
                <td>BBC America </td>
                <td>Varies by location </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
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
                <td>6. </td>
                <td>MTV Live </td>
                <td>230 </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
              </tr>
              <tr>
                <td>7. </td>
                <td>WE tv </td>
                <td>544 / 456 / 546 </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
              </tr>
              <tr>
                <td>8. </td>
                <td>WE tv </td>
                <td>544 / 456 / 546 </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
              </tr>
              <tr>
                <td>9. </td>
                <td>WE tv </td>
                <td>544 / 456 / 546 </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
              </tr>
              <tr>
                <td>10. </td>
                <td>WE tv </td>
                <td>544 / 456 / 546 </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>

        <div className="package-table-container channels">
          <Image src={network} className="mark" alt="" />
          <h4>Premium channels on DIRECTV</h4>
          <br />
          <p>
            While it’s the most expensive plan, DIRECTV PREMIER comes with
            popular premium channels like Max (formerly HBO Max), SHOWTIME, and
            STARZ. But you can also sign up for these channels individually.
            That means you can add SHOWTIME to any DIRECTV plan without breaking
            the bank—allowing you to enjoy combat sports like Bellator MMA
            without performing a chokehold on your wallet.
          </p>
        </div>
      </div>

      <div className="section direct-tv-sports-networks">
        <div className="head">
          <h2 className="sect-heading">
            <span> Regional sports networks </span> on DIRECTV
          </h2>
          <p className="sect-desc">
            DIRECTV and DIRECTV STREAM offer a lot of regional sports networks
            (RSNs). In fact, both services share one of the most extensive
            lineups of RSNs. Anyone subscribed to the CHOICE package or above
            will receive RSNs. Your home location determines which RSNs are
            available to you. But you can verify your area’s RSNs by entering
            your zip code into DIRECTV’s local RSN lookup tool.
          </p>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th> </th>
                <th>Channel</th>
                <th>Channel number</th>
                <th>ENTERTAINMENT</th>
                <th>CHOICE™</th>
                <th>ULTIMATE</th>
                <th>PREMIER™</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1. </td>
                <td>A&E </td>
                <td>118 </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
              </tr>
              <tr>
                <td>2. </td>
                <td>ABC </td>
                <td>651 </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
              </tr>
              <tr>
                <td>3. </td>
                <td>Afro </td>
                <td>554 </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
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
                <td>4. </td>
                <td>American Heroes Channel (AHC) </td>
                <td>151 </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
              </tr>
              <tr>
                <td>5. </td>
                <td>BBC America </td>
                <td>Varies by location </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
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
                <td>6. </td>
                <td>MTV Live </td>
                <td>230 </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
              </tr>
              <tr>
                <td>7. </td>
                <td>WE tv </td>
                <td>544 / 456 / 546 </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
              </tr>
              <tr>
                <td>8. </td>
                <td>WE tv </td>
                <td>544 / 456 / 546 </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
              </tr>
              <tr>
                <td>9. </td>
                <td>WE tv </td>
                <td>544 / 456 / 546 </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
              </tr>
              <tr>
                <td>10. </td>
                <td>WE tv </td>
                <td>544 / 456 / 546 </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
          <br />
          Customers with CHOICE,™ ULTIMATE and MÁS ULTRA™ only receive Regional
          Sports Networks for their market based on ZIP. Most Regional Sports
          Networks available in all markets for PREMIER™ and LO MÁXIMO.™
          Blackout restrictions and other conditions apply to all sports
          programming.
        </p>

        <div className="package-table-container channels">
          <Image src={dollarbubble} className="mark" alt="" />
          <h4>What is a regional sports fee?</h4>
          <br />
          <p>
            When your DIRECTV base plan includes regional sports networks
            (RSNs), you’ll be charged a regional sports fee to make up for the
            added channels. RSN availability is dependent on your location, but
            you can check your regional sports fee by entering your zip code in
            DIRECTV’s RSN fee verification tool.
          </p>
        </div>
      </div>

      <div className="section direct-tv-sports-language-sports-offerings">
        <div className="head">
          <h2 className="sect-heading">
            <span> Spanish-language sports </span> offerings on DIRECTV
          </h2>
          <p className="sect-desc">
            DIRECTV also offers Spanish-language add-ons that complement any of
            the service’s four English-language base packages. If you like your
            sports commentary en español, then you’ll want to consider adding
            these to your plan. You’ll receive not only live Spanish-language
            broadcasts of certain U.S.-based leagues but also Spanish-language
            coverage of the Liga MX, La Liga, and the Primera División.
            <br />
            While the basic DIRECTV Deportes package will get you five essential
            Spanish-language channels, the Américas Plus and México Plus
            packages provide expanded Latin America and Mexico-based networks.
            If you want it all, the En Español package gives you everything from
            the other three packages and Music Choice channels.
          </p>
        </div>
        <PackageTable item={packageTableDataOfferings} />
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change. Blackout restrictions and other
          conditions apply to all sports programming.
        </p>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            How do you <span> get sports on DIRECTV? </span>
          </h2>
          <p className="sect-desc">
            DIRECTV is our favorite TV service provider for sports for a reason.
            It has over 20 basic sports channels and over 40 regional sports
            networks. It also has out-of-market sports packages for the most
            comprehensive MLB, NBA, and NHL coverage.
            <br />
            Of course, all that coverage comes at a price. If you want every
            sports channel that DIRECTV offers, you’ll need the pricey DIRECTV
            PREMIER plan or the DIRECTV Sports Pack add-on. You’ll also need to
            dedicate yourself to bulky equipment and a two-year contract where
            the price increases after the first 12 months.
            <br />
            If that seems like an unnecessary commitment, you can always keep
            your options open and visit our Best Streaming Services for Sports
            guide.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>get DIRECTV</Link>
        </div>
      </div>

      <div className="section direct-tv-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> DIRECTV sports packages </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Does DIRECTV carry Pac-12
                Network?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  No, DIRECTV doesn’t carry the Pac-12 Networks, but you can
                  watch select Pac-12 Conference games on FOX Sports and ESPN
                  networks.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Does DIRECTV carry Pac-12 Network?"}
            cssClass={"faq-content"}
          >
            <p>
              No, DIRECTV doesn’t carry the Pac-12 Networks, but you can watch
              select Pac-12 Conference games on FOX Sports and ESPN networks.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is beIN SPORTS on DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  No, DIRECTV no longer carries any of the beIN SPORTS channels
                  following a carriage dispute in 2018.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Is beIN SPORTS on DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>
              No, DIRECTV no longer carries any of the beIN SPORTS channels
              following a carriage dispute in 2018.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Is WILLOW TV on DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  No, the cricket channel WILLOW is not available on DIRECTV.
                  Cricket fans can access the channel through other TV providers
                  like DISH Network, Sling TV, and Spectrum.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Is WILLOW TV on DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>
              No, the cricket channel WILLOW is not available on DIRECTV.
              Cricket fans can access the channel through other TV providers
              like DISH Network, Sling TV, and Spectrum.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What is DIRECTV Sports
                Central?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  The DIRECTV Sports Central menu allows you to toggle between
                  your DIRECTV channels and third-party streaming subscriptions
                  within the convenience of your DIRECTV Gemini receiver. It’s a
                  helpful way to navigate between traditional channels (like
                  ESPN and TNT) and streaming apps (like ESPN+ and Peacock).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" What is DIRECTV Sports Central?"}
            cssClass={"faq-content"}
          >
            <p>
              The DIRECTV Sports Central menu allows you to toggle between your
              DIRECTV channels and third-party streaming subscriptions within
              the convenience of your DIRECTV Gemini receiver. It’s a helpful
              way to navigate between traditional channels (like ESPN and TNT)
              and streaming apps (like ESPN+ and Peacock).
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote direct-tv-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Methodology:</h4>
          <p>
            Our TV experts spent dozens of hours researching and testing
            DIRECTV’s sports packages and channels. We examined the satellite TV
            provider’s league coverage, while also comparing its price and
            convenience to other TV service providers.
          </p>
          <h4>Related articles:</h4>
          <ul>
            <li>
              {" "}
              <span className="link">
                <Link href={"#"}>DIRECTV Review</Link>
              </span>
            </li>
            <li>
              {" "}
              <span className="link">
                <Link href={"#"}>DIRECTV Bundles</Link>
              </span>
            </li>
            <li>
              {" "}
              <span className="link">
                <Link href={"#"}>DIRECTV Deals</Link>
              </span>
            </li>
            <li>
              {" "}
              <span className="link">
                <Link href={"#"}>DIRECTV STREAM vs. DIRECT</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default DirectTvSports;
