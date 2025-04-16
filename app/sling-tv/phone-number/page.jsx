// import React, { useState } from "react";
import "./sling-tv-customer-service.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { slingtvNavLinks } from "../../assets/data/navLinks/slingtvNavLinks";
import helpgirl from "../../assets/images/helpsupportgirl.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import Link from "next/link";
import Image from "next/image";
// import Newsletter from "../../components/newsletter/Newsletter";
import CTA from "../../components/cta-section/CTA";

export const metadata = {
  title: "Sling TV Customer Service"
};

const SlingTvCustomerService = () => {
//   const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="sling-tv-customer-service">
      {/* <SubNav links={slingtvNavLinks} /> */}
      <div className="hidden-cost-hero global-inner-hero">
        <h1>Sling TV Customer Service</h1>
        <p>
          Stream down? Channels missing? Received an error code? Here’s how to
          contact Sling TV directly about your streaming TV service.
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
          <h4>Does Sling TV offer customer service?</h4>

          <p>
            In addition to a thorough online Help hub, Sling TV offers several
            ways to contact directly and talk to an actual human. You can chat
            online with a customer service rep, go public on Sling TV’s social
            media feeds, or even call and talk on the phone as our ancestors
            did—so retro.
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
          <Link href={"#"}>Customer service by phone </Link>
          <Link href={"#"}>Customer service online </Link>
          <Link href={"#"}>Customer service on social media </Link>
          <Link href={"#"}>Troubleshooting and error messages</Link>
        </div>
      </div>

      <div className="section blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"></p>
        </div>
        <div className="package-table-container channels">
          <Image src={helpgirl} alt="" className="mark" />
          <h4>Sling TV customer service by phone</h4>
          <br />
          <p>
            New and current Sling TV customers can call 888-363-1777 for
            questions about billing, service cancellation, adding or dropping
            channel packages, troubleshooting recommendations, account access,
            and other service issues. To skip the automated menu and get a live
            rep, press “0.”
            <br />
            That English menu will offer a Spanish option right away, but Sling
            TV also has phone numbers catering to these languages:
          </p>
          <br />
          <ul>
            <li>Arabic: 855-402-3981</li>
            <li>Cantonese: 855-390-4686</li>
            <li>Hindi: 888-368-2017</li>
            <li>Mandarin: 855-411-8947</li>
            <li>Polish: 888-360-6947</li>
          </ul>
          <br />
          <p>
            The Sling TV customer service phone line is open 24/7, but you’ll
            probably have to hold for a real person for at least 10 minutes no
            matter when you call. Best use that time to gather your account info
            and details about your service issue.
          </p>
        </div>
      </div>

      <CTA
        heading={"Internet connection seem to be the problem?"}
        desc={
          "Enter your zip code below to see if there’s a more reliable internet provider in your area."
        }
      />

      <div className="section online">
        <div className="head">
          <h2 className="sect-heading">
            Sling TV <span> customer service online </span>
          </h2>
          <p className="sect-desc">
            If you prefer a keyboard to a phone call, online chat is a better
            way to talk with Sling TV customer service—it’s also usually quicker
            to get a response. On the Sling TV Help page, click the Chat Now
            icon in the bottom left corner to get Sling TV’s “virtual
            assistant.” <br />
            You’ll then be led through a series of menus, like “My Account,”
            “Start Slinging,” “Troubleshooting,” etc., within the chat. After
            authenticating your account, you can begin chatting with a rep about
            your issue. Like most services, Sling TV keeps a record of chats for
            accuracy.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} alt="" className="mark" />
          <h4>Sling TV not reliable enough for you?</h4>
          <br />
          <p>
            Check out our guide to the Best Streaming Services to see if there’s
            a better streaming service out there for you.
          </p>
        </div>
      </div>

      <div className="section blank">
        <div className="head">
          <h2 className="sect-heading">
            Sling TV <span> troubleshooting and error messages </span>
          </h2>
          <p className="sect-desc">
            The Sling TV Help page features three sections: “Watching TV”
            (general getting started with Sling TV walk-throughs), “Tech Help”
            (more detailed technical-issues help), and “Account Help” (billing,
            adding channel packages, updating personal info, etc.).
            <br />
            Under Tech Help, you can also get definitions for Sling TV error
            codes, including the following:
          </p>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Error code</th>
                <th>Problem</th>
                <th>Solution</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1. </td>
                <td>Error 8-701, 17-753 </td>
                <td>Apple device hasn’t installed automatic update </td>
                <td>
                  {" "}
                  Install update manually, restart device, or reinstall app{" "}
                </td>
              </tr>
              <tr>
                <td>2. </td>
                <td>Error 8-702 </td>
                <td>Non-Apple device hasn’t installed automatic update </td>
                <td>
                  Install update manually, restart device, or reinstall app{" "}
                </td>
              </tr>
              <tr>
                <td>3. </td>
                <td>Error 2120 </td>
                <td>Black or buffering screen</td>
                <td>
                  Relaunch channel, relaunch app, restart device, or reset
                  internet connection
                </td>
              </tr>
              <tr>
                <td>4. </td>
                <td>Error 8-638994 </td>
                <td> DVR content not playing</td>
                <td> Wait for Sling TV to resolve issue</td>
              </tr>
              <tr>
                <td>5. </td>
                <td>Error 2-5, 2-6 </td>
                <td>Internet connection failure </td>
                <td> Clear device cache or connect to different network</td>
              </tr>
              <tr>
                <td>5. </td>
                <td> Error 10-1, 12-12</td>
                <td>Login not recognized </td>
                <td>Re-enter email and/or password </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} alt="" className="mark" />
          <h4>Sling TV customer service on social media</h4>
          <br />
          <p>
            Sling TV’s social media accounts (Twitter, Facebook, Instagram,
            YouTube, and Pinterest) are easy venues to get fast responses to
            basic questions, like “Is Sling TV down right now?”, “Has [channel]
            been dropped?”, or “Why isn’t the Sling Orange + Blue plan just
            called Sling Beige?” <br />
            For more complex and detailed topics, the above social media
            accounts will usually direct you to the Sling TV Help page. As the
            Terms of Service point out, Sling TV’s social media accounts “were
            created to become a fun place to interact and learn about Sling TV
            products, services, and programming,” so they’re not necessarily
            account and troubleshooting discussion hubs. <br />
            Of all its social media accounts, Sling TV’s YouTube channel is
            probably the most useful, as it features dozens of “how-to”
            instructional videos. There are also promotional shorts, and an
            hour-long video of a turkey baking in the oven if you’re really into
            Thanksgiving.
          </p>
        </div>
      </div>

      <div className="section endnote page-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />

          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}> Sling TV Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}> Sling TV Deals</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Sling Orange vs. Sling Blue </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

{/* <Newsletter /> */}
    </div>
  );
};

export default SlingTvCustomerService;
