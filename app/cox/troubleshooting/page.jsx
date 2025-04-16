// import React, { useState } from "react";
import "./cox-trouble-shooting-guide.scss";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { coxNavLinks } from "../../assets/data/navLinks/coxNavLinks";
import PackageCard from "../../components/package-card/PackageCard";
// import SubNav from "../../components/sub-nav/SubNav";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import wavesearch from "../../assets/images/wavesearch.png";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Cox Troubleshooting Guide"
};

const CoxTroubleShootingGuide = () => {
  // const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="cox-trouble-shooting-guide">
      {/* <SubNav links={coxNavLinks} /> */}
      <div className="cox-costs-hero global-inner-hero">
        <h1>Cox Troubleshooting Guide</h1>
        <p>
          Here’s what you need to do if your Cox TV or internet service is
          acting up.
        </p>
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

      <div className="section endnote endnote-start">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            Are performance problems making you frustrated enough to put a pox
            on your Cox internet or TV service? Use our troubleshooting tips to
            fix common Cox service problems. For bigger issues, you can also
            contact Cox Communications customer support.
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
          <Link href={"#"}>Cox Wi-Fi </Link>
          <Link href={"#"}>Cox internet service </Link>
          <Link href={"#"}>Cox TV service </Link>
          <Link href={"#"}>Cox TV app </Link>
        </div>
      </div>

      <CTA
        heading={"Want faster home internet?"}
        desc={
          "Enter your zip code below to find internet providers in your area."
        }
      />

      <div className="section cox-what-is-cox-connect">
        <div className="head">
          <h2 className="sect-heading">
            Troubleshooting your <span> Cox Wi-Fi </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Check your router and modem lights</h4>
          <p className="after-heading">
            The front of your router and modem have a bunch of lights that’ll
            indicate whether they’re working properly. Take a look at your
            router’s Wi-Fi light and modem’s downstream light. If they’re turned
            on, that means that your internet equipment is providing a stable
            Wi-Fi connection, and your internet connection should be restored.
            <br />
            But if you’re still experiencing internet problems, you could be
            experiencing other modem, router, or computer issues. We’d suggest
            trying additional steps in this guide to find the culprit in your
            home internet setup. Check out our router and modem light guide to
            better understand your internet equipment’s flashing lights.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Find your Cox Wi-Fi network name and password</h4>
          <p className="after-heading">
            To use a Wi-Fi connection, you’ll need your router’s password and
            network name.
            <br />
            If you’re using Cox’s Panoramic Wi-Fi Gateway, you can find the
            password in your manual, at Cox’s Wi-Fi website, or on the Panoramic
            Wi-Fi mobile app (available at the App Store and Google Play Store).
            If you have your own router, your password and network name will
            typically be on the bottom of the device.
            <br />
            If you still can’t connect to your Wi-Fi router, you’ll need to do a
            full reset to restore the router’s default password and network
            name. For Cox gateway owners, follow our guide below to reset the
            device. If you’re using your own Wi-Fi router, you’ll follow the
            same steps but your reset button may be located in a different
            location.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Reboot your wireless router</h4>
          <p className="after-heading">
            Manually restarting your router is an easy way to fix your Wi-Fi
            connection if it periodically drops out. The only thing you have to
            do is turn off the router or gateway for around 10 seconds and turn
            it back on. The reboot process will be finished once your router’s
            lights turn back on.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Take an internet speed test</h4>
          <p className="after-heading">
            Does your internet performance feel slower than normal? Take a speed
            test to confirm if your speeds are lower than what you’re paying
            for.
            <br />
            Even with the latest and greatest equipment, Wi-Fi signals will
            still get weaker the farther you are from a router or if your signal
            has to pass through concrete or brick walls. Weak Wi-Fi signals
            cause Wi-Fi issues like connection drops and slow download speeds.
            <br />
            You can solve most signal problems by moving your Wi-Fi router to
            the main area of your home. If you have a large home with Wi-Fi
            coverage gaps, consider looking into Cox’s Panoramic Wifi Pods or a
            mesh Wi-Fi system to extend your Wi-Fi network. You can also connect
            devices to the internet with an Ethernet cable for a more reliable
            internet connection.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={wavesearch} className="mark" alt="wavesearch" />
          <h4>Related Cox Wi-Fi troubleshooting articles</h4>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>
                  Ways to Improve Your In-Home Wi-Fi Network
                </Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Cox Panoramic Wi-Fi App Features</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>
                  Troubleshooting Panoramic Wifi App Login Issues
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="section cox-what-is-cox-internet-service">
        <div className="head">
          <h2 className="sect-heading">
            Troubleshooting your <span> Cox internet service </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Restart your Cox cable modem</h4>
          <p className="after-heading">
            To reboot your Cox modem, simply unplug the modem’s power cable for
            10 seconds before plugging it back in. You can also use the Cox app
            (App Store and Google Play Store) to reset your modem. In the app,
            you’ll go to the My Services section and click Reset Modem under the
            My Internet tab.
            <br />
            By rebooting your modem, you’ll force the device to make a fresh
            internet connection and flush out potential internet problems.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>How to reset your Cox gateway</h4>
          <p className="after-heading">
            If you’re still having internet connection problems, you can reset
            your gateway. But keep in mind that this’ll wipe any saved network
            settings.
            <ul>
              <li>
                1. Locate the reset button on the back of your gateway device.
                It’ll be a single pinhole near the power cord.
              </li>
              <li>
                2. Use a narrow object like a paper clip and hold down the reset
                button.
              </li>
              <li>
                3. Wait for 10 seconds until the gateway’s front panel flashes.
              </li>
            </ul>
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Confirm Cox internet outage</h4>
          <p className="after-heading">
            You can see if there’s a Cox internet outage nearby on the Cox app
            or by logging into your Cox account. Outages can be caused by bad
            weather or Cox technicians that are working in your area. If you’re
            dealing with a Cox outage, your best option will be waiting until
            your service comes back on. Check out our Cox outage guide for your
            full list of options.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={wavesearch} className="mark" alt="wavesearch" />
          <h4>Related Cox internet articles</h4>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Cox Speed Test</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Cox Data Usage Meter</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Fixing Internet Connection Problems</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="section cox-what-is-cox-tv-device">
        <div className="head">
          <h2 className="sect-heading">
            Troubleshooting your <span> Cox TV device </span>
          </h2>
          <p className="sect-desc">
            Have no fear, couch potatoes dealing with technical difficulties:
            Cox has a few easy ways to fix issues like missing channels and poor
            picture quality.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Check your connections</h4>
          <p className="after-heading">
            Make sure that you’re using an HDMI cable to connect your TV and
            cable box. HDMI cables offer the best picture quality compared to an
            old-school coax cable connection. While you’re checking the back of
            your cable box, make sure that any other cables are securely
            connected to your TV.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Refresh the signal to your Cox TV device</h4>
          <p className="after-heading">
            If your cable signal is choppy or you’re missing channels in your
            programming guide, you can reset your Cox cable box’s connection.
            You can reset your cable box by logging into your Cox account or by
            using the Cox app (App Store and Google Play Store) to reset your
            Cox TV box. Under the My Services tab, go to My TV and click Reset
            Equipment. The reset process usually takes up to 15 minutes.
            <br />
            If you’re still experiencing problems after a refresh, there might
            be problems with your Cox box or the Cox network in your area. In
            this case, we’d recommend giving Cox customer service a call.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={wavesearch} className="mark" alt="wavesearch" />
          <h4>Related Cox TV troubleshooting articles</h4>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>
                  Pairing or Unpairing the Contour 2 Remote
                </Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>
                  Scheduling a Series Recording on a Cox TV DVR
                </Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Basic Box</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="section cox-what-is-cox-tv-app">
        <div className="head">
          <h2 className="sect-heading">
            Troubleshooting your <span> Cox TV app </span>
          </h2>
          <p className="sect-desc">
            The Cox Contour app makes it easy to watch live and on-demand TV
            when you’re out and about. Here’s what you’ll need to do if you’re
            having problems with the app.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Update your Cox TV app</h4>
          <p className="after-heading">
            Cox periodically updates the Contour app to fix bugs and improve the
            viewing experience. Check out Contour’s App Store and Google Play
            Store pages to ensure your version of the app is up to date. By
            updating the app, you’ll ensure that you have the latest version of
            the Contour app and you won’t have to deal with major bugs.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Uninstall and reinstall your Cox TV app</h4>
          <p className="after-heading">
            If you’re having Contour performance issues like connectivity issues
            or missing channels, a fresh uninstallation and reinstallation can
            help clear out potential problems. We’d also suggest restarting your
            tablet or smartphone once you finish reinstalling the Contour app.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Check your parental controls</h4>
          <p className="after-heading">
            Do you want to make sure your kids are watching only the channels
            they should be watching on the Contour app? Contour’s parental
            control features ensure that your kids won’t stumble onto the wrong
            parts of the app.
            <br />
            In the Contour app, click Settings and open Parental Controls. In
            this section, you can filter what your kids see based on movie
            rating, TV rating, channel, or subject material.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={wavesearch} className="mark" alt="wavesearch" />
          <h4>Related Cox TV app troubleshooting articles</h4>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>How to Use The Contour App</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Cox Contour App Guide</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Contour App Out of Home Channels</Link>
              </span>
            </li>
          </ul>
          <br />
          <h4>Still having technical difficulties?</h4>
          <p className="after-heading">
            If you’re still having Cox problems after following our tips,
            consider giving Cox’s customer service a ring. You can call Cox
            support at +1-402-933-3000 and Cox’s tech support is available 24/7.
          </p>
        </div>
      </div>

      <div className="section cox-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Cox troubleshooting </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span>How do I reset my Cox cable
                box?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  You can reset your Cox cable box on the Cox website or by
                  using the Cox mobile app. In the app, go to My TV under the My
                  Services tab. Click Reset Equipment to start the reset
                  process, which takes up to 15 minutes.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"How do I reset my Cox cable box?"}
            cssClass={"faq-content"}
          >
            <p>
              You can reset your Cox cable box on the Cox website or by using
              the Cox mobile app. In the app, go to My TV under the My Services
              tab. Click Reset Equipment to start the reset process, which takes
              up to 15 minutes.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How do I troubleshoot Cox
                Wi-Fi?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Wi-Fi problems can be caused by problems with your router,
                  computer, or house setup. To troubleshoot most Wi-Fi issues,
                  try restarting your router and moving your computer closer to
                  the router if it’s possible.
                  <br />
                  Check out our slow internet troubleshooting guide for more
                  tech support tips.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"How do I troubleshoot Cox Wi-Fi?"}
            cssClass={"faq-content"}
          >
            <p>
              Wi-Fi problems can be caused by problems with your router,
              computer, or house setup. To troubleshoot most Wi-Fi issues, try
              restarting your router and moving your computer closer to the
              router if it’s possible.
              <br />
              Check out our slow internet troubleshooting guide for more tech
              support tips.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Why is my Cox cable box not
                working?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Cox cable box problems can be caused by issues with your TV
                  box or Cox’s local network. Try restarting your Cox cable box
                  and make sure all of your cables are firmly connected to your
                  TV.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"Why is my Cox cable box not working?"}
            cssClass={"faq-content"}
          >
            <p>
              Cox cable box problems can be caused by issues with your TV box or
              Cox’s local network. Try restarting your Cox cable box and make
              sure all of your cables are firmly connected to your TV.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How do I reset my Cox
                Panoramic modem?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  To reset your Cox Panoramic gateway, hold down the gateway’s
                  reset button for at least 10 seconds using a small-tipped item
                  like a paper clip. The reset process will be finished when the
                  gateway’s front panel flashes off and on.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={"How do I reset my Cox Panoramic modem?"}
            cssClass={"faq-content"}
          >
            <p>
              To reset your Cox Panoramic gateway, hold down the gateway’s reset
              button for at least 10 seconds using a small-tipped item like a
              paper clip. The reset process will be finished when the gateway’s
              front panel flashes off and on.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Cox Overview | Cox TV | Cox Channel Lineup | Cox Bundles |
          Cox Customer Service
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default CoxTroubleShootingGuide;
