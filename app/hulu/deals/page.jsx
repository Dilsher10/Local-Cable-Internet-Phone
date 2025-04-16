// import React, { useState } from "react";
import "./hulu-deals.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { huluNavLinks } from "../../assets/data/navLinks/huluNavLinks";
import hulureview from "../../assets/images/hulu-deals.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import hulu from "../../assets/images/hulu-logo.png";
import huluicon from "../../assets/images/hulu-icon.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Hulu Deals"
};

const HuluDeals = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: hulu,
      rating: "(4.5/5)",
      starImg: star,
      desc: "Best value (live TV streaming)",
      buttonText: "view plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: hulureview,

    cardsStrip: [
      {
        subtitle: "Hulu, Disney+, ESPN+ Bundle:",
        title: "$14.99/mo.* (Best bundle)",
        icon: huluicon,
      },
      {
        subtitle: "Hulu Discount for Students:",
        title: "$1.99/mo. (Best for students).",
        icon: huluicon,
      },
      {
        subtitle: "Hulu with Spotify Premium for Students:",
        title: "$5.99/mo.* (Best for music-loving students)",
        icon: huluicon,
      },
      {
        subtitle: "Hulu with Sprint Unlimited:",
        title: "$60–$85/mo.* (Good for Hulu on the go)",
        icon: huluicon,
      },
    ],

    tableData: [
      {
        head: ["Plan", "price", "Video", "Streams", "Details"],

        body: [
          {
            content: [
              "1.",
              "Hulu (Limited Ads)",
              "$7.99/mo.",
              "1080p, 4K",
              "2",
            ],
            linkPath: "#",
          },
          {
            content: ["2.", "Hulu (No Ads)", "$17.99/mo.", "1080p, 4K", "2"],
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
    <div className="hulu-deals">
      {/* <SubNav links={huluNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Hulu Deals For 2024: Disney Plus, Student Discounts, And More
          </h2>
          <p className="sect-desc">
            Let CableTV.com help you save a few bucks on your Hulu subscription.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            At $7.99 a month (for the ad-supported plan, that is), Hulu isn’t
            all that expensive, especially considering the on-demand streamer’s
            vast library of original and acquired content.
            <br />
            But, who has two thumbs and is always on the hunt for a bargain? You
            guys (or identifier of your choice).
            <br />
            Here are five of the best Hulu deals for students, Disney fans, and
            Sprint customers.
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
          <Link href={"#"}>Hulu, Disney Plus, ESPN Plus bundle </Link>
          <Link href={"#"}>Hulu for $1.99 a month </Link>
          <Link href={"#"}> Hulu with Spotify Premium </Link>
          <Link href={"#"}>Hulu with premium channels </Link>
          <Link href={"#"}>Hulu free with Sprint </Link>
          <Link href={"#"}> First month of Hulu free </Link>
        </div>
      </div>

      <CTA
        heading={"You’ll need a fast internet plan for all that streaming"}
        desc={
          "Wanna speed up your download speeds? Enter your zip code below to see top internet providers in your area."
        }
      />

      <div className="section bundles-and-deals">
        <div className="head">
          <h2 className="sect-heading">
            Hulu <span> bundles and deals </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Hulu bundle deals: Hulu, Disney Plus, ESPN Plus Bundle </h4>
          <p className="after-heading">
            Sometimes, there are consumer benefits to cross-corporate media
            ownership—and the Hulu/Disney+/ESPN+ bundle deal is easily one of
            the better deals out there.
            <br />
            With the Trio Basic bundle, you get Hulu (regularly $7.99 a month,
            with ads), Disney+ (regularly $7.99 a month, with ads), and ESPN+
            (regularly $10.99 a month, with ads) for a bundled monthly bill of
            $14.99. That’s a monthly savings of $11.98, or $143.76 annually. For
            entertainment and sports, not bad.
            <br />
            You can also get the no-ads versions of Disney+ and Hulu (but still
            with the ad-supported ESPN+, boo) in the Trio Premium bundle for
            $24.99 a month.
            <br />
            Don’t want ESPN+? There’s also a Duo Basic bundle of just Disney+
            and Hulu (both with ads) for $9.99 a month, and an ad-free version
            for $ 19.99 a month.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>View bundle deal </Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Hulu deal for students: Hulu for $1.99 a month </h4>
          <p className="after-heading">
            College students over the age of 18 can get the basic Hulu plan
            (usually $7.99 a month) for just $1.99 a month, a 75% savings.
            <br />
            You’ll need to be verified as a student through Sheer ID to become
            eligible. This deal isn’t available to all schools, and it’s only
            good for as long as you’re a verifiable student.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}> View $1.99 student deal</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>
            Hulu deal for music-loving students: Hulu with Spotify Premium for
            Students{" "}
          </h4>
          <p className="after-heading">
            If you’re a Hulu-curious college student and a music lover, it’s
            tough to beat the Spotify Premium for Students deal: for only $5.99
            a month, you get both. Again, it’s the ad-supported version of Hulu.
            Spotify Premium doesn’t have commercials, though, so it kind of
            evens out.
            <br />
            To get in on these entertainment savings, you’ll need to be verified
            as a student through Sheer ID. Be advised that not all schools are
            eligible for this student deal. This deal is activated through your
            Spotify account. It’s good for a year, and you can reapply annually
            for up to four years while you’re still a student.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}> View deal with spotify</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Hulu deal for movie lovers: One-week free trials </h4>
          <p className="after-heading">
            Hulu makes it easy to try out premium channels. You can get
            seven-day trials of CINEMAX®, SHOWTIME®, and STARZ®. After your
            trial period, you can cancel or pay the current going rate for these
            channels:
          </p>
          <ul>
            <li>CINEMAX: $9.99/mo.</li>
            <li>SHOWTIME: $10.99/mo.</li>
            <li>STARZ: $9.99/mo.</li>
          </ul>
          <br />
          <p className="after-heading">
            Not sure which channel to start with? Check out our guide to
            choosing premium channels.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}> View deal</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Hulu wireless deals: Hulu with Sprint Unlimited </h4>
          <p className="after-heading">
            Need phone service? Sprint Unlimited wireless plans come with a free
            Hulu subscription (the ad-supported version—yes, you’re sensing a
            pattern).
            <br />
            This deal has been around for a while, but it’s apparently survived
            Sprint’s merger with T-Mobile and is still available to new and
            existing customers. <br />
            Sprint/T-Mobile’s unlimited talk and text plans run between $60 and
            $85 a month for a single user. And Hulu viewing isn’t limited to
            your phone screen; you can also watch Hulu on your TV, tablet, or
            computer using the Hulu app. <br />
            If you already subscribe to basic Hulu directly, you can take
            advantage of this deal by switching the billing from Hulu to Sprint.
            If your Hulu subscription is already part of a third-party deal,
            it’s not eligible for the Sprint freebie.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>View deal with Sprint </Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>First month of Hulu for free: 30-day trial period </h4>
          <p className="after-heading">
            All of Hulu’s plans come with a 30-day free trial period, meaning
            you can try out the service for a month before committing to a
            subscription. Or, you could look at it as a free month of Hulu.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}> View free trail</Link>
          </div>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Hulu deals </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Are deals available for
                Hulu (No Ads) or Hulu + Live TV?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  If you want to get the most out of your Hulu (no ads) plan,
                  you can get the Trio Premium Disney Bundle for $24.99 per
                  month. It’s pricey for sure, but at least you get three
                  services out of it. Hulu + Live TV also comes with an ad-free
                  Disney Bundle for $89.99 a month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Are deals available for Hulu (No Ads) or Hulu + Live TV?"}
            cssClass={"faq-content"}
          >
            <p>
              If you want to get the most out of your Hulu (no ads) plan, you
              can get the Trio Premium Disney Bundle for $24.99 per month. It’s
              pricey for sure, but at least you get three services out of it.
              Hulu + Live TV also comes with an ad-free Disney Bundle for $89.99
              a month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How can I save money on a
                Hulu subscription alone?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  If you’re not interested in any of the discounts or bundles
                  above, there is another way to save a few bucks on a
                  standalone, ad-supported Hulu subscription: pay for a year
                  upfront.
                  <br />
                  With an annual subscription to basic Hulu for $79.99 a year,
                  you’ll save $15.89 over 12 months. This deal isn’t available
                  for Hulu (No Ads) or either Hulu + Live TV plan.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" How can I save money on a Hulu subscription alone?"}
            cssClass={"faq-content"}
          >
            <p>
              If you’re not interested in any of the discounts or bundles above,
              there is another way to save a few bucks on a standalone,
              ad-supported Hulu subscription: pay for a year upfront.
              <br />
              With an annual subscription to basic Hulu for $79.99 a year,
              you’ll save $15.89 over 12 months. This deal isn’t available for
              Hulu (No Ads) or either Hulu + Live TV plan.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span>How do I redeem a Hulu gift
                card code?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Head over to Hulu’s gift page and enter your gift card’s
                  redemption code—that’s it. <br />
                  If you don’t have a Hulu account yet, you’ll be asked to make
                  a new one. Once your gift card money runs out, your account
                  will cancel on its own. <br />
                  If you already have a Hulu subscription, you can redeem your
                  Hulu gift card on your account page. After your gift card
                  money is used up, your subscription will go back to using the
                  card on file.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"How do I redeem a Hulu gift card code?"}
            cssClass={"faq-content"}
          >
            <p>
              Head over to Hulu’s gift page and enter your gift card’s
              redemption code—that’s it. <br />
              If you don’t have a Hulu account yet, you’ll be asked to make a
              new one. Once your gift card money runs out, your account will
              cancel on its own. <br />
              If you already have a Hulu subscription, you can redeem your Hulu
              gift card on your account page. After your gift card money is used
              up, your subscription will go back to using the card on file.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does Hulu offer any
                discounts?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Hulu’s best discounts are its student discounts. Eligible
                  students can get ad-supported Hulu for only $1.99 monthly and
                  a Hulu/Spotify bundle for $5.99 monthly.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Does Hulu offer any discounts?"}
            cssClass={"faq-content"}
          >
            <p>
              Hulu’s best discounts are its student discounts. Eligible students
              can get ad-supported Hulu for only $1.99 monthly and a
              Hulu/Spotify bundle for $5.99 monthly.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>What's the cheapest way to
                get Hulu?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  The cheapest Hulu plan is ad-supported Hulu with a student
                  discount, which costs $1.99 per month. For regular customers,
                  ad-supported Hulu is the cheapest Hulu plan and costs $7.99
                  per month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"What's the cheapest way to get Hulu?"}
            cssClass={"faq-content"}
          >
            <p>
              The cheapest Hulu plan is ad-supported Hulu with a student
              discount, which costs $1.99 per month. For regular customers,
              ad-supported Hulu is the cheapest Hulu plan and costs $7.99 per
              month.
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
                <Link href={"#"}>Hulu Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Disney Plus Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>ESPN Plus Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>SHOWTIME vs. SHOWTIME Anytime </Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Streaming Deals</Link>
              </span>
            </li>
          </ul>
          <h4>Disclaimers</h4>
          <p>
            *Data effective as of post date. Offers and availability may vary by
            location and are subject to change. Hulu, Disney+, ESPN+ bundle: 18+
            only. Incl. Hulu (ad-supported) or Hulu (No Ads) plan. Access
            content from each service separately, and select ESPN+ content via
            Hulu. Location data required to watch certain content. Offer valid
            for eligible subscribers only. Subject to Disney+ and ESPN+
            Subscriber Agreement. Student discount: Enrollment information (e.g.
            first name, last name, college/university name, date of birth) must
            be shared with SheerID for verification purposes. Automatic
            re-verification performed annually. Hulu reserves the right to
            determine eligibility in its sole discretion. Not combinable with
            any free trial of the Hulu (ad-supported) plan or any other
            promotional offers or pricing. Any plan switch after redemption of
            this offer may result in forfeiture of discount pricing.
          </p>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default HuluDeals;
