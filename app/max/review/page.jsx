// import React, { useState } from "react";
import "./max-review.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { maxNavLinks } from "../../assets/data/navLinks/maxNavLinks";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import max from "../../assets/images/max-logo.png";
import maxicon from "../../assets/images/max-icon.png";
import maxgirl from "../../assets/images/max-review-girl.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import dotted from "../../assets/images/dotted.png";
import baseball from "../../assets/images/ball-of-base.png";
import mainstreampage from "../../assets/images/main-stream-page.png";
import blackscreen from "../../assets/images/black-screen.png";
// import Newsletter from "../../components/newsletter/Newsletter";
import PackageTable from "../../components/package-table/PackageTable";
import { FaCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

export const metadata = {
  title: "Max Review 2024: Cost, Plans"
};

const MaxReview = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: max,
      rating: "(3.5/5)",
      starImg: star,
      desc: "DC, Studio Ghibli, Adult Swim, and Discovery content",
      buttonText: "compare to other services",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: maxgirl,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "Max",
        icon: maxicon,
      },
      {
        subtitle: "Free trail:",
        title: "Up to 7 days",
        icon: maxicon,
      },
      {
        subtitle: "Price:",
        title: "$9.99–$19.99/mo. or $99.99–$199.99/yr.",
        icon: maxicon,
      },
      {
        subtitle: "Library:",
        title: "35,000 hrs.",
        icon: maxicon,
      },
    ],

    tableData: [
      {
        head: ["Plan", "price", "Channels", "Download Speed", "Details"],

        body: [
          {
            content: ["1.", "Ultimate Ad-Free", "$19.99/mo.", "4", "4K"],
            linkPath: "#",
          },
          {
            content: ["2.", "Ad-Free", "$15.99/mo.", "2", "1080p"],
            linkPath: "#",
          },
          {
            content: ["3.", "With Ads ", "$9.99/mo.", "2 ", "1080p"],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc: "",
  };
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  let packageTableData = [
    {
      head: ["Plan", "price", "Channels", "Download Speed", "Details"],

      body: [
        {
          content: ["1.", "Ultimate Ad-Free", "$19.99/mo.", "4", "4K"],
          linkPath: "#",
        },
        {
          content: ["2.", "Ad-Free", "$15.99/mo.", "2", "1080p"],
          linkPath: "#",
        },
        {
          content: ["3.", "With Ads ", "$9.99/mo.", "2 ", "1080p"],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataservice = [
    {
      head: ["Service", "Price", "Streams", "Resolution", "Details"],

      body: [
        {
          content: [
            "1.",
            "Amazon Prime Video",
            "$8.99–$14.99/mo. or $139.00/yr.",
            "3",
            "1080p, 4K",
          ],
          linkPath: "#"
        },
        {
          content: ["2.", "Apple TV+", "$6.99/mo.", "6", "1080p, 4K"],
          linkPath: "#"
        },
        {
          content: [
            "3.",
            "Disney+",
            "$7.99–$13.99/mo. or $139.99/yr.",
            "4",
            "1080p, 4K",
          ],
          linkPath: "#"
        },
        {
          content: ["4.", "Hulu", "$7.99–$17.99/mo.", "2", "1080p, 4K"],
          linkPath: "#"
        },
        {
          content: [
            "5.",
            "Max",
            "$9.99–$19.99/mo. or $99.99–$199.99/yr.",
            "2–4",
            "1080p, 4K",
          ],
          linkPath: "#"
        },
        {
          content: ["6.", "Netflix", "$6.99–$22.99/mo.", "2–4", "1080p, 4K"],
          linkPath: "#"
        },
        {
          content: [
            "7.",
            "Paramount+",
            "$5.99–$11.99/mo. or $59.99–$119.99/yr.",
            "3",
            "1080p, 4K",
          ],
          linkPath: "#"
        },
        {
          content: [
            "8.",
            "Peacock",
            "$5.99–$11.99/mo. or $59.99–$119.99/yr.",
            "3",
            "1080p, 4K",
          ],
          linkPath: "#"
        },
      ],
    },
  ];

  return (
    <div className="max-review">
      {/* <SubNav links={maxNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Max Review 2024: Cost, Plans, And More
          </h2>
          <p className="sect-desc">
            HBO Max has rebranded with a new app, and it’s not quite the same.
            Our expert review has everything you need to know about Max (The One
            to Watch for HBO).
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is Max good?</h4>
          <p>
            Max (formerly HBO Max) is still pretty good. That said, HBO Max was
            once one of the best streaming services on the ‘net—so good, we
            named it our editor’s choice for on-demand streaming—but sadly,
            those days have passed.
            <br />
            So, what happened to this once-beloved service? Well, the downward
            trend began when HBO Max removed dozens of original titles back in
            2022. HBO’s parent company, Warner Bros. Discovery (WBD), isn’t the
            only company to remove original streaming content—previously assumed
            to live on the platform forever—but it was the first to do so.
            <br />
            The next big change occurred in May 2023 when WBD decided to ditch
            the “HBO” and rename its service as just Max. Unfortunately, instead
            of a simple name change, this involved an entirely new app that
            users had to download separately from HBO Max, and that new app came
            with many downgrades.
            <br />
            The now-rebranded Max is still a decent place to watch most DC,
            Discovery, and, yes, HBO content, but for some subscribers, that
            still might not be enough content to justify the hefty price tag.
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
                  <td>Is great for DC, Studio Ghibli, and Adult Swim</td>
                  <td>Has a poor user experience compared to HBO Max</td>
                </tr>
                <tr>
                  <td>Provides access to most HBO shows</td>
                  <td>
                    Requires subscribers to bundle with Discovery+ content{" "}
                  </td>
                </tr>
                <tr>
                  <td>Includes A-list theatrical releases </td>
                  <td>Is the most expensive major streaming service in 2023</td>
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
          <Link href={"#"}> Current deals </Link>
          <Link href={"#"}> Plans and pricing </Link>
          <Link href={"#"}> Max vs. the competition </Link>
          <Link href={"#"}> Available shows and movies </Link>
          <Link href={"#"}> Specs and features </Link>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={dotted} className="mark" alt="" />
          <h4>Max promotions and deals </h4>
          <p>
            Max doesn’t offer a free trial, but you can try it out for seven
            days by adding it through your Hulu or Amazon Prime account. When
            the week’s up, you’ll be billed $15.99 a month unless you cancel the
            Max add-on.
            <br />
            You can find more discounts in our Max Deals guide.
          </p>
        </div>
      </div>

      <div className="section plans">
        <div className="head">
          <h2 className="sect-heading">
            Max <span> plans</span>
          </h2>
          <p className="sect-desc">
            Max comes in three different plans: With Ads, Ad-Free, and Ultimate
            Ad-Free. Ad-Free is the standard plan that you might already have if
            you’ve signed up for HBO through another streaming service or cable
            provider, and will get you a pretty good ad-free streaming
            experience. However, if you have a big family or want to take
            advantage of a 4K television, you might want to upgrade to the
            pricey Ultimate Ad-Free tier.
            <br />
            If you’re looking for the cheapest way to stream HBO content, you’ll
            probably be fine with the lowest ad-supported tier. Keep in mind
            that HBO shows were originally designed to air on HBO—the premium
            cable channel whose entire deal is the lack of ads. Those ad breaks
            are going to be awkward and intrusive. Each of Max’s three plans is
            the most expensive of its kind among the major streaming services.
            Its With Ads plan is more expensive than Disney+ and Hulu’s $7.99
            tier; the Ad-Free plan is more expensive than Netflix’s $15.49 tier;
            and its Ultimate plan is on par with Netflix’s premium tier and the
            most expensive Hulu/Disney+/ESPN+ bundle.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
        <div className="package-table-container channels">
          <Image src={baseball} className="mark" alt="quotations" />
          <h4>Get more from Max with the B/R Sports Add-On</h4>
          <p className="after-heading">
            Max recently introduced its B/R Sports Add-On, which offers 300+
            live sports events annually. The add-on is available for free but
            will eventually cost $9.99 a month after its promotional period ends
            on February 29, 2024.
            <br />
            B/R Sports Add-On content includes live MLB, NBA, NHL, and U.S.
            Soccer games. College basketball fans can also enjoy all matchups
            from the men’s NCAA Basketball Tournament that typically air on TBS,
            TNT, and truTV.
          </p>
        </div>
      </div>

      <div className="section other-streaming-services">
        <div className="head">
          <h2 className="sect-heading">
            Max <span> vs. other streaming services</span>
          </h2>
          <p className="sect-desc">
            Max’s biggest competitor is Netflix, and the two are pretty evenly
            matched as the most expensive on-demand streaming services around.
            Netflix definitely has the bigger library of original content, but
            unlike Netflix, Max allows users to have devices across multiple
            households. Netflix wins out if you’re not sharing an account with
            anyone, but in this economy? That’s pretty rare.
            <br />
            If you’re looking for the best value streaming service, our pick is
            Amazon Prime Video. Its standalone ad-free tier ($8.99) is much less
            expensive than Max’s ($15.99) and still provides a large library of
            content. You might lose out on House of the Dragon, but you’ll still
            get The Lord of the Rings: Rings of Power and The Wheel of Time. And
            if you want to upgrade to a full-fledged Prime membership—at the
            time of writing, it’s a dollar cheaper than Max’s middlest
            plan—you’ll get free shipping along with it.
            <br />
            Max also shares some similarities with Disney+. Both services have
            Avatar: The Way of Water, sure, but they’ve also both removed dozens
            of original titles from their services with very little warning
            (providing no alternative way to watch). At least when Paramount+
            removes originals with no warning, those titles end up on VOD and
            DVD.
          </p>
        </div>
        <PackageTable item={packageTableDataservice} />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section shows-and-movies">
        <div className="head">
          <h2 className="sect-heading">
            Shows and movies <span> on Max </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Max on-demand shows and movies</h4>
          <p className="after-heading">
            Max advertises itself as “the one to watch for HBO,” which is an
            awful slogan, but also not entirely true. Max does not have the full
            HBO library (see note about WB Watchlist), nor is it the only way
            you can get HBO.
            <br />
            However, it is a good way to watch certain recent HBO titles like
            Succession, The White Lotus, and The Last of Us, which all received
            several nominations from the 2023 Emmys. In fact, HBO received the
            biggest portion of this year’s nominations—127, a staggering amount.
            What does David Zaslav have on the Television Academy?
            <br />
            With its 2023 rebrand from HBO Max to just Max, WBD began
            incorporating content from its other streaming platform, Discovery+.
            While that service still exists as a standalone, HBO fans now get—or
            are stuck with, depending on your interests—access to all of
            Discovery’s biggest shows, like 90-Day Fiance and Mythbusters.
          </p>
          <br />
          <ul className="channel-list-h4">
            <h4>Shows on Max (partial list):</h4>
            <h4>Movies on Max (partial list):</h4>
          </ul>
          <ul className="channel-list">
            <li>Succession</li>
            <li>The Righteous Gemstones</li>
            <li>Our Flag Means Death</li>
            <li>Barry</li>
            <li>Game of Thrones</li>
            <li>House of the Dragon</li>
            <li>The Last of Us</li>
            <li>Tom and Jerry</li>
            <li>Last Week Tonight with John Oliver</li>
            <li>Insecure</li>
            <li>And Just Like That…</li>
            <li>Friends</li>
            <li>Euphoria</li>
            <li>Young Sheldon</li>
            <li>The White Lotus</li>
            <li>Craig of the Creek</li>
            <li>Adventure Time</li>
            <li>Primal</li>
            <li>Avatar: The Way of Water</li>
            <li>Evil Dead Rise</li>
            <li>The Meg</li>
            <li>Godzilla: King of the Monsters</li>
            <li>Dune</li>
            <li>Braveheart</li>
            <li>Transformers: Revenge of the Fallen</li>
            <li>Kung Fu Panda</li>
            <li>In the Heights</li>
            <li>Long Shot</li>
            <li>Coraline</li>
            <li>Glitch: The Rise and Fall of HQ Trivia</li>
            <li>The Wizard of Oz</li>
            <li>Parasite</li>
            <li>300</li>
            <li>My Big Fat Greek Wedding</li>
            <li>Insidious</li>
            <li>A Trip to the Moon (1902)</li>
          </ul>
          <ul className="channel-list-h4">
            <h4>Studio Ghibli on Max (partial list):</h4>
            <h4>Discovery on Max (partial list):</h4>
          </ul>
          <ul className="channel-list">
            <li>Howl’s Moving Castle</li>
            <li>Spirited Away</li>
            <li>Ponyo</li>
            <li>My Neighbor Totoro</li>
            <li>Kiki’s Delivery Service</li>
            <li>Princess Mononoke</li>
            <li>Castle in the SKy</li>
            <li>The Secret World of Arrietty</li>
            <li>Nausicaa of the Valley of the Wind</li>
            <li>The Cat Returns</li>
            <li>The Wind Rises</li>
            <li>Whisper of the Heart</li>
            <li>Tales from Earthsea</li>
            <li>Porco Rosso</li>
            <li>From Up On Poppy Hill</li>
            <li>When Marnie Was There</li>
            <li>Earwig and the Witch</li>
            <li>Pom Poko</li>
            <li>The Tale of The Princess Kaguya</li>
            <li>Only Yesterday</li>
            <li>My Neighbors the Yamadas</li>
            <li>Ghost Adventures</li>
            <li>Expedition Unknown</li>
            <li>Downey’s Dream Cars</li>
            <li>Deadliest Catch</li>
            <li>Mythbusters</li>
            <li>Naked and Afraid</li>
            <li>Hoffman Family Gold</li>
            <li>Growing Belushi</li>
            <li>Expedition X</li>
            <li>Mysteries of the Abandoned: Hidden America</li>
            <li>Alaskan Bush People</li>
            <li>Hunting Atlantis</li>
            <li>Crikey! It’s the Irwins</li>
            <li>The Crocodile Hunter Diaries</li>
            <li>Barbie Dreamhouse Challenge</li>
          </ul>
          <h4>DC on Max (partial list):</h4>
          <ul className="channel-list">
            <li>My Adventures with Superman</li>
            <li>The Batman</li>
            <li>Teen Titans Go!</li>
            <li>The Lego Batman Movie</li>
            <li>Suicide Squad</li>
            <li>League of Super-Pets</li>
            <li>The Suicide Squad</li>
            <li>Zack Snyder’s Justice League</li>
            <li>Peacemaker</li>
            <li>Wonder Woman</li>
            <li>Man of Steel</li>
            <li>Harley Quinn</li>
            <li>Gotham</li>
            <li>Batwoman</li>
            <li>Justice League x RWBY: Super Heroes and Huntsman</li>
            <li>Young Justice</li>
            <li>Batman: The Brave and the Bold</li>
            <li>Injustice</li>
            <li>Deathstroke: Knights & Dragons</li>
            <li>Batman: The Long Halloween</li>
            <li>Batman: The Killing Joke</li>
            <li>Batman: Gotham By Gaslight</li>
            <li>DC Super Hero Girls</li>
            <li>Shazam! Fury of the Gods</li>
            <li>Joker</li>
            <li>Doom Patrol</li>
            <li>
              Birds of Prey (and the Fantabulous Emancipation of One Harley
              Quinn)
            </li>
          </ul>
          <p>
            Max may be the one to watch for HBO, but WBD’s other favorite brand
            is DC. Max offers dozens of popular DC titles, from mainstream DCEU
            movies to animated specials like Legion of Super-Heroes. It’s even
            got plenty of DC Lego titles, including The Lego Batman Movie.
            <br />
            The biggest area Max is currently lacking in is the CW’s
            Arrowverse—Netflix still owns those streaming rights, so you won’t
            find The Flash or Legends of Tomorrow on Max. You’d think that Max
            would want a complete monopoly on DC properties from now on, but not
            so. Rotten Tomatoes reported that WBD recently sold three Batman
            projects to Amazon Prime Video, and let’s not forget about the time
            the studio canceled the near-finished Batgirl film. Max just can’t
            seem to decide whether it likes its superheroes or not.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="quotationsIcon" />
          <h4>Watch HBO series free on Tubi and the Roku Channel</h4>
          <p className="after-heading">
            Did you know HBO Max (before the Max rebrand) canceled and removed a
            lot of popular series? Unfortunately, the only place you’ll find
            titles like Westworld, The Nevers, and Raised by Wolves is at
            certain times on WB Watchlist, a channel carried by FAST services
            like The Roku Channel and Tubi. They are no longer available to
            watch on demand.
          </p>
        </div>
      </div>

      <div className="section features">
        <div className="head">
          <h2 className="sect-heading">
            Max <span> specs and features </span>
          </h2>
          <p className="sect-desc">
            Max is very similar to the late HBO Max, but a few things have
            changed, including plan specs, ease of use, and app reliability.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Multiple streams on Max</h4>
          <p className="after-heading">
            Unfortunately, the rebrand from HBO Max to Max means that you’ll see
            a drop in video quality and available streams. Previously, the
            $15.99/mo. tier got you three streams and 4K viewing, but now you’ll
            have to fork over $19.99/mo. for the privilege. Both the Ad-Free and
            With Ads plans only allow two simultaneous streams, where the
            Ultimate Ad-Free plan allows four.
            <br />
            Max can be set up for five separate viewer profiles, with individual
            preferences and even show-specific profile pictures. Now you can
            really start some family drama by assigning everyone characters from
            Succession.
            <br />
            Max allows downloads for offline mobile viewing, a convenience that
            cabled-bundled HBO previously didn’t offer. The ad-supported Max
            Ad-Lite, however, doesn’t do offline downloads—another strike
            against it.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th> </th>
                  <th>Plan</th>
                  <th>Price</th>
                  <th>Included Streams</th>
                  <th>Video</th>
                  <th>Offline Downloads</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ultimate Ad-Free</td>
                  <td>$19.99/mo. or $199.99/yr.</td>
                  <td>4</td>
                  <td>4K UHD with Dolby Atmos (on select titles)</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Ad-Free</td>
                  <td>$15.99/mo. or $149.99/yr.</td>
                  <td>2</td>
                  <td>Full HD 1080p</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>With Ads</td>
                  <td>$9.99/mo. or $99.99/yr.</td>
                  <td>2</td>
                  <td>Full HD 1080p</td>
                  <td>None</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Max video and audio quality</h4>
          <p className="after-heading">
            Like most on-demand services, Max streams in 1080p HD and 4K UHD
            (although the latter is paywalled behind a premium tier). And yes,
            Zack Snyder’s Justice League is supposed to look like that.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Max devices</h4>
          <p className="after-heading">
            Max is available anywhere you could get HBO Max (the service was
            only around for a few years), but you’ll have to download a whole
            new app to continue using the rebranded service. No, we don’t know
            why they did it like this either.
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
          <h4>Max app user experience</h4>
          <p className="after-heading">
            As of May 23, 2023, the HBO Max app no longer works. Unfortunately,
            the switch to Max is more than just a new name—you’ll have to
            download the entirely new Max app to keep enjoying Max content.
            You’ll have to search for the Max app yourself, though, because the
            HBO Max homepage currently looks like this:
          </p>
          <Image src={mainstreampage} alt="" />
          <br />
          <p className="below-table">
            This is what HBO Max users saw when they logged in on May 23, 2023.
          </p>
          <p className="after-heading">
            The new Max was, at the time of launch, just HBO Max but worse, and
            has only seen a few improvements in the time since.
            <br />
            One big problem that many viewers had with the new service was the
            tendency to lump all credits under “creators” rather than “actors”
            and “writers.” However, as of July 2023, Max no longer does
            this—likely because of industry and subscriber backlash.
            <br />
            Notably missing is the side menu, which used to provide users with a
            quick way to access categories and Warner Bros. Discovery brands
            like Sesame Street and Studio Ghibli. Now, all navigation happens in
            the top row with five labels: Home, Series, Movies, HBO, and New &
            Notable.
          </p>
          <Image src={blackscreen} alt="" />
          <br />
          <p className="below-table">
            The Max homepage on web on the day of launch.
          </p>
          <br />
          <p>
            WBD justified the rebrand to Max by saying that HBO wasn’t supposed
            to be their main brand anymore, but it’s the only brand you’re able
            to view from the homepage. If you want to view content by brands,
            you now have to click the magnifying glass Search icon.
            <br />
            Studio Ghibli, Sesame Street, and even Cartoon Network are much
            farther down in the brands list than you’d expect, and Harry Potter,
            My Strange Addiction, and South Park are very prominent throughout
            the platform. The Wizarding World—that is, the Harry Potter
            franchise—page is bizarrely extensive now, including categories of
            unrelated titles with names like For the Courageous Gryffindors and
            For the Ambitious Slytherins. It would probably have been extremely
            cool in 2011, but feels like a weird move to support the dying
            franchise in 2023.
            <br />
            I’ve also had reliability problems with Max since its rebrand.
            Sometimes Max’s new original content is excluded from the Just Added
            category on release day in favor of older movies and Discovery+
            transplants. This was the case with the recent Justice League x RWBY
            crossover special.
            <br />
            And sometimes content is uploaded with the wrong audio track, like
            in the case of a new episode of Clone High from just weeks after the
            Max rebrand, where a descriptive audio track replaced the default
            English audio. (To be fair, this problem has since been fixed, but
            it took a day or two. I chose to watch the episode in Spanish to
            avoid it).
            <br />
            The Max app has a lot of downgrades from its HBO predecessor, but
            perhaps the most glaring is the color. Gone is that signature HBO
            Max purple, replaced by a blue that will have you confusing it with
            Paramount+, Disney+, Amazon Prime Video, and probably Zoom.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            What’s included in <span> Max’s streaming service?</span>
          </h2>
          <p className="sect-desc">
            Max is the most expensive streaming service on the market, so it’s
            got to provide a lot of content to make up for that oversized price
            tag. Max subscribers get access to HBO shows and movies, in addition
            to content from Discovery+, DC, Studio Ghibli, Turner Classic
            Movies, Cartoon Network, Adult Swim, and more.
            <br />
            Most of these collections aren’t exhaustive—the service removed DC’s
            Aquaman: King of Atlantis and HBO’s Westworld, for example—but
            contains enough to make most viewers happy. Just make sure it’s
            worth it for $9.99–$19.99/mo. or $99.99–$199.99/yr.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> get Max</Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>Max </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Is Max the same as HBO Max?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Yes, Max is the new name for the service previously known as
                  HBO Max. However, you won’t be able to use the old HBO Max app
                  to watch Max—if you haven’t already, you’ll have to download
                  the new Max app.
                  <br />
                  The main difference? It’s blue instead of purple.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Is Max the same as HBO Max?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, Max is the new name for the service previously known as HBO
              Max. However, you won’t be able to use the old HBO Max app to
              watch Max—if you haven’t already, you’ll have to download the new
              Max app.
              <br />
              The main difference? It’s blue instead of purple.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Can I subscribe to Max
                through a provider?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  HBO—and by extension, Max—is available through over 70 cable,
                  satellite, live TV streaming, and mobile providers, including
                  Cox, Xfinity, Hulu, YouTube TV, and DIRECTV. This just applies
                  to billing, however; unless you’re on the company’s website,
                  you’ll still need the Max app to actually watch the content.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Can I subscribe to Max through a provider?"}
            cssClass={"faq-content"}
          >
            <p>
              HBO—and by extension, Max—is available through over 70 cable,
              satellite, live TV streaming, and mobile providers, including Cox,
              Xfinity, Hulu, YouTube TV, and DIRECTV. This just applies to
              billing, however; unless you’re on the company’s website, you’ll
              still need the Max app to actually watch the content.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Are there kids' shows on
                Max?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Despite HBO’s perception as an “adult” premium channel, Max
                  has quite a bit of children’s programming from Sesame Street,
                  Cartoon Network, and Looney Tunes. However, Warner Bros.
                  Discovery often cancels and removes kids’ animated content
                  from its platform, which might disappoint your kids.
                  <br />
                  Some of Max’s remaining kids’ shows include these:
                </p>
                <ul>
                  <li>Adventure Time</li>
                  <li>The Amazing World of Gumball</li>
                  <li>Batman: The Brave and the Bold</li>
                  <li>Care Bears: Unlock the Magic</li>
                  <li>Codename: Kids Next Door</li>
                  <li>Craig of the Creek</li>
                  <li>Meet the Batwheels</li>
                  <li>Over the Garden Wall</li>
                  <li>Steven Universe</li>
                  <li>We Bare Bears</li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Are there kid's shows on Max?"}
            cssClass={"faq-content"}
          >
            <p>
              Despite HBO’s perception as an “adult” premium channel, Max has
              quite a bit of children’s programming from Sesame Street, Cartoon
              Network, and Looney Tunes. However, Warner Bros. Discovery often
              cancels and removes kids’ animated content from its platform,
              which might disappoint your kids.
              <br />
              Some of Max’s remaining kids’ shows include these:
            </p>
            <ul>
              <li>Adventure Time</li>
              <li>The Amazing World of Gumball</li>
              <li>Batman: The Brave and the Bold</li>
              <li>Care Bears: Unlock the Magic</li>
              <li>Codename: Kids Next Door</li>
              <li>Craig of the Creek</li>
              <li>Meet the Batwheels</li>
              <li>Over the Garden Wall</li>
              <li>Steven Universe</li>
              <li>We Bare Bears</li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does Max have live sports?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Yes, Max features live sports through its new B/R Sports
                  Add-On. While the add-on will cost an extra $9.99 a month,
                  it’s free to all Max subscribers through February 2024. Live
                  sports content comes from Warner Bros. Discovery channels like
                  TBS, TNT, and truTV—including live MLB, NBA, NHL, and March
                  Madness games. The platform also streams U.S. Soccer matches
                  featuring the USMNT and USWNT.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Does Max have live sports?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, Max features live sports through its new B/R Sports Add-On.
              While the add-on will cost an extra $9.99 a month, it’s free to
              all Max subscribers through February 2024. Live sports content
              comes from Warner Bros. Discovery channels like TBS, TNT, and
              truTV—including live MLB, NBA, NHL, and March Madness games. The
              platform also streams U.S. Soccer matches featuring the USMNT and
              USWNT.
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
            Our experts employed hundreds of hours of hands-on testing with the
            service previously known as HBO Max, rating the streaming service on
            bang for your buck, reliability, features, and customer
            satisfaction. Then, we compared Max with other on-demand streaming
            services head to head to give a clearer picture of its strengths and
            weaknesses. For more information on our methodology, check out our{" "}
            <span className="link">
              <Link href={"#"}> How We Rank </Link> page.
            </span>
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>HBO Max Deals</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>What’s the Cheapest Way to Go for HBO?</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>DC Universe Shows on HBO Max</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Streaming Services</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Streaming Services for Sports</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default MaxReview;
