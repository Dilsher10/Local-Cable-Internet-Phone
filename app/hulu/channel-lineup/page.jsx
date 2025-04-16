// import React, { useState } from "react";
import "./hulu-channel-line-up.scss";
// import Newsletter from "../../components/newsletter/Newsletter";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { huluNavLinks } from "../../assets/data/navLinks/huluNavLinks";
import hulureview from "../../assets/images/hulu-lineup.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import hulu from "../../assets/images/hulu-logo.png";
import huluicon from "../../assets/images/hulu-icon.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import dotted from "../../assets/images/dotted.png";
import { FaCheck } from "react-icons/fa6";

export const metadata = {
  title: "Hulu Channels"
};

const HuluChannelLineUp = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: hulu,
      rating: "(4.5/5)",
      starImg: star,
      desc: "Best value (live TV streaming)",
      buttonText: "read hulu review",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: hulureview,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "Hulu",
        icon: huluicon,
      },
      {
        subtitle: "Price:",
        title: "$7.99–$17.99/mo.",
        icon: huluicon,
      },
      {
        subtitle: "Live channels:",
        title: "85+",
        icon: huluicon,
      },
      {
        subtitle: "On-demand hubs:",
        title: "50+, including CBS, Disney Channel, and Lifetime",
        icon: huluicon,
      },
    ],

    tableData: [
      {
        head: ["Plan", "price", "Ad-free?*", "Details"],

        body: [
          {
            content: [
              "1.",
              "Hulu (Limited Ads)",
              "$9.99/mo.",
              <FaCheck key="Fa1" className="check-icon" />,
            ],
            linkPath: "#",
          },
          {
            content: [
              "2.",
              "Trio Basic",
              "$14.99/mo.",
              <FaCheck key="Fa2" className="check-icon" />,
            ],
            linkPath: "#",
          },
          {
            content: [
              "3.",
              "Trio Premium",
              "$24.99/mo.",
              <FaCheck key="Fa3" className="check-icon" />,
            ],
            linkPath: "#",
          },
          {
            content: [
              "4.",
              "Hulu + Live TV, Disney+, ESPN+",
              "$76.99/mo..",
              <FaCheck key="Fa4" className="check-icon" />,
            ],
            linkPath: "#",
          },
          {
            content: [
              "5.",
              "Hulu + Live TV, Disney+, ESPN+",
              "$89.99/mo.",
              <FaCheck key="Fa5" className="check-icon" />,
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
  return (
    <div className="hulu-channel-line-up">
      {/* <SubNav links={huluNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Hulu Channels: Live, On Demand, And More
          </h2>
          <p className="sect-desc">
            Hulu + Live TV carries 85+ live channels, but a few of your
            favorites might be missing.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Looking for a specific channel?</h4>
          <p>
            If you’re on a desktop or laptop hit ‘Control + F’ to type in the
            channel you are looking for. If you are on a phone or tablet use the
            ‘Find on Page’ function.
          </p>
          <h4>Need better internet speeds for streaming?</h4>
          <p>
            If you have multiple devices in your home using the internet
            simultaneously, or your internet speeds just aren’t up to snuff, you
            may not be getting the best streaming TV experience.
            <br />
            Enter your zip code to check out better speeds or prices available
            from internet providers in your area.
          </p>
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
          <Link href={"#"}>Hulu + Live TV channels </Link>
          <Link href={"#"}>Sports channels on Hulu + Live TV </Link>
          <Link href={"#"}>Local channels on + Live TV </Link>
          <Link href={"#"}> Hulu + Live TV premium and channel add-ons </Link>
          <Link href={"#"}> Hulu + Live TV channel hubs </Link>
          <Link href={"#"}>FAQ </Link>
        </div>
      </div>

      <div className="section channel-lineup">
        <div className="head">
          <h2 className="sect-heading">
            Hulu + Live TV channels; <span> Hulu channel lineup </span>
          </h2>
          <p className="sect-desc">
            Hulu + Live TV features a lineup of live entertainment, sports,
            news, and kids’ channels that competes easily with a cable or
            satellite TV package—with a few exceptions. Popular channels like
            AMC, NBA TV, and IFC aren’t on Hulu + Live TV, and premium channel
            MGM+ isn’t available as an add-on.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>view hulu plans </Link>
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
                <th>Hulu + Live TV (Ads/No Ads)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>1. </th>
                <th id="a">A&E </th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>2. </th>
                <th>ABC</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>3. </th>
                <th>Afro</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>4. </th>
                <th>American Heroes Channel (AHC)</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>5. </th>
                <th>BBC America</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>6. </th>
                <th>MTV Live</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>7. </th>
                <th>Universo</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>8. </th>
                <th>WE tv</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th> 9.</th>
                <th>Z Living</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>10. </th>
                <th id="z">Zona Futbol</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="below-table">
          *Availability varies by area. Data effective as of post date.
        </p>
      </div>

      <div className="section sports-live">
        <div className="head">
          <h2 className="sect-heading">
            Sports channels <span> on Hulu Live </span>
          </h2>
          <p className="sect-desc">
            You’ve probably seen those ever-present “Hulu has live sports!”
            commercials, and Hulu + Live TV mostly lives up to the hype. With 13
            major sports channels, including a suite of ESPN channels and both
            FS1 and FS2 from FOX, it’s as sports loaded as a basic cable
            package.
            <br />
            But, Hulu + Live TV is missing sport-specific channels like NBA TV,
            MLB Network, FOX Soccer Plus, and NHL Network. Also, while Hulu +
            Live TV carries NBC RSNs (regional sports networks), it recently
            dropped FOX RSNs, along with YES Network and Marquee Sports Network.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>view hulu plans </Link>
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
                <th>Hulu + Live TV (Ads/No Ads)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>1. </th>
                <th id="a">A&E </th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>2. </th>
                <th>ABC</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>3. </th>
                <th>Afro</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>4. </th>
                <th>American Heroes Channel (AHC)</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>5. </th>
                <th>BBC America</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>6. </th>
                <th>MTV Live</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>7. </th>
                <th>Universo</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>8. </th>
                <th>WE tv</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th> 9.</th>
                <th>Z Living</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>10. </th>
                <th id="z">Zona Futbol</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="below-table">
          *Availability varies by area. Data effective as of post date.
        </p>
      </div>

      <div className="section channel-lineup">
        <div className="head">
          <h2 className="sect-heading">
            Local channels <span> on Hulu Live </span>
          </h2>
          <p className="sect-desc">
            Like most live TV streaming services, local channel lineups vary by
            region with Hulu + Live TV. But, even if you can’t get area ABC,
            CBS, FOX, NBC, The CW, or Telemundo stations, most shows are
            available on-demand the next day. Also, Hulu + Live TV carries no
            PBS stations.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>view hulu plans </Link>
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
                <th>Hulu + Live TV (Ads/No Ads)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>1. </th>
                <th id="a">A&E </th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>2. </th>
                <th>ABC</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>3. </th>
                <th>Afro</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>4. </th>
                <th>American Heroes Channel (AHC)</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>5. </th>
                <th>BBC America</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>6. </th>
                <th>MTV Live</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>7. </th>
                <th>Universo</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>8. </th>
                <th>WE tv</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th> 9.</th>
                <th>Z Living</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>10. </th>
                <th id="z">Zona Futbol</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="below-table">
          *Availability varies by area. Data effective as of post date.
        </p>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={dotted} className="mark" alt="" />
          <h4>Hulu Live premium and channel add-ons </h4>
          <p>
            Max (formerly HBO Max), SHOWTIME, CINEMAX, and STARZ are available
            as premium add-ons to Hulu + Live TV. MGM+ isn’t on the premium menu
            here, making Hulu + Live TV the only live TV streaming service that
            doesn’t carry it.
            <br />
            Hulu + Live TV also offers two multi-channel add-ons:
          </p>
          <br />
          <ul>
            <li>
              Entertainment: A nine-channel package featuring American Heroes,
              CNBC World, Cooking Channel, Destination America, Discovery
              Family, Discovery Life, DIY, Science, and Magnolia Network.
            </li>
            <li>
              Español: A six-channel package featuring ESPN Deportes, Universo,
              CNN en Español, Discovery en Español, Discovery Familia, and
              HISTORY en Español.
            </li>
          </ul>
          <br />
          <h4>Pro tip:</h4>
          <br />
          <p>
            Want to stream PBS live? YouTube TV is one of the only live TV
            streaming services that has PBS. Read our expert review of YouTube
            TV to find out more.
          </p>
        </div>
      </div>

      <div className="section channel-lineup">
        <div className="head">
          <h2 className="sect-heading">
            Hulu Live channel <span> add-ons and pricing </span>
          </h2>
          <p className="sect-desc">
            Like most live TV streaming services, local channel lineups vary by
            region with Hulu + Live TV. But, even if you can’t get area ABC,
            CBS, FOX, NBC, The CW, or Telemundo stations, most shows are
            available on-demand the next day. Also, Hulu + Live TV carries no
            PBS stations.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>view hulu plans </Link>
        </div>

        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th> </th>
                <th>Channels</th>
                <th>Hulu + Live TV (Ads/No Ads)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>1. </th>
                <th id="a">Max </th>

                <th>Max</th>
              </tr>
              <tr>
                <th>2. </th>
                <th>CINEMAX</th>
                <th>$8.99/mo.</th>
              </tr>
              <tr>
                <th>3. </th>
                <th>SHOWTIME</th>

                <th>$10.99/mo.</th>
              </tr>
              <tr>
                <th>4. </th>
                <th>STARZ</th>

                <th>$9.99/mo.</th>
              </tr>
              <tr>
                <th>5. </th>
                <th>MGM+</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>6. </th>
                <th>MTV Live</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>7. </th>
                <th>Entertainment (9 extra channels)</th>

                <th>$7.99/mo.</th>
              </tr>
              <tr>
                <th>8. </th>
                <th>Español (6 extra channels)</th>

                <th>$4.99/mo.</th>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="below-table">
          *Availability varies by area. Data effective as of post date.
        </p>
      </div>

      <div className="section cost">
        <div className="head">
          <h2 className="sect-heading">
            Hulu <span> channel hubs </span>
          </h2>
          <p className="sect-desc">
            The on-demand side of Hulu + Live TV Hulu displays a “Hubs” section
            featuring shows and movies from 50 broadcast and cable channels.
            Hulu’s channel hubs don’t include every show or movie on these
            networks, just those contracted to Hulu for a specific length of
            time.
            <br />
            For example: Hulu’s HGTV channel hub currently has 29 of 192 (yes,
            192) seasons of House Hunters but zero seasons of Yard Crashers.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Hulu channel hubs list</h4>
          <p className="after-heading"></p>
          <ul className="channel-list">
            <li>A&E</li>
            <li>ABC</li>
            <li>ABC News</li>
            <li>ABC News Live</li>
            <li>ACC Network</li>
            <li>American Heroes Channel</li>
            <li>Animal Planet</li>
            <li>BBC America</li>
            <li>BET</li>
            <li>Big Ten Network</li>
            <li>Bloomberg Television</li>
            <li>Bravo</li>
            <li>Cartoon Network/Adult Swim</li>
            <li>CBS</li>
            <li>CBS Sports Network</li>
            <li>Cheddar News</li>
            <li>CMT</li>
            <li>CNBC</li>
            <li>CNN</li>
            <li>CNN International</li>
            <li>Comedy Central</li>
            <li>Comedy.tv</li>
            <li>Cooking Channel</li>
            <li>The CW</li>
            <li>DABL</li>
            <li>Discovery</li>
            <li>Discovery en Español</li>
            <li>Discovery Family</li>
            <li>Disney Channel</li>
            <li>Disney Junior</li>
            <li>Disney XD</li>
            <li>E!</li>
            <li>ESPN</li>
            <li>ESPN2</li>
            <li>ESPNEWS</li>
            <li>ESPNU</li>
            <li>Food Network</li>
            <li>FOX</li>
            <li>Fox Business</li>
            <li>Fox News Channel</li>
            <li>Freeform</li>
            <li>FS1</li>
            <li>FS2</li>
            <li>FX</li>
            <li>FXM</li>
            <li>FXX</li>
            <li>fyi</li>
            <li>Golf Channel</li>
            <li>Great American Family</li>
            <li>Hallmark Channel</li>
            <li>Hallmark Movies & Mysteries</li>
            <li>Here TV</li>
            <li>HGTV</li>
            <li>HISTORY</li>
            <li>HLN</li>
            <li>Investigation Discovery (ID)</li>
            <li>Justice Central</li>
            <li>Lifetime</li>
            <li>Lifetime Movie Network</li>
            <li>MSNBC</li>
            <li>MTV</li>
            <li>MyNetworkTV</li>
            <li>Nat Geo WILD</li>
            <li>National Geographic</li>
            <li>NBC</li>
            <li>NBC LX</li>
            <li>NBC News Now</li>
            <li>NFL Network</li>
            <li>NewsNation</li>
            <li>Nickelodeon</li>
            <li>Nick Jr.</li>
            <li>Oxygen True Crime</li>
            <li>Science</li>
            <li>SEC Network</li>
            <li>Smithsonian Channel</li>
            <li>Start TV</li>
            <li>Syfy</li>
            <li>TBS</li>
            <li>Turner Classic Movies</li>
            <li>Telemundo</li>
            <li>TLC</li>
            <li>TNT</li>
            <li>Travel Channel</li>
            <li>truTV</li>
            <li>TV Land</li>
            <li>Universal Kids</li>
            <li>USA</li>
            <li>VH1</li>
            <li>VICE</li>
            <li>The Weather Channel</li>
          </ul>
          <hr />
          <div className="btn">
            <Link href={"/"}>view hulu plans</Link>
          </div>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Hulu + Live TV channels </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What does Hulu + Live TV
                include?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Hulu + Live TV’s local channels lineup differs by area, and
                  not all local stations that carry ABC, CBS, FOX, NBC, The CW,
                  and Telemundo are available to stream live in all regions.
                  Shows from these broadcast networks, however, are available to
                  watch on-demand through Hulu’s channel hubs.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What does Hulu + Live TV include?"}
            cssClass={"faq-content"}
          >
            <p>
              Hulu + Live TV’s local channels lineup differs by area, and not
              all local stations that carry ABC, CBS, FOX, NBC, The CW, and
              Telemundo are available to stream live in all regions. Shows from
              these broadcast networks, however, are available to watch
              on-demand through Hulu’s channel hubs.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does Hulu + Live TV have
                local channels?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  As the name implies, Hulu’s giant library of on-demand and
                  original shows and movies is a part of the Hulu + Live TV
                  package.
                  <br />
                  At CableTV.com, Hulu + Live TV is our editorial pick for Best
                  Value live TV streaming service, because you get the best of
                  both (live and on-demand) streaming worlds.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does Hulu + Live TV have local channels?"}
            cssClass={"faq-content"}
          >
            <p>
              As the name implies, Hulu’s giant library of on-demand and
              original shows and movies is a part of the Hulu + Live TV package.
              <br />
              At CableTV.com, Hulu + Live TV is our editorial pick for Best
              Value live TV streaming service, because you get the best of both
              (live and on-demand) streaming worlds.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What channels does Hulu +
                Live TV not have?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  While it does feature one of the fuller channel lineups in
                  live TV streaming, Hulu + Live TV is missing a few popular
                  channels. These channels aren’t on Hulu + Live TV:
                </p>
                <br />
                <ul>
                  <li>AMC</li>
                  <li>Lifetime Movie Network</li>
                  <li>IFC</li>
                  <li>BBC America</li>
                  <li>Science</li>
                  <li>NBA TV</li>
                  <li>MLB Network</li>
                  <li>FOX Soccer Plus</li>
                  <li>NHL Network</li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" What channels does Hulu + Live TV not have?"}
            cssClass={"faq-content"}
          >
            <p>
              While it does feature one of the fuller channel lineups in live TV
              streaming, Hulu + Live TV is missing a few popular channels. These
              channels aren’t on Hulu + Live TV:
            </p>
            <br />
            <ul>
              <li>AMC</li>
              <li>Lifetime Movie Network</li>
              <li>IFC</li>
              <li>BBC America</li>
              <li>Science</li>
              <li>NBA TV</li>
              <li>MLB Network</li>
              <li>FOX Soccer Plus</li>
              <li>NHL Network</li>
            </ul>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Hulu Review | Hulu Deals | Hulu Bundles | What to Watch on
          Hulu
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default HuluChannelLineUp;
