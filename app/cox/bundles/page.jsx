// import React, { useState } from "react";
import "./cox-bundles.scss";
// import { coxNavLinks } from "../../assets/data/navLinks/coxNavLinks";
import xfintyTvHeroBg from "../../assets/images/xfinity-deals-hero-bg.jpg";
// import SubNav from "../../components/sub-nav/SubNav";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import PackageCard from "../../components/package-card/PackageCard";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
import quotations from "../../assets/images/quotations.svg";
// import Newsletter from "../../components/newsletter/Newsletter";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Cox Bundles And Packages"
};

const CoxBundles = () => {
  // const [faq, setFaq] = useState();

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "Cox Bundles And Packages",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "Fast internet speeds up to 2,000 Mbps",
      "250+ channels, including Comedy Central, HBO™, and Magnolia Network",
      "Unlimited calls in North America with Cox Voice",
      "Save $28/mo. on premium channels",
    ],
    buttonName: "check availability",
    buttonPath: "#",
    price: "TV and internet packages starting at $102.99/mo.",
  };

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
            "Go Fast + Contour TV Starter",
            "$102.99/mo.*",
            "100 Mbps",
            "75+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Go Faster + Contour TV Preferred",
            "$168.99/mo.*",
            "250 Mbps",
            "170+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Go Even Faster + Contour TV Preferred",
            "$188.99/mo.**",
            "500 Mbps",
            "170+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Go Even Faster + Contour TV Ultimate",
            "$228.99/mo.**",
            "500 Mbps",
            "250+",
          ],
          linkPath: "#",
        },
      ],
    },
  ];

  let packageTableDataTvInternetAndPhonePackages = [
    {
      head: [
        "Package",
        "Price*",
        "Download speeds up to",
        "Channel",
        "Phone plan",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Go Faster + Contour TV Preferred + Voice Preferred",
            "$188.99/mo.*",
            "250 Mbps",
            "170+",
            "Unlimited calling in US, Canada, and Mexico",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Go Even Faster + Contour TV Preferred + Voice Preferred",
            "$208.99/mo.**",
            "500 Mbps",
            "170+",
            "Unlimited calling in US, Canada, and Mexico",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Go Super Fast + Contour TV Preferred + Voice Preferred",
            "$218.99/mo.†",
            "1,000 Mbps",
            "170+",
            "Unlimited calling in US, Canada, and Mexico",
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
    <div className="cox-bundles">
      {/* <SubNav links={coxNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Top Cox <span> bundles and packages </span>
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
        heading={"Find out if Cox is available in your area"}
        desc={"Enter your zip code below to find out!"}
      />

      <div className="section cox-internet-and-tv-packages">
        <div className="head">
          <h2 className="sect-heading">
            Cox <span> TV and internet </span> packages
          </h2>
          <p className="sect-desc">
            You can mix and match Cox plans to find the bundle that fits your
            family’s budget and service needs—we’ve highlighted a few of the
            best Cox TV and internet packages in the table above.
            <br />
            Cox’s five internet plans have download speeds ranging from 100 to
            2,000 Mbps, so you’ll have options whether you’re looking for budget
            internet service or a plan fast enough for an entire family. Cox’s
            TV plans include Contour TV Starter ($53 monthly for 75+ local
            channels), Contour TV Preferred ($98 monthly for 140+ basic cable
            channels), and Contour TV Ultimate ($138 monthly for 250+ cable
            channels like HBO and SHOWTIME).
            <br />
            Whether you’re watching the local news or catching up on House of
            the Dragon, you’ll find something to like with Cox cable TV.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          **No annual contract or cancellation fees. **for 12 mos. No annual
          contract. † for 12 mos. w/ 1-yr. term agreement. Data effective as of
          post date. Offers and availability may vary by location and are
          subject to change.
        </p>
      </div>

      <div className="section cox-internet-and-tv-phone-packages">
        <div className="head">
          <h2 className="sect-heading">
            Cox <span> internet, TV, and phone </span> packages
          </h2>
          <p className="sect-desc">
            Are you regularly calling family overseas? Do you live in an area
            with terrible cell reception? Cox Voice offers reliable home phone
            service for only $20 per month. Cox Voice features include call
            screening, unlimited calls within North America, and caller ID. If
            you’re looking for a phone, TV, and internet bundle, it’s easy to
            add Cox Voice to your service plan.
          </p>
        </div>
        <PackageTable item={packageTableDataTvInternetAndPhonePackages} />
        <br />
        <p className="below-table">
          **No annual contract or cancellation fees. **for 12 mos. No annual
          contract. † for 12 mos. w/ 1-yr. term agreement. Data effective as of
          post date. Offers and availability may vary by location and are
          subject to change.
        </p>
        <div className="package-table-container channels">
          <Image className="mark" src={quotations} alt="quotations" />
          <h4>Looking for Cox cable and internet service?</h4>
          <br />
          <p>
            Visit our Cox bundles review for a full breakdown of Cox’s cable TV
            and internet bundle options.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Cox package deals</h4>
          <br />
          <p>
            Get the best savings on a Cox internet and TV bundle with Cox’s
            deals that sweeten the pot. Check out our full Cox deals guide to
            learn more about the best Cox internet and TV deals.
          </p>
          <ul>
            <li>
              · Add Max (formerly HBO Max), CINEMAX, SHOWTIME, and STARZ to
              Contour TV Preferred for only $20.00 monthly ($28.00 monthly
              savings).
            </li>
            <li>· Save $10.00 per month with a Cox bundle.</li>
            <li>
              · Pay only $9.95 monthly for internet if you qualify for Cox’s
              Connect2Compete program.
            </li>
            <li>
              · Eligible seniors can get a Cox bundle with ConnectAssist
              internet ($30.00 monthly for 100 Mbps).
            </li>
          </ul>
        </div>
      </div>

      <div className="section cox-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Cox bundles </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What is the cheapest Cox
                package?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  The cheapest Cox packages are Go Fast ($49.99 monthly for 100
                  Mbps) and Cox Contour TV Starter ($53.00 monthly for 75+ local
                  channels).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"What is the cheapest Cox package?"}
            cssClass={"faq-content"}
          >
            <p>
              The cheapest Cox packages are Go Fast ($49.99 monthly for 100
              Mbps) and Cox Contour TV Starter ($53.00 monthly for 75+ local
              channels).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span>What is the best Cox bundle?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  The best Cox bundle is Go Faster + Contour TV Preferred. The
                  bundle costs $168.99 per month and includes 250 Mbps download
                  speeds and 170+ cable channels. It’ll offer the most value for
                  households that don’t want to spend too much but need fast
                  internet and many channels.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" What is the best Cox bundle?"}
            cssClass={"faq-content"}
          >
            <p>
              The best Cox bundle is Go Faster + Contour TV Preferred. The
              bundle costs $168.99 per month and includes 250 Mbps download
              speeds and 170+ cable channels. It’ll offer the most value for
              households that don’t want to spend too much but need fast
              internet and many channels.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What is the Cox
                economy_pack?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  The Cox Economy Pack was a discontinued Cox cable TV plan that
                  included a mix of basic cable and local channels. Cox’s
                  current cheap TV plans are Contour TV Starter ($53 monthly for
                  only local channels) and Contour TV Preferred ($98 monthly for
                  basic cable channels).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" What is the Cox economy_pack?"}
            cssClass={"faq-content"}
          >
            <p>
              The Cox Economy Pack was a discontinued Cox cable TV plan that
              included a mix of basic cable and local channels. Cox’s current
              cheap TV plans are Contour TV Starter ($53 monthly for only local
              channels) and Contour TV Preferred ($98 monthly for basic cable
              channels).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How do I get the best deal
                from Cox?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  To get the best deal from Cox, look for local promotions such
                  as extended price guarantees, free yearlong offers, and bonus
                  add-ons. Current Cox deals include getting Max, CINEMAX,
                  SHOWTIME, and STARZ with Contour TV Preferred for only $20
                  monthly—that’s $28 monthly savings.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" How do I get the best deal from Cox?"}
            cssClass={"faq-content"}
          >
            <p>
              To get the best deal from Cox, look for local promotions such as
              extended price guarantees, free yearlong offers, and bonus
              add-ons. Current Cox deals include getting Max, CINEMAX, SHOWTIME,
              and STARZ with Contour TV Preferred for only $20 monthly—that’s
              $28 monthly savings.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default CoxBundles;
