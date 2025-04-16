// import React, { useState } from "react";
import "./sling-tv-channels.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { slingtvNavLinks } from "../../assets/data/navLinks/slingtvNavLinks";
import slinggirl from "../../assets/images/sling-channel-girl.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import sling from "../../assets/images/sling.png";
import slingicon from "../../assets/images/sling-icon.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Sling TV Channels"
};

const SlingTvChannels = () => {
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

    card2Img: slinggirl,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "Sling TV",
        icon: slingicon,
      },
      {
        subtitle: "Channel packages:",
        title:
          "Sling Orange (30+ channels, $40.00/mo.) Sling Blue (40+ channels, $40.00/mo.) Sling Orange + Blue (45+ channels, $55/mo.)",
        icon: slingicon,
      },
      {
        subtitle: "Price:",
        title: "$40.00–$55.00/mo.",
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
      head: ["Package", "AMC availability", "Details"],

      body: [
        {
          content: ["1.", "Sports Extra", <FaCheck key="Fa1" className="check-icon" />],
          linkPath: "#",
        },
        {
          content: ["2.", "Comedy Extra", <FaCheck key="Fa2" className="check-icon" />],
          linkPath: "#",
        },
        {
          content: ["3.", "Kids Extra", <FaCheck key="Fa3" className="check-icon" />],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="sling-tv-channels">
      {/* <SubNav links={slingtvNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Sling TV Channels: Sling Blue Channels, Sling orange channels, And
            More
          </h2>
          <p className="sect-desc">
            Sling TV’s various channel lineups and add-ons aren’t easy to
            navigate, but we’re here to help.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Sling TV channels</h4>
          <p>
            Sling TV is one of the few live TV streaming services to offer a
            choice of channel lineups at different price points: Sling Orange
            (30+ channels for $40 a month), Sling Blue (40+ channels for $40 a
            month), and Sling Orange + Blue (45+ channels for $55 a month).
            <br />
            But prepare yourself: navigating Sling TV’s channel lineups and
            add-on packages is like cracking the Da Vinci Code, minus the
            soothing presence of Tom Hanks.
            <br />
            Sling TV’s basic channel lineups aren’t as fat as those of most
            other live TV streaming services, but it does have over a dozen
            add-on packages that allow you to tailor your channel lineup to your
            own tastes, not its own.
            <br />
            More so than other streamers, Sling TV is about customization, as
            you’ll see when we get into the wild world of Sling add-ons below.
          </p>
          <h4>Looking for a specific channel?</h4>
          <p>
            If you’re on a desktop or laptop hit ‘Control + F’ to type in the
            channel you are looking for. If you are on a phone or tablet use the
            ‘Find on Page’ function.
          </p>
        </div>
      </div>

      <div className="section channel-lineup">
        <div className="head">
          <h2 className="sect-heading">
            Sling TV <span> channel lineups </span>
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
          <Link href={"#"}>View sling tV plans </Link>
        </div>
        <div className="hash-linking">
          <div className="alphabets">
            {" "}
            <Link href="#a">a</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">b</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">c</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">d</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">e</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">f</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">g</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">h</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">i</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">j</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">k</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">l</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">m</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">n</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">o</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">p</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">q</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">r</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">s</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">t</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">u</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">v</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">w</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">x</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">y</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#z">z</Link>
          </div>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th> </th>
                <th>Channels</th>
                <th>Channel number</th>
                <th>ENTERTAINMENT</th>
                <th>CHOICE™</th>
                <th>ULTIMATE</th>
                <th>PREMIER™</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>1. </th>
                <th id="a">A&E </th>
                <th>118 </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>2. </th>
                <th>ABC</th>
                <th>651</th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>3. </th>
                <th>Afro</th>
                <th>554</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>4. </th>
                <th>American Heroes Channel (AHC)</th>
                <th>151</th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>5. </th>
                <th>BBC America</th>
                <th>654 / 656</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>6. </th>
                <th>MTV Live</th>
                <th>230</th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>7. </th>
                <th>Universo</th>
                <th>845</th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>8. </th>
                <th>WE tv</th>
                <th>544 / 456 / 546</th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th> 9.</th>
                <th>Z Living</th>
                <th>121</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>10. </th>
                <th id="z">Zona Futbol</th>
                <th>568</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
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
          <Link href={"#"}>Sports channels </Link>
          <Link href={"#"}>Local channels </Link>
          <Link href={"#"}>Add-on channel packages </Link>
          <Link href={"#"}>Premium channel add-ons </Link>
        </div>
      </div>

      <CTA
        heading={"You’ll need a fast internet plan to stream all that TV"}
        desc={
          "Wanna speed up your  download speeds? Enter your zip code below to see top internet providers in your area."
        }
      />

      <div className="section packages-channels">
        <div className="head">
          <h2 className="sect-heading">
            Sports channels <span> on Sling TV </span>
          </h2>
          <p className="sect-desc">
            In its basic channel lineups, Sling TV’s sports coverage doesn’t
            have much game—especially when it comes to college sports. Sling
            Orange will get you ESPN and ESPN2, Sling Blue delivers FS1 and NFL
            Network, and Sling Orange + Blue has all four. Still, pretty slim.
            <br />
            But, with Sling TV’s Sports Extra add-on, you can get up to 20 more
            sports channels, including college sports and channels like NFL
            RedZone and NHL Network. We’ll dive into Sling TV’s add-on options
            in a minute—as mentioned before, add-ons are Sling TV’s thing.
          </p>
        </div>

        <br />

        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th>Channel</th>
                <th>Sling Orange ($40/Mo.)</th>
                <th>Sling Blue ($40/Mo.)</th>
                <th>Sling Orange + Blue ($55/Mo.)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ABC</td>
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
                <td>CBS</td>
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
                <td>The CW</td>
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
                <td>FOX</td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
              </tr>
              <tr>
                <td>NBC</td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
              </tr>
              <tr>
                <td>PBS</td>
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
                <td>Telemundo</td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <br />
        <p className="below-table">Data effective as of post date.</p>
      </div>

      <div className="section packages">
        <div className="head">
          <h2 className="sect-heading">
            Local channels <span> on Sling TV </span>
          </h2>
          <p className="sect-desc">
            In most parts of the country, Sling TV carries local FOX, ABC, and
            NBC stations (Blue and Orange + Blue plans only), but no CBS, The
            CW, PBS, Telemundo, or Univision broadcasters. Fortunately, Sling TV
            also offers several deals on antennas and TV devices for integrating
            those stations into its on-screen channel lineup.
          </p>
        </div>

        <br />

        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th>Channel</th>
                <th>Sling Orange ($40/Mo.)</th>
                <th>Sling Blue ($40/Mo.)</th>
                <th>Sling Orange + Blue ($55/Mo.)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ABC</td>
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
                <td>CBS</td>
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
                <td>The CW</td>
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
                <td>FOX</td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
              </tr>
              <tr>
                <td>NBC</td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
              </tr>
              <tr>
                <td>PBS</td>
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
                <td>Telemundo</td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td>
                  <FaCheck className="check-icon" />
                </td>
                <td>
                  <ImCross className="cross-icon" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <br />
        <p className="below-table">
          *Availability varies by area. Data effective as of post date.
        </p>
      </div>

      <div className="section freestream">
        <div className="head">
          <h2 className="sect-heading">
            Sling TV <span> add-on channel packages </span>
          </h2>
          <p className="sect-desc">
            Finally! Sling TV beats all other live TV streaming services when it
            comes to add-on packages—there are so many Extras, even
            professionals like us get winded trying to keep up. (Included
            channels differ slightly between Sling Orange and Sling Blue.)
          </p>
        </div>

        <div className="two-grid">
          <div className="package-table-container channels">
            <h4>Sports Extra ($11/mo.) </h4>
            <br />
            <ul>
              <li>FS2</li>
              <li>NFL RedZone</li>
              <li>NBA TV</li>
              <li>MLB Network</li>
              <li>MLB Network Strike Zone</li>
              <li>NHL Network</li>
              <li>ESPNews</li>
              <li>ESPNU</li>
              <li>beIN SPORTS</li>
              <li>Tennis Channel</li>
              <li>Golf Channel</li>
              <li>ACC Network</li>
              <li>ACC Network Extra</li>
              <li>Big Ten Network</li>
              <li>Pac-12 Network</li>
              <li>SEC Network</li>
              <li>SEC Network+</li>
              <li>Longhorn Network</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Heartland Extra ($6/mo.) </h4>
            <br />
            <ul>
              <li>Nat Geo Wild</li>
              <li>Outdoor Channel</li>
              <li>Destination America</li>
              <li>Pursuit Channel</li>
              <li>Sportsman Channel</li>
              <li>American Heroes Channel</li>
              <li>Great American Family</li>
              <li>Great American Living</li>
              <li>World Fishing Network</li>
              <li>INSP</li>
              <li>RFD-TV</li>
              <li>PixL</li>
              <li>The Cowboy Channel</li>
            </ul>
          </div>
        </div>
        <div className="three-grid">
          <div className="package-table-container channels">
            <h4>Comedy Extra ($6/mo.) </h4>
            <br />
            <ul>
              <li>Paramount Network</li>
              <li>TV Land</li>
              <li>truTV</li>
              <li>MTV</li>
              <li>MTV2</li>
              <li>CMT</li>
              <li>LOGO</li>
              <li>REVOLT TV</li>
              <li>Laff TV</li>
              <li>FETV</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Kids Extra ($6/mo.) </h4>
            <br />
            <ul>
              <li>Disney XD</li>
              <li>Disney Junior</li>
              <li>Boomerang</li>
              <li>Nicktoons</li>
              <li>TeenNick</li>
              <li>BabyTV</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Hollywood Extra ($6/mo.) </h4>
            <br />
            <ul>
              <li>FXX</li>
              <li>FXM</li>
              <li>SundanceTV</li>
              <li>Turner Classic Movies</li>
              <li>HDNET MOVIES</li>
              <li>REELZ</li>
              <li>Heroes & Icons</li>
              <li>Start TV</li>
              <li>Grit</li>
              <li>Bounce</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section important-links">
        <div className="head">
          <h2 className="sect-heading">
            Sling TV <span>premium channel add-ons</span>
          </h2>
          <p className="sect-desc">
            You can’t get HBO or CINEMAX through Sling TV, but there are over 30
            other premium add-on channels available. They range from familiar
            channels like SHOWTIME and STARZ to more niche offerings like
            Hi-Yah! (all martial arts, all the time), Here TV (LGBTQ+ shows,
            movies, and short films), and ScreamFlix (24/7 horror movies).
          </p>
        </div>

        <div className="all-links">
          <Link href={"#"}>Get Sling TV </Link>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th> </th>
                <th>Channel</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td> 1.</td>
                <td> SHOWTIME</td>
                <td> $10/mo.</td>
              </tr>
              <tr>
                <td> 2.</td>
                <td> STARZ</td>
                <td> $910/mo.</td>
              </tr>
              <tr>
                <td> 3.</td>
                <td> EPIX</td>
                <td> $5/mo.</td>
              </tr>
              <tr>
                <td> 4.</td>
                <td> TumbleBooks</td>
                <td> $5/mo.</td>
              </tr>
              <tr>
                <td> 5.</td>
                <td> UP Faith & Family</td>
                <td> $5/mo.</td>
              </tr>
              <tr>
                <td> 6.</td>
                <td> ViX Premium</td>
                <td> $6.99/mo.</td>
              </tr>
              <tr>
                <td> 7.</td>
                <td> Warriors & Gangsters</td>
                <td> $3/mo.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="below-table">Data effective as of post date.</p>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Sling TV channels </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span>Which Sling TV plan is best?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  If your TV tastes are broad, you’ll probably want Sling Orange
                  + Blue (which is our overall Sling TV plan recommendation).
                  But, if you want only a specific set of channels and all of
                  those channels are part of cheaper Sling Orange, that’s the
                  best plan for you—the same goes for Sling Blue.
                  <br />
                  Also, any of Sling TV’s plans can be enhanced with add-on
                  channel packages or premium channels. You could easily build
                  your own personal “best” plan but be careful: those add-ons
                  can add up to a pricey monthly bill quickly.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"Which Sling TV plan is best?"}
            cssClass={"faq-content"}
          >
            <p>
              If your TV tastes are broad, you’ll probably want Sling Orange +
              Blue (which is our overall Sling TV plan recommendation). But, if
              you want only a specific set of channels and all of those channels
              are part of cheaper Sling Orange, that’s the best plan for you—the
              same goes for Sling Blue.
              <br />
              Also, any of Sling TV’s plans can be enhanced with add-on channel
              packages or premium channels. You could easily build your own
              personal “best” plan but be careful: those add-ons can add up to a
              pricey monthly bill quickly.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span>Is there a free version of
                Sling TV?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Sling TV offers a free, slimmed-down version of its service
                  called Sling Freestream. It features over 5,000 hours of
                  on-demand TV shows and movies, as well as some live content,
                  and you don’t even have to register to use it. Sling Free does
                  have unskippable ads, though—nothing’s completely free in
                  streaming.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"Is there a free version of Sling TV?"}
            cssClass={"faq-content"}
          >
            <p>
              Sling TV offers a free, slimmed-down version of its service called
              Sling Freestream. It features over 5,000 hours of on-demand TV
              shows and movies, as well as some live content, and you don’t even
              have to register to use it. Sling Free does have unskippable ads,
              though—nothing’s completely free in streaming.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What channels are on Sling
                Free?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  In addition to on-demand content, Sling Freestream (formerly
                  Sling Free) features dozens of linear “loop” channels
                  streaming TV shows and movies around the clock (like Pluto TV
                  or Xumo).
                  <br />
                  News channels include ABC News Live and CBSN, but there are
                  far more entertainment channels, which include select content
                  from AMC, IFC, FilmRise, and more.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" What channels are on Sling Free?"}
            cssClass={"faq-content"}
          >
            <p>
              In addition to on-demand content, Sling Freestream (formerly Sling
              Free) features dozens of linear “loop” channels streaming TV shows
              and movies around the clock (like Pluto TV or Xumo).
              <br />
              News channels include ABC News Live and CBSN, but there are far
              more entertainment channels, which include select content from
              AMC, IFC, FilmRise, and more.
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

          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}> Sling TV Review</Link>
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
                <Link href={"#"}>fuboTV Channel Lineup</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Hulu + Live TV Channels</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default SlingTvChannels;
