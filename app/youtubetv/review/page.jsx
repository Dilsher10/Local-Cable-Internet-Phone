// import React, { useState } from "react";
import "./youtubetv-review.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { youtubetvNavLinks } from "../../assets/data/navLinks/youtubetvNavLinks";
import youtubetvchannelreviewboy from "../../assets/images/youtubetv-old-man-nfl.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import youtubetv from "../../assets/images/youtubetv.png";
import youtubetvicon from "../../assets/images/youtubetv-icon.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import youtubetvscreen from "../../assets/images/youtubetvscreen.png";
import dotted from "../../assets/images/dotted.png";
import youtubetvvideoquality from "../../assets/images/youtubetvvideoquality.png";
import youtubetvvideoqualityhome from "../../assets/images/youtubetvvideoqualityhome.png";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import PackageTable from "../../components/package-table/PackageTable";
import { FaCheck } from "react-icons/fa6";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "YouTube TV Review: Plans, Cost, And More"
};

const YoutubeTvReveiw = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: youtubetv,
      rating: "(3.5/5)",
      starImg: star,
      desc: "Editor's choice for live TV streaming",
      buttonText: "compare to other services",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: youtubetvchannelreviewboy,

    cardsStrip: [
      {
        subtitle: "Channels:",
        title: "100+",
        icon: youtubetvicon,
      },
      {
        subtitle: "Price:",
        title: "$72.99/mo.",
        icon: youtubetvicon,
      },
      {
        subtitle: " Cloud DVR storage:",
        title: "Unlimited ",
        icon: youtubetvicon,
      },
      {
        subtitle: "Free trial::",
        title: "Varies",
        icon: youtubetvicon,
      },
    ],

    tableData: [
      {
        head: ["Plan", "price", "Channels", "Download Speed", "Details"],

        body: [
          {
            content: [
              "1.",
              "YouTube TV",
              "$72.99/mo.",
              "100+",
              <ImCross key="Im1" className="cross-icon" />,
            ],
            linkPath: "#",
          },
          {
            content: [
              "2.",
              "YouTube TV Spanish plan ",
              "$34.99/mo. ",
              "100+ ",
              <ImCross key="Im2" className="cross-icon" />,
            ],
            linkPath: "#",
          },
          {
            content: [
              "3.",
              "YouTube TV + NFL Sunday Ticket ",
              "$72.99/mo. + $349.00/yr.† ",
              "100+ ",
              <ImCross key="Im3" className="cross-icon" />,
            ],
            linkPath: "#",
          },
          {
            content: [
              "4.",
              "YouTube TV + NFL Sunday Ticket ",
              "$72.99/mo. + $349.00/yr.† ",
              "100+ ",
              "500–5,000 Mbps",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "Plus $72.99/mo recurring for YouTube TV. Compatible device and internet connection required. Offers and availability may vary by location and are subject to change.",
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
        "Live Channels",
        "Streams",
        "Cloud DVR",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "YouTube TV",
            "$72.99/mo.",
            "100+",
            "3",
            "Unlimited (for 9 mos.)",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Spanish Plan",
            "$34.99/mo.",
            "28+",
            "3",
            "Unlimited (for 9 mos.)",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "YouTube TV + Frontier Internet $10.00/mo. bundle discount",
            "$112.98-$217.98/mo.",
            "100+",
            "3",
            "Unlimited (for 9 mos.)",
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
        "Live Channels",
        "Streams",
        "Cloud DVR",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "YouTube TV",
            "$72.99/mo.",
            "100+",
            "3",
            "Unlimited (for 9 mos.)",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "DIRECTV STREAM",
            "$69.99-$159.99/mo.",
            "75-150+",
            "3-unlimited",
            "20 hrs.",
          ],
          linkPath: "#",
          subLinkText: "Read DIRECTV STREAM Review",
          subLinkPath: "#",
        },
        {
          content: [
            "3.",
            "fuboTV",
            "$74.99-$94.99/mo.",
            "150-220+",
            "10",
            "1,000 hrs.",
          ],
          linkPath: "#",
          subLinkText: "Read FuboTV Review",
          subLinkPath: "#",
        },
        {
          content: [
            "4.",
            "Philo",
            "$25.00/mo.",
            "70+",
            "3",
            "Unlimited (for 1 yr.)",
          ],
          linkPath: "#",
          subLinkText: "Read Philo Review",
          subLinkPath: "#",
        },
        {
          content: [
            "5.",
            "Sling TV",
            "$40.00-$55.00/mo.",
            "30-45+",
            "1-4",
            "50 hrs.",
          ],
          linkPath: "#",
          subLinkText: "Read Sling TV Review",
          subLinkPath: "#",
        },
        {
          content: ["6.", "Vidgo", "$69.99-$99.99/mo.", "110-150+", "3", "N/A"],
          linkPath: "#",
          subLinkText: "Read Vidgo Review",
          subLinkPath: "#",
        },
      ],
    },
  ];

  return (
    <div className="youtubetv-review">
      {/* <SubNav links={youtubetvNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            YouTube TV Review 2024: Plans, Cost, And More
          </h2>
          <p className="sect-desc">
            According to CableTV.com's experts, YouTube TV is the best overall
            live TV streaming service out there. Read our review for all the
            reasons why.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />

          <h4>Is YouTube TV good?</h4>
          <p>
            We think YouTube TV is an excellent live TV streaming service—in
            fact, we’ve named it CableTV.com’s Best Overall service for 2023.
            For $72.99/mo., you get 100+ cable and local channels plus an
            unlimited cloud DVR.
            <br />
            YouTube TV’s biggest advantage over other streaming TV services is
            familiarity. It’s close to the same YouTube interface you’ve been
            using for years but with a few new twists and more popular channels
            than other live TV streaming services. (It’s still the undisputed
            leader in cat videos, of course.)
            <br />
            YouTube TV has one of the fattest channel lineups in live TV
            streaming, as well as the easiest user interface. It’s not the
            cheapest live TV streaming service, but we think YouTube TV is worth
            it for its features and performance.
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
                  <td>100+ channels </td>
                  <td> Missing some regional sports networks </td>
                </tr>
                <tr>
                  <td>Unlimited cloud DVR storage </td>
                  <td>No A&E, Lifetime, or VICE </td>
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
          <Link href={"#"}>Current deals </Link>
          <Link href={"#"}> Plans and pricing</Link>
          <Link href={"#"}> YouTube TV vs. the competition</Link>
          <Link href={"#"}>Channels </Link>
          <Link href={"#"}> Specs and features</Link>
        </div>

        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="quotations" />
          <h4>Need better internet speeds for streaming?</h4>
          <p className="after-heading">
            If you have multiple devices in your home using the internet
            simultaneously, or your internet speeds just aren’t up to snuff, you
            may not be getting the best streaming TV experience.
            <br />
            Enter your zip code to check out better speeds or prices available
            from internet providers in your area.
          </p>
          <br />
          <hr />
          <div className="btn">
            <Link href="/">Enter your ZIP code</Link>
          </div>
        </div>
      </div>

      <div className="section cost">
        <div className="head">
          <h2 className="sect-heading">
            YouTube TV <span> plans and pricing </span>
          </h2>
          <p className="sect-desc">
            YouTube TV, depending on your area, offers 85 to over 100 live TV
            streaming channels, including cable favorites, local channels, and
            sports networks. It’s a streamlined plan that doesn’t feature filler
            channels (music channels suck TBH) like cable and satellite TV
            providers.
            <br />
            YouTube TV also offers a Spanish-language plan that costs $24.99 a
            month for the first six months, after which the monthly price goes
            up to $34.99.
            <br />
            This standalone plan doesn’t require a subscription to regular
            YouTube TV and features over 28 Spanish-language channels, including
            ESPN Deportes, Discovery en Español, and Fox Deportes.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
        <br />
        <Image src={youtubetvscreen} alt="" />
        <p className="below-table">
          YouTube TV home page on a smart TV. Image credit: CableTV.com
        </p>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={dotted} className="mark" alt="" />
          <h4>YouTube TV deals and promotions </h4>
          <p>
            You can get YouTube TV free for a month when you sign up for a
            Verizon Mobile or 5G Home Internet plan. <br />
            Frontier customers can save $10 a month for the first 12 months of
            their subscription when they bundle Frontier internet with YouTube
            TV. That’s a $120 savings over the course of the first year. Find
            out more about Frontier internet.
            <br />
            YouTube TV subscribers can get $50 off NFL Sunday Ticket when
            signing up through September 19, 2023.*
          </p>
        </div>
      </div>

      <div className="section cost">
        <div className="head">
          <h2 className="sect-heading">
            YouTube TV <span> vs. the competition </span>
          </h2>
          <p className="sect-desc">
            We gave YouTube TV our Editor’s Choice award the past two years
            because of its competitive channel count, reasonable price, and
            killer cloud DVR (no other streaming service compares in terms of
            DVR storage except for Philo, which offers a niche channel lineup).
            <br />
            Like we said, we still really like Hulu + Live TV for its on-demand
            content, decent channel count, and reasonable price. Check out our
            Best Live TV Streaming Services page to read up more on the pros and
            cons of each service.
          </p>
        </div>
        <PackageTable item={packageTableDataCompetition} />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section all-channels-lineup">
        <div className="head">
          <h2 className="sect-heading">
            YouTube TV channels; <span> YouTube TV channel lineup </span>
          </h2>
          <p className="sect-desc">
            YouTube TV’s mix of live TV streaming entertainment, sports, and
            news channels doesn’t look much different than a basic cable
            package—until you notice the lack of filler. There’s no
            cable-package bloat like audio-only music or shopping networks
            (except for QVC), just a tight lineup of popular channels like
            Comedy Central, Paramount Network, MTV, AMC, Cartoon Network, ESPN,
            Disney Channel, FS1, FX, Syfy, TNT, USA Network, etc. YouTube TV
            trims the cable fat nicely.
            <br />
            YouTube TV also features local channels carrying ABC, CBS, FOX, and
            NBC. Along with DIRECTV STREAM, it’s the only live TV streaming
            service that carries PBS and PBS Kids. But watch out, cord-cutters:
            YouTube TV’s channel lineup is impressive, but it’s missing a few
            favorites. Networks like Lifetime, A&E, HISTORY, and VICE aren’t on
            YouTube TV (but you can get them on Philo, another service we like
            here at CableTV.com).
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
                <th>YouTube TV</th>
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

      <div className="section local-channels-lineup">
        <div className="head">
          <h2 className="sect-heading">
            Local channels on YouTube TV;{" "}
            <span> YouTube TV local channel lineup </span>
          </h2>
          <p className="sect-desc">
            YouTube TV features as many local channels per region as Hulu + Live
            TV and far more than other services like Sling TV or fuboTV.
            Depending on where you are, you either receive local stations
            carrying ABC, CBS, FOX, NBC, PBS, The CW, and Telemundo, or a
            combination of at least four of them.
            <br />
            The CW is the least available broadcast channel on YouTube TV (and
            all live TV streaming services), but all’s not lost in Riverdale.
            Any CW series can be called up on-demand in most cases, and The CW
            also offers its programming for free through its own streaming app.
            Both work similarly; it just depends on how much app-jumping you
            want to do.
          </p>
        </div>

        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th> </th>
                <th>Channels</th>
                <th>YouTube TV</th>
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
            </tbody>
          </table>
        </div>
        <br />
        <p className="below-table">
          *Availability varies by area. Data effective as of post date.
        </p>
      </div>

      <div className="section add-ons">
        <div className="head">
          <h2 className="sect-heading">
            YouTube TV <span> channel add-ons </span>
          </h2>
          <p className="sect-desc">
            YouTube TV’s $72.99/mo. plan can be fortified with over 25 add-on
            packages from premium networks, like Max, SHOWTIME, STARZ, MGM+,
            AMC+, NBA League Pass, and more. Most YouTube TV add-ons come with a
            seven-day free trial.
          </p>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Channel add-ons</th>
                <th>YouTube TV</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1. </td>
                <td> NFL Sunday Ticket </td>
                <td> $349.00–$389.00/season* </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Entertainment Plus (Max, SHOWTIME, and STARZ)</td>
                <td>$29.99/mo.</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>
                  Sports Plus (FOX Soccer Plus, beIN Sports, NFL RedZone, and
                  more)
                </td>
                <td>$10.99/mo.</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>STARZ + MGM+</td>
                <td>$11.99/mo.</td>
              </tr>
              <tr>
                <td>5.</td>
                <td>UP Faith & Family</td>
                <td>$5.99/mo.</td>
              </tr>
              <tr>
                <td>6.</td>
                <td>ViX Premium</td>
                <td>$6.99/mo.</td>
              </tr>
              <tr>
                <td>7.</td>
                <td>WNBA League Pass</td>
                <td>$7.99/mo. or $24.99/season</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="below-table">Data effective as of post date.</p>
        <div className="package-table-container channels">
          <h4>NFL Sunday Ticket on YouTube TV</h4>
          <p className="after-heading"></p>
          <Image src={youtubetvscreen} alt="quotations" />
        </div>
      </div>

      <div className="section features">
        <div className="head">
          <h2 className="sect-heading">
            YouTube TV <span> specs and features </span>
          </h2>
          <p className="sect-desc">
            For a live TV streaming service, YouTube TV really shines in terms
            of cloud DVR storage, simultaneous streams, and user interface,
            which makes it an exciting streaming option for TV fans who watch a
            lot of shows.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4> Cloud DVR</h4>
          <p className="after-heading">
            YouTube TV gives you unlimited—yes, unlimited—cloud DVR space. But
            not forever; YouTube dumps your saved recordings after nine months.
            Still, that’s a generous amount of space, and you can stream your
            recorded programming from anywhere on your mobile device. <br />
            Fast-forwarding through commercials in recorded shows is quick and
            intuitive, but there’s no skipping ads with some of YouTube TV’s
            on-demand programming. Even in the brave new world of streaming TV,
            you still can’t escape Swiffer spots. <br />
            Offline downloads are only available with YouTube TV’s 4K Plus
            add-on, which costs an extra $19.99 a month. It also gives you
            access to 4K content (if your TV device supports it) and unlimited
            in-network streams.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th> Service</th>
                  <th>Cloud DVR</th>
                  <th>Offline downloads</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1. </td>
                  <td> YouTube TV</td>
                  <td> Unlimited (for 9 mos.)</td>
                  <td> Yes (w/ 4K Plus add-on, $19.99/mo.)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Multiple streams </h4>
          <p className="after-heading">
            YouTube TV gives you three simultaneous streams across streaming TV
            devices, computers, tablets, and phones. Conveniently, this counts
            within the same home network and outside of it, even while traveling
            throughout the US. Unfortunately, YouTube TV can’t be accessed
            internationally—you’ll just have to go enjoy the beach or the
            museum, instead. Sorry.
            <br />
            A useful feature of YouTube TV is the ability to set up individual
            Family Sharing profiles. In addition to the original profile (which
            is set up through a Google account), Family Sharing lets five more
            people establish their own customizable profiles through their own
            Google accounts. Viewing preferences, DVR, and watch history are
            unique, and visible only to each account.
            <br />
            Those five accounts will still have to share just three streams,
            though. Bummer.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th> Service</th>
                  <th>Simultaneous streams</th>
                  <th>Unlimited (4K Plus, $19.99/mo.)</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1. </td>
                  <td> YouTube TV</td>
                  <td> 3</td>
                  <td> Unlimited (4K Plus, $19.99/mo.)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Compatible devices</h4>
          <p className="after-heading">
            Despite the universality of YouTube, YouTube TV isn’t available on
            some devices—namely, Nintendo. Most other streaming devices are good
            to go with YouTube TV.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th> Device</th>
                  <th>YouTube TV</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1. </td>
                  <td> Amazon Fire Cube, Stick, TV</td>
                  <td>
                    <FaCheck className="icon" />
                  </td>
                </tr>
                <tr>
                  <td>2. </td>
                  <td> Android TV</td>
                  <td>
                    <ImCross className="icon" />
                  </td>
                </tr>
                <tr>
                  <td>3. </td>
                  <td> Chromecast, Chromecast with Google TV</td>
                  <td>
                    <FaCheck className="icon" />
                  </td>
                </tr>
                <tr>
                  <td>4. </td>
                  <td> Roku Ultra, Express, Premiere, Stick, TV</td>
                  <td>
                    {/* <FaCheck className="icon" /> */}
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>5. </td>
                  <td> Xbox One</td>
                  <td>
                    <ImCross className="icon" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4> Video and audio quality</h4>
          <p className="after-heading">
            YouTube TV live streams in 720p at 60 fps (frames per second), the
            same HD quality as cable/satellite providers and most of the other
            streaming TV services you’re accustomed to. <br />
            Unlike other services, YouTube TV doesn’t currently stream any
            content in 4K HD or HDR (high dynamic range) quality (unless you buy
            the 4k Plus add-on). Don’t worry; the cat videos we talked about
            earlier still look as cute as ever. <br />
            YouTube TV’s content streams with standard 2.0 stereo audio, but
            Dolby Digital 5.1 Surround Sound (the audio quality you get with
            Blu-ray discs) isn’t yet available with the service.
          </p>
          <br />
          <Image src={youtubetvvideoquality} alt="" />
          <p className="below-table">
            YouTube TV home page on a desktop computer. Image credit:
            CableTV.com
          </p>
          <p className="after-heading">
            Here’s a cool YouTube TV customization feature: You can arrange
            channels however you like. What? Brace yourselves, television
            traditionalists: YouTube TV, like other live TV streaming services,
            doesn’t assign numbers to its channels. You can, however, bring
            order to this anarchy by stacking your preferred channels to the top
            of the grid for quick access.
            <br />
            YouTube TV also comes with killer search capabilities, thanks to its
            association with a plucky little startup called Google. You’ve
            probably heard of it.
          </p>
          <Image src={youtubetvvideoqualityhome} alt="" />
          <p className="below-table">
            YouTube TV home page on a desktop computer. Image credit:
            CableTV.com
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4> Check your Mbps:</h4>
          <p className="after-heading">
            With a solid internet connection, YouTube TV streams with little
            buffering or dropping out. We recommend DSL, cable, or fiber
            internet rated at 25 Mbps (megabytes per second) or faster.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is YouTube TV worth it?</span>
          </h2>
          <p className="sect-desc">
            With only a few shortcomings, we say YouTube TV is the service to
            beat in the live TV streaming wars. It doesn’t carry a handful of
            popular live entertainment or sports channels, but the unlimited
            DVR, customizable features, and smooth performance does right by
            first-time cord-cutters.
            <br />
            Plus, you already know how to use it—it may be live TV, but it’s
            also still YouTube.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> get youtube tV</Link>
        </div>
      </div>

      <div className="section features">
        <div className="head">
          <h2 className="sect-heading">
            CableTV.com <span> Favorites </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> YouTube TV </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What is the downside of
                YouTube TV?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  YouTube TV’s biggest downside is its lack of FOX regional
                  sports networks like YES and SNY, as well as other key
                  channels including Lifetime, HISTORY, and VICE. However, it
                  still has a pretty impressive lineup—see our full YouTube TV
                  channel list for more information.
                  <br />
                  It’s also a bummer that you can’t fast-forward through YouTube
                  TV ads like you could on a DVR. YouTube, as always, loves its
                  ads.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What is the downside of YouTube TV?"}
            cssClass={"faq-content"}
          >
            <p>
              YouTube TV’s biggest downside is its lack of FOX regional sports
              networks like YES and SNY, as well as other key channels including
              Lifetime, HISTORY, and VICE. However, it still has a pretty
              impressive lineup—see our full YouTube TV channel list for more
              information.
              <br />
              It’s also a bummer that you can’t fast-forward through YouTube TV
              ads like you could on a DVR. YouTube, as always, loves its ads.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How much does YouTube TV
                cost?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  YouTube TV costs $72.99/mo.. Considering you get 100+ cable
                  and local channels with no contract and unlimited cloud DVR
                  storage, it’s still a decent deal compared to cable or
                  satellite TV.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" How much does YouTube TV cost?"}
            cssClass={"faq-content"}
          >
            <p>
              YouTube TV costs $72.99/mo.. Considering you get 100+ cable and
              local channels with no contract and unlimited cloud DVR storage,
              it’s still a decent deal compared to cable or satellite TV.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How does YouTube TV work?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  YouTube TV works by streaming live TV through your web
                  browser, mobile device apps, or streaming devices.
                  <br />
                  Even though it has a similar interface, it’s different from
                  YouTube because it doesn’t limit your viewing to uploaded
                  videos, and it’s a paid service (100+ live channels for
                  $72.99/mo.).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How does YouTube TV work?"}
            cssClass={"faq-content"}
          >
            <p>
              YouTube TV works by streaming live TV through your web browser,
              mobile device apps, or streaming devices.
              <br />
              Even though it has a similar interface, it’s different from
              YouTube because it doesn’t limit your viewing to uploaded videos,
              and it’s a paid service (100+ live channels for $72.99/mo.).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does YouTube TV have PBS?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Yes, YouTube TV has PBS and PBS Kids. It’s a big perk since
                  PBS isn’t currently available on any other live TV streaming
                  service besides DIRECTV STREAM. Go ahead and get the Antiques
                  Roadshow on the road to Austin City Limits.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Does YouTube TV have PBS?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, YouTube TV has PBS and PBS Kids. It’s a big perk since PBS
              isn’t currently available on any other live TV streaming service
              besides DIRECTV STREAM. Go ahead and get the Antiques Roadshow on
              the road to Austin City Limits.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> What channels are included
                with YouTube TV?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  YouTube TV has 100+ channels including Comedy Central, Disney
                  Channel, SyFy, and PBS. We like that it cuts down on
                  traditional cable bloat from unnecessary music channels,
                  although we wish it did a little better in the way of regional
                  sports channels. (If you want music, you should probably just
                  get YouTube Music or YouTube Premium.) For a full list of
                  channels, head to our YouTube TV channel list.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" What channels are included with YouTube TV?"}
            cssClass={"faq-content"}
          >
            <p>
              YouTube TV has 100+ channels including Comedy Central, Disney
              Channel, SyFy, and PBS. We like that it cuts down on traditional
              cable bloat from unnecessary music channels, although we wish it
              did a little better in the way of regional sports channels. (If
              you want music, you should probably just get YouTube Music or
              YouTube Premium.) For a full list of channels, head to our YouTube
              TV channel list.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> How much does NFL Sunday
                Ticket cost on YouTube TV?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  NFL Sunday Ticket through YouTube TV costs $349.00 during the
                  2023 NFL season. For an additional $40.00, YouTube TV
                  subscribers can get NFL Sunday Ticket with NFL RedZone—giving
                  you the most Sunday afternoon NFL coverage.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" How much does NFL Sunday Ticket cost on YouTube TV?"}
            cssClass={"faq-content"}
          >
            <p>
              NFL Sunday Ticket through YouTube TV costs $349.00 during the 2023
              NFL season. For an additional $40.00, YouTube TV subscribers can
              get NFL Sunday Ticket with NFL RedZone—giving you the most Sunday
              afternoon NFL coverage.
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
            Our experts have logged thousands of hours of hands-on testing with
            YouTube TV, rating the streaming service on bang for your buck,
            reliability, features, and customer satisfaction. Then we matched up
            YouTube TV with other live TV streaming services head to head to
            give a clearer picture of its strengths and weaknesses. For more
            information on our methodology, check out our
            <span className="link">
              <Link href={"/"}>How We Rank </Link>
            </span>
            page.
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>YouTube TV Bundles</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>YouTube TV Primetime Channels</Link>
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
                <Link href={"#"}>Best Streaming Devices</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Internet for Streaming</Link>
              </span>
            </li>
          </ul>
          <h4>Disclaimer</h4>
          <p>
            Data effective as of post date. Offers and availability may vary by
            location and are subject to change.
            <br />
            *Plus $72.99/mo. recurring for YouTube TV. Compatible device and
            internet connection required. Offers and availability may vary by
            location and are subject to change.
          </p>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default YoutubeTvReveiw;
