// import React, { useState } from "react";
import "./optimum-bundle-review.scss";
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
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import dotted from "../../assets/images/dotted.png";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Optimum Packages & Bundles 2024"
};

const OptimumBundleReview = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: optimumlogo,
      rating: "(4.1/5)",
      starImg: star,
      desc: "NEW! Get A $200 Visa® Prepaid Card and free Max. Terms apply.‡",
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
          "Starting price*",
          "Channel count",
          "Download speeds up to",
          "Phone plan",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Premier TV and Optimum 1 Gig or Fiber Internet 1 Gig",
              "$185.00/mo.",
              "420+",
              "940 Mbps",
              "N/A",
            ],
            linkPath: "#",
          },
          {
            content: [
              "2.",
              "Premier TV, home phone, and Optimum 1 Gig or Fiber Internet 1 Gig",
              "$200.00/mo.",
              "420+",
              "940 Mbps",
              "Unlimited calling†",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "Data as of post date. Offers and availability may vary by location and are subject to change. Wired connection speeds. Wi-Fi speeds may vary. * Pricing reflects $5/mo. AutoPay discount. †Unlimited calls are to US, Canada, Puerto Rico, and US Virgin Islands only.",
  };
  let packageTableData = [
    {
      head: [
        "Package",
        "Starting price*",
        "Channel count",
        "Download speeds up to",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Core TV and Optimum 300 or Fiber Internet 300",
            "$115.00/mo.",
            "220+",
            "300 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Select TV and Optimum 500 or Fiber Internet 500",
            "$155.00/mo.",
            "340+",
            "500 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Premier TV and Optimum 1 Gig or Fiber Internet 1 Gig",
            "$185.00/mo.",
            "420+",
            "940 Mbps",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataInternetBundle = [
    {
      head: [
        "Package",
        "Starting price*",
        "Channel count",
        "Download speeds up to",
        "Phone plan",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Core TV and Optimum 300 or Fiber Internet 300",
            "$130.00/mo.",
            "220+",
            "300 Mbps",
            "Unlimited calling†",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Select TV and Optimum 500 or Fiber Internet 500",
            "$170.00/mo.",
            "340+",
            "500 Mbps",
            "Unlimited calling†",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Premier TV and Optimum 1 Gig or Fiber Internet 1 Gig",
            "$185.00/mo.",
            "420+",
            "940 Mbps",
            "Unlimited calling†",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataInternetPlans = [
    {
      head: [
        "Package",
        "Starting price (single line)*",
        "Download speeds up to",
        "Mobile data allowance",
        "Mobile overage speed limit",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "3 GB and Optimum 300 or Fiber Internet 300",
            "$55.00/mo.",
            "300 Mbps",
            "3 GB",
            "128 Kbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Unlimited and Optimum 500 or Fiber Internet 500",
            "$95.00/mo.",
            "500 Mbps",
            "20 GB",
            "512 Kbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Unlimited Max and Optimum 1 Gig or Fiber Internet 1 Gig",
            "$110.00/mo.",
            "940 Mbps",
            "50 GB",
            "512 Kbps",
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
    <div className="optimum-bundle-review">
      {/* <SubNav links={optimumNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">Optimum Packages & Bundles 2024</h2>
          <p className="sect-desc">
            Compare Optimum bundles with input from our experts.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-optimum-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Update:</h4>
          <br />
          <p>
            As of August 1, 2022, Suddenlink is officially becoming Optimum.
            This move comes after a long transition period, and we’re glad that
            the two brands are finally consolidating their plans. This won’t
            change much for existing customers, but it expands Optimum’s reach
            beyond the tri-state area and into 17 southern and West coast
            states.
          </p>
          <br />
          <h4>Are Optimum bundles good?</h4>
          <p>
            Optimum by Altice USA offers fast and affordable internet service
            and a channel-packed (but pricey) cable TV service. But you won’t
            get extra discounts for bundling Optimum internet, TV, or home phone
            service.
            <br />
            To save money when you bundle, combine Optimum Internet with Optimum
            Mobile. You can get up to $15 off your internet plan every month.
            And since Optimum Mobile uses the T-Mobile network, you can expect
            fast data speeds on the go.
          </p>
          <br />
          <h4>Optimum bundles pros and cons</h4>
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
                  <td>No discounts for internet, TV, and home phone bundles</td>
                </tr>
                <tr>
                  <td>Affordable high-speed internet</td>
                  <td>No standalone TV or home phone packages</td>
                </tr>
                <tr>
                  <td>Discounts for internet and mobile bundles </td>
                  <td> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Find out if Optimum bundles are available in your area"}
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
          <Link href={"#"}>Internet and TV bundles</Link>
          <Link href={"#"}>Internet and phone bundles</Link>
          <Link href={"#"}>Internet, TV, and phone bundles</Link>
          <Link href={"#"}>Internet and mobile bundles </Link>
        </div>
      </div>

      <div className="section optimum-blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"></p>
        </div>
        <div className="package-table-container channels">
          <Image src={dotted} alt="mark" className="mark" />
          <h4>Optimum bundle deals</h4>
          <br />
          <p>
            Along with the Optimum Mobile and Optimum Internet discounts,
            Optimum offers sign-up incentives for new customers. These vary from
            month to month—check out our complete, up-to-date list of Optimum
            deals and promotions.
          </p>
          <br />
          <h4>Get Max on Optimum</h4>
          <br />
          <p>
            Optimum currently offers several free Max (formerly HBO Max) deals
            if you sign up for an internet plan:
          </p>
          <ul>
            <li>
              · Get three free months of Max with any Optimum 300 Mbps plan
            </li>
            <li>· Get six free months of Max with any Optimum 500 Mbps plan</li>
            <li>· Get one free year of Max with any Optimum 1 Gig plan</li>
          </ul>
        </div>
      </div>

      <div className="section optimum-bundles-and-pricing">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> bundles and pricing </span>
          </h2>
          <p className="sect-desc">
            Optimum has four types of bundles: Internet and TV (starting at
            $75.00/mo.), Internet and phone (starting at $55.00/mo.), Internet,
            TV, and phone (starting at $90.00/mo.) & Internet and mobile
            (starting at $45.00/mo.)
            <br />
            Let’s explore each bundle type individually.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Optimum internet and TV bundle plans and prices</h4>
          <PackageTable item={packageTableData} />
          <br />
          <p className="below-table">
            Data as of post date. Offers and availability may vary by location
            and are subject to change. Wired connection speeds. Wi-Fi speeds may
            vary. * Pricing reflects $5/mo. AutoPay discount
          </p>
          <br />
          <p>
            You can bundle any Optimum Internet plan with any Optimum TV plan.
            We’ve listed a few bundles above to help you compare prices, but you
            can build any Optimum bundle you like by clicking on our View Plans
            buttons above.
            <br />
            Optimum bundles come with 220–420+ channels and either cable or
            fiber internet based on the Optimum availability in your area.
            Whether you’re in a cable internet or fiber internet area, the
            prices and maximum download speeds will be the same.
            <br />
            If you’re lucky enough to live on Optimum’s fiber network, you can
            expect upload speeds as fast as your plan’s download speeds. High
            upload speeds make uploading large files or conversing over video
            calls a breeze.
            <br />
            But while you won’t get those fast upload speeds on Optimum’s cable
            network, there’s still good news. Optimum’s cable internet beats out
            most of the competition, and it’s our pick for the best cable
            internet provider.
            <br />
            Do you already have TV service but still need internet and a home
            phone line? The next set of Optimum bundles may have what you seek.
          </p>
          <hr className="hr" />
          <div className="btn">
            <Link href={"#"}>View Plans</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} alt="" className="mark" />
          <h4>Pro tip:</h4>
          <br />
          <p>
            Don’t fall for TV providers’ basic cable bundles with 50 or fewer
            channels—you might as well flush your money. There’s no reason to
            pay monthly for local channels and subchannels (which is all you get
            with basic TV plans) that you can get with a $30 over-the-air (OTA)
            antenna.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Optimum internet, TV, and phone bundle plans and prices</h4>
          <PackageTable item={packageTableDataInternetBundle} />
          <br />
          <p className="below-table">
            Data as of post date. Offers and availability may vary by location
            and are subject to change. Wired connection speeds. Wi-Fi speeds may
            vary. *for 1 year. Plus taxes, equipment charges and fees. Pricing
            reflects $5/mo. AutoPay discount †Unlimited calls are to US, Canada,
            Puerto Rico, and US Virgin Islands only.
          </p>
          <br />
          <p>
            You can combine Optimum Internet, Optimum TV, and Optimum Voice in
            an Optimum Triple Play bundle. Like the other bundles we’ve looked
            at, you won’t get any special discounts for combining these
            services. For bundle savings, you’ll want the Optimum Mobile bundles
            below.
          </p>
          <hr className="hr" />
          <div className="btn">
            <Link href={"#"}>View Plans</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Optimum mobile and internet plans and prices</h4>
          <PackageTable item={packageTableDataInternetPlans} />
          <br />
          <p className="below-table">
            Data as of post date. Offers and availability may vary by location
            and are subject to change. Wired connection speeds. Wi-Fi speeds may
            vary. *Pricing reflects $5/mo. AutoPay discount and up to $15/mo.
            bundle discount
          </p>
          <br />
          <p>
            Optimum Mobile uses T-Mobile’s network to offer discounted mobile
            plans for Optimum customers. You can combine any internet plan and
            mobile plan, but we’ve collected a few above to give you a feel of
            the price ranges.
            <br />
            We’ve got a full Optimum Mobile review to give you the rundown on
            how Optimum compares to its other mobile virtual network operator
            (MVNO) competitors.
          </p>
          <hr className="hr" />
          <div className="btn">
            <Link href={"#"}>View Plans</Link>
          </div>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Optimum worth it? </span>
          </h2>
          <p className="sect-desc">
            Optimum’s new bundles have no contracts, up to 420+ channels, up to
            940 Mbps internet connections, and low prices—plus the famous
            Optimum contract buyout remains in effect. But Optimum doesn’t offer
            discounts on most bundles.
            <br />
            We recommend going for Optimum’s standalone internet plans and
            subscribing to a live TV streaming service on the side. Optimum’s
            high-speed internet offers more than enough bandwidth to support
            streaming TV. Or, if you’re all set for TV service but need a phone
            line, try any of Optimum’s internet-and-phone bundles. Both mobile
            and home phone plans offer great value.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>view plans</Link>
        </div>
      </div>

      <div className="section optimum-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Optimum bundles</span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What are Optimum's bundle
                packages?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Optimum has bundles with TV (up to 420+ channels), cable or
                  fiber internet (up to 940 Mbps), and phone service (unlimited
                  calling to the US, Canada, Puerto Rico, and the US Virgin
                  Islands).
                </p>
                <ul>
                  <li>· Internet and TV (starting at $75.00/mo.)</li>
                  <li>· Internet and phone (starting at $55.00/mo.)</li>
                  <li>· Internet, TV, and phone (starting at $90.00/mo.)</li>
                  <li>· Internet and mobile (starting at $45.00/mo.)</li>
                </ul>
                <p>All pricing is for the first 12 months.</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What are Optimum's bundle packages?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum has bundles with TV (up to 420+ channels), cable or fiber
              internet (up to 940 Mbps), and phone service (unlimited calling to
              the US, Canada, Puerto Rico, and the US Virgin Islands).
            </p>
            <ul>
              <li>· Internet and TV (starting at $75.00/mo.)</li>
              <li>· Internet and phone (starting at $55.00/mo.)</li>
              <li>· Internet, TV, and phone (starting at $90.00/mo.)</li>
              <li>· Internet and mobile (starting at $45.00/mo.)</li>
            </ul>
            <p>All pricing is for the first 12 months.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Which Optimum TV and
                internet package is best?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Here are two recommendations—one for Optimum cable internet
                  and one for Optimum fiber internet. Note: connection types
                  vary with service area, and pricing is for the first year
                  only.
                </p>
                <ul>
                  <li>
                    · Cable: Optimum 1 Gig and Premier TV has 940 Mbps and 420+
                    channels for $185.00/mo.
                  </li>
                  <li>
                    · Fiber: Fiber Internet 1 Gig and Premier TV has 940 Mbps
                    and 420+ channels for $195.00/mo.
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Which Optimum TV and internet package is best?"}
            cssClass={"faq-content"}
          >
            <p>
              Here are two recommendations—one for Optimum cable internet and
              one for Optimum fiber internet. Note: connection types vary with
              service area, and pricing is for the first year only.
            </p>
            <ul>
              <li>
                · Cable: Optimum 1 Gig and Premier TV has 940 Mbps and 420+
                channels for $185.00/mo.
              </li>
              <li>
                · Fiber: Fiber Internet 1 Gig and Premier TV has 940 Mbps and
                420+ channels for $195.00/mo.
              </li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What are Optimum's new
                customer deals?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Optimum changes its new customer deals from time to time—check
                  out this month’s Optimum promotions.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" What are Optimum's new customer deals?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum changes its new customer deals from time to time—check out
              this month’s Optimum promotions.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What are Optimum's Core
                package channels?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  There are 210+ channels in Optimum’s Core TV package ($75.00 a
                  month), including AMC, CNN, ESPN, Food Network, Fox News, FX,
                  TBS, and TNT. Channels missing from Core TV include: A&E,
                  Discovery Channel, Hallmark Channel, Hallmark Movies &
                  Mysteries, Investigation Discovery, and TLC.
                  <br />
                  For more on Optimum’s standalone TV plans and channel lineups,
                  see our Optimum TV review and Optimum Channel Lineup Guide.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" What are Optimum's Core package channels?"}
            cssClass={"faq-content"}
          >
            <p>
              There are 210+ channels in Optimum’s Core TV package ($75.00 a
              month), including AMC, CNN, ESPN, Food Network, Fox News, FX, TBS,
              and TNT. Channels missing from Core TV include: A&E, Discovery
              Channel, Hallmark Channel, Hallmark Movies & Mysteries,
              Investigation Discovery, and TLC.
              <br />
              For more on Optimum’s standalone TV plans and channel lineups, see
              our Optimum TV review and Optimum Channel Lineup Guide.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> What channels are in
                Optimum's Premier package?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Optimum’s Premier TV package ($115.00 a month, 420+ channels)
                  includes 29 of the 30 most-watched channels according to
                  Variety, plus premium channels like Max (formerly HBO Max),
                  SHOWTIME®, STARZ®, and STARZ ENCORE®—at no extra cost.1
                  <br />
                  To see other channels included in Premier TV, check out our
                  Optimum Channel Lineup Guide. For more on Optimum TV plans,
                  read our Optimum TV review.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" What channels are in Optimum's Premier package?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum’s Premier TV package ($115.00 a month, 420+ channels)
              includes 29 of the 30 most-watched channels according to Variety,
              plus premium channels like Max (formerly HBO Max), SHOWTIME®,
              STARZ®, and STARZ ENCORE®—at no extra cost.1
              <br />
              To see other channels included in Premier TV, check out our
              Optimum Channel Lineup Guide. For more on Optimum TV plans, read
              our Optimum TV review.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>How much does Optimum Triple
                Play cost?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  Optimum Triple Play bundles cost between $90.00 and $295.00
                  per month, depending on your exact Optimum cable TV, internet,
                  and phone plans.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"How much does Optimum Triple Play cost?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum Triple Play bundles cost between $90.00 and $295.00 per
              month, depending on your exact Optimum cable TV, internet, and
              phone plans.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Optimum Overview | Optimum Internet | Optimum TV | Optimum
          Channel lineup | Optimum Customer service | Optimum Availability Map |
          Change or Cancel Optimum | Optimum Hidden Costs
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
            Optimum’s internet and TV plans and bundles to help you decide if
            Optimum has what you need. For more information on our process, read
            our
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
            guide
          </p>
          <h4>Related articles:</h4>
          <ul>
            <li>
              <span className="link">
                <Link href={"#"}>Optimum Deals</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"#"}>Optimum Availability</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"#"}>Alternatives to Optimum</Link>
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

export default OptimumBundleReview;
