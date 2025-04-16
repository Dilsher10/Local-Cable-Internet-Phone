// import React, { useState } from "react";
import "./spectrum-review.scss";
// import SubNav from "../components/sub-nav/SubNav";
// import { spectrumNavLinks } from "../assets/data/navLinks/spectrumNavLinks";
import InnerPagesHeroTwo from "../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../components/sticky-header/StickyHeader";
import spectrum from "../assets/images/Spectrum.png";
import { GoArrowUpRight } from "react-icons/go";
import reviewman from "../assets/images/reviewman.png";
import star from "../assets/images/star.png";
import asidespectrum from "../assets/images/asidespectrum.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../assets/images/quotations.svg";
import Link from "next/link";
import CTA from "../components/cta-section/CTA";
import PackageTable from "../components/package-table/PackageTable";
import quotations from "../assets/images/quotations.svg";
import Spectrumtextimg from "../assets/images/Spectrumtextimg.png";
import Newsletter from "../components/newsletter/Newsletter";
import Image from "next/image";
import Accordion from "../components/accordion/Accordion";

export const metadata = {
  title: "Spectrum Review 2024: Plans, Prices, And More"
};

const SpectrumReview = () => {
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

    card2Img: reviewman,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "spectrum",
        icon: asidespectrum,
      },
      {
        subtitle: "Internet speed:",
        title: "From 300 Mbps up to 1 Gbps (wireless speeds may vary)",
        icon: asidespectrum,
      },
      {
        subtitle: "Price:",
        title: "From $49.99*",
        icon: asidespectrum,
      },
      {
        subtitle: "Channels",
        title: "150+",
        icon: asidespectrum,
      },
    ],

    tableData: [
      {
        head: [
          "Top packages",
          "Price* ",
          "Download speeds",
          "Channels",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Spectrum Internet® Ultra",
              "$69.99/mo. for 12 mos.",
              "Up to 500 Mbps (wireless speeds may vary)",
              "N/A",
            ],
            linkPath: "#",
          },

          {
            content: [
              "2.",
              "Internet Gig + TV Select Signature",
              "$149.98/mo. for 12 mos.*",
              "Up to 1 Gbps Mbps (wireless speeds may vary)",
              "150+ channels",
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
      head: ["package", "Price", "Download speeds", "Details"],

      body: [
        {
          content: [
            "1.",
            "Spectrum Internet®",
            "$49.99/mo. for 12 mos.",
            "Up to 300 Mbps (wireless speeds may vary)",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Spectrum Internet Ultra",
            "$69.99/mo. for 12 mos.",
            "Up to 500 Mbps (wireless plans may vary)",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Spectrum Internet® Gig",
            "$89.99/mo. for 12 mos.",
            "Up to 1 Gbps** (wireless speeds may vary)",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataTwo = [
    {
      head: ["package", "Price", "Channels", "Details"],

      body: [
        {
          content: [
            "1.",
            "Spectrum TV® Select Signature",
            "$59.99/mo. for 12 mos.",
            "150+ channels",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Mi Plan Latino®",
            "$39.99/mo. for 12 mos.",
            "145+ channels",
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
  return (
    <div className="spectrum-review">
      {/* <SubNav links={spectrumNavLinks} /> */}

      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum Review 2024: Plans, Prices, And More
          </h2>
          <p className="sect-desc">
            We’ve researched the packages that’ll give you the best internet
            performance and TV channels.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-spectrum-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Spectrum channel update:</h4>
          <p>
            As of September 11, 2023, the carrier dispute between Charter
            Communications and Disney has been resolved. Spectrum TV customers
            once again have access to Disney-owned channels like ESPN, Disney
            Channel, and ABC. Spectrum TV Select customers will also receive
            subscriptions to the ad-supported Disney+ plan in the near future,
            while Spectrum TV Select Plus customers will gain access to ESPN+.
            <br />
            Spectrum offers a strong combination of fast internet download
            speeds and more premium cable channels than you can shake a remote
            at. If you’re in the market for internet, we recommend{" "}
            <span className="link">
              <Link href={"#"}>Spectrum Internet® 500 Mbps</Link>
            </span>
            , since it has excellent speeds for most homes and gives you some
            good bang for your buck.
            <br />
            But when it comes to bundles, Spectrum’s internet and TV packages
            are on the pricier side. If you’re trying to keep an eye on your
            budget, check out the competition for better deals.
          </p>
          <br />
          <h4>Spectrum pros and cons</h4>
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
                  <td>Affordable starting prices</td>
                  <td>Price increases after a year</td>
                </tr>
                <tr>
                  <td>Customizable TV package</td>
                  <td>Expensive internet packages</td>
                </tr>
                <tr>
                  <td>Free internet modem</td>
                  <td>Limited basic internet packages</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Find out if Spectrum is available in your area"}
        desc={
          "Enter your zip code below to see Spectrum’s download speeds in your area."
        }
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
          <Link href={"#"}>Spectrum Internet plans and prices</Link>
          <Link href={"#"}>Spectrum TV® plans and prices</Link>
          <Link href={"#"}>Spectrum Internet and TV bundles</Link>
          <Link href={"#"}>Spectrum availability</Link>
          <Link href={"#"}>How to get Spectrum</Link>
        </div>
      </div>

      <div className="section spectrum-deal-and-promotions">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> deals and promotions</span>
          </h2>
          <p className="sect-desc">
            If you sign up for Spectrum, there’s almost always a deal or
            promotion you can take advantage of. Our favorite evergreen deal is
            Spectrum’s contract buyout program—you can get $500 to cover early
            termination fees when you leave your current TV and internet
            provider.
            <br />
            Check out our{" "}
            <span className="link">
              <Link href={"#"}>Spectrum deals page</Link>
            </span>{" "}
            for all the notable savings and perks you can get right now.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Spectrum Internet® plans and prices</h4>
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
          <div className="endnote review-endnote">
            <div className="endnote-container">
              <Image
                className="quotation-img"
                src={quotations}
                alt="quotations"
              />
              <h4>Our Spectrum Internet experience</h4>
              <p>
                CableTV.com team member Manuel has Spectrum Internet® Gig at
                home. Here’s what he thinks about it:
                <br />
                “I chose this high-speed internet plan because my wife and I
                work remotely. We make a lot of Zoom calls, and I didn’t want
                speed to be a factor in our connection. Honestly, we went for
                the fastest plan more for peace of mind than out of necessity,
                but at least we rarely run into speed issues.”
              </p>
            </div>
          </div>
          <br />
          <br />
          <h4>Spectrum Out-of-Home WiFi</h4>
          <p className="after-heading">
            Your Spectrum Internet service entitles you to on-the-go connection
            through Spectrum WiFi hotspots around your community—and the US in
            general. This perk is pretty common among major internet providers,
            but it’s definitely a handy one, especially if you’ve run out of
            data on your smartphone.
            <br />
            To learn how to hop on this convenient network, head over to our
            <span className="link">
              <Link href={"#"}> Spectrum WiFi hotspots guide. </Link>
            </span>
          </p>
          <br />
          <br />
          <h4>Spectrum TV® plans and prices</h4>
          <p className="after-heading">
            Spectrum TV Select Signature includes the usual basic cable channels
            such as ESPN, Food Network, and Nickelodeon. You can get more
            channels through Spectrum’s à la carte options for premium, sports,
            and entertainment channels.
            <br />
            For our Spanish-speaking TV fans, Spectrum’s Mi Plan Latino bundles
            include a separate lineup of English- and Spanish-language channels,
            such as ESPN Deportes and Galavisión. There’s also an upgrade with
            70 Spanish-language channels that you can apply to either TV Select
            Signature or Mi Plan Latino.
            <br />
            Like with Spectrum’s Internet service, your Spectrum TV bill
            increases to Spectrum’s standard rates after a 12-month promotional
            period. Read our full{" "}
            <span className="link">
              <Link href={"#"}> Spectrum Tv review. </Link>
            </span>{" "}
            to find out how the provider stacks up against the competition.
          </p>
          <PackageTable item={packageTableDataTwo} />
          <p className="below-table">
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change. See full disclaimer.
          </p>
          <br />
          <br />
          <h4>Spectrum TV app</h4>
          <p className="after-heading">
            When you sign up for Spectrum TV, you’ll get free access to the
            Spectrum TV app. You can download the app on your streaming device,
            smartphone, and tablet for to stream all your Spectrum TV channels
            at home and limited channels on the go. To learn more, check out our
            Spectrum TV app review.
          </p>
          <br />
          <Image
            className="Spectrumtextimg"
            src={Spectrumtextimg}
            alt="Spectrumtextimg"
          />
          <div className="endnote review-endnote">
            <div className="endnote-container">
              <Image
                className="quotation-img"
                src={quotations}
                alt="quotations"
              />
              <h4>Pro tip:</h4>
              <p>
                Before you sign up for Spectrum TV service, check out our
                <span className="link">
                  <Link href={"#"}> Spectrum channel lineups </Link>
                </span>
                guide to get all your favorite channels.
              </p>
            </div>
          </div>
          <br />
          <br />
          <h4>Spectrum Internet and TV bundles:</h4>
          <PackageTable item={packageTableDataThree} />
          <p className="below-table">
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change. See full disclaimer.
          </p>
          <br />
          <h4>Spectrum Mi Plan Latino packages</h4>
          <p className="after-heading">
            Spectrum doesn’t offer any discounts when you bundle, so just add
            the price of the internet, TV, and phone packages you’re interested
            in to get your final promotional price.
            <br />
            During the checkout process, you can also add home phone service.
            Spectrum phone service covers regions including the US, Mexico,
            Canada, and Puerto Rico.
            <br />
            Check out our complete{" "}
            <span className="link">
              <Link href={"#"}> Spectrum bundle review</Link>
            </span>{" "}
            to see which bundle best fits your needs and budget.
          </p>
          <PackageTable item={packageTableDataThree} />
          <p className="below-table">
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change. See full disclaimer.
          </p>
        </div>
      </div>

      <CTA
        heading={"Spectrum availability"}
        desc={
          "Spectrum service is available in 41 states and the ISP covers major US cities including Dallas, New York City, and Los Angeles. Check out our Spectrum availability page or enter your zip code below to see if Spectrum Internet and TV service is available near you."
        }
      />

      <div className="section important-links how-to-get-spectrum">
        <div className="head">
          <h2 className="sect-heading">
            <span>How to get </span> Spectrum
          </h2>
          <p className="sect-desc">
            Simply use the link given to procure Spectrum's Internet or TV
            services, enabling you to explore and subscribe to their available
            choices.
          </p>
        </div>

        <div className="all-links">
          <Link href={"#"}>order spectrum TV and Internet</Link>
        </div>
        <div className="endnote review-endnote">
          <div className="endnote-container">
            <Image
              className="quotation-img"
              src={quotations}
              alt="quotations"
            />
            <p>
              If you want to sign up for Spectrum while you’re in a contract
              with a competing provider, Spectrum will pay up to $500 to cover
              the early termination fee.◊
            </p>
          </div>
        </div>
      </div>

      <div className="section spectrum-review-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>Spectrum </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How much is TV and Internet
                with Spectrum?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Spectrum offers bundled{" "}
                  <span className="link">
                    <Link href={"#"}> TV and Internet services </Link>
                  </span>{" "}
                  starting at $109.98 per month for a 12-month promotional
                  period. You'll also get additional services like Spectrum's{" "}
                  <span className="link">
                    <Link href={"#"}> WiFi hotspot network </Link>
                  </span>{" "}
                  and{" "}
                  <span className="link">
                    <Link href={"#"}> Spectrum Originals </Link>
                  </span>{" "}
                  , which is the ISP's on-demand video streaming platform.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"1"}
            title={"How much is TV and Internet with Spectrum?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum offers bundled{" "}
              <span className="link">
                <Link href={"#"}> TV and Internet services </Link>
              </span>{" "}
              starting at $109.98 per month for a 12-month promotional period.
              You'll also get additional services like Spectrum's{" "}
              <span className="link">
                <Link href={"#"}> WiFi hotspot network </Link>
              </span>{" "}
              and{" "}
              <span className="link">
                <Link href={"#"}> Spectrum Originals </Link>
              </span>{" "}
              , which is the ISP's on-demand video streaming platform.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is Spectrum part of Time
                Warner Cable?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Back in 2015, Charter Communications (Spectrum's parent
                  company) merged with Time Warner Cable and regional ISP Bright
                  House Networks. Time Warner Cable is now part of the Spectrum
                  and Charter umbrella of companies.
                  <br />
                  For past Charter and Time Warner Cable subscribers, you
                  shouldn't expect any service differences when opening a
                  Spectrum account
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"2"}
            title={"Is Spectrum part of Time Warner Cable?"}
            cssClass={"faq-content"}
          >
            <p>
              Back in 2015, Charter Communications (Spectrum's parent company)
              merged with Time Warner Cable and regional ISP Bright House
              Networks. Time Warner Cable is now part of the Spectrum and
              Charter umbrella of companies.
              <br />
              For past Charter and Time Warner Cable subscribers, you shouldn't
              expect any service differences when opening a Spectrum account
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Is Spectrum TV and internet
                any good?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  <span className="link">
                    <Link href={"#"}> Spectrum's TV packages </Link>
                  </span>
                  offer a strong selection of basic channels at an affordable
                  price. If you need more channels, you can upgrade your package
                  with à la carte options.
                  <br />
                  Internet needs vary depending on your personal needs. But in
                  most cases,{" "}
                  <span className="link">
                    <Link href={"#"}> Spectrum Internet 300 Mbps </Link>
                  </span>{" "}
                  will be fine for one person or small households, Spectrum
                  Internet 500 Mbps will have enough download performance for
                  most families, and Spectrum Internet Gig can accommodate
                  families and heavy internet users who are frequently streaming
                  movies, playing multiplayer online games, or taking daily
                  video calls.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"3"}
            title={"Is Spectrum TV and internet any good?"}
            cssClass={"faq-content"}
          >
            <p>
              <span className="link">
                <Link href={"#"}> Spectrum's TV packages </Link>
              </span>
              offer a strong selection of basic channels at an affordable price.
              If you need more channels, you can upgrade your package with à la
              carte options.
              <br />
              Internet needs vary depending on your personal needs. But in most
              cases,{" "}
              <span className="link">
                <Link href={"#"}> Spectrum Internet 300 Mbps </Link>
              </span>{" "}
              will be fine for one person or small households, Spectrum Internet
              500 Mbps will have enough download performance for most families,
              and Spectrum Internet Gig can accommodate families and heavy
              internet users who are frequently streaming movies, playing
              multiplayer online games, or taking daily video calls.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Is Spectrum available near
                me?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Visit CableTV.com's{" "}
                  <span className="link">
                    <Link href={"#"}> Spectrum availability </Link>
                  </span>{" "}
                  page to see if Spectrum TV or Internet service is available
                  nearby.{" "}
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"4"}
            title={"Is Spectrum available near me?"}
            cssClass={"faq-content"}
          >
            <p>
              Visit CableTV.com's{" "}
              <span className="link">
                <Link href={"#"}> Spectrum availability </Link>
              </span>{" "}
              page to see if Spectrum TV or Internet service is available
              nearby.{" "}
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>Does Spectrum have any extra
                fees?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Spectrum charges a self-installation activation fee, a
                  broadcast TV service fee, and various equipment fees. See all
                  the current additional costs of Spectrum on in our article
                  <span className="link">
                    <Link href={"#"}> "The Hidden Costs of Spectrum." </Link>
                  </span>
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"5"}
            title={"Does Spectrum have any extra fees?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum charges a self-installation activation fee, a broadcast
              TV service fee, and various equipment fees. See all the current
              additional costs of Spectrum on in our article
              <span className="link">
                <Link href={"#"}> "The Hidden Costs of Spectrum." </Link>
              </span>
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section spectrum-final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take:<span> Is Spectrum TV worth it?</span>
          </h2>
          <p className="sect-desc">
            On Spectrum’s middle and top-tier packages, you’ll get great
            download speeds, premium cable channels, and add-ons like bundled
            access to HBO Max’s expanding TV and movie library.
            <br />
            <br />
            These upgrades won’t come cheap, but when it comes to performance,
            Spectrum is still a decent option for most folks.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>view spectrum plans</Link>
        </div>
      </div>

      <div className="divider">
        <p>See also: Spectrum Internet | Spectrum TV | Spectrum Bundles</p>
      </div>

      <div className="section endnote spectrum-review-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Methodology:</h4>
          <p>
            Our experts spent hundreds of hours to research and compare Spectrum
            services—we rated it based on bang for your buck, reliability,
            features, and customer satisfaction.
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
                <Link href={"#"}> Spectrum Internet Review </Link>
              </span>{" "}
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Spectrum TV Review </Link>
              </span>{" "}
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>
                  {" "}
                  Spectrum Internet and TV Bundles Review{" "}
                </Link>
              </span>{" "}
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Spectrum Mobile</Link>
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

export default SpectrumReview;
