// import React, { useState } from "react";
import "./at&t-business.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { atandtNavLinks } from "../../assets/data/navLinks/at&tNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import businessatandt from "../../assets/images/businessatandt.png";
import atandtmark from "../../assets/images/atandtmark.png";
import star from "../../assets/images/star.png";
import atandtbusinesslogo from "../../assets/images/atandtbusinesslogo.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import dotted from "../../assets/images/dotted.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: ""
};

const AtandtBusiness = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: atandtbusinesslogo,
      rating: " ",
      // starImg: " ",
      starImg: star,
      desc: "Fast fiber internet",
      buttonText: "view plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: businessatandt,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "AT&T Business",
        icon: atandtmark,
      },
      {
        subtitle: "Price:",
        title: "Starting at $60/mo.",
        icon: atandtmark,
      },
      {
        subtitle: "Services:",
        title: "Internet, TV & Phone",
        icon: atandtmark,
      },
    ],

    tableData: [
      {
        head: ["Our Pick", "Price ", "Standout Features", "Details "],

        body: [
          {
            content: [
              "1. ",
              "Business Fiber 100",
              "$140.00/mo.",
              "Download speeds up to100 Mbps",
            ],
            linkPath: "# ",
          },
        ],
      },
    ],

    bottomDesc:
      "Data effective as of post date. Offers and availability may vary by location and are subject to change.",
  };
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  let packageTableData = [
    {
      head: ["Services", "Price", "other features", "Details"],

      body: [
        {
          content: [
            "1.",
            "Internet",
            "$60–$300/mo.",
            "25 Mbps –1 Gbps & Fiber plans",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "TV",
            "$29.99–$89.99/mo.",
            "90–155+ channels & DIRECTV packages",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Phone",
            "$60–$75/mo.",
            "Local and long-distance calling & Digital VoIP phone",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Bundles",
            "$70–$135/mo.",
            "Up to 155 channels and 1 Gbps & Double and triple bundles",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataBusinessInternet = [
    {
      head: ["Our Pick", "Price", "Standout Features", "Details"],

      body: [
        {
          content: [
            "1.",
            "Business Fiber 100",
            "$140–$300/mo.",
            "Download speeds up to100 Mbps",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataBusinessTv = [
    {
      head: ["Our Pick", "Price", "Standout Features", "Details"],

      body: [
        {
          content: [
            "1.",
            "Commercial XTRA Pack",
            "$89.99/mo.",
            "DIRECTV package",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataBusinessPhone = [
    {
      head: ["Our Pick", "Price", "Standout Features", "Details"],

      body: [
        {
          content: [
            "1.",
            "Local Unlimited + Long Distance",
            "$75.00/mo.",
            "Digital VoIP phone",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataBusinessBundle = [
    {
      head: ["Our Pick", "Price", "Standout Features", "Details"],

      body: [
        {
          content: [
            "1.",
            "Internet 100 + AT&T Phone",
            "$135.00/mo.",
            "100 Mbps download speed; Unlimited calling in US, Canada, and Mexico",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="atandt-business">
      {/* <SubNav links={atandtNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">AT&T Business Review 2024</h2>
          <p className="sect-desc">
            Our experts put in the hours to research AT&T Business services so
            you don’t have to.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-atandt-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Looking for AT&T DSL Internet?</h4>
          <p>
            AT&T DSL Internet is no longer available to new customers. Instead,
            check out AT&T Internet Air. At the same price as AT&T’s old DSL
            plan and with nearly the same download and upload speeds, Internet
            Air offers up a solid alternative. Read all the details in our AT&T
            Internet Air review.
            <br />
            If your workplace needs performance and speed, AT&T Business more
            than delivers—just be prepared to pay more than you might be
            comfortable with.
            <br />
            If you’re looking for small business internet on a budget, we
            recommend Business Fiber 100, but telecom giant AT&T has an
            internet, phone, and TV plan for almost every business, if not
            necessarily every budget. Even its lower-tier business plans are on
            the pricey side, and AT&T’s deluxe fiber-optic internet package
            could set you back as much as $500 a month.
          </p>

          <h4>AT&T Business pros and cons</h4>
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
                  <td>No contracts on fiber plans</td>
                  <td>Expensive plans</td>
                </tr>
                <tr>
                  <td>Unlimited cloud storage and data usage</td>
                  <td>Limited fiber network</td>
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
          <Link href={"#"}>Plans</Link>
          <Link href={"#"}>Fees</Link>
          <Link href={"#"}>Contracts</Link>
          <Link href={"#"}>Final take</Link>
          <Link href={"#"}>FAQ</Link>
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
          <h4>AT&T Business promotions and deals</h4>
          <br />
          <p>
            AT&T Business offers a two-year price guarantee on select internet
            service plans.
          </p>
        </div>
      </div>

      <div className="section atandt-business-plans-and-pricing">
        <div className="head">
          <h2 className="sect-heading">
            AT&T <span> Business plans and pricing </span>
          </h2>
          <p className="sect-desc">
            AT&T Business uses several delivery models to get the job done. Its
            internet services are delivered through newer fiber-optic cables,
            and its phone services are a mix of DSL and fiber lines. Also, its
            television service comes from DIRECTV (just one of the 98 media and
            telecom brands that AT&T owns).
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section atandt-business-internet">
        <div className="head">
          <h2 className="sect-heading">
            AT&T <span> Business Internet </span>
          </h2>
          <p className="sect-desc">
            If you’re in an area serviced by AT&T Business Fiber, we recommend
            the Business Fiber 100 plan. Its mid-level speed rate and price tag
            work well for a small- to medium-sized business on a budget.
            <br />
            We’d suggest larger businesses with fewer budget concerns go for the
            primo Business Fiber 1000—1 Gbps (1 gigabit per second, which is the
            same as 1,000 megabits per second, or Mbps) is fast, even for
            multi-user business use.
          </p>
        </div>
        <PackageTable item={packageTableDataBusinessInternet} />
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section atandt-business-tv">
        <div className="head">
          <h2 className="sect-heading">
            AT&T <span> Business TV </span>
          </h2>
          <p className="sect-desc">
            AT&T owns DIRECTV, and AT&T’s Business TV packages are provided by
            the satellite TV company and split into two categories: 1) business
            place on-site viewing (for offices and shops) and 2) public viewing
            (for restaurants and bars). Both package categories are based on
            DTV’s residential XTRA, ENTERTAINMENT, and SELECT plans. They all
            require a two-year contract.
            <br />
            If you’re operating a sports bar/restaurant, we’d recommend the
            Commercial XTRA PACK to get all the games on all of your screens:
            DIRECTV is a sports must. For any other type of business, though,
            there are less-expensive options to be found in cable or even
            streaming TV.
          </p>
        </div>
        <PackageTable item={packageTableDataBusinessTv} />
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section atandt-business-phone">
        <div className="head">
          <h2 className="sect-heading">
            AT&T <span> Business Phone </span>
          </h2>
          <p className="sect-desc">
            AT&T Business Phone service is VoIP (Voice over Internet Protocol),
            meaning the call travels over the internet rather than traditional
            phone lines. Yes, landline phone systems are complicated these days.
            <br />
            Fortunately, VoIP phone systems simplify things by making
            functionality fully digital. Call forwarding and waiting, voicemail,
            caller ID, speed dialing, and more office-phone necessities are all
            cloud-based (meaning no physical hardware cluttering the office).
            <br />
            A&T also has mobile Business Wireless plans available, of course,
            because it’s AT&T.
          </p>
        </div>
        <PackageTable item={packageTableDataBusinessPhone} />
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section atandt-business-bundles">
        <div className="head">
          <h2 className="sect-heading">
            AT&T <span> Business bundles </span>
          </h2>
          <p className="sect-desc">
            At $135 a month, the Internet 100 + AT&T Phone plan should cover the
            needs of most businesses well. It gives you 100 Mbps of internet
            download speed (a good and scalable baseline speed for businesses)
            and unlimited calling across the US, Canada, and Mexico.
            <br />
            We didn’t include TV because AT&T doesn’t, really: there’s no
            discount on DIRECTV services when bundled. The same standalone
            DIRECTV price applies whether combined with other services or not,
            kind of defeating the point of a bundle.
          </p>
        </div>
        <PackageTable item={packageTableDataBusinessBundle} />
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section atandt-blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"></p>
        </div>
        <div className="package-table-container channels">
          <h4>AT&T Business fees and charges</h4>
          <br />
          <p>
            AT&T will set up your fiber internet connection for just $99. The
            catch is there’s no do-it-yourself option—AT&T has to install the
            fiber hookup.
            <br />
            As for early termination fees, AT&T Fiber requires no contract. We’d
            guess that AT&T expects you’ll be dazzled by fiber’s superior
            performance and it won’t need to lock you down.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>AT&T Business contracts</h4>
          <br />
          <p>
            In addition to having no contract, AT&T Business’s fiber internet
            plans come with a 24-month price guarantee. We like how AT&T is
            incentivizing a service that’s already hard to say no to (if you can
            get it, that is). Plus, the fiber plans come with 30-day money-back
            guarantees.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is AT&T Business worth it? </span>
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
          <Link href={"#"}>get AT&T Business</Link>
        </div>
      </div>

      <div className="section atandt-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> AT&T Business</span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What's the difference
                between DSL and fiber internet?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  DSL (or digital subscriber line) internet is carried over
                  legacy copper telephone lines, which are more widely
                  available. Fiber-optic internet, which transmits data as
                  pulses of light through glass fiber, is a newer technology
                  that’s faster than both DSL and cable.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What's the difference between DSL and fiber internet?"}
            cssClass={"faq-content"}
          >
            <p>
              DSL (or digital subscriber line) internet is carried over legacy
              copper telephone lines, which are more widely available.
              Fiber-optic internet, which transmits data as pulses of light
              through glass fiber, is a newer technology that’s faster than both
              DSL and cable.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Why isn't fiber available
                in my area?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Fiber isn’t available everywhere because it’s a whole new
                  buildout. Only about 25% of the US currently has access to
                  direct fiber internet connections. It’s probably coming to
                  your neighborhood, but thanks to the high cost of laying
                  fiber-optic lines and delays by local bureaucracies, it won’t
                  be overnight.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Why isn't fiber available in my area?"}
            cssClass={"faq-content"}
          >
            <p>
              Fiber isn’t available everywhere because it’s a whole new
              buildout. Only about 25% of the US currently has access to direct
              fiber internet connections. It’s probably coming to your
              neighborhood, but thanks to the high cost of laying fiber-optic
              lines and delays by local bureaucracies, it won’t be overnight.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How much internet speed
                does my business really need?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  How much bandwidth your business needs generally breaks down
                  to your number of employees and actions performed:
                </p>
                <ul>
                  <li>
                    · 15–50 Mbps: 1–2 employees; web browsing and emailing
                  </li>
                  <li>
                    · 50–75 Mbps: 1–5 employees; web browsing, emailing, large
                    file transfers, point-of-sale transactions
                  </li>
                  <li>
                    · 75–150 Mbps: 1–7 employees; web browsing, emailing, large
                    file transfers, point-of-sale transactions, data backups,
                    video calls
                  </li>
                  <li>
                    · 150–500 Mbps: 1–10 employees; web browsing, emailing,
                    large file transfers, point-of-sale transactions, data
                    backups, video calls, website hosting
                  </li>
                  <li>· 500 Mbps–1 Gbps: 1–100 employees; all of the above</li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How much internet speed does my business really need?"}
            cssClass={"faq-content"}
          >
            <p>
              How much bandwidth your business needs generally breaks down to
              your number of employees and actions performed:
            </p>
            <ul>
              <li>· 15–50 Mbps: 1–2 employees; web browsing and emailing</li>
              <li>
                · 50–75 Mbps: 1–5 employees; web browsing, emailing, large file
                transfers, point-of-sale transactions
              </li>
              <li>
                · 75–150 Mbps: 1–7 employees; web browsing, emailing, large file
                transfers, point-of-sale transactions, data backups, video calls
              </li>
              <li>
                · 150–500 Mbps: 1–10 employees; web browsing, emailing, large
                file transfers, point-of-sale transactions, data backups, video
                calls, website hosting
              </li>
              <li>· 500 Mbps–1 Gbps: 1–100 employees; all of the above</li>
            </ul>
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
            CableTV.com spends hundreds of hours researching internet providers
            like AT&T. We compare plans, pricing, features, reliability,
            promotions, test the checkout process, and more, then offer our
            expert analysis to our readers to enhance and inform their buying
            experience. For more on our methodology, see our How We Rank page.
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
                <Link href={"/"}>AT&T Customer Service Review</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"/"}>AT&T Deals and Promotions</Link>
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

export default AtandtBusiness;
