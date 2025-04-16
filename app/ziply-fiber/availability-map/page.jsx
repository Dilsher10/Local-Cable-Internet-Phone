// import React, { useState } from "react";
import "./ziply-fiber-availability-map.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { ziplyfiberNavLinks } from "../../assets/data/navLinks/ziplyfiberNavLinks";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import quotationsIcon from "../../assets/images/quotations.svg";
import map from "../../assets/images/map.png";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Ziply Availability",
};

const ZiplyFiberAvailabilityMap = () => {
  //   const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="ziply-fiber-availability-map">
      {/* <SubNav links={ziplyfiberNavLinks} /> */}
      <div className="availability-hero global-inner-hero">
        <h1>Ziply Availability</h1>
        <p>
          Our Ziply Fiber map will tell you if Ziply’s internet service covers
          your neighborhood.
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
          <h4>Does Ziply Fiber cover my town?</h4>
          <p>
            Ziply is a regional internet service provider that services the
            Pacific Northwest region. Enter your zip code below to confirm if
            Ziply has availability in your area.
          </p>
        </div>
      </div>

      <StickyHeader />

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Ziply Fiber <span> availability map</span>
          </h2>
          <p className="sect-desc">
            Ready to upgrade your internet service? Ziply Fiber offers great
            fiber internet and DSL service throughout the Pacific Northwest.
            Check out our map that lists cities and states with Ziply Fiber
            coverage.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>order online</Link>
        </div>
        <br />
        <Image src={map} alt="frame-globle" />
      </div>

      <div className="section availability">
        <div className="head">
          <h2 className="sect-heading">
            Ziply internet <span> plans & availability </span>
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
          <h4>Ziply internet plans</h4>
          <p className="after-heading">
            Ziply’s DSL plan offers basic internet service that can work in a
            pinch. But if your neighborhood has Ziply Fiber coverage, you’ll get
            great rates and internet speeds up to 10,000Mbps. <br />
            Check out our full Ziply internet review to learn more about Ziply
            Fiber internet plans.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Ziply Fiber availability by state</h4>
          <p className="after-heading">
            Ziply is a regional provider, so it doesn’t have the massive
            footprint of other national competitors. But if you’re in one of the
            following states, you’ll likely get Ziply service:
          </p>
          <br />
          <ul>
            <li>Washington</li>
            <li>Idaho</li>
            <li>Oregon</li>
            <li>Montana</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Cities with Ziply Fiber internet coverage</h4>
          <p className="after-heading">
            Ziply frequently expands fiber internet coverage through its
            four-state footprint. These are some of the cities with Ziply Fiber
            internet, although exact availability depends on your address:
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th>States</th>
                  <th>Oregon</th>
                  <th>Idaho</th>
                  <th>Montana</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. Alabama </td>
                  <td>13. Kansas</td>
                  <td>24. Nebraska</td>
                  <td>35. Tennessee</td>
                </tr>
                <tr>
                  <td>2. Arizona </td>
                  <td>14. Kentucky </td>
                  <td>25. Nevada </td>
                  <td>36. Texas </td>
                </tr>
                <tr>
                  <td>3. California </td>
                  <td>15. Louisiana </td>
                  <td>26. New Hampshire </td>
                  <td>37. Vermont </td>
                </tr>
                <tr>
                  <td>4. Colorado </td>
                  <td>16. Maine </td>
                  <td>27. New Jersey </td>
                  <td>38. Virginia </td>
                </tr>
                <tr>
                  <td>5. Connecticut</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>6. Florida</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>7. Georgia</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>8.Hawaii </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>9. Idaho</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>10. Illinois</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>11. Indiana </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>12. Indiana</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"interested in ziply Fiber internet?"}
        desc={
          "Enter your zip code below to confirm if Ziply internet is available in your area:"
        }
      />

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>ziply Fiber availability </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Is Ziply Fiber available in
                my area?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Ziply is available in many large to mid-sized Montana, Idaho,
                  Washington, and Oregon cities. Cities with Ziply Fiber
                  coverage include Pasco, Beaverton, Seattle, and Pullman.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Is Ziply Fiber available in my area?"}
            cssClass={"faq-content"}
          >
            <p>
              Ziply is available in many large to mid-sized Montana, Idaho,
              Washington, and Oregon cities. Cities with Ziply Fiber coverage
              include Pasco, Beaverton, Seattle, and Pullman.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Where is Ziply Fiber
                available?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Ziply Fiber is available in Montana, Idaho, Washington, and
                  Oregon. Ziply’s exact availability depends on your address.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Where is Ziply Fiber available?"}
            cssClass={"faq-content"}
          >
            <p>
              Ziply Fiber is available in Montana, Idaho, Washington, and
              Oregon. Ziply’s exact availability depends on your address.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Is Ziply available at my
                address?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Ziply regularly adds new cities to its coverage footprint.
                  Check out Ziply’s website to confirm Ziply DSL or fiber
                  availability in your area.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Is Ziply available at my address?"}
            cssClass={"faq-content"}
          >
            <p>
              Ziply regularly adds new cities to its coverage footprint. Check
              out Ziply’s website to confirm Ziply DSL or fiber availability in
              your area.
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
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Ziply Fiber Internet Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}> Best Fiber Internet Providers</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Your Guide to Rural Internet Options</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default ZiplyFiberAvailabilityMap;
