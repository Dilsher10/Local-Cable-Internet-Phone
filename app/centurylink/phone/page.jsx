// import React, { useState } from "react";
import "./centurylink-phone.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { centurylinkNavLinks } from "../../assets/data/navLinks/centurylinkNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import centurylinkicongirl from "../../assets/images/centurylink-gril.png";
import star from "../../assets/images/star.png";
import centurylinkicon from "../../assets/images/centurylink-icon.png";
import centurylink from "../../assets/images/centurylink.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import quotationsIcon from "../../assets/images/quotations.svg";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import PackageTable from "../../components/package-table/PackageTable";
import Searchbar from "../../components/searchbar/Searchbar";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "CenturyLink Home Phone Service"
};

const CenturyLinkPhone = () => {
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
        subtitle: "Service provider:",
        title: "CenturyLink",
        icon: centurylinkicon,
      },
      {
        subtitle: "Price:",
        title: "$90.00/mo.",
        icon: centurylinkicon,
      },
      {
        subtitle: "Phone plan:",
        title: "Unlimited nationwide calling",
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
              "Simply Unlimited Home Phone",
              "$50.00/mo.",
              "Unlimited nationwide calling, incl. Canada and U.S. territories Up to 10 calling features",
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
      head: ["Package", "Price", "Features", "Details"],

      body: [
        {
          content: [
            "1. ",
            "Simply Unlimited Home Phone",
            "$50.00/mo.*",

            "Unlimited nationwide calling, incl.  Canada and U.S. territories Up to 10 calling features",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataPlansAndRates = [
    {
      head: ["Package", "Type of service", "Monthly fee", "Details"],

      body: [
        {
          content: [
            "1. ",
            "CenturyLink Choice International",
            "Long-distance discount plan",
            "$6.00/mo. + per-min. charges (varies)",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2. ",
            "Easy Talk",
            "Long-distance minutes",
            "Buckets of min. start at $5.00/mo.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3. ",
            "Easy Talk II",
            "Long-distance discount plan",
            "$7.99/mo. + $0.05/min.",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataVoice = [
    {
      head: ["Package", "Price", "Top features", "Details"],

      body: [
        {
          content: [
            "1. ",
            "Basic Plan",
            "$30.00/mo.*",

            "Unlimited local and nationwide calling, Caller ID, e911 access",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2. ",
            "Professional  Plan",
            "$40.00/mo.*",

            "Conference calling, video conferencing, email faxes",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataPricing = [
    {
      head: [
        "Package",
        "Price",
        " Download/upload speeds",
        "Phone plan features",
        "Details",
      ],

      body: [
        {
          content: [
            "1. ",
            " CenturyLink Fiber Internet with Unlimited Nationwide CallingBest fiber package with add-on  ",
            "$110.00/mo.*",
            "Up to 940 Mbps both ways ",
            "Unlimited nationwide calling, incl. Canada and U.S. territories Up to 10 calling features No contract No activation fee ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2. ",
            "CenturyLink Simply Unlimited Internet with Unlimited Nationwide CallingBest DSL package with add-on",
            "$90.00/mo.*",
            "Download: up to 100 Mbps Upload: up to 10 Mbps (Actual speeds depend on location) ",
            " Unlimited nationwide calling, incl. Canada and U.S. territories Up to 10 calling features No contract No activation fee",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="centurylink-phone">
      {/* <SubNav links={centurylinkNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            CenturyLink Home Phone Service: Plans And Pricing
          </h2>
          <p className="sect-desc">
            CenturyLink bundle discounts are no longer available, but you can
            still get standalone home phone service.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4> Is CenturyLink home phone service good?</h4>
          <p>
            CenturyLink isn’t trying to reinvent home phone service. The phones
            work the same. The features (call waiting, caller ID, etc.) are so
            standard that they don’t feel like features. The long-distance
            charges aren’t a joke. The bills can have puzzling and dubious fees.{" "}
            <br />
            So, yeah—CenturyLink home phone service is just like you remember
            from the days before smartphones. Minus the nostalgia. <br />
            Okay, maybe it’s not fair to say that landlines have no upsides.
            Ambulance drivers will know your exact location. You won’t have to
            charge your phone (as much). The phones don’t have tons of apps,
            games, and messages to distract you from real life. And retro-tech
            like this will totally boost your hipster cred. <br />
            Are we reaching for reasons to have a landline? Yeah, kinda. But
            that doesn’t mean your reasons aren’t important.
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
                  <td>Unlimited nationwide calling</td>
                  <td> No Candy Crush support</td>
                </tr>
                <tr>
                  <td> Increased personal security</td>
                  <td> Per-user pricing for Connected Voice</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
          <Link href={"#"}>Plans and pricing </Link>
          <Link href={"#"}>Long distance </Link>
          <Link href={"#"}>bundles </Link>
          <Link href={"#"}> deals </Link>
        </div>
      </div>

      <div className="section internet-bundles">
        <div className="head">
          <h2 className="sect-heading">
            CenturyLink <span> phone plans </span>
          </h2>
          <p className="sect-desc">
            CenturyLink’s Simply Unlimited Home Phone plan comes with unlimited
            nationwide calling and up to 10 calling features. If you add it to
            your CenturyLink internet plan (you can’t purchase standalone phone
            service), you’ll save $10 monthly off the combined costs of the
            services. <br />
            Now let’s talk long-distance rates (remember those?).
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data is as of time of post. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section plans-and-rates">
        <div className="head">
          <h2 className="sect-heading">
            CenturyLink long-distance calling <span> plans and rates </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <PackageTable item={packageTableDataPlansAndRates} />
        <br />
        <p className="below-table">
          Data is as of time of post. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section internet-packages">
        <div className="head">
          <h2 className="sect-heading">
            Long-distance calling <span> with Home Phone Unlimited </span>
          </h2>
          <p className="sect-desc">
            Home Phone Unlimited includes unlimited long-distance calling
            throughout most of North America (50 states, Canada, and U.S.
            territories). But what if you have family in Japan or Australia? If
            you need to call other countries, CenturyLink charges extra for
            long-distance calls, just like back in the old days. You’ll pay
            higher rates during peak hours (Monday–Friday, 7:00 a.m.–7:00 p.m.)
            and slightly lower rates on nights and weekends. <br />
            Of course, those rates are straight outta SayWhat-town. Calling
            Japan during peak hours with CenturyLink will cost $1.62 a minute.
            On nights and weekends, the same call will set you back $1.17 a
            minute. Obviously, those prices aren’t ideal, but there is an
            alternative. For an additional $6 a month, the CenturyLink Choice
            International add-on slashes your long-distance rate. That call to
            Japan, for instance, drops by 86–96% ($0.08–$0.22 a minute) with
            Choice International. And there are no restrictions on the time of
            day you can call. <br />
            <span className="link">
              <Link href={"/"}>
                See CenturyLink Choice International rates by country.{" "}
              </Link>
            </span>{" "}
            <br />
            If you pick the Home Phone Unlimited plan, CenturyLink Choice
            International will bring your bill up to $66 a month (plus fees and
            taxes). But do you really wanna spend 66 bucks a month on a
            landline? That feels like a lot of dough to blow on a service that’s
            almost obsolete.
          </p>
        </div>

        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>Real talk about Easy Talk</h4>
          <p className="after-heading">
            So how many Easy-Talk minutes do you get for your five bucks a
            month? That’s what we’d like to know. <br />
            We asked at least four CenturyLink reps for specifics on Easy Talk.
            All we were able to learn is that the add-on starts at $5 a month
            for what the company calls “a bucket of long-distance minutes.”{" "}
            <br />
            The buckets, we were told, come in three sizes: 50, 100, or 200
            minutes. How much is each bucket? None of the reps could say. It’s
            probably safe to assume that $5 gets you the 50-minute bucket. But
            we’re not sure what to tell you regarding the bigger ones. <br />
            One more thing about Easy Talk: It may not be available in your
            area. You might instead qualify for Easy Talk II, which is $7.99 a
            month plus $0.05 per minute. That would bring your monthly payment
            to $32.24.
          </p>
        </div>
      </div>

      <div className="section plans-and-rates">
        <div className="head">
          <h2 className="sect-heading">
            CenturyLink <span> Connected Voice plans </span>
          </h2>
          <p className="sect-desc">
            CenturyLink Fiber Internet customers who want landline phone service
            will have to settle for the provider’s Connected Voice service.
            Connected Voice comes in two tiers: Basic Plan offers standard
            features like voicemail and caller ID, while Professional Plan
            includes business features like video conferencing and emailed
            copies of faxes. <br />
            But the service will likely be a nonstarter for most households
            because of its pricing setup. Unlike most ISP phone plans (which
            come with flat-rate pricing), Connected Voice charges per user. If
            you wanted Basic Plan for a five-person household, you’d be paying
            an additional $150 just for landline phone service.
          </p>
        </div>
        <PackageTable item={packageTableDataVoice} />
        <br />
        <p className="below-table">
          Data is as of time of post. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section internet-packages">
        <div className="head">
          <h2 className="sect-heading">
            CenturyLink bundles <span> (add-ons) and pricing </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <PackageTable item={packageTableDataPricing} />
        <br />
        <p className="below-table">
          Data is as of time of post. Offers and availability may vary by
          location and are subject to change. <br />
          * Speed may not be available in your area. Maximum download/upload
          speed of up to 940 Mbps via a wired connection. Paperless billing
          required. Taxes and fees apply. Offer details. Offer includes
          professional installation at customer’s eligible location. <br />†
          Paperless billing or prepaid required. Additional taxes, fees, and
          surcharges apply. Get the fastest Internet speed available at your
          location (max speed is up to 100 Mbps.)
        </p>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4> CenturyLink deals</h4>
          <p className="after-heading">
            CenturyLink has no active deals or promotions at the time of this
            writing.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is centuryLink Phone worth it?</span>
          </h2>
          <p className="sect-desc">
            Not everyone needs a landline. Many of us don’t even want one. But
            they can be handy in emergencies.
            <br />
            If you’d like that extra protection in your life, CenturyLink
            provides it at a decent price. Otherwise, you’re better off with
            that high-tech, life-stealing smartphone.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> view centuryLink phone plans </Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> CenturyLink Phone Service </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span>Do I need a phone line for
                CenturyLink Internet? house?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  You don’t need a phone line for CenturyLink Internet, but you
                  will need a working phone jack.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"Do I need a phone line for CenturyLink Internet? house?"}
            cssClass={"faq-content"}
          >
            <p>
              You don’t need a phone line for CenturyLink Internet, but you will
              need a working phone jack.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span>Does CenturyLink have cell
                phone service?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  CenturyLink does not currently offer mobile phone service.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"Does CenturyLink have cell phone service?"}
            cssClass={"faq-content"}
          >
            <p>CenturyLink does not currently offer mobile phone service.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Can I get CenturyLink at my
                house?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  You probably can get CenturyLink internet or phone service at
                  your house. Enter your zip code below to see if CenturyLink is
                  in your area.
                </p>
                <br />
                <Searchbar />
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Can I get CenturyLink at my house?"}
            cssClass={"faq-content"}
          >
            <p>
              You probably can get CenturyLink internet or phone service at your
              house. Enter your zip code below to see if CenturyLink is in your
              area.
            </p>
            <br />
            <Searchbar />
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What services does
                CenturyLink offer?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  CenturyLink offers internet and phone service. You can also
                  package DISH or DIRECTV with your CenturyLink plan during the
                  checkout process.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" What services does CenturyLink offer?"}
            cssClass={"faq-content"}
          >
            <p>
              CenturyLink offers internet and phone service. You can also
              package DISH or DIRECTV with your CenturyLink plan during the
              checkout process.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p> See also: Overview | Internet | Bundles | Customer service</p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default CenturyLinkPhone;
