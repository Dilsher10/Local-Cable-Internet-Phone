// import React, { useState } from "react";
import "./xfinity-bundles-review.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import { xfinityNavLinks } from "../../assets/data/navLinks/xfinityNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import xfinitylogo from "../../assets/images/xfinitylogo.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import cross from "../../assets/images/cross.png";
import reviewmanthree from "../../assets/images/reviewmanthree.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import discountIcon from "../../assets/images/discount-icon.svg";
import PackageTable from "../../components/package-table/PackageTable";
import quotations from "../../assets/images/quotations.svg";
// import Newsletter from "../../components/newsletter/Newsletter";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Xfinity Packages: TV And Internet Bundles Review"
};

const XfinityBundlesReview = () => {
  // const [faq, setFaq] = useState();

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

    card2Img: reviewmanthree,

    cardsStrip: [
      {
        subtitle: "Service Provider:",
        title: "xfinity",
        icon: cross,
      },
      {
        subtitle: "Price:",
        title: "$35.00–$150.00/mo.",
        icon: cross,
      },
      {
        subtitle: "Channels:",
        title: "10–185+",
        icon: cross,
      },
      {
        subtitle: "Internet speed:",
        title: "75–6,000 Mbps",
        icon: cross,
      },
    ],

    tableData: [
      {
        head: [
          "Top packages",
          "Base price*",
          "Download speeds",
          "Channels",
          "Phone plan",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Fast Internet + Popular TV",
              "$85.00–$90.00/mo.",
              "400 Mbps",
              "125+",
              "N/A",
            ],
            linkPath: "#",
          },

          {
            content: [
              "2.",
              "Superfast Internet + Ultimate TV",
              "$110.00–$120.00/mo.",
              "800 Mbps",
              "185+",
              "N/A",
            ],
            linkPath: "#",
          },
          {
            content: [
              "3.",
              "Gigabit Extra + Ultimate TV + Phone",
              "1200 Mbps",
              "125+",
              "185+",
              "Unlimited local calling",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "*Internet: For 24 months. No term contract. Taxes not included. Includes $10/mo automatic payments and paperless billing discount. Not available in all areas. TV: No term contract. Broadcast TV fee and regional sports fee extra; price subj to change. Taxes and equipment not included. Data effective as of publish date. Offers and availability may vary by location and are subject to change.",
  };

  let packageTableData = [
    {
      head: [
        "Top packages",
        "Base price*",
        "Download speeds",
        "Channels",
        " Phone plan",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Fast Internet + Popular TV",
            "$85.00/mo.",
            "400 Mbps",
            "125+",
            "N/A",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Superfast Internet + Ultimate TV",
            "$110.00–$120.00/mo.",
            "800 Mbps",
            "185+",
            "N/A",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Gigabit Extra + Ultimate TV + Phone",
            "1200 Mbps",
            "125+",
            "185+",
            "Unlimited local calling",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataTwo = [
    {
      head: [
        "Plan",
        "Internet price",
        "Download speeds",
        "TV price",
        " Channels",
        " Price increase after 12 mo.",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Xfinity",
            "$19.99–$80.00/mo.",
            "75–6,000 Mbps",
            "$20.00–$80.00/mo.",
            "10–185+",
            "Some plans",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Spectrum",
            "$19.99–$80.00/mo.",
            "Up to 300–1,000 Mbps",
            "$59.99/mo.",
            "150+",
            "Yes",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Cox",
            "$49.99–$149.99/mo.",
            "100–2,000 Mbps",
            "$56.00–$139.00/mo.",
            "75–250+ ",
            "Yes",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Optimum",
            "$40.00–$180.00/mo.",
            "300–5,000 Mbps",
            "$35.00–$115.00/mo.",
            "50–420+",
            "Yes",
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
    <div className="xfinity-bundles-review">
      {/* <SubNav links={xfinityNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity Packages: TV And Internet Bundles Review
          </h2>
          <p className="sect-desc">
            With an Xfinity bundle, you could save $20 to $60 every month.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-xfinity-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Are Xfinity bundles good?</h4>
          <p>
            Xfinity bundles and TV packages are good by themselves, but if you
            get them together, you can save $20 every month. It's a nice deal,
            but we wish Xfinity gave more extras like unlimited data or free
            equipment. They make it a bit tricky to get extra savings. However,
            you do get access to their big Wi-Fi network and a free Peacock
            Premium account.
            <br />
            Those savings are enticing, but we wish that Xfinity offered a bit
            more sparkle—other cable companies include unlimited data or free
            equipment when you bundle, but Xfinity makes you jump through hoops
            to get additional savings. At least you’ll have access to Xfinity’s
            huge Wi-Fi hotspot network and a free Peacock Premium account.
          </p>
          <br />
          <h4>Xfinity bundles pros and cons</h4>
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
                  <td>Monthly savings</td>
                  <td>Data caps</td>
                </tr>
                <tr>
                  <td>Xfinity Wi-Fi hotspots</td>
                  <td>Expensive equipment</td>
                </tr>
                <tr>
                  <td>Free Peacock Premium with X1 DVR</td>
                  <td>Some plans with contracts</td>
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
          <Link href={"#"}>Plans & prices</Link>
          <Link href={"#"}>competition</Link>
          <Link href={"#"}>specs and features</Link>
        </div>
      </div>

      <div className="section xfinity-package-deals">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity package <span> deals and promotions</span>
          </h2>
          <p className="sect-desc">
            You can save a bunch every month with an Xfinity bundle deal. If you
            pick two Xfinity services, you'll get $20 off each month, and if you
            choose three, you'll save $40 each month. Add Xfinity home security
            for a total of $60 off monthly. Also, if you get X1 DVR for TV,
            you'll get Peacock Premium free. Plus, if you add xFi Gateway to
            your internet plan, you can get unlimited data free for two years.
            If you need cheap phone service, you can also bundle Xfinity Mobile
            for more savings{" "}
            <span className="link">
              <Link href={"#"}>Peacock Premium,</Link>
            </span>{" "}
            When you sign up on the Xfinity website, check if your bundle deal
            comes with extras like a gift card. While we can't promise a $200
            Visa Prepaid Card, Xfinity sometimes offers deals like that.{" "}
            <span className="link">
              <Link href={"#"}>Xfinity Mobile</Link>
            </span>{" "}
            <br />
            <br />
            For more on the best Xfinity deals, check out our Xfinity deals
            guide.
            <br />
            <br />
            Check out our{" "}
            <span className="link">
              <Link href={"#"}>Xfinity deals guide</Link>
            </span>{" "}
            to learn more about the best Xfinity deals.
          </p>
        </div>
        <div className="endnote limited-time-offer">
          <div className="endnote-container">
            <Image src={discountIcon} alt="discount" />
            <h4>Xfinity bundle deals</h4>
            <br />
            <ul>
              <li>· $20–$60/mo. off when you bundle Xfinity services</li>
              <li>· Peacock Premium free with X1 DVR</li>
              <li>· Gift card occasionally offered with qualifying plans</li>
            </ul>
            <hr />
            <div className="btn">
              <Link href={"#"}>get these deals</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section xfinity-internet-bundles">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity TV and internet bundles <span> in your area</span>
          </h2>
          <p className="sect-desc">
            Discover Xfinity internet and Tv packages and plans available in
            your area. Choose the best option for your needs today!
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity TV, internet, and home phone bundles (West)</h4>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            *Internet: For 24 months. No term contract. Taxes not included.
            Includes $10/mo automatic payments and paperless billing discount.
            Not available in all areas. TV: No term contract. Broadcast TV fee
            and regional sports fee extra; price subj to change. Taxes and
            equipment not included. Data effective as of publish date. Offers
            and availability may vary by location and are subject to change.
          </p>
        </div>
        <div className="faq-wrapper">
          {/* <div className="accordion">
<div className="item">
<h3 className="title" onClick={() => accordionHandler(1)}>
                <span>{faq === 1 ? "-" : "+"}</span> Xfinity TV, internet and
                home phone bundles (Central)
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
            title={"Xfinity TV, internet and home phone bundles (Central)"}
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
                <span>{faq === 2 ? "-" : "+"}</span> Xfinity TV, internet and
                home phone bundles (northeast)
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
            title={"Xfinity TV, internet and home phone bundles (northeast)"}
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
                <br />
                <br />
                <p>
                Xfinity offers bundles with two services that give you good value and performance if you want more than one Xfinity service. If you want three services, like adding phone service, you can do that for $10 extra each month. While landline phones aren't as popular nowadays, it's still a good deal if you make lots of international calls or don't have a cell phone.
                  <br />
                  Our favorite Xfinity bundle includes 125 channels and internet speed of 400 Mbps. It's perfect for a small family's internet needs and offers a great selection of channels. To learn more about Xfinity's bundled services, check out our reviews of their internet and cable TV packages.
                </p>
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
            <br />
            <br />
            <p>
              Xfinity offers bundles with two services that give you good value
              and performance if you want more than one Xfinity service. If you
              want three services, like adding phone service, you can do that
              for $10 extra each month. While landline phones aren't as popular
              nowadays, it's still a good deal if you make lots of international
              calls or don't have a cell phone.
              <br />
              Our favorite Xfinity bundle includes 125 channels and internet
              speed of 400 Mbps. It's perfect for a small family's internet
              needs and offers a great selection of channels. To learn more
              about Xfinity's bundled services, check out our reviews of their
              internet and cable TV packages.
            </p>
          </Accordion>
        </div>
        <div className="endnote is-xfinity-good">
          <div className="endnote-container">
            <Image src={quotationsIcon} alt="quotations" />
            <h4>How to choose an Xfinity bundle package</h4>
            <h5>1. How to choose an Xfinity bundle package</h5>
            <p>
              If you're using Xfinity internet for yourself or a small family
              who mainly uses the internet for Facebook or emails, a 75 Mbps to
              200 Mbps plan should be enough. But if you have a big family who
              uses the internet a lot, go for a plan with at least 300 Mbps
              download speed. Visit our internet speed guide to find out more
              about home internet speeds.
            </p>
            <h5>2. What channels are must-haves?</h5>
            <p>
              Xfinity's TV plans include many regular and special cable
              channels. Check Xfinity's channel lists to ensure you get the ones
              you really want. Xfinity also gives you devices like X1 and Flex,
              which have apps for popular streaming services.
            </p>
            <h5>3. Get the best Xfinity bundle price</h5>
            <p>
              Xfinity's bundles might cost a lot, so make sure you're not
              sacrificing what your household needs just to save money. For
              instance, some TV and internet bundles from Xfinity only come with
              a basic package of 10 local channels like ABC and FOX. You can
              usually get these channels for free with an antenna. Also,
              remember that Xfinity adds extra fees for local broadcast to its
              cable plans.
            </p>
            <h5>4. Keep it (for longer)</h5>
            <p>
              Some bundles give you a fixed price for two years, while
              standalone packages might only lock in your price for one year.
              Even though we don't love Xfinity's contracts, the longer price
              guarantees can be good if you're sticking with Xfinity for a
              while.
            </p>
            <br />
          </div>
        </div>
      </div>

      <div className="section xfinity-competition">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity bundles <span> vs. the competition</span>
          </h2>
          <p className="sect-desc">
            Xfinity’s bundles are similar to those offered by other cable
            providers. With Xfinity, basic plans have a fixed price for one
            year, but in some places, you can keep the bundle price the same for
            two years. Spectrum may seem cheaper at first, but that's because of
            how they price their plans. They offer just one TV plan but let you
            add more channels if you want. Once you add these extra channels,
            Spectrum's prices are similar to Xfinity's. (And let's not talk
            about how expensive Cox's bundles are!)
            <span className="link">
              <Link href={"#"}>Spectrum’s bundle prices </Link>
            </span>
            Providers like Optimum and Verizon Fios offer faster internet
            through fiber optic cables and more channels than Xfinity. Fiber
            internet is more reliable and has faster upload speeds than cable
            internet. However, with these providers, you might pay a bit more
            each month for these better features.
            <br />
            <br />
            Providers like{" "}
            <span className="link">
              <Link href={"#"}>Optimum </Link>
            </span>{" "}
            and{" "}
            <span className="link">
              <Link href={"#"}>Verizon Fios </Link>
            </span>{" "}
            have faster fiber internet plans and larger channel counts compared
            to Xfinity. Fiber internet is more reliable than cable internet and
            comes with much faster upload speeds. But with both providers,
            you’ll pay slightly more per month for these premium features.
          </p>
        </div>
        <PackageTable item={packageTableDataTwo} />
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
            <h4>Xfinity Stream app</h4>
            <p>
              If you have Xfinity TV and internet, make sure to get the Xfinity
              Stream app. It allows you to watch your DVR recordings and about
              200 channels when you're away. Read our review for all the details
              you want.{" "}
              <span className="link">
                <Link href={"#"}>Xfinity Stream app.</Link>
              </span>{" "}
              It lets you watch all your DVR recordings and around 200 channels
              while you’re on the go. Check out our{" "}
              <span className="link">
                <Link href={"#"}>Xfinity Stream app review</Link>
              </span>{" "}
              for all the deets you crave.
            </p>
          </div>
        </div>
      </div>

      <div className="section xfinity-bundle-specs-feature">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity bundles<span> specs and features</span>
          </h2>
          <p className="sect-desc">
            There are many options for creating your ideal Xfinity bundle, from
            home security to cell phones. Let's explore some of the top features
            of Xfinity's bundles, including home phone, TV, and internet.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity cell phone plans and bundles</h4>
          <p className="after-heading">
            If you enjoy getting everything together, why not add Xfinity cell
            phone service to your bundle of Xfinity TV, internet, and home
            phone? Xfinity Mobile is for Xfinity internet customers and offers
            some average cell phone plans. You can also get great bundle deals
            by adding Xfinity Mobile to your Xfinity internet plan and Xfinity
            Flex. Check our Xfinity Mobile review for more details.{" "}
            <span className="link">
              <Link href={"#"}> Xfinity Mobile</Link>
            </span>{" "}
            review to learn more about the service.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity home security bundles</h4>
          <p className="after-heading">
            Xfinity is one of the few companies that offer both TV, internet,
            and home security services. However, we don't think their home
            security is worth the money. Yes, you get a discount if you bundle
            services, which is nice. Plus, if you have an X1 DVR, you can see
            your security camera footage on your TV, which is cool.{" "}
            <span className="link">
              <Link href={"#"}>X1 DVR</Link>
            </span>
            Our concern is that Xfinity's home security relies on professional
            monitoring. We're not worried about someone spying on you, but we
            are concerned about relying on Xfinity's sometimes unreliable
            customer service for your safety. It's hard to talk to a real person
            at Xfinity because they don't even have a phone line. This might be
            a small annoyance when your TV goes out, but it could be a big
            problem if you can't reach them in an emergency.
            <br />
            Unless you're really strapped for cash and can't afford other home
            security options, we think you should avoid Xfinity's home security
            bundles. You deserve better.
            <br />
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity equipment options</h4>
          <p className="after-heading">
            Your Xfinity bundle might include various pieces of equipment, but
            often you have to pay for them. Take a look at our Xfinity equipment
            guide to see all the options and costs.{" "}
            <span className="link">
              <Link href={"#"}>Xfinity equipment guide</Link>
            </span>{" "}
            for a full breakdown of Xfinity’s hardware options.
          </p>
        </div>
      </div>

      <div className="section xfinity-final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Are Xfinity bundles worth it?</span>
          </h2>
          <p className="sect-desc">
            If you want both internet and TV, it's usually cheaper to get them
            from one company, and that's the case with Xfinity bundles. However,
            we wish Xfinity gave better extras with its bundles. While the money
            you save each month is good, it would be nice to get free equipment
            or subscriptions included. Overall, Xfinity bundles are average,
            which pretty much sums up everything about Xfinity.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>Sign up for xfinity</Link>
        </div>
      </div>

      <div className="section xfinity-tv-bundle-faq">
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
            To find out how Xfinity’s bundles stacked up to the competition, we
            rated each bundle in areas including value, channel count, and
            potential savings. We also used our annual internet customer
            satisfaction and TV customer satisfaction surveys to see how real
            Xfinity customers felt about the provider. To learn more about our
            research and testing, check out our How We Rank page.{" "}
            <span className="link">
              <Link href={"#"}> internet customer satisfaction</Link>
            </span>{" "}
            and{" "}
            <span className="link">
              <Link href={"#"}> TV customer satisfaction</Link>
            </span>{" "}
            surveys to see how real Xfinity customers felt about the provider.
            <br />
            To learn more about our research and testing, check out our{" "}
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
            page.
          </p>
        </div>
      </div>
      {/* <Newsletter /> */}
    </div>
  );
};

export default XfinityBundlesReview;
