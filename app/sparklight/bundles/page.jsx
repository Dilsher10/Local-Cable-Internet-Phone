// import React, { useState } from "react";
import "./spark-light-bundles.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { sparklightNavLinks } from "../../assets/data/navLinks/sparklightNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import sparklightgirl from "../../assets/images/spark-light-bundles.png";
import star from "../../assets/images/star.png";
import sparklighticon from "../../assets/images/sparklight-icon.png";
import sparklight from "../../assets/images/sparklight.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import PackageTable from "../../components/package-table/PackageTable";
import dotted from "../../assets/images/dotted.png";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Sparklight bundles review"
};

const SparkLightBundles = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: sparklight,
      rating: "(3.0/5)",
      starImg: star,
      desc: "No contract, money-back guarantee",
      buttonText: "view plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: sparklightgirl,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "sparklight",
        icon: sparklighticon,
      },
      {
        subtitle: "TV Packages Price:",
        title: "$42.00–$121.75/mo.",
        icon: sparklighticon,
      },
      {
        subtitle: "Channel count:",
        title: "20–100+",
        icon: sparklighticon,
      },
      {
        subtitle: "Internet speed:",
        title: "50–1,000 Mbps",
        icon: sparklighticon,
      },
    ],

    tableData: [
      {
        head: [
          "Package",
          "Price* ",
          "Channel count up to",
          "Download speeds up to",
          "Channel count up to ",
          "Phone plan",
          "Details ",
        ],

        body: [
          {
            content: [
              "1.",
              "Standard Cable + Internet 300 ",
              "$186.75/mo. ",
              "300 Mbps ",
              "100 channels ",
              "N/A ",
              ""
            ],
            linkPath: "# ",
          },
          {
            content: [
              "2.",
              " Standard Cable + Standard Phone + Internet 300",
              "$206.75/mo. ",
              "300 Mbps ",
              "100 channels ",
              "Unlimited local & long distance ",
              ""
            ],
            linkPath: "# ",
          },
        ],
      },
    ],

    bottomDesc:
      "Data is as of time of post. Offers and availability may vary by location and are subject to change.",
  };

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };

  let packageTableData = [
    {
      head: [
        "Package",
        "Price*",
        "Channel count",
        "Download speeds up to",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Internet 1000 + PREMIER",
            "$234.99/mo.",
            "340+",
            "1,000 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Internet 100 + ENTERTAINMENT",
            "$119.99/mo.",
            "165+",
            "10–100 Mbps",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataTvPackages = [
    {
      head: [
        "Package",
        "Price*",
        "Channel count",
        "Download speeds up to",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Standard Cable + Internet 200",
            "$85.99/mo.",
            "340+",
            "1,000 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Standard Cable + Internet 300",
            "$95.99/mo.",
            "165+",
            "10–100 Mbps",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="spark-light-bundles">
      {/* <SubNav links={sparklightNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading"> Sparklight bundles review</h2>
          <p className="sect-desc">
            Interested in combining Sparklight services? Here's what you need to
            know about Sparklight bundles.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            Like many telecom companies, Sparklight discounts its services when
            you bundle. Some of its deals are decent, but since Sparklight’s
            plans are pricier than many competitors, it may be better to shop
            around unless you really need one of the contract-free deals
            Sparklight is so good at.
          </p>
          <br />
          <h4>Sparklight (Cable ONE) pros & cons</h4>
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
                  <td> Savings up to $47/mo.</td>
                  <td> Data caps on all internet packages</td>
                </tr>
                <tr>
                  <td> Ongoing savings on select bundles</td>
                  <td> No Viacom TV channels</td>
                </tr>
                <tr>
                  <td> No annual contracts</td>
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
          <Link href={"#"}> Best Sparklight bundles</Link>
          <Link href={"#"}> Sparklight TV and internet bundles</Link>
          <Link href={"#"}>Sparklight phone and internet bundles </Link>
          <Link href={"#"}>Sparklight TV, phone, and internet bundles </Link>
        </div>
      </div>

      <CTA
        heading={"Find out if Sparklight is available in your area"}
        desc={"Enter your zip code above to find out."}
      />

      <div className="section internet-bundles">
        <div className="head">
          <h2 className="sect-heading">
            Best Sparklight <span> bundles </span>
          </h2>
          <p className="sect-desc">
            The bundles above might have clunky names, but they come with
            high-speed internet and a high-enough data cap that you probably
            won’t have to track your data usage to avoid Sparklight’s high
            overage fees. The only difference between the packages lies in
            whether you want phone service or not.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          *For 24 mos. plus taxes and fees. Data effective as of post date.
          Offers and availability may vary by location and are subject to
          change.
        </p>
      </div>

      <div className="section tv-packages">
        <div className="head">
          <h2 className="sect-heading">
            Sparklight <span> internet and TV packages </span>
          </h2>
          <p className="sect-desc">
            Bundling Sparklight services can save you a little bit of cash. On
            Sparklight’s internet and TV bundles, you’ll save $5.00 monthly
            compared to each plan’s normal price. It’s nice to save a few bucks
            for a while at the beginning, though, since Sparklight’s prices are
            higher than average. But if you want faster download speeds with
            Sparklight’s Internet Gig plan (1,000 Mbps for $115.00/mo.), you
            won’t get any bundle savings. Sparklight offers the plan with only a
            la carte pricing, so if you wanted to include Standard Cable with
            Internet Gig, you’d be paying a sizable $236.75 per month. <br />
            And keep in mind that of Sparklight’s TV plans requires an
            additional $12 Sparklight TV Plus charge, which includes the ability
            to watch on up to six screens, plus 200 hours of DVR recording.
            Don’t worry, we’ve already included this charge in our pricing info
            to make it easier for ya. <br />
            Sparklight also enforces a strict data cap policy, even on bundles.
            To learn more about those restrictions, check out our Sparklight
            internet review.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> bundle with sparklight </Link>
        </div>
        <PackageTable item={packageTableDataTvPackages} />
        <br />
        <p className="below-table">
          Data as of publish date. Offers and availability may vary by location
          and are subject to change.
        </p>
      </div>

      <div className="section internet-bundles">
        <div className="head">
          <h2 className="sect-heading">
            Sparklight <span> internet and phone packages </span>
          </h2>
          <p className="sect-desc">
            Sparklight’s standard phone plan is $50 per month, but if you bundle
            it with internet, you can save $32 off the total price. Standard
            Phone includes features like unlimited local and long-distance calls
            (within the continental U.S.). But if you want only TV and phone
            service from Sparklight, you’ll need to buy both services
            separately. You won’t get any bundle savings with TV and phone
            service unless you buy a triple-service bundle.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          *For 24 mos. plus taxes and fees. Data effective as of post date.
          Offers and availability may vary by location and are subject to
          change.
        </p>
      </div>

      <div className="section tv-packages">
        <div className="head">
          <h2 className="sect-heading">
            Sparklight <span> internet, TV, and phone packages </span>
          </h2>
          <p className="sect-desc">
            Sparklight’s triple-service packages come with internet, TV, and
            phone service. Each bundle will save you $47.00 per month on the
            cost of the services separately. Finally—savings that make sense.
            <br />
            The ongoing price of these packages isn’t the most impressive
            compared to Sparklight’s competitors, but you’re definitely getting
            more value here than you would with any of Sparklight’s standalone
            packages.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data as of post date. Offers and availability may vary by location and
          are subject to change..
        </p>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={dotted} alt="dotted" />
          <h4>
            Sparklight (Cable ONE) cool stuff, deals, discounts, and perks
          </h4>
          <p>
            Beyond the savings you can get with specific internet, phone, and TV
            bundles, there are no Sparklight discount to tell you about right
            now. If that changes, we’ll update this section with the good news.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Are Sparklight bundles worth it?</span>
          </h2>
          <p className="sect-desc">
            Sparklight bundles will help you get around the high prices on its
            TV and internet packages. The plans are still a bit pricey, but you
            could consider that a convenience fee for no-contract service.
            <br />
            We wish Sparklight included its GigaONE internet plan in its bundles
            for additional savings and bundle options. But if you’re tired of
            mixing and matching services, a Sparklight bundle still means that
            all your telecom services will come in one bill, which might make it
            marginally less annoying to pay through the nose for.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> sign up for sparklight</Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Sparklight bundles </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What is Cable ONE's new
                name?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Cable ONE is now called Sparklight. It’s the same company but
                  with new branding.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What is Cable ONE's new name?"}
            cssClass={"faq-content"}
          >
            <p>
              Cable ONE is now called Sparklight. It’s the same company but with
              new branding.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does Sparklight have
                Netflix?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Sparklight doesn’t offer a Netflix subscription with any of
                  its packages—but you can use your separate Netflix
                  subscription on Sparklight’s TiVo DVR.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does Sparklight have Netflix?"}
            cssClass={"faq-content"}
          >
            <p>
              Sparklight doesn’t offer a Netflix subscription with any of its
              packages—but you can use your separate Netflix subscription on
              Sparklight’s TiVo DVR.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What is Sparklight's
                internet speed?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Sparklight has internet plans with download speeds up to 50
                  Mbps, 200 Mbps, 300 Mbps, 400 Mbps, 600 Mbps, and 1,000 Mbps.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" What is Sparklight's internet speed?"}
            cssClass={"faq-content"}
          >
            <p>
              Sparklight has internet plans with download speeds up to 50 Mbps,
              200 Mbps, 300 Mbps, 400 Mbps, 600 Mbps, and 1,000 Mbps.
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
            To find out how Sparklight’s bundles stack up against the
            competition, we analyzed Sparklight plans in areas including price,
            download speeds, and channel counts to see how they stacked up
            against the competition. We also drew from our annual internet
            customer satisfaction and TV customer satisfaction surveys to see
            how real Sparklight customers felt about the provider.
            <br />
            To learn more about our research and testing, check out our
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
          </p>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Sparklight Overview | Sparklight TV | Sparklight Internet |
          Sparklight Voice | Sparklight Channel lineup | Sparklight Customer
          service
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default SparkLightBundles;
