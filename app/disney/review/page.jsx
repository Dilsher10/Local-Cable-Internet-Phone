// import React, { useState } from "react";
import "./disney-review.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { disneyNavLinks } from "../../assets/data/navLinks/disneyNavLinks";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import disney from "../../assets/images/disney-logo.png";
import disneyboy from "../../assets/images/disney-boy.png";
import disneyicon from "../../assets/images/disney-icon.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import dotted from "../../assets/images/dotted.png";
import d1 from "../../assets/images/d-1.png";
import d2 from "../../assets/images/d-2.png";
import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import PackageTable from "../../components/package-table/PackageTable";

export const metadata = {
  title: "Disney Plus Review 2024: Plans, Pricing"
};

const DisneyReview = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: disney,
      rating: "(3.5/5)",
      starImg: star,
      desc: "Save up to $28.00/mo.",
      buttonText: "read Disney plus review",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: disneyboy,

    cardsStrip: [
      {
        subtitle: "Bundle with:",
        title: "Hulu, Live TV, Disney+, ESPN+",
        icon: disneyicon,
      },
      {
        subtitle: "Free trail:",
        title: "N/A",
        icon: disneyicon,
      },
      {
        subtitle: "Bundle pricing:",
        title: "$9.99–$89.99/mo.",
        icon: disneyicon,
      },
      {
        subtitle: "Ads:",
        title: "Optional",
        icon: disneyicon,
      },
    ],

    tableData: [
      {
        head: [
          "Plan",
          "price",
          "Channels",
          "Streams",
          "User profiles",
          "Offline viewing",
          "Offline downloads",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Disney+ Basic monthly plan",
              "$7.99/mo.",
              "4",
              "7",
              "N/A ",
              "N/A ",
              ""
            ],
            linkPath: "#",
          },
          {
            content: [
              "2.",
              "Disney+ Premium monthly plan",
              "$13.99/mo.",
              "4",
              "7",
              " 10 devices",
              "Unlimited",
              ""
            ],
            linkPath: "#",
          },
          {
            content: [
              "3.",
              "Disney+ Premium yearly plan",
              "$139.99/yr.",
              "4",
              "7",
              " 10 devices",
              "Unlimited",
              ""
            ],
            linkPath: "#",
          },
          {
            content: [
              "4.",
              "Disney+ Bundle plan",
              "$14.99–$24.99/mo.",
              "4",
              "7",
              "10 devices ",
              "Unlimited",
              ""
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc: " ",
  };

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };

  let disneyPlusPlansData = [
    {
      head: ["Plans", "Price", "Streams", "Video", "Details"],
      body: [
        {
          content: [
            "1.",
            "Disney+ Basic (with ads)",
            "$7.99/mo.",
            "4",
            "1080p, 4K, HDR10, DolbyVision",
          ],
          linkPath: "# ",
        },
        {
          content: [
            "2.",
            "Disney+ Basic (annual payment)",
            "$79.99/yr.",
            "4",
            "1080p, 4K, HDR10, DolbyVision",
          ],
          linkPath: "# ",
        },
        {
          content: [
            "3.",
            "Disney+ Premium (no ads)",
            "$13.99/mo.",
            "4",
            "1080p, 4K, HDR10, DolbyVision",
          ],
          linkPath: "# ",
        },
        {
          content: [
            "4.",
            "Disney+ Premium (annual payment)",
            "$15.99/mo.",
            "4",
            "1080p, 4K, HDR10, DolbyVision",
          ],
          linkPath: "# ",
        },
        {
          content: [
            "5.",
            "Disney+/Hulu/ESPN+ Bundle",
            "$9.99/mo.",
            "4",
            "1080p, 4K, HDR10, DolbyVision",
          ],
          linkPath: "# ",
        },
      ],
    },
  ];

  return (
    <div className="disney-review">
      {/* <SubNav links={disneyNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Disney Plus Review 2024: Plans, Pricing, And More
          </h2>
          <p className="sect-desc">
            Check out Disney Plus plans, pricing, original shows and movies, and
            more with our comprehensive review.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is Disney Plus good?</h4>
          <p>
            At $7.99 or $13.99 a month, Disney+ is a decent streaming deal even
            if you don’t have kiddies in need of digital babysitting. It has
            over 7,000 movies and TV shows that aren’t available anywhere else,
            meaning you could clear all those beat-up Disney DVDs out of the
            garage and maybe park your car (or Tauntaun) in there again.
            <br />
            Disney+ is our obvious editorial pick for best on-demand streaming
            service for kids, but there’s plenty here for adults, too. Well,
            adults who are into cartoons, lightsabers, and superheroes, that is.
            If you need more PG-13-and-above fare, you can bundle Disney+ with
            Hulu and ESPN+.
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
                  <td>Over 7,000 movies and TV shows</td>
                  <td>Content mostly PG-13 and below</td>
                </tr>
                <tr>
                  <td>4K capability</td>
                  <td>No same-day theatrical releases</td>
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
          <Link href={"#"}> Deals and promotions </Link>
          <Link href={"#"}> Plans and pricing </Link>
          <Link href={"#"}> Vs. the competition </Link>
          <Link href={"#"}> Movies and shows </Link>
          <Link href={"#"}> Specs and features </Link>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={dotted} className="mark" alt="" />
          <h4>Disney Plus deals and promotions </h4>
          <p>
            If you want to save in the long run, you can take the plunge the
            Disney+ Basic $79.99-per-year deal. You’ll save $15.89 annually.
            <br />
            Or you can up your streaming game with a bundle that includes
            Disney+, ESPN+, and (ad-supported) Hulu for only $14.99 per month.
            <br />
            You’ll save $11.98 per month on the cost of the three services
            separately. This bundle is also available with ad-free Hulu,
            ad-supported Hulu + Live TV, and ad-free Hulu + Live TV for $24.99 a
            month.
          </p>
        </div>
      </div>

      <div className="section cost">
        <div className="head">
          <h2 className="sect-heading">
            Disney Plus <span> plans, bundles, and pricing </span>
          </h2>
          <p className="sect-desc">
            Most streaming services offer a discounted annual plan, but not all
            of them let you know about it upfront, so always look into those FAQ
            sections. Disney+’s yearly $79.99 service plan can save you about
            $16.00 over monthly payments—a better choice if you plan to keep
            streaming all year.
            <br />
            Streaming TV’s favorite bundle, Disney+/Hulu/ESPN+ for $14.99 a
            month, can save you about $12.00 a month, or $144 annually. This
            bundle also applies to ad-free Hulu (which can be had for $24.99 a
            month).
          </p>
        </div>
        <PackageTable item={disneyPlusPlansData} />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section primetime-channel">
        <div className="head">
          <h2 className="sect-heading">
            Disney Plus <span> vs. the competition </span>
          </h2>
          <p className="sect-desc">
            Disney+ is in the middle of the streaming pack, cost-wise. Apple TV+
            and Paramount+ are cheaper, Max is more expensive, and Netflix
            starts at around the same price. They all have their own exclusive
            content, but Disney+’s equally-essential catalog of Marvel, Star
            Wars, and (of course) Disney properties is pretty compelling.
          </p>
        </div>
        <PackageTable item={disneyPlusPlansData} />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section cost">
        <div className="head">
          <h2 className="sect-heading">
            Movies and shows <span> on Disney Plus </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>On-demand movies and shows</h4>
          <p className="after-heading">
            Did we say Disney+’s content is compelling? More like staggering:
            Disney+ carries almost every Disney classic and recent favorite,
            from 1940’s Fantasia to 2021’s Luca. We say “almost” every classic
            because there are a few gaps in the Disney+ collection, like the
            2007 live-action fairytale Enchanted and 1970 farce The Boatniks,
            among hundreds of others. Don’t even ask about 1946’s Song of the
            South.
            <br />
            Still, with thousands of movies and shows to choose from, it’s
            unlikely you’re going to be mad about not finding Lindsay Lohan’s
            Herbie: Fully Loaded on Disney+ (it’s on Max, fyi).
          </p>
          <br />
          <h4>Movies on Disney+ (partial list)</h4>
          <ul className="channel-list">
            <li>Aladdin</li>
            <li>Avatar</li>
            <li>Avengers: Endgame</li>
            <li>Black Panther</li>
            <li>Black Widow</li>
            <li>Blank Check</li>
            <li>Brave</li>
            <li>Cars</li>
            <li>Coco</li>
            <li>Flubber</li>
            <li>Freaky Friday</li>
            <li>Hamilton</li>
            <li>Hocus Pocus</li>
            <li>Incredibles</li>
            <li>Jungle Cruise</li>
            <li>Mulan</li>
            <li>Muppets Most Wanted</li>
            <li>Pirates of the Caribbean</li>
            <li>Rocketeer</li>
            <li>Up</li>
            <li>Agent Carter</li>
            <li>Andi Mack</li>
            <li>Boy Meets World</li>
            <li>Doug</li>
            <li>DuckTales</li>
            <li>Even Stevens</li>
            <li>Gravity Falls</li>
            <li>Hannah Montana</li>
            <li>Kim Possible</li>
            <li>Lizzie McGuire</li>
            <li>Muppet Show</li>
            <li>Once Upon a Time</li>
            <li>Phineas & Ferb</li>
            <li>Running Wild with Bear Grylls</li>
            <li>Simpsons</li>
            <li>Spider-Man</li>
            <li>Star Wars: Rebels</li>
            <li>Suite Life of Zack & Cody</li>
            <li>That’s So Raven</li>
            <li>Wizards of Waverly Place</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Disney Plus original shows and movies</h4>
          <p className="after-heading">
            Disney+ made a major splash right out of the gate with its original
            The Mandalorian Star Wars series that gifted the world with Baby
            Yoda (sorry, sorry—“Grogu”). After that, Marvel took over the buzz
            with WandaVision, The Falcon and the Winter Soldier, and Loki.
            <br />
            It’s not all about Star Wars and Marvel, though: Disney+ has also
            stepped up with more down-to-earth fare like Doogie Kamealoha, M.D.
            (an update on Doogie Houser from the ‘80s), Big Shot (a sports
            comedy starring John Stamos), and Just Beyond (a Twilight Zone for
            tweens).
            <br />
            On the movie front, you probably know about the animated Pixar
            offerings Soul and Luca, as well as Beyonce’s Black is King and
            Billie Eilish’s Happier Than Ever. Disney+ originals may be
            family-friendly, but they’re far from predictable.
          </p>
          <br />
          <h4>Original shows and movies on Disney Plus (partial list)</h4>
          <ul className="channel-list">
            <li>Andor</li>
            <li>Big Shot</li>
            <li>Black is King</li>
            <li>Doogie Kamealoha, M.D.</li>
            <li>Forky Asks a Question</li>
            <li>Godmothered</li>
            <li>Hawkeye</li>
            <li>High School Musical: The Musical: The Series</li>
            <li>Loki</li>
            <li>Luca</li>
            <li>The Mandalorian</li>
            <li>Ms. Marvel</li>
            <li>The Mysterious Benedict Society</li>
            <li>Obi-Wan Kenobi</li>
            <li>Soul</li>
            <li>Star Wars: The Bad Batch</li>
            <li>Taylor Swift: Folklore</li>
            <li>Turner & Hooch</li>
            <li>WandaVision</li>
            <li>What If . . . ?</li>
          </ul>
        </div>
      </div>

      <div className="section primetime-channel">
        <div className="head">
          <h2 className="sect-heading">
            Disney Plus <span> specs and features </span>
          </h2>
          <p className="sect-desc">
            Disney+ allows for up to seven personal profiles and gives you
            dozens of avatars from Disney, Marvel, Star Wars, Pixar, National
            Geographic, The Muppets, The Simpsons, and other universes to choose
            from. We’re partial to Dug the Dog from Up.
            <br />
            If you want to keep the little kids away from the big kids’ content,
            Disney+ also features customizable, PIN-locked parental controls for
            each profile. PG-13 is as intense as the streaming service’s content
            gets, but it’s a nice option to have.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Multiple streams</h4>
          <p className="after-heading">
            Four simultaneous streams is a minor upgrade from the three most
            streaming services give you, for sure. If you have more housemates
            to keep entertained, Disney+ also offers unlimited offline downloads
            for up to 10 devices as a workaround. Bravo, Mickey!
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Service</th>
                  <th>Streams</th>
                  <th>Offline downloads</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1. </td>
                  <td>Disney+ </td>
                  <td>4 </td>
                  <td> Unlimited (Premium only)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Supported devices</h4>
          <p className="after-heading">
            Disney+ is compatible with every major streaming device there is,
            with the exception of Nintendo products. We’ve seen few streaming
            services that cover this many bases, so chalk up another win for
            Disney+.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Device</th>
                  <th>Disney+</th>
                  <th>Device </th>
                  <th>Disney+</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1. </td>
                  <td>Disney+ </td>
                  <td>4 </td>
                  <td> Unlimited (Premium only)</td>
                  <td> Unlimited (Premium only)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Video and audio quality</h4>
          <p className="after-heading">
            Disney+ streams in 1080p HD, with some content available in 4K Ultra
            HD, HDR10, and Dolby Vision. Many older Disney movies and shows have
            been remastered to take advantage of Disney+’s eye-popping visual
            capabilities, but don’t expect the first few seasons of The Simpsons
            to look as sleek as The Mandalorian.
          </p>
          <br />
          <Image src={d1} alt="" />
          <br />
          <p className="after-heading">
            Disney+’s audio output is standard 2.0 stereo or Dolby Digital 5.1
            surround sound, depending on the movie or show. Some newer titles
            feature Dolby Atmos audio, if your system can handle it.
          </p>
          <br />
          <Image src={d2} alt="" />
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            What’s the <span> Is Disney Plus worth it?</span>
          </h2>
          <p className="sect-desc">
            Disney, Marvel, Star Wars, The Simpsons, and The Muppets? That’s a
            pop-cultural Mount Rushmore. If you have children in the household,
            we think Disney+ is a must-have streaming service—but we wouldn’t
            limit it to just the kids (or kids at heart). The phrase “something
            for the whole family” gets tossed around a lot, but Disney+ fits
            that bill almost perfectly for just $7.99 or $13.99 a month.
            <br />
            The only real limitation of Disney+ is its limited adult content
            above the PG-13 level (though the R-rated Deadpool and Logan have
            recently made the cut). But, if you need more grown-up viewing in
            your streaming life, there’s always the Disney+/Hulu/ESPN+ bundle
            starting at $14.99 a month. As with Disneyland and its other theme
            parks, Disney’s mission is to leave no customer unsatisfied—or cash
            left on the table.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> get Disney+</Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>Disney Plus </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How much does Disney+ cost?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Disney+ Basic (with ads) costs $7.99 a month or $79.99 a year.
                  Disney+ Premium (no ads) costs $13.99 a month or $139.99 a
                  year.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" How much does Disney+ cost?"}
            cssClass={"faq-content"}
          >
            <p>
              Disney+ Basic (with ads) costs $7.99 a month or $79.99 a year.
              Disney+ Premium (no ads) costs $13.99 a month or $139.99 a year.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does Disney+ stream in 4K?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Disney+ streams in 1080p HD (Blu-ray quality), with some
                  content available in 4K Ultra HD, HDR10, and Dolby Vision. To
                  get the full, clear picture, you’ll need a TV or device that
                  supports these video formats.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does Disney+ stream in 4K?"}
            cssClass={"faq-content"}
          >
            <p>
              Disney+ streams in 1080p HD (Blu-ray quality), with some content
              available in 4K Ultra HD, HDR10, and Dolby Vision. To get the
              full, clear picture, you’ll need a TV or device that supports
              these video formats.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does Disney+ offer same-day
                movie premieres?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Disney has released some movies, like Black Widow, on Disney+
                  the same day they arrived in physical theaters for an extra
                  fee of $30. But, in late 2021, Disney has gone back to a
                  theater-first model, with new movies being made available to
                  stream on Disney+ (with no extra fee) 30 to 45 days after
                  theatrical release.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does Disney+ offer same-day movie premieres?"}
            cssClass={"faq-content"}
          >
            <p>
              Disney has released some movies, like Black Widow, on Disney+ the
              same day they arrived in physical theaters for an extra fee of
              $30. But, in late 2021, Disney has gone back to a theater-first
              model, with new movies being made available to stream on Disney+
              (with no extra fee) 30 to 45 days after theatrical release.
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
            Our TV experts spent many magical hours in the land of Disney+,
            rating the service on value, reliability, features, and customer
            satisfaction. Then we matched it up against other on-demand
            streaming TV services head to head to give a clearer picture of its
            strengths and weaknesses. For more information on our methodology,
            check out our{" "}
            <span className="link">
              <Link href={"#"}>How We Rank</Link>
            </span>{" "}
            page.
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}> Best Movies on Disney Plus</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Disney Plus Not Working</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Streaming TV Services</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Hulu Deals</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default DisneyReview;
