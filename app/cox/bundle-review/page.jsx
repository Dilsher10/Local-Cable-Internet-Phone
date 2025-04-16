// import React, { useState } from "react";
import "./cox-bundle-review.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { coxNavLinks } from "../../assets/data/navLinks/coxNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import coxbundlereviewgirl from "../../assets/images/coxbundlereviewgirl.png";
import star from "../../assets/images/star.png";
import coxmark from "../../assets/images/coxmark.png";
import coxlogo from "../../assets/images/coxlogo.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import dotted from "../../assets/images/dotted.png";
// import Newsletter from "../../components/newsletter/Newsletter";
import PackageTable from "../../components/package-table/PackageTable";

export const metadata = {
  title: "Cox Communications Review 2024: Cable TV And Internet Plans"
};

const CoxBundleReview = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: coxlogo,
      rating: "(3.95/5)",
      starImg: star,
      desc: "Excellent equipment",
      buttonText: "compare packages",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: coxbundlereviewgirl,

    cardsStrip: [
      {
        subtitle: "Internet speeds:",
        title: "100–2,000 Mbps",
        icon: coxmark,
      },
      {
        subtitle: "Channel count:",
        title: "75–250+",
        icon: coxmark,
      },
      {
        subtitle: "Price:",
        title: "Starting at $102.99/mo.",
        icon: coxmark,
      },
      {
        subtitle: "Contract:",
        title: "Varies",
        icon: coxmark,
      },
    ],

    tableData: [
      {
        head: [
          "Top bundles ",
          "Price* ",
          "Download speeds up to ",
          " Channel count",
          "Home phone ",
          " ",
        ],

        body: [
          {
            content: [
              "1. ",
              "Go Faster + Contour TV Preferred ",
              "$168.99/mo. ",
              "250 Mbps ",
              "170+ ",
              "N/A ",
            ],
            linkPath: "# ",
          },
          {
            content: [
              "2. ",
              "Go Even Faster + Contour TV Preferred + Voice Preferred",
              "$208.99/mo.",
              "500 Mbps",
              "170+ ",
              "Voice Preferred",
            ],
            linkPath: "# ",
          },
          {
            content: [
              "3. ",
              "Go Super Fast + Contour TV Ultimate ",
              "$248.99/mo.",
              "1,000 Mbps",
              "250+",
              "Voice Preferred",
            ],
            linkPath: "# ",
          },
        ],
      },
    ],

    bottomDesc:
      "Data effective as of post date. Offers and availability may vary by location and are subject to change.",
  };
  let packageTableDataBundles = [
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
            "Go Faster + Contour TV Preferred",
            "$168.99/mo.*",
            "250 Mbps",
            "170+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Go Even Faster + Contour TV Preferred",
            "$188.99/mo.**",
            "500 Mbps",
            "170+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Go Super Fast + Contour TV Preferred",
            "$198.99/mo.†",
            "1,000 Mbps",
            "170+",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataBundlesTv = [
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
            "Go Faster + Contour TV Preferred",
            "$168.99/mo.*",
            "250 Mbps",
            "170+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Go Even Faster + Contour TV Preferred",
            "$188.99/mo.**",
            "500 Mbps",
            "170+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Go Super Fast + Contour TV Preferred",
            "$198.99/mo.†",
            "1,000 Mbps",
            "170+",
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
    <div className="cox-bundle-review">
      {/* <SubNav links={coxNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Cox Communications Review 2024: Cable TV And Internet Plans
          </h2>
          <p className="sect-desc">
            Cox piles on the bundles, but cheap, fast internet plans are its
            strong suit. We researched the best Cox plans so you don't have to.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-cox-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Are Cox TV and internet bundles good?</h4>
          <p>
            In general, we don’t recommend Cox bundles for most folks. While
            Cox’s internet and phone service are good-to-excellent across its
            various pricing tiers, its cable TV service is just adequate (unless
            you buy the most expensive plan available, which is very expensive
            <br />
            That said, Cox does offer a bundle discount starting at around $10
            per month for most plans and features the convenience of a single
            bill from one provider.
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
                  <td>Wide variety of bundling options</td>
                  <td>So-so TV service</td>
                </tr>
                <tr>
                  <td>Good-to-excellent internet and phone service</td>
                  <td>12–24 mo. contracts depending on the plan</td>
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
          <Link href={"#"}>Deals and promotions </Link>
          <Link href={"#"}>Internet and TV bundles</Link>
          <Link href={"#"}>Internet, TV, and phone bundles</Link>
        </div>
      </div>

      <CTA
        heading={"Find out if Cox bundles are available in your area"}
        desc={"Enter your zip code below to find out!"}
      />

      <div className="section cox-blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"></p>
        </div>
        <div className="package-table-container channels">
          <Image src={dotted} alt="mark" className="mark" />
          <h4>Cox bundle deals</h4>
          <br />
          <p>
            Cox does offer a small bundle discount on most plans, and most Cox
            cable bundles include free pro installation with the listed price.
            <br />
            Keep in mind that Cox does periodically offer
            <span className="link">
              <Link href={"#"}> other kinds of deals </Link>
            </span>{" "}
            if you’re looking for some freebies.
          </p>
        </div>
      </div>

      <div className="section cox-internet-and-tv-bundles">
        <div className="head">
          <h2 className="sect-heading">
            Cox <span> TV and internet bundle </span> plans and prices
          </h2>
          <p className="sect-desc">
            You can bundle any Cox TV and Cox internet plan, so we listed only a
            few key ones above to cut down on your eye strain. When push comes
            to shove, though, the bundles Cox offers are on the pricier side of
            things. If it still doesn’t meet your needs—or your budget—we say
            skip ‘em and go with a standalone Cox internet package. Likewise,
            top competitors like Spectrum and Xfinity offer cheaper plans with
            more popular channels and better internet download speeds if you
            still have your heart set on a bundle.
            <br />
            But if we had to choose a favorite Cox bundle, we’d go with Go Super
            Fast + Contour TV Preferred because it delivers fast internet speeds
            as well as a decent amount of popular cable channels. We tested this
            bundle for nine months, so we can attest to its rapid speed. All of
            our content was delivered quickly. Cox, like most cable TV services,
            has outages sporadically, but we were never offline for too long
            over the course of our testing. We also dug the Contour TV Preferred
            channel lineup. It wasn’t loaded with premium channels, but we got a
            mix of cable channels that we liked, including IFC, AMC, and FXX.
            <br />
            The price tag isn’t a cheap one. If you can’t swing it, we recommend
            getting a Cox standalone internet package and then signing up for a
            live TV streaming service to save money over convenience.
          </p>
        </div>
        <PackageTable item={packageTableDataBundles} />
        <br />
        <p className="below-table">
          *for 12 mos. No annual contract. **No annual contract or cancellation
          fees. †for 12 mos. w/ 1-yr. term agreement. Data effective as of post
          date. Offers and availability may vary by location and are subject to
          change.
        </p>
      </div>

      <div className="section cox-internet-tv-and-phone-bundles">
        <div className="head">
          <h2 className="sect-heading">
            Cox <span> internet, TV, and phone </span> packages and prices
          </h2>
          <p className="sect-desc">
            Home phone service isn’t for everyone anymore, but it’s essential
            for those who aren’t into cell phones but want to still stay
            connected to family and friends.
            <br />
            With a Cox internet, TV, and phone bundle, you’ll pay just $20.00
            more a month for unlimited calls within the US, Canada, and Mexico.
            <br />
            Again, Cox bundles aren’t the best bang for your buck compared to
            the competition. But if you’re looking to splurge, Go Even Faster +
            Contour TV Preferred + Voice Preferred at $208.99 a month isn’t a
            bad deal for heavy internet multitaskers and demanding TV watchers
            who want a digital home phone line.
          </p>
        </div>
        <PackageTable item={packageTableDataBundlesTv} />
        <br />
        <p className="below-table">
          *No annual contract or cancellation fees. **for 12 mos. No annual
          contract. † for 12 mos. w/ 1-yr. term agreement. Data effective as of
          post date. Offers and availability may vary by location and are
          subject to change.
        </p>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Are Cox TV and internet bundles worth it? </span>
          </h2>
          <p className="sect-desc">
            There’s not a whole lot of options when it comes to Cox bundles. And
            the Cox bundle packages it does offer are pretty darn expensive.
            <br />
            If you’re trying to keep costs down, we’d suggest getting a
            standalone internet plan and either streaming your TV with a
            separate service or buying an antenna (or both). Cox’s cheaper TV
            plans don’t bring much in the way of value to the bundle solution.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>check availability</Link>
        </div>
      </div>

      <div className="section cox-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Cox bundles </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What is the best Cox
                bundle?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  While Cox prices are high, its bundles game is strong. Whether
                  you’re packaging cable and internet or those two services plus
                  phone, there are options aplenty.
                  <br />
                  If you’re going to combine all three service options, the Go
                  Super Fast + Contour TV Preferred + Voice Preferred is the one
                  we recommend. This package is $218.99 a month—sometimes it’s
                  offered at a promotional rate so be sure to ask about deals
                  and promotions before ordering.
                  <br />
                  The fast download speeds included in this bundle—up to 1,000
                  Mbps—are great for a multi-user household. Run a nearly
                  unlimited amount of devices simultaneously without worrying
                  that they’ll slow the others down. TV watchers will appreciate
                  more than 170 TV channels that come with the package, with
                  favorites like ESPN, FXX, and Sundance.
                  <br />
                  View the Cox bundles options to determine which best suits
                  your needs.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"What is the best Cox bundle?"}
            cssClass={"faq-content"}
          >
            <p>
              While Cox prices are high, its bundles game is strong. Whether
              you’re packaging cable and internet or those two services plus
              phone, there are options aplenty.
              <br />
              If you’re going to combine all three service options, the Go Super
              Fast + Contour TV Preferred + Voice Preferred is the one we
              recommend. This package is $218.99 a month—sometimes it’s offered
              at a promotional rate so be sure to ask about deals and promotions
              before ordering.
              <br />
              The fast download speeds included in this bundle—up to 1,000
              Mbps—are great for a multi-user household. Run a nearly unlimited
              amount of devices simultaneously without worrying that they’ll
              slow the others down. TV watchers will appreciate more than 170 TV
              channels that come with the package, with favorites like ESPN,
              FXX, and Sundance.
              <br />
              View the Cox bundles options to determine which best suits your
              needs.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How much is Cox internet
                and cable per month?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Cox internet and cable TV packages start at $102.99 a month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"How much is Cox internet and cable per month?"}
            cssClass={"faq-content"}
          >
            <p>Cox internet and cable TV packages start at $102.99 a month.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Do I get a better deal by
                ordering internet, TV, and phone together?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  When you bundle Cox cable TV, internet, and phone together,
                  you basically get your phone service free. If you want a home
                  phone on hand for emergencies, Cox bundles are an affordable
                  solution. View Cox bundle plans to see what fits your needs
                  and budget.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"Do I get a better deal by ordering internet, TV, and phone tog"}
            cssClass={"faq-content"}
          >
            <p>
              When you bundle Cox cable TV, internet, and phone together, you
              basically get your phone service free. If you want a home phone on
              hand for emergencies, Cox bundles are an affordable solution. View
              Cox bundle plans to see what fits your needs and budget.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does Cox have a senior
                discount?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Cox doesn’t currently have any cable TV or internet discounts
                  for seniors. Its TV Starter package is $53 a month. It doesn’t
                  include premium channels but it does get you connected to
                  local stations, shopping networks, and more than 50 music
                  channels.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={"Does Cox have a senior discount?"}
            cssClass={"faq-content"}
          >
            <p>
              Cox doesn’t currently have any cable TV or internet discounts for
              seniors. Its TV Starter package is $53 a month. It doesn’t include
              premium channels but it does get you connected to local stations,
              shopping networks, and more than 50 music channels.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>Does Cox offer home security
                services?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Cox offers Homelife security and smart-home automation in a
                  combo package for $54.99 a month, or smart-home automation
                  alone for $29.99 a month. On some internet bundles, smart-home
                  automation can be added for an extra $10 a month. Home
                  security has to be added separately, and there’s no bundle
                  discount.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"Does Cox offer home security services?"}
            cssClass={"faq-content"}
          >
            <p>
              Cox offers Homelife security and smart-home automation in a combo
              package for $54.99 a month, or smart-home automation alone for
              $29.99 a month. On some internet bundles, smart-home automation
              can be added for an extra $10 a month. Home security has to be
              added separately, and there’s no bundle discount.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>Is Cox internet service DSL,
                cable, or fiber?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  Like its TV service, Cox residential internet is carried by
                  coaxial cable, which is much faster than DSL but slightly
                  slower than fiber. Cox does offer fiber internet service in
                  some areas of the US, but it’s available only to professionals
                  through Cox Business.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"Is Cox internet service DSL, cable, or fiber?"}
            cssClass={"faq-content"}
          >
            <p>
              Like its TV service, Cox residential internet is carried by
              coaxial cable, which is much faster than DSL but slightly slower
              than fiber. Cox does offer fiber internet service in some areas of
              the US, but it’s available only to professionals through Cox
              Business.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(7)}>
                <span>{faq === 7 ? "-" : "+"}</span>Do I have to sign Cox's
                service agreement?
              </h3>

              <div className={`faq-content ${faq === 7 ? "show" : ""}`}>
                <p>
                  Cox’s service agreements, which lock in a price for 12 months,
                  aren’t mandatory to sign up for service. You can opt out of
                  the agreement at checkout, but doing so will add an extra $10
                  to your monthly bill. If you’re not planning on staying with
                  Cox for long, it might be worth skipping the agreement.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={"Do I have to sign Cox's service agreement?"}
            cssClass={"faq-content"}
          >
            <p>
              Cox’s service agreements, which lock in a price for 12 months,
              aren’t mandatory to sign up for service. You can opt out of the
              agreement at checkout, but doing so will add an extra $10 to your
              monthly bill. If you’re not planning on staying with Cox for long,
              it might be worth skipping the agreement.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(8)}>
                <span>{faq === 8 ? "-" : "+"}</span>What is the cheapest Cox TV
                package?
              </h3>

              <div className={`faq-content ${faq === 8 ? "show" : ""}`}>
                <p>
                  Cox’s TV Starter package is its cheapest option but there are
                  other ways to spend less money and get what this one gives
                  you. It’s focused on local channels, so you can connect to
                  your local ABC, CBS, NBC, PBS, and FOX affiliate networks.
                  HSN, QVC, and Daystar are also part of the channel mix. The
                  bulk of the channels remaining are music listening stations.
                  <br />
                  If local channels are your main focus when it comes to TV
                  viewing, an over-the-air antenna will get you what you need
                  with a one-time purchase rather than a monthly subscription.
                  <br />
                  Cox’s next step up is the Contour TV Preferred package at $98
                  a month with more than 140 channels. We have researched Cox TV
                  packages and bundles so that you can sink into your sofa to
                  view just what you want.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"8"}
            title={"What is the cheapest Cox TV package?"}
            cssClass={"faq-content"}
          >
            <p>
              Cox’s TV Starter package is its cheapest option but there are
              other ways to spend less money and get what this one gives you.
              It’s focused on local channels, so you can connect to your local
              ABC, CBS, NBC, PBS, and FOX affiliate networks. HSN, QVC, and
              Daystar are also part of the channel mix. The bulk of the channels
              remaining are music listening stations.
              <br />
              If local channels are your main focus when it comes to TV viewing,
              an over-the-air antenna will get you what you need with a one-time
              purchase rather than a monthly subscription.
              <br />
              Cox’s next step up is the Contour TV Preferred package at $98 a
              month with more than 140 channels. We have researched Cox TV
              packages and bundles so that you can sink into your sofa to view
              just what you want.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(9)}>
                <span>{faq === 9 ? "-" : "+"}</span>How do I get the best deal
                from Cox?
              </h3>

              <div className={`faq-content ${faq === 9 ? "show" : ""}`}>
                <p>
                  New or existing customers can call a Cox representative at
                  1-855-472-4577 and ask them directly about any and all
                  opportunities for saving money.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"9"}
            title={"How do I get the best deal from Cox?"}
            cssClass={"faq-content"}
          >
            <p>
              New or existing customers can call a Cox representative at
              1-855-472-4577 and ask them directly about any and all
              opportunities for saving money.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(10)}>
                <span>{faq === 10 ? "-" : "+"}</span> Can I watch Cox DVR
                recordings on my phone?
              </h3>

              <div className={`faq-content ${faq === 10 ? "show" : ""}`}>
                <p>
                  The Cox Contour app is available for iOS and Android users. As
                  a subscriber, you can log in to your account and access your
                  DVR recordings. Keep in mind that if you’re watching live TV
                  on a mobile device, the app offers a slightly limited version
                  of your subscription — meaning some channels aren’t available
                  via the mobile app.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"10"}
            title={" Can I watch Cox DVR recordings on my phone?"}
            cssClass={"faq-content"}
          >
            <p>
              The Cox Contour app is available for iOS and Android users. As a
              subscriber, you can log in to your account and access your DVR
              recordings. Keep in mind that if you’re watching live TV on a
              mobile device, the app offers a slightly limited version of your
              subscription — meaning some channels aren’t available via the
              mobile app.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Cox Overview | Cox TV | Cox Internet | Cox Channel lineup |
          Cox Customer Service
        </p>
      </div>

      <div className="section endnote cox-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Methodology:</h4>
          <p>
            Our TV experts spent over 100 hours studying and analyzing the
            features of Cox’s bundles. These plans combine TV, internet, and
            phone, and we have done a thorough examination of the features of
            each package. We hand-tested the service’s signal reliability and
            overall user experience while also evaluating its different channel
            lineups and DVR capabilities. Additionally, we looked at data from
            our annual TV Customer Satisfaction Survey to see how Cox ranked
            against competitors.
            <br />
            To learn more about how CableTV.com approaches its reviews, check
            out our
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

export default CoxBundleReview;
