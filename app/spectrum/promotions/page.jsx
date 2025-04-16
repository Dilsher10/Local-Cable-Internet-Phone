// import React, { useState } from "react";
import "./spectrum-deals.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { spectrumNavLinks } from "../../assets/data/navLinks/spectrumNavLinks";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import PackageCard from "../../components/package-card/PackageCard";
import xfintyTvHeroBg from "../../assets/images/xfinity-tv-hero-bg.jpg";
import dotted from "../../assets/images/dotted.png";
import screen from "../../assets/images/screen.png";
import PackageTable from "../../components/package-table/PackageTable";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import quotations from "../../assets/images/quotations.svg";
import Newsletter from "../../components/newsletter/Newsletter";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Spectrum Deals And Promotions"
};

const SpectrumDeals = () => {
  // const [faq, setFaq] = useState();

  let packageTableData = [
    {
      head: [
        "package",
        "Price",
        "Download speeds",
        "Channels",
        " Promotions",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Spectrum Internet",
            "Starting at $49.99/mo. for 12 mos.",
            "Up to 300 Mbps",
            "N/A",
            "90-day Peacock Premium subscription",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Spectrum Internet® Ultra",
            "Starting at $69.99/mo. for 12 mos.",
            "Up to 500 Mbps",
            "N/A",
            "90-day Peacock Premium subscription",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Spectrum Internet Gig",
            "Starting at $89.99/mo. for 12 mos.",
            "Up to 1,000 Mbps",
            "N/A",
            "90-day Peacock Premium subscription",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Spectrum TV® Select",
            "Starting at $59.99/mo. for 12 mos.",
            "N/A",
            "125+ channels",
            "12-month Peacock Premium subscription",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "Spectrum Deals And Promotions",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam..",
    points: [
      "Up to 125+ channels",
      "Free HD picture quality",
      "Download speeds up to 1000 Mbps (wireless speeds may vary)",
      "No extra fees or data caps",
      "Unlimited nationwide calling",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Packages starting at $49.99/mo.",
  };
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="spectrum-deals">
      {/* <SubNav links={spectrumNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> Deals and promotions </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Aliquam risus odio vulputate
            pretium varius. Phasellus aliquam hac lacus fames elit. Suspendisse
            nunc fermentum commodo sit tempus. Ultricies id at magna turpis
            neque.
          </p>
        </div>

        <div className="cards">
          {bestOffersTemporary.map((item, index) => (
            <PackageCard
              key={index}
              id={index}
              img={item.img}
              tagName={item.tagName}
              packageName={item.packageName}
              packagePoints={item.packagePoints}
              price={item.price}
              linkPath={item.linkPath}
            />
          ))}
        </div>
      </div>

      <div className="section endnote is-spectrum-good">
        <div className="head">
          <h2 className="sect-heading">
            <span> Comapare </span> Spectrum deals
          </h2>
          <p className="sect-desc">
            No one likes spending more than they have to on their cable or
            internet bill. Whether you’re a current or potential Spectrum
            customer, we’ve got the best ways to trim your monthly Spectrum bill
            and save some money.
          </p>
        </div>
        <div className="endnote-container">
          <Image src={dotted} alt="dotted" />
          <h4>Limited time offer:</h4>
          <p>
            Customers can save over $400 with Spectrum One. Sign up for 300 Mbps
            Spectrum internet and get 12 months of Advanced WiFi and one line of
            Unlimited Mobile.
          </p>
        </div>
        <br />
        <br />
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change. See full disclaimer.
        </p>
      </div>

      <CTA
        heading={"Interested in spectrum service?"}
        desc={
          "Looking for more Spectrum deals and packages? Enter your zip code below to see what Spectrum offers in your area."
        }
      />

      <div className="section deals-features">
        <div className="head">
          <h2 className="sect-heading">
            Learn more about Spectrum <span> deals’ features </span>
          </h2>
          <p className="sect-desc">
            Spectrum often offers its customers promotional pricing, deals,
            bundles, and more. Here’s an overview of what you can expect as a
            Spectrum customer:
          </p>
        </div>
      </div>

      <div className="section spectrum-discounts">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> discounts </span>
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
          <h4>Spectrum student discount </h4>
          <p className="after-heading">
            Spectrum does not offer a student discount. However, certain
            low-income homes may be able to qualify for
            <span className="link">
              <Link href={"#"}> Spectrum Internet Assist, </Link>
            </span>
            which offers 30 Mbps speeds for $17.99 a month.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Spectrum senior discount </h4>
          <p className="after-heading">
            There is no Spectrum senior discount, but certain low-income homes
            may qualify for{" "}
            <span className="link">
              <Link href={"#"}> Spectrum Internet Assist, </Link>
            </span>{" "}
            and will receive 30 Mbps speeds for $17.99 a month.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Spectrum military discount </h4>
          <p className="after-heading">
            Spectrum does not offer any military discounts. However, certain
            low-income homes may qualify for{" "}
            <span className="link">
              <Link href={"#"}> Spectrum Internet Assist, </Link>
            </span>{" "}
            which gives customers access to 30 Mbps speeds for only $17.99 a
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Free Peacock Premium </h4>
          <p className="after-heading">
            New Spectrum TV Select customers (except those with only the Basic
            tier or TV Essentials plan) get a free{" "}
            <span className="link">
              <Link href={"#"}> Peacock Premium </Link>
            </span>{" "}
            subscription for 12 months. Spectrum’s internet customers also get a
            taste of this deal with a 90-day subscription.
            <br />
            After your promotional period ends, you can cancel your Peacock
            Premium subscription or continue using it for $5.99 per month.
          </p>
          <br />
          <br />
          <Image src={screen} className="screen" alt="screen" />
          <hr />
          <div className="btn">
            <Link href={"#"}>get this deal</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Spectrum Contract Buyout Program </h4>
          <p className="after-heading">
            Spectrum will pay up to $500◊ to cover your early termination fee if
            you want to jump ship from your current TV or internet provider. To
            qualify for the
            <span className="link">
              <Link href={"#"}> Spectrum Contract Buyout Program </Link>
            </span>{" "}
            you’ll just need to sign up for an eligible Spectrum bundle with
            internet, TV, and/or phone service.
          </p>
          <hr />
          <div className="btn">
            <Link href={"#"}>switch to spectrum</Link>
          </div>
        </div>
      </div>

      <div className="section spectrum-existing-customer">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> deals for existing </span> customers
          </h2>
          <p className="sect-desc">
            Even if you’re a current Spectrum Internet customer, you can still
            take advantage of several offers from the cable provider.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Free cable internet modem </h4>
          <div className="inner-channel-flex">
            <div className="inner-channel-flex-div">
              <p className="after-heading">
                Every Spectrum Internet plan comes with a FREE modem, which
                connects your home to the provider’s cable internet network.
                <br />
                While we typically recommend buying your own modem, Spectrum’s
                FREE modem offer (you’ll return the modem once you leave
                <br />
                Spectrum) is an easy way to save money if you don’t already have
                a modem.
                <br />
                The standard monthly rate for a modem rental is usually between
                $5–$15, while a new modem can retail between $60–$120.
              </p>
              <hr />
            </div>
            <div className="inner-channel-flex-div">
              <div className="btn">
                <Link href={"#"}>reach out for this deal</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Spectrum Mobile </h4>
          <div className="inner-channel-flex">
            <div className="inner-channel-flex-div">
              <p className="after-heading">
                <span className="link">
                  <Link href={"#"}> Spectrum Mobile </Link>
                </span>
                is a standalone Spectrum service for Spectrum Internet
                subscribers that provides cell service and mobile
                <br /> data plans. Spectrum Mobile’s best deals include up to
                $1,000 in savings on new phones like the Samsung Galaxy Z Flip5
                and
                <br /> Google Pixel 7.
                <br />
                Spectrum Mobile can help you save money if you’re already a
                Spectrum Internet subscriber and want to leave your mobile{" "}
                <br />
                phone carrier. Spectrum Mobile starts at $29.99 per line for
                unlimited data or $14 for each gigabyte of data used by all of
                your <br />
                plan’s phone lines.
              </p>
              <hr />
            </div>
            <div className="inner-channel-flex-div">
              <div className="btn">
                <Link href={"#"}>reach out for this deal</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Apple TV 4K </h4>
          <div className="inner-channel-flex">
            <div className="inner-channel-flex-div">
              <p className="after-heading">
                <span className="link">
                  <Link href={"#"}> Spectrum Tv </Link>
                </span>
                subscribers can get the 32 GB{" "}
                <span className="link">
                  <Link href={"#"}> Apple TV 4K </Link>
                </span>
                for $8.99 per month on a 20-month payment plan. In the end,
                that’s <br />
                only a few cents off from the normal price of an Apple TV 4K,
                but payment plans can be nice if you don’t want to spend a lot
                of
                <br /> cash at once.
                <br />
                With the Apple TV’s auto-login feature, you can easily watch
                content from Spectrum and other networks without having to
                <br />
                manually type in your cable login. The Apple TV also has
                streaming apps from services like Max™, Netflix, and Hulu.
              </p>
              <hr />
            </div>
            <div className="inner-channel-flex-div">
              <div className="btn">
                <Link href={"#"}>reach out for this deal</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Spectrum Internet Assist program</h4>
          <div className="inner-channel-flex">
            <div className="inner-channel-flex-div">
              <p className="after-heading">
                <span className="link">
                  <Link href={"#"}> Spectrum Internet Assist </Link>
                </span>
                offers discounted internet access to eligible senior or
                low-income customers. With Spectrum Internet Assist,
                <br /> you’ll get maximum download speeds of 30 Mbps (wireless
                speeds may vary) and a FREE modem rental.
                <br />
                To qualify for Spectrum Internet Assist, someone in your home
                needs to be enrolled in Supplemental Security Income, the
                <br />
                National School Lunch Program (NSLP), or the NSLP’s Community
                Eligibility Provision. If you qualify, we recommend you pair
                <br />
                your Spectrum Internet Assist plan with the FCC’s{" "}
                <span className="link">
                  <Link href={"#"}> Affordable Connectivity Program. </Link>
                </span>{" "}
                Combining both programs basically gives you <br />
                free internet service.
              </p>
              <hr />
            </div>
            <div className="inner-channel-flex-div">
              <div className="btn">
                <Link href={"#"}>get internet assistance</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section spectrum-deals-faq">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> deals</span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What kind of deals does
                Spectrum have right now?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  For a limited time, Spectrum is offering the Spectrum One
                  bundle: sign up for a new Spectrum internet plan (speeds
                  starting at 300 Mbps) and get Advanced WiFi and 12 mos. of
                  Spectrum Mobile for free.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"What kind of deals does Spectrum have right now?"}
            cssClass={"faq-content"}
          >
            <p>
              For a limited time, Spectrum is offering the Spectrum One bundle:
              sign up for a new Spectrum internet plan (speeds starting at 300
              Mbps) and get Advanced WiFi and 12 mos. of Spectrum Mobile for
              free.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How do I get a better deal
                on Spectrum?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <ul>
                  <li>
                    1. Call Spectrum's sales department at{" "}
                    <span className="link">
                      <Link href={"#"}> +1-833-694-9259 </Link>
                    </span>
                    before your 12-month promotional price ends.
                  </li>
                  <li>
                    2. Tell Spectrum that you're considering canceling your TV
                    or Internet service because your Spectrum bill is too high.
                  </li>
                  <li>
                    3. Try to get redirected to Spectrum's retention department.
                  </li>
                  <li>
                    4. If you successfully reach the retention department,
                    you'll typically qualify for one of several offers: extended
                    guarantees that lock in your promotional price, service
                    upgrades, or discounts.
                  </li>
                  <li>
                    5. Accept the offer that you like the best and enjoy your
                    cheaper monthly bill
                  </li>
                </ul>
                <p>
                  Read our{" "}
                  <span className="link">
                    <Link href={"#"}> Spectrum bill negotiation guide </Link>
                  </span>{" "}
                  for more details.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"How do I get a better deal on Spectrum?"}
            cssClass={"faq-content"}
          >
            <ul>
              <li>
                1. Call Spectrum's sales department at{" "}
                <span className="link">
                  <Link href={"#"}> +1-833-694-9259 </Link>
                </span>
                before your 12-month promotional price ends.
              </li>
              <li>
                2. Tell Spectrum that you're considering canceling your TV or
                Internet service because your Spectrum bill is too high.
              </li>
              <li>
                3. Try to get redirected to Spectrum's retention department.
              </li>
              <li>
                4. If you successfully reach the retention department, you'll
                typically qualify for one of several offers: extended guarantees
                that lock in your promotional price, service upgrades, or
                discounts.
              </li>
              <li>
                5. Accept the offer that you like the best and enjoy your
                cheaper monthly bill
              </li>
            </ul>
            <p>
              Read our{" "}
              <span className="link">
                <Link href={"#"}> Spectrum bill negotiation guide </Link>
              </span>{" "}
              for more details.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(7)}>
                <span>{faq === 7 ? "-" : "+"}</span> What is the cheapest
                Spectrum TV package?
              </h3>

              <div className={`faq-content ${faq === 7 ? "show" : ""}`}>
                <p>
                  The cheapest Spectrum TV package is Spectrum TV® Select, which
                  starts at $59.99 per month for 12 months.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"What is the cheapest Spectrum TV package?"}
            cssClass={"faq-content"}
          >
            <p>
              The cheapest Spectrum TV package is Spectrum TV® Select, which
              starts at $59.99 per month for 12 months.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How can I get a discount on
                Spectrum Internet?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  The Spectrum Internet Assist program offers discounted
                  internet service for eligible low-income or elderly
                  families.To qualify, a member of your household needs to be
                  enrolled in Supplemental Security Income, the National School
                  Lunch Program (NSLP), or the NSLP's Community Eligibility
                  Provision.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={"How can I get a discount on Spectrum Internet?"}
            cssClass={"faq-content"}
          >
            <p>
              The Spectrum Internet Assist program offers discounted internet
              service for eligible low-income or elderly families.To qualify, a
              member of your household needs to be enrolled in Supplemental
              Security Income, the National School Lunch Program (NSLP), or the
              NSLP's Community Eligibility Provision.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does Spectrum have a
                student discount?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  While Spectrum doesn't offer a student-only discount, you can
                  qualify for the Spectrum Internet Assist program if your
                  household participates in the National School Lunch Program.
                  With Spectrum Internet Assist, you'll get 30 Mbps download
                  speeds for $17.99 monthly.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"Does Spectrum have a student discount?"}
            cssClass={"faq-content"}
          >
            <p>
              While Spectrum doesn't offer a student-only discount, you can
              qualify for the Spectrum Internet Assist program if your household
              participates in the National School Lunch Program. With Spectrum
              Internet Assist, you'll get 30 Mbps download speeds for $17.99
              monthly.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>Does Spectrum have a senior
                discount?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  While Spectrum doesn't offer a senior-only discount, people
                  aged 65 and older with Supplemental Security Income can
                  qualify for the Spectrum Internet Assist program. You'll get
                  30 Mbps download speeds for $17.99 monthly.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"Does Spectrum have a senior discount?"}
            cssClass={"faq-content"}
          >
            <p>
              While Spectrum doesn't offer a senior-only discount, people aged
              65 and older with Supplemental Security Income can qualify for the
              Spectrum Internet Assist program. You'll get 30 Mbps download
              speeds for $17.99 monthly.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>Does Spectrum have a
                military discount?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>Spectrum does not have a military discount.</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={"Does Spectrum have a military discount?"}
            cssClass={"faq-content"}
          >
            <p>Spectrum does not have a military discount.</p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote spectrum-review-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Disclaimer:</h4>
          <p>
            *Limited time offer; subject to change; valid to qualified
            residential customers who have not subscribed to any services within
            the previous 30 days and who have no outstanding obligation to
            Charter. Spectrum TV® Select promotion price is $59.99/mo.; standard
            rates apply after yr. 1. Taxes, fees and surcharges (broadcast
            surcharge up to $21.00/mo.) extra and subject to change during and
            after the promotional period; installation/network activation,
            equipment and additional services are extra. General Terms: TV: TV
            equipment required; charges may apply. Channel and HD programming
            availability based on level of service. Account credentials may be
            required to stream some TV content online. Services subject to all
            applicable service terms and conditions, subject to change. Services
            not available in all areas. Restrictions apply. Enter your address
            to determine availability. ©2022 Charter Communications.
          </p>
          <p>
            ◊To qualify for the Contract Buyout Program, a customer must order
            and install a combination of qualifying Video and Internet and / or
            Voice services; offers not available in all areas. Spectrum’s Mobile
            Services are not eligible for the buyout program. Offer available to
            qualifying customers only who have no outstanding obligations to
            Charter. Payment amount will be determined by the Early Termination
            Fee on the final bill from the previous provider, not to exceed
            $500. For Contract Buyout qualifications, go to Spectrum.com/buyout.
            Peacock Premium offer: “You are only eligible to redeem this Offer
            if you are a Spectrum TV (other than the Basic tier or TV Essentials
            product) customer or Spectrum Internet customer (including the TV
            Essentials product) and you: (i) are 18 years of age or older; (ii)
            reside in the United States; (iii) provide Peacock with a valid
            payment method; (iv) are a residential customer with no outstanding
            obligation to Spectrum; and (v) are not in seasonal suspend. Limit
            one Offer per Spectrum account; offer activation may be completed by
            any, but only one, username (primary or standard role) on the accoun
          </p>
          <p>
            Spectrum account credentials are required to determine eligibility.
            If you are an otherwise qualified Spectrum TV customer, and your
            local NBC television station is not being carried by Spectrum, you
            may lose access to some NBC content or not be eligible to initiate
            the Peacock Premium 12 month offer. Any changes to service may
            affect eligibility.
          </p>
          <p>
            This Offer is valid December 8, 2021 – December 7, 2023 (the “Offer
            Redemption Period”), subject to change. This Offer is void once
            expired and must be redeemed by the last date of the Offer
            Redemption Period. Redemption of this Offer and your use of Peacock
            during and after your Access Period is subject to the Peacock Terms
            of Use, available at peacocktv.com/terms and Privacy Policy,
            available at peacocktv.com/privacy, and the terms hereof. Spectrum
            services are subject to all applicable service terms and conditions.
            Spectrum services are not available in all areas.”
          </p>
          <p>
            Spectrum One: Limited time offer; subject to change; valid to
            qualified residential customers who have not subscribed to any
            services within the previous 30 days and have no outstanding
            obligations to Charter. Services are subject to all applicable
            service terms and conditions, subject to change. Services not
            available in all areas. Restrictions apply. INTERNET & ADVANCED
            WIFI: Standard rates for Internet and Advanced WiFi apply after yr
            1. Standard rates apply for Internet, WiFi, and Mobile if Mobile
            line is not activated within 30 days and maintained through the
            promo period. Equipment may be extra; installation and additional
            services are extra. Speed based on wired connection. Actual speeds
            may vary. SPECTRUM MOBILE: Service not available in all areas.
            Spectrum Internet and Auto Pay required. Other restrictions apply.
            Visit spectrum.com/mobile/plans for details. UNLIMITED: Standard
            rates apply after yr 1. Smartwatch does not qualify as a line.
            Reduced speeds after 20 GB of usage per line. UNLIMITED PLUS:
            Customer opt-in to Mobile Unlimited Plus will be required to pay
            additional $10 monthly rate for that service. Smartwatch does not
            qualify as a line. Reduced speeds after 30 GB of usage per line. To
            access 5G, 5G compatible phone and 5G service required. Not all 5G
            capable phones compatible with all 5G service. Speeds may vary.
            Visit spectrum.com/mobile/5g for details.Savings based on 12 months
            of Spectrum Mobile Unlimited at no charge and 12 months of Advanced
            WiFi at no charge.Limited time offer. Qualified Spectrum TV
            customers are eligible for 12 months of Peacock Premium at no
            additional cost. Qualified Spectrum Internet customers are eligible
            for 90 days of Peacock Premium at no additional cost. Additional
            eligibility restrictions may apply. Spectrum account credentials are
            required to determine eligibility for the promotional offer.
            Promotional offers may not be combined. After promotional period,
            Peacock Premium pricing of $4.99/month (plus tax) applies. Cancel
            anytime. Offer availability and content availability may vary by
            region. Any changes to service may affect eligibility. Existing
            Peacock Premium subscribers may need to take additional steps; see
            offer terms for details.
          </p>
        </div>
      </div>
      {/* <Newsletter /> */}
    </div>
  );
};

export default SpectrumDeals;
