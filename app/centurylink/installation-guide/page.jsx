// import React, { useState } from "react";
import "./centurylink-installation-guide.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { centurylinkNavLinks } from "../../assets/data/navLinks/centurylinkNavLinks";
import CTA from "../../components/cta-section/CTA";
import quotationsIcon from "../../assets/images/quotations.svg";
import signal from "../../assets/images/signal.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "CenturyLink ",
};

const CenturyLinkInstallationGuide = () => {
  //   const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="centurylink-installation-guide">
      {/* <SubNav links={centurylinkNavLinks} /> */}
      <div className="cost-hero global-inner-hero">
        <h1>CenturyLink Installation Guide</h1>
        <p>Use our tips to make your internet setup process headache-free.</p>
      </div>

      <div className="section best-internet-tv-offer">
        <div className="cards">
          {bestOffersTemporary.map((item, index) => (
            <PackageCard
              key={index}
              id={index}
              img={item.img}
              tagName={item.tagName}
              packageName={item.packageName}
              packagePoints={item.packagePoints}
              price={item.price}
              linkPath={item.linkPath}
            />
          ))}
        </div>
      </div>

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4> Bottom line</h4>
          <p>
            For new CenturyLink internet customers, no one’s idea of a fun day
            involves waiting between 8 a.m. and 5 p.m. for an installation
            appointment that’ll always be closer to 5 p.m. than you’d like.
            <br />
            So before you schedule that technician visit, consider doing a
            CenturyLink internet standard installation by yourself and
            potentially save time. Read on to find out what you’ll need to
            connect CenturyLink internet to your home and whether
            self-installation is a good fit for you.
          </p>
        </div>
      </div>

      <StickyHeader />

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
          <Link href={"#"}>Self-installation </Link>
          <Link href={"#"}>Activation </Link>
          <Link href={"#"}>Pro installation vs. standard installation </Link>
          <Link href={"#"}>Equipment </Link>
          <Link href={"#"}>Wi-Fi setup </Link>
        </div>
      </div>

      <div className="section self-install">
        <div className="head">
          <h2 className="sect-heading">
            <span>How to self-install </span> CenturyLink internet
          </h2>
          <p className="sect-desc">
            If you can set up a laptop or smartphone without needing to call
            your nearest nephew or niece, you can do CenturyLink’s standard
            installation. Here’s what you’ll need to do ahead of time.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Order your CenturyLink Welcome Kit </h4>
          <br />
          <p>
            When you’re purchasing CenturyLink service online, you can include a
            standard installation Welcome Kit if you have a qualifying address
            or internet plan. <br />
            CenturyLink’s standard installation eligibility varies by location.
            But you can usually get a kit if you’re purchasing a CenturyLink
            plan with download speeds of less than 40 Mbps or if your address
            previously had CenturyLink service. <br />
            You can also request a standard installation kit with your
            CenturyLink plan if you’re talking to a live salesperson.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>What’s in the box?</h4>
          <br />
          <p>
            You’ll find the following items in your CenturyLink Welcome Kit:
          </p>
          <ul>
            <li>Installation instructions</li>
            <li>Power adapter</li>
            <li>Combo Wi-Fi router/DSL modem</li>
            <li>Green phone cable</li>
            <li>Yellow Ethernet cable</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Self-installing CenturyLink internet</h4>
          <br />
          <p>
            Now that you’ve seen what’s in the CenturyLink box, it’s time to
            plug everything in.
          </p>
          <br />
          <ul>
            <li>
              Find a phone wall jack on the main floor of your home, because
              you’ll need to connect it to the combo modem/Wi-Fi router. By
              keeping the device in a central area, you’ll create a consistent
              Wi-Fi signal for the whole house.
            </li>
            <li>
              Plug the power adapter into a wall outlet and insert the circular
              plug into your router/modem.
            </li>
            <li>
              Use the green phone cable to connect your phone jack to the combo
              modem/router. The modem/wireless router’s phone jack will be a
              separate input on the unit’s backside.
            </li>
            <li>
              If you have an older computer without a Wi-Fi antenna or want a
              stronger internet connection, connect the modem/router to your
              computer’s Ethernet port using the yellow Ethernet cable. The
              modem/router’s Ethernet port will be any of the yellow jacks on
              the unit’s backside.
            </li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4> Installing CenturyLink DSL filters</h4>
          <br />
          <p>
            If you also have CenturyLink phone service, you’ll need to install
            DSL filters on all your landline phones. Technicians can bring free
            DSL filters during installation appointments, or you can order them
            from CenturyLink for a $4.95 shipping charge.
          </p>
          <br />
          <ul>
            <li>Unplug the phone cable from the wall phone jack.</li>
            <li>Plug the DSL filter into your wall jack.</li>
            <li>Plug your phone cable into the filter</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4> Pro tip:</h4>
          <br />
          <p>
            Like with self-installation, CenturyLink’s modem rental requirements
            depend on your service address and CenturyLink internet plan. If
            CenturyLink gives you the all clear to buy your own modem, you can
            use CableTV.com’s guide to the best CenturyLink-compatible modems to
            get one—but straight from CenturyLink might be cheaper.
          </p>
        </div>
      </div>

      <div className="section blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
        </div>
        <div className="package-table-container channels">
          <Image src={signal} alt="" className="mark" />
          <h4>Activating your CenturyLink internet service</h4>
          <br />
          <p>
            Once your hardware is all set up, it just needs to be activated
            through CenturyLink. This process takes only a few minutes worth of
            clicking.
          </p>
          <br />
          <ul>
            <li>
              Online: Before you get started, connect your computer to the
              modem/wireless router using the Wi-Fi credentials on the device’s
              bottom. Open your web browser and visit CenturyLink’s activation
              website to finish the setup process.
            </li>
            <li>
              Phone: CenturyLink modems cannot be activated over the phone.
            </li>
            <li>TV: CenturyLink doesn’t offer TV services.</li>
            <li>
              Mobile app (Android or iOS): Download the My CenturyLink mobile
              app on Google Play or the App Store. Open the app and click
              Install My New Modem to start the self-activation process.
            </li>
          </ul>
        </div>
      </div>

      <div className="section installation">
        <div className="head">
          <h2 className="sect-heading">
            <span>Pro installation vs. </span> standard installation
          </h2>
          <p className="sect-desc">
            If your home qualifies for CenturyLink standard installation, it’s
            hard to beat the time savings from this self-led installation
            option. Once you get your CenturyLink equipment, it’ll take only a
            few minutes to get your home online and you won’t need to schedule
            any technician appointments. <br />
            We think you’ll do great at self-installing your CenturyLink
            internet with the $15 standard installation option. But if you’re
            nervous about it, you can pay $99 for professional installation.{" "}
            <br />
            And we’d recommend pro installation if you’re in a home that hasn’t
            been set up for internet or CenturyLink service. Technicians have
            the technical knowhow to access outdoor cables and drill wiring into
            your house if needed. Otherwise, stick with self-installation to
            quickly get your home online.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>schedule a centryLink pro installation </Link>
        </div>
        <br />
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
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
                <td>1.</td>
                <td> Standard installation</td>
                <td> Fastest setup option</td>
                <td> No in-person technical support$15.00 fee</td>
              </tr>
              <tr>
                <td>2. </td>
                <td>Professional installation </td>
                <td>A technician who can solve problems in-person </td>
                <td>Full-day scheduling window required$99.00 fee </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>Pro Tip: </h4>
          <br />
          <p>
            If you’re having tech problems that can’t be solved by CenturyLink’s
            activation portal or the My CenturyLink mobile app, check out
            CenturyLink’s self-installation support page for more
            troubleshooting help.
          </p>
        </div>
      </div>

      <div className="section installation-internet">
        <div className="head">
          <h2 className="sect-heading">
            <span> Professional installation of </span> CenturyLink internet
          </h2>
          <p className="sect-desc">
            If your home qualifies for CenturyLink standard installation, it’s
            hard to beat the time savings from this self-led installation
            option. Once you get your CenturyLink equipment, it’ll take only a
            few minutes to get your home online and you won’t need to schedule
            any technician appointments. <br />
            We think you’ll do great at self-installing your CenturyLink
            internet with the $15 standard installation option. But if you’re
            nervous about it, you can pay $99 for professional installation.{" "}
            <br />
            And we’d recommend pro installation if you’re in a home that hasn’t
            been set up for internet or CenturyLink service. Technicians have
            the technical knowhow to access outdoor cables and drill wiring into
            your house if needed. Otherwise, stick with self-installation to
            quickly get your home online.
          </p>
        </div>

        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Cost</th>
                <th>Appointment window/duration</th>
                <th>Customer satisfaction rating</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1.</td>
                <td> $99.00</td>
                <td> 8 hours/2–6 hours</td>
                <td> 4.05*</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section installation">
        <div className="head">
          <h2 className="sect-heading">
            <span>CenturyLink internet equipment: </span> buy or rent?
          </h2>
          <p className="sect-desc">
            Through CenturyLink, you can buy a combo Wi-Fi router/modem for $200
            or rent one for $15 per month. CenturyLink fiber internet customers
            get a free modem with their subscription. Since CenturyLink doesn’t
            require contracts, equipment rentals can be a decent option if you
            need internet service for less than a year. After 12 months, you
            would be paying $180 in CenturyLink equipment rental fees. <br />
            But despite the high $200 price tag, buying a modem outright will
            cost less than a rental if you stick with CenturyLink for the long
            haul. After 14 months, you’ll be paying $210 in rental fees and
            would have saved money by purchasing a CenturyLink router/modem at
            the start of your service. When you purchase your equipment through
            CenturyLink, it’ll also come with a one-year warranty that protects
            against hardware failures. <br />
            If you need CenturyLink service for less than a year, we’d recommend
            renting internet equipment. Otherwise, spring for the $200
            CenturyLink modem or buy your own unit using our
            CenturyLink-compatible modem guide to avoid extra rental fees.
          </p>
        </div>

        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
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
                <td>1.</td>
                <td> Renting</td>
                <td> Fastest setup option</td>
                <td> No in-person technical support$15.00 fee</td>
              </tr>
              <tr>
                <td>2. </td>
                <td>Buying </td>
                <td>A technician who can solve problems in-person </td>
                <td>Full-day scheduling window required$99.00 fee </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section blank">
        <div className="head">
          <h2 className="sect-heading">
            CenturyLink <span> Wi-Fi setup </span>
          </h2>
          <p className="sect-desc">
            Because CenturyLink uses combo DSL modem/Wi-Fi routers, you can
            easily set up a wireless internet connection without additional
            hardware.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>How to connect to your CenturyLink Wi-Fi network</h4>
          <br />

          <ul>
            <li>
              Look at the bottom of your CenturyLink modem/router. On a sticker,
              you’ll find the Wi-Fi network name and password by the SSID and
              passphrase sections.
            </li>
            <li>
              Go to the Wi-Fi settings page on the device you want to connect to
              the internet.
            </li>
            <li>
              Click the network name that matches your CenturyLink device.
            </li>
            <li>Enter the password to finish the Wi-Fi setup process.</li>
          </ul>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is centuryLink worth it?</span>
          </h2>
          <p className="sect-desc">
            CenturyLink’s internet-and-phone bundles are a nice convenience for
            folks who don’t want to manage a bunch of bills per month. But
            CenturyLink’s phone plan is pricier than we’d like, and you may be
            better off relying on your mobile plan instead.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> sign up for centuryLink internet </Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> CenturyLink installation guide </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How do I activate my
                CenturyLink internet?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  To activate your CenturyLink internet, use the My CenturyLink
                  mobile app or visit the QuickConnect website on a device
                  that’s connected to your modem/Wi-Fi router.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" How do I activate my CenturyLink internet?"}
            cssClass={"faq-content"}
          >
            <p>
              To activate your CenturyLink internet, use the My CenturyLink
              mobile app or visit the QuickConnect website on a device that’s
              connected to your modem/Wi-Fi router.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Why can't I connect to my
                CenturyLink Wi-Fi?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Wi-Fi issues can be caused by a variety of hardware or network
                  issues. To solve common issues, unplug your CenturyLink
                  modem/router for 15 seconds before plugging it back in. Also,
                  make sure you’re entering the correct network name and
                  password, which can be found on your CenturyLink router’s
                  bottom. <br />
                  If you’re still having problems with your router/modem, it
                  might be time to reach out to CenturyLink customer service.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Why can't I connect to my CenturyLink Wi-Fi?"}
            cssClass={"faq-content"}
          >
            <p>
              Wi-Fi issues can be caused by a variety of hardware or network
              issues. To solve common issues, unplug your CenturyLink
              modem/router for 15 seconds before plugging it back in. Also, make
              sure you’re entering the correct network name and password, which
              can be found on your CenturyLink router’s bottom. <br />
              If you’re still having problems with your router/modem, it might
              be time to reach out to CenturyLink customer service.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Do I need a phone jack for
                CenturyLink internet?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  CenturyLink’s DSL modems need a phone jack in order to connect
                  to the internet. Your modem will come with a green phone cable
                  that connects to the wall jack.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Do I need a phone jack for CenturyLink internet?"}
            cssClass={"faq-content"}
          >
            <p>
              CenturyLink’s DSL modems need a phone jack in order to connect to
              the internet. Your modem will come with a green phone cable that
              connects to the wall jack.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Can I use my own router
                with CenturyLink?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  CenturyLink primarily offers combo Wi-Fi router/modems, but
                  you can still use any wireless router by connecting it to the
                  white WAN port on the back of your CenturyLink device.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Can I use my own router with CenturyLink?"}
            cssClass={"faq-content"}
          >
            <p>
              CenturyLink primarily offers combo Wi-Fi router/modems, but you
              can still use any wireless router by connecting it to the white
              WAN port on the back of your CenturyLink device.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Is CenturyLink DSL or
                cable?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  CenturyLink is primarily a broadband DSL internet provider
                  that also offers fiber internet coverage.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" Is CenturyLink DSL or cable?"}
            cssClass={"faq-content"}
          >
            <p>
              CenturyLink is primarily a broadband DSL internet provider that
              also offers fiber internet coverage.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default CenturyLinkInstallationGuide;
