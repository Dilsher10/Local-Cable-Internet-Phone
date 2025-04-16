// import React, { useState } from "react";
import "./spectrum-bundles-review.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { spectrumNavLinks } from "../../assets/data/navLinks/spectrumNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import spectrum from "../../assets/images/Spectrum.png";
import { GoArrowUpRight } from "react-icons/go";
import reviewshock from "../../assets/images/reviewshock.png";
import star from "../../assets/images/star.png";
import asidespectrum from "../../assets/images/asidespectrum.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import dotted from "../../assets/images/dotted.png";
import mark from "../../assets/images/mark.png";
import Link from "next/link";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
import Searchbar from "../../components/searchbar/Searchbar";
// import Newsletter from "../../components/newsletter/Newsletter";
import quotations from "../../assets/images/quotations.svg";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Spectrum Packages, Bundles, And Plans Review"
};

const SpectrumBundlesReview = () => {
  // const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  let heroData = {
    card1: {
      logo: spectrum,
      rating: "(3.45/5)",
      starImg: star,
      desc: "$500 contract buyout when you switch",
      buttonText: "Compare Plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: reviewshock,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "spectrum",
        icon: asidespectrum,
      },
      {
        subtitle: "Price:",
        title: "From $109.98–164.97/mo.*",
        icon: asidespectrum,
      },
      {
        subtitle: "Channels",
        title: "150",
        icon: asidespectrum,
      },
      {
        subtitle: "Popular channels:",
        title: "Starting at up to 300 up to 1 Gbps (wireless speeds may vary)",
        icon: asidespectrum,
      },
    ],

    tableData: [
      {
        head: [
          "plans",
          "Starting price",
          "Channels",
          "Spectrum TV app",
          "Optional DVR",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Internet 500 Mbps + TV Select Signature + Voice",
              "$144.97/mo. for 12 mos.",
              "Up to 500 Mbps (wireless speeds may vary)",
              "150+ channels",
              " Unlimited nationwide calling",
            ],
            linkPath: "#",
          },

          {
            content: [
              "2.",
              "Internet 300 Mbps + TV Select Signature",
              "$109.98/mo. for 12 mos.",
              "Up to 500 Mbps (wireless speeds may vary)",
              "150+ channels",
              "N/A",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "Data effective as of publish date. Offers and availability may vary by location and are subject to change. See full disclaimer.",
  };
  let packageTableData = [
    {
      head: [
        "Packages",
        "Introductory price",
        "Maximum download speed",
        "Channel count",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Internet 300 Mbps + TV Select Signature",
            "$109.98/mo. for 12 mos.",
            "Up to 300 Mbps (wireless speeds may vary)",
            "150+ channels",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Internet 500 Mbps + TV Select Signature ",
            "$129.98/mo. for 12 mos. ",
            "Up to 500 Mbps (wireless speeds may vary) ",
            "150+ channels ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Internet Gig + TV Select Signature ",
            "$149.98/mo. for 12 mos. ",
            "Up to 1 Gbps (wireless speeds may vary) ",
            "150+ channels ",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataTwo = [
    {
      head: [
        "Packages",
        "Introductory price",
        "Maximum download speed",
        "Channel count",
        "Phone plan",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Mi Plan Latino + Spectrum Voice",
            "From $54.98/mo. for 12 mos.",
            "N/A",
            "145+ channels",
            " Unlimited nationwide calling",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Mi Plan Latino + Spectrum Internet 300 Mbps ",
            "From $89.98/mo. for 12 mos. ",
            "Up to 300 Mbps (wireless speeds may vary) ",
            "145+ channels",
            "N/A",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            " Mi Plan Latino + Spectrum Internet 300 Mbps + Voice",
            " From $104.97/mo. for 12 mos. when bundled",
            " Up to 300 Mbps (wireless speeds may vary)",
            " 145+ channels",
            " Unlimited nationwide calling",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataThree = [
    {
      head: [
        "package",
        "Price",
        "Download speeds",
        "Channels",
        "Phone plan",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Internet + TV Select Signature",
            "$109.98/mo. for 12 mos.",
            "Up to 300 Mbps (wireless speeds may vary)",
            "150+ channels",
            "Add unlimited nationwide calls for $14.99/mo.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Internet Ultra+ TV Select Signature",
            "$129.98/mo. for 12 mos.",
            "Up to 500 Mbps (wireless speeds may vary)",
            "150+ channels",
            "Add unlimited nationwide calls for $14.99/mo.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Internet Gig + TV Select Signature",
            "$149.98/mo. for 12 mos.",
            "Up to 1 Gbps (wireless speeds may vary)",
            "150+ channels",
            "Add unlimited nationwide calls for $14.99/mo.",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataOne = [
    {
      head: [
        "Packages",
        "Introductory price",
        "Maximum download speed",
        "Channel count",
        "Phone plan",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Internet 300 Mbps + Voice",
            "From $64.98/mo. for 12 mos.",
            "Up to 300 Mbps (wireless speeds may vary)",
            "N/A",
            "Unlimited nationwide calling",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "TV Select Signature + Voice",
            "$74.98/mo. for 12 mos.",
            "N/A ",
            "150+ channels ",
            "Unlimited nationwide calling",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataFour = [
    {
      head: [
        "Plan",
        "Introductory price",
        "Maximum download speed",
        "Channel count",
        "Phone plan",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Spectrum TV Select Signature + Internet 300 Mbps ",
            "$109.98/mo. for 12 mos. ",
            "Up to 300 Mbps (wireless speeds may vary) ",
            "150+ channels ",
            "N/A ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Spectrum TV Select Signature + Internet 300 Mbps + Voice ",
            "From $124.97/mo. for 12 mos. ",
            "Up to 300 Mbps (wireless speeds may vary) ",
            "150+ channels ",
            "Unlimited nationwide calling ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Internet 300 Mbps + Voice ",
            "From $64.98/mo. for 12 mos. ",
            "Up to 300 Mbps (wireless speeds may vary) ",
            "N/A ",
            "Unlimited nationwide calling ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "TV Select Signature + Voice ",
            "$74.98/mo. for 12 mos. ",
            "N/A ",
            "150+ channels ",
            "Unlimited nationwide calling ",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="spectrum-bundles-review">
      {/* <SubNav links={spectrumNavLinks} /> */}

      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum Packages, Bundles, And Plans Review
          </h2>
          <p className="sect-desc">
            Our experts have tips to save with Spectrum bundles, which include
            channels and fast cable internet service.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-spectrum-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Are Spectrum bundles good?</h4>
          <p>
            Although you won’t see any discounts when you bundle your Spectrum
            Internet®, TV, and phone service, you’ll still get the convenience
            of paying one bill instead of having to juggle three different
            provider contracts every month. Whether you’re a new or existing
            Spectrum customer, you can bundle your services at any time.
          </p>
          <br />
          <h4>Spectrum bundles pros and cons</h4>
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
                  <td>Fast internet download speeds</td>
                  <td>Price increases after a year</td>
                </tr>
                <tr>
                  <td>Top-notch TV channel selection</td>
                  <td>No bundle discounts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <br />
        <div className="endnote-container">
          <Image src={mark} alt="quotations" />
          <h4>Spectrum channel update:</h4>
          <p>
            As of September 11, 2023, the carrier dispute between Charter
            Communications and Disney has been resolved. Spectrum TV customers
            once again have access to Disney-owned channels like ESPN, Disney
            Channel, and ABC. Spectrum TV Select customers will also receive
            subscriptions to the ad-supported Disney+ plan in the near future,
            while Spectrum TV Select Plus customers will gain access to ESPN+.
          </p>
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
          <Link href={"#"}>Spectrum Deals</Link>
          <Link href={"#"}>Spectrum vs. the competition</Link>
          <Link href={"#"}>Spectrum plans and prices</Link>
        </div>
      </div>

      <CTA
        heading={"Find out if Spectrum  is available in your area"}
        desc={
          "Enter your zip code below to see if Spectrum is in your town. If it is, you’ll be able to see the specific service types available to you."
        }
      />

      <div className="section plans-and-prices">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> plans and prices </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Spectrum internet and TV in your area</h4>
          <p className="after-heading">
            With a download speed of up to 300{" "}
            <span className="link">
              <Link href={"#"}>Mbps </Link>
            </span>{" "}
            (wireless speeds may vary), the Spectrum Internet package is best
            for small households who stream TV and work from home. With its
            faster maximum download and upload speeds, Spectrum Internet Ultra
            and Spectrum Internet Gig comfortably handle regular streaming video
            or video calls from a larger four to six-person family.
            <br />
            Although Spectrum’s Internet packages are pricey compared to other
            nationwide ISPs, the provider offers no contract agreements and a
            FREE modem, so you won’t have to worry about equipment rental
            surcharges. But after 12 months, your monthly bill will go up by
            $25.00 for all three plans.
            <br />
            Check out our full{" "}
            <span className="link">
              <Link href={"#"}>Spectrum Internet review </Link>
            </span>{" "}
            to learn more about the ISP’s internet plans.
          </p>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change. See full disclaimer.
          </p>
        </div>
        <div className="endnote review-endnote">
          <div className="endnote-container">
            <Image className="quotation-img" src={dotted} alt="quotations" />
            <h4>Spectrum deals</h4>
            <p>
              Here’s a quick overview of notable offers Spectrum has right now.
              For a full list of Spectrum promotions, head over to our{" "}
              <span className="link">
                <Link href={"#"}> Spectrum deals</Link>
              </span>{" "}
              page
            </p>
            <ul>
              <li>
                · Peacock Premium subscription: Spectrum offers a free 12-month
                subscription to{" "}
                <span className="link">
                  <Link href={"#"}> Peacock Premium</Link>
                </span>{" "}
                for new TV customers. After 12 months, you can cancel the
                subscription or continue using it for $4.99 per month.
              </li>
              <li>
                · Free internet modem: Spectrum internet plans come with a free
                internet modem, and you can rent a wireless router from the
                provider for $5.00 per month.
              </li>
              <li>
                · Contract buyout: If you’re locked into an agreement with an
                internet or TV provider that has a costly early termination fee,
                Spectrum will buy out your current contract up to $500◊.
              </li>
            </ul>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Spectrum internet, TV, and phone in your area</h4>
          <p className="after-heading">
            Need a home phone to keep your family connected? All of Spectrum’s
            three-service bundles add phone service and unlimited calling across
            North America for an additional $14.99 per month. <br />
            For more information on Spectrum’s home phone plans, check out our{" "}
            <span className="link">
              <Link href={"#"}>Spectrum Voice review.</Link>
            </span>
          </p>
          <PackageTable item={packageTableDataThree} />
          <p className="below-table">
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change. See full disclaimer.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Spectrum home phone bundles in your area</h4>
          <p className="after-heading">
            Although you can’t get landline phone service by itself from
            Spectrum, Spectrum’s phone bundles are still around $30 less than
            its two-service packages. If you want home phone service but not
            necessarily cable TV and internet, snag one of Spectrum’s home phone
            and cable TV or internet and phone packages.
            <br />
            Since you can upgrade internet packages during the checkout process,
            we’d recommend Internet + Voice if you’re looking for a Spectrum
            Voice bundle. Spectrum’s 300 Mbps (wireless speeds may vary) plan is
            fine if you use the internet only for basic web browsing, or you can
            upgrade to Spectrum’s 500 Mbps or 1 Gbps** (wireless speeds may
            vary) plans for better download speeds.
          </p>
          <PackageTable item={packageTableDataOne} />
          <p className="below-table">
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change. See full disclaimer.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Spectrum Spanish-language TV bundles in your area</h4>
          <p className="after-heading">
            Spectrum also has several bundles that combine its standard English
            TV packages with its Mi Plan Latino Spanish-language channel lineup.
            The standalone package includes networks such as TeleFórmula, CNN en
            Español, and BeIN SPORTS Español.
            <br />
            If you’re getting service for a bilingual household, the Mi Plan
            Latino phone, internet, and internet bundle covers all of your
            bases. With the plan, you’ll get English- and Spanish-language TV
            channels, plus Spectrum Voice, which includes unlimited calls to
            Mexico and Puerto Rico.
          </p>
          <PackageTable item={packageTableDataTwo} />
          <p className="below-table">
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change. See full disclaimer.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>How to get the best deal on Spectrum</h4>
          <p className="after-heading">
            For most customers, we’d recommend springing for a TV and internet
            bundle. With Spectrum TV, you’ll get basic cable channels like CNN
            and HGTV that’ll give everyone in the family something to watch.
            <br />
            For households that need landline phone service, we’d recommend a
            three-service bundle. If you’re interested in cable TV service, we’d
            also recommend adding additional channel packs to your TV plan.
            <br />
            Check out our{" "}
            <span className="link">
              <Link href={"#"}>Spectrum channel lineup guide</Link>
            </span>{" "}
            to learn more about Spectrum’s TV packages.
          </p>
        </div>
      </div>

      <div className="section equipment-tv-competition">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> vs. the competition</span>
          </h2>
          <p className="sect-desc">
            In our{" "}
            <span className="link">
              <Link href={"#"}>2022 customer satisfaction survey,</Link>
            </span>{" "}
            Survey placed 6th out of 11 TV providers—{" "}
            <span className="link">
              <Link href={"#"}>DIRECTV STREAM,</Link>
            </span>{" "}
            <span className="link">
              <Link href={"#"}> DIRECTV, </Link>
            </span>
            Xfinity, Verizon, and DISH all beat it out for overall customer
            satisfaction.
            <br />
            Of the 502 Spectrum customers we surveyed, 52% scored their overall
            customer with Spectrum as completely or very satisfied. So while
            some people love their Spectrum service, it’s a middle-of-the-road
            TV option when compared to other providers that may be in your area.
          </p>
        </div>
        <Searchbar />
      </div>

      <div className="divider">
        <p>
          Get the channels you want. Check out our Spectrum channel lineups
          page.
        </p>
      </div>

      <div className="section spectrum-features">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> features</span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span>Is Spectrum Bundle worth it?</span>
          </h2>
          <p className="sect-desc">
            While you won’t get discounts with Spectrum bundles, you’ll get the
            convenience that comes from paying only one bill for all your
            services.
            <br />
            Spectrum’s two-service bundle offers the best combination of
            features and value. You can add multiple premium cable services like
            <span className="link">
              <Link href={"#"}> HBO Max </Link>
            </span>
            , and you can still upgrade your maximum download speed if you need
            to support movie watching or video calls for your household.
          </p>
        </div>

        <div className="all-links">
          <Link href={"#"}>Sign up for xfinity</Link>
        </div>
      </div>

      <div className="section packages-and-bundles">
        <div className="head">
          <h2 className="sect-heading">
            All Spectrum <span> packages and bundles</span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>
        <PackageTable item={packageTableDataFour} />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change. See full disclaimer.
        </p>
      </div>

      <div className="section spectrum-faq">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> FAQ </span>
          </h2>

          <p className="sect-desc">
            TL;DR? Xfinity kills it. For more detailed info on all Xfinity
            equipment and services, see our comprehensive Xfinity equipment
            guide.
          </p>
        </div>

        <div className="faq-wrapper">
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(1)}>
                <span>{faq === 1 ? "-" : "+"}</span> What is the best Spectrum
                package?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  If you don't need home phone service, we'd recommend the
                  Spectrum Internet 300 Mbps + TV Select Signature bundle for
                  $109.98 monthly for 12 months.The bundle starts up to 300 Mbps
                  (wireless speeds may vary) download speeds, which can suit
                  smaller families who browse the web and occasionally watch
                  streaming video. On the TV side, you'll get 150+ channels and
                  you can add additional channel packs during the checkout
                  process.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"What is the best Spectrum package?"}
            cssClass={"faq-content"}
          >
            <p>
              If you don't need home phone service, we'd recommend the Spectrum
              Internet 300 Mbps + TV Select Signature bundle for $109.98 monthly
              for 12 months.The bundle starts up to 300 Mbps (wireless speeds
              may vary) download speeds, which can suit smaller families who
              browse the web and occasionally watch streaming video. On the TV
              side, you'll get 150+ channels and you can add additional channel
              packs during the checkout process.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does Spectrum offer a
                bundle discount?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  As of February 1, 2022, Spectrum no longer offers a $5 monthly
                  discount on TV and internet bundles.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"Does Spectrum offer a bundle discount?"}
            cssClass={"faq-content"}
          >
            <p>
              As of February 1, 2022, Spectrum no longer offers a $5 monthly
              discount on TV and internet bundles.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What do Spectrum bundles
                include?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Spectrum bundles can include{" "}
                  <span className="link">
                    <Link href={"#"}> phone, </Link>
                  </span>
                  <span className="link">
                    <Link href={"#"}> Internet, </Link>
                  </span>{" "}
                  or TV service. When you're placing your order, you can also
                  upgrade your TV or internet package for faster internet speeds
                  or additional premium channels.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"What do Spectrum bundles include?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum bundles can include{" "}
              <span className="link">
                <Link href={"#"}> phone, </Link>
              </span>
              <span className="link">
                <Link href={"#"}> Internet, </Link>
              </span>{" "}
              or TV service. When you're placing your order, you can also
              upgrade your TV or internet package for faster internet speeds or
              additional premium channels.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Why did my Spectrum bill go
                up?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Spectrum offers promotional pricing to new customers for the
                  first 12 months of service. Once your promotional period is
                  over, your plan moves to Spectrum's standard pricing.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={"Why did my Spectrum bill go up?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum offers promotional pricing to new customers for the first
              12 months of service. Once your promotional period is over, your
              plan moves to Spectrum's standard pricing.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>How do I get free Spectrum?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  If you qualify for the Spectrum Internet Assist program and
                  the FCC's Affordable Connectivity Program (ACP), you can get
                  your Spectrum internet for free. To learn more, head over to
                  our{" "}
                  <span className="link">
                    <Link href={"#"}> free and low-income internet guide.</Link>
                  </span>
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"How do I get free Spectrum?"}
            cssClass={"faq-content"}
          >
            <p>
              If you qualify for the Spectrum Internet Assist program and the
              FCC's Affordable Connectivity Program (ACP), you can get your
              Spectrum internet for free. To learn more, head over to our{" "}
              <span className="link">
                <Link href={"#"}> free and low-income internet guide.</Link>
              </span>
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>See also: Spectrum Overview | Spectrum Internet | Spectrum TV</p>
      </div>

      <div className="section endnote spectrum-review-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Methodology:</h4>
          <p>
            Our experts spent hundreds of hours diving deep beyond the prices
            and speeds for Spectrum internet—we rated it based on bang for your
            buck, reliability, features, and customer satisfaction.
            <br />
            To learn more about our methodology, check out our{" "}
            <span className="link">
              <Link href={"#"}>How We Rank </Link>
            </span>{" "}
            page.
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Best TV and Internet Bundles </Link>
              </span>{" "}
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Hidden Costs of Spectrum </Link>
              </span>{" "}
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Spectrum Troubleshooting Guide </Link>
              </span>{" "}
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Spectrum vs. AT&T Internet </Link>
              </span>{" "}
            </li>
          </ul>
          <h4>Disclaimer:</h4>
          <p>
            <span className="bold">*Spectrum Internet: </span> Limited time
            offer; subject to change; valid to qualified residential customers
            who have not subscribed to any services within the previous 30 days
            and who have no outstanding obligation to Charter. Spectrum Internet
            ® promotion price is $49.99/mo; standard rates apply after yr. 1.
            Taxes, fees and surcharges extra and subject to change during and
            after the promotional period; installation/network activation,
            equipment and additional services are extra. General Terms:
            INTERNET: Speed based on wired connection and may vary by address.
            Wireless speeds may vary. Services subject to all applicable service
            terms and conditions, subject to change. Services not available in
            all areas. Restrictions apply. Enter your address to determine
            availability. ©2022 Charter Communications.
          </p>
          <p>
            <span className="bold"> Spectrum Internet Ultra: </span> Limited
            time offer; subject to change; valid to qualified residential
            customers who have not subscribed to any services within the
            previous 30 days and who have no outstanding obligation to Charter.
            Spectrum Internet® Ultra promotion price is $69.99/mo; standard
            rates apply after yr. 1. Taxes, fees and surcharges extra and
            subject to change during and after the promotional period;
            installation/network activation, equipment and additional services
            are extra. General Terms: INTERNET: Speed based on wired connection
            and may vary by address. Wireless speeds may vary. Services subject
            to all applicable service terms and conditions, subject to change.
            Services not available in all areas. Restrictions apply. Enter your
            address to determine availability. ©2022 Charter Communications.
          </p>
          <p>
            <span className="bold"> Spectrum Internet Gig: </span> Limited time
            offer; subject to change; valid to qualified residential customers
            who have not subscribed to any services within the previous 30 days
            and who have no outstanding obligation to Charter. Spectrum
            Internet® Gig promotion price is $89.99/mo; standard rates apply
            after yr. 1. Taxes, fees and surcharges extra and subject to change
            during and after the promotional period; installation/network
            activation, equipment and additional services are extra. General
            Terms: INTERNET: Speed based on wired connection and may vary by
            address. Wireless speeds may vary. Services subject to all
            applicable service terms and conditions, subject to change. Services
            not available in all areas. Restrictions apply. Enter your address
            to determine availability. ©2022 Charter Communications.
          </p>
          <p>
            <span className="bold"> Spectrum TV Select Signature: </span>
            Limited time offer; subject to change; valid to qualified
            residential customers who have not subscribed to any services within
            the previous 30 days and who have no outstanding obligation to
            Charter. Spectrum TV Select Signature promotion price is $59.99/mo;
            standard rates apply after yr 1. Taxes, fees, and surcharges
            (broadcast surcharge up to $23.20/mo) extra and subject to change
            during and after the promotional period; installation/network
            activation, equipment and additional services are extra. General
            Terms: TV: TV equipment required; charges may apply. Channel and HD
            programming availability based on level of service and location.
            Account credentials may be required to stream some TV content
            online. Services subject to all applicable service terms and
            conditions, subject to change. Services not available in all areas.
            Restrictions apply. Enter your address to determine availability.
            <br />
            Spectrum Voice: Limited time offer; subject to change; valid to
            qualified residential customers who have not subscribed to any
            services within the previous 30 days and who have no outstanding
            obligation to Charter. General Terms: HOME PHONE: Spectrum Voice
            promotion price is $14.99/mo; standard rates apply after yr 1.
            Unlimited calling includes calls within the U.S., Canada, Mexico,
            Puerto Rico, Guam, the Virgin Islands and more. Services subject to
            all applicable service terms and conditions, subject to change.
            Services not available in all areas. Restrictions apply. Enter your
            address to determine availability.
          </p>
          <p>
            <span className="bold">
              {" "}
              † Spectrum Internet + TV Select Signature:{" "}
            </span>{" "}
            Limited time offer; subject to change; valid to qualified
            residential customers who have not subscribed to any services within
            the previous 30 days and who have no outstanding obligation to
            Charter. Spectrum TV® Select Signature promotion price is $59.99/mo;
            standard rates apply after yr. 1. Spectrum Internet® promotion price
            is $49.99/mo; standard rates apply after yr. 1. Taxes, fees and
            surcharges (broadcast surcharge up to $21.00/mo) extra and subject
            to change during and after the promotional period;
            installation/network activation, equipment and additional services
            are extra. General Terms: INTERNET: Speed based on wired connection
            and may vary by address. Wireless speeds may vary. TV: TV equipment
            required; charges may apply. Channel and HD programming availability
            based on level of service. Account credentials may be required to
            stream some TV content online. Services subject to all applicable
            service terms and conditions, subject to change. Services not
            available in all areas. Restrictions apply. Enter your address to
            determine availability. ©2022 Charter Communications. Spectrum
            Internet + TV Select Signature + Voice: Limited time offer; subject
            to change; valid to qualified residential customers who have not
            subscribed to any services within the previous 30 days and who have
            no outstanding obligation to Charter. Spectrum TV® Select Signature
            promotion price is $59.99/mo; standard rates apply after yr. 1.
            Spectrum Internet® promotion price is $49.99/mo; standard rates
            apply after yr. 1. Spectrum Voice®: Price is $14.99/mo when bundled.
            Taxes, fees and surcharges (broadcast surcharge up to $21.00/mo)
            extra and subject to change during and after the promotional period;
            installation/network activation, equipment and additional services
            are extra. General Terms: INTERNET: Speed based on wired connection
            and may vary by address. Wireless speeds may vary. TV: TV equipment
            required; charges may apply. Channel and HD programming availability
            based on level of service. Account credentials may be required to
            stream some TV content online. HOME PHONE: Unlimited calling
            includes calls within the U.S., Canada, Mexico, Puerto Rico, Guam,
            the Virgin Islands and more. Services subject to all applicable
            service terms and conditions, subject to change. Services not
            available in all areas. Restrictions apply. Enter your address to
            determine availability. ©2022 Charter Communications.
          </p>
          <p>
            <span className="bold"> Spectrum Internet + Voice: </span> Limited
            time offer; subject to change; valid to qualified residential
            customers who have not subscribed to any services within the
            previous 30 days and who have no outstanding obligation to Charter.
            Spectrum Internet® promotion price is $49.99/mo; standard rates
            apply after yr. 1. Spectrum Voice®: Price is $14.99/mo when bundled.
            Taxes, fees and surcharges extra and subject to change during and
            after the promotional period; installation/network activation,
            equipment and additional services are extra. General Terms:
            INTERNET: Speed based on wired connection and may vary by address.
            Wireless speeds may vary. HOME PHONE: Unlimited calling includes
            calls within the U.S., Canada, Mexico, Puerto Rico, Guam, the Virgin
            Islands and more. Services subject to all applicable service terms
            and conditions, subject to change. Services not available in all
            areas. Restrictions apply. Enter your address to determine
            availability. ©2022 Charter Communications.
          </p>
          <p>
            <span className="bold"> ‡Mi Plan Latino: </span> Limited time offer;
            subject to change; valid to qualified residential customers who have
            not subscribed to any services within the previous 30 days and who
            have no outstanding obligation to Charter. Mi Plan Latino promotion
            price is $39.99/mo; standard rates apply after yr 1. Mi Plan Latino
            and Internet is $89.98/mo; standard rates apply after yr 1. Mi Plan
            Latino, Internet and Home Phone is $104.97/mo; standard rates apply
            after yr 1. Spectrum TV Select Signature and Latino View is
            $71.99/mo; standard rates apply after yr 1. Taxes, fees and
            surcharges (broadcast surcharge up to $21.00/mo) extra and subject
            to change during and after the promotional period;
            installation/network activation, equipment and additional services
            are extra. General Terms: INTERNET: Speed based on wired connection
            and may vary by address. Wireless speeds may vary. TV: TV equipment
            required for each TV that gets Spectrum TV Latino for an additional
            monthly charge. Channel and HD programming availability based on
            level of service. Account credentials may be required to stream some
            TV content online. HOME PHONE: Unlimited calling includes calls
            within the U.S., Canada, Mexico, Puerto Rico, Guam, the Virgin
            Islands and more. Services subject to all applicable service terms
            and conditions, subject to change. Services not available in all
            areas. Restrictions apply. Enter your address to determine
            availability. ©2022 Charter Communications.
          </p>
          <p>
            ◊To qualify for the Contract Buyout Program, a customer must order
            and install a combination of qualifying Video and Internet and / or
            Voice services; offers not available in all areas. Spectrum’s Mobile
            Services are not eligible for the buyout program. Offer available to
            qualifying customers only who have no outstanding obligations to
            Charter. Payment amount will be determined by the Early Termination
            Fee on the final bill from the previous provider, not to exceed
            $500. For Contract Buyout qualifications, go to Spectrum.com/buyout.
          </p>
          <p>
            **Speed based on wired connection. Available Internet speeds may
            vary by address. Gig capable modem required for Gig speed. For a
            list of Gig capable modems, visit Spectrum.net/modem.
          </p>
        </div>
      </div>
      {/* <Newsletter /> */}
    </div>
  );
};

export default SpectrumBundlesReview;
