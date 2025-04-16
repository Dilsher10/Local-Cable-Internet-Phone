// import React, { useState } from "react";
import "./at&t-internet.scss";
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
import signal from "../../assets/images/signal.png";
import helpsupportgirl from "../../assets/images/helpsupportgirl.png";
import atandatdealsposter from "../../assets/images/atandatdealsposter.png";
import BlogCard from "../../components/blog-card/BlogCard";
import { blogsTemporary } from "../../assets/data/blogsTemporary";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "AT&T Internet Plans And Deals 2024",
};

const AtandtInternet = () => {
  // const [faq, setFaq] = useState(null);

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "AT&T Internet Plans And Deals 2024",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "Visa gift card up to $300 with AT&T Fiber plans",
      "Download speeds up to 5,000 Mbps",
      "Contract-free internet",
      "Free AT&T Wi-Fi gateway device",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Internet plans starting at $55.00/mo.",
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
        "Upload speeds up to",
        "Connection type",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Internet 300",
            "$55.00/mo.",
            "300 Mbps",
            "300 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Internet 500",
            "$65.00/mo.",
            "500 Mbps",
            "500 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "1 Gig Internet",
            "$80.00/mo.",
            "1,000 Mbps",
            "1,000 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "2 Gig Internet",
            "$110.00/mo.",
            "2,000 Mbps",
            "2,000 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "5 Gig Internet",
            "$180.00/mo.",
            "5,000 Mbps",
            "5,000 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataInternetSpeeds = [
    {
      head: [
        "Package",
        "Download speeds up to",
        "Upload speeds up to",
        "Simultaneous streams",
        "Time to download a movie",
        "Time to download 1 GB file",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Internet 300",
            "300 Mbps",
            "300 Mbps",
            "10 devices",
            "Under 2 minutes",
            "< 30 seconds",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Internet 500",
            "500 Mbps",
            "500 Mbps",
            "11 devices",
            "< 90 seconds",
            "< 23 seconds",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "1 Gig Internet",
            "1,000 Mbps",
            "1,000 Mbps",
            "12+ devices",
            "< 32 seconds",
            "< 10 seconds",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="atandt-internet">
      {/* <SubNav links={atandtNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Top AT&T <span> internet plans </span>
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
        heading={"Wondering if AT&T Fiber internet is available in your area?"}
        desc={"Enter your zip code below."}
      />

      <div className="section atandt-internet-plans-and-prices-feature-fast-speeds ">
        <div className="head">
          <h2 className="sect-heading">
            AT&T <span> internet plans and prices </span> feature fast speeds,
            no contracts
          </h2>
          <p className="sect-desc">
            AT&T’s fiber internet plans are some of our favorite plans around,
            thanks to their fast speeds and low prices. For starters, Internet
            300 offers great 300 Mbps download and upload speeds that’ll cover
            any family’s basic internet needs.
            <br />
            If you need even more internet performance, 5 Gig Internet’s 5,000
            Mbps download speeds will make slow FaceTime calls a thing of the
            past. Best of all, you won’t have to worry about annual price
            increases or equipment fees thanks to AT&T’s flat-rate fiber
            internet prices.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <div className="package-table-container channels">
          <Image src={signal} alt="mark" className="mark" />
          <h4>Interested in AT&T internet service?</h4>
          <br />
          <p>
            Check out our{" "}
            <span className="link">
              <Link href={"/"}>AT&T internet review</Link>
            </span>{" "}
            for a full breakdown of AT&T’s internet plans.
          </p>
        </div>
      </div>

      <div className="section atandt-deals">
        <div className="head">
          <h2 className="sect-heading">
            AT&T internet deals: <span> get up to $300 for free </span>
          </h2>
          <p className="sect-desc">
            Interested in the best savings with your AT&T internet service?
            AT&T’s internet deals include a free Visa gift card worth up to $300
            on AT&T fiber internet plans with code HOLIDAY150 (exp. 12/14/23), a
            six-month NVIDIA GeForce NOW Ultimate Membership tier subscription,
            and a bundled AT&T Wi-Fi gateway.
            <br />
            Check out our AT&T deals guide for a full breakdown of AT&T internet
            plan offers.
          </p>
        </div>
        <Image src={atandatdealsposter} alt="atandatdealsposter" />
      </div>

      <div className="section atandt-internet-speeds ">
        <div className="head">
          <h2 className="sect-heading">
            AT&T <span>internet speeds </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <PackageTable item={packageTableDataInternetSpeeds} />
        <br />
      </div>

      <div className="section atandt-blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"></p>
        </div>
        <div className="package-table-container channels">
          <Image src={helpsupportgirl} alt="mark" className="mark" />
          <h4>AT&T customer service</h4>
          <br />
          <p>
            You can reach out to the 24/7 AT&T internet customer service anytime
            for any service-related queries, including questions about outages,
            billing, installation, service issues, or anything else.
            <br />
            Get assistance with your AT&T internet service by calling AT&T
            Customer Service and Technical Support at +1-855-386-4590. Use the
            telephone prompts to guide you through the process—including
            reaching a customer service representative. Learn more about AT&T
            customer service here.
          </p>
        </div>
      </div>

      <div className="section quick-answers">
        <div className="head">
          <h2 className="sect-heading">
            Learn more about <span> AT&T internet plans </span>
          </h2>
          <p className="sect-desc">
            AT&T now has just one type of internet plan: AT&T Fiber. Here’s what
            you need to know about their internet services.
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
            <span> AT&T internet plans </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How much is AT&T 1000 mbps
                internet?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  AT&T 1000 mbps internet costs $80.00 per month for 1 GB
                  download and upload speeds.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" How much is AT&T 1000 mbps internet?"}
            cssClass={"faq-content"}
          >
            <p>
              AT&T 1000 mbps internet costs $80.00 per month for 1 GB download
              and upload speeds.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Can you get AT&T internet
                by itself?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  You can get AT&T internet by itself. AT&T internet plans start
                  at $55 per month with download speeds between 75–5,000 Mbps.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Can you get AT&T internet by itself?"}
            cssClass={"faq-content"}
          >
            <p>
              You can get AT&T internet by itself. AT&T internet plans start at
              $55 per month with download speeds between 75–5,000 Mbps.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How much is AT&T internet
                by itself?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  AT&T’s internet plans cost between $55.00–$250.00/mo.. AT&T’s
                  internet plans have download speeds between 75–5,000 Mbps.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How much is AT&T internet by itself?"}
            cssClass={"faq-content"}
          >
            <p>
              AT&T’s internet plans cost between $55.00–$250.00/mo.. AT&T’s
              internet plans have download speeds between 75–5,000 Mbps.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What is the best internet
                package from AT&T?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Our pick for the best AT&T internet plan is Internet 300,
                  which offers fast 300 Mbps download and upload speeds for only
                  $55 per month. With Internet 300, you’ll have enough bandwidth
                  to comfortably support a family’s average internet needs.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" What is the best internet package from AT&T?"}
            cssClass={"faq-content"}
          >
            <p>
              Our pick for the best AT&T internet plan is Internet 300, which
              offers fast 300 Mbps download and upload speeds for only $55 per
              month. With Internet 300, you’ll have enough bandwidth to
              comfortably support a family’s average internet needs.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> How fast is AT&T internet?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  AT&T has download speeds between 75–5,000 Mbps. AT&T Fiber has
                  upload speeds between 300 Mbps and 5,000 Mbps.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" How fast is AT&T internet?"}
            cssClass={"faq-content"}
          >
            <p>
              AT&T has download speeds between 75–5,000 Mbps. AT&T Fiber has
              upload speeds between 300 Mbps and 5,000 Mbps.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>What type of internet does
                AT&T offer?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  AT&T now offers one type of internet: fiber internet. AT&T
                  Fiber has fast upload and download speeds, and is more
                  reliable than more traditional cable and DSL internet. As of
                  August 2023, AT&T no longer offers DSL plans.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"What type of internet does AT&T offer?"}
            cssClass={"faq-content"}
          >
            <p>
              AT&T now offers one type of internet: fiber internet. AT&T Fiber
              has fast upload and download speeds, and is more reliable than
              more traditional cable and DSL internet. As of August 2023, AT&T
              no longer offers DSL plans.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default AtandtInternet;
