// import React, { useState } from "react";
import "./ziply-fiber-review.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { ziplyfiberNavLinks } from "../../assets/data/navLinks/ziplyfiberNavLinks";
import ziplyboy from "../../assets/images/ziply-boy.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import ziply from "../../assets/images/ziply.png";
import ziplyicon from "../../assets/images/ziply-icon.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import dotted from "../../assets/images/dotted.png";
import helpsupportgirl from "../../assets/images/helpsupportgirl.png";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Ziply Fiber Review: Plans, Pricing, And More"
};

const ZiplyFiberReview = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: ziply,
      rating: "(4.5/5)",
      starImg: star,
      desc: "30-day money-back guarantee",
      buttonText: "compare pricing",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: ziplyboy,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "ziply fiber",
        icon: ziplyicon,
      },
      {
        subtitle: "Internet price:",
        title: "50–10,000 Mbps",
        icon: ziplyicon,
      },
      {
        subtitle: "Phone and internet price:",
        title: "$20.00–$300.00/mo.",
        icon: ziplyicon,
      },
    ],

    tableData: [
      {
        head: [
          "Top plans",
          "Price",
          "  download speed",
          "  upload speed",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Editor’s choice Fiber Gig",
              "$50.00/mo.*",
              "1,000 Mbps",
              "1,000 Mbps",
            ],
            linkPath: "#",
          },
          {
            content: [
              "2.",
              "Cheapest Fiber 100/100",
              "$20.00/mo.*",
              "100 Mbps",
              "100 Mbps",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "*With AutoPay. Data effective as of publish date. Offers and availability may vary by location and are subject to change.",
  };
  let packageTableData = [
    {
      head: [
        "Plan",
        "Price*",
        "Max download speed",
        "Max upload speed*",
        ,
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "T-Mobile 5G Home Internet",
            "$50/mo.*",
            "72-245 Mbps",
            "15-31 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "T-Mobile 5G Home Internet with T-Mobile phone plan",
            "$50/mo.*",
            "72-245 Mbps",
            "15-31 Mbps",
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
    <div className="ziply-fiber-review">
      {/* <SubNav links={ziplyfiberNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Ziply Fiber Review 2024: Plans, Pricing, And More
          </h2>
          <p className="sect-desc">
            Our research-rock-star experts tracked down Ziply Fiber info for 18
            hours to see if it’s the best internet provider for you.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is Ziply Fiber good?</h4>
          <p>
            Ziply’s fiber internet service comes with zippy speeds at
            competitive prices. Unfortunately, Ziply’s DSL plan has wildly
            varying speeds—some as low as 1 Mbps, depending on where you live.
            <br />
            All Ziply plans come with some of our favorite perks: unlimited
            data, no annual contracts, and a 30-day money-back guarantee. So if
            you can get a Ziply fiber internet plan, we recommend it over the
            competition. But if Ziply offers only DSL in your area, see if other
            providers offer better speeds before you sign up.
          </p>
          <h4>Ziply Fiber pros and cons</h4>
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
                  <td>Affordable plans</td>
                  <td>DSL speeds that vary by area </td>
                </tr>
                <tr>
                  <td>Unlimited data</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>No contract </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>Fiber plans with matching download/upload speeds </td>
                  <td> </td>
                </tr>
              </tbody>
            </table>
          </div>
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
          <Link href={"#"}> Ziply Fiber deals and promotions</Link>
          <Link href={"#"}> Compare Ziply Fiber plans</Link>
          <Link href={"#"}> Ziply Fiber vs. the competition</Link>
          <Link href={"#"}> Ziply Fiber equipment</Link>
        </div>
      </div>

      <CTA
        heading={"Find internet providers near you"}
        desc={
          "Enter your zip code below to see if Ziply is available in your area."
        }
      />

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={dotted} alt="dotted" />
          <h4>Ziply Fiber deals and promotions</h4>
          <p>
            In addition to a 30-day money-back guarantee, Ziply Fiber sometimes
            offers deals for new customers. Through November 30, you’ll get all
            these perks when you sign up for a Ziply Fiber plan:
          </p>
          <br />
          <ul>
            <li>Free installation</li>
            <li>
              Free first month of internet service with Fiber Gig and 2 Gig
              Fiber plans
            </li>
            <li>
              Free upgrade to Whole Home Wi-Fi with your router lease ($250.00
              value)
            </li>
          </ul>
          <p>
            To see monthly promotions from other internet providers, check out
            our Internet Deals page.
            <br />
            And don’t forget about the Affordable Connectivity Program (ACP). If
            you’re part of a low-income household, you can save up to $30 per
            month on internet, thanks to this government program. Check out our
            free and low-income internet guide to learn more.
          </p>
          <hr />
          <div className="btn">
            <Link href={"#"}>Enter your ZIP code</Link>
          </div>
        </div>
      </div>

      <div className="section cell-phone-and-internet-bundles">
        <div className="head">
          <h2 className="sect-heading">
            Compare Ziply Fiber internet <span>plans and prices</span>
          </h2>
          <p className="sect-desc">
            Ziply Fiber’s internet plans get a big thumbs up from us. Other
            providers charge between $49.99 and $125.00 per month for gigabit
            plans, so that $50.00 per month price lands nicely on the low end.
            Your family probably won’t need the outrageously fast 10 gig
            internet speeds of its fastest plan, but it’s nice to know it’s
            there, we guess. <br />
            You’ll get a moderate price on Fiber 300/300 plan compared to
            similar fiber plans. And it’s a bunch cheaper than most cable
            internet plans at the same speed, so we give it our nod of approval.
            Plans of around 100 Mbps or more are suitable for most homes, so
            this is our go-to recommendation if you don’t need gigabit speeds
            but still want fast internet. The real killer deal is Fiber 100/100,
            which starts at $20 a month. The speeds are a little bit low for a
            family of four, but it’s an excellent option for smaller households
            looking to save some cash on internet. <br />
            Of course, all those plans are available only in Ziply Fiber’s fiber
            internet areas. If you’re on Ziply Fiber’s DSL internet plan, it’s a
            whole different story. We’ve seen speeds as slow as 1 Mbps, which is
            just ridiculously lethargic. If you’re in a DSL area, look at
            competitors for faster speeds.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
          <br />
          For new residential customers only. No annual contract required.
          Prices shown are before taxes and fees and require autopay and
          paperless billing. One-time introductory price for first 12 months.
          Afterwards, standard pricing applies.*for the first 12 mos. with
          autopay and paperless billing
        </p>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>Heads up:</h4>
          <p className="after-heading">
            Like most internet providers, Ziply Fiber offers new customers a
            discount for the first 12 months. After that promotional period,
            prices raise to Ziply Fiber’s standard rates. You can see both the
            promotional price and standard rates in the table above. <br />
            You might notice DSL Internet’s price doesn’t change—Ziply Fiber
            doesn’t currently offer promotional pricing on that plan, so the
            price is same for new or ongoing customers.
          </p>
        </div>
      </div>

      <div className="section plans-price">
        <div className="head">
          <h2 className="sect-heading">
            Ziply Fiber <span>internet and phone bundles</span>
          </h2>
          <p className="sect-desc">
            Ziply’s exact phone and internet bundle options depend on Ziply’s
            network in your area. If your address gets Ziply Fiber, you can get
            Ziply’s Home Phone Unlimited Voice over Internet Protocol (VoIP)
            service. The service costs $20.00, although you’ll also need to add
            Ziply’s fiber router rental for an additional $10.00 monthly. But
            for the price—which is in line with other fiber internet
            providers—you’ll get standard features like unlimited nationwide
            coverage and caller ID. <br />
            If your address gets only DSL coverage from Ziply, you’ll have to
            settle for Ziply’s Digital Phone Unlimited plan. You’ll still get
            features like unlimited long-distance calls and won’t have to pay
            for a Ziply router rental, but it’s also relatively pricey at
            $31.99/mo.
          </p>
        </div>

        <div className="package-table-container channels">
          <Image src={helpsupportgirl} alt="dotted" className="mark" />
          <h4>Ziply Fiber customer service</h4>
          <p>
            You can reach Ziply Fiber’s customer service by phone at
            +1-866-699-4759 or through online chat. Ziply Fiber customer support
            is available 24 hours a day, seven days a week. <br />
            That’s standard procedure for most internet providers, but we’re
            glad Ziply Fiber isn’t making you jump through any hoops (such as
            Xfinity’s complete lack of customer service phone number).
          </p>
        </div>
      </div>

      <div className="section competition">
        <div className="head">
          <h2 className="sect-heading">
            Ziply Fiber <span>vs. the competition</span>
          </h2>
          <p className="sect-desc">
            While customers in our recent survey named AT&T among the best
            internet providers, Ziply Fiber’s plans are more affordable. And
            since Ziply is a relatively new up-and-coming provider, it didn’t
            make it onto that survey. We’ll be interested to see how it compares
            in the future. <br />
            Be sure to take a look at CenturyLink, too, if it’s in your area.
            Its gigabit plan is just a tad pricier than Ziply Fiber’s, but we’ve
            seen it offer free equipment when you order online. Since Ziply
            charges $10 per month for equipment, you’ll save some cash if
            CenturyLink has that deal right now. <br />
            Cox isn’t a bad option, especially if you’re in an area where it
            offers faster speeds than Ziply Fiber’s DSL network. But Cox charges
            extra for no-contract plans, while all Ziply Fiber’s plans come
            without an annual contract at no additional cost. Xfinity’s plans
            tend to be more expensive than Ziply Fiber’s, but it’s also a
            reliable alternative to Ziply Fiber’s DSL internet. We just wish its
            no-contract options weren’t so pricey.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
          <br />
          *for the first 12 mos. with autopay and paperless billing
        </p>
      </div>

      <div className="section internet-equiments">
        <div className="head">
          <h2 className="sect-heading">
            Ziply Fiber internet <span>equipment</span>
          </h2>
          <p className="sect-desc">
            Along with your internet plan, you’ll need to rent a Ziply Fiber
            router to get Wi-Fi throughout your home. Whether you have fiber or
            DSL service, your router will cost $10 per month. <br />
            And if you have a large home that’s prone to Wi-Fi dead spots, you
            might consider going for Ziply Fiber’s Whole Home Wi-Fi kit. For $20
            per month, it includes your Ziply Fiber router and three Wi-Fi
            extenders to extend your Wi-Fi’s reach to the far corners of your
            house. <br />
            However, you don’t have to use Ziply Fiber’s router if you don’t
            want to. You can save more money over time by paying for your own
            router upfront. We’ve got some router suggestions if you’re
            interested.
          </p>
        </div>

        <div className="package-table-container channels">
          <Image src={quotationsIcon} alt="dotted" className="mark" />
          <h4>Ziply internet equipment prices</h4>
          <ul>
            <li>Ziply Fiber router: $10.00/mo.</li>
            <li>Whole-Home Wi-Fi: $20.00/mo.</li>
          </ul>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Ziply Fiber worth it?</span>
          </h2>
          <p className="sect-desc">
            Ziply Fiber stands out as a fair and competitively priced internet
            service provider. We’re pleased by its no-contract policy, unlimited
            data, and fast fiber speeds. It may not be the best option if you’re
            on Ziply Fiber’s DSL network, but if you can get in on the fiber
            network, you’re set for a strong, reliable connection.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>view ziply plans</Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Ziply Fiber </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Is Ziply Fiber a Frontier
                company?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Ziply Fiber bought Frontier’s network in Idaho, Montana,
                  Oregon, and Washington in 2020. Though the infrastructure used
                  to belong to Frontier, Ziply Fiber is a separate company.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Is Ziply Fiber a Frontier company?"}
            cssClass={"faq-content"}
          >
            <p>
              Ziply Fiber bought Frontier’s network in Idaho, Montana, Oregon,
              and Washington in 2020. Though the infrastructure used to belong
              to Frontier, Ziply Fiber is a separate company.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does Ziply Fiber have data
                limits?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  All of Ziply Fiber’s plans come with unlimited data
                  allowances.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does Ziply Fiber have data limits?"}
            cssClass={"faq-content"}
          >
            <p>
              All of Ziply Fiber’s plans come with unlimited data allowances.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How much is Ziply Fiber per
                month?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Ziply Fiber plans run from $20.00–$300.00/mo. for the first
                  twelve months. The fiber internet plans increase by $20–$30
                  after your first year of service, but the DSL internet plan’s
                  price remains the same.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How much is Ziply Fiber per month?"}
            cssClass={"faq-content"}
          >
            <p>
              Ziply Fiber plans run from $20.00–$300.00/mo. for the first twelve
              months. The fiber internet plans increase by $20–$30 after your
              first year of service, but the DSL internet plan’s price remains
              the same.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does Ziply Fiber have TV?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Ziply Fiber does not offer TV, but it does encourage users to
                  make the most out of its fiber speeds with a streaming TV
                  provider.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Does Ziply Fiber have TV?"}
            cssClass={"faq-content"}
          >
            <p>
              Ziply Fiber does not offer TV, but it does encourage users to make
              the most out of its fiber speeds with a streaming TV provider.
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
          <h4>Methodology:</h4>
          <p>
            Our internet experts spent 18 hours of online research comparing
            Ziply Fiber’s plans, prices, reliability, features, and customer
            satisfaction with directly competing internet providers and
            providers across the US.
            <br />
            For more information on CableTV.com’s methodology, check out our
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
            page.
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>AT&T Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>CenturyLink Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Xfinity Review</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default ZiplyFiberReview;
