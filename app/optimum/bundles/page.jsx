// import React, { useState } from "react";
import "./optimum-bundles.scss";
// import { optimumNavLinks } from "../../assets/data/navLinks/optimumNavLinks";
import xfintyTvHeroBg from "../../assets/images/xfinity-deals-hero-bg.jpg";
// import SubNav from "../../components/sub-nav/SubNav";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import PackageCard from "../../components/package-card/PackageCard";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
import dotted from "../../assets/images/dotted.png";
import maxlogo from "../../assets/images/maxlogo.png";
import quotations from "../../assets/images/quotations.svg";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Optimum Packages And Bundles"
};

const OptimumBundles = () => {
  // const [faq, setFaq] = useState();

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "Optimum Packages And Bundles",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "Combine Optimum TV, internet, and phone service on one bill",
      "Download speeds up to 5,000 Mbps and 420+ TV channels",
      "Free Max™ and Visa® gift card up to $200.00",
      "No contracts",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Internet and TV packages starting at $70.00/mo.*",
  };
  let packageTableData = [
    {
      head: [
        "Plan",
        "Price",
        "Download speed",
        "Channels",
        "Popular channels",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Optimum 300 + Core TV",
            "$115.00/mo.",
            "300 Mbps",
            "220+",
            "Disney Channel, ESPN, TNT",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Optimum 500 + Select TV",
            "$135.00/mo.",
            "500 Mbps",
            "340+",
            "National Geographic, Nick Jr., History",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Optimum 1 Gig + Premier TV",
            "$195.00/mo.",
            "940 Mbps",
            "420+",
            "Max, SHOWTIME, STARZ",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataMobile = [
    {
      head: [
        "100–500 Mbps Internet",
        "1 Gig–5 Gig Internet",
        "Normal price†",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Save $10.00/mo. with Optimum Mobile",
            "Save $15.00/mo. with Optimum Mobile",
            ""
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="optimum-bundles">
      {/* <SubNav links={optimumNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Best <span> Optimum Service </span> Offers
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

      <CTA
        heading={"Interested in Optimum Services?"}
        desc={
          "Interested in the best Optimum packages and prices? Enter your zip code below to see Optimum bundles prices in your area."
        }
      />

      <div className="section optimum-packages-and-prices-mean-great-deals">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> packages and prices </span> mean great deals
          </h2>
          <p className="sect-desc">
            Searching for phone plans, TV, or internet service? With Optimum,
            you can get all of these services through one provider. We’ve
            highlighted a few of the best Optimum double-play plans in the table
            above, but you can build your own bundle from any of Optimum’s
            offerings in your area.
            <br />
            If you want every channel Optimum’s TV plans have to offer, consider
            the Optimum 1 Gig + Premier TV bundle for $195.00 a month. But the
            more budget-conscious Optimum 300 + Core TV plan, which is $115.00 a
            month, still provides a lot of popular TV channels and an excellent
            internet speed for streaming to make up for the channels it lacks.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change.
        </p>
        <br />
        <div className="package-table-container channels">
          <div className="right-img">
            <Image src={maxlogo} alt="mark" className="maxlogo" />
          </div>
          <h4>Optimum package deals offer great freebies</h4>
          <br />
          <p>
            Optimum’s best bundle deals include free Max (formerly HBO Max), a
            free Visa gift card worth up to $200, and oodles of free Optimum
            internet equipment. Check out our Optimum deals page to learn about
            Optimum’s best promotions.
          </p>
        </div>
        <br />
        <div className="package-table-container channels">
          <Image src={dotted} alt="mark" className="mark" />
          <h4>Is Suddenlink the same as Optimum?</h4>
          <br />
          <p>
            Suddenlink is no longer in business because it merged with Optimum.
            But if your state previously had Suddenlink coverage, you can now
            sign up for a feature-packed Optimum triple-play bundle.
          </p>
          <hr className="hr" />
          <div className="btn">
            <Link href={"#"}>get optimum bundles</Link>
          </div>
        </div>
      </div>

      <div className="section optimum-packages-and-have-endless-options">
        <div className="head">
          <h2 className="sect-heading">
            <span> Optimum bundles </span> have endless options
          </h2>
          <p className="sect-desc">
            When you build an Optimum bundle, you can mix and match services in
            nearly any combination. Here’s what you need to know about every
            type of Optimum package.
          </p>
        </div>
        <br />
        <div className="package-table-container channels">
          <Image src={quotations} alt="mark" className="mark" />
          <h4>Interested in an Optimum bundle?</h4>
          <br />
          <p>
            Check out our Optimum bundles guide for a full breakdown of
            Optimum’s best packages.
          </p>
        </div>
      </div>

      <div className="section optimum-Save-Optimum-mobile-and-internet">
        <div className="head">
          <h2 className="sect-heading">
            Save with Optimum <span> Mobile and internet </span>
          </h2>
          <p className="sect-desc">
            When you bundle an Optimum internet plan with Optimum Mobile, you
            can save up to $15 per month on your bill. Whether you’re using your
            phone to watch TV shows on the subway or send texts, Optimum Mobile
            has great phone plans for any budget.
          </p>
        </div>
        <br />
        <PackageTable item={packageTableDataMobile} />
        <br />
        <p className="below-table">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section optimum-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Optimum packages </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span>What are Optimum's bundle
                packages?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  You can create your own bundle with a combination of Optimum’s
                  TV, internet, landline, and cell service packages. Here are
                  some combinations we recommend:
                </p>
                <ul>
                  <li>
                    · Optimum 300 + Core TV: 300 Mbps, 220+ channels,
                    $115.00/mo.
                  </li>
                  <li>
                    · Optimum 500 + Select TV: 500 Mbps, 340+ channels,
                    $135.00/mo.
                  </li>
                  <li>
                    · Optimum 1 Gig + Premier TV: 940 Mbps, 420+ channels,
                    $195.00/mo.
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"What are Optimum's bundle packages?"}
            cssClass={"faq-content"}
          >
            <p>
              You can create your own bundle with a combination of Optimum’s TV,
              internet, landline, and cell service packages. Here are some
              combinations we recommend:
            </p>
            <ul>
              <li>
                · Optimum 300 + Core TV: 300 Mbps, 220+ channels, $115.00/mo.
              </li>
              <li>
                · Optimum 500 + Select TV: 500 Mbps, 340+ channels, $135.00/mo.
              </li>
              <li>
                · Optimum 1 Gig + Premier TV: 940 Mbps, 420+ channels,
                $195.00/mo.
              </li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does Optimum have deals for
                existing customers?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Optimum does not have many deals for existing customers, but
                  Optimum internet subscribers can move to Optimum Mobile to
                  save money on their cell phone bill.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does Optimum have deals for existing customers?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum does not have many deals for existing customers, but
              Optimum internet subscribers can move to Optimum Mobile to save
              money on their cell phone bill.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does Optimum give senior
                discounts?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  You may qualify for an Optimum senior discount if you’re
                  receiving Medicaid or enrolled in other assistance programs.
                  As part of the Affordable Connectivity Program, eligible
                  seniors can get Optimum’s 300 Mbps internet plan for free.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does Optimum give senior discounts?"}
            cssClass={"faq-content"}
          >
            <p>
              You may qualify for an Optimum senior discount if you’re receiving
              Medicaid or enrolled in other assistance programs. As part of the
              Affordable Connectivity Program, eligible seniors can get
              Optimum’s 300 Mbps internet plan for free.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How do I get the best deal
                on Optimum?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  To get the best deal on Optimum, look for Optimum bundles that
                  include offers like extended price guarantees and free Visa
                  gift cards. If you need cell phone service, you can save up to
                  $15 per month with an Optimum Mobile and Optimum Internet
                  discount.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" How do I get the best deal on Optimum?"}
            cssClass={"faq-content"}
          >
            <p>
              To get the best deal on Optimum, look for Optimum bundles that
              include offers like extended price guarantees and free Visa gift
              cards. If you need cell phone service, you can save up to $15 per
              month with an Optimum Mobile and Optimum Internet discount.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> What is an Optimum bundle?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  An Optimum bundle is an Optimum service plan that includes
                  multiple Optimum services like Optimum TV, internet, phone,
                  and cell phone coverage. By bundling multiple Optimum
                  services, you can save on your monthly bill. Read our Optimum
                  Bundles review for more information on how you can build your
                  own package.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" What is an Optimum bundle?"}
            cssClass={"faq-content"}
          >
            <p>
              An Optimum bundle is an Optimum service plan that includes
              multiple Optimum services like Optimum TV, internet, phone, and
              cell phone coverage. By bundling multiple Optimum services, you
              can save on your monthly bill. Read our Optimum Bundles review for
              more information on how you can build your own package.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> Why did Optimum send me a
                Visa gift card?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  Optimum occasionally runs promotions for new Optimum internet
                  customers that include free Visa gift cards worth up to $200.
                  If you received a free Visa card from Optimum, you qualified
                  for this promotion and can use the card for any purchase.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" Why did Optimum send me a Visa gift card?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum occasionally runs promotions for new Optimum internet
              customers that include free Visa gift cards worth up to $200. If
              you received a free Visa card from Optimum, you qualified for this
              promotion and can use the card for any purchase.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default OptimumBundles;
