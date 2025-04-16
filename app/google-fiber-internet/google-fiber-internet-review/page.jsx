// import React, { useState } from "react";
import "./google-fiber-internet-review.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { googlefiberinternetNavLinks } from "../../assets/data/navLinks/googlefiberinternetNavLinks";
import googlebro from "../../assets/images/google-fiber-bro.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import googlefiber from "../../assets/images/google-fiber.png";
import googleixon from "../../assets/images/google-fiber-icon.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import dotted from "../../assets/images/dotted.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Google Fiber Review: Plans, Prices, And More"
};

const GoogleFiberInternetReview = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: googlefiber,
      rating: "(4.5/5)",
      starImg: star,
      desc: "   Equipment included free of charge",
      buttonText: "view plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: googlebro,

    cardsStrip: [
      {
        subtitle: "Download speeds:",
        title: "1,000–8,000 Mbps",
        icon: googleixon,
      },
      {
        subtitle: "Upload speeds:",
        title: "1,000–8,000 Mbps",
        icon: googleixon,
      },
      {
        subtitle: "Data cap:",
        title: "Unlimited",
        icon: googleixon,
      },
      {
        subtitle: "Price:",
        title: "$70.00–$150.00/mo.",
        icon: googleixon,
      },
      {
        subtitle: " Contract:",
        title: "N/A",
        icon: googleixon,
      },
    ],

    tableData: [
      {
        head: [
          "Plan",
          "Price",
          "Download speeds up to",
          "Upload speeds up to",
          "Details",
        ],

        body: [
          {
            content: ["1.", "1 Gig", "$70.00/mo.", "1,000 Mbps", "1,000 Mbps"],
            linkPath: "#",
          },

          {
            content: ["2.", "2 Gig", "$100.00/mo.", "2,000 Mbps", "1,000 Mbps"],
            linkPath: "#",
          },
          {
            content: ["3.", "5 Gig", "$125.00/mo.", "5,000 Mbps", "5,000 Mbps"],
            linkPath: "#",
          },
          {
            content: ["4.", "8 Gig", "$150.00/mo.", "8,000 Mbps", "8,000 Mbps"],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "Data effective as of post date. Offers and availability may vary by location and are subject to change. *Available in select markets only. Plus taxes and fees. Upload/download speed and device streaming claims are based on maximum wired speeds. Actual Internet speeds are not guaranteed and may vary based on factors such as hardware and software limitations, latency, packet loss, etc.",
  };
  let packageTableData = [
    {
      head: [
        "Plan",
        "Price*",
        "Max download speed",
        "Max upload speed*",
        ,
        "Details",
      ],

      body: [
        {
          content: ["1.", "1 Gig", "$70.00/mo.", "1,000 Mbps", "1,000 Mbps"],
          linkPath: "#",
        },

        {
          content: ["2.", "2 Gig", "$100.00/mo.", "2,000 Mbps", "1,000 Mbps"],
          linkPath: "#",
        },
        {
          content: ["3.", "5 Gig", "$125.00/mo.", "5,000 Mbps", "5,000 Mbps"],
          linkPath: "#",
        },
        {
          content: ["4.", "8 Gig", "$150.00/mo.", "8,000 Mbps", "8,000 Mbps"],
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
    <div className="google-fiber-internet-review">
      {/* <SubNav links={googlefiberinternetNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Google Fiber Review 2024: Plans, Prices, And More
          </h2>
          <p className="sect-desc">
            Google Fiber is one of the fastest and simplest internet services
            you can get—if you can get it.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4> Is Google Fiber good?</h4>
          <p>
            Unlike other big-name fiber-optic internet providers, Google Fiber
            isn’t an extension of a vintage telecom company—unless you count
            Google’s 24-year-old search engine as vintage. <br />
            Where it’s available, customers rightly rave about Google Fiber’s
            speed, price, and performance, as well as the simplicity of its
            internet service. <br />
            Unfortunately, Google Fiber doesn’t have the geographical reach of
            other fiber players like Verizon Fios, CenturyLink, and AT&T. Right
            now, Google Fiber is more of a boutique internet provider that only
            23 US cities have access to. <br />
            But our recommendation on fiber-optic internet from any brand is
            always “If you can get it, get it.” That definitely applies to
            Google Fiber.
          </p>
          <h4>Google Fiber pros and cons</h4>
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
                  <td> Fast download and upload speeds</td>
                  <td>Limited availability</td>
                </tr>
                <tr>
                  <td>Simple plans and pricing</td>
                  <td>Slow US build-out</td>
                </tr>
                <tr>
                  <td>No data caps</td>
                  <td> </td>
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
          <Link href={"#"}> Deals and discounts</Link>
          <Link href={"#"}> Plans and prices</Link>
          <Link href={"#"}> Competition</Link>
          <Link href={"#"}> Specs and features</Link>
        </div>
      </div>

      <CTA
        heading={"Want to get Google Fiber?"}
        desc={
          "Enter your zip code below to see if Google Fiber is available in your area."
        }
      />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={dotted} alt="dotted" />
          <h4>Google Fiber deals</h4>
          <p>
            If you qualify for the Affordable Connectivity Program (ACP), you
            can save up to $30 monthly on your Google Fiber internet bill. Check
            out Google Fiber’s ACP info page or our low-income internet guide
            for more information on this government subsidy.
            <br />
            On top of that, Google Fiber offers the built-in perks of free
            installation, no extra equipment charges, and no contracts.
            Sometimes the best deal is a straightforward one (although we
            wouldn’t say no to some sign-up freebies).
          </p>
        </div>
      </div>

      <div className="section home-internet-plans">
        <div className="head">
          <h2 className="sect-heading">
            Google Fiber internet <span> plans and prices</span>
          </h2>
          <p className="sect-desc">
            Google Fiber uses fiber-optic lines that transmit data through
            hair-thin glass fibers instead of the traditional copper wires of
            cable and DSL (telephone line) internet. As with all fiber internet
            providers, this results in speeds up to 100 times faster than what
            cable and DSL connections can hit, as well as fewer instances of
            neighborhood slowdowns during peak usage hours.
            <br />
            Google has just started to roll out its 5 Gig and 8 Gig internet
            plans, but they’re not yet available in every Google Fiber city.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
          <br />
          *Available in select markets only. Plus taxes and fees.
          Upload/download speed and device streaming claims are based on maximum
          wired speeds. Actual Internet speeds are not guaranteed and may vary
          based on factors such as hardware and software limitations, latency,
          packet loss, etc.
        </p>
      </div>

      <div className="section internet-competition">
        <div className="head">
          <h2 className="sect-heading">
            Google Fiber <span> vs. competition</span>
          </h2>
          <p className="sect-desc">
            Google Fiber’s pricing is higher than competing fiber internet
            providers because it lacks an entry-level plan. Google Fiber’s plans
            start at 1,000 Mbps, which’ll be enough for most households, but it
            won’t come cheap at $70 monthly. By comparison, competitors like
            CenturyLink and AT&T have slower entry-level plans, but they’re much
            more affordable than Google Fiber and priced around $30 to $50.
            <br />
            At the same time, Google Fiber’s plans are faster than the
            competition. Most Google Fiber households will top out at the
            provider’s 2,000 Mbps plan, but some areas can qualify for Google’s
            5,000 Mbps and 8,000 Mbps plans. AT&T tops out at 5,000 Mbps, while
            CenturyLink hasn’t gotten on the multi-gig internet train yet.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section features">
        <div className="head">
          <h2 className="sect-heading">
            Google Fiber <span>specs and features</span>
          </h2>
          <p className="sect-desc">
            Google Fiber might be a specialty internet provider, but it covers
            many of the same bases as standard providers. Here’s what you’ll
            need to know before signing up for Google Fiber.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Google Fiber internet, TV, and phone bundles</h4>
          <br />
          <p className="after-heading">
            For an extra $10 a month, Google Fiber Phone service can be added to
            Google Fiber internet. It’s a standard VoIP (Voice over Internet
            Protocol) digital connection, though you’d have to provide your own
            landline telephone—yes, those are still a thing.
            <br />
            Google Fiber used to offer its own livestreaming TV service, too,
            but has since discontinued it. Instead, it now refers customers to
            YouTube TV (owned by Google, of course) or fuboTV, which are both
            solid alternatives for internet-based television.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Google Fiber internet equipment </h4>
          <br />
          <p className="after-heading">
            With Google Fiber 1 Gig, you’ll have the option to use your own
            Wi-Fi router or get Google Wifi, which is Google’s mesh Wi-Fi
            system. Mesh Wi-Fi systems use a series of access points to deliver
            a consistent Wi-Fi signal across your home and they’re best suited
            for larger multi-story homes. The 2 Gig plan also comes with a Wi-Fi
            6 router and mesh Wi-Fi extender.
            <br />
            There’s also a Fiber Jack, which is an ONT (optical network
            terminal) that converts the into-home fiber-optic signal to gigabit
            Ethernet that then runs into the Network Box. An ONT isn’t
            technically a modem, but it serves the same purpose as one. Both are
            factored into the Google Fiber bill and come at no extra cost, and
            installation (either professional or self-install) is free.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Google Fiber worth it?</span>
          </h2>
          <p className="sect-desc">
            While we wish it was more widely available—its build-out in the US
            has slowed considerably since its 2016 launch—Google Fiber is still
            an impressive internet contender. We also like Google Fiber’s simple
            plan pricing and no-contract approach almost as much as its blazing
            download speeds (almost).
            <br />
            If Google Fiber’s in your neighborhood, we highly recommend taking
            it for a spin. If not, start looking at other internet providers—it
            could be a looong wait before Google Fiber gets to you.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>check availability</Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>Google Fiber internet </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Is T-Mobile better than
                Verizon?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Google Fiber is fully available in 20 major US cities, mostly
                  in urban areas. Google’s next three locations are currently
                  being built in Des Moines, IA, Lakewood, CO, and Mesa, AZ.
                  Here’s the full list of Google Fiber cities once every
                  location is fully integrated:
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Is T-Mobile better than Verizon?"}
            cssClass={"faq-content"}
          >
            <p>
              Google Fiber is fully available in 20 major US cities, mostly in
              urban areas. Google’s next three locations are currently being
              built in Des Moines, IA, Lakewood, CO, and Mesa, AZ. Here’s the
              full list of Google Fiber cities once every location is fully
              integrated:
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Can you use your own Wi-Fi
                router with Google Fiber?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Google Fiber’s 2, 5, and 8 Gig plans come with a router. But
                  you can use your own third-party Wi-Fi router with Google
                  Fiber, as long as it’s able to handle 1,000 Mbps of incoming
                  speed from the ONT Ethernet converter. <br />
                  CableTV.com has some wireless routers recommendations
                  (including Google Wifi), all of which meet the speed
                  requirements of Google Fiber.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Can you use your own Wi-Fi router with Google Fiber?"}
            cssClass={"faq-content"}
          >
            <p>
              Google Fiber’s 2, 5, and 8 Gig plans come with a router. But you
              can use your own third-party Wi-Fi router with Google Fiber, as
              long as it’s able to handle 1,000 Mbps of incoming speed from the
              ONT Ethernet converter. <br />
              CableTV.com has some wireless routers recommendations (including
              Google Wifi), all of which meet the speed requirements of Google
              Fiber.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Is Google Fiber still a
                thing?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Yes, Google Fiber is still kicking! Google Fiber can power
                  your home or office with fiber-optic internet service. There
                  are four Google Fiber plans available:
                </p>
                <ul>
                  <li>
                    Fiber 1 Gig: Download/upload speeds up to 1,000 Mbps, no
                    data caps, equipment included ($70/mo.)
                  </li>
                  <li>
                    Fiber 2 Gig: Download/upload speeds up to 2,000 Mbps, no
                    data caps, equipment included ($100/mo.)
                  </li>
                  <li>
                    Fiber 5 Gig: Download/upload speeds up to 5,000 Mbps, no
                    data caps, equipment included ($125/mo.)
                  </li>
                  <li>
                    Fiber 8 Gig: Download/upload speeds up to 8,000 Mbps, no
                    data caps, equipment included ($150/mo.
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Is Google Fiber still a thing?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, Google Fiber is still kicking! Google Fiber can power your
              home or office with fiber-optic internet service. There are four
              Google Fiber plans available:
            </p>
            <ul>
              <li>
                Fiber 1 Gig: Download/upload speeds up to 1,000 Mbps, no data
                caps, equipment included ($70/mo.)
              </li>
              <li>
                Fiber 2 Gig: Download/upload speeds up to 2,000 Mbps, no data
                caps, equipment included ($100/mo.)
              </li>
              <li>
                Fiber 5 Gig: Download/upload speeds up to 5,000 Mbps, no data
                caps, equipment included ($125/mo.)
              </li>
              <li>
                Fiber 8 Gig: Download/upload speeds up to 8,000 Mbps, no data
                caps, equipment included ($150/mo.
              </li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Which is better: AT&T Fiber
                or Google Fiber?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  AT&T Fiber and Google Fiber are fairly evenly matched—both 1
                  Gbps internet plans cost $70 per month overall and neither
                  provider has data caps or annual contracts. AT&T Fiber also
                  has a 2 Gbps internet plan like Google Fiber, but AT&T also
                  occasionally bundles services like Max (formerly HBO Max) with
                  its fiber internet plans.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Which is better: AT&T Fiber or Google Fiber?"}
            cssClass={"faq-content"}
          >
            <p>
              AT&T Fiber and Google Fiber are fairly evenly matched—both 1 Gbps
              internet plans cost $70 per month overall and neither provider has
              data caps or annual contracts. AT&T Fiber also has a 2 Gbps
              internet plan like Google Fiber, but AT&T also occasionally
              bundles services like Max (formerly HBO Max) with its fiber
              internet plans.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote page-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Methodology:</h4>
          <p>
            We analyzed the fine print for both Google Fiber home internet
            plans, rating them in value, features, and add-ons. We also compared
            Google Fiber to other fiber internet providers like AT&T and Verizon
            to see how it stacked up versus the competition. For more
            information on our methodology, check out
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
            page.
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              ·
              <span className="link">
                <Link href={"#"}>Best Fiber Internet Providers</Link>
              </span>
            </li>
            <li>
              ·
              <span className="link">
                <Link href={"#"}> Compare Fiber Internet in Your Area</Link>
              </span>
            </li>
            <li>
              ·
              <span className="link">
                <Link href={"#"}>Chromecast with Google TV Review</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default GoogleFiberInternetReview;
