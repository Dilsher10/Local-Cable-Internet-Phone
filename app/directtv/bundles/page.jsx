// import React, { useState } from "react";
import "./direct-tv-bundles.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { directtvNavLinks } from "../../assets/data/navLinks/directtvNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import directtvbundle from "../../assets/images/directtvbundle.png";
import star from "../../assets/images/star.png";
import dsign from "../../assets/images/dsign.png";
import directtvlogo from "../../assets/images/directtvlogo.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "DIRECTV Internet Bundles: Packages, Prices, And More"
};

const DirectTvBundles = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: directtvlogo,
      rating: "(4.5/5)",
      starImg: star,
      desc: "Good for regional sports",
      buttonText: "view Plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: directtvbundle,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "DIRECTV",
        icon: dsign,
      },
      {
        subtitle: "Channel count:",
        title: "165–340+",
        icon: dsign,
      },
      {
        subtitle: "Price:",
        title: "$119.99–$234.99/mo.",
        icon: dsign,
      },
    ],

    tableData: [
      {
        head: [
          "Top packages",
          "Price",
          "Channel count",
          "Download speeds up to",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "DIRECTV PREMIER™ + AT&T Internet 1000",
              "$234.99/mo.",
              "340+",
              "1,000 Mbps",
            ],
            linkPath: "#",
          },

          {
            content: [
              "2.",
              "DIRECTV ENTERTAINMENT + AT&T Internet 300",
              "$139.99/mo.",
              "165+",
              "300 Mbps",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc: " ",
  };
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
  let packageTableDataPlansAndPricing = [
    {
      head: ["Package", "Price*", "Channel count", "Details"],

      body: [
        {
          content: ["1.", "ENTERTAINMENT", "$64.99/mo.**", "165+"],
          linkPath: "#",
        },
        {
          content: ["2.", "CHOICE™", "$84.99/mo.***", "200+"],
          linkPath: "#",
        },
        {
          content: ["3.", "ULTIMATE ", "$109.99/mo. ", "270+ "],
          linkPath: "#",
        },
        {
          content: ["4.", "PREMIER ", "$154.99/mo. ", "340+ "],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataAtAndTInternetPackage = [
    {
      head: ["Package", "Price for first year†", "Channel count", "Details"],

      body: [
        {
          content: ["1.", "AT&T Internet 100", "$55.00/mo.", "100 Mbps"],
          linkPath: "#",
        },
        {
          content: ["2.", "AT&T Internet 300", "$55.00/mo.", "300 Mbps"],
          linkPath: "#",
        },
        {
          content: ["3.", "AT&T Internet 500 ", "$65.00/mo.", "500 Mbps"],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "AT&T Internet 1 Gig Internet ",
            "$80.00/mo.",
            "1000 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "AT&T Internet 2 Gig Internet",
            "$110.00/mo.",
            "2000 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "6.",
            "AT&T Internet 5 Gig Internet",
            "$180.00/mo.",
            "5000 Mbps",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataCenturyLink = [
    {
      head: [
        "Package",
        "Price for first year†",
        "Channel count",
        "Channel count",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Simply Unlimited Internet + ENTERTAINMENT",
            "$114.99/mo.",
            "165+",
            "Up to 140 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Fiber Internet 200 Mbps + CHOICE™",
            "$134.99/mo.",
            "200+",
            "200 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Fiber Gigabit + ULTIMATE",
            "$174.99/mo.",
            "270+",
            "940 Mbps",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataInternetphone = [
    {
      head: [
        "Package",
        "Price*",
        "Channel count",
        "Download speeds up to",
        "Phone plan",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Internet 100 + ENTERTAINMENT + Phone",
            "$144.98/mo.",
            "165+",
            "100 Mbps",
            "Unlimited Nationwide Calling",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Internet 300 + CHOICE™ + Phone",
            "$164.98/mo.",
            "200+",
            "300 Mbps",
            "Unlimited Nationwide Calling",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Internet 500 + ULTIMATE + Phone ",
            "$199.98/mo. ",
            "270 ",
            "500 Mbps ",
            "Unlimited Nationwide Calling ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Internet 1000 + PREMIER + Phone ",
            "$259.98/mo. ",
            "340+ ",
            "1000 Mbps ",
            "Unlimited Nationwide Calling ",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataInternetphoneTwo = [
    {
      head: [
        "Package",
        "Price*",
        "Channel count",
        "Download speeds up to",
        "Phone plan",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Simply Unlimited Internet + ENTERTAINMENT + Phone ",
            "$154.99/mo. ",
            "165+ ",
            "Up to 140 Mbps ",
            "Unlimited Nationwide Calling ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Fiber Internet 200 Mbps + CHOICE™ + Phone ",
            "$174.99/mo. ",
            "200+ ",
            "200 Mbps ",
            "Unlimited Nationwide Calling ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Fiber Gigabit + ULTIMATE + Phone ",
            "$219.99/mo. ",
            "270 Mbpx ",
            "940 Mbps ",
            "Unlimited Nationwide Calling ",
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
    <div className="direct-tv-bundles">
      {/* <SubNav links={directtvNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV Internet Bundles: Packages, Prices, And More
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-direct-tv-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            5-day free trial: Tired of cable and satellite TV but not quite sure
            if you wanna cut the cord?
            <span className="link">
              <Link href={"#"}> DIRECTV STREAM </Link>
            </span>{" "}
            is a good streaming alternative for folks who want the look and feel
            of old-school TV without the installation requirements, equipment
            fees, and other headaches that come with cable.
          </p>
          <br />
          <h4>Are DIRECTV bundles good?</h4>
          <p>
            If you want both internet and DIRECTV, see if AT&T is available in
            your area. You won’t get a bundle discount, but AT&T’s internet
            isn’t too shabby—unless it offers only 10 Mbps download speeds to
            your home. Always check availability with the provider before
            ordering service.
            <br />
            There’s no real reason you can’t sign up for high-speed internet
            with another service and get DIRECTV separately. You may not get a
            cheaper price than bundling AT&T internet and DIRECTV together, but
            if you pick a nicely priced separate internet package, you might get
            the same savings anyway.
          </p>
          <h4>DIRECTV bundles pros and cons</h4>
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
                  <td>Cheap internet plans available</td>
                  <td>Low internet speeds in some areas</td>
                </tr>
                <tr>
                  <td>Included equipment with AT&T Internet</td>
                  <td>Not all available packages advertised</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Find out if DIRECTV bundles are available in your area"}
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
          <Link href={"#"}>Best DIRECTV internet bundles</Link>
          <Link href={"#"}>AT&T internet and DIRECTV bundles </Link>
          <Link href={"#"}>CenturyLink internet and DIRECTV bundles</Link>
          <Link href={"#"}>FAQ</Link>
        </div>
      </div>

      <div className="section direct-tv-internet-bundles">
        <div className="head">
          <h2 className="sect-heading">
            Best DIRECTV <span> internet bundles </span>
          </h2>
          <p className="sect-desc">
            The powerhouse that is DIRECTV’s PREMIER package plus the excellent
            AT&T Internet 1000 plan make for an all-around fantastic package.
            <br />
            But if you’d be happy with just some lifestyle channels and basic
            internet, the DIRECTV ENTERTAINMENT and AT&T Internet 100 bundle
            will take care of you. Your Wi-Fi Gateway Router comes included too,
            so this is a steal of a package with perks most internet and TV
            services don’t offer.
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

      <div className="section direct-tv-bundles-and-pricing">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV <span> bundles and pricing </span>
          </h2>
          <p className="sect-desc">
            Until January 2023, DIRECTV pricing included the Genie DVR, and
            after the first year of the two-year contract, monthly payments
            jumped by up to 38%. That made the actual DIRECTV monthly payment,
            averaged over two years, pretty high.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DIRECTV TV plans and pricing</h4>
          <PackageTable item={packageTableDataPlansAndPricing} />
          <p className="below-table">
            Data as of post date. Offers and availability may vary by location
            and are subject to change. *For 24 mos. plus taxes and fees. **W/
            24-mo. agmt. AutoPay and Paperless Bill req’d. Advanced Receiver
            Service Fee $15/mo. is extra and applies. ***W/ 24-mo. agmt. AutoPay
            and Paperless Bill req’d. Advanced Receiver Service Fee $15/mo. and
            Regional Sports Fee up to $13.99/mo. are extra & apply.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>AT&T internet packages</h4>
          <br />
          <p>
            As you can see, AT&T offers speeds for casual to power users. Most
            households will do fine with 100–500 Mbps. But power users will want
            1 Gig speeds and higher.
          </p>
          <PackageTable item={packageTableDataAtAndTInternetPackage} />
          <p className="below-table">
            Data as of post date. Offers and availability may vary by location
            and are subject to change. *for 12 mos. plus taxes. †for 12 mos.
            plus taxes and RSN fee.
          </p>
          <hr />
          <div className="btn">
            <Link href={"#"}>Bundle with AT&T</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>DIRECTV channel packages + CenturyLink internet packages</h4>
          <br />
          <p>
            CenturyLink has DSL speeds up to 100 Mbps or fiber optic speeds up
            to 940 Mbps. You can bundle either of them with any of DIRECTV’s
            packages when you call to sign up—CenturyLink just doesn’t advertise
            every bundle.
            <br />
            How do you find the price for one of those secret packages? Easy.
            Just add up the price of the{" "}
            <span className="link">
              <Link href={"#"}>CenturyLink internet plan</Link>
            </span>{" "}
            and the
            <span className="link">
              <Link href={"#"}>DIRECTV plan</Link>
            </span>{" "}
            you want. CenturyLink doesn’t offer any discounts or extra benefits
            for bundling the two. You’ll probably even get two separate bills.
            <br />
            Since there aren’t perks for bundling here, look into the other
            <span className="link">
              <Link href={"#"}>internet providers in your area</Link>
            </span>
            . You might find one that offers better speeds and prices, and you
            can still sign up for DIRECTV separately.
          </p>
          <PackageTable item={packageTableDataCenturyLink} />
          <p className="below-table">
            Data effective as of post date. Offers and availability may vary by
            location and are subject to change.
          </p>
          <hr />
          <div className="btn">
            <Link href={"#"}>Bundle with CenturyLink</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>DIRECTV channel packages + AT&T internet and phone</h4>
          <br />
          <p>
            Adding phone to your AT&T Internet and DIRECTV package is $24.99
            more per month (depending on the plan). You’ll get unlimited
            nationwide calling, but not a whole lot else.
            <br />
            These aren’t super impressive packages, but if you need a phone at
            home, it’s not a wrong choice.
          </p>
          <br />
          <PackageTable item={packageTableDataInternetphone} />
          <p className="below-table">
            Data effective as of post date. Offers and availability may vary by
            location and are subject to change. *For 24 mos. plus taxes and
            fees.
          </p>
          <hr />
          <div className="btn">
            <Link href={"#"}>Bundle with AT&T</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>DIRECTV channel packages + CenturyLink internet and phone</h4>
          <br />
          <p>
            CenturyLink’s bundles with DIRECTV are still more expensive than
            AT&T’s when you add home phone service. But CenturyLink takes $10
            off per month on its combined internet and phone services.
            <br />
            Just like its internet and DIRECTV plans, CenturyLink has more
            bundling options with phone than advertised. If you want to figure
            out the cost of a custom plan, Just add the CenturyLink internet,
            phone, and DIRECTV prices together. Then cut $10 off.
            <br />
            And yes, as you might notice if you click through to CenturyLink’s
            phone page, its phone plan is $50 per month. No, we don’t know what
            they’re thinking either.
          </p>
          <br />
          <PackageTable item={packageTableDataInternetphoneTwo} />
          <p className="below-table">
            Data effective as of post date. Offers and availability may vary by
            location and are subject to change. *For 24 mos. plus taxes and
            fees.
          </p>
          <hr />
          <div className="btn">
            <Link href={"#"}>Bundle with CenturyLink</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>Compare DIRECTV packages</h4>
          <br />
          <p>
            Interested in TV-only packages? Check out our in-depth review of{" "}
            <span className="link">
              <Link href={"#"}>DIRECTV packages</Link>
            </span>{" "}
            to see if one is right for you.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is DIRECTV internet bundles worth it?</span>
          </h2>
          <p className="sect-desc">
            AT&T Internet and DIRECTV make a great pair. But be sure to call and
            see what download speeds AT&T offers for your home. If it has only
            10 Mbps available, it may be better to pass on the bundling discount
            to find faster internet elsewhere.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>bundle with DIRECTV</Link>
        </div>
      </div>

      <div className="section direct-tv-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> DIRECTV internet bundles </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Does DIRECTV have internet?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  DIRECTV doesn’t have internet—it offers only satellite TV. But
                  you can bundle your DIRECTV package with AT&T internet if it’s
                  available in your area.
                  <br />
                  If you live in a rural area or need satellite internet for any
                  other reason, Viasat will be your best bet.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"Does DIRECTV have internet?"}
            cssClass={"faq-content"}
          >
            <p>
              DIRECTV doesn’t have internet—it offers only satellite TV. But you
              can bundle your DIRECTV package with AT&T internet if it’s
              available in your area.
              <br />
              If you live in a rural area or need satellite internet for any
              other reason, Viasat will be your best bet.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Who has the best TV and
                internet bundle?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  The best TV and internet bundle will depend on what exactly
                  you want to get out of your TV and internet. If your a sports
                  nut who is interested in DIRECTV, we think DIRECTV CHOICE
                  ($84.99 a month) + AT&T Internet 300 ($55.00 per month) is the
                  best bundle for your money.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"Who has the best TV and internet bundle?"}
            cssClass={"faq-content"}
          >
            <p>
              The best TV and internet bundle will depend on what exactly you
              want to get out of your TV and internet. If your a sports nut who
              is interested in DIRECTV, we think DIRECTV CHOICE ($84.99 a month)
              + AT&T Internet 300 ($55.00 per month) is the best bundle for your
              money.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How much does DIRECTV Wi-Fi
                cost?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  DIRECTV offers only satellite TV service—there is no such
                  thing as DIRECTV internet or DIRECTV Wi-Fi. You can, however,
                  bundle DIRECTV channel packages with internet service from
                  AT&T or Centurylink.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"How much does DIRECTV Wi-Fi cost?"}
            cssClass={"faq-content"}
          >
            <p>
              DIRECTV offers only satellite TV service—there is no such thing as
              DIRECTV internet or DIRECTV Wi-Fi. You can, however, bundle
              DIRECTV channel packages with internet service from AT&T or
              Centurylink.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How much is DIRECTV TV and
                internet?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Well, DIRECTV doesn’t offer internet service—only satellite
                  TV. But you can bundle DIRECTV packages with AT&T or
                  Centurylink internet service.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={"How much is DIRECTV TV and internet?"}
            cssClass={"faq-content"}
          >
            <p>
              Well, DIRECTV doesn’t offer internet service—only satellite TV.
              But you can bundle DIRECTV packages with AT&T or Centurylink
              internet service.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>Are DIRECTV prices good?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  DIRECTV’s prices are better than those of other TV providers,
                  but more expensive than those of its main rival, DISH. DIRECTV
                  prices go up by 30%–38% after the second year, while DISH
                  guarantees its lower prices for two years.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"Are DIRECTV prices good?"}
            cssClass={"faq-content"}
          >
            <p>
              DIRECTV’s prices are better than those of other TV providers, but
              more expensive than those of its main rival, DISH. DIRECTV prices
              go up by 30%–38% after the second year, while DISH guarantees its
              lower prices for two years.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>Does DIRECTV bundle with
                AT&T?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  Yes, DIRECTV bundles with AT&T internet. When you order
                  DIRECTV online, you’ll be given the option to add an AT&T
                  internet plan.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"Does DIRECTV bundle with AT&T?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, DIRECTV bundles with AT&T internet. When you order DIRECTV
              online, you’ll be given the option to add an AT&T internet plan.
            </p>
          </Accordion>
        </div>
      </div>
      <div className="divider">
        <p>
          See also: DIRECTV Overview | DIRECTV Channel Lineup | DIRECTV Customer
          Service
        </p>
      </div>

      <div className="section endnote direct-tv-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Methodology:</h4>
          <p>
            Our TV experts have spent hundreds of hours studying and analyzing
            DIRECTV’s plans and features. We hand-tested the service’s signal
            reliability and overall user experience while evaluating its
            different channel lineups and DVR capabilities. Additionally, we
            pulled data from our annual TV Customer Satisfaction Survey to see
            how DIRECTV ranked against competitors. Check out our{" "}
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
            page to learn more about how CableTV.com approaches its reviews.
          </p>
          <h4>Disclaimers:</h4>
          <p>
            *For 24 mos. plus taxes and fees.w/ 24-mo. agmt. AutoPay and
            Paperless Bill req’d. Advanced Receiver Service Fee $15/mo. is extra
            and applies.w/ 24-mo. agmt. AutoPay and Paperless Bill req’d.
            Advanced Receiver Service Fee $15/mo. and Regional Sports Fee up to
            $13.99/mo. are extra & apply.
          </p>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default DirectTvBundles;
