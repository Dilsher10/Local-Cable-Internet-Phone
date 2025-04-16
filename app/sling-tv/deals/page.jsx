// import React, { useState } from "react";
import "./sling-tv-deals.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { slingtvNavLinks } from "../../assets/data/navLinks/slingtvNavLinks";
import slingbgirl from "../../assets/images/sling-girl.png";
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
  title: "Sling TV deals"
};

const SlingTvDeals = () => {
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

    card2Img: slingbgirl,

    cardsStrip: [
      {
        subtitle: "Service Provider:",
        title: "Sling Tv",
        icon: slingicon,
      },
      {
        subtitle: "Channels:",
        title:
          "Prepay and save Free and discounted local channels bundle $20 for you and a friend",
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
    <div className="sling-tv-deals">
      {/* <SubNav links={slingtvNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">Sling TV deals</h2>
          <p className="sect-desc">
            Sling TV is already cheap, but CableTV.com has found a few more ways
            to save money on the service.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            Besides being one of the least expensive and most customizable live
            TV streaming services around, Sling TV is also all about dem deals.
            Where other streaming services offer various discounts and bundle
            options, Sling TV will hook you up with physical gear—and who
            doesn’t like gear?
            <br />
            The following deals are available on all three of Sling TV’s plans:
            Orange, Blue (both $40 a month), and Orange + Blue ($55 a month).
            Pick your color swatch and get streaming.
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
          <Link href={"#"}>Half off your first month </Link>
          <Link href={"#"}>Prepay and save </Link>
          <Link href={"#"}>$20 for you and a friend </Link>
          <Link href={"#"}>AMC+ discount </Link>
          <Link href={"#"}>Free HD Antenna </Link>
          <Link href={"#"}>Free and discounted local channel bundles </Link>
          <Link href={"#"}>Sling Free </Link>
        </div>
      </div>

      <div className="section features">
        <div className="head">
          <h2 className="sect-heading">
            Sling TV <span> deals and promotions </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Half off your first month</h4>
          <p className="after-heading">
            New Sling TV customers can enjoy half off their first month of Sling
            Blue, Orange, or Orange & Blue (a $20.00–$27.50 value) for a limited
            time.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>claim this deal</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Prepay and save</h4>
          <p className="after-heading">
            Calling all basketball fans (and streaming savers). If you prepay
            for 6 months of Sling Orange + NBA League Pass for $270, you’ll save
            $60 (new customers only).
            <br />
            Don’t want to commit to prepaying for 6 months? Sign up for Sling
            Orange + NBA League Pass and save $5 every month for up to 6 months.
            Paying as you go can save you up to $30—not as good as $60, but
            still a great deal if you don’t wanna bind yourself to 6 months of
            Sling.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>prepay and save</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Get $20 for you and a friend</h4>
          <p className="after-heading">
            Want to share your love of Sling TV? When you refer a friend,
            they’ll get a $5 off their first four bills, and you’ll get $5 off
            your next four billing cycles. Depending on how many friends accept
            your invitation, you can get up to $200 off your Sling TV account
            per year.
            <br />
            To refer a friend, log in to your Sling TV account and click the
            Refer a Friend button.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>sign in to sling tV</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>AMC+ discount</h4>
          <p className="after-heading">
            Get your first month of AMC+® for just $5—no Sling base service
            required. Just remember to cancel before the month is up, or you
            will be charged the regular monthly price of $8.99.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>get your first month free</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Free AirTV Mini</h4>
          <p className="after-heading">
            Prepaying for two months of Sling TV service allows you to grab a
            free AirTV Mini, an award-winning streaming device optimized for
            Sling. Sling TV says the AirTV Mini regularly goes for $79.99, and
            “free” is definitely the better deal.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>get free hd antenna</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Free and discounted local channel bundles</h4>
          <p className="after-heading">
            Sling TV doesn’t carry many local channels in most markets, which is
            why it’s practically evangelical about supplementing its streaming
            channel lineups with an antenna. Local over-the-air broadcast
            channels are free, and so are the digital HD antennas Sling TV
            includes with these bundles:
          </p>
          <br />
          <ul>
            <li>
              AirTV Mini: Get a free AirTV Mini streaming device (regularly
              $79.99) when you prepay for two months of Sling TV service.
            </li>
            <li>
              AirTV 2 + HD antenna: Get a digital HD antenna and an AirTV 2
              antenna device for $49.00 (regularly $149.94 total) when you
              prepay for three months of Sling TV service. The AirTV 2 is a
              DVR/tuner that interfaces with a digital antenna and integrates
              local channels into Sling TV.
            </li>
            <li>
              AirTV Anywhere + HD antenna: Get a digital HD antenna and an AirTV
              Anywhere for $99.00 (regularly $244.98) when you prepay for three
              months of Sling TV service. This setup allows you to watch local
              channels on four TVs—or stream them on one on-the-go device.
            </li>
          </ul>
          <hr />
          <div className="btn">
            <Link href={"/"}>view bundle deals</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Sling Free</h4>
          <p className="after-heading">
            Sling TV offers a super-skinny version of its live TV streaming
            service at zero cost: Sling Freestream, a mix of live news channels
            (like ABC News Live and CBS News) and dozens of linear “loop”
            channels featuring 24/7 shows and movies (similar to Pluto TV and
            Xumo). You don’t even have to register—just use the Sling TV app or
            a web browser and look for “Explore Free Content.”
            <br />
            There are also some live sports and on-demand movies and shows on
            Sling Free, though you’ll find many of them labeled with a
            “Subscribe” tag (meaning not free). Still, you can watch a whole
            season of Kitchen Nightmares for free, as well as hundreds of
            semi-obscure movies (2003’s Death Train, anyone?).
            <br />
            Sling Free also allows you to subscribe to the same premium add-ons
            as regular Sling TV, but you’ll have to pay for those. The same goes
            for movie rentals through Sling Free, but at least they’re current
            and you’ve heard of them.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>watch sling free</Link>
          </div>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Sling TV deals </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What is the monthly cost of
                Sling TV?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Sling Orange and Sling Blue are each $40 per month
                  individually, or $55 per month when purchased together as
                  Sling Orange + Blue.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What is the monthly cost of Sling TV?"}
            cssClass={"faq-content"}
          >
            <p>
              Sling Orange and Sling Blue are each $40 per month individually,
              or $55 per month when purchased together as Sling Orange + Blue.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What is the cheapest Sling
                TV package?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Both Sling Orange and Sling Blue, Sling’s cheapest plans, cost
                  $40 a month. Sling Orange is designed for families and sports
                  fans; Sling Blue offers more channels and is geared toward
                  entertainment and news. For more details, check out our Sling
                  Orange vs. Sling Blue guide.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" What is the cheapest Sling TV package?"}
            cssClass={"faq-content"}
          >
            <p>
              Both Sling Orange and Sling Blue, Sling’s cheapest plans, cost $40
              a month. Sling Orange is designed for families and sports fans;
              Sling Blue offers more channels and is geared toward entertainment
              and news. For more details, check out our Sling Orange vs. Sling
              Blue guide.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Do you have to pay for
                Sling TV on Roku?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Sling TV’s Orange, Blue, and Orange + Blue plans aren’t free
                  through Roku or any other streaming device. You can, however,
                  stream Sling Freestream with the Sling TV app on Roku and
                  other devices.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Do you have to pay Sling TV on Roku?"}
            cssClass={"faq-content"}
          >
            <p>
              Sling TV’s Orange, Blue, and Orange + Blue plans aren’t free
              through Roku or any other streaming device. You can, however,
              stream Sling Freestream with the Sling TV app on Roku and other
              devices.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Which Sling TV plan is
                best?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  We like the Sling Orange + Blue plan because it features the
                  most channels, over 50, for $55 a month. But, if you just want
                  a single $40 Sling TV plan, there are differences to consider:
                </p>
                <br />
                <ul>
                  <li>
                    Sling Orange carries more sports and family channels (like
                    ESPN and Disney), but has fewer channels overall (30+).
                  </li>
                  <li>
                    Sling Blue has more channels (40+) and leans more toward
                    entertainment and news channels (like Syfy and MSNBC).
                  </li>
                  <li>
                    Sling Orange or Sling Blue can be customized with channel
                    add-on packages (like sports, kids, movies. etc.), so it’s
                    really just a matter of what you’re into.
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Which Sling TV plan is best?"}
            cssClass={"faq-content"}
          >
            <p>
              We like the Sling Orange + Blue plan because it features the most
              channels, over 50, for $55 a month. But, if you just want a single
              $40 Sling TV plan, there are differences to consider:
            </p>
            <br />
            <ul>
              <li>
                Sling Orange carries more sports and family channels (like ESPN
                and Disney), but has fewer channels overall (30+).
              </li>
              <li>
                Sling Blue has more channels (40+) and leans more toward
                entertainment and news channels (like Syfy and MSNBC).
              </li>
              <li>
                Sling Orange or Sling Blue can be customized with channel add-on
                packages (like sports, kids, movies. etc.), so it’s really just
                a matter of what you’re into.
              </li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> What is Sling Total TV?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Sling’s Total TV is a deal for new customers that adds a
                  200-hour cloud DVR and seven Sling TV Extras packages (Sports
                  Extras, Comedy Extras, Kids Extras, News Extras, Lifestyle
                  Extras, Hollywood Extras, and Heartland Extras) to Sling
                  Orange, Sling Blue, or Sling Orange + Blue at a discount.
                  Sling Total TV for Orange or Blue is an extra $21 a month, or
                  $27 a month extra added to the Orange + Blue plan.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" What is Sling Total TV?"}
            cssClass={"faq-content"}
          >
            <p>
              Sling’s Total TV is a deal for new customers that adds a 200-hour
              cloud DVR and seven Sling TV Extras packages (Sports Extras,
              Comedy Extras, Kids Extras, News Extras, Lifestyle Extras,
              Hollywood Extras, and Heartland Extras) to Sling Orange, Sling
              Blue, or Sling Orange + Blue at a discount. Sling Total TV for
              Orange or Blue is an extra $21 a month, or $27 a month extra added
              to the Orange + Blue plan.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> Is Sling $20 a month?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  No, Sling TV can cost between $40.00 and $55.00 per month
                  depending on your package. However, you can get Sling TV for
                  as low as $20 for your first month with their current half-off
                  promotion.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" Is Sling $20 a month?"}
            cssClass={"faq-content"}
          >
            <p>
              No, Sling TV can cost between $40.00 and $55.00 per month
              depending on your package. However, you can get Sling TV for as
              low as $20 for your first month with their current half-off
              promotion.
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
                <Link href={"#"}>Best Antennas for Cord-Cutters</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Internet for Streaming</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>
                  Sling Orange vs. Sling Blue: What’s the Difference?
                </Link>
              </span>
            </li>
          </ul>
          <h4>Disclaimers</h4>
          <p>
            First month 50% discount offer: Available to new customers upon
            account activation. One per customer. Must provide email address and
            credit card. After one month, you will be billed for Sling monthly
            at the everyday price unless you go online to cancel. Your account
            will be authorized to receive programming upon your first login.{" "}
            <br />
            Available to new customers upon account activation. One per
            customer. Must provide email address and credit card. After one
            month, you will be billed for Sling monthly at the everyday price
            unless you go online to cancel. Your account will be authorized to
            receive programming upon your first login. <br />
            Prepay and save: Limited Time Offer: Available to new customers upon
            account activation. One per customer. Must provide email address and
            credit card. After six months, you will be billed for Sling monthly
            at the everyday price unless you go online to cancel. Your account
            will be authorized to receive programming upon your first login.{" "}
            <br />
            AirTV Mini and HD Antenna device offers: One per customer and cannot
            be combined. Must provide email address and credit card. Must
            pre-pay for two months of service. New customers only. Limit one
            device per Sling TV account. Not available with free trial. Not
            available in Puerto Rico. After two months, your credit card will be
            charged monthly for applicable subscription until you cancel your
            service. <br />
            AirTV 2 and AirTV Anywhere device offers: One per customer and
            cannot be combined. Must provide email address and credit card. Must
            pre-pay for three months of service. New customers only. Limit one
            device per Sling TV account. Not available with free trial. Not
            available in Puerto Rico. After three months, your credit card will
            be charged monthly for applicable subscription until you cancel your
            service.
          </p>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default SlingTvDeals;
