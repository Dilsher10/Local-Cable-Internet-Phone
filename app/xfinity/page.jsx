// import React, { useState } from "react";
import StickyHeader from "../components/sticky-header/StickyHeader";
import "./xfinity-review.scss";
import InnerPagesHeroTwo from "../components/inner-pages-hero-two/InnerPagesHeroTwo";
import Link from "next/link";
import Image from "next/image";
import quotationsIcon from "../assets/images/quotations.svg";
import CTA from "../components/cta-section/CTA";
import PackageTable from "../components/package-table/PackageTable";
import quotations from "../assets/images/quotations.svg";
import xfinitylogo from "../assets/images/xfinitylogo.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import star from "../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import reviewman from "../assets/images/reviewman.png";
import cross from "../assets/images/cross.png";
import Accordion from "../components/accordion/Accordion";

export const metadata = {
  title: "Xfinity Review 2024: Internet, TV, and Other Stuff"
};

const XfinityReview = () => {
  // const [faq, setFaq] = useState();

  let packageTableData = [
    {
      head: [
        "Package",
        "Price",
        "download speeds",
        "upload speeds up to",
        "Details",
      ],

      body: [
        {
          content: ["1.", "Connect", "$19.99–$30.00/mo.", "75 Mbps", "5 Mbps"],
          linkPath: "#",
        },

        {
          content: [
            "2.",
            "Connect More",
            "$25.00-$35.00/mo.",
            "200 Mbps",
            "5 Mbps",
          ],
          linkPath: "#",
        },

        {
          content: ["3.", "Fast", "$35.00–$55.00/mo.", "400 Mbps", "5 Mbps"],
          linkPath: "#",
        },

        {
          content: [
            "4.",
            "Superfast",
            "$60.00–$65.00/mo.",
            "800 Mbps",
            "10 Mbps",
          ],
          linkPath: "#",
        },

        {
          content: [
            "5.",
            "Gigabit",
            "$60.00–$70.00/mo.",
            "1000 Mbps",
            "15 Mbps",
          ],
          linkPath: "#",
        },

        {
          content: [
            "6.",
            "Gigabit Extra",
            "$70.00–$80.00/mo.",
            "1200 Mbps",
            "35 Mbps",
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
        subtitle: "Service provider:",
        title: "Xfinity",
        icon: cross,
      },
      {
        subtitle: "Internet speed:",
        title: "75–6,000 Mbps",
        icon: cross,
      },
      {
        subtitle: "Price:",
        title: "$24.99–$299.95/mo.",
        icon: cross,
      },
      {
        subtitle: "Channels:",
        title: "10–185+ Channels",
        icon: cross,
      },
    ],

    tableData: [
      {
        head: [
          "Top packages",
          "Price*",
          "Download speeds",
          "Channels",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Superfast Internet + Ultimate TV",
              "$110.00–$135.00/mo.",
              "800 Mbps",
              "185+",
            ],
            linkPath: "#",
          },

          {
            content: ["2.", "Gigabit Extra", "$80.00/mo.", "1,200 Mbps", "N/A"],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "*For the first 24 months with No Term Agreement. Includes $10/mo automatic payments and paperless billing discount. See full disclaimer. Data effective as of publish date. Offers and availability may vary by location and are subject to change.",
  };

  return (
    <div className="xfinity-review">
      {/* <SubNav links={xfinityNavLinks} /> */}

      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity Review 2024: Internet, TV, and Other Stuff
          </h2>
          <p className="sect-desc">
            Our experts have spent a lot of time trying out Xfinity and finding
            the top plans and deals.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-xfinity-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is Xfinity great?</h4>
          <p>
            Xfinity has some good plans. Their cable TV and internet are usually
            dependable, and they give you extra stuff for free, like Wi-Fi
            hotspots and the{" "}
            <span className="link">
              <Link href="#">Xfinity Stream app</Link>{" "}
            </span>{" "}
            (Xfinity Stream app, which lets you watch live TV on your phone or
            tablet. Plus, setting everything up is simple because you can often
            do it yourself. But there are some things to keep in mind—Xfinity’s
            network is huge, so what they offer can be different depending on
            where you are.{" "}
            <span className="link">
              <Link href="#">hidden fees</Link>{" "}
            </span>{" "}
            Also, we don’t like that they charge extra fees for their equipment,
            and some of their internet plans have limits on how much data you
            can use.
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
                  <td>Reliable service</td>
                  <td>Prices that vary by area</td>
                </tr>
                <tr>
                  <td>Freebies included</td>
                  <td>Overpriced equipment</td>
                </tr>
                <tr>
                  <td>Easy self-installation</td>
                  <td>Data caps on most internet plans</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="section important-links">
        <div className="head">
          <h2 className="sect-heading">
            Find the <span>key links</span>
          </h2>
          <p className="sect-desc">
            Here are the links where you can find details about Xfinity. Jump to
            important Xfinity links to get more information.
          </p>
        </div>

        <div className="all-links">
          <Link href="#">Xfinity internet plans and prices</Link>
          <Link href="#">Xfinity TV plans and prices</Link>
          <Link href="#">Xfinity TV and internet bundles</Link>
          <Link href="#">Features</Link>
          <Link href="#">Features</Link>
        </div>
      </div>

      <div className="section xfinity-region">
        <div className="head">
          <h2 className="sect-heading">
            What <span> Xfinity area do</span> I live in?
          </h2>
          <p className="sect-desc">
            When viewing Xfinity’s plans, remember that the company divides its
            business into three geographic regions: West, Central, and
            Northeast. Its plan names, specs, and prices differ between these
            regions to keep up with different markets. Throughout this review,
            you’ll see tables showing Xfinity’s plans in the West region. If
            you’re in the Central or Northeast regions, you’ll be able to click
            on the corresponding boxes to expand a chart of plans in your
            region.
            <br />
            <br />
            Wondering which Xfinity region you’re in? Look for your state in the
            chart below.
          </p>
        </div>
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

      <CTA
        heading={"Interested in Xfinity service?"}
        desc={
          "Enter your zip code below to see if your neighborhood gets Xfinity service."
        }
      />

      <div className="section xfinity-internet">
        <div className="head">
          <h2 className="sect-heading">
            <span>Xfinity internet </span> options and costs
          </h2>
          <p className="sect-desc">
            Discover a variety of Xfinity internet plans tailored to suit your
            needs, all at affordable prices. Stay connected with reliable speeds
            and seamless browsing experiences.
          </p>
        </div>
        <div className="package-table-container west-region">
          <h4>West region</h4>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            **For the first 12 months with a 1-year agreement. Data effective as
            of publish date. Offers and availability may vary by location and
            are subject to change.
          </p>
          <h4 className="before-heading">
            Xfinity internet in the West region
          </h4>
          <p className="after-heading">
            Xfinity’s Western residential customers should rejoice at the
            affordable 200 Mbps Connect More plan. Your family can stream TV on
            your Roku without worrying about constant buffering.
            <br />
            But if you have a larger family or a lot of smart-home devices,
            consider starting your plan search with Xfinity’s Fast, Superfast,
            or Gigabit (formerly Ultrafast) plans. All three plans have
            excellent download speeds between 400 Mbps and 1,000 Mbps, providing
            ample amounts of internet bandwidth for your household.
          </p>
          <div className="faq-wrapper">
            {/*  <div className="accordion">
              <div className="item">
                <h3 className="title" onClick={() => accordionHandler(1)}>
                  <span>{faq === 1 ? "-" : "+"}</span> Which Xfinity region i’m
                  in?
                </h3>

                <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                  <PackageTable item={packageTableData} />
                </div>
              </div>
            </div> */}

            <Accordion
              id={"1"}
              title={"Which Xfinity region i’m in?"}
              cssClass={"faq-content"}
            >
              <PackageTable item={packageTableData} />
            </Accordion>

            {/* <div className="accordion">
              <div className="item">
                <h3 className="title" onClick={() => accordionHandler(2)}>
                  <span>{faq === 2 ? "-" : "+"}</span>Northeast region
                </h3>

                <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                  <PackageTable item={packageTableData} />
                </div>
              </div>
            </div> */}

            <Accordion
              id={"2"}
              title={"Northeast region"}
              cssClass={"faq-content"}
            >
              <PackageTable item={packageTableData} />
            </Accordion>
          </div>

          <h4 className="before-heading">
            Xfinity internet in the Central region
          </h4>
          <p className="after-heading">
            The Central region’s 200 Mbps plan recently went down in price to
            better match West Coast prices, and provides a decent speed for one
            or two devices marathoning your favorite{" "}
            <span>Netflix original series.</span>
            <br />
            If you’re really looking to support multiple streaming devices or
            some gaming, you might want to upgrade to Xfinity’s Fast, Superfast,
            or Gigabit plans. Their speeds, between 400 Mbps and 1,000 Mbps, are
            right in the sweet spot for a household with multiple smart-home
            devices.
          </p>
          <h4 className="before-heading">
            Xfinity internet in the Northeast region
          </h4>
          <p className="after-heading">
            Xfinity’s Northeast plans are much better than they were last year.
            Xfinity has recently condensed its plans to better match those of
            other regions, so you’ll no longer find yourself paying $65/mo. for
            embarrassingly slow speeds.
            <br />
            The best deal you’ll get right now is the super affordable 400 Mbps
            plan for just $30/mo. You’ll also get that price locked in for the
            first 24 months. The other plans aren’t too bad either if you need
            more juice. <br />
            Just keep an eye on Xfinity’s contract requirements,
            Northeasterners—as the Rumplestiltskin of the telecom world, Xfinity
            loves to hide things in the fine print.
          </p>
        </div>
      </div>

      <div className="section xfinity-tv">
        <div className="head">
          <h2 className="sect-heading">
            <span>Xfinity TV </span> options and costs
          </h2>
          <p className="sect-desc">
            Explore Xfinity TV plans for a variety of channels and features at
            different prices. Find the right fit for your entertainment needs.
          </p>
        </div>
        <div className="package-table-container west-region">
          <h4>West region</h4>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            *No term contract. Broadcast TV fee and regional sports fee extra;
            price subj to change. Taxes and equipment not included. Data
            effective as of publish date. Offers and availability may vary by
            location and are subject to change.
          </p>
          <h4 className="before-heading">Xfinity TV in the West region</h4>
          <p className="after-heading">
            Xfinity’s TV prices in the West region seem low, but there’s a
            catch—each plan requires a one-year contract. It might be worth it
            to commit to a year of the Popular TV and Ultimate TV packages, but
            we don’t recommend you buy Choice TV. It’s just a basic cable
            package—you’d be better off getting an{" "}
            <span>over-the-air antenna.</span>
            <br />
            Popular TV provides cable staples like ESPN and Food Network, but
            you’ll want to upgrade to Ultimate TV if you’re looking for more
            niche channels like NBA TV and NFL Network.
          </p>
          <div className="faq-wrapper">
            {/* <div className="accordion">
              <div className="item">
                <h3 className="title" onClick={() => accordionHandler(1)}>
                  <span>{faq === 1 ? "-" : "+"}</span> Central region
                </h3>

                <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                  <PackageTable item={packageTableData} />
                </div>
              </div>
            </div> */}

            <Accordion
              id={"3"}
              title={"Central region"}
              cssClass={"faq-content"}
            >
              <PackageTable item={packageTableData} />
            </Accordion>

            {/* <div className="accordion">
              <div className="item">
                <h3 className="title" onClick={() => accordionHandler(2)}>
                  <span>{faq === 2 ? "-" : "+"}</span>Northeast region
                </h3>

                <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                  <PackageTable item={packageTableData} />
                </div>
              </div>
            </div> */}

            <Accordion
              id={"4"}
              title={"Northeast region"}
              cssClass={"faq-content"}
            >
              <PackageTable item={packageTableData} />
            </Accordion>
          </div>
          <h4 className="before-heading">Xfinity TV in the Central region</h4>
          <p className="after-heading">
            The Central region’s plans look similar to those of the West region,
            but they’re more expensive at the Popular and Ultimate levels
            (again, <span>we don’t recommend basic cable plans</span> like
            Choice TV). The tradeoff is that the Central region doesn’t require
            a term contract. You’re paying for the freedom to leave at any time.
          </p>
          <h4 className="before-heading">Xfinity TV in the Northeast region</h4>
          <p className="after-heading">
            Xfinity’s Northeast region recently switched from five plans to
            three, in order to match the rest of the country. If you’re missing
            the old plans, don’t worry; Popular TV is very similar to the old
            Extra plan, providing 125+ standard cable channels, and Ultimate TV
            is a lot like the old Digital Preferred plan with 185+ channels.
            <br />
            The Popular TV package is fine for customers who want to save a bit
            of money, but Ultimate TV is a better choice for families who want a
            lot of options, including Cartoon Network and Disney XD. <br />
            There is no longer a top-tier package like the old Digital Premier,
            but you can essentially recreate it by signing up for Ultimate TV
            and manually adding premium channels like HBO to your bill.
            <br />
            Also, both of the previous basic cable packages (Limited Basic and
            Choice Limited TV) are replaced by the plan simply called Choice TV,
            but we wouldn’t recommend it. If you just want to watch local
            channels, try an <span>OTA antenna.</span>
          </p>
        </div>
      </div>

      <div className="divider-two">
        <h4>
          To learn about more of Xfinity TV’s top-notch features, read our full
          Xfinity TV review.
        </h4>
        <p>
          All of Xfinity’s cable TV plans include the Xfinity Stream app, which
          lets you watch TV from your mobile device and TV. We’re all for
          melding with your couch, but mobile viewing comes in handy if the
          world drags you kicking and screaming from your house.
        </p>
      </div>

      <div className="section bundle-packages">
        <div className="head">
          <h2 className="sect-heading">
            <span>Xfinity TV and internet </span> bundle packages
          </h2>
          <p className="sect-desc">
            Get the best of both worlds with Xfinity's TV and internet bundles.
            Enjoy seamless entertainment and connectivity at unbeatable prices!
          </p>
        </div>
        <div className="package-table-container west-region">
          <h4>West region</h4>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            *Internet: For 12 months with 1-year term contract. Taxes and
            equipment not included. Includes $10/mo automatic payments and
            paperless billing discount. TV: No term contract. Broadcast TV fee
            extra; price subj to change. Taxes and equipment not included. Data
            effective as of publish date. Offers and availability may vary by
            location and are subject to change.
          </p>
          <h4 className="before-heading">Xfinity bundles in the West region</h4>
          <p className="after-heading">
            Xfinity’s bundles can have a lot of confusing names and details, so
            we’ll break it down for you. In the West region, Xfinity offers four
            internet and TV bundles, also known as Double Plays. There are four
            levels, one for each internet speed. Your savings with each may
            vary.
            <br />
            Most households will probably want the Popular Double Play (AKA Fast
            Internet + Popular TV): with 400 Mbps and 125+ channels, it’s
            perfect for a streaming-heavy family with multiple devices. But if
            you need more internet horsepower and can’t live without those extra
            channels (we get it!), the Ultimate Double Play (AKA Superfast
            Internet + Ultimate TV) might be for you.
            <br />
            You can also turn any Double Play into a Triple Play by adding a
            phone plan for just $10 per month.
            <br />
            It may seem that some bundles actually cost more than their
            component parts put together, defeating the point of a bundle, but
            Xfinity will sometimes apply mystery <span>discounts</span> and{" "}
            <span>charges</span> once the plans are in your cart. You may have
            to do some fiddling in the checkout process. All internet service
            providers (ISPs) are at least a little confusing, but Xfinity’s
            methods are particularly opaque.
          </p>
          <div className="faq-wrapper">
            {/* <div className="accordion">
              <div className="item">
                <h3 className="title" onClick={() => accordionHandler(1)}>
                  <span>{faq === 1 ? "-" : "+"}</span> Central region
                </h3>

                <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                  <PackageTable item={packageTableData} />
                </div>
              </div>
            </div> */}

            <Accordion
              id={"5"}
              title={"Central region"}
              cssClass={"faq-content"}
            >
              <PackageTable item={packageTableData} />
            </Accordion>

            {/* <div className="accordion">
              <div className="item">
                <h3 className="title" onClick={() => accordionHandler(2)}>
                  <span>{faq === 2 ? "-" : "+"}</span>Northeast region
                </h3>

                <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                  <PackageTable item={packageTableData} />
                </div>
              </div>
            </div> */}

            <Accordion
              id={"6"}
              title={"Northeast region"}
              cssClass={"faq-content"}
            >
              <PackageTable item={packageTableData} />
            </Accordion>
          </div>
          <h4 className="before-heading">
            Xfinity bundles in the Central region
          </h4>
          <p className="after-heading">
            Like in the other regions, the bundle naming conventions in the
            Central region allow you to see exactly which internet and TV
            packages make up each bundle. But also like the West region, the
            official prices aren’t always the ones you’ll see once you put the
            plans in your cart.
            <br />
            The Central region’s Super Fast Internet + Popular TV package
            provides a standard channel count of 125+, as well as 800 Mbps
            internet speeds, which is more than enough to support all the
            streaming you’ll need to do to make up for those missing channels.
            <br />
            In the Central region, you can turn any Double Play into a Triple
            Play for $10 a month, although you’ll also be subject to a 1-year
            term contract either way. Bummer.
          </p>
          <h4 className="before-heading">
            Xfinity bundles in the Northeast region
          </h4>
          <p className="after-heading">
            Xfinity recently expanded its Northeast bundles offerings to three
            packages that better resemble those in other regions. The old
            Standard+ More bundle is now called Fast Internet + Popular TV (to
            which you can choose to add a phone plan) which is exactly what it
            says on the tin.
            <br />
            The old Signature+ plan got a little bit of a speed boost and is now
            the Gigabit Extra + Ultimate TV bundle. <br />
            And if you want something in the middle, Superfast Internet +
            Ultimate TV will get you all the cable channels you want without
            having to pay extra for gigabit streaming speeds.
          </p>
        </div>
      </div>

      <div className="divider">
        <p>
          To learn more about ways to combine packages with Xfinity, head over
          to our Xfinity bundles review.
        </p>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final thought: <span>Is Xfinity a good choice?:</span>
          </h2>
          <p className="sect-desc">
            Xfinity TV and internet packages might be a good deal, depending on
            where you live and how much you can spend. They offer fast internet
            and decent TV channels, so you'll probably enjoy it. Plus, if you
            use their cool extras like the X1, Xfinity Wi-Fi spots, and the
            Xfinity Stream app, you can make the most of your TV and internet.
          </p>
        </div>

        <div className="all-links">
          <Link href="#">Sign up for xfinity</Link>
        </div>
      </div>

      <div className="section xfinity-review-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span></span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Is Xfinity TV and internet
                in my area?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Xfinity is available in most US states, but you'll have to
                  check if it services your neighborhood. Enter your{" "}
                  <span className="link">
                    <Link href="#">zip code above</Link>
                  </span>{" "}
                  to check Xfinity availability in your area.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"7"}
            title={"Is Xfinity TV and internet in my area?"}
            cssClass={"faq-content"}
          >
            <p>
              Xfinity is in lots of states across the US, but you need to see if
              it's in your neighborhood. Type your zip code up there to check if
              Xfinity is available near you.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What is the cheapest
                Xfinity plan?
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
            id={"8"}
            title={"What is the cheapest Xfinity plan?"}
            cssClass={"faq-content"}
          >
            <p>
              The least expensive Xfinity internet plan costs $19.99 in the
              West, $30.00 in the Central area, and $25.00 per month in the
              Northeast. But, the prices and names of plans are different in
              each region.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Is the Xfinity Flex really
                free?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Sorry, after April 2023, the{" "}
                  <span className="link">
                    <Link href="#">Xfinity Flex </Link>
                  </span>{" "}
                  won't be free anymore. If you don't mind paying whatever its
                  new price will be, you can request it when you sign up for
                  your Xfinity internet plan (although your customer service rep
                  will probably railroad you into getting it before you get a
                  word in edgewise).
                  <br />
                  However, if you get an{" "}
                  <span className="link">
                    <Link href="#">Xfinity TV plan</Link>
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
            id={"9"}
            title={" Is the Xfinity Flex really free?"}
            cssClass={"faq-content"}
          >
            <p>
              Sorry, starting from April 2023, the Xfinity Flex won't be free
              anymore. If you're okay with paying for it at its new price, you
              can ask for it when you sign up for your Xfinity internet plan.
              But, the customer service might push you to get it without asking
              you first. If you choose an Xfinity TV plan, you can't have the
              Xfinity Flex. That's okay because you'll get the X1 DVR instead.
              But, the X1 also costs $14.95 per month.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Is Comcast or Xfinity
                better?
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
                    <Link href="#">Peacock Premium</Link>
                  </span>{" "}
                  streaming service for free with your Xfinity cable TV service.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"10"}
            title={"Is Comcast or Xfinity better?"}
            cssClass={"faq-content"}
          >
            <p>
              Comcast and Xfinity are like twins, so no tricky questions can
              fool us! Back in 2010, Comcast decided to call its TV, internet,
              and phone services Xfinity. Since Xfinity is part of Comcast, it's
              buddies with other Comcast stuff, like NBCUniversal. That's why
              you get Peacock Premium streaming service for free with your
              Xfinity cable TV.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>What is the best Xfinity
                deal?
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
                    <Link href="#">Xfinity bundles review</Link>
                  </span>
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"11"}
            title={"What is the best Xfinity deal?"}
            cssClass={"faq-content"}
          >
            <p>
              The top Xfinity offer is the Superfast Internet + Ultimate TV
              package. It gives you 800 Mbps for downloading stuff and over 185
              cable channels. But how much you save can change depending on
              where you live. It might cost you between $115 and $120 each
              month. To learn more about Xfinity's deals that save you money,
              check out our review of Xfinity bundles.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>How reliable is Xfinity?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  According to our{" "}
                  <span className="link">
                    <Link href="#">customer satisfaction survey,</Link>
                  </span>{" "}
                  62% of Xfinity customers are satisfied with their internet
                  service. In addition, 69% of Xfinity customers are satisfied
                  with their internet speed, tying it for first place with
                  Verizon. Cable service will always be dependent on how heavy
                  usage is in your network, so for more reliable speeds, we
                  recommend{" "}
                  <span className="link">
                    <Link href="#">fiber internet</Link>
                  </span>
                  if you have the option.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"12"}
            title={"How reliable is Xfinity?"}
            cssClass={"faq-content"}
          >
            <p>
              Our survey found that 62% of Xfinity customers like their
              internet. Also, 69% are happy with how fast it is, which is the
              same as Verizon. Cable internet speed can vary depending on how
              many people are using it in your area. If you can, fiber internet
              might be more reliable.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote review-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Methodology:</h4>
          <p>
            We looked at Xfinity plans for things like price, how well they
            work, and how many channels they offer. We compared them to other
            companies to see how good they are. We also asked real Xfinity
            customers what they thought in our yearly surveys about internet and
            TV satisfaction. If you want to know more about how we do our
            research and testing, visit our How We Rank page.
            <br />
            To learn more about our research and testing, check out our How We
            Rank page.
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              <span className="link">
                <Link href="#">Xfinity Deals and Promotions</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href="#"> Xfinity Voice Review</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href="#">Xfinity Channel Lineup</Link>
              </span>
            </li>
          </ul>
          <h4>Disclaimers:</h4>
          <p>
            Get internet for 2 years in the West Region. No long contracts. You
            save $10 every month with automatic payments and paperless billing.
            Taxes are extra. New Xfinity Customers get unlimited data and WiFi
            gear for 2 years. This offer might not be in all places. The TV deal
            doesn't have a long contract. But you'll pay $19.20 each month for
            broadcast TV and $11.50 for regional sports. Prices could go up.
            Taxes and TV gear cost extra.
          </p>
        </div>
      </div>
      {/* <Newsletter /> */}
    </div>
  );
};

export default XfinityReview;
