// import React, { useState } from "react";
import "./xfinity-voice.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import { xfinityNavLinks } from "../../assets/data/navLinks/xfinityNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import xfinitylogo from "../../assets/images/xfinitylogo.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import voiceboy from "../../assets/images/voiceboy.png";
import cross from "../../assets/images/cross.png";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import Link from "next/link";
import Image from "next/image";
import quotationsIcon from "../../assets/images/quotations.svg";
import { IoThumbsUpSharp } from "react-icons/io5";
import { IoThumbsDownSharp } from "react-icons/io5";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
import { packageTableData } from "../../assets/data/packageTableData";
import quotations from "../../assets/images/quotations.svg";
// import Newsletter from "../../components/newsletter/Newsletter";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Xfinity Voice: Cost, Deals, and Additional Features"
};

const XfinityVoice = () => {
  // const [faq, setFaq] = useState();
  let heroData = {
    card1: {
      logo: xfinitylogo,
      rating: "(4.5/5)",
      starImg: star,
      desc: "Best for bundle discounts",
      buttonText: "Compare Plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: voiceboy,

    cardsStrip: [
      {
        subtitle: "Contract:",
        title: "1-2 years or no-term agreement",
        icon: cross,
      },
      {
        subtitle: "Price:",
        title: "$20.00/mo.",
        icon: cross,
      },
      {
        subtitle: "Features:",
        title:
          "Clear digital audio, up to 12 cloud-based features including call screening",
        icon: cross,
      },
    ],

    tableData: [
      {
        head: ["Plan", "Price*", "Details"],

        body: [
          {
            content: ["1.", "Xfinity Voice", "$20.00/mo."],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "Xfinity Voice: Unlimited Nationwide calling. International calling plans available. No term contact. Taxes and equipment not included. Data effective as of post date. Offers and availability may vary by location and are subject to change.",
  };

  let packageTableData = [
    {
      head: ["Plan", "Price*", "Details"],

      body: [
        {
          content: ["1.", "Xfinity Voice", "$20.00/mo."],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataBundles = [
    {
      head: [
        "package",
        "Price*",
        "Download speeds",
        "region",
        "Phone plan",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Connect Internet + Xfinity Voice",
            "$40.00/mo.*",
            "75 Mbps",
            "Central",
            "Unlimited calling nationwide",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Connect More Internet + Xfinity Voice",
            "$35.00/mo.",
            "200 Mbps",
            "Central",
            "Unlimited calling nationwide",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataBundlesTwo = [
    {
      head: [
        "package",
        "Price*",
        "Download speeds",
        "Channel count",
        "Phone plan",
        "Region",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Fast Internet + Popular TV + Xfinity Voice",
            "$100.00/mo.",
            "400 Mbps",
            "125+",
            "Unlimited calling nationwide",
            "Northeast",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Superfast Internet + Ultimate TV + Xfinity Voice",
            "$130.00/mo.",
            "800 Mbps",
            "185+",
            "Unlimited calling nationwide",
            "Northeast",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Connect Internet + Choice TV + Xfinity Voice",
            "$49.00/mo.",
            "75 Mbps",
            "10+",
            "Unlimited calling nationwide",
            "Central",
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
    <div className="xfinity-voice">
      {/* <SubNav links={xfinityNavLinks} /> */}

      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity Voice: Cost, Deals, and Additional Features
          </h2>
          <p className="sect-desc">
            cover how to connect a digital landline phone to your internet and
            TV using Xfinity Voice.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-xfinity-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is Xfinity Voice good?</h4>
          <p>
            Xfinity Voice is a digital VoIP (Voice over Internet Protocol)
            landline phone service carried over{" "}
            <span className="link">
              <Link href={"#"}>Xfinity internet </Link>{" "}
            </span>{" "}
            instead of traditional telephone lines. VoIP phone service offers
            cleaner audio clarity as well as advanced features like three-way
            calling and voicemail-to-text messaging.
          </p>
          <p>
            Xfinity Voice is a good addition to your Xfinity internet service if
            you want the convenience of a standard landline home phone separate
            from your mobile service. Also, unlike Xfinity internet and TV
            service, Voice doesn’t require an annual contract, so it can be
            canceled at any time.
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
                  <td>Clear, digital audio</td>
                  <td>Expensive</td>
                </tr>
                <tr>
                  <td>12 cloud-based features</td>
                  <td>Dependent on internet, electricity</td>
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
          <Link href={"#"}>Availability</Link>
          <Link href={"#"}>Plans and bundles</Link>
          <Link href={"#"}>Equipment</Link>
          <Link href={"#"}>Home phone features</Link>
          <Link href={"#"}>International calling</Link>
          <Link href={"#"}>Xfinity Mobile</Link>
        </div>
      </div>

      <CTA
        heading={"Is Xfinity Voice in your area?"}
        desc={
          "Enter your zip code below to see if you can get Xfinity service."
        }
      />

      <div className="section xfinity-voicedetails">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity Voice <span>plans and bundles</span>
          </h2>
          <p className="sect-desc">
            You can get Xfinity Voice as a standalone service, but it’s far more
            likely you’ll want to bundle it with internet and TV. What good is
            home phone service if you can’t call a friend and talk about Sunday
            Night Football or Monday morning cat memes?
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity Voice plans</h4>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            Xfinity Voice: Unlimited Nationwide calling. International calling
            plans available. No term contact. Taxes and equipment not
            included.Data effective as of post date. Offers and availability may
            vary by location and are subject to change.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity Voice bundles</h4>
          <p className="after-heading">
            You’ll probably want to bundle your phone service with internet or
            TV service. Xfinity’s prices vary by region, so head over to our
            Xfinity bundles review for a full list of plans available in your
            area.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity internet and phone bundles</h4>
          <PackageTable item={packageTableDataBundles} />
          <p className="below-table">
            *For 24 months. No term contract. Taxes and equipment not included.
            Includes $10/mo automatic payments and paperless billing discount.
            Xfinity Voice: Unlimited Nationwide calling. International calling
            plans available. No term contact. Taxes and equipment not included.
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity TV, internet, and phone bundles</h4>
          <PackageTable item={packageTableDataBundlesTwo} />
          <p className="below-table">
            *Internet: For 24 months. No term contract. Includes $10/mo
            automatic payments and paperless billing discount. Taxes and
            equipment not included. TV: No term contract. Broadcast TV fee and
            regional sports fee extra; price subj to change. Taxes and equipment
            not included. Xfinity Voice: Unlimited Nationwide calling.
            International calling plans available. No term contact. Taxes and
            equipment not included. Data effective as of publish date. Offers
            and availability may vary by location and are subject to change
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity Voice equipment</h4>
          <p className="after-heading">
            To use Xfinity Voice, you need to connect it to the internet through
            an Xfinity Wireless Gateway modem/router, which you rent on a
            monthly basis. If you prefer, you can buy your own modem/router from
            another company, as long as it works with Xfinity internet and phone
            service. You can find a list of compatible modems and the fastest
            routers on our website. Xfinity Voice doesn't come with a phone
            handset, but most regular landline phones you can buy will work with
            the Xfinity Wireless Gateway. You can download the free Xfinity
            Connect App on your iPhone or Android phone if you want. With this
            app, you can check your Xfinity email, listen to voicemail (which
            includes written transcripts of your messages), and see your call
            history. You can also use the app to answer incoming calls and make
            calls using your Xfinity Voice number.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity Voice home phone features</h4>
          <p className="after-heading">
            Dependent on the plan, Xfinity Voice has up to 12 features:
          </p>
          <ul className="channel-list">
            <li>3-way calling</li>
            <li>Anonymous call rejection</li>
            <li>Call forwarding</li>
            <li>Call forwarding selective</li>
            <li>Call return</li>
            <li>Call screening</li>
            <li>Call waiting</li>
            <li>Caller ID</li>
            <li>Caller ID blocking per call</li>
            <li>Caller ID with call waiting</li>
            <li>Repeat dialing</li>
            <li>Speed dial</li>
          </ul>
          <p className="below-table left">
            Xfinity Voice also supports these quick-dial numbers:
          </p>
          <ul className="channel-list">
            <li>911 (emergencies)</li>
            <li>
              711 (Telecommunications Relay Service for customers with hearing
              disabilities)
            </li>
            <li>611 (Xfinity Voice tech support)</li>
            <li>411 (directory assistance)</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>International calling</h4>
          <p className="after-heading">
            With the Carefree Minutes® World Select 300 add-on, US customers can
            purchase 300 minutes of calls to over 80 select countries for an
            extra $9.95 per month.
            <br />
            The World Select plan does include some Latin American countries,
            including Argentina, Brazil, and Costa Rica, but omits others, like
            El Salvador and Guatemala. If you find yourself making frequent
            calls to those countries, try the Carefree Minutes® Latin America
            300 add-on. US customers can purchase 300 minutes of calls to Latin
            American countries for an additional $9.95 per month. However, check
            first to see if the countries you want to call are already available
            with Voice or World Select.
            <br />
            Without any of these plans, international calls can cost anywhere
            from $0.09 to $3.25 per minute depending on the country you’re
            calling. Better keep an eye on the time, or you could end up with
            even more fees on your Xfinity bill.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity Mobile</h4>
          <p className="after-heading">
            Xfinity also has a cell phone service called Xfinity Mobile. Unlike
            Xfinity Voice, which uses the company’s internet network, Xfinity
            Mobile borrows cell service from Verizon to give its customers a
            wide coverage area. You can only get Xfinity Mobile if you're
            already using Xfinity services; you can't just buy it on its own.
            But since it uses Verizon's network, you can get the same coverage
            by going straight to Verizon. Plus, you might get more reliable
            service because Verizon gives priority to its own customers. If you
            want to save money by bundling cell service with other utilities and
            don't mind sometimes having slower speeds, Xfinity Mobile could be a
            good choice. Depending on your plans, it might be a better deal
          </p>
          <div className="btn">
            <Link href={"#"}>view xfinity mobile plans</Link>
          </div>
        </div>
      </div>

      <div className="section endnote voice-endnote">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Xfinity Voice worth it?</span>
          </h2>
          <p className="sect-desc">
            If you already have Xfinity internet service, Voice could be a
            useful add-on if you don’t use a mobile phone—we don’t know who you
            are, but you might exist. Living in an area with spotty mobile
            service might also be a case for a landline VoIP home phone.
            <br />
            <br />
            But Xfinity Voice service is also one of the pricier VoIP add-ons,
            though you should take Xfinity’s bundle discounts into
            consideration. But if you already have a mobile provider with decent
            coverage and don’t really need a home phone line, we’d say skip
            Voice.
          </p>
        </div>
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Related articles</h4>
          <ul>
            <li>
              <span className="link">
                <Link href={"#"}>Spectrum Voice Review</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"#"}>Sparklight Phone Review</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"#"}>CenturyLink Home Phone Review</Link>
              </span>
            </li>
          </ul>
          <h4>Methodology</h4>
          <p>
            To find out how Xfinity Voice plans stacked up to the competition,
            we rated them by bang for your buck, reliability, features, and
            customer satisfaction. For more information on our methodology,
            check out our How We Rank page.
          </p>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Xfinity Overview | Xfinity Internet | Xfinity TV | Xfinity
          Voice | Xfinity Bundles | Xfinity Channel Lineup | Xfinity Customer
          Service | Xfinity Availability Map | Xfinity Free Installation
        </p>
      </div>

      <div className="section xfinity-voice-faq">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span>Voice</span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What are Xfinity tV packages?
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
            title={"What are Xfinity TV packages?"}
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
                <span>{faq === 2 ? "-" : "+"}</span> What is the cheapest
                xfinity tV Package?
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
            title={"What is the cheapest Xfinity TV Package?"}
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
            title={"What is the best package to get on Xfinity TV?"}
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
            title={"Can you just get xfinity tV?"}
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
            title={"What channels are in the Xfinity’s basic package?"}
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
      {/* <Newsletter /> */}
    </div>
  );
};

export default XfinityVoice;
