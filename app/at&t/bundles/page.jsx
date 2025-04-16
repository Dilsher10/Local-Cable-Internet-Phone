// import React, { useState } from "react";
import "./at&t-bundles.scss";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import xfintyTvHeroBg from "../../assets/images/xfinity-tv-hero-bg.jpg";
// import SubNav from "../../components/sub-nav/SubNav";
// import { atandtNavLinks } from "../../assets/data/navLinks/at&tNavLinks";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import PackageTable from "../../components/package-table/PackageTable";
import CTA from "../../components/cta-section/CTA";
import atandatdealsposter from "../../assets/images/atandatdealsposter.png";
import signal from "../../assets/images/signal.png";
import BlogCard from "../../components/blog-card/BlogCard";
import { blogsTemporary } from "../../assets/data/blogsTemporary";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "AT&T Bundles: Plans, Prices, And More"
};

const AtandtBundles = () => {
  // const [faq, setFaq] = useState(null);

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "AT&T Bundles: Plans, Prices, And More",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "Fast fiber internet speeds up to 5,000 Mbps",
      "DIRECTV Stream includes 165+ channels",
      "Contract-free internet and TV service",
      "Free Max™, SHOWTIME®, and more for 3 mos.",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Packages start at $124.99/mo.",
  };

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };

  let packageTableData = [
    {
      head: [
        "Package",
        "Price*",
        "Download speeds up to",
        "Channel count",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Internet 300 + DIRECTV STREAM ENTERTAINMENT",
            "$124.99/mo.",
            "300 Mbps",
            "65+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Internet 500 + DIRECTV STREAM CHOICE",
            "$149.99/mo.",
            "500 Mbps",
            "95+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "1 Gig Internet + DIRECTV STREAM ULTIMATE",
            "$194.99/mo.",
            "1,000 Mbps",
            "130+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "5 Gig Internet + DIRECTV STREAM PREMIER",
            "$334.99/mo.",
            "2,000 Mbps",
            "140+",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="atandt-bundles">
      {/* <SubNav links={atandtNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Top AT&T <span> Bundles </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
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
        heading={"Interested in an AT&T internet, TV, or phone bundle?"}
        desc={
          "Enter your zip code below to see AT&T bundle options in your area."
        }
      />

      <div className="section atandt-internet-plans-and-prices-feature-fast-speeds ">
        <div className="head">
          <h2 className="sect-heading">
            <span> AT&T bundle packages: </span> get fast speeds and lots of
            channels no contracts
          </h2>
          <p className="sect-desc">
            Looking for an internet and TV service that doesn’t cut corners when
            it comes to channel counts or download speeds? You’ll find a lot to
            like with an AT&T Internet and DIRECTV STREAM bundle. AT&T Fiber
            Internet offers internet speeds between 300 and 5,000 Mbps, so
            you’ll have options whether you need internet for one person or an
            entire family. Fiber internet is also the best internet you can get
            nowadays, thanks to its equal upload and download speeds. With fast
            upload speeds that start at 300 Mbps, you won’t have to worry about
            slow Zoom sessions or laggy FaceTime calls.
            <br />
            DIRECTV STREAM has four channel plans that’ll have something for
            everyone, with channel lineups featuring staples like ESPN, Cartoon
            Network, and Disney Channel. DIRECTV STREAM is also a streaming
            service, so you won’t have to worry about mandatory equipment fees.
            If you already have a streaming device like an Apple TV or Roku, you
            can download the DIRECTV STREAM app for free.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section atandt-deals">
        <div className="head">
          <h2 className="sect-heading">
            AT&T bundle deals:{" "}
            <span> free $200, 25% monthly discounts, and more </span>
          </h2>
          <p className="sect-desc">
            Whether you’re a new or existing AT&T customer, you can still get
            great deals with an AT&T internet and DIRECTV STREAM bundle.
            Although AT&T doesn’t offer traditional bundle discounts, AT&T still
            includes offers like a Visa reward card worth up to $200, 25% off
            AT&T Wireless plans when you bundle AT&T cell phone and internet
            service, and three months of free premium cable channels.
            <br />
            Visit our{" "}
            <span className="link">
              <Link href={"/"}>visit AT&T deals page</Link>
            </span>
            to learn more about AT&T’s best offers.
          </p>
        </div>
        <Image src={atandatdealsposter} alt="atandatdealsposter" />
        <div className="package-table-container channels">
          <Image src={signal} alt="mark" className="mark" />
          <h4>Interested in AT&T TV and internet service?</h4>
          <br />
          <p>
            Check out our full{" "}
            <span className="link">
              <Link href={"/"}>AT&T bundles guide</Link>
            </span>{" "}
            to learn more about DIRECTV STREAM and AT&T Fiber Internet plans.
          </p>
        </div>
      </div>

      <div className="section quick-answers">
        <div className="head">
          <h2 className="sect-heading">
            Best <span> AT&T bundles </span>
          </h2>
          <p className="sect-desc">
            Between AT&T Fiber Internet’s six internet plans and DIRECTV
            STREAM’s four TV plans, you’ll have a lot of options if you want to
            mix and match services for an AT&T TV and internet bundle. But if
            you want to cut to the chase, here are our recommendations for the
            best AT&T bundles.
          </p>
        </div>

        <div className="cards">
          {blogsTemporary.map(
            (item, index) =>
              index === 0 ||
              (1 && (
                <BlogCard
                  key={index}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  shortDesc={item.shortDesc}
                  writerImg={item.writerImg}
                  writerName={item.writerName}
                  postDate={item.postDate}
                  buttonIcon={item.buttonIcon}
                />
              ))
          )}
        </div>
      </div>

      <div className="section atandt-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> AT&T bundles </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What kind of packages does
                AT&T offer?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  AT&T offers six internet plans with speeds between 100 and
                  5,000 Mbps. AT&T’s internet plans cost between $55 and $180
                  per month. DIRECTV STREAM offers four channel packages with
                  prices between $69.99–$159.99/mo. and channel counts of up to
                  165 channels.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What kind of packages does AT&T offer?"}
            cssClass={"faq-content"}
          >
            <p>
              AT&T offers six internet plans with speeds between 100 and 5,000
              Mbps. AT&T’s internet plans cost between $55 and $180 per month.
              DIRECTV STREAM offers four channel packages with prices between
              $69.99–$159.99/mo. and channel counts of up to 165 channels.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Can I bundle my AT&T
                Wireless with DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  You can bundle DIRECTV and an AT&T Wireless plan. However,
                  AT&T doesn’t offer traditional bundle discounts.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Can I bundle my AT&T Wireless with DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>
              You can bundle DIRECTV and an AT&T Wireless plan. However, AT&T
              doesn’t offer traditional bundle discounts.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Is there a discount for
                having AT&T and DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  You won’t get a discount with an AT&T and DIRECTV bundle. But
                  you can save 25% on AT&T Wireless Unlimited plans if you
                  bundle AT&T Wireless with internet.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Is there a discount for having AT&T and DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>
              You won’t get a discount with an AT&T and DIRECTV bundle. But you
              can save 25% on AT&T Wireless Unlimited plans if you bundle AT&T
              Wireless with internet.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What speeds can you get
                with AT&T Fiber and DIRECTV bundles?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  You can get speeds between 300 and 5,000 Mbps with an AT&T
                  Fiber and DIRECTV bundle.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={
              " What speeds can you get with AT&T Fiber and DIRECTV bundles?"
            }
            cssClass={"faq-content"}
          >
            <p>
              You can get speeds between 300 and 5,000 Mbps with an AT&T Fiber
              and DIRECTV bundle.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> What are the AT&T streaming
                packages?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>The best AT&T streaming packages include:</p>
                <ul>
                  <li>
                    ·AT&T Internet 300 + DIRECTV STREAM ENTERTAINMENT
                    ($124.99/mo.) with 300 Mbps download speeds and 65+ channels
                  </li>
                  <li>
                    ·AT&T 1 Gig Internet + DIRECTV STREAM ULTIMATE ($194.99/mo.)
                    with 1,000 Mbps download and upload speeds and 130+ channels
                  </li>
                  <li>
                    ·AT&T 5 Gig Internet + DIRECTV STREAM PREMIER ($334.99/mo.)
                    with 5,000 Mbps download and upload speeds, 165+ channels
                    including HBO, plus unlimited cloud DVR
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" What are the AT&T streaming packages?"}
            cssClass={"faq-content"}
          >
            <p>The best AT&T streaming packages include:</p>
            <ul>
              <li>
                ·AT&T Internet 300 + DIRECTV STREAM ENTERTAINMENT ($124.99/mo.)
                with 300 Mbps download speeds and 65+ channels
              </li>
              <li>
                ·AT&T 1 Gig Internet + DIRECTV STREAM ULTIMATE ($194.99/mo.)
                with 1,000 Mbps download and upload speeds and 130+ channels
              </li>
              <li>
                ·AT&T 5 Gig Internet + DIRECTV STREAM PREMIER ($334.99/mo.) with
                5,000 Mbps download and upload speeds, 165+ channels including
                HBO, plus unlimited cloud DVR
              </li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>Is HBO included with AT&T?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  HBO and Max are no longer included with new AT&T plans, but
                  HBO is still included with the AT&T 5 Gig Internet + DIRECTV
                  STREAM PREMIER package that costs $334.99/mo. and includes
                  5,000 Mbps download and upload speeds, 165+ channels, plus
                  unlimited cloud DVR.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"Is HBO included with AT&T?"}
            cssClass={"faq-content"}
          >
            <p>
              HBO and Max are no longer included with new AT&T plans, but HBO is
              still included with the AT&T 5 Gig Internet + DIRECTV STREAM
              PREMIER package that costs $334.99/mo. and includes 5,000 Mbps
              download and upload speeds, 165+ channels, plus unlimited cloud
              DVR.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default AtandtBundles;
