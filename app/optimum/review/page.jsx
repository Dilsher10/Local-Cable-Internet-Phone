// import React, { useState } from "react";
import "./optimum-review.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { optimumNavLinks } from "../../assets/data/navLinks/optimumNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import optimumreviewgirl from "../../assets/images/optimumreviewgirl.png";
import star from "../../assets/images/star.png";
import optimummark from "../../assets/images/optimummark.png";
import optimumlogo from "../../assets/images/optimumlogo.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import mark from "../../assets/images/mark.png";
import helpsupportgirl from "../../assets/images/helpsupportgirl.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Optimum TV And Internet Review"
};

const OptimumReview = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: optimumlogo,
      rating: "(4.1/5)",
      starImg: star,
      desc: "NEW! Get A $200 Visa® Prepaid Card. Terms apply.‡",
      buttonText: "call to sign up",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: optimumreviewgirl,

    cardsStrip: [
      {
        subtitle: "Internet speeds:",
        title: "300–5,000 Mbps",
        icon: optimummark,
      },
      {
        subtitle: "Channel count:",
        title: "50–420+",
        icon: optimummark,
      },
      {
        subtitle: "Price:",
        title: "Starting at $40.00/mo.",
        icon: optimummark,
      },
      {
        subtitle: "Deal:",
        title: "$500 contract buyout when you switch",
        icon: optimummark,
      },
    ],

    tableData: [
      {
        head: [
          "Package",
          "Connection type",
          "Price",
          "Download speeds up to*",
          "Channel count",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Premier TV",
              "Cable",
              "$115.00/mo.",
              "N/A",
              "420+",
            ],
            linkPath: "#",
          },
          {
            content: [
              "2.",
              "Fiber Internet 1 Gig",
              "Fiber",
              "$80.00/mo.",
              "940 Mbps",
              "N/A",
            ],
            linkPath: "#",
          },
          {
            content: [
              "3.",
              "Optimum 1 Gig and Premier TV",
              "Cable",
              "$195.00/mo.",
              "940 Mbps",
              "420+",
            ],
            linkPath: "#",
          },
          {
            content: [
              "4.",
              "Fiber Internet 1 Gig and Premier TV",
              "Fiber",
              "$195.00/mo.",
              "940 Mbps",
              "420+",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "Data as of post date. Offers and availability may vary by location and are subject to change. *Wired connection speeds. Wi-Fi speeds may vary.",
  };
  let packageTableData = [
    {
      head: ["TV Plan", "Price", "Live channels", "Details"],

      body: [
        {
          content: ["1.", "Basic TV", "$35.00/mo.", "50+"],
          linkPath: "#",
        },
        {
          content: ["2.", "Core TV", "$75.00/mo.", "210+"],
          linkPath: "#",
        },
        {
          content: ["3.", "Select TV", "$95.00/mo.", "340+"],
          linkPath: "#",
        },
        {
          content: ["4.", "Premier TV", "$115.00/mo.", "420+"],
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
    <div className="optimum-review">
      {/* <SubNav links={optimumNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">Optimum TV And Internet Review</h2>
          <p className="sect-desc">
            Our experts will walk you through Optimum’s affordable internet
            plans—and pricey TV packages.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-optimum-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            Black Friday deals: Did you know that some of the best deals on home
            internet, TV, and mobile service happen around Black Friday? Check
            out our{" "}
            <span className="link">
              <Link href={"#"}> Black Friday Internet and TV Deals </Link>
            </span>{" "}
            page for the latest exclusive offers from top providers in your
            hometown.
          </p>
          <br />
          <h4>Is Optimum good?</h4>
          <p>
            In general, DIRECTV is good. The satellite TV provider has Optimum
            by Altice USA is a solid internet, TV, and phone provider with cable
            and fiber-optic internet speeds up to 5,000 Mbps, up to 420+ live TV
            channels, and home phone service. But while its internet speeds and
            prices are highly competitive, it misses the mark with its
            overpriced cable TV.
            <br />
            Optimum is one of the best internet providers in Connecticut, New
            Jersey, and New York, and it’s just widened its market to 17 more
            states. So if you want to switch to Optimum Internet, take advantage
            of its contract buyout offer—it offers up to $500 to ease the
            transition.
          </p>
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
                  <td>No contracts</td>
                  <td>Limited availability</td>
                </tr>
                <tr>
                  <td>$500 contract buyout</td>
                  <td>Bundling requirements for phone and TV service</td>
                </tr>
                <tr>
                  <td>Affordable internet </td>
                  <td> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Find out if Optimum is available in your area"}
        desc={"Enter your zip code below to find out!"}
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
          <Link href={"#"}>Deals </Link>
          <Link href={"#"}>Internet plans and prices</Link>
          <Link href={"#"}>TV plans and prices</Link>
          <Link href={"#"}>Competition</Link>
        </div>
      </div>

      <div className="section optimum-blank">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> deals </span>
          </h2>
          <p className="sect-desc">
            Optimum customers get a lot of value with their internet plans,
            including a free Wi-Fi 6 gateway. You can also get a deal on Optimum
            Mobile, which uses T-Mobile’s network. When you bundle Optimum
            Internet with Optimum Mobile, you can save up to $15 a month on
            internet.
            <br />
            New customers can also take advantage of Optimum’s sign-up
            promotions. These change occasionally but often include some pretty
            snazzy freebies.
            <br />
            Check out our Optimum deals page for this month’s promotions.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={mark} alt="mark" className="mark" />
          <h4>Update:</h4>
          <br />
          <p>
            As of August 1, 2022, Suddenlink is officially part of Optimum. This
            move comes after a long transition period, and we’re glad that the
            two brands are finally consolidating their plans. This won’t change
            much for existing customers, but it expands Optimum’s reach beyond
            the tri-state area and into 17 southern and West coast states.
          </p>
        </div>
      </div>

      <div className="section optimum-internet-plans-and-prices">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> internet plans and prices </span>
          </h2>
          <p className="sect-desc">
            Your Optimum internet might use a cable or fiber-optic connection,
            depending on which Optimum network operates in your area. Whether
            you have cable or fiber at your place, the prices are the same. But
            we hope you get fiber internet to your home—fiber offers faster
            upload speeds that will come in handy for seamless video calls. But
            both service types provide fast download speeds, which most people
            prioritize for their internet connections.
            <br />
            Optimum 300 and Fiber Internet 300 come with great value for the
            speed and enough juice to handle HD streaming and gaming. For
            internet lovers who want gig speeds to support all their smart home
            devices, work-from-home lifestyle, or 4K video streaming, go for
            Optimum 1 Gig and Fiber Internet 1 Gig. These plans are some of the
            cheapest gigabit plans in the US.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data as of post date. Offers and availability may vary by location and
          are subject to change.
        </p>
        <div className="package-table-container channels">
          <Image src={helpsupportgirl} alt="helpsupportgirl" className="mark" />
          <h4>Need support?</h4>
          <br />
          <p>
            You can contact Optimum customer or tech support by calling these
            region-specific numbers:
          </p>
          <ul>
            <li>
              {" "}
              · Connecticut:{" "}
              <span className="link">
                <Link href={"#"}> +1-203-870-2583</Link>
              </span>
            </li>
            <li>
              {" "}
              · New Jersey:{" "}
              <span className="link">
                <Link href={"#"}> +1-973-230-6046</Link>
              </span>{" "}
            </li>
            <li>
              {" "}
              · New York (Long Island):{" "}
              <span className="link">
                <Link href={"#"}> +1-631-393-0636</Link>
              </span>
            </li>
            <li>
              {" "}
              · New York (the Bronx, Brooklyn, Westchester):{" "}
              <span className="link">
                <Link href={"#"}> +1-718-860-3513</Link>
              </span>
            </li>
          </ul>
          <p>
            You can also chat with reps at{" "}
            <span className="link">
              <Link href={"#"}>Optimum’s online customer support portal,</Link>
            </span>{" "}
            hit them up via Twitter (@OptimumHelp), or visit a{" "}
            <span className="link">
              <Link href={"#"}>local store.</Link>
            </span>
          </p>
        </div>
      </div>

      <div className="section optimum-internet-competition">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> vs. competition </span>
          </h2>
          <p className="sect-desc">
            Optimum bumps elbows with a few major competitors in its small
            service area. Check out our article “Alternatives to Optimum” for a
            full account. But if you want a quick rundown, here are a few things
            to keep in mind:
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Verizon Fios vs. Optimum</h4>
          <br />
          <p>
            <span className="link">
              <Link href={"#"}> Verizon Fios </Link>
            </span>
            is Optimum’s primary competitor. Both providers have similar prices,
            plenty of sign-up incentives, and no contracts. But Optimum offers a
            free internet gateway, while Verizon Fios’s could cost you up to $15
            per month.
            <br />
            But Verizon Fios ranked much higher than Optimum in our TV customer
            satisfaction survey and internet customer satisfaction survey. If a
            better user experience matters more to you than saving a few bucks a
            month, go for Verizon Fios.
            <br />
            Read our full Verizon Fios vs. Optimum review for more information.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity vs. Optimum</h4>
          <br />
          <p>
            <span className="link">
              <Link href={"#"}> Xfinity </Link>
            </span>
            has a few network areas that cross into Optimum territory. But
            Xfinity charges much more for its no-contract plans, while all
            Optimum plans come without an annual contract. And, like Verizon
            Fios, Xfinity’s gateway rental is pretty darn pricey at $14 a month.
            <br />
            For more help choosing, check out our Xfinity vs. Optimum review.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DIRECTV vs. Optimum</h4>
          <br />
          <p>
            <span className="link">
              <Link href={"#"}> Xfinity </Link>
            </span>
            has a few network areas that cross into Optimum territory. But
            Xfinity charges much more for its no-contract plans, while all
            Optimum plans come without an annual contract. And, like Verizon
            Fios, Xfinity’s gateway rental is pretty darn pricey at $14 a month.
            <br />
            To learn more, read our DIRECTV vs. Optimum TV review.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Optimum worth it? </span>
          </h2>
          <p className="sect-desc">
            We really like Optimum’s $500 contract buyout, lack of contracts,
            and the value offered in almost all of its plans—especially its
            top-tier cable and fiber internet packages. Few of Optimum’s
            competitors can beat that value. So go on and sign up for Optimum
            internet and TV service. We think you’ll be pleased.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>view optimum plans</Link>
        </div>
      </div>

      <div className="section optimum-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Optimum </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What is the cheapest
                Optimum package?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  The cheapest internet-only Optimum package is Optimum 300
                  (cable) or Fiber Internet 300. Each costs $40.00 a month and
                  has download speeds up to 300 Mbps. Both are among the most
                  affordable internet plans for the speed, but you’ll get more
                  bang for your buck with faster internet packages—especially
                  the top-tier plans, Optimum 1 Gig and Fiber Internet 1 Gig.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What is the cheapest Optimum package?"}
            cssClass={"faq-content"}
          >
            <p>
              The cheapest internet-only Optimum package is Optimum 300 (cable)
              or Fiber Internet 300. Each costs $40.00 a month and has download
              speeds up to 300 Mbps. Both are among the most affordable internet
              plans for the speed, but you’ll get more bang for your buck with
              faster internet packages—especially the top-tier plans, Optimum 1
              Gig and Fiber Internet 1 Gig.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How can I get Optimum to
                lower my bill?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Try calling Optimum to see if you can drop down to a cheaper
                  package or, if you’ve been with the company for several years,
                  see about a loyalty discount.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" How can I get Optimum to lower my bill?"}
            cssClass={"faq-content"}
          >
            <p>
              Try calling Optimum to see if you can drop down to a cheaper
              package or, if you’ve been with the company for several years, see
              about a loyalty discount.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What packages does Optimum
                offer?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Optimum has four standalone internet packages priced
                  $40.00–$180.00/mo. with speeds up to 300–5,000 Mbps. Optimum’s
                  standalone TV plans cost $35.00–$115.00 a month and have
                  50–420+ channels. Optimum also has several bundles where you
                  can mix and match internet, phone, and TV service for
                  $75.00–$260.00 a month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" What packages does Optimum offer?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum has four standalone internet packages priced
              $40.00–$180.00/mo. with speeds up to 300–5,000 Mbps. Optimum’s
              standalone TV plans cost $35.00–$115.00 a month and have 50–420+
              channels. Optimum also has several bundles where you can mix and
              match internet, phone, and TV service for $75.00–$260.00 a month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does Optimum offer
                discounts for seniors?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  If you’re 62 or older, Optimum offers 10% off of your monthly
                  basic cable bill.
                  <br />
                  You might also try applying for Optimum and Suddenlink’s
                  internet service for lower-income individuals and seniors,
                  Altice Advantage Internet. The plan costs $14.99 a month and
                  has speeds up to 30 Mbps, unlimited data, and discounted
                  standard installation (a one-time fee of $14.99). It’s
                  available to the following customers:
                </p>
                <ul>
                  <li>
                    · K–12 or college students displaced due to school closures
                    caused by the COVID-19 pandemic*
                  </li>
                  <li>
                    · Seniors 65 years of age or older who are eligible for, or
                    currently receive, Supplemental Security Income (SSI)
                  </li>
                  <li>
                    · US military veterans who receive state or federal public
                    assistance
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Does Optimum offer discounts for seniors?"}
            cssClass={"faq-content"}
          >
            <p>
              If you’re 62 or older, Optimum offers 10% off of your monthly
              basic cable bill.
              <br />
              You might also try applying for Optimum and Suddenlink’s internet
              service for lower-income individuals and seniors, Altice Advantage
              Internet. The plan costs $14.99 a month and has speeds up to 30
              Mbps, unlimited data, and discounted standard installation (a
              one-time fee of $14.99). It’s available to the following
              customers:
            </p>
            <ul>
              <li>
                · K–12 or college students displaced due to school closures
                caused by the COVID-19 pandemic*
              </li>
              <li>
                · Seniors 65 years of age or older who are eligible for, or
                currently receive, Supplemental Security Income (SSI)
              </li>
              <li>
                · US military veterans who receive state or federal public
                assistance
              </li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>Why is Optimum so expensive?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Optimum’s plans and bundles are actually some of the cheapest
                  around, but they can get more expensive with extra charges for
                  DVR service, equipment, and broadcast fees. For more
                  information, read our guide to the Hidden Costs of Optimum.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"Why is Optimum so expensive?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum’s plans and bundles are actually some of the cheapest
              around, but they can get more expensive with extra charges for DVR
              service, equipment, and broadcast fees. For more information, read
              our guide to the Hidden Costs of Optimum.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>Is Netflix free with
                Optimum?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>Optimum does not offer free Netflix for customers.</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"Is Netflix free with Optimum?"}
            cssClass={"faq-content"}
          >
            <p>Optimum does not offer free Netflix for customers.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(7)}>
                <span>{faq === 7 ? "-" : "+"}</span>How much is basic cable for
                Optimum?
              </h3>

              <div className={`faq-content ${faq === 7 ? "show" : ""}`}>
                <p>
                  Optimum’s Basic TV plan costs $35 a month for 50+ channels.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={"How much is basic cable for Optimum?"}
            cssClass={"faq-content"}
          >
            <p>Optimum’s Basic TV plan costs $35 a month for 50+ channels.</p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Optimum Internet | Optimum TV | Optimum Channel lineup |
          Optimum Bundles | Optimum Customer Service
        </p>
      </div>

      <div className="section endnote optimum-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Methodology:</h4>
          <p>
            Our experts have logged hundreds of hours researching and testing
            Optimum’s internet and TV plans and bundles in order to help you
            decide if Optimum is the right provider for you. For more
            information on our process, read our
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
            guide
          </p>
          <h4>Related articles:</h4>
          <ul>
            <li>
              <span className="link">
                <Link href={"#"}>How to Change or Cancel Optimum</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"#"}>Optimum Hidden Fees</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"#"}>Optimum Customer Service</Link>
              </span>
            </li>
          </ul>
          <h4>Disclaimers:</h4>
          <p>
            <b>‡Visa® Reward Card:</b> Offer is not available to individuals who
            have previously participated in an Optimum Visa Reward Card
            promotion within the past 12 months. Visa Reward Card will be mailed
            to customers who maintain promotion and remain in good standing with
            no past due or returned payments throughout first 90 days after
            account activation. Allow 4-6 weeks for delivery. Limit 1 per
            customer. Visa Reward Card cannot be used to pay Optimum monthly
            bill. Card value expires in 12 mos. Visa Reward Card may be used
            when making purchases from merchants in the U.S. and District of
            Columbia everywhere Visa debit cards are accepted. No ATM access.
            Terms and Conditions apply to Reward Cards. See Cardholder Agreement
            for details. Visa Reward Card is issued by MetaBank®, N.A., Member
            FDIC pursuant to a license from Visa U.S.A. Inc. This optional offer
            is not a MetaBank product or service nor does MetaBank endorse this
            offer. Card is distributed and serviced by InComm Financial
            Services, Inc., which is licensed as a Money Transmitter by the New
            York State Department of Financial Services.
          </p>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default OptimumReview;
