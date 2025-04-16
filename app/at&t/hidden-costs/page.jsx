// import React, { useState } from "react";
import "./at&t-hidden-cost.scss";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { atandtNavLinks } from "../../assets/data/navLinks/at&tNavLinks";
import PackageCard from "../../components/package-card/PackageCard";
// import SubNav from "../../components/sub-nav/SubNav";
import quotationsIcon from "../../assets/images/quotations.svg";
import signal from "../../assets/images/signal.png";
import dotted from "../../assets/images/dotted.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
import Searchbar from "../../components/searchbar/Searchbar";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "AT&T Hidden Costs"
};

const AtandtHiddenCost = () => {
  // const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  let packageTableData = [
    {
      head: [
        "Package name",
        "Price*",
        "Download speeds up to",
        "Connection type",
        "Details",
      ],

      body: [
        {
          content: ["1.", "Internet 300", "$55.00/mo.", "300 Mbps", "Fiber"],
          linkPath: "#",
        },
        {
          content: ["2.", "Internet 500", "$65.00/mo.", "500 Mbps", "Fiber"],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "1 Gig Internet",
            "$80.00/mo.",
            "1,000 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "2 Gig Internet",
            "$110.00/mo.",
            "2,000 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "5 Gig Internet",
            "$180.00/mo.",
            "5,000 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="atandt-hidden-cost">
      {/* <SubNav links={atandtNavLinks} /> */}
      <div className="atandt-costs-hero global-inner-hero">
        <h1>The hidden costs of AT&T internet</h1>
        <p>
          We've dug through the fine print to find hidden fees on your AT&T
          internet plan.
        </p>
      </div>

      <div className="section best-internet-tv-offer">
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

      <div className="endnote is-atandt-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="" />
          <p>
            <span className="link">
              <Link href="/">AT&T’s internet plans</Link>
            </span>{" "}
            come with straightforward prices that don’t raise after a
            promotional period. Plus, the price already includes your equipment
            rental, which is a fee most providers hide.
            <br />
            But there are a few more charges like late fees and installation
            fees to look out for. Let’s dive in.
          </p>
          <br />
          <h4>AT&T pros and cons</h4>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th>
                    Prospects <IoThumbsUpSharp className="icon" />
                  </th>
                  <th>
                    Consequences <IoThumbsDownSharp className="icon" />
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Straightforward pricing</td>
                  <td>$99.00 fee for professional installation</td>
                </tr>
                <tr>
                  <td>Included equipment</td>
                  <td>Limited fiber availability</td>
                </tr>
                <tr>
                  <td>No contracts</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>No charge for self-installation</td>
                  <td> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <StickyHeader />

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
          <Link href={"#"}>AT&T deals and promotions</Link>
          <Link href={"#"}>AT&T internet plans and pricing</Link>
          <Link href={"#"}>AT&T hidden costs</Link>
        </div>

        <div className="package-table-container channels">
          <Image src={signal} alt="signal" className="mark" />
          <h4>Interested in AT&T DSL Internet?</h4>
          <br />
          <p>
            AT&T DSL Internet is no longer available to new customers. Instead,
            check out AT&T Internet Air. At the same price as AT&T’s old DSL
            plan and with nearly the same download and upload speeds, Internet
            Air offers up a solid alternative. Read all the details in our AT&T
            Internet Air review.
          </p>
        </div>
      </div>

      <CTA
        heading={
          "Enter your zip code below to see if AT&T internet plans are available where you live."
        }
        desc={"Enter your zip code below to find out!"}
      />

      <div className="section atandt-blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"></p>
        </div>
        <div className="package-table-container channels">
          <Image src={dotted} alt="" className="mark" />
          <h4>AT&T deals and promotions</h4>
          <br />
          <p>
            AT&T offers some sweet deals when you sign up. Past offers have
            included Visa® Reward Cards and a Max subscription. To see the
            current offers, head over to our AT&T deals page, or check out this
            month’s picks for best internet promotions.
          </p>
        </div>
      </div>

      <div className="section atandt-internet-plans-and-prices">
        <div className="head">
          <h2 className="sect-heading">
            AT&T <span> internet plans and prices </span>
          </h2>
          <p className="sect-desc">
            AT&T’s internet plans don’t use promotional pricing, so you don’t
            have to worry about the prices going up after the first or second
            year. AT&T prices are still subject to change occasionally, though,
            so don’t expect to pay these same prices for your entire lifetime.
            <br />
            Also, since AT&T’s internet plans don’t require an annual contract,
            you won’t have to worry about paying an early termination fee if you
            have to move or want to switch providers. That flexibility is a big
            plus when you don’t want to make a long-term commitment.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
          <br />
          *Plus taxes. Price after $5/mo Autopay & Paperless bill discount (w/in
          2 bills). Monthly State Cost Recovery Charge in TX, OH, NV applies.
        </p>
      </div>

      <div className="section atandt-internet-plans">
        <div className="head">
          <h2 className="sect-heading">
            Hidden costs of <span> AT&T internet plans </span>
          </h2>
          <p className="sect-desc">
            AT&T hidden costs tend to fall into three categories: installation,
            equipment, data fees, and billing fees. Most of these fees can be
            avoided if you’re careful to return equipment after you end your
            AT&T service, stay within data limits, and pay your AT&T bill on
            time.
          </p>
        </div>
        <br />
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Fee</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1.</td>
                <td>Taxes</td>
                <td>Vary by area</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Self-installation fee</td>
                <td>Included</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Technician installation fee</td>
                <td>$99.00 </td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Wi-Fi gateway fee</td>
                <td>Included </td>
              </tr>
              <tr>
                <td>5. </td>
                <td>Wi-Fi extender fee </td>
                <td> $10.00/mo.</td>
              </tr>
              <tr>
                <td> 6.</td>
                <td>Non-return equipment fee for AT&T Gateway </td>
                <td> $150.00</td>
              </tr>
              <tr>
                <td>7. </td>
                <td>Non-return equipment fee for Wi-Fi extenders </td>
                <td> $65.00 per device</td>
              </tr>
              <tr>
                <td>8. </td>
                <td>Data overage on select plans </td>
                <td> $10.00 per 50 GB data (up to $100.00/mo.)</td>
              </tr>
              <tr>
                <td>9. </td>
                <td>Unlimited data for select plans </td>
                <td>$30.00/mo. </td>
              </tr>
              <tr>
                <td>10. </td>
                <td>Late payment fee </td>
                <td>Up to $9.99 </td>
              </tr>
              <tr>
                <td>11. </td>
                <td>Nonsufficient funds fee </td>
                <td>Up to $30.00 per check </td>
              </tr>
              <tr>
                <td>12. </td>
                <td>Payment convenience fee </td>
                <td>Up to $5.00 per payment </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="below-table">
          Data as of post date. Offers and availability may vary and are subject
          to change.
        </p>
      </div>

      <div className="section atandt-installation-fee">
        <div className="head">
          <h2 className="sect-heading">
            AT&T installation fee: free self-install,{" "}
            <span> $99 for professional installation </span>
          </h2>
          <p className="sect-desc">
            Most of the time, it’s a snap to install your AT&T internet. AT&T
            doesn’t charge you for installation if you’re willing to roll up
            your sleeves and DIY it.
            <br />
            But if you end up needing help from a professional, you’ll have to
            pay $99 for AT&T’s technician to come out and help.
          </p>
        </div>
        <br />
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Fee</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1. </td>
                <td>Self-installation fee </td>
                <td>Included </td>
              </tr>
              <tr>
                <td>2. </td>
                <td>Technician installation fee </td>
                <td>$99.00 </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="below-table">
          Data as of post date. Offers and availability may vary and are subject
          to change.
        </p>
      </div>

      <div className="section atandt-equipment-fees">
        <div className="head">
          <h2 className="sect-heading">
            AT&T equipment fees: Wi-Fi gateway included,{" "}
            <span> Wi-Fi extenders $10/mo. </span>
          </h2>
          <p className="sect-desc">
            Your AT&T internet requires an AT&T Wi-Fi gateway to connect your
            home to the internet and set up a wireless network. We’re impressed
            that AT&T has included the equipment in its normal monthly
            price—most other providers slap on an extra fee (as much as $14 per
            month).
            <br />
            If your home is especially large or prone to Wi-Fi dead spots,
            consider AT&T’s Wi-Fi extenders. Each device adds a $10 a month
            rental fee to your bill, but even one will increase your Wi-Fi
            coverage by 1,000 square feet.
            <br />
            And when you eventually leave AT&T service, make sure to return your
            devices to avoid those hefty non-return fees.
          </p>
        </div>
        <br />
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Fee</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1.</td>
                <td>Wi-Fi gateway fee </td>
                <td>Included </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Wi-Fi extender fee </td>
                <td>$10.00/mo. </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Non-return equipment fee for AT&T Gateway </td>
                <td>$150.00 </td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Non-return equipment fee for Wi-Fi extenders </td>
                <td>$65.00 per device </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="below-table">
          Data as of post date. Offers and availability may vary and are subject
          to change.
        </p>
      </div>

      <div className="section atandt-data-overage-fee">
        <div className="head">
          <h2 className="sect-heading">
            AT&T data overage fee:
            <span> $10 per 50 GB data </span>
          </h2>
          <p className="sect-desc">
            Many AT&T plans come with unlimited data, but there are a few plans
            on AT&T’s DSL-hybrid network that have 1 TB data caps
            <br />
            If you go over your data cap, you’ll have to pay $10 for every
            additional block of 50 GB data you use. So, if you use 51 GB over
            your data cap, that’s $20. Yikes! At least the highest amount AT&T
            can charge you in overage fees is $100 per month.
            <br />
            To avoid these charges, you can pay an extra $30 per month up front
            for unlimited data. But most people won’t go over 1 TB—we can help
            you check the math if you’re worried. Plus, as of August 2023, AT&T
            no longer offers DSL plans to new customers. This means that all
            AT&T plans now have unlimited data.
          </p>
        </div>
        <br />
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Fee</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1. </td>
                <td>Data overage on select plans </td>
                <td> $10.00 per 50 GB data (up to $100.00/mo.)</td>
              </tr>
              <tr>
                <td>2. </td>
                <td>Unlimited data for select plans </td>
                <td>$30.00/mo. </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="below-table">
          Data as of post date. Offers and availability may vary and are subject
          to change.
        </p>
      </div>

      <div className="section atandt-late-fees">
        <div className="head">
          <h2 className="sect-heading">
            AT&T late fee:
            <span> up to $9.99 </span>
          </h2>
          <p className="sect-desc">
            AT&T charges up to $9.99 for late payments. And if you pay by check
            and the check bounces, you may have to pay up to $30. Want to call
            in and pay over the phone? Expect to pay a $5 fee each time.
            <br />
            AutoPay is definitely the way to go with AT&T—you save $5 per month
            when you sign up for AutoPay and Paperless bills. These options are
            such no-brainers that all the prices we show for AT&T on CableTV.com
            already include this discount.
          </p>
        </div>
        <br />
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Fee</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1.</td>
                <td>Late payment fee </td>
                <td>Up to $9.99 </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Nonsufficient funds fee </td>
                <td>Up to $30.00 per check </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Payment convenience fee </td>
                <td>Up to $5.00 per payment </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="below-table">
          Data as of post date. Offers and availability may vary and are subject
          to change.
        </p>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is AT&T internet worth it? </span>
          </h2>
          <p className="sect-desc">
            Overall, AT&T keeps things pretty transparent for an internet
            provider. We’re fans of its clear pricing and included equipment
            fee. Make sure you sign up for AutoPay and Paperless billing to
            avoid late fees and get an extra discount.
            <br />
            If you’re not sure AT&T offers service in your area or want to
            compare it to other providers, we can help with that. Enter your zip
            code below to get all your TV and internet options.
          </p>
        </div>
        <Searchbar />
        <br />
        <div className="package-table-container channels">
          <Image src={quotationsIcon} alt="" className="mark" />
          <br />
          <p>
            While AT&T has great prices and few hidden fees, you might be
            curious about your other options. Check out the top internet plans
            for Xfinity, Spectrum, and Optimum to see how your service compares.
          </p>
        </div>
      </div>

      <div className="section atandt-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> AT&T hidden fees</span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Does AT&T add taxes and
                fees?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  AT&T may add taxes based on your location. Other fees to look
                  out for on your AT&T internet service include installation,
                  equipment, data overage, and late payment fees.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Does AT&T add taxes and fees?"}
            cssClass={"faq-content"}
          >
            <p>
              AT&T may add taxes based on your location. Other fees to look out
              for on your AT&T internet service include installation, equipment,
              data overage, and late payment fees.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does AT&T raise prices
                after 12 months?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Your AT&T Fiber plan has straightforward pricing that won’t
                  jump after 12 months of service. And while AT&T Fiber may
                  raise its prices occasionally, it tends to make those
                  announcements in advance
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does AT&T raise prices after 12 months?"}
            cssClass={"faq-content"}
          >
            <p>
              Your AT&T Fiber plan has straightforward pricing that won’t jump
              after 12 months of service. And while AT&T Fiber may raise its
              prices occasionally, it tends to make those announcements in
              advance
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does AT&T charge extra
                fees?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  AT&T Fiber prices are fairly transparent thanks to its
                  included equipment and self-installation fee. Though, you may
                  run into some expenses if you forget to pay your bill or
                  return your equipment.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does AT&T charge extra fees?"}
            cssClass={"faq-content"}
          >
            <p>
              AT&T Fiber prices are fairly transparent thanks to its included
              equipment and self-installation fee. Though, you may run into some
              expenses if you forget to pay your bill or return your equipment.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote atandt-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Methodology:</h4>
          <p>
            Our internet experts have spent hundreds of hours researching
            internet providers like AT&T and testing their services. We compare
            AT&T with other top internet providers based on plans, pricing,
            speeds, features, equipment, and functionality. If you’d like to
            know more about our process, please visit our{" "}
            <span className="link">
              <Link href={"/"}>How We Rank</Link>
            </span>{" "}
            page.
          </p>
          <h4>Related articles</h4>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"/"}>AT&T Internet Review</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"/"}>AT&T Customer Service </Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"/"}>AT&T Troubleshooting Guide</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: AT&T Internet | AT&T Deals and Promotions | AT&T Customer
          Service | AT&T Wireless
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default AtandtHiddenCost;
