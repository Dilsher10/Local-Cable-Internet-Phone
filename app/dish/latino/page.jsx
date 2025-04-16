// import React, { useState } from "react";
import "./dish-latino.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { dishNavLinks } from "../../assets/data/navLinks/dishNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import reviewlation from "../../assets/images/reviewlation.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import dishlatino from "../../assets/images/dishlatino.png";
import dishcross from "../../assets/images/dishcross.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import dotted from "../../assets/images/dotted.png";
import PackageTable from "../../components/package-table/PackageTable";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa6";
import network from "../../assets/images/network.png";
// import Newsletter from "../../components/newsletter/Newsletter";
import quotations from "../../assets/images/quotations.svg";

export const metadata = {
  title: "DISHLATINO Review 2024: Plans, Pricings, And More"
};

const DishLatino = () => {
  // const [faq, setFaq] = useState();
  let heroData = {
    card1: {
      logo: dishlatino,
      rating: "(4.5/5)",
      starImg: star,
      desc: "Best TV provider",
      buttonText: "Compare Plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: reviewlation,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "DISHLATINO",
        icon: dishcross,
      },
      {
        subtitle: "Channels:",
        title: "55–270+ (63 in Spanish)",
        icon: dishcross,
      },
      {
        subtitle: "Price:",
        title: "$51.99–$91.99/mo.",
        icon: dishcross,
      },
      {
        subtitle: "DVR:",
        title: "500 HD hrs.",
        icon: dishcross,
      },
    ],

    tableData: [
      {
        head: [
          "Top plans",
          "Pricing",
          "Total channels",
          "Spanish channels",
          "DVR",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "DishLATINO Clásico",
              "$59.99/mes",
              "180+",
              "60",
              "500 HD hrs.",
            ],
            linkPath: "#",
          },

          {
            content: [
              "2.",
              "DishLATINO Max",
              "$97.99/mes",
              "270+",
              "63",
              "500 HD hrs.",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc: "Data as of post date. Not all offers available in all areas.",
  };
  let packageTableData = [
    {
      head: [
        "Top plans",
        "Pricing",
        "Total channels",
        "Spanish channels",
        "DVR",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "DishLATINO Básico",
            "$51.99/mo.",
            "55+",
            "33",
            "500 HD hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "DishLATINO Clásico ",
            "$54.99/mo.",
            "180+",
            "60",
            "500 HD hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "DishLATINO Plus",
            "$56.99/mo.",
            "190+ ",
            "62",
            "500 HD hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "DishLATINO Dos",
            "$76.99/mo.",
            "225+",
            "63",
            "500 HD hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "DishLATINO Max",
            "$91.99/mes",
            "270+",
            "63",
            "500 HD hrs.",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataTwo = [
    {
      head: [
        "Provider",
        "Price",
        "Total channels",
        "Spanish channels",
        "DVR",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "DishLATINO",
            "$51.99–$91.99/mo.",
            "55–270+",
            "33–63",
            "500 HD hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "DIRECTV Spanish",
            "$59.99–$139.99/mo.",
            "120–350+",
            "55–105",
            "200 hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Spectrum Mi Plan Latino",
            "$34.99/mo. for 12 mos.",
            "140+",
            "75+",
            "Varies",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataThree = [
    {
      head: [
        "Provider",
        "Package prices",
        "Package channels",
        "Add-on prices",
        "Add-on (Spanish) channels",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Cox",
            "$53.00–$132.00/mes",
            "75–250+",
            "$10.00/mes",
            "39",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Optimum",
            "$75.00–$115.00/mes",
            "220–420+",
            "$12.95–$20.95/mes",
            "50+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Astound",
            "$59.99–$82.12/mes",
            "55–304+",
            "$13.00–$23.95/mes",
            "Hasta 40",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Verizon ",
            "$70.00–$110.00/mes ",
            "125–425+ ",
            "$10.00/mes ",
            "49–53+ ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "Xfinity ",
            "$60.00–$89.99/mes ",
            "125–260+ ",
            "$5.00–$16.95/mes ",
            "15–41+ ",
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
    <div className="dish-latino">
      {/* <SubNav links={dishNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            DISHLATINO Review 2024: Plans, Pricings, And More
          </h2>
          <p className="sect-desc">
            We examined DishLATINO’s pricing, channels, policies, promotions,
            and equipment—and our research reveals that DishLATINO es muy bueno.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-dish-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is DishLATINO any good?</h4>
          <p>
            <span className="link">
              <Link href={"#"}> DishLATINO </Link>
            </span>{" "}
            is definitely good. It has the same high channel counts, inexpensive
            pricing, two-year price guarantee, powerful Hopper 3 DVR, excellent
            mobile app, and peerless parental controls as our best overall TV
            provider, DISH.
            <br />
            But what about the latino part of DishLATINO? Well, of its 55–270+
            channels, 63+ broadcast en Español (that’s second only to DIRECTV,
            which has 80+ Spanish channels). And four of the five DishLATINO
            packages have nearly all of those channels, so you’ll only have to
            decide which English-language channels you want. <br />
            DishLATINO also has the same con as DISH: limited bundling options.
          </p>
          <h4>DishLATINO pros and cons</h4>
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
                  <td>Hopper 3 DVR</td>
                  <td>Limited internet/phone bundling options</td>
                </tr>
                <tr>
                  <td>Inexpensive packages</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>2-year price guarantee </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Free Multi-Sport Pack*</td>
                  <td></td>
                </tr>
                <tr>
                  <td>All local channels included </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="below-table">* With America’s Top 120+ and higher.</p>
        </div>
      </div>

      <div className="section important-links">
        <div className="head">
          <h2 className="sect-heading">
            Jump to <span> important links </span>
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
          <Link href={"#"}> Deals and promotions </Link>
          <Link href={"#"}> Compare DishLATINO plans </Link>
          <Link href={"#"}> Compare DishLATINO plans </Link>
          <Link href={"#"}> DishLATINO channels </Link>
          <Link href={"#"}> DishLATINO DVR </Link>
        </div>
      </div>

      <div className="section dish-network">
        <div className="head">
          <h2 className="sect-heading">
            Compara los planes y precios de <span> DISH Network </span>
          </h2>
          <p className="sect-desc">
            If you’re looking for a quick recommendation so you can cross “order
            TV service” off your task list, we’ve crunched the numbers and come
            up with two DishLATINO plans we think you’ll like.
            <br />
            If money is your top concern, DishLATINO Clásico ($54.99 a month)
            has the best value with 180+ channels, including 60 out of 63
            available Spanish-language channels. The English-language channels
            leave a lot to be desired, but you’ll have plenty of Spanish content
            to watch. If your familia is bilingual, you’ll want the best and
            biggest package, DishLATINO Max. It has 270+ channels, including all
            63 that broadcast en Español.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data as of post date. Not all offers available in all areas. Offer
          valid for new and qualifying former customers only.
        </p>
        <div className="endnote is-dish-good">
          <div className="endnote-container">
            <Image src={dotted} alt="dotted" />
            <h4>DishLATINO deals and promotions</h4>
            <p>
              DishLATINO deals and promotions are the same as those of DISH
              Network.
            </p>
            <ul>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>Free installation: DISH is</Link>
                </span>{" "}
                currently waiving the $199 installation fee on new orders.
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>Hopper Duo offer: Get</Link>
                </span>{" "}
                the Hopper Duo free for the length of your contract (regularly
                $5/mo.)
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>Free Multi-Sport Pack:</Link>
                </span>{" "}
                If you order the DishLATINO Max package or higher, DISH will
                include the 14-channel Multi-Sport Pack (regularly $13 a month)
                free.
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>HBO Max discount: Sign</Link>
                </span>{" "}
                up for DISH before October 27, and you’ll get ad-free HBO Max
                for $12/mo. (regularly $15/mo.).
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>DISH 55: DishLATINO customers</Link>
                </span>{" "}
                aged 55 or older get free installation, one free movie rental,
                six free months of equipment protection, and upgraded identity
                theft protection.
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>DISH “Those Who Serve”:</Link>
                </span>{" "}
                Active military, veterans, and first responders get one free
                movie rental plus the 8-channel Stars & Stripes channel pack
                (regularly $10/mo.) at no additional cost. Healthcare workers
                and teachers get a movie rental plus the 12-channel Heartland
                channel pack (regularly $6 a month) at no extra charge.
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>Free premium channels: New</Link>
                </span>{" "}
                customers get 3 free months of SHOWTIME® and STARZ®. Remember to
                cancel before the promo period ends, or you’ll be charged.
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>$100 gift card: For</Link>
                </span>{" "}
                a limited time, DISH will give you a $100 gift card with online
                orders.
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>eAutoPay discount: DISH gives</Link>
                </span>{" "}
                you a $5/mo. discount for using paperless billing.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="divider">
        <p>View DISHLATINO Plans</p>
      </div>

      <div className="section dish-competition">
        <div className="head">
          <h2 className="sect-heading">
            DishLATINO <span> vs. the competition </span>
          </h2>
          <p className="sect-desc">
            DishLATINO is one of only three TV providers that has full packages
            geared toward Latino customers. The others are DIRECTV and Spectrum.
            DIRECTV has more Spanish-language channels than DishLATINO, higher
            prices (even before the second-year rate hike), and a weaker DVR.
            Spectrum has an even weaker DVR—but it offers no contracts and much
            better prices.
            <br />
            Cox, Optimum, Astound Broadband powered by RCN, Verizon, and Xfinity
            at least have Latino add-on packs. Since these providers
            collectively serve a good-sized chunk of the US, we’ll examine their
            add-ons so you can compare them to DishLATINO.
          </p>
        </div>
        <PackageTable item={packageTableDataTwo} />
        <p className="below-table">
          Data as of post date. Not all offers available in all areas.
        </p>
      </div>

      <div className="section dish-provider">
        <div className="head">
          <h2 className="sect-heading">
            Latino <span> add-on packs </span> from other providers
          </h2>
          <p className="sect-desc">
            As you can see, these Latino add-on packs don’t have quite as many
            channels as DishLATINO, DIRECTV, or Spectrum. Also, the monthly fee
            for each of them adds 6%–40% to your total monthly bill. And none of
            these providers have a two-year price guarantee like DishLATINO.
            <br />
            But some of these providers’ Latino offerings have some cool stuff
            that DishLATINO lacks.
            <br />
            Verizon has four different regional Latino plans (Región Mexicana,
            Región Caribeña, Región Sudamericana, and Región Española), so you
            can pick the best one for your Hispanic identity. And you can add
            additional regiónes for only $5/mo. Xfinity has a bilingual version
            of its widely lauded XR15 voice remote and the feature-rich X1 DVR.
            <br />
            Verizon has the most channels of any service for $110 a month, and
            it’s only $10 more per month for up to 53 Spanish channels. And
            Xfinity has wider availability, but the Xfinity Latino add-on and
            the X1 DVR would add $42 to your payment. But overall, we think
            DishLATINO is the way to go since it has full Latino packages, the
            more affordable—and most powerful—DVR, and a two-year price
            guarantee.
          </p>
        </div>
        <PackageTable item={packageTableDataThree} />
        <p className="below-table">
          Data as of post date. Not all offers available in all areas.
        </p>
      </div>

      <div className="divider">
        <p>Get DISHLATINO</p>
      </div>

      <div className="section dish-latino">
        <div className="head">
          <h2 className="sect-heading">
            DISHLATINO <span> channels and equipment's </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DishLATINO channels</h4>
          <p className="after-heading">
            Como mencionamos anteriormente, no todos los canales de los paquetes
            de DishLATINO son en español. Esto significa que entre 22 y 207
            canales de tu paquete también los encuentras en cualquier otro
            paquete de DISH. <br />
            Aquí está la lista completa de los canales en español de cada
            paquete, junto con una descripción de los canales que se incluyen en
            inglés.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th> </th>
                  <th>Channels</th>
                  <th>DishLATINO Básico</th>
                  <th>DishLATINO Clásico</th>
                  <th>DishLATINO Plus</th>
                  <th>DishLATINO Dos</th>
                  <th>America’s Top 200 (240+ channels)</th>
                  <th>DishLATINO Max</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>1. </th>
                  <th>A&E </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                </tr>
                <tr>
                  <th>2. </th>
                  <th>ABC</th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                </tr>
                <tr>
                  <th>3. </th>
                  <th>Afro</th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                </tr>
                <tr>
                  <th>4. </th>
                  <th>American Heroes Channel (AHC)</th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                </tr>
                <tr>
                  <th>5. </th>
                  <th>BBC America</th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                </tr>
                <tr>
                  <th>6. </th>
                  <th>MTV Live</th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                </tr>
                <tr>
                  <th>7. </th>
                  <th>Universo</th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                </tr>
                <tr>
                  <th>8. </th>
                  <th>WE tv</th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                </tr>
                <tr>
                  <th> 9.</th>
                  <th>Z Living</th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                </tr>
                <tr>
                  <th>10. </th>
                  <th id="z">Zona Futbol</th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="below-table">
            Data as of post date. Not all offers available in all areas.
          </p>
          <p className="after-heading">
            Here’s a quick overview of the non-Spanish-language channels
            included in DishLATINO packages.
          </p>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>DishLATINO Básico: </Link>
              </span>{" "}
              Here’s a quick overview of the non-Spanish-language channels
              included in DishLATINO packages.
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>DishLATINO Clásico:</Link>
              </span>{" "}
              Baby TV, Disney XD, Free Speech TV, NASA, lots of music channels
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>DishLATINO Plus:</Link>
              </span>{" "}
              AMC, Cartoon Network, Fuse, MotorTrend, Nick Jr., Syfy, TBS, USA,
              and more
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>DishLATINO Dos: </Link>
              </span>{" "}
              A&E, Animal Planet, Bloomberg, Bravo, Discovery Channel, Disney
              Channel, HGTV, IFC, Lifetime, MTV, National Geographic,
              Nickelodeon, OWN, Paramount Network, TLC, TNT, and more
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>DishLATINO Max: </Link>
              </span>{" "}
              ESPN, FOX Movie Channel, FS1, Freeform, FX, Hallmark Channel,
              Hallmark Drama, Hallmark Movies and Mysteries, HISTORY, MLB
              Network, NBA TV, THE MOVIE CHANNELTM, Travel Channel, VH1, and
              more
            </li>
          </ul>
          <p className="after-heading">
            Now you can see why we call DishLATINO Max the best overall plan—it
            has a solid mix of popular English channels, plus every Spanish
            channel DISH carries. Now let’s check out the DishLATINO DVR
            situation so you know how many pelîculas y programas you can store.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DishLATINO DVR</h4>
          <p className="after-heading">
            DishLATINO plans come with the same gear as DISH plans: either the
            Hopper Duo, Hopper 3, or Wally—and as many Joeys as you have TVs (if
            you want ‘em).
          </p>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>
                  Hopper 3 DVR/receiver ($10/mo.): The best DVR
                </Link>
              </span>{" "}
              DishLATINO has to offer stores up to 2,000 hours of content and
              records up to 16 shows at once. It also has Netflix, Amazon Prime
              Video, and YouTube built-in (you’ll need to subscribe to each
              service separately), plus Bluetooth, 4K support, and quad
              split-screen.
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>
                  Hopper Duo DVR/receiver ($5/mo.): If you don’t
                </Link>
              </span>{" "}
              need the Hopper 3’s incredible stats, you can save $5/mo. with
              this more modest Hopper, which records 2 shows at once and stores
              125 hours of recordings. It also has Netflix, but no other
              streaming apps, and features Bluetooth connectivity—but it doesn’t
              support 4K.
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>
                  Wally receiver ($5/mo.): If DVR features aren’t on
                </Link>
              </span>{" "}
              your needs list, you can go receiver-only with the Wally.
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>
                  Joey/4K Joey/Wireless Joey ($5/mo. each):
                </Link>
              </span>{" "}
              You can add up to 7 TVs to your DISH service with these extenders
              that all do pretty much the same thing except the 4K Joey is
              required to watch 4K content on the additional TVs. Watch out for
              the activation fees on these. DISH charges a one-time fee of $50
              at signup if you order more than three Joeys (plus one Hopper 3).
              And there’s a fee for every Wireless Joey ($25) and 4K Joey ($50).
            </li>
          </ul>
          <p className="after-heading">
            All of the above devices come with the DISH voice remote, y se habla
            español.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={network} alt="network" className="network" />
          <h4>DISH voice remote</h4>
          <p className="after-heading">
            Hoppers and Joeys come with the DISH voice remote, which features
            backlit keys (handy), a remote locator (even handier), and
            programmable shortcut keys (handiest of all). Remote models with
            built-in Google Assistant are also available.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DISH Anywhere app</h4>
          <p className="after-heading">
            The DISH Anywhere app for{" "}
            <span className="link">
              <Link href={"#"}> iOS </Link>
            </span>{" "}
            and{" "}
            <span className="link">
              <Link href={"#"}> Android </Link>
            </span>
            allows you to watch live, on-demand, and recorded content away from
            tu casa. It can also function as a remote for Hoppers and Joeys in
            case the niños lose the remote again. And if they did, you can use
            the app to set and manage parental controls to teach them a lesson.
          </p>
          <hr />
          <div className="btn">
            <Link href={"#"}>try DISHLATINO</Link>
          </div>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is DISHLATINO worth it? </span>
          </h2>
          <p className="sect-desc">
            DishLATINO is worth it—as long as you get the Plus, Dos, or Max
            plans. Básico and Clásico are way too basic, but the other three
            plans have reasonable prices and a decent amount of English channels
            as a bonus to the available Spanish channels (although Plus is
            missing Nuestra Tele). And it doesn’t hurt to have the Hopper 3—it’s
            big 2,000-hour belly to hold all of that TV.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>signup for DISHLATINO</Link>
        </div>
      </div>

      <div className="section dish-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>DishLATINO </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span>How much does DishLATINO
                cost?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  DishLATINO has five packages priced $51.99-$91.99 a month
                  offering 55-270+ channels. The Plus, Dos, and Max plans all
                  have the same Spanish-language channels-but not the same
                  English ones. Básico and Clásico are missing a handful of
                  Spanish-language channels.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"How much does DishLATINO cost?"}
            cssClass={"faq-content"}
          >
            <p>
              DishLATINO has five packages priced $51.99-$91.99 a month offering
              55-270+ channels. The Plus, Dos, and Max plans all have the same
              Spanish-language channels-but not the same English ones. Básico
              and Clásico are missing a handful of Spanish-language channels.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> does dishLATINO has
                internet?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Neither DishLATINO nor DISH sells internet service but in some
                  parts of the US you can bundle DISH with Frontier internet
                  service.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" does dishLATINO has internet?"}
            cssClass={"faq-content"}
          >
            <p>
              Neither DishLATINO nor DISH sells internet service but in some
              parts of the US you can bundle DISH with Frontier internet
              service.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span>What are the Latino channels
                for DISH?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <ul className="channel-list">
                  <li>· vHistory en Español HITN</li>
                  <li>· vInglés para Todos</li>
                  <li>· vMexicanal</li>
                  <li>· vMilenio TV</li>
                  <li>· vMTV Tr3s</li>
                  <li>· vNatGeo Mundo</li>
                  <li>· vNuestra Tele‡</li>
                  <li>· vPasiones</li>
                  <li>· vSiriusXM - Aguila</li>
                  <li>· vSiriusXM - Caliente</li>
                  <li>· vSiriusXM - Caricia</li>
                  <li>· vSiriusXM - Viva</li>
                  <li>· vSony Cine*</li>
                  <li>· vTUDN*</li>
                  <li>· vTUDNxtra 1-11*</li>
                  <li>· vTV Española International(</li>
                  <li>· vUniMás</li>
                  <li>· vUniverso*</li>
                  <li>· vUnivision Este</li>
                  <li>· vUnivision Foro TV*</li>
                  <li>· vUnivision Oeste</li>
                  <li>· vUnivision TL Novelas*</li>
                  <li>· vV-ME</li>
                  <li>· vVideo Rola</li>
                  <li>· vWapa America*</li>
                  <li>· vZona Fútbol*</li>
                  <li>· vAlma Vision Hispanic Network (ALMA)*</li>
                  <li>· vAntena Trést</li>
                  <li>· vAZ Cinema</li>
                  <li>· vAzteca America</li>
                  <li>· vbeIN Sports en Español</li>
                  <li>· vbeIN Sports CONNECT La Ligat</li>
                  <li>· vCaracol TV Internacionalt</li>
                  <li>· vCentroamerica TV*</li>
                  <li>· vCine Latino*</li>
                  <li>· vCine Sony</li>
                  <li>· vCLAN</li>
                  <li>· vCNN en Español*</li>
                  <li>· vCubaMax*</li>
                  <li>· vDiscovery en Español*</li>
                  <li>· vDiscovery Familia*</li>
                  <li>· vDISH CD - La Música</li>
                  <li>· vDISH CD - Latin Jazz+</li>
                  <li>· vDISH CD - Mojito</li>
                  <li>· vDISH CD - Viva Mariachi</li>
                  <li>· vEnlace</li>
                  <li>· vESNE*</li>
                  <li>· vESPN Deportes</li>
                  <li>· vEstrella TV*</li>
                  <li>· vFOX Deportes</li>
                  <li>· vGalavision</li>
                </ul>
                <p>
                  Not included in DishLATINO Básico * Not included in DishLATINO
                  Clásico * Not included in DishLATINO Plus
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"What are the Latino channels for DISH?"}
            cssClass={"faq-content"}
          >
            <ul className="channel-list">
              <li>· vHistory en Español HITN</li>
              <li>· vInglés para Todos</li>
              <li>· vMexicanal</li>
              <li>· vMilenio TV</li>
              <li>· vMTV Tr3s</li>
              <li>· vNatGeo Mundo</li>
              <li>· vNuestra Tele‡</li>
              <li>· vPasiones</li>
              <li>· vSiriusXM - Aguila</li>
              <li>· vSiriusXM - Caliente</li>
              <li>· vSiriusXM - Caricia</li>
              <li>· vSiriusXM - Viva</li>
              <li>· vSony Cine*</li>
              <li>· vTUDN*</li>
              <li>· vTUDNxtra 1-11*</li>
              <li>· vTV Española International(</li>
              <li>· vUniMás</li>
              <li>· vUniverso*</li>
              <li>· vUnivision Este</li>
              <li>· vUnivision Foro TV*</li>
              <li>· vUnivision Oeste</li>
              <li>· vUnivision TL Novelas*</li>
              <li>· vV-ME</li>
              <li>· vVideo Rola</li>
              <li>· vWapa America*</li>
              <li>· vZona Fútbol*</li>
              <li>· vAlma Vision Hispanic Network (ALMA)*</li>
              <li>· vAntena Trést</li>
              <li>· vAZ Cinema</li>
              <li>· vAzteca America</li>
              <li>· vbeIN Sports en Español</li>
              <li>· vbeIN Sports CONNECT La Ligat</li>
              <li>· vCaracol TV Internacionalt</li>
              <li>· vCentroamerica TV*</li>
              <li>· vCine Latino*</li>
              <li>· vCine Sony</li>
              <li>· vCLAN</li>
              <li>· vCNN en Español*</li>
              <li>· vCubaMax*</li>
              <li>· vDiscovery en Español*</li>
              <li>· vDiscovery Familia*</li>
              <li>· vDISH CD - La Música</li>
              <li>· vDISH CD - Latin Jazz+</li>
              <li>· vDISH CD - Mojito</li>
              <li>· vDISH CD - Viva Mariachi</li>
              <li>· vEnlace</li>
              <li>· vESNE*</li>
              <li>· vESPN Deportes</li>
              <li>· vEstrella TV*</li>
              <li>· vFOX Deportes</li>
              <li>· vGalavision</li>
            </ul>
            <p>
              Not included in DishLATINO Básico * Not included in DishLATINO
              Clásico * Not included in DishLATINO Plus
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does DishLATINO have
                Netflix?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  You can't subscribe to Netflix through DishLATINO-but you can
                  watch a separate Netflix subscription on the DISH Hopper 3
                  DVR/receiver, which you can get with DishLATINO plans.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Does DishLATINO have Netflix?"}
            cssClass={"faq-content"}
          >
            <p>
              You can't subscribe to Netflix through DishLATINO-but you can
              watch a separate Netflix subscription on the DISH Hopper 3
              DVR/receiver, which you can get with DishLATINO plans.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote dish-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Methodology:</h4>
          <p>
            Our TV experts spend hundreds of hours watching and researching
            DishLATINO and other Spanish-language offerings from cable and
            satellite TV providers in order to tell you which ones have the best
            Spanish-language channels, packages, pricing, specs, and features.
            For more information on how we work, check out our
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
            page.
          </p>
          <h4>Related articles:</h4>
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
                <Link href={"#"}>DIRECTV Review</Link>
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

export default DishLatino;
