// import React, { useState } from "react";
import "./optimum-smart-wifi.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { directtvNavLinks } from "../../assets/data/navLinks/directtvNavLinks";
import InnerPagesHeroThree from "../../components/inner-pages-hero-three/InnerPagesHeroThree";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import star from "../../assets/images/star.png";
import optimumlogo from "../../assets/images/optimumlogo.png";
import smartwifiboyoptimum from "../../assets/images/smartwifiboyoptimum.png";
import { GoArrowUpRight } from "react-icons/go";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import dotted from "../../assets/images/dotted.png";
import signal from "../../assets/images/signal.png";
import PackageTable from "../../components/package-table/PackageTable";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Optimum Smart WIFI 6",
};

const OptimumSmartWifi = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    column1: {
      logo: optimumlogo,
      rating: " (3.6/5)",
      starImg: star,
    },
    column2: {
      heading: "Optimum Smart WIFI 6",
      listItems: [
        {
          text: [
            { text: "Price", isLink: true, link: "/installation" },
            { text: " Free", isLink: false },
          ],
        },
        {
          text: [
            {
              text: "Max download speeds:",
              isLink: true,
              link: "/installation",
            },
            { text: ": 5,000 Mbps", isLink: false },
          ],
        },
      ],
    },
    column3: {
      img: smartwifiboyoptimum,
    },
    column4: {
      link: " ",
      callback1: "view plans",
      callback2: " ",
      buttonIcon: <GoArrowUpRight className="upright-arrow-icon" />,
    },
  };

  let packageTableData = [
    {
      head: ["Package", "Price*", "Device", "Max recommended speed", "Details"],

      body: [
        {
          content: [
            "1.",
            "Optimum Gateway 6",
            "Free",
            "Modem/router",
            "940 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "NETGEAR Orbi CBK40",
            "$230.00",
            "Modem/router",
            "940 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: ["3.", "Motorola MB8600", "$139.98", "Modem", "940 Mbps"],
          linkPath: "#",
        },
        {
          content: ["4.", "NETGEAR AX5400", "$169.97", "Modem", "940 Mbps"],
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
    <div className="optimum-smart-wifi">
      {/* <SubNav links={directtvNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">Optimum Smart WIFI 6</h2>
          <p className="sect-desc">
            Our experts weigh in on Optimum’s new modem/router combo with Wi-Fi
            6 technology.
          </p>
        </div>
        <InnerPagesHeroThree data={heroData} />
        <p className="sect-desc">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>
      <StickyHeader />

      <div className="endnote is-optimum-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <br />
          <p>
            Altice USA’s Optimum Gateway 6 with Smart WiFi 6 technology is a
            cable modem/router combo. It comes with the latest generation of
            Wi-Fi technology to connect all the internet devices in your home.
            <br />
            Although Altice doesn’t share much information on Optimum Smart WiFi
            6, we cover your essential “must-knows” below.
          </p>
          <br />
          <h4>Optimum Smart WiFi 6 pros and cons</h4>
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
                  <td>Is 3 times faster than Wi-Fi 5</td>
                  <td>
                    Optimum Gateway 6 appears to be dual-band rather than
                    tri-band
                  </td>
                </tr>
                <tr>
                  <td>Supports more square feet than Wi-Fi 5</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>
                    Seamlessly switches between 2.4 GHz and 5.0 GHz frequencies{" "}
                  </td>
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
          <Link href={"#"}>What is Optimum Smart WiFi 6? </Link>
          <Link href={"#"}>Price and features</Link>
          <Link href={"#"}>Optimum Smart WiFi 6 vs. the competition</Link>
          <Link href={"#"}>Setup</Link>
        </div>
      </div>

      <div className="section optimum-blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"></p>
        </div>
        <div className="package-table-container channels">
          <Image src={dotted} alt="mark" className="mark" />
          <h4>Optimum Smart WiFi 6 deals and promotions</h4>
          <br />
          <p>
            For new internet customers, Optimum offers the Optimum Gateway 6 for
            free. And if your home is big enough or your Optimum technician
            recommends it, you can also get an included Optimum Extender to
            reduce Wi-Fi dead spots in your home.
            <br />
            This is a huge deal that will save you up to $13 monthly. If you’ve
            been thinking about switching to Optimum, now is the time! Check out
            our Optimum deals page to learn more about Optimum’s sign-on
            promotions.
          </p>
        </div>
      </div>

      <div className="section optimum-smart-wifi">
        <div className="head">
          <h2 className="sect-heading">
            What is Optimum <span> Smart WiFi 6? </span>
          </h2>
          <p className="sect-desc">
            Optimum Smart WiFi 6 is the router technology that powers the
            Optimum Gateway 6. You can typically add it to your Optimum internet
            plan for $10 monthly, but Optimum occasionally makes it a free
            add-on for new customers.
            <br />
            Optimum Gateway 6 is a step up from previous Optimum modem/routers.
            The Wi-Fi 6 technology supports internet speeds up to three times
            faster than the previous Wi-Fi 5 tech, and the signal reaches
            further. The “smart” part of Smart WiFi 6 means the Optimum Gateway
            6 automatically chooses which Wi-Fi frequency to connect your
            devices to so it can have the best signal.
            <br />
            To be more specific, the 5.0 GHz frequency provides a strong
            connection with nearby devices, and the 2.4 GHz frequency is better
            for devices further away from your gateway—but you don’t have to
            remember that because Smart WiFi 6 will do it for you.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={signal} alt="mark" className="mark" />
          <p>
            We’ve seen complaints from some Optimum customers that the Optimum
            Gateway 6 isn’t all it’s cracked up to be. If you’d rather get your
            own internet equipment, we can help you pick out an
            Optimum-compatible cable modem and Wi-Fi 6 router.
          </p>
        </div>
      </div>

      <div className="section optimum-price-features">
        <div className="head">
          <h2 className="sect-heading">
            Optimum Smart WiFi 6 <span> price and features </span>
          </h2>
          <p className="sect-desc">
            We wish Optimum spent less time patting itself on the back about how
            amazing Smart WiFi 6 is and spent more time giving us the meaty
            details on Optimum Gateway 6. Even after scouring the internet for
            days, this is all the info we could find.
          </p>
        </div>
      </div>

      <div className="section optimum-competition">
        <div className="head">
          <h2 className="sect-heading">
            Optimum Smart WiFi 6 <span> vs. the competition </span>
          </h2>
          <p className="sect-desc">
            If you rent the Optimum Gateway 6, you’ll pay $10 per month for your
            internet equipment. While Smart WiFi 6 is cutting-edge technology
            (and you’ll have access to 24/7 tech support), renting adds up over
            time.
            <br />
            To save a bit of cash, you can buy your internet equipment instead.
            While Optimum doesn’t sell the Gateway 6, you can easily find other
            modem/router combos or go for both a modem and router separate. To
            learn more about the pros and cons of each third-party option, check
            out our Modem vs. Router article.
            <br />
            If you’d like to learn more about the alternative modems and routers
            recommended above, check out our article on Best Optimum-Compatible
            Modems.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          *Amazon prices effective 12/08/22 at 12:08 p.m. PT. Any price and
          availability information displayed on Amazon.com at the time of
          purchase will apply to the purchase of this product. CableTV.com
          utilizes paid Amazon links.
        </p>
        <br />
        <div className="endnote ">
          <div className="endnote-container">
            <h4>Optimum Smart WiFi 6 setup</h4>
            <p>
              For $99, you can get Optimum’s standard installation, during which
              your technician will install your Optimum Gateway 6 with Smart
              WiFi 6 and set up only one device on your new wireless network.
              <br />
              Suppose you don’t feel comfortable connecting your other devices
              to the internet. In that case, you can spring for the $149 premium
              install, where your technician will install your Optimum Gateway
              6, use an ethernet cable to hardwire one internet-ready device,
              and wirelessly connect all the other available devices.
              <br />
              But if you’re tech-savvy, you can install your Optimum Gateway 6
              (or your own choice of modem) all by yourself. Just head over to
              Optimum’s Modem Self-Install page and follow the prompts.
            </p>
          </div>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Optimum Smart WiFi 6 worth it? </span>
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
          <Link href={"#"}>sign up for optimum</Link>
        </div>
      </div>

      <div className="section optimum-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Optimum Smart WiFi 6 </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How much is unlimited Wi-Fi
                with Optimum?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  All Optimum internet plans come with unlimited data. Plans
                  start at $40 per month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" How much is unlimited Wi-Fi with Optimum?"}
            cssClass={"faq-content"}
          >
            <p>
              All Optimum internet plans come with unlimited data. Plans start
              at $40 per month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is Wi-Fi 6 worth it?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  If you’re paying your internet provider for gigabit speeds
                  (940 Mbps), you may notice your Wi-Fi speeds improve with a
                  new Wi-Fi 6 router. But if you’re not having any trouble with
                  your Wi-Fi, or you pay for low internet speeds to start with,
                  you should be fine sticking with your old Wi-Fi 5 router.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Is Wi-Fi 6 worth it?"}
            cssClass={"faq-content"}
          >
            <p>
              If you’re paying your internet provider for gigabit speeds (940
              Mbps), you may notice your Wi-Fi speeds improve with a new Wi-Fi 6
              router. But if you’re not having any trouble with your Wi-Fi, or
              you pay for low internet speeds to start with, you should be fine
              sticking with your old Wi-Fi 5 router.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How do I get Wi-Fi 6?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  If you want the latest Wi-Fi 6 technology, you’ll need a new
                  router with Wi-Fi 6. If you’re an Optimum customer, talk to
                  Optimum customer service about upgrading to the new Optimum
                  Gateway 6, which comes with Smart WiFi 6 technology.
                  <br />
                  Or, you can just buy your own new router with Wi-Fi 6. We’re
                  fans of the NETGEAR Nighthawk 6-Stream AX5400, but there are
                  plenty of other options out there.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How do I get Wi-Fi 6?"}
            cssClass={"faq-content"}
          >
            <p>
              If you want the latest Wi-Fi 6 technology, you’ll need a new
              router with Wi-Fi 6. If you’re an Optimum customer, talk to
              Optimum customer service about upgrading to the new Optimum
              Gateway 6, which comes with Smart WiFi 6 technology.
              <br />
              Or, you can just buy your own new router with Wi-Fi 6. We’re fans
              of the NETGEAR Nighthawk 6-Stream AX5400, but there are plenty of
              other options out there.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Do I need a new modem for
                Wi-Fi 6?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Wi-Fi 6 is the latest router technology, so you’ll need to get
                  a new Wi-Fi 6 router to use it. It will work just fine with
                  your old modem, though, so unless you have a modem/router
                  combo, there’s no need to get a new modem.
                  <br />
                  To learn more about the differences between modems and
                  routers, see our Modem vs. Router article.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Do I need a new modem for Wi-Fi 6?"}
            cssClass={"faq-content"}
          >
            <p>
              Wi-Fi 6 is the latest router technology, so you’ll need to get a
              new Wi-Fi 6 router to use it. It will work just fine with your old
              modem, though, so unless you have a modem/router combo, there’s no
              need to get a new modem.
              <br />
              To learn more about the differences between modems and routers,
              see our Modem vs. Router article.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What does the 6 mean on my
                Wi-Fi?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Wi-Fi 6 is the latest standard for wireless router technology,
                  also called 802.11ax. It’s about three times faster than the
                  previous generation of Wi-Fi technology.
                  <br />
                  The previous Wi-Fi technology was called 802.11ac—but no one
                  wanted to keep track of those messy numbers and letters
                  anymore, so folks in the industry went back and renamed that
                  old tech Wi-Fi 5.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" What does the 6 mean on my Wi-Fi?"}
            cssClass={"faq-content"}
          >
            <p>
              Wi-Fi 6 is the latest standard for wireless router technology,
              also called 802.11ax. It’s about three times faster than the
              previous generation of Wi-Fi technology.
              <br />
              The previous Wi-Fi technology was called 802.11ac—but no one
              wanted to keep track of those messy numbers and letters anymore,
              so folks in the industry went back and renamed that old tech Wi-Fi
              5.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> How do I download the
                Optimum app?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  You can download the Optimum Support app on Google Play for
                  Android devices or the App Store for iOS devices. Heads up—the
                  reviews for this app are really crummy.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" How do I download the Optimum app?"}
            cssClass={"faq-content"}
          >
            <p>
              You can download the Optimum Support app on Google Play for
              Android devices or the App Store for iOS devices. Heads up—the
              reviews for this app are really crummy.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote optimum-review-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Methodology:</h4>
          <p>
            For this article, we spend a three days hunting down any information
            we could find on the Optimum Gateway 6, then kept an eye out for
            more information in the months since publication (it’s still
            crickets from Optimum on the technical details). We combined what
            little we could find with our expert modem and router knowledge to
            help readers decide if the device is the right one for them. For
            more on our methodology, check out our
            <span className="link">
              <Link href={"#"}> How We Rank page.</Link>
            </span>{" "}
          </p>
          <h4>Related articles:</h4>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Optimum Review</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Optimum Internet Review</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Optimum TV Review</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default OptimumSmartWifi;
