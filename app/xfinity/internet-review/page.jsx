// import React, { useState } from "react";
import "./xfinity-internet-review.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import { xfinityNavLinks } from "../../assets/data/navLinks/xfinityNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import xfinitylogo from "../../assets/images/xfinitylogo.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import reviewman from "../../assets/images/reviewman.png";
import cross from "../../assets/images/cross.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import CTA from "../../components/cta-section/CTA";
import discountIcon from "../../assets/images/discount-icon.svg";
import PackageTable from "../../components/package-table/PackageTable";
import quotations from "../../assets/images/quotations.svg";
// import Newsletter from "../../components/newsletter/Newsletter";
import PackagePricing from "../../components/package-pricing/PackagePricing";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Xfinity Internet Plans And Pricing"
};

const XfinityInternetReview = () => {
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

    card2Img: reviewman,

    cardsStrip: [
      {
        subtitle: "Price:",
        title: "$19.99–$80.00/mo.",
        icon: cross,
      },
      {
        subtitle: "Upload speeds:",
        title: "10–6,000 Mbps",
        icon: cross,
      },
      {
        subtitle: "Download speeds:",
        title: "$19.99–$80.00/mo.",
        icon: cross,
      },
      {
        subtitle: "Contract:",
        title: "1-year agreement or no-term agreement",
        icon: cross,
      },
    ],

    tableData: [
      {
        head: [
          "Top plans",
          "Price ",
          "Download speeds",
          "Upload speeds up to",
          "Details",
        ],

        body: [
          {
            content: ["1.", "Connect", "$19.99/mo.*", "75 Mbps", "5 Mbps"],
            linkPath: "#",
          },

          {
            content: [
              "2.",
              "Connect More",
              "$25.00/mo.**",
              "200 Mbps",
              "5 Mbps",
            ],
            linkPath: "#",
          },
          {
            content: [
              "3.",
              "Gigabit Extra",
              "$70.00/mo.**",
              "1,200 Mbps",
              "35 Mbps",
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
      head: [
        "package",
        "Price",
        "Download speeds",
        "Upload speeds up to",
        "Internet type",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Connect",
            "$19.99/mo.*",
            "75 Mbps",
            "5 Mbps",
            "Cable",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Connect More",
            "$35.00/mo.**",
            "200 Mbps",
            "5 Mbps",
            "Cable",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Fast",
            "$50.00/mo.**",
            "400 Mbps",
            "5 Mbps",
            "Cable",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "SuperFsat",
            "$60.00/mo.**",
            "800 Mbps",
            "10 Mbps",
            "Cable",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "Gigabit",
            "$70.00/mo.**",
            "1,000 Mbps",
            "15 Mbps",
            "Cable",
          ],
          linkPath: "#",
        },
        {
          content: [
            "6.",
            "Gigabit Extra",
            "$80.00/mo.**",
            "1,200 Mbps",
            "35 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "7.",
            "Gigabit x6",
            "$299.95/mo.**",
            "6,000 Mbps",
            "5 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataTwo = [
    {
      head: [
        "package",
        "Price",
        "Download speeds",
        "Data cap",
        "Price increase after 12 mo.",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Xfinity",
            "$19.99–$80.00/mo.**",
            "75–6,000 Mbps",
            "1.2 TB",
            "Some plans",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Spectrum",
            "$49.99–$89.99/mo.*",
            "Up to 300–1,000 Mbps",
            "Unlimited",
            "Yes",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Cox",
            "$49.99–$149.99/mo.*",
            "100–2,000 Mbps",
            "1.2 TB",
            "Yes",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "AT&T",
            "$55.00–$250.00/mo.",
            "800 Mbps",
            "Unlimited",
            "No",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "Verizon Fios",
            "$49.99–$89.99/mo.",
            "300–2,300 Mbps",
            "Unlimited",
            "No",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="xfinity-internet-review">
      {/* <SubNav links={xfinityNavLinks} /> */}

      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">Xfinity Internet Plans And Pricing</h2>
          <p className="sect-desc">
            Our experts spent lots of time checking out Xfinity internet, and we
            found that its plans are a bit complex, but you'll still get good
            internet service.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-xfinity-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is Xfinity internet good?</h4>
          <p>
            Xfinity internet is good for most folks because of its wide
            availability, fast speeds, and competitive pricing that starts at
            only $19.99 monthly. Xfinity’s data overage fees can stack up fast,
            and its reliance on contracts makes things more complicated than
            we’d like for an internet provider. But overall, you’ll get
            excellent internet service and great freebies like the Xfinity Flex
            when you get an Xfinity internet plan.
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
                  <td>Reliable network</td>
                  <td>Data caps</td>
                </tr>
                <tr>
                  <td>Xfinity Wi-Fi hotspots</td>
                  <td>Slow upload speeds</td>
                </tr>
                <tr>
                  <td>No-contract plans</td>
                  <td>Overpriced equipment</td>
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
          <Link href={"#"}>equipment</Link>
        </div>
      </div>
      <CTA
        heading={"Is Xfinity internet in your area?"}
        desc={
          "Enter your zip code below to see if you can get Xfinity service."
        }
      />
      <div className="section xfinity-internetreviewdetails">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity internet <span> deals and promotions</span>
          </h2>
          <p className="sect-desc">
            Discover exclusive Xfinity internet deals and promotions here. Get
            the best prices and special offers today!
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity internet deals</h4>
          <p className="after-heading">
            Right now, if you get Xfinity internet by itself, you can also get
            Xfinity Flex for free. Plus, you can get Peacock Premium if you have
            Xfinity Flex or X1 DVR. If you have Xfinity internet, you can also
            join Xfinity Mobile for cheap phone service. Sometimes, when you
            sign up for certain plans, Xfinity gives you a Visa prepaid card as
            a bonus. Who doesn’t like free gift cards? Check out all the best
            deals on our Xfinity deals page. Here are the internet plans:
            Connect: $19.99/mo.* for 75 Mbps download speed. Connect More:
            $25.00/mo.** for 200 Mbps download speed. Fast: $50.00/mo.* for 400
            Mbps download speed. Superfast: $60.00/mo.† for 800 Mbps download
            speed. Gigabit: $60.00/mo.** for 1,000 Mbps download speed. Gigabit
            Extra: $80.00/mo.† for 1,200 Mbps download speed. Gigabit x6:
            $299.95/mo.** for 6,000 Mbps download speed.
            <br />
            <br />
            *For the first 12 months with a 1-year agreement.**For the first 24
            months with no term agreement. Data effective as of publish date.
            Offers and availability may vary by location and are subject to
            change. For 36 months. No term contract. Includes $10/mo automatic
            payments and paperless billing discount. Taxes and equipment not
            included.
            <br />
          </p>
          <br />
          <ul>
            <li>
              {" "}
              · <span>Connect</span> — Download speeds of 75 Mbps for
              $19.99/mo.*
            </li>
            <li>
              {" "}
              · <span>Connect More</span> — Download speeds of 200 Mbps for
              $25.00/mo.**
            </li>
            <li>
              {" "}
              · <span>Fast</span>— Download speeds of 400 Mbps for $50.00/mo.*
            </li>
            <li>
              {" "}
              · <span>Superfast</span> — Download speeds of 800 Mbps for
              $60.00/mo.†
            </li>
            <li>
              {" "}
              · <span>Gigabit</span> — Download speeds of 1,000 Mbps for
              $60.00/mo.**
            </li>
            <li>
              {" "}
              · <span>Gigabit Extra</span> — Download speeds of 1,200 Mbps for
              $80.00/mo.†{" "}
            </li>
            <li>
              {" "}
              · <span>Gigabit x6</span> — Download speeds of 6,000 Mbps for
              $299.95/mo.**
            </li>
          </ul>
          <p className="below-table">
            *For the first 12 months with a 1-year agreement.**For the first 24
            months with no term agreement. Data effective as of publish date.
            Offers and availability may vary by location and are subject to
            change. For 36 months. No term contract. Includes $10/mo automatic
            payments and paperless billing discount. Taxes and equipment not
            included.
          </p>
          <p className="after-heading">
            Xfinity offers lots of deals and promotions, all listed on our
            Xfinity deals page. Currently, you can get Xfinity Flex for free
            with your internet plan or Peacock Premium with either Xfinity Flex
            or X1 DVR. Plus, there's Xfinity Mobile, providing cheap cell phone
            service for Xfinity internet customers. Some deals may not be as
            good as they sound. For example, you can save $10 each month with
            automatic payments and paperless billing, but this saving is already
            included in Xfinity's internet price. So, if you prefer paper bills
            and mailing checks, this deal could end up costing you $10. It's not
            fair that Xfinity makes it seem like you're saving money when you're
            just doing what most people do by default. However, some discounts
            are genuine. Check out our bundles section to see how much you can
            save by getting multiple Xfinity services. As an added bonus,
            Xfinity sometimes gives out Visa prepaid cards when you sign up for
            certain plans. Who doesn't love a gift card?
          </p>
          <div className="endnote limited-time-offer">
            <div className="endnote-container">
              <Image src={discountIcon} alt="discount" />
              <h4>Xfinity internet deals</h4>
              <ul>
                <li>· Xfinity Flex free with internet-only plan</li>
                <li>· Peacock Premium free with Xfinity Flex or X1 DVR</li>
                <li>
                  · $10/mo. off with automatic payments and paperless billing
                </li>
                <li>
                  · $20–$60/mo. off when you sign up for multiple services
                </li>
                <li>· Gift card sometimes included with select plans</li>
              </ul>
              <div className="btn">
                <Link href={"#"}>get xfinity deals</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section xfinity-package-plans">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity internet packages and plans <span>in your area</span>
          </h2>
          <p className="sect-desc">
            Discover Xfinity internet packages and plans available in your area.
            Choose the best option for your needs today!
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity internet plans (West)</h4>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            *For the first 12 months with a 1-year agreement. Includes $10/mo
            automatic payments and paperless billing discount.**For the first 24
            months with No Term Agreement. Includes $10/mo automatic payments
            and paperless billing discount. Data effective as of publish date.
            Offers and availability may vary by location and are subject to
            change.
          </p>
        </div>
        <div className="faq-wrapper">
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(1)}>
                <span>{faq === 1 ? "-" : "+"}</span> Xfinity internet plans
                (Central)
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Xfinity is available in most US states, but you'll have to
                  check if it services your neighborhood. Enter your{" "}
                  <span className="link">
                    <Link href={"#"}>zip code above</Link>
                  </span>{" "}
                  to check Xfinity availability in your area.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"1"}
            title={"Xfinity internet plans (Central)"}
            cssClass={"faq-content"}
          >
            <p>
              Xfinity is available in most US states, but you'll have to check
              if it services your neighborhood. Enter your{" "}
              <span className="link">
                <Link href={"#"}>zip code above</Link>
              </span>{" "}
              to check Xfinity availability in your area.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Xfinity internet plans
                (Northeast)
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
            title={"Xfinity internet plans (Northeast)"}
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

          <div className=" endnote review-endnote">
            <div className="endnote-container">
              <Image
                className="quotation-img"
                src={quotations}
                alt="quotations"
              />
              <h4>Xfinity no-contract plans in your area</h4>
              <p>
                While Xfinity has traditionally been stringent about contracts
                and hefty early termination fees, the provider has gotten
                increasingly chill about handing over contract-free internet—if
                you’re lucky.
                <br />
                In Xfinity’s Central and Northeast regions, you’ll get a
                generous two-year price guarantee with no contract on certain
                internet plans. But in Xfinity’s West region, you’ll have to
                settle for a shorter one-year price guarantee alongside a
                contract.
                <br />
                We’d wish Xfinity dropped contracts across the board—Xfinity’s
                early termination fee costs $10 per month left in your
                contract—but we’ll take progress wherever we can find it. Life
                is too unpredictable to tie yourself down to early termination
                fees. Go where the wind takes you. (Hey, who put this fortune
                cookie into our Xfinity review?)
                <br />
                Don’t go for a no-contract plan unless you’re using Xfinity for
                a very short time. If you break your term agreement just one to
                five months early, you’ll pay less in early termination fees
                than you would have on the no-contract plan.
              </p>
              <hr className="hr" />
              <div className="btn">
                <Link href={"#"}>sign up for xfinity with no contract</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section xfinity-internet-competition">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity internet <span> vs. the competition</span>
          </h2>
          <p className="sect-desc">
            Xfinity is a top choice among cable internet providers. It usually
            has better prices than Spectrum or Cox, and some Xfinity plans lock
            in the price for two years, so you save more. The main issues with
            Xfinity are its contracts on some plans and data limit. You can
            avoid the data limit by paying extra or upgrading to a Gigabit plan.
            Spectrum, on the other hand, doesn't have a data limit and offers
            contract-free internet. However, Xfinity can't match up to fiber
            ISPs like AT&T and Verizon Fios. These providers offer good prices,
            fast upload speeds, and better internet performance compared to
            cable ISPs like Xfinity.
          </p>
        </div>
        <PackageTable item={packageTableDataTwo} />
        <p className="below-table">
          * For first 12 months. ** For first 12 or 24 months. Data effective as
          of publish date. Offers and availability may vary by location and are
          subject to change.
        </p>
        <div className="endnote review-endnote">
          <div className="endnote-container">
            <Image
              className="quotation-img"
              src={quotations}
              alt="quotations"
            />
            <h4>Xfinity availability</h4>
            <p>
              Xfinity offers cable internet service nearly nationwide, and it’s
              widely available depending on your location. Check out our Xfinity
              availability map to learn more about Xfinity’s plans in your state
              and visit our Xfinity Español guide to learn more about
              Spanish-language Xfinity services.
            </p>
          </div>
        </div>
      </div>

      <div className="section xfinity-internet-specs">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity internet <span>specs and features</span>
          </h2>
          <p className="sect-desc">
            Xfinity gives you many choices and extras with its internet plans.
            Let's go over the key features of Xfinity internet plans.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity bundles in your area</h4>
          <p className="after-heading">
            *For the first 12 months with a 1-year agreement. Includes $10/mo
            automatic payments and paperless billing discount.**For the first 24
            months with No Term Agreement. Includes $10/mo automatic payments
            and paperless billing discount. Data effective as of publish date.
            Offers and availability may vary by location and are subject to
            <span className="link">
              <Link href={"#"}> change.</Link>
            </span>
            <br />
            Households who want to bundle an Xfinity cell phone plan can also
            sign up for Xfinity Mobile. Xfinity Mobile offers only a couple of
            plans, but if you don’t use a lot of data, Xfinity’s By the Gig plan
            can be super affordable. Who likes scrolling endlessly through
            social media apps, anyway?
            <br />
            (“I do,” whispers this writer. The night looms, and a distant wolf
            howls. “I do.”)
            <br />
            Xfinity’s TV plans aren’t necessarily the cheapest. But thanks to
            add-ons like the X1 DVR and free Peacock Premium, they’ll still
            offer decent value if you want the convenience that comes from
            bundling services. If you’re regularly calling overseas family
            members or need a landline for a home security system, you can also
            add Xfinity phone service to your bundle.
            <br />
            To learn more about what to expect from multiple Xfinity services,
            head over to our{" "}
            <span className="link">
              <Link href={"#"}>Xfinity bundles review</Link>
            </span>
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity customer satisfaction</h4>
          <p className="after-heading">
            Xfinity did really well in our yearly customer satisfaction survey,
            coming in as the second-best internet provider. They never scored
            lower than third place in areas like value, equipment quality, and
            how easy it is to set up.{" "}
            <span className="link">
              <Link href={"#"}> annual customer satisfaction survey.</Link>
            </span>{" "}
            The provider didn’t land lower than third place in categories,
            including value, equipment quality, and ease of installation.
          </p>
          <div className="endnote review-endnote">
            <div className="endnote-container">
              <Image
                className="quotation-img"
                src={quotations}
                alt="quotations"
              />
              <h4>Xfinity hidden costs</h4>
              <p>
                Depending on your exact Xfinity package, your bill might come
                with charges ranging from equipment to regional sports channel
                fees. Visit our{" "}
                <span className="link">
                  <Link href={"#"}> Xfinity hidden costs guide</Link>
                </span>{" "}
                to learn which fees you can avoid and which ones you’ll have to
                live with.
              </p>
            </div>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity fiber internet</h4>
          <p className="after-heading">
            Xfinity's internet uses both fiber-optic cables for speedy
            long-distance signals and coaxial cables for affordable direct
            connections to your home. In certain cities, Xfinity has expanded
            its fiber-optic network, offering super-fast plans like Gigabit x6,
            one of the quickest options available today. With download speeds of
            up to 6,000 Mbps and unlimited data, you can stream loads of 4K
            Ultra HD movies hassle-free. However, Gigabit x6 requires a two-year
            commitment and costs a hefty $299.95 monthly. If that's too much,
            the regular Gigabit plan still offers super-fast speeds at $75.00
            per month, saving you over $200.00. But ultimately, the decision is
            yours. If you need speed, then you need it, right?{" "}
            <span className="link">
              <Link href={"#"}>coaxial cables</Link>
            </span>
            to affordably carry internet directly to your home.
            <br />
            In some urban areas, Xfinity has built up its fiber-optic network.
            This allows for super-fast gig plans, including Gigabit x6—one of
            the fastest gig plans on the market today.
            <br />
            Along with 6,000 Mbps (6 Gbps) download speeds and similarly fast
            upload speeds from Xfinity, Gigabit x6 also has unlimited data
            usage. The power! Imagine how many 4K Ultra HD movies you can stream
            without worrying about going over your data cap.
            <br />
            But Gigabit x6 comes with a two-year agreement and a whopping
            $299.95 per month price tag. Since Gigabit x6 is excessive in every
            way, we don’t blame you if you decide to check yourself before you
            wreck yourself. The plain ole Gigabit plan offers a
            still-blazing-fast 1,000 Mbps for $75.00 per month. That’s more than
            $200.00 less at the very least.
            <br />
            But the choice is still yours. If you gotta go fast, you gotta go
            fast—right?
            <br />
            <br />
          </p>
          <h4>Xfinity fiber internet lets you:</h4>
          <ul>
            <li>· Stream 4K video on multiple devices</li>
            <li>· Download HD movies in minutes</li>
            <li>· Game online without lag</li>
            <li>· Upload large files for work</li>
          </ul>
          <div className="btn">
            <Link href={"#"}>get gigabit pro</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity data usage and unlimited data</h4>
          <p className="after-heading">
            Thanks to Xfinity’s 1.2 TB internet data cap, you'll have lots of
            data for your family's browsing, scrolling through Instagram, and
            watching Netflix. But remember, our everyday internet use keeps
            growing. Let's say you get a new 4K TV and start watching 4K videos
            all the time. Because 4K videos can use more than three times as
            much data as regular HD streaming, you might use up your data faster
            than you think. If you use too much data, Xfinity might charge you
            up to $200 extra each month. But don't worry, Xfinity will send you
            some alerts when you start getting close to your limit, so you don't
            have to stress about your data usage. To avoid extra charges, you
            can upgrade to Xfinity’s unlimited data internet for $30 a month or
            get unlimited data with xFi Complete Play for just $25 a month. Or,
            if you really want the super-fast Gigabit x6 plan (the one with
            6,000 Mbps for $299.95 per month), you won't have to pay extra for
            unlimited data—that's already included. Take a look at our Xfinity
            data cap guide to find out more about Xfinity's data cap rules.{" "}
            <span className="link">
              <Link href={"#"}>1.2 TB internet data cap, </Link>
            </span>
            you’ll have plenty of data for your family’s browsing, Instagram
            scrolling, and Netflix marathoning.
            <br />
            Keep in mind, our day-to-day internet usage grows all the time. Say
            you get a new 4K TV and start streaming 4K videos all the time.
            Since 4K videos can use more than three times as much data as
            typical HD streaming, you might run through your data faster than
            you realize.
            <br />
            If you go overboard with your data usage, Xfinity can charge you up
            to $200 per month each time you do. At least Xfinity will send you
            some warnings once you start reaching your limits, so you don’t have
            to let your data usage keep you up at night.
            <br />
            To avoid data overage charges, you can get Xfinity’s unlimited data
            internet upgrade for $30 per month or unlimited data with xFi
            Complete Play for only $25 per month.
            <br />
            Or, if for some reason you really want the over-bloated Gigabit x6
            plan (the one with 6,000 Mbps for $299.95 per month), you don’t have
            to worry about paying more for unlimited data—that comes included.
            <br />
            Check out our Xfinity data cap guide to learn more about Xfinity’s
            data cap policies.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity Prepaid Internet</h4>
          <p className="after-heading">
            Xfinity Prepaid Internet is Xfinity’s no-contract and flat-rate
            internet package. For $15 per week or $45 per month, you’ll get a 50
            Mbps internet connection and won’t have to deal with a service
            agreement or price increases after your first year. Check out our
            full{" "}
            <span className="link">
              <Link href={"#"}>Xfinity Prepaid Internet </Link>
            </span>{" "}
            review to learn more about the service.
          </p>
        </div>
      </div>

      <div className="section xfinity-internet-speed">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span>internet speeds</span>
          </h2>
          <p className="sect-desc">
            Xfinity offers internet plans with speeds from 75 Mbps to 6,000 Mbps
            in some places, making it one of the fastest providers. However,
            it's important to choose the right speed for your needs rather than
            just the fastest one.
            <br />
            <br />
            For a small household with limited internet use, we recommend a 200
            Mbps plan. But if you're often streaming 4K videos with a larger
            family, consider faster plans. For homes with high internet needs,
            aim for 50 Mbps to 100 Mbps per person to decide on the right speed.
            <br />
            <br />
            Take a look at these three popular Xfinity internet packages below
            to find the speed that suits you best.
          </p>
        </div>
        <PackagePricing />
      </div>

      <div className="section xfinity-internet-equipment">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span>internet equipment</span>
          </h2>
          <p className="sect-desc">
            When you sign up for an Xfinity internet plan, you’ll need some
            <span className="link">
              <Link href={"#"}> internet equipment.</Link>
            </span>{" "}
            Xfinity will offer you an Xfinity gateway—the current model is
            called Xfinity xFi—and a free-of-charge streaming device called
            Xfinity Flex.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity gateway</h4>
          <p className="after-heading">
            Xfinity gateways are like all-in-one devices for your phone,
            internet, and Wi-Fi. Xfinity talks a lot about how great their
            gateways are, but mostly, they're just secure and they work. Renting
            an Xfinity gateway has some cool perks. The current one, called
            Xfinity xFi, has built-in parental controls, tech support, and works
            with apps. It also includes Xfinity’s Advanced Security service,
            which protects your home network from online threats. However, if
            you want to save more money in the long term, consider buying your
            own Xfinity-compatible modem and router. Check out our “Best
            Xfinity-Compatible Modems” article to find the right one for your
            Xfinity plan.
            <br />
            There are a few interesting aspects of renting an Xfinity
            gateway—the current gateway{" "}
            <span className="link">
              <Link href={"#"}> Xfinity xFi</Link>
            </span>{" "}
            has built-in parental controls, tech support, and app compatibility.
            The xFi also comes with Xfinity’s Advanced Security service, which
            protects your home network from security risks and phishing threats.
            <br />
            But you can save a lot more money in the long run by buying your own
            Xfinity-compatible modem and router. Head over to our{" "}
            <span className="link">
              <Link href={"#"}>“Best Xfinity-Compatible Modems”</Link>
            </span>{" "}
            article for help picking out the right one for your Xfinity plan.
          </p>
          <div className="endnote review-endnote">
            <div className="endnote-container">
              <Image
                className="quotation-img"
                src={quotations}
                alt="quotations"
              />
              <h4>How to get Xfinity Wi-Fi plans</h4>
              <p>
                You can get an Xfinity home Wi-Fi plan by following three easy
                steps: Choose an Xfinity internet plan Order Xfinity internet
                online or over the phone Add an xFi Gateway to your internet
                plan
                <span className="link">
                  <Link href={"#"}> Xfinity hidden costs guide</Link>
                </span>{" "}
              </p>
              <ul>
                <li>Choose an Xfinity internet plan</li>
                <li>
                  Order Xfinity internet{" "}
                  <span className="link">
                    <Link href={"#"}>Online</Link>
                  </span>{" "}
                  or over the phone
                </li>
                <li>Add an xFi Gateway to your internet plan</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity xFi (Xfinity Wi-Fi)</h4>
          <p className="after-heading">
            The Xfinity xFi gateway rental is $14 a month. It gives you a safe
            connection, and you can control it using the Xfinity app on your
            phone or computer, available on Google Play or the Apple App Store.
            With the Xfinity app, you can set up your internet gear and manage
            your Wi-Fi network name and password. You can even pause the Wi-Fi
            or set it to kid-friendly mode right from your phone. You can also
            keep an eye on your Wi-Fi use, handy if you suspect your teen's
            sneaking online at night (though sometimes just asking for their
            phone might work better, since xFi can't control mobile networks).
            If your house is big (over 2,000 square feet), you might want to add
            xFi Complete for $25 a month. This covers your whole home with
            Wi-Fi, giving you unlimited data and extra Wi-Fi boosters if needed.{" "}
            <span className="link">
              <Link href={"#"}>Xfinity xFi gateway</Link>
            </span>{" "}
            costs $14 per month to rent. You’ll have a secure connection, and
            you can manage your controls from your computer or phone with the
            Xfinity app (available on{" "}
            <span className="link">
              <Link href={"#"}> Google Play</Link>
            </span>{" "}
            or the{" "}
            <span className="link">
              <Link href={"#"}>Apple App Store</Link>
            </span>
            ).
            <br />
            The Xfinity app will help you with your internet equipment
            installation. You can also use it to control your Wi-Fi network name
            and password. You can even pause the Wi-Fi connection or set
            kid-friendly protections right from your phone.
            <br />
            Also, if your house is bigger than 2,000 square feet, add on xFi
            Complete to blanket your home with that sweet Wi-Fi love. Your total
            xFi costs will be $25 per month, but you’ll get unlimited data and
            any extenders you need to get Wi-Fi throughout a large home.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Comparing Xfinity xFi features</h4>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Personal modem/router</th>
                  <th>Xfinity xFi</th>
                  <th>Xfinity xFi Complete</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Dual-band Wi-Fi</td>
                  <td>Dual-band Wi-Fi</td>
                  <td>Dual-band Wi-Fi</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Connect devices wirelessly and with cables</td>
                  <td>Connect devices wirelessly and with cables</td>
                  <td>Connect devices wirelessly and with cables</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td> </td>
                  <td>Connect devices wirelessly and with cables </td>
                  <td>Connect devices wirelessly and with cables</td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td> </td>
                  <td>Integrated Xfinity Wi-Fi hotspot</td>
                  <td>Integrated Xfinity Wi-Fi hotspot</td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td> </td>
                  <td></td>
                  <td>Whole Home WiFi coverage analysis</td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td> </td>
                  <td></td>
                  <td>Unlimited data</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity Flex</h4>
          <p className="after-heading">
            When you get just internet from Xfinity, they throw in a free
            Xfinity Flex. It's like a Roku for streaming TV on your TV, with
            apps like Peacock and Netflix. It even has a voice remote, which is
            handy. So why is it free? Well, we're not sure. Maybe Xfinity is
            just being nice. Or maybe they want people to test it because it's
            new and might have problems. If you want to know more about this
            freebie (and you really should—nobody wants a broken gift), check
            out our full Xfinity Flex review. 3.5
            <span className="link">
              <Link href={"#"}> Peacock, </Link>
            </span>{" "}
            <span className="link">
              <Link href={"#"}> Netflix, </Link>
            </span>{" "}
            <span className="link">
              <Link href={"#"}>and Amazon Prime</Link>
            </span>{" "}
            Video right on your TV. There’s even a voice remote! It’s all very
            convenient.
            <br />
            So why is the Xfinity Flex free? Er, the jury’s still out on that
            one.
            <br />
            Xfinity could be giving the Xfinity Flex out solely based on the
            kindness of its corporate heart. But the Xfinity Flex is still
            pretty new, and it’s kinda crummy—so maybe Xfinity is tapping into
            its customer base for free beta testing.
            <br />
            If you want to look this gift horse in the mouth some more (and you
            really should—no one wants to be saddled with caring for a
            cavity-ridden horse), join us over at our full Xfinity Flex review.
          </p>
        </div>
      </div>

      <div className="section xfinity-final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Xfinity worth it? </span>
          </h2>
          <p className="sect-desc">
            Xfinity internet has a fair price, and we enjoy getting freebies
            like Xfinity Flex and Peacock Premium. But sometimes, Xfinity makes
            it seem like you're getting a better deal than you actually are.
            Xfinity internet isn't amazing, but it's decent and gets the job
            done without costing too much.{" "}
            <span className="link">
              <Link href={"#"}> really are..</Link>
            </span>
            <br />
            Xfinity isn’t superb or awe-inspiring, but it will get the job done
            at an affordable price.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>Sign up for xfinity</Link>
        </div>
      </div>

      <div className="section xfinity-internet-faq">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span>internet</span> FAQ
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
            Our experts crunched the numbers on Xfinity’s internet plans, rating
            them for bang for your buck, reliability, features, and
            <span className="link">
              <Link href={"#"}> customer satisfaction.</Link>
            </span>{" "}
            Then we matched up Xfinity’s internet plans against the competition
            to give a clearer picture of their strengths and weaknesses. For
            more information on our methodology, check out our
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
            page.
          </p>
          {/* <h4>Bang for your buck <span className="endnote-review"><Image src={star} alt="review" className=""/>(3.5 /5)</span></h4> */}
        </div>
      </div>
      {/* <Newsletter /> */}
    </div>
  );
};

export default XfinityInternetReview;
