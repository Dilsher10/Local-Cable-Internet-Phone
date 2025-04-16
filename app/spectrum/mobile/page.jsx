// import React, { useState } from "react";
import "./spectrum-mobile.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { spectrumNavLinks } from "../../assets/data/navLinks/spectrumNavLinks";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import PackageCard from "../../components/package-card/PackageCard";
import xfintyTvHeroBg from "../../assets/images/xfinity-tv-hero-bg.jpg";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
// import { packageTableData } from "../../assets/data/packageTableData";
import Link from "next/link";
import quotations from "../../assets/images/quotations.svg";
import phoneone from "../../assets/images/phoneone.png";
import phonetwo from "../../assets/images/phonetwo.png";
import phonethree from "../../assets/images/phonethree.png";
import Newsletter from "../../components/newsletter/Newsletter";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Spectrum Mobile Plans"
};

const SpectrumMobile = () => {
  // const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }
  //   setFaq(i);
  // };
  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "Spectrum Mobile Plans",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "Save up to $650 on the latest Samsung, Apple, and Google smartphones",
      "Mobile data allowances up to 30 GB",
      "Nationwide 5G phone coverage",
      "Lower your bill by adding more phone lines",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Spectrum mobile plans start at $14.00/mo.*",
  };
  let packageTableData = [
    {
      head: ["Plan", "Monthly price", "Data allowance", "Details"],

      body: [
        {
          content: [
            "1.",
            "By The Gig",
            "$14.00/line (per 1 GB)",
            "1 GB/line ($14.00/mo. per additional GB)",
          ],
          linkPath: "#",
        },
        {
          content: ["2.", "Unlimited", "$29.99/line per mo.", "20 GB/line"],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Unlimited Plus",
            "$39.99/line per mo.",
            "30 GB/line",
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
        "rice",
        "Download speed",
        "Spectrum Mobile",
        "Spectrum Advanced WiFi router",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Spectrum Internet + Mobile",
            "$49.99/mo. for 12 mos.",
            "Up to 300 Mbps",
            "One free Unlimited line for 12 mos.",
            "Included for 12 mos.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Spectrum Internet Ultra + Mobile",
            "$69.99/mo. for 12 mos.",
            "Up to 500 Mbps",
            "One free Unlimited line for 12 mos.",
            "Included for 12 mos.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Spectrum Internet Gig + Mobile",
            "$89.99/mo. for 12 mos.",
            "Up to 1,000 Mbps",
            "One free Unlimited line for 12 mos.",
            "Included for 12 mos.",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="spectrum-mobile">
      {/* <SubNav links={spectrumNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-mobile-bundles-offers">
        <div className="head">
          <h2 className="sect-heading">
            Best Spectrum <span> mobile </span> bundles
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
        <p className="below-table">
          *Price with two or more phone lines. Data effective as of publish
          date. Offers and availability may vary by location and are subject to
          change.
        </p>
      </div>

      <CTA
        heading={" Interested in spectrum service?"}
        desc={
          " Get the best Spectrum Mobile prices with a Spectrum Internet plan. Enter your zip code below to see Spectrum services in your area."
        }
      />

      <div className="section spectrum-mobile">
        <div className="head">
          <h2 className="sect-heading">
            Save <span> up to 60% </span> on Spectrum Mobile
          </h2>
          <p className="sect-desc">
            Tired of big cell phone bills every month? You’ll save up to 60% on
            Spectrum Mobile compared to providers like Verizon or AT&T. Spectrum
            Mobile’s plans include 5G support, unlimited calls and texts, and
            nationwide phone coverage. To get Spectrum Mobile, you’ll need a
            Spectrum Internet plan.
            <br />
            We recommend adding at least two lines to your Spectrum Mobile plan
            for more savings. Spectrum Mobile’s standard rates are still great,
            but Spectrum Mobile’s multi-line discounts help you save money if
            you have friends or family members who also need smartphone service.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section spectrum-internet-mobile">
        <div className="head">
          <h2 className="sect-heading">
            Bundle Spectrum <span> internet and mobile </span>
          </h2>
          <p className="sect-desc">
            Are you interested in bundling Spectrum Internet with Spectrum
            Mobile? With Spectrum One bundles, you’ll pay one low price for
            Spectrum services and hardware. Every Spectrum One bundle includes
            one Spectrum Mobile Unlimited phone line that’s free for 12 months.
            You’ll also get Spectrum’s Advanced Wi-Fi router—which offers
            enhanced internet security—free for 12 months.
            <br />
            Top off your Spectrum One bundle by selecting one of Spectrum’s
            internet plans. With speeds between 300 and 1,000 Mbps, Spectrum’s
            internet plans fit any household’s internet needs or budget.
          </p>
        </div>
        <PackageTable item={packageTableDataTwo} />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change.
        </p>
        <div className="package-table-container channels">
          <h4> How to sign up</h4>
        </div>
        <div className="endnote review-endnote">
          <div className="endnote-container">
            <Image
              className="quotation-img"
              src={quotations}
              alt="quotations"
            />
            <h4>Interested in Spectrum Mobile service?</h4>
            <p>
              Check out our
              <span className="link">
                <Link href={"#"}> Spectrum Mobile review </Link>
              </span>
              for a full breakdown of Spectrum’s cell phone plans.
            </p>
          </div>
        </div>
      </div>

      <div className="section spectrum-phones">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> phones </span>
          </h2>
          <p className="sect-desc">
            Buy the latest smartphones like the Apple iPhone 14, Google Pixel 7,
            and Samsung Galaxy Z Fold5 on Xfinity Mobile. You can also keep your
            current smartphone and bring it to Spectrum Mobile.
          </p>
        </div>
        <div className="container">
          <div className="column">
            <Image
              src={phoneone}
              alt="iphone-images"
              className="iphone-images"
            />
          </div>
          <div className="column">
            <Image
              src={phonetwo}
              alt="iphone-images"
              className="iphone-images"
            />
          </div>
          <div className="column">
            <Image
              src={phonethree}
              alt="iphone-images"
              className="iphone-images"
            />
          </div>
        </div>
        <div className="package-table-container channels">
          <h4> How to sign up</h4>
          <p>
            Spectrum Mobile supports phones from most major carriers. If you
            have an older phone from a smaller carrier and are unsure if it’ll
            work on Spectrum Mobile, you can use Spectrum Mobile’s Bring Your
            Own Device tool.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Buy a new phone </h4>
          <p>
            Spectrum Mobile’s phone options include the latest models like the
            Apple iPhone 14 Pro Max, Google Pixel 7, and Samsung Galaxy Z Flip4.
            Spectrum Mobile’s flexible payment options give you multiple ways to
            get the latest and greatest smartphones.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Trade-in offers </h4>
          <p>
            Want to flip your older smartphone for a newer one? With Spectrum
            Mobile’s trade-in deals, you can save up to $650 towards a new
            phone, depending on the smartphone you’re buying or trading in.
          </p>
        </div>
      </div>

      <div className="section mobile-features">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> Mobile features </span>
          </h2>
          <p className="sect-desc">
            Buy the latest smartphones like the Apple iPhone 14, Google Pixel 7,
            and Samsung Galaxy Z Fold5 on Xfinity Mobile. You can also keep your
            current smartphone and bring it to Spectrum Mobile.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Unlimited talk and text </h4>
          <p>
            Don’t worry about monitoring your minutes or texts every month. With
            Spectrum Mobile, you’ll get unlimited calls and texts within the US.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Mobile hotspot </h4>
          <p>
            Need Wi-Fi access on the go but you’re nowhere near a Spectrum
            Out-of-Home hotspot? All Spectrum Mobile customers can use a
            smartphone as a wireless hotspot to get tablets, laptops, or smart
            watches online.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>5G coverage </h4>
          <p>
            Spectrum Mobile’s nationwide 5G coverage gives Spectrum Mobile
            customers the fastest mobile data download and upload speeds. Every
            Spectrum Mobile plan includes 5G coverage, so you’ll be covered if
            your smartphone supports 5G.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>International calling and data roaming </h4>
          <p>
            Spectrum Mobile helps you stay connected with families overseas.
            Every Spectrum Mobile plan includes up to 2,000 free minutes of
            calls to Mexico and Canada, along with free international texts to
            more than 200 countries. Spectrum Mobile’s low international call
            rates make it affordable to catch up with overseas friends and
            family.
          </p>
        </div>
      </div>

      <div className="section spectrum-mobile-faq">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span>Mobile </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What carrier does Spectrum
                Mobile use?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Spectrum Mobile uses Verizon's network for its phone coverage.
                  You'll get the same 5G and phone coverage as other Verizon
                  customers.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"What carrier does Spectrum Mobile use?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum Mobile uses Verizon's network for its phone coverage.
              You'll get the same 5G and phone coverage as other Verizon
              customers.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What are the three Spectrum
                Mobile plans?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Spectrum Mobile's three plans are By The Gig ($14.00/mo.),
                  Unlimited ($29.99/mo.), and Unlimited Plus ($39.99/mo.)
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"What are the three Spectrum Mobile plans?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum Mobile's three plans are By The Gig ($14.00/mo.),
              Unlimited ($29.99/mo.), and Unlimited Plus ($39.99/mo.)
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Can you have Spectrum
                Mobile without internet?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  You cannot have Spectrum Mobile without Spectrum Internet.
                  Spectrum Mobile is only for Spectrum customers.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"Can you have Spectrum Mobile without internet?"}
            cssClass={"faq-content"}
          >
            <p>
              You cannot have Spectrum Mobile without Spectrum Internet.
              Spectrum Mobile is only for Spectrum customers.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What type of phone does
                Spectrum Mobile use?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Spectrum Mobile supports phones from major manufacturers like
                  Apple, Samsung, Google, and Motorola. Use Spectrum Mobile's
                  IMEI checker to ensure your phone's compatible with Spectrum
                  Mobile.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={"What type of phone does Spectrum Mobile use?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum Mobile supports phones from major manufacturers like
              Apple, Samsung, Google, and Motorola. Use Spectrum Mobile's IMEI
              checker to ensure your phone's compatible with Spectrum Mobile.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>Do you need a 5G phone to
                use Spectrum Mobile?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  You do not need a 5G phone to get Spectrum Mobile. Many older
                  4G phones will work on Spectrum Mobile.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"Do you need a 5G phone to use Spectrum Mobile?"}
            cssClass={"faq-content"}
          >
            <p>
              You do not need a 5G phone to get Spectrum Mobile. Many older 4G
              phones will work on Spectrum Mobile.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default SpectrumMobile;
