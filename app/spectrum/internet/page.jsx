// import React, { useState } from "react";
import "./spectrum-internet.scss";
import xfintyTvHeroBg from "../../assets/images/xfinity-tv-hero-bg.jpg";
// import SubNav from "../../components/sub-nav/SubNav";
// import { spectrumNavLinks } from "../../assets/data/navLinks/spectrumNavLinks";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import CTA from "../../components/cta-section/CTA";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import PackageCard from "../../components/package-card/PackageCard";
import PackageTable from "../../components/package-table/PackageTable";
import PackagePricing from "../../components/package-pricing/PackagePricing";
import Link from "next/link";
import quotations from "../../assets/images/quotations.svg";
import Newsletter from "../../components/newsletter/Newsletter";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Spectrum Internet Plans, Prices, And Packages"
};

const SpectrumInternet = () => {
  // const [faq, setFaq] = useState(null);

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "Spectrum Internet Plans, Prices, And Packages",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "Get download speeds up to 1,000 Mbps",
      "Unlimited data",
      "No contracts",
      "Free access to Spectrum’s nationwide hotspot network",
      "Free modem",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Internet packages starting at $49.99/mo.",
  };
  let packageTableData = [
    {
      head: [
        "Package",
        "Price",
        "Download speeds",
        "Upload speeds up to",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Spectrum Internet",
            "Starting at $49.99/mo. for 12 mos.",
            "Up to 300 Mbps",
            "10 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Spectrum Internet® Ultra",
            "Starting at $69.99/mo. for 12 mos.",
            "Up to 500 Mbps",
            "20 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Spectrum Internet Gig",
            "Starting at $89.99/mo. for 12 mos.",
            "Up to 1000 Mbps",
            "35 Mbps",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataTwo = [
    {
      head: [
        "Package",
        "Price",
        "Download speeds",
        "Upload speeds up to",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Internet + TV Select",
            "$109.98/mo. for 12 mos.",
            "Up to 300 Mbps",
            "125+ channels",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Internet Ultra + TV Select",
            "$129.98/mo. for 12 mos.",
            "Up to 500 Mbps",
            "125+ channels",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Internet Gig + TV Select",
            "$149.98/mo. for 12 mos.",
            "Up to 1 Gbps",
            "125+ channels",
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
    <div className="spectrum-internet">
      {/* <SubNav links={spectrumNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Best <span>TV Service</span> Offers
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
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

      <CTA
        heading={"Interested in spectrum service?"}
        desc={
          "Enter your zip code below to see Spectrum’s download speeds in your area."
        }
      />

      <div className="section spectrum-prices-and-packages">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum internet <span> prices and packages</span>
          </h2>
          <p className="sect-desc">
            Spectrum’s three internet packages combine affordability with
            performance, and they’re a fit for every budget or household.
            Spectrum internet prices without bundle start at a reasonable $49.99
            per month.
            <br />
            With the Spectrum Internet® plan, your family can surf the internet
            without buffering on the cheap. Spectrum Internet Ultra ups the ante
            for larger households who work and do school from home with download
            speeds of up to 500 Mbps. For speed demons who need the fastest
            internet, Spectrum Internet Gig offers speeds up to 1 Gbps.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section spectrum-tv-and-internet-packages">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> TV and internet </span> packages
          </h2>
          <p className="sect-desc">
            Need cable TV along with your new internet plan? Spectrum’s got you
            covered with plenty of bundles.
            <br />
            With Spectrum’s TV and Internet packages, you can get 125+ channels
            on top of Spectrum’s lightning-fast internet speeds. And if you want
            even more to watch, you can add additional channel packs that’ll
            provide you with plenty of sports and entertainment options.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section spectrum-internet-speed">
        <div className="head">
          <h2 className="sect-heading">
            Get <span>fast Spectrum</span> internet speeds
          </h2>
          <p className="sect-desc">
            Whether you need fast internet speeds or a cheaper price tag,
            Spectrum has the right internet speed at the right price. Are you
            unsure about which internet speed you need? Here’s what each
            internet plan is best suited for.
          </p>
        </div>
        <PackagePricing />
      </div>

      <div className="section spectrum-deals-features">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span>Deals and features</span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Spectrum antivirus software included</h4>
          <p className="after-heading">
            Safety should be a top priority for all internet users, so who
            wouldn’t want extra protection, especially if it’s free? Luckily,
            Spectrum offers free antivirus software for up to 10 devices with
            all Spectrum Internet packages.
            <br />
            Spectrum’s Security Suite protects against all types of malicious
            software, including viruses, spyware, and bots. The software updates
            automatically, so you’ll always know that your devices are safe so
            long as you remain an active Spectrum user.
            <br />
            For Windows users, Security Suite also includes an AntiBot Scanner
            that you can run on your devices to remove malicious software. And
            for the parents, the software allows you to enable Parental Controls
            to help manage your child’s online surfing.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Save up to $500 with Spectrum internet deals</h4>
          <p className="after-heading">
            Are you interested in cheap Spectrum internet service? Spectrum has
            a great selection of internet deals:
          </p>
          <ul>
            <li>
              {" "}
              · Spectrum will cover up to $500 in early termination fees as part
              of its Contract Buyout Program.
            </li>
            <li>
              {" "}
              · Get a free year of{" "}
              <span className="link">
                <Link href={"#"}>Peacock Premium </Link>
              </span>{" "}
              with a Spectrum TV subscription. Internet subscribers can get a
              free 90-day Peacock Premium trial.
            </li>
            <li>
              {" "}
              · Bundle{" "}
              <span className="link">
                <Link href={"#"}> Spectrum Mobile </Link>
              </span>{" "}
              with your Spectrum internet plan for affordable cell phone rates.
            </li>
            <li> · Get a free internet modem with any internet plan.</li>
          </ul>
        </div>
      </div>

      <div className="divider-two">
        <p>
          Pro tip: Want to dig deeper into Spectrum internet? Check out our
          Spectrum internet review for our full take on the internet provider.
        </p>
      </div>

      <div className="section spectrum-learn-more-about">
        <div className="head">
          <h2 className="sect-heading">
            Learn more about <span> Spectrum internet features </span>
          </h2>
          <p className="sect-desc">
            When you sign up for Spectrum internet, you’ll get much more than an
            internet connection at your home. Let’s break down everything that
            comes with your Spectrum internet plan.
          </p>
        </div>
      </div>

      <div className="section spectrum-internet-faq">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span>Internet</span> FAQ
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
                Spectrum internet plan?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  The cheapest Spectrum Internet plan is Spectrum Internet.
                  Spectrum Internet costs $49.99 per month for the first 12
                  months and includes download speeds of up to 300 Mbps.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"1"}
            title={"What is the cheapest Spectrum internet plan?"}
            cssClass={"faq-content"}
          >
            <p>
              The cheapest Spectrum Internet plan is Spectrum Internet. Spectrum
              Internet costs $49.99 per month for the first 12 months and
              includes download speeds of up to 300 Mbps.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How much is Spectrum
                internet on its own?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Spectrum Internet prices start at $49.99 per month for the
                  first 12 months. Spectrum's prices will increase if you
                  include add-ons like a Wi-FI router rental or a Spectrum TV
                  plan.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"2"}
            title={"How much is Spectrum internet on its own?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum Internet prices start at $49.99 per month for the first
              12 months. Spectrum's prices will increase if you include add-ons
              like a Wi-FI router rental or a Spectrum TV plan.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What is Spectrum's fastest
                internet speed?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Spectrum's fastest internet speed is 1,000 Mbps. This speed is
                  available on the Spectrum Internet Gig plan, which costs
                  $89.99 per month for the first 12 months.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"3"}
            title={"What is Spectrum's fastest internet speed?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum's fastest internet speed is 1,000 Mbps. This speed is
              available on the Spectrum Internet Gig plan, which costs $89.99
              per month for the first 12 months.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How much is Spectrum after
                the first year?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Spectrum internet and TV plans cost around $70 or more after
                  the first year. But in some markets, Spectrum will lock in
                  your promotional discount for two years.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"4"}
            title={"How much is Spectrum after the first year?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum internet and TV plans cost around $70 or more after the
              first year. But in some markets, Spectrum will lock in your
              promotional discount for two years.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> How much does it cost for
                Spectrum WiFi?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Spectrum's Out-of-Home WiFi network is free for Spectrum
                  internet customers. Spectrum's WiFi router costs $5 per month
                  to rent.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"5"}
            title={"How much does it cost for Spectrum WiFi?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum's Out-of-Home WiFi network is free for Spectrum internet
              customers. Spectrum's WiFi router costs $5 per month to rent.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="endnote tv-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Disclaimer:</h4>
          <p>
            <span className="bold">*Spectrum Internet</span>: Limited time
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
            <span className="bold">Spectrum Internet Ultra</span> Limited time
            offer; subject to change; valid to qualified residential customers
            who have not subscribed to any services within the previous 30 days
            and who have no outstanding obligation to Charter. Spectrum
            Internet® Ultra promotion price is $69.99/mo; standard rates apply
            after yr. 1. Taxes, fees and surcharges extra and subject to change
            during and after the promotional period; installation/network
            activation, equipment and additional services are extra. General
            Terms: INTERNET: Speed based on wired connection and may vary by
            address. Wireless speeds may vary. Services subject to all
            applicable service terms and conditions, subject to change. Services
            not available in all areas. Restrictions apply. Enter your address
            to determine availability. ©2022 Charter Communications.
          </p>
          <p>
            <span className="bold">Spectrum Internet Gig:</span> Limited time
            offer; subject to change; valid to qualified residential customers
            who have not subscribed to any services within the previous 30 days
            and who have no outstanding obligation to Charter. Spectrum
            Internet® Gig promotion price is $89.99/mo; standard rates apply
            after yr. 1. Taxes, fees and surcharges extra and subject to change
            during and after the promotional period; installation/network
            activation, equipment and additional services are extra. General
            Terms: INTERNET: Speed based on wired connection and may vary by
            address. Wireless speeds may vary. Services subject to all
            applicable service terms and conditions, subject to change. Services
            not available in all areas. Restrictions apply. Enter your address
            to determine availability. ©2022 Charter Communications.
          </p>
          <p>
            <span className="bold">†Spectrum Internet + TV Select</span>:
            Limited time offer; subject to change; valid to qualified
            residential customers who have not subscribed to any services within
            the previous 30 days and who have no outstanding obligation to
            Charter. Spectrum TV® Select promotion price is $49.99/mo; standard
            rates apply after yr. 1. Spectrum Internet® promotion price is
            $49.99/mo; standard rates apply after yr. 1. Taxes, fees and
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
            determine availability. ©2022 Charter Communications.
          </p>
          <p>
            <span className="bold">Spectrum Internet + Voice</span>: Limited
            time offer; subject to change; valid to qualified residential
            customers who have not subscribed to any services within the
            previous 30 days and who have no outstanding obligation to Charter.
            Spectrum Internet® promotion price is $49.99/mo; standard rates
            apply after yr. 1. Spectrum Voice®: Price is $14.99/mo when bundled.
            Taxes, fees and surcharges extra and subject to change during and
            after the promotional period; installation/network activation,
            equipment and additional services are extra. General Terms:
            INTERNET: Speed based on wired connection and may vary by address.
            Wireless speeds may vary. HOME PHONE: Unlimited calling includes
            calls within the U.S., Canada, Mexico, Puerto Rico, Guam, the Virgin
            Islands and more. Services subject to all applicable service terms
            and conditions, subject to change. Services not available in all
            areas. Restrictions apply. Enter your address to determine
            availability. ©2022 Charter Communications.
          </p>
          <p>
            <span className="bold">‡Spectrum Internet + TV Select + Voice</span>
            : Limited time offer; subject to change; valid to qualified
            residential customers who have not subscribed to any services within
            the previous 30 days and who have no outstanding obligation to
            Charter. Spectrum TV® Select promotion price is $49.99/mo; standard
            rates apply after yr. 1. Spectrum Internet® promotion price is
            $49.99/mo; standard rates apply after yr. 1. Spectrum Voice®: Price
            is $14.99/mo when bundled. Taxes, fees and surcharges (broadcast
            surcharge up to $21.00/mo) extra and subject to change during and
            after the promotional period; installation/network activation,
            equipment and additional services are extra. General Terms:
            INTERNET: Speed based on wired connection and may vary by address.
            Wireless speeds may vary. TV: TV equipment required; charges may
            apply. Channel and HD programming availability based on level of
            service. Account credentials may be required to stream some TV
            content online. HOME PHONE: Unlimited calling includes calls within
            the U.S., Canada, Mexico, Puerto Rico, Guam, the Virgin Islands and
            more. Services subject to all applicable service terms and
            conditions, subject to change. Services not available in all areas.
            Restrictions apply. Enter your address to determine availability.
            ©2022 Charter Communications. ◊To qualify for the Contract Buyout
            Program, a customer must order and install a qualifying Triple Play
            or limited Double Play promotion; offers not available in all areas.
            Offer available to qualifying customers only who have no outstanding
            obligations to Charter. Payment amount will be determined by the
            Early Termination Fee on the final bill from the previous provider,
            not to exceed $500. For Contract Buyout qualifications, go to
            Spectrum.com/buyout.
          </p>
          <p className="below-table">
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

export default SpectrumInternet;
