// import React, { useState } from "react";
import "./xfinity-deals.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import { xfinityNavLinks } from "../../assets/data/navLinks/xfinityNavLinks";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import discountIcon from "../../assets/images/discount-icon.svg";
import xfinityDealsHeroBg from "../../assets/images/xfinity-deals-hero-bg.jpg";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import Link from "next/link";
import Image from "next/image";
import PackageTable from "../../components/package-table/PackageTable";
import quotations from "../../assets/images/quotations.svg";
// import Newsletter from "../../components/newsletter/Newsletter";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Xfinity Deals And Promotions - October 2024"
};

const XfinityDeals = () => {
  // const [faq, setFaq] = useState();

  const heroContent = {
    img: xfinityDealsHeroBg,
    heading: "Xfinity Deals And Promotions - October 2024",
    desc: "Check out the latest deals and promotions from Xfinity for October 2024! Save big on internet, TV, and phone services with special offers and discounts tailored to meet your needs. Don't miss out on these limited-time offers to get the best value for your entertainment and communication needs.",
    points: [
      "You can get internet and streaming for $50 a month when you sign up for Xfinity Mobile.",
      "Free Max, SHOWTIME, or Netflix",
      "Free Xfinity Wi-Fi hotspots",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Internet deals starting at $19.99/mo.",
  };

  let packageTableData = [
    {
      head: ["Deal", "Introductory price", "Details"],

      body: [
        {
          content: [
            "1.",
            "Get Netflix, EPIX, and 150 hours of DVR storage",
            "$20.00/mo.",
          ],
          linkPath: "#",
        },

        {
          content: [
            "2.",
            "Get Max, EPIX, and 150 hours of DVR storage",
            "$20.00/mo.",
          ],
          linkPath: "#",
        },

        {
          content: [
            "3.",
            "Get Max, Netflix, SHOWTIME, EPIX, and 150 hours of DVR storage",
            "$40.00/mo.",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  // const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="xfinity-deals">
      {/* <SubNav links={xfinityNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="endnote limited-time-offer">
        <div className="endnote-container">
          <Image src={discountIcon} alt="discount" />
          <h4>Limited-time offer:</h4>
          <p>
            You can save up to $45 every month on Xfinity internet if you get
            Xfinity Mobile along with your Xfinity plan.
          </p>
        </div>
      </div>

      <div className="section top-xfinity-deals">
        <div className="head">
          <h2 className="sect-heading">
            Best Xfinity <span> deals and promotions</span>
          </h2>
          <p className="sect-desc">
            Xfinity is in most parts of the US. Sometimes, it's the only option
            for cable TV and internet. But that's okay because Xfinity offers
            good and not too expensive plans. They have both cheap and fancy
            options. We've gathered different bundles and deals to help you save
            money on your monthly bill, whether you choose a basic or deluxe
            Xfinity service.
          </p>
        </div>

        <div className="cards">
          {bestOffersTemporary.map((item, index) => (
            <PackageCard
              key={index}
              id={index}
              img={item.img}
              tagName={item.tagName}
              packageName={item.packageName}
              packagePoints={item.packagePoints}
              price={item.price}
              linkPath={item.linkPath}
            />
          ))}
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
          <Link href={"#"}>Free Max, SHOWTIME, or Netflix</Link>
          <Link href={"#"}>Student discounts</Link>
          <Link href={"#"}>Military and veteran discounts</Link>
          <Link href={"#"}>Xfinity Mobile discount</Link>
          <Link href={"#"}>Affordable internet</Link>
          <Link href={"#"}>3-for-1 bundle</Link>
        </div>
      </div>

      <div className="section xfinity-with-max-showtime-netflix">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity with <span>Max, SHOWTIME, or Netflix</span>
          </h2>
          <p className="sect-desc">
            If you’re looking to splurge on an ultra-fast internet plan with
            channel-loaded TV service, some higher-end{" "}
            <span>
              <Link href={"#"}>Xfinity bundles</Link>
            </span>{" "}
            and plans come with free or discounted streaming service bundles.
            <br />
            For example, if you have Ultimate TV in Xfinity’s Northeast region,
            you can add discounted{" "}
            <span>
              <Link href={"#"}>Max</Link>
            </span>
            ,
            <span>
              <Link href={"#"}>SHOWTIME</Link>
            </span>{" "}
            ,{" "}
            <span>
              <Link href={"#"}>Netflix</Link>
            </span>{" "}
            streaming service bundles to your plan. Xfinity’s Ultimate TV plan
            comes with more than 185+ TV channels including NFL Network, NBA TV,
            and MLB Network.
          </p>
        </div>

        <div className="package-table-container west-region">
          <h4>
            Xfinity internet and TV bundles with included Max, SHOWTIME, or
            Netflix
          </h4>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            Data effective as of post date. Offers and availability may vary by
            location and are subject to change.
          </p>
        </div>
      </div>

      <div className="section xfinity-deals">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span>deals</span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Morbi cursus eget a ut elit.
            Viverra mi faucibus aliquam sapien commodo nec consectetur nibh
            lectus. Sed gravida blandit a risus aliquam orci elit faucibus.
            Aliquet eget elit congue aliquam cras blandit amet.
          </p>
        </div>

        <div className="endnote xfinity-for-students">
          <div className="endnote-container">
            <h4>Xfinity for students</h4>
            <p>
              Xfinity offers students attending select universities and colleges{" "}
              <span className="link">
                <Link href={"#"}>exclusive online deals</Link>
              </span>{" "}
              for TV and internet service (eligibility verification required).{" "}
              <br />
              For college students, the current deal offers you up to a $100
              Visa gift card when you sign a one-year contract for one of
              Xfinity’s qualifying internet plans. This deal is only available
              for students who live in off-campus housing—on-campus housing
              usually has its own internet plan that you’ll sublease. But act
              quickly, because this particular deal ends October 2.
            </p>

            <div className="inner-container">
              <Image src={quotations} alt="quotations" />
              <p>
                Hey, it’s your fav writer,{" "}
                <span className="link">
                  <Link href={"#"}>Rachel Oaks,</Link>
                </span>{" "}
                with some words of hard-earned wisdom. Before you sign up for
                Xfinity as a student, make sure that you’re in the position to
                keep Xfinity for the full 12 months of the contract. If you
                break the contract, Xfinity charges costly early termination
                fees. <br />
                Back in college, some roommates bamboozled me into putting our
                shared internet under my name and then said roommates bailed the
                next month when they couldn’t pay the rent. I had to find a new
                place to live, and I got left with a hefty bill for eleven
                months’ worth of early termination fees. Make smarter choices
                than me.
              </p>
            </div>
            <div className="btn">
              <Link href={"#"}>get student-exclusive deals</Link>
            </div>
          </div>
        </div>

        <div className="endnote xfinity-for-military">
          <div className="endnote-container">
            <h4>Xfinity for military members and veterans</h4>
            <p>
              If you’re a current member of the{" "}
              <span className="link">
                <Link href={"#"}>US military or a veteran</Link>
              </span>{" "}
              who’s signed up for Xfinity service within the past 90 days, you
              can receive a $50 prepaid Visa card (eligibility verification
              required).
            </p>
            <div className="btn">
              <Link href={"#"}>get military members and veterans deals</Link>
            </div>
          </div>
        </div>

        <div className="endnote xfinity-mobile-deals">
          <div className="endnote-container">
            <h4>Xfinity Mobile deals</h4>
            <div>
              <p>Check out Xfinity Mobile’s best deals:</p>
              <ul>
                <li>Save on these phones when you join Xfinity Mobile:</li>
                <ul>
                  <li>$400 off an iPhone 15 or iPhone 15 Pro</li>
                  <li>
                    Save up to $830 on an iPhone 15 Pro with a qualifying
                    trade-in
                  </li>
                  <li>$100 on a Google Pixel 7a</li>
                </ul>
              </ul>
              <p>
                Get a free Unlimited Intro line and 400Mbps internet for $50/mo.
                for two years
              </p>
              <div className="btn">
                <Link href={"#"}>get Xfinity Mobile deals</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="endnote xfinity-mobile-deals">
          <div className="endnote-container">
            <h4>Xfinity affordable internet</h4>
            <div>
              <p>
                Xfinity offers low-income households 50 Mbps download speeds for
                $9.95 a month (plus tax) or 100 Mbps download speeds for $29.95
                a month with Internet Essentials Plus from Comcast. Plus, you
                can combine this offer with the{" "}
                <span>
                  <Link href={"#"}>Affordable Connectivity Program (ACP)</Link>
                </span>{" "}
                to get your internet service for free. <br />
                While many internet providers offer similar assistance programs,
                Xfinity’s is one of the easiest to qualify for. If you’re
                already participating in one of these programs, you’re eligible
                for Internet Essentials:
              </p>
              <ul>
                <li>Federal Pell Grant</li>
                <li>National School Lunch Program or Head Start</li>
                <li>Low Income Home Energy Assistance Program</li>
                <li>Public housing assistance</li>
                <li>Supplemental Nutrition Assistance Program</li>
                <li>Supplemental Security Income</li>
                <li>Temporary Assistance for Needy Families</li>
                <li>Tribal assistance programs</li>
                <li>Veterans Administration Pension</li>
                <li>Women, Infants, and Children program</li>
              </ul>
            </div>
            <div className="btn">
              <Link href={"#"}>apply for internet essentials</Link>
            </div>
          </div>
        </div>

        <div className="endnote xfinity-mobile-deals">
          <div className="endnote-container">
            <h4>3-for-1 bundle</h4>
            <div>
              <p>
                For a limited time, get 400 Mbps internet + equipment for only
                $50 a month when you add Xfinity Mobile to your plan. Not enough
                of a deal for you? This bundle also comes with these perks:
              </p>
              <ul>
                <li>Internet equipment included</li>
                <li>2-year price guarantee</li>
                <li>No term contract</li>
              </ul>
            </div>
            <div className="btn">
              <Link href={"#"}>view xfinity bundles</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section xfinity-faq">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span> deals and promotions </span>FAQ
          </h2>

          <p className="sect-desc">
            TL;DR? Xfinity kills it. For more detailed info on all Xfinity
            equipment and services, see our comprehensive Xfinity equipment
            guide.
          </p>
        </div>

        <div className="faq-wrapper">
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(1)}>
                <span>{faq === 1 ? "-" : "+"}</span> Are there any good Xfinity
                deals in my area?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  To find Xfinity deals in your area,{" "}
                  <span className="link">
                    <Link href={"#"}>click this link </Link>
                  </span>{" "}
                  to jump to the top of this guide to Xfinity Deals and
                  Promotions.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"Are there any good Xfinity deals in my area?"}
            cssClass={"faq-content"}
          >
            <p>
              To find Xfinity deals in your area,{" "}
              <span className="link">
                <Link href={"#"}>click this link </Link>
              </span>{" "}
              to jump to the top of this guide to Xfinity Deals and Promotions.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does Xfinity have deals for
                existing customers?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  The majority of Xfinity's deals apply only to new subscribers,
                  but current customers can sometimes get in on those deals by
                  upgrading their service. Contact Xfinity customer service to
                  find out if they're amenable to upgrading your current service
                  and applying a deal.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"Does Xfinity have deals for existing customers?"}
            cssClass={"faq-content"}
          >
            <p>
              The majority of Xfinity's deals apply only to new subscribers, but
              current customers can sometimes get in on those deals by upgrading
              their service. Contact Xfinity customer service to find out if
              they're amenable to upgrading your current service and applying a
              deal.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span>Does Xfinity offer deals to
                senior citizens?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  There are no Xfinity special offers, discounts, or deals
                  specifically for senior citizens, but its Internet Essentials
                  from Comcast initiative provides a low-cost option for those
                  eligible for government housing assistance, Medicaid, SNAP,
                  SSI, and other programs.
                  <br />
                  With it, you can get 50 Mbps internet service for $9.95 a
                  month with no activation or equipment rental fees.
                  Additionally, you'll have free access to Xfinity Wi-Fi
                  hotspots
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"3"}
            title={"Does Xfinity offer deals to senior citizens?"}
            cssClass={"faq-content"}
          >
            <p>
              There are no Xfinity special offers, discounts, or deals
              specifically for senior citizens, but its Internet Essentials from
              Comcast initiative provides a low-cost option for those eligible
              for government housing assistance, Medicaid, SNAP, SSI, and other
              programs.
              <br />
              With it, you can get 50 Mbps internet service for $9.95 a month
              with no activation or equipment rental fees. Additionally, you'll
              have free access to Xfinity Wi-Fi hotspots
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does Xfinity offer deals on
                mobile service?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Though it's primarily a cable TV and internet provider,
                  Xfinity also offers wireless phone service through Xfinity
                  Mobile.{" "}
                  <span className="link">
                    <Link href={"#"}>Xfinity Mobile </Link>
                  </span>{" "}
                  customers can save up to $35 off their internet bill every
                  month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={"Does Xfinity offer deals on mobile service?"}
            cssClass={"faq-content"}
          >
            <p>
              Though it's primarily a cable TV and internet provider, Xfinity
              also offers wireless phone service through Xfinity Mobile.{" "}
              <span className="link">
                <Link href={"#"}>Xfinity Mobile </Link>
              </span>{" "}
              customers can save up to $35 off their internet bill every month.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote intertnet-review-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Methodology:</h4>
          <p>
            This collection of Xfinity deals includes long-standing provider
            perks and current promotions. We scour the internet for updates, and
            sometimes Xfinity reaches out to us about hot deals. Signing up for
            a new provider is your best chance to get the star treatment, and we
            want to help you make the most of it. When recommending a deal, we
            consider its features and bang for your buck. To learn more about
            our methodology, check out our
            <span className="link">
              <Link href={"#"}> How We Rank page. </Link>
            </span>
          </p>
          <h4>Disclaimers:</h4>
          <p>
            Student-exclusive offer: Restrictions apply. Not available in all
            areas. New residential customers only. Student-exclusive offers
            require verifying student status and ordering the Xfinity services
            required for the offer at xfinity.com/student or by calling
            1-800-XFINITY. Student-exclusive offers not available to students
            living in on-campus housing. Requires subscription to: Performance
            Internet; Extreme Internet; or Performance Internet and Extra TV. 1
            year term contract required for Performance Internet and Extreme
            Internet offers. Early termination fee applies if all Xfinity
            services are cancelled during the contract term. After applicable
            promo. or contract term, regular rates apply. Comcast’s current
            monthly rate is $66 for Performance Internet; $86 for Extreme
            Internet; and $116 for Performance Internet and Extra TV (subj. to
            change). May not be combined with other offers. Free self-install
            kit offer available with student-exclusive offers and limited to
            standard shipping of kit. Equipment charges extra.
            <br />
            Military and veteran–exclusive offer: Restrictions apply. Applicant
            must be a Comcast customer at time of verification, remain a
            customer and keep account in good standing for 90 days. Cards issued
            by MetaBank®, Member FDIC, pursuant to a license from Visa U.S.A.,
            Inc. Prepaid card mailed to Comcast account holder within 16-18
            weeks of military status verification and expires in 180 days.
            <br />
            Xfinity 3-for-1 bundle offer: Xfinity Mobile requires residential
            Xfinity Internet. Line limitations may apply. Equip., intl. and
            roaming charges, taxes and fees, including reg. recovery fees, and
            other charges extra, and subj. to change. $25/line/mo. charge
            applies if Xfinity TV, Internet or Voice post-pay services not
            maintained. Pricing subject to change. In times of congestion, your
            data may be temporarily slower than other traffic. Reduced speeds
            after use of monthly data included with your data option. Data
            thresholds and savings may vary. For Xfinity Mobile Broadband
            Disclosures visit:
            www.xfinity.com/mobile/policies/broadband-disclosures.
            <br />
            Free Unlimited Mobile Line ($45 Value): Xfinity residential Fast 400
            Mbps Internet and above customers only. Limited to one line of
            Xfinity Mobile Unlimited Intro for 24 months. Must activate new line
            within 90 days of Internet order and maintain the line to receive a
            $45 mobile discount for 24 months. Discount applied to Xfinity
            Internet bill and will appear on statement within 30 days of Xfinity
            Mobile line activation. If Xfinity Internet or Xfinity Mobile is
            cancelled, or if you change Xfinity Internet to a tier below Fast,
            you will no longer receive the $45 discount. If you change all
            Xfinity Mobile lines to By the Gig, your discount will decrease from
            $45 to $10 per month for the remainder of the discount term ($15 per
            month if your internet service is in the following states: MI, IL,
            IN, KY, TN, AR, LA, MS, AL, GA, SC, FL). After 24 months, regular
            rates apply.
          </p>
        </div>
      </div>
      {/* <Newsletter /> */}
    </div>
  );
};

export default XfinityDeals;
