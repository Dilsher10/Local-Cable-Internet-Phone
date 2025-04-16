// import React, { useState } from "react";
import "./direct-tv-genie.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { directtvNavLinks } from "../../assets/data/navLinks/directtvNavLinks";
import InnerPagesHeroThree from "../../components/inner-pages-hero-three/InnerPagesHeroThree";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import star from "../../assets/images/star.png";
import hoopergenie from "../../assets/images/hoopergenie.png";
import middleagemanstream from "../../assets/images/middleagemanstream.png";
import { GoArrowUpRight } from "react-icons/go";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import dotted from "../../assets/images/dotted.png";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";
import genie from "../../assets/images/genie.png";
import network from "../../assets/images/network.png";

export const metadata = {
  title: "Definitive DIRECTV GENIE Review"
};

const DirectTvGenie = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    column1: {
      logo: hoopergenie,
      rating: "(4.0/5)",
      starImg: star,
    },
    column2: {
      heading: "DIRECTV GENIE",
      listItems: [
        {
          text: [
            { text: "Price:  ", isLink: true, link: "/installation" },
            { text: "$15.00/mo.", isLink: false },
          ],
        },
        {
          text: [
            { text: "Storage", isLink: true, link: "/installation" },
            { text: "200 hrs. (Genie) or 450 hrs. (Genie 2)", isLink: false },
          ],
        },
        {
          text: [
            {
              text: "Simultaneous recordings:",
              isLink: true,
              link: "/installation",
            },
            { text: "5 (Genie) or 7 (Genie 2)", isLink: false },
          ],
        },
      ],
    },
    column3: {
      img: middleagemanstream,
    },
    column4: {
      link: "Compare to competitors",
      callback1: "view plans",
      callback2: " ",
      buttonIcon: <GoArrowUpRight className="upright-arrow-icon" />,
    },
  };
  let packageTableData = [
    {
      head: [
        "Package",
        "Price*",
        "Channels",
        "DVR storage",
        "Simultaneous recordings",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "ENTERTAINMENT All-Included",
            "$69.99/mo.",
            "165+",
            "200 hrs. (Genie) or 450 hrs. (Genie 2)",
            "5 (Genie) or 7 (Genie 2)",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "CHOICETM All-Included",
            "$84.99/mo.",
            "200+",
            "200 hrs. (Genie) or 450 hrs. (Genie 2)",
            "5 (Genie) or 7 (Genie 2)",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "ULTIMATE All-Included",
            "$114.99/mo.",
            "270+",
            "200 hrs. (Genie) or 450 hrs. (Genie 2)",
            "5 (Genie) or 7 (Genie 2)",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "PREMIERTM All-Included",
            "$159.99/mo.",
            "340+",
            "200 hrs. (Genie) or 450 hrs. (Genie 2)",
            "5 (Genie) or 7 (Genie 2)",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataCompetition = [
    {
      head: [
        "Device",
        "DVR cost",
        "HD storage",
        "Simultaneous recordings",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "DIRECTV Genie",
            "$15/mo. Advanced Receiver Service Fee",
            "200 hrs.",
            "5",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "DIRECTV Genie 2",
            "$15/mo. Advanced Receiver Service Fee",
            "450 hrs.",
            "7",
          ],
          linkPath: "#",
        },
        {
          content: ["3.", "DISH Hopper 3", "$10.00/mo.", "500 hrs.", "16"],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Cox Contour Record",
            "$13.50–$30.00/mo.",
            "250–1,000 hrs.",
            "2, 6, or 24",
          ],
          linkPath: "#",
        },
        {
          content: ["5.", "Xfinity X1", "$7.50–$8.50/mo.*", "150 hrs.", "6"],
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
    <div className="direct-tv-genie">
      {/* <SubNav links={directtvNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">Definitive DIRECTV GENIE Review 2024</h2>
          <p className="sect-desc">
            Our TV experts appreciate the power of DIRECTV's Genie DVRs—but not
            the cost.
          </p>
        </div>
        <InnerPagesHeroThree data={heroData} />
        <p className="sect-desc">
          Data as of post date. Offers and availability may vary by location and
          are subject to change.*for 24 months plus taxes and fees w/ 24-mo.
          agmt.; AutoPay and Paperless Bill req’d. Advanced Receiver Service Fee
          $15/mo. is extra and applies. CableTV.com uses paid Amazon links.
        </p>
      </div>
      <StickyHeader />

      <div className="endnote is-direct-tv-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            5-day free trial: Tired of cable and satellite TV but not quite sure
            if you wanna cut the cord? DIRECTV STREAM is a good streaming
            alternative for folks who want the look and feel of old-school TV
            without the installation requirements, equipment fees, and other
            headaches that come with cable.
          </p>
          <br />
          <h4>Is the DIRECTV Genie right for you?</h4>
          <p>
            DIRECTV has two DVR/receivers: the Genie (200 hours, 5 simultaneous
            recordings) and the Genie 2 (450 hours, 7 simultaneous recordings).
            Both devices cost $15 monthly, but the Genie 2 has a $99 bridge fee
            (for Wi-Fi setup) due when you sign up. We recommend the standard
            Genie for most people, while the beefier Genie 2 is for
            binge-watchers who want to eliminate cable clutter.
          </p>
          <h4>DIRECTV Genie pros and cons</h4>
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
                  <td>Up to 450 hrs. of HD storage</td>
                  <td>$15/mo. Advanced Receiver Service Fee</td>
                </tr>
                <tr>
                  <td>Up to 7 simultaneous recordings</td>
                  <td>High activation fees for some equipment </td>
                </tr>
                <tr>
                  <td>No cable clutter (Genie 2 only)</td>
                  <td>Fewer built-in streaming apps than the DISH Hopper 3</td>
                </tr>
                <tr>
                  <td>Three-year price guarantee </td>
                  <td> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Find out if DIRECTV is available in your area"}
        desc={"Enter your zip code here to find out."}
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
          <Link href={"#"}>DIRECTV deals and promotions </Link>
          <Link href={"#"}>Compare top DIRECTV plans</Link>
          <Link href={"#"}>DIRECTV Genie vs. the competition</Link>
          <Link href={"#"}>Specs and features</Link>
        </div>
      </div>

      <div className="section direct-tv-blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
        </div>
        <div className="package-table-container channels">
          <Image src={dotted} alt="" className="mark" />
          <h4>Current DIRECTV deals and promotions</h4>
          <br />
          <p>DIRECTV has one promotion for new customers:</p>
          <ul>
            <li>
              · Free premium channels for three months: Sign up for
              ENTERTAINMENT ($69.99/mo., 160+ channels) or higher and get three
              free months of Max™ (formerly HBO Max), CINEMAX®, MGM+™,
              SHOWTIME®, and STARZ®.
            </li>
          </ul>
        </div>
      </div>

      <div className="section direct-tv-plans-and-pricing">
        <div className="head">
          <h2 className="sect-heading">
            <span> Compare top </span> DIRECTV plans
          </h2>
          <p className="sect-desc">
            We think the best DIRECTV package is CHOICE ($84.99 a month, 200+
            channels) for its solid{" "}
            <span className="link">
              <Link href={"#"}>channel lineup</Link>
            </span>{" "}
            and affordable price.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data as of post date. Offers and availability may vary by location and
          are subject to change. *for 24 months plus taxes and fees w/ 24-mo.
          agmt.; AutoPay and Paperless Bill req’d. Advanced Receiver Service Fee
          $15/mo. is extra and applies.New approved residential customers, price
          incl. TV pkg & equip. fees for first TV. Add’l fees may apply to
          non-qualified customers. Early agmt termination fee applies ($20/mo.)
          & add’l fee(s) may apply if equip. not returned. Credit card req’d.
          Restr’s apply. $19.95 activation & equipment lease req’d for satellite
          customers. Equipment lease req’d for DIRECTV via Internet customers in
          some sales channels.CableTV.com uses paid Amazon links.
        </p>
      </div>

      <div className="section direct-tv-competition">
        <div className="head">
          <h2 className="sect-heading">
            Compare DIRECTV Genie <span> with the competition </span>
          </h2>
          <p className="sect-desc">
            Among the top five TV-provider DVRs, the DIRECTV Genie and Genie 2
            land somewhere in the middle for price, storage, and simultaneous
            recordings. But we think the DISH Hopper 3 ($10 monthly, 500 hours,
            16 simultaneous recordings) is the best overall DVR, with more
            storage, more recordings, more apps, and a lower price.
            <br />
            Also, DISH Network is more affordable and transparent than DIRECTV,
            with a three-year price guarantee (DIRECTV offers two-year price
            protection). That’s why DISH is our Editor’s Choice for the
            <span className="link">
              <Link href={"#"}>best overall TV provider.</Link>
            </span>{" "}
          </p>
        </div>
        <PackageTable item={packageTableDataCompetition} />
        <br />
        <p className="below-table">
          Data as of post date. Offers and availability may vary by location and
          are subject to change.*Varies by location and package. Xfinity also
          charges an additional $10-$20 per month for additional cloud storage.
        </p>
      </div>

      <div className="divider">
        <p>Get DIRECTV GENIE</p>
      </div>

      <div className="section direct-tv-dvr-options">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV Genie <span>DVR options </span>
          </h2>
          <p className="sect-desc">
            DIRECTV automatically adds the Genie to most orders. If you want the
            Genie 2, just order service on two or more TVs and upgrade to
            wireless connectivity. Your cart will then update your equipment
            selections for you.
          </p>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Device</th>
                <th>DVR service fee</th>
                <th>Other fees (due at signup)</th>
                <th>HD storage</th>
                <th>Supported TVs</th>
                <th>Simultaneous recordings</th>
                <th>Built-in streaming TV apps</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1.</td>
                <td>Genie</td>
                <td>$15/mo. Advanced Receiver Service Fee</td>
                <td>N/A</td>
                <td>200 hrs.</td>
                <td>1</td>
                <td>5</td>
                <td>Max, Netflix, Pandora, and more</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Genie 2 (w/ included Genie Mini Wireless)</td>
                <td>$15/mo. Advanced Receiver Service Fee</td>
                <td>$99 bridge fee (due at signup)</td>
                <td>450 hrs.</td>
                <td>Up to 8</td>
                <td>7</td>
                <td>Max, Netflix, Pandora, and more</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Genie Mini</td>
                <td>$7.00/mo</td>
                <td>$49.00 activation fee per device over 4</td>
                <td>N/A</td>
                <td>Up to 6</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Genie Mini Wireless</td>
                <td>$7.00/mo</td>
                <td>
                  $99.00 bridge fee $49.00 activation fee per device over 4
                </td>
                <td>N/A</td>
                <td>Up to 6</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="below-table">
          Data as of post date. Offers and availability may vary by location and
          are subject to change.
        </p>
        <br />
        <div className="endnote ">
          <div className="endnote-container">
            <Image src={quotationsIcon} alt="quotations" />
            <h4>Pro tip:</h4>
            <p>
              If the DIRECTV Genie or Genie 2 don’t interest you, you might find
              something you like in our Best DVRs guide.
            </p>
          </div>
        </div>
      </div>

      <div className="section direct-tv-specs-and-features">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV Genie <span> specs and features </span>
          </h2>
          <p className="sect-desc">
            Let’s run down the main features of the Genie and Genie 2: storage,
            tuners, whole-home TV, the DIRECTV app, and more.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Storage</h4>
          <br />
          <p>
            The DIRECTV Genie DVR/receiver has 200 hours of HD storage (on a 1
            TB drive). If you get the Genie 2, it stores 450 HD hours on a 2 TB
            drive. Again, 200 hours is enough for most people—so 450 hours will
            be plenty of storage for anyone. For instance, I have a DISH Hopper
            3 DVR and I’ve used only 17% of its 500-hour storage capacity.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Tuners (simultaneous recordings)</h4>
          <br />
          <p>
            The Genie has five tuners, which means it can record five TV shows
            at once. That’s a good amount because finding five programming
            conflicts in the same time slot should be a rare occurrence.
            <br />
            TBH, we’ve never used more than three tuners at a time. But if you’d
            like a couple extra simultaneous recordings, the Genie 2 can suck
            down seven programs at once.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Cool features</h4>
          <br />
          <p>
            We really wish that the DIRECTV Genies had built-in streaming apps
            like the Hopper 3, but they don’t. They do, however, have a couple
            of cool little features that you won’t find on the Hopper 3.
            <br />
          </p>
          <ul>
            <li>
              {" "}
              · 72-hour Rewind: If you forget to record a show, you can jump
              back up to 72 hours.
            </li>
            <li>
              {" "}
              · Mix channels: This feature allows you to watch up to six kids,
              news, and sports channels at once.
            </li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Multiroom viewing</h4>
          <br />
          <p>
            Unlike the standard Genie, the Genie 2 doesn’t connect to your TV.
            It’s a wireless access point that beams a signal to a Genie Mini
            Wireless that’s connected to each TV. You get the first Mini
            Wireless free when you sign up, but extras cost $7 a month. So a
            three-TV setup with the Genie 2 would require three Mini Wireless
            boxes—but you’d pay rental fees for only two ($14 a month total).
            This is in addition to the $15 monthly Advanced Receiver Service
            Fee.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DIRECTV whole-home TV options</h4>
          <br />
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Device</th>
                  <th>Price</th>
                  <th>Other fees</th>
                  <th>Supported TVs</th>
                  <th>Simultaneous recordings</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Genie Mini</td>
                  <td>$7.00/mo</td>
                  <td>$49.00 activation fee per device after 4</td>
                  <td>Up to 6</td>
                  <td>5 (Genie) or 7 (Genie 2)</td>
                </tr>
                <tr>
                  <td>2. </td>
                  <td>Genie Mini Wireless </td>
                  <td>$7.00/mo </td>
                  <td>
                    $99.00 bridge fee $49.00 activation fee per device over 4{" "}
                  </td>
                  <td>Up to 8 </td>
                  <td>5 (Genie) or 7 (Genie 2)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="below-table">
            Data as of post date. Offers and availability may vary by location
            and are subject to change.
          </p>
          <br />
          <p>
            Unlike the standard Genie, the Genie 2 doesn’t connect to your TV.
            It doesn’t look like a traditional DVR/receiver—it’s a tall, slender
            tower instead of a flat, wide box—and it doesn’t work like one,
            either.
            <br />
            The Genie 2 is a wireless access point that beams a signal to a
            Genie Mini Wireless connected to each TV. You get the first Mini
            Wireless free when you sign up, but extras cost $7 a month. So a
            three-TV setup with the Genie 2 would require three Mini Wireless
            boxes—but you’d pay rental fees for only two ($14 a month total).
          </p>
          <br />
          <div className="endnote">
            <div className="endnote-container">
              <Image className="mark" src={network} alt="quotations" />
              <h4>Where does the Genie 2 go?</h4>
              <p>
                Since the DIRECTV Genie 2 isn’t what you connect to your TV—that
                would be the Genie Mini Wireless—where does it go in your house?
                Here are our recommendations, based on how many TVs you own.
              </p>
              <ul>
                <li>
                  Single-TV homes: Place the Genie 2 near your TV. It doesn’t
                  have to be visible to work, so you can place it in your home
                  entertainment center’s cabinet or on a nearby shelf to keep
                  things tidy.
                </li>
                <li>
                  Multiple TVs: To ensure that the Genie 2’s signal gets to your
                  TVs, we recommend placing the Genie 2 in a location that’s
                  central to your TV rooms.
                </li>
              </ul>
            </div>
          </div>
          <br />
          <p>
            You can use either the wired Genie Mini or Genie Mini Wireless with
            the standard Genie. If you choose the Genie 2, the first Mini
            Wireless is free.
            <br />
            The Genie Minis’ $49 activation fees look pretty scary, but they
            kick in only when you get DIRECTV service on more than four TVs.
            (That applies to both the Genie and Genie 2.)
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Parental controls</h4>
          <br />
          <p>
            The Genie and Genie 2 have parental controls to help you maintain
            control over what your children watch when you’re not home. Check
            out all the ways you can exercise this control:
          </p>
          <ul>
            <li>· Block content based on ratings or your preferences</li>
            <li>
              · View more detailed ratings and content information so you can
              decide what to block
            </li>
            <li>· Limit watch time</li>
            <li>
              · Set spending limits for purchases (including pay-per-view)
            </li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>DIRECTV Genie remote</h4>
          <br />
          <p>
            While we’re talking about control, the DIRECTV Genie remote controls
            up to four devices and has simple, intuitive controls. It doesn’t
            have native voice control, but there’s a loophole if you have an
            Alexa device: the DIRECTV Alexa skill, which enables voice control
            of your Genie. It’s not perfect—especially if you have to buy an
            Alexa device only for this feature—but it works.
          </p>
          <br />
          <div className="endnote">
            <div className="endnote-container">
              <Image src={quotationsIcon} alt="quotations" />

              <h4>Pro tip:</h4>
              <p>
                If you need to re-pair your DIRECTV remote with your TV,
                everything you need to know is in our How to Program Your
                DIRECTV Remote guide.
              </p>
            </div>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>DIRECTV app</h4>
          <br />
          <p>
            When you’re not home, you can use the mobile DIRECTV app (Android,
            iOS) to watch your Genie DVR recordings on your mobile device.
            Here’s the full list of features:
          </p>
          <br />
          <ul>
            <li>· Stream live TV, on-demand content, and DVR recordings</li>
            <li>· Download movies and shows to watch offline</li>
            <li>· Set and manage DVR recordings</li>
            <li>· Set and manage parental controls</li>
            <li>· Stream on up to five devices at once</li>
            <li>
              · Use your smartphone or tablet as a remote control (requires
              Genie model HR20 or higher)
            </li>
          </ul>
          <br />
          <Image src={genie} alt="" />
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is DIRECTV GENIE worth it? </span>
          </h2>
          <p className="sect-desc">
            The DIRECTV Genie and Genie 2 DVR/receivers have enough storage and
            simultaneous recordings to satisfy everyone from casual users to
            power users. But we wish the Genies had more built-in streaming
            apps, native voice control, and cheaper fees.
            <br />
            Ultimately, our recommendation comes down to pricing and fees.
            DIRECTV, even with a two-year price guarantee, is too expensive.
            Instead, we recommend DISH Network for its more affordable and
            powerful Hopper 3 DVR/receiver—not to mention DISH’s lower prices,
            which it guarantees for three years.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>view plans</Link>
        </div>
      </div>

      <div className="section direct-tv-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>DIRECTV Genie DVR </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span>What is DIRECTV Genie?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  The DIRECTV Genie is a DVR/receiver that stores 200 hours of
                  HD movies and shows and records up to five programs at once.
                  DIRECTV also offers the Genie 2 (450 hours, seven simultaneous
                  recordings). Both cost $15 a month, but the Genie 2 has a $99
                  bridge fee (due when you sign up) for Wi-Fi setup.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"What is DIRECTV Genie?"}
            cssClass={"faq-content"}
          >
            <p>
              The DIRECTV Genie is a DVR/receiver that stores 200 hours of HD
              movies and shows and records up to five programs at once. DIRECTV
              also offers the Genie 2 (450 hours, seven simultaneous
              recordings). Both cost $15 a month, but the Genie 2 has a $99
              bridge fee (due when you sign up) for Wi-Fi setup.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What is a Genie Mini?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  The DIRECTV Genie Mini is a device that allows you to extend
                  your DIRECTV service to the other TVs in your home.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" What is a Genie Mini?"}
            cssClass={"faq-content"}
          >
            <p>
              The DIRECTV Genie Mini is a device that allows you to extend your
              DIRECTV service to the other TVs in your home.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What is DIRECTV's best deal
                or promotion?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  New customers signing up for ENTERTAINMENT ($69.99/mo., 160+
                  channels) or higher will receive three free months of Max,
                  CINEMAX, MGM+, SHOWTIME, and STARZ.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" What is DIRECTV's best deal or promotion?"}
            cssClass={"faq-content"}
          >
            <p>
              New customers signing up for ENTERTAINMENT ($69.99/mo., 160+
              channels) or higher will receive three free months of Max,
              CINEMAX, MGM+, SHOWTIME, and STARZ.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How much does a DIRECTV
                wireless Genie cost?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  DIRECTV’s Genie Mini Wireless ($7 a month per device) allows
                  you to watch DIRECTV on additional TVs in your home. But look
                  out for the $49 activation fee (due at signup) for each Mini
                  Wireless after the fourth.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" How much does a DIRECTV wireless Genie cost?"}
            cssClass={"faq-content"}
          >
            <p>
              DIRECTV’s Genie Mini Wireless ($7 a month per device) allows you
              to watch DIRECTV on additional TVs in your home. But look out for
              the $49 activation fee (due at signup) for each Mini Wireless
              after the fourth.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Is there a fee for DIRECTV
                equipment?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  There is no monthly fee for your DIRECTV satellite dish, but
                  DIRECTV charges a monthly $15 Advanced Receiver Service Fee
                  for the Genie and Genie 2 DVR/receivers. The Genie 2 has a
                  one-time $99 bridge fee (for wireless service) due at signup,
                  with your first Genie Mini Wireless (regularly $7 per month)
                  included.
                  <br />
                  If you get Genie Minis or Genie Wireless Minis for the other
                  TVs in your house, there is a one-time activation fee for each
                  Mini after the fourth. Read more about DIRECTV fees in our
                  guide to the Hidden Costs of DIRECTV.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" Is there a fee for DIRECTV equipment?"}
            cssClass={"faq-content"}
          >
            <p>
              There is no monthly fee for your DIRECTV satellite dish, but
              DIRECTV charges a monthly $15 Advanced Receiver Service Fee for
              the Genie and Genie 2 DVR/receivers. The Genie 2 has a one-time
              $99 bridge fee (for wireless service) due at signup, with your
              first Genie Mini Wireless (regularly $7 per month) included.
              <br />
              If you get Genie Minis or Genie Wireless Minis for the other TVs
              in your house, there is a one-time activation fee for each Mini
              after the fourth. Read more about DIRECTV fees in our guide to the
              Hidden Costs of DIRECTV.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> Does DIRECTV have wireless
                receivers?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  Yes, DIRECTV’s Genie 2 is a wireless DVR/receiver ($15
                  monthly, $99 bridge fee, 450 hours of HD storage, 7
                  simultaneous recordings). To get the Genie 2, order DIRECTV
                  service for two or more TVs and select the option to upgrade
                  to wireless connectivity. Note: the Genie 2 doesn’t connect to
                  your TV—it sends a wireless signal to a Genie Mini Wireless
                  device connected to your TV. The first Mini Wireless is also
                  included (additional units are $7 a month).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" Does DIRECTV have wireless receivers?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, DIRECTV’s Genie 2 is a wireless DVR/receiver ($15 monthly,
              $99 bridge fee, 450 hours of HD storage, 7 simultaneous
              recordings). To get the Genie 2, order DIRECTV service for two or
              more TVs and select the option to upgrade to wireless
              connectivity. Note: the Genie 2 doesn’t connect to your TV—it
              sends a wireless signal to a Genie Mini Wireless device connected
              to your TV. The first Mini Wireless is also included (additional
              units are $7 a month).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(7)}>
                <span>{faq === 7 ? "-" : "+"}</span> How much does the DIRECTV
                Genie cost?
              </h3>

              <div className={`faq-content ${faq === 7 ? "show" : ""}`}>
                <p>
                  As of January 2023, DIRECTV charges a $15 monthly Advanced
                  Receiver Service Fee for its Genie or Genie 2 DVR/receivers.
                  There’s also a $99 bridge fee (due at activation) with the
                  Genie 2 for Wi-Fi setup.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={" How much does the DIRECTV Genie cost?"}
            cssClass={"faq-content"}
          >
            <p>
              As of January 2023, DIRECTV charges a $15 monthly Advanced
              Receiver Service Fee for its Genie or Genie 2 DVR/receivers.
              There’s also a $99 bridge fee (due at activation) with the Genie 2
              for Wi-Fi setup.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(8)}>
                <span>{faq === 8 ? "-" : "+"}</span> Can I use the DIRECTV app
                as a remote control?
              </h3>

              <div className={`faq-content ${faq === 8 ? "show" : ""}`}>
                <p>
                  You can use the DIRECTV app (Android, iOS) as a remote control
                  on your smartphone or tablet—if you have the Genie model HR20
                  or higher.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"8"}
            title={" Can I use the DIRECTV app as a remote control?"}
            cssClass={"faq-content"}
          >
            <p>
              You can use the DIRECTV app (Android, iOS) as a remote control on
              your smartphone or tablet—if you have the Genie model HR20 or
              higher.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(9)}>
                <span>{faq === 9 ? "-" : "+"}</span> Does DIRECTV have wireless
                receivers?
              </h3>

              <div className={`faq-content ${faq === 9 ? "show" : ""}`}>
                <p>
                  Yes, DIRECTV’s Genie 2 is a wireless DVR/receiver ($15
                  monthly, $99 bridge fee, 450 hours of HD storage, 7
                  simultaneous recordings). To get the Genie 2, order DIRECTV
                  service for two or more TVs and select the option to upgrade
                  to wireless connectivity. Note: the Genie 2 doesn’t connect to
                  your TV—it sends a wireless signal to a Genie Mini Wireless
                  device connected to your TV. The first Mini Wireless is also
                  included (additional units are $7 a month).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"9"}
            title={" Does DIRECTV have wireless receivers?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, DIRECTV’s Genie 2 is a wireless DVR/receiver ($15 monthly,
              $99 bridge fee, 450 hours of HD storage, 7 simultaneous
              recordings). To get the Genie 2, order DIRECTV service for two or
              more TVs and select the option to upgrade to wireless
              connectivity. Note: the Genie 2 doesn’t connect to your TV—it
              sends a wireless signal to a Genie Mini Wireless device connected
              to your TV. The first Mini Wireless is also included (additional
              units are $7 a month).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(10)}>
                <span>{faq === 10 ? "-" : "+"}</span> Can I watch Disney Plus on
                the DIRECTV Genie?
              </h3>

              <div className={`faq-content ${faq === 10 ? "show" : ""}`}>
                <p>
                  No, the DIRECTV Genie DVR/receiver doesn’t support Disney+—but
                  don’t let that stop you from signing up for Disney’s popular
                  streaming app.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"10"}
            title={" Can I watch Disney Plus on the DIRECTV Genie?"}
            cssClass={"faq-content"}
          >
            <p>
              No, the DIRECTV Genie DVR/receiver doesn’t support Disney+—but
              don’t let that stop you from signing up for Disney’s popular
              streaming app.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(11)}>
                <span>{faq === 11 ? "-" : "+"}</span> What is the difference
                between the DIRECTV Genie and the DISH Hopper 3?
              </h3>

              <div className={`faq-content ${faq === 11 ? "show" : ""}`}>
                <p>
                  The main differences between the DIRECTV Genie and the DISH
                  Hopper 3 are price and power. DIRECTV charges a $15-a-month
                  Advanced Receiver Service Fee for the Genie (200 hours, 5
                  simultaneous recordings) and wireless Genie 2 (450 hours, 7
                  recordings)—and the Genie 2 has a $99 bridge (for Wi-Fi setup)
                  due at activation. DISH charges $10 a month for the Hopper 3
                  (500 hours, 16 simultaneous recordings). The Hopper 3 also has
                  more built-in streaming TV apps than the Genie. For more
                  information, read “DISH Hopper 3 vs. DIRECTV Genie.”
                </p>
                <div className="custom-table">
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th> </th>
                        <th> Price</th>
                        <th>HD storage</th>
                        <th>Simultaneous recordings</th>
                        <th>4K supports</th>
                        <th>Built-in apps </th>
                        <th>Supported TVs </th>
                        <th>Bluetooth </th>
                        <th>Internal Wi-Fi </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td>DIRECTV Genie/Genie 2</td>
                        <td>Included</td>
                        <td>Up to 450 hrs.</td>
                        <td>5</td>
                        <td>Yes</td>
                        <td>No</td>
                        <td>Up to 8</td>
                        <td>Yes</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>DISH Hopper 3</td>
                        <td>$10.00/mo.</td>
                        <td>500 hrs.</td>
                        <td>16</td>
                        <td>Yes</td>
                        <td>Netflix, Amazon and Prime Video</td>
                        <td>Up to 8</td>
                        <td>Yes</td>
                        <td>Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"11"}
            title={
              " What is the difference between the DIRECTV Genie and the DISH Hopper 3?"
            }
            cssClass={"faq-content"}
          >
            <p>
              The main differences between the DIRECTV Genie and the DISH Hopper
              3 are price and power. DIRECTV charges a $15-a-month Advanced
              Receiver Service Fee for the Genie (200 hours, 5 simultaneous
              recordings) and wireless Genie 2 (450 hours, 7 recordings)—and the
              Genie 2 has a $99 bridge (for Wi-Fi setup) due at activation. DISH
              charges $10 a month for the Hopper 3 (500 hours, 16 simultaneous
              recordings). The Hopper 3 also has more built-in streaming TV apps
              than the Genie. For more information, read “DISH Hopper 3 vs.
              DIRECTV Genie.”
            </p>
            <div className="custom-table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th> </th>
                    <th> Price</th>
                    <th>HD storage</th>
                    <th>Simultaneous recordings</th>
                    <th>4K supports</th>
                    <th>Built-in apps </th>
                    <th>Supported TVs </th>
                    <th>Bluetooth </th>
                    <th>Internal Wi-Fi </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>DIRECTV Genie/Genie 2</td>
                    <td>Included</td>
                    <td>Up to 450 hrs.</td>
                    <td>5</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>Up to 8</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>DISH Hopper 3</td>
                    <td>$10.00/mo.</td>
                    <td>500 hrs.</td>
                    <td>16</td>
                    <td>Yes</td>
                    <td>Netflix, Amazon and Prime Video</td>
                    <td>Up to 8</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: DIRECTV Review | DIRECTV Bundles | DIRECTV Channels |
          DIRECTV STREAM | NFL SUNDAY TICKET
        </p>
      </div>

      <div className="section endnote direct-tv-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Methodology:</h4>
          <p>
            Our TV experts have spent hundreds of hours studying and analyzing
            DIRECTV’s plans and features. We hand-tested the service’s signal
            reliability and overall user experience while evaluating its
            different channel lineups and DVR capabilities. Additionally, we
            pulled data from our annual TV Customer Satisfaction Survey to see
            how DIRECTV ranked against competitors. Check out our{" "}
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
            page.
          </p>
          <h4>Related articles:</h4>
          <ul>
            <li>
              ·
              <span className="link">
                <Link href={"#"}> Best DVRs </Link>
              </span>
            </li>
            <li>
              {" "}
              ·
              <span className="link">
                <Link href={"#"}> Cox Contour Record 6 Review </Link>
              </span>
            </li>
            <li>
              {" "}
              ·
              <span className="link">
                <Link href={"#"}> DISH Hopper 3 review </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default DirectTvGenie;
