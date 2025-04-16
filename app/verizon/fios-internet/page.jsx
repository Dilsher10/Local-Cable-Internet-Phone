// import React, { useState } from "react";
import "./shop-verizon-fios-internet.scss";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import xfintyTvHeroBg from "../../assets/images/xfinity-tv-hero-bg.jpg";
// import SubNav from "../../components/sub-nav/SubNav";
// import { verizonNavLinks } from "../../assets/data/navLinks/verizonNavLinks";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import PackageTable from "../../components/package-table/PackageTable";
import CTA from "../../components/cta-section/CTA";
import signal from "../../assets/images/signal.png";
import cartinternet from "../../assets/images/cartinternet.png";
import flameinternet from "../../assets/images/flameinternet.png";
import touchwhite from "../../assets/images/touchwhite.png";
import BlogCard from "../../components/blog-card/BlogCard";
import { blogsTemporary } from "../../assets/data/blogsTemporary";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Verizon Fios Internet Plans"
};


const ShopVerizonFiosInternet = () => {
  // const [faq, setFaq] = useState(null);

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "Verizon Fios Internet Plans",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "Download speeds up to 940 Mbps",
      "Save $25/month with a Verizon bundle",
      "Lock in your price for up to 4 years",
      "Free NFL Sunday Ticket with 1 Gig",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Plans starting at $49.99/month",
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
        "Price",
        "Download speed",
        "Price guarantee",
        "Details",
      ],

      body: [
        {
          content: ["1.", "300 Mbps", "$49.99/mo.", "300 Mbps", "2 years"],
          linkPath: "#",
        },
        {
          content: ["2.", "500 Mbps", "$69.99/mo.", "500 Mbps", "3 years"],
          linkPath: "#",
        },
        {
          content: ["3.", "1 Gig", "$89.99/mo.", "1 Gig", "4 years"],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="shop-verizon-fios-internet">
      {/* <SubNav links={verizonNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Top Verizon fios <span> internet plans </span>
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
        heading={"Interested in Verizon Fios internet plans?"}
        desc={
          "Enter your zip code below to see if Verizon Fios is available in your area."
        }
      />

      <div className="section verizon-blank-with-table">
        <div className="head">
          <h2 className="sect-heading">
            Verizon Fios internet plans:{" "}
            <span> simple pricing, fast downloads </span>
          </h2>
          <p className="sect-desc">
            Get the fastest internet around with Verizon Fios. Verizon’s fiber
            internet service offers three great plans with up to 940 Mbps
            download speeds. Whether you’re a senior who’s simply checking
            emails or your family’s streaming HD movies every night, you’ll find
            a Verizon internet plan that meets your needs and budget.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          *With Autopay and paper-free billing. Qualifying mobile plans include
          One Unlimited for iPhone, 5G Play More, 5G Do More, and 5G Get More.
          <br />
          Data effective as of post date. Offers and availability vary by
          location and are subject to change.
        </p>
        <div className="package-table-container channels">
          <Image src={signal} alt="mark" className="mark" />
          <h4>Want Verizon Fios internet?</h4>
          <br />
          <p>
            Visit our{" "}
            <span className="link">
              <Link href={"/"}>Verizon Fios Internet review</Link>
            </span>{" "}
            to learn more about Verizon Fios’ plans and pricing.
          </p>
        </div>
      </div>

      <div className="section quick-answers">
        <div className="head">
          <h2 className="sect-heading">
            Verizon Fios <span> internet features </span>
          </h2>
          <p className="sect-desc">
            Excellent customer service and straightforward pricing are reasons
            why Verizon Fios is one of the best internet providers on the
            market. Let’s break down some of Verizon Fios’ best features for new
            customers.
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

      <div className="section free-verizon-internet">
        <div className="head">
          <h2 className="sect-heading">
            Free <span> Verizon internet </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="row">
          <div className="columns blue-bg">
            <Image src={touchwhite} className="" alt="touchwhite" />
            <h3>Step 1: Apply to Affordable Connectivity Program</h3>
            <br />
            <p>
              If you qualify for the Affordable Connectivity Program (ACP), you
              may be able to get free Verizon Fios internet service. The ACP is
              the best Verizon internet plan for seniors.
              <br />
              Visit CableTV.com’s low-income internet guide to learn more about
              the program.
            </p>
          </div>
          <div className="columns">
            <Image src={cartinternet} alt="cartinternet" className="" />
            <h3>Step 2: Order Verizon Fios internet</h3>
            <br />
            <p>
              Verizon Fios’ 300 Mbps plan is free after you apply ACP and
              Verizon Forward discounts. Verizon Forward is a Verizon discount
              program for only ACP enrollees.
            </p>
          </div>
          <div className="columns">
            <Image src={flameinternet} alt="flameinternet" />
            <h3>Step 3: Get free Verizon home internet</h3>
            <br />
            <p>
              Visit Verizon’s customer service page or call Verizon at
              +1-800-Verizon to apply your ACP and Verizon Forward discounts and
              get free Verizon internet.
            </p>
          </div>
        </div>
      </div>

      <div className="section verizon-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Verizon Fios internet </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How much does it cost just
                to have internet with Verizon?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Verizon Fios home internet prices start at only $49.99
                  monthly.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" How much does it cost just to have internet with Verizon?"}
            cssClass={"faq-content"}
          >
            <p>
              Verizon Fios home internet prices start at only $49.99 monthly.
            </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Can I just get Wi-Fi from
                Verizon?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Yes, you can get just Wi-Fi and home internet service from
                  Verizon. You don’t need to bundle additional services like
                  Verizon TV or cell phone plans.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Can I just get Wi-Fi from Verizon?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, you can get just Wi-Fi and home internet service from
              Verizon. You don’t need to bundle additional services like Verizon
              TV or cell phone plans.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Can I get Verizon internet
                without phone service?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Yes, you can get Verizon Fios internet without phone service.
                  However, you’ll save an additional $25 per month if you bundle
                  Verizon Fios with a qualifying Verizon Wireless Unlimited
                  plan.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Can I get Verizon internet without phone service?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, you can get Verizon Fios internet without phone service.
              However, you’ll save an additional $25 per month if you bundle
              Verizon Fios with a qualifying Verizon Wireless Unlimited plan.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does Verizon have
                whole-house internet?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Yes, Verizon has whole-house internet. Every Verizon home
                  internet plan comes with a free Wi-Fi router that’ll cover
                  most average-sized homes and apartments.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Does Verizon have whole-house internet?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, Verizon has whole-house internet. Every Verizon home internet
              plan comes with a free Wi-Fi router that’ll cover most
              average-sized homes and apartments.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default ShopVerizonFiosInternet;
