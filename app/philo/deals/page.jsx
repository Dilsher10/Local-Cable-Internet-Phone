// import React, { useState } from "react";
import "./philo-deals.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { philoNavLinks } from "../../assets/data/navLinks/philoNavLinks";
import philoreviewboy from "../../assets/images/philo-deals.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import philo from "../../assets/images/philo.png";
import philoicon from "../../assets/images/philo-icon.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Philo Deals For 2024"
};

const PhiloDeals = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: philo,
      rating: "(3.5/5)",
      starImg: star,
      desc: "Cheapest (live TV streaming)",
      buttonText: "see philo deals",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: philoreviewboy,

    cardsStrip: [
      {
        subtitle: "Philo redemption code:",
        title: "50% off the first month ",
        icon: philoicon,
      },

      {
        subtitle: "Philo custom bundle:",
        title: "The Thrifty Bundle ",
        icon: philoicon,
      },
      {
        subtitle: "Philo free trial:",
        title: "7 days ",
        icon: philoicon,
      },
    ],

    tableData: [
      {
        head: ["Plan", "price", "Video", "Audio", "Streams", "Details"],

        body: [
          {
            content: [
              "1.",
              " Philo",
              " $25.00/mo.",
              " 70+",
              "Unlimited (1 yr.) ",
              " 3",
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
    <div className="philo-deals">
      {/* <SubNav links={philoNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Philo Deals For 2024: T-Mobile Discount, Redemption Codes, And More
          </h2>
          <p className="sect-desc">
            Philo has 70+ live TV channels and unlimited DVR for $25 monthly—and
            you can save even more money with these Philo deals.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            Philo TV—with 70+ live TV channels, unlimited cloud DVR, and more
            for only $25 monthly—is already a deal. Philo deals do exist,
            though. This guide shows you ways to save even more money on the
            cheapest live TV streaming service, including a Philo redemption
            code for 50% off your first month and a custom streaming bundle.
          </p>
        </div>
      </div>

      <CTA
        heading={"Do I need the internet to watch Philo?"}
        desc={
          "Yes, Philo requires an internet connection—unless you wanna eat up all your mobile data. Enter your zip code below to find internet providers in your area."
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
          <Link href={"#"}>Philo redemption code </Link>
          <Link href={"#"}> Philo bundle deals</Link>
        </div>
      </div>

      <div className="section budnles-and-deals">
        <div className="head">
          <h2 className="sect-heading">
            Philo <span> budnles and deals </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Philo redemption code: 50% off your first month </h4>
          <p className="after-heading">
            When we’re about to spend money online, we always Google the
            retailer’s or service’s name along with the keywords “coupon code”
            or “promo code” with and without the month and year. Usually, we’ll
            find at least a small discount, and sometimes we score a juicy one.
            The latter happens less often than the former—but a discount is a
            discount. <br />
            In addition to searching “Philo coupon code” and “Philo promo code,”
            we also tried “Philo redemption code,” which is the terminology
            Philo uses on its homepage. Here’s what we found: <br />
            Current Deal: Save 50% on your first month of service with the Philo
            promo code “NODUNKS”.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>get philo deal</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4> Pro tip:</h4>
          <p className="after-heading">
            To avoid garbage coupon codes, use only codes from major couponing
            sites like Rakuten and RetailMeNot, or from familiar brands like
            Capital One, Wired, and the LA Times.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Philo bundle deals: The Thrifty Bundle </h4>
          <p className="after-heading">
            Philo doesn’t come in an official bundle, but we tell you how to
            create an affordable custom bundle with Philo TV in our guide, 9
            Streaming Bundles to Replace Cable. In short, combine a Philo
            subscription with an over-the-air (OTA) TV antenna and as many free
            ad-supported TV (FAST) services (like Tubi) as you want for a
            super-low monthly payment.
            <br />
            Here’s how the Thrifty Bundle works.
          </p>
          <ul>
            <li>
              Philo subscription: $25/mo.—or, if you sign up for the T-Mobile
              discount, $15/mo. for 12 months.
            </li>
            <li>OTA antenna: $25–$60 (one-time purchase)</li>
            <li>
              If you already have a smart TV, it might already have a built-in
              OTA antenna. Check your owner’s manual to be sure. If you already
              have the antenna, you can pull in all of your local channels right
              now and save the $25–$60 you would’ve spent on the antenna.
            </li>
            <li>
              FAST services: Tubi is the best. The Roku Channel ain’t bad. Pluto
              TV, Xumo, Shout! Factory, Crackle, PLEX—you can have them all
              free.
            </li>
          </ul>
          <p className="after-heading">
            The most the Thrifty Bundle will cost you is $15–$25 monthly after
            the one-time $25–$60 antenna purchase—if you need one. That’s a
            disgustingly sweet price for 70+ Philo channels, all your local
            channels (and subchannels), hundreds of live FAST channels, and
            on-demand content from the FAST services.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>custom bundle with philo</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>Custom streaming TV bundles</h4>
          <p className="after-heading">
            In 9 Streaming Bundles to Replace Cable, we show you how to create
            flexible custom bundles for sports fans, movie lovers, and bargain
            hunters.
          </p>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Philo deals </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Does Philo offer a student
                discount?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Unfortunately, Philo TV does not offer a student discount at
                  this time. But with the Philo coupon code “NODUNKS,” you can
                  save 50% on your first month. And you can always use Philo’s
                  7-day free trial to test the service before subscribing.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Does Philo offer a student discount?"}
            cssClass={"faq-content"}
          >
            <p>
              Unfortunately, Philo TV does not offer a student discount at this
              time. But with the Philo coupon code “NODUNKS,” you can save 50%
              on your first month. And you can always use Philo’s 7-day free
              trial to test the service before subscribing.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Can you pay annually for
                Philo?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>No, Philo TV doesn’t offer an annual subscription.</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Can you pay annually for Philo?"}
            cssClass={"faq-content"}
          >
            <p>No, Philo TV doesn’t offer an annual subscription.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span>How do I get a free month of
                Philo?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Philo TV currently offers a 7-day free trial to new customers.
                  We’ve seen Philo promo codes for free month offers before, but
                  didn’t find any at the time of this writing.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"How do I get a free month of Philo?"}
            cssClass={"faq-content"}
          >
            <p>
              Philo TV currently offers a 7-day free trial to new customers.
              We’ve seen Philo promo codes for free month offers before, but
              didn’t find any at the time of this writing.
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
              ·{" "}
              <span className="link">
                <Link href={"#"}> Philo Review</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best TV Packages and Deals</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>9 Streaming Bundles to Replace Cable</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Live TV Streaming Services</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Cell Phone and Internet Bundle</Link>
              </span>
            </li>
          </ul>
          <h4>disclaimer</h4>
          <p>
            <b>T-Mobile discount:</b>
            <br />
            T-Mobile customers get more, including the best deals on
            entertainment. Get 40% off Philo TV for one year and enjoy over 60+
            live and on-demand channels like Food Network, TLC, and HGTV, plus
            unlimited DVR. Limited-time offer; subject to change. Offered by
            T-Mobile only to T-Mobile wireless or Home Internet customers
            (excluding business customers) who are residents of the 50 U.S., 18+
            (“Customers”). Eligible Customers receive a 7-day free trial of
            Philo and $10 off/month for 12 months (regularly $25/mo) or then
            current monthly subscription price thereafter. Limit (1) Offer per
            Customer, one-time use only. Offer/discount is non-transferable, may
            not be resold or redeemed for cash, and may not be combined with
            other offers, discounts, or promotions (unless expressly permitted
            by Philo). Discount ends if T-Mobile account is terminated; Philo
            subscription automatically reverts to the current full subscription
            price. IMPORTANT NOTICE: Valid payment information and subscription
            required to redeem Offer. If you do not cancel during the applicable
            trial period (7-day free or 12-month discounted), you will be
            charged the applicable monthly amount plus taxes on a recurring
            basis after the trials end. Go to your Philo account page to cancel.
            Cancellation takes effect on the next monthly billing date (no
            refunds for partial billing periods). Redemption of this Offer
            constitutes acceptance of these Terms and all applicable Terms and
            Conditions, see philo.com/terms/#philo-promotions for more details.
            T-Mobile reserves the right to modify this Offer at any time. Philo
            reserves the right to modify or cancel this Offer at any time. Void
            where taxed, prohibited, or restricted.
          </p>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default PhiloDeals;
