// import React, { useState } from "react";
import "./t-mobile-overview.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { tmobileNavLinks } from "../../assets/data/navLinks/tmobileNavLinks";
import tmobileboy from "../../assets/images/tmobile-boy.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import tmobile from "../../assets/images/tmobile.png";
import tmobileicon from "../../assets/images/tmobile-icon.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import dotted from "../../assets/images/dotted.png";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "T-Mobile Review: Cost, Plans, And More"
};

const TMobileOverview = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: tmobile,
      rating: "(3.5/5)",
      starImg: star,
      desc: "Affordable internet",
      buttonText: "view plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: tmobileboy,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "T-Mobile",
        icon: tmobileicon,
      },
      {
        subtitle: "Internet price:",
        title: "$50/mo.",
        icon: tmobileicon,
      },
      {
        subtitle: "Phone and internet price:",
        title: "$115–$230/mo.",
        icon: tmobileicon,
      },
      {
        subtitle: "Internet speed:",
        title: "72-245 Mbps",
        icon: tmobileicon,
      },
    ],

    tableData: [
      {
        head: [
          "Plan",
          "Price",
          "Max download speed",
          "Max upload speed",
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
              "$30.99/mo.",
              "72-245 Mbps",
              "15-31 Mbps",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "*With AutoPay. **Requires one line with T-Mobile Magenta MAX plan. Data effective as of publish date. Offers and availability may vary by location and are subject to change.",
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
    <div className="t-mobile-overview">
      {/* <SubNav links={tmobileNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            T-Mobile Review 2024: Cost, Plans, And More
          </h2>
          <p className="sect-desc">
            CableTV.com’s experts spent more than a month researching every
            major T-Mobile service.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is T-Mobile good?</h4>
          <p>
            T-Mobile’s 5G Home Internet plans and phone coverage offer excellent
            value if you’re searching for cell phone or internet service. 5G
            home internet isn’t necessarily a one-size-fits-all solution, but
            it’s hard to beat T-Mobile’s options if you need these services.
          </p>
          <h4>Pros and cons</h4>
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
                  <td>Nationwide coverage</td>
                  <td>Limitations for 5G home internet discounts</td>
                </tr>
                <tr>
                  <td>Affordable 5G internet service</td>
                  <td>Mixed availability for 5G home internet</td>
                </tr>
                <tr>
                  <td>No contracts</td>
                  <td>Variable download speeds</td>
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
          <Link href={"#"}>T-Mobile 5G Home Internet plans </Link>
          <Link href={"#"}>T-Mobile cell phone and internet bundles </Link>
          <Link href={"#"}>Features </Link>
        </div>
      </div>

      <CTA
        heading={"Looking for T-Mobile 5G Home Internet?"}
        desc={
          "Enter your zip code below to see if T-Mobile Home Internet is available in your area."
        }
      />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={dotted} alt="dotted" />
          <h4>T-Mobile deals</h4>
          <p>
            T-Mobile’s best deals include cell phone discounts, 5G internet
            savings, and more. Check out our full T-Mobile deals page for the
            latest T-Mobile offers.
          </p>
        </div>
      </div>

      <div className="section home-internet-plans">
        <div className="head">
          <h2 className="sect-heading">
            T-Mobile 5G <span>Home Internet plans</span>
          </h2>
          <p className="sect-desc">
            T-Mobile 5G Home Internet connects your home to the internet using
            T-Mobile’s 5G mobile data network. Home 5G internet isn’t a
            one-size-fits-all solution for households with high internet
            demands. Still, if the price is your biggest concern and your home
            is eligible for service, you’ll find much to like with T-Mobile 5G
            Home Internet service.
            <br />
            Check out our T-Mobile 5G Home Internet review for a full breakdown
            of T-Mobile’s internet service.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data as of post date. Offers and availability may vary with location
          and are subject to change. Packages for existing customers only. * Not
          included in packages. Requires additional free of $10/mo.
        </p>
      </div>

      <CTA
        heading={"Interested in T-Mobile 5G Home Internet?"}
        desc={
          "T-Mobile 5G Home Internet offers fast home 5G internet at a low cost. Enter your zip code below to see if T-Mobile 5G Home Internet is available in your area."
        }
      />

      <div className="section cell-phone-and-internet-bundles">
        <div className="head">
          <h2 className="sect-heading">
            T-Mobile <span>cell phone and internet bundles</span>
          </h2>
          <p className="sect-desc">
            Interested in a home internet and cell phone bundle? T-Mobile offers
            a $20 discount on 5G Home Internet when you bundle it with at least
            one T-Mobile Magenta MAX plan.
            <br />
            Magenta MAX is T-Mobile’s high-end phone plan, and it includes
            features such as unlimited mobile data, a free Netflix subscription,
            and 40GB of mobile hotspot data. You’ll also get large per-line
            discounts when you add up to five cell phone lines to your T-Mobile
            account.
            <br />
            Check out our cell phone and internet bundles guide to learn more
            about combining cell phone and internet service.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          *Requires AutoPay and one T-Mobile Magenta MAX plan.
          <br />
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change.
        </p>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} alt="quotations" className="mark" />
          <h4>Is T-Mobile available in my area?</h4>
          <p className="after-heading">
            T-Mobile has nationwide cell phone coverage, but its 5G Home
            Internet service availability can vary by region. Visit our T-Mobile
            availability guide to learn more about T-Mobile’s service area, and
            enter your zip code below to confirm coverage in your area.
          </p>
          <br />
          <hr />
          <div className="btn">
            <Link href={"#"}>Enter your ZIP code</Link>
          </div>
        </div>
      </div>

      <div className="section features">
        <div className="head">
          <h2 className="sect-heading">
            T-Mobile <span>features</span>
          </h2>
          <p className="sect-desc">
            Whether searching for home internet or cell phone coverage, T-Mobile
            offers a lot to new customers. Check out our other T-Mobile coverage
            to learn more about the mobile carrier and internet provider.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>T-Mobile hotspots</h4>
          <br />
          <p className="after-heading">
            Are you a road warrior? Do you need to get your kid’s tablet online?
            T-Mobile offers multiple ways to add a hotspot (or hotspot
            functionality) to your cell phone plan. Our T-Mobile hotspot guide
            has a full breakdown of the available hotspot options.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>T-Mobile customer service </h4>
          <br />
          <p className="after-heading">
            Having problems with your T-Mobile service? Visit our T-Mobile
            customer service page to learn how to reach a live T-Mobile customer
            support agent.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>T-Mobile vs. the competition </h4>
          <br />
          <p className="after-heading">
            T-Mobile’s biggest 5G home internet competitor is Verizon, which
            offers similar 5G home internet and cell phone bundles. Our T-Mobile
            vs. Verizon 5G Home Internet guide highlights each provider’s
            biggest strengths and weaknesses.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} alt="quotations" className="mark" />
          <h4>Pro tip: </h4>
          <br />
          <p className="after-heading">
            5G home internet is the latest way to get internet to your home, and
            it can be more affordable than cable internet. Visit our 5G Home
            Internet guide to learn more about 5G internet service.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is t-mobile worth it?</span>
          </h2>
          <p className="sect-desc">
            Whether you’re an existing T-Mobile customer or a new shopper,
            T-Mobile’s cell phone and internet plans offer a strong combination
            of value and speed. T-Mobile’s 5G Home Internet availability can be
            tricky to parse, but if your address gets coverage and you’re
            looking for a cheaper alternative to pricey cable internet plans,
            we’d recommend giving T-Mobile a second look.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>check availability</Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>T-Mobile </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Is T-Mobile better than
                Verizon?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Whether T-Mobile is better than Verizon depends on location,
                  budget, and service needs. T-Mobile 5G Home Internet is more
                  widely available than Verizon 5G Home Internet, but Verizon
                  offers perks like free streaming service subscriptions and
                  discounts on its mobile plans.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"Is T-Mobile better than Verizon?"}
            cssClass={"faq-content"}
          >
            <p>
              Whether T-Mobile is better than Verizon depends on location,
              budget, and service needs. T-Mobile 5G Home Internet is more
              widely available than Verizon 5G Home Internet, but Verizon offers
              perks like free streaming service subscriptions and discounts on
              its mobile plans.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How fast is T-Mobile home
                internet?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  T-Mobile home internet has guaranteed download speeds between
                  72-245 Mbps. However, your download speed will also depend on
                  local network traffic and T-Mobile’s 5G coverage in your area.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"How fast is T-Mobile home internet?"}
            cssClass={"faq-content"}
          >
            <p>
              T-Mobile home internet has guaranteed download speeds between
              72-245 Mbps. However, your download speed will also depend on
              local network traffic and T-Mobile’s 5G coverage in your area.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Where is T-Mobile home
                internet available?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  T-Mobile home internet is available in over 40 million homes,
                  including cities like Detroit, Denver, and Oklahoma City.
                  However, T-Mobile 5G Home Internet isn’t fully nationwide—it’s
                  rolling out on a city-by-city basis—so you’ll need to confirm
                  your address with T-Mobile beforehand.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"Where is T-Mobile home internet available?"}
            cssClass={"faq-content"}
          >
            <p>
              T-Mobile home internet is available in over 40 million homes,
              including cities like Detroit, Denver, and Oklahoma City. However,
              T-Mobile 5G Home Internet isn’t fully nationwide—it’s rolling out
              on a city-by-city basis—so you’ll need to confirm your address
              with T-Mobile beforehand.
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
            CableTV.com spent over a month researching T-Mobile’s home internet
            and cell phone services. We also analyzed how T-Mobile compares to
            competitors in coverage, speeds, price, and reliability.
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
                <Link href={"#"}>
                  Verizon 5G Home Internet vs. T-Mobile 5G Home Internet
                </Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Your Guide to Rural Internet Options</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>5G Home Internet Guide</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: T-Mobile 5G Home Internet | T-Mobile Deals | T-Mobile
          Hotspot | T-Mobile Availability | T-Mobile Customer Service
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default TMobileOverview;
