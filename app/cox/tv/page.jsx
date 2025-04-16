// import React, { useState } from "react";
import "./cox-tv.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { coxNavLinks } from "../../assets/data/navLinks/coxNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import coxtvgirl from "../../assets/images/coxtvgirl.png";
import star from "../../assets/images/star.png";
import coxmark from "../../assets/images/coxmark.png";
import coxlogo from "../../assets/images/coxlogo.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import coxtvchannels from "../../assets/images/coxtvchannels.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Cox Cable TV Plans: Packages, Pricing, And More"
};

const CoxTv = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: coxlogo,
      rating: "(3.95/5)",
      starImg: star,
      desc: "Excellent",
      buttonText: "compare plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: coxtvgirl,

    cardsStrip: [
      {
        subtitle: "Channel count:",
        title: "75–250+",
        icon: coxmark,
      },
      {
        subtitle: "DVR storage:",
        title: "Up to 1,000 hrs.",
        icon: coxmark,
      },
      {
        subtitle: "Price:",
        title: "$53.00–$138.00",
        icon: coxmark,
      },
      {
        subtitle: "Contract:",
        title: "12 mos.",
        icon: coxmark,
      },
    ],

    tableData: [
      {
        head: [" ", " ", " ", " ", " ", " "],

        body: [
          {
            content: [" ", " ", " ", " ", " ", " "],
            linkPath: "# ",
          },
        ],
      },
    ],

    bottomDesc: "",
  };

  let packageTableDataTvPlansAndPrice = [
    {
      head: ["Package", "Price", "Channel count", "Details"],

      body: [
        {
          content: ["1.", "Cox Contour TV Starter", "$53.00/mo.", "75+"],
          linkPath: "#",
        },
        {
          content: ["2.", "Contour TV Preferred", "$98.00/mo.", "170+"],
          linkPath: "#",
        },
        {
          content: ["3.", "Contour TV Ultimate", "$146.00/mo.", "170+"],
          linkPath: "#",
        },
        {
          content: ["4.", "Contour TV Ultimate", "$139.00/mo.", "250+"],
          linkPath: "#",
        },
      ],
    },
  ];

  let packageTableDataInternetPackages = [
    {
      head: [
        "Package",
        "Price",
        "Channel count",
        "Download speeds up to",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Go Faster + Contour TV Preferred",
            "$168.99/mo.*",
            "170+",
            "250 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Go Even Faster + Contour TV Preferred",
            "$98.00/mo.",
            "170+",
            "500 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Go Super Fast + Contour TV Preferred",
            "$198.99/mo.†",
            "170+",
            "1,000 Mbps",
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
    <div className="cox-tv">
      {/* <SubNav links={coxNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Cox Cable TV Plans: Packages, Pricing, And More
          </h2>
          <p className="sect-desc">
            We've spent hundreds of hours examining Cox's TV packages to see if
            the channel lineups are worth the steep price tags.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-cox-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Are Cox TV plans good?</h4>
          <p>
            We think Cox TV plans aren’t very good for most folks. In a
            nutshell, your monthly bill will be higher and your channel lineup
            won’t be as robust compared to most other
            <span className="link">
              <Link href={"#"}>TV service providers.</Link>
            </span>
            <br />
            If the high price tag and mediocre channel lineups don’t scare you
            away, Cox cable TV does offer excellent equipment and features and
            cheap premium add-ons.
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
                  <td>Excellent DVR</td>
                  <td>High prices</td>
                </tr>
                <tr>
                  <td>Inexpensive add-on packages</td>
                  <td>Limited channel counts</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Limited standalone TV options</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Find out if Cox TV is available in your area"}
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
          <Link href={"#"}>Cox Deals and promotions </Link>
          <Link href={"#"}>Cox TV plans</Link>
          <Link href={"#"}>Cox TV and internet bundles</Link>
          <Link href={"#"}>Cox TV equipment and features</Link>
        </div>
      </div>

      <div className="section cox-deals-and-promotions">
        <div className="head">
          <h2 className="sect-heading">
            Cox cable TV <span> deals and promotions </span>
          </h2>
          <p className="sect-desc">
            Cox offers term agreements, not contracts, so it’s easy to make
            changes to your packages without incurring extra fees. You can also
            cancel your Cox service within 30 days without being charged an
            early-cancellation fee.
            <br />
            Currently, Cox has a few deals and promotions like free Peacock with
            select plans. Check out our Cox Deals and Promotions page for the
            latest on freebies, low-income discounts, and more.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} alt="mark" className="mark" />
          <h4>Our Cox TV experience</h4>
          <br />
          <p>
            Our Cox TV tester has Contour TV Ultimate at home. Here’s what they
            think of it:
            <br />
            “The channel lineup really does have something for everyone. I get
            all the lifestyle channels that I love, like AMC, IFC, and
            Investigation Discovery—known by fans simply as ID. Other members of
            the household get their goodies, too—it’s packed with sports
            channels and kids content. We take full advantage of the premium
            movie channels, like STARZ®.”
          </p>
        </div>
      </div>

      <div className="section cox-plans-and-pricing">
        <div className="head">
          <h2 className="sect-heading">
            Cox <span> plans and pricing </span>
          </h2>
          <p className="sect-desc">
            Cox’s Contour TV Preferred plan gives you a decent range of popular
            cable networks, even if the 170+ channel count is a bit misleading
            (more on that in a minute). If you’re looking for more (a likely
            case), we recommend Contour TV Preferred Plus, which, on top of its
            170+ channels, includes premium channels like CINEMAX®, Max
            (formerly HBO Max), SHOWTIME®, and STARZ®.
            <br />
            Unfortunately, Cox doesn’t include Contour TV Preferred Plus in its
            bundles, but there are a number of Cox bundles to choose from if you
            are going to pair your TV with internet service.
            <br />
            Currently, Contour TV Ultimate has even more channels for less money
            than Contour TV Preferred Plus, so we’d recommend grabbing Ultimate
            while this deal lasts. No, it’s not the cheapest option around these
            days, but if you love a lot of viewing options, Contour TV Ultimate
            has you covered.
          </p>
        </div>
        <PackageTable item={packageTableDataTvPlansAndPrice} />
        <br />
        <p className="below-table">
          * 1 Year Term Agreement. Data effective as of post date. Offers and
          availability may vary by location and are subject to change.
        </p>
        <div className="package-table-container channels">
          <h4>Cox TV channel lineups and equipment</h4>
          <br />
          <p>
            Cox cable TV packages are expensive, but there’s more to the story
            than just high costs.
            <br />
            A word about Cox channel lineups: Cox TV packages are inflated with
            local TV stations, shopping networks, and a boatload of Music Choice
            “radio” channels (50 to be exact).
            <br />
            So while Contour TV Preferred offers a decent array of cable
            staples, the Contour TV Starter package is a complete
            non-starter—you’d be better off buying an over-the-air antenna than
            paying Cox for channels you can easily get free elsewhere.
            <br />
            All four plans include your first HD receiver at no charge
            (additional boxes are $10 each). Since Cox TV plans are already
            expensive, these additional fees will really jack up your monthly
            payment.
            <br />
            That’s why we recommend passing on Cox Contour TV packages and going
            with a better TV service provider like DISH Network or Spectrum.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} alt="quotationsIcon" className="mark" />
          <h4>Cox TV plans not cutting it?</h4>
          <br />
          <p>
            Check out our reviews of the Best TV Service Providers and Best Live
            TV Streaming Services to see some pretty solid alternatives to Cox.
          </p>
        </div>
      </div>

      <div className="section cox-internet-packages">
        <div className="head">
          <h2 className="sect-heading">
            Cox <span> TV and internet packages </span>
          </h2>
          <p className="sect-desc">
            Cox offers some impressive internet download speeds, but you’ll be
            stuck with a less-than-impressive TV plan. Spectrum and Verizon Fios
            will get you better channel lineups for less money, for example.
            <br />
            That said, Contour TV Preferred does give you most of the popular
            channels (which can be built upon with Cox’s various add-on channel
            packages—if you want to spend even more than $200 a month) and
            plenty of internet speed (500 Mbps) to handle a household with
            multiple surfers and streamers.
            <br />
            To learn more about Cox TV and internet bundles, check out our
            comprehensive review, or skip the expensive TV plans altogether and
            bone up on standalone Cox cable internet plans.
          </p>
        </div>
        <PackageTable item={packageTableDataInternetPackages} />
        <br />
        <p className="below-table">
          *No annual contract or cancellation fees. **for 12 mos. No annual
          contract. † for 12 mos. w/ 1-yr. term agreement. Data effective as of
          post date. Offers and availability may vary by location and are
          subject to change.
        </p>
      </div>

      <div className="section cox-cable-tv-equipment">
        <div className="head">
          <h2 className="sect-heading">
            Cox cable TV <span> equipment and features </span>
          </h2>
          <p className="sect-desc">
            If you made it this far in our review of Cox cable TV, you’re
            probably okay with the high prices. While we don’t love the costs of
            Cox service, we do think Cox TV equipment and features are pretty
            dope for premium TV lovers.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Cox Contour DVR</h4>
          <br />
          <p>
            The Cox Contour DVR is one of the best DVRs on the market. If you
            want high-quality DVR service, Cox has three tiers that cover the
            needs of most TV fans:
          </p>
          <ul>
            <li>
              · Record up to 2 shows simultaneously and store 250 hours of HD
              content: $10/mo.
            </li>
            <li>· Record up to 6 shows and store 500 hours: $20/mo.</li>
            <li>
              · Record up to 24 shows and store up to 1,000 hours: $30/mo.
            </li>
          </ul>
          <p>
            Most people will be happy with the first or second tier. As for the
            third one, it’s only for hardcore TV lovers because, while we’re
            totally into 1,000 hours of HD storage, we can’t imagine ever
            finding 24 things to watch at the same time.
            <br />
            As for the other hardware, the Contour 2 Voice Remote allows you to
            search for all of your favorite shows at the press of a button, and
            the microphone is sensitive enough to pick up your voice without
            repeated shouting. This may seem like a low bar, but we’re tired of
            struggling to get the attention of Siris and Alexas and Okay
            Googles.
            <br />
            Again, the prices are high, but the quality, in this case, is good.
            Check out our full review of the Cox Contour DVR for more details.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Cox Contour app</h4>
          <br />
          <p>
            The Cox Contour app is also a nice feature for Cox TV subscribers.
            You can catch up to 150 live channels on the go and download a lot
            of content for offline viewing (like on an airplane or camping
            trip).
            <br />
            To get more of the deets, check out our comprehensive review of the
            Cox Contour app.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Cox On Demand</h4>
          <br />
          <p>
            Not only will you get live TV with your Cox TV plan, but you’ll have
            access to over 150,000 on-demand shows and movies. Some of those
            you’ll have to rent, but that’s a whole lotta entertainment (more
            than Netflix and Amazon Prime Video by our count) baked into your TV
            bill.
            <br />
            To check out what’s on Cox On Demand, read our full review.
          </p>
          <br />
          <Image src={coxtvchannels} alt="coxtvchannels" />
          <br />
          <p className="below-table">
            Testing the Cox channel guide on a laptop computer. Image credit:
            CableTV.com
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Are Cox TV packages worth it? </span>
          </h2>
          <p className="sect-desc">
            Cox’s TV service is standard-issue cable fare: it covers the basics,
            but if you want more, it’ll cost you—Cox TV prices are a little on
            the high side to begin with. With prices on the higher side, you’ll
            also want to be aware of additional fees on our Cox Hidden Costs
            page. We wouldn’t recommend Cox as a standalone TV provider; bundles
            are the smarter way to go with this company. You’ll get excellent
            internet service, which you can use to supplement your cable-channel
            selection with streaming TV services like Netflix and Hulu.
            <br />
            Are you ready to sign up with Cox? You can get Cox TV now or if
            you’re still deciding, read our full reviews on Cox internet and Cox
            bundles too.
            <br />
            We also have the full Cox channel lineup here.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>view cox plans</Link>
        </div>
      </div>

      <div className="section cox-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Cox TV </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How much is Contour TV a
                month?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>Cox offers three Contour TV plans.</p>
                <div className="custom-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Package</th>
                        <th>Price</th>
                        <th>Channel count</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Contour TV Preferred</td>
                        <td>$98.00/mo.</td>
                        <td>170+</td>
                      </tr>
                      <tr>
                        <td>Contour TV Preferred Plus</td>
                        <td>$146.00/mo.</td>
                        <td>170+</td>
                      </tr>
                      <tr>
                        <td>Contour TV Ultimate</td>
                        <td>$138.00/mo.</td>
                        <td>250+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"How much is Contour TV a month?"}
            cssClass={"faq-content"}
          >
            <p>Cox offers three Contour TV plans.</p>
            <div className="custom-table">
              <table>
                <thead>
                  <tr>
                    <th>Package</th>
                    <th>Price</th>
                    <th>Channel count</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Contour TV Preferred</td>
                    <td>$98.00/mo.</td>
                    <td>170+</td>
                  </tr>
                  <tr>
                    <td>Contour TV Preferred Plus</td>
                    <td>$146.00/mo.</td>
                    <td>170+</td>
                  </tr>
                  <tr>
                    <td>Contour TV Ultimate</td>
                    <td>$138.00/mo.</td>
                    <td>250+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What channels are included
                in Cox TV Starter plan?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Cox’s basic cable plan—which costs $53 a month—is a good way
                  to go for those who don’t want to miss out on content from
                  local stations. In addition to ABC, CBS, NBC, and FOX, here
                  are some of the other channels this no-frills plan includes:
                </p>
                <ul>
                  <li> · PBS</li>
                  <li> · HSN</li>
                  <li> · QVC</li>
                  <li> · C-Span</li>
                  <li> · ION</li>
                  <li> · Univision</li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"What channels are included in Cox TV Starter plan?"}
            cssClass={"faq-content"}
          >
            <p>
              Cox’s basic cable plan—which costs $53 a month—is a good way to go
              for those who don’t want to miss out on content from local
              stations. In addition to ABC, CBS, NBC, and FOX, here are some of
              the other channels this no-frills plan includes:
            </p>
            <ul>
              <li> · PBS</li>
              <li> · HSN</li>
              <li> · QVC</li>
              <li> · C-Span</li>
              <li> · ION</li>
              <li> · Univision</li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Can I watch Cox TV on
                mobile devices?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  You can watch live and on-demand Cox cable TV content through
                  the Contour app, available for iOS and Android on phones,
                  tablets, and computers. You can also use network-specific apps
                  for free with your Cox account info.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"Can I watch Cox TV on mobile devices?"}
            cssClass={"faq-content"}
          >
            <p>
              You can watch live and on-demand Cox cable TV content through the
              Contour app, available for iOS and Android on phones, tablets, and
              computers. You can also use network-specific apps for free with
              your Cox account info.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does Cox TV offer add-on
                channel packages?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  In addition to premium channels like HBO® and SHOWTIME®, Cox
                  offers five multi-channel packages: Variety Pack (15
                  entertainment channels for $12/mo.), Movie Pack (10
                  film-centric channels for $12/mo.), Sports & Information Pack
                  (14 news and sports channels for $10/mo.), Sports Pack 2 (nine
                  more sports channels for $10/mo.), and Latino Pack (10 Spanish
                  channels for $10/mo.).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={"Does Cox TV offer add-on channel packages?"}
            cssClass={"faq-content"}
          >
            <p>
              In addition to premium channels like HBO® and SHOWTIME®, Cox
              offers five multi-channel packages: Variety Pack (15 entertainment
              channels for $12/mo.), Movie Pack (10 film-centric channels for
              $12/mo.), Sports & Information Pack (14 news and sports channels
              for $10/mo.), Sports Pack 2 (nine more sports channels for
              $10/mo.), and Latino Pack (10 Spanish channels for $10/mo.).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Does the Cox Contour
                DVR/receiver include streaming apps?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Cox Communications’s Contour DVR/receiver comes with several
                  streaming apps installed, including Netflix, Amazon Prime
                  Video, Pandora, YouTube, Tubi, and a few others. Most require
                  internet service (because streaming) and will count toward
                  your internet plan’s data usage.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"Does the Cox Contour DVR/receiver include streaming apps?"}
            cssClass={"faq-content"}
          >
            <p>
              Cox Communications’s Contour DVR/receiver comes with several
              streaming apps installed, including Netflix, Amazon Prime Video,
              Pandora, YouTube, Tubi, and a few others. Most require internet
              service (because streaming) and will count toward your internet
              plan’s data usage.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>How much is basic cable with
                Cox?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  TV Starter is the cheapest of Cox’s TV packages, coming in at
                  $53 a month. This no-frills option doesn’t include premium
                  channels, but it gets you connected to local ABC, CBS, NBC,
                  CW, Fox, and PBS affiliates offering plenty of content. It
                  also features C-SPAN, more than 50 music channels, and
                  shopping destinations like HSN and QVC.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"How much is basic cable with Cox?"}
            cssClass={"faq-content"}
          >
            <p>
              TV Starter is the cheapest of Cox’s TV packages, coming in at $53
              a month. This no-frills option doesn’t include premium channels,
              but it gets you connected to local ABC, CBS, NBC, CW, Fox, and PBS
              affiliates offering plenty of content. It also features C-SPAN,
              more than 50 music channels, and shopping destinations like HSN
              and QVC.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(7)}>
                <span>{faq === 7 ? "-" : "+"}</span>Does Cox require a cable box
                for every TV?
              </h3>

              <div className={`faq-content ${faq === 7 ? "show" : ""}`}>
                <p>
                  A Cox basic box, wired HD Contour box, or wireless 4K Contour
                  box is needed for each TV used to enjoy your favorite
                  programs. The first box is included with your Cox TV package.
                  It is $4 a month for each additional Basic Box and $10 for
                  each additional Contour Box.
                  <br />
                  To give you the best information so you can make the right
                  decision when it comes to cable TV packages, we’re not the
                  biggest fans of basic cable TV packages. The cost doesn’t
                  equal the value. In most cases, you get local channels and not
                  much more.
                  <br />
                  If a simple package is what you want—and local channels are a
                  must—go with a cable TV antenna. We’ve researched to help you
                  find the best antenna to meet your needs.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={"Does Cox require a cable box for every TV?"}
            cssClass={"faq-content"}
          >
            <p>
              A Cox basic box, wired HD Contour box, or wireless 4K Contour box
              is needed for each TV used to enjoy your favorite programs. The
              first box is included with your Cox TV package. It is $4 a month
              for each additional Basic Box and $10 for each additional Contour
              Box.
              <br />
              To give you the best information so you can make the right
              decision when it comes to cable TV packages, we’re not the biggest
              fans of basic cable TV packages. The cost doesn’t equal the value.
              In most cases, you get local channels and not much more.
              <br />
              If a simple package is what you want—and local channels are a
              must—go with a cable TV antenna. We’ve researched to help you find
              the best antenna to meet your needs.
            </p>
          </Accordion>
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
            To find the best Cox TV plans, we examined the channel lineups of
            each Cox plan and took a look at the standalone price of every
            option, including the channel lineups and add-on package options of
            each. We also compared Cox standalone plans and bundle packages.
            <br />
            We assessed how Cox ranks in price and features when put
            head-to-head with cable TV competitors and compared it with what you
            get when you bundle Cox TV with an internet plan. We also drew star
            ratings from our annual customer satisfaction survey. You can learn
            more about our process on our How We Rank page.
          </p>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Cox Overview | Cox Channel Lineup | Cox Internet | Cox
          Bundles | Cox Customer Service
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default CoxTv;
