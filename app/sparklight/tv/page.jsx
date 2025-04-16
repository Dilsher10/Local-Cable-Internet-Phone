// import React, { useState } from "react";
import "./spark-light-tv.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { sparklightNavLinks } from "../../assets/data/navLinks/sparklightNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import sparklightgirl from "../../assets/images/spark-light-tv-girl.png";
import star from "../../assets/images/star.png";
import sparklighticon from "../../assets/images/sparklight-icon.png";
import sparklight from "../../assets/images/sparklight.png";
import network from "../../assets/images/network.png";
import dotted from "../../assets/images/dotted.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Sparklight TV Review"
};

const SparkLightTv = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: sparklight,
      rating: "(3.0/5)",
      starImg: star,
      desc: "No contract, money-back guarantee",
      buttonText: "view plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: sparklightgirl,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "sparklight",
        icon: sparklighticon,
      },
      {
        subtitle: "TV Packages Price:",
        title: "$42.00–$121.75/mo.",
        icon: sparklighticon,
      },
      {
        subtitle: "Channel count:",
        title: "20–100+",
        icon: sparklighticon,
      },
    ],

    tableData: [
      {
        head: [
          "Package",
          "Price*",
          "Channel count",
          "Popular channels",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Standard Cable",
              "$121.75/mo.",
              "100 channels",
              "ESPN, E!, FXX",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "Data is as of time of post. Offers and availability may vary by location and are subject to change.",
  };

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };

  let packageTableData = [
    {
      head: ["Package", "Price*", "Channel count", "Details"],

      body: [
        {
          content: ["1.", "Standard Cable", "$121.75/mo.", "100 channels"],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataTvPackages = [
    {
      head: [
        "Package",
        "Price for first 6 mos.*",
        "   Channel count up to",
        "Details",
      ],

      body: [
        {
          content: ["1.", "Standard Cable", "$121.75/mo.", "100 channels"],
          linkPath: "#",
        },
        {
          content: ["2.", "Standard Cable", "$121.75/mo.", "100 channels"],
          linkPath: "#",
        },
        {
          content: ["3.", "Standard Cable", "$121.75/mo.", "100 channels"],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="spark-light-tv">
      {/* <SubNav links={sparklightNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading"> Sparklight TV Review</h2>
          <p className="sect-desc">
            From channels to prices, we've spent hours researching Sparklight's
            cable TV plans and here's what you need to know about them.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            Sparklight—previously known as Cable ONE—has tidy little cable TV
            packages. While Sparklight won’t box you into a yearly contract,
            that flexibility will cost you another handful of dollar bills than
            most cable companies charge.
          </p>
          <br />
          <h4>Sparklight pros & cons</h4>
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
                  <td> No annual contracts</td>
                  <td> Overpriced TV packages</td>
                </tr>
                <tr>
                  <td> 30-day money-back guarantee</td>
                  <td> Data caps that make Digital Value Pack impractical</td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    Limited-time discounts when you bundle TV with internet or
                    phone service
                  </td>
                  <td>No Viacom channels </td>
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
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>

        <div className="all-links">
          <Link href={"#"}> TV packages and prices</Link>
          <Link href={"#"}> TV + internet bundles packages and prices</Link>
          <Link href={"#"}>Equipment</Link>
          <Link href={"#"}>Deals </Link>
        </div>
      </div>

      <CTA
        heading={"Find out if Sparklight is available in your area"}
        desc={"Enter your zip code above to find out."}
      />

      <div className="section internet-bundles">
        <div className="head">
          <h2 className="sect-heading">
            Best Sparklight <span> TV package </span>
          </h2>
          <p className="sect-desc">
            The best Sparklight TV package is Standard TV. You’ll get up to 100
            popular cable channels with no annual contract—other TV providers
            would chain you up with one for a year or more. If you’re singing
            Queen’s “I Want to Break Free” out of nowhere, we think you’ll
            appreciate the flexibility here.
            <br />
            There is one catch, though: both of Sparklight’s TV plans (Economy
            and Standard) require an additional $12 Sparklight TV Plus charge,
            which includes the ability to watch on up to six screens, plus 200
            hours of DVR recording. But don’t worry, we’ve already included this
            charge in our pricing info to make it easier for ya.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          *For 24 mos. plus taxes and fees. Data effective as of post date.
          Offers and availability may vary by location and are subject to
          change.
        </p>
      </div>

      <div className="section tv-packages">
        <div className="head">
          <h2 className="sect-heading">
            Sparklight <span> TV packages and pricing </span>
          </h2>
          <p className="sect-desc">
            If you’re wondering why we listed the cheap Digital Value Pack last,
            that’s because it’s an add-on pack, not a regular Sparklight TV
            package, and it’s available only when you sign up for both Standard
            Cable and a Sparklight internet package. The Digital Value Pack is
            an online streaming service that comes with a selection of channels
            like ESPNU, Disney Junior, and Big Ten Network. But you won’t find
            local channels, ESPN, or Disney Channel here. <br />
            While the Digital Value Pack is only another $16 per month, be
            careful—because this package uses internet data, you’ll want to
            watch for Sparklight’s overage fees. Sparklight’s other little
            package, Economy Cable, is focused on local channels. It will keep
            you plugged into primetime and local news, but $54 per month is a
            pretty steep price for locally broadcast networks. You could get
            those channels with no monthly payments if you buy an HDTV antenna
            (we recommend the Mohu ReLeaf on Amazon*). <br />
            Finally, the Standard Cable plan is the way to go for awesome
            networks like ESPN, Hallmark Channel, Disney, and HGTV. But be aware
            that—even at this highest tier—Sparklight doesn’t offer Viacom
            channels like MTV and Nickelodeon. And is TV even TV without Jersey
            Shore? <br />
            . . . <br />
            Yeah, you don’t need to answer that. <br />
            These exclusions don’t make the Standard Cable package any more
            affordable. You can get a similar standard package from DISH or
            DIRECTV for about $20 per month cheaper. We suggest going that route
            if bang for your buck is your top priority. But Sparklight is the
            better option if you’re thinking of moving soon. Those satellite TV
            companies each have a two-year contract, whereas Sparklight plans
            don’t have contracts, so you can leave at any time without paying an
            early termination fee.
          </p>
        </div>
        <PackageTable item={packageTableDataTvPackages} />
        <br />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change.
        </p>
        <div className="package-table-container channels">
          <Image src={network} alt="dotted" className="mark" />
          <h4>What channels does Sparklight have?</h4>
          <p>
            Check out our Sparklight channel lineup guide to learn more about
            Sparklight’s TV plans.
          </p>
        </div>
      </div>

      <div className="section internet-bundles">
        <div className="head">
          <h2 className="sect-heading">
            Sparklight <span> TV + internet packages </span>
          </h2>
          <p className="sect-desc">
            You can save some cash when you bundle your Sparklight TV with
            internet. But be careful of Sparklight’s internet data caps, which
            might end up costing you (see our Sparklight internet review for all
            the gory details on that nonsense).
            <br />
            Sparklight also bundles TV plans with phone service. To see all your
            mix-and-match options, head over to our Sparklight bundles review.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section tv-packages">
        <div className="head">
          <h2 className="sect-heading">
            Sparklight <span>TV equipment </span>
          </h2>
          <p className="sect-desc">
            You’ll need some equipment to support your Sparklight TV plan.
            Luckily, you can rent it at an affordable price or bring your own.
            The now-required Sparklight TV Plus costs $12.00 per month, which is
            about average for DVR leasing. We recommend going with its TiVo
            whole-home option, which can record six screens at once and store up
            to 600 hours. That’s over 25 full days of TV—longer if you factor in
            the breaks you’ll need to take to eat and sleep. <br />
            But watch out—Sparklight also has an unbranded HD-DVR receiver, and
            the company doesn’t share any stats for it. That’s weirdly shady for
            our tastes, so we recommend you ask for the TiVo DVR to avoid
            getting an inferior product. Should you want to pass on a DVR
            entirely, you can get a TV modem for $10.50 per month. You’ll need
            to get one receiver for every TV—or save cash by learning a bit
            about cable splitters. <br />
            Check out our Sparklight TV review for a full breakdown of the
            provider’s TV options.
          </p>
        </div>

        <div className="package-table-container channels">
          <Image src={dotted} alt="dotted" className="mark" />
          <h4>Sparklight TV perks, cool stuff, and deals</h4>
          <p>
            Sparklight, formerly Cable ONE, doesn’t have any hot TV deals right
            now, but we’ll update this section when they do.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Sparklight tV worth it?</span>
          </h2>
          <p className="sect-desc">
            Despite its luminous name, Sparklight dulls in comparison to its
            competitors like DISH and DIRECTV. Sparklight TV prices are just way
            too high, and its channel lineups are tiny.
            <br />
            It’s not for everyone. But if you need only a few months of TV
            service to tide you over before a big move, it’s not a bad choice to
            save you from other providers’ super-long contracts.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> view plans</Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Sparklight TV </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Is Sparklight TV the same
                as Cable ONE TV?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  You nailed it—Sparklight TV is the new name for Cable ONE TV.
                  The company made the switch mid-2019.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Is Sparklight TV the same as Cable ONE TV?"}
            cssClass={"faq-content"}
          >
            <p>
              You nailed it—Sparklight TV is the new name for Cable ONE TV. The
              company made the switch mid-2019.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does Sparklight TV require
                a contract?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  No, Sparklight TV plans are all contract-free, which makes it
                  a good choice if you need TV service for only a short time.
                  You can cancel Sparklight service at any time without facing a
                  high-price early termination fee.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does Sparklight TV require a contract?"}
            cssClass={"faq-content"}
          >
            <p>
              No, Sparklight TV plans are all contract-free, which makes it a
              good choice if you need TV service for only a short time. You can
              cancel Sparklight service at any time without facing a high-price
              early termination fee.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Can I watch Sparklight
                online?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  You can watch Sparklight online via Sparklight TV Everywhere,
                  which is Sparklight’s on-the-go TV service. It has over 60
                  channels and comes with the Standard Cable package.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Can I watch Sparklight online?"}
            cssClass={"faq-content"}
          >
            <p>
              You can watch Sparklight online via Sparklight TV Everywhere,
              which is Sparklight’s on-the-go TV service. It has over 60
              channels and comes with the Standard Cable package.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What are Sparklight's cable
                packages?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Sparklight’s cable TV packages are as follows: Economy Cable
                  ($54.00/mo., up to 20 channels) Standard Cable ($121.75/mo.,
                  up to 100 channels) We don’t recommend Economy Cable, which is
                  a basic cable package. You can get the same 20 local
                  channels—plus a variety of subchannels—with an over-the-air
                  (OTA) antenna. And the best part is that you can buy the
                  antenna for only $30–$60, and that’s way, way better than
                  paying $54.00 a month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" What are Sparklight's cable packages?"}
            cssClass={"faq-content"}
          >
            <p>
              Sparklight’s cable TV packages are as follows: Economy Cable
              ($54.00/mo., up to 20 channels) Standard Cable ($121.75/mo., up to
              100 channels) We don’t recommend Economy Cable, which is a basic
              cable package. You can get the same 20 local channels—plus a
              variety of subchannels—with an over-the-air (OTA) antenna. And the
              best part is that you can buy the antenna for only $30–$60, and
              that’s way, way better than paying $54.00 a month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> What channels does
                Sparklight offer?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  We recommend Sparklight’s Standard TV plan ($121.75 a month),
                  which has up to 100 channels, including all your local
                  channels plus popular channels like CNN, Discovery Channel,
                  Disney Channel, ESPN, ESPN2, Fox News, Food Network, Hallmark
                  Channel, HGTV, HISTORY, TNT, and USA. Beware, though. If you
                  want MTV, Nickelodeon, and other Viacom channels, Sparklight
                  doesn’t carry them. To see more Sparklight channels, read our
                  Sparklight channel guide.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" What channels does Sparklight offer?"}
            cssClass={"faq-content"}
          >
            <p>
              We recommend Sparklight’s Standard TV plan ($121.75 a month),
              which has up to 100 channels, including all your local channels
              plus popular channels like CNN, Discovery Channel, Disney Channel,
              ESPN, ESPN2, Fox News, Food Network, Hallmark Channel, HGTV,
              HISTORY, TNT, and USA. Beware, though. If you want MTV,
              Nickelodeon, and other Viacom channels, Sparklight doesn’t carry
              them. To see more Sparklight channels, read our Sparklight channel
              guide.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>Does Sparklight have
                Netflix?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  Sparklight doesn’t offer Netflix directly—but if you select
                  the TiVo DVR when you order Sparklight TV service, you can use
                  it to watch your Netflix subscription (sold separately).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"Does Sparklight have Netflix?"}
            cssClass={"faq-content"}
          >
            <p>
              Sparklight doesn’t offer Netflix directly—but if you select the
              TiVo DVR when you order Sparklight TV service, you can use it to
              watch your Netflix subscription (sold separately).
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote page-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Methodology:</h4>
          <p>
            To find out how Sparklight stacked up against the competition, we
            spent more than 16 hours breaking down Sparklight’s plans in areas
            including cost, internet speeds, and channel lineups. We also used
            our annual internet customer satisfaction and TV customer
            satisfaction surveys to see what real Sparklight internet and TV
            customers thought about the ISP.
            <br />
            To learn more about our research and testing, check out our
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
          </p>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Sparklight Overview | Sparklight Internet | Sparklight Voice
          | Sparklight Channel lineup | Sparklight Customer service
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default SparkLightTv;
