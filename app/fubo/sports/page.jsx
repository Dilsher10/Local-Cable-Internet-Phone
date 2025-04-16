// import React, { useState } from "react";
import "./fubo-sports.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { fuboNavLinks } from "../../assets/data/navLinks/fuboNavLinks";
import fuboimage from "../../assets/images/fubo-girl.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import fubo from "../../assets/images/fubo.png";
import fuboicon from "../../assets/images/fubo-icon.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import sportsfuboimage from "../../assets/images/sportsfuboimage.png";
import sportsfuboimagetwo from "../../assets/images/sportsfuboimagetwo.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa6";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Fubo Sports Packages"
};

const FuboSports = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: fubo,
      rating: "(4.5/5)",
      starImg: star,
      desc: " 200+ channels, foreign sports leagues",
      buttonText: "read fubo review",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: fuboimage,

    cardsStrip: [
      {
        subtitle: "Free trial:",
        title: "7 days",
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
    <div className="fubo-sports">
      {/* <SubNav links={fuboNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">Fubo Sports Packages</h2>
          <p className="sect-desc">
            Explore how much sports coverage Fubo offers with our guide to
            Fubo’s sports channels, add-ons, and playback features.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is Fubo worth it for sports fans?</h4>
          <p>
            Fubo is worth it for sports fans who love soccer and combat sports.
            It’s also an excellent service if you enjoy sports that are not so
            mainstream (we’re looking at you, pickleball enthusiasts). <br />
            All Fubo base plans come with a diverse range of channels—including
            various news, entertainment, and lifestyle networks. Most
            importantly, you’ll get key CBS Sports, FOX Sports, ESPN, and NBC
            Sports channels. The service also continuously adds new
            channels—perhaps more frequently than Hulu + Live TV, Sling TV, and
            YouTube TV. <br />
            Unfortunately, Fubo has expensive plans and hidden regional sports
            fees. It also doesn’t include TBS, TNT, and truTV, which are crucial
            for watching NBA, NHL, and college basketball games. <br />
            As its name suggests, Fubo’s main draw is its soccer coverage, but
            the live TV streaming service offers much more than fútbol. Each
            year, you can stream thousands of live sporting events on
            Fubo—ranging from football and baseball to boxing and axe throwing.
            <br />
            If you’re already familiar with what channels your favorite teams
            are on, keep scrolling for a comprehensive look at what Fubo offers
            sports fans. Otherwise, head over to our CableTV.com Sports hub for
            league-specific viewing guides.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th>Prospects</th>
                  <th>Consequences</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Large channel lineups </td>
                  <td>Expensive plans </td>
                </tr>
                <tr>
                  <td>Wide sports coverage </td>
                  <td>No TBS, TNT, or other Warner Bros. Discovery channels</td>
                </tr>
                <tr>
                  <td>Nifty playback features (on select devices) </td>
                  <td>Regional sports fees </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Find the best TV and internet plans"}
        desc={
          " Enter your zip code below to see which TV and internet providers are available in your area."
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
          <Link href={"#"}>Fubo sports add-ons </Link>
          <Link href={"#"}>Fubo sports channels </Link>
          <Link href={"#"}>Fubo playback features </Link>
          <Link href={"#"}> What is Fubo Sports Network?</Link>
        </div>
      </div>

      <div className="section sports">
        <div className="head">
          <h2 className="sect-heading">
            Fubo <span> sports add-ons</span>
          </h2>
          <p className="sect-desc">
            Fubo offers several add-on packages for subscribers to customize
            their channel lineup. Most of Fubo’s add-ons include sports
            channels. The add-ons listed below focus entirely on athletics. You
            can also add MLB.TV and NBA League Pass to your plan for complete
            out-of-market baseball and basketball coverage.
          </p>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th> </th>
                <th>Add-on </th>
                <th>Price </th>
                <th>Features</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td> 1. </td>
                <td>Sports Plus with NFL RedZone </td>
                <td>$10.99/mo. </td>
                <td>
                  NFL RedZone, MLB Network Strike Zone, Pac-12 Networks, and
                  more
                </td>
              </tr>
              <tr>
                <td> 2.</td>
                <td>Sports Lite </td>
                <td>$9.99/mo. </td>
                <td>MLB Network, NBA TV, NHL Network, and more </td>
              </tr>
              <tr>
                <td> 3.</td>
                <td>International Sports Plus </td>
                <td> $6.99/mo.</td>
                <td>ESPN Deportes, Fox Deportes, GolTV English, and more </td>
              </tr>
              <tr>
                <td>4. </td>
                <td>Adventure Plus </td>
                <td> $4.99/mo.</td>
                <td>MAVTV, Outdoor Channel, Sportsman Channel, and more </td>
              </tr>
              <tr>
                <td> 5.</td>
                <td>MLB.TV </td>
                <td>$24.99/mo. </td>
                <td> Every out-of-market MLB game</td>
              </tr>
              <tr>
                <td> 6.</td>
                <td>NBA League Pass </td>
                <td>$14.99/mo. </td>
                <td> Every out-of-market NBA game</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section channel-features">
        <div className="head">
          <h2 className="sect-heading">
            Fubo <span> sports channels </span>
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
          Data effective as of post date.
          <br />
          †Live sports coverage on Marquee Sports Network is blacked out for
          those outside the channel’s regional coverage area.
        </p>

        <div className="package-table-container channels">
          <h4>Regional sports networks on Fubo</h4>
          <p>
            Fubo recently expanded its channel coverage to include regional
            sports networks (RSNs). These channels are available based on your
            location—providing live, in-market games from leagues like MLB, NBA,
            and NHL.
            <br />
            If your plan includes RSN coverage, you must pay an extra monthly
            fee, and there’s no way to opt out. Fubo determines the RSN fee by
            the number of RSNs you receive. One RSN is $10.99 per month, while
            two or more will cost you $13.99. Here’s a list of RSNs currently
            available on Fubo.
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
            <li>MSG Sportsnet</li>
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
            <li>SportsNet New York (SNY)</li>
            <li>SportsNet Pittsburgh</li>
            <li>SportsNet Rocky Mountain</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>What is Fubo Sports Network?</h4>
          <p>
            Fubo Sports Network is a free, ad-supported streaming channel owned
            and operated by Fubo (formerly fuboTV). From bare-knuckle boxing to
            poker and darts, the channel offers a diverse lineup of
            sports-related programming. And it’s not all old stuff, either—it
            has live competitions and fresh originals.
            <br />
            While available to all Fubo subscribers, anyone can access the
            Sports Network channel on the official Fubo Sports website. The
            channel is also available with the free streaming platforms listed
            below.
          </p>
          <br />
          <ul className="channel-list">
            <li>Amazon Freevee</li>
            <li>LG Channels</li>
            <li>Plex</li>
            <li>The Roku Channel</li>
            <li>Samsung TV Plus</li>
            <li>Tubi</li>
            <li>Vizio WatchFree+</li>
            <li>Xumo</li>
          </ul>
        </div>
      </div>

      <div className="section sports">
        <div className="head">
          <h2 className="sect-heading">
            How to <span> watch sports on Fubo</span>
          </h2>
          <p className="sect-desc">
            Watching sports on Fubo is easy and convenient because the service
            has an entire menu tab dedicated to sports. If you click on that
            menu, you can view live and upcoming events, browse schedules, and
            scroll through league content.
            <br />
            You can also use Fubo’s Game Finder tool to look up dates, times,
            and channels for upcoming games.
          </p>
        </div>
        <Image src={sportsfuboimage} alt="" />
        <p className="below-table">
          Looking for a specific event? You can filter available games by sport
          and league in Fubo’s Sports menu, as seen on a Google Chrome web
          browser.
        </p>
      </div>

      <div className="section features">
        <div className="head">
          <h2 className="sect-heading">
            Fubo <span> playback features</span>
          </h2>
          <p className="sect-desc">
            Beyond channels, Fubo takes its sports coverage to the next level
            through features designed to enhance the viewing experience. We
            particularly love its FanView playback feature, which displays
            real-time stats and scores alongside select events. Fubo also has a
            multiview feature, allowing you to watch up to four channels
            simultaneously. However, the feature is only available on Apple TV
            devices.
            <br />
            Because finding time to watch every sporting event live is
            difficult, Fubo includes 1,000 hours of cloud DVR storage in its
            English-language base plans. It’s nothing compared to Hulu + Live TV
            and YouTube TV’s unlimited DVRs, but it’s much better than Sling
            TV’s 50 hours of included storage.
          </p>
        </div>
        <Image src={sportsfuboimagetwo} alt="" />
        <p className="below-table">
          Fubo’s FanView feature as seen on a Google Chrome web browser.
        </p>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Fubo sports packages </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span>What sports are on Fubo?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Fubo features popular sports like soccer, baseball,
                  basketball, football, hockey, golf, and tennis. It also
                  carries tons of combat sports and motorsports. Not everyone is
                  into mainstream sports, so Fubo also has you covered with
                  stuff like drone racing, pickleball, and esports.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"What sports are on Fubo?"}
            cssClass={"faq-content"}
          >
            <p>
              Fubo features popular sports like soccer, baseball, basketball,
              football, hockey, golf, and tennis. It also carries tons of combat
              sports and motorsports. Not everyone is into mainstream sports, so
              Fubo also has you covered with stuff like drone racing,
              pickleball, and esports.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How much does Fubo sports
                cost?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Fubo plans start at $74.99 a month, and you can upgrade your
                  base plan with add-on packages and premium channels. You may
                  also pay up to $13.99 a month extra if you live in an area
                  with an available regional sports network.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" How much does Fubo sports cost?"}
            cssClass={"faq-content"}
          >
            <p>
              Fubo plans start at $74.99 a month, and you can upgrade your base
              plan with add-on packages and premium channels. You may also pay
              up to $13.99 a month extra if you live in an area with an
              available regional sports network.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Is Fubo sports free on
                Roku?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  No, the Fubo streaming service is not free on Roku. However,
                  you can stream Fubo Sports Network for free in The Roku
                  Channel app, which is available on Roku and Amazon Fire TV
                  devices.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Is Fubo sports free on Roku?"}
            cssClass={"faq-content"}
          >
            <p>
              No, the Fubo streaming service is not free on Roku. However, you
              can stream Fubo Sports Network for free in The Roku Channel app,
              which is available on Roku and Amazon Fire TV devices.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How do you get Fubo sports?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Fubo Sports channels are available in every Fubo TV plan.
                  Without a Fubo subscription, you can stream Fubo Sports
                  Network on free services like Amazon Freevee, The Roku
                  Channel, and Tubi.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" How do you get Fubo sports?"}
            cssClass={"faq-content"}
          >
            <p>
              Fubo Sports channels are available in every Fubo TV plan. Without
              a Fubo subscription, you can stream Fubo Sports Network on free
              services like Amazon Freevee, The Roku Channel, and Tubi.
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
            Our sports experts researched and hands-on tested Fubo over several
            years—including many NFL, Premier League, and NASCAR seasons. We
            examined the live TV streaming service’s league coverage while
            comparing its prices and features with other TV providers.
            <br />
            Check out our How We Rank
            <span className="link">
              <Link href={"#"}>How We Rank</Link>
            </span>{" "}
            page to learn more about our methods.
          </p>
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
                <Link href={"#"}>Fubo Channel Lineup</Link>
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
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default FuboSports;
