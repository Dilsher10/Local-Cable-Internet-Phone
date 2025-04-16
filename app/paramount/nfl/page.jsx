// import React, { useState } from "react";
import "./paramount-nfl.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import SubNav from "../../components/sub-nav/SubNav";
// import { paramountNavLinks } from "../../assets/data/navLinks/paramountNavLinks";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import paramountgirl from "../../assets/images/paramount-nfl-girl.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import paramount from "../../assets/images/paramount.png";
import paramounticon from "../../assets/images/paramount-icon.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import paramountnflscreen from "../../assets/images/paramount-nfl-screen.png";
import network from "../../assets/images/network.png";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "How To Watch NFL Games On Paramount+",
};

const ParamountNfl = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: paramount,
      rating: "(3.5/5)",
      starImg: star,
      desc: "38 live NFL games per season",
      buttonText: "Read paramount+ review",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: paramountgirl,

    cardsStrip: [
      {
        subtitle: "Free trial:",
        title: "7 day",
        icon: paramounticon,
      },
      {
        subtitle: "Price:",
        title: "$5.99–$11.99/mo. or $59.99–$119.99/yr.",
        icon: paramounticon,
      },
      {
        subtitle: "NFL content:",
        title:
          "Every in-market NFL on CBS game, Super Bowl LVIII, Fantasy Football Today, and more",
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
  return (
    <div className="paramount-nfl">
      {/* <SubNav links={paramountNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            How To Watch NFL Games On Paramount Plus
          </h2>
          <p className="sect-desc">
            Paramount+ is the streaming home of NFL on CBS games, and our
            experts spent the last season determining if the service is worth it
            for gridiron fans.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            Paramount+ is a great all-around streaming service. But its NFL
            content is less a main attraction and more a complimentary benefit.
            Still, you’ll get live access to around 38 NFL on CBS matchups
            during the 2023 NFL season, no matter which Paramount+ plan you
            choose. <br />
            The biggest upside is what else comes with the streaming service.
            Unlike ESPN+, which specializes in only sports, Paramount+ has a
            library featuring thousands of episodes and movies on top of live
            sporting events. Some of this content comes from popular brands like
            Comedy Central, MTV, and Nickelodeon—illustrating how there’s
            something for everyone on Paramount+.
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
                  <td> Inexpensive pricing</td> <td>Regional blackouts </td>
                </tr>
                <tr>
                  <td> Live in-market NFL on CBS games</td>{" "}
                  <td>Small library of extra NFL content </td>
                </tr>
                <tr>
                  <td> Large library of on-demand movies and shows</td>
                  <td>No CBS Sports Network access </td>
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
          <Link href={"#"}> Paramount+ NFL content </Link>
          <Link href={"#"}> NFL on CBS schedule </Link>
          <Link href={"#"}> Paramount+ plans and pricing </Link>
          <Link href={"#"}> Other ways to watch NFL games </Link>
        </div>
      </div>

      <CTA
        heading={"Find the best TV plan for watching football"}
        desc={
          "TV providers and their channel lineups can vary based on your location. Enter your zip code to view the best provider options in your area."
        }
      />

      <div className="endnote blank">
        <div className="head">
          <h2 className="sect-heading">
            Is Paramount Plus <span> worth it for NFL fans? </span>
          </h2>
          <p className="sect-desc">
            Paramount+ is worth it only for NFL fans who can’t access CBS with
            an over-the-air antenna and don’t want to pay for an expensive TV
            service. If you’re shopping specifically for live NFL games,
            Paramount+ will have only what your local CBS station airs. These
            NFL on CBS broadcasts account for half of the NFL’s Sunday afternoon
            games, emphasizing AFC matchups and NFC crossovers. The other half
            of those Sunday afternoon games air on FOX.
            <br />
            During the 2023 NFL regular season, around 38 NFL on CBS games will
            air in each market—including national games on Thanksgiving Day and
            Christmas Day. Of course, your local team will not play all their
            matches within the scope of those 38 games. Some weeks, they might
            play on FOX. While other weeks, they could be on Amazon Prime Video
            for Thursday Night Football, NBC for Sunday Night Football, or ESPN
            for Monday Night Football.
            <br />
            If you don’t mind watching on a phone or tablet, NFL+ offers more
            bang for your buck. The service streams every live local and
            national game for $6.99 a month.
          </p>
        </div>
        <Image src={paramountnflscreen} className="screen" alt="" />
        <div className="endnote-container">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>NFL+ offers live local and national NFL games </h4>
          <p>
            Want more local and primetime NFL games for the same price as
            Paramount+? The new streaming service NFL+ provides live access to
            every local and primetime NFL game. But unlike Paramount+, you can
            only watch those games on mobile devices, not TVs or desktop
            computers.
          </p>
        </div>
      </div>

      <div className="section cost">
        <div className="head">
          <h2 className="sect-heading">
            NFL content on <span> Paramount Plus </span>
          </h2>
          <p className="sect-desc">
            The NFL content you get with Paramount+ is pretty basic. Primarily,
            you’ll be able to watch every live NFL on CBS broadcast shown in
            your local market. During the 2023 season, NFL on CBS will feature
            one national preseason match, 38 regular-season games, three playoff
            games, and Super Bowl LVIII. But game counts can vary between CBS
            affiliates depending on league and network rules.
            <br />
            Fantasy football fans will find a lot to enjoy from Fantasy Football
            Today. The CBS Sports HQ analysis program offers NFL Fantasy
            Football advice through multiple weekly episodes throughout the
            season—allowing you to stay up on any NFL news that might impact
            your fantasy team.
          </p>
        </div>

        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4> Paramount Plus/SHOWTIME bundle deals</h4>
          <p className="after-heading">
            You can try Paramount+/SHOWTIME free for 30 days, which is great
            since Paramount+ typically has only a seven-day trial.
          </p>
          <br />
          <h4> Update:</h4>
          <p className="after-heading">
            Unfortunately, Inside the NFL has left Paramount+. The long-running
            studio show now airs Tuesdays on The CW. <br />
            While Paramount+ might have a small amount of NFL coverage, its TV
            shows and movies are where it really shines. And sometimes those
            cross into the world of football. For instance, you can watch
            football movies like The Longest Yard and Varsity Blues on
            Paramount+.
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

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={network} className="mark" alt="" />
          <h4>Other ways to watch NFL games </h4>
          <p>
            There are many ways to watch NFL games this season. And when it
            comes to watching NFL on CBS broadcasts, Paramount+ is not the only
            way to tune in.
            <br /> We outline the best ways to catch your favorite teams in
            action on our How To Watch NFL Games page. Spoiler alert: YouTube TV
            receives our highest recommendation because it’s the only live TV
            service that offers NFL Sunday Ticket—giving you live out-of-market
            coverage alongside local and national channels.
            <br /> YouTube TV with NFL Sunday Ticket is not the way to go if
            you’re looking for inexpensive ways to follow football. Fortunately,
            you can still watch many live NFL games the traditional way by
            connecting an over-the-air (OTA) antenna to your TV.
            <br /> Depending on your antenna’s range and location, you’ll get
            access to local and national NFL games that air on ABC, CBS, FOX,
            and NBC. That includes some Sunday Night Football games and every
            Monday Night Football matchup, plus most NFL playoff games and the
            Super Bowl.
            <br /> Our Best OTA Antennas page highlights many great antenna
            options. But if your pigskin heart is set on a subscription TV
            service, you can use your zip code below to look up the best TV
            plans available for your home turf.
          </p>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> NFL on Paramount Plus </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Can you watch any NFL game
                on Paramount Plus?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  No, Paramount+ subscribers can only stream in-market and
                  nationally televised NFL games that air on CBS. But you can
                  learn more about other NFL viewing options by visiting our How
                  To Watch NFL Games page.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Can you watch any NFL game on Paramount Plus?"}
            cssClass={"faq-content"}
          >
            <p>
              No, Paramount+ subscribers can only stream in-market and
              nationally televised NFL games that air on CBS. But you can learn
              more about other NFL viewing options by visiting our How To Watch
              NFL Games page.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does Paramount Plus carry
                NFL Network?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  No, Paramount+ doesn’t carry NFL Network. The cheapest way to
                  get NFL Network through a TV provider is by subscribing to
                  Sling TV’s Sling Blue plan. Otherwise, you can get live access
                  to NFL Network through NFL+.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does Paramount Plus carry NFL Network?"}
            cssClass={"faq-content"}
          >
            <p>
              No, Paramount+ doesn’t carry NFL Network. The cheapest way to get
              NFL Network through a TV provider is by subscribing to Sling TV’s
              Sling Blue plan. Otherwise, you can get live access to NFL Network
              through NFL+.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span>How much is Paramount Plus
                with NFL?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Both Paramount+ plans—Essential ($5.99 a month) and With
                  SHOWTIME ($11.99 a month)—come with the same number of live
                  NFL games.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"How much is Paramount Plus with NFL?"}
            cssClass={"faq-content"}
          >
            <p>
              Both Paramount+ plans—Essential ($5.99 a month) and With SHOWTIME
              ($11.99 a month)—come with the same number of live NFL games.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span>Can you rewatch NFL games on
                Paramount Plus?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  No, you can stream live NFL games only on Paramount+. While
                  the streaming service has no on-demand NFL game access, you
                  can rewatch every NFL matchup this season on NFL+ Premium
                  (formerly NFL Game Pass) for $14.99 a month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={"Can you rewatch NFL games on Paramount Plus?"}
            cssClass={"faq-content"}
          >
            <p>
              No, you can stream live NFL games only on Paramount+. While the
              streaming service has no on-demand NFL game access, you can
              rewatch every NFL matchup this season on NFL+ Premium (formerly
              NFL Game Pass) for $14.99 a month.
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
            During the last NFL season, our experts researched and hands-on
            tested Paramount+ to determine its overall value for NFL fans. We
            compared the streaming service’s cost and game count to other NFL
            viewing options while also examining its non-NFL content and
            features.
            <br />
            Check out our
            <span className="link">
              <Link href={"#"}> How We Rank page to </Link> learn more about our
              methods.
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

export default ParamountNfl;
