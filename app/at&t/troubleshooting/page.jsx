// import React, { useState } from "react";
import "./at&t-troubleshooting-guide.scss";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { atandtNavLinks } from "../../assets/data/navLinks/at&tNavLinks";
import PackageCard from "../../components/package-card/PackageCard";
// import SubNav from "../../components/sub-nav/SubNav";
import quotationsIcon from "../../assets/images/quotations.svg";
import wavesearch from "../../assets/images/wavesearch.png";
import helpsupportgirl from "../../assets/images/helpsupportgirl.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "AT&T Troubleshooting guide"
};

const AtandtTroubleshootingGuide = () => {
  // const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="atandt-troubleshooting-guide">
      {/* <SubNav links={atandtNavLinks} /> */}
      <div className="atandt-costs-hero global-inner-hero">
        <h1>AT&T Troubleshooting guide</h1>
        <p>
          Learn some quick fixes to help keep your AT&T Wi-Fi and internet
          service humming.
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

      <div className="endnote is-atandt-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="" />
          <p>
            You’ve got 99 problems, and{" "}
            <span className="link">
              <Link href="/">AT&T’s </Link>
            </span>{" "}
            internet outages accounts for one—we feel you. In the case of AT&T
            service, we can help, but you’re on your own with the other 98.
            <br />
            We’ve done the research and come up with some easy fixes for
            everyday AT&T internet problems and service issues. For more complex
            problems, we’d suggest calling AT&T customer support (or maybe even
            Jay-Z).
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
          <Link href={"#"}>AT&T Wi-Fi</Link>
          <Link href={"#"}>AT&T internet service</Link>
        </div>
      </div>

      <CTA
        heading={"Want faster internet?"}
        desc={"Enter your zip code to see internet plans in your area."}
      />

      <div className="section atandt-troubleshooting">
        <div className="head">
          <h2 className="sect-heading">
            Troubleshooting your <span>AT&T Wi-Fi </span>
          </h2>
          <p className="sect-desc">
            Is your AT&T Wi-Fi not working? Wi-Fi problems are the most common
            source of internet frustration, second only to incessant rating
            requests. Here are some quick Wi-Fi fixes that deal with your
            network connection, minor modem and router bugs, and that ole
            chestnut: your password. (If you like what you read, please leave us
            five stars.)
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Check your network connection</h4>
          <br />
          <p>
            Wi-Fi problems are the most common source of internet frustration,
            second only to incessant rating requests. Here are some quick Wi-Fi
            fixes that deal with your network connection, minor modem and router
            bugs, and that ole chestnut: your password. (If you like what you
            read, please leave us five stars.)
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Reboot your AT&T modem and Wi-Fi router</h4>
          <br />
          <p>
            “Have you tried turning it off and on?” is more than just a
            meme—it’s one of the best tips to reset a sluggish modem/router (or
            gateway, as AT&T calls it) to working order.
            <br />
            Basically, by rebooting your gateway, you encourage it to fix any
            minor bugs that might be slowing down its performance.
            <br />
            Unplug your modem/router from its power source, wait 60 seconds,
            then reconnect the power. Like rebooting a computer, restarting a
            modem/router is routine maintenance that should happen more often
            than you think (like every month or so).
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Find your AT&T Wi-Fi network name and password</h4>
          <br />
          <p>
            Logged out of your Wi-Fi and can’t recall the password? Or worse,
            you don’t remember which Wi-Fi network is yours amongst the
            neighbors’?
            <br />
            If you changed none of the credentials that came with the
            modem/router when installed, the login and password could be labeled
            on the device. If you did rename your Wi-Fi network and/or came up
            with a new password, log in to your AT&T account for a refresher
            (hopefully, you remember your account credentials).
          </p>
        </div>

        <div className="package-table-container channels">
          <Image src={wavesearch} alt="wavesearch" className="mark" />
          <h4>Related AT&T Wi-Fi troubleshooting articles</h4>
          <br />
          <ul>
            <li>
              {" "}
              ·
              <span className="link">
                <Link href={"/"}>Maximize home Wi-Fi networking</Link>
              </span>
            </li>
            <li>
              {" "}
              ·
              <span className="link">
                <Link href={"/"}>
                  Reboot your modem or Wi-Fi gateway and computer
                </Link>
              </span>
            </li>
            <li>
              {" "}
              ·
              <span className="link">
                <Link href={"/"}>Change your Wi-Fi network information</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="section atandt-troubleshooting-internet">
        <div className="head">
          <h2 className="sect-heading">
            Troubleshooting your <span> AT&T internet service </span>
          </h2>
          <p className="sect-desc">
            Slowed speeds and dropped connections are signs of AT&T internet
            service problems outside of your Wi-Fi network. It’s not you, it’s
            them.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Take an internet speed test</h4>
          <br />
          <p>
            Ever wondered if you’re getting the internet speed AT&T advertised?
            Take an internet speed test. Depending on the type of connection
            (DSL or fiber-optic), speeds can vary during heavy neighborhood
            traffic hours, so run tests at different times of day.
            <br />
            Factor those, do the math—is your download speed dramatically less
            than what you were sold on? It might be time to find a new internet
            provider.
          </p>
        </div>

        <div className="package-table-container channels">
          <Image src={quotationsIcon} alt="" className="mark" />
          <h4>Pro tip:</h4>
          <br />
          <p>
            Keep in mind, Wi-Fi will usually deliver lower speed numbers than a
            direct Ethernet connection to your device. The age of your device
            can also slow your speed, as older gear operates with lower-quality
            Wi-Fi receivers. Unfortunately, tech is a never-ending game of ABU
            (always be upgrading).
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Reset your AT&T internet gateway</h4>
          <br />
          <p>
            If you’ve already tried the power off/on trick with your AT&T
            modem/router or gateway, you can perform a full reset. This will
            wipe any custom settings, like your Wi-Fi network name and static
            IPs, but they can be restored after.
            <br />A full reset will clean up performance issues like rebooting
            your modem/router does and give you added security protection by
            disrupting malware and switching up hacked passwords.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>How to reset your AT&T router</h4>
          <br />
          <ul>
            <li>
              1. Press and hold the gateway reset button for 10 seconds. Less
              than 10 seconds will just reboot it.
            </li>
            <li>2. Wait for the gateway’s indicator lights to come back on.</li>
            <li>3.When all lights are green, the reset is complete.</li>
          </ul>
        </div>

        <div className="package-table-container channels">
          <h4>Restart your internet-connected devices</h4>
          <br />
          <p>
            Like turning your modem/router or gateway off and back on, rebooting
            your internet-connected devices can also clear up connection issues.
            <br />
            Restart (and update, if necessary) your computers, laptops, tablets,
            phones, TV streaming devices, and whatever else you may have
            connected to the internet. This will refresh systems and clear
            caches, freeing up more computing power.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Confirm an AT&T internet outage</h4>
          <br />
          <p>
            You can check to see if AT&T service is down in your area through
            the myAT&T app (Android and iOS) on your phone (because, of course,
            no internet). If you don’t want another app, you can also look up
            outages through{" "}
            <span className="link">
              <Link href={"/"}>AT&T’s outage page.</Link>
            </span>
          </p>
        </div>

        <div className="package-table-container channels">
          <Image src={wavesearch} alt="wavesearch" className="mark" />
          <h4>Related AT&T Wi-Fi troubleshooting articles</h4>
          <br />
          <ul>
            <li>
              {" "}
              ·
              <span className="link">
                <Link href={"/"}>AT&T internet speed test</Link>
              </span>
            </li>
            <li>
              {" "}
              ·
              <span className="link">
                <Link href={"/"}>How to reset your Wi-Fi gateway</Link>
              </span>
            </li>
            <li>
              {" "}
              ·
              <span className="link">
                <Link href={"/"}>AT&T service outage information</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="section atandt-blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"></p>
        </div>
        <div className="package-table-container channels">
          <Image src={helpsupportgirl} alt="" className="mark" />
          <h4>None of this helped? Time to contact AT&T customer support.</h4>
          <br />
          <p>
            Your technical issues may be above our pay grade, in which case we’d
            recommend getting in touch with AT&T customer service directly at
            +1-800-288-2020 or through the provider’s support contact page. We
            have more info about making contact on CableTV.com’s AT&T Customer
            Service & Support page.
          </p>
        </div>
      </div>

      <div className="section atandt-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> AT&T Troubleshooting</span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Who do I call when my AT&T
                internet is not working?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  You can call AT&T customer service if you’d like to speak to
                  someone about your internet problems. Visit our AT&T customer
                  service guide to quickly get in touch with a live agent.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Who do I call when my AT&T internet is not working?"}
            cssClass={"faq-content"}
          >
            <p>
              You can call AT&T customer service if you’d like to speak to
              someone about your internet problems. Visit our AT&T customer
              service guide to quickly get in touch with a live agent.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Why is my AT&T internet not
                working?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Your AT&T internet could be down due either to an in-house
                  issue (bad cable connections, impeded Wi-Fi, slow devices,
                  etc.) or AT&T network problems (heavy neighborhood usage,
                  complete outages, etc.).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Why is my AT&T internet not working?"}
            cssClass={"faq-content"}
          >
            <p>
              Your AT&T internet could be down due either to an in-house issue
              (bad cable connections, impeded Wi-Fi, slow devices, etc.) or AT&T
              network problems (heavy neighborhood usage, complete outages,
              etc.).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Is AT&T having an outage?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  You can check on AT&T service outages through the myAT&T app
                  (Android and iOS) on your phone, or on AT&T’s outage page.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Is AT&T having an outage?"}
            cssClass={"faq-content"}
          >
            <p>
              You can check on AT&T service outages through the myAT&T app
              (Android and iOS) on your phone, or on AT&T’s outage page.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span>How do I fix my AT&T
                internet service?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Restarting your AT&T internet devices is usually the quickest
                  way to restore service to its proper functionality. Performing
                  regular updates will also help keep your internet service
                  running smoothly.{" "}
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={"How do I fix my AT&T internet service?"}
            cssClass={"faq-content"}
          >
            <p>
              Restarting your AT&T internet devices is usually the quickest way
              to restore service to its proper functionality. Performing regular
              updates will also help keep your internet service running
              smoothly.{" "}
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote atandt-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Other related troubleshooting articles</h4>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"/"}>
                  Why Does My Cable Internet Keep Dropping?
                </Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"/"}>Why Is My Internet So Slow? </Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"/"}>Home Wi-Fi Guide</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="divider">
        <p>See also: AT&T Internet | AT&T Customer Service | AT&T Business</p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default AtandtTroubleshootingGuide;
