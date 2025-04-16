// import React, { useState } from "react";
import "./max-channels.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { maxNavLinks } from "../../assets/data/navLinks/maxNavLinks";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import max from "../../assets/images/max-logo.png";
import maxicon from "../../assets/images/max-icon.png";
import maxgirl from "../../assets/images/max-channel-girl.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import channeloriginalimage from "../../assets/images/channel-original-image.png";
import tcmchannel from "../../assets/images/tcm-channel.png";
import maxchannelcartoon from "../../assets/images/max-channel-cartoon.png";
import couplemaxchannel from "../../assets/images/couple-max-channel.png";
import travelchannel from "../../assets/images/travel-channel.png";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Max Channels"
};

const MaxChannels = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: max,
      rating: "(3.5/5)",
      starImg: star,
      desc: "Editor's choice (on-demand)",
      buttonText: "Read max review",
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
        subtitle: "Price:",
        title: "$9.99–$19.99/mo.",
        icon: maxicon,
      },
      {
        subtitle: "Standout features:",
        title:
          "Newly added Discovery+ library, Max Originals & Large TV and movie library",
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
  return (
    <div className="max-channels">
      {/* <SubNav links={maxNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">Max Channels</h2>
          <p className="sect-desc">
            Our experts have spent thousands of hours researching Max content
            and channels so you don't have to.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Max channel hubs</h4>
          <p>
            The Max hubs, or “channels,” include the obvious, like Max Originals
            (exclusive Max shows and movies) and HBO (original and acquired
            shows and movies from HBO). Plus, beginning May 23, 2023, eight more
            channels were added thanks to HBO Max’s merger with Discovery+.
            <br />
            Now favorites like HGTV, TLC, and the Food Network are available to
            stream on Max—although you’ll still need cable to be able to watch
            new episodes of your favorite shows.
            <br />
            Here’s a little more about each of Max’s content hubs.
          </p>
          <h4>What channels are on Max?</h4>
          <ul className="channel-list">
            <li>
              <span className="link">
                <Link href={"/"}>Max Originals</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"/"}>HBO</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"/"}>DC Universe</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"/"}>Wizarding World</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"/"}>TCM</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"/"}>Cartoon Network Collection</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"/"}>Adult Swim Collection</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"/"}>Studio Ghibli</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"/"}>Sesame Workshop</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"/"}>Discovery</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"/"}>HGTV</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"/"}>Magnolia Network</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"/"}>Food Network</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"/"}>TLC</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"/"}>ID (Investigation Discovery)</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"/"}>Travel Channel</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"/"}>CNN Originals</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <CTA
        heading={"Want live HBO?"}
        desc={
          "Enter your zip code below to see top TV providers in your neighborhood."
        }
      />

      <div className="section originals">
        <div className="head">
          <h2 className="sect-heading">
            Max <span> Originals </span>
          </h2>
          <p className="sect-desc">
            The Flight Attendant, Legendary, Hacks, and the rest of Max’s
            growing library of originals reside in—where else?—the Max Originals
            hub.
            <br />
            These are series, movies, and documentaries that can be found only
            on Max and don’t cross over into HBO proper, though some titles can
            be found in other hubs (like Doom Patrol, which also shows up in the
            DC hub).
          </p>
        </div>

        <Image src={channeloriginalimage} alt="" />

        <div className="package-table-container channels">
          <h4>HBO on Max </h4>
          <p className="after-heading">
            The HBO hub features shows and movies from the original
            cable/satellite HBO network, like The White Lotus, Last Week Tonight
            with John Oliver, and, of course, Game of Thrones and House of the
            Dragon.
            <br />
            Most of the series, movies, and documentaries are made available on
            Max around the same time as they air live on HBO (if you’ve been
            streaming on-demand HBO for a while, it’s easy to forget that HBO is
            a live cable channel). HBO hub content can be sorted by “Featured,”
            “Series,” “Movies,” “Comedy,” “Documentaries,” and “Drama.”
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DC on Max </h4>
          <p className="after-heading">
            Remember the DC Universe streaming service? HBO parent company
            WarnerMedia shut it down and folded all of its DC Comics–related
            content into Max, making shows like Doom Patrol and Titans Max
            Originals.
            <br />
            The DC hub is also home to DC series from The CW (like Batwoman and
            Stargirl), animated shows (like Batman Beyond and Justice League
            Dark), and blockbuster movies (like Zack Snyder’s Justice League and
            The Suicide Squad).
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Wizarding World on Max </h4>
          <p className="after-heading">
            Wizards and muggles alike, rejoice: Max has the entire Harry Potter
            movie collection, along with the Fantastic Beasts films, available
            for streaming.
            <br />
            The Wizarding World hub also includes the Harry Potter 20th
            Anniversary: Return to Hogwarts special, which premiered on HBO Max
            back in early 2022, along with the Harry Potter: Hogwarts Tournament
            of Houses game show hosted by Helen Mirren.
          </p>
        </div>
      </div>

      <div className="section records">
        <div className="head">
          <h2 className="sect-heading">
            <span> TCM </span> on Max
          </h2>
          <p className="sect-desc">
            Movie buffs will find plenty to geek out about in the Turner Classic
            Movies hub, which is loaded with acclaimed films from the ‘30s to
            the present.
            <br />
            In the TCM hub, iconic movies like Casablanca and Gone with the Wind
            are featured alongside horror films like Eraserhead, indie flicks
            like Tie Me Up! Tie Me Down!, and comedy hits like Blazing Saddles.
          </p>
        </div>

        <Image src={tcmchannel} alt="" />

        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>Pro tip: </h4>
          <p className="after-heading">
            We recommend a ton of shows and movies on our What to Watch on Max
            page.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Cartoon Network Collection on Max </h4>
          <p className="after-heading">
            Like the Adult Swim Collection, Max’s Cartoon Network Collection hub
            doesn’t feature every show from the cable animation destination, but
            the good stuff is present. Adventure Time, Ben 10, Craig of the
            Creek, Apple & Onion, and more current hits are here, as are past
            favorites like Ed, Edd n Eddy, Courage the Cowardly Dog, and The
            Powerpuff Girls.
          </p>
        </div>
      </div>

      <div className="section track">
        <div className="head">
          <h2 className="sect-heading">
            <span> Adult Swim Collection </span> on Max
          </h2>
          <p className="sect-desc">
            From classics like The Venture Bros. and Harvey Birdman to newer
            hits like Rick and Morty and Royal Crackers, Max’s Adult Swim
            Collection hub has most of the hot weirdness from your favorite
            overnight channel.
            <br />
            There are a few missing series, like The Eric Andre Show and Dream
            Corp LLC, but the [AS] hub does feature all 13 seasons of
            Squidbillies and the complete Tim & Eric series trilogy.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> view max plans</Link>
        </div>
      </div>

      <div className="section records">
        <div className="head">
          <h2 className="sect-heading">
            <span> Studio Ghibli </span> on Max
          </h2>
          <p className="sect-desc">
            Max’s hubs also include anime favorite Studio Ghibli, the film
            studio behind Spirited Away, Princess Mononoke, Kiki’s Delivery
            Service, Earwig and the Witch, and more. The Studio Ghibli hub
            features those movies and 20 more, including The Kingdom of Dreams
            and Madness, a behind-the-scenes documentary about the studio and
            its animators.
          </p>
        </div>

        <Image src={maxchannelcartoon} alt="maxchannelcartoon" />

        <div className="package-table-container channels">
          <h4>Discovery on Max</h4>
          <p className="after-heading">
            As mentioned earlier, the merger of Discovery+ and HBO Max enabled
            much of the content found on Discovery+ to migrate to the newly
            christened Max streaming service. It stands to reason, then, that
            the classic cable Discovery Channel would be one of the hubs added
            to Max following this move.
            <br />
            The Discovery hub on Max contains mostly scientific, outdoorsy, and
            survival-related content like Mythbusters and Naked and Afraid.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>HGTV on Max </h4>
          <p className="after-heading">
            The HGTV channel on Max is for all the DIYers out there. Another
            cable favorite, HGTV has about every show you could possibly want
            about buying houses, flipping houses, renovating houses—the whole
            gamut.
            <br />
            Some favorites include the Property Brothers’ 14 seasons (plus all
            the spin-offs), Love It or List It, and House Hunters. If you’re
            looking for Fixer Upper and the rest of the Chip and Joanna Gaines
            Cinematic Universe, hop over to their new Magnolia Channel, also
            streaming on Max.
          </p>
        </div>
      </div>

      <div className="section track">
        <div className="head">
          <h2 className="sect-heading">
            <span> Sesame Workshop </span> on Max
          </h2>
          <p className="sect-desc">
            Besides 18 seasons of the iconic Sesame Street series, Max’s Sesame
            Workshop hub also features the Max Original My Sesame Street
            Friends, the animated Mecha Builders, plus specials like Sesame
            Street: The Power of We.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> view max plans</Link>
        </div>
      </div>

      <div className="section records">
        <div className="head">
          <h2 className="sect-heading">
            <span> Magnolia Network </span> on Max
          </h2>
          <p className="sect-desc">
            The new Magnolia Network is the creation of HGTV
            presenters-turned-stars in their own right, Chip and Joanna Gaines.
            The network has similar content, with shows such as the original
            Fixer Upper, plus new additions under the Magnolia umbrella like
            Magnolia Table with Joanna Gaines, Silos Baking Competition, and
            Maine Cabin Masters.
          </p>
        </div>

        <Image src={couplemaxchannel} alt="couplemaxchannel" />

        <div className="package-table-container channels">
          <h4>TLC on Max</h4>
          <p className="after-heading">
            Reality TV addicts should be happy to know that Max also snagged TLC
            from Discovery+.
            <br />
            TLC has something for everyone, with titles ranging from Say Yes to
            the Dress and 90 Day Fiancé to Dr. Pimple Popper and Save My Skin,
            with some Cake Boss sprinkled in (no pun intended).
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>ID on Max </h4>
          <p className="after-heading">
            The ID (Investigation Discovery) channel on Max is your place for
            all things true crime.
            <br />
            On ID, you can find notorious scandal documentaries like Murdaugh
            Mysteries: Deadly Dynasty and Jared From Subway: Catching a Monster,
            as well as cable favorites like Lt. Joe Kenda’s Homicide Hunter.
          </p>
        </div>
      </div>

      <div className="section track">
        <div className="head">
          <h2 className="sect-heading">
            <span> Food Network </span> on Max
          </h2>
          <p className="sect-desc">
            If you love cooking or just love to eat, there’s plenty of content
            for you on the Food Network—yet another cable favorite now on Max.
            <br />
            The Food Network channel has plenty of classics like Good Eats,
            Barefoot Contessa, and Diners, Drive-Ins and Dives (along with a
            plethora of other Guy Fieri content). You can also catch competition
            shows like Iron Chef America and Chopped and Max Originals like What
            Am I Eating? with Zooey Deschanel in the hub.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> view max plans</Link>
        </div>
      </div>

      <div className="section records">
        <div className="head">
          <h2 className="sect-heading">
            <span> Travel Channel </span> on Max
          </h2>
          <p className="sect-desc">
            The Travel Channel has always offered up an interesting variety of
            shows on its cable channel, and its Max hub is no different.
            <br />
            Whether you’re into the spooky and paranormal (Ghost Adventures),
            food and travel (Anthony Bourdain: No Reservations), or the weird
            and historical (Mysteries at the Museum), the Travel Channel’s got
            you covered.
          </p>
        </div>

        <Image src={travelchannel} alt="travel-channel" />

        <div className="package-table-container channels">
          <h4> CNN Originals on Max</h4>
          <p className="after-heading">
            Discovery+ got a hold of CNN Originals when the CNN+ streaming
            service shut down back in 2022. Now that content has found its new
            home on Max.
            <br />
            The CNN Originals hub contains documentaries like Watergate:
            Blueprint for a Scandal, Stanley Tucci: Searching for Italy, and the
            Max Original The Last of the Movie Stars.
          </p>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Max channels </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span>How much does Max cost?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Unlike HBO on cable or satellite TV, Max doesn’t feature any
                  live channels. It’s an on-demand streaming service with
                  several content hubs of branded on-demand content.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"How much does Max cost?"}
            cssClass={"faq-content"}
          >
            <p>
              Unlike HBO on cable or satellite TV, Max doesn’t feature any live
              channels. It’s an on-demand streaming service with several content
              hubs of branded on-demand content.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is there a free trial for
                Max?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Max carries all of the content of HBO, including movies and
                  original series, as well as its own Max Originals. Max
                  Originals, however, are not available on HBO.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Is there a free trial for Max?"}
            cssClass={"faq-content"}
          >
            <p>
              Max carries all of the content of HBO, including movies and
              original series, as well as its own Max Originals. Max Originals,
              however, are not available on HBO.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span>What shows and movies are on
                Max?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>There are three Max packages to choose from:</p>
                <br />
                <ul>
                  <li>Max with no ads ($15.99 a month or $149.99 a year)</li>
                  <li>Ad-supported Max ($9.99 a month or $99.99 a year)</li>
                  <li>
                    Ultimate Ad-Free Max, which includes 4K and Dolby Atmos
                    capability, 4 simultaneous streams, and up to 100 offline
                    downloads ($19.99 a month or $19.99 a year)
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"What shows and movies are on Max?"}
            cssClass={"faq-content"}
          >
            <p>There are three Max packages to choose from:</p>
            <br />
            <ul>
              <li>Max with no ads ($15.99 a month or $149.99 a year)</li>
              <li>Ad-supported Max ($9.99 a month or $99.99 a year)</li>
              <li>
                Ultimate Ad-Free Max, which includes 4K and Dolby Atmos
                capability, 4 simultaneous streams, and up to 100 offline
                downloads ($19.99 a month or $19.99 a year)
              </li>
            </ul>
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
                <Link href={"#"}> Max Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Max Deals</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>What to Watch on Max</Link>
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
                <Link href={"#"}>Best Streaming TV Deals</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default MaxChannels;
