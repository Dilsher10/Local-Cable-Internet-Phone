// import React, { useState } from "react";
import "./hulu-supported-devices.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { huluNavLinks } from "../../assets/data/navLinks/huluNavLinks";
import quotationIcon from "../../assets/images/quotations.svg";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import { FaCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Hulu Supported Devices"
};

const HuluSupportedDevices = () => {
  //   const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="hulu-supported-devices">
      {/* <SubNav links={huluNavLinks} /> */}
      <div className="hidden-cost-hero global-inner-hero">
        <h1>Hulu Supported Devices: Roku, Apple TV, And More</h1>
        <p>
          Hulu and Hulu + Live TV are available on almost every streaming
          device, with a couple of exceptions—find out if yours is one.
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
          <Image src={quotationIcon} alt="quotations" />
          <h4>Hulu devices</h4>
          <p>
            The Hulu/Hulu + Live TV app is compatible with nearly every current
            streaming device and smart TV on the market, as well as most gaming
            consoles.
            <br />
            Unless you’re streaming with a NVIDIA SHIELD TV Pro, a Nintendo Wii,
            or, heaven forbid, a 2005 FlonkerVision kinda-smart TV you picked up
            at a yard sale, you’ll be able to watch Hulu.
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
          <Link href={"#"}>Streaming devices and smart TVs </Link>
          <Link href={"#"}>Computers, tablets, and phones</Link>
          <Link href={"#"}>Gaming consoles </Link>
          <Link href={"#"}>FAQ </Link>
        </div>
      </div>

      <div className="section competition">
        <div className="head">
          <h2 className="sect-heading">
            Hulu and Hulu + Live <span> TV supported devices </span>
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
                <th>Device</th>
                <th>Hulu, Hulu + Live TV</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td> 1.</td>
                <td> Amazon Fire Cube, Stick, TV</td>
                <td>
                  {" "}
                  <FaCheck className="check-icon" />{" "}
                </td>
              </tr>
              <tr>
                <td> 2. </td>
                <td> Android phones, tablets </td>
                <td>
                  {" "}
                  <FaCheck className="check-icon" />{" "}
                </td>
              </tr>
              <tr>
                <td> 3. </td>
                <td> Android TV </td>
                <td>
                  {" "}
                  <FaCheck className="check-icon" />{" "}
                </td>
              </tr>
              <tr>
                <td> 4. </td>
                <td> Apple TV (4th gen.) </td>
                <td>
                  {" "}
                  <FaCheck className="check-icon" />{" "}
                </td>
              </tr>
              <tr>
                <td> 5. </td>
                <td> Apple TV 4K </td>
                <td>
                  {" "}
                  <FaCheck className="check-icon" />{" "}
                </td>
              </tr>
              <tr>
                <td> 6. </td>
                <td> Chromecast, Chromecast with Google TV </td>
                <td>
                  {" "}
                  <FaCheck className="check-icon" />{" "}
                </td>
              </tr>
              <tr>
                <td> 7. </td>
                <td> Echo Show </td>
                <td>
                  {" "}
                  <FaCheck className="check-icon" />{" "}
                </td>
              </tr>
              <tr>
                <td> 8. </td>
                <td>iPhone, iPad </td>
                <td>
                  {" "}
                  <FaCheck className="check-icon" />{" "}
                </td>
              </tr>
              <tr>
                <td> 9. </td>
                <td> LG TVs (select models) </td>
                <td>
                  {" "}
                  <FaCheck className="check-icon" />{" "}
                </td>
              </tr>
              <tr>
                <td> 10. </td>
                <td> Nintendo Switch </td>
                <td>
                  {" "}
                  <FaCheck className="check-icon" />{" "}
                </td>
              </tr>
              <tr>
                <td> 11. </td>
                <td>NVIDIA SHIELD TV Pro </td>
                <td>
                  {" "}
                  <FaCheck className="check-icon" />{" "}
                </td>
              </tr>
              <tr>
                <td> 12. </td>
                <td> PC, Mac web browsers </td>
                <td>
                  {" "}
                  <FaCheck className="check-icon" />{" "}
                </td>
              </tr>
              <tr>
                <td>13 . </td>
                <td> PlayStation 3*, 4, 5 </td>
                <td>
                  {" "}
                  <FaCheck className="check-icon" />{" "}
                </td>
              </tr>
              <tr>
                <td> 14. </td>
                <td> Roku Ultra, Express, Premiere, Stick, TV </td>
                <td>
                  {" "}
                  <FaCheck className="check-icon" />{" "}
                </td>
              </tr>
              <tr>
                <td>15 . </td>
                <td>Samsung TVs (select models) </td>
                <td>
                  {" "}
                  <FaCheck className="check-icon" />{" "}
                </td>
              </tr>
              <tr>
                <td>16 . </td>
                <td> Wii </td>
                <td>
                  {" "}
                  <FaCheck className="check-icon" />{" "}
                </td>
              </tr>
              <tr>
                <td>17 . </td>
                <td> Xbox 360, One </td>
                <td>
                  {" "}
                  <FaCheck className="check-icon" />{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="below-table">
          *Hulu + Live TV is not supported on PlayStation 3. Data effective as
          of post date.
        </p>
      </div>

      <div className="section endnote page-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationIcon}
            alt="quotations"
          />
          <h4>Hulu and Hulu + Live TV app; Streaming devices and smart TVs</h4>
          <p>
            The Hulu app is available on the following streaming devices and
            smart TVs:
          </p>
          <ul>
            <li>Amazon Fire TV (Cube, Stick, TV)</li>
            <li>Apple TV</li>
            <li>Chromecast, Chromecast with Google TV</li>
            <li>LG TVs (select models)</li>
            <li>Roku (Ultra, Express, Premiere, Stick, TV)</li>
            <li>Samsung TVs (select models)</li>
            <li>VIZIO SmartCast TVs</li>
            <li>Xfinity X1 TV Box</li>
          </ul>
          <h4>Hulu and Hulu + Live TV app; Computers, tablets, and phones</h4>
          <p>
            The Hulu app is available on the following computers, tablets, and
            phones:
          </p>
          <ul>
            <li>Amazon Fire tablets</li>
            <li>Android phones, tablets</li>
            <li>Echo Show</li>
            <li>iPhone, iPad</li>
            <li>PC, Mac web browsers</li>
          </ul>
          <h4>Hulu and Hulu + Live TV app; Gaming consoles</h4>
          <p>
            With the exceptions of NVIDIA SHIELD TV Pro and Wii, the Hulu app is
            available on the following gaming consoles:
          </p>
          <ul>
            <li>Nintendo Switch</li>
            <li>PlayStation 3*, 4, 5</li>
            <li>Xbox 360, One</li>
          </ul>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Hulu supported devices </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span>How many devices can stream
                Hulu at once?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Hulu and Hulu + Live TV allow for two simultaneous streams on
                  separate devices. If you try to stream content on a third
                  device with any of Hulu’s base plans, you’ll receive a “Too
                  many streams” error message. For an extra $9.99 a month, you
                  can upgrade your Hulu plan to Unlimited Screens.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"How many devices can stream Hulu at once?"}
            cssClass={"faq-content"}
          >
            <p>
              Hulu and Hulu + Live TV allow for two simultaneous streams on
              separate devices. If you try to stream content on a third device
              with any of Hulu’s base plans, you’ll receive a “Too many streams”
              error message. For an extra $9.99 a month, you can upgrade your
              Hulu plan to Unlimited Screens.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Can I watch Hulu at two
                different houses?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  You get two simultaneous streams with Hulu and Hulu + Live TV
                  regardless of location, so you can watch Hulu in two separate
                  households.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Can I watch Hulu at two different houses?"}
            cssClass={"faq-content"}
          >
            <p>
              You get two simultaneous streams with Hulu and Hulu + Live TV
              regardless of location, so you can watch Hulu in two separate
              households.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does Hulu offer an upgrade
                for more streams?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Hulu + Live TV subscribers can upgrade to Unlimited Streams
                  for an additional $9.99 a month. The unlimited streams apply
                  to devices within your home internet network. <br />
                  Unfortunately, you can only get three streams on mobile
                  devices outside of your home network. Unlimited Streams is not
                  available for Hulu subscriptions minus Live TV. <br />
                  The Unlimited Streams upgrade also doesn’t apply to add-on
                  premium networks like Max (formerly HBO Max), CINEMAX,
                  SHOWTIME, or STARZ. With them, you’ll be limited to five
                  streams within your home network, and three on mobile devices
                  outside of the network.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does Hulu offer an upgrade for more streams?"}
            cssClass={"faq-content"}
          >
            <p>
              Hulu + Live TV subscribers can upgrade to Unlimited Streams for an
              additional $9.99 a month. The unlimited streams apply to devices
              within your home internet network. <br />
              Unfortunately, you can only get three streams on mobile devices
              outside of your home network. Unlimited Streams is not available
              for Hulu subscriptions minus Live TV. <br />
              The Unlimited Streams upgrade also doesn’t apply to add-on premium
              networks like Max (formerly HBO Max), CINEMAX, SHOWTIME, or STARZ.
              With them, you’ll be limited to five streams within your home
              network, and three on mobile devices outside of the network.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote page-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationIcon}
            alt="quotations"
          />

          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}> Best Streaming Devices</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Roku Ultra Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Amazon Fire TV Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Internet for Streaming</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Internet Providers</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Smart TVs</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default HuluSupportedDevices;
