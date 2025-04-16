// import React, { useState } from "react";
import "./peacock-review.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { peacockNavLinks } from "../../assets/data/navLinks/peacockNavLinks";
import peacockgirl from "../../assets/images/peacock-girl.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import peacock from "../../assets/images/peacock-photo.png";
import peacockicon from "../../assets/images/peacock-icon.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa6";
import CTA from "../../components/cta-section/CTA";
import dotted from "../../assets/images/dotted.png";
import peacoctwo from "../../assets/images/peacoctwo.png";
import peacockone from "../../assets/images/peacock-one.png";
import peacockthree from "../../assets/images/peacockthree.png";
import peacockfour from "../../assets/images/peacockfour.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Peacock Review: Cost, Plans"
};

const PeacockReview = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: peacock,
      rating: "(3.5/5)",
      starImg: star,
      desc: "Catch Universal Pictures theatrical releases and next-day NBC, Bravo, USA streaming",
      buttonText: "compare to other services",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: peacockgirl,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "Peacock",
        icon: peacockicon,
      },
      {
        subtitle: "Free trail:",
        title: "None",
        icon: peacockicon,
      },
      {
        subtitle: "Price:",
        title: "$5.99–$11.99/mo. or $59.99–$119.99/yr.n",
        icon: peacockicon,
      },
      {
        subtitle: "Library:",
        title: "80,000+ hrs.",
        icon: peacockicon,
      },
    ],

    tableData: [
      {
        head: [
          "Plan",
          "price",
          "Hours of content",
          "Offline viewing",
          "Ad-free",
          "Live sports",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Premium",
              "$5.99/mo.",
              "80,000+",
              <ImCross key="Im1" className="cross-icon" />,
              <ImCross key="Im2" className="cross-icon" />,
              <FaCheck key="Fa1" className="check-icon" />,
            ],
            linkPath: "#",
          },
          {
            content: [
              "2.",
              "Premium Plus",
              "$11.99/mo.",
              "80,000+",
              <FaCheck key="Fa2" className="check-icon" />,
              <FaCheck key="Fa3" className="check-icon" />,
              <FaCheck key="Fa4" className="check-icon" />,
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
        "price",
        "Hours of content",
        "Offline viewing",
        "Ad-free",
        "Live sports",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Premium",
            "$5.99/mo.",
            "80,000+",
            <ImCross key="Im3" className="cross-icon" />,
            <ImCross key="Im4" className="cross-icon" />,
            <FaCheck key="Fa5" className="check-icon" />,
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Premium Plus",
            "$11.99/mo.",
            "80,000+",
            <FaCheck key="Fa6" className="check-icon" />,
            <FaCheck key="Fa7" className="check-icon" />,
            <FaCheck key="Fa8" className="check-icon" />,
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDatacompetition = [
    {
      head: ["Service", "Price", "Channels", "Streams", "Cloud DVR", "Details"],

      body: [
        {
          content: [
            "1.",
            "Sling TV",
            "$40.00–$55.00/mo.",
            "30–45+",
            "1–4",
            "50 hrs.",
          ],
          linkPath: "#"
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
          linkPath: "#"
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
          linkPath: "#"
        },
        {
          content: [
            "4.",
            "Philo",
            "$25.00/mo.",
            "70+",
            "3",
            "Unlimited (1 yr.)",
          ],
          linkPath: "#"
        },
        {
          content: [
            "5.",
            "fuboTV",
            "$74.99–$94.99/mo.",
            "150–220+",
            "10",
            "1,000 hrs.",
          ],
          linkPath: "#"
        },
        {
          content: [
            "6.",
            "DIRECTV STREAM",
            "$69.99–$159.99/mo.",
            "75–150+",
            "3–unlimited",
            "20 hrs.",
          ],
          linkPath: "#"
        },
        {
          content: ["7.", "Vidgo", "$69.99–$99.99/mo.", "110–150+", "3", "N/A"],
          linkPath: "#"
        },
      ],
    },
  ];

  return (
    <div className="peacock-review">
      {/* <SubNav links={peacockNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Peacock Review 2024: Cost, Plans, And More
          </h2>
          <p className="sect-desc">
            Peacock is becoming a major player in the streaming game because
            it’s loaded with NBCUniversal content (and it’s cheap).
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is Peacock good?</h4>
          <p>
            Peacock is one of the cheaper big media streamers out there—that’s a
            fat check in the “good” column. The $5.99 a month Premium plan (with
            ads) gets you access to 80,000 hours of content, including many NBC,
            Bravo, and Syfy favorites.
            <br />
            Overall, we think Peacock is a worthwhile addition to your streaming
            apps lineup. Also, Peacock is the only place you can stream The
            Office—that’s a “Threat Level Midnight”-level argument (if you’re a
            fan, you get it).
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
                  <td> Inexpensive ad-supported tier</td>
                  <td> Small lineup of original content</td>
                </tr>
                <tr>
                  <td> Exclusive NBCUniversal content</td>
                  <td> Lackluster interface</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"You’ll need a fast internet plan for all that streaming"}
        desc={
          "Wanna speed up your download speeds? Enter your zip code below to see top internet providers in your area."
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
          <Link href={"#"}> Current deals</Link>
          <Link href={"#"}>Peacock vs. the competition</Link>
          <Link href={"#"}>Plans and pricing </Link>
          <Link href={"#"}> Available shows and movies</Link>
          <Link href={"#"}> Specs and features</Link>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={dotted} className="mark" alt="" />
          <h4>Peacock free trials and deals </h4>
          <p>
            You can save up to 17% by subscribing to either Peacock plan on an
            annual basis.
          </p>
        </div>
      </div>

      <div className="section cost">
        <div className="head">
          <h2 className="sect-heading">
            Peacock <span> plans and pricing </span>
          </h2>
          <p className="sect-desc">
            Both versions of Peacock give you access to 80,000+ hours of shows
            and movies. This includes current NBC broadcast series and older
            NBCU shows and movies, and next-day drops of broadcast episodes from
            NBC series and Peacock originals.
            <br />
            Unfortunately, if you want to ditch the annoying ads, you’ll have to
            pay for the more expensive Premium Plus plan, which is twice as much
            as the Premium plan.
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
            Peacock<span> vs. the competition </span>
          </h2>
          <p className="sect-desc">
            Peacock’s tech specs are similar to other major on-demand streaming
            outlets, but its ad-supported tier is closest in price to
            Paramount+, Netflix, and Discovery+. According to NBCUniversal,
            Peacock’s ad load is a relatively light five minutes per hour (if
            you believe the suits).
          </p>
        </div>
        <PackageTable item={packageTableDatacompetition} />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section showtime">
        <div className="head">
          <h2 className="sect-heading">
            Shows and movies <span> on Peacock </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Peacock on-demand shows and movies</h4>
          <p className="after-heading">
            NBCUniversal’s library of TV shows and movies is deeper than you
            might think. It’s not just NBC shows on the TV side; it also
            includes content from cable channels like USA Network, Syfy, Oxygen,
            Bravo, E!, CNBC, MSNBC, and Universal Kids. There are even previous
            seasons of Paramount Network cable juggernaut Yellowstone (which
            Paramount+ doesn’t have).
            <br />
            Peacock also features some live news and sports, like Premier
            League soccer, the Olympics, and WWE Entertainment (pro
            wrestling is a sport—we’ll die on this hill).
            <br />
            On the movies side, Peacock’s best perk is that it hosts recent
            Universal Pictures theatrical releases. Unfortunately, the rest of
            its non-original movie library is severely lacking.
          </p>
          <br />
          <ul className="channel-ul-heading">
            <h4>Shows on Peacock (partial list):</h4>
            <h4>Movies on Peacock (partial list):</h4>
          </ul>
          <ul className="channel-list">
            <li>The Office</li>
            <li>Parks and Recreation</li>
            <li>30 Rock</li>
            <li>Friday Night Lights</li>
            <li>Saturday Night Live</li>
            <li>Battlestar Galactica</li>
            <li>Law & Order franchise</li>
            <li>Downton Abbey</li>
            <li>Below Deck</li>
            <li>Southern Charm</li>
            <li>Yellowstone</li>
            <li>House</li>
            <li>Cheers</li>
            <li>Frasier</li>
            <li>Parenthood</li>
            <li>Psych</li>
            <li>Saved by the Bell</li>
            <li>The Bad Girls Club</li>
            <li>Snapped</li>
            <li>All current NBC series</li>
            <li>Bridesmaids</li>
            <li>Trolls World Tour</li>
            <li>Minions: The Rise of Gru</li>
            <li>Ruby Gillman: Teenage Kraken</li>
            <li>Pitch Perfect</li>
            <li>Asteroid City</li>
            <li>Black Phone</li>
            <li>Harry Potter franchise</li>
            <li>The Cat in the Hat</li>
            <li>Point Break</li>
            <li>How to Train Your Dragon</li>
            <li>Kick-Ass 2</li>
            <li>The Last Witch Hunter</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Peacock original shows and movies</h4>
          <p className="after-heading">
            Peacock has a growing number of exclusive originals up its feathered
            sleeve, like Poker Face (a Rian Johnson/Natasha Lyonne comedy
            mystery), Paul T. Goldman (a true-crime show that isn’t what it
            seems), and Pitch Perfect: Bumper in Berlin (a Pitch Perfect spinoff
            with Adam Devine). And while Peacock is great for comedy, there are
            also some heavy dramas, like Last Light, Dr. Death, and Bel-Air.
            <br />
            Peacock continues to expand its original movie repertoire with
            comedies like Mr. Monk’s Last Case: A Monk Movie, Please Don’t
            Destroy: The Treasure of Foggy Mountain, and Chris Flemming: Hell.
          </p>
          <br />
          <h4>Peacock originals (partial list):</h4>
          <ul className="channel-list">
            <li>Poker Face</li>
            <li>A.P. Bio</li>
            <li>Saved by the Bell</li>
            <li>Paul T. Goldman</li>
            <li>Killing It</li>
            <li>Brave New World</li>
            <li>The Capture</li>
            <li>Please Don’t Destroy: The Treasure of Foggy Mountain</li>
            <li>Downton Abbey: A New Era</li>
            <li>Girls5Eva</li>
            <li>Chris Flemming: Hell</li>
            <li>We Are Lady Parts</li>
            <li>The Amber Ruffin Show</li>
            <li>Departure</li>
            <li>The Traitors</li>
            <li>Dr. Death</li>
            <li>One of Us is Lying</li>
            <li>Angelyne</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>WWE on Peacock</h4>
          <p className="after-heading">
            Peacock dedicates a whole in-app tab to its exclusive WWE content,
            separate from the sports section. In addition to live events,
            Peacock also carries episodes of Friday Night SmackDown and WWE
            originals like Steve Austin: The Broken Skull Sessions and Table for
            3. We outline more of the service’s wrestling coverage in our WWE on
            Peacock guide.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Premier League on Peacock</h4>
          <p className="after-heading">
            Peacock offers an impressive array of live English Premier League
            games. In fact, almost half of all Premier League games are
            exclusive to Peacock, so you’ll miss out otherwise. Regardless of
            whether a game is a Peacock exclusive, though, you can watch any
            game on demand for up to 30 days after the airdate.
            <br />
            For more information on how to watch top-flight soccer from across
            the pond, check out our How To Watch the Premier League page.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>More Information:</h4>
          <p className="after-heading">
            NBCUniversal video apps, like those for NBC and Syfy, have always
            been fresh and functional—Peacock is no exception. There aren’t many
            bells and whistles, but it works well enough.
          </p>
        </div>
      </div>

      <div className="section specs-and-features">
        <div className="head">
          <h2 className="sect-heading">
            Peacock <span> specs and features </span>
          </h2>
          <p className="sect-desc">
            NBCUniversal video apps, like those for NBC and Syfy, have always
            been fresh and functional—Peacock is no exception. There aren’t many
            bells and whistles, but it works well enough.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Multiple streams</h4>
          <p className="after-heading">
            Three simultaneous streams is the unspoken streaming standard, and
            so it is with Peacock.
            <br />
            You can also set up different user profiles on Peacock (with an
            actual peacock avatar) and create a dedicated “kids mode” account
            too.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th> </th>
                  <th> Service</th>
                  <th> Streams</th>
                  <th> Upgrades</th>
                  <th> Offline downloads</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1. </td>
                  <td>Peacock </td>
                  <td>3 </td>
                  <td>None </td>
                  <td> Yes (Premium Plus plan only)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Supported devices</h4>
          <p className="after-heading">
            Peacock’s available on most devices but not anything in the Nintendo
            family. No Peacock for you, gamers.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Device</th>
                  <th>Paramount+</th>
                  <th></th>
                  <th>Device</th>
                  <th>Paramount+</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Amazon Fire Cube, Stick, TV</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>10.</td>
                  <td>Nintendo Switch</td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Android phones, tablets</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>11.</td>
                  <td>NVIDIA SHIELD TV Pro</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Android TV</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>12.</td>
                  <td>PC, Mac web browsers</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Apple TV (4th gen.)</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>13.</td>
                  <td>PlayStation 3*, 4, 5</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>Apple TV 4K</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>14.</td>
                  <td>Roku Ultra, Express, Premiere, Stick, TV</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td>Chromecast, Chromecast with Google TV</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>15.</td>
                  <td>Samsung TVs (select models)</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>7.</td>
                  <td>Echo Show</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>16.</td>
                  <td>Wii</td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                </tr>
                <tr>
                  <td>8.</td>
                  <td>iPhone, iPad</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>17.</td>
                  <td>Xbox One, Xbox Series S, Xbox Series X</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>9.</td>
                  <td>LG TVs (select models)</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>18.</td>
                  <td>Xfinity X1, TiVo Stream</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Video and audio quality</h4>
          <p className="after-heading">
            Three simultaneous streams is the unspoken streaming standard, and
            so it is with Peacock.
            <br />
            Rectangles, tabs, and channels—oh my! For a largely on-demand
            service, Peacock’s interface looks a lot like a cable TV setup.
          </p>
          <br />
          <Image src={peacockone} alt="" />
          <br />
          <p className="below-table">Peacock's home screen</p>
          <p className="after-heading">
            In addition to the usual along-the-top tabs, there’s a tab for a
            grid of live “channels,” which are mostly just endless loops of
            shows. But you can find some legit cable networks here,
            like Hallmark Channel and REELZ. Otherwise, Peacock features
            channels dedicated to NBC News, The Tonight Show, Saturday Night
            Live, and ‘80s classics, among dozens of others.
          </p>
          <br />
          <Image src={peacoctwo} alt="" />
          <br />
          <p className="below-table">PeaPeacock channels</p>
          <br />
          <p className="after-heading">
            There’s not much of a learning curve with Peacock’s interface, as
            it’s light on features and options—which is good or bad, depending
            on your level of tech tolerance. On a purely aesthetic note, we’re
            not sold on the choice of yellow highlighting. With so many colors
            on a peacock, why go with the most obnoxious one?
            <br />
            Peacock’s audio is standard 2.0 stereo, though some shows and movies
            stream in Dolby Digital 5.1 Surround Sound—like megabudget action
            flicks, where it sounds and feels like you’re right in the middle of
            whatever disaster The Rock is battling against.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Peacock mobile app</h4>
          <p className="after-heading">
            Like most streaming services, Peacock offers a mobile app on the
            Apple App Store and Google Play Store. This app functions mostly the
            same as its in-browser counterpart, although the interface is
            adjusted to fit a smaller screen.
            <br />
            The app is extra handy if you pay for Peacock Premium Plus—that
            extra bit of cash gives you the ability to download content for
            offline viewing, just in case you want to get your SNL fix on the
            go.
          </p>
          <br />
          <Image src={peacockthree} alt="" />
          <br />
          <p className="below-table">The Peacock app home screen on iPad.</p>
          <p className="after-heading">
            The biggest drawback of the mobile app is that you can’t take
            screenshots like you can on a computer. As is becoming common with
            other streaming apps like Netflix, HBOMax, and Disney+, the content
            just becomes a black rectangle upon screenshotting and only the UI
            remains. <br /> This decision only makes it harder for shows to gain
            traction since so many shows and movies thrive on word-of-mouth
            advertising and social media buzz. There’s no easier way to share
            content than just taking a screenshot, and restricting that feature
            only discourages organic discussions.
          </p>
          <br />
          <Image src={peacoctwo} alt="" />
          <br />
          <p className="below-table">
            The live TV or "Channels" section of the Peacock app on iPad.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Peacock worth it?</span>
          </h2>
          <p className="sect-desc">
            While the hype level for Peacock is nowhere near that of Disney+ or
            Max, it still has plenty to offer. It’s more in-line with
            Paramount+: nice to have, but probably not absolutely essential
            (though Battlestar Galactica and The Office fans may strongly
            disagree).
            <br />
            But, for the price, Peacock’s Premium plan is worth checking out; it
            offers thousands of viewing diversions, many that you can’t get
            anywhere else. It won’t be your sole source of entertainment (at
            least not yet, though the originals are getting better all the
            time), but Peacock is a solid addition to your app lineup.
            <br />
            Besides, you’re more than a little curious about what the Psych guys
            are up to now, right?
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> get peacock</Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Peacock </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Is Peacock free?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>No, Peacock no longer offers its free, ad-supported tier.</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Is Peacock free?"}
            cssClass={"faq-content"}
          >
            <p>No, Peacock no longer offers its free, ad-supported tier.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How much does Peacock cost?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  There are two levels to Peacock, and both are comparable to
                  other on-demand streaming services like Paramount+ and
                  Discovery+.
                </p>
                <br />
                <ul>
                  <li>
                    Peacock Premium (with ads): A $5.99/mo. ad-supported tier
                    with access to all of Peacock’s library (80,000+ hours of
                    content), including next-day streams of current NBC series,
                    older NBCUniversal shows and movies, and Peacock original
                    content.
                  </li>
                  <li>
                    Peacock Premium Plus (no ads): A $11.99/mo. ad-free tier
                    with access to all of Peacock’s library (80,000+ hours of
                    content), including next-day streams of current NBC series,
                    older NBCUniversal shows and movies, and Peacock original
                    content.
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" How much does Peacock cost?"}
            cssClass={"faq-content"}
          >
            <p>
              There are two levels to Peacock, and both are comparable to other
              on-demand streaming services like Paramount+ and Discovery+.
            </p>
            <br />
            <ul>
              <li>
                Peacock Premium (with ads): A $5.99/mo. ad-supported tier with
                access to all of Peacock’s library (80,000+ hours of content),
                including next-day streams of current NBC series, older
                NBCUniversal shows and movies, and Peacock original content.
              </li>
              <li>
                Peacock Premium Plus (no ads): A $11.99/mo. ad-free tier with
                access to all of Peacock’s library (80,000+ hours of content),
                including next-day streams of current NBC series, older
                NBCUniversal shows and movies, and Peacock original content.
              </li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does Peacock stream live
                TV?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Yes, Peacock streams live news programs from NBC News, Sky
                  News, MSNBC, and CNBC, as well as live sports coverage from
                  competitions like the Premier League, the PGA Tour, and WWE
                  Entertainment. You can also stream networks like Hallmark
                  Channel and REELZ across Peacock’s premium plans, while
                  Premium Plus subscribers can access a 24/7 local NBC channel
                  feed.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does Peacock stream live TV?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, Peacock streams live news programs from NBC News, Sky News,
              MSNBC, and CNBC, as well as live sports coverage from competitions
              like the Premier League, the PGA Tour, and WWE Entertainment. You
              can also stream networks like Hallmark Channel and REELZ across
              Peacock’s premium plans, while Premium Plus subscribers can access
              a 24/7 local NBC channel feed.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does Peacock stream local
                channels?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Like Paramount+, which live streams CBS local channels in most
                  markets, Peacock carries NBC local affiliate stations in
                  several areas. If your region is excluded, we suggest
                  subscribing to a live TV streaming service or buying a digital
                  over-the-air antenna.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Does Peacock stream local channels?"}
            cssClass={"faq-content"}
          >
            <p>
              Like Paramount+, which live streams CBS local channels in most
              markets, Peacock carries NBC local affiliate stations in several
              areas. If your region is excluded, we suggest subscribing to a
              live TV streaming service or buying a digital over-the-air
              antenna.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Can I watch live sports on
                Peacock?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Yes, Peacock Premium and Premium Plus subscribers get access
                  to many live and on-demand sports. The streaming service
                  hosts Sunday Night Football, Premier League soccer,
                  the Olympics, the IndyCar Series, and WWE Entertainment. It
                  even carries marquee events like the Kentucky Derby, the Indy
                  500, the Tour de France, and the Ryder Cup.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" Can I watch live sports on Peacock?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, Peacock Premium and Premium Plus subscribers get access to
              many live and on-demand sports. The streaming service hosts Sunday
              Night Football, Premier League soccer, the Olympics, the IndyCar
              Series, and WWE Entertainment. It even carries marquee events like
              the Kentucky Derby, the Indy 500, the Tour de France, and the
              Ryder Cup.
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
            Our experts employed hundreds of hours of hands-on testing with
            Peacock, rating the streaming service on bang for your buck,
            reliability, features, and customer satisfaction. Then we matched up
            Peacock with other on-demand streaming services head to head to give
            a clearer picture of its strengths and weaknesses. For more
            information on our methodology, check out our
            <span className="link">
              <Link href={"#"}>How We Rank </Link> page.
            </span>
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Peacock Live TV</Link>
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
                <Link href={"#"}>How To Watch Yellowstone</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default PeacockReview;
