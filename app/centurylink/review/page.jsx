// import React, { useState } from "react";
import "./centurylink-review.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { centurylinkNavLinks } from "../../assets/data/navLinks/centurylinkNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import centurylinkicongirl from "../../assets/images/centurylink-review-girl.png";
import star from "../../assets/images/star.png";
import centurylinkicon from "../../assets/images/centurylink-icon.png";
import centurylink from "../../assets/images/centurylink.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import quotationsIcon from "../../assets/images/quotations.svg";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";
import Searchbar from "../../components/searchbar/Searchbar";

export const metadata = {
  title: "CenturyLink Review"
};

const CenturyLinkReview = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: centurylink,
      rating: "(3.1/5)",
      starImg: star,
      desc: "SPECIAL OFFER: Get Fiber internet for as low as $30/mo for 12 months.",
      buttonText: "View Plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: centurylinkicongirl,

    cardsStrip: [
      {
        subtitle: "Download speeds:",
        title: "Up to 100–940 Mbps",
        icon: centurylinkicon,
      },
      {
        subtitle: "Upload speeds:",
        title: "Up to 10–940 Mbps",
        icon: centurylinkicon,
      },
      {
        subtitle: "Price:",
        title: "$30.00–$75.00/mo.",
        icon: centurylinkicon,
      },
      {
        subtitle: "Data cap:",
        title: "Unlimited",
        icon: centurylinkicon,
      },
    ],

    tableData: [
      {
        head: ["Top plans", "Price* ", "Standout features", "Details "],

        body: [
          {
            content: [
              "1.",
              "CenturyLink Fiber Gigabit",
              "$75.00/mo.†",
              "Best for speed Up to 940 Mbps download and upload speeds",
            ],
            linkPath: "# ",
          },
        ],
      },
    ],

    bottomDesc:
      "Data as of post date. Offers and availability may vary by location and are subject to change.",
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
        "Download Speeds Up To",
        "Upload Speeds Up To",
        "Connection type",
        "Details",
      ],

      body: [
        {
          content: [
            "1. ",
            "CenturyLink Fiber Internet 200 Mbps",
            "$30.00/mo.*",
            "Up to 200 Mbps",
            "Up to 200 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.  ",
            "CenturyLink Fiber Internet 500 Mbps",
            "$50.00/mo.*",
            "Up to 500 Mbps",
            "Up to 500 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3. ",
            "CenturyLink Fiber Gigabit",
            "$75.00/mo.*",
            "Up to 940 Mbps",
            "Up to 940 Mbps",
            "Fiber",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Simply Unlimited Internet",
            "$55.00/mo.*",
            "Up to 100 Mbps",
            "Up to 10 Mbps",
            "DSL",
          ],
          linkPath: "#",
        },
      ],
    },
  ];

  let packageTableDataBunles = [
    {
      head: [
        "Package",
        "Price",
        "Download Speeds Up To",
        "Upload Speeds Up To",
        "Phone plan",
        "Details",
      ],

      body: [
        {
          content: [
            "1. ",
            "Fiber Internet 200 Mbps + Simply Unlimited Home Phone",
            "$70.00/mo.*",
            "Up to 200 Mbps",
            "Up to 200 Mbps",
            "Unlimited nationwide calling",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.  ",
            "Fiber Internet 200 Mbps + Simply Unlimited Home Phone",
            "$90.00/mo.*",
            "Up to 500 Mbps",
            "Up to 500 Mbps",
            "Unlimited nationwide calling",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3. ",
            "Fiber Gigabit + Simply Unlimited Home Phone",
            "$115.00/mo.*",
            "Up to 940 Mbps",
            "Up to 940 Mbps",
            "Unlimited nationwide calling",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Simply Unlimited Internet + Simply Unlimited Home Phone",
            "$95.00/mo.*",
            "Up to 100 Mbps",
            "Up to 10 Mbps",
            "Unlimited nationwide calling",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="centurylink-review">
      {/* <SubNav links={centurylinkNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            CenturyLink Review 2024: Plans, Pricing, And More
          </h2>
          <p className="sect-desc">
            From equipment fees to internet plans, we break down what you need
            to know about CenturyLink services.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4> Is CenturyLink good?</h4>
          <p>
            When we size up an internet service provider (ISP), customer
            satisfaction is an important factor. In our internet customer
            survey, which evaluates areas including cost and reliability,
            CenturyLink tied for 12th place out of 20 ISPs. <br />
            Thanks to CenturyLink’s no-contract setup, you’ll get excellent
            billing flexibility on the ISP’s internet and phone plans. But
            CenturyLink’s unpredictable DSL network and lack of TV service means
            that your customer experience will vary widely depending on where
            you’re shopping from.
          </p>
          <br />
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th>
                    Prospects <IoThumbsUpSharp className="icon" />
                  </th>
                  <th>
                    Consequences <IoThumbsDownSharp className="icon" />
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td> No contracts</td>
                  <td> So-so customer service</td>
                </tr>
                <tr>
                  <td> Affordable fiber internet plan</td>
                  <td> Unpredictable internet availability</td>
                </tr>
                <tr>
                  <td> </td>
                  <td>No TV service</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Find out if Centurylink is available in your area"}
        desc={"Enter your zip code above to find out."}
      />

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
          <Link href={"#"}>CenturyLink internet packages </Link>
          <Link href={"#"}>CenturyLink internet and phone bundles </Link>
        </div>
      </div>

      <div className="section internet-packages">
        <div className="head">
          <h2 className="sect-heading">
            CenturyLink <span> internet packages </span>
          </h2>
          <p className="sect-desc">
            If you have a lot of folks at home who love to stream TV, we
            recommend the CenturyLink Fiber Gigabit plan. You’ll get excellent
            internet performance, and at $75.00 a month, it’s cheaper than other
            fiber internet providers like Verizon Fios ($89.99 monthly) and
            Optimum ($80.00 monthly). Depending on your area, you might also be
            prompted to sign up for Quantum Fiber. Quantum is basically
            CenturyLink’s rebranded fiber internet plan, and you’ll still have
            the same internet plans and pricing. <br />
            Unfortunately, area availability limits the CenturyLink plans you
            can purchase. If you can’t get CenturyLink Fiber Internet at your
            address, CenturyLink offers the Simply Unlimited Internet DSL plan.
            DSL plans have wildly variable speeds between areas—from 1.5 Mbps to
            100 Mbps. A couple or a small family that occasionally watches
            Netflix and Hulu shows can make 80–100 Mbps work pretty well. But if
            your address gets a download speed of less than 40 Mbps, you’ll be
            overpaying for slow internet and you’ll be better off looking at
            competing internet providers. <br />
            Check out our full CenturyLink internet review to learn more about
            the ISP’s internet plans.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data effective as of publish date. Pricing and speeds are subject to
          change. Not all offers available in all areas. <br />
          * Speed may not be available in your area. Paperless billing required.
          Taxes and fees apply. Online ONLY. Free Modem. <br />
          † Speed may not be available in your area. Maximum download/upload
          speed of up to 940 Mbps via a wired connection. Paperless billing
          required. Taxes and fees apply. Offer details. Offer includes
          professional installation at customer’s eligible location. <br />‡
          Paperless billing or prepaid required. Additional taxes, fees, and
          surcharges apply. Get the fastest Internet speed available at your
          location (max speed is up to 100 Mbps.)
        </p>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>CenturyLink Fiber: Nice speed, if you can get ity</h4>
          <p className="after-heading">
            I’ve had CenturyLink Fiber for almost two years now—apparently, I
            live in a special neighborhood. My bill has remained $55 a month,
            which is $10 cheaper than my previous CenturyLink DSL hookup. <br />
            The fiber speeds are as advertised, and I’ve experienced no
            slowdowns or outages so far (mine is a fiber-to-premises connection,
            the best-case scenario for fiber internet). It handles simultaneous
            web surfing and livestreaming TV much more smoothly than my old DSL
            and cable connections ever did, but the best part of fiber internet
            service for me is the equal download and upload speed. <br />
            Like everyone else you know, I host and record a podcast—it’s about
            TV, not unsolved murders, so don’t get too excited. With my previous
            DSL and cable internet services, it would take 45 minutes or more to
            upload an hour of audio (around 300 Mbps). With fiber, it uploads in
            5 minutes or less. I used to make a snack during the upload period;
            now, I barely have time to type the podcast synopsis before it’s
            done. First-world problems, I know. —Bill Frost, Staff Writer
          </p>
        </div>
      </div>

      <div className="section internet-bundles">
        <div className="head">
          <h2 className="sect-heading">
            CenturyLink <span> internet and phone bundles </span>
          </h2>
          <p className="sect-desc">
            CenturyLink usually charges $50 monthly for its Simply Unlimited
            Home Phone plan. But you get a $10 discount when you add it to your
            internet plan. Simply Unlimited Home Phone comes with unlimited
            nationwide calling, including Canada and U.S. territories. Simply
            Unlimited Home Phone comes with features such as caller ID, call
            waiting, and three-way calling. <br />
            CenturyLink doesn’t offer cable TV, which is a minor inconvenience
            if you’re looking to get all your services from one provider. ISPs
            typically offer the best cable TV deals when you bundle internet and
            TV services. But if you’re worried about keeping track of multiple
            bills, you can pay your TV bill through CenturyLink if you sign up
            with DIRECTV. <br />
            Visit our Centurylink bundles breakdown to learn more about
            combining CenturyLink services.
          </p>
        </div>
        <PackageTable item={packageTableDataBunles} />
        <br />
        <p className="below-table">
          Data effective as of publish date. Pricing and speeds are subject to
          change. Not all offers available in all areas. <br />
          * Speed may not be available in your area. Paperless billing required.
          Taxes and fees apply. Online ONLY. Free Modem. <br />
          † Speed may not be available in your area. Maximum download/upload
          speed of up to 940 Mbps via a wired connection. Paperless billing
          required. Taxes and fees apply. Offer details. Offer includes
          professional installation at customer’s eligible location. <br />‡
          Paperless billing or prepaid required. Additional taxes, fees, and
          surcharges apply. Get the fastest Internet speed available at your
          location (max speed is up to 100 Mbps.) ** Taxes and fees apply. Rate
          excludes CTL Fees not to exceed $4.00/mo/line. Offer Details.
        </p>
      </div>

      <CTA
        heading={"Want to get TV service with CenturyLink?"}
        desc={
          "Well, you can’t—CenturyLink doesn’t have cable TV. Enter your zip code below to find TV providers in your area or check out our Streaming TV Guide to learn more about online services like YouTube TV and fuboTV."
        }
      />

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is centuryLink worth it?</span>
          </h2>
          <p className="sect-desc">
            The biggest thing CenturyLink has going for it is price and value.
            And honestly, those are most people’s bigger concerns when shopping
            for internet and phone service. But don’t get us wrong—customer
            support, install and setup, modem satisfaction, and reliability are
            equally important. We find CenturyLink’s lackluster scores in those
            categories somewhat discouraging. <br />
            But CenturyLink’s relatively low prices and no-contract setup covers
            up a lot of warts. So go ahead and give CenturyLink a try if you can
            get a fast DSL plan or fiber internet. Since there’s no contract,
            there’s no risk. You’re free to leave if you’re not happy.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> view centuryLink plans </Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> CenturyLink </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Can I get CenturyLink at my
                house?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  See if your home is eligible for CenturyLink internet, or
                  phone service by entering your zip code below.
                </p>
                <br />
                <Searchbar />
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Can I get CenturyLink at my house?"}
            cssClass={"faq-content"}
          >
            <p>
              See if your home is eligible for CenturyLink internet, or phone
              service by entering your zip code below.
            </p>
            <br />
            <Searchbar />
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is CenturyLink any good?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  CenturyLink is okay. In CableTV.com’s customer satisfaction
                  survey, CenturyLink finished in 12th place out of 20
                  contenders. When we broke it down by category, however, we saw
                  that CenturyLink’s strengths are in pricing and value.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Is CenturyLink any good?"}
            cssClass={"faq-content"}
          >
            <p>
              CenturyLink is okay. In CableTV.com’s customer satisfaction
              survey, CenturyLink finished in 12th place out of 20 contenders.
              When we broke it down by category, however, we saw that
              CenturyLink’s strengths are in pricing and value.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What kind of support does
                CenturyLink provide?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  CenturyLink provides customer support by chat and phone. You
                  can chat with CenturyLink customer support or call CenturyLink
                  customer support at +1-877-837-5738. <br />
                  Check out our CenturyLink customer service guide to learn more
                  about the ISP’s support options.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" What kind of support does CenturyLink provide?"}
            cssClass={"faq-content"}
          >
            <p>
              CenturyLink provides customer support by chat and phone. You can
              chat with CenturyLink customer support or call CenturyLink
              customer support at +1-877-837-5738. <br />
              Check out our CenturyLink customer service guide to learn more
              about the ISP’s support options.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Where can I find
                CenturyLink speeds in my area?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Enter your zipcode here to see what speeds CenturyLink offers
                  in your area. Expect DSL speeds from 15–100 Mbps and fiber
                  speeds up to 940 Mbps.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Where can I find CenturyLink speeds in my area?"}
            cssClass={"faq-content"}
          >
            <p>
              Enter your zipcode here to see what speeds CenturyLink offers in
              your area. Expect DSL speeds from 15–100 Mbps and fiber speeds up
              to 940 Mbps.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does CenturyLink require a
                contract?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>CenturyLink does not require a contract.</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" Does CenturyLink require a contract?"}
            cssClass={"faq-content"}
          >
            <p>CenturyLink does not require a contract.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Does CenturyLink offer
                cable TV?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  CenturyLink does not offer cable TV services, but you can pay
                  your TV bill through CenturyLink if you sign up with DIRECTV.
                  Visit our Streaming TV Guide to learn more about streaming
                  live TV services.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" Does CenturyLink offer cable TV?"}
            cssClass={"faq-content"}
          >
            <p>
              CenturyLink does not offer cable TV services, but you can pay your
              TV bill through CenturyLink if you sign up with DIRECTV. Visit our
              Streaming TV Guide to learn more about streaming live TV services.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> Do I get a discount for
                bundling services with CenturyLink?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  Yes, you get a $10 monthly discount off internet and phone
                  when you bundle both products with CenturyLink.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={
              " Do I get a discount for bundling services with CenturyLink?"
            }
            cssClass={"faq-content"}
          >
            <p>
              Yes, you get a $10 monthly discount off internet and phone when
              you bundle both products with CenturyLink.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(7)}>
                <span>{faq === 7 ? "-" : "+"}</span> Is CenturyLink down?
              </h3>

              <div className={`faq-content ${faq === 7 ? "show" : ""}`}>
                <p>
                  You can use CenturyLink’s Outage Check tool to confirm outages
                  in your area. It’s available on CenturyLink’s Help section and
                  the Centurylink mobile app.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"8"}
            title={" Is CenturyLink down?"}
            cssClass={"faq-content"}
          >
            <p>
              You can use CenturyLink’s Outage Check tool to confirm outages in
              your area. It’s available on CenturyLink’s Help section and the
              Centurylink mobile app.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(7)}>
                <span>{faq === 7 ? "-" : "+"}</span> What is CenturyLink?
              </h3>

              <div className={`faq-content ${faq === 7 ? "show" : ""}`}>
                <p>
                  CenturyLink is an internet service provider that also offers
                  home phone service. It’s available in 16 states, primarily
                  across the western and central US.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"9"}
            title={" What is CenturyLink?"}
            cssClass={"faq-content"}
          >
            <p>
              CenturyLink is an internet service provider that also offers home
              phone service. It’s available in 16 states, primarily across the
              western and central US.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>See also: Internet | Bundles | Phone | Customer service</p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default CenturyLinkReview;
