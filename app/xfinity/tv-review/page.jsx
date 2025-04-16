// import React, { useState } from "react";
import "./xfinity-tv-review.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import { xfinityNavLinks } from "../../assets/data/navLinks/xfinityNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import xfinitylogo from "../../assets/images/xfinitylogo.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import cross from "../../assets/images/cross.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
import quotations from "../../assets/images/quotations.svg";
import tvstream from "../../assets/images/tvstream.png";
import remotereview from "../../assets/images/remotereview.png";
import reviewmantwo from "../../assets/images/reviewmantwo.png";
// import Newsletter from "../../components/newsletter/Newsletter";
import xone from "../../assets/images/xone.png";
import xtwo from "../../assets/images/xtwo.png";
import xthree from "../../assets/images/xthree.png";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Xfinity TV Plans And Pricing Review"
};

const XfinityTvReview = () => {
  // const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  let heroData = {
    card1: {
      logo: xfinitylogo,
      rating: "(4.5/5)",
      starImg: star,
      desc: "Get high-speed internet for only $30/mo. when you add Xfinity Mobile to your plan.",
      buttonText: "Compare Plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: reviewmantwo,

    cardsStrip: [
      {
        subtitle: "Price:",
        title: "$20.00–$80.00/mo.",
        icon: cross,
      },
      {
        subtitle: "Upload speeds:",
        title: "125-185+",
        icon: cross,
      },
      {
        subtitle: "DVR:",
        title: "20–300 hours",
        icon: cross,
      },
      {
        subtitle: "Contract:",
        title: "1-2 years or no-term agreement",
        icon: cross,
      },
    ],

    tableData: [
      {
        head: [
          "Top packages",
          "Price* ",
          "Channels",
          "Popular channels",
          "Internet speed",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Ultimate TV",
              "$68.50/mo.",
              "185+",
              "IFC, Disney XD, Nat Geo Wild",
              "N/A",
            ],
            linkPath: "#",
          },

          {
            content: [
              "2.",
              "Ultimate TV with Gigabit Extra",
              "$125.00/mo.*",
              "185+",
              "NBA TV, Disney Channel, TeenNick",
              "1,200 Mbps",
            ],
            linkPath: "#",
          },
          {
            content: [
              "3.",
              "Popular TV",
              "$50.00/mo.",
              "125+",
              "AMC, Cartoon Network, Disney Channel",
              "N/A",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "*For the first 12 months with a 1-year agreement.**For the first 24 months with no term agreement. Data effective as of publish date. Offers and availability may vary by location and are subject to change.",
  };
  let packageTableData = [
    {
      head: ["package", "Price", "Popular channels", "Channels", "Details"],

      body: [
        {
          content: ["1.", "Choice TV", "$20.00/mo.", "ABC, CBS, NBC", "10+"],
          linkPath: "#",
        },
        {
          content: ["2.", "Popular TV ", "$50.00/mo.", "FX, HGTV, MTV", "125+"],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Ultimate TV",
            "$68.50/mo.",
            "Cooking Channel, DIY Network, ESPNU",
            "185+",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="xfinity-tv-review">
      {/* <SubNav links={xfinityNavLinks} /> */}

      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">Xfinity TV Plans And Pricing Review</h2>
          <p className="sect-desc">
            Xfinity has three packages with different channels, and the price
            ranges from $20 to $80 each month, depending on where you live.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-xfinity-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is Xfinity TV good?</h4>
          <p>
            Xfinity TV is alright, but it's not super amazing. It offers over
            185 live TV channels, a free app called Xfinity Stream, a good DVR
            called X1, and it's widely available. However, Xfinity's prices can
            be high when you think about how many channels you get, the fees for
            DVR and HD, and the extra cost for not having a long-term agreement.
            <br />
            (*No mamas were injured in the writing of this piece. Also—hi,
            moms!)
            <br />
            Still, Xfinity might be a good choice for you in a few situations.
            If you're tired of your current TV service, switching to Xfinity
            won't cost you much extra, even with the more expensive short-term
            plans. Also, if you need internet too, Xfinity offers fast internet
            that you can bundle with your TV.
          </p>
          <br />
          <h4>Xfinity TV pros and cons</h4>
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
                  <td>Smaller channel counts</td>
                </tr>
                <tr>
                  <td>Excellent X1 DVR and voice remote</td>
                  <td>12–24 mo. contracts</td>
                </tr>
                <tr>
                  <td>Xfinity Stream app for mobile viewing</td>
                  <td>33% higher pricing for no-term agreement plans</td>
                </tr>
                <tr>
                  <td> </td>
                  <td>High DVR and equipment fees</td>
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
            Below, you'll find a variety of links showcasing the latest deals
            and plans. Whether you're seeking discounts, browsing for new
            packages, or comparing options, simply click to delve deeper!
          </p>
        </div>

        <div className="all-links">
          <Link href={"#"}>Deals</Link>
          <Link href={"#"}>Plans</Link>
          <Link href={"#"}>competition</Link>
          <Link href={"#"}>specs and features</Link>
          <Link href={"#"}>xfinity tV equipment</Link>
        </div>
      </div>

      <CTA
        heading={"Curious what other TV providers are in your area?"}
        desc={
          "Enter your zip code below to see if you can get Xfinity service."
        }
      />

      <div className="section xfinity-tv-review-package-plans">
        <div className="head">
          <h2 className="sect-heading">
            Curious <span>what other providers are </span> in your area
          </h2>
          <p className="sect-desc">
            Discover Xfinity internet packages and plans available in your area.
            Choose the best option for your needs today!
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity TV deals and promotions</h4>
          <p className="after-heading">
            Besides cheap TV packages and bundles with both TV and internet, you
            can snag these Xfinity TV deals:
          </p>
          <br />
          <ul>
            <li>
              Save $10 every month with auto payments and paperless bills.
            </li>
            <li>· Get up to $30 off each month with bundles.</li>
            <li>· Free premium channels (with select bundles)</li>
          </ul>
          <p className="after-heading">
            For more information, check out our Xfinity deals guide.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity TV plans (West)</h4>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            *No term contract. Broadcast TV fee and regional sports fee extra;
            price subj to change. Taxes and equipment not included.Data
            effective as of publish date. Offers and availability may vary by
            location and are subject to change.
          </p>
        </div>
        <div className="faq-wrapper">
          {/* <div className="accordion">
    <div className="item">
      <h3 className="title" onClick={() => accordionHandler(1)}>
                <span>{faq === 1 ? "-" : "+"}</span> Xfinity TV plans and
                packages (central)
      </h3>

      <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <PackageTable item={packageTableData} />
                <p className="below-table">
                  *No term contract. Broadcast TV fee and regional sports fee
                  extra; price subj to change. Taxes and equipment not
                  included.Data effective as of publish date. Offers and
                  availability may vary by location and are subject to change.
        </p>
      </div>
    </div>
  </div> */}

          <Accordion
            id={"1"}
            title={"Xfinity TV plans and packages (central)"}
            cssClass={"faq-content"}
          >
            <PackageTable item={packageTableData} />
            <p className="below-table">
              *No term contract. Broadcast TV fee and regional sports fee extra;
              price subj to change. Taxes and equipment not included.Data
              effective as of publish date. Offers and availability may vary by
              location and are subject to change.
            </p>
          </Accordion>

          {/* <div className="accordion">
    <div className="item">
      <h3 className="title" onClick={() => accordionHandler(2)}>
        <span>{faq === 2 ? "-" : "+"}</span> Xfinity TV plans and
        packages (northeast)
      </h3>

      <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          *No term contract. Broadcast TV fee and regional sports fee
          extra; price subj to change. Taxes and equipment not
          included.Data effective as of publish date. Offers and
          availability may vary by location and are subject to change.
        </p>
      </div>
    </div>
  </div> */}

          <Accordion
            id={"2"}
            title={"Xfinity TV plans and packages (northeast)"}
            cssClass={"faq-content"}
          >
            <PackageTable item={packageTableData} />
            <p className="below-table">
              *No term contract. Broadcast TV fee and regional sports fee extra;
              price subj to change. Taxes and equipment not included.Data
              effective as of publish date. Offers and availability may vary by
              location and are subject to change.
            </p>
          </Accordion>

          {/* <div className="accordion">
    <div className="item">
      <h3 className="title" onClick={() => accordionHandler(3)}>
        <span>{faq === 3 ? "-" : "+"}</span> Which Xfinity region i’m
        in?
      </h3>

      <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>West region</th>
                <th>Northeast region</th>
                <th>Central region</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1.</td>
                <td>Arizona</td>
                <td>Alabama</td>
                <td>Connecticut</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>California</td>
                <td>Arkansas</td>
                <td>Delaware</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Colorado</td>
                <td>Florida</td>
                <td>District Of Columbia</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Idaho</td>
                <td>Georgia</td>
                <td>Maine</td>
              </tr>
              <tr>
                <td>5.</td>
                <td>Kansas</td>
                <td>Illinois</td>
                <td>Maryland</td>
              </tr>
              <tr>
                <td>6.</td>
                <td>Minnesota</td>
                <td>Indiana</td>
                <td>Massachusetts</td>
              </tr>
              <tr>
                <td>7.</td>
                <td>Missouri</td>
                <td>Kentucky</td>
                <td>New Hampshire</td>
              </tr>
              <tr>
                <td>8.</td>
                <td>Oregon</td>
                <td>Michigan</td>
                <td>New York</td>
              </tr>
              <tr>
                <td>9.</td>
                <td>Texas</td>
                <td>Mississippi</td>
                <td>North Carolina</td>
              </tr>
              <tr>
                <td>10.</td>
                <td>Utah</td>
                <td>South Carolina</td>
                <td>Ohio</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div> */}

          <Accordion
            id={"3"}
            title={"Which Xfinity region i’m in?"}
            cssClass={"faq-content"}
          >
            <div className="custom-table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>West region</th>
                    <th>Northeast region</th>
                    <th>Central region</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>Arizona</td>
                    <td>Alabama</td>
                    <td>Connecticut</td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>California</td>
                    <td>Arkansas</td>
                    <td>Delaware</td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>Colorado</td>
                    <td>Florida</td>
                    <td>District Of Columbia</td>
                  </tr>
                  <tr>
                    <td>4.</td>
                    <td>Idaho</td>
                    <td>Georgia</td>
                    <td>Maine</td>
                  </tr>
                  <tr>
                    <td>5.</td>
                    <td>Kansas</td>
                    <td>Illinois</td>
                    <td>Maryland</td>
                  </tr>
                  <tr>
                    <td>6.</td>
                    <td>Minnesota</td>
                    <td>Indiana</td>
                    <td>Massachusetts</td>
                  </tr>
                  <tr>
                    <td>7.</td>
                    <td>Missouri</td>
                    <td>Kentucky</td>
                    <td>New Hampshire</td>
                  </tr>
                  <tr>
                    <td>8.</td>
                    <td>Oregon</td>
                    <td>Michigan</td>
                    <td>New York</td>
                  </tr>
                  <tr>
                    <td>9.</td>
                    <td>Texas</td>
                    <td>Mississippi</td>
                    <td>North Carolina</td>
                  </tr>
                  <tr>
                    <td>10.</td>
                    <td>Utah</td>
                    <td>South Carolina</td>
                    <td>Ohio</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion>
        </div>
        <div className="endnote review-endnote">
          <div className="endnote-container">
            <Image
              className="quotation-img"
              src={quotations}
              alt="quotations"
            />
            <h4>Pro tip: Basic cable plans suck but OTA antennas don’t</h4>
            <p>
              Why spend money every month on local channels when you can buy an
              antenna? For just $25 to $70, you'll get lots more channels. We
              suggest the Mohu Leaf 50. It's simple to set up inside, and you'll
              get all the channels broadcast within 50 miles of your home. If
              you still want a DVR for your local channels, you can get one for
              $100 to $350. Our top pick is the Tablo Quad 4-Tuner DVR.
              <span className="link">
                <Link href={"#"}>over-the-air (OTA) antenna?</Link>
              </span>
              For a one-time payment of $25–$70, you’ll get many more channels.
              We like the Mohu Leaf 50. It’s easy to install indoors, and you’ll
              pick up every broadcast channel within 50 miles of your place.
              <br />
              If you still want DVR service to go with your local channels, you
              can get one for $100–$350. We recommend the{" "}
              <span className="link">
                <Link href={"#"}> Tablo Quad 4-Tuner DVR.</Link>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="section xfinity-competition">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity TV <span> vs. the competition</span>
          </h2>
          <p className="sect-desc">
            Xfinity's cable TV plans are okay compared to others. It doesn't
            offer the flexibility of no-contract plans like Spectrum, but it's
            cheaper than competitors such as Cox. Satellite TV providers like
            DISH and DIRECTV offer more channels than Xfinity, but they're also
            more expensive because of their higher prices and two-year
            contracts.
            <br />
            <br />
            By comparison, satellite TV providers like{" "}
            <span className="link">
              <Link href={"#"}>DISH</Link>
            </span>{" "}
            and{" "}
            <span className="link">
              <Link href={"#"}>DIRECTV</Link>
            </span>
            have far bigger channel counts than Xfinity. But you’ll also be
            paying much more for the privilege, thanks to each provider’s higher
            prices and two-year contracts.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change.
        </p>
        <div className="endnote review-endnote">
          <div className="endnote-container">
            <Image
              className="quotation-img"
              src={quotations}
              alt="quotations"
            />
            <h4>The hidden costs of Xfinity</h4>
            <p>
              When you're picking TV service, it's wise to ask about extra
              charges and leave the surprises for reality TV. In our guide about
              Xfinity's hidden costs, we tell you about the different fees you
              might find on your Xfinity bill, like broadcast, DVR, extra TV,
              HD, installation, late, premium channel, reactivation, and
              regional sports network fees.{" "}
              <span className="link">
                <Link href={"#"}>hidden costs of Xfinity, </Link>
              </span>{" "}
              we give you the scoop on the various fees—broadcast, DVR, extra
              TV, HD, installation, late, premium channel, reactivation, and
              regional sports network—you might see on your Xfinity bill.
            </p>
          </div>
        </div>
      </div>

      <div className="section xfinity-tv-specs">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity TV <span> specs and features</span>
          </h2>
          <p className="sect-desc">
            Xfinity’s cable plans include a lot more than TV service. From
            on-demand programming to TV boxes, let’s explore everything else
            about Xfinity’s TV plans.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity TV channels</h4>
          <p className="after-heading">
            Xfinity doesn't have as many channels as some other companies, but
            it still has all the popular ones, and many are in HD. There are
            also lots of premium channels and extra packs you can add. Plus, you
            get a bunch of Music Choice channels included. Check out some of the
            channels Xfinity offers here, or read our guide for a full list.
            (which makes the channel counts even weaker).
            <br />
            Here’s a sampling of Xfinity’s available channels. For a more
            comprehensive look at Xfinity cable TV channels, read our Xfinity
            Channel Lineup guide.
          </p>
          <div className="endnote review-endnote">
            <div className="endnote-container">
              <Image
                className="quotation-img"
                src={quotations}
                alt="quotations"
              />
              <h4>Popular channels on Xfinity</h4>
              <br />
              <div className="div-ul">
                <ul>
                  <li>· A&E</li>
                  <li>· Bravo</li>
                  <li>· CNN</li>
                  <li>· Comedy Central</li>
                  <li>· Disney, Disney Junior, and Disney XD</li>
                  <li>· ESPN</li>
                </ul>
                <ul>
                  <li>· FOX News</li>
                  <li>· Lifetime (and LMN)</li>
                  <li>· Nat Geo (and Nat Geo Wild)</li>
                  <li>· Nickelodeon, Nick 2, Nick Jr., and Nicktoons</li>
                  <li>· Syfy</li>
                  <li>· TBS</li>
                </ul>
              </div>
              <div className="btn">
                <Link href={"#"}>get these Latinos channels</Link>
              </div>
            </div>
          </div>
          <div className="endnote review-endnote">
            <div className="endnote-container">
              <Image
                className="quotation-img"
                src={quotations}
                alt="quotations"
              />
              <h4>Premium channels on Xfinity</h4>
              <br />
              <div className="div-ul">
                <ul>
                  <li>NEMAX ($12.00/mo.)</li>
                  <li>Deportes ($5.00)</li>
                  <li>EPIX ($5.99/mo.)</li>
                  <li>HBO® Max ($14.99/mo.)</li>
                  <li>NFL RedZone ($9.99/mo.)</li>
                </ul>
                <ul>
                  <li>Playboy TV ($19.99/mo.)</li>
                  <li>SHOWTIME® ($12.00/mo.)</li>
                  <li>STARZ ($8.99 /mo.)</li>
                  <li>STREAMPIX ($4.99/mo.)</li>
                  <li>TMC ($12.00/mo.)</li>
                </ul>
              </div>
              <div className="btn">
                <Link href={"#"}>sign up for Premium channels</Link>
              </div>
            </div>
          </div>
          <div className="endnote review-endnote">
            <div className="endnote-container">
              <Image
                className="quotation-img"
                src={quotations}
                alt="quotations"
              />
              <h4>Xfinity add-on packs</h4>
              <br />
              <div className="div-ul">
                <ul>
                  <li>ACORN TV ($5.99/mo.)</li>
                  <li>AMC+ ($4.99/mo.)</li>
                  <li>Anime Network ($6.99/mo.)</li>
                  <li>Curiosity Stream ($2.99/mo.)</li>
                </ul>
                <ul>
                  <li>HERE TV ($7.99/mo.)</li>
                  <li>KidStream ($4.99/mo.)</li>
                  <li>HERE TV ($7.99/mo.)</li>
                  <li>UP Faith & Family ($4.99/mo.)</li>
                </ul>
              </div>
              <div className="btn">
                <Link href={"#"}>sign up for Add-ons</Link>
              </div>
            </div>
            <p className="below-table">
              Data as of post date. Offers and availability may vary by location
              and are subject to change.
            </p>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity bundles in your area</h4>
          <p className="after-heading">
            With Xfinity, you can combine your TV, internet, and phone services
            in double- or triple-play bundles. Each of Xfinity's three regions
            has its own bundle packages. We've looked into prices and put
            together comparison tables for some popular Xfinity TV and internet
            bundles above. For more detailed info, check out our guide to
            Xfinity bundles.
            <br />
            For more detailed information, read our guide to Xfinity bundles.
          </p>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            *Internet: For 12 months with 1-year term contract. Taxes and
            equipment not included. Includes $10/mo automatic payments and
            paperless billing discount. TV: No term contract. Broadcast TV fee
            extra; price subj to change. Taxes and equipment not included.
            <br />
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity On Demand</h4>
          <p className="after-heading">
            Xfinity On Demand is included with your TV package and can be
            accessed through the X1 or Xfinity Stream app. It gives you lots of
            free stuff like thousands of movies, the newest episodes of popular
            shows, and options to rent or buy titles, including new releases.
            Having Xfinity On Demand with your cable package adds a bunch of
            free stuff, making it a good deal. Plus, being able to watch it
            outside your home and download for later is really handy.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Peacock</h4>
          <p className="after-heading">
            Peacock is a streaming TV service owned by NBCUniversal, which owns
            Xfinity. It has three tiers:
          </p>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            Data as of post date. Offers and availability may vary by location
            and are subject to change.
          </p>
          <p className="after-heading">
            Peacock (with ads) is totally free and has 7,500 hours of stuff to
            watch, not counting Peacock originals. Peacock Premium (with ads)
            costs $4.99 each month, but it gives you double the content—15,000
            hours—with new episodes of NBC shows available the day after they're
            on TV. For double the money, Peacock Premium Plus offers the same
            15,000 hours of stuff, but you don't have to sit through ads. To
            learn more about Peacock plans, read our Peacock Review.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity TV streaming</h4>
          <p className="after-heading">
            Yes, you can watch your Xfinity X1 TV package online. It's free with
            your TV subscription. Just use Xfinity’s Stream app on your phone,
            tablet, or laptop. You can:
          </p>
          <ul>
            <li>Up to 200+ live channels (depending on your package)</li>
            <li>Most Xfinity On Demand titles</li>
            <li>All of your DVR recordings</li>
            <li>Set and manage DVR timers</li>
            <li>Set and manage parental controls</li>
          </ul>
          <p className="after-heading">
            And the best part? You can use Xfinity Stream on up to five devices
            at the same time. That's a lot compared to other TV providers like
            DISH, which only allows one stream at a time on its DISH Anywhere
            app. Plus, with Xfinity Stream, you can download shows to watch
            offline when you're traveling or don't have internet. Want more
            details? Check out our Xfinity Stream App Guide.
            <br />
            Xfinity Stream also allows you to download titles for offline
            viewing when you’re traveling or in an area with no service.
            <br />
            Read our Xfinity Stream App Guide for more information.
          </p>
          <br />
          <br />
          <Image src={tvstream} alt="tvstream" className="tvstream" />
        </div>
      </div>

      <div className="section xfinity-tv-equipment">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity<span> TV equipment</span>
          </h2>
          <p className="sect-desc">
            Excited to discuss equipment? Xfinity has various gadgets to add to
            your TV package or bundle. Many of them come with an extra monthly
            charge.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity X1</h4>
          <p className="after-heading">
            Xfinity has a top-notch TV service called the X1, which includes a
            DVR/receiver. It costs $7.50 to $8.50 more each month, depending on
            where you live. However, if you don't need the extra features of the
            X1, choosing a regular HD TV box won't save you any money. These
            boxes also cost $7.50 to $8.50 per month, depending on where you
            are.
            <br />
            But if you don’t need or want the X1’s special features, you won’t
            save money by choosing a standard HD TV box. They’re also between
            $7.50 to $8.50 per month depending on region.
          </p>
          <div className="container">
            <div className="column">
              {" "}
              <span className="link">
                <Link href={"#"}>
                  <Image src={xone} alt="cross" className="cross" />
                </Link>
              </span>
            </div>
            <div className="column">
              <span className="link">
                <Link href={"#"}>
                  <Image src={xtwo} alt="cross" className="cross" />
                </Link>
              </span>
            </div>
            <div className="column">
              <span className="link">
                <Link href={"#"}>
                  <Image src={xthree} alt="cross" className="cross" />
                </Link>
              </span>
            </div>
          </div>
          <p className="below-table">
            Depending where you’re located, and what’s in stock, you’ll get one
            of three Xfinity X1 models.
          </p>
          <p className="after-heading">
            The X1 Cloud DVR service lets you save shows and view them on your
            X1, the Xfinity Stream app, and the Xfinity Stream website. Most
            packages include 20 hours of DVR storage, but you can upgrade to 150
            hours ($10.00/mo.) or 300 hours ($20.00/mo.) of storage during the
            checkout process.
            <br />
            If you’d like to watch your Xfinity content on another TV, you can
            pay $8.50 a month for an extra X1 DVR—or choose a non-DVR X1 TV box
            for $8.50 a month to use on the additional TV. The non-DVR boxes can
            set and play recordings, but not store them (they’ll be on your
            <span className="link">
              <Link href={"#"}> primary X1 DVR).</Link>
            </span>
            <br />
            It’s important to note here that Xfinity sends out various models of
            non-DVR X1 boxes. One, the RNG150N, is not compatible with the
            Xfinity voice remote. If you want that sweet hands-free navigation,
            you might want to ask an Xfinity rep which box you should expect in
            your region.
            <br />
            For more on the X1, read our in-depth Xfinity X1 review.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity Flex</h4>
          <p className="after-heading">
            What's Xfinity Flex? It's like a streaming service from Xfinity,
            perfect if you have their internet but not their TV. With Flex, you
            can watch lots of free live and on-demand stuff like Pluto, Tubi,
            and YouTube, plus more. There's over 200 live channels and tons of
            movies and shows on-demand, including lots from Xfinity. You can
            also use Flex to watch your HBO, Hulu, Netflix, and other
            subscriptions, which is super handy. Sadly, Flex isn't free for
            Xfinity customers anymore, but we'll let you know when we find out
            how much it costs. If you want to know more about Flex, check out
            our full review.
            <br />
            <br />
            And to learn more about Flex, read our full Xfinity Flex review.
            <br />
            <br />
          </p>
          <Image src={remotereview} alt="" className="" />
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity voice remote</h4>
          <p className="after-heading">
            Both the X1 and Xfinity Flex come with either the Xfinity XR11 or
            XR15 voice remote. They may look different, but they do the same
            things:
          </p>
          <br />
          <ul>
            <li>· Voice control</li>
            <li>· Backlit keypad</li>
            <li>· 5-minute skip for live TV or DVR recording</li>
            <li>· 10-minute skip for Xfinity On Demand</li>
            <li>· Aim Anywhere function</li>
            <li>· Automatic pairing</li>
            <li>
              · Accessibility features (closed captioning, video description,
              voice guidance)
            </li>
          </ul>
          <p className="after-heading">
            For more information on all Xfinity equipment, see our review.
          </p>
        </div>
      </div>

      <div className="section xfinity-final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take:<span> Is Xfinity TV worth it?</span>
          </h2>
          <p className="sect-desc">
            Xfinity’s lower channel counts and high DVR and HD fees make it one
            of the pricier TV providers out there. But that X1 DVR is pretty
            powerful, so it’s almost worth the extra expense—unless budgetary
            concerns are top-of-mind for you. But we still think that you’d like
            Xfinity if you’re unhappy with your current provider or if you’re
            looking for both TV and internet service (Xfinity has speeds up to
            3,000 Mbps!).
            <br />
            <br />
            Either way, you’ll still have plenty to watch—and ways to watch
            it—with Xfinity.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>Sign up for xfinity</Link>
        </div>
      </div>

      <div className="section xfinity-tv-review-faq">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span>FAQ</span>
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
<span>{faq === 1 ? "-" : "+"}</span> What are Xfinity tV
packages?
</h3>

<div className={`faq-content ${faq === 1 ? "show" : ""}`}>
<p>
  Xfinity TV packages by Comcast come through a cable connection
  with up to 185+ channels. Most packages also include 20 hours
  of DVR storage via the{" "}
  <span className="link">
    <Link href={"#"}>X1 DVR box, </Link>
  </span>{" "}
  plus the Xfinity Stream app.
</p>
<ul>
  <li>· Choice TV: $20.00–$25.00/mo., 10+ channels</li>
  <li>· Popular TV: $50.00–$60.00/mo., 125+ channels</li>
  <li>· Ultimate TV: $68.50–$80.00/mo., 185+ channels</li>
</ul>
<p>
  Check to see what Xfinity TV packages are available in your
  area.
</p>
</div>
</div>
</div> */}

          <Accordion
            id={"1"}
            title={"What are Xfinity TV packages?"}
            cssClass={"faq-content"}
          >
            <p>
              Xfinity TV packages by Comcast come through a cable connection
              with up to 185+ channels. Most packages also include 20 hours of
              DVR storage via the{" "}
              <span className="link">
                <Link href={"#"}>X1 DVR box, </Link>
              </span>{" "}
              plus the Xfinity Stream app.
            </p>
            <ul>
              <li>· Choice TV: $20.00–$25.00/mo., 10+ channels</li>
              <li>· Popular TV: $50.00–$60.00/mo., 125+ channels</li>
              <li>· Ultimate TV: $68.50–$80.00/mo., 185+ channels</li>
            </ul>
            <p>
              Check to see what Xfinity TV packages are available in your area.
            </p>
          </Accordion>

          {/* <div className="accordion">
<div className="item">
<h3 className="title" onClick={() => accordionHandler(2)}>
<span>{faq === 2 ? "-" : "+"}</span> What is the cheapest
Xfinity TV package?
</h3>

<div className={`faq-content ${faq === 2 ? "show" : ""}`}>
<p>
  The cheapest Xfinity internet plan is 75 Mbps for $19.99 in
  the West region, 75 Mbps for $30.00 in the Central region, and
  200 Mbps for $25.00/mo. in the Northeast region.
  Unfortunately, plan pricing and naming varies by region.
</p>
</div>
</div>
</div> */}

          <Accordion
            id={"2"}
            title={"What is the cheapest Xfinity TV package?"}
            cssClass={"faq-content"}
          >
            <p>
              The cheapest Xfinity internet plan is 75 Mbps for $19.99 in the
              West region, 75 Mbps for $30.00 in the Central region, and 200
              Mbps for $25.00/mo. in the Northeast region. Unfortunately, plan
              pricing and naming varies by region.
            </p>
          </Accordion>

          {/* <div className="accordion">
<div className="item">
<h3 className="title" onClick={() => accordionHandler(3)}>
<span>{faq === 3 ? "-" : "+"}</span> Can you get xfinity tV
without cable?
</h3>

<div className={`faq-content ${faq === 3 ? "show" : ""}`}>
<p>
  Sorry, after April 2023, the{" "}
  <span className="link">
    <Link href={"#"}>Xfinity Flex </Link>
  </span>{" "}
  won't be free anymore. If you don't mind paying whatever its
  new price will be, you can request it when you sign up for
  your Xfinity internet plan (although your customer service rep
  will probably railroad you into getting it before you get a
  word in edgewise).
  <br />
  However, if you get an{" "}
  <span className="link">
    <Link href={"#"}>Xfinity TV plan</Link>
  </span>
  , you're not eligible for an Xfinity Flex. That's okay-ish
  since you'll get the X1 DVR instead. Unfortunately, the X1
  falls into the non-free category as well due to its $14.95 per
  month service fee.
</p>
</div>
</div>
</div> */}

          <Accordion
            id={"3"}
            title={"Can you get xfinity TV without cable?"}
            cssClass={"faq-content"}
          >
            <p>
              Sorry, after April 2023, the{" "}
              <span className="link">
                <Link href={"#"}>Xfinity Flex </Link>
              </span>{" "}
              won't be free anymore. If you don't mind paying whatever its new
              price will be, you can request it when you sign up for your
              Xfinity internet plan (although your customer service rep will
              probably railroad you into getting it before you get a word in
              edgewise).
              <br />
              However, if you get an{" "}
              <span className="link">
                <Link href={"#"}>Xfinity TV plan</Link>
              </span>
              , you're not eligible for an Xfinity Flex. That's okay-ish since
              you'll get the X1 DVR instead. Unfortunately, the X1 falls into
              the non-free category as well due to its $14.95 per month service
              fee.
            </p>
          </Accordion>

          {/* <div className="accordion">
<div className="item">
<h3 className="title" onClick={() => accordionHandler(4)}>
<span>{faq === 4 ? "-" : "+"}</span> what is the best package to
get on xfinity tV?
</h3>

<div className={`faq-content ${faq === 4 ? "show" : ""}`}>
<p>
  Comcast and Xfinity are the same thing-you can't trip us up
  with your trick question!
</p>
<p>
  In 2010, Comcast started using Xfinity as its trade name for
  TV, internet, and phone services.
  <br />
  And as part of Comcast, Xfinity has built-in relationships
  with Comcast's other products, such as NBCUniversal. That's
  one of the reasons you'll get the{" "}
  <span className="link">
    <Link href={"#"}>Peacock Premium</Link>
  </span>{" "}
  streaming service for free with your Xfinity cable TV service.
</p>
</div>
</div>
</div> */}

          <Accordion
            id={"4"}
            title={"What is the best package to get on xfinity TV?"}
            cssClass={"faq-content"}
          >
            <p>
              Comcast and Xfinity are the same thing-you can't trip us up with
              your trick question!
            </p>
            <p>
              In 2010, Comcast started using Xfinity as its trade name for TV,
              internet, and phone services.
              <br />
              And as part of Comcast, Xfinity has built-in relationships with
              Comcast's other products, such as NBCUniversal. That's one of the
              reasons you'll get the{" "}
              <span className="link">
                <Link href={"#"}>Peacock Premium</Link>
              </span>{" "}
              streaming service for free with your Xfinity cable TV service.
            </p>
          </Accordion>

          {/* <div className="accordion">
<div className="item">
<h3 className="title" onClick={() => accordionHandler(5)}>
<span>{faq === 5 ? "-" : "+"}</span>can you just get xfinity tV?
</h3>

<div className={`faq-content ${faq === 5 ? "show" : ""}`}>
<p>
  The best Xfinity deal is Superfast Internet + Ultimate TV,
  which provides 800 Mbps download speeds and 185+ cable
  channels. Your savings may vary by region, though, and
  depending on where you live, it could cost $115-$120 a month.
</p>
<p>
  For more on Xfinity's money-saving double plays, head over to
  our{" "}
  <span className="link">
    <Link href={"#"}>Xfinity bundles review</Link>
  </span>
</p>
</div>
</div>
</div> */}

          <Accordion
            id={"5"}
            title={"Can you just get xfinity TV?"}
            cssClass={"faq-content"}
          >
            <p>
              The best Xfinity deal is Superfast Internet + Ultimate TV, which
              provides 800 Mbps download speeds and 185+ cable channels. Your
              savings may vary by region, though, and depending on where you
              live, it could cost $115-$120 a month.
            </p>
            <p>
              For more on Xfinity's money-saving double plays, head over to our{" "}
              <span className="link">
                <Link href={"#"}>Xfinity bundles review</Link>
              </span>
            </p>
          </Accordion>

          {/* <div className="accordion">
          <div className="item">
          <h3 className="title" onClick={() => accordionHandler(6)}>
          <span>{faq === 6 ? "-" : "+"}</span>what channels are in the
          xfinity’s basic package?
          </h3>

          <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
          <p>
            According to our{" "}
            <span className="link">
              <Link href={"#"}>customer satisfaction survey,</Link>
            </span>{" "}
            62% of Xfinity customers are satisfied with their internet
            service. In addition, 69% of Xfinity customers are satisfied
            with their internet speed, tying it for first place with
            Verizon. Cable service will always be dependent on how heavy
            usage is in your network, so for more reliable speeds, we
            recommend{" "}
            <span className="link">
              <Link href={"#"}>fiber internet</Link>
            </span>
            if you have the option.
          </p>
          </div>
          </div>
          </div> */}

          <Accordion
            id={"6"}
            title={"What channels are in the xfinity’s basic package?"}
            cssClass={"faq-content"}
          >
            <p>
              According to our{" "}
              <span className="link">
                <Link href={"#"}>customer satisfaction survey,</Link>
              </span>{" "}
              62% of Xfinity customers are satisfied with their internet
              service. In addition, 69% of Xfinity customers are satisfied with
              their internet speed, tying it for first place with Verizon. Cable
              service will always be dependent on how heavy usage is in your
              network, so for more reliable speeds, we recommend{" "}
              <span className="link">
                <Link href={"#"}>fiber internet</Link>
              </span>
              if you have the option.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Xfinity Overview | Xfinity Internet | Xfinity TV | Xfinity
          Voice | Xfinity Bundles | Xfinity Channel Lineup | Xfinity Customer
          Service | Xfinity Availability Map | Xfinity Free Installation
        </p>
      </div>

      <div className="section endnote intertnet-review-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Methodology:</h4>
          <p>
            We compared Xfinity’s TV plans with others to see how they measured
            up in terms of value, number of channels, and customer satisfaction.
            For details on how we did this, visit our How We Rank page.
            <span className="link">
              <Link href={"#"}>How We Rank page</Link>
            </span>
          </p>
        </div>
      </div>
      {/* <Newsletter /> */}
    </div>
  );
};

export default XfinityTvReview;
