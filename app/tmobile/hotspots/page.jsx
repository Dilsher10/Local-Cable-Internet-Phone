// import React, { useState } from "react";
import "./t-mobile-hotspots.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { tmobileNavLinks } from "../../assets/data/navLinks/tmobileNavLinks";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import quotationsIcon from "../../assets/images/quotations.svg";
import wadget from "../../assets/images/wadget.png";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";
import PackageTable from "../../components/package-table/PackageTable";

export const metadata = {
  title: "T-Mobile Hotspots"
};

const TMobileHotSpots = () => {
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
        "Plan",
        "Price*",
        "Max download speed",
        "Max upload speed*",
        ,
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "T-Mobile 5G Home Internet",
            "$50/mo.*",
            "72-245 Mbps",
            "15-31 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "T-Mobile 5G Home Internet with T-Mobile phone plan",
            "$50/mo.*",
            "72-245 Mbps",
            "15-31 Mbps",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="t-mobile-hotspots">
      {/* <SubNav links={tmobileNavLinks} /> */}
      <div className="availability-hero global-inner-hero">
        <h1>T-Mobile Hotspots</h1>
        <p>
          From costs to speeds, we’ve researched everything you need to know
          about T-Mobile hotspots.
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
            Interested in internet access on the go? Whether you’re on a road
            trip or need to get your kid’s tablet online, T-Mobile has a lot of
            great mobile hotspot options. Let’s break down some of the easiest
            ways to get a T-Mobile hotspot.
            <br />
          </p>
          <h4>Want to get T-Mobile internet?</h4>
          <p>
            T-Mobile 5G Home Internet offers affordable home internet service
            using T-Mobile’s 5G mobile data network. Read our T-Mobile 5G Home
            Internet review to learn more about the service, and enter your zip
            code below to see if it’s available in your area.
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
          <Link href={"#"}> T-Mobile hotspot plans </Link>
          <Link href={"#"}>Free T-Mobile hotspot options </Link>
        </div>
      </div>

      <div className="section cell-phone-and-internet-bundles">
        <div className="head">
          <h2 className="sect-heading">
            T-Mobile <span> hotspot plans</span>
          </h2>
          <p className="sect-desc">
            Unlike traditional cable internet providers, T-Mobile doesn’t have a
            public hotspot network you can use if you’re at a coffee shop or a
            park. Instead, you connect to T-Mobile’s 5G data network with a
            mobile hotspot. You want a dedicated hotspot if you regularly
            connect multiple people and devices to the internet. Standalone
            hotspots are small, phone-sized hub devices that work similarly to a
            Wi-Fi router. To use a hotspot, you simply connect a device (like a
            tablet or laptop) to the hub device using the hotspot’s Wi-Fi
            password.
            <br />
            T-Mobile hotspots also require a standalone data plan. As with cell
            phone plans, you get a set amount of premium 5G and 4G LTE monthly
            data, but you don’t have to deal with overage fees if you exceed
            this cap. Instead, you temporarily have slower internet speeds for
            the rest of the month.
            <br />
            You also need to purchase a hotspot from T-Mobile. Check out our
            best mobile hotspots guide to learn more about T-Mobile’s best
            hotspot options.
          </p>
        </div>
        <Image src={wadget} alt="wadget" />
        <br />
        <div className="package-table-container channels">
          <h4>T-Mobile hotspot plans</h4>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            *Requires AutoPay and one T-Mobile Magenta MAX plan.
            <br />
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change.
          </p>
        </div>
      </div>

      <div className="section hotspot-options">
        <div className="head">
          <h2 className="sect-heading">
            Free T-Mobile <span> hotspot optionss</span>
          </h2>
          <p className="sect-desc">
            Are you a T-Mobile phone customer? You might have a free T-Mobile
            hotspot in your pocket. All T-Mobile’s Unlimited phone plans include
            the ability to use your smartphone as a mobile hotspot. We don’t
            recommend having your entire family connect to your phone hotspot,
            but it works if you’re on the go and need to connect one or two
            devices to the internet. <br />
            Every T-Mobile Unlimited plan technically includes unlimited hotspot
            data, but hotspot speeds depend on your exact plan. T-Mobile’s
            lower-tier plans cap your hotspot speeds at 3G levels, while the
            carrier’s fancier plans include up to 40GB of full-speed 5G hotspot
            data.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>T-Mobile phone hotspot options</h4>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            *Requires AutoPay and one T-Mobile Magenta MAX plan.
            <br />
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} alt="quotationsIcon" className="mark" />
          <h4>Pro tip:</h4>
          <p>
            Do you live out in the country? Mobile hotspots aren’t an ideal
            internet option, but they can be a fit depending on your home’s
            budget and internet needs. Check out our rural internet guide to
            learn more about alternative internet options.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take:<span> Is t-mobile deals worth it?</span>
          </h2>
          <p className="sect-desc">
            Whether you need to take a Zoom call on the road or download TV
            shows for the family tablet, a mobile hotspot is a great tool for
            when you’re out and about. T-Mobile’s standalone and mobile hotspot
            options give customers many great mobile internet options.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>check availability</Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>T-Mobile hotspot </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Is T-Mobile's hotspot free?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  T-Mobile offers free hotspot support on its smartphone plans.
                  But if you’re looking for a standalone hotspot, you need to
                  buy a unit and pay for a hotspot plan.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Is T-Mobile's hotspot free?"}
            cssClass={"faq-content"}
          >
            <p>
              T-Mobile offers free hotspot support on its smartphone plans. But
              if you’re looking for a standalone hotspot, you need to buy a unit
              and pay for a hotspot plan.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How do I use a T-Mobile
                hotspot?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  A T-Mobile hotspot works similarly to a Wi-Fi router. To get
                  your device online, you connect to the hotspot’s wireless
                  network and enter the hotspot’s wireless password.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" How do I use a T-Mobile hotspot?"}
            cssClass={"faq-content"}
          >
            <p>
              A T-Mobile hotspot works similarly to a Wi-Fi router. To get your
              device online, you connect to the hotspot’s wireless network and
              enter the hotspot’s wireless password.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How much is T-Mobile's
                hotspot?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Hotspot access comes with your smartphone if you have a
                  T-Mobile cell phone plan, but prices vary for standalone
                  T-Mobile hotspots. Hotspot units typically cost between $100
                  and $300, and you also need to pay for a hotspot monthly data
                  plan.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How much is T-Mobile's hotspot?"}
            cssClass={"faq-content"}
          >
            <p>
              Hotspot access comes with your smartphone if you have a T-Mobile
              cell phone plan, but prices vary for standalone T-Mobile hotspots.
              Hotspot units typically cost between $100 and $300, and you also
              need to pay for a hotspot monthly data plan.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does T-Mobile have
                unlimited hotspot data?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Technically, every T-Mobile hotspot plan has unlimited data,
                  but the amount of included full-speed 5G data varies by plan.
                  With T-Mobile’s lower-tier plans, you get unlimited data at 3G
                  speeds (around 7Mbps). But on T-Mobile’s higher-end plans, you
                  have up to 40GB of 5G hotspot data.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Does T-Mobile have unlimited hotspot data?"}
            cssClass={"faq-content"}
          >
            <p>
              Technically, every T-Mobile hotspot plan has unlimited data, but
              the amount of included full-speed 5G data varies by plan. With
              T-Mobile’s lower-tier plans, you get unlimited data at 3G speeds
              (around 7Mbps). But on T-Mobile’s higher-end plans, you have up to
              40GB of 5G hotspot data.
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
                <Link href={"#"}>T-Mobile 5G Home Internet Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}> Rural Internet Guide</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Mobile Hotspots 2024</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default TMobileHotSpots;
