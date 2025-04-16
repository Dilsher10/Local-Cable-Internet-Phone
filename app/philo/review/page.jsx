// import React, { useState } from "react";
import "./philo-review.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { philoNavLinks } from "../../assets/data/navLinks/philoNavLinks";
import philoreviewboy from "../../assets/images/philo-review-boy.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import philo from "../../assets/images/philo.png";
import philoicon from "../../assets/images/philo-icon.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import dotted from "../../assets/images/dotted.png";
import PackageTable from "../../components/package-table/PackageTable";
import { FaCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import videoone from "../../assets/images/video-one.png";
import videotwo from "../../assets/images/video-two.png";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Philo Review: Cost, Plans, And More"
};

const PhiloReview = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: philo,
      rating: "(3.5/5)",
      starImg: star,
      desc: "Cheapest (live TV streaming)",
      buttonText: "see philo deals",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: philoreviewboy,

    cardsStrip: [
      {
        subtitle: "Channels",
        title: "70+",
        icon: philoicon,
      },
      {
        subtitle: "Price:",
        title: "$25.00/mo.",
        icon: philoicon,
      },
      {
        subtitle: "Free trial:",
        title: "7 days",
        icon: philoicon,
      },
      {
        subtitle: "Cloud DVR:",
        title: "Unlimited",
        icon: philoicon,
      },
    ],

    tableData: [
      {
        head: ["Plan", "price", "Video", "Audio", "Streams", "Details"],

        body: [
          {
            content: [
              "1.",
              " Philo",
              " $25.00/mo.",
              " 70+",
              "Unlimited (1 yr.) ",
              " 3",
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
  let packageTableData = [
    {
      head: ["Plan", "price", "Video", "Audio", "Streams", "Details"],

      body: [
        {
          content: [
            "1.",
            " Philo",
            " $25.00/mo.",
            " 70+",
            "Unlimited (1 yr.) ",
            " 3",
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
        "Editorial Rating",
        "Channels",
        "Multiple Streams",
        "Cloud DVR",
        "Details",
      ],
      body: [
        {
          content: [
            "1.",
            "Philo",
            "$25.00/mo.",
            "3.7/5",
            "70+",
            "3",
            "Unlimited (1 yr.)",
          ],
          linkPath: "# ",
        },
        {
          content: [
            "2.",
            "YouTube TV",
            "$72.99/mo.",
            "4.5/5",
            "100+",
            "3",
            "Unlimited (9 mos.)",
          ],
          linkPath: "# ",
        },
        {
          content: [
            "3.",
            "Hulu + Live TV",
            "$76.99–$89.99/mo.",
            "4.2/5",
            "85+",
            "2",
            "50 hrs.",
          ],
          linkPath: "# ",
        },
        {
          content: [
            "4.",
            "fuboTV",
            "$74.99–$94.99/mo.",
            "4.0/5",
            "169–289+",
            "10",
            "1,000 hrs.",
          ],
          linkPath: "# ",
        },
        {
          content: [
            "5.",
            "Sling TV",
            "$40.00–$55.00/mo.",
            "3.9/5",
            "30–45+",
            "1–4",
            "50 hrs.",
          ],
          linkPath: "# ",
        },
        {
          content: [
            "6.",
            "DIRECTV STREAM",
            "$69.99–$159.99/mo.",
            "3.5/5",
            "75–150+",
            "3",
            "20 hrs.",
          ],
          linkPath: "# ",
        },
        {
          content: [
            "7.",
            "Vidgo",
            "$69.99–$99.99/mo.",
            "3.8/5",
            "110–250+",
            "3",
            "N/A",
          ],
          linkPath: "# ",
        },
      ],
    },
  ];

  return (
    <div className="philo-review">
      {/* <SubNav links={philoNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Philo Review 2024: Cost, Plans, And More
          </h2>
          <p className="sect-desc">
            Rising prices and subscription fatigue got you down? Philo's
            $25-a-month skinny streamer is here for you.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />

          <h4>Is Philo good?</h4>
          <p>
            If you’re into entertainment and reality shows, Philo is as good
            live TV streaming gets. It offers zero sports or local channels,
            focusing instead on entertainment (like Comedy Central, Paramount
            Network, and AMC) and lifestyle (such as A&E, HGTV, and Cooking
            Channel) networks. <br />
            With Philo, you get 70+ channels for just $25 a month. Throw in
            unlimited cloud DVR space (with 12 months of show storage), and
            Philo adds up to more than a “bare-bones” live TV streaming service.
            <br />
            Sports fans should probably stop reading here, though. Head over to
            our best streaming services review for the best ways to get your
            sportsball action.
          </p>
          <h4>NFL Sunday Ticket pros and cons</h4>
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
                  <td> Inexpensive pricing</td>
                  <td> No sports channels</td>
                </tr>
                <tr>
                  <td> Channels unavailable elsewhere</td>
                  <td> No local channels</td>
                </tr>
                <tr>
                  <td> Unlimited cloud DVR</td>
                  <td> Few add-ons or upgrades</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"You’ll need a fast internet plan for all that streaming"}
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
          <Link href={"#"}>Current deals </Link>
          <Link href={"#"}>Plans </Link>
          <Link href={"#"}>channel and Shows</Link>
          <Link href={"#"}>Specs and features </Link>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={dotted} className="mark" alt="" />
          <h4>Philo promotions and deals </h4>
          <p>
            Like other live and on-demand TV streaming services, Philo gives you
            a seven-day free trial to take it for a spin.
          </p>
          <ul>
            <li>
              Philo T-Mobile discount: Do you have T-Mobile or Sprint internet
              or wireless service? If so, you qualify for 40% off for 12 months,
              which drops your Philo monthly payment to $15 a month (total
              savings: $120). The offer doesn’t list an expiration date.
            </li>
            <li>
              Philo redemption codes: New Philo subscribers can save 50%
              ($12.50) on the first month of service with the Philo redemption
              codes “MAYS.” This appears to be valid at least through March 31,
              2023—possibly beyond that.
            </li>
          </ul>
          <p>
            See our Philo deals page for more ways to save money on the live TV
            streaming service.
          </p>
          <br />
          <hr />
          <div className="btn">
            <Link href={"/"}> see current deal</Link>
          </div>
        </div>
      </div>

      <div className="section cost">
        <div className="head">
          <h2 className="sect-heading">
            Philo <span> plans </span>
          </h2>
          <p className="sect-desc">
            To its advantage, Philo has snagged dozens of channels that other
            live TV streaming services don’t carry, thanks to its four-way
            ownership made up of AMC Networks, A+E Networks, Discovery Inc., and
            Viacom. <br />
            For Joe and Jane Viewer, the boring biz details mean this: some live
            TV streaming services, like YouTube TV, don’t carry A+E networks
            like Lifetime, Hallmark, HISTORY, or VICE. Also, Hulu + Live TV
            doesn’t have AMC or A&E. Philo carries them all, and on the cheap.
            <br />
            Alone, Philo is a great value—but, as a supplemental service, it
            really shines. In several of our live TV streaming reviews, you’ll
            notice Philo referenced as a low-priced service to combine with
            others for a fuller array of channels.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section competition">
        <div className="head">
          <h2 className="sect-heading">
            Philo vs. <span> the competition </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus.
          </p>
        </div>
        <PackageTable item={packageTableDataCompetition} />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section channels-and-shows">
        <div className="head">
          <h2 className="sect-heading">
            Philo <span> TV channels and shows </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Live and on-demand shows and movies </h4>
          <p className="after-heading">
            Have we mentioned Philo’s lack of sports channels? We just want you
            to know what you’re getting into—though you can find pro wrestling
            on AXS TV, as well as one of the most gripping competitions in all
            of television, Guy’s Grocery Games on Food Network. <br />
            Philo’s channels are squarely focused on entertainment, with a
            couple of news options like veteran BBC World News and upstart
            Cheddar News to keep you up on the headlines. <br />
            For well-rounded people who like to watch cooking, home improvement,
            traveling, cute puppies, and unsolved murders, Philo has Food
            Network, HGTV, Travel Channel, Animal Planet, and Investigation
            Discovery to keep you occupied. <br />
            The majority of TV shows and movies on Philo’s channels are
            available on-demand after the first live airing. If you missed an
            episode of Comedy Central’s Crank Yankers, or the even funnier
            Lifetime movie Soccer Mom Madam, the title’s menu will display
            “Playable” (on-demand) or “Upcoming” (available to record upon next
            showing) status, or both. <br />
            See all the TV you can get in our Philo Channels guide.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>Pro tip: </h4>
          <p className="after-heading">
            If you’re stoked on Philo’s reality TV content, you can add even
            more reality TV for only $4.99–$6.99 monthly with Discovery+.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Live sports </h4>
          <p className="after-heading">
            Nope, nada—no sports here. One of the reasons Philo costs so little
            per month is the absence of sports channels.
            <br />
            Try fuboTV or ESPN+ for your streaming sports fix.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4> Local channels</h4>
          <p className="after-heading">
            Securing local channels across the country is nearly as expensive
            and logistically tricky as carrying sports—so you’ll get none of
            those on Philo, either.
            <br />
            Fortunately, over-the-air antennas still work perfectly well for
            receiving local stations that broadcast ABC, CBS, FOX, NBC, The CW,
            PBS, and Telemundo (most also feature sports, BTW).
          </p>
          <br /> <br />
          <p className="after-heading">
            CableTV.com uses paid Amazon links.
            <br />
            Amazon.com Price; $47.99 (as of 3/24/2023 at 11:31 a.m. Mountain).
            Read full disclaimer.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4> Pro tip: </h4>
          <p className="after-heading">
            Need an OTA antenna recommendation? Try the Mohu Leaf Plus. It’s
            easy to install, picks up every local broadcast channel and
            subchannel within a 60-mile radius, and costs only $47.99 on Amazon.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Channel add-ons </h4>
          <p className="after-heading">
            Philo only offers two premium add-on packages, STARZ and MGM+™, but
            at least they’re inexpensive (which is totally Philo’s thing).
            There’s also the Movies & More multi-channel package, which gives
            you Sony Movies, MGM HD, HDNet Movies, REELZ, and Cinemoi.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Premium channel</th>
                  <th>Price</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1.</td>
                  <td> STARZ</td>
                  <td> No sports channels</td>
                </tr>
                <tr>
                  <td>2, </td>
                  <td>MGM+ </td>
                  <td> $6.00/mo. </td>
                </tr>
                <tr>
                  <td> 3. </td>
                  <td> Movies & More </td>
                  <td> $3.00/mo. </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="section features">
        <div className="head">
          <h2 className="sect-heading">
            Philo <span> specs and features </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Cloud DVR </h4>
          <p className="after-heading">
            Philo’s cloud DVR gives you unlimited storage space for shows and
            movies for a whole year. That’s more than any other streaming
            services’ cloud DVRs, including YouTube TV, which keeps your
            recorded content for nine months. <br />
            If you somehow just couldn’t get to those saved episodes of
            MotorTrend’s Graveyard Carz last year, you’ll still be able to call
            them up on demand (with commercials). Most Philo channels offer the
            same capability. <br />
            On recorded shows, you can zip past commercials easily thanks to
            Philo’s sliding preview frame, which works similarly to
            fast-forwarding on Netflix or Amazon Prime Video. <br />
            Philo’s display for recorded content could use some work. It’s not
            always clear which is the most recent episode of a show, meaning
            there’ll be some guesswork and extra clicking involved to get to
            what you want. Also, you can’t record individual episodes, just full
            series.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Service</th>
                  <th>Cloud DVR</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1.</td>
                  <td> Philo</td>
                  <td> Unlimited (1 Yr.)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Multiple streams </h4>
          <p className="after-heading">
            Three simultaneous streams are allowed with Philo streaming, which
            is the average for streaming TV services. ESPN+ and only a handful
            of others offer up to five, for reference. <br />
            Philo app logins are enabled for up to 32 devices—which seems a bit
            excessive, considering that Philo isn’t compatible with all that
            many streaming gadgets (more on that next).
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Service</th>
                  <th>Streams</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1.</td>
                  <td> Philo</td>
                  <td> 3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Compatible devices </h4>
          <p className="after-heading">
            {" "}
            If your streaming device is a PlayStation, Xbox, Nintendo, or most
            any brand of smart TV, sorry. Philo only works on a handful of
            platforms.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Service</th>
                  <th>Hulu, Hulu + Live TV</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1.</td>
                  <td> Amazon Fire Cube, Stick, TV</td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />{" "}
                  </td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td> Android phones, tablets</td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />{" "}
                  </td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td> Android TV</td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />{" "}
                  </td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td> Apple TV (4th gen.)</td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />{" "}
                  </td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>Apple TV 4K</td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />{" "}
                  </td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td> Chromecast, Chromecast with Google TV</td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />{" "}
                  </td>
                </tr>
                <tr>
                  <td>7.</td>
                  <td> Echo Show</td>
                  <td>
                    {" "}
                    <ImCross className="cross-icon" />{" "}
                  </td>
                </tr>
                <tr>
                  <td>8.</td>
                  <td> iPhone, iPad</td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />{" "}
                  </td>
                </tr>
                <tr>
                  <td>9.</td>
                  <td> LG TVs (select models)</td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                </tr>
                <tr>
                  <td>10.</td>
                  <td> Nintendo Switch</td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                </tr>
                <tr>
                  <td>11.</td>
                  <td> NVIDIA SHIELD TV Pro</td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                </tr>
                <tr>
                  <td>12.</td>
                  <td> PC, Mac web browsers</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>13.</td>
                  <td> PlayStation 3*, 4, 5</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>14.</td>
                  <td> Roku Ultra, Express, Premiere, Stick, TV</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>15.</td>
                  <td>Samsung TVs (select models)</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>16.</td>
                  <td>Wii)</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>17.</td>
                  <td>Xbox 360, One</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Video and audio quality </h4>
          <p className="after-heading">
            Most of the live TV streaming services we’ve reviewed at CableTV.com
            stream at 720p (pixels) at 60 fps (frames per second) or higher.{" "}
            <br />
            Philo streams at 720p at 30 fps, but the HD picture quality
            difference is only barely discernible. It doesn’t, however, stream
            anything in 4K.{" "}
          </p>
          <Image src={videoone} alt="" />
          <p className="after-heading">
            Channels are arranged alphabetically in grid fashion, with shows
            hover-highlighted as large tiles. On livestreaming devices, Philo’s
            aesthetic is oddly retro, using a ’60s-tinged muted color palette.
            If you’re bored with other staid TV grids, it’s a refreshing look.{" "}
            <br />
            To a small extent, you can customize Philo’s channel grid to move
            your most-watched channels nearer to the top by “favoriting”
            them—but your favorites with still be listed alphabetically. AMC
            will always come before VH1, no matter how much you love Black Ink
            Crew.
          </p>
          <Image src={videotwo} alt="" />
          <p className="after-heading">
            Philo streams in standard 2.0 stereo audio; Dolby Digital 5.1
            surround sound isn’t available. Digable Planets still sound “Cool
            Like Dat” on MTV Classic, though.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Philo worth it?</span>
          </h2>
          <p className="sect-desc">
            Philo is worth it for straight-up entertainment with a load of
            popular channels and an unlimited Cloud DVR included on the cheap.
            Only the most basic Sling TV package comes close—with half the
            channels at 10 bucks more a month. But, if you want sports and local
            channels, there’ll be workarounds involved, and they’ll cost you a
            little in additional streaming subscriptions, apps, or antennas.{" "}
            <br />
            For the type of viewer with all-encompassing TV needs, it’s best to
            think of Philo as an add-on to another streaming service.
            Conveniently, because of its ownership, it carries several channels
            that other streamers are missing. (Check out our best streaming
            services review for more on those.) <br />
            It’s almost as if Philo was designed that way. We’re not into
            corporate media conspiracies, but . . .
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> get philo</Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Philo </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Can you get local channels
                with Philo?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Philo doesn’t carry local channels, which means you can’t
                  watch ABC, CBS, FOX, NBC, The CW, PBS, or Telemundo shows on
                  the service. To get local channels, we recommend buying an
                  over-the-air digital antenna, which gives you free access to
                  dozens of area broadcast channels for a one-time purchase.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Can you get local channels with Philo?"}
            cssClass={"faq-content"}
          >
            <p>
              Philo doesn’t carry local channels, which means you can’t watch
              ABC, CBS, FOX, NBC, The CW, PBS, or Telemundo shows on the
              service. To get local channels, we recommend buying an
              over-the-air digital antenna, which gives you free access to
              dozens of area broadcast channels for a one-time purchase.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does Philo have live TV?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Like cable or satellite, Philo is a live TV service that also
                  streams on-demand content from the 60+ channels in carries.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does Philo have live TV?"}
            cssClass={"faq-content"}
          >
            <p>
              Like cable or satellite, Philo is a live TV service that also
              streams on-demand content from the 60+ channels in carries.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How much is Philo monthly?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Philo’s subscription rate is $25 a month. For an extra charge,
                  you can add premium channels STARZ ($9 a month) or MGM+ ($6 a
                  month).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How much is Philo monthly?"}
            cssClass={"faq-content"}
          >
            <p>
              Philo’s subscription rate is $25 a month. For an extra charge, you
              can add premium channels STARZ ($9 a month) or MGM+ ($6 a month).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How can I get Philo for
                free?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Philo offers a seven-day free trial period to try out the
                  service, after which you’ll be charged $25 a month unless you
                  cancel before the week is up.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" How can I get Philo for free?"}
            cssClass={"faq-content"}
          >
            <p>
              Philo offers a seven-day free trial period to try out the service,
              after which you’ll be charged $25 a month unless you cancel before
              the week is up.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Does Philo have different
                packages?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Philo only offers a single basic package: $25 a month for 60+
                  live TV channels.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" Does Philo have different packages?"}
            cssClass={"faq-content"}
          >
            <p>
              Philo only offers a single basic package: $25 a month for 60+ live
              TV channels.
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
            Our experts spent over two dozen hours watching and researching NFL
            Sunday Ticket on DIRECTV. Since YouTube took over the out-of-market
            package, we continued our research to determine if it’s a worthy TV
            add-on. We also compared its features and coverage to similar
            services and standard TV plans.
            <br />
            Check out our How We Rank page to learn more about our methods.
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}> Philo Channel Lineup</Link>
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
                <Link href={"#"}>Best Antennas for Cord-Cutters</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>9 Streaming Bundles to Replace Cable</Link>
              </span>
            </li>
          </ul>
          <h4>Amazon disclaimer</h4>
          <p>
            Product prices and availability are accurate as of the date/time
            indicated and are subject to change. Any price and availability
            information displayed on Amazon.com at the time of purchase will
            apply to the purchase of this product. CableTV.com utilizes paid
            Amazon links.
            <br />
            CERTAIN CONTENT THAT APPEARS ON THIS SITE COMES FROM AMAZON. THIS
            CONTENT IS PROVIDED ‘AS IS’ AND IS SUBJECT TO CHANGE OR REMOVAL AT
            ANY TIME.
          </p>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default PhiloReview;
