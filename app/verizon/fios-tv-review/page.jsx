// import React, { useState } from "react";
import "./verizon-fios-tv-review.scss";
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
  title: "Verizon fios TV review: plans and prices",
};

const VerizonFiosTvReview = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: verizonlogo,
      rating: "(4.2/5)",
      starImg: star,
      desc: "$500 contract buyout when you switch",
      buttonText: "View Plans",
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
        title: "$60.00–$119.00/mo.",
        icon: verizoncheckicon,
      },
      {
        subtitle: "Channel count:",
        title: "125–425+",
        icon: verizoncheckicon,
      },
    ],

    tableData: [
      {
        head: ["Plan", "Price", "Channel count", "Details "],

        body: [
          {
            content: ["1. ", "The Most Fios TV", "$119.00/mo.", "425+"],
            linkPath: "# ",
          },
          {
            content: ["2. ", "Your Fios TV", "$75.00/mo.", "125+"],
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
      head: ["Plan", "Price*", "channel count", "Details"],

      body: [
        {
          content: ["1.", "The Most Fios TV", "$119.00/mo.", "425+"],
          linkPath: "#",
        },
        {
          content: ["2.", "Your Fios TV", "$75.00/mo.", "125+"],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataComparePackages = [
    {
      head: ["Plan", "Price*", "channel count", "Details"],

      body: [
        {
          content: ["1.", "The Most Fios TV", "$119.00/mo.", "425+"],
          linkPath: "#",
        },
        {
          content: ["2.", "More Fios TV", "$99.00/mo.", "300+"],
          linkPath: "#",
        },
        {
          content: ["3.", "Your Fios TV", "$75.00/mo.", "125+"],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataInternetPackages = [
    {
      head: [
        "Plan",
        "Price*",
        "channel count",
        "Download speeds up to",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "The Most Fios TV + Gigabit Connection",
            "$208.99/mo.",
            "425+",
            "940 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "More Fios TV + Gigabit Connection",
            "$188.99/mo.",
            "300+",
            "940 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Your Fios TV + Internet 500",
            "$144.99/mo.",
            "125+",
            "500 Mbps",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="verizon-fios-tv-review">
      {/* <SubNav links={verizonNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Verizon fios TV review: plans and prices
          </h2>
          <p className="sect-desc">
            Verizon’s Fios TV offers a lot of channels (and flexibility) for
            your buck. Read our expert review to see if Verizon Fios TV is right
            for you.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-verizon-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Verizon Fios TV at a glance</h4>
          <p>
            Verizon Fios TV isn’t cable or satellite—it’s carried over
            fiber-optic internet. It’s technically a streaming TV service, even
            if it’s not packaged like Sling TV or Hulu + Live TV.
            <br />
            On the upside, this gives you more channel flexibility (Verizon Fios
            TV offers a plan that lets you choose your own channel lineup).
            Also, better video quality (cable and satellite signals degrade over
            a distance; fiber-optic signals don’t).
            <br />
            On the downside, Verizon Fios TV is available in only nine eastern
            US states currently, and it still includes an antiquated piece of
            cable/satellite hardware in its otherwise tech-forward delivery
            system: the monthly-rental physical receiver/DVR (as opposed to
            streaming’s virtual cloud DVR).
            <br />
            But if you’re in the right zip code to take advantage of it, Verizon
            Fios TV is still an excellent—and relatively inexpensive—TV service.
          </p>

          <h4>Verizon Fios TV pros & cons</h4>
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
                  <td>Inexpensive pricing</td>
                  <td>Limited availability</td>
                </tr>
                <tr>
                  <td>Large channel counts</td>
                  <td>Limited package choices</td>
                </tr>
                <tr>
                  <td>Excellent picture quality</td>
                  <td>DVR rental fees</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Find out if Verizon Fios TV is available in your area"}
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
          <Link href={"#"}>TV + Internet packages</Link>
          <Link href={"#"}> Our final take on Verizon Fios TV</Link>
          <Link href={"#"}>FAQ</Link>
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
          <h4>Verizon Fios deals and promotions</h4>
          <br />
          <p>
            Looking for the best prices? Verizon Fios frequently offers
            limited-time discounts and perks to its customers, and we’ve got you
            covered with all the latest updates over on our{" "}
            <span className="link">
              <Link href={"/"}>Verizon Fios deals page.</Link>
            </span>
          </p>
          <br />
          <h4>Free Sling TV</h4>
          <br />
          <p>
            For new and existing Fios customers: get two free months of Sling
            Orange or Sling Blue, three free months of Sling Latino, or two free
            months of Sling International.
          </p>
        </div>
      </div>

      <div className="section verizon-Fios-tv-packages">
        <div className="head">
          <h2 className="sect-heading">
            <span>Best Verizon Fios </span> TV packages
          </h2>
          <p className="sect-desc">
            Verizon Fios TV doesn’t offer a wide range of packages, but the few
            it does provide make sense—who wants to spend hours studying channel
            lineups to make sure you get the one you want? If you don’t work at
            a TV reviews site, that is.
            <br />
            For power-viewers who need every channel at their disposal, The Most
            Fios TV package does it all and then some. You won’t find a cable or
            satellite package that gives you more than 425 channels at just $119
            a month.
            <br />
            For less-demanding TV watchers, Verizon’s Your Fios TV is a cool
            idea: You choose five of your favorite cable channels, and then
            Verizon will build you a channel lineup (including all local
            channels) of 120 others based on your picks for just $75 a month.
            That includes your first set-top box at no extra charge, but you’ll
            still have to pay for DVR service (starting at $12 a month) if you
            want it.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          *Plus taxes. For eligible new res. custs. $99 set-up & taxes & terms
          may apply. Subj. to credit approval & may require a deposit. Fios
          avail. in select areas. Data as of post date. Offers and availability
          may vary by location and are subject to change.
        </p>
      </div>

      <div className="section verizon-tv-packages-and-pricing">
        <div className="head">
          <h2 className="sect-heading">
            <span> Verizon Fios TV </span> packages and pricing
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Eu tempor nunc maecenas
            risus volutpat eget quisque. In nec orci quisque velit phasellus
            nulla fusce. Nunc at in a ullamcorper id nibh quam id.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Compare Verizon TV packages</h4>
          <PackageTable item={packageTableDataComparePackages} />
          <br />
          <p className="below-table">
            *Plus taxes. For eligible new res. custs. $99 set-up & taxes & terms
            may apply. Subj. to credit approval & may require a deposit. Fios
            avail. in select areas. Data effective as of post date. Offers and
            availability may vary by location and are subject to change.
          </p>
          <hr className="hr" />
          <div className="btn">
            <Link href={"/"}>see full verizon fios channel lineups</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Verizon DVR options</h4>
          <br />
          <p>
            Verizon Fios TV’s middle package, More Fios TV, is a slimmer version
            of The Most Fios TV for $20 less, and it includes Standard DVR (50
            hours, two simultaneous recordings), which is regularly $12 a month.
            You can also choose to upgrade from the free Standard DVR to one of
            the other tiers shown below.
            <br />
            <span className="link">
              <Link href={"/"}>Verizon Fios TV DVR </Link>
            </span>{" "}
            pricing:
          </p>
          <ul>
            <li>
              · <b>Standard DVR</b> (50 hrs. storage; records 2 channels
              simultaneously): $12/mo.
            </li>
            <li>
              · <b>Enhanced DVR</b> (100 hrs. storage; records 6 channels
              simultaneously): $20/mo. ($8/mo. when upgrading)
            </li>
            <li>
              · <b>Premium DVR</b> (200 hrs. storage; records 12 channels
              simultaneously): $30/mo. ($18/mo. when upgrading)
            </li>
          </ul>
          <p>
            Data as of post date. Offers and availability may vary by location
            and are subject to change.
            <br />
            We would have liked a cloud DVR (like livestreaming TV services
            use); physical DVRs are pretty old-school in 2020. Also, The Most
            Fios TV and More Fios TV lineups both include about 50 Music Choice
            audio channels, which artificially inflate the overall count (boo).
          </p>
          <hr className="hr" />
          <div className="btn">
            <Link href={"/"}>see full verizon fios channel lineups</Link>
          </div>
        </div>
      </div>

      <div className="section verizon-Fios-tv-internet-packages">
        <div className="head">
          <h2 className="sect-heading">
            <span>Verizon Fios </span> TV and internet packages
          </h2>
          <p className="sect-desc">
            Since Verizon Fios TV is internet-based, it requires an internet
            connection—though you can get Fios TV as a standalone service. The
            TV receiver would have access to internet data to operate, but you
            wouldn’t be able use it as a standard internet connection. But why
            wouldn’t you want internet service? Exactly.
            <br />
            For more information on Verizon Fios’s fiber internet, head over to
            our Verizon internet review.
          </p>
        </div>
        <PackageTable item={packageTableDataInternetPackages} />
        <br />
        <p className="below-table">
          For new eligible TV and/or Internet res. custs. Availability varies.
          Wired & wireless Internet speeds vary due to device limits, multiple
          users, network & other factors. See Verizon.com/yourspeed for more
          info. $15/mo. router and $99 setup charges & other taxes & terms may
          apply. Auto Pay (ACH or bank debit card only) & paper-free billing
          req’d. for Internet service. Subj. to credit approval & may require a
          deposit. Fios TV: $12/mo.
          <br />
          STB charge may apply. Data effective as of post date. Offers and
          availability may vary by location and are subject to change.
        </p>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> on Verizon Fios TV </span>
          </h2>
          <p className="sect-desc">
            We like that Verizon Fios TV gives you a hefty channel count at a
            decent price point, and the flexibility of its Your Fios TV package
            is great, too. Did we mention that you can change the Your Fios TV
            channel lineup from month to month? That’s cool.
            <br />
            What’s not cool is Verizon Fios TV’s reliance on old cable staples
            like lineup-stuffing music channels and physical DVRs. It’s
            2022—Spotify and cloud DVRs are very much a thing. We would have
            liked Verizon Fios TV to fully dedicate itself to the livestreaming
            TV model; it’s just simpler, and puts less hardware on your
            entertainment center.
            <br />
            Still, we’d rate it better than most cable and satellite services
            out there. If you’re getting Verizon Fios internet, its TV service
            is a solid addition.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>get Verizon Fios TV</Link>
        </div>
      </div>

      <CTA
        heading={"Not sure you want Verizon Fios TV?"}
        desc={"See what other TV plans are available in your area."}
      />

      <div className="section verizon-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Verizon Fios TV</span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What is Fios TV?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Verizon’s Fios TV is a fiber-optic TV service that delivers
                  live TV over the internet, similar to a streaming TV service.
                  It is currently the only fiber-optic TV provider on the
                  market; to find out why, check out our Best Fiber TV Providers
                  review.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What is Fios TV?"}
            cssClass={"faq-content"}
          >
            <p>
              Verizon’s Fios TV is a fiber-optic TV service that delivers live
              TV over the internet, similar to a streaming TV service. It is
              currently the only fiber-optic TV provider on the market; to find
              out why, check out our Best Fiber TV Providers review.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What are the different
                Verizon TV packages?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Verizon Fios TV has three packages—with fairly reasonable
                  pricing.
                </p>
                <ul>
                  <li>· Your Fios TV ($75/mo., 125+ channels)</li>
                  <li>· More Fios TV ($99/mo., 300+ channels)</li>
                  <li>· The Most Fios TV ($119/mo., 425+ channels)</li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" What are the different Verizon TV packages?"}
            cssClass={"faq-content"}
          >
            <p>
              Verizon Fios TV has three packages—with fairly reasonable pricing.
            </p>
            <ul>
              <li>· Your Fios TV ($75/mo., 125+ channels)</li>
              <li>· More Fios TV ($99/mo., 300+ channels)</li>
              <li>· The Most Fios TV ($119/mo., 425+ channels)</li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Can I watch Verizon Fios TV
                on mobile devices?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Through the Verizon Fios TV app (iOS and Android), you can
                  watch recorded content, on-demand purchases, and downloads. If
                  you’re a Verizon Wireless customer, mobile streaming won’t be
                  counted against your data allowance.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Can I watch Verizon Fios TV on mobile devices?"}
            cssClass={"faq-content"}
          >
            <p>
              Through the Verizon Fios TV app (iOS and Android), you can watch
              recorded content, on-demand purchases, and downloads. If you’re a
              Verizon Wireless customer, mobile streaming won’t be counted
              against your data allowance.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does Verizon Fios TV offer
                add-on channel packages?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  You can add premium packages from HBO®, CINEMAX®, SHOWTIME®,
                  STARZ®, and EPIX® to Fios TV, which offers a unique discount
                  plan: Get one for $15 a month, two for $25 a month, three for
                  $30 a month, or all five for $40 a month (a savings of $35 a
                  month).
                  <br />
                  Verizon Fios TV also offers nine international-language
                  packages, ranging from Spanish to French ($11.99 to $37.99 a
                  month), and six sports add-ons: FOX Soccer Plus, MLB Extra
                  Innings, MLB.tv Premium, MLS Direct Kick, NHL Center Ice, and
                  NBA League Pass ($14.99 a month to $200 per regular season).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Does Verizon Fios TV offer add-on channel packages?"}
            cssClass={"faq-content"}
          >
            <p>
              You can add premium packages from HBO®, CINEMAX®, SHOWTIME®,
              STARZ®, and EPIX® to Fios TV, which offers a unique discount plan:
              Get one for $15 a month, two for $25 a month, three for $30 a
              month, or all five for $40 a month (a savings of $35 a month).
              <br />
              Verizon Fios TV also offers nine international-language packages,
              ranging from Spanish to French ($11.99 to $37.99 a month), and six
              sports add-ons: FOX Soccer Plus, MLB Extra Innings, MLB.tv
              Premium, MLS Direct Kick, NHL Center Ice, and NBA League Pass
              ($14.99 a month to $200 per regular season).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>Does the Verizon Fios TV
                DVR/receiver include streaming apps?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  The Fios TV One DVR/receiver features built-in Netflix and
                  YouTube streaming apps. The TV One device can also be
                  configured for Multi-Room DVR Enhanced (up to five TVs) or
                  Premium (up to 10 TVs) service. Also included: a
                  voice-controlled remote.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={
              "Does the Verizon Fios TV DVR/receiver include streaming apps?"
            }
            cssClass={"faq-content"}
          >
            <p>
              The Fios TV One DVR/receiver features built-in Netflix and YouTube
              streaming apps. The TV One device can also be configured for
              Multi-Room DVR Enhanced (up to five TVs) or Premium (up to 10 TVs)
              service. Also included: a voice-controlled remote.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>What channels are included
                in More Fios TV?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  Verizon’s More Fios TV has 300+ channels including popular
                  entertainment networks (A&E, AMC, Comedy Central, TBS, and
                  TNT), educational and kids channels (Cartoon Network, Disney
                  Channel, Discovery Channel, and Nickelodeon), and sports hubs
                  (ESPN, ESPN2, FS1, NFL Network, and NHL Network). To learn
                  more about the channels including in More Fios TV, check out
                  our Verizon Fios Channel Lineup Guide.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"What channels are included in More Fios TV?"}
            cssClass={"faq-content"}
          >
            <p>
              Verizon’s More Fios TV has 300+ channels including popular
              entertainment networks (A&E, AMC, Comedy Central, TBS, and TNT),
              educational and kids channels (Cartoon Network, Disney Channel,
              Discovery Channel, and Nickelodeon), and sports hubs (ESPN, ESPN2,
              FS1, NFL Network, and NHL Network). To learn more about the
              channels including in More Fios TV, check out our Verizon Fios
              Channel Lineup Guide.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(7)}>
                <span>{faq === 7 ? "-" : "+"}</span> Does Verizon offer senior
                discounts?
              </h3>

              <div className={`faq-content ${faq === 7 ? "show" : ""}`}>
                <p>
                  Unfortunately, Verizon Fios does not offer discounts for
                  seniors. It does, however, have a “Those Who Serve” program
                  that has special discounts and perks for first responders,
                  nurses, teachers, members of the military, and veterans.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={" Does Verizon offer senior discounts?"}
            cssClass={"faq-content"}
          >
            <p>
              Unfortunately, Verizon Fios does not offer discounts for seniors.
              It does, however, have a “Those Who Serve” program that has
              special discounts and perks for first responders, nurses,
              teachers, members of the military, and veterans.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(8)}>
                <span>{faq === 8 ? "-" : "+"}</span> Can I watch Fios TV without
                a set-top box?
              </h3>

              <div className={`faq-content ${faq === 8 ? "show" : ""}`}>
                <p>
                  Yes, you can watch Fios TV without a set-top box if your TV is
                  newer than about 2006. Without Fios, you should be able to use
                  your TV’s scan function to watch local channels. With a Fios
                  subscription, you can access the cable channels that you pay
                  for by using a coaxial connection (the kind of wire that
                  screws in) from your TV to your cable wire.
                  <br />
                  You won’t get the full experience of Video on Demand or a
                  voice-activated remote, but you will be able to skip out on
                  pricey equipment fees, so it’s worth a try.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"8"}
            title={" Can I watch Fios TV without a set-top box?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, you can watch Fios TV without a set-top box if your TV is
              newer than about 2006. Without Fios, you should be able to use
              your TV’s scan function to watch local channels. With a Fios
              subscription, you can access the cable channels that you pay for
              by using a coaxial connection (the kind of wire that screws in)
              from your TV to your cable wire.
              <br />
              You won’t get the full experience of Video on Demand or a
              voice-activated remote, but you will be able to skip out on pricey
              equipment fees, so it’s worth a try.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Verizon overview | Verizon Channel lineups | Verizon
          Internet | Verizon Phone | Verizon Bundles | Verizon Customer service
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default VerizonFiosTvReview;
