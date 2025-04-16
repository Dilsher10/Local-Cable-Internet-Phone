// import React, { useState } from "react";
import "./shop-verizon-deals.scss";
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
import Searchbar from "../../components/searchbar/Searchbar";
import quotationsIcon from "../../assets/images/quotations.svg";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Best Verizon Deals And Promotions"
};

const ShopVerizonDeals = () => {
  // const [faq, setFaq] = useState(null);

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "Best Verizon Deals And Promotions",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "Save $25/mo. with Verizon Wireless and Fios Internet",
      "6 months of Disney+ Premium (No Ads)",
      "Choice of free HomePod or $200 Verizon Gift Card",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Plans starting at $24.99/mo.",
  };

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };

  let packageTableData = [
    {
      head: ["Package", "Price", "Channel count", "Channels", "Details"],

      body: [
        {
          content: [
            "1.",
            "Fios TV Test Drive",
            "$75.00/mo.",
            "425+",
            "BET, Cooking Channel, Disney Channel",
          ],
          linkPath: "#",
        },
        {
          content: ["2.", "Your Fios TV", "$75.00/mo.", "125+", "Customized"],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "More Fios TV",
            "$99.00/mo.",
            "300+",
            "AMC, Comedy Central, Food Network",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "The Most Fios TV",
            "$119.00/mo.",
            "425+",
            "SHOWTIME®, Logo, STARZ®",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataInternetDeals = [
    {
      head: [
        "Verizon Fios internet plan",
        "Price*",
        "Deal",
        "End date",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Fios Internet 300/300",
            "$49.99/mo.",
            "$50 Verizon gift card Router rental included Two-year price guarantee",
            "1/17/2024",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Fios Internet 500/500",
            "$69.99/mo.",
            "$50 Verizon gift card Router rental included Two-year price guarantee",
            "11/8/2023",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Fios 1 Gig",
            "$89.99/mo.",
            "Free HomePod OR $200 Verizon gift card AND  6 months of Disney+ Premium (No Ads),  2 TB Verizon Cloud storage, Router rental included, Four-year price guarantee  ...and more",
            "11/8/2023",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataTvDeals = [
    {
      head: [
        "Verizon Fios TV plan",
        "Price*",
        "Deal",
        "Channels",
        "End date",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Fios TV Test Drive",
            "$75.00/mo.",
            "Watch for 60 days, then get a personalized plan recommendation Try unlimited streaming on your own devices with the streaming device connection bundle for 2 months, free",
            "425+ ",
            "11/14/23 ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Your Fios TV",
            "$75.00/mo.",
            "$50 Verizon gift cardOne set top box rental included Try unlimited streaming on your own devices with the streaming device connection bundle for 2 months, free",
            "125+",
            "11/14/23",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "More Fios TV",
            "$99.00/mo.",
            "$50 Verizon gift card One set top box rental included  Try unlimited streaming on your own devices with the streaming device connection bundle for 2 months, free Basic DVR service included",
            "300+",
            "11/14/23",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "The Most Fios TV ",
            "$119.00/mo. ",
            "$200 Verizon gift card One set top box included Unlimited streaming on your own devices with the streaming device connection bundle included Multi-Room DVR service included ",
            "425+ ",
            "11/14/23 ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "Fios TV Mundo Total ",
            "$119.00/mo. ",
            "$200 Verizon gift card One set top box included Multi-Room DVR service included ",
            "215+ (Spanish entertainment) ",
            "11/14/23 ",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="shop-verizon-deals">
      {/* <SubNav links={verizonNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Top Verizon fios <span> deals and promotions </span>
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
        heading={"Want to watch Verizon Fios TV?"}
        desc={
          "Enter your zip code below to see if Fios TV packages are available in your area."
        }
      />

      <div className="section verizon-packages-prices">
        <div className="head">
          <h2 className="sect-heading">
            Verizon TV
            <span> packages and prices </span>
          </h2>
          <p className="sect-desc">
            Verizon is best known for its cellular network, but if your
            neighborhood has Verizon Fios, you can also get TV and fiber
            internet service from the carrier. Enter your zip code below to see
            Verizon’s plans in your area.
          </p>
        </div>
        <Searchbar />
        <br />
        <br />
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data effective as of post date. Offers and availability vary by
          location and are subject to change. See full disclaimer.F
        </p>
      </div>

      <div className="section verizon-internet-deals">
        <div className="head">
          <h2 className="sect-heading">
            Verizon Fios
            <span> Internet deals </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>
        <PackageTable item={packageTableDataInternetDeals} />
        <br />
        <p className="below-table">
          *Price for only internet with Autopay and paper-free billing.
          Qualifying mobile plans include One Unlimited for iPhone, 5G Play
          More, 5G Do More, and 5G Get More, or Unlimited Plus. Data effective
          as of post date. Offers and availability vary by location and are
          subject to change. See full disclaimer.
        </p>
      </div>

      <div className="section verizon-tv-deals">
        <div className="head">
          <h2 className="sect-heading">
            Verizon Fios
            <span> TV deals </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>
        <PackageTable item={packageTableDataTvDeals} />
        <br />
        <p className="below-table">
          *Price for only internet with Autopay and paper-free billing.
          Qualifying mobile plans include One Unlimited for iPhone, 5G Play
          More, 5G Do More, and 5G Get More, or Unlimited Plus. Data effective
          as of post date. Offers and availability vary by location and are
          subject to change. See full disclaimer.
        </p>
      </div>

      <div className="section final-take-5g-home-internet-deals">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> 5G Home Internet deals </span>
          </h2>
          <p className="sect-desc">
            Interested in Verizon 5G Home Internet service? Verizon’s best deals
            for new 5G Home Internet subscribers include a free Wi-Fi router,
            three-year price guarantees, and discounted internet rates for
            qualifying Verizon Wireless customers. Who wouldn’t want to pay only
            $25 per month for speedy home internet service?
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>view Verizon 5G Home internet plans</Link>
        </div>
      </div>

      <div className="section final-take-wireless-deals">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Wireless deals </span>
          </h2>
          <p className="sect-desc">
            You’ll get some of Verizon’s best offers when you bundle a
            qualifying Verizon Wireless plan with other Verizon services.
            <br />
            If you have a Verizon Unlimited plan, you’ll save up to $10 monthly
            on Fios Internet or up to $25 monthly on mobile. You’ll also save up
            to 50% on Fios Internet when combined with select 5G Unlimited
            plans. These Verizon Wireless plans include great add-ons like a
            Disney Bundle, a Google Play Pass, and Apple Music subscriptions.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>view Verizon Wireless plans</Link>
        </div>
      </div>

      <div className="section verizon-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Verizon deals and promotions </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What is the best deal for
                Verizon Fios?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Verizon Fios’ best deals are The Most Fios TV ($119.00 per
                  month) and Gigabit Connection ($89.99 per month) packages.
                  With each plan, you’ll get free add-ons that rotate monthly.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What is the best deal for Verizon Fios?"}
            cssClass={"faq-content"}
          >
            <p>
              Verizon Fios’ best deals are The Most Fios TV ($119.00 per month)
              and Gigabit Connection ($89.99 per month) packages. With each
              plan, you’ll get free add-ons that rotate monthly.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Can you negotiate with
                Verizon Fios?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  You can negotiate with Verizon Fios at any time. Check out our
                  bill negotiation guide for tips to lower your monthly Verizon
                  Fios costs.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Can you negotiate with Verizon Fios?"}
            cssClass={"faq-content"}
          >
            <p>
              You can negotiate with Verizon Fios at any time. Check out our
              bill negotiation guide for tips to lower your monthly Verizon Fios
              costs.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What is the best Fios TV
                package?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  The best Verizon Fios TV package for most households will be
                  Your Fios TV. For $75 per month, you’ll get more than 125
                  basic cable channels.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" What is the best Fios TV package?"}
            cssClass={"faq-content"}
          >
            <p>
              The best Verizon Fios TV package for most households will be Your
              Fios TV. For $75 per month, you’ll get more than 125 basic cable
              channels.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How much is Verizon cable
                and internet per month?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Verizon Fios Internet and Fios TV bundles cost between
                  $124.99–$233.99 per month. Check out our Verizon Fios bundles
                  guide to learn more about combining Verizon Fios services.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" How much is Verizon cable and internet per month?"}
            cssClass={"faq-content"}
          >
            <p>
              Verizon Fios Internet and Fios TV bundles cost between
              $124.99–$233.99 per month. Check out our Verizon Fios bundles
              guide to learn more about combining Verizon Fios services.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Does Verizon have any deals
                for existing customers?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  New and existing Verizon Fios internet customers can get up to
                  three months free of Sling TV service.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" Does Verizon have any deals for existing customers?"}
            cssClass={"faq-content"}
          >
            <p>
              New and existing Verizon Fios internet customers can get up to
              three months free of Sling TV service.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> Do AARP members get a
                Verizon discount?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>AARP members do not have a Verizon Fios discount.</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" Do AARP members get a Verizon discount?"}
            cssClass={"faq-content"}
          >
            <p>AARP members do not have a Verizon Fios discount.</p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote verizon-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Disclaimers:</h4>
          <p>
            Sling TV: For new and existing Verizon Fios, wireless, and 5G Home
            accounts new to Sling TV. Valid 2.19.22 – 6.30.23 for a maximum
            credit of $35/mo. for 2 months for Sling Blue or Sling Orange, up to
            $35/mo. for 2 months for select Sling International services, and up
            to $15/mo. for 3 months for Sling Latino services. You must prepay
            any additional Sling subscriptions, extras, add-ons and associated
            taxes that exceed the promotional credit amount. Redeem on Sling.com
            w/in 60 days of Verizon Fios or 5G Home internet activation or
            Verizon Wireless order completion. Valid payment form required at
            registration. Local channel availability may vary. After promo ends,
            Sling service will automatically renew at the then-current monthly
            rate unless canceled. Cancel any time. One offer per eligible
            Verizon account; cannot be redeemed for cash or credit. Additional
            terms apply.
            <br />
            5G Home Plus Bundle: Customer must purchase, install and maintain 5G
            Home Plus internet service in good standing for 65 days to redeem
            offer.
            <br />
            Verizon Gift Card: Offer ends 10.18.23. For new home internet
            customers who install and maintain eligible Fios services in good
            standing for 65 days and register for the Gift Card w/in 60 days
            thereafter, or by no later than 3.18.24, whichever is first. Gift
            Card emailed within 48 hours of registration. We reserve the right
            to charge back the amount of the Gift Card if eligible service is
            canceled w/in 180 days. Other Gift Card terms and conditions apply.
          </p>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default ShopVerizonDeals;
