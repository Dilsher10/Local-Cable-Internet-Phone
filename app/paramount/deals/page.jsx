// import React, { useState } from "react";
import "./paramount-deals.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { paramountNavLinks } from "../../assets/data/navLinks/paramountNavLinks";
import paramountgirl from "../../assets/images/paramount-deals-girl.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import paramount from "../../assets/images/paramount.png";
import paramounticon from "../../assets/images/paramount-icon.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Paramount+ Deals"
};

const ParamountDeals = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: paramount,
      rating: "(3.5/5)",
      starImg: star,
      desc: "Most content for cheap",
      buttonText: "compare to other services",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: paramountgirl,

    cardsStrip: [
      {
        subtitle: "Promo code COLIN:",
        title: "30-day free trial (Best trial offer)",
        icon: paramounticon,
      },
      {
        subtitle: "Paramount+/SHOWTIME Bundle:",
        title: "$11.99/mo. (Best bundle)",
        icon: paramounticon,
      },
      {
        subtitle: "Paramount+ with annual payment:",
        title: "$59.99–$119.99/yr. (Savings of $12–$24)",
        icon: paramounticon,
      },
      {
        subtitle: "Paramount+ with student discount:",
        title: "$3.75/mo. (Best for students)",
        icon: paramounticon,
      },
    ],

    tableData: [
      {
        head: [
          "Plan",
          "price",
          "Hours of content",
          "Video",
          "Streams",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Essential (with ads)",
              "$5.99/mo.",
              "30,000+",
              "1080p, 4K",
              "3",
            ],
            linkPath: "#",
          },
          {
            content: [
              "2.",
              "Paramount+ With SHOWTIME (no ads)",
              "$13.99/mo.",
              "30,000+",
              "1080p, 4K",
              "3",
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
  return (
    <div className="paramount-deals">
      {/* <SubNav links={paramountNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">Paramount+ Deals January 2024</h2>
          <p className="sect-desc">
            There are several ways to save a few bucks on a Paramount+
            subscription—or even get one for free. Let CableTV.com help you
            pinch some P+ pennies.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            Paramount+ isn’t a pricey streaming service, but that’s no reason to
            pass up deals or discounts when you can get ’em. We’ve rounded up
            five ways to save on Paramount+ that’ll have you watching Tulsa King
            in no time (though we recommend turning on the captioning to
            understand whatever Sylvester Stallone is saying).
          </p>
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
          <Link href={"#"}> Paramount+ promo code </Link>
          <Link href={"#"}> Paramount+ free trial </Link>
          <Link href={"#"}> Paramount+SHOWTIME® bundle </Link>
          <Link href={"#"}> Paramount+ with annual payment </Link>
          <Link href={"#"}> Paramount+ with student discount </Link>
          <Link href={"#"}> Paramount+ with Samsung Your Choice Club </Link>
        </div>
      </div>

      <CTA
        heading={"You’ll need a fast internet plan for all that streaming"}
        desc={
          "Wanna speed up your download speeds? Enter your zip code below to see top internet providers in your area."
        }
      />

      <div className="section primetime-channel">
        <div className="head">
          <h2 className="sect-heading">
            Paramount Plus <span> Deals and promotions </span>
          </h2>
          <p className="sect-desc">
            With the Paramount+/SHOWTIME bundle, you’ll save 35% over the
            regular prices of Paramount+ ($5.99 a month for the ad-supported
            Essential plan) and SHOWTIME ($10.99 a month). That’s a solid deal
            for so much content (we’ll get into specifics later).
          </p>
        </div>
        <div className="package-table-container channels">
          <h4> Paramount+ promo code</h4>
          <p className="after-heading">
            New subscribers can use the code COLIN to score a free month of
            Paramount+. This is way better than the service’s usual free trial
            period, which usually only lasts seven days. New codes pop up
            several times a month, usually corresponding to a new Paramount+
            title. Other codes that currently apply the same promo include INK,
            DELACALLE, and CHALLENGE39.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>free Paramount+ promo code</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Paramount+ free trial </h4>
          <p className="after-heading">
            Paramount+ currently offers a 7-day free trial period. Good for both
            the Essential and Paramount+ With SHOWTIME plans, the free trial is
            for new subscribers only.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>try Paramount+ for free</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Paramount+/SHOWTIME bundle </h4>
          <p className="after-heading">
            With Paramount+ and SHOWTIME’s new merger, the Paramount+ With
            SHOWTIME plan (previously known as Paramount Premium) is $11.99 a
            month with no ads. That’s like getting each service for a discounted
            price of $5.99/mo. each (SHOWTIME is normally 10.99/mo. as a cable
            add-on). If you’re into movies (and no ads), this bundle is a sweet
            deal.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>get Paramount+/SHOWTIME bundle</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4> Paramount+/SHOWTIME bundle</h4>
          <p className="after-heading">
            With Paramount+ and SHOWTIME’s new merger, the Paramount+ With
            SHOWTIME plan (previously known as Paramount Premium) is $11.99 a
            month with no ads. That’s like getting each service for a discounted
            price of $5.99/mo. each (SHOWTIME is normally 10.99/mo. as a cable
            add-on). If you’re into movies (and no ads), this bundle is a sweet
            deal.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>get Paramount+/SHOWTIME bundle</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Paramount+ with annual payment </h4>
          <p className="after-heading">
            If you pay for a full year of Paramount+ upfront, you basically get
            two months for free. The Paramount+ Essential plan (with ads) costs
            $5.99 a month, but it’s just $59.99 annually, saving you $12 a year.
            For the $11.99-a-month Paramount+ With SHOWTIME plan (without ads),
            the annual cost is $119.99 a year for a savings of $24 over 12
            months.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>get Paramount+ annual plan</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Paramount+ with student discount </h4>
          <p className="after-heading">
            Verified students can get Paramount+ (Essential plan only) for 25%
            off, a savings of $1.25 a month. Unfortunately, the Paramount+
            student discount isn’t available for the ad-free Paramount+ With
            SHOWTIME plan, and it’s only for college/university students (no
            high schoolers—sorry, kids).
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>get the Paramount+ student discount</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Paramount+ with Samsung Your Choice Club </h4>
          <p className="after-heading">
            Qualifying members of Samsung’s Your Choice Club can get five months
            of free Paramount+ service (Essential plan only). This freebie is
            available for new and current customers and is available until
            November 30, 2024.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>get the Paramount+ Samsung Your Club deal</Link>
          </div>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Paramount+ deals </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What's the cheapest way to
                get Paramount+?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  The cheapest way to get Paramount+ is to take advantage of its
                  7-day free trial period. Also for a limited time, new
                  subscribers can use the code COLIN to score a free month. The
                  Paramount+/SHOWTIME bundle or paying by the year are also good
                  ways to save a few bucks on the streaming service.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What's the cheapest way to get Paramount+?"}
            cssClass={"faq-content"}
          >
            <p>
              The cheapest way to get Paramount+ is to take advantage of its
              7-day free trial period. Also for a limited time, new subscribers
              can use the code COLIN to score a free month. The
              Paramount+/SHOWTIME bundle or paying by the year are also good
              ways to save a few bucks on the streaming service.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is Paramount+ free with
                Walmart+?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Paramount+ (Essential plan only) is included free with a
                  $12.95 a month (or $98 a year) Walmart+ membership.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Is Paramount+ free with Walmart+?"}
            cssClass={"faq-content"}
          >
            <p>
              Paramount+ (Essential plan only) is included free with a $12.95 a
              month (or $98 a year) Walmart+ membership.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Is Paramount+ available as
                a channel on Prime Video?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Paramount+ is available as an Amazon Prime Video channel, but
                  only the $11.99 Paramount+ With SHOWTIME plan without ads. You
                  can’t subscribe to the ad-supported Essentials plan through
                  Prime Video.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Is Paramount+ available as a channel on Prime Video?"}
            cssClass={"faq-content"}
          >
            <p>
              Paramount+ is available as an Amazon Prime Video channel, but only
              the $11.99 Paramount+ With SHOWTIME plan without ads. You can’t
              subscribe to the ad-supported Essentials plan through Prime Video.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does Paramount+ have deals?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  The best Paramount+ deals include getting the student discount
                  plan, and getting a subscription via Walmart+.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Does Paramount+ have deals?"}
            cssClass={"faq-content"}
          >
            <p>
              The best Paramount+ deals include getting the student discount
              plan, and getting a subscription via Walmart+.
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
                <Link href={"#"}>Paramount+ Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>SHOWTIME Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Paramount+/SHOWTIME Bundle Review</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default ParamountDeals;
