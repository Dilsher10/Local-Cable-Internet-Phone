// import React, { useState } from "react";
import "./t-mobile-availability-map.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { tmobileNavLinks } from "../../assets/data/navLinks/tmobileNavLinks";
import dishphoneone from "../../assets/images/mp-boi.png";
import dishphonetwo from "../../assets/images/comp-tmobile.png";
import dishphonethree from "../../assets/images/comp-girl.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import quotationsIcon from "../../assets/images/quotations.svg";
import mark from "../../assets/images/mark.png";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "T-Mobile Customer Service"
};

const TMobileCustomerService = () => {
  //   const [faq, setFaq] = useState();
  let accordionHandler = (i) => {
    if (faq === i) {
      return setFaq(null);
    }

    setFaq(i);
  };
  return (
    <div className="t-mobile-availability-map">
      {/* <SubNav links={tmobileNavLinks} /> */}
      <div className="customer-service-hero global-inner-hero">
        <h1>T-Mobile Customer Service</h1>
        <p>We break down every way to find help with your T-Mobile account.</p>
        <div className="container-img">
          <div className="column-img">
            <Link href={"#"}>
              <Image src={dishphoneone} alt="customer" className="" />
            </Link>
          </div>
          <div className="column-img">
            <Link href={"#"}>
              <Image src={dishphonetwo} alt="customer" className="" />
            </Link>
          </div>
          <div className="column-img">
            <Link href={"#"}>
              <Image src={dishphonethree} alt="customer" className="" />
            </Link>
          </div>
        </div>
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            Do you need help with your T-Mobile internet or phone service? No
            one loves troubleshooting technical issues, but the best companies
            help you quickly get back online. If you’re having problems with
            your T-Mobile 5G Home Internet or smartphone connections, we’ll show
            you the best ways to reach T-Mobile customer service.
          </p>
          <br />

          <h4>Frustrated with your T-Mobile service?</h4>
          <p>
            Cell phone and internet bundles are an increasingly popular way to
            lower your monthly bill. Check out our cell phone and internet
            bundles guide to learn more, and enter your zip code below to see
            internet options in your area.
          </p>
        </div>
      </div>

      <div className="section important-links">
        <div className="head">
          <h2 className="sect-heading">
            T-mobile Customers; <span> I’m looking for </span>
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
          <Link href={"#"}>T-Mobile customer service number </Link>
          <Link href={"#"}> T-Mobile app</Link>
          <Link href={"#"}>T-Mobile stores </Link>
        </div>
      </div>

      <div className="section features">
        <div className="head">
          <h2 className="sect-heading">
            T-Mobile <span> customer service number </span>
          </h2>
          <p className="sect-desc">
            T-Mobile has two main phone numbers for new or current T-Mobile
            customers. New customers who want T-Mobile phone service can call
            +1-800-T-MOBILE. If you’re shopping for T-Mobile Home Internet,
            you’ll want to call +1-866-557-4402.
          </p>
        </div>

        <div className="package-table-container channels">
          <Image src={mark} alt="mark" className="mark" />
          <h4>How to call T-Mobile customer service</h4>
          <p className="after-heading">
            T-Mobile subscribers who need technical support have a few more
            phone number options:
          </p>
          <br />

          <ul>
            <li>
              T-Mobile customers looking for general support can call
              +1-800-937-8997.
            </li>
            <li>
              T-Mobile home internet customer service is available at
              +1-866-581-4771.
            </li>
            <li>Pay your T-Mobile bill via phone at +1-877-453-1304.</li>
          </ul>
          <br />
          <p>
            T-Mobile phone support is available daily from 4 a.m. to 12:00 a.m.
            PST.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>T-Mobile mobile app</h4>
          <p className="after-heading">
            The T-Mobile app allows customers to view data usage, manage
            accounts, and pay bills. Customers can download the T-Mobile app on
            the Apple App Store and Google Play Store.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>T-Mobile stores</h4>
          <p className="after-heading">
            At T-Mobile’s nationwide network of retail stores, you can browse
            the latest smartphones, purchase hotspots, and update your account.
            Visit T-Mobile’s website to find stores in your area.
          </p>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> T-Mobile customer service </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What is T-Mobile's customer
                service number?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  T-Mobile’s main customer service number is +1-800-937-8997.
                  Internet customers can also call +1-866-581-4771 for
                  T-Mobile’s internet customer service team.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What is T-Mobile's customer service number?"}
            cssClass={"faq-content"}
          >
            <p>
              T-Mobile’s main customer service number is +1-800-937-8997.
              Internet customers can also call +1-866-581-4771 for T-Mobile’s
              internet customer service team.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What time does T-Mobile
                customer service open?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  T-Mobile’s customer service phone line opens at 4 a.m. PST.
                  T-Mobile’s retail stores also open in the morning, but their
                  opening hours vary by location.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" What time does T-Mobile customer service open?"}
            cssClass={"faq-content"}
          >
            <p>
              T-Mobile’s customer service phone line opens at 4 a.m. PST.
              T-Mobile’s retail stores also open in the morning, but their
              opening hours vary by location.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Is T-Mobile customer
                service open 24 hours?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>T-Mobile’s customer service is not open 24 hours.</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Is T-Mobile customer service open 24 hours?"}
            cssClass={"faq-content"}
          >
            <p>T-Mobile’s customer service is not open 24 hours.</p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote page-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />

          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>T-Mobile 5G Home Internet Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>T-Mobile Deals</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>5G Home Internet Guide</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: T-Mobile 5G Home Internet | T-Mobile Deals | T-Mobile
          Hotspot | T-Mobile Availability | T-Mobile Customer Service
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default TMobileCustomerService;
