// import React, { useState } from "react";
import "./cox-internet-review.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { coxNavLinks } from "../../assets/data/navLinks/coxNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import coxbundlereviewgirl from "../../assets/images/coxbundlereviewgirl.png";
import star from "../../assets/images/star.png";
import coxmark from "../../assets/images/coxmark.png";
import coxlogo from "../../assets/images/coxlogo.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import dotted from "../../assets/images/dotted.png";
import PackageTable from "../../components/package-table/PackageTable";
import coxboxone from "../../assets/images/coxboxone.png";
import coxboxtwo from "../../assets/images/coxboxtwo.png";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Cox Internet Plans And Pricing",
};

const CoxInternetReview = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: coxlogo,
      rating: "(3.95/5)",
      starImg: star,
      desc: "Affordable internet plans",
      buttonText: "compare packages",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: coxbundlereviewgirl,

    cardsStrip: [
      {
        subtitle: "Download speeds:",
        title: "100–2,000 Mbps",
        icon: coxmark,
      },
      {
        subtitle: "Price:",
        title: "$49.99–$149.99/mo.",
        icon: coxmark,
      },
      {
        subtitle: "Data cap:",
        title: "1.25 TB",
        icon: coxmark,
      },
      {
        subtitle: "Contract length:",
        title: "Varies",
        icon: coxmark,
      },
    ],

    tableData: [
      {
        head: [" ", " ", "  ", " ", "  ", " "],

        body: [
          {
            content: [" "],
            linkPath: "# ",
          },
        ],
      },
    ],

    bottomDesc: "",
  };
  let packageTableDataInternetOnly = [
    {
      head: [
        "Package",
        "Price",
        "Download speeds up to",
        "Upload speeds",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "StraightUp Internet",
            "$50.00/mo.**",
            "100 Mbps",
            "5 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Go Fast (no contract)",
            "$49.99/mo.*",
            "100 Mbps",
            "5 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Go Faster",
            "$69.99/mo.*",
            "250 Mbps",
            "Up to 10 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Go Even Faster",
            "$89.99/mo.†",
            "500 Mbps",
            "10 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "Go Super Fast",
            "$109.99/mo.‡",
            "1,000 Mbps",
            "35 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "6.",
            "Go Beyond Fast",
            "$149.99/mo.*",
            "2,000 Mbps",
            "100 Mbps",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataBundles = [
    {
      head: [
        "Package",
        "Price",
        "Download speeds up to",
        "Channel count",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Go Faster + Contour TV Preferred",
            "$168.99/mo.*",
            "250 Mbps",
            "170+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Go Even Faster + Contour TV Preferred",
            "$188.99/mo.**",
            "500 Mbps",
            "170+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Go Super Fast + Contour TV Preferred",
            "$198.99/mo.†",
            "1,000 Mbps",
            "170+",
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
    <div className="cox-internet-review">
      {/* <SubNav links={coxNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">Cox Internet Plans And Pricing</h2>
          <p className="sect-desc">
            We tested and researched Cox internet for nine months. Read on to
            see if Cox internet plans are worth it.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-cox-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is Cox internet good?</h4>
          <p>
            Cox internet is generally good for most folks, but it really depends
            on which competitors are also available in your area.
            <br />
            In a nutshell, Cox cable internet plans are faster than
            telephone-line DSL internet but slower than fiber-optic internet.
            Still, some of Cox’s internet plans come close to fiber speed, and
            most of them can easily handle household needs. And most Cox
            internet plans are fairly affordable.
            <br />
            So, yes, for the most part, we’d say that Cox internet is good.
          </p>
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
                  <td>Affordable pricing</td>
                  <td>1.25 TB data cap</td>
                </tr>
                <tr>
                  <td>Wide range of packages</td>
                  <td>Pricy bundles</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Find out if Cox internet is available in your area"}
        desc={"Enter your zip code below to find out!"}
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
          <Link href={"#"}>Cox internet deals and promotions</Link>
          <Link href={"#"}>Cox internet plans</Link>
          <Link href={"#"}>Cox internet and TV plans</Link>
          <Link href={"#"}>Cox Wi-Fi</Link>
        </div>
      </div>

      <div className="section cox-blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"></p>
        </div>
        <div className="package-table-container channels">
          <Image src={dotted} alt="mark" className="mark" />
          <h4>Cox internet deals and promotions</h4>
          <br />
          <p>
            Cox frequently offers free promotions on features and equipment,
            low-income internet discounts, and bundle discounts. Check out our
            Cox Deals and Promotions page for the latest deals.
          </p>
        </div>
      </div>

      <div className="section cox-internet-only">
        <div className="head">
          <h2 className="sect-heading">
            Cox <span> internet-only </span> plans and packages
          </h2>
          <p className="sect-desc">
            If you go with Cox Communications, get a Cox internet-only plan
            unless you’re fine with paying a pretty penny for a TV and internet
            bundle (more on that later).
            <br />
            Cox’s starting package, Go Fast, is an ideal internet plan. It costs
            $49.99 a month (the average price for internet in the US) and comes
            with 100 Mbps (our recommended internet speed for most folks).
            <br />
            And Cox’s cable internet speeds stay competitive with fiber
            internet, thanks to its Go Super Fast plan. With this plan, you’ll
            get download speeds as fast as 1,000 Mbps. But cable internet can’t
            match fiber’s fast upload speeds, so your video calls might not be
            as smooth as they’d be on a fiber internet service.
            <br />
            If you’re running a home business or uploading your weekly
            fly-fishing podcast, maybe look around for a fiber internet
            provider. And fiber internet providers like Google Fiber and Verizon
            Fios offer gig speeds for less cash, for example, so shop around.
          </p>
        </div>
        <PackageTable item={packageTableDataInternetOnly} />
        <br />
        <p className="below-table">
          **Not available in all areas. No term agreement. Same price for 2 yrs.
          Pricing, packages, and policies are subject to change, including when
          adjusting or removing services or equipment.*No annual contract or
          cancellation fees. †For 12 mos. No annual contract. ‡For 12 mos. w/
          1-yr. term agreement. Data effective as of post date. Offers and
          availability may vary by location and are subject to change. Data
          effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} alt="helpsupportgirl" className="mark" />
          <h4>We tested Cox for 9 months</h4>
          <br />
          <p>
            “As a Cox subscriber with Go Super Fast internet, I can attest to
            its lightning speed, whether I’m doing essential work or playing
            games. It’s perfect when everyone in the house wants to retreat to a
            different room to use a device for everything from watching movies
            to downloading movies to watch on the phone—the download speed has
            never slowed down no matter what kind of activity is taking place.”
            —Amy Young
          </p>
        </div>
      </div>

      <div className="section cox-internet-and-tv-bundles">
        <div className="head">
          <h2 className="sect-heading">
            Cox <span> internet and TV packages</span>
          </h2>
          <p className="sect-desc">
            TBH, we don’t really recommend Cox TV and internet bundles because
            of the extremely high cost for most folks.
            <br />
            Unfortunately, aside from giving you one convenient bill and live
            TV, Cox internet and TV bundles don’t deliver much value. We
            recommend checking out the Cox internet packages and going with a
            standalone Cox internet plan. If you want TV, we recommend going
            with a more affordable live TV streaming option.
            <br />
            Still interested in Cox bundles? We analyze every Cox bundle (we
            only list the three best here) in our comprehensive review.
          </p>
        </div>
        <PackageTable item={packageTableDataBundles} />
        <br />
        <p className="below-table">
          *No annual contract or cancellation fees. **for 12 mos. No annual
          contract. † for 12 mos. w/ 1-yr. term agreement. Data effective as of
          post date. Offers and availability may vary by location and are
          subject to change.
        </p>
      </div>

      <div className="section cox-equipment-features">
        <div className="head">
          <h2 className="sect-heading">
            Cox internet <span> equipment and features </span>
          </h2>
          <p className="sect-desc">
            Bundles and TV service aside, a couple of things that Cox gets right
            are its internet equipment and features. Smaller internet service
            providers can’t provide you the tech that Cox does, but it’ll cost
            you a little extra.
            <br />
            Read on to see what goodies Cox internet has to offer.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Cox Hotspots</h4>
          <br />
          <p>
            All Cox internet plans come with a membership to Cox Hotspots, a
            network of 3 million Wi-Fi hotspots accessible from any mobile
            device. These Wi-Fi hotspots are free for Cox customers, but if
            you’re not one, you can also pay a fee to connect to a hotspot for a
            limited time. For more information on how to locate and connect to
            Cox Wi-Fi, check out our Cox Hotspots guide.
          </p>
        </div>
        <div className="two-col-channel">
          <div className="package-table-container channels">
            <h4>Cox Panoramic WiFi</h4>
            <br />
            <p>
              Cox rents the Panoramic WiFi Gateway for $12 a month. A
              combination cable modem and 2-port gigabit wired router, the
              Panoramic WiFi provides fast and reliable speeds across your home.
              <br />
              Download the app to manage your Wi-Fi from your home or mobile
              device. You don’t have to rent this modem/router combo if you
              don’t want to though—you can buy a Cox-compatible modem and router
              instead. Buying your own devices will cost you more upfront, but
              you might save some cash dollars in the long run.
            </p>
            <br />
            <br />
            <Image src={coxboxtwo} className="" alt="coxboxone" />
          </div>
          <div className="package-table-container channels">
            <h4>Cox Contour Stream Player</h4>
            <br />
            <p>
              Cox also has a TV streaming device called the Cox Contour Stream
              Player that you can get with its internet plans. The streaming
              device costs $5 per month and comes preloaded with popular
              streaming apps like Netflix and Peacock.
              <br />
              Regardless of how it stacks up against other streaming devices,
              going with the Cox Contour Stream Player and Panoramic WiFi is
              still a whole helluva lot cheaper than bundling internet and TV
              through Cox.
            </p>
            <br />
            <br />
            <br />
            <br />
            <Image src={coxboxone} className="" alt="coxboxone" />
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Cox prepaid internet service</h4>
          <br />
          <p>
            Yes, Cox does offer prepaid internet. It’s called StraightUp
            Internet, and you pay for it before you use it. It’s a $50 fee that
            is paid upfront with no hidden or extra fees. It gives you 1 TB of
            data each month.
            <br />
            The service also includes prepaid Wi-Fi via a dual-band modem
            provided by Cox. There is no contract involved, so you decide each
            month if you want to pay ahead for another month of service. An
            auto-renewal option is available.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Cox Elite Gamer</h4>
          <br />
          <p>
            Elite Gamer is a new option Cox is offering to Panoramic WiFi users.
            This feature comes included with Panoramic WiFi Gateway, and it’s
            designed to help gamers—both individuals and teams—head to victory.
            <br />
            By finding a faster path to the PC game server, it optimizes your
            gaming connection. Its comprehensive dashboard lets you analyze past
            performances to ensure future wins.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Cox internet plans for seniors</h4>
          <br />
          <p>
            Cox does not currently offer a senior discount on internet plans. It
            does offer some low-cost internet options but none specifically
            tailored for older adults.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Cox internet worth it? </span>
          </h2>
          <p className="sect-desc">
            Cox’s Go Fast package hits the internet sweet spot for price and
            speed. But if you’re looking at the Go Super Fast plan for your
            large family or many internet devices, check to see if you have a
            cheaper fiber provider in your area—Cox’s 1,000 Mbps plan is a bit
            overpriced.
            <br />
            To make sure you’re spending only what you want to, make sure to
            take a peek at our Hidden Cox Fees for Cable and Internet page.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>view plans</Link>
        </div>
      </div>

      <div className="section cox-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Cox internet </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Is Cox internet unlimited?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Like most cable internet providers, Cox imposes a data cap on
                  service—but you’ll likely never hit it. Cox’s monthly 1.25 TB
                  (terabyte) cap is comparable to streaming over 500 hours of HD
                  movies and TV shows. If you can consume that in a month,
                  you’ve earned an internet break.
                  <br />
                  If you need to keep track of your data usage, Cox has options.
                  There’s a Data Usage Meter available on the Cox website and
                  the Cox app. Opt-in alerts can let you know if you’re running
                  low on data.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Is Cox internet unlimited?"}
            cssClass={"faq-content"}
          >
            <p>
              Like most cable internet providers, Cox imposes a data cap on
              service—but you’ll likely never hit it. Cox’s monthly 1.25 TB
              (terabyte) cap is comparable to streaming over 500 hours of HD
              movies and TV shows. If you can consume that in a month, you’ve
              earned an internet break.
              <br />
              If you need to keep track of your data usage, Cox has options.
              There’s a Data Usage Meter available on the Cox website and the
              Cox app. Opt-in alerts can let you know if you’re running low on
              data.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Can I just get Wi-Fi from
                Cox?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Cox offers standalone internet plans for those who have—or
                  want—to cut the cable cord but still stream TV and movie
                  programs. It’s one way to avoid getting locked into a bundle
                  that will be more expensive.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Can I just get Wi-Fi from Cox?"}
            cssClass={"faq-content"}
          >
            <p>
              Cox offers standalone internet plans for those who have—or want—to
              cut the cable cord but still stream TV and movie programs. It’s
              one way to avoid getting locked into a bundle that will be more
              expensive.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does Cox throttle internet
                speed?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  No, Cox doesn’t currently throttle internet speed — at least
                  during the COVID-19 pandemic. Setting aside these
                  unprecedented circumstances, it’s hard to prove that any
                  internet company throttles speeds, let alone Cox. We have our
                  theories, though. . .
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does Cox throttle internet speed?"}
            cssClass={"faq-content"}
          >
            <p>
              No, Cox doesn’t currently throttle internet speed — at least
              during the COVID-19 pandemic. Setting aside these unprecedented
              circumstances, it’s hard to prove that any internet company
              throttles speeds, let alone Cox. We have our theories, though. . .
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Do I have to use the modem
                supplied by Cox?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Cox internet service is compatible with a long list of modems
                  from outside sources, as long as they’re DOCSIS 3.0 or 3.1.
                  Plans below 250 Mbps will work with older DOCSIS 2.0 modems.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Do I have to use the modem supplied by Cox?"}
            cssClass={"faq-content"}
          >
            <p>
              Cox internet service is compatible with a long list of modems from
              outside sources, as long as they’re DOCSIS 3.0 or 3.1. Plans below
              250 Mbps will work with older DOCSIS 2.0 modems.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Is cable internet the same
                as satellite internet?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  While there’s little noticeable difference between cable TV
                  and satellite TV service, internet is another matter. Cable
                  internet can deliver download speeds of up to 1,000 Mbps, but
                  satellite internet maxes out at 100 Mbps (average speed: 25
                  Mbps).
                  <br />
                  Satellite internet is also more expensive than cable internet
                  and far less reliable—in other words, it’s not a great deal
                  (unless it’s the only internet you can get, especially in
                  remote areas with little infrastructure).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" Is cable internet the same as satellite internet?"}
            cssClass={"faq-content"}
          >
            <p>
              While there’s little noticeable difference between cable TV and
              satellite TV service, internet is another matter. Cable internet
              can deliver download speeds of up to 1,000 Mbps, but satellite
              internet maxes out at 100 Mbps (average speed: 25 Mbps).
              <br />
              Satellite internet is also more expensive than cable internet and
              far less reliable—in other words, it’s not a great deal (unless
              it’s the only internet you can get, especially in remote areas
              with little infrastructure).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> How do I reach Cox internet
                support?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  If you need technical support for your Cox internet service,
                  call +1-800-234-3993 at any time, day or night. Check out our
                  Cox customer service page for more ways to get in touch.
                  <br />
                  We also have a handy Cox Troubleshooting Guide that can help
                  lead you to a solution.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" How do I reach Cox internet support?"}
            cssClass={"faq-content"}
          >
            <p>
              If you need technical support for your Cox internet service, call
              +1-800-234-3993 at any time, day or night. Check out our Cox
              customer service page for more ways to get in touch.
              <br />
              We also have a handy Cox Troubleshooting Guide that can help lead
              you to a solution.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(7)}>
                <span>{faq === 7 ? "-" : "+"}</span> How much data can I use
                with Cox internet?
              </h3>

              <div className={`faq-content ${faq === 7 ? "show" : ""}`}>
                <p>
                  All of the Cox internet plans include 1.25 TB (1280 GB) of
                  data per month. Cox offers the option to add more. For $29.99
                  a month, you can add 500 GB to your base data for another 100
                  hours of HD streaming.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={" How much data can I use with Cox internet?"}
            cssClass={"faq-content"}
          >
            <p>
              All of the Cox internet plans include 1.25 TB (1280 GB) of data
              per month. Cox offers the option to add more. For $29.99 a month,
              you can add 500 GB to your base data for another 100 hours of HD
              streaming.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(8)}>
                <span>{faq === 8 ? "-" : "+"}</span> How much is Cox internet
                with unlimited data?
              </h3>

              <div className={`faq-content ${faq === 8 ? "show" : ""}`}>
                <p>
                  Unlimited data will cost you an additional $49.99 a month on
                  top of your Cox internet package. You can work and play online
                  to your heart’s content with the unlimited plan. Say goodbye
                  (and good riddance) to worrying about any overage charges.
                  <br />
                  Check the Cox deals and promotions to see if there are ways to
                  save a few bucks.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"8"}
            title={" How much is Cox internet with unlimited data?"}
            cssClass={"faq-content"}
          >
            <p>
              Unlimited data will cost you an additional $49.99 a month on top
              of your Cox internet package. You can work and play online to your
              heart’s content with the unlimited plan. Say goodbye (and good
              riddance) to worrying about any overage charges.
              <br />
              Check the Cox deals and promotions to see if there are ways to
              save a few bucks.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(9)}>
                <span>{faq === 9 ? "-" : "+"}</span>What is the fastest internet
                speed that Cox offers?
              </h3>

              <div className={`faq-content ${faq === 9 ? "show" : ""}`}>
                <p>
                  Go Beyond Fast is Cox’s fastest internet speed at 2,000 Mbps,
                  perfect for people working from home or who live with multiple
                  users who stream, play video games, or video call daily.
                  <br />
                  This option has the speed to power several devices at once,
                  and lets you stream 4K movies while downloading several more
                  or play an online game while chatting via video.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"9"}
            title={"What is the fastest internet speed that Cox offers?"}
            cssClass={"faq-content"}
          >
            <p>
              Go Beyond Fast is Cox’s fastest internet speed at 2,000 Mbps,
              perfect for people working from home or who live with multiple
              users who stream, play video games, or video call daily.
              <br />
              This option has the speed to power several devices at once, and
              lets you stream 4K movies while downloading several more or play
              an online game while chatting via video.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(10)}>
                <span>{faq === 10 ? "-" : "+"}</span> Can I watch Cox DVR
                recordings on my phone?
              </h3>
            </div>
          </div> */}
          <Accordion
            id={"10"}
            title={" Can I watch Cox DVR recordings on my phone?"}
            cssClass={"faq-content"}
          ></Accordion>
        </div>
      </div>

      <div className="section endnote cox-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Methodology:</h4>
          <p>
            To determine the capabilities of Cox internet plans, we tested
            different internet plans on devices including TVs, iPhones,
            Androids, and tablets. In some homes, we tested on multiple products
            simultaneously to ensure download speeds when numerous users are
            enjoying the service all at once. We also explored Cox’s internet
            plans and packages to give you the most up-to-date information about
            pricing and features. We used data from our annual customer service
            satisfaction survey to present star ratings to help decision-making.
            You can learn more about our process on our
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
            page.
          </p>
          <h4>Related articles:</h4>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Cox Overview</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Cox TV Review</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Cox Channel Lineup</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Cox Bundles Review</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default CoxInternetReview;
