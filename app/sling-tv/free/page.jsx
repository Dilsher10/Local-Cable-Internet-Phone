// import React, { useState } from "react";
import "./sling-tv-free.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { slingtvNavLinks } from "../../assets/data/navLinks/slingtvNavLinks";
import slingbro from "../../assets/images/sling-free-bro.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import sling from "../../assets/images/sling.png";
import slingicon from "../../assets/images/sling-icon.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Sling Freestream"
};

const SlingTvFree = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: sling,
      rating: "(4.0/5)",
      starImg: star,
      desc: "Good free TV option",
      buttonText: "read full review",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: slingbro,

    cardsStrip: [
      {
        subtitle: "Service Provider:",
        title: "Sling Freestream",
        icon: slingicon,
      },
      {
        subtitle: "Channels:",
        title: "400+",
        icon: slingicon,
      },
      {
        subtitle: "Price:",
        title: "Free",
        icon: slingicon,
      },
      {
        subtitle: "On-demand library:",
        title: "5,000+ titles",
        icon: slingicon,
      },
    ],

    tableData: [
      {
        head: ["Plan", "price", "Channels", "Streams", "Cloud DVR", "Details"],

        body: [
          {
            content: ["1.", "Sling Orange", "$40/mo.", "30+", "1", "50 hrs."],
            linkPath: "#",
          },
          {
            content: ["2.", "Sling Blue", "$40/mo.", "40+", "3", "50 hrs."],
            linkPath: "#",
          },
          {
            content: [
              "3.",
              "Sling Orange + Blue",
              "$50/mo.",
              "45+",
              "4",
              "50 hrs.",
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
  return (
    <div className="sling-tv-free">
      {/* <SubNav links={slingtvNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Sling Freestream: Is Sling TV Really free?
          </h2>
          <p className="sect-desc">
            Sling Freestream is Sling TV’s ad-supported, no-cost tier—but is it
            any good? The CableTV.com experts dive in.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />

          <h4>What is Sling Freestream?</h4>
          <p>
            Sling Freestream is Sling TV’s answer to ad-supported free streaming
            services like Pluto TV, Tubi, and Xumo. It features a mix of live
            and on-demand content, including TV shows, movies, kids, news, and
            sports programming. It’s also completely free—you don’t even have to
            provide a credit card number or login info.
            <br />
            As with the other free streamers, the selection on Sling Freestream
            is a rando assortment of older movies and TV shows with unskippable
            commercial breaks. You’re not going to find the latest Marvel flicks
            or cable hits like Mayans for free, but sci-fi cheese like Mega
            Snake and all 110 episodes of ’90s biker drama Renegade? Sling
            Freestream has ’em.
          </p>
          <h4>How to watch Sling Freestream</h4>
          <p>
            You can access Sling Freestream by going to sling.com on a web
            browser (Chrome, Edge, or Safari only) or downloading the Sling TV
            app to your streaming device (like Amazon Fire TV, Android, LG TV,
            Roku, Samsung TV, or Xbox). Select “Explore Free Shows,” and you’ll
            be taken to a My TV page displaying rows upon rows of free TV shows
            and movies. By selecting the Guide tab, you’ll see a grid of “live”
            channels (with the exception of some news channels, the shows and
            movies are on a perpetual loop). <br />
            You can also select Sports and On Demand from the tabs menu, where
            you’ll be greeted with many a TV and movie labeled “Subscribe,”
            meaning you’d have to upgrade to a paid Sling TV plan to actually
            watch them. Sling Free is consistent with this upsell tactic. <br />
            Under the Rentals tab, you can pay to watch more recent movies than
            the Sling Free selection offers. The average rental fee is around $4
            per movie, though some just-released studio films go for $20 (just
            wait a few weeks—the price will come down). Rentals don’t feature
            ads, BTW.
          </p>
        </div>
      </div>

      <CTA
        heading={"You’ll need a fast internet plan to stream all that TV"}
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
          <Link href={"#"}>How to watch Sling Freestream </Link>
          <Link href={"#"}>Sling Freestream channels by category </Link>
        </div>
      </div>

      <div className="section freestream">
        <div className="head">
          <h2 className="sect-heading">
            Sling <span> Freestream channels </span>
          </h2>
          <p className="sect-desc">
            Sling Freestream features over 400 channels, which are roughly a
            50/50 split of live-looping shows and on-demand-only content (most
            of the live channels also have on-demand movies and TV shows). Some
            of the channels—which could be more accurately called content
            hubs—are familiar, like AMC and Discovery. But you’ve probably never
            heard of most of them, like Choppertown or Kabillion.
            <br />
            Between those channels, Sling Freestream streams over 5,000 TV shows
            and movies. You won’t see everything from cable network channels,
            though: AMC Presents is mostly reruns of The Walking Dead and Fear
            the Walking Dead but no Better Call Saul, and SHOWTIME serves up
            only a single episode of hits like Billions and Black Monday. Hey,
            you get what you pay for.
            <br />
            These are the channels included with Sling Freestream:
          </p>
        </div>

        <div className="three-grid">
          <div className="package-table-container channels">
            <h4>Comedy, drama, and reality TV shows </h4>
            <br />
            <ul>
              <li>A&E (on demand)</li>
              <li>AMC+ (on demand)</li>
              <li>AMC Presents (live)</li>
              <li>BET+ (on demand)</li>
              <li>Bon Appetit (live, on demand)</li>
              <li>Buzzr (live, on demand)</li>
              <li>Choppertown (live, on demand)</li>
              <li>CMT (on demand)</li>
              <li>Comedy Central (on demand)</li>
              <li>Curiosity Stream (on demand)</li>
              <li>DangerTV (live, on demand)</li>
              <li>The Design Network (live, on demand)</li>
              <li>Discovery (on demand)</li>
              <li>DogTV (on demand)</li>
              <li>Dust (live, on demand)</li>
              <li>GustoTV (live, on demand)</li>
              <li>HISTORY (on demand)</li>
              <li>IFC (live)</li>
              <li>Jimmy Kimmel Live (on demand)</li>
              <li>Lifetime (on demand)</li>
              <li>So Yummy! (live, on demand)</li>
              <li>Tastemade (live, on demand)</li>
              <li>TBS (on demand)</li>
              <li>TNT (on demand)</li>
              <li>truTV (on demand)</li>
              <li>WEtv (live)</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Comedy, drama, and cult movies </h4>
            <br />
            <ul>
              <li>AMC Rush (live)</li>
              <li>The Archive (live, on demand)</li>
              <li>CONtv (on demand)</li>
              <li>Dove Channel (on demand)</li>
              <li>Favesome (live, on demand)</li>
              <li>The Film Detective (live, on demand)</li>
              <li>FilmRise (live, on demand)</li>
              <li>FlixFling (on demand)</li>
              <li>FlixFling Now (live, on demand)</li>
              <li>Glewed TV (live, on demand)</li>
              <li>Gravitas Movies (on demand)</li>
              <li>Hallmark Movies Now (on demand)</li>
              <li>HereTV (on demand)</li>
              <li>Hi-Yah! (live, on demand)</li>
              <li>IFC Films Picks (live, on demand)</li>
              <li>Lone Star (live, on demand)</li>
              <li>Magnolia Pictures (on demand)</li>
              <li>Maverick Black Cinema (on demand)</li>
              <li>Pac Films (on demand)</li>
              <li>Shout! Factory TV (live, on demand)</li>
              <li>UP Faith & Family (on demand)</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Sports, fitness, and outdoors </h4>
            <br />
            <ul>
              <li>beIN Sports Extra (live, on demand)</li>
              <li>Barstool Sports (live, on demand)</li>
              <li>Canela Deportes (live, on demand)</li>
              <li>Draft Kings Basketball (live, on demand)</li>
              <li>ESPN OnDemand (on demand)</li>
              <li>eSports Network (live, on demand)</li>
              <li>ESTV (live, on demand)</li>
              <li>Grokker (on demand)</li>
              <li>Grvty (live, on demand)</li>
              <li>NBA OnDemand (on demand)</li>
              <li>Outside TV+ (live, on demand)</li>
              <li>Outside TV Features (on demand)</li>
              <li>PlayersTV (live, on demand)</li>
              <li>PokerGO (live, on demand)</li>
              <li>Sports Grid (live, on demand)</li>
              <li>Willow Xtra (live, on demand)</li>
              <li>Zona TUDN (live, on demand)</li>
            </ul>
          </div>
        </div>
        <div className="two-grid">
          <div className="package-table-container channels">
            <h4>News, entertainment, and information </h4>
            <br />
            <ul>
              <li>ABC News Live (live, on demand)</li>
              <li>Big World (live, on demand)</li>
              <li>Bloomberg Quicktake (on demand)</li>
              <li>CBSN (live, on demand)</li>
              <li>FS TV (live, on demand)</li>
              <li>Hollywire (live, on demand)</li>
              <li>Law & Crime Rewind (live, on demand)</li>
              <li>Sling Central (on demand)</li>
              <li>TD Ameritrade Network (live, on demand)</li>
              <li>True Royalty (on demand)</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Kids and family </h4>
            <br />
            <ul>
              <li>Cartoon Network/Adult Swim (on demand)</li>
              <li>DuckTV (on demand)</li>
              <li>Hopster (on demand)</li>
              <li>Kabillion (on demand)</li>
              <li>Kartoon Channel (on demand)</li>
              <li>Lion Mountain TV (on demand)</li>
              <li>Pocket Watch (live, on demand)</li>
              <li>Ryan & Friends (live, on demand)</li>
              <li>Zone TV (on demand)</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Music and karaoke </h4>
            <br />
            <ul>
              <li>Country Network Plus (on demand)</li>
              <li>Latido Music (live, on demand)</li>
              <li>Live X Live (live, on demand)</li>
              <li>Stingray Karaoke (on demand)</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Premium channels </h4>
            <br />
            <ul>
              <li>EPIX (on demand)</li>
              <li>SHOWTIME (on demand)</li>
              <li>STARZ (on demand)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Sling Freestream worth it?</span>
          </h2>
          <p className="sect-desc">
            Free is free, can’t argue with that. As long as you don’t set your
            expectations too high, Sling Freestream is decent gratis
            entertainment.
            <br />
            Just know that you’ll be frequently nudged to upgrade to a paid
            Sling TV plan—Sling Freestream is kind of like an open-ended free
            trial in place of the actual free trial period Sling TV occasionally
            offers.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>Get started with Sling</h4>
          <p className="after-heading">
            Start watching Sling Freestream today. Or, if you are curious what
            you are missing out on with their paid plans, check out all that
            Sling TV has to offer in our comprehensive Sling TV review.
          </p>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Sling Free </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Is Sling Freestream a trial
                period for Sling TV?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Sling Freestream does not refer to a free trial period to try
                  out Sling TV. In fact, Sling TV only occasionally offers free
                  trials. Sling Freestream is an ad-supported, free version of
                  Sling TV that offers over 300 channels of live and on-demand
                  content, with over 5,000 movies and TV shows.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Is Sling Freestream a trial period for Sling TV?"}
            cssClass={"faq-content"}
          >
            <p>
              Sling Freestream does not refer to a free trial period to try out
              Sling TV. In fact, Sling TV only occasionally offers free trials.
              Sling Freestream is an ad-supported, free version of Sling TV that
              offers over 300 channels of live and on-demand content, with over
              5,000 movies and TV shows.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What channels are on Sling
                Freestream?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Channels on Sling Freestream include AMC, IFC, Discovery, ABC
                  News Live, CBSN, SHOWTIME, and dozens of less familiar
                  channels. Some channels stream only select content, while
                  others include full seasons of shows (FilmRise has all 84
                  episodes of Kitchen Nightmares, for instance).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" What channels are on Sling Freestream?"}
            cssClass={"faq-content"}
          >
            <p>
              Channels on Sling Freestream include AMC, IFC, Discovery, ABC News
              Live, CBSN, SHOWTIME, and dozens of less familiar channels. Some
              channels stream only select content, while others include full
              seasons of shows (FilmRise has all 84 episodes of Kitchen
              Nightmares, for instance).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does Sling Freestream
                require sign-up or a credit card?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Sling Freestream does not require registration or a credit
                  card number. Simply access Sling TV through its streaming
                  device app or go to watch.sling.com. Sling Freestream is also
                  available to paying Sling TV customers.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does Sling Freestream require sign-up or a credit card?"}
            cssClass={"faq-content"}
          >
            <p>
              Sling Freestream does not require registration or a credit card
              number. Simply access Sling TV through its streaming device app or
              go to watch.sling.com. Sling Freestream is also available to
              paying Sling TV customers.
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

          <h4>Related Articles:</h4>
          <ul>
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
                <Link href={"#"}>Sling TV Deals</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Free and Low-Cost Cable TV Options</Link>
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

export default SlingTvFree;
