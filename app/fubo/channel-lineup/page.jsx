// import React, { useState } from "react";
import "./fubo-channel-lineup.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { fuboNavLinks } from "../../assets/data/navLinks/fuboNavLinks";
import fuboimage from "../../assets/images/fubo-image-channel-lineup.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import fubo from "../../assets/images/fubo.png";
import fuboicon from "../../assets/images/fubo-icon.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import dollarbubble from "../../assets/images/dollarbubble.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa6";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Fubo Channel Lineup Guide"
};

const FuboChannelLineUp = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: fubo,
      rating: "(4.5/5)",
      starImg: star,
      desc: " 200+ channels, foreign sports leagues",
      buttonText: "view fubo specs and features",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: fuboimage,

    cardsStrip: [
      {
        subtitle: "Free trial:",
        title: "Fubo TV",
        icon: fuboicon,
      },
      {
        subtitle: "Price:",
        title: "$74.99–$94.99/mo.",
        icon: fuboicon,
      },
      {
        subtitle: "Channels:",
        title: "150–220+",
        icon: fuboicon,
      },
      {
        subtitle: "Cloud DVR:",
        title: "1,000 hrs.",
        icon: fuboicon,
      },
    ],

    tableData: [
      {
        head: [
          "Plan",
          "price",
          "Live channels",
          "Multiple streams",
          "Cloud DVR storage",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Pro",
              "$74.99/mo.",
              "150+",
              "Up to 10",
              "1,000 hrs.",
            ],
            linkPath: "#",
          },
          {
            content: [
              "2.",
              "Elite",
              "$84.00/season",
              "200+",
              "Up to 10",
              "1,000 hrs.",
            ],
            linkPath: "#",
          },
          {
            content: [
              "3.",
              "Premier",
              "$94.00/season",
              "220+",
              "Up to 10",
              "1,000 hrs.",
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
  return (
    <div className="fubo-channel-lineup">
      {/* <SubNav links={fuboNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">Fubo Channel Lineup Guide</h2>
          <p className="sect-desc">
            Get a feel for Fubo’s channels, premium packages, and add-on pricing
            with our Fubo channel guide.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />

          <p>
            Fubo (formerly fuboTV) has over 220 channels that span sports, news,
            entertainment, and international programming. While its three
            English-language base plans carry commonly available channels, its
            add-on packages feature several premium networks for unique
            coverage. <br />
            After all these years, Fubo still specializes in sports—and we love
            it for watching foreign leagues. But some sports fans will be
            disappointed that Fubo is missing Warner Bros. Discovery Networks
            like HBO, TBS, TNT, and truTV. <br />
            Additionally, several of Fubo’s channels are free to watch online
            without a TV subscription. While it’s great to have those channels
            integrated into Fubo, you’ll want to keep that in mind as you scroll
            through the channel lineups below.
          </p>
        </div>
      </div>

      <CTA
        heading={"You’ll need a fast internet plan to stream all that TV"}
        desc={
          " Wanna speed up your download speeds? Enter your zip code below to see top internet providers in your area."
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
          <Link href={"#"}> Fubo channels </Link>
          <Link href={"#"}> Fubo regional sports networks </Link>
          <Link href={"#"}> Fubo local channels </Link>
          <Link href={"#"}> Fubo add-ons </Link>
          <Link href={"#"}> Fubo premium channels </Link>
        </div>
      </div>

      <div className="section channel-lineup">
        <div className="head">
          <h2 className="sect-heading">
            Fubo <span> channels </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
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
          *Availability varies by area. Data effective as of post date. †Live
          sports coverage on Marquee Sports Network is blacked out for those
          outside the channel’s regional coverage area.
        </p>
      </div>

      <div className="section features">
        <div className="head">
          <h2 className="sect-heading">
            Fubo <span> channels specs and features </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Fubo regional sports networks</h4>
          <br />
          <p>
            In early 2023, Fubo expanded its regional sports network (RSN)
            coverage. The live TV streaming service now carries many popular
            RSNs that host in-market MLB, NBA, and NHL games. But that new
            coverage comes at a price—more on that after the channel list.
          </p>
          <br />
          <ul className="channel-list">
            <li>Altitude Sports</li>
            <li>Bally Sports Arizona</li>
            <li>Bally Sports Detroit</li>
            <li>Bally Sports Florida</li>
            <li>Bally Sports Great Lakes</li>
            <li>Bally Sports Indiana</li>
            <li>Bally Sports Kansas City</li>
            <li>Bally Sports Midwest</li>
            <li>Bally Sports New Orleans</li>
            <li>Bally Sports North</li>
            <li>Bally Sports Ohio</li>
            <li>Bally Sports Oklahoma</li>
            <li>Bally Sports San Diego</li>
            <li>Bally Sports SoCal</li>
            <li>Bally Sports South</li>
            <li>Bally Sports Southeast</li>
            <li>Bally Sports Southwest</li>
            <li>Bally Sports Sun</li>
            <li>Bally Sports West</li>
            <li>Bally Sports Wisconsin</li>
            <li>Marquee Sports Network</li>
            <li>Monumental Sports Network</li>
            <li>MSG</li>
            <li>MSG Sportsnet (formerly MSG+)</li>
            <li>NBC Sports Bay Area</li>
            <li>NBC Sports Boston</li>
            <li>NBC Sports California</li>
            <li>NBC Sports California+</li>
            <li>NBC Sports Chicago</li>
            <li>NBC Sports Chicago+</li>
            <li>NBC Sports Philadelphia</li>
            <li>NBC Sports Philadelphia+</li>
            <li>New England Sports Network (NESN)</li>
            <li>ROOT SPORTS Northwest</li>
            <li>Space City Home Network</li>
            <li>SportsNet New York (SNY)</li>
            <li>SportsNet Pittsburgh</li>
            <li>SportsNet Rocky Mountain</li>
          </ul>
        </div>

        <div className="package-table-container channels">
          <h4>Local channels on Fubo</h4>
          <br />
          <p>
            Fubo carries several local channels, depending on your location.
            Even if you can’t get a particular local station through Fubo,
            you’ll still get on-demand access to its programming.
            <br />
            Check out Fubo’s complete list of local stations for a closer look
            at what’s available in your area.
          </p>
          <br />
          <ul className="channel-list">
            <li>ABC</li>
            <li>CBS</li>
            <li>FOX</li>
            <li>NBC</li>
            <li>The CW</li>
            <li>Telemundo</li>
            <li>Univision</li>
            <li>UniMás</li>
          </ul>
        </div>

        <div className="package-table-container channels">
          <Image src={dollarbubble} className="mark" alt="" />
          <h4>Fubo regional sports fee</h4>
          <br />
          <p>
            Every Fubo base plan is subject to include RSN coverage based on
            your home location. If you receive RSNs, you must pay an extra
            monthly fee—and there’s no option to opt out.
            <br />
            Fubo determines your RSN fee based on how many RSNs you receive.
          </p>
          <br />
          <ul>
            <li>One RSN: $10.99/month</li>
            <li>Two or more RSNs: $13.99/month</li>
          </ul>
        </div>
      </div>

      <div className="section channels-main">
        <div className="head">
          <h2 className="sect-heading">
            Fubo <span> add-on channel packages </span>
          </h2>
          <p className="sect-desc">
            Channel add-ons are a great way to customize your network lineup,
            and Fubo offers 10+ add-on packages. But if you want more
            customization, we recommend checking out Sling TV. It ranks
            similarly to Fubo but for different reasons, as highlighted in our
            Sling TV vs. Fubo guide.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Fubo channel add-ons and pricing</h4>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Plan</th>
                  <th>Storage</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1. </td>
                  <td>Pro </td>
                  <td>1,000 hrs. included </td>
                </tr>
                <tr>
                  <td>2. </td>
                  <td>Elite </td>
                  <td>1,000 hrs. included </td>
                </tr>
                <tr>
                  <td>3. </td>
                  <td>Premier </td>
                  <td>1,000 hrs. included </td>
                </tr>
                <tr>
                  <td>4. </td>
                  <td>Latino </td>
                  <td>250 hrs. included </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Sports Plus with NFL RedZone ($10.99/month) </h4>
          <br />
          <ul className="channel-list">
            <li>ACC Network</li>
            <li>B2 Sports Network</li>
            <li>CAMPUSLORE SPORTS</li>
            <li>ESPNews</li>
            <li>ESPNU</li>
            <li>Fight Network</li>
            <li>Game+</li>
            <li>H&C (Horse & Country)</li>
            <li>Impact Television Network</li>
            <li>MLB Network</li>
            <li>MLB Network Strike Zone</li>
            <li>NBA TV</li>
            <li>Next Level Sports & Entertainment (NLSE)</li>
            <li>NFL RedZone</li>
            <li>NHL Network</li>
            <li>Pac-12 Network</li>
            <li>Pac-12 Arizona</li>
            <li>Pac-12 Bay Area</li>
            <li>Pac-12 Los Angeles</li>
            <li>Pac-12 Mountain</li>
            <li>Pac-12 Oregon</li>
            <li>Pac-12 Washington</li>
            <li>PickleTV</li>
            <li>Racing America</li>
            <li>SEC Network</li>
            <li>SportsGrid</li>
            <li>Stadium</li>
            <li>Stadium 2</li>
            <li>Stadium 3</li>
            <li>Tennis Channel</li>
            <li>UNBEATEN</li>
            <li>World Poker Tour (WPT)</li>
            <li>Zona Fútbol</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4> International Sports Plus ($6.99/month) </h4>
          <br />
          <ul className="channel-list">
            <li>ESPN Deportes</li>
            <li>Fox Deportes</li>
            <li>FOX Soccer Plus</li>
            <li>Fubo Latino Network</li>
            <li>Fubo Sports 2</li>
            <li>Fubo Sports 3</li>
            <li>Fubo Sports 4</li>
            <li>Fubo Sports 5</li>
            <li>Fubo Sports 6</li>
            <li>Fubo Sports 7</li>
            <li>Fubo Sports 8</li>
            <li>GolTV English</li>
            <li>GolTV Spanish</li>
            <li>TyC Sports</li>
            <li>Zona Fútbol</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Adventure Plus ($4.99/month) </h4>
          <br />
          <ul className="channel-list">
            <li>INTROUBLE</li>
            <li>MAVTV</li>
            <li>Outdoor Channel</li>
            <li>Outside Television</li>
            <li>Sportsman Channel</li>
            <li>Waypoint TV</li>
            <li>Wired2Fish</li>
            <li>World Fishing Network</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Sports Lite ($9.99/month) </h4>
          <br />
          <ul className="channel-list">
            <li>ACC Network</li>
            <li>ESPNews</li>
            <li>ESPNU</li>
            <li>MLB Network</li>
            <li>NBA TV</li>
            <li>NHL Network</li>
            <li>SEC Network</li>
            <li>Tennis Channel</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Fubo Extra ($7.99/month) </h4>
          <br />
          <ul className="channel-list">
            <li>911 Network</li>
            <li>ACC Network</li>
            <li>American Heroes Channel</li>
            <li>At Home With Family Handyman</li>
            <li>BET Her</li>
            <li>Bet Jams</li>
            <li>BET Soul</li>
            <li>Circle Country</li>
            <li>CNBC World</li>
            <li>Cooking Channel</li>
            <li>Destination America</li>
            <li>Discovery Family</li>
            <li>Discovery Life</li>
            <li>DUST</li>
            <li>ESPNews</li>
            <li>ESPNU</li>
            <li>Esports TV (ESTV)</li>
            <li>FX Movie Channel (FXM)</li>
            <li>Game Show Network</li>
            <li>Great American Adventures</li>
            <li>Great American Faith & Living</li>
            <li>INSP</li>
            <li>InWonder</li>
            <li>Judge Nosey</li>
            <li>Justice Central TV</li>
            <li>LOGO</li>
            <li>MLB Network</li>
            <li>MTV2</li>
            <li>MTV Classic</li>
            <li>MTV Live</li>
            <li>mtvU</li>
            <li>Mystery Science Theater 3000</li>
            <li>Nat Geo WILD</li>
            <li>NBA TV</li>
            <li>NHL Network</li>
            <li>NickMusic</li>
            <li>Nicktoons</li>
            <li>Nosey</li>
            <li>Outside Television</li>
            <li>Pac-12 Networks</li>
            <li>People Are Awesome</li>
            <li>PokerGO</li>
            <li>RetroCrush</li>
            <li>Revry</li>
            <li>Science Channel</li>
            <li>SEC Network</li>
            <li>Sensical Gaming</li>
            <li>Sensical Jr.</li>
            <li>Sensical Makers</li>
            <li>Shout! TV</li>
            <li>Sony Movie Channel</li>
            <li>TeenNick</li>
            <li>Tennis Channel</li>
            <li>True Crime Now</li>
            <li>WeatherSpy</li>
            <li>Whoa! That Was Wild</li>
            <li>Zona Fútbol</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>News Plus ($2.99/month) </h4>
          <br />
          <ul className="channel-list">
            <li>Africanews English</li>
            <li>Bloomberg Originals</li>
            <li>Cheddar News</li>
            <li>CNBC World</li>
            <li>Euronews</li>
            <li>i24NEWS</li>
            <li>NEWSnet</li>
            <li>Revry News</li>
            <li>ROI TV</li>
            <li>TYT Network</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Latino Plus ($19.99/month) </h4>
          <br />
          <ul className="channel-list">
            <li>BabyTV Español</li>
            <li>Canela.TV</li>
            <li>CATV</li>
            <li>Cine Estrella TV</li>
            <li>Cinelatino</li>
            <li>Cine Sony Television</li>
            <li>Discovery en Español</li>
            <li>Discovery Familia</li>
            <li>ESPN Deportes</li>
            <li>Estrella Games</li>
            <li>Estrella News</li>
            <li>Euronews Español</li>
            <li>Fox Deportes</li>
            <li>GolTV Spanish</li>
            <li>Hogar HGTV</li>
            <li>Nat Geo Mundo</li>
            <li>Nuestra Tele</li>
            <li>MTV Tres</li>
            <li>Pasiones</li>
            <li>Telefe</li>
            <li>Televisión Dominicana</li>
            <li>Tigo Sports</li>
            <li>Toon Goggles en Español</li>
            <li>TyC Sports</li>
            <li>WAPA America</li>
            <li>The Weather Channel en Español</li>
            <li>Zona Fútbol</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Portuguese Plus ($14.99/month) </h4>
          <br />
          <ul className="channel-list">
            <li>Benfica TV</li>
            <li>GolTV Spanish</li>
            <li>RTP Açores</li>
            <li>RTP3</li>
            <li>RTP Internacional</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Entretenimiento Plus ($9.99/month) </h4>
          <br />
          <ul className="channel-list">
            <li>Bandamax</li>
            <li>De Película</li>
            <li>De Película Clásico</li>
            <li>Foro TV</li>
            <li>Nuestra Tele Noticias 24 Horas (NTN24)</li>
            <li>Ritmoson</li>
            <li>TeleHit</li>
            <li>Univision Tlnovelas</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Fubo premium add-ons </h4>
          <br />
          <p>
            Popular premium add-on channels like SHOWTIME, STARZ, and MGM+ are
            available through Fubo. In fact, you can bundle all three into your
            plan for $19.99 per month—saving you $6.98 monthly. But you’ll have
            to look elsewhere if you want Max (formerly HBO Max) and CINEMAX.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Plan</th>
                  <th>Storage</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1. </td>
                  <td>Pro </td>
                  <td>1,000 hrs. included </td>
                </tr>
                <tr>
                  <td>2. </td>
                  <td>Elite </td>
                  <td>1,000 hrs. included </td>
                </tr>
                <tr>
                  <td>3. </td>
                  <td>Premier </td>
                  <td>1,000 hrs. included </td>
                </tr>
                <tr>
                  <td>4. </td>
                  <td>Latino </td>
                  <td>250 hrs. included </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Fubo channel lineups </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How many channels does Fubo
                have?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Fubo offers 220+ channels ranging from sports and
                  entertainment to news and education. Your overall channel
                  count depends on your base plan and add-ons.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" How many channels does Fubo have?"}
            cssClass={"faq-content"}
          >
            <p>
              Fubo offers 220+ channels ranging from sports and entertainment to
              news and education. Your overall channel count depends on your
              base plan and add-ons.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What channels does Fubo not
                have?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Fubo is missing popular channels like A&E, AMC, BBC America,
                  Cartoon Network, CNN, HBO, HISTORY, Lifetime, and Turner
                  Classic Movies. Unfortunately for sports fans, Fubo also
                  doesn’t have TBS, TNT, and truTV—crucial channels for watching
                  MLB, NBA, and March Madness games.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" What channels does Fubo not have?"}
            cssClass={"faq-content"}
          >
            <p>
              Fubo is missing popular channels like A&E, AMC, BBC America,
              Cartoon Network, CNN, HBO, HISTORY, Lifetime, and Turner Classic
              Movies. Unfortunately for sports fans, Fubo also doesn’t have TBS,
              TNT, and truTV—crucial channels for watching MLB, NBA, and March
              Madness games.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does Fubo have ABC and CBS?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Yes, Fubo carries local channels like ABC, CBS, FOX, and NBC
                  in select markets. Unlike other services, the local channels
                  you receive on Fubo depend on your streaming location—not your
                  billing address. But regional sports networks from your home
                  market will travel with you as long as you sign in from that
                  zip code once a month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does Fubo have ABC and CBS?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, Fubo carries local channels like ABC, CBS, FOX, and NBC in
              select markets. Unlike other services, the local channels you
              receive on Fubo depend on your streaming location—not your billing
              address. But regional sports networks from your home market will
              travel with you as long as you sign in from that zip code once a
              month.
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
                <Link href={"#"}> Fubo Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>How To Watch Soccer on Fubo</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Sling TV vs. Fubo</Link>
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
                <Link href={"#"}>Best Streaming Services for Sports</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default FuboChannelLineUp;
