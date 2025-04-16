// import React, { useState } from "react";
import "./cheap-at&t-internet.scss";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { atandtNavLinks } from "../../assets/data/navLinks/at&tNavLinks";
import PackageCard from "../../components/package-card/PackageCard";
// import SubNav from "../../components/sub-nav/SubNav";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import Searchbar from "../../components/searchbar/Searchbar";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Cheapest AT&T Package"
};

const CheapAtandtInternet = () => {
  // const [faq, setFaq] = useState();

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
        "Price",
        "Maximum download speed",
        "Technology type",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "AT&T Internet 300",
            "$55.00/mo.",
            "300 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataInternetpacks = [
    {
      head: [
        "Package",
        "Price",
        "Maximum download speed",
        "Data allowance",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Access from AT&T with up to 3 Mbps",
            "$5.00/mo.",
            "Up to 3 Mbps",
            "150 GB or 1 TB",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Access from AT&T with up to 10 Mbps",
            "$10.00/mo.",
            "Up to 10 Mbps",
            "150 GB or 1 TB",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Access from AT&T with up to 100 Mbps",
            "$30.00/mo.",
            "Up to 100 Mbps",
            "Unlimited",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataStream = [
    {
      head: [
        "Package",
        "Price",
        "Maximum download speed",
        "Data allowance",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "AT&T Internet 300 + DIRECTV STREAM ENTERTAINMENT",
            "$124.99/mo.",
            "300 Mbps",
            "75+",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="cheap-atandt-internet">
      {/* <SubNav links={atandtNavLinks} /> */}
      <div className="atandt-costs-hero global-inner-hero">
        <h1>What Is The Cheapest AT&T Package?</h1>
        <p>
          AT&T Internet 300 offers 300 Mbps download speeds for only $55
          monthly.
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

      <div className="endnote is-atandt-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="" />
          <h4>Looking for AT&T DSL Internet?</h4>
          <p>
            AT&T DSL Internet is no longer available to new customers. Instead,
            check out AT&T Internet Air. At the same price as AT&T’s old DSL
            plan and with nearly the same download and upload speeds, Internet
            Air offers up a solid alternative. Read all the details in our
            <span className="link">
              <Link href="/"> AT&T Internet Air review.</Link>
            </span>{" "}
          </p>
        </div>
      </div>

      <CTA
        heading={"Want faster internet?"}
        desc={"Enter your zip code to see internet plans in your area."}
      />

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
          <Link href={"#"}>Cheapest AT&T internet package</Link>
          <Link href={"#"}>Cheapest AT&T low-income internet package</Link>
          <Link href={"#"}>Cheapest AT&T internet and TV bundle</Link>
        </div>
      </div>

      <div className="section atandt-Cheapest-internet-package">
        <div className="head">
          <h2 className="sect-heading">
            Cheapest AT&T internet package: <span> AT&T Internet 300 </span>
          </h2>
          <p className="sect-desc">
            In areas where AT&T offers fiber-to-home internet, the cheapest plan
            you can get AT&T Internet 300, which is also $55 a month. AT&T
            Internet 300 gets you a maximum download speed of 300 Mbps, which’ll
            handle regular web browsing, online gaming, and video streaming for
            a small to mid-sized family.
            <br />
            While AT&T’s starting plans are more expensive than most internet
            providers, keep in mind that AT&T’s prices include its equipment
            fee, which other providers would charge about $10 per month for.
            <br />
            Overall, it’s crummy that you can’t expect the same internet speeds
            from AT&T no matter where you live—especially when these wildly
            varying plans have the same price. If AT&T internet in your area is
            slow, check out other options near you by entering your zip code
            below:
          </p>
        </div>
        <Searchbar />
        <br />
        <br />
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section atandt-Cheapest-low-income-internet-package">
        <div className="head">
          <h2 className="sect-heading">
            <span> Cheapest low-income </span> internet package: Access from
            AT&T
          </h2>
          <p className="sect-desc">
            Access from AT&T offers affordable internet to low-income families.
            If you or someone in your household qualifies for Supplemental
            Nutrition Assistance Program (SNAP), Supplemental Security Income
            (SSI), or the National School Lunch program, you can apply for
            Access from AT&T. You can also apply if your household income is
            within 200% of the federal poverty guidelines.
            <br />
            If you qualify for Access from AT&T, you’ll also qualify for the
            Affordable Connectivity Program (ACP). With ACP, you’ll save up to
            $30 a month on internet—so if you pair those savings up with Access
            from AT&T, you’ll get internet for free.
            <br />
            It’s a little bit of extra paperwork to apply for both assistance
            programs, but it’s worth it. And if you’re offered a choice on your
            Access from AT&T plan, we recommend going with the 100 Mbps plan,
            since it comes with the fastest speeds and unlimited data. Watching
            out for data caps is a real bummer.
          </p>
        </div>
        <PackageTable item={packageTableDataInternetpacks} />
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section atandt-Cheapest-stream-package">
        <div className="head">
          <h2 className="sect-heading">
            Cheapest AT&T and DIRECTV STREAM bundle:{" "}
            <span> Internet 300 + DIRECTV STREAM ENTERTAINMENT </span>
          </h2>
          <p className="sect-desc">
            AT&T internet bundles with DIRECTV STREAM to offer streaming live
            TV. But our experts find DIRECTV STREAM overpriced and dislike its
            limited Cloud DVR. Check out other live TV streaming services—like
            YouTube TV and Hulu + Live TV—for a better deal.
            <br />
            But if you’ve got your heart set on bundling with DIRECTV STREAM,
            DIRECTV STREAM ENTERTAINMENT is your cheapest option. While the
            $69.99 a month price tag is average for a live TV streaming service,
            the value isn’t the best. It comes with only 75+ channels, 3
            streams, and 20 hours on your Cloud DVR.
          </p>
        </div>
        <PackageTable item={packageTableDataStream} />
        <br />
        <p className="below-table">
          Data as of post date. Offers and availability may vary by location and
          are subject to change.
        </p>
      </div>

      <CTA
        heading={"Looking for an internet or TV deal?"}
        desc={
          "Enter your zip code to find local internet and TV providers in your area."
        }
      />

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is AT&T worth it? </span>
          </h2>
          <p className="sect-desc">
            AT&T’s packages aren’t the cheapest, but its fiber internet plans
            offer a lot of bang for your buck with matched download and upload
            speeds. And if you qualify for Access from AT&T as well as the
            Affordable Connectivity Program, you can get up to 100 Mbps internet
            speeds for free. That’s a pretty sweet deal.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>check availability</Link>
        </div>
      </div>

      <div className="section atandt-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Cheapest AT&T plans </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What is the cheapest AT&T
                internet?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  AT&T Internet 300 is $55 a month and comes with 300 Mbps
                  download speeds. If you don’t live in an AT&T Fiber area, your
                  AT&T internet plan may be slower, but won’t cost more than $55
                  monthly.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What is the cheapest AT&T internet?"}
            cssClass={"faq-content"}
          >
            <p>
              AT&T Internet 300 is $55 a month and comes with 300 Mbps download
              speeds. If you don’t live in an AT&T Fiber area, your AT&T
              internet plan may be slower, but won’t cost more than $55 monthly.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How much is AT&T Wi-Fi by
                itself?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  AT&T Wi-Fi plans start at $55 monthly for 300 Mbps download
                  speeds. AT&T Fiber plans come with a Wi-Fi gateway at no extra
                  cost.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" How much is AT&T Wi-Fi by itself?"}
            cssClass={"faq-content"}
          >
            <p>
              AT&T Wi-Fi plans start at $55 monthly for 300 Mbps download
              speeds. AT&T Fiber plans come with a Wi-Fi gateway at no extra
              cost.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Is AT&T or Xfinity cheaper?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Xfinity’s internet plans tend to be cheaper than AT&T’s. If
                  you want superfast speeds, though, AT&T has more affordable
                  multi-gigabit speed plans.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Is AT&T or Xfinity cheaper?"}
            cssClass={"faq-content"}
          >
            <p>
              Xfinity’s internet plans tend to be cheaper than AT&T’s. If you
              want superfast speeds, though, AT&T has more affordable
              multi-gigabit speed plans.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote atandt-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Related AT&T package articles</h4>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"/"}>The Hidden Costs of AT&T Internet</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"/"}>AT&T Internet Review </Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"/"}>DIRECTV STREAM Review</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default CheapAtandtInternet;
