// import React, { useState } from "react";
import "./spectrum-bundles.scss";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import SubNav from "../../components/sub-nav/SubNav";
// import { spectrumNavLinks } from "../../assets/data/navLinks/spectrumNavLinks";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import xfintyTvHeroBg from "../../assets/images/xfinity-tv-hero-bg.jpg";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
import mark from "../../assets/images/mark.png";
import quotations from "../../assets/images/quotations.svg";
import Link from "next/link";
// import Newsletter from "../../components/newsletter/Newsletter";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Bundle Spectrum Internet, TV, And Voice"
};

const SpectrumBundles = () => {
  // const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }
  //   setFaq(i);
  // };
  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "Bundle Spectrum Internet, TV, And Voice ",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "Combine TV, phone, and internet service on one easy bill",
      "Get fast maximum internet speeds between 300 Mbps and 1,000 Mbps",
      "Add Spectrum Mobile for additional savings",
      "No contracts",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "TV and internet packages starting at $109.98/mo. for 12 mos.",
  };
  let packageTableData = [
    {
      head: [
        "Package",
        "price",
        "Download speeds up to",
        "Channel count",
        "Phone plan",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Internet + TV Select",
            "$109.98/mo. for 12 mos.",
            "300 Mbps",
            "125+ channels",
            "Add unlimited nationwide calls for $19.99/mo.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Internet Ultra + TV Select",
            "$129.98/mo. for 12 mos.",
            "500 Mbps",
            "125+ channels",
            "Add unlimited nationwide calls for $19.99/mo.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Internet Gig + TV Select",
            "$149.98/mo. for 12 mos.",
            "1,000 Mbps",
            "125+ channels",
            "Add unlimited nationwide calls for $19.99/mo.",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataOne = [
    {
      head: ["Package", "price", "Channel count", "Details"],

      body: [
        {
          content: ["1.", "Spectrum TV® Select", "$59.99/mo.", "125+ channels"],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataTwo = [
    {
      head: [
        "Package",
        "price",
        "Download speeds up to",
        "Channel count",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Internet Ultra + Voice",
            "$69.98/mo. for 12 mos.",
            "300 Mbps",
            "N/A",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Internet Gig + Voice",
            "$89.98/mo. for 12 mos.",
            "500 Mbps",
            "N/A",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Internet Ultra + TV Select + Voice",
            "$129.98/mo. for 12 mos.",
            "1,000 Mbps",
            "125+ channels",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataThree = [
    {
      head: [
        "package",
        "Price",
        "Download speed",
        "Upload speeds up to",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Spectrum Internet + Mobile",
            "Starting at $49.99/mo. for 12 mos.",
            "Up to 300 Mbps",
            "10 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Spectrum Internet Ultra + Mobile",
            "Starting at $69.99/mo. for 12 mos.",
            "Up to 500 Mbps",
            "20 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Spectrum Internet Gig + Mobile",
            "Starting at $89.99/mo. for 12 mos.",
            "Up to 1,000 Mbps",
            "35 Mbps",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataVoice = [
    {
      head: [
        "Package",
        "price",
        "Download speeds up to",
        "Channel count",
        "Phone plan",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Internet + Voice",
            "$69.98/mo. for 12 mos.",
            "300 Mbps",
            "N/A",
            "Unlimited nationwide calls",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Internet + TV Select",
            "$109.98/mo. for 12 mos.",
            "300 Mbps",
            "125+ channels",
            "Unlimited nationwide calls",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Internet Ultra + TV Select",
            "$129.98/mo. for 12 mos.",
            "500 Mbps",
            "125+ channels",
            "N/A",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Internet Gig + TV Select",
            "$149.98/mo. for 12 mos.",
            "1,000 Mbps",
            "125+ channels",
            "N/A",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "Internet Ultra + TV Select + Voice",
            "$149.97/mo. for 12 mos.",
            "500 Mbps",
            "125+ channels",
            "N/A",
          ],
          linkPath: "#",
        },
        {
          content: [
            "6.",
            "Internet Gig + TV Select + Voice",
            "$169.97/mo. for 12 mos.",
            "1,000 Mbps",
            "125+ channels",
            "Unlimited nationwide calls",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="spectrum-bundles">
      {/* <SubNav links={spectrumNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-mobile-bundles-offers">
        <div className="head">
          <h2 className="sect-heading">
            Best Spectrum <span> TV, Internet, and Voice </span> bundles
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

      <CTA
        heading={"Interested in spectrum service?"}
        desc={
          "Enter your zip code below to learn about Spectrum bundle options in your town."
        }
      />

      <div className="section get-spectrum-phone-bundles">
        <div className="head">
          <h2 className="sect-heading">
            Get Spectrum <span> TV, internet, and phone </span> bundles
          </h2>
          <p className="sect-desc">
            Does your home need services like internet for the kids’ TikTok
            browsing, cable TV for the parents, and phone service to call your
            grandparents? Spectrum’s bundles have you covered.
            <br />
            Spectrum Internet has download speeds up to 1,000 Mbps that’ll be
            fast enough for video calls or family movie nights. Spectrum TV
            comes with 125+ TV channels, and you can add additional channel
            packs for more sports and entertainment options. And if you need
            landline phone service, Spectrum Voice offers nationwide and
            international phone coverage as an affordable add-on.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <br />
        <div className="endnote review-endnote">
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
      </div>

      <div className="section spectrum-voice">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> Voice </span>
          </h2>
          <p className="sect-desc">
            Spectrum Voice, which is only available in a Spectrum bundle,
            includes unlimited nationwide phone service. You can get unlimited
            nationwide phone service for only $19.99 per month on top of your
            current bundle. You’ll also get features including caller ID, call
            screening, and 3-way calling.
            <br />
            You can add Voice to most other Spectrum products, but the table
            above shows just a few of the options you can pick. If it’s
            available in your area, the $69.98/mo. Internet Ultra + Voice bundle
            is a great deal for customers who want fast internet speeds. And if
            you want to add in a cable TV plan, you can upgrade to the
            $129.97/mo. triple play.
          </p>
        </div>
        <PackageTable item={packageTableDataTwo} />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change.
        </p>
        <br />
        <div className="package-table-container channels">
          <h4>Spectrum package deals</h4>
          <p className="after-heading">
            Get affordable wireless phone service with
          </p>
          <br />
          <ul>
            <li>
              · Get affordable wireless phone service with{" "}
              <span className="link">
                <Link href={"#"}> Spectrum Mobile </Link>
              </span>
            </li>
            <li>
              · Get a free year of{" "}
              <span className="link">
                <Link href={"#"}>Peacock Premium </Link>
              </span>{" "}
              with a Spectrum TV plan.{" "}
            </li>

            <li>· Get a free internet modem with an internet plan.</li>
          </ul>
          <br />
          <p>
            Check out our{" "}
            <span className="link">
              <Link href={"#"}> Spectrum deals </Link>
            </span>{" "}
            page for the latest offers.
          </p>
          <br />
          <br />
          <div className="endnote review-endnote">
            <div className="endnote-container">
              <Image
                className="quotation-img"
                src={quotations}
                alt="quotations"
              />
              <h4>Want to learn more about Spectrum’s bundle options?</h4>
              <p>
                Visit our{" "}
                <span className="link">
                  <Link href={"#"}> Spectrum bundles review </Link>
                </span>{" "}
                for a full breakdown of the provider’s bundling packages.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section compare-spectrum-internet-plans">
        <div className="head">
          <h2 className="sect-heading">
            <span> Compare </span> Spectrum internet plans
          </h2>
          <p className="sect-desc">
            <span className="link">
              <Link href={"#"}> Spectrum’s internet plans</Link>
            </span>{" "}
            have great speeds, and they’re a great deal for subscribers.
            Spectrum Internet’s 300 Mbps maximum download speeds will be an
            excellent fit for most families. Spectrum Internet Ultra comes with
            500 Mbps maximum download speeds that’ll work best for gamers and
            households with many internet users.
            <br />
            What if you need the best of the best? Look no further than Spectrum
            Internet Gig, which comes with blazingly fast 1,000 Mbps download
            speeds.
          </p>
        </div>
        <PackageTable item={packageTableDataThree} />
      </div>

      <div className="section spectrum-customization-lower-cost">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum TV: more channel <span> customization, lower cost </span>
          </h2>
          <p className="sect-desc">
            Spectrum TV Select is Spectrum’s main TV package and it comes with
            125+ network and basic cable channels. In our annual Editor’s Choice
            awards, we named Spectrum TV Select the cheapest cable TV plan
            around, even beating out streaming services like YouTube TV and Hulu
            + Live TV.
          </p>
        </div>
        <PackageTable item={packageTableDataOne} />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change.
        </p>
        <br />
        <div className="package-table-container channels">
          <h4>Spectrum student discount</h4>
          <p className="after-heading">
            If you want more channels, you can add channel packs on top of your
            base Spectrum TV Select subscription.
            <br />
            The Entertainment View pack ($12 per month) offers great value for
            families with channels like Disney XD and Cooking Channel, while
            Spectrum’s premium cable packs include{" "}
            <span className="link">
              <Link href={"#"}> SHOWTIME® </Link>
            </span>{" "}
            and{" "}
            <span className="link">
              <Link href={"#"}> HBO® </Link>
            </span>
            . Sports fans should spring for the Sports View channel pack ($6 per
            month), which includes essential sports channels like NFL Redzone,
            the ACC Network, and Fox Sports 2.
          </p>
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
                  <td>Spectrum TV Select Signature ($59.99/mo.)</td>
                  <td>ABC, CNN, Lifetime, Paramount Network</td>
                </tr>
                <tr>
                  <td>2. </td>
                  <td>Entertainment View ($12.00/mo.)</td>
                  <td>
                    Cooking Channel, Disney XD, Military History Channel,
                    Ovation
                  </td>
                </tr>
                <tr>
                  <td>3. </td>
                  <td>Sports View ($7.00/mo.)</td>
                  <td>ESPNews, Golf Channel, NFL RedZone</td>
                </tr>
                <tr>
                  <td>4. </td>
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
      </div>

      <div className="section spectrum-budles-features">
        <div className="head">
          <h2 className="sect-heading">
            Get more with Spectrum <span> bundle features </span>
          </h2>
          <p className="sect-desc">
            Your Spectrum bundle also comes with a bounty of bonus features.
            Here’s what you need to know about Spectrum’s best bundle add-ons.
          </p>
        </div>
      </div>

      <div className="section spectrum-packages">
        <div className="head">
          <h2 className="sect-heading">
            <span> All Spectrum </span> packages
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>
        <PackageTable item={packageTableDataVoice} />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section spectrum-bundles-faq">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> packages </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What are the different
                Spectrum packages?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Spectrum has one TV package, one voice package, and three
                  internet plans. You can bundle these services together to save
                  on your Spectrum bill.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What are the different Spectrum packages?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum has one TV package, one voice package, and three internet
              plans. You can bundle these services together to save on your
              Spectrum bill.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What is the cheapest
                Spectrum package?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  The cheapest Spectrum packages are Spectrum Internet ($49.99
                  monthly) and Spectrum TV Select ($59.99 monthly).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" What is the cheapest Spectrum package?"}
            cssClass={"faq-content"}
          >
            <p>
              The cheapest Spectrum packages are Spectrum Internet ($49.99
              monthly) and Spectrum TV Select ($59.99 monthly).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does Spectrum give senior
                citizen discounts?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Spectrum doesn't have senior citizen discounts. But if you
                  have family members who receive Supplement Security Income,
                  you can apply for the Spectrum Internet Assist program. This
                  internet plan offers 30 Mbps download speeds for $17.99 per
                  month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does Spectrum give senior citizen discounts?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum doesn't have senior citizen discounts. But if you have
              family members who receive Supplement Security Income, you can
              apply for the Spectrum Internet Assist program. This internet plan
              offers 30 Mbps download speeds for $17.99 per month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does Spectrum have deals
                for existing customers?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Spectrum's best deals for existing customers include Spectrum
                  Mobile, which offers discounted cell phone plans to Spectrum
                  internet customers.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Does Spectrum have deals for existing customers?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum's best deals for existing customers include Spectrum
              Mobile, which offers discounted cell phone plans to Spectrum
              internet customers.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>How much does the Spectrum
                bundle cost?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  The Spectrum bundle costs between $69.98 and $169.97 per month
                  for the first 12 months. The exact cost of the Spectrum bundle
                  depends on factors like your exact internet plan, services,
                  and add-ons.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"How much does the Spectrum bundle cost?"}
            cssClass={"faq-content"}
          >
            <p>
              The Spectrum bundle costs between $69.98 and $169.97 per month for
              the first 12 months. The exact cost of the Spectrum bundle depends
              on factors like your exact internet plan, services, and add-ons.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>Is Spectrum TV free with
                internet?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  No, Spectrum TV is not free with internet. Spectrum TV Select
                  will add $59.99 to your monthly bill. However, you might be
                  thinking of Spectrum One, a promotion that gives Spectrum
                  Internet customers a year of free Spectrum Mobile.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"Is Spectrum TV free with internet?"}
            cssClass={"faq-content"}
          >
            <p>
              No, Spectrum TV is not free with internet. Spectrum TV Select will
              add $59.99 to your monthly bill. However, you might be thinking of
              Spectrum One, a promotion that gives Spectrum Internet customers a
              year of free Spectrum Mobile.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote spectrum-bundles-endnote">
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
            <span className="bold"> Spectrum Internet Ultra: </span> Limited
            time offer; subject to change; valid to qualified residential
            customers who have not subscribed to any services within the
            previous 30 days and who have no outstanding obligation to Charter.
            Spectrum Internet® Ultra promotion price is $69.99/mo; standard
            rates apply after yr. 1. Taxes, fees and surcharges extra and
            subject to change during and after the promotional period;
            installation/network activation, equipment and additional services
            are extra. General Terms: INTERNET: Speed based on wired connection
            and may vary by address. Wireless speeds may vary. Services subject
            to all applicable service terms and conditions, subject to change.
            Services not available in all areas. Restrictions apply. Enter your
            address to determine availability. ©2022 Charter Communications.
          </p>
          <p>
            <span className="bold"> Spectrum Internet Gig: </span> Limited time
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
            <span className="bold"> Spectrum TV Select: </span> Limited time
            offer; subject to change; valid to qualified residential customers
            who have not subscribed to any services within the previous 30 days
            and who have no outstanding obligation to Charter. Spectrum TV®
            Select promotion price is $59.99/mo; standard rates apply after yr.
            1. Taxes, fees and surcharges (broadcast surcharge up to $21.00/mo)
            extra and subject to change during and after the promotional period;
            installation/network activation, equipment and additional services
            are extra. General Terms: TV: TV equipment required; charges may
            apply. Channel and HD programming availability based on level of
            service. Account credentials may be required to stream some TV
            content online. Services subject to all applicable service terms and
            conditions, subject to change. Services not available in all areas.
            Restrictions apply. Enter your address to determine availability.
            ©2022 Charter Communications.
          </p>
          <p>
            <span className="bold"> Spectrum Voice: </span> Limited time offer;
            subject to change; valid to qualiﬁed residential customers who have
            not subscribed to any services within the previous 30 days and have
            no outstanding obligation to Charter. Price for home phone is
            $14.99/mo when bundled. Taxes and fees included in price;
            installation/network activation, equipment and additional services
            are extra. HOME PHONE: Unlimited calling includes calls within the
            U.S., Canada, Mexico, Puerto Rico, Guam, the Virgin Islands and
            more. Services subject to all applicable service terms and
            conditions, subject to change. Services not available in all areas.
            Restrictions apply. Enter your address to determine availability.
            ©2022 Charter Communications.
          </p>
          <p>
            <span className="bold">
              {" "}
              Spectrum Internet + TV Select + Voice:{" "}
            </span>{" "}
            Limited time offer; subject to change; valid to qualified
            residential customers who have not subscribed to any services within
            the previous 30 days and who have no outstanding obligation to
            Charter. Spectrum TV® Select promotion price is $59.99/mo; standard
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
            ©2022 Charter Communications.
          </p>
          <p>
            <span className="bold"> Spectrum Internet + TV Select: </span>{" "}
            Limited time offer; subject to change; valid to qualified
            residential customers who have not subscribed to any services within
            the previous 30 days and who have no outstanding obligation to
            Charter. Spectrum TV® Select promotion price is $59.99/mo; standard
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
            <span className="bold"> Spectrum Internet + Voice: </span> Limited
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
            <span className="bold"> Mi Plan Latino: </span> Limited time offer;
            subject to change; valid to qualified residential customers who have
            not subscribed to any services within the previous 30 days and who
            have no outstanding obligation to Charter. Mi Plan Latino promotion
            price is $39.99/mo; standard rates apply after yr 1. Mi Plan Latino
            and Internet is $89.98/mo; standard rates apply after yr 1. Mi Plan
            Latino, Internet and Home Phone is $104.97/mo; standard rates apply
            after yr 1. Spectrum TV Select and Latino View is $71.99/mo;
            standard rates apply after yr 1. Taxes, fees and surcharges
            (broadcast surcharge up to $21.00/mo) extra and subject to change
            during and after the promotional period; installation/network
            activation, equipment and additional services are extra. General
            Terms: INTERNET: Speed based on wired connection and may vary by
            address. Wireless speeds may vary. TV: TV equipment required for
            each TV that gets Spectrum TV Latino for an additional monthly
            charge. Channel and HD programming availability based on level of
            service. Account credentials may be required to stream some TV
            content online. HOME PHONE: Unlimited calling includes calls within
            the U.S., Canada, Mexico, Puerto Rico, Guam, the Virgin Islands and
            more. Services subject to all applicable service terms and
            conditions, subject to change. Services not available in all areas.
            Restrictions apply. Enter your address to determine availability.
            ©2022 Charter Communications.
          </p>
          <p>
            To qualify for the Contract Buyout Program, a customer must order
            and install a qualifying promotion; offers not available in all
            areas. Offer available to qualifying customers only who have no
            outstanding obligations to Charter. Payment amount will be
            determined by the Early Termination Fee on the final bill from the
            previous provider, not to exceed $500. For Contract Buyout
            qualifications, go to Spectrum.com/buyout.
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

export default SpectrumBundles;
