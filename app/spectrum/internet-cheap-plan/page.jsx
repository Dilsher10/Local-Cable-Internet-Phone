// import React, { useState } from "react";
import "./spectrum-internet-cheap-plan.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { spectrumNavLinks } from "../../assets/data/navLinks/spectrumNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import spectrum from "../../assets/images/Spectrum.png";
import { GoArrowUpRight } from "react-icons/go";
import internetcheap from "../../assets/images/internetcheap.png";
import star from "../../assets/images/star.png";
import asidespectrum from "../../assets/images/asidespectrum.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import wireless from "../../assets/images/wireless.png";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";
import quotations from "../../assets/images/quotations.svg";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Cheapest Spectrum Internet® Plan"
};

const SpectrumInternetCheapPlan = () => {
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
      desc: "Cheapest phone option",
      buttonText: "Compare Plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: internetcheap,

    cardsStrip: [
      {
        subtitle: "Service:",
        title: "Cheapest Spectrum internet",
        icon: asidespectrum,
      },
      {
        subtitle: "Internet:",
        title: "Up to 300–1,000 Mbps",
        icon: asidespectrum,
      },
      {
        subtitle: "Data cap:",
        title: "Unlimited",
        icon: asidespectrum,
      },
      {
        subtitle: "Price:",
        title: "$49.99–$89.99/mo.",
        icon: asidespectrum,
      },
    ],

    tableData: [],

    bottomDesc:
      "Data effective as of publish date. Offers and availability may vary by location and are subject to change. See full disclaimer.",
  };
  let packageTableData = [
    {
      head: [
        "package",
        "prices",
        "Max. download speeds",
        "Max. upload speeds",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Spectrum Internet® 300 Mbps",
            "Starting at $49.99/mo. for 12 mos.",
            "Up to 300 Mbps (wireless speeds may vary)",
            "10 Mbps",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataTwo = [
    {
      head: [
        "package",
        "prices",
        "Max. download speeds",
        "Features",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Spectrum Internet + Spectrum TV Select Signature",
            "Starting at $109.98/mo. for 12 mos.*",
            "Up to 300 Mbps (wireless speeds may vary)",
            "150+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Spectrum Internet + Spectrum Mobile By The Gig",
            "Starting at $63.98/mo. for 12 mos.*",
            "Up to 300 Mbps (wireless speeds may vary)",
            "One line with 1 GB data",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="spectrum-internet-cheap-plan">
      {/* <SubNav links={spectrumNavLinks} /> */}

      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">Cheapest Spectrum Internet® Plan</h2>
          <p className="sect-desc">
            Want to save on Spectrum Internet®? Here’s how you can get the best
            deals.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-spectrum-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is Spectrum Voice good?</h4>
          <p>
            Want to save money on your internet plan from Spectrum? It’s still
            possible to get cheap internet from Spectrum if you play your cards
            right. Here’s what you need to know if you’re interested in cheap
            internet from Spectrum.
          </p>
        </div>
      </div>

      <CTA
        heading={"Looking for Spectrum internet?"}
        desc={
          "Enter your zip code below to see internet and TV providers in your area."
        }
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
          <Link href={"#"}>Cheapest Spectrum internet plan</Link>
          <Link href={"#"}>Cheap Spectrum internet bundles</Link>
        </div>
      </div>

      <div className="section cheap-spectrum-internet-plan">
        <div className="head">
          <h2 className="sect-heading">
            Cheapest <span>Spectrum internet plan</span>
          </h2>
          <p className="sect-desc">
            Most Spectrum customers will have to settle for the Spectrum
            Internet plan if they want cheap internet. It’s not necessarily a
            budget plan at $49.99 monthly for the first year, but with 300 Mbps
            download speeds, you’ll have enough bandwidth for an entire
            household.
            <br />
            Spectrum’s higher-end internet plans offer more download speed, but
            they cost an additional $20 to $40 monthly compared to Spectrum
            Internet. Check out our full Spectrum internet review to learn more
            about Spectrum’s internet plans.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change. See full disclaimer.
        </p>
        <div className="package-table-container channels">
          <Image src={wireless} alt="wireless" className="wireless" />
          <h4>How to get cheaper Spectrum internet</h4>
          <p className="after-heading">
            Spectrum participates in the Affordable Connectivity Program, which
            offers a $30 internet discount for households enrolled in qualifying
            federal assistance programs. Spectrum’s Internet Assist program
            offers 30 Mbps internet for $17.99 monthly to qualifying households.
            <br />
            Read our{" "}
            <span className="link">
              <Link href={"#"}>free and low-income internet</Link>
            </span>{" "}
            guide for more information on both cheap Spectrum internet options.
          </p>
        </div>
      </div>

      <div className="section internet-bundles">
        <div className="head">
          <h2 className="sect-heading">
            Cheap Spectrum <span>internet bundles</span>
          </h2>
          <p className="sect-desc">
            If you’re sick of getting services from multiple providers, Spectrum
            bundles are a great way to stack additional savings on top of your
            internet plan. Spectrum customers have two main ways to get the best
            deals: spring for a Spectrum internet and TV bundle or an internet
            and cell phone bundle.
            <br />
            Spectrum TV Select Signature is Spectrum’s sole TV plan and comes
            with 150+ channels for only $59.99/mo. Spectrum Mobile is Spectrum’s
            cell phone service for internet subscribers. By The Gig is
            Spectrum’s cheapest cell phone plan and costs only $14.00 per month.
          </p>
        </div>
        <PackageTable item={packageTableDataTwo} />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change. See full disclaimer.
        </p>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span>Is Spectrum worth it?</span>
          </h2>
          <p className="sect-desc">
            Spectrum Internet is Spectrum’s cheapest internet plan, and you can
            stack additional deals for even more savings. Get a Spectrum
            services bundle for the cheapest Spectrum internet or see if you
            qualify for Spectrum’s internet subsidy programs.
          </p>
        </div>

        <div className="all-links">
          <Link href={"#"}>Sign up for spectrum</Link>
        </div>
      </div>

      <div className="section spectrum-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>Cheapest </span> Spectrum internet plans FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What is the cheapest
                internet plan on Spectrum?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Spectrum Internet is Spectrum's cheapest internet plan. This
                  plan has 300 Mbps download speeds and costs $49.99 monthly for
                  the first year.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"What is the cheapest internet plan on Spectrum?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum Internet is Spectrum's cheapest internet plan. This plan
              has 300 Mbps download speeds and costs $49.99 monthly for the
              first year.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Why is Spectrum Mobile so
                cheap?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Spectrum Mobile is cheap because it's exclusively for Spectrum
                  internet customers.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"Why is Spectrum Mobile so cheap?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum Mobile is cheap because it's exclusively for Spectrum
              internet customers.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Is there cheaper internet
                than Spectrum?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  ISPs like
                  <span className="link">
                    <Link href={"#"}> Xfinity </Link>
                  </span>{" "}
                  and
                  <span className="link">
                    <Link href={"#"}> Optimum </Link>
                  </span>{" "}
                  have cheaper internet plans than Spectrum, but in most cases,
                  you'll get slower performance compared to Spectrum Internet
                  download speeds.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"Is there cheaper internet than Spectrum?"}
            cssClass={"faq-content"}
          >
            <p>
              ISPs like
              <span className="link">
                <Link href={"#"}> Xfinity </Link>
              </span>{" "}
              and
              <span className="link">
                <Link href={"#"}> Optimum </Link>
              </span>{" "}
              have cheaper internet plans than Spectrum, but in most cases,
              you'll get slower performance compared to Spectrum Internet
              download speeds.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote spectrum-review-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Disclaimer:</h4>
          <p>
            <span className="bold"> Spectrum Internet: </span> Limited time
            offer; subject to change; valid to qualified residential customers
            who have not subscribed to any services within the previous 30 days
            and who have no outstanding obligation to Charter. Spectrum Internet
            ® promotion price is $49.99/mo; standard rates apply after yr. 1.
            Taxes, fees and surcharges extra and subject to change during and
            after the promotional period; installation/network activation,
            equipment and additional services are extra. General Terms:
            INTERNET: Speed based on wired connection and may vary by address.
            Wireless speeds may vary. Services subject to all applicable service
            terms and conditions, subject to change. Services not available in
            all areas. Restrictions apply. Enter your address to determine
            availability. ©2022 Charter Communications.
          </p>
          <p>
            <span className="bold"> Spectrum TV Select Signature: </span>{" "}
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
            To qualify for the Contract Buyout Program, a customer must order
            and install a qualifying Triple Play or limited Double Play
            promotion; offers not available in all areas. Offer available to
            qualifying customers only who have no outstanding obligations to
            Charter. Payment amount will be determined by the Early Termination
            Fee on the final bill from the previous provider, not to exceed
            $500. For Contract Buyout qualifications, go to Spectrum.com/buyout.
          </p>
          <p>
            **Speed based on wired connection. Available Internet speeds may
            vary by address. Gig capable modem required for Gig speed. For a
            list of Gig capable modems, visit Spectrum.net/modem.
          </p>
        </div>
      </div>
      {/* <Newsletter /> */}
    </div>
  );
};

export default SpectrumInternetCheapPlan;
