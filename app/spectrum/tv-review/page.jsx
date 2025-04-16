// import React, { useState } from "react";
import "./spectrum-tv-review.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { spectrumNavLinks } from "../../assets/data/navLinks/spectrumNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import spectrum from "../../assets/images/Spectrum.png";
import { GoArrowUpRight } from "react-icons/go";
import tvreview from "../../assets/images/tvreview.png";
import star from "../../assets/images/star.png";
import asidespectrum from "../../assets/images/asidespectrum.png";
import mark from "../../assets/images/mark.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import quotations from "../../assets/images/quotations.svg";
import Link from "next/link";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
import Searchbar from "../../components/searchbar/Searchbar";
// import Newsletter from "../../components/newsletter/Newsletter";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Spectrum Review 2024: Plans, Prices, And More"
};

const SpectrumTvReview = () => {
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

    card2Img: tvreview,

    cardsStrip: [
      {
        subtitle: "Price:",
        title: "from $59.99*",
        icon: asidespectrum,
      },
      {
        subtitle: "Channels:",
        title: "150+",
        icon: asidespectrum,
      },
      {
        subtitle: "Popular channels:",
        title:
          "AMC, CNN, Discovery Channel, ESPN, FOX News, Hallmark Channel, MaxTM, Lifetime, NFL Network, TBS, TNT, Univision, and more",
        icon: asidespectrum,
      },
    ],

    tableData: [
      {
        head: [
          "plans",
          "Starting price",
          "Channels",
          "Popular channels",
          "Max. download speeds",
          "Spectrum TV app",
          "Optional DVR",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Spectrum TV Select Signature",
              "From $59.99/mo.",
              "150+",
              "ESPN, Hallmark Channel, and more",
              "N/A",
              "Included",
              "From $13.98/mo.",
            ],
            linkPath: "#",
          },

          {
            content: [
              "2.",
              "Internet 300 Mbps + TV Select Signature",
              "From $109.98/mo.",
              "150+",
              "ESPN, CNN, BBC America",
              "Up to 300 Mbps (wireless speeds may vary)",
              "Included",
              "From $13.98/mo.",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      " Data effective as of publish date. Offers and availability may vary by location and are subject to change. See full disclaimer.",
  };
  let packageTableData = [
    {
      head: [
        "plans",
        "Starting price",
        "Channels",
        "Popular channels",
        "Max. download speeds",
        "Spectrum TV app",
        "Optional DVR",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Spectrum TV Select Signature",
            "$59.99/mo.*",
            "150+",
            "ESPN, Hallmark Channel, and more",
            ,
            "N/A",
            ,
            "Included",
            ,
            "From $13.98/mo.",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataTwo = [
    {
      head: [
        "plans",
        "Starting price",
        "Channels",
        "Popular channels",
        "Max. download speeds",
        "Spectrum TV app",
        "Optional DVR",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Spectrum TV Select Signature",
            "$59.99/mo.*",
            "150+",
            "ESPN, Hallmark Channel, and more",
            ,
            "N/A",
            ,
            "Included",
            ,
            "From $13.98/mo.",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataThree = [
    {
      head: [
        "plans",
        "Starting price",
        "Channels",
        "Popular channels",
        "Max. download speeds",
        "Spectrum TV app",
        "Optional DVR",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Spectrum TV Select Signature",
            "$59.99/mo.*",
            "150+",
            "ESPN, Hallmark Channel, and more",
            ,
            "N/A",
            ,
            "Included",
            ,
            "From $13.98/mo.",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="spectrum-tv-review">
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
          <h4>Is Spectrum TV good?</h4>
          <p>
            We recommend Spectrum TV for folks who want premium channels like
            <span className="link">
              <Link href={"#"}>MaxTM</Link>
            </span>
            (formerly HBO Max) or SHOWTIME®, and reasonably priced{" "}
            <span className="link">
              <Link href={"#"}> TV and internet bundles </Link>
            </span>
            <br />
            Spectrum’s base channel count is pretty low (150+ for $59.99/mo.)
            compared to other cable TV providers, and its DVR service isn’t
            anything to shout about. But factor in that Spectrum will buy out
            your contract up to $500◊, and we’re sufficiently impressed. We even
            gave Spectrum our Editorial Choice Award for Best Value.
          </p>
          <br />
          <h4>Spectrum TV pros and cons</h4>
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
                  <td>À la carte channel packs</td>
                </tr>
                <tr>
                  <td>Contract buyout</td>
                  <td>Confusing DVR options</td>
                </tr>
                <tr>
                  <td>All channels in HD</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>Thousands of on-demand movies and shows</td>
                  <td> </td>
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
          <Link href={"#"}>Spectrum TV deals</Link>
          <Link href={"#"}>Spectrum TV plans</Link>
          <Link href={"#"}>Spectrum TV and internet bundles</Link>
          <Link href={"#"}>Spectrum TV equipment and DVR service</Link>
          <Link href={"#"}>Spectrum TV channels</Link>
        </div>
      </div>

      <CTA
        heading={"Find out if Spectrum Tv is available in your area"}
        desc={
          "Enter your zip code below to see if Spectrum is in your town. If it is, you’ll be able to see the specific service types available to you."
        }
      />

      <div className="section spectrum-deal-and-promotions">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum TV <span> deals and promotions</span>
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
          <h4>Spectrum TV packages and pricing</h4>
          <p className="after-heading">
            Spectrum has one base English-language TV plan, Spectrum TV Select
            Signature. On the plan, you’ll get 150+ basic cable and network
            channels like ABC, ESPN, and Comedy Central. We really like Spectrum
            TV Select Signature because it costs about as much as a live TV
            streaming service during your first year, and you’ll get slightly
            more channels.
            <br />
            Spectrum TV Select Signature is Spectrum’s sole TV plan and it
            includes 150+ network and basic cable channels. But if you’re
            interested in additional premium cable channels like{" "}
            <span className="link">
              <Link href={"#"}>Max </Link>
            </span>{" "}
            ($16.00 a month) and SHOWTIME ($10.00 a month), you can add them à
            la carte to your plan during the checkout process. And remember,
            Spectrum has no-contract plans—at no extra charge, whereas other
            carriers charge a premium for that kind of freedom.
            <br />
            Keep in mind that your payment may increase by up to $25 (depending
            on your plan) in the second year. But since Spectrum has no
            contracts, you can call a Spectrum rep and request a new promotional
            rate in exchange for your continued business. There are no
            guarantees—but it’s worth a shot.
            <br />
            But if you’re interested in more premium cable channels, you’ll have
            to sit down and do a little paperwork. Unlike most cable TV
            providers, Spectrum broke up all of its channels into à la carte
            channel packs. Instead of upgrading your cable plan, you’ll
            subscribe to TV Select Signature and add on the channel packs your
            family is interested in.{" "}
          </p>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change. See full disclaimer.
          </p>
        </div>
        <div className="endnote review-endnote">
          <div className="endnote-container">
            <Image
              className="quotation-img"
              src={quotations}
              alt="quotations"
            />
            <h4>Pro tip:</h4>
            <p>
              Some Spectrum customers can get cheaper live TV with a streaming
              service called{" "}
              <span className="link">
                <Link href={"#"}> Spectrum TV Choice. </Link>
              </span>{" "}
              It doesn’t come with nearly as many cable channels, but it only
              costs $29.99 per month.
            </p>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Spectrum TV add-on packs</h4>
          <p className="after-heading">
            Once you pick a TV plan, bundling is a snap because Spectrum bundles
            have a little bit for everyone. Want premium channels included with
            your TV package? Add premium cable packs—which includes Max, NFL
            Network, and SHOWTIME—with high-speed internet. Are you a rabid
            sports fan? Get the Sports View add-on and bundle it with Spectrum
            cable TV and internet to channel surf for games while you surf the
            internet for stats and news.
            <br />
            And, unlike live TV streaming services, with Spectrum you’ll get all
            your favorite channels in crisp HD and be able to manage all your TV
            and internet activities from one account.
            <br />
            Entertainment View covers the expected bases for a mid-tier basic
            cable plan. Along with typical channels like Comedy Central and CNN,
            you’ll get additional basic cable channels like Cooking Channel and
            Disney XD with Entertainment View. At $61.99 monthly for your first
            year, the TV Select Signature and Entertainment View bundle is also
            in the same price range as other standalone plans from competitors.
            <br />
            Although you might save a little money if you’re willing to forgo
            certain channels, these savings quickly evaporate if you add more
            than a few channel packs.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Plan</th>
                  <th>Price</th>
                  <th>Popular channels</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Entertainment View </td>
                  <td>$12.00/mo. </td>
                  <td>OWN, Cooking Channel, NFL Network</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Sports View </td>
                  <td>$7.00/mo. </td>
                  <td>NFL RedZone, MLB Network </td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Latino View </td>
                  <td>$12.00/mo. </td>
                  <td>Programming from Mexico, Latin America and Spain </td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Max </td>
                  <td>$16.00/mo. </td>
                  <td>Eight HBO channels and Max </td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>SHOWTIME</td>
                  <td>$10.00/mo. </td>
                  <td>SHOWTIME, SHOWTIME On Demand </td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td>STARZ® </td>
                  <td>$9.00/mo.</td>
                  <td>STARZ, STARZ ENCORE® </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="below-table">
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change. See full disclaimer.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Spectrum bundles and pricing</h4>
          <p className="after-heading">
            Customers typically get a{" "}
            <span className="link">
              <Link href={"#"}>cable TV and internet bundle</Link>
            </span>{" "}
            for an obvious reason: it’s less work. Spectrum doesn’t offer
            discounts on bundles, so you’ll just add the price for each service
            to get your final promotional pricing.
            <br />
            Along with cable TV, these bundles will get you internet service
            with download speeds up to 300 Mbps (wireless speeds may vary), no
            data caps, a free modem, free antivirus software, and free access to
            Wi-Fi access points nationwide.
          </p>
          <PackageTable item={packageTableDataTwo} />
          <p className="below-table">
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change. See full disclaimer.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Spectrum Spanish-language TV packages and pricing</h4>
          <p className="after-heading">
            Spectrum offers one Spanish-language package, with shows from Latin
            America, Mexico, and Spain. Though the channel lineups aren’t
            completely the same, this package is a bit more affordable than its
            English-only counterpart.
          </p>
          <PackageTable item={packageTableDataThree} />
          <p className="below-table">
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change. See full disclaimer.
          </p>
        </div>
      </div>

      <div className="divider">
        <p>
          Get the channels you want. Check out our Spectrum channel lineups
          page.
        </p>
      </div>

      <div className="section equipment-and-features">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum TV <span>equipment and features</span>
          </h2>
          <p className="sect-desc">
            TBH, Spectrum’s TV equipment isn’t that great compared to other
            cable providers like Xfinity. But Spectrum TV does have a lot of
            cool features that may offset its subpar equipment for some folks.
          </p>
        </div>
      </div>

      <div className="section equipment-tv-competition">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum TV <span> vs. the competition</span>
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

      <div className="section spectrum-tv-channels">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> TV channels</span>
          </h2>
          <p className="sect-desc">
            Depending on the channels you want, you could choose a basic
            Spectrum package (Spectrum TV Select Signature has 150+ channels) or
            an add-on channel pack filled with every Disney and Nickelodeon
            channel, plus Max, NFL Network, and SHOWTIME.
            <br />
            Not sure which package has the channels you need? Compare specific
            <span className="link">
              <Link href={"#"}>Spectrum TV channel lineups</Link>
            </span>{" "}
            to see which Spectrum TV add-on is right for you and your household.
            Or read on to learn more about Spectrum sports packages, premium
            channels, and bundles.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Spectrum sports channels and packages</h4>
          <p className="after-heading">
            One of the top reasons to get cable TV is live sports. Spectrum TV
            Select Signature will get you must-have channels like ESPN and FOX
            Sports, and if you need more sports, you can always upgrade your
            Spectrum TV package with sports add-ons like FOX Soccer Plus and MLS
            Direct Kick.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span>Is Spectrum TV worth it?</span>
          </h2>
          <p className="sect-desc">
            Despite its tiny channel count, we think Spectrum TV service is
            worth it for most folks.
            <br />
            Here’s why: Spectrum gives you a lot for your money with all-HD
            channels, a wealth of on-demand content, two DVR options, and the
            Spectrum TV app. You can feel comfortable you’re getting your
            money’s worth signing up for{" "}
            <span className="link">
              <Link href={"#"}>Spectrum TV service</Link>
            </span>
          </p>
        </div>

        <div className="all-links">
          <Link href={"#"}>Sign up for xfinity</Link>
        </div>
      </div>

      <div className="section spectrum-faq">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> TV </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How much is Spectrum TV a
                month?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Spectrum standalone TV plan costs $59.99 a month. You can also
                  add additional basic cable and premium cable channel packs for
                  between $6.00 and $15.00/mo.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"How much is Spectrum TV a month?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum standalone TV plan costs $59.99 a month. You can also add
              additional basic cable and premium cable channel packs for between
              $6.00 and $15.00/mo.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What is the cheapest
                Spectrum TV plan?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Spectrum TV Select Signature is the cheapest Spectrum TV plan.
                  Spectrum TV Select Signature costs $59.99 per month and
                  includes 150+ channels.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"What is the cheapest Spectrum TV plan?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum TV Select Signature is the cheapest Spectrum TV plan.
              Spectrum TV Select Signature costs $59.99 per month and includes
              150+ channels.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What is the best Spectrum
                package?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  TV Select Signature + Internet 300 Mbps offers the best
                  <span className="link">
                    <Link href={"#"}> TV and internet from Spectrum </Link>
                  </span>
                  , starting at $109.98 a month. This bundle comes with download
                  speeds up to 300 Mbps (wireless speeds may vary) and 150+ HD
                  channels. You can also add the Entertainment View channel pack
                  for 70+ additional cable channels for $12.00/mo.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"What is the best Spectrum package?"}
            cssClass={"faq-content"}
          >
            <p>
              TV Select Signature + Internet 300 Mbps offers the best
              <span className="link">
                <Link href={"#"}> TV and internet from Spectrum </Link>
              </span>
              , starting at $109.98 a month. This bundle comes with download
              speeds up to 300 Mbps (wireless speeds may vary) and 150+ HD
              channels. You can also add the Entertainment View channel pack for
              70+ additional cable channels for $12.00/mo.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Can you get Spectrum TV
                without internet service?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  You don't have to sign up for internet to get Spectrum TV.
                  Spectrum has the TV Select Signature standalone TV plan priced
                  at $59.99 a month (for 12 months) and all 150+ channels are in
                  HD.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={"Can you get Spectrum TV without internet service?"}
            cssClass={"faq-content"}
          >
            <p>
              You don't have to sign up for internet to get Spectrum TV.
              Spectrum has the TV Select Signature standalone TV plan priced at
              $59.99 a month (for 12 months) and all 150+ channels are in HD.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>What is Spectrum On Demand?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Spectrum On Demand is a collection of movies and shows that
                  you can watch free with your Spectrum TV subscription.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"What is Spectrum On Demand?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum On Demand is a collection of movies and shows that you
              can watch free with your Spectrum TV subscription.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> Is Spectrum On Demand free?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  Yes, Spectrum On Demand is included free with your Spectrum TV
                  subscription.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"Is Spectrum On Demand free?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, Spectrum On Demand is included free with your Spectrum TV
              subscription.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(7)}>
                <span>{faq === 7 ? "-" : "+"}</span> Does Spectrum offer
                Disney+?
              </h3>

              <div className={`faq-content ${faq === 7 ? "show" : ""}`}>
                <p>
                  No, Spectrum does not offer{" "}
                  <span className="link">
                    <Link href={"#"}>Disney</Link>
                  </span>{" "}
                  +, which is a separate streaming TV service. But the Apple TV
                  device that comes with Spectrum's cloud DVR service supports
                  Disney+. So you'll still have to pay for Disney+, but you'll
                  already have a streaming device that supports it.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={"Does Spectrum offer Disney+?"}
            cssClass={"faq-content"}
          >
            <p>
              No, Spectrum does not offer{" "}
              <span className="link">
                <Link href={"#"}>Disney</Link>
              </span>{" "}
              +, which is a separate streaming TV service. But the Apple TV
              device that comes with Spectrum's cloud DVR service supports
              Disney+. So you'll still have to pay for Disney+, but you'll
              already have a streaming device that supports it.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(8)}>
                <span>{faq === 8 ? "-" : "+"}</span> Can I watch Spectrum TV
                without a cable box?
              </h3>

              <div className={`faq-content ${faq === 8 ? "show" : ""}`}>
                <p>
                  Spectrum TV customers get free access to the Spectrum TV App,
                  which enables you to use your Spectrum login credentials to
                  watch live and on-demand TV anywhere. You can watch on your
                  phone or by casting to another supported device.The app is
                  available on Samsung Smart TVs, and Xbox One, as well as the
                  Apple App Store, Google Play, and Amazon.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"8"}
            title={"Can I watch Spectrum TV without a cable box?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum TV customers get free access to the Spectrum TV App,
              which enables you to use your Spectrum login credentials to watch
              live and on-demand TV anywhere. You can watch on your phone or by
              casting to another supported device.The app is available on
              Samsung Smart TVs, and Xbox One, as well as the Apple App Store,
              Google Play, and Amazon.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(9)}>
                <span>{faq === 9 ? "-" : "+"}</span> Does Spectrum offer a
                senior discount?
              </h3>

              <div className={`faq-content ${faq === 9 ? "show" : ""}`}>
                <p>
                  Spectrum offers a senior discount through Spectrum Internet
                  Assist. The program offers affordable high-speed Internet to
                  customers aged 65 or older who currently receive Supplemental
                  Security Income and aren't already Spectrum Internet
                  customers. (You can also qualify for Spectrum Internet Assist
                  if one of your household members qualifies for the National
                  School Lunch Program (NSLP) or the Community Eligibility
                  Provision of the NSLP.)If you think you might qualify for
                  Spectrum Internet Assist, fill out an application form from
                  Spectrum. Once approved, you'll be eligible for a plan up to
                  30 Mbps (speeds may vary) for $14.99 per month for 12 month
                  that includes a free modem, free antivirus software, no data
                  caps, and no contracts. Spectrum also offers a Wi-Fi router
                  rental for an additional $5 per month. (*WiFi is an additional
                  $5 a month.)"
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"9"}
            title={"Does Spectrum offer a senior discount?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum offers a senior discount through Spectrum Internet
              Assist. The program offers affordable high-speed Internet to
              customers aged 65 or older who currently receive Supplemental
              Security Income and aren't already Spectrum Internet customers.
              (You can also qualify for Spectrum Internet Assist if one of your
              household members qualifies for the National School Lunch Program
              (NSLP) or the Community Eligibility Provision of the NSLP.)If you
              think you might qualify for Spectrum Internet Assist, fill out an
              application form from Spectrum. Once approved, you'll be eligible
              for a plan up to 30 Mbps (speeds may vary) for $14.99 per month
              for 12 month that includes a free modem, free antivirus software,
              no data caps, and no contracts. Spectrum also offers a Wi-Fi
              router rental for an additional $5 per month. (*WiFi is an
              additional $5 a month.)"
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(10)}>
                <span>{faq === 10 ? "-" : "+"}</span> What channels are included
                in Spectrum packages?
              </h3>

              <div className={`faq-content ${faq === 10 ? "show" : ""}`}>
                <p>
                  In Spectrum TV Select Signature ($59.99 a month for 12 months,
                  150+ channels), you'll get your local channels plus popular
                  cable channels like AMC, Discovery Channel, FX, Lifetime,
                  Hallmark Channel, Hallmark Movies & Mysteries, TBS, TNT, and
                  more.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"10"}
            title={"What channels are included in Spectrum packages?"}
            cssClass={"faq-content"}
          >
            <p>
              In Spectrum TV Select Signature ($59.99 a month for 12 months,
              150+ channels), you'll get your local channels plus popular cable
              channels like AMC, Discovery Channel, FX, Lifetime, Hallmark
              Channel, Hallmark Movies & Mysteries, TBS, TNT, and more.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(11)}>
                <span>{faq === 11 ? "-" : "+"}</span> Where is Spectrum
                available?
              </h3>

              <div className={`faq-content ${faq === 11 ? "show" : ""}`}>
                <p>
                  You can find Spectrum in 44 states. For a full list, check out
                  our Spectrum availability page. Or enter your zip code below
                  to see all the providers in your area.
                </p>
                <Searchbar />
              </div>
            </div>
          </div> */}
          <Accordion
            id={"11"}
            title={" Where is Spectrum available?"}
            cssClass={"faq-content"}
          >
            <p>
              You can find Spectrum in 44 states. For a full list, check out our
              Spectrum availability page. Or enter your zip code below to see
              all the providers in your area.
            </p>
            <Searchbar />
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(11)}>
                <span>{faq === 11 ? "-" : "+"}</span> Is Spectrum still owned by
                Charter?
              </h3>

              <div className={`faq-content ${faq === 11 ? "show" : ""}`}>
                <p>
                  Charter Communications uses the trade name{" "}
                  <span className="link">
                    <Link href={"#"}>Spectrum</Link>
                  </span>{" "}
                  for its TV, internet, voice, and mobile services. You may also
                  see some people refer to Spectrum as Charter Spectrum.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"12"}
            title={" Is Spectrum still owned by Charter?"}
            cssClass={"faq-content"}
          >
            <p>
              Charter Communications uses the trade name{" "}
              <span className="link">
                <Link href={"#"}>Spectrum</Link>
              </span>{" "}
              for its TV, internet, voice, and mobile services. You may also see
              some people refer to Spectrum as Charter Spectrum.
            </p>
          </Accordion>
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
            Our TV experts have spent hundreds of hours researching and testing
            Spectrum TV service in order to help you make an informed decision
            before you sign up. For more information on our process, see our
            <span className="link">
              <Link href={"#"}>How We Rank </Link>
            </span>{" "}
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>
                  {" "}
                  Spectrum TV and Internet Bundles Review{" "}
                </Link>
              </span>{" "}
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Spectrum TV Choice Review </Link>
              </span>{" "}
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Spectrum Packages for Seniors </Link>
              </span>{" "}
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> How to Watch Spectrum Originals</Link>
              </span>{" "}
            </li>
          </ul>
          <h4>Disclaimer:</h4>
          <p>
            <span className="bold">Spectrum TV Select Signature </span> :
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
          </p>
          <p>
            <span className="bold">
              {" "}
              Spectrum Internet + TV Select Signature + Voice{" "}
            </span>{" "}
            Limited time offer; subject to change; valid to qualified
            residential customers who have not subscribed to any services within
            the previous 30 days and who have no outstanding obligation to
            Charter. Spectrum TV® Select Signature promotion price is $59.99/mo;
            standard rates apply after yr. 1. Spectrum Internet® promotion price
            is $49.99/mo; standard rates apply after yr. 1. Spectrum Voice®:
            Price is $14.99/mo when bundled. Taxes, fees and surcharges
            (broadcast surcharge up to $21.00/mo) extra and subject to change
            during and after the promotional period; installation/network
            activation, equipment and additional services are extra. General
            Terms: INTERNET: Speed based on wired connection and may vary by
            address. Wireless speeds may vary. TV: TV equipment required;
            charges may apply. Channel and HD programming availability based on
            level of service. Account credentials may be required to stream some
            TV content online. HOME PHONE: Unlimited calling includes calls
            within the U.S., Canada, Mexico, Puerto Rico, Guam, the Virgin
            Islands and more. Services subject to all applicable service terms
            and conditions, subject to change. Services not available in all
            areas. Restrictions apply. Enter your address to determine
            availability. ©2022 Charter Communications.
          </p>
          <p>
            <span className="bold">
              {" "}
              Spectrum Internet + TV Select Signature{" "}
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
            determine availability. ©2022 Charter Communications
          </p>
          <p>
            <span className="bold"> Mi Plan Latino </span> Limited time offer;
            subject to change; valid to qualified residential customers who have
            not subscribed to any services within the previous 30 days and who
            have no outstanding obligation to Charter. Mi Plan Latino promotion
            price is $39.99/mo; standard rates apply after yr 1. Mi Plan Latino
            and Internet is $84.98/mo; standard rates apply after yr 1. Mi Plan
            Latino, Internet and Home Phone is $99.97/mo; standard rates apply
            after yr 1. Spectrum TV Select Signature and Latino View is
            $61.99/mo; standard rates apply after yr 1. Taxes, fees and
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
        </div>
      </div>
      {/* <Newsletter /> */}
    </div>
  );
};

export default SpectrumTvReview;
