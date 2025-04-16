// import React, { useState } from "react";
import "./hulu-bundles.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { huluNavLinks } from "../../assets/data/navLinks/huluNavLinks";
import hulureview from "../../assets/images/hulu-bundles.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import hulu from "../../assets/images/hulu-logo.png";
import huluicon from "../../assets/images/hulu-icon.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import { FaCheck } from "react-icons/fa6";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";
import PackageTable from "../../components/package-table/PackageTable";

export const metadata = {
  title: "Hulu Bundles"
};

const HuluBundles = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: hulu,
      rating: "(4.5/5)",
      starImg: star,
      desc: "Save up to $28.00/mo.",
      buttonText: "read hulu review",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: hulureview,

    cardsStrip: [
      {
        subtitle: "Free Trial:",
        title: "N/A",
        icon: huluicon,
      },
      {
        subtitle: "Price:",
        title: "$9.99–$89.99/mo.",
        icon: huluicon,
      },
      {
        subtitle: "FBundle with:",
        title: "Live TV, Disney+, ESPN+",
        icon: huluicon,
      },
      {
        subtitle: "Ads:",
        title: "Optional",
        icon: huluicon,
      },
    ],

    tableData: [
      {
        head: ["Plan", "price", "Ad-free?*", "Details"],

        body: [
          {
            content: [
              "1.",
              "Hulu (Limited Ads)",
              "$9.99/mo.",
              <FaCheck key="Fa1" className="check-icon" />,
            ],
            linkPath: "#",
          },
          {
            content: [
              "2.",
              "Trio Basic",
              "$14.99/mo.",
              <FaCheck key="Fa2" className="check-icon" />,
            ],
            linkPath: "#",
          },
          {
            content: [
              "3.",
              "Trio Premium",
              "$24.99/mo.",
              <FaCheck key="Fa3" className="check-icon" />,
            ],
            linkPath: "#",
          },
          {
            content: [
              "4.",
              "Hulu + Live TV, Disney+, ESPN+",
              "$76.99/mo..",
              <FaCheck key="Fa4" className="check-icon" />,
            ],
            linkPath: "#",
          },
          {
            content: [
              "5.",
              "Hulu + Live TV, Disney+, ESPN+",
              "$89.99/mo.",
              <FaCheck key="Fa5" className="check-icon" />,
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc: "*There is no ad-free version of ESPN+ or Live TV.",
  };
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  let packageTableData = [
    {
      head: ["Plan", "price", "Ad-free?*", "Details"],

      body: [
        {
          content: [
            "1.",
            "Hulu (Limited Ads)",
            "$9.99/mo.",
            <FaCheck key="Fa6" className="check-icon" />,
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Trio Basic",
            "$14.99/mo.",
            <FaCheck key="Fa7" className="check-icon" />,
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Trio Premium",
            "$24.99/mo.",
            <FaCheck key="Fa8" className="check-icon" />,
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Hulu + Live TV, Disney+, ESPN+",
            "$76.99/mo..",
            <FaCheck key="Fa9" className="check-icon" />,
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "Hulu + Live TV, Disney+, ESPN+",
            "$89.99/mo.",
            <FaCheck key="Fa10" className="check-icon" />,
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="hulu-bundles">
      {/* <SubNav links={huluNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Hulu Bundles: Disney Plus, ESPN Plus, And More
          </h2>
          <p className="sect-desc">
            The Hulu, Disney+, and ESPN+ bundle is a great deal—and it’s not the
            only one.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Hulu bundles and pricing</h4>
          <p>
            If you’re looking to upgrade or begin a Hulu subscription, you’ve
            got plenty of options to save a couple bucks. <br />
            On our Hulu Deals page, we’ve highlighted ways to save a few bucks
            on your Hulu subscription, like combining Hulu with Spotify or
            Sprint. Good to know if you’re a student or a Sprint customer.
            <br />
            But our favorite is still the Disney bundle subscription for
            $9.99–$24.99/mo. a month. You can also bundle Hulu with more than
            just Disney+ and ESPN+; Hulu also offers ad-ons likeLive TV, Max,
            and SHOWTIME.
          </p>
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
          <Link href={"#"}>Bundling Hulu with another service </Link>
          <Link href={"#"}>Bundling Hulu with premium channels </Link>
          <Link href={"#"}>Bundling Hulu with third-party billing </Link>
        </div>
      </div>

      <CTA
        heading={"You’ll need a fast internet plan to stream all that TV"}
        desc={
          "Wanna speed up your download speeds? Enter your zip code below to see top internet providers in your area."
        }
      />

      <div className="section features">
        <div className="head">
          <h2 className="sect-heading">
            Bundling Hulu <span> with another service </span>
          </h2>
          <p className="sect-desc">
            Hulu is owned by Disney, so you can bundle it with other Disney
            services. Right now, that includes Disney+ and ESPN+. There are also
            different deals depending on whether you want to subscribe to Hulu’s
            live TV streaming service, Hulu + Live TV.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Bundling Hulu with Disney Plus and ESPN Plus</h4>
          <p className="after-heading">
            For $14.99 a month, you get access to on-demand Hulu, Disney+, and
            ESPN+. All three services will have ads, but you can remove ads from
            your Hulu and Disney+ subscriptions by upgrading the to $24.99 a
            month Trio Premium. <br />
            If you’re not a big sports fan, you could downgrade to Duo Basic,
            saving money and cutting ESPN+ out of the deal entirely.
            Unfortunately, there’s no way to get an ad-free Hulu/Disney+ bundle
            without also including ESPN+. You also can’t mix and match ad-free
            Disney+ with ad-supported Hulu—legacy customers can keep this
            configuration, but it’s not publicly available anymore. <br />
            Disney+ is the home to all things Marvel, Star Wars, Pixar, National
            Geographic, and, of course, Disney movies and TV series. You’ve
            probably heard of Disney+ hit originals like WandaVision and The
            Mandalorian; if not, welcome back to this alternate universe. <br />
            ESPN+ offers live sports (mostly UFC, soccer, and baseball) and a
            massive library of sports documentaries and ESPN+ exclusive
            originals, although it doesn’t act as a full replacement for the
            ESPN cable channel.
          </p>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            Data effective as of post date. Offers and availability may vary by
            location and are subject to change. *There is no ad-free version of
            ESPN+.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>get hulu, ESPN+, Disney+ bundles</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Bundling Hulu + Live TV with Disney Plus and ESPN Plus</h4>
          <p className="after-heading">
            The Disney+ bundle deal is also available for Hulu + Live TV, which
            combines the on-demand catalog of Hulu with 70+ live TV streaming
            channels. Unfortunately, these bundles don’t get fun names like
            “Duo” or “Trio.”
            <br />
            Hulu + Live TV bundled with Disney+ and ESPN+ costs $76.99 a month
            with ads and $89.99 a month without. Keep in mind, though, that
            ESPN+ and the “Live TV” portion of Hulu will still both have ads, so
            you’re really only paying to remove ads from on-demand Hulu and
            Disney+.
            <br />
            These plans also come with an ESPN+ hub built into Hulu, combining
            two streaming services into one.
          </p>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            Data effective as of post date. Offers and availability may vary by
            location and are subject to change. *There is no ad-free version of
            ESPN+.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>get hulu, live TV, ESPN+ and Disney+ bundles</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Bundling Hulu with premium channels</h4>
          <p className="after-heading">
            Since they’re technically add-ons, not bundles, you don’t really
            save any money by subscribing to premium channels through Hulu—it is
            convenient, though. Hulu offers the following premium and channel
            package add-ons:
          </p>
          <ul>
            <li>Max: $15.99/mo.</li>
            <li>SHOWTIME: $10.99/mo.</li>
            <li>STARZ: $9.99/mo.</li>
            <li>CINEMAX: $8.99/mo.</li>
            <li>Entertainment (17 channels): $7.99/mo.</li>
            <li>Español (7 channels): $4.99/mo.</li>
            <li>Sports (6 channels): $9.99/mo.</li>
          </ul>
          <hr />
          <div className="btn">
            <Link href={"/"}>get hulu premium channels</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Bundling Hulu through third-party billing</h4>
          <p className="after-heading">
            If you already have Hulu, but you’re paying for it through a third
            party (like Roku, Spotify, Sprint, or iTunes), you’d have to cancel
            that account to be eligible for the Hulu/Disney+/ESPN+ bundle. Those
            who already subscribe to Hulu or Disney+ directly can sign up for
            the bundle; ESPN+ subscribers can also do this, but they have to
            contact Disney+ to make the switch (not cool).
            <br />
            The exception to the third-party billing rule is Verizon Wireless.
            Some Verizon Unlimited plans include the Hulu/Disney+/ESPN+ bundle
            at no extra charge, and is available to both new and current
            customers.
          </p>
          <hr />
          <div className="btn">
            <Link href={"/"}>get verizon, hulu, ESPN+, Disney+ bundle</Link>
          </div>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Hulu Bundles </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What bundles are available
                for Hulu?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  You can bundle Hulu with Disney+ and/or ESPN+ with one of the
                  Disney Bundle plans, which start at just $9.99 per month. You
                  can also bundle Hulu with premium channels like Max and
                  SHOWTIME, but you won’t get any discounts there.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What bundles are available for Hulu?"}
            cssClass={"faq-content"}
          >
            <p>
              You can bundle Hulu with Disney+ and/or ESPN+ with one of the
              Disney Bundle plans, which start at just $9.99 per month. You can
              also bundle Hulu with premium channels like Max and SHOWTIME, but
              you won’t get any discounts there.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is there a Hulu Disney Plus
                bundle?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Yes, you’re thinking of the Disney Bundle! It comes in several
                  flavors, but the most basic is $9.99 a month for ad-supported
                  Hulu and Disney+.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Is there a Hulu Disney Plus bundle?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, you’re thinking of the Disney Bundle! It comes in several
              flavors, but the most basic is $9.99 a month for ad-supported Hulu
              and Disney+.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Is there a Hulu/Disney Plus
                bundle?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Yes, there are several Hulu/Disney Plus bundles. They vary
                  based on whether you want to add ESPN+ or go ad-free:
                </p>
                <br />
                <ul>
                  <li>Duo Basic ($9.99/mo.)</li>
                  <li>Trio Basic ($14.99/mo.)</li>
                  <li>Trio Premium ($24.99/mo.)</li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Is there a Hulu/Disney Plus bundle?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, there are several Hulu/Disney Plus bundles. They vary based
              on whether you want to add ESPN+ or go ad-free:
            </p>
            <br />
            <ul>
              <li>Duo Basic ($9.99/mo.)</li>
              <li>Trio Basic ($14.99/mo.)</li>
              <li>Trio Premium ($24.99/mo.)</li>
            </ul>
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
            Our experts have spent thousands of hours researching streaming
            services to bring you the best deals and bundles on the market. For
            more on our process, head over to
            <span className="link">
              <Link href={"#"}>How We Rank. </Link>
            </span>
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Hulu + Live TV Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Disney+ Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>ESPN+ Review</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Hulu Channels | Hulu Deals | Hulu Review | What to Watch on
          Hulu
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default HuluBundles;
