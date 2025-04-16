// import React, { useState } from "react";
import "./centurylink-bundles-review.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { centurylinkNavLinks } from "../../assets/data/navLinks/centurylinkNavLinks";
import CTA from "../../components/cta-section/CTA";
import quotationsIcon from "../../assets/images/quotations.svg";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import dotted from "../../assets/images/dotted.png";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "CenturyLink Internet And Phone Bundles"
};

const CenturyLinkBundlesReview = () => {
  //   const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  let packageTableData = [
    {
      head: [
        "Package",
        "Price",
        "Download Speeds Up To",
        "Upload Speeds Up To",
        "Connection type",
        "Details",
      ],

      body: [
        {
          content: [
            "1. ",
            "CenturyLink Fiber Internet 200 Mbps",
            "$30.00/mo.*",
            "Up to 200 Mbps",
            "Up to 200 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.  ",
            "CenturyLink Fiber Internet 500 Mbps",
            "$50.00/mo.*",
            "Up to 500 Mbps",
            "Up to 500 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3. ",
            "CenturyLink Fiber Gigabit",
            "$75.00/mo.*",
            "Up to 940 Mbps",
            "Up to 940 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Simply Unlimited Internet",
            "$55.00/mo.*",
            "Up to 100 Mbps",
            "Up to 10 Mbps",
            "DSL",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="centurylink-bundles-review">
      {/* <SubNav links={centurylinkNavLinks} /> */}
      <div className="cost-hero global-inner-hero">
        <h1>CenturyLink Internet And Phone Bundles</h1>
        <p>CenturyLink doesn’t offer TV, but you can get a phone add-on.</p>
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

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4> Are CenturyLink bundles good?</h4>
          <p>
            If we’ve learned anything from all those obnoxious commercials and
            junk mailers, it’s that bundling saves you big bucks!
            <br />
            Bundling CenturyLink internet and home phone services will get you
            the convenience of a single monthly bill. But with no discounts and
            the $50 price tag on Simply Unlimited Home Phone—along with the
            expensive pricing for Connected Voice—that’s still a pretty steep
            price.
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
                  <td> The convenience of a single monthly bill</td>
                  <td> No bundle savings</td>
                </tr>
                <tr>
                  <td> </td>
                  <td> Expensive phone plans</td>
                </tr>
                <tr>
                  <td> </td>
                  <td>No TV service</td>
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
          <Link href={"#"}>Deals </Link>
          <Link href={"#"}>Bundle plans and pricing </Link>
        </div>
      </div>

      <CTA
        heading={"Find out if Centurylink is available in your area"}
        desc={"Enter your zip code below to find out!"}
      />

      <div className="section blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
        </div>
        <div className="package-table-container channels">
          <Image src={dotted} alt="" className="mark" />
          <h4>CenturyLink bundle deals</h4>
          <br />
          <p>
            CenturyLink doesn’t usually offer deals on internet and phone
            bundles. But to check for bundle deals from CenturyLink and other US
            providers, head over to our TV and internet deals review. We update
            it every month with the freshest promotions.
          </p>
        </div>
      </div>

      <div className="section internet-packages">
        <div className="head">
          <h2 className="sect-heading">
            CenturyLink <span> bundle plans and pricing </span>
          </h2>
          <p className="sect-desc">
            If you can get it, you want fiber internet. With download and upload
            speeds of 940 Mbps, it’s ridiculously fast. Everyone in a
            four-person household could play video games online and
            simultaneously stream full HD video—and still have bandwidth to
            spare.
            <br />
            CenturyLink’s best fiber double-play bundle is Fiber Gigabit +
            Connected Voice Basic Plan, which gives you unlimited nationwide
            calling along with CenturyLink’s fastest internet speeds. But
            CenturyLink no longer offers standalone phone service, so you won’t
            get any bundle savings.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data effective as of publish date. Pricing and speeds are subject to
          change. Not all offers available in all areas. <br />
          * Speed may not be available in your area. Paperless billing required.
          Taxes and fees apply. Online ONLY. Free Modem. <br />
          † Speed may not be available in your area. Maximum download/upload
          speed of up to 940 Mbps via a wired connection. Paperless billing
          required. Taxes and fees apply. Offer details. Offer includes
          professional installation at customer’s eligible location. <br />‡
          Paperless billing or prepaid required. Additional taxes, fees, and
          surcharges apply. Get the fastest Internet speed available at your
          location (max speed is up to 100 Mbps.)
        </p>
        <div className="package-table-container channels">
          <p className="after-heading">
            If you can’t get fiber internet, DSL doesn’t suck. Just keep a few
            things in mind:
          </p>
          <br />
          <ul className="channel-list">
            <li>
              You won’t get equal download and upload speeds like you get with
              fiber.
            </li>
            <li>
              Your location determines your download speed. You might qualify
              for less than 80 Mbps, but you can still do a lot of streaming and
              gaming at 40 Mbps or even 20 Mbps.
            </li>
            <li>
              CenturyLink guarantees only “up to” advertised speeds because
              other factors (equipment, construction materials, etc.) can affect
              your speeds.
            </li>
          </ul>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is centuryLink bundles worth it?</span>
          </h2>
          <p className="sect-desc">
            CenturyLink’s internet-and-phone bundles are a nice convenience for
            folks who don’t want to manage a bunch of bills per month. But
            CenturyLink’s phone plan is pricier than we’d like, and you may be
            better off relying on your mobile plan instead.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> view centuryLink Bundles </Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> CenturyLink bundles </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Does DIRECTV bundle with
                CenturyLink?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  You can pay for DIRECTV along with your CenturyLink internet
                  bill, but you won’t get any discounts for combining internet
                  and TV services.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Does DIRECTV bundle with CenturyLink?"}
            cssClass={"faq-content"}
          >
            <p>
              You can pay for DIRECTV along with your CenturyLink internet bill,
              but you won’t get any discounts for combining internet and TV
              services.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does CenturyLink bundle
                with DISH Network?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  CenturyLink does not bundle with DISH Network. But you can
                  still get a DISH plan separately from your CenturyLink plan.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does CenturyLink bundle with DISH Network?"}
            cssClass={"faq-content"}
          >
            <p>
              CenturyLink does not bundle with DISH Network. But you can still
              get a DISH plan separately from your CenturyLink plan.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What channels do you get
                with Prism TV?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  CenturyLink discontinued its fiber-optic Prism TV service in
                  2018.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" What channels do you get with Prism TV?"}
            cssClass={"faq-content"}
          >
            <p>
              CenturyLink discontinued its fiber-optic Prism TV service in 2018.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How fast should my
                CenturyLink internet be?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  As with any internet service provider, CenturyLink’s internet
                  speeds can vary quite a bit based on location and other
                  factors (wired/wireless connection, modem type, router type,
                  router location, materials used to build your home). <br />
                  Your neighbor could qualify for up to 940 Mbps fiber internet,
                  while you might get only up to 20 Mbps via DSL. The “Up to”
                  means that CenturyLink doesn’t guarantee you’ll get 20 Mbps
                  (or 940 Mbps, for that matter), due to the factors mentioned
                  above. <br />
                  So, if you’re getting only 5–12 Mbps on a 20 Mbps plan,
                  CenturyLink wouldn’t consider that a problem.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" How fast should my CenturyLink internet be?"}
            cssClass={"faq-content"}
          >
            <p>
              As with any internet service provider, CenturyLink’s internet
              speeds can vary quite a bit based on location and other factors
              (wired/wireless connection, modem type, router type, router
              location, materials used to build your home). <br />
              Your neighbor could qualify for up to 940 Mbps fiber internet,
              while you might get only up to 20 Mbps via DSL. The “Up to” means
              that CenturyLink doesn’t guarantee you’ll get 20 Mbps (or 940
              Mbps, for that matter), due to the factors mentioned above. <br />
              So, if you’re getting only 5–12 Mbps on a 20 Mbps plan,
              CenturyLink wouldn’t consider that a problem.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>Can you stream with
                CenturyLink?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>Yes, you can totally stream TV with CenturyLink internet!</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"Can you stream with CenturyLink?"}
            cssClass={"faq-content"}
          >
            <p>Yes, you can totally stream TV with CenturyLink internet!</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> Does CenturyLink have data
                caps?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  CenturyLink doesn’t have a data cap—it offers unlimited
                  internet data instead.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" Does CenturyLink have data caps?"}
            cssClass={"faq-content"}
          >
            <p>
              CenturyLink doesn’t have a data cap—it offers unlimited internet
              data instead.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>See also: Overview | Internet | Customer service | Phone</p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default CenturyLinkBundlesReview;
