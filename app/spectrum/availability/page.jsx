// import React, { useState } from "react";
import "./spectrum-availability.scss";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { spectrumNavLinks } from "../../assets/data/navLinks/spectrumNavLinks";
import PackageCard from "../../components/package-card/PackageCard";
// import SubNav from "../../components/sub-nav/SubNav";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import coveragemap from "../../assets/images/coveragemap.png";
import Searchbar from "../../components/searchbar/Searchbar";
// import Newsletter from "../../components/newsletter/Newsletter";
import quotations from "../../assets/images/quotations.svg";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Spectrum Availability"
};

const SpectrumAvailability = () => {
  // const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }
  //   setFaq(i);
  // };
  return (
    <div className="spectrum-availability">
      {/* <SubNav links={spectrumNavLinks} /> */}
      <div className="spectrum-costs-hero global-inner-hero">
        <h1>Spectrum Review 2024: Plans, Prices, And More</h1>
        <p>
          We’ve researched the packages that’ll give you the best internet
          performance and TV channels.
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
          <h4>Spectrum coverage map</h4>
          <p>
            Are you interested in getting
            <span className="link">
              <Link href={"#"}> Spectrum TV®, Internet</Link>
            </span>{" "}
            or
            <span className="link">
              <Link href={"#"}>phone service?</Link>
            </span>
            Check out our Spectrum coverage map for a comprehensive view of the
            company’s service
            <br />
            If you don’t see your area highlighted on the map, keep scrolling
            for other ways to check if Spectrum is available for your home.
          </p>
          <Image src={coveragemap} alt="coveragemap" className="coveragemap" />
        </div>
      </div>

      <StickyHeader />

      <div className="section tv-availability">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> TV® </span> availability
          </h2>
          <p className="sect-desc">
            If you get{" "}
            <span className="link">
              <Link href={"#"}> Spectrum Internet® service </Link>
            </span>{" "}
            you can likely get{" "}
            <span className="link">
              <Link href={"#"}> Spectrum TV service. </Link>
            </span>{" "}
            Spectrum’s TV Select plan will get you 125+ local and cable channels
            including Comedy Central, Food Network, and ESPN. Spectrum also
            offers à la carte channel add-ons for entertainment, sports, and
            premium channels. Check out our{" "}
            <span className="link">
              <Link href={"#"}> Spectrum TV review </Link>
            </span>{" "}
            to learn about Spectrum’s TV service <br /> Enter your zip code
            below to see if your hometown is covered by Spectrum.
          </p>
        </div>
        <Searchbar />
      </div>

      <div className="section internet-availability">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> Internet® </span> availability
          </h2>
          <p className="sect-desc">
            pectrum Internet offers three plans to choose from, including
            Spectrum Internet Gig. Fast download speeds and no data caps are
            among its features. Check out ou
            <span className="link">
              <Link href={"#"}> Spectrum Internet review </Link>
            </span>{" "}
            to help make your decision.
            <br />
            To find out about Spectrum Internet’s availability, enter your zip
            code below.
          </p>
        </div>
        <Searchbar />
      </div>

      <div className="section spectrum-availability">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> Availability </span>
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
          <h4>Availability by state</h4>
          <p className="after-heading">
            Spectrum is currently available in 41 states. Our list below
            outlines Spectrum’s availability by state.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th>States</th>
                  <th></th>
                  <th></th>
                  <th></th>
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
        <div className="package-table-container channels">
          <h4>Availability by city</h4>
          <p className="after-heading">
            While Spectrum provides TV and Internet service across 41 states,
            including many major cities, it doesn’t reach every neighborhood
            within these states. Here are just a few cities where Spectrum is
            available:
          </p>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Athens, Alabama</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Anaheim, California</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Clearwater, Florida</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Brooklyn, New York</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Charlotte, North Carolina</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Columbia, Missouri</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Great Falls, Montana</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Springfield, Ohio</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Easley, South Carolina</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Orange, Texas</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Appleton, Wisconsin</Link>
              </span>
            </li>
          </ul>
          <p className="after-heading">
            Still wondering, “How do I know if I have Spectrum in my area?”
            <br />
            We can’t list every city where Spectrum serves its customers (and
            you wouldn’t want us to!). Luckily, we have you covered with our
            handy search tool. Just enter your zip code below, and we’ll let you
            know what internet service providers are available in your town.
          </p>
          <Searchbar />
        </div>
      </div>

      <div className="section spectrum-faq">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> Availability </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Is Spectrum available in my
                area?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  The main way to tell if Spectrum{" "}
                  <span className="link">
                    <Link href={"#"}>Internet,</Link>
                  </span>{" "}
                  <span className="link">
                    Tv<Link href={"#"}></Link>
                  </span>{" "}
                  to{" "}
                  <span className="link">
                    Phone<Link href={"#"}></Link>
                  </span>{" "}
                  service is available in your neighborhood is to check your
                  street address.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Is Spectrum available in my area?"}
            cssClass={"faq-content"}
          >
            <p>
              The main way to tell if Spectrum{" "}
              <span className="link">
                <Link href={"#"}>Internet,</Link>
              </span>{" "}
              <span className="link">
                Tv<Link href={"#"}></Link>
              </span>{" "}
              to{" "}
              <span className="link">
                Phone<Link href={"#"}></Link>
              </span>{" "}
              service is available in your neighborhood is to check your street
              address.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Can you get Spectrum
                Internet in the country?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  You can get Spectrum in the country if Spectrum has built its
                  cable Internet network in your neck of the woods. But if
                  you're far out in a rural area, Spectrum likely won't be
                  available.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Can you get Spectrum Internet in the country?"}
            cssClass={"faq-content"}
          >
            <p>
              You can get Spectrum in the country if Spectrum has built its
              cable Internet network in your neck of the woods. But if you're
              far out in a rural area, Spectrum likely won't be available.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How fast is Spectrum
                Internet in my area?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Spectrum's three Internet packages feature maximum download
                  speeds of up to 1 Gbps (wireless speeds may vary).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How fast is Spectrum Internet in my area?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum's three Internet packages feature maximum download speeds
              of up to 1 Gbps (wireless speeds may vary).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What is the cost of
                Spectrum Internet only?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  <span className="link">
                    <Link href={"#"}>Spectrum Internet-only </Link>
                  </span>{" "}
                  plans range between $49.99 to $89.99 per month for the first
                  12 months. On the three plans, you'll get internet speeds from
                  up to 300 Mbps to 1 Gbps (wireless speeds may vary).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" What is the cost of Spectrum Internet only?"}
            cssClass={"faq-content"}
          >
            <p>
              <span className="link">
                <Link href={"#"}>Spectrum Internet-only </Link>
              </span>{" "}
              plans range between $49.99 to $89.99 per month for the first 12
              months. On the three plans, you'll get internet speeds from up to
              300 Mbps to 1 Gbps (wireless speeds may vary).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>Are Charter Spectrum and
                Time Warner the same company?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Charter Communications merged with Time Warner Cable and
                  Bright House Networks in 2015. Spectrum cable now covers a
                  greater area with its TV Select plan, which provides customers
                  with over 125 local and cable channels.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"Are Charter Spectrum and Time Warner the same company?"}
            cssClass={"faq-content"}
          >
            <p>
              Charter Communications merged with Time Warner Cable and Bright
              House Networks in 2015. Spectrum cable now covers a greater area
              with its TV Select plan, which provides customers with over 125
              local and cable channels.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote spectrum-bundles-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Learn more about Spectrum services</h4>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Spectrum Internet</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Spectrum TV Plans</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Spectrum Customer Service</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Spectrum Bundles</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Spectrum Phone Service</Link>
              </span>
            </li>
          </ul>
          <h4>Disclaimers</h4>
          <p>
            *Limited time offer; subject to change; valid to qualified
            residential customers who have not subscribed to any services within
            the previous 30 days and who have no outstanding obligation to
            Charter. Spectrum Internet ® promotion price is $49.99/mo; standard
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
            Limited time offer; subject to change; valid to qualified
            residential customers who have not subscribed to any services within
            the previous 30 days and who have no outstanding obligation to
            Charter. Spectrum Internet® Gig promotion price is $89.99/mo;
            standard rates apply after yr. 1. Taxes, fees and surcharges extra
            and subject to change during and after the promotional period;
            installation/network activation, equipment and additional services
            are extra. General Terms: INTERNET: Speed based on wired connection
            and may vary by address. Wireless speeds may vary. Services subject
            to all applicable service terms and conditions, subject to change.
            Services not available in all areas. Restrictions apply. Enter your
            address to determine availability. ©2022 Charter Communications.
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

export default SpectrumAvailability;
