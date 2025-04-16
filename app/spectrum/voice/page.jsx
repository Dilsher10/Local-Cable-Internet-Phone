// import React, { useState } from "react";
import "./spectrum-voice.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { spectrumNavLinks } from "../../assets/data/navLinks/spectrumNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import spectrum from "../../assets/images/Spectrum.png";
import { GoArrowUpRight } from "react-icons/go";
import reviewmantwo from "../../assets/images/reviewmantwo.png";
import star from "../../assets/images/star.png";
import asidespectrum from "../../assets/images/asidespectrum.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import quotations from "../../assets/images/quotations.svg";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Spectrum Voice: Plans, Prices, And More"
};

const SpectrumVoice = () => {
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
      desc: "Cheapest phone option",
      buttonText: "Compare Plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: reviewmantwo,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "spectrum",
        icon: asidespectrum,
      },
      {
        subtitle: "Features:",
        title: "Free unlimited calls in North America",
        icon: asidespectrum,
      },
      {
        subtitle: "Price:",
        title: "From $14.99/mo.*",
        icon: asidespectrum,
      },
    ],

    tableData: [],

    bottomDesc:
      "Data effective as of publish date. Offers and availability may vary by location and are subject to change. See full disclaimer.",
  };
  let packageTableData = [
    {
      head: [
        "package",
        "Introductory prices",
        "Download speeds",
        "Channel count",
        "Phone plan",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Internet + Voice",
            "From $64.98/mo. for 12 mos.",
            "Up to 300 Mbps (wireless speeds may vary)",
            "N/A",
            "Unlimited nationwide calling",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "TV Select Signature + Voice",
            "From $74.98/mo. for 12 mos.",
            "N/A",
            "150+ channels",
            "Unlimited nationwide calling",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Internet + TV Select Signature + Voice",
            "From $124.97/mo. for 12 mos.",
            "Up to 1 Gbps** (wireless speeds may vary)",
            "150+ channels",
            "Unlimited nationwide calling",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataTwo = [
    {
      head: ["package", "Price", "Channel count", "Details"],

      body: [
        {
          content: [
            "1.",
            "Spectrum Internet®",
            "$39.99/mo. for 12 mos.°",
            "145+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Latino View (add-on)",
            "$12.00/mo. for 12 mos.",
            "70+",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="spectrum-voice">
      {/* <SubNav links={spectrumNavLinks} /> */}

      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum Voice: Plans, Prices, And More
          </h2>
          <p className="sect-desc">
            Use our Spectrum Voice recommendations to get the landline phone
            service, and stay connected to friends or family.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-spectrum-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is Spectrum Voice good?</h4>
          <p>
            Between smartphones and video calling services, it’s understandable
            if you forgot landline phone service was still a thing.
            <br />
            If you need an affordable option for international phone calls,
            Spectrum Voice, which is the provider’s no contract landline
            service, offers great overseas call coverage. But you’ll have to
            jump through more hoops than you’d expect to get the service.
          </p>
          <br />
          <h4>Spectrum Voice pros and cons</h4>
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
                  <td>Free unlimited calling in North America</td>
                  <td>Requires Spectrum TV or internet service</td>
                </tr>
                <tr>
                  <td>Affordable international call rates</td>
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
          <Link href={"#"}>Spectrum Voice plans and bundles</Link>
          <Link href={"#"}>Spectrum Voice features</Link>
          <Link href={"#"}>Spectrum Voice equipment</Link>
        </div>
      </div>

      <div className="section spectrum-plans-and-bundles">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum Voice <span> plans and bundle</span>
          </h2>
          <p className="sect-desc">
            <span className="link">
              <Link href={"#"}>Spectrum </Link>
            </span>{" "}
            doesn’t offer Spectrum Voice as a standalone package, so you’ll have
            to bundle with Spectrum Internet® or TV packages in order to get
            your landline phone set up. By combining Spectrum telephone service
            with an{" "}
            <span className="link">
              <Link href={"#"}> Internet or TV bundle, </Link>
            </span>{" "}
            you won’t have to worry about paying multiple bills to different
            providers. But Spectrum’s bundle restriction can be a hassle if your
            biggest priority is home phone service. Although Spectrum Voice’s
            $14.99 per month when bundled rate is among the lowest compared to
            other providers, the cheapest Spectrum Voice bundle (Spectrum
            Internet + Voice) still costs $64.98 per month for the first year.
            <br />
            Spectrum’s bundle rule also makes it difficult to buy Spectrum Voice
            unless you’re also looking for TV or internet service or are almost
            done with your current provider contract.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Spectrum home phone bundles in your area</h4>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change. See full disclaimer.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Spectrum Voice features</h4>
          <p className="after-heading">
            With Spectrum Voice, you’ll get unlimited calling to most of North
            America including the US, Mexico, Canada, and Puerto Rico. For an
            extra $5 per month, you can add unlimited international calls to
            more than 70 countries including Hong Kong, Spain, and the United
            Kingdom.
            <br />
            Along with its local and international coverage, Spectrum Voice also
            includes multiple incoming call screening, robocall blocking, and
            online management features for free:
          </p>
          <ul className="channel-list">
            <li>· Voicemail</li>
            <li>· Readable voicemail</li>
            <li>· Forward all or selected calls</li>
            <li>· Set backup phone</li>
            <li>· VIP ring</li>
            <li>· 3-way calling</li>
            <li>· Repeat dialing</li>
            <li>· Caller ID on TV</li>
            <li>· Block unwanted callers</li>
            <li>· Forward calls when busy</li>
            <li>· Trace call</li>
            <li>· Call Guard</li>
          </ul>
          <hr />
          <div className="btn">
            <Link href={"#"}>sign up for spectrum</Link>
          </div>
        </div>

        <div className="package-table-container channels">
          <h4>Spectrum Voice equipment</h4>
          <p className="after-heading">
            Your Spectrum Voice subscription includes a phone modem that
            connects Spectrum’s phone network to your home. Depending on your
            Spectrum bundle, you might get a combo phone and internet modem that
            will support both Spectrum services.
            <br />
            You won’t need to install any additional hardware, and the modem is
            included with your Spectrum Voice fee.
          </p>
          <hr />
          <div className="btn">
            <Link href={"#"}>sign up for spectrum</Link>
          </div>
        </div>
      </div>

      <div className="section spectrum-channels-packages ">
        <div className="head">
          <h2 className="sect-heading">
            Spectrum <span> TV channels </span> by packages
          </h2>
          <p className="sect-desc">
            To find out what channels are available with your Spectrum TV
            package, check out Spectrum’s online channel lineup tool. There you
            can sort by packages, premium channels, and add-ons to see exactly
            which channels you’ll be getting with your plan.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Spectrum premium channels</h4>
          <p className="after-heading">
            If you want more movies, TV series, and live sports—just more
            popular channels—you can add the following channel add-on packs and
            premium channels to your Spectrum subscription.
            <br />
            See what custom TV packages you can concoct with Spectrum TV Select
            Signature and the following add-ons:
          </p>
          <br />
          <ul>
            <li>· CINEMAX ($10.00/mo.)</li>
            <li>
              · Entertainment View ($12.00/mo.): Includes 70+ channels like
              Cooking Channel, NFL Network, OWN, and more.
            </li>
            <li>
              · Max ($16.00/mo.): Includes total access to the{" "}
              <span className="link">
                <Link href={"#"}>Max </Link>
              </span>{" "}
              on-demand streaming service.
            </li>
            <li>
              · SHOWTIME ($10.00/mo.): Includes{" "}
              <span className="link">
                <Link href={"#"}> SHOWTIME </Link>
              </span>{" "}
              streaming content through{" "}
              <span className="link">
                <Link href={"#"}> SHOWTIME Anytime </Link>
              </span>
            </li>
            <li>
              · STARZ & STARZ ENCORE® ($9.00/mo.): Includes six premium channels
              and{" "}
              <span className="link">
                <Link href={"#"}> STARZ On Demand. </Link>
              </span>
            </li>
            <li>· THE MOVIE CHANNELTM ($5.00/mo.)</li>
            <li>· MGM+ ($6.00/mo.)</li>
          </ul>
        </div>

        <div className="package-table-container channels">
          <h4>Spectrum sports channel add-ons</h4>
          <p className="after-heading">
            Hey, sports fans: If you just gotta have more sports content, check
            out these add-ons. We included SHOWTIME here, too, since it carries
            live boxing and MMA events.
          </p>
          <ul>
            <li>
              · FOX Soccer Plus ($10.00/mo.): Live soccer and rugby spanning the
              globe.
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> MLB EXTRA INNINGS </Link>
              </span>
              ($139.99/season): Enjoy 90 out-of-market games every week.
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> NBA League Pass </Link>
              </span>{" "}
              ($99.00/half-season): Up to 40 out-of-market basketball games
              weekly.
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> NHL Center Ice </Link>
              </span>{" "}
              ($79.00/season): Up to 40 out-of-market ice hockey games weekly.
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> SHOWTIME® </Link>
              </span>
              ($10.00/mo.): SHOWTIME’s six live feeds show live boxing and MMA
              events.
            </li>
            <li>
              · Sports View ($7.00/mo.): 20 sports channels, including NFL
              Network, NFL RedZone, NHL Network, and more).
            </li>
          </ul>
          <br />
          <p>
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change.{" "}
            <span className="link">
              <Link href={"#"}>See full disclaimer. </Link>
            </span>
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Spectrum Latino packages</h4>
          <p className="after-heading">
            Spectrum includes some Spanish-language channels, like Telemundo and
            Univision, in its regular packages. But you can get muchos más in
            Spectrum’s Latino TV plans.
            <br />
            Mi Plan Latino includes 80+ Spanish-language channels from Mexico,
            Latin America, and Spain—plus 60+ English-language channels from TV
            Select Signature.
          </p>
          <PackageTable item={packageTableDataTwo} />
          <p className="below-table">
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change. See full disclaimer.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Spectrum international add-ons</h4>
          <p className="after-heading">
            Jagshemash! If you’d like to keep up with news and shows from
            another country, Spectrum offers the following international channel
            packs. Unfortunately, you can watch them only with the Spectrum TV
            app—fortunately, it’s free with your Spectrum TV subscription.
          </p>
          <ul className="channel-list">
            <li>· Filipino View—8 channels ($19.99/mo.)</li>
            <li>· India View—3 channels ($14.99/mo.)</li>
            <li>· India View Premium—7 channels ($29.99/mo.)</li>
            <li>· Japanese View—1 channel ($14.99/mo.)</li>
            <li>· Korean View—6 channels ($12.99/mo.)</li>
            <li>· Latino View—70+ channels ($12.00/mo.)</li>
            <li>· Chinese View—6 channels ($9.99/mo.)</li>
            <li>· Punjabi View—2 channels ($4.99/mo.)</li>
            <li>· Vietnamese View—2 channels ($9.99/mo.)</li>
          </ul>
          <p>
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Spectrum TV plans and packages</h4>
          <p className="after-heading">
            If you’ve found the channel lineup you want, here’s a reminder of
            pricing and other vital statistics of Spectrum’s TV packages that we
            mentioned way up top.
          </p>
          <PackageTable item={packageTableDataTwo} />
          <p className="below-table">
            Data effective as of publish date. Offers and availability may vary
            by location and are subject to change. See full disclaimer.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span>Is Spectrum worth it?</span>
          </h2>
          <p className="sect-desc">
            Even if Spectrum Voice costs only $14.99 by itself when bundled,
            Spectrum’s mandatory bundle requirements means you’ll have to add TV
            or Internet service—the least you’ll pay is $64.98 per month.
            <br />
            But if you’re already looking for internet or TV service and need an
            affordable way to call overseas family or friends, Spectrum Voice’s
            unlimited coverage across North America, low international rates,
            and features like caller ID and readable voicemails could make the
            service a strong fit for your house.
          </p>
        </div>

        <div className="all-links">
          <Link href={"#"}>Sign up for xfinity</Link>
        </div>
      </div>

      <div className="section spectrum-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>Spectrum </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What is included in
                Spectrum Voice?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Your Spectrum Voice service includes a bundled phone modem and
                  features like voicemail, robocall blocking, and caller ID.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What is included in Spectrum Voice?"}
            cssClass={"faq-content"}
          >
            <p>
              Your Spectrum Voice service includes a bundled phone modem and
              features like voicemail, robocall blocking, and caller ID.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Do I need Spectrum Voice?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  You could benefit from Spectrum Voice if you're looking for an
                  affordable way to call friends or family members who live
                  overseas. Spectrum Voice has unlimited calls across North
                  America for $14.99 per month when bundled, and you can add
                  unlimited calling to more than 70 countries for an extra $5.00
                  per month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Do I need Spectrum Voice?"}
            cssClass={"faq-content"}
          >
            <p>
              You could benefit from Spectrum Voice if you're looking for an
              affordable way to call friends or family members who live
              overseas. Spectrum Voice has unlimited calls across North America
              for $14.99 per month when bundled, and you can add unlimited
              calling to more than 70 countries for an extra $5.00 per month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Can I cancel Spectrum
                Voice?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  <span className="link">
                    <Link href={"#"}> Spectrum's TV packages </Link>
                  </span>
                  offer a strong selection of basic channels at an affordable
                  price. If you need more channels, you can upgrade your package
                  with à la carte options.
                  <br />
                  Internet needs vary depending on your personal needs. But in
                  most cases,{" "}
                  <span className="link">
                    <Link href={"#"}> Spectrum Internet 300 Mbps </Link>
                  </span>{" "}
                  will be fine for one person or small households, Spectrum
                  Internet 500 Mbps will have enough download performance for
                  most families, and Spectrum Internet Gig can accommodate
                  families and heavy internet users who are frequently streaming
                  movies, playing multiplayer online games, or taking daily
                  video calls.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Can I cancel Spectrum Voice?"}
            cssClass={"faq-content"}
          >
            <p>
              <span className="link">
                <Link href={"#"}> Spectrum's TV packages </Link>
              </span>
              offer a strong selection of basic channels at an affordable price.
              If you need more channels, you can upgrade your package with à la
              carte options.
              <br />
              Internet needs vary depending on your personal needs. But in most
              cases,{" "}
              <span className="link">
                <Link href={"#"}> Spectrum Internet 300 Mbps </Link>
              </span>{" "}
              will be fine for one person or small households, Spectrum Internet
              500 Mbps will have enough download performance for most families,
              and Spectrum Internet Gig can accommodate families and heavy
              internet users who are frequently streaming movies, playing
              multiplayer online games, or taking daily video calls.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does Spectrum Voice include
                a phone?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Spectrum Voice doesn't include a home phone, but it does
                  include a bundled phone modem. The device connects Spectrum's
                  network to your home phone jacks.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Does Spectrum Voice include a phone?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum Voice doesn't include a home phone, but it does include a
              bundled phone modem. The device connects Spectrum's network to
              your home phone jacks.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>Does Spectrum charge extra
                for voicemail?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Spectrum doesn't charge extra for voicemail-the feature is
                  included for free with Spectrum Voice.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"Does Spectrum charge extra for voicemail?"}
            cssClass={"faq-content"}
          >
            <p>
              Spectrum doesn't charge extra for voicemail-the feature is
              included for free with Spectrum Voice.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote spectrum-review-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />

          <h4>Disclaimer:</h4>
          <p>
            Voice: Limited time offer; subject to change; valid to qualified
            residential customers who have not subscribed to any services within
            the previous 30 days and who have no outstanding obligation to
            Charter. General Terms: HOME PHONE: Spectrum Voice promotion price
            is $14.99/mo; standard rates apply after yr 1. Unlimited calling
            includes calls within the U.S., Canada, Mexico, Puerto Rico, Guam,
            the Virgin Islands and more. Services subject to all applicable
            service terms and conditions, subject to change. Services not
            available in all areas. Restrictions apply. Enter your address to
            determine availability.
          </p>
          <p>
            <span className="bold">Internet + Voice offer: </span> Limited time
            offer; subject to change; valid to qualified residential customers
            who have not subscribed to any services within the previous 30 days
            and who have no outstanding obligation to Charter. Spectrum
            Internet® promotion price is $49.99/mo; standard rates apply after
            yr 1. Spectrum Voice®: Price is $14.99/mo when bundled. Taxes, fees
            and surcharges extra and subject to change during and after the
            promotional period; installation/network activation, equipment and
            additional services are extra. General Terms: INTERNET: Speed based
            on wired connection and may vary by address. Wireless speeds may
            vary. HOME PHONE: Unlimited calling includes calls within the U.S.,
            Canada, Mexico, Puerto Rico, Guam, the Virgin Islands and more.
            Services subject to all applicable service terms and conditions,
            subject to change. Services not available in all areas. Restrictions
            apply. Enter your address to determine availability. ©2022 Charter
            Communications.
          </p>
          <p>
            <span className="bold"> TV Select + Voice offer: </span> Limited
            time offer; subject to change; valid to qualified residential
            customers who have not subscribed to any services within the
            previous 30 days and who have no outstanding obligation to Charter.
            Spectrum TV® Select promotion price is $49.99/mo; standard rates
            apply after yr 1. Spectrum Voice®: Price is $14.99/mo when bundled.
            Taxes, fees and surcharges (broadcast surcharge up to $21.00/mo)
            extra and subject to change during and after the promotional period;
            installation/network activation, equipment and additional services
            are extra. General Terms: TV: TV equipment required; charges may
            apply. Channel and HD programming availability based on level of
            service. Account credentials may be required to stream some TV
            content online. HOME PHONE: Unlimited calling includes calls within
            the U.S., Canada, Mexico, Puerto Rico, Guam, the Virgin Islands and
            more. Services subject to all applicable service terms and
            conditions, subject to change. Services not available in all areas.
            Restrictions apply. Enter your address to determine availability.
            ©2022 Charter Communications.
          </p>
          <p>
            <span className="bold">Internet + TV Select + Voice offer: </span>{" "}
            Limited time offer; subject to change; valid to qualified
            residential customers who have not subscribed to any services within
            the previous 30 days and who have no outstanding obligation to
            Charter. Spectrum TV® Select promotion price is $49.99/mo; standard
            rates apply after yr. 1. Spectrum Internet® promotion price is
            $49.99/mo; standard rates apply after yr. 1. Spectrum Voice®: Price
            is $14.99/mo when bundled. Taxes, fees and surcharges (broadcast
            surcharge up to $21.00/mo) extra and subject to change during and
            after the promotional period; installation/network activation,
            equipment and additional services are extra. General Terms:
            INTERNET: Speed based on wired connection and may vary by address.
            Wireless speeds may vary. TV: TV equipment required; charges may
            apply. Channel and HD programming availability based on level of
            service. Account credentials may be required to stream some TV
            content online. HOME PHONE: Unlimited calling includes calls within
            the U.S., Canada, Mexico, Puerto Rico, Guam, the Virgin Islands and
            more. Services subject to all applicable service terms and
            conditions, subject to change. Services not available in all areas.
            Restrictions apply. Enter your address to determine availability.
            ©2022 Charter Communications.
          </p>
          <p>
            To qualify for the Contract Buyout Program, a customer must order
            and install a qualifying Triple Play or limited Double Play
            promotion; offers not available in all areas. Offer available to
            qualifying customers only who have no outstanding obligations to
            Charter. Payment amount will be determined by the Early Termination
            Fee on the final bill from the previous provider, not to exceed
            $500. For Contract Buyout qualifications, go to Spectrum.com/buyout.
          </p>
        </div>
      </div>
      {/* <Newsletter /> */}
    </div>
  );
};

export default SpectrumVoice;
