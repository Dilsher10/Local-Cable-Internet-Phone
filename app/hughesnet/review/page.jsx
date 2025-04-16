// import React, { useState } from "react";
import "./hughesnet-review.scss";
import hughesNet from "../../assets/images/highes.png";
import hughesgirl from "../../assets/images/highes-girl.png";
import hughesneticon from "../../assets/images/highes-icon.png";
import { GoArrowUpRight } from "react-icons/go";
// import { hughesnetNavLinks } from "../../assets/data/navLinks/hughesnetNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
// import SubNav from "../../components/sub-nav/SubNav";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import star from "../../assets/images/star.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import PackageTable from "../../components/package-table/PackageTable";
import dotted from "../../assets/images/dotted.png";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "HughesNet Internet Review: Plans, Pricing, And More"
};

const HughesnetReview = () => {
  //   const [faq, setFaq] = useState();

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
      logo: hughesNet,
      rating: "(3.5/5)",
      starImg: star,
      desc: "Inexpensive satellite internet",
      buttonText: "Compare Plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: hughesgirl,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "HughesNet",
        icon: hughesneticon,
      },
      {
        subtitle: "Internet speed:",
        title: "15–50 Mbps",
        icon: hughesneticon,
      },
      {
        subtitle: "Price:",
        title: "$44.99–$144.99/mo.",
        icon: hughesneticon,
      },
      {
        subtitle: "Data Cap:",
        title: "15–200 GB",
        icon: hughesneticon,
      },
    ],

    tableData: [
      {
        head: [
          "Recommended plans",
          "Price*",
          "Download speeds Up to",
          "Data cap",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              " Best budget option 50 GB",
              "$44.99/mo.",
              "25 Mbps",
              "50 GB",
            ],
            linkPath: "#",
          },

          {
            content: [
              "2.",
              "Best performance option 200 GB",
              "$144.99/mo.",
              "50 Mbps",
              "200 GB",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      " * Requires 2-yr. contract. Data effective as of post date. Offers and availability vary by location and are subject to change. Monthly Fee reflects the applied $5 savings for ACH enrollment. Enroll before the 2nd billing cycle for continued savings.",
  };

  return (
    <div className="hughesnet-review">
      {/* <SubNav links={hughesnetNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            HughesNet Internet Review: Plans, Pricing, And More
          </h2>
          <p className="sect-desc">
            HughesNet isn’t the fastest satellite internet, but it is the
            cheapest. For light internet users, that might be enough.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationIcon} alt="quotations" />
          <h4> Is HughesNet satellite internet good?</h4>
          <p>
            Satellite internet isn’t very good in comparison to fiber, cable, or
            even DSL internet. But for customers living in rural areas of the
            United States, satellite internet is often the only option. Between
            the main three satellite providers, Viasat, HughesNet, and Starlink,
            HughesNet is the cheapest. For customers seeking high speeds or
            generous data caps, this isn’t a great option. <br />
            Hughesnet is good enough if you’re looking for minimal internet
            usage—emailing, Instagramming, and the occasional YouTube dive—at a
            cheap price. Unfortunately, its data caps aren’t much more forgiving
            than your phone’s wireless data plan.
          </p>
          <h4>HughesNet pros and cons</h4>

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
                  <td>Lower cost than Viasat </td>
                  <td>Low data caps </td>
                </tr>
                <tr>
                  <td>Simple contracts and pricing </td>
                  <td>Low download speeds </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="section important-links">
        <div className="head">
          <h2 className="sect-heading">
            Jump to <span>articles</span>
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
          <Link href={"#"}> Internet plans and packages</Link>
          <Link href={"#"}> Deals and promotions</Link>
          <Link href={"#"}> Equipment</Link>
          <Link href={"#"}> Satellite TV</Link>
        </div>
      </div>

      <CTA
        heading={"Find out if Hughesnet is available in your area"}
        desc={"Enter your zip code above to find out."}
      />

      <div className="section internet-plans-and-pricing">
        <div className="head">
          <h2 className="sect-heading">
            HughesNet <span> internet plans and pricing</span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data effective as of post date. Offers and availability vary by
          location and are subject to change. <br />
          *Monthly Fee reflects the applied $5 savings for ACH enrollment.
          Enroll before the 2nd billing cycle for continued savings.
        </p>
        <div className="package-table-container channels">
          <h4>HughesNet internet speeds</h4>
          <p className="after-heading">
            HughesNet’s internet speed options only run from 15–50 Mbps. These
            speeds aren’t totally unusable, as you’ll still be able to scroll
            TikTok or watch Netflix videos. But you’ll run into slow internet
            problems if more than a few people want to watch YouTube videos and
            download files at the same time. <br />
            Check out our internet speeds guide to learn how internet speeds
            relate to your internet needs.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>HughesNet data limits</h4>
          <p className="after-heading">
            HughesNet’s download speeds remain low as the prices and data
            allowances rise—one more exponentially than the other,
            unfortunately. Why the high price? Well, with satellite internet,
            data is king. You’ll either pay for more of it or be slowed down in
            speed (down to 1–3 Mbps) for going over the limit on a cheaper plan.{" "}
            <br />
            You won’t be cut off or charged an overage fee, however—it’s a “soft
            data limit.” Sounds nicer than “throttled internet,” doesn’t it?{" "}
            <br />
            To get around that limit on any HughesNet plan, you can take
            advantage of HughesNet’s Bonus Zone, which is essentially 50 extra
            GB of data free between the hours of 2–5 a.m. A good time to get
            your graveyard shift gaming in. <br />
            If you feel like splurging, HughesNet’s 100 GB plan will give you a
            little more headroom on data—but still less than half as much as
            Viasat’s fattest option, which allows up to 300 GB (and 100 Mbps of
            download speed). For larger, more internet-hungry households, we’d
            recommend looking into Viasat.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>HughesNet internet equipment</h4>
          <p className="after-heading">
            HughesNet internet service comes with a satellite dish and a gateway
            (a fancy term for a basic combo modem and Wi-Fi router) which
            require pro installation. Sorry, DIYers. <br />
            A HughesNet installer will first mount a satellite dish onto the
            roof or side of your house. Then, the installer will run a cable
            from the dish to the gateway inside your home. <br />
            You have the option to lease the gear at $14.99 a month for the
            duration of your two-year contract, as long as you pass a credit
            check. If you’d rather, you can buy your HughesNet equipment
            outright for $449.99. There’s a $99 activation fee if you go the
            lease route; if you purchase the equipment, the activation fee is
            waived. <br />
            Neither option saves you much money, but if you’re planning on
            sticking with HughesNet for longer than the two-year contract, you
            might as well buy the equipment.
          </p>
        </div>
      </div>

      <div className="section blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"></p>
        </div>
        <div className="package-table-container channels">
          <Image src={dotted} alt="mark" className="mark" />
          <h4>HughesNet deals and promotions</h4>
          <br />
          <p>
            HughesNet regularly offers great internet deals for new customers
            (see full disclaimer):
          </p>
          <br />
          <ul>
            <li>
              New customers get up to $25.00 off their 50 GB, 100 GB, or 200 GB
              monthly internet plan for the first six or twelve months
            </li>
            <li>Get a $100 free prepaid gift card</li>
            <li>Free professional installation</li>
            <li>Discounts on HughesNet Voice</li>
          </ul>
          <br />
          <p>
            ughesNet customers also receive $5 in monthly savings if they change
            their automatic payment method from a credit card to ACH (bank
            account) enrollment. <br />
            If you’re interested in current deals from major internet providers,
            check out our monthly deals roundup
          </p>
        </div>
      </div>

      <div className="section internet-plus-phone-plans-and-prices">
        <div className="head">
          <h2 className="sect-heading">
            HughesNet <span> internet plus phone plans and prices</span>
          </h2>
          <p className="sect-desc">
            HughesNet Voice offers unlimited local and long-distance calling in
            the US and Canada, as well as the usual digital landline phone
            features like caller ID and voicemail. It’s not exactly a bargain at
            an additional $29.95 a month on top of your internet bill—and even
            less so if you add international calling, which runs an extra $9.95
            a month. But, phone calls don’t count against your data allowance,
            so there’s that.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          * Requires 2-yr. contract. Data effective as of post date. Offers and
          availability vary by location and are subject to change. Monthly Fee
          reflects the applied $5 savings for ACH enrollment. Enroll before the
          2nd billing cycle for continued savings.
        </p>
      </div>

      <div className="section internet-Satellite-tv-providers">
        <div className="head">
          <h2 className="sect-heading">
            HughesNet satellite TV; <span> Satellite TV providers</span>
          </h2>
          <p className="sect-desc">
            HughesNet doesn’t offer satellite TV, so you won’t be able to find a
            deal by bundling. But if you’re looking for TV service on the side,
            try DISH. Are you a major sports fan? DIRECTV might be more your
            speed. For more information, head over to our Best Satellite TV
            review.
          </p>
        </div>
        <PackageTable item={packageTableData} />
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is HughesNet worth it?</span>
          </h2>
          <p className="sect-desc">
            Truth bomb: satellite internet isn’t great. Fiber, cable, and DSL
            are far better options where you can get them; in performance,
            satellite bests only dial-up (which still exists, BTW). That said,
            casual internet users could easily get by with HughesNet’s low
            download speeds and data caps. Three of its four plans can handle
            basic internet tasks and light streaming and gaming without much
            satellite strain. <br />
            If you’re anticipating heavier satellite internet usage, however,
            check out the more expensive Viasat.
          </p>
        </div>

        <div className="all-links">
          <Link href={"#"}>get hughesNet</Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>HughesNet</span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Does HughesNet offer
                unlimited data plans?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  HughesNet doesn’t have any internet plans with unlimited data;
                  its highest data allowance is 200 GB a month. <br />
                  You can stay on top of what you do get with the HughesNet app,
                  which tracks your data usage, as well as buy extra data tokens
                  (in 3, 5, 10, or 25 MB increments). Night owls can also enjoy
                  the free 50 GB Bonus Zone between 2–5 a.m.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Does HughesNet offer unlimited data plans?"}
            cssClass={"faq-content"}
          >
            <p>
              HughesNet doesn’t have any internet plans with unlimited data; its
              highest data allowance is 200 GB a month. <br />
              You can stay on top of what you do get with the HughesNet app,
              which tracks your data usage, as well as buy extra data tokens (in
              3, 5, 10, or 25 MB increments). Night owls can also enjoy the free
              50 GB Bonus Zone between 2–5 a.m.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Which is better: Viasat or
                HughesNet?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Viasat beats out HughesNet plans and pricing—Viasat is faster
                  and gives you more bang for your buck. But if you’re not
                  worried about going over your data cap, and you want to save a
                  few bucks, HughesNet has cheaper plans that may work for you.{" "}
                  <br />
                  To learn more about how Viasat and HughesNet compare, check
                  out our take on the best satellite internet providers.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Which is better: Viasat or HughesNet?"}
            cssClass={"faq-content"}
          >
            <p>
              Viasat beats out HughesNet plans and pricing—Viasat is faster and
              gives you more bang for your buck. But if you’re not worried about
              going over your data cap, and you want to save a few bucks,
              HughesNet has cheaper plans that may work for you. <br />
              To learn more about how Viasat and HughesNet compare, check out
              our take on the best satellite internet providers.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Is there HughesNet TV?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  HughesNet offers only internet and phone plans. If you’re
                  interested in satellite TV, check out DISH or DIRECTV.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Is there HughesNet TV?"}
            cssClass={"faq-content"}
          >
            <p>
              HughesNet offers only internet and phone plans. If you’re
              interested in satellite TV, check out DISH or DIRECTV.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Is HughesNet Gen5 fast
                enough for Netflix?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  With 15–50 Mbps download speeds, HughesNet is fast enough for
                  Netflix and other streaming services, but you’ll burn through
                  your HughesNet data allowance quickly. HughesNet’s biggest
                  data plan of 100 GB can get you up to 500 hours of streaming a
                  month—but that’s only if you stream at the lowest quality and
                  don’t use the internet for anything else.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Is HughesNet Gen5 fast enough for Netflix?"}
            cssClass={"faq-content"}
          >
            <p>
              With 15–50 Mbps download speeds, HughesNet is fast enough for
              Netflix and other streaming services, but you’ll burn through your
              HughesNet data allowance quickly. HughesNet’s biggest data plan of
              100 GB can get you up to 500 hours of streaming a month—but that’s
              only if you stream at the lowest quality and don’t use the
              internet for anything else.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>Is HughesNet good for
                streaming TV?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Any of HughesNet’s plans will support streaming TV, but only
                  so much of it. If you want to stream on your satellite
                  internet, Viasat is the better option. Check out our guide to
                  streaming on satellite internet for details on how many hours
                  of SD streaming you can enjoy with each Viasat plan.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"Is HughesNet good for streaming TV?"}
            cssClass={"faq-content"}
          >
            <p>
              Any of HughesNet’s plans will support streaming TV, but only so
              much of it. If you want to stream on your satellite internet,
              Viasat is the better option. Check out our guide to streaming on
              satellite internet for details on how many hours of SD streaming
              you can enjoy with each Viasat plan.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> Is HughesNet good for
                gaming?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  Due to latency—the time it takes the data to travel into space
                  to a satellite and back—competitive online games over
                  satellite internet with multiple players are usually a laggy
                  nightmare. Check out our guide to online gaming to learn more.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" Is HughesNet good for gaming?"}
            cssClass={"faq-content"}
          >
            <p>
              Due to latency—the time it takes the data to travel into space to
              a satellite and back—competitive online games over satellite
              internet with multiple players are usually a laggy nightmare.
              Check out our guide to online gaming to learn more.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote page-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationIcon}
            alt="quotations"
          />
          <h4>Methodology:</h4>
          <p>
            Our experts compared HughesNet plans and pricing to satellite
            internet competitors and other internet technologies on the market.
            <br />
            Our editorial ratings focus on the bang for your buck, reliability,
            features, and customer satisfaction of internet services. We also
            keep an eye on equipment add-on prices and any deals you might find.
            To learn more, check out{" "}
            <span className="link">
              <Link href={"/"}>How We Rank.</Link>
            </span>
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              <span className="link">
                <Link href={"#"}> Best Satellite Internet Providers x </Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"#"}> x Internet Provider Data Caps Guide x </Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"#"}>Best Rural Internet Providers </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default HughesnetReview;
