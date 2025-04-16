// import React, { useState } from "react";
import "./fubo-soccer-on.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { fuboNavLinks } from "../../assets/data/navLinks/fuboNavLinks";
import fuboimage from "../../assets/images/socer-on-girl.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import fubo from "../../assets/images/fubo.png";
import fuboicon from "../../assets/images/fubo-icon.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import soccerone from "../../assets/images/soccerone.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import PackageTable from "../../components/package-table/PackageTable";
import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa6";

export const metadata = {
  title: "How To Watch Soccer On Fubo"
};

const FuboSoccerOn = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: fubo,
      rating: "(4.5/5)",
      starImg: star,
      desc: " 200+ channels, foreign sports leagues",
      buttonText: "read full fubo review",
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
        subtitle: "Channels:",
        title: "150–220+",
        icon: fuboicon,
      },
      {
        subtitle: "Price:",
        title: "$74.99–$94.99/mo.",
        icon: fuboicon,
      },
      {
        subtitle: "Soccer leagues:",
        title: "Premier League, UEFA Champions League, MLS, and more",
        icon: fuboicon,
      },
    ],

    tableData: [
      {
        head: [
          "Plan",
          "price",
          "Soccer channels",
          "Live channels",
          "Cloud DVR storage",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Pro",
              "$74.99/mo.",
              "ESPNU, Zona Fútbol, and mbeIN SPORTS, TUDN, and more",
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
              "ESPNU, Zona Fútbol, and more",
              "210+",
              "1,000 hrs.",
            ],
            linkPath: "#",
          },
          {
            content: [
              "3.",
              "Premier",
              "$94.00/season",
              "Pac-12 Networks, Stadium, and more",
              "220+",
              "1,000 hrs.",
            ],
            linkPath: "#",
          },
          {
            content: [
              "4.",
              "Latino",
              "$32.99/mo.",
              "GolTV Spanish, TUDN, and more",
              "45+",
              "250 hrs.",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      " Data effective as of post date. Compatible device and internet connection required. Offers and availability may vary by location and are subject to change..",
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
        "Price",
        "Soccer Channels",
        "Live Channels",
        "Cloud DVR Storage",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Pro",
            "$74.99/mo.",
            "beIN SPORTS, TUDN, and more",
            "150+",
            "1,000 hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Elite",
            "$84.99/mo.",
            "ESPNU, Zona Fútbol, and more",
            "210+",
            "1,000 hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Premier",
            "$94.99/mo.",
            "Pac-12 Networks, Stadium, and more",
            "220+",
            "1,000 hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Latino",
            "$32.99/mo.",
            "GoITV Spanish, TUDN, and more",
            "45+",
            "250 hrs.",
          ],
          linkPath: "#",
        },
      ],
    },
  ];

  return (
    <div className="fubo-soccer-on">
      {/* <SubNav links={fuboNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">How To Watch Soccer On Fubo</h2>
          <p className="sect-desc">
            Fubo is a streaming goal fest for soccer fans. Our sports experts
            spent over 20 hours of hands-on testing and research to outline what
            kind of league coverage it provides.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is Fubo worth it for soccer fans?</h4>
          <p>
            Fubo is worth it for soccer fans—especially those who’ve cut the
            cord but still want a diverse lineup of live TV channels. The
            streaming service carries the crucial ESPN, FOX Sports, and NBC
            Sports networks, plus more niche sports channels like beIN SPORTS
            and TUDN. <br />
            What makes Fubo a prime destination for soccer is that it features
            beIN SPORTS CONNECT and TUDNxtra in app. These critical overflow
            channels show matches when many games are happening simultaneously.{" "}
            <br />
            The biggest limitations with Fubo are its expensive pricing and lack
            of Warner Bros. Discovery networks. That last one is crucial because
            some USMNT and USWNT matches air on TBS, TNT, and truTV—as do many
            basketball and hockey games. <br />
            Also, it’s worth noting that some league coverage on Fubo is
            available only with Spanish-language commentary, which could be a
            plus or a minus, depending on your language preference.
          </p>
          <br />

          <p>
            Fubo (formerly fuboTV) is a service that’s synonymous with watching
            live soccer. But that’s what you should expect from a name like
            Fubo. While the live TV streaming service now offers a broader range
            of entertainment, its commitment to soccer hasn’t faltered. <br />
            Fútbol fans get access to over 30 soccer leagues and competitions
            through Fubo. And sure, its pricing might be steep—especially
            compared to other soccer streamers like ESPN+, Paramount+, and
            Peacock. But you’ll also score 150+ live channels with plenty of
            add-on options.
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
                  <td> Extensive soccer coverage</td>
                  <td>Expensive plans </td>
                </tr>
                <tr>
                  <td>Large channel lineups </td>
                  <td> No TBS, TNT, and truTV</td>
                </tr>
                <tr>
                  <td>Many add-on options </td>
                  <td> </td>
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
          <Link href={"#"}>Fubo soccer content </Link>
          <Link href={"#"}>Fubo plans and pricing </Link>
          <Link href={"#"}>Other ways to watch soccer </Link>
        </div>
      </div>

      <div className="section sports">
        <div className="head">
          <h2 className="sect-heading">
            Soccer content <span> on Fubo</span>
          </h2>
          <p className="sect-desc">
            Fubo comes packed with soccer content, but that doesn’t necessarily
            mean it has the games you want to watch. Many soccer leagues have
            exclusive deals with specific streaming services like ESPN+,
            Paramount+, and Peacock. It’s the ultimate red card for live TV
            providers like Fubo. For example, Paramount Global has the
            English-language rights to all UEFA competitions through 2030 in the
            U.S. That means you’ll only find select Champions League and Europa
            League games with English-language commentary on Fubo through
            channels like CBS and CBS Sports Network. Everything else streams
            exclusively on Paramount+. <br />
            Now, that might seem confusing because Fubo frequently advertises
            how it has the Champions League. And it does, but most of it airs on
            Spanish-language networks like Galavisión, TUDN, UniMás, and
            Univision. These channels don’t feature alternate English-language
            closed captions, and Fubo doesn’t offer secondary audio programming
            (SAP). <br />
            Still, as you’ll see in the next section, several popular leagues
            stream on Fubo. Because Fubo carries so many sports channels, you’ll
            get a wide variety of live soccer—including Premier League, MLS, and
            Liga MX matches. You just won’t get every game from those specific
            leagues.
          </p>
        </div>
        <Image src={soccerone} alt="" />
        <p className="below-table">
          The Fubo Sports menu makes it easy to search for the sports and
          leagues you want to watch, as seen on a Google Chrome web browser.
        </p>
        <br />
        <p>
          The big leagues you will get every game from are the French Ligue 1
          and Turkish Süper Lig. That’s thanks to beIN SPORTS CONNECT on Fubo,
          where you’ll receive eight beIN SPORTS channels for full coverage on
          busy match days. These channels also have a lot of soccer-adjacent
          sports like beach soccer, footvolley, and futsal. Depending on your
          location, you’ll also get local channels like ABC, CBS, FOX, and NBC.
          Each channel shows critical soccer matchups from various leagues, plus
          FOX airs the FIFA World Cup and FIFA Women’s World Cup. <br />
          There’s also a lot of college sports coverage on Fubo with popular
          collegiate channels like Big Ten Network (BTN), Pac-12 Network, and
          SEC Network. You’ll even get ESPNU in the Elite plan, so you can watch
          the NCAA Soccer Tournament (a.k.a. the College Cup).
        </p>
      </div>

      <div className="section soccer-leagues">
        <div className="head">
          <h2 className="sect-heading">
            Fubo <span>soccer leagues</span>
          </h2>
          <p className="sect-desc">
            Fubo maintains an expanded list of soccer leagues that are available
            to watch across its various plans. We’ve outlined some of the more
            important ones in the table below—highlighting which plans and
            add-ons you’ll need for each league.
            <br />
            With so many leagues featured on Fubo, it’s easy to feel overwhelmed
            when games kick off at similar times. But you can keep tabs on
            multiple games simultaneously with Fubo’s Multiview and FanView
            features.
            <br />
            Multiview allows you to watch up to four live channels at once, but
            it’s accessible only on Apple TV devices. The FanView feature is
            available on more devices and provides in-game stats and scorelines
            across every major sports league. Plus, with FanView, you can easily
            toggle between different games if you notice another game’s
            scoreline is popping off.
          </p>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th> </th>
                <th> League</th>
                <th>Channels</th>
                <th>Pro</th>
                <th>Elite</th>
                <th>Premier</th>
                <th>Add-ons</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1. </td>
                <td>Brasileirão Série A </td>
                <td>GolTV English, GolTV Spanish </td>
                <td>
                  {" "}
                  <ImCross className="cross-icon" />{" "}
                </td>
                <td>
                  {" "}
                  <ImCross className="cross-icon" />{" "}
                </td>
                <td>
                  {" "}
                  <ImCross className="cross-icon" />{" "}
                </td>
                <td>
                  <ul>
                    <li>Fubo Latino</li>
                    <li>International Sports Plus</li>
                    <li>Latino Plus</li>
                    <li>Portuguese Plus</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>2. </td>
                <td>Colombia Categoría Primera A </td>
                <td>RCN Nuestra Tele</td>
                <td>
                  {" "}
                  <ImCross className="cross-icon" />{" "}
                </td>
                <td>
                  {" "}
                  <ImCross className="cross-icon" />{" "}
                </td>
                <td>
                  {" "}
                  <ImCross className="cross-icon" />{" "}
                </td>
                <td>
                  <ul>
                    <li>Latino Plus</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="below-table">
          The Fubo Sports menu makes it easy to search for the sports and
          leagues you want to watch, as seen on a Google Chrome web browser.
        </p>
        <br />
      </div>

      <div className="section plans">
        <div className="head">
          <h2 className="sect-heading">
            Fubo <span> plans and pricing </span>
          </h2>
          <p className="sect-desc">
            If Fubo’s pricing intimidates you, its cheaper Pro plan offers a
            bulk of the service’s soccer coverage. You’ll get sports essentials
            like ESPN, ESPN2, FOX Sports 1 (FS1), and FOX Sports 2 (FS2), plus
            major soccer channels like beIN SPORTS and TUDN. Fubo’s Elite plan
            includes over 50 additional channels with an emphasis on college
            sports networks like ACC Network, ESPNU, Pac-12 Network, and SEC
            Network. There are also league-specific channels for other popular
            sports like MLB Network, NBA TV, and NHL Network. (NFL Network is
            there, too, but Pro subscribers also get that.)
            <br />
            The Elite option is our favorite Fubo plan because of its
            comprehensive channel lineup. However, we recommend browsing the
            service’s many add-on options to ensure you get the channels that
            meet your needs.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data effective as of post date. Compatible device and internet
          connection required. Offers and availability may vary by location and
          are subject to change.
        </p>

        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>Pro tip:</h4>
          <br />
          <p>
            Fubo Extra ($7.99 a month) is a solid add-on that already comes with
            the Elite plan and up. But Sports Plus with NFL RedZone ($10.99 a
            month) takes things a step further with regional Pac-12 Networks,
            Stadium, and MLB Network Strike Zone.
          </p>
          <br />
          <h4>Other ways to watch soccer</h4>
          <br />
          <p>
            As mentioned earlier, live soccer games are available across most TV
            providers. But sometimes, the best services are simply the ones that
            carry the teams you want to watch. <br />
            For instance, if you’re a Real Madrid fan, you can catch some of Los
            Blancos’s games through various Fubo channels. But only ESPN+
            provides complete access to La Liga and Copa del Rey matchups, while
            Paramount+ or ViX Premium (depending on your language preference)
            have every UEFA Champions League fixture. <br />
            Peacock is another essential streaming service for soccer fans
            because of its Premier League coverage. You’ll still need a TV
            service like Fubo to watch Premier League games that air on CNBC,
            Universo, or USA Network. But Peacock features many matches that
            don’t air on traditional channels. <br />
            Check out our How To Watch Soccer guide for an expanded look at how
            to watch soccer’s most popular leagues.
          </p>
        </div>
      </div>

      <CTA
        heading={"Find the best TV plan for watching soccer"}
        desc={
          " Looking for more TV provider options for watching soccer? Enter your zip code below to view the top providers in your area."
        }
      />

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            <span> Fubo is the best </span> for watching international soccer
          </h2>
          <p className="sect-desc">
            As live TV streaming services go, Fubo offers more channels in its
            base plans than Hulu + Live TV, Sling TV, and YouTube TV. But soccer
            fans will be more interested to know that Fubo provides coverage of
            over 30 soccer leagues and competitions from around the world. Fubo
            boasts this kind of coverage because it’s the only streaming service
            that carries the beIN SPORTS and TUDN overflow channels in app. That
            means you won’t miss out when certain leagues have multiple matches
            happening all at once.
            <br />
            We say certain leagues because Fubo doesn’t have every major soccer
            league. So before committing to any of the service’s pricey plans,
            we recommend checking out our league table above to verify the
            coverage you’ll get.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> get fubo</Link>
        </div>
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
                <span>{faq === 1 ? "-" : "+"}</span> Does Fubo have all Premier
                League games?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  No, Fubo doesn’t have every Premier League game. You’ll get
                  many Premier League matchups with Fubo’s Pro, Elite, and
                  Premier plans, but you’ll also need a Peacock subscription for
                  complete Premier League coverage.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Does Fubo have all Premier League games?"}
            cssClass={"faq-content"}
          >
            <p>
              No, Fubo doesn’t have every Premier League game. You’ll get many
              Premier League matchups with Fubo’s Pro, Elite, and Premier plans,
              but you’ll also need a Peacock subscription for complete Premier
              League coverage.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is FOX Soccer Plus on Fubo?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Yes, FOX Soccer Plus is available through Fubo’s International
                  Sports Plus add-on for $6.99 a month. The add-on contains nine
                  other channels, including ESPN Deportes, Fox Deportes, and TyC
                  Sports.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Is FOX Soccer Plus on Fubo?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, FOX Soccer Plus is available through Fubo’s International
              Sports Plus add-on for $6.99 a month. The add-on contains nine
              other channels, including ESPN Deportes, Fox Deportes, and TyC
              Sports.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Which streaming service has
                the most soccer?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Fubo’s plans include many channels that show soccer. But ESPN+
                  has the most soccer coverage because of its exclusive deals
                  with leagues like the German Bundesliga, EFL Championship, and
                  La Liga.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Which streaming service has the most soccer?"}
            cssClass={"faq-content"}
          >
            <p>
              Fubo’s plans include many channels that show soccer. But ESPN+ has
              the most soccer coverage because of its exclusive deals with
              leagues like the German Bundesliga, EFL Championship, and La Liga.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What is Fubo Sportsbook?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Fubo Sportsbook was an online tool that allowed you to wager
                  on major sports in real time by linking the platform to your
                  Fubo TV subscription. However, Fubo Sportsbook and Fubo Gaming
                  ceased operations in 2022.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" What is Fubo Sportsbook?"}
            cssClass={"faq-content"}
          >
            <p>
              Fubo Sportsbook was an online tool that allowed you to wager on
              major sports in real time by linking the platform to your Fubo TV
              subscription. However, Fubo Sportsbook and Fubo Gaming ceased
              operations in 2022.
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
            Our sports experts spent over 20 hours researching and hands-on
            testing Fubo to determine its worth for soccer fans. After compiling
            a list of top-flight soccer leagues, we compared league broadcasters
            to Fubo’s channel lineups. We then examined Fubo’s pricing and
            features to see how it stacks up to similar services.
            <br />
            check out our
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
                <Link href={"#"}>Fubo Sports Packages</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>How To Watch Soccer</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Streaming Services for Sports </Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>How To Watch Live Sports</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default FuboSoccerOn;
