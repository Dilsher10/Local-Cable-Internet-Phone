// import React, { useState } from "react";
import "./verizon-fios-phone.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { verizonNavLinks } from "../../assets/data/navLinks/verizonNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import fiosphoneverizonboy from "../../assets/images/fiosphoneverizonboy.png";
import star from "../../assets/images/star.png";
import verizoncheckicon from "../../assets/images/verizoncheckicon.png";
import verizonlogo from "../../assets/images/verizonlogo.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Verizon Fios Phone Review: Bundles And Prices"
};

const VerizonFiosPhone = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: verizonlogo,
      rating: "(4.2/5)",
      starImg: star,
      desc: "Editor's choice for internet service",
      buttonText: "compare packages",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: fiosphoneverizonboy,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "verizon Fios",
        icon: verizoncheckicon,
      },
      {
        subtitle: "Price:",
        title: "$25.00–$90.00/mo.",
        icon: verizoncheckicon,
      },
      {
        subtitle: "Phone plans:",
        title: "Digital landline and wireless",
        icon: verizoncheckicon,
      },
    ],

    tableData: [
      {
        head: ["Plan", "Price", "Features", "Details "],

        body: [
          {
            content: [
              "1. ",
              "Verizon Home Phone",
              "$25.00/mo.",
              "30+ features, including caller ID, voicemail, and spam blocking",
            ],
            linkPath: "# ",
          },
        ],
      },
    ],

    bottomDesc:
      "Data is as of time of post. Offers and availability may vary by location and are subject to change.",
  };

  let packageTableDataPhonePlans = [
    {
      head: ["Plan", "Price*", "Features", "Details"],

      body: [
        {
          content: [
            "1.",
            "Verizon Home Phone",
            "$25.00/mo.",
            "30+ features, including caller ID, voicemail, and spam blocking",
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
  let packageTableDataPhonePackages = [
    {
      head: [
        "Plan",
        "Price*",
        "Download speeds up to",
        "Phone plan",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Fios Gigabit Connection + Home Phone",
            "$114.99/mo.",
            "940 Mbps",
            "Digital VoIP",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataTvPhonePackages = [
    {
      head: [
        "Plan",
        "Price*",
        "Download speeds up to",
        "Channel count",
        "Phone plan",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Gigabit Connection + The Most Fios TV + Home Phone",
            "$233.99/mo.",
            "940 Mbps",
            "425+",
            "Digital VoIP",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Gigabit Connection + More Fios TV + Home Phone",
            "$213.99/mo.",
            "940 Mbps",
            "300+",
            "Digital VoIP",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Gigabit Connection + Your Fios TV + Home Phone",
            "$189.99/mo.",
            "940 Mbps",
            "125+",
            "Digital VoIP",
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
    <div className="verizon-fios-phone">
      {/* <SubNav links={verizonNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Verizon Fios Phone Review: Bundles And Prices
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Non lorem semper ligula
            dolor cursus eget sit interdum. Lectus fermentum tincidunt tellus ac
            blandit imperdiet lobortis interdum. Viverra eros sed hendrerit
            augue eleifend dolor quam.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-verizon-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Verizon Fios phone service at a glance</h4>
          <p>
            Verizon’s phone services are made up of digital home landlines and,
            of course, wireless mobile. Its wireless plans are among the most
            acclaimed (and expensive) in the industry and come in several
            varieties.
            <br />
            Verizon’s home landline VoIP (voice over internet protocol) service,
            on the other hand, consists of just one plan, but it’s loaded with
            features and delivered over fiber-optic internet (so it requires an
            internet/phone bundle). It’s also cheap, if you’re into the idea of
            an old-school landline.
          </p>

          <h4>Verizon Fios phone pros & cons</h4>
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
                  <td>Wide variety of plans</td>
                  <td>Pricey wireless plans</td>
                </tr>
                <tr>
                  <td>Inexpensive VoIP service</td>
                  <td>Limited fiber VoIP coverage</td>
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
          <Link href={"#"}>Phone packages</Link>
          <Link href={"#"}>Phone + Internet packages</Link>
          <Link href={"#"}>Phone + Internet + TV packages</Link>
          <Link href={"#"}>Promotions & deals</Link>
        </div>
      </div>

      <div className="section verizon-phone-plans">
        <div className="head">
          <h2 className="sect-heading">
            <span> Verizon Fios </span> phone plans
          </h2>
          <p className="sect-desc">
            There’s just one Verizon VoIP option, but it has everything you’d
            need in a landline: caller ID, voicemail, spam alerts and blocking,
            as well as more advanced features like call forwarding and TV-screen
            integration. It also works with most types of commercial home phone.
          </p>
        </div>
        <PackageTable item={packageTableDataPhonePlans} />
        <br />
        <p className="below-table">
          Data is as of time of post. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section verizon-wireless-plans">
        <div className="head">
          <h2 className="sect-heading">
            <span> Verizon </span> Wireless phone plans
          </h2>
          <p className="sect-desc">
            Verizon Wireless has plans for families, singles, and just about any
            configuration in between. The unlimited data plans aren’t the
            cheapest around, but Verizon’s coverage and performance are probably
            worth the extra bucks if you’re a heavy mobile user (or family of
            mobile users).
          </p>
        </div>
        <PackageTable item={packageTableDataWirelessPlans} />
        <br />
        <p className="below-table">
          Data is as of time of post. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section verizon-packages-and-pricing">
        <div className="head">
          <h2 className="sect-heading">
            Verizon Fios <span> packages and pricing </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Pretium in senectus eget
            mattis magna dictum vulputate tempus vulputate. Aliquet volutpat sed
            lectus nunc. Eget semper consequat ultricies laoreet pharetra
            curabitur suspendisse pharetra tellus. In non tempor pellentesque mi
            arcu.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Verizon Fios internet + phone packages</h4>
          <PackageTable item={packageTableDataPhonePackages} />
          <p className="below-table">
            Data is as of time of post. Offers and availability may vary by
            location and are subject to change.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Verizon Fios internet + TV + phone packages</h4>
          <PackageTable item={packageTableDataTvPhonePackages} />
          <p className="below-table">
            Data is as of time of post. Offers and availability may vary by
            location and are subject to change.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Verizon Fios worth it? </span>
          </h2>
          <p className="sect-desc">
            Verizon Fios has built an impressive suite of services on the back
            of its fiber-optic internet, but it has also managed to keep its
            prices within reason. You don’t usually get both with corporate
            media behemoths, so kudos are in order there.
            <br />
            We do have a couple of quibbles with Verizon Fios’s otherwise
            forward-thinking TV service, namely its use of old cable staples
            like physical DVRs and lineup-fluffing music channels. Those are
            minor details, but they could have easily been avoided in the age of
            live TV streaming.
            <br />
            Really, the only major check in the minus column is Verizon Fios’s
            limited reach—you can get it in select swathes of the East Coast,
            but the rest of the US is out of luck (for now).
            <br />
            If it’s available in your ‘hood, we say it’s worth trying out.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>get Verizon Fios</Link>
        </div>
      </div>

      <div className="section verizon-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Verizon phone service </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How is VoIP phone different
                from a regular landline phone?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Unlike traditional landline phones that use copper telephone
                  lines (and telephone companies), VoIP (Voice over Internet
                  Protocol) phones transmit communications over the internet. If
                  you’ve ever used Skype or Google Chat, you’ve talked over a
                  form of VoIP.
                  <br />
                  Advantages of VoIP include clearer audio and cloud-based
                  functionality features, but its biggest disadvantage is its
                  complete reliance on an internet connection. Old copper
                  telephone lines will still work during a power outage; VoIP
                  connections won’t.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={
              " How is VoIP phone different from a regular landline phone?"
            }
            cssClass={"faq-content"}
          >
            <p>
              Unlike traditional landline phones that use copper telephone lines
              (and telephone companies), VoIP (Voice over Internet Protocol)
              phones transmit communications over the internet. If you’ve ever
              used Skype or Google Chat, you’ve talked over a form of VoIP.
              <br />
              Advantages of VoIP include clearer audio and cloud-based
              functionality features, but its biggest disadvantage is its
              complete reliance on an internet connection. Old copper telephone
              lines will still work during a power outage; VoIP connections
              won’t.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does Verizon Wireless
                charge for data overages?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Somewhat true to their title, Verizon Wireless’s Unlimited
                  plans don’t charge for data overages—but they will throttle
                  your speed when you exceed certain data points (dependent upon
                  the plan) and during high-traffic periods. So, they’re not
                  completely “unlimited.”
                  <br />
                  Verizon Wireless’s prepaid plans will slow down even more when
                  you hit certain data limits, and the shared plans will charge
                  $15 for each GB you go over. If you’d rather live with
                  occasionally slowed speed than paying extra, Verizon’s
                  Unlimited plans are the way to go.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does Verizon Wireless charge for data overages?"}
            cssClass={"faq-content"}
          >
            <p>
              Somewhat true to their title, Verizon Wireless’s Unlimited plans
              don’t charge for data overages—but they will throttle your speed
              when you exceed certain data points (dependent upon the plan) and
              during high-traffic periods. So, they’re not completely
              “unlimited.”
              <br />
              Verizon Wireless’s prepaid plans will slow down even more when you
              hit certain data limits, and the shared plans will charge $15 for
              each GB you go over. If you’d rather live with occasionally slowed
              speed than paying extra, Verizon’s Unlimited plans are the way to
              go.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Can I use my own phone with
                Verizon Wireless?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Verizon Wireless does allow you to BYOD (bring your own
                  device) as long as the phone is compatible with its network.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Can I use my own phone with Verizon Wireless?"}
            cssClass={"faq-content"}
          >
            <p>
              Verizon Wireless does allow you to BYOD (bring your own device) as
              long as the phone is compatible with its network.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Verizon Fios overview | Verizon TV | Verizon Internet |
          Verizon Phone | Verizon Customer service
        </p>
      </div>

      <div className="section endnote verizon-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Methodology:</h4>
          <p>
            To find out how Verizon phone plans stacked up to the competition,
            we rated them by bang for your buck, reliability, features, and
            customer satisfaction. For more information on our methodology,
            check out our{" "}
            <span className="link">
              <Link href={"/"}> How We Rank </Link>
            </span>{" "}
            page.
          </p>
          <h4>Related articles</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"/"}>Spectrum Voice Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"/"}>Sparklight Phone Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"/"}>CenturyLink Home Phone Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"/"}>Xfinity Voice Review</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default VerizonFiosPhone;
