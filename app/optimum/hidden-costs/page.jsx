// import React, { useState } from "react";
import "./optimum-hidden-costs.scss";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { optimumNavLinks } from "../../assets/data/navLinks/optimumNavLinks";
import PackageCard from "../../components/package-card/PackageCard";
// import SubNav from "../../components/sub-nav/SubNav";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import PackageTable from "../../components/package-table/PackageTable";
import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Hidden Costs Of Optimum"
};

const OptimumHiddenCosts = () => {
  // const [faq, setFaq] = useState();

  let packageTableData = [
    {
      head: [
        "Plan",
        "1st year price",
        "2nd year price",
        "Ongoing rate",
        "Channels",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Basic TV",
            "$35.00/mo.",
            "$45.00/mo.",
            "$45.00/mo.",
            "50+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Core TV",
            "$75.00/mo.",
            "$85.00/mo.",
            "$105.00/mo.",
            "220+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Select TV",
            "$95.00/mo.",
            "$105.00/mo.",
            "$130.00/mo.",
            "340+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Premier TV",
            "$115.00/mo.",
            "$125.00/mo.",
            "$155.00/mo.",
            "420+",
          ],
          linkPath: "#",
        },
      ],
    },
  ];

  let packageTableDataIncrease = [
    {
      head: [
        "Plan",
        "2-year price lock",
        "3rd year price",
        "Download speeds",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "300 Mbps Internet",
            "$40.00/mo.",
            "$50.00/mo.",
            "300 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "500 Mbps Internet",
            "$60.00/mo.",
            "$70.00/mo.",
            "500 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "1 Gig Fiber Internet",
            "$70.00/mo.",
            "$80.00/mo.",
            "940 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "2 Gig Fiber Internet",
            "$100.00/mo.",
            "$110.00/mo.",
            "2,000 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "$165.00/mo.",
            "$175.00/mo.",
            "$110.00/mo.",
            "5,000 Mbps",
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
    <div className="optimum-hidden-costs">
      {/* <SubNav links={optimumNavLinks} /> */}
      <div className="optimum-costs-hero global-inner-hero">
        <h1>Hidden Costs Of Optimum</h1>
        <p>
          We’ve done the research into the charges, hidden fees, and monthly
          costs that go into your Optimum internet or TV bill.
        </p>
      </div>

      <div className="section best-internet-tv-offer">
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

      <div className="section endnote endnote-start">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            Optimum has its share of deals to attract customers, but you might
            be shocked when your bill is more than your plan’s sticker price.
            Optimum isn’t among the worst service providers when it comes to
            hidden fees, but it’s not afraid to slip in charges that our top TV
            and internet providers generally avoid.
            <br />
            Let’s break down hidden fees that are behind your Optimum TV or
            internet service, so you’ll know what exactly you’re paying for on
            every bill.
          </p>
        </div>
      </div>

      <StickyHeader />

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
          <Link href={"#"}>Optimum plans and promotional prices</Link>
          <Link href={"#"}>Optimum TV hidden costs </Link>
          <Link href={"#"}>Optimum internet hidden costs </Link>
          <Link href={"#"}>Optimum general hidden fees </Link>
        </div>
      </div>

      <div className="section optimum-plans-and-promotional-prices">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> plans and promotional prices </span>
          </h2>
          <p className="sect-desc">
            Optimum doesn’t have headaches like contracts or early termination
            fees, but the provider’s TV and internet plans still have scheduled
            price increases.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Optimum TV price increase after 12 mos.: $10/mo.</h4>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            Data as of post date. Offers and availability may vary by location
            and are subject to change.
          </p>
          <br />
          <p>
            Optimum TV prices stay the same for one year, and then your bill
            will increase by $10 monthly. After two years, your service will
            change to Optimum’s ongoing rate.
            <br />
            The prices in the chart above show the current ongoing rate as of
            this publication, but the prices may be different when you reach
            your third year as an Optimum customer.
          </p>
        </div>
        <br />
        <div className="package-table-container channels">
          <h4>Optimum internet price increase after 24 mos.: $10/mo.</h4>
          <PackageTable item={packageTableDataIncrease} />
          <p className="below-table">
            Data as of post date. Offers and availability may vary by location
            and are subject to change. *Wired connection speeds. Wi-Fi speeds
            may vary.
          </p>
          <br />
          <p>
            Optimum internet prices stay the same for two years. In your third
            year, prices increase by $10 per month. If you stick with Optimum
            for four years, you’ll be moved to Optimum’s ongoing rate.
            <br />
            Optimum will confirm your new regular price on your 24th monthly
            bill, so we’d recommend setting a reminder for when your Optimum
            service hits the 24-month mark. That way, you can make sure you’re
            okay with your new monthly price (or you can start searching for a
            new provider).
          </p>
        </div>
      </div>

      <CTA
        heading={"Looking for TV and internet service providers in your area?"}
        desc={
          "Enter your zip code below to see your neighborhood’s TV and internet provider options."
        }
      />

      <div className="section optimum-tv-hidden-costs">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> TV hidden costs </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Fee</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>TV broadcast fee</td>
                <td>$9.99/mo.</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Regional sports network fee </td>
                <td>$10.47/mo. </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Cloud DVR </td>
                <td>$9.99–$21.99/mo. </td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Optimum One </td>
                <td>$20.00/mo. </td>
              </tr>
              <tr>
                <td>5.</td>
                <td>Optimum TV Box </td>
                <td>$10.00/mo. </td>
              </tr>
              <tr>
                <td>6.</td>
                <td>Standard cable TV box </td>
                <td>$11.00/mo. </td>
              </tr>
              <tr>
                <td>7.</td>
                <td>Standard DVR </td>
                <td>$12.95/mo. </td>
              </tr>
              <tr>
                <td>8.</td>
                <td>MAX </td>
                <td>$15.99/mo. </td>
              </tr>
              <tr>
                <td>9.</td>
                <td>SHOWTIME®/CINEMAX® </td>
                <td>$11.95/mo. </td>
              </tr>
              <tr>
                <td>10.</td>
                <td>Other premium cable/on-demand services </td>
                <td>$4.95–$29.99/mo. </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="package-table-container channels">
          <h4>Optimum TV broadcast fees: $20.46/mo.</h4>
          <br />
          <p>
            As with nearly every TV provider, Optimum has to pay fees to TV
            networks. Unfortunately, they offload some of those costs onto you.
            <br />
            For TV subscribers, Optimum has two mandatory charges: a $9.99 TV
            broadcast fee and a $10.47 regional sports network fee.
            <br />
            The only way you can avoid these fees is by downgrading to the
            Optimum 300 and Basic TV bundle, which has a limited lineup of 50
            local channels. But most of Basic TV’s channels are available for
            free over-the-air—if you only need local channels, just buy a
            digital antenna for a onetime charge of $50 instead.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Optimum TV Cloud DVR fees: $9.99–$21.99/mo.</h4>
          <br />
          <p>
            If you want to rewatch shows or rewind live TV, you can spring for
            Optimum’s Cloud DVR service.
            <br />
            Optimum’s Cloud DVR comes in three storage tiers:
          </p>
          <ul>
            <li>· $9.99/mo. for 25 hours of cloud storage</li>
            <li>· $17.99/mo. for 75 hours of storage</li>
            <li>· $21.99/mo. for 150 hours of storage</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Optimum TV equipment fees: $10.00–$20.00/mo.</h4>
          <br />
          <p>
            You’ll have several Optimum TV hardware options depending on your
            exact TV package and location. Some areas offer the Optimum One—a
            combo DVR, Wi-Fi router, and internet modem that costs $20.00 per
            month.
            <br />
            However, the Optimum One is on its way out. More areas offer the
            Optimum TV Box for $10.00 per month. The Optimum TV Box doesn’t
            include a modem/router (you’ll get the Optimum Gateway 6 for an
            additional $10.00 monthly if you’re on an internet plan).
            <br />
            You might also get a standard TV receiver with no DVR for $11.00 or
            $12.95 monthly. But we’ve only seen these prices on rate cards, not
            for new customers at checkout. If you’re an Optimum customer with
            one of these pricier options, call Optimum customer service about
            upgrading your TV equipment to the more affordable Optimum TV Box.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Optimum TV premium cable fees: $4.95–$29.99/mo.</h4>
          <br />
          <p>
            Mas (formerly HBO Max) costs $15.99 per month, while SHOWTIME and
            CINEMAX cost $11.95 per month. You can also add on-demand
            subscriptions from other anime and specialty networks for between
            $4.95 and $29.99 per month.
          </p>
        </div>
      </div>

      <div className="section optimum-internet-hidden-costs">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> internet hidden costs </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Fee</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Optimum Wi-Fi router/modem rental</td>
                <td>Free or $10.00/mo.</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Optimum Wi-Fi extender rental </td>
                <td>Free or $3.00/mo. </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Network Enhancement Fee</td>
                <td>$3.50/mo. </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="package-table-container channels">
          <h4>Optimum Network Enhancement Fee: $3.50/mo.</h4>
          <br />
          <p>
            According to Optimum, the Network Enhancement Fee helps the ISP
            invest in its network infrastructure. In practice? The mandatory fee
            is basically a hidden price hike that’s an inconvenient (but small)
            eyesore on your monthly bill.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Optimum equipment fee: $10.00/mo.</h4>
          <br />
          <p>
            Optimum currently offers its gateway for free for new customers. But
            if you don’t score this deal, you’ll pay $10.00 per month to rent a
            combo modem/Wi-Fi router from the internet provider.
            <br />
            We normally recommend purchasing your own cable modem and Wi-Fi
            router to save on rental fees, but Optimum’s internet gateway can be
            useful if you don’t want to handle your own internet
            troubleshooting.
            <br />
            And if your plan qualifies for it, you can also get a free Wi-Fi
            extender to help cover Wi-Fi dead spots in your home. If you want to
            rent more, they’re $3 monthly per device.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>Looking for your own router or modem?.</h4>
          <br />
          <p>
            If you’re wary of Optimum’s equipment, we can help you find an
            alternative modem for Optimum cable internet. And check out our
            Wi-Fi router and cable modem guides to see more hardware picks.
          </p>
        </div>
      </div>

      <div className="section optimum-general-fees">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> general fees </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Fee</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Late payment</td>
                <td>$10.00</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Installation </td>
                <td>$99.00–$149.99 </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Restore service </td>
                <td>$10.00 for up to two devices, $15.00 for three devices </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="package-table-container channels">
          <h4>Optimum late payment fee: $10.00</h4>
          <br />
          <p>
            If you miss a bill, you’ll be hit with a one-time $10.00 fee. Check
            out our Optimum customer service guide to learn more ways to pay
            your Optimum bill.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Optimum installation fee: $99.00–$149.99</h4>
          <br />
          <p>
            Your standard Optimum installation will cost $99.00 for a technician
            to set up your TV or internet service. But if you upgrade to a
            premium installation for $149.99, your technician will install
            outlets, take care of your Wi-Fi setup, and hard-wire devices for
            you.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Optimum restore service fee: $10.00–$15.00</h4>
          <br />
          <p>
            If you miss a bill and Optimum flips your service off, it’ll cost
            extra to switch it back on once you pay off your balance.
            <br />
            The exact fee amount depends on if you have Optimum TV, internet, or
            phone services. If you’re reconnecting one to two services, you’ll
            pay a $10.00 fee. If you’re reconnecting all three services, Optimum
            increases the fee to $15.00.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take:<span> Is Optimum worth it?</span>
          </h2>
          <p className="sect-desc">
            Optimum has its share of hidden fees, but you can dodge some of the
            biggest ones if you’re willing to do the legwork.
            <br />
            As a rule of thumb, we’d recommend buying your own equipment
            whenever you can to avoid rental fees. You can also avoid Optimum’s
            broadcast fees if you downgrade to the Basic TV local channel
            lineup, which is available only in an internet bundle.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>view optimum plans</Link>
        </div>
      </div>

      <div className="section optimum-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Optimum hidden costs </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What is the cheapest
                Optimum package?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  The cheapest Optimum TV package is Basic TV, which includes 50
                  channels for $35.00 per month. The cheapest Optimum internet
                  package is Optimum 300, which costs $40.00 per month for 300
                  Mbps maximum download speeds.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What is the cheapest Optimum package?"}
            cssClass={"faq-content"}
          >
            <p>
              The cheapest Optimum TV package is Basic TV, which includes 50
              channels for $35.00 per month. The cheapest Optimum internet
              package is Optimum 300, which costs $40.00 per month for 300 Mbps
              maximum download speeds.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Can you negotiate with
                Optimum?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  You can call Optimum at +1-866-218-3259 to try and lower your
                  bill by saying you’ll hop to competitors like Verizon Fios,
                  but your odds of success depend on everything from your
                  neighborhood to the agent you’re talking with.
                  <br />
                  Check out our customer service negotiation guide for tips when
                  you’re haggling with Optimum.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Can you negotiate with Optimum?"}
            cssClass={"faq-content"}
          >
            <p>
              You can call Optimum at +1-866-218-3259 to try and lower your bill
              by saying you’ll hop to competitors like Verizon Fios, but your
              odds of success depend on everything from your neighborhood to the
              agent you’re talking with.
              <br />
              Check out our customer service negotiation guide for tips when
              you’re haggling with Optimum.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span>How do I get Optimum to
                lower my bill?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  The best way to lower your Optimum bill is by calling Optimum
                  customer service at +1-866-218-3259 and negotiate with the
                  retention department.
                  <br />
                  You can also downgrade your internet or TV service package to
                  lower your monthly bill.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"How do I get Optimum to lower my bill?"}
            cssClass={"faq-content"}
          >
            <p>
              The best way to lower your Optimum bill is by calling Optimum
              customer service at +1-866-218-3259 and negotiate with the
              retention department.
              <br />
              You can also downgrade your internet or TV service package to
              lower your monthly bill.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What is Optimum Online's
                fee?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Optimum’s main internet fee is the Network Enhancement Fee,
                  which adds $3.50 to your monthly bill.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" What is Optimum Online's fee?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum’s main internet fee is the Network Enhancement Fee, which
              adds $3.50 to your monthly bill.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Optimum Overview | Optimum Channel Lineup | Optimum Internet
          | Optimum Bundles | Optimum Customer Service
        </p>
      </div>

      <div className="section endnote review-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />

          <h4>Related Articles:</h4>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Hidden Costs of Xfinity </Link>
              </span>{" "}
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Hidden Costs of Spectrum </Link>
              </span>{" "}
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Hidden Costs of AT&T </Link>
              </span>{" "}
            </li>
          </ul>
        </div>
      </div>
      {/* <Newsletter /> */}
    </div>
  );
};

export default OptimumHiddenCosts;
