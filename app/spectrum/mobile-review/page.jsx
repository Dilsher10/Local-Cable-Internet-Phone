// import React, { useState } from "react";
import "./spectrum-mobile-review.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { spectrumNavLinks } from "../../assets/data/navLinks/spectrumNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import spectrum from "../../assets/images/Spectrum.png";
import { GoArrowUpRight } from "react-icons/go";
import mobilereview from "../../assets/images/mobilereview.png";
import star from "../../assets/images/star.png";
import asidespectrum from "../../assets/images/asidespectrum.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import CTA from "../../components/cta-section/CTA";
import quotations from "../../assets/images/quotations.svg";
import PackageTable from "../../components/package-table/PackageTable";
import phoneone from "../../assets/images/phoneone.png";
import phonetwo from "../../assets/images/phonetwo.png";
import phonethree from "../../assets/images/phonethree.png";
// import Newsletter from "../../components/newsletter/Newsletter";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Spectrum Mobile™ Review October 2024"
};

const SpectrumMobileReview = () => {
  // const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  let heroData = {
    card1: {
      logo: spectrum,
      rating: "(3.45/5)",
      starImg: star,
      desc: "Save up to 60% on your cell phone bill",
      buttonText: "Compare Plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: mobilereview,

    cardsStrip: [
      {
        subtitle: "Price:",
        title: "$14.00–$55.00/mo.",
        icon: asidespectrum,
      },
      {
        subtitle: "Lines:",
        title: "1–10",
        icon: asidespectrum,
      },
      {
        subtitle: "Data cap:",
        title: "1–30 GB*",
        icon: asidespectrum,
      },
      {
        subtitle: "Contract",
        title: "N/A",
        icon: asidespectrum,
      },
    ],

    tableData: [
      {
        head: [
          "plans",
          "Price (single line)* ",
          "Price (2+ lines)",
          "Data allowance",
          "Overage speed limit",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "By The Gig",
              "$14.00/GB/mo.",
              "$14.00/GB/mo.",
              "1 GB/line ($14.00/mo. per additional GB)",
              "256 Kbps download/upload",
            ],
            linkPath: "#",
          },

          {
            content: [
              "2.",
              "Unlimited Data",
              "$45.00/line",
              "$29.99/line",
              "20 GB/line",
              "1 Mbps download/512 Kbps upload",
            ],
            linkPath: "#",
          },
          {
            content: [
              "3.",
              "Unlimited Plus",
              "$55.00/line",
              "$39.99/line",
              "30 GB/line",
              "1 Mbps download/512 Kbps upload",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc: "  ",
  };
  let packageTableData = [
    {
      head: ["package", "Price", "Download speeds", "Details"],

      body: [
        {
          content: [
            "1.",
            "Spectrum Internet®",
            "$49.99/mo. for 12 mos.",
            "Up to 300 Mbps (wireless speeds may vary)",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Spectrum Internet Ultra",
            "$69.99/mo. for 12 mos.",
            "Up to 500 Mbps (wireless plans may vary)",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Spectrum Internet® Gig",
            "$89.99/mo. for 12 mos.",
            "Up to 1 Gbps** (wireless speeds may vary)",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="spectrum-mobile-review">
      {/* <SubNav links={spectrumNavLinks} /> */}

      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">Spectrum Mobile™ Review October 2024</h2>
          <p className="sect-desc">
            We’ll break down the biggest strengths and weaknesses of Spectrum’s
            mobile phone service.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-spectrum-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Spectrum channel update:</h4>
          <p>
            Spectrum Mobile™ is Spectrum’s wireless services brand, and it
            offers smartphones and affordable cell phone coverage to Spectrum
            Internet® customers. If you’re interested in bundling another
            Spectrum service with your{" "}
            <span className="link">
              <Link href={"#"}>Spectrum internet plan </Link>
            </span>{" "}
            and saving a few bucks, here’s what you need to know about
            <span className="link">
              <Link href={"#"}> Spectrum Mobile. </Link>
            </span>
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
                  <td>Affordable smartphone plans</td>
                  <td>Limited discounts for larger families</td>
                </tr>
                <tr>
                  <td>Large data caps</td>
                  <td>No big signup deals</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Interested in Spectrum Mobile?"}
        desc={
          "Spectrum Mobile requires an internet subscription from Spectrum. Enter your zip code below to see if Spectrum is available in your area."
        }
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
          <Link href={"#"}>Spectrum Mobile plans </Link>
          <Link href={"#"}>What to look for </Link>
          <Link href={"#"}>Available phones with Spectrum </Link>
        </div>
      </div>

      <div className="section spectrum-mobile-plans">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> Mobile plans </span>
          </h2>
          <p className="sect-desc">
            Every Spectrum Mobile plan includes features like nationwide
            coverage, unlimited calls and texts, 4G LTE mobile data, 5G access,
            and hotspot tethering support. You’ll also get free international
            coverage, no service contracts, and mobile access to Spectrum’s
            <span className="link">
              <Link href={"#"}> hotspot network. </Link>
            </span>{" "}
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Spectrum Mobile cell phone plans</h4>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change.
          </p>
          <p className="after-heading">
            By The Gig is Spectrum Mobile’s basic cell phone plan. For $14.00
            monthly, you’ll get one line with 1 GB of data. The plan’s data is
            shared across every line on your plan, and you can add more data
            ($14.00 a month per additional GB) if the plan’s 1 GB default is too
            small for your family’s needs.
            <br />
            Once a line uses more than 5 GB of data, Spectrum Mobile will
            throttle its download and upload speeds to a meager 256 Kbps. At
            this speed, the only thing you’ll be able to do on mobile data is
            web browsing. Most carriers do speed throttling, and although we’re
            not fans of the policy, Spectrum Mobile does offer faster throttle
            speeds on its Unlimited plans.
            <br />
            By The Gig is the best cell phone plan for family members who only
            make calls or do basic web browsing because, once you add on more
            than two GBs to support more internet use, it’ll make more sense to
            upgrade to Spectrum Mobile’s other plans. At 3 GB of data on By The
            Gig ($42.00/mo.), you’ll be better off paying for an Unlimited plan
            (starting at $45.00/mo.) and its 20 GB data cap.
          </p>
          <div className="endnote review-endnote">
            <div className="endnote-container">
              <Image
                className="quotation-img"
                src={quotations}
                alt="quotations"
              />
              <h4>Pro tip:</h4>
              <p>
                J.D. Power ranked Spectrum as their{" "}
                <span className="link">
                  <Link href={"#"}> top mobile virtual network operator</Link>
                </span>{" "}
                (MVNO) in 2021, and Spectrum was a top provider in our
                <span className="link">
                  <Link href={"#"}>
                    {" "}
                    annual internet customer satisfaction survey.
                  </Link>
                </span>
              </p>
            </div>
          </div>
          <p className="after-heading">
            Spectrum Mobile’s other two plans may be called Unlimited, but
            they’re “unlimited” in the same way that marathoning Ozark until 4
            a.m. is “a TV night.”
            <br />
            You’ll have a 20 GB cap on Unlimited Data and a 30 GB cap on
            Unlimited Plus. Once you exceed these limits, you’ll still
            technically be able to use the internet, but your speeds will be
            lowered to 1 Mbps for downloads and 512 Kbps for uploads.
            <br />
            Although we’re not fans of data caps, Spectrum Mobile’s data caps
            are in line with competitors and big enough for many customers.
            Unless you’re regularly streaming videos and downloading apps off
            your phone, most people won’t regularly break 20 GB of monthly
            mobile data.
            <br />
            But if you’re close to your monthly limit, you can hop onto Wi-Fi
            via the carrier’s nationwide hotspot network to conserve mobile
            data.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Spectrum Mobile fees</h4>
          <p className="after-heading">
            Spectrum Mobile thankfully doesn’t have too many extra fees, as its
            biggest standard charge is a one-time $10 activation fee per line.
            Tablets with mobile data will need their own line, while it’ll cost
            a $10 monthly fee to add a smartwatch to your mobile data plan.
            <br />
            If you cancel Spectrum Internet (which is required for Spectrum
            Mobile) at any time, you’ll be hit with an extra $20 monthly charge
            per line for Spectrum Mobile. You’ll also have reduced Spectrum
            hotspot speeds (5 Mbps download and 1 Mbps upload), and you won’t be
            able to add additional lines to your account.
            <br />
            All of these fees and penalties are permanent for Spectrum Mobile
            customers who drop Spectrum Internet, and they put a big damper on
            Spectrum Mobile’s value if you ever decide to change internet
            providers. You’ll get the best savings from Spectrum Mobile by
            bundling the service with Spectrum Internet.
          </p>
        </div>
      </div>

      <div className="section spectrum-what-to-look-for">
        <div className="head">
          <h2 className="sect-heading">
            <span> What </span> to look for
          </h2>
          <p className="sect-desc">
            From Kroger Wireless to Google Fi, Spectrum isn’t the only company
            with an MVNO on the side. Let’s break down the biggest differences
            if you’re undecided between Spectrum Mobile,{" "}
            <span className="link">
              <Link href={"#"}>other MVNOs, </Link>
            </span>{" "}
            or a traditional phone carrier.{" "}
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Spectrum Mobile vs. the competition</h4>
          <p className="after-heading">
            The sheer number of MVNOs makes it hard to directly compare Spectrum
            Mobile to competitors, but generally, we’d recommend following two
            rules: look at each provider’s data cap and monthly rate per line.
            <br />
            Your ideal data cap depends on what you’re using your smartphone for
            every day. Are you just sending texts, or are you regularly
            streaming Apple Music and TV shows on your way to work? Go with a 1
            GB data cap for family members who aren’t heavy smartphone users,
            and get a cap of at least 5 GB for anyone who’s regularly streaming
            podcasts or TV shows on their phone.
            <br />
            As for line pricing, Spectrum Mobile’s flat-rate pricing makes it
            easy to figure out your monthly bill. But some MVNOs like Xfinity
            Mobile offer larger discounts depending on the number of lines on
            your account. Consider the number of lines your family needs and
            mix-and-match plans to find the best deal.
          </p>
          <div className="endnote review-endnote">
            <div className="endnote-container">
              <Image
                className="quotation-img"
                src={quotations}
                alt="quotations"
              />
              <h4>Pro tip:</h4>
              <p>
                If your family already has smartphones, you can use Spectrum
                Mobile’s
                <span className="link">
                  <Link href={"#"}> compatible device </Link>
                </span>{" "}
                wizard to see if they can be moved to the carrier.
              </p>
            </div>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Spectrum Mobile vs. major phone providers</h4>
          <p className="after-heading">
            In most cases, plans from an MVNO like Spectrum Mobile will be
            cheaper than those from a major phone provider like AT&T or Verizon.
            That’s because, even though Spectrum Mobile uses Verizon’s network,
            it doesn’t have to pay for things like network upkeep and can pass
            those savings onto you.
            <br />
            MVNOs can be a great value for customers who simply need smartphone
            service, but the big companies often offer sizable deals to
            encourage you to sign up. Depending on the carrier, you might be
            able to bundle fully unlimited mobile data, free streaming service
            subscriptions, or jumbo hotspot data caps with your phone plan.
          </p>
        </div>
      </div>

      <div className="section spectrum-available-phone">
        <div className="head">
          <h2 className="sect-heading">
            <span> Available phones </span> with Spectrum
          </h2>
          <p className="sect-desc">
            When you switch to Spectrum Mobile, you can either bring your own
            device (a process it’s cheekily named BYOD) or buy a new one.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Bring your own phone</h4>
          <p className="after-heading">
            If you choose to BYOD, your device must be running the most
            up-to-date operating system software and be unlocked before you
            activate your new service. If you usually put off system updates
            (we’ve been there!), any new downloads might mean clearing off some
            space on your phone. Make sure you remember to back up anything
            important.
            <br />
            To check if your device is compatible with Spectrum Mobile, enter
            your device ID into Spectrum’s{" "}
            <span className="link">
              <Link href={"#"}>BYOD eligibility tool.</Link>
            </span>
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Buying a new phone through Spectrum</h4>
          <p className="after-heading">
            Spectrum carries the most recent popular phones, like the iPhone 13
            Pro Max and the Galaxy S22 Ultra. You can even get a Galaxy Z Flip3
            5G if you feel like reliving the flip-phone days of yore.
          </p>
          <div className="container">
            <div className="column">
              <Image
                src={phoneone}
                alt="iphone-images"
                className="iphone-images"
              />
            </div>
            <div className="column">
              <Image
                src={phonetwo}
                alt="iphone-images"
                className="iphone-images"
              />
            </div>
            <div className="column">
              <Image
                src={phonethree}
                alt="iphone-images"
                className="iphone-images"
              />
            </div>
          </div>
        </div>

        <div className="package-table-container channels">
          <h4>Trade-in offers and deals</h4>
          <p className="after-heading">
            If you choose to BYOD, your device must be running the most
            up-to-date operating system software and be unlocked before you
            activate your new service. If you usually put off system updates
            (we’ve been there!), any new downloads might mean clearing off some
            space on your phone. Make sure you remember to back up anything
            important.
            <br />
            To check if your device is compatible with Spectrum Mobile, enter
            your device ID into Spectrum’s BYOD eligibility tool.
          </p>
        </div>
      </div>

      <div className="section spectrum-final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take:<span> Is Spectrum Mobile worth it?</span>
          </h2>
          <p className="sect-desc">
            MVNOs are built around value-friendly plans that’ll save money, and
            Spectrum Mobile is no different. With excellent coverage, sizable
            data caps, and affordable monthly plans, Spectrum Mobile has a lot
            to offer customers who want to bundle internet and smartphone
            service from Spectrum.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>Get Spectrum Mobile</Link>
        </div>
      </div>

      <div className="section spectrum-faq">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> FAQ </span>
          </h2>

          <p className="sect-desc">
            TL;DR? Xfinity kills it. For more detailed info on all Xfinity
            equipment and services, see our comprehensive Xfinity equipment
            guide.
          </p>
        </div>

        <div className="faq-wrapper">
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(1)}>
                <span>{faq === 1 ? "-" : "+"}</span> Is Spectrum Mobile owned by
                Verizon?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Spectrum Mobile is not owned by Verizon, but it does use
                  Verizon's cell phone network. Spectrum Mobile's parent company
                  is Charter Communications.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"Is Spectrum Mobile owned by Verizon?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum Mobile is not owned by Verizon, but it does use Verizon's
              cell phone network. Spectrum Mobile's parent company is Charter
              Communications.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is Spectrum Mobile
                expensive?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Spectrum Mobile is not expensive for a smartphone provider.
                  Spectrum Mobile's plans start at $14.00 per month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"Is Spectrum Mobile expensive?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum Mobile is not expensive for a smartphone provider.
              Spectrum Mobile's plans start at $14.00 per month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Is Spectrum Mobile truly
                unlimited?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Spectrum Mobile has data caps of 20 GB and 30 GB on its
                  Unlimited plans. Once you hit this cap, you'll still have
                  internet access, but it'll be slower for the rest of the
                  month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"Is Spectrum Mobile truly unlimited?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum Mobile has data caps of 20 GB and 30 GB on its Unlimited
              plans. Once you hit this cap, you'll still have internet access,
              but it'll be slower for the rest of the month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Will Spectrum Mobile pay me
                to switch?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Spectrum Mobile won't pay you to switch phone providers, but
                  Spectrum Internet will cover up to $500 in early termination
                  fees if you switch from another internet provider. Check out
                  our Spectrum deals page to learn more about this offer.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={"Will Spectrum Mobile pay me to switch?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum Mobile won't pay you to switch phone providers, but
              Spectrum Internet will cover up to $500 in early termination fees
              if you switch from another internet provider. Check out our
              Spectrum deals page to learn more about this offer.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>What carrier is Spectrum
                Mobile?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Spectrum Mobile uses Verizon's network for its phone plans.
                  This means that you can bundle your Spectrum phone service
                  with your Spectrum internet and/or cable bill and still access
                  Verizon's coverage across most of the US
                  <br />
                  However, since resources are finite, Verizon has the final say
                  over which customers get prioritized-and spoiler alert,
                  they're going to choose their own. The major downside of
                  bundling mobile service through a separate TV and/or internet
                  provider is that Verizon can throttle your speeds if you're in
                  an area with a lot of usage.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"What carrier is Spectrum Mobile?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum Mobile uses Verizon's network for its phone plans. This
              means that you can bundle your Spectrum phone service with your
              Spectrum internet and/or cable bill and still access Verizon's
              coverage across most of the US
              <br />
              However, since resources are finite, Verizon has the final say
              over which customers get prioritized-and spoiler alert, they're
              going to choose their own. The major downside of bundling mobile
              service through a separate TV and/or internet provider is that
              Verizon can throttle your speeds if you're in an area with a lot
              of usage.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>See also: Spectrum Overview | Spectrum Internet | Spectrum TV</p>
      </div>

      <div className="section endnote spectrum-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Methodology:</h4>
          <p>
            We analyzed Spectrum Mobile data including user reviews, pricing
            information, our annual internet customer satisfaction survey, and
            competitor plans to figure out how Spectrum Mobile stacks up as a
            phone provider. For more on our methodology,
            <span className="link">
              <Link href={"#"}>How We Rank </Link>
            </span>{" "}
            page.
          </p>
          <h4>See Also:</h4>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Spectrum Internet </Link>
              </span>{" "}
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Spectrum TV</Link>
              </span>{" "}
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Spectrum Bundles </Link>
              </span>{" "}
            </li>
          </ul>
          <h4>Disclaimer:</h4>
          <p>
            <span className="bold">Restrictions Apply:</span> Spectrum Mobile
            service not available in all areas. Per line activation fee,
            Spectrum Internet and Auto-pay required. Other restrictions apply.
          </p>
          <p>
            <span className="bold">Trade-In Offer:</span> Limited time offer
            while supplies last. Spectrum Internet required. Auto-pay required.
            Up to $200 off eligible phones at time of purchase. Offer may be
            combined with $100 Trade-in promotion which requires customers to
            trade-in qualifying device, add a new line, purchase and activate a
            new phone. If new phone financed, credit applied to bill in
            pro-rated increments for duration of Device Payment plan. If
            wireless service cancelled, remaining balance on device becomes due.
            No additional discounts may be combined with this or other offers.
            Visit spectrum.com/policies/mobile-terms for details. Restrictions
            apply. Subject to change.
          </p>
          <p>
            <span className="bold">Restrictions Apply: </span> To access 5G, 5G
            compatible phone and 5G service required. Not all 5G capable phones
            compatible with all 5G service. Speeds may vary. Visit
            spectrum.com/mobile/5G for details.
          </p>
        </div>
      </div>
      {/* <Newsletter /> */}
    </div>
  );
};

export default SpectrumMobileReview;
