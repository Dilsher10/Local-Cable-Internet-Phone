// import React, { useState } from "react";
import "./spark-light-phone.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { sparklightNavLinks } from "../../assets/data/navLinks/sparklightNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import sparklightshemale from "../../assets/images/sparklight-shemale.png";
import star from "../../assets/images/star.png";
import sparklighticon from "../../assets/images/sparklight-icon.png";
import sparklight from "../../assets/images/sparklight.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import quotationsIcon from "../../assets/images/quotations.svg";
import dotted from "../../assets/images/dotted.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Sparklight Phone Review"
};

const SparkLightPhone = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: sparklight,
      rating: "(3.0/5)",
      starImg: star,
      desc: "No contract, money-back guarantee",
      buttonText: "view plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: sparklightshemale,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "sparklight",
        icon: sparklighticon,
      },
      {
        subtitle: " Price:",
        title: "Starting at $20/mo.",
        icon: sparklighticon,
      },
      {
        subtitle: "Phone plans:",
        title: "Unlimited local and unlimited long-distance",
        icon: sparklighticon,
      },
    ],

    tableData: [
      {
        head: [
          "Package",
          "Price* ",
          "Download speeds up to",
          "Phone plan",
          "Details ",
        ],

        body: [
          {
            content: [
              "1.",
              "Standard Phone with Internet 200",
              "$85/mo.",
              "200 Mbps ",
              "Unlimited local and long distance ",
            ],
            linkPath: "# ",
          },
          {
            content: [
              "2.",
              "Standard Phone with Internet 300 ",
              "$95/mo. ",
              "300 Mbps ",
              "Unlimited local and long distance ",
            ],
            linkPath: "# ",
          },
          {
            content: [
              "3.",
              "Standard Phone with Internet 400 ",
              "$110/mo. ",
              " 400 Mbps",
              "Unlimited local and long distance ",
            ],
            linkPath: "# ",
          },
          {
            content: [
              "4.",
              "Standard Phone with Internet 600 ",
              "$120/mo. ",
              " 600 Mbps",
              "Unlimited local and long distance ",
            ],
            linkPath: "# ",
          },
        ],
      },
    ],

    bottomDesc:
      "Data as of 10/9/2023. Offers and availability may vary by location and are subject to change.",
  };

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };

  let packageTableDataPhonePackages = [
    {
      head: ["Package", "Price*", "Features", "Details"],

      body: [
        {
          content: [
            "1.",
            "Economy",
            "$20/mo.",
            "Unlimited local calls $0.10/min. unlimited long-distance calling in the Continental US No annual contract Current number conservation",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Standard Phone",
            "$50/mo.",
            "Unlimited local callsUnlimited long-distance calling in the Continental US No annual contract Call forwarding, 3-Way calling, plus 11 other phone features Current phone number carry-over",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataWirelessPlans = [
    {
      head: ["Plan", "Price*", "Type", "Details"],

      body: [
        {
          content: [
            "1.",
            "Get More Unlimited",
            "$50.00–$90.00/mo. per line",
            "Unlimited data",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Do More Unlimited ",
            "$40.00–$80.00/mo. per line ",
            "Unlimited data ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Play More Unlimited ",
            "$40.00–$80.00/mo. per line ",
            "Unlimited data ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Start Unlimited ",
            "$30.00–$70.00/mo. per line ",
            "Unlimited data ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "15 GB ",
            "$35.00–$50.00/mo. per line",
            "Shared data ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "6.",
            "5 GB ",
            "$25.00–$40.00/mo. per line ",
            "Shared data ",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="spark-light-phone">
      {/* <SubNav links={sparklightNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">Sparklight Phone Review</h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Sparklight phone service at a glance </h4>
          <p>
            Home phones are convenient and help first responders find you faster
            in an emergency. If you want that security in the form of a landline
            with Sparklight, you’ll appreciate the simplicity of its plans and
            the guaranteed-for-life pricing.
            <br />
            Plus, you can bring your old phone number with you, so you won’t
            have to memorize a new one or update your family and friends on how
            to reach you.
          </p>

          <h4>Sparklight phone service pros & cons</h4>
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
                  <td>No annual contract </td>
                  <td>Prices that vary on international calls </td>
                </tr>
                <tr>
                  <td>Unlimited local calls </td>
                  <td>Extra costs for add-ons like voicemail </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Find out if Sparklight is available in your area"}
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
          <Link href={"#"}> Pros & cons </Link>
          <Link href={"#"}> Phone packages and prices </Link>
          <Link href={"#"}> Internet + phone bundles packages and prices </Link>
          <Link href={"#"}> Promotions </Link>
          <Link href={"#"}> Final take </Link>
          <Link href={"#"}> FAQ </Link>
        </div>
      </div>

      <div className="section packages-and-pricing">
        <div className="head">
          <h2 className="sect-heading">
            Sparklight <span> phone plans </span>
          </h2>
          <p className="sect-desc">
            Sparklight’s Economy Phone is a big 30 bucks per month cheaper than
            the Standard Phone. If all you want to do is keep a landline phone
            handy for emergencies, the Economy phone might be all you need.
          </p>
        </div>
        <PackageTable item={packageTableDataPhonePackages} />
        <br />
        <p className="below-table">
          Data as of 10/9/2023. Offers and availability may vary by location and
          are subject to change.
        </p>
        <div className="package-table-container channels">
          <h4>Standard phone plan</h4>
          <br />
          <p>
            To sweeten the pot for the Standard plan, Sparklight’s Standard
            Phone can do ten things the Economy Phone can’t.
          </p>
          <br />
          <ul>
            <li>1. Speed dials up to 8 numbers</li>
            <li>2. Shows who’s on call waiting</li>
            <li>3. Forwards calls to any other phone</li>
            <li>
              4. Allows select programmed numbers to automatically forward to
              another number
            </li>
            <li>5. Supports 3-way calls</li>
            <li>6. Returns calls quickly with *69</li>
            <li>7. Makes your caller ID anonymous with *67</li>
            <li>8. Blocks incoming anonymous calls</li>
            <li>9. Blocks select programmed numbers</li>
            <li>
              10. Allows only select programmed numbers to make calls to your
              phone
            </li>
          </ul>
          <br />
          <p>
            You might not use all of the features above, and they’re not all
            that impressive compared to what a smartphone can do, but it’s nice
            to have options. <br />
            Unfortunately, options that used to be an included part of the
            Standard plan are now extra—make that $5 extra each. These features
            include recording voicemail, forwarding voicemail messages to any
            email address, caller ID, and voicemail prompts in English and
            Spanish. <br />
            If you frequently make long-distance calls, keep in mind that
            Sparklight has different rates for each country. Within the US, it’s
            $0.10 per minute on the Economy Phone plan, or you can get unlimited
            minutes included with the Standard Phone plan. <br />
            But if you’re calling Mexico City, it will cost only $0.05 per
            minute. Harder to reach places are more, like Tonga, which costs $4
            per minute. Those prices can add up fast, and you would probably be
            better off using an online service if you can—like Google Hangouts
            or even good-ish ole Skype
          </p>
          <br />
          <hr />
          <div className="btn">
            <Link href={"/"}>view sparklight plans</Link>
          </div>
        </div>
      </div>

      <div className="section wireless-plans">
        <div className="head">
          <h2 className="sect-heading">
            Sparklight bundles and pricing;{" "}
            <span> Sparklight internet + phone packages </span>
          </h2>
          <p className="sect-desc">
            When you pair your Sparklight standard phone plan with internet, you
            can save $32 off the total price. There are a bunch of other bundles
            from Sparklight. You can see them all on our Sparklight bundle
            review.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> get internet bundles </Link>
        </div>
        <PackageTable item={packageTableDataWirelessPlans} />
        <br />
        <p className="below-table">
          Data as of 10/9/2023. Offers and availability may vary by location and
          are subject to change.
        </p>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={dotted} alt="dotted" />
          <h4>Sparklight (Cable ONE) phone perks, cool stuff, and deals</h4>
          <p>
            Sparklight doesn’t have any promotional deals for phone service
            right now, but we’ll add any new sales and perks here when they’re
            available.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Our final take on <span> Sparklight phone service </span>
          </h2>
          <p className="sect-desc">
            We’ve got to assume that if you got this far in the review, you’re a
            home phone-devotee. Good for you—it’s important to know what you
            like.
            <br />
            Sparklight’s phone service isn’t anything flashy, but it will get
            the job done. Since the Standard Phone offers a price-for-life
            guarantee and a bunch of helpful features, we recommend you go with
            that unlimited local and long-distance plan.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>move your number to sparklight</Link>
        </div>
      </div>

      <div className="section verizon-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Sparklight phone service </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How do I do call forwarding
                with Sparklight?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  To set up call forwarding, dial *72, then dial the telephone
                  number you’d like your calls to forward to. Once you’ve set
                  this up, incoming calls will make your phone ring once before
                  they’re forwarded to the number you programmed.
                  <br />
                  To stop call forwarding, dial *73.Sparklight’s customer
                  service number is 1-877-692-2253. You can head over to our
                  Sparklight customer service review to learn more about what to
                  expect when you call.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" How do I do call forwarding with Sparklight?"}
            cssClass={"faq-content"}
          >
            <p>
              To set up call forwarding, dial *72, then dial the telephone
              number you’d like your calls to forward to. Once you’ve set this
              up, incoming calls will make your phone ring once before they’re
              forwarded to the number you programmed.
              <br />
              To stop call forwarding, dial *73.Sparklight’s customer service
              number is 1-877-692-2253. You can head over to our Sparklight
              customer service review to learn more about what to expect when
              you call.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does Sparklight require a
                contract?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Sparklight doesn’t require a contract on any of its plans. On
                  top of that, its Standard Phone plan comes with a
                  price-for-life guarantee.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does Sparklight require a contract?"}
            cssClass={"faq-content"}
          >
            <p>
              Sparklight doesn’t require a contract on any of its plans. On top
              of that, its Standard Phone plan comes with a price-for-life
              guarantee.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does Sparklight offer
                unlimited calls?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  With Sparklight’s Standard Phone plan, you’ll get unlimited
                  calls in the Continental US. The Economy Phone plan offers
                  unlimited local calls.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does Sparklight offer unlimited calls?"}
            cssClass={"faq-content"}
          >
            <p>
              With Sparklight’s Standard Phone plan, you’ll get unlimited calls
              in the Continental US. The Economy Phone plan offers unlimited
              local calls.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What is the phone number
                for Sparklight?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Sparklight’s customer service number is 1-877-692-2253. You
                  can head over to our Sparklight customer service review to
                  learn more about what to expect when you call.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" What is the phone number for Sparklight?"}
            cssClass={"faq-content"}
          >
            <p>
              Sparklight’s customer service number is 1-877-692-2253. You can
              head over to our Sparklight customer service review to learn more
              about what to expect when you call.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Sparklight Overview | Sparklight Internet | Sparklight TV |
          Sparklight Bundles | Sparklight Channel lineup | Sparklight Customer
          service
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default SparkLightPhone;
