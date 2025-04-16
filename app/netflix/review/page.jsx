// import React, { useState } from "react";
import "./netflix-review.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { netflixNavLinks } from "../../assets/data/navLinks/netflixNavLinks";
import netflixbro from "../../assets/images/netflix-bro.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import netflix from "../../assets/images/netflix.png";
import netflixicon from "../../assets/images/netflix-icon.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import dotted from "../../assets/images/dotted.png";
import netflixone from "../../assets/images/netflixone.png";
import netflixtwo from "../../assets/images/netflixtwo.png";
import PackageTable from "../../components/package-table/PackageTable";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa6";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Netflix Review: Plans, Pricing, And More"
};

const NetflixReview = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: netflix,
      rating: "(3.5/5)",
      starImg: star,
      desc: "Most original content",
      buttonText: "compare to other services",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: netflixbro,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "Netflix",
        icon: netflixicon,
      },
      {
        subtitle: "Price:",
        title: "$6.99–$22.99/mo.",
        icon: netflixicon,
      },
      {
        subtitle: "Free trial:",
        title: "N/A",
        icon: netflixicon,
      },
      {
        subtitle: "Library:",
        title: "5,000+ movies and TV shows",
        icon: netflixicon,
      },
    ],

    tableData: [
      {
        head: [
          "Plan",
          "price",
          "Video",
          "Audio",
          "Streams",
          "Extra members",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Standard with Ads ",
              "$6.99/mo. ",
              "1080p ",
              "2.0 stereo ",
              "2 ",
              "- ",
            ],
            linkPath: "#",
          },
          {
            content: [
              "2.",
              " Standard",
              "$15.49/mo. ",
              "1080p ",
              "2.0 stereo, Dolby Digital 5.1 ",
              " 2",
              "+1 ",
            ],
            linkPath: "#",
          },
          {
            content: [
              "3.",
              " Premium",
              "$22.99/mo. ",
              "1080p, 4K ",
              "2.0 stereo, Dolby Digital 5.1, Dolby Atmos ",
              "4 ",
              "+2 ",
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
        "Video",
        "Audio",
        "Streams",
        "Extra members",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Standard with Ads ",
            "$6.99/mo. ",
            "1080p ",
            "2.0 stereo ",
            "2 ",
            "- ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            " Standard",
            "$15.49/mo. ",
            "1080p ",
            "2.0 stereo, Dolby Digital 5.1 ",
            " 2",
            "+1 ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            " Premium",
            "$22.99/mo. ",
            "1080p, 4K ",
            "2.0 stereo, Dolby Digital 5.1, Dolby Atmos ",
            "4 ",
            "+2 ",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataCompetition = [
    {
      head: ["Service", "Price", "Streams", "Video", "Details"],

      body: [
        {
          content: ["1.", "Netflix", "$6.99-$22.99/mo.", "2-4", "1080p, 4K"],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Max",
            "$9.99-$19.99/mo. or $99.99-$199.99/yr.",
            "2-4",
            "1080p, 4K",
          ],
          linkPath: "#",
        },
        {
          content: ["3.", "Hulu", "$7.99-$17.99/mo.", "2", "1080p, 4K"],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Disney+",
            "$7.99-$13.99/mo. or $139.99/yr.",
            "4",
            "1080p, 4K",
          ],
          linkPath: "#",
        },
        {
          content: ["5.", "Apple TV+", "$6.99/mo.", "6", "1080p, 4K"],
          linkPath: "#",
        },
        {
          content: [
            "6.",
            "Amazon Prime Video",
            "$8.99-$14.99/mo. or $139.00/yr.",
            "3",
            "1080p, 4K",
          ],
          linkPath: "#",
        },
        {
          content: [
            "7.",
            "Peacock",
            "$5.99-$11.99/mo. or $59.99-$119.99/yr.",
            "3",
            "1080p, 4K",
          ],
          linkPath: "#",
        },
        {
          content: [
            "8.",
            "Paramount+",
            "$5.99-$11.99/mo. or $59.99-$119.99/yr.",
            "3",
            "1080p, 4K",
          ],
          linkPath: "#",
        },
        {
          content: ["9.", "Discovery+", "$4.99-$8.99/mo.", "4", "1080p, 4K"],
          linkPath: "#",
        },
        {
          content: ["10.", "ESPN+", "$10.99/mo. or $109.99/yr.", "5", "1080p"],
          linkPath: "#",
        },
      ],
    },
  ];

  return (
    <div className="netflix-review">
      {/* <SubNav links={netflixNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Netflix Review 2024: Plans, Pricing, And More
          </h2>
          <p className="sect-desc">
            Does streaming giant Netflix really deliver something for everyone?
            The CableTV.com experts investigate the mighty red N.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />

          <h4>Is Netflix good?</h4>
          <p>
            Oxygen, water, and Netflix: The basic staples of life. The mighty
            red N has been the No. 1 streaming service for years for a
            reason—it’s consistent in quantity and quality. <br />
            At a base price of $6.99 a month, Netflix’s ad-supported plan
            delivers a thunderous bang for your subscription buck. Unlike the
            others that are still trying to catch up, Netflix pours millions
            into building its own on-demand universe (until it eventually
            cancels every show that isn’t Stranger Things). <br />
            Netflix is one of the few entertainment outlets that can say it has
            “something for everyone” with a straight face (or off-center
            smiley-square icon). Not all of Netflix’s shows and movies are
            great, but there’s always something new dropping tomorrow.
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
                  <td> Huge variety of movies and TV shows</td>
                  <td> No live TV or sports</td>
                </tr>
                <tr>
                  <td> Exclusive original content</td>
                  <td> No more password sharing</td>
                </tr>
                <tr>
                  <td>4K Ultra HD capability</td>
                  <td>Cancellations after the first season </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Need better internet speeds for streaming?"}
        desc={
          "Enter your zip code to check out better speeds or prices available from internet providers in your area.."
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
          <Link href={"#"}>Plans and prices</Link>
          <Link href={"#"}>Netflix vs. the competition </Link>
          <Link href={"#"}>Shows and movies </Link>
          <Link href={"#"}>Specs and features </Link>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={dotted} className="mark" alt="" />
          <h4>Netflix deals and promotions </h4>
          <p>
            Are you a T-Mobile customer? Check out the cellular provider’s
            “Netflix on Us” promotion, which essentially gives you free Netflix
            (Standard or Basic plan) with your phone service.
          </p>
        </div>
      </div>

      <div className="section cost">
        <div className="head">
          <h2 className="sect-heading">
            Netflix <span> plans and prices </span>
          </h2>
          <p className="sect-desc">
            Netflix carries more TV series, movies, documentaries, kids’ shows,
            stand-up comedy specials, anime, and international programming than
            you could possibly ever watch (we know—we’re professionals and we’ve
            tried). <br />
            With Netflix’s new password-sharing policies, ad-supported
            subscribers won’t be able to share their account outside of their
            household. Standard subscribers get one extra member outside of the
            household, and Premium subscribers get two. The catch is that any
            member beyond that costs an additional $7.99/mo. per person, which
            can really inflate that monthly bill. Yikes!
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
            Netflix <span> vs. the competition </span>
          </h2>
          <p className="sect-desc">
            Netflix’s most popular plan, Standard, is around the same cost per
            month as Max. There are definitely cheaper streaming services out
            there, but none match Netflix in sheer original output. If you’re
            more into older, familiar content, check out Amazon Prime Video or
            Paramount+.
          </p>
        </div>
        <PackageTable item={packageTableDataCompetition} />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section shows-and-movies">
        <div className="head">
          <h2 className="sect-heading">
            Netflix <span> shows and movies </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>On-demand shows and movies on Netflix</h4>
          <p className="after-heading">
            Acquired (rather than original) TV shows—Netflix’s initial claim to
            streaming fame—are in dwindling supply with each new streaming
            competitor. But you can still find some non-original titles from ye
            olde days of cable television in Netflix’s library. And some
            competitors, like Max and Paramount+, license their originals back
            to Netflix. It all circles back to the red N. <br />
            And Netflix definitely still has a lot of super popular movies from
            the last decade, from Get Out to The Batman. <br />
            Even though you can literally scroll for hours, Netflix still isn’t
            an all-inclusive portal for keeping up on every TV show and movie
            released. But, as one of modern pop culture’s major players, it
            doesn’t have to be. Plenty of people claim Netflix as their only TV
            service, streaming or otherwise, and they’re rarely at a loss for
            something new to watch. If you’re overwhelmed, check out out our
            What to Watch on Netflix recs.
          </p>
          <br />
          <ul className="channel-list-h4">
            <h4>On-demand TV shows (partial list):</h4>
            <h4>On-demand Movies (partial list):</h4>
          </ul>
          <ul className="channel-list">
            <li>Better Call Saul</li>
            <li>Big Brother</li>
            <li>Breaking Bad</li>
            <li>Good Girls</li>
            <li>Manifest</li>
            <li>Legends of Tomorrow</li>
            <li>Outlander</li>
            <li>School Spirits</li>
            <li>Shameless</li>
            <li>Supernatural</li>
            <li>Ava</li>
            <li>Dune</li>
            <li>Lady Bird</li>
            <li>Silver Linings Playbook</li>
            <li>Spider-Man: Across the Spider-Verse</li>
            <li>Suicide Squad</li>
            <li>The Meg</li>
            <li>The Super Mario Bros Movie</li>
            <li>Spy Kids</li>
          </ul>
          <hr />
          <div className="btn">
            <Link href={"/"}>what to watch on netflix</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Original shows and movies on Netflix</h4>
          <p className="after-heading">
            Anybody remember when Netflix only mailed out DVDs? <br /> Those
            days are gone, but now in-house originals are where it’s at for
            Netflix. Ever since the premieres of original series Orange Is the
            New Black and House of Cards in 2013, Netflix has moved toward
            becoming an outlet for exclusively produced content and curated
            foreign programming. <br />
            In fact, originals like Stranger Things, Squid Game, and countless
            others are now the service’s primary focus. Netflix invests heavily
            in Netflix, and it cranks out series and movies—even if it doesn’t
            promote or renew them all. <br />
            But Netflix doesn’t just produce multi-episode series that keep you
            binge-watching through the weekend; it also makes feature films and
            documentaries that eat only a couple of hours of your time. <br />
            You’ve likely heard of Mank or Hillbilly Elegy—neither was a
            critical darling, but millions watched them anyway.
          </p>
          <br />
          <ul className="channel-list-h4">
            <h4>Netflix original TV shows (partial list):</h4>
            <h4>Netflix original movies (partial list):</h4>
          </ul>
          <ul>
            <li>Squid Game</li>
            <li>Bridgerton</li>
            <li>Ozark</li>
            <li>Cobra Kai</li>
            <li>The Witcher</li>
            <li>Castlevania</li>
            <li>Sex Education</li>
            <li>You</li>
            <li>Blue Eye Samurai</li>
            <li>Scott Pilgrim Takes Off</li>
            <li>Disenchantment</li>
            <li>The G-Word</li>
            <li>Red Notice</li>
            <li>Gunpowder Milkshake</li>
            <li>The Harder They Fall</li>
            <li>Army of the Dead</li>
            <li>Army of Thieves</li>
            <li>Fear Street</li>
            <li>The Old Guard</li>
            <li>Kate</li>
            <li>6 Underground</li>
            <li>Extraction</li>
            <li>Nimona</li>
            <li>Tick, Tick… Boom!</li>
          </ul>
          <hr />
          <div className="btn">
            <Link href={"/"}>what to watch on netflix</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Additional services; Free mobile games </h4>
          <p className="after-heading">
            Netflix’s best-kept secret is its impressive lineup of mobile games.
            Yes, you read that right—all Netflix subscribers get access to an
            array of mobile games, for free. It’s easy to miss this feature if
            you usually only watch Netflix on a smart TV or streaming device.
            All you have to do is log into Netflix on a mobile device (so a
            tablet or phone) and scroll down until you see the “Mobile Games”
            heading. <br />
            When you pick a game you want, Netflix will prompt you to open your
            device’s app store, where you can download the corresponding game
            for free. <br />
            Here are some of the games you can expect with your Netflix
            subscription:
          </p>
          <br />
          <ul>
            <li>OXENFREE</li>
            <li>OXENFREE II: Lost Signals</li>
            <li>Sonic Prime Dash</li>
            <li>Bloons TD 6</li>
            <li>The Queen’s Gambit Chess</li>
            <li>Spongebob: Get Cooking</li>
            <li>Nailed It! Baking Bash</li>
            <li>Terra Nil</li>
            <li>World of Goo Remastered</li>
            <li>Into the Breach</li>
            <li>Stranger Things: 1984</li>
            <li>Reigns: Three Kingdoms</li>
            <li>Spiritfarer</li>
            <li>Shovel Knight Pocket Dungeon</li>
            <li>…and more</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Additional services; DVD rental plans </h4>
          <p className="after-heading">
            Unfortunately, Netflix no longer offers the DVD rental service that
            put it on the map. It’s okay though, there’s always Blockbuster—oh,
            nevermind.
          </p>
        </div>
      </div>

      <div className="section features">
        <div className="head">
          <h2 className="sect-heading">
            Netflix <span> specs and features </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Multiple streams and offline downloads </h4>
          <p className="after-heading">
            The Netflix app can be installed and activated on as many devices as
            you like, but the number of simultaneous streams is limited
            depending on the package.
          </p>
          <ul>
            <li>
              Standard with ads allows two streams, as well as episode/movie
              downloads to two devices for offline viewing.
            </li>
            <li>
              Standard also allows two streams, and it downloads to two offline
              phones or tablets.
            </li>
            <li>
              Premium allows four streams, and it downloads to six offline
              phones or tablets. If you have a large household and want to keep
              the kiddies happy, Premium is probably the way to go.
            </li>
          </ul>
          <p>
            Netflix recommends a baseline of 3Mbps internet speed for SD
            viewing, 5Mbps for HD, and 25Mbps for 4K Ultra HD. We, on the other
            hand, recommend 25Mbps as the bare minimum for any type of
            internetting—life’s too short for buffering, people.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Plan</th>
                  <th>Simultaneous streams</th>
                  <th>Downloads for offline viewing</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td> 1.</td>
                  <td> Standard with Ads</td>
                  <td> 2</td>
                  <td> 2 devices</td>
                </tr>
                <tr>
                  <td> 2. </td>
                  <td> Standard </td>
                  <td> 2 </td>
                  <td> 2 devices</td>
                </tr>
                <tr>
                  <td> 3. </td>
                  <td> Premium </td>
                  <td> 4 </td>
                  <td>6 devices</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Compatible devices </h4>
          <p className="after-heading">
            The Netflix app is available on almost every streaming device there
            is—it even works on ancient Nintendo Wii consoles (although you
            won’t find it on the Nintendo Switch).
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Device</th>
                  <th>Hulu, Hulu + Live TV</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td> 1.</td>
                  <td> Amazon Fire Cube, Stick, TV</td>
                  <td>
                    <FaCheck className="check-icon" />{" "}
                  </td>
                </tr>
                <tr>
                  <td> 2. </td>
                  <td> Android phones, tablets </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />{" "}
                  </td>
                </tr>
                <tr>
                  <td> 3. </td>
                  <td> Android TV </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />{" "}
                  </td>
                </tr>
                <tr>
                  <td> 4. </td>
                  <td> Apple TV (4th gen.) </td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />{" "}
                  </td>
                </tr>
                <tr>
                  <td> 5. </td>
                  <td> Apple TV 4K</td>
                  <td>
                    {" "}
                    <FaCheck className="check-icon" />{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4> Video and audio quality</h4>
          <p className="after-heading">
            Netflix’s Standard plans stream in 1080p HD. <br />
            The Premium plan allows 4K Ultra HD streaming, which applies to
            Netflix originals and some acquired titles. More advanced HDR (high
            dynamic range) streaming is available on a limited basis.
          </p>
          <Image src={netflixone} alt="" />
          <br />
          <p className="after-heading">
            Most Netflix programming streams in standard 2.0 stereo audio,
            though some newer shows and movies are available in Dolby Digital
            5.1 Surround Sound and Dolby Atmos.
          </p>
          <Image src={netflixtwo} alt="" />
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Netflix worth it?</span>
          </h2>
          <p className="sect-desc">
            There’s little to knock about Netflix’s on-demand streaming
            service—for a reasonable price, it delivers the world to your
            screens. We could complain about the isolated nature of Netflix, as
            it offers less and less from outside film and TV studios all the
            time, concentrating more on its own product. There’s also no local
            TV connection, but there are other ways for you to get your
            community information (get an antenna; your local TV news could use
            the eyeballs). <br />
            In all, Netflix isn’t a replacement for good ole cable—but with so
            much exclusive content, that hardly matters. Once subscribed, you
            probably won’t need to leave the house again.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> get Netflix</Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Netflix </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span>What's the difference
                between Netflix Basic, Standard, and Premium plans?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  There are subtle differences between Netflix’s three
                  subscription plans. They break down like this:
                </p>
                <br />
                <ul>
                  <li>
                    Standard with ads ($6.99/mo.) gives you Full HD 1080p video
                    resolution and the ability to watch Netflix on two devices
                    simultaneously, as long as both are in the same household.
                  </li>
                  <li>
                    Standard ($15.49/mo.) is the same as Standard with ads,
                    except it gets rid of those annoying ads and allows you the
                    ability to add one extra member outside of your household.
                  </li>
                  <li>
                    Premium ($22.99/mo.) can stream up to 4k video resolution,
                    and allows for up to 6 simultaneous streams. You’ll also be
                    able to add two members outside of your household. This plan
                    is targeted towards larger households and groups.
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={
              "What's the difference between Netflix Basic, Standard, and Premium plans?"
            }
            cssClass={"faq-content"}
          >
            <p>
              There are subtle differences between Netflix’s three subscription
              plans. They break down like this:
            </p>
            <br />
            <ul>
              <li>
                Standard with ads ($6.99/mo.) gives you Full HD 1080p video
                resolution and the ability to watch Netflix on two devices
                simultaneously, as long as both are in the same household.
              </li>
              <li>
                Standard ($15.49/mo.) is the same as Standard with ads, except
                it gets rid of those annoying ads and allows you the ability to
                add one extra member outside of your household.
              </li>
              <li>
                Premium ($22.99/mo.) can stream up to 4k video resolution, and
                allows for up to 6 simultaneous streams. You’ll also be able to
                add two members outside of your household. This plan is targeted
                towards larger households and groups.
              </li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How do you download Netflix
                shows and movies?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  To download Netflix shows and movies for offline viewing,
                  you’ll need the newest version of the Netflix app on one of
                  these devices:
                </p>
                <br />
                <ul>
                  <li>iPhone, iPad, iPod Touch (iOS 9 or later)</li>
                  <li>Android phone, or tablet (Android 4.4.2 or later)</li>
                  <li>Amazon Fire tablet (Fire OS 4.0 or later)</li>
                  <li>Windows 10 tablet or computer (v.1607 or later)</li>
                  <li>Chromebook or Chromebox (select models)</li>
                </ul>
                <br />
                <p>
                  Select any show or movie and look for the “Downloads” icon,
                  which is a downward arrow and horizontal line. If no icon is
                  displayed, this means the selected content isn’t available for
                  download. You’re allowed up to 100 downloads at a time per
                  device across all devices included in your membership plan.{" "}
                  <br />
                  Downloaded shows and movies will expire after a certain amount
                  of time, depending on the title—some will self-delete after 48
                  hours, but most will remain for at least a week or longer.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" How do you download Netflix shows and movies?"}
            cssClass={"faq-content"}
          >
            <p>
              To download Netflix shows and movies for offline viewing, you’ll
              need the newest version of the Netflix app on one of these
              devices:
            </p>
            <br />
            <ul>
              <li>iPhone, iPad, iPod Touch (iOS 9 or later)</li>
              <li>Android phone, or tablet (Android 4.4.2 or later)</li>
              <li>Amazon Fire tablet (Fire OS 4.0 or later)</li>
              <li>Windows 10 tablet or computer (v.1607 or later)</li>
              <li>Chromebook or Chromebox (select models)</li>
            </ul>
            <br />
            <p>
              Select any show or movie and look for the “Downloads” icon, which
              is a downward arrow and horizontal line. If no icon is displayed,
              this means the selected content isn’t available for download.
              You’re allowed up to 100 downloads at a time per device across all
              devices included in your membership plan. <br />
              Downloaded shows and movies will expire after a certain amount of
              time, depending on the title—some will self-delete after 48 hours,
              but most will remain for at least a week or longer.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What's the cheapest way to
                get Netflix?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  If you’re a T-Mobile customer, you can take advantage of the
                  service’s “Netflix on Us” promotion, which gives you a Basic
                  or Standard plan for free, depending on your mobile plan.
                  Basic with Ads is Netflix’s cheapest plan at $6.99 a month.
                  Verizon myPlan customers will also be able to purchase an
                  ad-supported Netflix/Max bundle for $10 per month starting on
                  December 7. That’s not free like T-Mobile’s offer, but it’s
                  still a pretty good deal.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" What's the cheapest way to get Netflix?"}
            cssClass={"faq-content"}
          >
            <p>
              If you’re a T-Mobile customer, you can take advantage of the
              service’s “Netflix on Us” promotion, which gives you a Basic or
              Standard plan for free, depending on your mobile plan. Basic with
              Ads is Netflix’s cheapest plan at $6.99 a month. Verizon myPlan
              customers will also be able to purchase an ad-supported
              Netflix/Max bundle for $10 per month starting on December 7.
              That’s not free like T-Mobile’s offer, but it’s still a pretty
              good deal.
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
            Our experts spent hundreds of hours of hands-on testing, rating
            Netflix on bang for your buck, reliability, features, and customer
            satisfaction. Then we matched up the on-demand TV streamers head to
            head to give a clearer picture of their strengths and weaknesses.
            For more information on our methodology, check out our
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
            page.
          </p>
          <h4>Related Articles:</h4>
          <ul>
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
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Internet for Streaming Netflix</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default NetflixReview;
