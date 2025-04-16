// import React, { useState } from "react";
// import SubNav from "../../components/sub-nav/SubNav";
import { xfinityNavLinks } from "../../assets/data/navLinks/xfinityNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import "./channel-linup.scss";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import CTA from "../../components/cta-section/CTA";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa6";
// import Newsletter from "../../components/newsletter/Newsletter";
import xfinitylogo from "../../assets/images/xfinitylogo.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import reviewman from "../../assets/images/reviewman.png";
import cross from "../../assets/images/cross.png";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Xfinity Channel Lineup"
};

const XfinityChannelLinup = () => {
  // const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  let heroData = {
    card1: {
      logo: xfinitylogo,
      rating: "(4.5/5)",
      starImg: star,
      desc: "Get high-speed internet for only $30/mo. when you add Xfinity Mobile to your plan.",
      buttonText: "Compare Plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: reviewman,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "Xfinity",
        icon: cross,
      },
      {
        subtitle: "Internet speed:",
        title: "75–6,000 Mbps",
        icon: cross,
      },
      {
        subtitle: "Price:",
        title: "$24.99–$299.95/mo.",
        icon: cross,
      },
      {
        subtitle: "Channels:",
        title: "10–185+ Channels",
        icon: cross,
      },
    ],

    tableData: [
      {
        head: [
          "Top packages",
          "Price*",
          "Download speeds",
          "Channels",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Superfast Internet + Ultimate TV",
              "$110.00–$135.00/mo.",
              "800 Mbps",
              "185+",
            ],
            linkPath: "#",
          },

          {
            content: ["2.", "Gigabit Extra", "$80.00/mo.", "1,200 Mbps", "N/A"],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "*For the first 24 months with No Term Agreement. Includes $10/mo automatic payments and paperless billing discount. See full disclaimer. Data effective as of publish date. Offers and availability may vary by location and are subject to change.",
  };

  return (
    <div className="xfinity-channellinup">
      {/* <SubNav links={xfinityNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">Xfinity Channel Lineup</h2>
          <p className="sect-desc">
            Xfinity offers up to 185+ channels across its three main TV
            packages.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />
      <div className="endnote is-xfinity-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            Xfinity offers three cable packages: Choice, Popular, and Ultimate.
            Choice is a basic cable package that we wouldn’t recommend (pick
            yourself up an
            <span className="link">
              <Link href={"#"}> over-the-air antenna</Link>
            </span>
            instead), but we like both the Popular and Ultimate packages.
            <br />
            The Popular package is a good plan for folks who don’t need extra
            channels like Disney XD or the MLB Network. But if you want the
            whole enchilada, Ultimate is for you.
          </p>
          <p className="bold-blue">
            If you want to find a channel, here's how: On a laptop or computer,
            press Ctrl + F (or Command + F on Macs), then type the channel name.
            If Xfinity has that channel, it will show you which package(s)
            include it.
          </p>
        </div>
      </div>

      <div className="section important-links">
        <div className="head">
          <h2 className="sect-heading">
            <span>important links</span>
          </h2>
          <p className="sect-desc">
            Access essential information quickly and easily by clicking the
            links below.
          </p>
        </div>

        <div className="all-links">
          <Link href={"#"}>Xfinity channel lineups</Link>
          <Link href={"#"}>Regional offerings</Link>
          <Link href={"#"}>Latino channel packages</Link>
          <Link href={"#"}>Premium channel packages</Link>
          <Link href={"#"}>On-demand packages</Link>
        </div>
      </div>

      <CTA
        heading={"See if Xfinity and other top TV providers are in your area"}
        desc={"Enter your zip code below to get the right TV plan for you."}
      />

      <div className="section xfinity-channel">
        <div className="head">
          <h2 className="sect-heading">
            The TV channels you get with Xfinity (
            <span>could be different depending on where you live</span>)
          </h2>
          <p className="sect-desc">
            Remember, the number of channels and the names of TV plans from
            Xfinity can change depending on where you live. In this chart, we
            used an address in the West region, so if you live in the Northeast
            or Central regions, there might be a few differences
          </p>
          <p className="sect-desc">
            Xfinity says you can get more than 125 channels with the Popular
            plan and over 185 with the Ultimate plan. They also have a basic
            plan called Choice, but we don't think it's the best option.
            Instead, you might want to think about getting an HD antenna. It
            costs about $40 and you only pay once, which could save you some
            money.
          </p>
          <p className="sect-desc">
            You might wonder what the plus symbols mean. Xfinity promises a
            certain number of channels, so when they say 185+, it means you'll
            definitely get at least that many channels, and maybe even more.
          </p>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Channels</th>
                <th>Choice10+ channels</th>
                <th>Popular125+ channels</th>
                <th>Ultimate185+ channels</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1.</td>
                <td>A&E</td>
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
                <td>2.</td>
                <td>ABC</td>
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
                <td>3.</td>
                <td>afro</td>
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
                <td>4.</td>
                <td>American Heroes Channel (AHC)</td>
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
                <td>5.</td>
                <td>BBC America</td>
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
                <td>6.</td>
                <td>MTV Live</td>
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
                <td>7.</td>
                <td>Universo</td>
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
                <td>8.</td>
                <td>WE tv</td>
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
                <td>9.</td>
                <td>Z Living</td>
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
                <td>10.</td>
                <td>Zona Futbol</td>
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

      <div className="section xfinity-channeldetails">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span>channel Info</span>
          </h2>
          <p className="sect-desc">
            Discover the variety of channels Xfinity offers, tailored to your
            region's preferences. Explore their range of plans, each promising
            an array of entertainment options.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Which TV channels do I get with my local Xfinity plan?</h4>
          <p className="after-heading">
            Xfinity channels might be different depending on where you live. You
            can see a rough idea of what channels you might get in the chart
            below. If you want to know exactly what channels are available in
            your area, you can use Xfinity's channel lineup tool and enter your
            zip code.
            <span className="link">
              <Link href={"#"}> Xfinity’s channel lineup tool </Link>
            </span>
            to see your region’s offerings.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Popular channels available with Xfinity TV</h4>
          <p className="after-heading">
            All three of Xfinity’s TV packages have all 30 of most-watched TV
            channels according to *Variety1.
          </p>
          <p className="after-heading">
            Note: Xfinity does not list Adult Swim as a separate channel because
            it airs on Cartoon Network. Variety separates the two networks in
            its rankings. So although you won’t see Adult Swim in Xfinity
            channel lineups, rest assured that it’s there—as Cartoon Network.
          </p>
          <div className="btn">
            <Link href={"#"}>get Xfinity today</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity Latino channels</h4>
          <p className="after-heading">
            You can add Xfinity’s Latino channel bundle to your Xfinity package.
            It costs $10.00 a month and has 50+ channels, including:
          </p>
          <ul className="channel-list">
            <li>BabyFirstTV en Español</li>
            <li>Canal Once</li>
            <li>Canal SUR</li>
            <li>Caracol TV</li>
            <li>Centroamérica TV</li>
            <li>Cine Mexicano</li>
            <li>Cinelatino</li>
            <li>Cinema Dinamita</li>
            <li>CNN en Español</li>
            <li>Discovery en Español</li>
            <li>Discovery Familia</li>
            <li>Ecuavisa</li>
            <li>Enlace</li>
            <li>ESPN Deportes</li>
            <li>EWTN Español</li>
            <li>Fox Deportes</li>
            <li>Fox Life</li>
            <li>Galavisión</li>
            <li>History en Español</li>
            <li>HITN</li>
            <li>Latin American Sports</li>
            <li>Mexicanal</li>
            <li>Multimedios</li>
            <li>Nuestra Tele</li>
            <li>Pasiones</li>
            <li>RCN Novelas</li>
            <li>Sony Cine (formerly Cine Sony Television)</li>
            <li>SUR Perú</li>
            <li>Telefe</li>
            <li>TeleFórmula</li>
            <li>Tr3s: MTV</li>
            <li>Música y Más</li>
            <li>TUDN</li>
            <li>TV Chile</li>
            <li>TV Dominicana</li>
            <li>TVV</li>
            <li>TVE</li>
            <li>Universo</li>
            <li>Video Rola</li>
            <li>ViendoMovies</li>
            <li>Vme Kids</li>
            <li>WAPA América</li>
          </ul>
          <div className="btn">
            <Link href={"#"}>get these Latinos channels</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity premium channel packages</h4>
          <p className="after-heading">
            Wanna add more top-shelf movies and series—or sportsballs—to your TV
            menu? Xfinity has these premium channel add-ons available.
          </p>
          <ul className="channel-list">
            <li>CINEMAX ($12.00/mo.)</li>
            <li>Deportes ($5.00/mo.)</li>
            <li>MGM+ (formerly EPIX) ($5.99/mo.)</li>
            <li>HBO® Max ($14.99/mo.)</li>
            <li>More Sports & Entertainment with NFL RedZone ($9.99/mo.)</li>
            <li>Playboy TV ($19.99/mo.)</li>
            <li>SHOWTIME® ($12.00/mo.)</li>
            <li>STREAMPIX ($4.99/mo., included with Popular TV and above)</li>
          </ul>
          <p className="below-table left">
            Data as of publish date. Offers and availability may vary by
            location and are subject to change.
          </p>
          <div className="btn">
            <Link href={"#"}>get these premium channels</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity on-demand packages</h4>
          <p className="after-heading">
            Xfinity also has nearly two dozen special-interest, on-demand
            packages for further TV-lineup customization.
          </p>
          <ul className="channel-list">
            <li>FOX NATION ($5.99/mo.)</li>
            <li>HITZ ($12.00/mo.)</li>
            <li>AMC+ ($8.99/mo.)</li>
            <li>allblk ($5.99/mo.)</li>
            <li>Disney Story Central ($4.99/mo.)</li>
            <li>Curiosity Stream ($2.99/mo.)</li>
            <li>Lifetime Movie Club ($4.99/mo.)</li>
            <li>HISTORY Vault ($4.99/mo.)</li>
            <li>Stingray Classica ($6.99/mo.)</li>
            <li>GAIAM ($7.99/mo.)</li>
            <li>Fit Fusion by Jillian Michael ($6.99/mo.)</li>
            <li>KidStream ($4.99/mo.)</li>
            <li>Grokker ($6.99/mo.)</li>
            <li>Anime Network ($6.99/mo.)</li>
            <li>Gaia ($11.99/mo.)</li>
            <li>Stingray Karaoke ($6.99/mo.)</li>
            <li>UP Faith & Family ($5.99/mo.)</li>
            <li>Acorn TV ($6.99/mo.)</li>
            <li>Pantaya ($5.99/mo.)</li>
            <li>DOGTV ($4.99/mo.)</li>
            <li>TumbleBooksTV ($4.99/mo.)</li>
            <li>Here TV ($7.99/mo.)</li>
            <li>Filipino on Demand ($7.99/mo.)</li>
          </ul>
          <p className="below-table left">
            Data as of publish date. Offers and availability may vary by
            location and are subject to change.
          </p>
          <div className="btn">
            <Link href={"#"}>get these on-demand channels</Link>
          </div>
        </div>
      </div>

      <div className="section pro-tip">
        <div className="head">
          <h2 className="sect-heading">
            <span>Pro</span>tip
          </h2>
          <p className="sect-desc">
            If you don’t see the channels you want in Xfinity’s plans, check out
            the channel lineups from these providers:
          </p>
        </div>

        <div className="all-links">
          <Link href={"#"}>Spectrum Channel Lineup Guide</Link>
          <Link href={"#"}>DISH Channel Lineup Guide</Link>
          <Link href={"#"}>DIRECTV Channel Lineup Guide</Link>
        </div>
      </div>

      <div className="section xfinity-channellinup-faq">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span>channel lineup</span> FAQ
          </h2>

          <p className="sect-desc">
            TL;DR? Xfinity kills it. For more detailed info on all Xfinity
            equipment and services, see our comprehensive Xfinity equipment
            guide.
          </p>
        </div>

        <div className="faq-wrapper">
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(1)}>
                <span>{faq === 1 ? "-" : "+"}</span> Are there any good Xfinity
                deals in my area?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  To find Xfinity deals in your area,
                  <span className="link">
                    <Link href={"#"}>click this link</Link>
                  </span>{" "}
                  to jump to the top of this guide to Xfinity Deals and
                  Promotions.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"Are there any good Xfinity deals in my area?"}
            cssClass={"faq-content"}
          >
            <p>
              To find Xfinity deals in your area,
              <span className="link">
                <Link href={"#"}>click this link</Link>
              </span>{" "}
              to jump to the top of this guide to Xfinity Deals and Promotions.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does Xfinity have deals for
                existing customers?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  The majority of Xfinity's deals apply only to new subscribers,
                  but current customers can sometimes get in on those deals by
                  upgrading their service. Contact Xfinity customer service to
                  find out if they're amenable to upgrading your current service
                  and applying a deal.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"Does Xfinity have deals for existing customers?"}
            cssClass={"faq-content"}
          >
            <p>
              The majority of Xfinity's deals apply only to new subscribers, but
              current customers can sometimes get in on those deals by upgrading
              their service. Contact Xfinity customer service to find out if
              they're amenable to upgrading your current service and applying a
              deal.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does Xfinity offer deals to
                senior citizens?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  There are no Xfinity special offers, discounts, or deals
                  specifically for senior citizens, but its Internet Essentials
                  from Comcast initiative provides a low-cost option for those
                  eligible for government housing assistance, Medicaid, SNAP,
                  SSI, and other programs.
                </p>
                <p>
                  With it, you can get 50 Mbps internet service for $9.95 a
                  month with no activation or equipment rental fees.
                  Additionally, you'll have free access to Xfinity Wi-Fi
                  hotspots
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"3"}
            title={"Does Xfinity offer deals to senior citizens?"}
            cssClass={"faq-content"}
          >
            <p>
              There are no Xfinity special offers, discounts, or deals
              specifically for senior citizens, but its Internet Essentials from
              Comcast initiative provides a low-cost option for those eligible
              for government housing assistance, Medicaid, SNAP, SSI, and other
              programs.
            </p>
            <p>
              With it, you can get 50 Mbps internet service for $9.95 a month
              with no activation or equipment rental fees. Additionally, you'll
              have free access to Xfinity Wi-Fi hotspots
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does Xfinity offer deals on
                mobile service?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Though it's primarily a cable TV and internet provider,
                  Xfinity also offers wireless phone service through{" "}
                  <span className="link">
                    <Link href={"#"}>Xfinity Mobile.</Link>
                  </span>{" "}
                  Xfinity Mobile customers can save up to $35 off their internet
                  bill every month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={"Does Xfinity offer deals on mobile service?"}
            cssClass={"faq-content"}
          >
            <p>
              Though it's primarily a cable TV and internet provider, Xfinity
              also offers wireless phone service through{" "}
              <span className="link">
                <Link href={"#"}>Xfinity Mobile.</Link>
              </span>{" "}
              Xfinity Mobile customers can save up to $35 off their internet
              bill every month.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Xfinity Overview | Xfinity Internet | Xfinity TV | Xfinity
          Voice | Xfinity Bundles | Xfinity Channel Lineup | Xfinity Customer
          Service | Xfinity Availability Map | Xfinity Free Installation
        </p>
      </div>
      <div className="endnote is-xfinity-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Endnote:</h4>
          <p>
            1. Variety,{" "}
            <span className="link">
              <Link href={"#"}>
                “Most-Watched Television Networks: Ranking 2019’s Winners and
                Losers,”{" "}
              </Link>
            </span>{" "}
            December 2019. Accessed December 4, 2020.
          </p>
        </div>
      </div>
      {/* <Newsletter /> */}
    </div>
  );
};

export default XfinityChannelLinup;
