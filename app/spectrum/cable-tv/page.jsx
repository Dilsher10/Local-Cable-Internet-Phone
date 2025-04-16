// import React, { useState } from "react";
import "./spectrum-tv.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { spectrumNavLinks } from "../../assets/data/navLinks/spectrumNavLinks";
import xfintyTvHeroBg from "../../assets/images/xfinity-tv-hero-bg.jpg";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import PackageCard from "../../components/package-card/PackageCard";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import mark from "../../assets/images/mark.png";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";
import quotations from "../../assets/images/quotations.svg";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Spectrum TV Packages"
};

const SpectrumTv = () => {
  // const [faq, setFaq] = useState(null);

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "Spectrum TV Packages",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "Up to 228+ channels with Spectrum add-on packs",
      "Comes with free Peacock Premium",
      "Watch on the go with Spectrum’s TV app",
      "No cable box requirements",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "TV packages starting at $59.99/mo.",
  };
  let packageTableData = [
    {
      head: ["Package", "Price", "Channel count", "Details"],

      body: [
        {
          content: [
            "1.",
            "Spectrum TV® Select Signature",
            "$59.99/mo.",
            "150+ channels",
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
        "Download speeds up to",
        "Channel count",
        "Phone plan",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Spectrum Internet 300 Mbps + Spectrum TV Select Signature",
            "$109.98/mo. for 12 months",
            "300 Mbps",
            "150+ channels",
            "Add for $14.99/mo.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Spectrum Internet 500 Mbps + Spectrum TV Select Signature ",
            "$129.98/mo. for 12 months ",
            "500 Mbps",
            "150+ channels",
            "Add for $14.99/mo. ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Spectrum Internet Gig + Spectrum TV Select Signature + Entertainment View",
            "$161.98/mo. for 12 months",
            "1,000 Mbps",
            "205+ channels",
            "Add for $14.99/mo.",
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
    <div className="spectrum-tv">
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
        heading={"Ready to start watching your favorite shows?"}
        desc={
          " Enter your zip code below to learn more about Spectrum TV plans."
        }
      />

      <div className="section endnote tv-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={mark} alt="mark" />
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

      <div className="section spectrum-tv-packages">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> TV packages</span>
          </h2>
          <p className="sect-desc">
            Other TV providers may stuff their TV plans with no-name channels to
            puff up their channel lineups, but Spectrum’s TV options let you pay
            for the channels you want. Spectrum TV Select Signature is
            Spectrum’s starting TV plan, and it comes with 150+ local and basic
            cable channels that’ll cover everybody’s TV habits.
            <br />
            Want to catch up on the latest comedies? TBS, Comedy Central, and
            TNT are there. What about if the big game’s on? Between ESPN, Fox
            Sports, and all the major networks, your bases are covered there.
          </p>
        </div>
        <PackageTable item={packageTableData} />
      </div>

      <div className="section spectrum-entertainment-view">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum
            <span> TV Select Signature + Sports View + Entertainment View</span>
          </h2>
          <p className="sect-desc">
            Let’s face it: one of the top reasons to get cable TV is live sports
            and premium cable channels.
            <br />
            Spectrum TV Select Signature is no slouch, but if you want more
            channels, you can add additional channel packs to your package. Each
            Spectrum add-on pack will get you basic cable and premium cable
            channels like Cooking Channel,
            <span className="link">
              <Link href={"#"}> Max™, </Link>
            </span>
            and
            <span className="link">
              <Link href={"#"}> SHOWTIME®. </Link>
            </span>
          </p>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Channel package</th>
                <th>Popular channels</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1. </td>
                <td>Spectrum TV Select Signature ($59.99/mo.) </td>
                <td>ABC, CNN, Lifetime, Paramount Network </td>
              </tr>
              <tr>
                <td>2. </td>
                <td>Entertainment View ($12.00/mo.)</td>
                <td>
                  Cooking Channel, Disney XD, Military History Channel, Ovation
                </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Sports View ($7.00/mo.)</td>
                <td>ESPNews, Golf Channel, NFL RedZone</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Latino View ($12.00/mo.)</td>
                <td>Fox Deportes, beIN SPORTS, Telemundo</td>
              </tr>
              <tr>
                <td>5.</td>
                <td>Max ($16.00/mo.)</td>
                <td>Max subscription, HBO Family, HBO Zone</td>
              </tr>
              <tr>
                <td>6.</td>
                <td>SHOWTIME ($10.00/mo.)</td>
                <td>SHOWTIME, SHOWTIME Family Zone, Showtime Showcase</td>
              </tr>
              <tr>
                <td>7.</td>
                <td>STARZ® ($9.00/mo.)</td>
                <td>STARZ, STARZ Cinema, STARZEncore</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="divider-two">
        <h4>Should I get Spectrum cable TV service?</h4>
        <p>
          Check out our full Spectrum cable TV review to learn more about
          Spectrum’s TV options and costs.
        </p>
      </div>

      <div className="section spectrum-tv-packages">
        <div className="head">
          <h2 className="sect-heading">
            <span> Spectrum </span> TV Select Signature + Entertainment View
          </h2>
          <p className="sect-desc">
            For the best deals, consider bundling Spectrum TV with{" "}
            <span className="link">
              <Link href={"#"}> Spectrum Internet, </Link>
            </span>{" "}
            <span className="link">
              <Link href={"#"}> Spectrum Mobile, </Link>
            </span>{" "}
            or phone service. With a{" "}
            <span className="link">
              <Link href={"#"}> Spectrum Bundle, </Link>
            </span>{" "}
            you’ll get a bundle discount and a single, convenient bill.
            Spectrum’s internet plans also offer fast speeds that’ll meet any
            home’s download needs.
          </p>
        </div>
        <PackageTable item={packageTableDataTwo} />
      </div>

      <div className="section spectrum-watch-tv-first">
        <div className="head">
          <h2 className="sect-heading">
            Watch <span> when you want </span> with Spectrum TV
          </h2>
          <p className="sect-desc">
            Spectrum’s TV plans come with a lot more than TV channels. Here’s
            everything else that comes with your Spectrum TV service plan.
          </p>
        </div>
      </div>

      <div className="section spectrum-watch-tv-second">
        <div className="head">
          <h2 className="sect-heading">
            Watch <span> when you want </span> with Spectrum TV
          </h2>
          <p className="sect-desc">
            You can always watch Spectrum TV by connecting a cable box to your
            TV, but that’s not the only way to watch Spectrum TV. The Spectrum
            TV app is available on platforms including Roku devices, the Apple
            App Store, and Samsung smart TVs. Once you install the Spectrum TV
            app, you can watch Spectrum TV on any screen.
          </p>
        </div>
      </div>

      <div className="section spectrum-tv-faq">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span>TV</span> FAQ
          </h2>

          <p className="sect-desc">
            TL;DR? Xfinity kills it. For more detailed info on all Xfinity
            equipment and services, see our comprehensive Xfinity equipment
            guide..
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
                  Spectrum TV Select Signature costs $59.99 per month. You can
                  purchase additional basic cable and premium cable channel
                  packs for between $7.00 and $15.00 per month.
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
              Spectrum TV Select Signature costs $59.99 per month. You can
              purchase additional basic cable and premium cable channel packs
              for between $7.00 and $15.00 per month.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What is the cheapest
                Spectrum TV package?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  TV Select Signature is the cheapest Spectrum TV package
                  starting at $59.99/mo. per month for 150+ HD channels
                  including ESPN, Discovery Channel, CNN, HGTV, Lifetime, TLC,
                  and many more. You can bundle TV Select Signature with
                  <span className="link">
                    <Link href={"#"}> Spectrum Internet 300 </Link>
                  </span>
                  Mbps for $109.98 per month.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"2"}
            title={"What is the cheapest Spectrum TV package?"}
            cssClass={"faq-content"}
          >
            <p>
              TV Select Signature is the cheapest Spectrum TV package starting
              at $59.99/mo. per month for 150+ HD channels including ESPN,
              Discovery Channel, CNN, HGTV, Lifetime, TLC, and many more. You
              can bundle TV Select Signature with
              <span className="link">
                <Link href={"#"}> Spectrum Internet 300 </Link>
              </span>
              Mbps for $109.98 per month.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What is included in the
                Spectrum basic package?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Spectrum TV Select Signature is Spectrum's basic TV package.
                  It includes network and basic cable channels like ABC, Comedy
                  Central, and Lifetime.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"3"}
            title={"What is included in the Spectrum basic package?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum TV Select Signature is Spectrum's basic TV package. It
              includes network and basic cable channels like ABC, Comedy
              Central, and Lifetime.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Is Spectrum TV free with
                internet?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Spectrum TV is not free with internet. If you want Spectrum TV
                  service, you will have to pay a subscription fee.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"4"}
            title={"Is Spectrum TV free with internet?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum TV is not free with internet. If you want Spectrum TV
              service, you will have to pay a subscription fee.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> What is Spectrum's most
                basic TV package?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Spectrum's most basic TV package is TV Select Signature, which
                  lands you 150+ channels for just $59.99 per month.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"5"}
            title={"What is Spectrum's most basic TV package?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum's most basic TV package is TV Select Signature, which
              lands you 150+ channels for just $59.99 per month.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> Are Spectrum TV and
                Spectrum cable the same?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  Yes, all of Spectrum's TV packages are cable-based, so you can
                  use those terms interchangeably.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"6"}
            title={"Are Spectrum TV and Spectrum cable the same?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, all of Spectrum's TV packages are cable-based, so you can use
              those terms interchangeably.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="endnote tv-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Disclaimer:</h4>
          <p>
            Spectrum TV Select Signature: Limited time offer; subject to change;
            valid to qualified residential customers who have not subscribed to
            any services within the previous 30 days and who have no outstanding
            obligation to Charter. Spectrum TV Select Signature promotion price
            is $59.99/mo; standard rates apply after yr 1. Taxes, fees, and
            surcharges (broadcast surcharge up to $23.20/mo) extra and subject
            to change during and after the promotional period;
            installation/network activation, equipment and additional services
            are extra. General Terms: TV: TV equipment required; charges may
            apply. Channel and HD programming availability based on level of
            service and location. Account credentials may be required to stream
            some TV content online. Services subject to all applicable service
            terms and conditions, subject to change. Services not available in
            all areas. Restrictions apply. Enter your address to determine
            availability.
          </p>
          <p>
            Spectrum Internet + TV Select + Voice: Limited time offer; subject
            to change; valid to qualified residential customers who have not
            subscribed to any services within the previous 30 days and who have
            no outstanding obligation to Charter. Spectrum TV® Select promotion
            price is $59.99/mo; standard rates apply after yr. 1. Spectrum
            Internet® promotion price is $49.99/mo; standard rates apply after
            yr. 1. Spectrum Voice®: Price is $14.99/mo when bundled. Taxes, fees
            and surcharges (broadcast surcharge up to $21.00/mo) extra and
            subject to change during and after the promotional period;
            installation/network activation, equipment and additional services
            are extra. General Terms: INTERNET: Speed based on wired connection
            and may vary by address. Wireless speeds may vary. TV: TV equipment
            required; charges may apply. Channel and HD programming availability
            based on level of service. Account credentials may be required to
            stream some TV content online. HOME PHONE: Unlimited calling
            includes calls within the U.S., Canada, Mexico, Puerto Rico, Guam,
            the Virgin Islands and more. Services subject to all applicable
            service terms and conditions, subject to change. Services not
            available in all areas. Restrictions apply. Enter your address to
            determine availability. ©2022 Charter Communications.
          </p>
          <p>
            Spectrum Internet + TV Select: Limited time offer; subject to
            change; valid to qualified residential customers who have not
            subscribed to any services within the previous 30 days and who have
            no outstanding obligation to Charter. Spectrum TV® Select promotion
            price is $59.99/mo; standard rates apply after yr. 1. Spectrum
            Internet® promotion price is $49.99/mo; standard rates apply after
            yr. 1. Taxes, fees and surcharges (broadcast surcharge up to
            $21.00/mo) extra and subject to change during and after the
            promotional period; installation/network activation, equipment and
            additional services are extra. General Terms: INTERNET: Speed based
            on wired connection and may vary by address. Wireless speeds may
            vary. TV: TV equipment required; charges may apply. Channel and HD
            programming availability based on level of service. Account
            credentials may be required to stream some TV content online.
            Services subject to all applicable service terms and conditions,
            subject to change. Services not available in all areas. Restrictions
            apply. Enter your address to determine availability. ©2022 Charter
            Communications.
          </p>
          <p>
            Spectrum Internet 500 Mbps: For 12 months when bundled. Limited time
            offer; subject to change; valid to qualified residential customers
            who have not subscribed to any services within the previous 30 days
            and who have no outstanding obligation to Charter.
          </p>
          <p>
            Mi Plan Latino: Limited time offer; subject to change; valid to
            qualified residential customers who have not subscribed to any
            services within the previous 30 days and who have no outstanding
            obligation to Charter. Mi Plan Latino promotion price is $39.99/mo;
            standard rates apply after yr 1. Mi Plan Latino and Internet is
            $89.98/mo; standard rates apply after yr 1. Mi Plan Latino, Internet
            and Home Phone is $104.97/mo; standard rates apply after yr 1.
            Spectrum TV Select and Latino View is $71.99/mo; standard rates
            apply after yr 1. Taxes, fees and surcharges (broadcast surcharge up
            to $21.00/mo) extra and subject to change during and after the
            promotional period; installation/network activation, equipment and
            additional services are extra. General Terms: INTERNET: Speed based
            on wired connection and may vary by address. Wireless speeds may
            vary. TV: TV equipment required for each TV that gets Spectrum TV
            Latino for an additional monthly charge. Channel and HD programming
            availability based on level of service. Account credentials may be
            required to stream some TV content online. HOME PHONE: Unlimited
            calling includes calls within the U.S., Canada, Mexico, Puerto Rico,
            Guam, the Virgin Islands and more. Services subject to all
            applicable service terms and conditions, subject to change. Services
            not available in all areas. Restrictions apply. Enter your address
            to determine availability. ©2022 Charter Communications.
          </p>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default SpectrumTv;
