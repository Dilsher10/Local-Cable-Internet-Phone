// import React, { useState } from "react";
import "./optimum-internet-review.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { optimumNavLinks } from "../../assets/data/navLinks/optimumNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import optimumwhitegirl from "../../assets/images/optimumwhitegirl.png";
import star from "../../assets/images/star.png";
import optimummark from "../../assets/images/optimummark.png";
import optimumlogo from "../../assets/images/optimumlogo.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import PackageTable from "../../components/package-table/PackageTable";
import dotted from "../../assets/images/dotted.png";
import Searchbar from "../../components/searchbar/Searchbar";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Optimum Internet Plans, Pricings, And Bundles"
};

const OptimumInternetReview = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: optimumlogo,
      rating: "(4.1/5)",
      starImg: star,
      desc: "Best cable provider for gaming",
      buttonText: "call to sign up",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: optimumwhitegirl,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "Optimum",
        icon: optimummark,
      },
      {
        subtitle: "Internet speeds:",
        title: "300–5,000 Mbps",
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
          "price",
          "Download speeds up to*",
          "Download speeds up to",
          "Connection type",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Optimum 300",
              "300 Mbps",
              "20 Mbps",
              "$40.00/mo.",
              "Cable",
            ],
            linkPath: "#",
          },
          {
            content: [
              "2.",
              "Fiber Internet 300",
              "$40.00/mo.**",
              "300 Mbps",
              "300 Mbps",
              "Fiber",
            ],
            linkPath: "#",
          },
          {
            content: [
              "3.",
              "Optimum 1 Gig Internet",
              "$80.00/mo.",
              "940 Mbps",
              "35 Mbps",
              "Cable",
            ],
            linkPath: "#",
          },
          {
            content: [
              "4.",
              "Fiber Internet 1 Gig",
              "$80.00/mo.**",
              "940 Mbps",
              "940 Mbps",
              "Fiber",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "Data effective as of post date. Offers and availability may vary by location and are subject to change.",
  };
  let packageTableDataInternetPhone = [
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
            "Optimum 300 and Phone",
            "$55.00/mo.",
            "300 Mbps",
            "Unlimited calls†",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Optimum 1 Gig and Phone",
            "$95.00/mo.",
            "940 Mbps",
            "Unlimited calls†",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Fiber Internet 300 and Phone",
            "$55.00/mo.",
            "300 Mbps",
            "Unlimited calls†",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Fiber Internet 1 Gig and Phone",
            "$95.00/mo.",
            "940 Mbps",
            "Unlimited calls†",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataBundle = [
    {
      head: [
        "Package",
        "price",
        "Download speeds up to",
        "Channel count",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Optimum 300 and Core TV",
            "$115.00/mo.",
            "100 Mbps",
            "220+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Optimum 500 and Select TV",
            "$155.00/mo.",
            "500 Mbps",
            "340+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Optimum 1 Gig and Premier TV",
            "$195.00/mo.",
            "900 Mbps",
            "420+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Fiber Internet 300 and Core TV",
            "$115.00/mo.",
            "100 Mbps",
            "220+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "Fiber Internet 500 and Select TV",
            "$155.00/mo.",
            "500 Mbps",
            "340+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "6.",
            "Fiber Internet 1 Gig and Premier TV",
            "$195.00/mo.",
            "900 Mbps",
            "420+",
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
        "Price",
        "Download speeds up to*",
        "Upload speeds up to",
        "Connection type",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Optimum 300",
            "$40.00/mo.",
            "300 Mbps",
            "20 Mbps",
            "Cable",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Optimum 500",
            "$60.00/mo.**",
            "500 Mbps",
            "20 GB",
            "Cable",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Optimum 1 Gig Internet",
            "$80.00/mo.",
            "940 Mbps",
            "35 Mbps",
            "Cable",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Fiber Internet 300",
            "$40.00/mo.**",
            "300 Mbps",
            "300 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "Fiber Internet 500",
            "$60.00/mo.",
            "500 Mbps",
            "500 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "6.",
            "Fiber Internet 1 Gig",
            "$80.00/mo.",
            "940 Mbps",
            "940 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "7.",
            "Fiber Internet 2 Gig",
            "$100.00/mo.",
            "2,000 Mbps",
            "2,000 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "8.",
            "Fiber Internet 5 Gig",
            "$180.00/mo.",
            "5,000 Mbps",
            "5,000 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataInternetTvHomePhone = [
    {
      head: [
        "Package",
        "Price",
        "Download speeds up to*",
        "Channel count",
        "Phone plan",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Optimum 300, Core TV, and Phone",
            "$130.00/mo.",
            "300 Mbps",
            "200+",
            "Unlimited calls†",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Optimum 500, Select TV, and Phone",
            "$170.00/mo.",
            "500 Mbps",
            "340+",
            "Unlimited calls†",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Optimum 1 Gig, Premier TV, and Phone",
            "$210.00/mo.",
            "900 Mbps",
            "420+",
            "Unlimited calls†",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Fiber Internet 300, Core TV, and Phone",
            "$130.00/mo.**",
            "300 Mbps",
            "220+",
            "Unlimited calls†",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "Fiber Internet 500, Select TV, and Phone",
            "$170.00/mo.",
            "500 Mbps",
            "500 Mbps",
            "Unlimited calls†",
          ],
          linkPath: "#",
        },
        {
          content: [
            "6.",
            "Fiber Internet 1 Gig, Premier TV, and Phone",
            "$210.00/mo.",
            "900 Mbps",
            "420+",
            "Unlimited calls†",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataBundleCompetition = [
    {
      head: [
        "Package",
        "Price*",
        "Download speeds up to*",
        "Data cap",
        "Editorial rating",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Optimum",
            "$40.00–$180.00/mo.",
            "300–5,000 Mbps",
            "No data caps",
            "3.72/5",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Verizon Fios",
            "$49.99–$89.99/mo.",
            "300–2,300 Mbps",
            "No data caps",
            "4.30/5",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Xfinity",
            "$19.99–$80.00/mo.",
            "75–6,000 Mbps",
            "1,200 GB–unlimited",
            "3.54/5",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Spectrum Internet®",
            "$49.99–$89.99/mo.†",
            "Up to 300–1,000 Mbps",
            "No data caps",
            "3.36/5",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "Frontier Fiber",
            "$39.99–$154.99/mo.",
            "500–5,000 Mbps",
            "No data caps",
            "3.00/5",
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
    <div className="optimum-internet-review">
      {/* <SubNav links={optimumNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Optimum Internet Plans, Pricings, And Bundles
          </h2>
          <p className="sect-desc">
            Optimum has a $100 contract buyout, generous entry-level speeds, no
            contracts, and no data caps—but low customer satisfaction.
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
            As of August 1, 2022, Suddenlink is officially part of Optimum. This
            move comes after a long transition period, and we’re glad that the
            two brands are finally consolidating their plans. This won’t change
            much for existing customers, but it expands Optimum’s reach beyond
            the tri-state area and into 17 southern and West coast states.
          </p>
          <br />
          <h4>Is Optimum internet good?</h4>
          <p>
            Optimum’s cable and fiber-optic internet offers fast internet speeds
            at reasonable prices (starting at $40.00 per month) with no
            contracts, data caps, or early termination fees. Unfortunately, even
            with all its redeeming qualities, Optimum scored poorly in our
            customer satisfaction survey. You might wanna give that a read
            before signing up for service. But Optimum’s lack of contracts—not
            to mention that $500 buyout offer—make it a relatively risk-free
            commitment. If you live in the tristate area—Connecticut, New
            Jersey, and parts of New York (the Bronx, Brooklyn, Long Island, and
            Westchester), or the areas of the country previously held by
            Suddenlink, think about giving Optimum a whirl.
          </p>
          <br />
          <h4>Optimum pros and cons</h4>
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
                  <td>Bundling requirement for phone and TV service</td>
                </tr>
                <tr>
                  <td>No data caps</td>
                  <td>Limited availability</td>
                </tr>
                <tr>
                  <td>$500 contract buyout </td>
                  <td>Low customer satisfaction scores </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Find out if Optimum internet is available in your area"}
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
          <Link href={"#"}>Internet plans</Link>
          <Link href={"#"}>Bundles</Link>
          <Link href={"#"}>Equipment</Link>
          <Link href={"#"}>Optimum vs. the competition </Link>
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
          <h4>Optimum internet deals and promotions</h4>
          <br />
          <p>
            To entice new customers to sign up for Optimum internet packages,
            the provider offers various deals and promotions. But, unlike most
            internet service providers, Optimum runs promotions for its current
            customers too. Check out our Optimum deals guide to learn more about
            Optimum’s best offers.
          </p>
          <br />
          <h4>Optimum cell phone plans and bundles</h4>
          <br />
          <p>
            Are you thinking of switching mobile phone providers? For a limited
            time, you can add Altice Mobile to your Optimum plan or bundle for
            $20 a month. The plan includes unlimited data, calls, and texting on
            Optimum’s 99% nationwide network.
          </p>
        </div>
      </div>

      <div className="section optimum-internet-plans">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> internet plans</span>
          </h2>
          <p className="sect-desc">
            Optimum has several standalone internet plans—four cable, four
            fiber-optic—priced $40.00–$180.00 a month with maximum download
            speeds from 100–5,000 Mbps. Both networks offer plans with the same
            download speeds, but Optimum’s cable internet plans have slower
            upload speeds, plus higher pricing than fiber in some areas.
            <br />
            Optimum’s base cable plan, Optimum 300, is the best value. It offers
            high speeds for a low price—300 Mbps will handle a ton of HD
            streaming and gaming. And you’ll have a tough time finding a better
            value from another provider.
            <br />
            Power users will want the competitively-priced Optimum 1 Gig
            Internet. This plan comes with up to 1,000 Mbps download speeds at
            an affordable price.
            <br />
            If you’re in an Optimum fiber area, like some customers in New
            Jersey, you’ll have upload speeds that match your download speeds.
            For example, the fiber version of Optimum 300—Fiber Internet
            300—comes with 300 Mbps download speeds and 300 Mbps upload speeds.
            That will really improve the quality of your video calls.
          </p>
        </div>
        <PackageTable item={packageTableDataInternetPlans} />
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change. * for 1 yr. Plus taxes, equip.
          charges and fees. ** w/Auto Pay & Paperless Bill w/mobile plans.
          ($40/mo. without mobile plans.) Terms apply.
        </p>
      </div>

      <div className="section optimum-bundles">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> bundles</span>
          </h2>
          <p className="sect-desc">
            Since Optimum doesn’t offer standalone TV or phone services,
            bundling is the only way to snag these services through Optimum.
            While Optimum’s bundles are a bit pricey, the prices are comparable
            to other TV and internet service providers. But some competitors
            like Xfinity offer discounts when you bundle, so be sure to check
            out other option in your area.
            <br />
            We can show you all the available providers near you when you enter
            your zip code below.
          </p>
          <Searchbar />
          <br />
          <p className="sect-desc">
            See the tables below for pricing and check out our{" "}
            <span className="link">
              <Link href={"#"}>Optimum TV Review for more information</Link>
            </span>{" "}
            on the company’s TV service.
          </p>
        </div>
        <PackageTable item={packageTableDataBundle} />
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change. * for 1 yr. Plus taxes, equip.
          charges and fees. ** Internet: w/Auto Pay & Paperless Bill w/mobile
          plans. ($40/mo. without mobile plans.) Terms apply.
        </p>
      </div>

      <div className="section optimum-internet-phone">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> internet + phone</span> bundles and pricing
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <PackageTable item={packageTableDataInternetPhone} />
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change. *for 1 yr. Plus taxes, equip.
          charges and fees. †Unlimited calls are to US, Canada, Puerto Rico, and
          US Virgin Islands only. **Internet: w/Auto Pay & Paperless Bill
          w/mobile plans. ($40/mo. without mobile plans.) Terms apply.
        </p>
      </div>

      <div className="section optimum-internet-tv-home-phone">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> internet + TV + home phone </span> bundles and
            pricing
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <PackageTable item={packageTableDataInternetTvHomePhone} />
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change. * for 1 yr. Plus taxes, equip.
          charges and fees. †Unlimited calls are to US, Canada, Puerto Rico, and
          US Virgin Islands only. **Internet: w/Auto Pay & Paperless Bill
          w/mobile plans. ($40/mo. without mobile plans.) Terms apply.
        </p>
      </div>

      <div className="section optimum-internet-equipment">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> internet equipment & Wi-Fi hotspots </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Optimum internet equipment</h4>
          <br />
          <p>
            Okay—let’s talk toys. What kind of fancy internet boxes or other
            doodads come with Optimum internet and TV service? Well, Optimum has
            several devices for rent.
          </p>
          <ul>
            <li>
              · Optimum Gateway 6 (free): Lease Optimum’s modem/router with
              Smart WiFi 6 technology and get in-home Wi-Fi and 24/7 tech
              support. Or you can use your own Optimum-compatible unit, but
              forget about in-home Wi-Fi and full-featured tech support from
              Optimum if you do.
            </li>
            <li>
              · Optimum Extender (free for qualifying customers): A Wi-Fi
              extender can help your signal reach farther corners of your home.
              To help you decide if your home is big enough to warrant an
              extender, Optimum recommends one extender for every two bedrooms
              you have in your home.
            </li>
            <li>
              · Optimum Amplify ($10/mo. or $399 to buy): This smart speaker
              with voice control, Alexa integration, and Devialet audio. You can
              use it to control your TV and play music, but it’s too rich for
              our blood.
            </li>
          </ul>
          <p>
            You can learn more about the Optimum Gateway 6 in our Optimum Smart
            WiFi review. Or if you’d prefer to skip monthly rental fees and
            bring your own modem, Optimum doesn’t make it easy. Luckily, you’ve
            got us! See our favorite alternative equipment in our best
            Optimum-compatible modems article.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Optimum Wi-Fi hotspots</h4>
          <br />
          <p>
            When you’re away from home, you can stay connected to the internet
            with Optimum’s Wi-Fi hotspots. These hotspots are available only to
            Optimum internet customers, and you can recognize them by the
            network names “AlticeWiFi,” “cableWiFi,” or “optimumwifi.”
            <br />
            Use your Optimum ID, password, and Wi-Fi-ready device (phone,
            tablet, or laptop) to use any of Optimum’s over 2 million free Wi-Fi
            hotspots, including hotspots at New Jersey Transit stations.
            <br />
            If a nearby Optimum Wi-Fi hotspot is not working, make sure you have
            the right network selected in your device’s Wi-Fi settings. If you
            only get a few bars of service, you may need to move closer to the
            hotspot to improve your connection.
            <br />
            We’re fans of any time internet service providers make Wi-Fi more
            accessible for their customers, and Optimum’s Wi-Fi hotspots do just
            that. To learn more about this service, check out our full Optimum
            Wi-Fi hotspot review.
          </p>
        </div>
      </div>

      <div className="section optimum-competition">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> vs. the competition</span>
          </h2>
          <p className="sect-desc">
            Optimum’s main competitors are Verizon Fios, Xfinity, Spectrum, and
            Frontier. To see which internet providers offer service in your
            area, enter your zip code below. We don’t store or share your
            information—we just run it through our database to find your
            options.
          </p>
          <Searchbar />
          <br />
          <br />
        </div>
        <PackageTable item={packageTableDataBundleCompetition} />
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change. *With Auto Pay + taxes & equip.
          Charges†for 12 mos.
        </p>
        <div className="package-table-container channels">
          <h4>Optimum vs. Verizon Fios</h4>
          <br />
          <p>
            We tend to prefer Verizon Fios over Optimum since Verizon Fios uses
            a more advanced internet network, offers tons of sign-up perks, and
            has a long-standing reputation for customer service.
            <br />
            But if you’re hunting for a deal, keep an eye out for Optimum’s
            flash sales. You can get a new internet plan at a steeply discounted
            rate.
            <br />
            For our full review of how Optimum and Verizon stack up, check out
            Verizon Fios vs. Optimum Internet.
          </p>
          <hr className="hr" />
          <div className="btn">
            <Link href={"#"}>View Verizon Fios Plans</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Optimum vs. Xfinity</h4>
          <br />
          <p>
            Xfinity’s plans don’t offer the same bang-for-your-buck that
            Optimum’s plans do. Xfinity will charge you more for slower internet
            speeds and slap you with data overage fines. Plus, you’ll pay $14
            per month for Xfinity’s modem/router combo, getting one for free
            with Optimum.
            <br />
            You don’t need all that price gouging. Optimum is the better deal.
          </p>
          <hr className="hr" />
          <div className="btn">
            <Link href={"#"}>View Verizon Fios Plans</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Optimum vs. Spectrum</h4>
          <br />
          <p>
            While Spectrum offers great value on TV deals, Optimum generally has
            better internet prices. This isn’t true 100% of the time,
            though—Spectrum includes its modem on many plans and charges $5 more
            per month for Wi-Fi, compared to Optimum’s free Wi-Fi gateway.
            <br />
            So while Optimum has a stronger reputation for internet reliability,
            don’t write Spectrum off, especially if you want an internet and TV
            bundle. For the best deal, be sure to compare Optimum and Spectrum’s
            bundle prices.
          </p>
          <hr className="hr" />
          <div className="btn">
            <Link href={"#"}>View Spectrum Plans</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Optimum vs. Frontier Fiber</h4>
          <br />
          <p>
            Unlike Optimum’s other competitors, Frontier Fiber isn’t offering TV
            plans for new customers right now. Still, you might consider
            Frontier Fiber if you’re in the market for only internet since its
            plans come with fast upload speeds.
            <br />
            But be careful. While Frontier historically has a better customer
            service track record than Optimum, we’ve felt burned by Frontier
            since its 2020 bankruptcy. Ask your neighbors with Frontier how
            their service is before you commit yourself.
          </p>
          <hr className="hr" />
          <div className="btn">
            <Link href={"#"}>View Frontier Fiber Plans</Link>
          </div>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Optimum internet worth it? </span>
          </h2>
          <p className="sect-desc">
            Despite Optimum’s poor customer satisfaction scores, we like that it
            has no contracts (or data caps or early termination fees) and has a
            $500 contract buyout. And don’t forget the generous speeds and low,
            low price of the Optimum 300 plan.
            <br />
            So if Optimum is available in your area and you’re looking to get
            away from your current provider—and get a better monthly payment—go
            for it.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>view optimum plans</Link>
        </div>
      </div>

      <div className="section optimum-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Optimum internet</span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How much does Optimum
                internet cost?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Optimum’s standalone internet packages cost
                  $40.00–$180.00/mo.. The base package, Optimum 300, is an
                  excellent deal for the speed (up to 300 Mbps for $40). If
                  you’re looking for bundles, Optimum has a variety of them,
                  starting at $45 a month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" How much does Optimum internet cost?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum’s standalone internet packages cost $40.00–$180.00/mo..
              The base package, Optimum 300, is an excellent deal for the speed
              (up to 300 Mbps for $40). If you’re looking for bundles, Optimum
              has a variety of them, starting at $45 a month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What are Optimum internet
                speeds?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Optimum has cable speeds from 300–940 Mbps (download) and
                  20–940 Mbps (upload). It also has a fiber-optic plan with up
                  to 5,000 Mbps download with equal upload speeds.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" What are Optimum internet speeds?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum has cable speeds from 300–940 Mbps (download) and 20–940
              Mbps (upload). It also has a fiber-optic plan with up to 5,000
              Mbps download with equal upload speeds.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Can I watch Optimum live TV
                on my computer?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  You can watch your Optimum live TV channels with the Optimum
                  App for laptop.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Can I watch Optimum live TV on my computer?"}
            cssClass={"faq-content"}
          >
            <p>
              You can watch your Optimum live TV channels with the Optimum App
              for laptop.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What is the cheapest
                Optimum internet package?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Optimum’s cheapest internet packages are Optimum 300 and Fiber
                  Internet 300, each priced at $40.00 per month. Both packages
                  provide 300 Mbps download speeds, although the fiber option
                  offers much higher upload speeds than its cable counterpart
                  (300 Mbps vs. 20 Mbps).
                  <br />
                  Unfortunately, you must live in an area with a fiber
                  infrastructure, like some areas of New Jersey, to qualify for
                  the fiber plan.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" What is the cheapest Optimum internet package?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum’s cheapest internet packages are Optimum 300 and Fiber
              Internet 300, each priced at $40.00 per month. Both packages
              provide 300 Mbps download speeds, although the fiber option offers
              much higher upload speeds than its cable counterpart (300 Mbps vs.
              20 Mbps).
              <br />
              Unfortunately, you must live in an area with a fiber
              infrastructure, like some areas of New Jersey, to qualify for the
              fiber plan.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Is Optimum internet
                unlimited?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Yes, Optimum internet is unlimited, meaning it does not
                  restrict users with monthly data caps.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" Is Optimum internet unlimited?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, Optimum internet is unlimited, meaning it does not restrict
              users with monthly data caps.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>How much do you pay for
                Optimum Wi-Fi?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  All current Optimum internet customers have access to Optimum
                  Wi-Fi hotspots, free of charge. Optimum internet plans are
                  usually between $40.00–$180.00/mo..
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"How much do you pay for Optimum Wi-Fi?"}
            cssClass={"faq-content"}
          >
            <p>
              All current Optimum internet customers have access to Optimum
              Wi-Fi hotspots, free of charge. Optimum internet plans are usually
              between $40.00–$180.00/mo..
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Optimum Overview | Optimum TV | Optimum Channel lineup |
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
            Our experts spent hours crunching the numbers on Optimum’s internet
            plans, rating them for bang for your buck, reliability, features,
            and customer satisfaction. Then we faced off Optimum’s internet
            plans against the competition to give a clearer picture of which
            internet provider might be the best for you. For more information on
            our methodology, check out our
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
            guide
          </p>
          <h4>Related articles:</h4>
          <ul>
            <li>
              <span className="link">
                <Link href={"#"}>Best Optimum Compatible-Modems</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"#"}>How to Change or Cancel Optimum</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"#"}>Hidden Costs of Optimum</Link>
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

export default OptimumInternetReview;
