// import React, { useState } from "react";
import "./google-fiber.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { googlefiberinternetNavLinks } from "../../assets/data/navLinks/googlefiberinternetNavLinks";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import xfintyTvHeroBg from "../../assets/images/xfinity-tv-hero-bg.jpg";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import PackageCard from "../../components/package-card/PackageCard";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
import signal from "../../assets/images/signal.png";
import dotted from "../../assets/images/dotted.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Google Fiber Internet Plans"
};

const GoogleFiber = () => {
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
    heading: "Google Fiber Internet Plans",
    desc: " Are you and your household trying to binge-watch the latest hit series, video call for work, or just browse social media? Read on to find an AT&T plan that will work best for you. Plus, many come with perks like:",
    points: [
      "Download speeds between 1,000–8,000 Mbps",
      "Stellar fiber internet performance",
      "Unlimited internet data",
      "No contracts",
    ],
    buttonName: "check availability",
    buttonPath: "#",
    price: "Plans starting at $70.00/mo.",
  };
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="google-fiber">
      {/* <SubNav links={googlefiberinternetNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Top google fiber <span> internet plans </span>
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
        heading={
          "Are you ready to ditch cable internet for the speed and performance of fiber internet?"
        }
        desc={
          "Enter your zip code below to see if Google Fiber is available in your area."
        }
      />

      <div className="section endnote is-good">
        <div className="head">
          <h2 className="sect-heading">
            Google Fiber internet <span> plans and prices </span>
          </h2>
          <p className="sect-desc">
            Google Fiber is Google’s home internet service, and you’ll get some
            of the fastest internet around when you sign up. With download and
            upload speeds that start at 1,000Mbps, slow downloads and skipping
            Zoom calls will be a problem of the past on Google Fiber.
            <br />
            You’ll also be covered with Google Fiber if your biggest internet
            need is more speed. If Google Fiber’s 5 Gig or 8 Gig plans are
            available in your area, you’ll get some of the fastest internet
            plans on the market today. These plans will be a great fit if you
            regularly download large files for work or share a media library
            with your family.
          </p>
        </div>

        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data effective as of publish date. Pricing and speeds are subject to
          change. Not all offers available in all areas. <br />
          *Available in select markets only. Plus taxes and fees.
          Upload/download speed and device streaming claims are based on maximum
          wired speeds. Actual Internet speeds are not guaranteed and may vary
          based on factors such as hardware and software limitations, latency,
          packet loss, etc.
        </p>
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
          <h4>Google Fiber internet bundles and deals</h4>
          <p>
            Want a full service bundle alongside your Google Fiber internet
            plan? You can add home phone service to your Google Fiber plan for
            an additional $10 monthly. Google also includes the following deals
            with its internet plans:
          </p>
          <br />
          <ul>
            <li>1TB of free cloud storage</li>
            <li>
              A free Wi-Fi router and mesh extenders with 2 Gig, 5 Gig, and 8
              Gig plans
            </li>
            <li>A free Nest Wi-Fi Pro with 1 Gig</li>
          </ul>
          <br />
          <p>
            Google Fiber no longer offers TV service, but you can sign up for a
            streaming TV service that fits your interests and budget. Check out
            our complete Google Fiber TV guide for additional details.
          </p>
          <br />
          <hr />
          <div className="btn">
            <Link href={"#"}> check availability</Link>
          </div>
        </div>
      </div>

      <div className="section features">
        <div className="head">
          <h2 className="sect-heading">
            Google Fiber internet <span> features </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>No waiting with Google Fiber uploads </h4>
          <p className="after-heading">
            Google Fiber sports 8Gbps maximum upload speeds, so you won’t have
            to worry about jumpy Zoom calls or long Google Drive backup times.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>No worries about contracts</h4>
          <p className="after-heading">
            Unlike old cable internet providers, Google Fiber won’t lock you
            into a service contract or hit you with early contract termination
            fees. Google Fiber is 100% contract free.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Unlimited data</h4>
          <p className="after-heading">
            Every Google Fiber plan comes with unlimited data, so you can
            download and upload files to your heart’s content without worrying
            about overage fees.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4> Free Wi-Fi equipment</h4>
          <p className="after-heading">
            Google Fiber includes a free Wi-Fi 6 router or additional mesh Wi-Fi
            equipment with every plan. Get strong Wi-Fi coverage throughout your
            home without paying monthly equipment rental fees.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={signal} alt="signal " className="mark" />
          <h4> Want to get Google Fiber internet?</h4>
          <p className="after-heading">
            Read our full Google Fiber internet review to learn more about
            Google Fiber’s internet plans.
          </p>
        </div>
      </div>

      <div className="section availability">
        <div className="head">
          <h2 className="sect-heading">
            Google Fiber internet <span>availability</span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Google Fiber availability</h4>
          <p className="after-heading">
            Google Fiber is available in more than 20 cities throughout the
            U.S.:
          </p>
          <ul className="channel-list">
            <li>Atlanta, GA</li>
            <li>Austin, TX</li>
            <li>Charlotte, NC</li>
            <li>Chicago, IL</li>
            <li>Denver, CO</li>
            <li>Des Moines, IA</li>
            <li>Huntsville, AL</li>
            <li>Kansas City, KS</li>
            <li>Kansas City, MO</li>
            <li>Lakewood, CO</li>
            <li>Mesa, AZ</li>
            <li>Miami, FL</li>
            <li>Nashville, TN</li>
            <li>Oakland, CA</li>
            <li>Orange County, CA</li>
            <li>Provo, UT</li>
            <li>San Antonio, TX</li>
            <li>San Diego, CA</li>
            <li>San Francisco, CA</li>
            <li>Salt Lake City, UT</li>
            <li>Seattle, WA</li>
            <li>The Triangle, NC</li>
            <li>West Des Moines, IA</li>
          </ul>
          <br />
          <hr />
          <div className="btn">
            <Link href={"#"}> check availability </Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <Image src={dotted} alt="dotted" className="mark" />
          <h4> Save up to $30 on Google Fiber</h4>
          <p className="after-heading">
            You can get major discounts on Google Fiber if your household
            qualifies for the Affordable Connectivity Program. Visit Google
            Fiber’s help page to learn more.
          </p>
          <hr />
          <div className="btn">
            <Link href={"#"}>check availability</Link>
          </div>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>Google Fiber internet </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Where is Google Fiber
                available?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Google Fiber is available in more than 23 major cities across
                  14 states. Major cities with Google Fiber coverage include San
                  Francisco, Denver, Chicago, Atlanta, and Seattle.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Where is Google Fiber available?"}
            cssClass={"faq-content"}
          >
            <p>
              Google Fiber is available in more than 23 major cities across 14
              states. Major cities with Google Fiber coverage include San
              Francisco, Denver, Chicago, Atlanta, and Seattle.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What is Google Fiber?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Google Fiber is Google’s home internet service and provides
                  fiber internet connectivity in your home. Fiber internet
                  offers the fastest performance compared to traditional cable
                  internet providers.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" What is Google Fiber?"}
            cssClass={"faq-content"}
          >
            <p>
              Google Fiber is Google’s home internet service and provides fiber
              internet connectivity in your home. Fiber internet offers the
              fastest performance compared to traditional cable internet
              providers.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How much is Google Fiber?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Google Fiber’s pricing starts at $70.00–$150.00/mo. and
                  features download speeds between 1,000–8,000 Mbps.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How much is Google Fiber?"}
            cssClass={"faq-content"}
          >
            <p>
              Google Fiber’s pricing starts at $70.00–$150.00/mo. and features
              download speeds between 1,000–8,000 Mbps.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Is Google Fiber in my area?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Google Fiber is currently available in 14 states, and Google
                  is working to expand its network. Upcoming Google Fiber cities
                  include suburban Denver; Pocatello, Idaho; and Logan, Utah.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Is Google Fiber in my area?"}
            cssClass={"faq-content"}
          >
            <p>
              Google Fiber is currently available in 14 states, and Google is
              working to expand its network. Upcoming Google Fiber cities
              include suburban Denver; Pocatello, Idaho; and Logan, Utah.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default GoogleFiber;
