// import React, { useState } from "react";
import "./verizonreview.scss";
// import SubNav from "../components/sub-nav/SubNav";
// import { verizonNavLinks } from "../assets/data/navLinks/verizonNavLinks";
import InnerPagesHeroTwo from "../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import coxreviewboy from "../assets/images/coxreviewboy.png";
import star from "../assets/images/star.png";
import verizoncheckicon from "../assets/images/verizoncheckicon.png";
import verizonlogo from "../assets/images/verizonlogo.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../assets/images/quotations.svg";
import dotted from "../assets/images/dotted.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../components/accordion/Accordion";
import CTA from "../components/cta-section/CTA";
import PackageTable from "../components/package-table/PackageTable";
import Newsletter from "../components/newsletter/Newsletter";

export const metadata = {
  title: "Verizon Fios Review: Plans, Prices, And More"
};


const VerizonReview = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: verizonlogo,
      rating: "(4.2/5)",
      starImg: star,
      desc: "Editor's choice for internet service",
      buttonText: "compare packages",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: coxreviewboy,

    cardsStrip: [
      {
        subtitle: "Internet speeds:",
        title: "300–2,300 Mbps",
        icon: verizoncheckicon,
      },
      {
        subtitle: "Channel count:",
        title: "60–425+",
        icon: verizoncheckicon,
      },
      {
        subtitle: "Price:",
        title: "$49.99–$119.99/mo.",
        icon: verizoncheckicon,
      },
      {
        subtitle: "Home phone:",
        title: "Digital VoIP",
        icon: verizoncheckicon,
      },
    ],

    tableData: [
      {
        head: [
          " Package",
          "Price ",
          "Download speeds up to ",
          "Channel count ",
          "Details ",
        ],

        body: [
          {
            content: [
              "1. ",
              "Gigabit Connection ",
              "$89.99/mo.* ",
              "940 Mbps ",
              "N/A ",
            ],
            linkPath: "# ",
          },
          {
            content: [
              "2. ",
              " Gigabit Connection + The Most Fios TV",
              "$209.99/mo.† ",
              "940 Mbps ",
              "425+ ",
            ],
            linkPath: "# ",
          },
        ],
      },
    ],

    bottomDesc:
      "Data effective as of publish date. Offers and availability may vary by location and are subject to change.",
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
        "Price",
        "Download speeds up to",
        "Upload speeds up to",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Gigabit Connection",
            "$89.99/mo.",
            "940 Mbps",
            "880 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Fios Home Internet 500/500",
            "$69.99/mo.",
            "500 Mbps",
            "500 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Fios Home Internet 300/300",
            "$49.99/mo.",
            "300 Mbps",
            "300 Mbps",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataTvPlans = [
    {
      head: ["Package", "Price", "Channel count", "Details"],

      body: [
        {
          content: ["1.", "The Most Fios TV", "$119.00/mo.•", "425+"],
          linkPath: "#",
        },
        {
          content: ["2.", "More Fios TV", "$99.00/mo.•", "300+"],
          linkPath: "#",
        },
        {
          content: ["3.", "Your Fios TV", "$75.00/mo.^", "125+"],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataChannelLineUp = [
    {
      head: [
        "Package",
        "Included popular channels",
        "Missing popular channels",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "The Most Fios TV",
            "AMC, Comedy Central, ESPN, FOX Sports 1, FX, MTV, Syfy, TBS, TNT, VICE",
            "None",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "More Fios TV",
            "AMC, Comedy Central, ESPN, FOX Sports 1, FX, MTV, Syfy, TBS, TNT, VICE",
            "BBC World News, beIN SPORTS, Cooking Channel, NFL RedZone, Pac-12 Network, TCM",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Your Fios TV",
            "Varies by preference",
            "Varies by preference",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDatabundlespackages = [
    {
      head: [
        "Package",
        "Price",
        "Download speeds up to",
        "Channel count ",
        "Phone ",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Gigabit Connection + More Fios TV + Home Phone",
            "$213.99/mo.¶",
            "940 Mbps",
            "300+",
            "N/A",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Gigabit Connection + Your Fios TV + Home Phone",
            "$201.99/mo.¶",
            "940 Mbps",
            "125+",
            "N/A",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Verizon High-Speed Internet + Phone",
            "$74.99/mo.**",
            "Up to 15 Mbps",
            "N/A ",
            "Digital VoIP ",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="verizon-review">
      {/* <SubNav links={verizonNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Verizon Fios Review: Plans, Prices, And More
          </h2>
          <p className="sect-desc">
            Our experts have spent hundreds of hours researching and have found
            that Verizon Fios delivers excellent fiber-optic home service—if you
            live in the right zip code.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-verizon-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is Verizon Fios good?</h4>
          <p>
            Verizon Fios is a fiber-optic service that delivers fast internet,
            flexible TV packages, and inexpensive landline phone hookups. We
            think it’s a great service that doesn’t compromise quality in any of
            those three areas. The lack of annual contracts and surprise hidden
            fees is also a nice touch.
            <br />
            You might smell a “but” coming, and here it is: Verizon Fios
            residential service is currently available only in nine eastern US
            states. Speedy and pristine fiber-optic internet may be the future,
            but no provider has the whole country covered yet—not even wireless
            giant Verizon.
            <br />
            If you like Verizon’s mobile service, you’ll probably be interested
            in how its Fios product can power your stationary home with
            internet, TV, and landline telephone connections. In performance and
            price, we say it’s tough to beat (if you can get it).
          </p>

          <h4>Verizon Fios pros and cons</h4>
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
                  <td>Fast fiber connection</td>
                  <td>Limited availability</td>
                </tr>
                <tr>
                  <td>No annual contracts</td>
                  <td>Limited TV packages</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Find out if Verizon Fios is available in your area"}
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
          <Link href={"#"}>Promotions and deals</Link>
          <Link href={"#"}>TV packages</Link>
          <Link href={"#"}>Channel lineup</Link>
          <Link href={"#"}>Internet packages</Link>
          <Link href={"#"}>Bundle packages</Link>
        </div>
      </div>

      <div className="section verizon-blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"></p>
        </div>
        <div className="package-table-container channels">
          <Image src={dotted} alt="mark" className="mark" />
          <h4>Verizon Fios promotions and deals</h4>
          <br />
          <p>
            Verizon does deals, deals, and more deals (especially during the
            holiday season). Check out our{" "}
            <span className="link">
              <Link href={"#"}>Verizon Fios Deals page </Link>
            </span>{" "}
            for the most current offers.{" "}
          </p>
        </div>
      </div>

      <div className="section verizon-internet-plans-and-prices">
        <div className="head">
          <h2 className="sect-heading">
            <span> Verizon Fios internet </span> packages and pricing
          </h2>
          <p className="sect-desc">
            Verizon keeps it simple with five fiber-optic internet plans. We
            like the Gigabit Connection plan for its up to 940 Mbps of download
            speed (up to 880 Mbps upload) and reasonable cost—that’s plenty of
            streaming and surfing headroom for the price. Throw in over 425
            channels of TV service for $120 more, and it’s still not a bad deal.
            <br />
            Each package offers good speeds for the price, but they aren’t all
            available in every Verizon home internet area. If you live in the
            New York designated market area, you’re eligible for slightly higher
            speeds at the same prices.
            <br />
            Still, if you can get Verizon Fios internet, we recommend snagging
            whatever package is available in your ‘hood. Dive in a little deeper
            with our full Verizon Fios internet review.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change. See full disclaimer.
          <br />
          *Price per month with Auto Pay & without select 5G mobile plans. Fios
          plan prices include taxes & fees.
        </p>
      </div>

      <div className="section verizon-tv-plans-and-prices">
        <div className="head">
          <h2 className="sect-heading">
            <span> Verizon Fios TV </span> plans and pricing
          </h2>
          <p className="sect-desc">
            Looks like a lot of channels, right? Absolutely, but there’s more to
            it than just numbers—check out our full Fios TV review for the rest
            of the story (spoiler: the pros outweigh the cons).
          </p>
        </div>
        <PackageTable item={packageTableDataTvPlans} />
        <br />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change. See full disclaimer.
        </p>
      </div>

      <div className="section verizon-channel-lineup">
        <div className="head">
          <h2 className="sect-heading">
            <span> Verizon Fios </span> channel lineup
          </h2>
          <p className="sect-desc">
            As we mentioned before, Verizon Fios channel lineups are stacked. We
            have a full list of the channels that can help you find the right
            Verizon Fios TV package for you.
          </p>
        </div>
        <PackageTable item={packageTableDataChannelLineUp} />
        <br />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change. See full disclaimer.
        </p>
      </div>

      <div className="section verizon-bundles-packages">
        <div className="head">
          <h2 className="sect-heading">
            <span> Verizon Fios </span> bundles packages
          </h2>
          <p className="sect-desc">
            You don’t necessarily save money by combining Verizon Fios services,
            as the individual service prices remain the same regardless of the
            combo. But the billing convenience is cool. Read about all of the
            benefits of stringing services together in our review of Verizon
            Fios bundles.
          </p>
        </div>
        <PackageTable item={packageTableDatabundlespackages} />
        <br />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change. See full disclaimer.
        </p>
      </div>

      <CTA
        heading={"Not sure that Verizon Fios is right for you?"}
        desc={
          "Enter your zip code to see what internet and TV plans are available in your neighborhood."
        }
      />

      <div className="section verizon-competition">
        <div className="head">
          <h2 className="sect-heading">
            Verizon Fios <span> vs. the competition </span>
          </h2>
          <p className="sect-desc">
            You’ll find Verizon Fios on the US’s East Coast, where its main
            competitors are Xfinity, Spectrum, and Optimum. While each provider
            has something special to offer, we like Verizon Fios best because of
            its fast internet speeds and reliable connection.
            <br />
            Overall, Verizon Fios is our best choice for internet, and our
            survey named it one of the top providers in customer satisfaction.
            In addition to its top-tier internet service, it offers the most TV
            channels out there. You won’t go wrong with Verizon Fios.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity vs. Verizon Fios</h4>
          <br />
          <p>
            Xfinity offers the fastest internet service, though the high cost is
            prohibitive for most folks. And Xfinity’s voice remote is the best
            we’ve seen, though Verizon’s Fios TV Voice Remote isn’t too shabby
            either.
            <br />
            If you’re looking for a TV and internet bundle, Xfinity’s bundle
            discounts might be just what you need.
          </p>
          <hr className="hr" />
          <div className="btn">
            <Link href={"#"}>view xfinity plans</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Spectrum vs. Verizon Fios</h4>
          <br />
          <p>
            Spectrum plans tend to cost a bit more than Verizon’s, but
            Spectrum’s TV plans offer great value. Plus, Spectrum is the easier
            installation option if your house doesn’t connect to Verizon’s
            network yet.
            <br />
            To learn more, check out our Verizon Fios vs. Spectrum review.
          </p>
          <hr className="hr" />
          <div className="btn">
            <Link href={"#"}>view spectrum plans</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Optimum vs. Verizon Fios</h4>
          <br />
          <p>
            Optimum gives Verizon a run for its money—it undercuts Verizon’s
            regular prices, so Verizon has lowered its prices specifically in
            areas where it competes with Optimum.
            <br />
            Still, you’ll save about $20 monthly if you go with Optimum’s
            gigabit plan instead of Verizon’s. We’ve got a full Verizon Fios vs.
            Optimum review if you want to know more.
          </p>
          <hr className="hr" />
          <div className="btn">
            <Link href={"#"}>view optimum plans</Link>
          </div>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Verizon Fios worth it? </span>
          </h2>
          <p className="sect-desc">
            Verizon Fios has built an impressive suite of services on the back
            of its fiber-optic internet, but it has also managed to keep its
            prices within reason. You don’t usually get both with corporate
            media behemoths, so kudos are in order there.
            <br />
            We do have a couple of quibbles with Verizon Fios’s otherwise
            forward-thinking TV service, namely its use of old cable staples
            like physical DVRs and lineup-fluffing music channels. Those are
            minor details, but they could have easily been avoided in the age of
            live TV streaming.
            <br />
            Really, the only major check in the minus column is Verizon Fios’s
            limited reach—you can get it in select swathes of the East Coast,
            but the rest of the US is out of luck (for now).
            <br />
            If it’s available in your ‘hood, we say it’s worth trying out.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>get Verizon Fios</Link>
        </div>
      </div>

      <div className="section verizon-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Verizon Fios</span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Does Verizon Fios have
                hidden fees?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  In addition to requiring no annual contracts with its Fios
                  plans, Verizon has also done away with hidden fees. Of course,
                  there are still extra fees that become visible only during the
                  sign-up process, like monthly rental charges for internet
                  modem/routers and TV DVRs, but Verizon is still more
                  transparent than most providers.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"Does Verizon Fios have hidden fees?"}
            cssClass={"faq-content"}
          >
            <p>
              In addition to requiring no annual contracts with its Fios plans,
              Verizon has also done away with hidden fees. Of course, there are
              still extra fees that become visible only during the sign-up
              process, like monthly rental charges for internet modem/routers
              and TV DVRs, but Verizon is still more transparent than most
              providers.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Can I get Verizon Fios TV
                without Fios internet service?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  We’re not sure why you’d want to skip Verizon Fios’ internet
                  service, but you can bypass an internet/TV bundle and just opt
                  for a Verizon Fios TV plan. Since Fios TV is delivered over
                  fiber-optic internet lines, data would be routed specifically
                  for TV service but offer no proper internet functionality.
                  This doesn’t, however, apply to Fios home phone service.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"Can I get Verizon Fios TV without Fios internet service?"}
            cssClass={"faq-content"}
          >
            <p>
              We’re not sure why you’d want to skip Verizon Fios’ internet
              service, but you can bypass an internet/TV bundle and just opt for
              a Verizon Fios TV plan. Since Fios TV is delivered over
              fiber-optic internet lines, data would be routed specifically for
              TV service but offer no proper internet functionality. This
              doesn’t, however, apply to Fios home phone service.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Where is Verizon Fios
                available?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  As with most internet providers, Verizon Fios’s fiber-optic
                  infrastructure covers only part of the country. Fiber-to-home
                  connections are still a new technology, so it could be a while
                  before they arrive in your neighborhood.
                  <br />
                  Verizon Fios is currently available in parts of these states:
                </p>
                <ul>
                  <li>· Delaware</li>
                  <li>· Maryland</li>
                  <li>· Massachusetts</li>
                  <li>· New Jersey</li>
                  <li>· New York</li>
                  <li>· Pennsylvania</li>
                  <li>· Rhode Island</li>
                  <li>· Virginia</li>
                  <li>· Washington, DC</li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"Where is Verizon Fios available?"}
            cssClass={"faq-content"}
          >
            <p>
              As with most internet providers, Verizon Fios’s fiber-optic
              infrastructure covers only part of the country. Fiber-to-home
              connections are still a new technology, so it could be a while
              before they arrive in your neighborhood.
              <br />
              Verizon Fios is currently available in parts of these states:
            </p>
            <ul>
              <li>· Delaware</li>
              <li>· Maryland</li>
              <li>· Massachusetts</li>
              <li>· New Jersey</li>
              <li>· New York</li>
              <li>· Pennsylvania</li>
              <li>· Rhode Island</li>
              <li>· Virginia</li>
              <li>· Washington, DC</li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does Verizon Fios have
                senior discounts?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Verizon Fios offers Verizon Lifeline for low-income
                  households, which includes some seniors.
                  <br />
                  If your household income is less than or equal to 135% of the
                  federal poverty guidelines, or you participate in federal
                  assistance programs like Supplemental Security Income (SSI) or
                  Veterans Pension and Survivors Benefit, you may qualify.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={"Does Verizon Fios have senior discounts?"}
            cssClass={"faq-content"}
          >
            <p>
              Verizon Fios offers Verizon Lifeline for low-income households,
              which includes some seniors.
              <br />
              If your household income is less than or equal to 135% of the
              federal poverty guidelines, or you participate in federal
              assistance programs like Supplemental Security Income (SSI) or
              Veterans Pension and Survivors Benefit, you may qualify.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote verizon-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Disclaimers:</h4>
          <p>
            Offers and availability may vary by location and are subject to
            change. *w/ Auto Pay + taxes. †General: For new eligible TV and/or
            Internet res. custs. Availability varies. Wired & wireless Internet
            speeds vary due to device limits, multiple users, network, & other
            factors. See Verizon.com/yourspeed for more info. $15/mo. router and
            $99 setup charges & other taxes & terms may apply. Auto Pay (ACH or
            bank debit card only) & paper-free billing req’d. for Internet
            service. Subj. to credit approval & may require a deposit. Fios TV:
            $12/mo. STB charge may apply. ‡General: For new eligible TV and/or
            Internet res. custs. Availability varies. Wired & wireless Internet
            speeds vary due to device limits, multiple users, network, & other
            factors. See Verizon.com/yourspeed for more info. $15/mo. router and
            $99 setup charges & other taxes & terms may apply. Auto Pay (ACH or
            bank debit card only) & paper-free billing req’d. for Internet
            service. Subj. to credit approval & may require a deposit. Fios
            Gigabit Connection: Gigabit network connection to your home. Wired
            speeds up to 940/880 Mbps with avg. speeds betw. 750–940 Mbps
            download / 750–880 Mbps upload. Fios TV: $12/mo. STB charge may
            apply.
          </p>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Verizon Internet | Verizon TV | Verizon Channel lineups |
          Verizon Phone | Verizon Bundles | Verizon Customer service
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default VerizonReview;
