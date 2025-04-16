// import React, { useState } from "react";
import "./dish-review.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { dishNavLinks } from "../../assets/data/navLinks/dishNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import dishphone from "../../assets/images/dishphone.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import dish from "../../assets/images/dish.png";
import dotted from "../../assets/images/dotted.png";
import dishcross from "../../assets/images/dishcross.png";
import mark from "../../assets/images/mark.png";
import dishhopper from "../../assets/images/dishhopper.png";
import dishoppertwo from "../../assets/images/dishoppertwo.png";
import remoteone from "../../assets/images/remoteone.png";
import remotetwo from "../../assets/images/remotetwo.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
import quotations from "../../assets/images/quotations.svg";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "DISH Network Review 2024: Plans, Pricings, And More"
};

const DishReview = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: dish,
      rating: "(4.5/5)",
      starImg: star,
      desc: "Editor's choice",
      buttonText: "Compare Plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: dishphone,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "Xfinity",
        icon: dishcross,
      },
      {
        subtitle: "Channel count:",
        title: "DISH",
        icon: dishcross,
      },
      {
        subtitle: "Price:",
        title: "$79.99–$109.99/mo.",
        icon: dishcross,
      },
      {
        subtitle: "DVR:",
        title: "500 hrs.",
        icon: dishcross,
      },
    ],

    tableData: [
      {
        head: ["Top plans", "Pricing", "Channels", "DVR", "Details"],

        body: [
          {
            content: [
              "1.",
              "America’s Top 200",
              "$99.99/mo.",
              "240+",
              "500 hrs.",
            ],
            linkPath: "#",
          },

          {
            content: [
              "2.",
              "America’s Top 120+",
              "$94.99/mo.",
              "190+",
              "500 hrs.",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "Data as of post date. Offers and availability may vary by location and are subject to change.",
  };
  let packageTableData = [
    {
      head: ["Package", "Price*", "Channels", "DVR*", , "Details"],

      body: [
        {
          content: ["1.", "Flex Pack", "$57.99/mo.", "50+", "500 hrs."],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "America’s Top 120 ",
            "$79.99/mo. ",
            "190 ",
            "500 hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "America’s Top 120+ ",
            "$94.99/mo. ",
            "190+ ",
            "500 hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "America’s Top 200 ",
            "$99.99/mo. ",
            "240+ ",
            "500 hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "America’s Top 250 ",
            "$109.99/mo. ",
            "290+ ",
            "500 hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "6.",
            "America’s Everything Pack ",
            "$137.99/mo. ",
            "290+ (incl. premiums) ",
            "500 hrs.",
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
    <div className="dish-review">
      {/* <SubNav links={dishNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            DISH Network Review 2024: Plans, Pricings, And More
          </h2>
          <p className="sect-desc">
            For the third straight year, our TV experts gave DISH our Editor's
            Choice Awards for best overall TV provider and best TV provider for
            families—learn why in this DISH review.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-dish-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is DISH Network any good?</h4>
          <p>
            For the third straight year, DISH Network is our pick for the best
            overall TV provider and the best TV provider for families. You’ll
            like its prices, three-year price guarantee, parental controls, and
            powerful Hopper 3 DVR, which beats the poofy pants off competitor
            DIRECTV’s Genie. <br />
            What’s not so good about DISH Network? Well, it has limited bundling
            options—but, overall, we think you and your family will be happy
            with DISH TV prices and packages. We tell you more in this DISH
            review.
          </p>
          <h4>DISH Network TV pros and cons</h4>
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
                  <td>3-year price guarantee</td>
                  <td>DVR fees</td>
                </tr>
                <tr>
                  <td>Hopper 3 DVR</td>
                  <td>Limited internet/phone bundling options</td>
                </tr>
                <tr>
                  <td>Best kids programming </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Best parental controls </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Best parental controls </td>
                  <td></td>
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
          <Link href={"#"}>DISH deals and promotions </Link>
          <Link href={"#"}>DISH vs. the competition </Link>
          <Link href={"#"}>DISH TV plans and pricing</Link>
          <Link href={"#"}>DISH channels </Link>
          <Link href={"#"}>DISH equipment, specs, and features </Link>
        </div>
      </div>

      <div className="endnote is-dish-good">
        <div className="endnote-container">
          <Image src={dotted} alt="dotted" />
          <h4>DISH Network deals and promotions</h4>
          <p>
            DISH has more deals and promotions than we tend to see with other TV
            providers. Some of these promos are automatic, but most are under
            the “Special Offers” section (scroll to the middle of the checkout
            page)—just check the box to get the deal.
          </p>
          <ul>
            <li>
              · <b>Free installation:</b> DISH will waive the $199 installation
              fee for new and qualifying customers.
            </li>
            <li>
              · <b>DISH senior discount:</b> There are no DISH Network packages
              for seniors, but when customers aged 55 or older{" "}
              <span className="link">
                <Link href={"#"}> sign up for DISH TV packages,</Link>
              </span>{" "}
              they get free installation, one free movie rental, six free months
              of equipment protection, and upgraded identity theft protection.
            </li>
            <li>
              · DISH military discount: When you{" "}
              <span className="link">
                <Link href={"#"}>sign up for DISH TV service,</Link>
              </span>{" "}
              active military, veterans, and first responders get one free movie
              rental plus the eight-channel Stars & Stripes channel pack
              (regularly $10 a month) at no additional cost.
            </li>
            <li>
              · <b>DISH discounts for healthcare workers and teachers:</b>{" "}
              Healthcare workers and teachers get one free movie rental plus the
              12-channel Heartland channel pack (regularly $6 a month) at no
              extra charge when they{" "}
              <span className="link">
                <Link href={"#"}>sign up for DISH.</Link>
              </span>
            </li>
            <li>
              · <b>Free premium channels:</b> All DISH Network packages come
              with three free months of SHOWTIME® and the DISH Movie Pack™.
            </li>
            <li>
              · Movie on Us: You’ll get one free movie rental per month for 24
              months just by checking the box when you order DISH.
            </li>
            <li>
              · <b>eAutoPay discount: </b>With all packages, DISH gives you a
              $5/mo. discount for using paperless billing.
            </li>
          </ul>
          <p>
            To see more money-saving offers from DISH check out our{" "}
            <sapn className="link">
              <Link href={"#"}>DISH deals page.</Link>
            </sapn>
          </p>
        </div>
      </div>

      <CTA
        heading={"Find out if DISH bundles are available in your area"}
        desc={"Enter your zip code below to see is DISH in your area."}
      />

      <div className="section dish-compare-networks">
        <div className="head">
          <h2 className="sect-heading">
            Compare DISH Network <span>plans and pricing</span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>
        <div className="package-table-container channels">
          <PackageTable item={packageTableData} />
          <p className="below-table">
            Data as of post date. Offers and availability may vary with location
            and are subject to change. Packages for existing customers only. *
            Not included in packages. Requires additional free of $10/mo.
          </p>
          <p className="after-heading">
            The table above shows the four core{" "}
            <span className="link">
              <Link href={"#"}> Dish </Link>
            </span>{" "}
            packages (America’s Top 120 through America’s Top 250) along with
            two packages available only to existing customers. <br />
            Among the core four, we recommend America’s Top 120+ ($94.99 a
            month, 190+ channels) to sports fans for its abundance of sports
            channels.
            <br /> If you’re looking for the best deal, America’s Top 200
            ($99.99 a month, 240+ channels) has the most channels for the best
            price. Some of the extra channels you’ll get include Hallmark
            Channel, Hallmark Drama, Hallmark Movies & Mysteries, GOLF Channel,
            Telemundo, UniMás, Sundance, and Vice TV. And you’ll still get the
            Multi-Sports Pack free.
            <br />
            If you’re a current DISH customer deciding whether to renew your
            contract or{" "}
            <span className="link">
              <Link href={"#"}>switch providers</Link>
            </span>
            , there are two DISH packages for existing customers.
            <br />
            The DISH Flex Pack gives you 50 popular channels for $57.99 a month,
            then you can customize your package with add-on packs (priced
            $6.00–$15.00 a month) that’ll give you either local, kids, movie, or
            premium channels.
            <br />
            Another package available only to existing DISH customers is the
            America’s Everything Pack. It has everything in America’s Top 250
            plus premium channels like{" "}
            <span className="link">
              <Link href={"#"}>SHOWTIME®</Link>
            </span>
            , FLIX®,{" "}
            <span className="link">
              <Link href={"#"}>STARZ®</Link>
            </span>
            , and THE MOVIE CHANNEL™ for $137.99 a month.
          </p>
          <hr />
          <div className="btn">
            <Link href={"#"}>View DISH Plans</Link>
          </div>
        </div>

        <div className="package-table-container channels">
          <h4>DISH channels</h4>
          <p className="after-heading">
            DISH TV packages come with up to 290+ channels, including many of
            the most-watched cable channels, tons of kids and family channels,
            and almost as many sports channels as DIRECTV. DISH also carries
            several affordable premium movie channels and add-on packs. That’s a
            lot of information to cover in this DISH review, so we’ve compiled a
            separate article for you: our{" "}
            <span className="link">
              <Link href={"#"}>DISH Channel Lineup Guide.</Link>
            </span>
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={mark} className="mark" alt="mark" />
          <h4>¡DishLATINO!</h4>
          <p className="after-heading">
            Looking for more Spanish-language channels? Well, DishLATINO has
            entire packages with the entertainment, sports, family, and
            lifestyle channels you and your family want. For more information,
            read our DishLATINO reviews:
          </p>
        </div>
      </div>

      <div className="section dish-netwrok-equipment">
        <div className="head">
          <h2 className="sect-heading">
            DISH Network <span>Equipment, Specs, and Features</span>
          </h2>
          <p className="sect-desc">
            So, other than packages, pricing, contracts, and stuff—what else
            stands out about DISH? Well, you’ll have a tough time finding a
            better DVR/receiver than the{" "}
            <span className="link">
              <Link href={"#"}>Hopper 3.</Link>
            </span>{" "}
            Also, DISH has excellent whole-home TV options like the Joey and a
            mobile app,{" "}
            <span className="link">
              <Link href={"#"}>DISH Anywhere,</Link>
            </span>
            that lets you take pretty much all your DISH content wherever you
            go.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DISH DVRs and receivers</h4>
          <p className="after-heading">
            There are three DISH Hopper DVRs, but you’ll hear more about the
            DISH Hopper 3 DVR because it’s frequently called the best in the
            industry. DISH also offers other receivers like the Joeys (for
            multiroom TV service) and the Wally (which goes with the DISH
            Tailgater (sold separately) for mobile satellite TV service).
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th> </th>
                  <th>DISH device</th>
                  <th>Price</th>
                  <th>Leased receiver fee (due at signup)</th>
                  <th>Storage</th>
                  <th>Simultaneous recordings</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1. </td>
                  <td> DISH Hopper 3 DVR</td>
                  <td>$10.00/mo. </td>
                  <td>$50.00 </td>
                  <td>500 hrs. </td>
                  <td>16 </td>
                </tr>
                <tr>
                  <td>2. </td>
                  <td> DISH Hopper Duo DVR</td>
                  <td> $5.00/mo.</td>
                  <td> N/A</td>
                  <td> 125 hrs.</td>
                  <td> 2</td>
                </tr>
                <tr>
                  <td>3. </td>
                  <td>DISH Wally </td>
                  <td>$5.00/mo. </td>
                  <td>N/A </td>
                  <td>N/A </td>
                  <td> N/A</td>
                </tr>
                <tr>
                  <td>4. </td>
                  <td>DISH Joey receiver </td>
                  <td>$5.00/mo. </td>
                  <td>$0 for first three, then $50.00 each </td>
                  <td> N/A</td>
                  <td>N/A </td>
                </tr>
                <tr>
                  <td> 5.</td>
                  <td>DISH Joey 4K receiver </td>
                  <td> $5.00/mo.</td>
                  <td>$50.00 each </td>
                  <td> N/A</td>
                  <td> N/A</td>
                </tr>
                <tr>
                  <td>6. </td>
                  <td>DISH Wireless Joey receiver </td>
                  <td>$5.00/mo. </td>
                  <td>$25.00 each </td>
                  <td> N/A</td>
                  <td>N/A </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="below-table">
            Data as of post date. Offers and availability may vary with location
            and are subject to change.
          </p>
        </div>
        <div className="package-table-container channels">
          <div className="container">
            <div className="column">
              <h4>DISH Hopper 3</h4>
              <p className="after-heading">
                Some would say the{" "}
                <span className="link">
                  <Link href={"#"}>Hopper 3</Link>
                </span>{" "}
                is overpowered. After all, how many other cable or satellite TV
                providers’ DVRs can do all of the things below?
              </p>
              <br />
              <ul>
                <li>· Record up to 16 channels simultaneously</li>
                <li>· Power up to 7 TVs (with auxiliary Joeys)</li>
                <li>· Store up to 500 hours of HD DVR recordings</li>
                <li>· Pair with Bluetooth speakers or headphones</li>
                <li>· Display 4K resolution</li>
                <li>
                  · Allow you to watch 4 shows or games at once with quad
                  split-screen
                </li>
                <li>
                  · Built-in Netflix, Amazon Prime Video, and YouTube (separate
                  subscriptions required)
                </li>
              </ul>
              <p className="after-heading">
                If you don’t feel the need for this much power, or if you don’t
                wanna spend $10 a month for a DVR, there are two cheaper, more
                modest options.
              </p>
            </div>
            <div className="column">
              <Image src={dishhopper} alt="dishhopper" className="dishhopper" />
              <p className="below-table">
                Top to bottom: DISH voice remote, DISH Joey, DISH Hopper 3 DVR.
              </p>
            </div>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>DISH Hopper Duo</h4>
          <p className="after-heading">
            The Hopper Duo is DISH’s basic model DVR. It’s still available, and
            offered to households with DISH service on fewer than three TVs, and
            it costs $5 a month.
            <br />
            The Duo can record two channels simultaneously (when paired with an
            auxiliary Joey receiver, which we cover in an upcoming section) and
            store up to 125 hours of HD recordings. It also has Alexa
            compatibility, built-in Netflix (sorry, no Prime or YouTube), and
            Bluetooth—but no 4K support.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DISH Wally</h4>
          <p className="after-heading">
            An old-school receiver with no recording capability, the Wally can
            be used at home or with DISH outdoor TV equipment like the Tailgater
            and Playmaker (sold separately). The Wally is $5 per month.
          </p>
        </div>
        <div className="package-table-container channels">
          <div className="container">
            <div className="column">
              <h4>DISH Joey</h4>
              <p className="after-heading">
                If you have a TV in more than one room, you’ll want a Joey, a
                small receiver powered by a Hopper or Wally. It gives you all
                the HD functionality of the main DVR/receiver but in a different
                room—kind of a “satellite” to the satellite service.
                <br />
                DISH has three types of Joeys:
              </p>
              <br />
              <ul>
                <li>
                  · Joey: Connects to your TV by coaxial cable and is compatible
                  with the Hopper 3 and Hopper Duo
                </li>
                <li>
                  · 4K Joey: Supports 4K resolution and Bluetooth connectivity
                </li>
                <li>· Wireless Joey: Connects, as per the name, wirelessly</li>
              </ul>
            </div>
            <div className="column">
              <Image
                src={dishoppertwo}
                alt="dishhopper"
                className="dishhopper"
              />
            </div>
          </div>
          <p className="after-heading">
            Expect to pay $5 per month for each Joey, 4K Joey, or Wireless Joey
            you want. But beware of the leased receiver fees DISH charges at
            signup.
            <br />
            For standard Joeys, you’ll pay a $50 leased receiver fee if you
            choose more than three Joeys. Wireless Joeys have a $25 fee per
            device and 4K Joeys have a $50 fee per device—in both cases, you’re
            charged for every device, starting with the first one. So multiroom
            viewing with DISH can get expensive.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DISH Voice Remote</h4>
          <p className="after-heading">
            Hoppers and Joeys come with the{" "}
            <span className="link">
              <Link href={"#"}>DISH Voice Remote</Link>
            </span>
            , which features backlit keys (handy), a remote locator (even
            handier), and programmable shortcut keys (handiest of all). Remote
            models with built-in Google Assistant are also available.
            <br />
            In our tests, the remote’s voice recognition was about 95% accurate.
            It seemed to fail mostly due to human error, like when we mumbled,
            talked with our mouths full (how rude), or forgot to hold down the
            mic button.
          </p>
          <br />
          <br />
          <Image src={remoteone} alt="remoteone" className="remoteone" />
        </div>
        <div className="package-table-container channels">
          <h4>DISH Anywhere app</h4>
          <p className="after-heading">
            Finally, there’s the DISH Anywhere app for{" "}
            <span className="link">
              <Link href={"#"}>Android</Link>
            </span>{" "}
            and{" "}
            <span className="link">
              <Link href={"#"}>IOS</Link>
            </span>
            , which allows you to watch live, on-demand, and recorded content
            away from home. Bonus: the app can function as a remote for Hoppers
            and Joeys, and you can use DISH Anywhere to set and manage DISH’s
            top-notch parental controls—which is super handy for remotely
            controlling what the kiddies watch.
            <br />
            You can learn more about the app in our{" "}
            <span className="link">
              <Link href={"#"}>DISH Anywhere app guide.</Link>
            </span>
          </p>
          <br />
          <br />
          <Image src={remotetwo} alt="remotetwo" className="remotetwo" />
          <hr />
          <div className="btn">
            <Link href={"#"}>get dISH anywhere</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <Image src={mark} alt="mark" className="mark" />
          <h4>DISH Network bundles?</h4>
          <p className="after-heading">
            Although there is no such thing as DISH internet service, you can
            still bundle DISH Network satellite TV plans with high-speed
            internet from Frontier (assuming you live in Frontier’s service
            area). For more information—and to see if you can get Frontier
            internet where you live, read our{" "}
            <span className="link">
              <Link href={"#"}>DISH Internet review.</Link>
            </span>
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is DISH worth it?</span>
          </h2>
          <p className="sect-desc">
            Well, we wouldn’t call DISH our best overall TV provider and the
            best TV provider for families if it wasn’t worth it. But to
            reiterate our reasons: we love that DISH has transparent pricing
            guaranteed for two years, a ridiculously powerful DVR, a
            feature-rich mobile app, solid parental controls, almost as many
            sports channels as DIRECTV, and tons of deals and promotions. Plus,
            HBO is back—so DISH TV service is actually even better now. Go ahead
            and sign up.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>view dISH plans</Link>
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
                <span>{faq === 1 ? "-" : "+"}</span> How much does DISH cost?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>DISH TV pricing by package (new customers only):</p>
                <ul>
                  <li>
                    · America's Top 120: $79.99 a month for 190 channels. This
                    is the cheapest DISH package for new customers.
                  </li>
                  <li>
                    · America's Top 120+: $94.99 a month for 190+
                    channels-including more sports channels.
                  </li>
                  <li>
                    · America's Top 200: $99.99 a month for 240+ channels. This
                    is the package with the best value. America's Top 250:
                    $109.99 a month for 290+ channels.
                  </li>
                </ul>
                <p>
                  Current DISH customers that have completed their 2-year
                  contracts can access these packages:
                </p>
                <ul>
                  <li>
                    · Flex Pack: $57.99 a month for 50+ channels. This is the
                    cheapest DISH Network package for current customers.
                  </li>
                  <li>
                    · America's Everything Pack: $137.99 a month for 290+
                    channels-including free premium channels.
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" How much does DISH cost?"}
            cssClass={"faq-content"}
          >
            <p>DISH TV pricing by package (new customers only):</p>
            <ul>
              <li>
                · America's Top 120: $79.99 a month for 190 channels. This is
                the cheapest DISH package for new customers.
              </li>
              <li>
                · America's Top 120+: $94.99 a month for 190+ channels-including
                more sports channels.
              </li>
              <li>
                · America's Top 200: $99.99 a month for 240+ channels. This is
                the package with the best value. America's Top 250: $109.99 a
                month for 290+ channels.
              </li>
            </ul>
            <p>
              Current DISH customers that have completed their 2-year contracts
              can access these packages:
            </p>
            <ul>
              <li>
                · Flex Pack: $57.99 a month for 50+ channels. This is the
                cheapest DISH Network package for current customers.
              </li>
              <li>
                · America's Everything Pack: $137.99 a month for 290+
                channels-including free premium channels.
              </li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What is the cheapest DISH
                package?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  America's Top 120 is the cheapest DISH TV package. The package
                  includes 190 channels for $79.99 per month with a 2-year
                  service agreement. But if you're a current DISH customer,
                  you're eligible for the Flex Pack ($57.99 a month, 50+
                  channels).If you're wondering about the DISH Welcome Package,
                  it's no longer for sale.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" What is the cheapest DISH package?"}
            cssClass={"faq-content"}
          >
            <p>
              America's Top 120 is the cheapest DISH TV package. The package
              includes 190 channels for $79.99 per month with a 2-year service
              agreement. But if you're a current DISH customer, you're eligible
              for the Flex Pack ($57.99 a month, 50+ channels).If you're
              wondering about the DISH Welcome Package, it's no longer for sale.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Which is better, DIRECTV or
                DISH Network?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  DISH is better, offering more transparent pricing-including a
                  3-year price guarantee-plus superior DVR equipment and
                  parental controls. DIRECTV has a few more sports channels and
                  a 2-year price guarantee. For a more detailed comparison of
                  these two satellite TV providers, check out our DISH vs.
                  DIRECTV review.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Which is better, DIRECTV or DISH Network?"}
            cssClass={"faq-content"}
          >
            <p>
              DISH is better, offering more transparent pricing-including a
              3-year price guarantee-plus superior DVR equipment and parental
              controls. DIRECTV has a few more sports channels and a 2-year
              price guarantee. For a more detailed comparison of these two
              satellite TV providers, check out our DISH vs. DIRECTV review.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does DISH Network offer
                senior discounts?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  There is no DISH senior discount, but Dish55 is a DISH package
                  for seniors or, more accurately, DISH customers aged 55 and
                  older. It offers benefits like a free monthly movie rental and
                  channel pack discounts. To get Dish55, check the box under
                  "Special Offers" at checkout. Be ready to provide proof of
                  age.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Does DISH Network offer senior discounts?"}
            cssClass={"faq-content"}
          >
            <p>
              There is no DISH senior discount, but Dish55 is a DISH package for
              seniors or, more accurately, DISH customers aged 55 and older. It
              offers benefits like a free monthly movie rental and channel pack
              discounts. To get Dish55, check the box under "Special Offers" at
              checkout. Be ready to provide proof of age.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>Does DISH Network have
                hidden fees?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Common DISH fees include an early termination fee if you need
                  to end your service contract, local channel fees, equipment
                  fees (for the Hopper Duo, Hopper 3, Joeys, etc.), and late
                  payment charges.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"Does DISH Network have hidden fees?"}
            cssClass={"faq-content"}
          >
            <p>
              Common DISH fees include an early termination fee if you need to
              end your service contract, local channel fees, equipment fees (for
              the Hopper Duo, Hopper 3, Joeys, etc.), and late payment charges.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>How reliable is DISH
                Internet?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  DISH doesn't have its own internet service, so it partners
                  with providers like Frontier to offer TV and internet bundles.
                  Check out our DISH Internet guide to learn more about DISH's
                  internet options.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"How reliable is DISH Internet?"}
            cssClass={"faq-content"}
          >
            <p>
              DISH doesn't have its own internet service, so it partners with
              providers like Frontier to offer TV and internet bundles. Check
              out our DISH Internet guide to learn more about DISH's internet
              options.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: DISH Internet | DISH Channel Lineup | DISH Bundles | DISH
          Customer Service
        </p>
      </div>

      <div className="section endnote dish-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Methodology:</h4>
          <p>
            Our TV experts spend hundreds of hours watching and reading about
            DISH Network. For this DISH review, we compared it with other cable
            and satellite TV providers based on channels, pricing, features, and
            more. We then share our finding with our readers to help you in your
            search for TV service. For more information on how we work, check
            out ou
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
            page.
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>DISH vs. DIRECTV</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>DISH Hopper 3 vs. DIRECTV Genie</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>DIRECTV Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>DISH Anywhere app guide</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best TV Providers</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* <Newsletter /> */}
    </div>
  );
};

export default DishReview;
