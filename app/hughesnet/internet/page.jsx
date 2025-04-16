// import React, { useState } from "react";
import "./hughesnet-internet.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { hughesnetNavLinks } from "../../assets/data/navLinks/hughesnetNavLinks";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import xfintyTvHeroBg from "../../assets/images/xfinity-tv-hero-bg.jpg";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import PackageCard from "../../components/package-card/PackageCard";
import CTA from "../../components/cta-section/CTA";
import signal from "../../assets/images/signal.png";
import dotted from "../../assets/images/dotted.png";
import PackageTable from "../../components/package-table/PackageTable";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "HushesNet Internet Plans"
};

const HughesnetInternet = () => {
  //   const [faq, setFaq] = useState();

  let packageTableData = [
    {
      head: [
        "package",
        "Price",
        "Download speeds",
        "Channels",
        " Promotions",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Spectrum Internet",
            "Starting at $49.99/mo. for 12 mos.",
            "Up to 300 Mbps",
            "N/A",
            "90-day Peacock Premium subscription",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataTwo = [
    {
      head: [
        "Package",
        "Price",
        "download speeds",
        "upload speeds up to",
        "Details",
      ],

      body: [
        {
          content: ["1.", "Connect", "$19.99–$30.00/mo.", "75 Mbps", "5 Mbps"],
          linkPath: "#",
        },

        {
          content: [
            "2.",
            "Connect More",
            "$25.00-$35.00/mo.",
            "200 Mbps",
            "5 Mbps",
          ],
          linkPath: "#",
        },

        {
          content: ["3.", "Fast", "$35.00–$55.00/mo.", "400 Mbps", "5 Mbps"],
          linkPath: "#",
        },

        {
          content: [
            "4.",
            "Superfast",
            "$60.00–$65.00/mo.",
            "800 Mbps",
            "10 Mbps",
          ],
          linkPath: "#",
        },

        {
          content: [
            "5.",
            "Gigabit",
            "$60.00–$70.00/mo.",
            "1000 Mbps",
            "15 Mbps",
          ],
          linkPath: "#",
        },

        {
          content: [
            "6.",
            "Gigabit Extra",
            "$70.00–$80.00/mo.",
            "1200 Mbps",
            "35 Mbps",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "HushesNet Internet Plans",
    desc: "Are you and your household trying to binge-watch the latest hit series, video call for work, or just browse social media? Read on to find an AT&T plan that will work best for you. Plus, many come with perks like:",
    points: [
      "Internet service from nearly anywhere",
      "Download speeds up to 50 Mbps",
      "Up to 200 GB of premium data",
    ],
    buttonName: "view plans",
    buttonPath: "#",
    price: "Plans starting at $44.99/mo.",
  };
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="hughesnet-internet">
      {/* <SubNav links={hughesnetNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Top hughesNet <span> internet plans </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Aliquam risus odio vulputate
            pretium varius. Phasellus aliquam hac lacus fames elit. Suspendisse
            nunc fermentum commodo sit tempus. Ultricies id at magna turpis
            neque.
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
      </div>

      <CTA
        heading={"Interested in HughesNet internet service?"}
        desc={
          "Enter your zip code below to see HughesNet plans and pricing in your area."
        }
      />

      <div className="section endnote is-good">
        <div className="head">
          <h2 className="sect-heading">
            HughesNet <span> internet plans </span>
          </h2>
          <p className="sect-desc">
            Whether you’re working on the road or living somewhere without
            traditional internet service, you’ll like HughesNet’s bounty of
            internet options. HughesNet’s four standard internet plans include
            up to 200GB of premium data and flexible prices that start at only
            $44.99 monthly. They’ll be a great fit for households that need
            internet access for tasks like YouTube videos and emails.
            <br />
            If your address is eligible for HughesNet Fusion, you’ll get access
            to HughesNet’s newest internet service package. HughesNet Fusion
            uses a combination of satellite and physical wireless networks to
            provide low-latency internet service, making it a great fit if
            you’re regularly watching Netflix or taking video calls.
          </p>
        </div>

        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data effective as of post date. Offers and availability vary by
          location and are subject to change. <br />
          *Monthly Fee reflects the applied $5 savings for ACH enrollment.
          Enroll before the 2nd billing cycle for continued savings.
        </p>
      </div>

      <div className="section features">
        <div className="head">
          <h2 className="sect-heading">
            HughesNet <span> features </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Pricing </h4>
          <p className="after-heading">
            HughesNet’s six internet plans have prices that range between
            $44.99–$144.99/mo., and include up to 200GB of premium full-speed
            data. If you’re shopping for one to two light internet users, you’ll
            be fine with HughesNet’s 15GB or 30GB plans. But if you’re getting
            internet service for a family, we’d recommend upgrading to a 100GB
            or 200GB plan.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Availability</h4>
          <p className="after-heading">
            One of HughesNet’s biggest advantages is its wide availability.
            Unlike cable or fiber internet providers, HughesNet doesn’t need to
            dig up your yard to connect internet cables to your house. Instead,
            HughesNet uses its airborne satellite network to connect your house
            to the internet wirelessly. You simply need a clear view of the
            southern sky to get HughesNet internet service.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Internet speeds</h4>
          <p className="after-heading">
            Every HughesNet internet plan comes with download speeds up to
            50Mbps. With HughesNet, you’ll have enough internet speed if you’re
            simply using the internet to browse web pages, check Facebook, or
            occasionally watch YouTube.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={signal} alt="signal " className="mark" />
          <h4> Interested in HughesNet internet service?</h4>
          <p className="after-heading">
            Visit{" "}
            <span className="link">
              <Link href="/">our HughesNet internet review for a</Link>
            </span>{" "}
            full breakdown of HughesNet’s internet plans.
          </p>
        </div>
      </div>

      <div className="section endnote blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"> </p>
        </div>
        <div className="endnote-container">
          <Image src={dotted} alt="dotted" />
          <h4>HughesNet internet bundles and deals</h4>
          <p>
            {" "}
            With HughesNet Voice, you can add nationwide phone service to your
            internet plan for only an additional $29.95 per month. You can also
            add international phone service with add-ons that start at only
            $9.95 per month. <br />
            HughesNet customers also receive $5 in monthly savings if they
            change their automatic payment method from a credit card to ACH
            (bank account) enrollment.
          </p>
        </div>
      </div>

      <div className="section phone-and-internet-bundles">
        <div className="head">
          <h2 className="sect-heading">
            HughesNet <span> phone and internet bundles</span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <PackageTable item={packageTableDataTwo} />
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>HughesNet</span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How much does HughesNet
                internet cost a month?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  HughesNet prices for its internet plans start at $44.99 per
                  month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" How much does HughesNet internet cost a month?"}
            cssClass={"faq-content"}
          >
            <p>
              HughesNet prices for its internet plans start at $44.99 per month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is HughesNet internet any
                good?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  You’ll find HughesNet to be a good fit if your household has
                  standard internet needs and isn’t covered by traditional cable
                  internet providers. With up to 50Mbps download speeds,
                  HughesNet will be fast enough for basic internet browsing and
                  streaming video.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Is HughesNet internet any good?"}
            cssClass={"faq-content"}
          >
            <p>
              You’ll find HughesNet to be a good fit if your household has
              standard internet needs and isn’t covered by traditional cable
              internet providers. With up to 50Mbps download speeds, HughesNet
              will be fast enough for basic internet browsing and streaming
              video.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does HughesNet have
                unlimited Wi-Fi?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  HughesNet packages technically have unlimited Wi-Fi because
                  the internet provider won’t fully cut off your internet.
                  However, HughesNet plans come with set allotments of premium
                  data. Once you exceed this data limit, HughesNet will slow
                  down your internet for the rest of the month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does HughesNet have unlimited Wi-Fi?"}
            cssClass={"faq-content"}
          >
            <p>
              HughesNet packages technically have unlimited Wi-Fi because the
              internet provider won’t fully cut off your internet. However,
              HughesNet plans come with set allotments of premium data. Once you
              exceed this data limit, HughesNet will slow down your internet for
              the rest of the month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Is HughesNet fast enough to
                stream?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  HughesNet is fast enough for streaming. With download speeds
                  up to 50Mbps, HughesNet can support basic movie and music
                  streaming for multiple people.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Is HughesNet fast enough to stream?"}
            cssClass={"faq-content"}
          >
            <p>
              HughesNet is fast enough for streaming. With download speeds up to
              50Mbps, HughesNet can support basic movie and music streaming for
              multiple people.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default HughesnetInternet;
