// import React, { useState } from "react";
import "./optimum-mobile.scss";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { optimumNavLinks } from "../../assets/data/navLinks/optimumNavLinks";
import PackageCard from "../../components/package-card/PackageCard";
// import SubNav from "../../components/sub-nav/SubNav";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
import dollarbubble from "../../assets/images/dollarbubble.png";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Optimum Mobile Review: Plans, Bundles, And More"
};

const OptimumMobile = () => {
  // const [faq, setFaq] = useState();

  let packageTableData = [
    {
      head: [
        "Plan",
        "Monthly price (single line)",
        "Monthly price (2–4 lines)",
        "Monthly price (5 lines)",
        "Data allowance",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "1 GB",
            "$15.00/line",
            "$15.00/line",
            "$15.00/line",
            "1 GB",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "3 GB",
            "$25.00/line",
            "$25.00/line",
            "$25.00/line",
            "3 GB",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Unlimited",
            "$45.00/line",
            "$30.00/line",
            "$25.00/line",
            "20 GB",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Unlimited Max",
            "$55.00/line",
            "$40.00/line",
            "$35.00/line",
            "50 GB",
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
    <div className="optimum-mobile">
      {/* <SubNav links={optimumNavLinks} /> */}
      <div className="optimum-costs-hero global-inner-hero">
        <h1>Optimum Mobile Review November 2024: Plans, Bundles, And More</h1>
        <p>
          From data caps to international rates, we’ve researched everything you
          need to know about Optimum Mobile.
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
        <br />
        <p>*Price per line with five phone line plan and Optimum Internet.</p>
      </div>

      <div className="section endnote endnote-start">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            Optimum is the latest internet provider to get into the phone
            service game. With Optimum Mobile, you can bundle nationwide phone
            service with your Optimum service plan. Optimum Mobile won’t knock
            your socks off, but with features like its 50 GB phone plan, it’s
            worth a look if you’re already an Optimum internet subscriber.
          </p>
          <br />
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
                  <td>A great 50 GB plan</td>
                  <td>Strict overage speed limits</td>
                </tr>
                <tr>
                  <td>Multi-line savings on Unlimited plans</td>
                  <td>Confusing international rates</td>
                </tr>
              </tbody>
            </table>
          </div>
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
          <Link href={"#"}>Optimum Mobile plans</Link>
          <Link href={"#"}>What to look for</Link>
        </div>
      </div>

      <CTA
        heading={"Interested in Optimum Mobile?"}
        desc={
          "You’ll get the biggest Optimum Mobile deals with an Optimum internet subscription. Enter your zip code below to see if Optimum is available in your area."
        }
      />

      <div className="section optimum-mobile-plans">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> Mobile plans </span>
          </h2>
          <p className="sect-desc">
            Optimum Mobile’s four plans offer a variety of excellent coverage
            Optimum Mobile uses T-Mobile’s mobile network, so you’ll get
            standard features like 5G support and nationwide cellular coverage.
            For prospective customers, Optimum Mobile offers several per
            gigabyte and unlimited data plans.
            <br />
            Optimum’s 1 GB plan ($14/mo.) is in line with the competition, as
            Xfinity Mobile and Spectrum Mobile’s 1 GB plans cost $15 and $14 per
            month. But Optimum Mobile’s 3 GB plan is cheaper per month compared
            to both competitors.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change.1 GB, 3 GB & Unlimited & Unlimited
          Max plan details: AutoPay required. New Optimum Mobile lines only,
          cannot be applied to existing lines of service. Pricing, offer and
          terms subject to change at any time.
        </p>
        <br />
        <div className="package-table-container channels">
          <p>
            With Optimum’s Unlimited plans, you’ll get features like large data
            caps and multi-line savings. Your monthly rate will go down by $5
            for each line you add to the account (for up to five lines).
            Unlimited Max’s 50 GB cap is impressive, as we rarely see providers
            like Optimum Mobile have caps that exceed 20 GB.
            <br />
            By comparison, a 50 GB plan (with a five-line account) would cost
            $40 per line on Verizon compared to $35 per line on Optimum Mobile.
            But Verizon’s 50 GB plan comes with bells and whistles like 5G
            tethering and a free Disney bundle subscription. With Optimum
            Mobile, your benefits start and end with cellular service.
            <br />
            Optimum Mobile’s overage policy is similarly stingy. Once you exceed
            your plan’s cap, your internet speeds will be lowered to 128 Kbps or
            512 Kbps (depending on your exact plan). At these speeds, your
            phone’s internet connection will be borderline unusable. With
            competitors like Xfinity Mobile, your plan’s overage speeds will be
            around 1 Mbps, so you can still use your phone for basic web
            browsing.
          </p>
        </div>
        <br />
        <div className="package-table-container channels">
          <Image src={dollarbubble} alt="mark" className="mark" />
          <h4>Optimum Mobile fees</h4>
          <br />
          <p>
            Optimum Mobile’s biggest fee is its $20 per line activation charge.
            This fee is a one-time charge, but it can add up if your plan has
            more than a few lines. Spectrum Mobile has a $10 activation fee
            while Xfinity Mobile does away with it entirely.
            <br />
            Unlike a lot of cellular plans from internet providers, Optimum
            Mobile doesn’t require Optimum internet, but you’ll get the best
            Optimum Mobile rates with a bundle. Without an Optimum internet
            plan, you’ll pay an additional $10 to $15 more per line per month
            for Optimum Mobile.
            <br />
            Also, Optimum Mobile’s approach to international calls is fairly
            confusing. Optimum breaks up its international coverage into four
            groups of countries. For each group, you’ll pay a flat monthly fee
            between $20 and $60 for phone and text service. Unless you’re
            calling overseas family members on a weekly basis, it’ll be tough to
            get your money’s worth from Optimum Mobile’s international pricing.
            <br />
            To learn more about Optimum’s hidden fees, check out our{" "}
            <span className="link">
              <Link href={"#"}>comprehensive guide.</Link>
            </span>
          </p>
        </div>
      </div>

      <div className="section optimum-look-for">
        <div className="head">
          <h2 className="sect-heading">
            What to <span> look for </span>
          </h2>
          <p className="sect-desc">
            Optimum Mobile has its share of unique features compared to other
            cellular providers. Before you sign the dotted line, here’s what
            you’ll need to know about Optimum Mobile.
          </p>
        </div>
        <br />
        <div className="package-table-container channels">
          <h4>CDMA vs. GSM phones</h4>
          <br />
          <p>
            Cellular networks are built on two competing systems: CDMA (Verizon)
            and GSM (T-Mobile and AT&T) networks. Because Optimum Mobile uses
            T-Mobile’s network, your phone may not work if you were previously
            with a provider like Verizon or Xfinity Mobile.
            <br />
            Use{" "}
            <span className="link">
              <Link href={"#"}>Optimum Mobile’s compatibility</Link>
            </span>{" "}
            tool to confirm if your current phone can be carried over to
            Optimum.
          </p>
        </div>
        <br />
        <div className="package-table-container channels">
          <h4>Optimum Mobile deals</h4>
          <br />
          <p>
            Optimum Mobile’s best deals have included offers like a free year of
            its 1 GB plan when you bundle Optimum Mobile and Optimum internet
            service. Check out our{" "}
            <span className="link">
              <Link href={"#"}> Optimum deals guide </Link>
            </span>
            for the latest Optimum and Optimum Mobile savings.
          </p>
        </div>
        <br />
        <div className="package-table-container channels">
          <Image src={quotationsIcon} alt="mark" className="mark" />
          <h4>Want to bundle internet and cell phone service?</h4>
          <br />
          <p>
            Internet and phone bundles are a great way to save on your monthly
            bill. Visit our{" "}
            <span className="link">
              <Link href={"#"}> internet and cell phone guide</Link>
            </span>{" "}
            to learn about the best bundle options.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take:<span> Is Optimum Mobile worth it?</span>
          </h2>
          <p className="sect-desc">
            With downsides like large activation fees and aggressive overage
            throttling, Optimum Mobile doesn’t necessarily separate itself from
            the pack. But Optimum Mobile’s decent monthly rates and wide
            availability make the provider a decent option if you’re interested
            in an Optimum service bundle.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>view optimum plans</Link>
        </div>
      </div>

      <div className="section optimum-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Optimum Mobile </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What network does Optimum
                Mobile use?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Optimum Mobile uses T-Mobile’s network to provide cell phone
                  service.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What network does Optimum Mobile use?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum Mobile uses T-Mobile’s network to provide cell phone
              service.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is Optimum Mobile the same
                as Altice Mobile?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Optimum Mobile is the same thing as Altice Mobile. Altice
                  Mobile renamed itself to Optimum Mobile in 2021.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Is Optimum Mobile the same as Altice Mobile?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum Mobile is the same thing as Altice Mobile. Altice Mobile
              renamed itself to Optimum Mobile in 2021.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span>What is Optimum Mobile?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Optimum Mobile is the cell phone provider division of Optimum.
                  With Optimum Mobile, you can sign up for cell phone plans and
                  get up to 50 GB of mobile data per month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"What is Optimum Mobile?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum Mobile is the cell phone provider division of Optimum.
              With Optimum Mobile, you can sign up for cell phone plans and get
              up to 50 GB of mobile data per month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Is Optimum Mobile really
                unlimited?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Optimum Mobile’s Unlimited service plans are not technically
                  unlimited. Once you hit the plan’s data cap, you won’t be hit
                  with overage charges, but your data speeds will be slowed down
                  to around 512 Kbps.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Is Optimum Mobile really unlimited?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum Mobile’s Unlimited service plans are not technically
              unlimited. Once you hit the plan’s data cap, you won’t be hit with
              overage charges, but your data speeds will be slowed down to
              around 512 Kbps.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote optimum-review-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Methodology:</h4>
          <p>
            To evaluate Optimum Mobile, we analyzed data including pricing,
            overage speed limits, and data caps for each Optimum Mobile plan. We
            also compared Optimum Mobile to operators including Spectrum Mobile
            and Xfinity Mobile to see how Optimum Mobile stacked up to the
            competition.
            <br />
            For more on our methodology, see our
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>{" "}
            page.
          </p>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default OptimumMobile;
