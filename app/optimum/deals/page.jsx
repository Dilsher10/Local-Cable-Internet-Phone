// import React, { useState } from "react";
import "./optimum-deals.scss";
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
import PackageTable from "../../components/package-table/PackageTable";
import CTA from "../../components/cta-section/CTA";
import dotted from "../../assets/images/dotted.png";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Optimum Deals And Promotions"
};

const OptimumDeals = () => {
  // const [faq, setFaq] = useState();

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "Optimum Deals And Promotions",
    desc: "Save some money on Optimum internet and TV service today.",
    points: [
      "Visa® Prepaid Card up to $300",
      "Free installation",
      "Discounts on Optimum Internet and Mobile bundles",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Internet packages starting at $40.00/mo.",
  };
  let packageTableData = [
    {
      head: ["Plan", "Price*", "Deal", "Details"],

      body: [
        {
          content: [
            "1.",
            "Optimum 300 or Fiber Internet 300",
            "$40.00/mo.**",
            "No annual contract & Included equipment",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Optimum 500",
            "$60.00/mo.",
            "$50 Visa® Prepaid Card, No annual contract & Included equipment",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Fiber Internet 500",
            "$60.00/mo.",
            "No annual contract & Included equipment",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Optimum 1 Gig Internet or Fiber Internet 1 Gig",
            "$80.00/mo..",
            "$200 Visa® Prepaid Card, No annual contract & Included equipment",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "Fiber Internet 2 Gig",
            "$100.00/mo.",
            "$300 Visa® Prepaid Card, No annual contract & Included equipment",
          ],
          linkPath: "#",
        },
        {
          content: [
            "6.",
            "Fiber Internet 5 Gig",
            "$180.00/mo.",
            "No annual contract & Included equipment",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataMobile = [
    {
      head: ["Plan", "Discounted bundle price*", "Normal price†", "Details"],

      body: [
        {
          content: [
            "1.",
            "Optimum 300 or Fiber Internet 300",
            "$35.00/mo.**",
            "$40.00/mo.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Optimum 500 or Fiber Internet 500",
            "$50.00/mo.",
            "$60.00/mo.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Optimum 1 Gig Internet or Fiber Internet 1 Gig",
            "$65.00/mo.",
            "$80.00/mo.",
          ],
          linkPath: "#",
        },
        {
          content: ["4.", "Fiber Internet 2 Gig", "$85.00/mo.", "$100.00/mo."],
          linkPath: "#",
        },
        {
          content: ["5.", "Fiber Internet 5 Gig", "$165.00/mo.", "$180.00/mo."],
          linkPath: "#",
        },
        {
          content: [
            "6.",
            "Fiber Internet 5 Gig",
            "$180.00/mo.",
            "No annual contract & Included equipment",
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
    <div className="optimum-deals">
      {/* <SubNav links={optimumNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Best <span> Optimum Service </span> Offers
          </h2>
          <p className="sect-desc">
            If you’re looking for cheap, fast internet service, Optimum can
            accommodate. The Altice-owned company offers no-contract cable and
            fiber-optic{" "}
            <span className="link">
              <Link href={"#"}>internet connections</Link>
            </span>
            , as well as TV and digital phone service across the New York
            tri-state area and 17 southern and West coast states.
            <br />
            We’ve got some sweet promotions to help you get the most out of your
            new Optimum service.
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
          <Link href={"#"}>Current deals</Link>
          <Link href={"#"}>Optimum Mobile</Link>
          <Link href={"#"}>Contract buyout</Link>
        </div>
      </div>

      <div className="section optimum-deals-and-promotions">
        <div className="head">
          <h2 className="sect-heading">
            Top Optimum <span> deals and promotions </span>
          </h2>
          <p className="sect-desc">
            All new Optimum internet customers will get no annual contract, plus
            free installation with online orders. Plus, your complimentary
            service protection will cover any unexpected service fees for a
            year. Some plans also include a Visa® Prepaid Card up to $300.
            <br />
            Also, for a limited time, get between $5–$15 a month off of select
            internet packages when you also sign up for a mobile plan. The exact
            benefits of your offer depend on your specific internet plan, as
            shown in the table above.
            <br />
            Learn more about Optimum’s internet plans by checking out our
            Optimum internet review.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change. * for 1 yr. Plus taxes, equip.
          charges and fees. **Fiber Internet 300: Only available in Optimum West
          region.
        </p>
      </div>

      <CTA
        heading={"Find out if Optimum is available in your area"}
        desc={"Enter your zip code below to find out!"}
      />

      <div className="section optimum-mobile-bundles">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> Mobile bundles </span>
          </h2>
          <p className="sect-desc">
            Want to bundle your cell and internet bills? When you sign up for an
            Optimum Mobile plan, Optimum offers up to $15 monthly off internet.
            Check the chart below for discounted rates.
            <br />
            Optimum Mobile runs on the T-Mobile network and offers 5G access
            where available. Optimum Mobile also offers up to $700 off on the
            latest Apple, Samsung, and Motorola smartphones.
          </p>
        </div>
        <PackageTable item={packageTableDataMobile} />
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change. w/Auto Pay & Paperless Bill plus
          taxes w/mobile plans. Terms apply. Not available in all areas.*
          Discounted Offer Price requires customer to first sign up for Optimum
          Internet and sign up for Optimum Mobile at Optimum.com/mobile with
          unlimited service. Then customer must enroll in Optimum Internet +
          Mobile Savings program at mymobile.optimum.com.† for 1 yr. Plus taxes,
          equip. charges and fees. ** Fiber Internet 300: Only available in
          Optimum West region.
        </p>
      </div>

      <div className="section optimum-blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"></p>
        </div>
        <br />
        <div className="package-table-container channels">
          <Image src={dotted} alt="mark" className="mark" />
          <h4>$100 contract buyout</h4>
          <br />
          <p>
            If you’re currently with another internet provider and you want to
            make the jump to Optimum, you don’t have to wait out the remainder
            of your contract: Optimum will buy out your fees up to $100.
            <br />
            It’s a good deal if you have only a month left on your
            $99.99-a-month contract with Bubba’s Internet & BBQ Supplies, but
            less so if you’re staring down 23 more months of a two-year
            contract. Time it right, and you could get a better (or at least
            cheaper) internet deal with no early termination fees (ETFs). Check
            out our Optimum cable TV review to learn more about the provider’s
            TV plans and channels.
          </p>
          <hr className="hr" />
          <div className="btn">
            <Link href={"#"}>get $100 contract buyout</Link>
          </div>
        </div>
      </div>

      <div className="section optimum-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Optimum deals </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What's the cheapest Optimum
                plan?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Internet: Optimum’s cheapest internet plan is its 300 Mbps
                  service at $40 a month (for one year, plus taxes, fees, and
                  other charges).
                  <br />
                  Internet and TV: The least expensive package is that same 300
                  Mbps internet service plus the 50+ channel Basic TV plan for
                  $70 a month.
                  <br />
                  Internet, TV, and digital phone: Optimum’s cheapest triple
                  play package is the 300 Mbps service with the Basic TV 50+
                  channel plan and home phone for $85 a month (for one year,
                  plus taxes, fees, and other charges).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What's the cheapest Optimum plan?"}
            cssClass={"faq-content"}
          >
            <p>
              Internet: Optimum’s cheapest internet plan is its 300 Mbps service
              at $40 a month (for one year, plus taxes, fees, and other
              charges).
              <br />
              Internet and TV: The least expensive package is that same 300 Mbps
              internet service plus the 50+ channel Basic TV plan for $70 a
              month.
              <br />
              Internet, TV, and digital phone: Optimum’s cheapest triple play
              package is the 300 Mbps service with the Basic TV 50+ channel plan
              and home phone for $85 a month (for one year, plus taxes, fees,
              and other charges).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What is Optimum's Price for
                Life?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Price for Life was an Optimum promotion that offered an
                  extended price guarantee on its 1 Gbps internet plan. This
                  promotion is no longer available.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" What is Optimum's Price for Life?"}
            cssClass={"faq-content"}
          >
            <p>
              Price for Life was an Optimum promotion that offered an extended
              price guarantee on its 1 Gbps internet plan. This promotion is no
              longer available.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does Optimum offer senior
                discounts?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Optimum offers an inexpensive plan for seniors, students, and
                  veterans through its Optimum Advantage Internet program. The
                  plan includes up to 50 Mbps internet with a free modem/router,
                  discounted installation, and no data caps. Those who qualify
                  include the following:
                </p>
                <ul>
                  <li>
                    · Seniors 65 or older who are receiving/eligible for
                    Supplemental Security Income (SSI)
                  </li>
                  <li>
                    · Students eligible for, or participating in, the National
                    School Lunch Program (NSLP)
                  </li>
                  <li>
                    · New York City residents attending New York City public
                    school
                  </li>
                  <li>
                    · Veterans receiving state or federal public assistance
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does Optimum offer senior discounts?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum offers an inexpensive plan for seniors, students, and
              veterans through its Optimum Advantage Internet program. The plan
              includes up to 50 Mbps internet with a free modem/router,
              discounted installation, and no data caps. Those who qualify
              include the following:
            </p>
            <ul>
              <li>
                · Seniors 65 or older who are receiving/eligible for
                Supplemental Security Income (SSI)
              </li>
              <li>
                · Students eligible for, or participating in, the National
                School Lunch Program (NSLP)
              </li>
              <li>
                · New York City residents attending New York City public school
              </li>
              <li>· Veterans receiving state or federal public assistance</li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Can you negotiate with
                Optimum?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Negotiating your Optimum bill is one of the best ways existing
                  Optimum customers can get a deal. Call Optimum customer
                  service at +1-866-218-3259 and check out our bill negotiating
                  guide for tips before you talk to Optimum’s retention
                  department.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Can you negotiate with Optimum?"}
            cssClass={"faq-content"}
          >
            <p>
              Negotiating your Optimum bill is one of the best ways existing
              Optimum customers can get a deal. Call Optimum customer service at
              +1-866-218-3259 and check out our bill negotiating guide for tips
              before you talk to Optimum’s retention department.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default OptimumDeals;
