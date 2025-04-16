// import React, { useState } from "react";
import "./amazon-prime-video-review.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import amazonprimeboy from "../../assets/images/amazonprime-boy.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import amazonprime from "../../assets/images/amazonprime.png";
import amazonprimeicon from "../../assets/images/amazonprime-icon.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import dotted from "../../assets/images/dotted.png";
import primeone from "../../assets/images/primeone.png";
import primetwo from "../../assets/images/primetwo.png";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Amazon Prime Video"
};

const AmazonPrimeVideo = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: amazonprime,
      rating: "(3.5/5)",
      starImg: star,
      desc: "Best value (on-demand streaming)",
      buttonText: "compare to other services",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: amazonprimeboy,

    cardsStrip: [
      {
        subtitle: "Annual price: ",
        title: "$139.00/yr. (w/ Amazon Prime membership) ",
        icon: amazonprimeicon,
      },
      {
        subtitle: "Monthly price: ",
        title: " $8.99–$14.99/mo. ",
        icon: amazonprimeicon,
      },
      {
        subtitle: "Free trial: ",
        title: "30 days ",
        icon: amazonprimeicon,
      },
      {
        subtitle: "On-demand library: ",
        title: " 25,000+ movies and TV shows ",
        icon: amazonprimeicon,
      },
    ],

    tableData: [
      {
        head: ["Plan", " price", "Video", "Streams", "Details"],

        body: [
          {
            content: [
              "1.",
              "Prime Video w/ Amazon Prime membership",
              "$14.99/mo. or $139.00/yr.",
              "1080p, 4K",
              "3",
            ],
            linkPath: "#",
          },
          {
            content: ["2.", "Prime Video", "	$8.99/mo.", "1080p, 4K", "3"],
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
      head: ["Plan", " price", "Video", "Streams", "Details"],

      body: [
        {
          content: [
            "1.",
            "Prime Video w/ Amazon Prime membership",
            "$14.99/mo. or $139.00/yr.",
            "1080p, 4K",
            "3",
          ],
          linkPath: "#",
        },
        {
          content: ["2.", "Prime Video", "	$8.99/mo.", "1080p, 4K", "3"],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataCompetition = [
    {
      head: ["Service", "Price", "Video", "Streams", "Details"],
      body: [
        {
          content: [
            "1.",
            "Prime Video",
            "$8.99–$14.99/mo. or $139.00/yr.",
            "1080p, 4K",
            "3",
          ],
          linkPath: "# ",
        },
        {
          content: ["2.", "Netflix", "$6.99–$22.99/mo.", "1080p, 4K", "2–4"],
          linkPath: "# ",
        },
        {
          content: ["3.", "Hulu", "$7.99–$17.99/mo.", "1080p, 4K", "2"],
          linkPath: "# ",
        },
        {
          content: [
            "4.",
            "Disney+",
            "$7.99–$13.99/mo. or $139.99/yr.",
            "1080p, 4K",
            "4",
          ],
          linkPath: "# ",
        },
        {
          content: [
            "5.",
            "Max",
            "$9.99–$19.99/mo. or $99.99–$199.99/yr.",
            "1080p, 4K",
            "2–4",
          ],
          linkPath: "# ",
        },
        {
          content: ["6.", "Apple TV+", "$6.99/mo.", "1080p, 4K", "3"],
          linkPath: "# ",
        },
        {
          content: [
            "7.",
            "Paramount+",
            "$5.99–$11.99/mo. or $59.99–$119.99/yr.",
            "1080p, 4K",
            "3",
          ],
          linkPath: "# ",
        },
        {
          content: [
            "8.",
            "Peacock",
            "$5.99–$11.99/mo. or $59.99–$119.99/yr.",
            "1080p, 4K",
            "6",
          ],
          linkPath: "# ",
        },
        {
          content: ["9.", "Discovery+", "$4.99–$8.99/mo.", "1080p, 4K", "4"],
          linkPath: "# ",
        },
      ],
    },
  ];

  return (
    <div className="amazon-prime-video-review">
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Amazon Prime Video Review 2024: Prices, Plans, And More
          </h2>
          <p className="sect-desc">
            We've spent thousands of hours watching shows and movies on Prime
            Video, and we think it's a good value. Read on to see if it's right
            for you.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />

          <h4>Is Amazon Prime Video good?</h4>
          <p>
            Prime Video is the best perk of being an Amazon Prime member. We see
            you, AmazonFresh and two-day shipping, but access to 25,000 movies
            and TV shows is just tastier for that $14.99 a month. You can even
            get ad-free access to its entire catalog for a smaller bill of $8.99
            a month, although you won’t get any of those other Prime perks.{" "}
            <br />
            We call good on Prime Video, to the point where we named it
            our favorite on-demand streaming service going into 2024. <br />
            Prime Video also offers live sports programming (like NFL, NBA, and
            WNBA coverage), and it has a growing slate of in-house original TV
            shows and movies (like award winners The Marvelous Mrs. Maisel and
            the mega-budget The Lord of the Rings: The Rings of Power). <br />
            Prime Video’s small-but-growing stable of original content can’t
            compete with Netflix’s sheer quantity of shows and movies. It also
            doesn’t have the immediacy of Hulu, which streams many TV shows the
            day after they’re broadcast elsewhere. <br />
            Still, there’s plenty to love about Prime Video, especially if
            you’re a movie buff who’s a sucker for ’80s marathons (aren’t we
            all?).
          </p>
          <h4>Amazon Prime Video pros and cons</h4>
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
                  <td> Included with Amazon Prime membership</td>
                  <td> Limited original content</td>
                </tr>
                <tr>
                  <td> Over 25,000 movies and TV shows</td>
                  <td> Less essential as a standalone service</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Need better internet speeds for streaming?"}
        desc={
          "Enter your zip code to check out better speeds or prices available from internet providers in your area."
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
          <Link href={"#"}> Free trials and deals </Link>
          <Link href={"#"}> Plans and pricing </Link>
          <Link href={"#"}>Amazon Prime Video vs. the competition </Link>
          <Link href={"#"}>Shows and movies </Link>
          <Link href={"#"}> Specs and features </Link>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={dotted} className="mark" alt="" />
          <h4>Amazon Prime Video free trials and deals </h4>
          <p>
            Amazon Prime gives you a 30-day free membership trial, which means
            you also have a month to try out Prime Video. If you’re interested
            in only Prime Video, the same 30-day trial also applies.
          </p>
        </div>
      </div>

      <div className="section cost">
        <div className="head">
          <h2 className="sect-heading">
            Amazon Prime Video <span> plans and pricing </span>
          </h2>
          <p className="sect-desc">
            Even though the price recently went up, we still prefer our Prime
            Video included with an Amazon Prime membership. The standalone Prime
            Video subscription does give you access to plenty of entertainment,
            but the extra perks of the Amazon Prime membership are worth the
            price in our estimation. Basically, we’re suckers for late-night
            shopping and free shipping—we’ll admit it.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Plus $72.99/mo recurring for YouTube TV. Compatible device and
          internet connection required. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section competition">
        <div className="head">
          <h2 className="sect-heading">
            Amazon Prime Video <span> vs. the competition </span>
          </h2>
          <p className="sect-desc">
            Prime Video falls somewhere in the middle of the competition in
            price and content—it doesn’t have the largest collection of
            originals, but it’s not the most expensive service either. But can
            any of the others also deliver a Ninja air fryer to your door within
            48 hours? Amazon Prime membership combined with Prime Video is an
            all-inclusive entertainment package that’s tough to beat.
          </p>
        </div>
        <PackageTable item={packageTableDataCompetition} />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section movies">
        <div className="head">
          <h2 className="sect-heading">
            Amazon Prime Video <span> TV shows and movies </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>TV shows and movies</h4>
          <p className="after-heading">
            Prime Video carries three kinds of content: free with ads, included
            with Prime, and video on demand (VOD, or titles you can
            rent/purchase). We have a few recommendations in our What to Watch
            on Prime Video guide. <br />
            Free titles are technically available through Prime’s sister
            service, Freevee. Freevee has its own app for non-subscribers, but
            also lives in Prime Video’s ecosystem. Unfortunately, Prime’s
            interface blends all three types of content together so it can be
            hard for newcomers to tell whether they’re getting something with
            ads, without ads, or for an additional fee. <br />
            Of all Prime Video’s categories, the most popular is “included with
            Prime.” This means you won’t have to pay extra to watch a TV series
            or movie (it’s also indicated by a blue “Prime” tab on the preview
            image). <br />
            Additional charge shows and movies from the Prime Video rental store
            are labeled with a yellow “$” tab and can range from $2 to $20 per
            TV episode or full movie. Most newly released videos on demand fall
            under this category, with Amazon-owned movies (like Tom Clancy’s
            Without Remorse) excluded.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4> Original TV shows and movies</h4>
          <p className="after-heading">
            Prime Video’s original lineup of TV series and movies isn’t quite as
            fat as Netflix’s or Hulu’s, but it’s growing steadily in quantity
            and critical acclaim. Shows like The Marvelous Mrs. Maisel, The
            Boys, and Good Omens, and movies like Sound of Metal, I’m Your
            Woman, and Coming 2 America prove Prime Video can go toe-to-toe
            creatively with the other services.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4> Channel add-ons</h4>
          <p className="after-heading">
            There are over 100 channel add-ons available through Prime Video,
            ranging from familiar premiums like SHOWTIME, STARZ, and EPIX to
            niche channels like BBC Select, PBS Masterpiece, and Hallmark Movies
            Now.
            <br />
            Some add-on channels, such as the martial-arts centric Hi-Yah!, go
            for as little as $2.99 a month, while SHOWTIME costs the same $10.99
            a month as it does on cable or satellite. Read about all the options
            in our Amazon Prime Video Add-Ons guide.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4> Live sports</h4>
          <p className="after-heading">
            Prime Video is now the streaming home to the NFL’s Thursday Night
            Football, which is included in the basic subscription—again, always
            look for the blue Prime tab. Off the gridiron and into the sand, AVP
            pro beach volleyball games are also included with Prime Video.{" "}
            <br />
            You can also watch live MLB baseball (MLB.TV), NBA basketball (NBA
            TV, NBA League Pass), CBS Sports (Paramount+), and Spanish-language
            soccer coverage (ViX Premium) through Prime Video Channels for
            additional monthly fees.
          </p>
        </div>
      </div>

      <div className="section features">
        <div className="head">
          <h2 className="sect-heading">
            Amazon Prime Video <span> specs and features </span>
          </h2>
          <p className="sect-desc">
            Prime Video’s on-screen guide is comparable to other on-demand
            streaming services like Netflix and Hulu, but one of our favorite
            Prime Video features is its exclusive X-Ray function, which displays
            information about the movie or TV show you’re currently watching. It
            identifies actors in any given scene, provides trivia and soundtrack
            information, and more with a single remote click. It’s handy for
            those “I know that guy—what’s he been in?” moments.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Amazon Prime Video simultaneous streams</h4>
          <p className="after-heading">
            Prime Video allows up to three simultaneous streams, which is pretty
            standard with most streaming services. It also offers offline
            downloads for unconnected viewing, allowing up to 25 downloads per
            Prime Video account with 30 days to watch.
            <br />
            You can also create up to five user profiles within Prime Video and
            set up parental controls based on content ratings with a PIN number.
            Even though it’s a cartoon, you probably don’t want the kiddies
            watching Prime Video’s ultra-violent superhero original Invincible.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th> Service</th>
                  <th>streams</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1. </td>
                  <td> Prime Video</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Amazon Prime Video compatible devices </h4>
          <p className="after-heading">
            With the exception of Nintendo devices, your streaming gadget of
            choice is likely compatible with Prime Video. Amazon’s Fire TV
            devices work exceptionally well with Prime Video, as it’s literally
            what they were created to stream. Looks like corporate synergy pays
            off.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Amazon Prime Video video and audio quality</h4>
          <p className="after-heading">
            Prime Video streams at 1080p HD, with some original TV shows and
            movies in 4K, HDR, HDR10+, and Dolby Vision. It’s not consistent
            from show to show, though: Prime Video’s hit Bosch is available in
            HDR10, HDR10+, and Dolby Vision, while Carnival Row is available in
            HDR10, HDR10+, and Dolby Atmos.
          </p>
          <Image src={primeone} alt="" />
          <p>
            As long as your internet connection is solid and fast, Amazon Prime
            Video’s picture quality is reliably pristine. Prime Video recommends
            at least 5 Mbps to get that quality; we recommend 25 Mbps at minimum
            for buffer-free streaming.
          </p>
          <Image src={primetwo} alt="" />
          <p>
            Audio-wise, Prime Video supports Dolby 5.1 digital surround sound
            for most of its original movies and TV shows, and Dolby Atmos on a
            small portion of content. For the majority of programming on Prime
            Video, however, sound output is the standard 2.0 stereo offered by
            all other streaming services.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Amazon Prime Video worth it?</span>
          </h2>
          <p className="sect-desc">
            If you’re an Amazon Prime member, Prime Video is an excellent
            streaming addition to your app lineup—if you aren’t already using
            it, why not? That’s like passing on a free dessert with your entrée,
            or at least those “extra” fries in the bottom of the takeout bag.{" "}
            <br />
            For non-Prime members, the standalone $8.99 a month service might
            not be quite as essential as a Netflix or Hulu subscription. Prime
            Video’s original series and movies are high quality but few, and you
            can get its premium channels and rental movies for the same prices
            elsewhere.
            <br />
            But, now that Prime Video is the exclusive streaming home to NFL
            Thursday Night Football and the epic Lord of the Rings: The Rings of
            Power original series, we think the streamer has become more
            essential than it was previously.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> get Amazon Prime Video</Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Amazon Prime Video </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Is Prime Video included
                with Amazon Prime membership?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Access to Prime Video is included at no extra charge with an
                  Amazon Prime membership.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Is Prime Video included with Amazon Prime membership?"}
            cssClass={"faq-content"}
          >
            <p>
              Access to Prime Video is included at no extra charge with an
              Amazon Prime membership.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How much does Amazon Prime
                Video cost?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Access to Prime Video is included with Amazon Prime
                  membership, which costs $14.99 a month or $139.00 a year. For
                  non-Prime members, Prime Video is available as a standalone
                  streaming service for $8.99 a month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" How much does Amazon Prime Video cost?"}
            cssClass={"faq-content"}
          >
            <p>
              Access to Prime Video is included with Amazon Prime membership,
              which costs $14.99 a month or $139.00 a year. For non-Prime
              members, Prime Video is available as a standalone streaming
              service for $8.99 a month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How much do Amazon Prime
                Video movie rentals cost?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Movie rentals through Prime Video can range from as low as
                  $2.99 for older releases to as much as $19.99 for recent
                  theatrical releases.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How much do Amazon Prime Video movie rentals cost?"}
            cssClass={"faq-content"}
          >
            <p>
              Movie rentals through Prime Video can range from as low as $2.99
              for older releases to as much as $19.99 for recent theatrical
              releases.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What is the difference
                between Amazon Prime and Amazon Prime membership?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Amazon Prime membership is a service provided by Amazon.com.
                  With it, subscribers receive free, standard, or two-day
                  delivery of items purchased on Amazon.com, as well as full
                  access to Prime Video’s thousands of TV shows and movies.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={
              " What is the difference between Amazon Prime and Amazon Prime membership?"
            }
            cssClass={"faq-content"}
          >
            <p>
              Amazon Prime membership is a service provided by Amazon.com. With
              it, subscribers receive free, standard, or two-day delivery of
              items purchased on Amazon.com, as well as full access to Prime
              Video’s thousands of TV shows and movies.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> What is included with
                Amazon Prime Video?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Amazon Prime Video features over 25,000 movies and TV shows,
                  including exclusive originals, live sports, and film premieres
                  for $8.99 a month, or $14.99 included with an Amazon Prime
                  membership. Prime Video streams in 4K Ultra HD, High Dynamic
                  Range (HDR), and allows mobile downloads for offline viewing
                  of some content.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" What is included with Amazon Prime Video?"}
            cssClass={"faq-content"}
          >
            <p>
              Amazon Prime Video features over 25,000 movies and TV shows,
              including exclusive originals, live sports, and film premieres for
              $8.99 a month, or $14.99 included with an Amazon Prime membership.
              Prime Video streams in 4K Ultra HD, High Dynamic Range (HDR), and
              allows mobile downloads for offline viewing of some content.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> Where is Amazon Prime Video
                available?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  Amazon Prime Video is available to most of the world, with the
                  exceptions of Mainland China, Iran, North Korea, and Syria.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" Where is Amazon Prime Video available?"}
            cssClass={"faq-content"}
          >
            <p>
              Amazon Prime Video is available to most of the world, with the
              exceptions of Mainland China, Iran, North Korea, and Syria.
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
            Our experts employed 1000s of hours of hands-on testing with Prime
            Video, rating the streaming service on bang for your buck,
            reliability, features, and customer satisfaction. Then we matched up
            Prime Video with other on-demand streaming services head to head to
            give a clearer picture of its strengths and weaknesses. For more
            information on our methodology, check out Our
            <span className="link">
              <Link href={"/"}>  How We Rank page.</Link>
            </span>
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Amazon Prime Video vs. Netflix</Link>
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

export default AmazonPrimeVideo;