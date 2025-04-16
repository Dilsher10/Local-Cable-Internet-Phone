// import React, { useState } from "react";
import "./verizon-fios-internet-review.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { verizonNavLinks } from "../../assets/data/navLinks/verizonNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import coxreviewboy from "../../assets/images/coxreviewboy.png";
import star from "../../assets/images/star.png";
import verizoncheckicon from "../../assets/images/verizoncheckicon.png";
import verizonlogo from "../../assets/images/verizonlogo.png";
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
  title: "Verizon Fios Internet Plans And Prices"
};

const VerizonFiosInternetReview = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: verizonlogo,
      rating: "(4.2/5)",
      starImg: star,
      desc: "$500 contract buyout when you switch",
      buttonText: "Compare Packages",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: coxreviewboy,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "verizon Fios",
        icon: verizoncheckicon,
      },
      {
        subtitle: "Price:",
        title: "$49.99–$89.99/mo.",
        icon: verizoncheckicon,
      },
      {
        subtitle: "Internet speed:",
        title: "300–2,300 Mbps",
        icon: verizoncheckicon,
      },
    ],

    tableData: [
      {
        head: [
          "Plan",
          "Price ",
          "Download speeds up to ",
          "Upload speeds up to",
          "Details ",
        ],

        body: [
          {
            content: [
              "1. ",
              "Fios Internet 1 Gig",
              "$89.99/mo.",
              "940 Mbps",
              "880 Mbps",
            ],
            linkPath: "# ",
          },
          {
            content: [
              "2. ",
              "Fios Internet 300/300",
              "$49.99/mo.",
              "300 Mbps",
              "300 Mbps",
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
            "Fios Internet 1 Gig",
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
  let packageTableDataPackageBundles = [
    {
      head: [
        "Package",
        "Price",
        "Download speeds up to",
        "Channel count",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Fios Gigabit Connection + The Most Fios TV",
            "$208.99/mo.",
            "940 Mbps",
            "425+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Fios Gigabit Connection + More Fios TV",
            "$188.99/mo.",
            "500 Mbps",
            "300+",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="verizon-fios-internet-review">
      {/* <SubNav links={verizonNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Verizon Fios Internet Plans And Prices
          </h2>
          <p className="sect-desc">
            Verizon’s Fios fiber internet plans are fast and budget-friendly.
            Check out our in-depth review to get the right Verizon internet plan
            for you.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-verizon-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is Verizon Fios internet good?</h4>
          <p>
            “Fios” may not be a real word, but{" "}
            <span className="link">
              <Link href={"/"}>Verizon’s fiber-optic internet </Link>
            </span>
            service is legit—and fast. With download speeds peaking at 940 Mbps
            (megabits per second) for $89.99 a month, Verizon Fios internet
            leaves most of the competition in the dust.
            <br />
            The East Coast competition, that is: Verizon Fios internet service
            is currently available in only nine eastern US states. Like every
            other American internet service provider, Verizon hasn’t yet
            achieved full sea-to-shining-sea fiber coverage. But, if you can get
            it, we recommend signing up.
          </p>

          <h4>Verizon Fios internet pros and cons</h4>
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
                  <td>Fast download speeds</td>
                  <td>Limited availability</td>
                </tr>
                <tr>
                  <td>No contracts</td>
                  <td>Limited plan options</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Find out if Verizon Fios internet is available in your area"}
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
          <Link href={"#"}>Internet packages</Link>
          <Link href={"#"}>Internet and TV bundles</Link>
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
            Verizon almost always has a ton of deals and promotions for
            everybody from veterans to seniors. They change all the time, so be
            sure to check out our
            <span className="link">
              <Link href={"#"}>Verizon Fios Deals </Link>
            </span>{" "}
            page to get the latest promotions.
          </p>
        </div>
      </div>

      <div className="section verizon-internet-only-plans-and-pricing">
        <div className="head">
          <h2 className="sect-heading">
            <span> Verizon Fios </span> internet-only plans and pricing
          </h2>
          <p className="sect-desc">
            First things first, if you can get Verizon Fios internet, jump on
            it. It’s fast and reasonably priced. All of Verizon Fios’s plans are
            fast and relatively cheap for fiber-optic internet. We like the
            top-tier Fios Gigabit Connection because its blazing download and
            upload speeds could handle all the users and devices a household
            could throw at it. Buffering begone!
            <br />
            For fiber-optic internet, Verizon Fios internet-only prices are on
            the lower end of the scale. If you’re looking for a compromise
            between monthly cost and speed, the middle plan, Fios Internet
            500/500, is your best (and, yes, only) bet. You’re in luck if you
            live in the New York designated market area, though. Depending on
            your location, you could qualify for slightly higher speeds at the
            same prices.
            <br />
            Compared to the competition, Verizon Fios internet plans are worth
            jumping on. Still, you might find just as good of speeds and prices
            from Xfinity and Spectrum.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          **Price per month with Auto Pay & without select 5G mobile plans. Fios
          plan prices include taxes & fees.
          <br />
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section verizon-internet-TV-packages-and-bundles">
        <div className="head">
          <h2 className="sect-heading">
            Verizon Fios <span>internet and TV packages and bundles</span>
          </h2>
          <p className="sect-desc">
            Like its internet plans, Verizon Fios’s TV packages are surprisingly
            inexpensive, given their large channel counts. There’s even one
            (Your Fios TV) that can be customized to your preferences. Nice.
          </p>
        </div>
        <PackageTable item={packageTableDataPackageBundles} />
        <br />
        <p className="below-table">
          *w/ Auto Pay + taxes & equip charges. Data effective as of post date.
          Offers and availability may vary by location and are subject to
          change.
        </p>
      </div>

      <div className="section verizon-wifi">
        <div className="head">
          <h2 className="sect-heading">
            Verizon Fios <span> Wi-Fi </span>
          </h2>
          <p className="sect-desc">
            Verizon Fios has a few different Wi-Fi routers and gateways to cover
            your home in Wi-Fi internet. Don’t worry about being overwhelmed
            with choices, though—the Verizon team will pick out the best modem
            for your area and service.
            <br />
            Renting a Verizon Fios router or gateway costs $18.00 a month, or
            you can buy the device outright for $399.99. Buying your equipment
            costs about the same as renting it for a year and a half. Or, if you
            have the Fios Gigabit Connection plan, your router comes included at
            no additional cost.
            <br />
            We recommend that, if you’ve got the cash, you play the long game.
            Go ahead and buy your Verizon Fios Wi-Fi equipment—it’s a stellar
            option that not enough providers allow.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Verizon Fios vs. Optimum, Xfinity, and Spectrum</h4>
          <br />
          <p>
            There are many internet service providers that compete with Verizon
            Fios for your affection (and cash). Depending on where you live, the
            biggest competitor is probably Optimum, Xfinity, or Spectrum.
            <br />
            If you’re interested in a deal, Optimum and Xfinity internet plans
            cost about the same as Verizon Fios’s. Optimum’s gigabit plan is a
            little cheaper than Verizon Fios’s, and Optimum sometimes has flash
            deals if you keep an eye out for them.
            <br />
            Or if you’d like to bundle your internet service with TV, Xfinity
            has some great discounts on package deals. Xfinity doesn’t have the
            same huge channel lineup as Verizon, but it’s not too shabby.
            <br />
            On the other hand, Spectrum tends to cost more than Verizon Fios,
            unless you go with one of its slower plans. But you really
            shouldn’t—you deserve fast internet.
            <br />
            The big drawback to these Verizon Fios alternatives is that they’re
            all cable internet providers. Fiber internet is faster (especially
            regarding upload speeds) and more reliable, making Verizon Fios the
            best option, technologically speaking.
            <br />
            But if you’d like to learn more about how these providers compare,
            check out our Verizon Fios vs. Optimum and Verizon Fios vs. Spectrum
            reviews. We’ve got a full Verizon Fios vs. Xfinity review planned
            for the future, too, so check back here later for a link.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> : Is Verizon Fios internet worth it?</span>
          </h2>
          <p className="sect-desc">
            Verizon Fios’s fiber-optic internet provides a lot of speed for a
            little money—nothing to argue with here. Fiber-optic connections are
            the new internet gold standard, and Verizon Fios sweetens the deal
            by keeping its plans and pricing simple.
            <br />
            But it’s only a sweet deal if you live in Delaware, New Jersey, New
            York, Maryland, Massachusetts, Pennsylvania, Rhode Island, Virginia,
            or Washington, DC—Verizon Fios internet isn’t a nationwide service
            just yet. If you are in the right zip code, we say go for Fios.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>get Verizon Fios internet</Link>
        </div>
      </div>

      <CTA
        heading={"Unsure about Verizon Fios internet?"}
        desc={
          "Enter your zip code to see what other internet providers are out there."
        }
      />

      <div className="section verizon-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Verizon Fios internet </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Does Verizon Fios internet
                come with a contract or extra fees?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Unlike most internet service providers, Verizon Fios requires
                  no annual contract; you simply pay month to month. No contract
                  also means no potential early termination fees if you suddenly
                  need to move or drop the service.
                  <br />
                  The Verizon Fios setup fee is $99—unless you order online.
                  Then it’s free. Also, Verizon includes a modem/router with
                  Fios Gigabit Connection service. Internet 300/300 and Internet
                  500/500 come with a monthly $15 modem/router rental fee.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Does Verizon Fios internet come with a contract or extra fees?"}
            cssClass={"faq-content"}
          >
            <p>
              Unlike most internet service providers, Verizon Fios requires no
              annual contract; you simply pay month to month. No contract also
              means no potential early termination fees if you suddenly need to
              move or drop the service.
              <br />
              The Verizon Fios setup fee is $99—unless you order online. Then
              it’s free. Also, Verizon includes a modem/router with Fios Gigabit
              Connection service. Internet 300/300 and Internet 500/500 come
              with a monthly $15 modem/router rental fee.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Why isn't Verizon Fios
                internet available in my area?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  While the “backbone” of the internet (yes, the whole internet)
                  is made up of fiber optics (microscopic glass strands that
                  transmit data as pulses of light), most “last mile”
                  connections that go directly to homes and businesses are still
                  made up of old copper phone lines and coaxial TV cables.
                  <br />
                  Fiber-to-premises internet is an expensive but slowly growing
                  infrastructure; currently, less than half of the US is covered
                  by fiber. If your neighborhood isn’t hooked up yet, internet
                  providers like Verizon Fios are probably planning fiber
                  expansion in your area—but it won’t happen overnight.
                  <br />
                  These states currently have Verizon Fios fiber internet:
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
            id={"2"}
            title={" Why isn't Verizon Fios internet available in my area?"}
            cssClass={"faq-content"}
          >
            <p>
              While the “backbone” of the internet (yes, the whole internet) is
              made up of fiber optics (microscopic glass strands that transmit
              data as pulses of light), most “last mile” connections that go
              directly to homes and businesses are still made up of old copper
              phone lines and coaxial TV cables.
              <br />
              Fiber-to-premises internet is an expensive but slowly growing
              infrastructure; currently, less than half of the US is covered by
              fiber. If your neighborhood isn’t hooked up yet, internet
              providers like Verizon Fios are probably planning fiber expansion
              in your area—but it won’t happen overnight.
              <br />
              These states currently have Verizon Fios fiber internet:
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
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Can I bundle Verizon
                services together?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Verizon’s internet, TV, and home phone services can all be
                  bundled in various configurations. You won’t necessarily get a
                  discount in every case, but it’s at least convenient.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Can I bundle Verizon services together?"}
            cssClass={"faq-content"}
          >
            <p>
              Verizon’s internet, TV, and home phone services can all be bundled
              in various configurations. You won’t necessarily get a discount in
              every case, but it’s at least convenient.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does Verizon offer Wi-Fi
                for home?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  The three Verizon Fios Wi-Fi plans cost between
                  $49.99–$89.99/mo. and come with download speeds between up to
                  300–2,300 Mbps. Your Wi-Fi router or gateway rental will cost
                  an additional $18.00 per month—or you can get it included for
                  free with the Fios Gigabit Connection plan.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Does Verizon offer Wi-Fi for home?"}
            cssClass={"faq-content"}
          >
            <p>
              The three Verizon Fios Wi-Fi plans cost between $49.99–$89.99/mo.
              and come with download speeds between up to 300–2,300 Mbps. Your
              Wi-Fi router or gateway rental will cost an additional $18.00 per
              month—or you can get it included for free with the Fios Gigabit
              Connection plan.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Can I use my own Wi-Fi
                router with Verizon Fios?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  While you can use your own Wi-Fi router with Verizon Fios,
                  there’s not much reason to. You have to use a Verizon Fios
                  Gateway to connect with Verizon’s proprietary fiber
                  technology, and that gateway already has a Wi-Fi router
                  inside.
                  <br />
                  So unless the Verizon Wi-Fi router isn’t performing up to your
                  standards, you might as well use both features of the
                  two-in-one device you’re already paying for.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" Can I use my own Wi-Fi router with Verizon Fios?"}
            cssClass={"faq-content"}
          >
            <p>
              While you can use your own Wi-Fi router with Verizon Fios, there’s
              not much reason to. You have to use a Verizon Fios Gateway to
              connect with Verizon’s proprietary fiber technology, and that
              gateway already has a Wi-Fi router inside.
              <br />
              So unless the Verizon Wi-Fi router isn’t performing up to your
              standards, you might as well use both features of the two-in-one
              device you’re already paying for.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Verizon overview | Verizon TV | Verizon Channel lineups |
          Verizon Phone | Verizon Bundles | Verizon Customer service
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default VerizonFiosInternetReview;
