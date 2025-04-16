// import React, { useState } from "react";
import "./cox-deals.scss";
// import { coxNavLinks } from "../../assets/data/navLinks/coxNavLinks";
import xfintyTvHeroBg from "../../assets/images/xfinity-deals-hero-bg.jpg";
// import SubNav from "../../components/sub-nav/SubNav";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import PackageCard from "../../components/package-card/PackageCard";
import Link from "next/link";
import Accordion from "@/app/components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Cox Deals And Promotions"
};

const CoxDeals = () => {
  // const [faq, setFaq] = useState();

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "Cox Deals And Promotions",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: ["Low-income discounts", "Upgrade discounts", "Mobile discounts"],
    buttonName: "view plans",
    buttonPath: "#",
    price: "Internet plans starting at $49.99/mo.",
  };

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="cox-deals">
      {/* <SubNav links={coxNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Top Cox <span> deals and promotions </span>
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
        <br />
        <p> </p>
      </div>

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
          <Link href={"#"}>Cox premium channels deal</Link>
          <Link href={"#"}>Cox internet deal</Link>
          <Link href={"#"}>Cox upgrade discounts</Link>
          <Link href={"#"}>Cox mobile discounts</Link>
        </div>
      </div>

      <CTA
        heading={"Find out if Cox is available in your area"}
        desc={"Enter your zip code below to find out!"}
      />

      <div className="section cox-deals-promotions">
        <div className="head">
          <h2 className="sect-heading">
            Cox <span> Deals And Promotions </span>
          </h2>
          <p className="sect-desc">
            Cox Communications rarely offers as many promotions and deals for
            new internet and TV customers as top competitors, such as Spectrum
            and Xfinity.
            <br />
            That said, Cox currently offers a bundle deal on premium channels
            and discounted internet for low-income folks, including some
            seniors. Let’s dive into the details.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Contour TV Ultimate deal</h4>
          <br />
          <p>
            Customers can upgrade from Contour TV Preferred ($99 monthly) to
            Contour TV Ultimate, which adds Max, CINEMAX, SHOWTIME, MGM+, and
            STARZ to your plan for only $40 monthly.
          </p>
          <hr className="hr" />
          <div className="btn">
            <Link href={"#"}>get cox tV preferred plus </Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Cox low-income internet deal</h4>
          <br />
          <p>
            As of the time of writing, Cox offers discounts for low-income folks
            who qualify for the Supplemental Nutritional Assistance Program
            (SNAP), Supplemental Security Income (SSI), and other US government
            internet programs.
            <br />
            Cox’s low-income internet program is called Connect2Compete, and it
            costs a low $9.95 per month. Not bad, eh?
          </p>
          <hr className="hr" />
          <div className="btn">
            <Link href={"#"}>apply for cox Connect2Compete </Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Cox upgrade discounts for existing customers</h4>
          <br />
          <p>
            Cox doesn’t advertise upgrade discounts for existing customers, but
            if you call ’em up, you might be able to score one. Go ahead and try
            our old standby: threaten to leave for a competitor and see what
            happens.
            <br />
            Check out our Cox Customer Service page for more details on how to
            contact Cox and snag your upgrade discount.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Cox mobile discounts</h4>
          <br />
          <p>
            Cox internet customers can save $14.99/mo. with Cox Mobile on the Go
            Fast, Go Faster, Go Even Faster, and Go Super Fast plans.
          </p>
        </div>
      </div>

      <div className="section cox-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Optimum deals and promotions </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Does Cox offer senior
                discounts?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Cox doesn’t offer any senior discounts on service—but
                  low-income households may qualify for Cox’s Connect2Compete
                  program, which provides low-speed internet for $9.95 a month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"Does Cox offer senior discounts?"}
            cssClass={"faq-content"}
          >
            <p>
              Cox doesn’t offer any senior discounts on service—but low-income
              households may qualify for Cox’s Connect2Compete program, which
              provides low-speed internet for $9.95 a month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does Cox offer deals to
                current customers?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Usually, Cox’s deals apply only to new customers, but current
                  subscribers can sometimes get in on deals by upgrading their
                  service. Contact Cox customer service to see if they’re open
                  to negotiation.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"Does Cox offer deals to current customers?"}
            cssClass={"faq-content"}
          >
            <p>
              Usually, Cox’s deals apply only to new customers, but current
              subscribers can sometimes get in on deals by upgrading their
              service. Contact Cox customer service to see if they’re open to
              negotiation.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What's the cheapest Cox
                plan?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  The least expensive Cox TV and internet bundle is now Go Fast
                  + Contour TV Starter. With it, you get 75+ cable channels and
                  100 Mbps of internet download speed for $105.99 a month (for
                  12 months with a 1-year term agreement).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"What's the cheapest Cox plan?"}
            cssClass={"faq-content"}
          >
            <p>
              The least expensive Cox TV and internet bundle is now Go Fast +
              Contour TV Starter. With it, you get 75+ cable channels and 100
              Mbps of internet download speed for $105.99 a month (for 12 months
              with a 1-year term agreement).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Is Cox offering any deals?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  When you sign up for Contour TV Preferred Plus ($146 monthly),
                  you can get Max, CINEMAX, SHOWTIME, and STARZ for only $20
                  monthly. That’s $28 off monthly.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={"Is Cox offering any deals?"}
            cssClass={"faq-content"}
          >
            <p>
              When you sign up for Contour TV Preferred Plus ($146 monthly), you
              can get Max, CINEMAX, SHOWTIME, and STARZ for only $20 monthly.
              That’s $28 off monthly.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Does Cox have bundle deals
                or promotions?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Cox sometimes offers bundle deals and promotions with its
                  bundles, but we haven’t seen any recently. Check with customer
                  service to find out what is available. Most of its cable
                  bundles include free pro installation with the listed price.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"Does Cox have bundle deals or promotions?"}
            cssClass={"faq-content"}
          >
            <p>
              Cox sometimes offers bundle deals and promotions with its bundles,
              but we haven’t seen any recently. Check with customer service to
              find out what is available. Most of its cable bundles include free
              pro installation with the listed price.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> What bundles does Cox
                offer?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  Cox offers two different types of bundles: one combines TV and
                  internet, and the other is a triple threat of TV, internet,
                  and phone service. However, Cox doesn’t currently offer
                  discounts on bundled plans.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"What bundles does Cox offer?"}
            cssClass={"faq-content"}
          >
            <p>
              Cox offers two different types of bundles: one combines TV and
              internet, and the other is a triple threat of TV, internet, and
              phone service. However, Cox doesn’t currently offer discounts on
              bundled plans.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Cox TV | Cox Internet | Cox Bundles | Cox Channel Lineup |
          Cox Customer Service
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default CoxDeals;
