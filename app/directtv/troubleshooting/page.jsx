// import React, { useState } from "react";
import "./direct-tv-troubleshooting-guide.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { directtvNavLinks } from "../../assets/data/navLinks/directtvNavLinks";
import quotationsIcon from "../../assets/images/quotations.svg";
import wavesearch from "../../assets/images/wavesearch.png";
import filledquestion from "../../assets/images/filledquestion.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import network from "../../assets/images/network.png";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "DIRECTV Troubleshooting Guide"
};

const DirectTvTroubleshootingGuide = () => {
  // const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="direct-tv-troubleshooting-guide">
      {/* <SubNav links={directtvNavLinks} /> */}
      <div className="direct-tv-nfl-sunday-ticket-hero global-inner-hero">
        <h1>DIRECTV Troubleshooting Guide</h1>
        <p>
          We’ve got the whack-simple steps you need to reset your receiver,
          refresh your signal strength, and solve other DIRECTV problems.
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
          <h4>NFL Sunday Ticket has moved to YouTube</h4>
          <p>
            day free trial: Tired of cable and satellite TV but not quite sure
            if you wanna cut the cord?
            <span className="link">
              <Link href={"#"}> DIRECTV STREAM </Link>
            </span>{" "}
            is a good streaming alternative for folks who want the look and feel
            of old-school TV without the installation requirements, equipment
            fees, and other headaches that come with cable.
            <br />
            Is you{" "}
            <span className="link">
              <Link href={"#"}>DIRECTV</Link>
            </span>
            service on the blink? You used to be able to fix poor TV reception
            with one good whack—it’s not that easy with today’s TV technology.
            But we’re here to help.
            <br />
            We’ve researched and compiled this DIRECTV troubleshooting guide so
            you can test the solutions to the most common DIRECTV problems—some
            of which are almost whack-simple. Then you can settle back into your
            La-Z-Boy and finish watching your sportsball game.
          </p>
        </div>
      </div>

      <CTA
        heading={"Curious what other TV providers are in your area?"}
        desc={"Enter your zip code below to find the right TV service for you."}
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
          <Link href={"#"}>DIRECTV service </Link>
          <Link href={"#"}>DIRECTV devices </Link>
          <Link href={"#"}>DIRECTV app</Link>
        </div>
      </div>

      <div className="section direct-tv-troubleshooting">
        <div className="head">
          <h2 className="sect-heading">
            Troubleshooting your <span> DIRECTV service </span>
          </h2>
          <p className="sect-desc">
            A number of factors, from elemental to technical, can cause DIRECTV
            service problems. Fortunately, it doesn’t take much time to check,
            and fix, the most common ones.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Confirm a DIRECTV outage</h4>
          <br />
          <p>
            Visit the DIRECTV outage reporting page and either sign in or enter
            your zip code. You’ll see a list of known outages. If your outage is
            on the list, DIRECTV is already working to restore service. If it’s
            not, you can file a report so they can get to fixin’ it.
            <br />
            You can also file outage reports via the myAT&T app.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={wavesearch} alt="wavesearch" className="mark" />
          <h4>Related DIRECTV service troubleshooting articles</h4>
          <br />
          <ul>
            <li>
              <span className="link">
                <Link href={"#"}>
                  {" "}
                  · Troubleshoot receiver error codes and messages
                </Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"#"}>
                  {" "}
                  · Video connection lost errors 617, 618, 619
                </Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"#"}>
                  {" "}
                  · Get help with error message: Wired Connection Lost
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="section direct-tv-troubleshooting-devices">
        <div className="head">
          <h2 className="sect-heading">
            Troubleshooting your <span> DIRECTV devices </span>
          </h2>
          <p className="sect-desc">
            If you sensed that we’re about to ask, “Have you tried turning your
            DIRECTV receiver off and on again?”—we’re almost there. But first,
            you should check your cables to see if you have any loose
            connections.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Check your cables and connections</h4>
          <p className="after-heading">
            This one’s a snap—all you gotta do is ensure that all of your power
            and HDMI cables are plugged firmly into the proper ports. You should
            also verify that you’ve selected the correct HDMI port on your
            DIRECTV remote.
            <br />
            Ready to check your connections? Here’s a checklist to guide you.
          </p>
          <br />
          <ul>
            <li>1. Check your TV power cable (outlet end)</li>
            <li>2. Check your DIRECTV Genie power cable (outlet end)</li>
            <li>3. Check your Genie HDMI-to-TV cable (both ends)</li>
          </ul>
          <br />
          <p>
            If you fixed a loose cable, and now have a clear picture and sound,
            return to your couch and resume watching TV. If you still don’t have
            a signal, let’s ensure you’ve selected the proper input source on
            your DIRECTV remote.
            <br />
            Press the “input” button on your remote. You should see an on-screen
            list of the cable connections you just checked.
            <br />
            Now confirm that you’ve selected the port that your DIRECTV cable is
            plugged into. It should be labeled “HDMI 1,” “DIRECTV,” or
            “satellite TV.” If not, select the correct source.
            <br />
            Did this fix your problem? Great. Enjoy the game.
            <br />
            If not, don’t worry. More quick tips are comin’ right up.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={network} alt="network" className="mark" />
          <h4>Pro tip:</h4>
          <p className="after-heading">
            Need help programming your DIRECTV remote? Our guide has everything
            you need to know to pair your remote and receiver.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>How to reset your DIRECTV devices</h4>
          <p className="after-heading">
            Resetting your Hopper or Joey devices involve pushing, as you
            might’ve guessed, the “reset” button. It’s more than just turning it
            on and off again—it’s a hard reboot, just like you do with your
            computer or smartphone when it freezes.
            <br />
            Power cycling is unplugging your DIRECTV receiver, waiting a few
            minutes, and then plugging it back in. You do this so that your
            device’s RAM will refresh and awaken more prepared to function.
            Think of it as a “power nap.”
            <br />
            Here are the steps for both actions:
          </p>
          <br />
          <br />
          <div className="endnote endnote-start">
            <div className="endnote-container">
              <h4>How to reset your DIRECTV Genie, Genie 2, or Genie Mini</h4>
              <p>
                There are two ways to reset your Genie, Genie 2, or Genie Mini:
              </p>
              <ul>
                <li>
                  1. Press the reset button (it’s the red one behind the access
                  card door or on the side of the receiver. Wait for it to
                  reboot. (Genie Minis require restarting both the main and mini
                  Genies.)
                </li>
                <li>
                  2. Unplug your receiver, wait 15 seconds, then plug it back
                  in. Now press Power and wait for the receiver to start up.
                </li>
              </ul>
            </div>
          </div>
          <br />
          <br />
          <div className="endnote endnote-start">
            <div className="endnote-container">
              <h4>How to refresh the signal to your DIRECTV device</h4>
              <p>
                If a reset won’t work, you can restore your Genie to factory
                settings by pressing and holding the blue button (see front of
                receiver) for 20 seconds. Just like with your smartphone, this
                method can cause you to lose some custom settings and playlists.
                <br />
                If this doesn’t work, you can refresh your service. Although
                you’ll perform the steps, this is like a power-cycle or reset
                that happens on DIRECTV’s end.
              </p>
              <ul>
                <li> 1. Sign into your myAT&T account overview.</li>
                <li> 2. Select “My DIRECTV.”</li>
                <li> 3. Select “Manage package.”</li>
                <li>
                  {" "}
                  4. Go to “Manage receivers” and choose “Refresh receiver.”
                </li>
                <li> 5. Wait while your service refreshes.</li>
              </ul>
              <p>
                If this doesn’t work right away, DIRECTV recommends restarting
                your receiver (red button) one more time. If that fails to
                correct your signal strength,{" "}
                <span className="link">
                  <Link href={"#"}> contact DIRECTV tech support.</Link>
                </span>
              </p>
            </div>
          </div>
          <br />
          <br />
          <div className="endnote endnote-start">
            <div className="endnote-container">
              <Image src={wavesearch} alt="wavesearch" />
              <h4>Related DIRECTV device troubleshooting article</h4>
              <br />
              <ul>
                <li>
                  <span className="link">
                    <Link href={"#"}>
                      Get help with receiver restart errors 14, 15, 18, 19 and
                      22
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Check your DIRECTV dish</h4>
          <p className="after-heading">
            Again, weather—especially snow—can really mess with your DIRECTV
            signal. If you’ve had a recent snowstorm where you live, you might
            wanna pull on your moon boots and go outside to check that first.
            <br />
            If your dish is full of snow, and you can reach it safely, clean it
            off. Otherwise, you might need to wait until the snow melts—DIRECTV
            won’t send out a technician for only snow.
            <br />
            The good news is that there are a few things you can do to keep your
            satellite dish free from snow:
          </p>
          <br />
          <ul>
            <li>
              · Try a satellite dish cover, like this one from Dish Armor
              ($42.00 on Amazon*), which prevents ice and snow accumulation on
              both DIRECTV and DISH dishes.
            </li>
            <li>
              · Get a dish heater like the Ice Zapper 2 ($109.00 on Amazon*) or
              the HotShot ($147.99 on Amazon*), both on Amazon. Both work with
              DIRECTV Slimline dishes.
            </li>
            <li>
              · If you signed up for DIRECTV via phone, request a pole-mounted
              dish. If you signed up online, ask your technician during
              installation. Pole-mounting may result in an extra charge.
            </li>
            <li>· Switch to cable or streaming—no dish required.</li>
          </ul>
          <br />
          <p>*Amazon.com Prices (as of 1/21/21 12:34 p.m. MST)</p>
        </div>
      </div>

      <CTA
        heading={
          "Did you choose to switch to cable or streaming? If so, enter your zip code to shop TV providers in your area."
        }
      />

      <div className="section direct-tv-troubleshooting-app">
        <div className="head">
          <h2 className="sect-heading">
            Troubleshooting your <span> DIRECTV app </span>
          </h2>
          <p className="sect-desc">
            The DIRECTV app is all entertainment. But for account management and
            parental controls, you’ll use the myAT&T app (Android and iOS)
            because AT&T is DIRECTV’s parent company.
            <br />
            If, by chance, the DIRECTV or myAT&T app is acting all wonky, here’s
            how to give ‘em an attitude adjustment.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Use the DIRECTV App Troubleshooting Tool</h4>
          <p className="after-heading">
            The DIRECTV app has its own set of error codes and solutions. If
            you’ve received an error message while using the DIRECTV app on a
            laptop or mobile device, visit the DIRECTV App Troubleshooting Tool.
            On this page, you can enter the error code and see steps to fix it.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Uninstall and reinstall your DIRECTV app</h4>
          <p className="after-heading">
            Keeping your DIRECTV and myAT&T app updated will help you avoid many
            issues. Either configure the app to automatically install updates
            or, if you’d like more control over updates, stay on top of your
            update notifications. Love, Dad.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Update your DIRECTV app</h4>
          <p className="after-heading">
            If updates don’t solve your problem, there’s a nuclear option:
            uninstall the DIRECTV app, then reinstall it. It’s kinda like
            turning it off and on again—but with the threat of rejection as
            extra incentive (apps are sensitive entities).
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Check your parental controls</h4>
          <p className="after-heading">
            We’ve all butt-dialed 911 before (right?)—so maybe one of your
            cheeks doesn’t think you need to binge slasher movies. So if you
            suddenly can’t watch certain content, check the myAT&T app to see if
            you’ve inadvertently turned your parental-control powers on
            yourself.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>How to set or change DIRECTV parental controls</h4>
          <p className="after-heading">
            We’ve all butt-dialed 911 before (right?)—so maybe one of your
            cheeks doesn’t think you need to binge slasher movies. So if you
            suddenly can’t watch certain content, check the myAT&T app to see if
            you’ve inadvertently turned your parental-control powers on
            yourself.
          </p>
          <br />
          <ul>
            <li>1. Go to Settings.</li>
            <li>2. Select Preferences.</li>
            <li>3. Select Parental Controls.</li>
            <li>4. Pick your PIN number.</li>
            <li>5. Adjust parental controls as necessary.</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <Image src={filledquestion} alt="filledquestion" className="mark" />
          <h4>How to contact DIRECTV technical support</h4>
          <p className="after-heading">
            If these tips didn’t solve your problem, you can always contact
            DIRECTV technical support online or by phone. All of the links and
            phone numbers you need are in our{" "}
            <span className="link">
              <Link href={"#"}>DIRECTV customer service guide.</Link>
            </span>
          </p>
        </div>
      </div>

      <div className="section direct-tv-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>DIRECTV troubleshooting </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How do I fix DIRECTV no
                signal?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  To fix your DIRECTV signal, refresh your receiver using our
                  instructions above.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" How do I fix DIRECTV no signal?"}
            cssClass={"faq-content"}
          >
            <p>
              To fix your DIRECTV signal, refresh your receiver using our
              instructions above.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How do I reboot my DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  For instructions on how to reboot your DIRECTV Genie, Genie 2,
                  or Genie Mini, just click this link and say, “I am Kazaam!”
                  like in that awesomely bad Shaquille O’Neal genie movie.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" How do I reboot my DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>
              For instructions on how to reboot your DIRECTV Genie, Genie 2, or
              Genie Mini, just click this link and say, “I am Kazaam!” like in
              that awesomely bad Shaquille O’Neal genie movie.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Why is my DIRECTV internet
                not connecting?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  If you have a DIRECTV bundle, AT&T (DIRECTV’s parent company)
                  or CenturyLink handles the internet part.
                  <br />
                  We’ve compiled an AT&T troubleshooting guide to walk you
                  through possible fixes. And our CenturyLink customer support
                  guide offers help articles and tech-support contacts.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Why is my DIRECTV internet not connecting?"}
            cssClass={"faq-content"}
          >
            <p>
              If you have a DIRECTV bundle, AT&T (DIRECTV’s parent company) or
              CenturyLink handles the internet part.
              <br />
              We’ve compiled an AT&T troubleshooting guide to walk you through
              possible fixes. And our CenturyLink customer support guide offers
              help articles and tech-support contacts.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How do I reconnect my Mini
                Genie?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  As in the above question regarding rebooting your DIRECTV
                  devices, simply follow our instructions.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" How do I reconnect my Mini Genie?"}
            cssClass={"faq-content"}
          >
            <p>
              As in the above question regarding rebooting your DIRECTV devices,
              simply follow our instructions.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Why does my DIRECTV keep
                losing signal?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  A number of factors can cause your DIRECTV receiver to lose
                  its signal. You can find troubleshooting information—including
                  DIRECTV error code explanations and steps to fix your
                  problem—in the article above.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" Why does my DIRECTV keep losing signal?"}
            cssClass={"faq-content"}
          >
            <p>
              A number of factors can cause your DIRECTV receiver to lose its
              signal. You can find troubleshooting information—including DIRECTV
              error code explanations and steps to fix your problem—in the
              article above.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> Is DIRECTV having an
                outage?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  DIRECTV has an outage reporting page that will have
                  information on known outages as well as links to report new
                  ones.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" Is DIRECTV having an outage?"}
            cssClass={"faq-content"}
          >
            <p>
              DIRECTV has an outage reporting page that will have information on
              known outages as well as links to report new ones.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default DirectTvTroubleshootingGuide;
