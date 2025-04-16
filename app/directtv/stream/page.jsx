// import React, { useState } from "react";
import "./direct-tv-stream.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { directtvNavLinks } from "../../assets/data/navLinks/directtvNavLinks";
import InnerPagesHeroThree from "../../components/inner-pages-hero-three/InnerPagesHeroThree";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import star from "../../assets/images/star.png";
import directtvlogostream from "../../assets/images/directtvlogostream.png";
import middleagemanstream from "../../assets/images/middleagemanstream.png";
import dotted from "../../assets/images/dotted.png";
import { GoArrowUpRight } from "react-icons/go";
import CTA from "../../components/cta-section/CTA";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import quotationsIcon from "../../assets/images/quotations.svg";
import PackageTable from "../../components/package-table/PackageTable";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa6";
import directtvstream from "../../assets/images/directtvstream.png";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "DIRECTV STREAM Review 2024: Cost, Plans, And More"
};

const DirectTvStream = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    column1: {
      logo: directtvlogostream,
      rating: "(4.9/5)",
      starImg: star,
    },
    column2: {
      heading: "DIRECTV STREAM",
      listItems: [
        {
          text: [
            { text: "Price:  ", isLink: true, link: "/installation" },
            { text: "$69.99–$159.99/mo. (plus tax)", isLink: false },
          ],
        },
        {
          text: [
            { text: "Channels:", isLink: true, link: "/installation" },
            { text: "75–150+", isLink: false },
          ],
        },
        {
          text: [
            {
              text: "Cloud DVR storage:",
              isLink: true,
              link: "/installation",
            },
            { text: "Unlimited", isLink: false },
          ],
        },
        {
          text: [
            { text: "Streams: ", isLink: true, link: "/installation" },
            { text: "3–unlimited", isLink: false },
          ],
        },
      ],
    },
    column3: {
      img: middleagemanstream,
    },
    column4: {
      link: "see full channel lineups",
      callback1: "view plans",
      callback2: " ",
      buttonIcon: <GoArrowUpRight className="upright-arrow-icon" />,
    },
  };
  let packageTableData = [
    {
      head: ["Plan", "Price*", "Channels", "Streams", "Cloud DVR", "Details"],

      body: [
        {
          content: [
            "1.",
            "DIRECTV STREAM ENTERTAINMENT",
            "$64.99/mo. (plus tax)",
            "75+",
            "3 (unlimited inside home network)",
            "Unlimited",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "DIRECTV STREAM CHOICE",
            "$84.99/mo. (plus tax)",
            "105+",
            "3 (unlimited inside home network)",
            "Unlimited",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "DIRECTV STREAM ULTIMATE",
            "$109.99/mo. (plus tax)",
            "140+",
            "3 (unlimited inside home network)",
            "Unlimited",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "DIRECTV STREAM PREMIER",
            "$154.99/mo. (plus tax)",
            "150+",
            "3 (unlimited inside home network)",
            "Unlimited",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "DIRECTV STREAM ÓPTIMO MÁS™",
            "$74.99/mo. (plus tax)",
            "100+",
            "3 (unlimited inside home network)",
            "Unlimited",
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
        "Price*",
        "Channels",
        "Multiple streams",
        "Cloud DVR",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "DIRECTV STREAM",
            "$69.99–$159.99/mo.",
            "75–150+",
            "*3–unlimited",
            "Unlimited (9 mos.)",
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
            "Unlimited (9 mos.)",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "fuboTV",
            "$74.99–$94.99/mo.",
            "140–215+",
            "10",
            "1,000 hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "6.",
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
            "7.",
            "Vidgo",
            "$69.99–$99.99/mo.",
            "110–150+",
            "2",
            "20 hrs.",
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
    <div className="direct-tv-stream">
      {/* <SubNav links={directtvNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV STREAM Review 2024: Cost, Plans, And More
          </h2>
          <p className="sect-desc">
            We’ve tested the Hopper 3 for several months and can confirm it’s
            the best DVR/receiver in the business—now let’s determine if it’s
            the best choice for you.
          </p>
        </div>
        <InnerPagesHeroThree data={heroData} />
        <p className="sect-desc">
          Data is as of time of post. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>
      <StickyHeader />

      <div className="endnote is-direct-tv-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is DIRECTV STREAM good?</h4>
          <p>
            DIRECTV STREAM is a good live TV streaming service, but it’s pricier
            than most of the others we’ve reviewed at CableTV.com. Still, if you
            like the fat channel lineups of satellite TV and don’t mind an
            equally fat monthly bill, DIRECTV STREAM could be the luxury live TV
            streamer for you.
            <br />
            DIRECTV STREAM is the latest in a long line of rebrands for
            AT&T/DIRECTV’s live TV streaming service, formerly known as AT&T TV,
            AT&T TV NOW, DIRECTV NOW, AT&T Watch TV, AT&T U-verse, and probably
            some others we missed over a lunch break. It’s been a long streaming
            journey.
            <br />
            As with its previous makeovers, DIRECTV STREAM is less of an
            improvement on its live TV streaming service than a continuation
            with a new skin. It still delivers some of the highest channel
            counts in streaming, but it also costs about the same as satellite
            TV service—which kind of skirts the unspoken “streaming is cheaper
            than traditional TV” rule.
          </p>
          <h4>DIRECTV STREAM pros and cons</h4>
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
                  <td>Large channel counts</td>
                  <td>Expensive plans</td>
                </tr>
                <tr>
                  <td>No contracts</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>Free premium channel trials </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>Unlimited Cloud DVR storage </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Need better internet speeds for streaming?"}
        desc={
          "If you have multiple devices in your home using the internet simultaneously, or your internet speeds just aren’t up to snuff, you may not be getting the best streaming TV experience. Enter your zip code to check out better speeds or prices available from internet providers in your area."
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
          <Link href={"#"}>Deals and promotions </Link>
          <Link href={"#"}>Plans and pricing </Link>
          <Link href={"#"}>DIRECTV STREAM vs. the competition</Link>
          <Link href={"#"}>Channels</Link>
          <Link href={"#"}>Specs and features</Link>
        </div>
      </div>

      <div className="section direct-tv-blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
        </div>
        <div className="package-table-container channels">
          <Image src={dotted} alt="" className="mark" />
          <h4>DIRECTV STREAM deals and promotions</h4>
          <br />
          <p>
            DIRECTV STREAM usually offers a decent amount of sign-up deals and
            promotions. Here are its most vibrant deals:
          </p>
          <ul>
            <li>
              · Free premium channels: New DIRECTV STREAM subscribers can get
              free premium channels, including HBO Max, SHOWTIME, STARZ,
              CINEMAX, and EPIX, on select plans for three months.
            </li>
          </ul>
        </div>
      </div>

      <div className="section direct-tv-plans-and-pricing">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV STREAM <span> plans and pricing </span>
          </h2>
          <p className="sect-desc">
            DIRECTV STREAM’s plans mostly mirror those of DIRECTV satellite—the
            difference being that DIRECTV Stream requires no annual contracts or
            extra equipment (like a receiver box or roof dish). It does offer
            the option of renting a branded streaming box (a leftover from the
            AT&T TV era) for an additional $5 a month, but we’d recommend using
            or buying your own streaming device.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          *2-year low price guarantee.Data effective as of post date. Offers and
          availability may vary by location and are subject to change.
        </p>
      </div>

      <div className="section direct-tv-competition">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV STREAM <span> vs. the competition </span>
          </h2>
          <p className="sect-desc">
            Apart from high channel counts, there’s not much that elevates
            DIRECTV STREAM over the rest of the live TV streaming pack. The
            closest comparison would be fuboTV, which features similarly loaded
            channel lineups and pricey plans—but DIRECTV STREAM includes
            unlimited Cloud DVR storage.
          </p>
        </div>
        <PackageTable item={packageTableDataCompetition} />
        <br />
        <p className="below-table">
          *Unlimited in-home streams; limited to 3 concurrent out-of-home
          streams. Data effective as of post date. Offers and availability may
          vary by location and are subject to change.
        </p>
      </div>

      <div className="section direct-tv-premium-channel-and-add-on-costs">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV STREAM <span> channels and add-ons </span>
          </h2>
          <p className="sect-desc">
            As we’ve said, DIRECTV STREAM features a lot of channels—but the
            majority of the channels you’ll probably want reside in the
            higher-priced plans. On the upside, DIRECTV STREAM’s add-on package
            choices are strong.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Live channel lineups</h4>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Channels </th>
                  <th>ENTERTAINMENT</th>
                  <th>CHOICE</th>
                  <th>ULTIMATE</th>
                  <th>PREMIER</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Local channels*</td>
                  <td>
                    {" "}
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>ACC Network</td>
                  <td>
                    {" "}
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>BET Her</td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Discovery Family</td>
                  <td>
                    {" "}
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    {" "}
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    {" "}
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>HBO MaxTM</td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td>USA Network</td>
                  <td>
                    {" "}
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    {" "}
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>7.</td>
                  <td>VH1</td>
                  <td> $11.00/mo.</td>
                  <td> $11.00/mo.</td>
                  <td> $11.00/mo.</td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>8.</td>
                  <td>WE tv</td>
                  <td>
                    {" "}
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>9.</td>
                  <td>Weather Channel</td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>10.</td>
                  <td>Zona Futbol</td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="below-table">
            *Availability varies by area. Data effective as of post date.
          </p>
          <br />
          <p>
            YouTube TV can give you more live TV channels for about the same
            price as DIRECTV STREAM’s cheapest plan, ENTERTAINMENT. But, if
            you’re looking to splurge, DIRECTV STREAM’s PREMIER gets you over
            140 channels and even includes HBO, CINEMAX, SHOWTIME, and STARZ.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Local channels</h4>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Channels </th>
                  <th>ENTERTAINMENT</th>
                  <th>CHOICE</th>
                  <th>ULTIMATE</th>
                  <th>PREMIER</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>ABC</td>
                  <td>
                    {" "}
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>CBS</td>
                  <td>
                    {" "}
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>FOX</td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>NBC</td>
                  <td>
                    {" "}
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    {" "}
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    {" "}
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>The CW</td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td>PBS</td>
                  <td>
                    {" "}
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    {" "}
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>7.</td>
                  <td>Telemundo</td>
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
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="below-table">
            *Availability varies by area. Data effective as of post date.
          </p>
          <br />
          <p>
            Just like its fraternal satellite twin DIRECTV, DIRECTV STREAM
            carries most local channels in most areas. That’s not bad,
            considering other live TV streaming services don’t carry many (or,
            in some cases, any) local TV stations affiliated with ABC, CBS, FOX,
            or NBC.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Premium add-on channels</h4>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Channels </th>
                  <th>ENTERTAINMENT</th>
                  <th>CHOICE</th>
                  <th>ULTIMATE</th>
                  <th>PREMIER</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>HBO Max</td>
                  <td>$14.99/mo.</td>
                  <td>$14.99/mo.</td>
                  <td>$14.99/mo.</td>
                  <td>Included</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>CINEMAX</td>
                  <td>$11.00/mo.</td>
                  <td>$11.00/mo.</td>
                  <td>$11.00/mo.</td>
                  <td>Included</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>SHOWTIME</td>
                  <td>$11.00/mo.</td>
                  <td>$11.00/mo.</td>
                  <td>$11.00/mo.</td>
                  <td>Included</td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>STARZ</td>
                  <td>$11.00/mo.</td>
                  <td>$11.00/mo.</td>
                  <td>$11.00/mo.</td>
                  <td>Included</td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>EPIX</td>
                  <td>$6.00/mo.</td>
                  <td>$6.00/mo.</td>
                  <td>$6.00/mo.</td>
                  <td>Included</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="below-table">Data effective as of post date.</p>
          <br />
          <p>
            DIRECTV STREAM offers the big five premium add-on channels: HBO Max,
            CINEMAX, SHOWTIME, STARZ, and EPIX. YouTube TV is the only live TV
            streaming service to offer all five of these add-ons.
          </p>
        </div>
      </div>

      <div className="section direct-tv-premium-specs-and-features">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV STREAM <span> specs and features </span>
          </h2>
          <p className="sect-desc">
            After its lackluster debut two years ago, DIRECTV STREAM has finally
            brought its features up to par with streaming industry favorites
            YouTube TV and Hulu + Live TV. (‘Bout time!) We’ll break down
            everything from DIRECTV STREAM Cloud DVR storage to compatible
            devices below.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Cloud DVR</h4>
          <br />
          <p>
            DIRECTV STREAM now offers unlimited Cloud DVR storage for nine
            months. Competitors like YouTube TV and Hulu + Live TV also feature
            unlimited Cloud DVR storage for nine months, so don’t let recording
            all your favorite shows tie you to DIRECTV STREAM. You’ve got
            options, dear reader.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Simultaneous streams</h4>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Service </th>
                  <th>Simultaneous streams</th>
                  <th>Within home network</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>DIRECTV STREAM</td>
                  <td>3</td>
                  <td>Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <p>
            DIRECTV STREAM allows for three simultaneous streams outside of your
            home network, and unlimited within it. If you somehow have dozens of
            TV watchers in your house, we strongly suggest upgrading your
            internet service—DIRECTV STREAM says you’ll need at least 8 Mbps of
            speed to stream smoothly, but we suggest at least 25 Mbps.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Compatible devices</h4>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Device </th>
                  <th>DIRECTV STREAM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Amazon Fire Cube, Stick, TV</td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Android phones, tablets </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Chromecast, Chromecast with Google TV </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Roku Ultra, Express, Premiere, Stick, TV </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td> Samsung TVs (select models)</td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td> TiVo Stream</td>
                  <td>
                    {" "}
                    <ImCross className="cross-icon" />
                  </td>
                </tr>
                <tr>
                  <td>7.</td>
                  <td> Xbox One</td>
                  <td>
                    {" "}
                    <ImCross className="cross-icon" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="below-table">Data effective as of post date.</p>
          <br />
          <p>
            Like AT&T TV before it, DIRECTV STREAM doesn’t require a
            provider-supplied streaming box—but it’ll gladly rent it to you for
            an extra $5 a month. We recommend using the DIRECTV STREAM app with
            your own streaming device instead; rental fees add up over time.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Video and audio quality</h4>
          <br />
          <p>
            DIRECTV STREAM, like other live TV streaming services, streams live
            at 720p HD, with on-demand content available in 1080p or Blu-ray
            quality. DIRECTV STREAM doesn’t support 4K Ultra HD, either live or
            on-demand.
          </p>
          <br />
          <Image src={directtvstream} alt="" />
          <p className="below-table">DIRECTV STREAM channel guide.</p>
          <br />
          <p>
            DIRECTV STREAM’s audio feed is standard 2.0 stereo, with some
            available in Dolby 5.1 Surround Sound. Sorry, no Dolby Atmos here.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is DIRECTV STREAM worth it? </span>
          </h2>
          <p className="sect-desc">
            Like its AT&T predecessors, DIRECTV STREAM operates more like a
            standard satellite TV service than a live TV streaming service, in
            both performance and price—emphasis on price. All that’s missing is
            the roof dish and the two-year contract (good riddance).
            <br />
            We’d say DIRECTV STREAM isn’t worth it for experienced,
            budget-conscious cord-cutters, but more for streaming newbies who
            want to switch from satellite TV painlessly: DIRECTV STREAM looks
            and functions almost identically to DIRECTV, right down to the
            interface and channel selection.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>get DIRECTV STREAM</Link>
        </div>
      </div>

      <div className="section direct-tv-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>DIRECTV STREAM </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span>Is DIRECTV STREAM different
                from AT&T TV?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  DIRECTV STREAM is the new name of AT&T TV (previously AT&T TV
                  NOW, and DIRECTV NOW before that). DIRECTV STREAM’s features,
                  plans, and pricing are the same as AT&T TV’s were, for now.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"Is DIRECTV STREAM different from AT&T TV?"}
            cssClass={"faq-content"}
          >
            <p>
              DIRECTV STREAM is the new name of AT&T TV (previously AT&T TV NOW,
              and DIRECTV NOW before that). DIRECTV STREAM’s features, plans,
              and pricing are the same as AT&T TV’s were, for now.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How much does DIRECTV
                STREAM cost?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  DIRECTV STREAM offers four plans: ENTERTAINMENT at $64.99 a
                  month (75+ channels), CHOICE at $84.99 a month (105+
                  channels), ULTIMATE at $109.99 a month (140+ channels), and
                  PREMIER at $154.99 a month (150+ channels).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" How much does DIRECTV STREAM cost?"}
            cssClass={"faq-content"}
          >
            <p>
              DIRECTV STREAM offers four plans: ENTERTAINMENT at $64.99 a month
              (75+ channels), CHOICE at $84.99 a month (105+ channels), ULTIMATE
              at $109.99 a month (140+ channels), and PREMIER at $154.99 a month
              (150+ channels).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Can you stream DIRECTV
                STREAM on a smart TV?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Yes, the DIRECTV STREAM app is compatible with 2017 and newer
                  models of Samsung smart TVs. It’s also available on Amazon
                  Fire TV, Apple TV, Roku, Android TV, and Chromecast with
                  Google TV devices.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Can you stream DIRECTV STREAM on a smart TV?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, the DIRECTV STREAM app is compatible with 2017 and newer
              models of Samsung smart TVs. It’s also available on Amazon Fire
              TV, Apple TV, Roku, Android TV, and Chromecast with Google TV
              devices.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span>What is the difference
                between DIRECTV and DIRECTV STREAM?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Content-wise, there’s not much that separates DIRECTV from
                  DIRECTV STREAM. But DIRECTV is a satellite TV service with a
                  two-year contract and dish installation, while DIRECTV STREAM
                  is a live TV streaming service that requires no long-term
                  commitments or bulky equipment. We explain these differences
                  in more detail on our DIRECTV STREAM vs. DIRECTV page..
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={"What is the difference between DIRECTV and DIRECTV STREAM?"}
            cssClass={"faq-content"}
          >
            <p>
              Content-wise, there’s not much that separates DIRECTV from DIRECTV
              STREAM. But DIRECTV is a satellite TV service with a two-year
              contract and dish installation, while DIRECTV STREAM is a live TV
              streaming service that requires no long-term commitments or bulky
              equipment. We explain these differences in more detail on our
              DIRECTV STREAM vs. DIRECTV page..
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote direct-tv-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Methodology:</h4>
          <p>
            Our TV experts have spent hundreds of hours studying and analyzing
            DIRECTV’s plans and features. We hand-tested the service’s signal
            reliability and overall user experience while evaluating its
            different channel lineups and DVR capabilities. Additionally, we
            pulled data from our annual TV Customer Satisfaction Survey to see
            how DIRECTV ranked against competitors. Check out our{" "}
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
            page.
          </p>
          <h4>Related articles:</h4>
          <ul>
            <li>
              ·
              <span className="link">
                <Link href={"#"}> DIRECTV STREAM vs. DIRECTV </Link>
              </span>
            </li>
            <li>
              {" "}
              ·
              <span className="link">
                <Link href={"#"}> Best Live TV Streaming Services </Link>
              </span>
            </li>
            <li>
              {" "}
              ·
              <span className="link">
                <Link href={"#"}> Best On-Demand Streaming Services </Link>
              </span>
            </li>
            <li>
              {" "}
              ·
              <span className="link">
                <Link href={"#"}> Best Streaming Services for Sports </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default DirectTvStream;
