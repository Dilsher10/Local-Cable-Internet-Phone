// import React, { useState } from "react";
import "./ziply-fiber-customer-service.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { ziplyfiberNavLinks } from "../../assets/data/navLinks/ziplyfiberNavLinks";
import ziplyone from "../../assets/images/ziply-one.png";
import ziplytwo from "../../assets/images/ziply-two.png";
import ziplythree from "../../assets/images/ziply-three.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import quotationsIcon from "../../assets/images/quotations.svg";
import mark from "../../assets/images/mark.png";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Ziply Customer Service"
};

const ZiplyFiberCustomerService = () => {
  //   const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="ziply-fiber-customer-service">
      {/* <SubNav links={ziplyfiberNavLinks} /> */}
      <div className="customer-service-hero global-inner-hero">
        <h1>Ziply Customer Service</h1>
        <p>
          Having trouble with your Ziply Fiber connection? Here’s who you need
          to call.
        </p>
        <div className="container-img">
          <div className="column-img">
            <Link href={"#"}>
              <Image src={ziplyone} alt="customer" className="" />
            </Link>
          </div>
          <div className="column-img">
            <Link href={"#"}>
              <Image src={ziplytwo} alt="customer" className="" />
            </Link>
          </div>
          <div className="column-img">
            <Link href={"#"}>
              <Image src={ziplythree} alt="customer" className="" />
            </Link>
          </div>
        </div>
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            Ziply Fiber has some of the fastest internet plans around, but every
            internet provider occasionally has outages and other problems. If
            your Ziply connection’s on the fritz, here’s who you’ll want to talk
            to.
          </p>
          <br />

          <h4>Frustrated with your Ziply service?</h4>
          <p>
            Check out our slow internet troubleshooting guide for tips to fix
            your internet. Enter your zip code below to see internet and TV
            providers in your area.
          </p>
        </div>
      </div>

      <div className="section important-links">
        <div className="head">
          <h2 className="sect-heading">
            Ziply Customers; <span> I’m looking for </span>
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
          <Link href={"#"}>Ziply customer service number</Link>
          <Link href={"#"}> Ziply customer service website</Link>
          <Link href={"#"}>Ziply chat</Link>
        </div>
      </div>

      <div className="section features">
        <div className="head">
          <h2 className="sect-heading">
            Ziply customer <span> customer service </span>
          </h2>
          <p className="sect-desc">
            If you’re interested in Ziply service, you’ll want to call
            +1-866-699-4759. Current customers can contact Ziply Fiber customer
            service at +1-866-699-4759 for tech support help.
            <br />
            Customer account agents are available Monday through Friday from
            7:00 a.m. to 8:00 p.m. PT and on weekends from 8:00 a.m. to 6:00
            p.m. PT. Technical support is available on a 24/7 basis.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Ziply customer service website</h4>
          <p className="after-heading">
            At Ziply Fiber’s support hub, you can access troubleshooting guides
            and self-help wizards that’ll help solve standard internet and phone
            problems. If you’re concerned about a Ziply Fiber outage, you can
            also access Ziply’s outage status tool to confirm service issues in
            your neighborhood.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Ziply Fiber chat support</h4>
          <p className="after-heading">
            Would you rather message a live person for your Ziply Fiber issues?
            Ziply chat support agents are available daily from 5:00 a.m. to
            11:00 p.m. PT. Twitter users can also contact Ziply’s support
            account for additional help. Ziply’s Twitter account is staffed from
            8:00 a.m. to 10:00 p.m. PT Monday through Friday and 8:00 a.m. to
            6:00 p.m. on weekends.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Ziply customer support active?</span>
          </h2>
          <p className="sect-desc">
            Whether you’re an existing T-Mobile customer or a new shopper,
            T-Mobile’s cell phone and internet plans offer a strong combination
            of value and speed. T-Mobile’s 5G Home Internet availability can be
            tricky to parse, but if your address gets coverage and you’re
            looking for a cheaper alternative to pricey cable internet plans,
            we’d recommend giving T-Mobile a second look.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> contact ziply customer support</Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Ziply customer service </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> customer service FAQ
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Ziply’s main customer service phone number is +1-866-699-4759.
                  Technical support is available 24/7.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" customer service FAQ"}
            cssClass={"faq-content"}
          >
            <p>
              Ziply’s main customer service phone number is +1-866-699-4759.
              Technical support is available 24/7.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What are Ziply Fiber's
                customer service hours?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Ziply phone technical support is available 24/7. Ziply’s
                  customer account phone is available Monday through Friday from
                  7:00 a.m. to 8:00 p.m. and weekends from 8:00 a.m. to 6:00
                  p.m.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" What are Ziply Fiber's customer service hours?"}
            cssClass={"faq-content"}
          >
            <p>
              Ziply phone technical support is available 24/7. Ziply’s customer
              account phone is available Monday through Friday from 7:00 a.m. to
              8:00 p.m. and weekends from 8:00 a.m. to 6:00 p.m.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does Ziply Fiber have
                customer service chat?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Ziply does have customer support chat agents. You can access
                  Ziply’s chat tool on the Contact Us section of the Ziply
                  website.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does Ziply Fiber have customer service chat?"}
            cssClass={"faq-content"}
          >
            <p>
              Ziply does have customer support chat agents. You can access
              Ziply’s chat tool on the Contact Us section of the Ziply website.
            </p>
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
              ·
              <span className="link">
                <Link href={"#"}>Ziply Fiber Review</Link>
              </span>
            </li>
            <li>
              ·
              <span className="link">
                <Link href={"#"}>Why Is My Internet So Slow? </Link>
              </span>
            </li>
            <li>
              ·
              <span className="link">
                <Link href={"#"}>
                  What Do the Lights on Your Modem/Router Mean?{" "}
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default ZiplyFiberCustomerService;
