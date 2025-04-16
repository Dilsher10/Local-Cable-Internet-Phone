// import React, { useState } from "react";
import "./at&t-review.scss";
// import SubNav from "../components/sub-nav/SubNav";
// import { atandtNavLinks } from "../assets/data/navLinks/at&tNavLinks";
import InnerPagesHeroTwo from "../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import reviewatandtboy from "../assets/images/reviewatandtboy.png";
import star from "../assets/images/star.png";
import atandtmark from "../assets/images/atandtmark.png";
import atandtbusinesslogo from "../assets/images/atandtbusinesslogo.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../assets/images/quotations.svg";
import signal from "../assets/images/signal.png";
import dotted from "../assets/images/dotted.png";
import CTA from "../components/cta-section/CTA";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../components/accordion/Accordion";
import PackageTable from "../components/package-table/PackageTable";
// import Newsletter from "../components/newsletter/Newsletter";

export const metadata = {
  title: "AT&T Review 2024: Plans, Prices, And Bundles"
};

const AtandtReview = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: atandtbusinesslogo,
      rating: " (4.1/5) ",
      starImg: star,
      desc: "Best internet for performance",
      buttonText: "call to sign up",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: reviewatandtboy,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "AT&T ",
        icon: atandtmark,
      },
      {
        subtitle: "Internet speed:",
        title: "75–5,000 Mbps",
        icon: atandtmark,
      },
      {
        subtitle: "Price:",
        title: "$55.00–$250.00/mo.",
        icon: atandtmark,
      },
      {
        subtitle: "Data cap:",
        title: "Unlimited",
        icon: atandtmark,
      },
    ],

    tableData: [
      {
        head: [
          "Package",
          "Price* ",
          "Download speeds (up to)",
          "Upload speeds (up to)",
          "Data allowance",
          "Details ",
        ],

        body: [
          {
            content: [
              "1. ",
              "Internet 1000Best overall package",
              "$80.00/mo.",
              "1,000 Mbps",
              "1,000 Mbps",
              "Fiber",
            ],
            linkPath: "# ",
          },
          {
            content: [
              "2. ",
              "5 Gig InternetFastest package",
              "$250.00/mo.",
              "5,000 Mbps",
              "5,000 Mbps",
              "No data cap",
            ],
            linkPath: "# ",
          },
          {
            content: [
              "3. ",
              "Internet 300Best budget package",
              "$55.00/mo.",
              "300 Mbps",
              "300 Mbps",
              "No data cap",
            ],
            linkPath: "# ",
          },
        ],
      },
    ],

    bottomDesc:
      "Data effective as of post date. Offers and availability may vary by location and are subject to change. *Price after $5/mo Autopay & Paperless bill discount. Taxes and fees apply.",
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
        "Download speeds (up to)",
        "Upload speeds (up to)",
        "Data allowance",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Internet 1000Best overall package",
            "$80.00/mo.",
            "1,000 Mbps",
            "1,000 Mbps",
            "No data cap",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "5 Gig InternetFastest package",
            "$250.00/mo.",
            "5,000 Mbps",
            "5,000 Mbps",
            "No data cap",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Internet 300Best budget package",
            "$55.00/mo.",
            "300 Mbps",
            "300 Mbps",
            "No data cap",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataPlansAndPrice = [
    {
      head: [
        "Package",
        "Price*",
        "Download speeds (up to)",
        "Upload speeds (up to)",
        "Connection type",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Internet 300Best budget package",
            "$55.00/mo.",
            "300 Mbps",
            "300 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Internet 500",
            "$66.00/mo.",
            "500 Mbps",
            "500 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Internet 1000Best overall package",
            "$80.00/mo.",
            "1,000 Mbps",
            "1,000 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "2 Gig Internet",
            "$150.00/mo.",
            "2,000 Mbps",
            "2,000 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "5 Gig InternetFastest package",
            "$250.00/mo.",
            "5,000 Mbps",
            "5,000 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataWirelessPlansAndPrice = [
    {
      head: [
        "Package",
        "Price (1 line)",
        "Price (4 lines)",
        "Data allowance",
        "5G",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "AT&T Unlimited Starter",
            "$65.00/mo.",
            "$140.00/mo.",
            "Unlimited",
            "Yes",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "AT&T Unlimited Extra",
            "$75.00/mo.",
            "$160.00/mo.",
            "Unlimited + 50 GB premium data",
            "Yes",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "AT&T Unlimited EliteBest wireless package",
            "$80.00/mo.",
            "1,000 Mbps",
            "1,000 Mbps",
            "Yes",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataBusiness = [
    {
      head: [
        "Package",
        "Price (1 line)",
        "Connection type",
        "Download speeds (up to)",
        "Upload speeds (up to)",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "AT&T Business",
            "$50.00–$550.00/mo.",
            "Fiber",
            "100 Mbps–1 Tbps",
            "1 Mbps–1 Tbps",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="atandt-review">
      {/* <SubNav links={atandtNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            AT&T Review 2024: Plans, Prices, And Bundles
          </h2>
          <p className="sect-desc">
            Our overview of AT&T internet, wireless, and business services to
            help you make quick decisions on which AT&T products are right for
            you.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-atandt-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is AT&T good?</h4>
          <p>
            AT&T fiber internet is fast, reliable, and relatively affordable. As
            of August 2023, AT&T no longer offers their DSL plans. If you still
            want AT&T internet but don’t live in an AT&T fiber area, check out
            AT&T Internet Air.
            <br />
            AT&T offers high-speed internet and digital VoIP phone service in 22
            states, plus streaming TV bundles through DIRECTV STREAM. AT&T Fiber
            areas have speeds up to 5 Gbps (5,000 Mbps), and with AT&T Internet
            Air, connections max out at 140 Mbps.
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
                  <td>Wide availability</td>
                  <td>Limited fiber availability</td>
                </tr>
                <tr>
                  <td>Internet speeds up to 5 Gbps</td>
                  <td>Expensive business plans</td>
                </tr>
                <tr>
                  <td>Wide selection of business internet and phone plans</td>
                  <td> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Find out if AT&T is available in your area."}
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
          <Link href={"#"}>Deals and promotions</Link>
          <Link href={"#"}>Internet plans</Link>
          <Link href={"#"}>Wireless plans</Link>
          <Link href={"#"}>Business plans</Link>
        </div>

        <div className="package-table-container channels">
          <Image src={signal} alt="mark" className="mark" />
          <h4>Looking for AT&T DSL Internet?</h4>
          <br />
          <p>
            AT&T DSL Internet is no longer available to new customers. Instead,
            check out AT&T Internet Air. At the same price as AT&T’s old DSL
            plan and with nearly the same download and upload speeds, Internet
            Air offers up a solid alternative. Read all the details in our{" "}
            <span className="link">
              <Link href={"?"}>AT&T Internet Air review.</Link>
            </span>
          </p>
        </div>
      </div>

      <div className="section atandt-blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"></p>
        </div>
        <div className="package-table-container channels">
          <Image src={dotted} alt="mark" className="mark" />
          <h4>AT&T deals and promotions</h4>
          <br />
          <p>
            Got a nose for a deal? AT&T has a history of offering Visa Reward
            Cards and streaming subscriptions when you sign up for internet,
            plus free phones with select AT&T Wireless plans. To see the deals
            AT&T offers right now, head over to our AT&T deals page. Or check
            what the competition is up to in our complete list of best internet
            deals for this month.
            <br />
            While deals and promotions are great, what really matters is
            month-to-month value. Let’s see if AT&T’s internet, wireless, and
            business packages have to offer.
          </p>
        </div>
      </div>

      <div className="section best-atandt-packages">
        <div className="head">
          <h2 className="sect-heading">
            <span> Best </span> AT&T packages
          </h2>
          <p className="sect-desc">
            Any of the above three will do you right. We go into more details in
            the sections below, and, for research lovers, we provide links to
            our in-depth reviews of AT&T Internet, Wireless, and Business
            services.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>check availability</Link>
        </div>
        <br />
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
          <br />
          *Price after $5/mo Autopay & Paperless bill discount. Taxes and fees
          apply.
        </p>
      </div>

      <div className="section best-internet-plans-and-price">
        <div className="head">
          <h2 className="sect-heading">
            AT&T internet <span> plans and pricing </span>
          </h2>
          <p className="sect-desc">
            If you live in an AT&T fiber area, lucky you. AT&T Fiber plans start
            at 300 Mbps for $55.00 a month, and in 65 metropolitan areas you can
            get speeds up to 5,000 Mbps for $250.00 a month.
            <br />
            Any AT&T Fiber plan can support tons of TV streaming and online
            gaming at the highest resolutions with minimum buffering. And if you
            work from home, it can enable crystal-clear Zoom calls and fast data
            transfers. Though the 5 Gig Internet plan blows away the competition
            with its sheer bandwidth, it’s excessive—most families will be more
            than fine with 1,000 Mbps.
            <br />
            For more information, read our full AT&T Internet review.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>check availability</Link>
        </div>
        <br />
        <PackageTable item={packageTableDataPlansAndPrice} />
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
          <br />
          *Price after $5/mo Autopay & Paperless bill discount. Taxes and fees
          apply.
        </p>
      </div>

      <div className="section best-atandt-packages-wireless">
        <div className="head">
          <h2 className="sect-heading">
            AT&T wireless <span> plans and pricing </span>
          </h2>
          <p className="sect-desc">
            AT&T Wireless phone plans have up to unlimited calling, texting,
            data, and free 5G speeds. The prices are decent for single lines,
            but they get much better with four-line family plans: the cost is
            $35–$50 per line—a savings of 37–46% over the single-line price.
            <br />
            We recommend AT&T Unlimited Starter ($65 a month) for single folks.
            If you need a family plan, go with AT&T Unlimited Elite ($80 a month
            for one line, $50 a month for four lines) for its generous data
            allowance—and free year of HBO Max™.
            <br />
            You can read more about AT&T Wireless plans, pricing, promos, and
            other details in our AT&T Wireless Review.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>check availability</Link>
        </div>
        <br />
        <PackageTable item={packageTableDataWirelessPlansAndPrice} />
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
          <br />
          *Price after $5/mo Autopay & Paperless bill discount. Taxes and fees
          apply.
        </p>
      </div>

      <div className="section best-internet-plans-and-price-business">
        <div className="head">
          <h2 className="sect-heading">
            AT&T business <span> plans and pricing </span>
          </h2>
          <p className="sect-desc">
            For its business customers, AT&T has four different internet
            products: AT&T Business Fiber, AT&T Internet for Business, AT&T
            Wireless Broadband, and AT&T Dedicated Internet. Plans run $50–$550
            a month, with speeds from 100 Mbps all the way up to 1Tbps.
            <br />
            AT&T Business also offers digital VoIP phone service for businesses
            with unlimited calling (to the US, Canada, Puerto Rico, and Mexico)
            plus more than 20 calling features. Plans and bundles start at $50 a
            month and go all the way up to $550 a month, and cover everything
            from small businesses to larger corporations.
            <br />
            Ultimately, we feel like AT&T Business plans have more to offer
            larger businesses than smaller ones. To learn more about AT&T
            business internet and phone service, read our AT&T Business Review.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>get aT&T business internet</Link>
        </div>
        <br />
        <PackageTable item={packageTableDataBusiness} />
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
          <br />
          *Price after $5/mo Autopay & Paperless bill discount. Taxes and fees
          apply.
        </p>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is AT&T worth it? </span>
          </h2>
          <p className="sect-desc">
            AT&T Business isn’t the cheapest service out there, but, with the
            exception of TV service, it has a viable answer for any business
            telecom need. Its fiber internet plans are especially impressive, if
            you’re in an area to take advantage of them.
            <br />
            For medium-to-large businesses with fatter piggy banks, AT&T
            Business is an easy choice. But smaller operations might struggle
            with even AT&T’s least-expensive plans, both in quality and cost.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>check availability</Link>
        </div>
      </div>

      <div className="section atandt-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> AT&T </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What kind of internet is
                AT&T?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  AT&T offers fiber-optic internet service in 21 states. AT&T no
                  longer offers DSL internet plans.
                  <br />
                  AT&T also offers fixed wireless internet in some rural areas
                  that aren’t serviced by fiber.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What kind of internet is AT&T?"}
            cssClass={"faq-content"}
          >
            <p>
              AT&T offers fiber-optic internet service in 21 states. AT&T no
              longer offers DSL internet plans.
              <br />
              AT&T also offers fixed wireless internet in some rural areas that
              aren’t serviced by fiber.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Are all AT&T phone plans
                wireless?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  AT&T’s Home Phone service, which can be bundled with its
                  internet services, is a digital VoIP landline service separate
                  from AT&T Wireless.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Are all AT&T phone plans wireless?"}
            cssClass={"faq-content"}
          >
            <p>
              AT&T’s Home Phone service, which can be bundled with its internet
              services, is a digital VoIP landline service separate from AT&T
              Wireless.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Which has better coverage,
                Verizon or AT&T?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Both AT&T and Verizon wireless coverage areas span all of the
                  US, Canada (its most populated areas), and Mexico. The big
                  difference is that Verizon has more areas with 5G service.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Which has better coverage, Verizon or AT&T?"}
            cssClass={"faq-content"}
          >
            <p>
              Both AT&T and Verizon wireless coverage areas span all of the US,
              Canada (its most populated areas), and Mexico. The big difference
              is that Verizon has more areas with 5G service.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Do you get a free phone
                when you switch to AT&T Wireless?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Right now you can get the iPhone 13 Pro free when you trade in
                  your old phone with AT&T Wireless.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Do you get a free phone when you switch to AT&T Wireless?"}
            cssClass={"faq-content"}
          >
            <p>
              Right now you can get the iPhone 13 Pro free when you trade in
              your old phone with AT&T Wireless.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> What AT&T plan is best?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  For residential internet service and within AT&T’s fiber
                  coverage area, we recommend AT&T’s 1 Gig Internet plan ($80 a
                  month). It has download and upload speeds up to 1,000 Mbps and
                  a no data cap.
                  <br />
                  If you’re asking about AT&T Wireless service, we recommend
                  AT&T Unlimited Elite because it has unlimited talk, text, and
                  data—plus 100 GB of premium data—for $80.00 a month for one
                  line or $200.00 a month for four lines.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" What AT&T plan is best?"}
            cssClass={"faq-content"}
          >
            <p>
              For residential internet service and within AT&T’s fiber coverage
              area, we recommend AT&T’s 1 Gig Internet plan ($80 a month). It
              has download and upload speeds up to 1,000 Mbps and a no data cap.
              <br />
              If you’re asking about AT&T Wireless service, we recommend AT&T
              Unlimited Elite because it has unlimited talk, text, and data—plus
              100 GB of premium data—for $80.00 a month for one line or $200.00
              a month for four lines.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> Does AT&T pay to switch?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  Currently, AT&T offers up to $250 in credits when you switch
                  to AT&T Wireless, activate service on your current phone, and
                  port-in a new line. Each account can do this for two lines.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" Does AT&T pay to switch?"}
            cssClass={"faq-content"}
          >
            <p>
              Currently, AT&T offers up to $250 in credits when you switch to
              AT&T Wireless, activate service on your current phone, and port-in
              a new line. Each account can do this for two lines.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(7)}>
                <span>{faq === 7 ? "-" : "+"}</span> Can I keep my phone if I
                switch to AT&T?
              </h3>

              <div className={`faq-content ${faq === 7 ? "show" : ""}`}>
                <p>
                  You can keep your phone if you switch to AT&T Wireless—just
                  make sure it’s unlocked and compatible with AT&T. You’ll also
                  get $250 in bill credits, a free SIM card, and waived
                  activation fees.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={" Can I keep my phone if I switch to AT&T?"}
            cssClass={"faq-content"}
          >
            <p>
              You can keep your phone if you switch to AT&T Wireless—just make
              sure it’s unlocked and compatible with AT&T. You’ll also get $250
              in bill credits, a free SIM card, and waived activation fees.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(8)}>
                <span>{faq === 8 ? "-" : "+"}</span> Does AT&T still have TV
                service?
              </h3>

              <div className={`faq-content ${faq === 8 ? "show" : ""}`}>
                <p>
                  AT&T no longer offers TV service. But if you were considering
                  signing up for AT&T TV before it disappeared, check out
                  DIRECTV STREAM—same service, new owner.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"8"}
            title={" Does AT&T still have TV service?"}
            cssClass={"faq-content"}
          >
            <p>
              AT&T no longer offers TV service. But if you were considering
              signing up for AT&T TV before it disappeared, check out DIRECTV
              STREAM—same service, new owner.
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
            CableTV.com’s experts have logged dozens of hours researching
            internet, TV, phone, and wireless providers like AT&T, comparing
            them based on plans, pricing, features, reliability, promotions, and
            more so that consumers know how the providers stack up before they
            sign up for service. For more on our methodology, see our How We
            Rank page.
          </p>
          <h4>Related articles</h4>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"/"}>Xfinity vs. AT&T Internet</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"/"}>Cox vs. AT&T Internet</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"/"}>Best Internet Deals</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: AT&T Internet | AT&T Bundles | AT&T Wireless | AT&T Business
          | AT&T Customer Service
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default AtandtReview;
