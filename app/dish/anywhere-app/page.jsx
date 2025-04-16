// import React, { useState } from "react";
import "./dish-any-whereapp.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { dishNavLinks } from "../../assets/data/navLinks/dishNavLinks";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import quotationsIcon from "../../assets/images/quotations.svg";
import mark from "../../assets/images/mark.png";
import framone from "../../assets/images/framone.png";
import framtwo from "../../assets/images/framtwo.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";
import quotations from "../../assets/images/quotations.svg";

export const metadata = {
  title: "DISH Anywhere App Guide 2024"
};

const DishAnywhereApp = () => {
  // const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="dish-any-whereapp">
      {/* <SubNav links={dishNavLinks} /> */}
      <div className="dish-any-whereapp-hero global-inner-hero">
        <h1>DISH Anywhere App Guide 2024</h1>
        <p>
          We’ve tested the DISH Anywhere app for months—its features and
          functionality are fantastic.
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
          <h4>Is the DISH Anywhere app good?</h4>
          <p>
            The DISH Anywhere app is great—it lets you and up to four other
            household members watch a wealth of content on many devices—from
            pretty much anywhere (as long as you have a Wi-Fi connection or
            mobile service). You can also use DISH Anywhere to set and manage
            DVR recordings and parental controls—and even convert your phone
            into a remote control when somebody loses the DISH voice remote
            again.
            <br />
            Even better, DISH Anywhere is free with your{" "}
            <span className="link">
              <Link href={"#"}> DISH Network </Link>
            </span>
            subscription. So, if you’re looking for a way to watch DISH on the
            go, DISH Anywhere is it.
          </p>
          <br />
          <div className="container">
            <div className="column">
              <Image src={framtwo} alt="fram" className="fram" />
            </div>
            <div className="column">
              <Image src={framone} alt="fram" className="fram" />
            </div>
          </div>
          <p className="below-table">
            The DISH Anywhere app home screen (left) and live channel guide
            (right).
          </p>
          <h4>DISH Anywhere app pros and cons</h4>
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
                  <td>On-the-go viewing of your DISH content</td>
                  <td>No way to set download quality</td>
                </tr>
                <tr>
                  <td>Offline viewing</td>
                  <td>Auto-deletion of DVR recordings when transferred </td>
                </tr>
                <tr>
                  <td>Parental and data-usage controls </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Five simultaneous streams</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Curious what other TV providers are in your area?"}
        desc={"Enter your zip code below to see providers in your area."}
      />

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
          <Link href={"#"}>What you can do with the DISH Anywhere app</Link>
          <Link href={"#"}>How to use the DISH Anywhere app</Link>
          <Link href={"#"}>DISH Anywhere supported devices</Link>
        </div>
      </div>

      <div className="section dish-anywhere">
        <div className="head">
          <h2 className="sect-heading">
            What can I do <span> with DISH Anywhere? </span>
          </h2>
          <p className="sect-desc">
            DISH Anywhere is mainly for watching TV when you’re on the go—but
            you can use it at home, too. It’s also a handy way to set and manage
            DVR recordings and parental controls when you can’t access your
            Hopper DVR/receiver. Allow us to break down DISH Anywhere’s features
            for you.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DISH Anywhere features</h4>
          <br />
          <ul>
            <li>
              · Stream DISH live TV channels, local channels, on-demand titles,
              DVR recordings, rentals, and purchases
            </li>
            <li>
              · Transfer your DVR recordings to your mobile device for offline
              viewing
            </li>
            <li>· Set and manage DVR recordings</li>
            <li>· Set and manage parental controls</li>
            <li>· Create up to five user profiles</li>
            <li>· Stream on up to five devices at a time</li>
            <li>· Create watchlists</li>
            <li>· Use your smartphone as your DISH remote</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Ready to download the DISH Anywhere app?</h4>
          <br />
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Download for Android</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Download for iOS</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Download for Kindle</Link>
              </span>
            </li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Watch DISH Anywhere at home</h4>
          <br />
          <p className="after-heading">
            Nobody likes fighting with family or roommates over what to watch.
            Ordinarily, to watch DISH on multiple TVs, you’d need another TV
            (what are you, rich?) plus a DISH Joey receiver ($5 a month)—and
            that gets you only one more screen. With DISH Anywhere, up to five
            people can use DISH Anywhere at a time using a laptop, smartphone,
            or tablet. That’ll help bring some peace to your place.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Watch DISH Anywhere on the go</h4>
          <br />
          <p className="after-heading">
            Again, watching TV when you’re not home is DISH Anywhere’s reason
            for existing. The only difference between using DISH Anywhere at
            home and using it on the go is how you connect to the internet. At
            home, you’ll use your Wi-Fi network. Away from home, you’ll use
            someone else’s Wi-Fi or your mobile data.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Watch offline with DISH Anywhere</h4>
          <br />
          <p className="after-heading">
            The ability to download movies and shows to watch offline is one of
            our favorite TV mobile app features. DISH Anywhere has something
            like it. <br />
            Instead of allowing you to download content to your phone, DISH
            Anywhere lets you transfer recordings from your Hopper 3 DVR to your
            phone. DISH Anywhere also allows you to download purchased movies
            and select premium-channel content to your mobile device. <br />
            We recommend downloading or transferring content on DISH Anywhere on
            your home Wi-Fi network to avoid using your mobile data.
          </p>
          <div className="endnote endnote-start">
            <div className="endnote-container">
              <Image src={mark} alt="quotations" />
              <h4>DISH Anywhere data usage</h4>
              <p>
                All video apps, including DISH Anywhere, use your mobile data
                when you’re not connected to Wi-Fi. This is how much data you’ll
                use per hour of content:
              </p>
              <ul>
                <li>
                  ·<b> Low-definition: 300 MB</b>
                </li>
                <li>
                  ·<b> Standard-definition (SD): 700 MB</b>
                </li>
                <li>
                  ·<b> High-definition (HD): 3 GB</b>
                </li>
                <li>
                  ·<b> 4K ultra-high definition (UHD): 7 GB</b>
                </li>
              </ul>
            </div>
          </div>
          <p className="after-heading">
            Unfortunately, DISH Anywhere doesn’t let you select download quality
            like other streaming TV apps (Amazon Prime Video, Netflix, etc.).
            You can, however, conserve data by setting DISH Anywhere to download
            only over Wi-Fi (More '' Settings Downloads).
            <br />
            You can also set DISH Anywhere to download only while charging,
            which keeps your battery from draining. That’s a cool feature that
            Prime Video and Netflix don’t have.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>How to transfer DISH DVR recordings to mobile</h4>
          <br />
          <p className="after-heading">
            There are two easy ways to transfer your DVR recordings from your
            DISH Hopper 3 to your mobile device for offline viewing.
          </p>
          <br />
          <h3>Method #1: Hopper-initiated transfers</h3>
          <ol>
            <li>
              On your DISH remote, press the Menu button once (or the Home
              button twice).
            </li>
            <li>Select “Settings.”</li>
            <li>Select “Timer Defaults.”</li>
            <li>
              Select “Smart Prepare for Mobile” and toggle it on. This
              compresses the movie or show down to a mobile-appropriate file
              size so you can watch it on DISH Anywhere
            </li>
          </ol>
          <p className="after-heading">
            Note: We tried this method on the DISH Joey—it didn’t work.
          </p>
          <br />
          <h3>Method #2: DISH Anywhere-initated transfer:</h3>
          <ol>
            <li>Go to “DVR” in your DISH Anywhere app.</li>
            <li>Select the movie or episode you want to transfer.</li>
            <li>
              For movies, select “Go to Transfers” and tap the “Transfer”
              button.
            </li>
            <li>
              For series, select an episode and tap the “Transfer” button.
            </li>
          </ol>
          <p className="after-heading">
            For both methods, wait for the transfer to complete. Then, to watch
            your transfers, click the “More” button on the DISH Anywhere app and
            select “Transfers,” then play your movie or show.
          </p>
          <div className="endnote endnote-start">
            <div className="endnote-container">
              <Image src={quotationsIcon} alt="quotations" />
              <h4>Pro tip:</h4>
              <p>
                Transferring a recording will delete it from your Hopper 3. How
                do we know? Personal experience! So, before transferring a
                recording to your mobile device, first make sure your partner
                isn’t expecting to watch the same title while you’re out.
              </p>
            </div>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Filter content with DISH Anywhere</h4>
          <br />
          <p className="after-heading">
            Since DISH Anywhere lets you watch so much content, you’re gonna
            need some content filters. You can sort your DISH Anywhere content
            by these categories:
          </p>
          <ul>
            <li>
              · <b>On Demand:</b> You get all of the free on-demand content
              available with your DISH subscription, with additional filters
              (featured, movies, TV shows, purchases, family, and Latino).
            </li>
            <li>
              · <b>Watchlist: </b> This is the best filter of all because it’s
              content you picked out.
            </li>
            <li>
              · <b>Networks: </b> Use this filter when you want to watch content
              from a particular channel.
            </li>
            <li>
              · <b>My Purchases:</b> Did you buy a movie or show on DISH?
              They’re here.
            </li>
            <li>
              · <b>Transfers: </b> These are the movies and shows you’ve
              downloaded—or “transferred”—to your device from your DVR.
            </li>
            <li>
              · <b>Downloads: </b> This is where you’ll find downloaded content
              from your premium channel subscriptions.
            </li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Manage parental controls with DISH Anywhere</h4>
          <br />
          <p className="after-heading">
            Wielding parental power over what your children watch is easy with
            DISH Anywhere. Under More Profiles, tap Activate Parental Controls
            to set a maximum content rating for your children.
            <br />
            We wish, though, that DISH Anywhere allowed us to access the full
            range of DISH’s parental controls, which are the best in the
            business. Unfortunately, full parental control settings are
            available only at home on your DISH Hopper DVR/receiver.
          </p>
          <div className="endnote endnote-start">
            <div className="endnote-container">
              <Image src={quotationsIcon} alt="quotations" />
              <h4>Pro tip:</h4>
              <p>
                DISH Anywhere allows you to set parental controls for multiple
                children in your home. That way, you can adjust the content to
                their age. Therein lies another fail: I set parental controls
                for my partner. She didn’t appreciate the joke, so don’t try
                this at home.
              </p>
              <h4>The other DISH mobile app</h4>
              <p>
                Besides DISH Anywhere, DISH also has the MyDISH app (Android,
                iOS), which allows you to do all of this:
              </p>
              <ul>
                <li>
                  {" "}
                  · Manage your DISH TV channel package, premium channels,
                  purchases, and rentals
                </li>
                <li> · Update account profile and preferences</li>
                <li>
                  {" "}
                  · Pay your bill, update payment methods, and download account
                  statements
                </li>
                <li> · Manage tech appointments</li>
                <li> · View support articles and videos</li>
                <li> · Call or chat with DISH customer support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <CTA
        heading={"How much does DISH Network internet cost?"}
        desc={"Enter your zip code below to see internet options in your area."}
      />

      <div className="section dish-watch-anywhere">
        <div className="head">
          <h2 className="sect-heading">
            How to watch <span> DISH Anywhere </span>
          </h2>
          <p className="sect-desc">
            DISH Anywhere supports an array of devices, including desktop and
            laptop web browsers, smartphones, and tablets—but owners of smart
            TVs and gaming consoles will be disappointed.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DISH Anywhere system requirements</h4>
          <p className="after-heading">
            Besides a supported device, you need the following things to use
            DISH Anywhere:
          </p>
          <ul>
            <li>· An active DISH subscription</li>
            <li>· A Wi-Fi internet connection (or 3G/4G mobile connection)</li>
            <li>· Your DISH username and password</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>DISH Anywhere supported devices</h4>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th>Device</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1. Amazon Fire TV/Fire Stick/Fire HD tablet</td>
                  <td>10. Amazon Fire OS</td>
                </tr>
                <tr>
                  <td>2. Amazon Kindle, Kindle Fire</td>
                  <td>11. Android </td>
                </tr>
                <tr>
                  <td>3. Android TV </td>
                  <td>12. Google Chrome browser (Mac or PC)</td>
                </tr>
                <tr>
                  <td>4. Google Chromecast </td>
                  <td>13. iOS (iPad, iPhone, iPod Touch)</td>
                </tr>
                <tr>
                  <td>5. LG Smart TV </td>
                  <td>14. Mac OS X</td>
                </tr>
                <tr>
                  <td>6. NVIDIA SHIELD TV Pro </td>
                  <td>15. PlayStation 4, PlayStation 5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <Image src={mark} alt="mark" className="mark" />
          <h4>Other TV providers’ apps</h4>
          <p className="after-heading">
            Most cable and satellite TV providers have mobile apps like DISH
            Anywhere—it’s how they compete with streaming TV services’
            flexibility—and we’ve tested and reviewed them for you too.
          </p>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Spectrum App Guide</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Xfinity Stream App Guide</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Cox Contour App Guide</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="section dish-cast">
        <div className="head">
          <h2 className="sect-heading">
            How to cast <span> DISH Anywhere to your TV </span>
          </h2>
          <p className="sect-desc">
            Google Chromecast and Roku device owners: while you can’t run the
            DISH Anywhere app on your devices, you can cast DISH Anywhere from
            your phone to your TV. Here’s how to make it happen.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Cast DISH Anywhere with Google Chromecast</h4>
          <br />
          <ul>
            <li>
              · Open DISH Anywhere on your mobile device or Chrome browser.
            </li>
            <li>
              · Click the DISH Anywhere cast icon while using your Chromecast.
            </li>
            <li>· Watch TV.</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Cast DISH Anywhere to a Roku device</h4>
          <br />
          <ul>
            <li>· Open DISH Anywhere on your mobile device.</li>
            <li>· Click the DISH Anywhere cast icon while using your Roku.</li>
            <li>· Watch TV.</li>
          </ul>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is DISH Anywhere App worth it? </span>
          </h2>
          <p className="sect-desc">
            Easy to use, feature-rich, and free, DISH Anywhere is an excellent
            extension of your DISH subscription, adding flexibility and freedom
            to an activity we usually enjoy from the same spot on the same couch
            in front of the same TV.
            <br />
            It’s also worth mentioning that DISH satellite TV service is so good
            that it earned our Editorial Choice Awards for the best overall TV
            provider and best TV provider for kids. So DISH is the kind of TV
            service you’ll want to take everywhere.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>learn more about dish</Link>
        </div>
      </div>

      <div className="section dish-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>DISH Anywhere </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span>Is DISH Anywhere free?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  The DISH Anywhere mobile app is included in your DISH plan.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"Is DISH Anywhere free?"}
            cssClass={"faq-content"}
          >
            <p>The DISH Anywhere mobile app is included in your DISH plan.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Do you have to have the
                Hopper for DISH Anywhere?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  For full functionality, DISH Anywhere must be paired with an
                  internet-connected, Sling-enabled* DVR/receiver-either the
                  Hopper 3 or the Hopper with Sling. If you have a different
                  Hopper model, you can still watch limited live channels from
                  your DISH TV package.(*Although DISH owns Sling TV,
                  "Sling-enabled" refers to Sling technology, which is different
                  from the live TV streaming service.)
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Do you have to have the Hopper for DISH Anywhere?"}
            cssClass={"faq-content"}
          >
            <p>
              For full functionality, DISH Anywhere must be paired with an
              internet-connected, Sling-enabled* DVR/receiver-either the Hopper
              3 or the Hopper with Sling. If you have a different Hopper model,
              you can still watch limited live channels from your DISH TV
              package.(*Although DISH owns Sling TV, "Sling-enabled" refers to
              Sling technology, which is different from the live TV streaming
              service.)
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span>What is a Sling adapter?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  The Sling adapter is a device that DISH used to sell that
                  enabled older DVR models to work with DISH Anywhere. It is no
                  longer supported by DISH. To use DISH Anywhere, you'll need a
                  Sling-enabled DVR/receiver like the Hopper 3 or Hopper with
                  Sling.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"What is a Sling adapter?"}
            cssClass={"faq-content"}
          >
            <p>
              The Sling adapter is a device that DISH used to sell that enabled
              older DVR models to work with DISH Anywhere. It is no longer
              supported by DISH. To use DISH Anywhere, you'll need a
              Sling-enabled DVR/receiver like the Hopper 3 or Hopper with Sling.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How many users can use DISH
                Anywhere?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  DISH Anywhere allows up to five users to stream at a time.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" How many users can use DISH Anywhere?"}
            cssClass={"faq-content"}
          >
            <p>DISH Anywhere allows up to five users to stream at a time.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> How do I get DISH Anywhere
                to work?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Once you've downloaded the DISH Anywhere app, open it and
                  follow the prompts to pair the app with your
                  internet-connected Hopper 3 DVR/receiver. You can also use
                  your DISH login info to watch DISH Anywhere on your PC or Mac
                  computer.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" How do I get DISH Anywhere to work?"}
            cssClass={"faq-content"}
          >
            <p>
              Once you've downloaded the DISH Anywhere app, open it and follow
              the prompts to pair the app with your internet-connected Hopper 3
              DVR/receiver. You can also use your DISH login info to watch DISH
              Anywhere on your PC or Mac computer.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Does DISH Anywhere use data
                at home?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  DISH Anywhere will not use your mobile data as long as the
                  mobile device you're using is connected to your home Wi-Fi
                  network.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" Does DISH Anywhere use data at home?"}
            cssClass={"faq-content"}
          >
            <p>
              DISH Anywhere will not use your mobile data as long as the mobile
              device you're using is connected to your home Wi-Fi network.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: DISH Internet | DISH Channel Lineup | DISH Bundles | DISH
          Customer Service
        </p>
      </div>

      <div className="section endnote dish-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />

          <h4>Related articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>DISH Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Definitive Review of the DISH Hopper 3</Link>
              </span>
            </li>
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

export default DishAnywhereApp;
