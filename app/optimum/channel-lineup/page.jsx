// import React, { useState } from "react";
import "./optimum-channel-lineup.scss";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { optimumNavLinks } from "../../assets/data/navLinks/optimumNavLinks";
import PackageCard from "../../components/package-card/PackageCard";
// import SubNav from "../../components/sub-nav/SubNav";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";
import { FaCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

export const metadata = {
  title: "Optimum Channel Lineup",
};

const OptimumChannelLineUp = () => {
  // const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="optimum-channel-lineup">
      {/* <SubNav links={optimumNavLinks} /> */}
      <div className="optimum-costs-hero global-inner-hero">
        <h1>Optimum Channel Lineup</h1>
        <p>
          Dig into our updated channel guide to see which Optimum TV plan is
          right for you.
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
        <p>
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section endnote endnote-start">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Update:</h4>
          <p>
            As of August 1, 2022, Suddenlink is officially becoming Optimum.
            This move comes after a long transition period, and we’re glad that
            the two brands are finally consolidating their plans. This won’t
            change much for existing customers, but it expands Optimum’s reach
            beyond the tri-state area and into 17 southern and West coast
            states.
          </p>
        </div>
      </div>

      <StickyHeader />

      <div className="section optimum-channel-lineup">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> channel lineup </span>
          </h2>
          <p className="sect-desc">
            Optimum’s channel lineup has 420+ channels, including local network
            affiliates, basic cable staples, and popular favorites. The channels
            come in three packages—Optimum Core ($85 a month, 220+ channels),
            Optimum Select ($105 a month, 340+ channels), and Optimum Premier
            ($125 a month, 420+ channels).
            <br />
            Optimum offers TV only if you bundle it with internet. That’s a
            bummer if you live a hermetic, TV-only lifestyle, but the
            restriction seems to work okay for most Optimum TV customers. The
            table below shows Optimum’s available channels and the packages
            containing them. “Optional” means the channel is available as an
            add-on for an additional monthly fee.
          </p>
        </div>
        <div className="hash-linking">
          <div className="alphabets">
            {" "}
            <Link href="#a">a</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">b</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">c</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">d</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">e</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">f</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">g</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">h</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">i</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">j</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">k</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">l</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">m</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">n</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">o</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">p</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">q</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">r</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">s</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">t</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">u</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">v</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">w</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">x</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">y</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#z">z</Link>
          </div>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th> </th>
                <th>Channels</th>
                <th>Optimum Core (220+ channels)</th>
                <th>Optimum Select (340+ channels)</th>
                <th>Optimum Premier (420+ channels)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>1. </th>
                <th id="a">A&E </th>
                <th>
                  {" "}
                  <ImCross className="cross-icon" />{" "}
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>2. </th>
                <th>ABC</th>
                <th>
                  {" "}
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>3. </th>
                <th>Afro</th>
                <th>
                  {" "}
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>4. </th>
                <th>American Heroes Channel (AHC)</th>
                <th>
                  {" "}
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>5. </th>
                <th>BBC America</th>
                <th>Optional</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>6. </th>
                <th>MTV Live</th>
                <th>Optional</th>
                <th>Optional</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>7. </th>
                <th>Universo</th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>8. </th>
                <th>WE tv</th>
                <th>Optional</th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th> 9.</th>
                <th>Z Living</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>10. </th>
                <th id="z">Zona Futbol</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="below-table">
          Data as of 05/02/23. Offers and availability may vary by location and
          are subject to change.
        </p>
      </div>

      <CTA
        heading={"Find out if Optimum TV is available in your area"}
        desc={"Enter your zip code below to find out!"}
      />

      <div className="section endnote optimum-bundles-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Optimum channel numbers</h4>
          <p>
            Optimum channel numbers vary by location, and Optimum has a unique
            list for each of its service areas. Check those out on Optimum’s
            website, along with ongoing notation about changes to Optimum
            channel lineups.
          </p>
          <h4>Related articles:</h4>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Optimum Cable TV Review</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>How to Change or Cancel Optimum Service</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Alternatives to Optimum</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="section optimum-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Optimum channel lineup </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span>Does Optimum have the
                Magnolia Network (formerly DIY Network)?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Optimum has the Magnolia Network in its Select and Premier
                  bundles (starting at $105 a month). You can learn more about
                  Optimum bundles in our full review.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={
              "Does Optimum have the Magnolia Network (formerly DIY Network)?"
            }
            cssClass={"faq-content"}
          >
            <p>
              Optimum has the Magnolia Network in its Select and Premier bundles
              (starting at $105 a month). You can learn more about Optimum
              bundles in our full review.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What TV packages does
                Optimum have?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Optimum has three cable TV packages: Optimum Core ($85 a
                  month, 220+ channels), Optimum Select ($105 a month, 340+
                  channels), and Optimum Premier ($125 a month, 420+ channels).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" What TV packages does Optimum have?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum has three cable TV packages: Optimum Core ($85 a month,
              220+ channels), Optimum Select ($105 a month, 340+ channels), and
              Optimum Premier ($125 a month, 420+ channels).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does Optimum have the
                Hallmark Channel?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  You can find the Hallmark Channel—as well as Hallmark Drama
                  and Hallmark Movies & Mysteries—in the Optimum Select and
                  Optimum Premier packages. For more information, read our
                  Optimum TV review.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does Optimum have the Hallmark Channel?"}
            cssClass={"faq-content"}
          >
            <p>
              You can find the Hallmark Channel—as well as Hallmark Drama and
              Hallmark Movies & Mysteries—in the Optimum Select and Optimum
              Premier packages. For more information, read our Optimum TV
              review.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What channels are included
                in Optimum's basic package?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <ul>
                  <li>· ABC</li>
                  <li>· C-SPAN</li>
                  <li>· C-SPAN 2</li>
                  <li>· CBS</li>
                  <li>· COZI TV</li>
                  <li>· CW</li>
                  <li>· Estrella TV</li>
                  <li>· FOX</li>
                  <li>· getTV</li>
                  <li>· HSN</li>
                  <li>· HSN2</li>
                  <li>· ION</li>
                  <li>· JTV (Jewelry Television®)</li>
                  <li>· MeTV</li>
                  <li>· My9</li>
                  <li>· NBC</li>
                  <li>· PBS</li>
                  <li>· QVC</li>
                  <li>· QVC2</li>
                  <li>· ShopHQ</li>
                  <li>· Telemundo</li>
                  <li>· TeleXitos</li>
                  <li>· Trinity Broadcasting Network (TBN)</li>
                  <li>· UniMás</li>
                  <li>· Univision</li>
                </ul>
                <p>
                  To learn more about Optimum TV, check out our full review.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" What channels are included in Optimum's basic package?"}
            cssClass={"faq-content"}
          >
            <ul>
              <li>· ABC</li>
              <li>· C-SPAN</li>
              <li>· C-SPAN 2</li>
              <li>· CBS</li>
              <li>· COZI TV</li>
              <li>· CW</li>
              <li>· Estrella TV</li>
              <li>· FOX</li>
              <li>· getTV</li>
              <li>· HSN</li>
              <li>· HSN2</li>
              <li>· ION</li>
              <li>· JTV (Jewelry Television®)</li>
              <li>· MeTV</li>
              <li>· My9</li>
              <li>· NBC</li>
              <li>· PBS</li>
              <li>· QVC</li>
              <li>· QVC2</li>
              <li>· ShopHQ</li>
              <li>· Telemundo</li>
              <li>· TeleXitos</li>
              <li>· Trinity Broadcasting Network (TBN)</li>
              <li>· UniMás</li>
              <li>· Univision</li>
            </ul>
            <p>To learn more about Optimum TV, check out our full review.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> What channel is CW on
                Optimum?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Optimum channel numbers vary according to where you live. To
                  see the channel number for the CW where you live, find the
                  Optimum channel list for your area.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" What channel is CW on Optimum?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum channel numbers vary according to where you live. To see
              the channel number for the CW where you live, find the Optimum
              channel list for your area.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> What channel is ESPN on
                Optimum?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  ESPN will have a different channel number depending on which
                  Optimum service area you’re in. Fortunately, you can see the
                  Optimum channel list for your area.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" What channel is ESPN on Optimum?"}
            cssClass={"faq-content"}
          >
            <p>
              ESPN will have a different channel number depending on which
              Optimum service area you’re in. Fortunately, you can see the
              Optimum channel list for your area.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(7)}>
                <span>{faq === 7 ? "-" : "+"}</span> What channel is FS1 on
                Optimum?
              </h3>

              <div className={`faq-content ${faq === 7 ? "show" : ""}`}>
                <p>
                  The channel number for FS1 (FOX Sports 1) will change
                  depending on where you live. But you can see your area’s
                  channel number for FS1 on the Optimum channel list.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={" What channel is FS1 on Optimum?"}
            cssClass={"faq-content"}
          >
            <p>
              The channel number for FS1 (FOX Sports 1) will change depending on
              where you live. But you can see your area’s channel number for FS1
              on the Optimum channel list.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(8)}>
                <span>{faq === 8 ? "-" : "+"}</span> What channel is HBO on
                Optimum?
              </h3>

              <div className={`faq-content ${faq === 8 ? "show" : ""}`}>
                <p>
                  HBO’s channel number on Optimum is gonna be different in
                  different Optimum service areas. But you can see channel
                  numbers for your area on the Optimum channel list.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"8"}
            title={" What channel is HBO on Optimum?"}
            cssClass={"faq-content"}
          >
            <p>
              HBO’s channel number on Optimum is gonna be different in different
              Optimum service areas. But you can see channel numbers for your
              area on the Optimum channel list.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(9)}>
                <span>{faq === 9 ? "-" : "+"}</span> What channel is NBC on
                Optimum?
              </h3>

              <div className={`faq-content ${faq === 9 ? "show" : ""}`}>
                <p>
                  NBC’s channel number will be different in each of Optimum’s
                  service areas. But you can see channel numbers for your area
                  on the Optimum channel list.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"9"}
            title={" What channel is NBC on Optimum?"}
            cssClass={"faq-content"}
          >
            <p>
              NBC’s channel number will be different in each of Optimum’s
              service areas. But you can see channel numbers for your area on
              the Optimum channel list.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Optimum Overview | Optimum Internet | Optimum Bundles |
          Optimum Customer Service
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default OptimumChannelLineUp;
