// import React, { useState } from "react";
import "./at&t-deals.scss";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import xfintyTvHeroBg from "../../assets/images/xfinity-tv-hero-bg.jpg";
// import SubNav from "../../components/sub-nav/SubNav";
// import { atandtNavLinks } from "../../assets/data/navLinks/at&tNavLinks";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import PackageTable from "../../components/package-table/PackageTable";
import CTA from "../../components/cta-section/CTA";
import remotecontrolatandt from "../../assets/images/remotecontrolatandt.png";
import quotationsIcon from "../../assets/images/quotations.svg";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "AT&T Deals And Promotions",
};

const AtandtDeals = () => {
  // const [faq, setFaq] = useState(null);

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "AT&T Deals And Promotions",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "$300 Visa® reward card",
      "6-month NVIDIA GeForce NOW Ultimate Membership",
      "No-contract internet",
    ],
    buttonName: "check availability",
    buttonPath: "#",
    price: "Packages starting at $55.00/mo.",
  };

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };

  let packageTableData = [
    {
      head: ["Deal", "offer Details", "Expires", "Details"],

      body: [
        {
          content: [
            "1.",
            "AT&T Reward Card",
            "New customers signing up for a 300–1,000+Mbps internet plan will receive an AT&T reward card worth up to $150. Plus, enter AT&T coupon code HOLIDAY150 to get an additional $150 gift card.",
            "12/14/23",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "NVIDIA's GeForce NOW Ultimate Membership",
            "New AT&T Fiber customers (300 Mbps or higher) will receive six months of NVIDIA's GeForce NOW Ultimate Membership tier.",
            "12/31/23",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataWirelessDeals = [
    {
      head: ["Deal", "Details", "Expires", "Details"],

      body: [
        {
          content: [
            "1.",
            "Save up to $1000",
            "Save up to $1,000 on an iPhone 15 Pro or iPhone 15 Pro Max (with eligible trade-in).",
            "-",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Get $250 in bill credits",
            "Switch to AT&T and bring your own phone and you can get up to $250 in bill credits. Plus, they'll waive your activation fees.",
            "-",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "AT&T internet and phone bundle",
            "Save $20/mo. on AT&T Fiber with an eligible AT&T Wireless plan",
            "-",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataRewardCard = [
    {
      head: [
        "Package",
        "Price",
        "Download speeds up to",
        "Upload speeds up to",
        "Details",
      ],

      body: [
        {
          content: ["1.", "Internet 300", "$55.00/mo.", "300 Mbps", "300 Mbps"],
          linkPath: "#",
        },
        {
          content: ["2.", "Internet 500", "$65.00/mo.", "500 Mbps", "500 Mbps"],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "1 Gig Internet",
            "$80.00/mo.",
            "1,000 Mbps",
            "1,000 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "2 Gig Internet",
            "$110.00/mo.",
            "2,000 Mbps",
            "2,000 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "5 Gig Internet",
            "$180.00/mo.",
            "5,000 Mbps",
            "5,000 Mbps",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="atandt-deals">
      {/* <SubNav links={atandtNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Top AT&T <span> deals and packages </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
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

      <CTA
        heading={"Wondering if AT&T Fiber internet is available in your area?"}
        desc={"To see AT&T packages in your area, enter your zip code below:"}
      />

      <div className="section atandt-deals-and-promotions ">
        <div className="head">
          <h2 className="sect-heading">
            <span> Top AT&T </span> deals and promotions
          </h2>
          <p className="sect-desc">
            From now until the end of 2023, all new AT&T fiber internet
            customers will receive a $100–$150 reward card, depending on your
            chosen plan. Entering the promo code HOLIDAY150 at checkout will get
            you another $150 reward card. Plus, if you purchase a 300 Mbps or
            higher fiber internet plan, you’ll also receive six months free of
            NVIDIA’s GeForce NOW Ultimate Membership tier (a $119.94 total
            value).
          </p>
        </div>
        <PackageTable item={packageTableData} />
      </div>

      <div className="section wireless-deals">
        <div className="head">
          <h2 className="sect-heading">
            AT&T <span> Wireless deals </span>
          </h2>
          <p className="sect-desc">
            AT&T Wireless offers new and existing customers some excellent
            deals. We’ve seen smartphone trade-ins offering as much as $1,000
            off your new device, and they’re currently running a deal where you
            can get that much off an iPhone 15 Pro or iPhone 15 Pro Max with an
            eligible trade-in. Plus, when you switch to AT&T from another
            carrier and bring in your own phone, you’ll get up to $250 in bill
            credits and a waived activation fee.
            <br />
            For more info on AT&T wireless, head over to our AT&T phone guide
            for all the current offers and up-to-date prices.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>check availability</Link>
        </div>
        <br />
        <br />
        <PackageTable item={packageTableDataWirelessDeals} />
      </div>

      <div className="section reward-card">
        <div className="head">
          <h2 className="sect-heading">
            $300 AT&T Visa® <span> Reward Card </span>
          </h2>
          <p className="sect-desc">
            You can get a $150 AT&T Visa reward card when you sign up with an
            AT&T Fiber internet plan with 1 Gbps download speeds or more.
            Customers at the 300 or 500 Mbps levels will receive a $100 reward
            card. With the AT&T coupon code HOLIDAY150, you can even get an
            extra $150. Just sign up for a qualifying AT&T plan, and you’ll
            receive an email or letter with the card and redemption
            requirements. But act quickly, because this deal ends on December
            14.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Visa Reward Card–qualifying plans</h4>
          <PackageTable item={packageTableDataRewardCard} />
          <p className="below-table">
            Data effective as of post date. Offers and availability may vary by
            location and are subject to change.
            <br />
            *Plus taxes. Price after $5/mo Autopay & Paperless bill discount.
          </p>
        </div>
      </div>

      <div className="section now-ultimate-membership ">
        <div className="head">
          <h2 className="sect-heading">
            6-month NVIDIA GeForce <span> NOW Ultimate Membership </span>
          </h2>
          <p className="sect-desc">
            New AT&T Fiber customers purchasing the Internet 300 plan or higher
            get a 6-month subscription to NVIDIA”s GeForce NOW Ultimate
            Membership tier. GeForce NOW is a cloud gaming service that offers
            popular games like Control, Far Cry 6, and Life is Strange: True
            Colors.
            <br />
            The Ultimate tier allows gamers an eight-hour session length, up to
            4K resolution, and up to 120 FPS.
            <br />
            After the 6-month promotional period, you’ll need to cancel your
            subscription or pay the standard rate, which is currently $19.99 per
            month.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>check availability</Link>
        </div>
        <br />
        <br />
        <Image src={remotecontrolatandt} alt="remotecontrolatandt" />
      </div>

      <div className="section other-atandt-deals">
        <div className="head">
          <h2 className="sect-heading">
            other aT&T <span> deals </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>No-contract internet</h4>
          <br />
          <p>
            AT&T is our choice for best no-contract fiber internet. This
            hard-to-find deal gives you the flexibility to leave your provider
            whenever you want. You’re free to move or change providers without
            paying an early termination fee on your internet plan.
            <br />
            Internet rarely comes without an annual contract—some of the other
            no-contract internet providers include Verizon Fios, Optimum,
            Spectrum, and CenturyLink. If you go with AT&T’s competitor Xfinity,
            you can pay more to get a no-contract internet deal—usually about
            $10 more a month on top of your usual internet costs.
          </p>
          <hr className="hr" />
          <div className="btn">
            <Link href={"#"}>check availability</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Included equipment costs</h4>
          <br />
          <p>
            Most internet providers charge extra for internet equipment—usually
            between $10 and $15. But AT&T includes the cost of its Wi-Fi gateway
            rental ($10 a month) with its advertised pricing for its internet
            packages.
            <br />
            Sure, you’re still paying this cost, but at least you know about it
            from the get-go, as opposed to other providers who slap on the
            hidden fee during your checkout. We’re fans of AT&T’s transparency
            here.
          </p>
          <hr className="hr" />
          <div className="btn">
            <Link href={"#"}>check availability</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Unlimited internet data</h4>
          <br />
          <p>
            AT&T Fiber plans come with unlimited data. Avoiding expensive data
            cap overage charges frees you up to zoom around the internet at 5
            Gbps download speeds without a care in the world.
          </p>
          <hr className="hr" />
          <div className="btn">
            <Link href={"#"}>check availability</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>$5/mo. off with Autopay and Paperless Bill</h4>
          <br />
          <p>
            This perk is less flashy but just as important as AT&T’s other
            discounts. When you opt for automatic bill payment and paperless
            billing, you not only save a tree, but you also save $5 a month on
            your internet bill.
            <br />
            These savings are already calculated into AT&T’s advertised prices,
            though, so it’s easy to forget about it, as nice as it is to have.
          </p>
          <hr className="hr" />
          <div className="btn">
            <Link href={"#"}>check availability</Link>
          </div>
        </div>
      </div>

      <div className="section atandt-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> AT&T deals and promotions </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Does AT&T have any deals
                for existing customers?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Most of AT&T’s deals apply to new customers, but existing
                  subscribers can take advantage of some deals by upgrading
                  their service. Contact AT&T customer support to negotiate for
                  an upgrade and get in on select deals.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Does AT&T have any deals for existing customers?"}
            cssClass={"faq-content"}
          >
            <p>
              Most of AT&T’s deals apply to new customers, but existing
              subscribers can take advantage of some deals by upgrading their
              service. Contact AT&T customer support to negotiate for an upgrade
              and get in on select deals.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does AT&T offer deals to
                senior citizens?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  There are no senior discounts available for AT&T Internet
                  services. But, if you’re on SNAP (Supplemental Nutrition
                  Assistance Program), you may qualify for low-speed (up to 100
                  Mbps) Access internet for up to $30 a month. Check out our
                  low-income internet guide for more information.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does AT&T offer deals to senior citizens?"}
            cssClass={"faq-content"}
          >
            <p>
              There are no senior discounts available for AT&T Internet
              services. But, if you’re on SNAP (Supplemental Nutrition
              Assistance Program), you may qualify for low-speed (up to 100
              Mbps) Access internet for up to $30 a month. Check out our
              low-income internet guide for more information.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does AT&T offer deals on
                wireless service?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  AT&T Wireless offers several deals on mobile service,
                  including up to $1,000 off eligible smartphones when you trade
                  in your old phone.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does AT&T offer deals on wireless service?"}
            cssClass={"faq-content"}
          >
            <p>
              AT&T Wireless offers several deals on mobile service, including up
              to $1,000 off eligible smartphones when you trade in your old
              phone.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How do I get AT&T internet
                for $10 a month?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Access from AT&T is a program that provides low-cost internet
                  service for eligible households. The cost is $30 a month, or
                  less, based on the maximum speed available at your address up
                  to 100 Mbps. Check out our low-income internet guide or our
                  guide to the cheapest AT&T packages for more information.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" How do I get AT&T internet for $10 a month?"}
            cssClass={"faq-content"}
          >
            <p>
              Access from AT&T is a program that provides low-cost internet
              service for eligible households. The cost is $30 a month, or less,
              based on the maximum speed available at your address up to 100
              Mbps. Check out our low-income internet guide or our guide to the
              cheapest AT&T packages for more information.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Does AT&T offer any
                discounts?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  AT&T offers discounted internet for low-income families. If
                  you’re in the market for a new mobile plan, AT&T offers a 25%
                  off discount for military members, veterans, educators,
                  healthcare workers, and their families.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" Does AT&T offer any discounts?"}
            cssClass={"faq-content"}
          >
            <p>
              AT&T offers discounted internet for low-income families. If you’re
              in the market for a new mobile plan, AT&T offers a 25% off
              discount for military members, veterans, educators, healthcare
              workers, and their families.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote verizon-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Disclaimers:</h4>
          <p>
            *INTERNET OFFER: Subj. to change and may be discontinued at any
            time. Price for Internet 1000 for new residential customers & is
            after $5/mo. autopay & paperless bill discount. Pricing for first 12
            months only. After 12 mos., then prevailing rate applies. Autopay &
            Paperless Bill Discount: Discount off the monthly rate when account
            is active & enrolled in both. Pay full plan cost until discount
            starts w/in 2 bill cycles. Must maintain autopay/paperless bill and
            valid email address to continue discount. Additional Fees & Taxes:
            AT&T one-time transactional fees, $10/mo. equipment fee, and monthly
            cost recovery surcharges which are not government-required may
            apply, as well as taxes. See www.att.com/fees for details.
            Installation: $99 installation for full tech install, plus tax where
            applicable. Credit restrictions apply. Pricing subject to change.
            Subj. to Internet Terms of Service at att.com/internet-terms.
            <br />
            <br />
            UP TO $150 REWARD CARD OFFER Ends 12/31/23. For new residential AT&T
            Fiber customers. $100 Reward Card w/ Internet 300 or 500; $150
            Reward Card w/Internet 1Gig of higher plan. Residents of select
            multi-dwelling units are not eligible for this offer. Reward Card:
            Will be sent email or letter with redemption requirements.
            Redemption req’d. w/in 75 days from reward notification email or
            mail date. Reward Card delivered within 3-4 weeks after redemption
            to customers who maintain and pay for qualifying service from
            activation date and through reward fulfillment. Card expires at
            month-end 6 mos after issuance. For cardholder agreement, go to
            rewardcenter.att.com. The AT&T Visa Reward Card is issued by The
            Bancorp Bank pursuant to a license from Visa U.S.A. Inc. and can be
            used everywhere Visa debit cards are accepted in the United States,
            US Virgin Islands, and Puerto Rico. No cash access. The Bancorp
            Bank; Member FDIC. The Bancorp Bank does not endorse or sponsor and
            is not affiliated in any way with any product or service offered by
            AT&T.
            <br />
            <br />
            Get paid to switch: After Reward Card redemption & proof of
            eligibility; seperate redemption required. Ltd. avial/areas.
            <br />
            <br />
            NVIDIA’s GeForce NOW Ultimate Membership Tier Offer: Avail. only in
            the U.S. (excludes Puerto Rico, Guam, Hawaii, and U.S.V.I.)
            Eligibility: New or existing residential customers with AT&T Fiber.
            AT&T account must be in good standing. Must be age 18 years or
            older. Qual. AT&T Services: Internet plans 300M or higher. NVIDIA’s
            GeForce NOW Ultimate Membership Tier Promotion code: For new and
            existing NVIDIA GeForce NOW subscribers. Limit one (1) NVIDIA
            GeForce NOW Ultimate Membership Tier promotion code per AT&T
            account. Promotion code subject to expiration 30 days from receipt.
            New AT&T Fiber customers: Eligible customers will receive an email
            to the email address on their AT&T account with a promotion code and
            instructions to claim the offer in the AT&T Reward Center. Once the
            promotion code is redeemed, within two (2) days, customer will
            receive an email with a link to NVIDIA. Existing AT&T Fiber
            customers: Existing eligible customers must call 1-800-288-2020 for
            verification and redemption instructions. New NVIDIA GeForce NOW
            customers must create an NVIDIA account and verify their email. Once
            email is verified, customers can log in and begin using their NVIDIA
            GeForce NOW 6 mos. Ultimate Membership. Use of NVIDIA GeForce NOW is
            subject to the NVIDIA Terms of Service available at
            https://www.nvidia.com/en-us/geforce-now/terms-of-use/ and NVIDIA
            Privacy Policy available at
            https://www.nvidia.com/en-us/about-nvidia/privacy-policy/.
            Additional terms and restrictions apply. Offer is non-transferrable
            and cannot be resold. Void where prohibited.
          </p>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default AtandtDeals;
