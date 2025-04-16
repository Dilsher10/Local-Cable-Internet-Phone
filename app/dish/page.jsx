// import React, { useState } from "react";
import "./dish.scss";
// import SubNav from "../components/sub-nav/SubNav";
// import { dishNavLinks } from "../assets/data/navLinks/dishNavLinks";
import xfintyTvHeroBg from "../assets/images/xfinity-tv-hero-bg.jpg";
import InnerPagesHero from "../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../components/sticky-header/StickyHeader";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../components/accordion/Accordion";
import PackageTable from "../components/package-table/PackageTable";
import CTA from "../components/cta-section/CTA";
// import Newsletter from "../components/newsletter/Newsletter";
import quotations from "../assets/images/quotations.svg";

export const metadata = {
  title: "DISH Packages And Prices"
};

const Dish = () => {
  // const [accordion, setAccordion] = useState(null);
  // const [faq, setFaq] = useState(null);

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "DISH Packages And Prices",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "3-yr. price guarantee",
      "Common Sense Media parental controls",
      "Available everywhere in the US",
      "Senior and military deals available",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Satellite TV plans starting at $62.99/mo.",
  };
  let packageTableData = [
    {
      head: ["Package", "Price", "Channels", "DVR*", "Details"],

      body: [
        {
          content: ["1.", "Flex Pack", "$57.99/mo.", "50+", "500 hrs."],
          linkPath: "#",
        },

        {
          content: ["2.", "America’s Top 120", "$79.99/mo.", "190", "500 hrs."],
          linkPath: "#",
        },

        {
          content: [
            "3.",
            "America’s Top 120+",
            "$94.99/mo.",
            "190+",
            "500 hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "America’s Top 200",
            "$99.99/mo.",
            "240+",
            "500 hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "America’s Top 250",
            "$109.99/mo.",
            "290+",
            "500 hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "6.",
            "America’s Everything Pack",
            "$137.99/mo.",
            "290+ (incl. premiums)",
            "500 hrs.",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="dish">
      {/* <SubNav links={dishNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section network-plan-and-price">
        <div className="head">
          <h2 className="sect-heading">
            <span>Compare DISH Network </span> plans and pricing
          </h2>
          <p className="sect-desc">
            Starting at $57.99 per month, DISH offers a wide range of TV plans
            for everyone. We particularly like America’s Top 200 because it
            includes several popular cable channels, like ESPN and Paramount
            Network (
            <span className="link">
              <Link href={"#"}>Yellowstone</Link>
            </span>{" "}
            anyone?), and it costs a reasonable $0.42 per channel. <br />
            TL;DR, we think DISH TV plans are a solid option for all the premium
            TV lovers out there. In fact, we’ve awarded DISH our Editor’s Choice
            award for best TV providers two years running.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data as of post date. Offers and availability may vary with location
          and are subject to change. Packages for existing customers only.* Not
          included in packages. Requires additional free of $10/mo.
        </p>
        <div className="package-table-container channels">
          <h4>DISH channels</h4>
          <p className="after-heading">
            DISH has one of the most popular channel lineups out there, and its
            price per channel is reasonable.
            <br />
            That said, if you absolutely cannot live without ESPN or Hallmark
            Channel, you want to do a little digging around. Each channel lineup
            features different channels, so be sure to check out all of the{" "}
            <span className="link">
              <Link href={"#"}>DISH channel lineups</Link>
            </span>{" "}
            before locking in that inflation-proof, three-year price guarantee.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DISH Network deals</h4>
          <p className="after-heading">
            DISH offers tons of deals for new customers, including the popular
            DISH senior discount, or DISH 55, which gives folks 55 and over free
            installation, a free movie rental every month, upgraded identity
            theft protection, and free equipment protection for six months.
            <br />
            To see all of DISH’s latest deals, check out our
            <span className="link">
              <Link href={"#"}>DISH Deals pag</Link>
            </span>{" "}
            We update it monthly—give it a quick glance so you don’t miss out on
            any potential savings.
          </p>
        </div>
      </div>

      <CTA
        heading={"Did you know DISH is available almost everywhere in the US?"}
        desc={
          "Enter your zip code below to learn more about DISH Network TV plans in your area."
        }
      />

      <div className="section dish-package-features">
        <div className="head">
          <h2 className="sect-heading">
            DISH TV <span>package features </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>99% signal reliability</h4>
          <p className="after-heading">
            We give DISH high marks for its 99% signal reliability, which is
            fantastic for rural folks frustrated with their TV antennas,
            internet buffering from streaming, and lack of cable TV options.
            <br />
            DISH’s use of famously reliable satellite TV technology means you
            won’t miss your favorite shows, and it pretty much guarantees DISH
            TV is available in your area.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Sports</h4>
          <p className="after-heading">
            By our last count, DISH has more sports channels and{" "}
            <span className="link">
              <Link href={"#"}>regional sports networks</Link>
            </span>{" "}
            (RSNs) than its main rival DIRECTV. And with DIRECTV losing
            <span className="link">
              <Link href={"#"}>NFL SUNDAY TICKET</Link>
            </span>{" "}
            next year, it’s safe to say that DISH is set to overthrow the king
            of TV sports coverage.
            <br />
            If your favorite team has signed an agreement with an RSN or
            conference channel, you still might need a different TV provider.
            Double-check the full{" "}
            <span className="link">
              <Link href={"#"}>DISH channel lineup</Link>
            </span>
            to ensure you’ve covered all your bases.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Remote</h4>
          <p className="after-heading">
            The newest
            <span className="link">
              <Link href={"#"}>DISH remotes</Link>
            </span>{" "}
            are very easy to use and loaded with advanced features. The DISH 54
            series remote comes with most plans and features voice control,
            remote-finder technology, and backlighting for when you’re cozying
            up to a new movie in the dark.
            <br />
            DISH remotes are a step up in accessibility and functionality from
            most standard cable TV and streaming device remotes. So if you
            chronically can’t find your remote or have accessibility issues when
            the lights are low, DISH Network can help you out.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Common Sense Media parental controls</h4>
          <p className="after-heading">
            Worried about your kids or grandchildren randomly catching a
            bone-chilling episode of
            <span className="link">
              <Link href={"#"}>The Walking Dead on AMC</Link>
            </span>{" "}
            ? Well, worry no more.
            <br />
            We awarded DISH our{" "}
            <span className="link">
              <Link href={"#"}> Best for Families Editor’s Choice award </Link>
            </span>{" "}
            two years running because of its partnership with Common Sense
            Media. DISH integrates independent age-appropriate ratings and
            reviews (and more) from Common Sense Media on your DISH Anywhere app
            and Hopper 3 DVR, so you know exactly what your youngsters are
            watching. <br />
            You won’t find a TV provider with better parental controls included
            with every TV plan, period.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DVR</h4>
          <p className="after-heading">
            DISH also offers our
            <span className="link">
              <Link href={"#"}> favorite DVR around</Link>
            </span>{" "}
            the Hopper 3 for $10 per month. The Hopper 3 has enough tuners for
            any household, allowing you to record 16 channels at once.
            <br />
            Not only that, but the
            <span className="link">
              <Link href={"#"}> Hopper 3 </Link>
            </span>{" "}
            features more than enough HD storage for any TV fan. Try to fill up
            500 hours of HD TV—we dare you!
          </p>
        </div>
      </div>

      <div className="section dish-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>DISH Network </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What is DISH TV's cheapest
                package?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  DISH TV's cheapest package is the{" "}
                  <span className="link">
                    <Link href={"#"}> Flex Pack, </Link>
                  </span>
                  which costs $57.99 per month and gets you 50+ cable and local
                  channels.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What is DISH TV's cheapest package?"}
            cssClass={"faq-content"}
          >
            <p>
              DISH TV's cheapest package is the{" "}
              <span className="link">
                <Link href={"#"}> Flex Pack, </Link>
              </span>
              which costs $57.99 per month and gets you 50+ cable and local
              channels.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What are the different DISH
                TV packages?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>DISH TV offers six TV packages:</p>
                <ul>
                  <li>· Flex Pack ($57.99/mo.; 50+ channels)</li>
                  <li>· America's Top 120 ($79.99/mo.; 190 channels)</li>
                  <li>· America's Top 120+ ($94.99/mo.; 190+ channels)</li>
                  <li>· America's Top 200 ($99.99/mo.; 240+ channels)</li>
                  <li>· America's Top 250 ($109.99/mo.; 290+ channels)</li>
                  <li>
                    · America's Everything Pack ($137.99/mo.; 330+ channels).
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" What are the different DISH TV packages?"}
            cssClass={"faq-content"}
          >
            <p>DISH TV offers six TV packages:</p>
            <ul>
              <li>· Flex Pack ($57.99/mo.; 50+ channels)</li>
              <li>· America's Top 120 ($79.99/mo.; 190 channels)</li>
              <li>· America's Top 120+ ($94.99/mo.; 190+ channels)</li>
              <li>· America's Top 200 ($99.99/mo.; 240+ channels)</li>
              <li>· America's Top 250 ($109.99/mo.; 290+ channels)</li>
              <li>· America's Everything Pack ($137.99/mo.; 330+ channels).</li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How much is the DISH senior
                discount?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  The DISH senior discount, or DISH 55, is not technically a
                  monthly discount. That said, DISH 55 does offer folks 55 and
                  over free installation and a number of other perks. Check out
                  our{" "}
                  <span className="link">
                    <Link href={"#"}>DISH Deals guide</Link>
                  </span>{" "}
                  to see if you qualify.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How much is the DISH senior discount?"}
            cssClass={"faq-content"}
          >
            <p>
              The DISH senior discount, or DISH 55, is not technically a monthly
              discount. That said, DISH 55 does offer folks 55 and over free
              installation and a number of other perks. Check out our{" "}
              <span className="link">
                <Link href={"#"}>DISH Deals guide</Link>
              </span>{" "}
              to see if you qualify.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Who is better, DISH or
                DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  We think DISH is better than DIRECTV for most folks. DISH has
                  better prices, contract terms, and equipment. Take a look at
                  our helpful{" "}
                  <span className="link">
                    <Link href={"#"}>DISH vs. DIRECTV guide</Link>
                  </span>{" "}
                  for more information.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Who is better, DISH or DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>
              We think DISH is better than DIRECTV for most folks. DISH has
              better prices, contract terms, and equipment. Take a look at our
              helpful{" "}
              <span className="link">
                <Link href={"#"}>DISH vs. DIRECTV guide</Link>
              </span>{" "}
              for more information.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="endnote dish-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Disclaimer</h4>
          <p>
            *Flex Pack and Everything Pack: Price excludes taxes, fees, and
            other services.
            <br />
            **America’s Top 200: for 24. months. Everyday Price $102.99/mo. New
            customers only. All offers require 2-year commitment with early
            termination fee and eAutopay. Price includes Hopper Duo for
            qualifying customers.
            <br />
            CableTV.com is an authorized retailer of DISH Network L.L.C. DISH,
            DISH Network and DISH Network logos are trademarks, registered
            trademarks of DISH Network L.L.C. and/or its affiliate(s). The DISH
            Network trademarks, registered trademarks and/or service marks are
            used under license of DISH Network L.L.c. and/or its affiliate(s).
          </p>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default Dish;
