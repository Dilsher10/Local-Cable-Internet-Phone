// import React, { useState } from "react";
import "./cox-installation-guide.scss";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { coxNavLinks } from "../../assets/data/navLinks/coxNavLinks";
import PackageCard from "../../components/package-card/PackageCard";
// import SubNav from "../../components/sub-nav/SubNav";
import quotationsIcon from "../../assets/images/quotations.svg";
import coximagebox from "../../assets/images/coximagebox.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Cox Installation Guide",
};

const CoxInstallationGuide = () => {
  // const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="cox-installation-guide">
      {/* <SubNav links={coxNavLinks} /> */}
      <div className="cox-costs-hero global-inner-hero">
        <h1>Cox Installation Guide</h1>
        <p>
          Self-installation can save you time and money. Find out how to install
          Cox internet and cable TV services on your own.
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
            To use your Cox cable TV and internet services, connections need to
            happen. For a long time, you had to use its Pro Connect
            service—where a technician comes to hook you up, so to speak.
            <br />
            Fortunately, now self-installation with Cox Easy Connect can save
            you both time and money. You don’t even need any experience to
            connect your Cox internet service and cable TV products—we’ll show
            you just how easy it is.
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
          <Link href={"#"}>What is Cox Easy Connect? </Link>
          <Link href={"#"}>What is Cox Pro Connect?</Link>
          <Link href={"#"}>Cox installation kit</Link>
          <Link href={"#"}>Locating your Cox device type</Link>
          <Link href={"#"}>Installing a Cox Panoramic Wifi Gateway</Link>
          <Link href={"#"}>
            Installing and activating a Contour TV 1, 2, 6, or DVR box
          </Link>
          <Link href={"#"}>Installing a Wireless 4K Contour Stream player</Link>
          <Link href={"#"}>FAQ</Link>
        </div>
      </div>

      <div className="section cox-what-is-cox-connect">
        <div className="head">
          <h2 className="sect-heading">
            What <span> is Cox Connect? </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>What is Cox Easy Connect?</h4>
          <p className="after-heading">
            Easy Connect is Cox’s self-installation plan.
            <br />
            As a subscriber who chooses to take the do-it-yourself (DIY) route,
            Easy Connect gets you a kit of the materials you need to set up your
            internet or cable TV service, along with a handy guide that makes
            the process pretty simple. The guide lays out the process step by
            step, in easy-to-follow language that helps everything flow
            smoothly.
            <br />I gave it a try—the first time I’ve ever installed my own
            cable and internet—and was happy and surprised about just how easy
            it was.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>What is Cox Pro Connect?</h4>
          <p className="after-heading">
            Pro Connect is the service provided by Cox where a technician comes
            to your home to install your services. There is a charge associated
            with Pro Connect.
          </p>
        </div>
      </div>

      <div className="section cox-installation-kit">
        <div className="head">
          <h2 className="sect-heading">
            What <span> installation kit </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>What’s inside my kit?</h4>
          <p className="after-heading"></p>
          <div className="colums-division">
            <div>
              <h5>Cox Contour TV self-installation kit:</h5>
              <ul>
                <li>· Power cord</li>
                <li>· Coax cable</li>
                <li>· HDMI cable</li>
                <li>· Contour box</li>
                <li>· Voice or non-voice remote control</li>
              </ul>
              <br />
              <h5>You’ll need:</h5>
              <p className="after-heading">
                TV, and the original remote control that came with your
                television
              </p>
            </div>
            <div>
              <h5>Cox internet self-installation kit:</h5>
              <ul>
                <li>· Instruction guide</li>
                <li>· Coax cable</li>
                <li>· Power cord</li>
                <li>· Ethernet cable</li>
                <li>· Panoramic Wifi Gateway</li>
              </ul>
              <br />
              <h5>You’ll need:</h5>
              <p className="after-heading">Smartphone, tablet, or computer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section cox-device-type">
        <div className="head">
          <h2 className="sect-heading">
            Locating your <span> Cox device type </span>
          </h2>
          <p className="sect-desc">
            When you receive your Cox installation kit in the mail, take a look
            at the box for needed information. The device type is to the right
            of the handle—as seen in the picture.
          </p>
        </div>
        <Image src={coximagebox} className="" alt="coximagebox" />
        <div className="package-table-container channels">
          <h4>Installing a Cox Panoramic Wifi Gateway</h4>
          <p className="after-heading">
            Identify a coax—or cable—outlet in your home. Grab the coax cable in
            your kit and connect it to both the Gateway and that active cable
            outlet.
            <br />
            The Gateway should power on in about ten minutes. Once that happens,
            open the Wi-Fi settings on your smartphone, tablet, or computer.
            Next, you will connect to the network using the network name—or
            SSID—and the password from the label on the bottom of the Gateway.
            <br />
            Once it’s connected to the network, open your browser of choice and
            start searching, surfing, or doing whatever web activity your newly
            connected heart desires.
          </p>
        </div>
      </div>

      <div className="section cox-installation-a-icox-contour">
        <div className="head">
          <h2 className="sect-heading">
            Installing a <span> iCox Contour </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Installing a Cox Contour TV 1 DVR box</h4>
          <p className="after-heading">
            To install your Cox Contour TV 1 DVR box, connect the coax cable to
            an active cable outlet and the “Cable from Wall” port located on the
            Contour box. Once that’s done, connect the HDMI cord to your TV and
            to the Contour box.
            <br />
            Now you’re connected, and you can start watching and recording all
            your favorite shows and movies.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Activating a Cox Contour TV 1, 2, 6, or third-party DVR box</h4>
          <p className="after-heading">
            The process for activating any of the Contour TV DVRs (1-6) and a
            third-party DVR box—like TiVO—is the same. To activate the box of
            your choice, start by turning on the TV. Using your original remote
            control, press the source or input button and select the correct
            HDMI connection.
            <br />
            Next, go to Cox.com/install or give the provider a ring at
            1-800-234-3993 from a phone associated with your account, and a
            representative will help finish the activation process. For a more
            comprehensive guide, visit our page on how to program your Cox
            remote.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Setting up a Cox Contour TV 1, 2, 6, or DVR remote</h4>
          <p className="after-heading">
            Press and hold the mute and select buttons at the same time until
            one of the top buttons—cable, TV, AUX, or DVD—blinks twice. When you
            see that double blink, press and release the TV button.
            <br />
            Next, point the remote at the TV while pressing the Select button
            until the TV turns off. Release the button, and voila, you’re done.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="quotationsIcon" />
          <h4>Pro tip:</h4>
          <p className="after-heading">
            If you run into any trouble while self-installing your Cox internet
            or cable TV services, you can call 1-866-867-7644 for tech support
            24 hours a day, seven days a week. There is also a chat feature on
            the Cox website where you can connect with help.
          </p>
        </div>
      </div>

      <div className="section cox-installing-a-cox-wireless-4k-contour-stream-player">
        <div className="head">
          <h2 className="sect-heading">
            Installing a Cox <span> Wireless 4K Contour </span> Stream player
          </h2>
          <p className="sect-desc">
            Start by double-checking that your Panoramic Wifi Gateway is
            properly installed—you’ll know if it isn’t because your Wi-Fi won’t
            work. The internet connection is the important part of the equation
            here since streaming devices use the internet to play content. Once
            you’re sure you can access the internet, connect the HDMI cord to
            the Contour Stream player and to your TV.
            <br />
            Next, connect the Contour Stream player’s power cord to an
            electrical outlet, which will power the device on. Once you see the
            light go on, you’re ready to move on to activation.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Activating a Cox Wireless 4K Contour Stream player</h4>
          <p className="after-heading">
            To activate the Contour Stream player, start by turning on the TV.
            Next, grab your TV remote, press the source or input button, and
            select the correct HDMI connection.
            <br />
            You’ll get a prompt to follow on-screen instructions. Then, you can
            just relax for a few minutes while the activation completes.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>
            Setting up the voice remote for the Wireless 4K Contour Stream
            player
          </h4>
          <p className="after-heading">
            Follow the on-screen instructions to set up your new voice remote.
            When you’re done, the words “All Set” will appear on the screen.
            Press OK, and you’ll be good to go. Now just let your words dictate
            what you want to watch.
          </p>
        </div>
      </div>

      <CTA
        heading={"Not yet a Cox subscriber?"}
        desc={
          "Enter your zip code below to find out if Cox is available in your area."
        }
      />

      <div className="section cox-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Cox Installation Guide </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span>What is the difference
                between Cox Easy Connect and Cox Pro Connect?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Easy Connect is Cox’s free self-installation service for
                  internet and cable TV.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={
              "What is the difference between Cox Easy Connect and Cox Pro Connect?"
            }
            cssClass={"faq-content"}
          >
            <p>
              Easy Connect is Cox’s free self-installation service for internet
              and cable TV.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does Cox charge for
                installation?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Easy Connect is completely free. Pro Connect requires you to
                  schedule a technician to come to your house to handle the
                  installation of your services, and Cox will charge you a fee
                  for this type of installation.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does Cox charge for installation?"}
            cssClass={"faq-content"}
          >
            <p>
              Easy Connect is completely free. Pro Connect requires you to
              schedule a technician to come to your house to handle the
              installation of your services, and Cox will charge you a fee for
              this type of installation.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How long does Cox
                installation take?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  When you select Pro Connect, Cox reps generally schedule a
                  two-hour window to install your internet or cable TV services.
                  Before a technician comes over and gets the process started,
                  Cox will give you the rundown on how you can prepare. Once the
                  technician is there, they can let you know how long it will
                  take to get everything up and running.
                  <br />
                  Cox mails out self-installation kits immediately after your
                  order is placed, so if you’re going that route, expect the kit
                  within a day or two.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How long does Cox installation take?"}
            cssClass={"faq-content"}
          >
            <p>
              When you select Pro Connect, Cox reps generally schedule a
              two-hour window to install your internet or cable TV services.
              Before a technician comes over and gets the process started, Cox
              will give you the rundown on how you can prepare. Once the
              technician is there, they can let you know how long it will take
              to get everything up and running.
              <br />
              Cox mails out self-installation kits immediately after your order
              is placed, so if you’re going that route, expect the kit within a
              day or two.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How is Cox internet
                installed?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  A Cox technician will deliver the products needed for the
                  services you signed up for. As part of the process, they’ll
                  connect all the required cables and equipment. They’ll even
                  install cable outlets in the home if you need them.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" How is Cox internet installed?"}
            cssClass={"faq-content"}
          >
            <p>
              A Cox technician will deliver the products needed for the services
              you signed up for. As part of the process, they’ll connect all the
              required cables and equipment. They’ll even install cable outlets
              in the home if you need them.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Does Cox install a new
                cable outlet?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  If a cable outlet is needed to activate your services, Cox can
                  install a new coax—or cable—outlet. An extra fee is charged
                  for that service, so be sure to ask about that pricing
                  upfront.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" Does Cox install a new cable outlet?"}
            cssClass={"faq-content"}
          >
            <p>
              If a cable outlet is needed to activate your services, Cox can
              install a new coax—or cable—outlet. An extra fee is charged for
              that service, so be sure to ask about that pricing upfront.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> Does Cox do same-day
                installation?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  When you sign up for your Cox services, a representative will
                  discuss scheduling a technician’s visit with you, if you are
                  doing Pro Connect. A technician doesn’t come the same day.
                  <br />
                  Self-installation takes only a few minutes and might take the
                  pain out of waiting for an appointment.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" Does Cox do same-day installation?"}
            cssClass={"faq-content"}
          >
            <p>
              When you sign up for your Cox services, a representative will
              discuss scheduling a technician’s visit with you, if you are doing
              Pro Connect. A technician doesn’t come the same day.
              <br />
              Self-installation takes only a few minutes and might take the pain
              out of waiting for an appointment.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote cox-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Related Articles:</h4>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Cox Internet Plans and Pricing</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Cox TV Review</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Cox Contour App Guide</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Cox Customer Service</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default CoxInstallationGuide;
