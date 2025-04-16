// import React, { useState } from "react";
import "./direct-tv-deals.scss";
// import { directtvNavLinks } from "../../assets/data/navLinks/directtvNavLinks";
import xfintyTvHeroBg from "../../assets/images/xfinity-tv-hero-bg.jpg";
// import SubNav from "../../components/sub-nav/SubNav";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import PackageCard from "../../components/package-card/PackageCard";
import PackageTable from "../../components/package-table/PackageTable";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";
import quotations from "../../assets/images/quotations.svg";

export const metadata = {
  title: "DIRECTV Deals And Promotions 2024"
};

const DirectTvDeals = () => {
  // const [faq, setFaq] = useState();

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "DIRECTV Deals And Promotions 2024",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "Free premium channels",
      "Up to $400 VISA Reward Card",
      "165–340+ channels",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Satellite TV plans starting at $62.99/mo.",
  };
  let packageTableData = [
    {
      head: ["Deal", "Details", "Expires", "Details"],

      body: [
        {
          content: [
            "1.",
            "Free premium channels",
            "Customers subscribed to the ENTERTAINENT, CHOICE, or ULTIMATE TV packages will receive three free months of Max, SHOWTIME, STARZ, Cinemax, and MGM+.",
            "-",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Up to $400 Visa reward card",
            "New customers get a $100–$400 Visa reward card when they sign up for DIRECTV.",
            "-",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Free Sports Pack for 3 mos.",
            "Get 40+ sports channels like NFL RedZone, NBA TV, and more.",
            "1/6/24",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="direct-tv-deals">
      {/* <SubNav links={directtvNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Best <span>DIRECTV Service </span> Offers
          </h2>
          <p className="sect-desc">
            Are you considering signing up for DIRECTV satellite TV service?
            Before you pick a package, check out these deals on premium channels
            for movie lovers.
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
        <br />
        <p>
          *w/ 24-mo. agmt. AutoPay and Paperless Bill req’d. Advanced Receiver
          Service Fee $15/mo. is extra and applies. **w/ 24-mo. agmt. AutoPay
          and Paperless Bill req’d. Advanced Receiver Service Fee $15/mo. and
          Regional Sports Fee up to $13.99/mo. are extra & apply. ***w/ 24-mo.
          agmt. AutoPay and Paperless Bill req’d. Advanced Receiver Service Fee
          $15/mo. and Regional Sports Fee up to $13.99/mo. are extra & apply.
        </p>
      </div>

      <div className="section direct-tv-deals-and-promotions">
        <div className="head">
          <h2 className="sect-heading">
            Top DIRECTV <span> deals and promotions </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data as of post date. Offers and availability may vary by location and
          are subject to change. <br />
          *for 24 months plus taxes and fees w/ 24-mo. agmt.; AutoPay and
          Paperless Bill req’d. Advanced Receiver Service Fee $15/mo. is extra
          and applies.
        </p>
        <br />
        <div className="package-table-container channels">
          <h4>Max and other premium channels</h4>
          <br />
          <p>
            How many times have you signed up for cable or satellite TV only to
            find that you can’t afford the good stuff—premium channels like
            HBO®? Well, with DIRECTV you can get three free months of the Max™
            streaming service free with the ENTERTAINMENT package ($64.99*, 160+
            channels) and above.
            <br />
            Max (previously HBO Max) doesn’t include the live HBO channels, but
            that’s a pro, not a con. For $15.99 per month, you can stream all
            HBO movies and shows, plus “Max Originals,” whenever you want. So no
            more living on someone else’s clock.
            <br />
            Along with MAX, DIRECTV also offers three free months of CINEMAX®,
            MGM+™, SHOWTIME®, and STARZ® with the ENTERTAINMENT through ULTIMATE
            packages—a total monthly value of about $53.
            <br />
            Just don’t forget to cancel your premium channels before the promo
            period ends or your monthly payment will get ugly. How ugly? Check
            this out: CHOICE ($84.99 a month‡) plus Max ($15.99 a month) and
            those other premiums ($37.96 a month) will make your monthly payment
            $138.94.
          </p>
          <hr />
          <br />
          <p>
            * w/ 24-mo. agmt. AutoPay and Paperless Bill req’d. Advanced
            Receiver Service Fee $15/mo. is extra and applies.† Max offer
            subject to change.‡ w/ 24-mo. agmt. AutoPay and Paperless Bill
            req’d. Advanced Receiver Service Fee $15/mo. and Regional Sports Fee
            up to $13.99/mo. are extra & apply.
          </p>
          <br />
          <div className="btn">
            <Link href={"#"}>get premium channels deal</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>$400 VISA Reward Card</h4>
          <br />
          <p>
            If you’re tired of your satellite TV plan with another provider,
            DIRECTV has always been a smart alternative. And now, it’s a smarter
            choice than ever. Customers who sign up for DIRECTV will get a VISA
            Reward Card worth up to $400.
          </p>
          <hr />
          <br />
          <div className="btn">
            <Link href={"#"}>Get direcTV</Link>
          </div>
        </div>
      </div>

      <CTA
        heading={"Interested in DIRECTV Services?"}
        desc={
          "Some packages may vary by region. To see what DIRECTV deals are available in your area, enter your zip code below:"
        }
      />

      <div className="section direct-tv-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>DIRECTV deals </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What is the best deal on
                DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  We recommend{" "}
                  <span className="link">
                    <Link href={"#"}>DIRECTV’s ENTERTAINMENT package,</Link>
                  </span>{" "}
                  which gives you 165+ channels for $64.99 a month.*
                  <br />
                  *w/ 24-mo. agmt. AutoPay and Paperless Bill req’d. Advanced
                  Receiver Service Fee $15/mo. is extra and applies. † Max offer
                  subject to change.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What is the best deal on DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>
              We recommend{" "}
              <span className="link">
                <Link href={"#"}>DIRECTV’s ENTERTAINMENT package,</Link>
              </span>{" "}
              which gives you 165+ channels for $64.99 a month.*
              <br />
              *w/ 24-mo. agmt. AutoPay and Paperless Bill req’d. Advanced
              Receiver Service Fee $15/mo. is extra and applies. † Max offer
              subject to change.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What specials is DIRECTV
                offering?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>DIRECTV has some pretty juicy promo offers at the moment:</p>
                <ul>
                  <li>
                    · Three free months of Max, CINEMAX, MGM+, SHOWTIME, and
                    STARZ with ENTERTAINMENT ($64.99/mo.*, 160+ channels) or
                    higher
                  </li>
                  <li>· $400 VISA Reward Card</li>
                  <li>· Sports Pack free for three months</li>
                </ul>
                <br />
                <p>
                  * w/ 24-mo. agmt. AutoPay and Paperless Bill req’d. Advanced
                  Receiver Service Fee $15/mo. is extra and applies. † Max offer
                  subject to change.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" What specials is DIRECTV offering?"}
            cssClass={"faq-content"}
          >
            <p>DIRECTV has some pretty juicy promo offers at the moment:</p>
            <ul>
              <li>
                · Three free months of Max, CINEMAX, MGM+, SHOWTIME, and STARZ
                with ENTERTAINMENT ($64.99/mo.*, 160+ channels) or higher
              </li>
              <li>· $400 VISA Reward Card</li>
              <li>· Sports Pack free for three months</li>
            </ul>
            <br />
            <p>
              * w/ 24-mo. agmt. AutoPay and Paperless Bill req’d. Advanced
              Receiver Service Fee $15/mo. is extra and applies. † Max offer
              subject to change.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does DIRECTV offer senior
                discounts?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  No, DIRECTV doesn’t offer senior discounts. DISH, however,
                  offers new customers aged 55 and older a sweet deal with free
                  installation, six free months of equipment protection, and one
                  free movie rental each month. Check the offer out on our DISH
                  deals page.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does DIRECTV offer senior discounts?"}
            cssClass={"faq-content"}
          >
            <p>
              No, DIRECTV doesn’t offer senior discounts. DISH, however, offers
              new customers aged 55 and older a sweet deal with free
              installation, six free months of equipment protection, and one
              free movie rental each month. Check the offer out on our DISH
              deals page.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How can I get DIRECTV to
                lower my bill?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <ul>
                  <li> 1. Call DIRECTV at +1-800-DIRECTV.</li>
                  <li>
                    {" "}
                    2. Ask to speak with DIRECTV’s customer retention
                    department.
                  </li>
                  <li>
                    {" "}
                    3. Politely explain that your payment is too high and that
                    you want to see if DIRECTV could do anything to lower it.
                  </li>
                  <li>
                    {" "}
                    4. It doesn’t hurt to tell DIRECTV that you’re researching
                    other providers, either.
                  </li>
                  <li>
                    {" "}
                    5. If successful, DIRECTV may suggest various qualifying
                    discounts. Be sure to have DIRECTV explain the terms of each
                    offer.
                  </li>
                  <li>
                    {" "}
                    6. Accept the offer that most resembles your pricing goal.
                  </li>
                </ul>
                <br />
                <p>
                  Visit our DIRECTV Customer Service page for a closer look at
                  how to get billing and account support.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" How can I get DIRECTV to lower my bill?"}
            cssClass={"faq-content"}
          >
            <ul>
              <li> 1. Call DIRECTV at +1-800-DIRECTV.</li>
              <li>
                {" "}
                2. Ask to speak with DIRECTV’s customer retention department.
              </li>
              <li>
                {" "}
                3. Politely explain that your payment is too high and that you
                want to see if DIRECTV could do anything to lower it.
              </li>
              <li>
                {" "}
                4. It doesn’t hurt to tell DIRECTV that you’re researching other
                providers, either.
              </li>
              <li>
                {" "}
                5. If successful, DIRECTV may suggest various qualifying
                discounts. Be sure to have DIRECTV explain the terms of each
                offer.
              </li>
              <li>
                {" "}
                6. Accept the offer that most resembles your pricing goal.
              </li>
            </ul>
            <br />
            <p>
              Visit our DIRECTV Customer Service page for a closer look at how
              to get billing and account support.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>What DIRECTV packages
                include Max?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Four DIRECTV packages include Max (formerly HBO Max), but only
                  one doesn’t charge you to keep the channel after the first
                  year of service.
                  <br />
                  DIRECTV’s ENTERTAINMENT package (and higher) include Max free
                  for three months. After that, it auto-renews for $15.99 a
                  month.
                  <br />
                  PREMIER is DIRECTV’s most robust package—in terms of cost and
                  number of channels (340+). Max is included in the
                  $154.99-a-month package*, and there’s no upcharge for Max
                  after the first year. You also get CINEMAX, SHOWTIME, and
                  STARZ with PREMIER.
                  <br />
                  *w/ 24-mo. agmt. AutoPay and Paperless Bill req’d. Advanced
                  Receiver Service Fee $15/mo. and Regional Sports Fee up to
                  $13.99/mo. are extra & apply.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"What DIRECTV packages include Max?"}
            cssClass={"faq-content"}
          >
            <p>
              Four DIRECTV packages include Max (formerly HBO Max), but only one
              doesn’t charge you to keep the channel after the first year of
              service.
              <br />
              DIRECTV’s ENTERTAINMENT package (and higher) include Max free for
              three months. After that, it auto-renews for $15.99 a month.
              <br />
              PREMIER is DIRECTV’s most robust package—in terms of cost and
              number of channels (340+). Max is included in the $154.99-a-month
              package*, and there’s no upcharge for Max after the first year.
              You also get CINEMAX, SHOWTIME, and STARZ with PREMIER.
              <br />
              *w/ 24-mo. agmt. AutoPay and Paperless Bill req’d. Advanced
              Receiver Service Fee $15/mo. and Regional Sports Fee up to
              $13.99/mo. are extra & apply.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>Does DIRECTV have a loyalty
                discount?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  No, DIRECTV doesn’t have a loyalty discount but often offers
                  rewards and incentives to both new and existing customers.
                  Some deals may apply by signing up as a new customer.
                  <br />
                  New and current subscribers interested in DIRECTV deals and
                  promotions can find out about eligibility by calling
                  +1-800-531-5000 from 8 a.m. to 11 p.m. (CT) Monday through
                  Sunday.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"Does DIRECTV have a loyalty discount?"}
            cssClass={"faq-content"}
          >
            <p>
              No, DIRECTV doesn’t have a loyalty discount but often offers
              rewards and incentives to both new and existing customers. Some
              deals may apply by signing up as a new customer.
              <br />
              New and current subscribers interested in DIRECTV deals and
              promotions can find out about eligibility by calling
              +1-800-531-5000 from 8 a.m. to 11 p.m. (CT) Monday through Sunday.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(7)}>
                <span>{faq === 7 ? "-" : "+"}</span>How do I get an existing
                DIRECTV customer discount?
              </h3>

              <div className={`faq-content ${faq === 7 ? "show" : ""}`}>
                <p>
                  Existing DIRECTV customers won’t find discounts out in the
                  open. But you can call DIRECTV at +1-800-531-5000 to inquire
                  about lowering your bill.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={"How do I get an existing DIRECTV customer discount?"}
            cssClass={"faq-content"}
          >
            <p>
              Existing DIRECTV customers won’t find discounts out in the open.
              But you can call DIRECTV at +1-800-531-5000 to inquire about
              lowering your bill.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote direct-tv-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Disclaimer:</h4>
          <p>
            <b>VISA REWARD CARD OFFER:</b> Limited Time Offer. Must maintain
            service through reward fulfillment to remain eligible for offer.
            Customer must order new DIRECTV Satellite or DIRECTV via Internet
            service [min. $64.99/mo. for 24 mos. plus taxes & fees] for $100
            VISA Reward Card. Amount of gift card will vary based on package
            selected ($200 reward card with CHOICE package; $300 reward card
            with ULTIMATE package, $400 reward card with PREMIER package).
            Autopay and Paperless Bill req’d. for Satellite. Must select offer
            at point of sale through the dedicated website, for new residential
            customers in the U.S. (excludes Puerto Rico and U.S.V.I.). Pricing
            for two years. After 2 years, then month to month at then current
            prevailing prices unless cancelled. Additional Fees & Taxes: Price
            excludes Advanced Receiver Service Fee of $15/mo. (which is extra
            and applies to all packages) and Regional Sports Fee of up to
            $13.99/mo. which is extra & applies to CHOICE and/or MÁS ULTRA and
            higher Pkgs. Residents of select multi-dwelling units are not
            eligible for these offers. Redemption: Within 6 weeks of activation
            of qualified service, eligible customers will be sent a Reward
            Notification email with instructions for claiming the reward on the
            DIRECTV Reward Center www.directv-rewardcenter.com. Reward must be
            claimed by the date noted in the email (75 days from the date email
            was sent). If customer’s email returns as undeliverable, a letter
            will be mailed via USPS 3rd class mail. Reward invitation expires if
            not claimed by the date noted in Reward Notification. Customers can
            track their reward status anytime via the DIRECTV Reward Tracker,
            which is located on the DIRECTV Reward Center
            www.directv-rewardcenter.com. Allow three (3) weeks after receipt
            and verification of customer’s claim for delivery card. DIRECTV is
            not responsible for late, lost or misdirected card in mail. Not
            valid for purchase by groups, clubs, businesses or organizations.
            Void where prohibited, licensed, taxed or restricted. LIMIT ONE VISA
            REWARD CARD OFFER PER DIRECTV ACCOUNT. May not be combined with
            other reward card offers on same services. Card expires at month-end
            6 months after issuance. For Cardholder Agreement, go to
            directv-rewardcenter.com. The DIRECTV Visa Reward Card is issued by
            The Bancorp Bank N.A. pursuant to a license from Visa U.S.A. Inc.
            and can be used everywhere Visa debit cards are accepted in the
            United States, the District of Columbia, US Virgin Islands, and
            Puerto Rico. No cash access. The Bancorp Bank N.A.; Member FDIC. The
            Bancorp Bank N.A. does not endorse or sponsor and is not affiliated
            in any way with any product or service offered by DIRECTV.
          </p>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default DirectTvDeals;
