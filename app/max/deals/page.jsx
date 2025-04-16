// import React, { useState } from "react";
import "./max-deals.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { maxNavLinks } from "../../assets/data/navLinks/maxNavLinks";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import max from "../../assets/images/max-logo.png";
import maxicon from "../../assets/images/max-icon.png";
import maxgirl from "../../assets/images/max-deals-girl.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import dotted from "../../assets/images/dotted.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";
import CTA from "../../components/cta-section/CTA";

export const metadata = {
  title: "Max Deals"
};

const MaxDeals = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: max,
      rating: "(3.5/5)",
      starImg: star,
      desc: "Live sports from TBS, TNT, and truTV",
      buttonText: "Read max review",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: maxgirl,

    cardsStrip: [
      {
        subtitle: "Max free trials:",
        title: "up to 12 mos. free",
        icon: maxicon,
      },
      {
        subtitle: "Max with DIRECTV STREAM:",
        title: "Included free with Premier plan",
        icon: maxicon,
      },
      {
        subtitle: "Max with Cricket Wireless:",
        title: "Free with wireless service",
        icon: maxicon,
      },
      {
        subtitle: "Max with annual payment:",
        title: "$99.99–$149.99/yr.",
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
    <div className="max-deals">
      {/* <SubNav links={maxNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">Max Deals</h2>
          <p className="sect-desc">
            Max is great, but it isn’t cheap—the experts at CableTV.com have
            researched a few ways to help Max out your premium TV savings.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            Max (formerly HBO Max) is one of the more expensive streaming
            services in TV land—of course you’re looking for a deal. So are we,
            and we’ve found some offers that can save you a few bucks (or even
            all the bucks) on your Max subscription.
          </p>
        </div>
      </div>

      <CTA
        heading={"You’ll need a fast internet plan for all that streaming"}
        desc={
          "To check for these internet services in your area, enter your zip code below:"
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
          <Link href={"#"}> Max free trials </Link>
          <Link href={"#"}> Max with DIRECTV </Link>
          <Link href={"#"}>Max with Cricket Wireless </Link>
          <Link href={"#"}> Max with ads </Link>
          <Link href={"#"}> Max with annual payment </Link>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={dotted} className="mark" alt="" />
          <h4>Max free trials </h4>
          <p>
            Max doesn’t offer a free trial directly, but other TV and internet
            services give you the chance to try it for free. Plus, some
            providers include an ongoing Max subscription when you sign up for
            select services:
          </p>
          <ul>
            <li>Amazon Prime Video: 7 days free</li>
            <li>
              DIRECTV: 3 mos. free with select plans and included with PREMIER
              plan
            </li>
            <li>
              DIRECTV STREAM: 3 mos. free with select plans and included with
              PREMIER plan
            </li>
          </ul>
          <p>
            After the promotional period, Max reverts to its regular price of
            $9.99–$19.99/mo. or $99.99–$199.99/yr.
          </p>
        </div>
      </div>

      <div className="section features">
        <div className="head">
          <h2 className="sect-heading">
            Max <span> Deals and promotions </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Max with DIRECTV </h4>
          <p className="after-heading">
            New DIRECTV and DIRECTV STREAM customers can get three months of
            free Max included with select TV packages.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>view max with direcTV deals</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Max with Cricket Wireless </h4>
          <p className="after-heading">
            Cricket’s Unlimited + 15 GB Mobile Hotspot mobile plan, which starts
            at $60 a month for one line (or $32 per line with five lines),
            includes free Max. Unfortunately, it’s the ad-supported version, but
            you’d still save nearly $120 a year on Max service.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>view Max with Cricket Wireless deals</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Max with ads </h4>
          <p className="after-heading">
            Wait, there’s an ad-supported version of Max? Yes, and it goes for
            $9.99 a month, which is $6 less than its regular plan. As you’d
            expect, this discounted plan includes commercial spots. It also
            doesn’t support 4K HD, and it excludes same-day access to Warner
            Bros. theatrical movie premieres (one of Max’s coolest perks).
            <br />
            On the upside, the ads don’t intrude upon Max Originals, and you’d
            save $50 a year with this plan. We don’t like the idea of ads in our
            HBO, but this deal isn’t bad.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>view max plans</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Max with annual payment </h4>
          <p className="after-heading">
            Like Disney+, Hulu, Amazon Prime Video, and other streaming
            services, Max offers a discount if you pay upfront for a year of
            service. You can get the regular Max ($9.99–$19.99/mo. or
            $99.99–$199.99/yr.) for $149.99 a year (a savings of $41.89
            annually), or the ad-supported Max ($9.99 per month) for $99.99 a
            year (a savings of $19.89 annually).
            <br />
            If you know you’ll be watching Max all year—and why wouldn’t you
            be?—this is one of the simplest deals to get in on.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>view max plans</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Max with B/R Sports Add-On </h4>
          <p className="after-heading">
            Max is offering its B/R Sports Add-On free to all Max subscribers
            through February 29, 2024. A $9.99-a-month value, the add-on
            includes live sports from Warner Bros. Discovery channels like TBS,
            TNT, and truTV.
            <br />
            No action is necessary to get the add-on during the promotional
            period. Simply log in to Max and navigate to the B/R Sports tab.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>view max plans</Link>
          </div>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Max deals </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How much does Max cost?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Max costs up to $19.99 per month or $199.00 if you pay for a
                  year upfront. The ad-supported Max plan—which comes with
                  commercial spots and no 4K capability—costs $9.99 a month, or
                  $99.99 if you pay for a year upfront.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" How much does Max cost?"}
            cssClass={"faq-content"}
          >
            <p>
              Max costs up to $19.99 per month or $199.00 if you pay for a year
              upfront. The ad-supported Max plan—which comes with commercial
              spots and no 4K capability—costs $9.99 a month, or $99.99 if you
              pay for a year upfront.
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
                  While Max doesn’t offer free trials on its website, you can
                  try out this premium streaming service through other TV and
                  internet providers: Cox, Optimum, DIRECTV, DIRECTV STREAM,
                  Amazon Prime Video, and Hulu.
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
              While Max doesn’t offer free trials on its website, you can try
              out this premium streaming service through other TV and internet
              providers: Cox, Optimum, DIRECTV, DIRECTV STREAM, Amazon Prime
              Video, and Hulu.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span>What shows and movies are on
                Max?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Max includes all programming from HBO, as well as full seasons
                  of shows and exclusive movies not available on HBO. Max also
                  offers Max Originals, which are shows and movies produced
                  exclusively for the service.
                </p>
                <br />
                <h4>Movies on Max (partial list):</h4>
                <ul>
                  <li>The Suicide Squad</li>
                  <li>Zack Snyder’s Justice League</li>
                  <li>Wonder Woman 1984</li>
                  <li>Shazam!</li>
                  <li>Tenet</li>
                  <li>Godzilla vs. Kong</li>
                  <li>Reminiscence</li>
                </ul>
                <h4>TV shows on Max (partial list):</h4>
                <ul>
                  <li>The White Lotus</li>
                  <li>Game of Thrones</li>
                  <li>Curb Your Enthusiasm</li>
                  <li>Succession</li>
                  <li>The Wire</li>
                  <li>The Sopranos</li>
                  <li>Rick and Morty</li>
                  <li>Friends</li>
                </ul>
                <h4>Max Originals (partial list):</h4>
                <ul>
                  <li>The Flight Attendant</li>
                  <li>Hacks</li>
                  <li>Doom Patrol</li>
                  <li>Search Party</li>
                  <li>Gossip Girl</li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"What shows and movies are on Max?"}
            cssClass={"faq-content"}
          >
            <p>
              Max includes all programming from HBO, as well as full seasons of
              shows and exclusive movies not available on HBO. Max also offers
              Max Originals, which are shows and movies produced exclusively for
              the service.
            </p>
            <br />
            <h4>Movies on Max (partial list):</h4>
            <ul>
              <li>The Suicide Squad</li>
              <li>Zack Snyder’s Justice League</li>
              <li>Wonder Woman 1984</li>
              <li>Shazam!</li>
              <li>Tenet</li>
              <li>Godzilla vs. Kong</li>
              <li>Reminiscence</li>
            </ul>
            <h4>TV shows on Max (partial list):</h4>
            <ul>
              <li>The White Lotus</li>
              <li>Game of Thrones</li>
              <li>Curb Your Enthusiasm</li>
              <li>Succession</li>
              <li>The Wire</li>
              <li>The Sopranos</li>
              <li>Rick and Morty</li>
              <li>Friends</li>
            </ul>
            <h4>Max Originals (partial list):</h4>
            <ul>
              <li>The Flight Attendant</li>
              <li>Hacks</li>
              <li>Doom Patrol</li>
              <li>Search Party</li>
              <li>Gossip Girl</li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Is Max free with Amazon
                Prime?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Amazon Prime Video offers a 7-day free trial of Max. Once the
                  trial ends, the Max add-on will cost Prime members $15.99 a
                  month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Is Max free with Amazon Prime?"}
            cssClass={"faq-content"}
          >
            <p>
              Amazon Prime Video offers a 7-day free trial of Max. Once the
              trial ends, the Max add-on will cost Prime members $15.99 a month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> How do I get Max for free?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Max offers a few episodes from some of its series for free.
                  You can also get free subscriptions to Max with select plans
                  from providers like DIRECTV.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" How do I get Max for free?"}
            cssClass={"faq-content"}
          >
            <p>
              Max offers a few episodes from some of its series for free. You
              can also get free subscriptions to Max with select plans from
              providers like DIRECTV.
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
                <Link href={"#"}> HBO Max Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Streaming Deals</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Streaming Services</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default MaxDeals;
