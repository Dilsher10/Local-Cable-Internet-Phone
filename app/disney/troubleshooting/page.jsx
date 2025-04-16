// import React, { useState } from "react";
import "./disney-troubleshooting-guide.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { disneyNavLinks } from "../../assets/data/navLinks/disneyNavLinks";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
// import Newsletter from "../../components/newsletter/Newsletter";
import CTA from "../../components/cta-section/CTA";

export const metadata = {
  title: "Disney+ Troubleshooting Guide"
};

function DisneyTroubleshootingGuide() {
//   const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="disney-troubleshooting-guide">
      {/* <SubNav links={disneyNavLinks} /> */}
      <div className="hidden-cost-hero global-inner-hero">
        <h1>Disney+ Not Working</h1>
        <p>
          To infinity and . . . nope? Our TV experts help you resolve Disney+
          streaming issues with troubleshooting tips and fixes.
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
            Disney+ has rarely given us any headaches, but streaming services do
            go down. If you happen to encounter an error code or other issue on
            Disney+, we’ve assembled a few troubleshooting tips and fixes so
            Disney+ problems won’t harsh your Buzz Lightyear vibes.
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
          <Link href={"#"}>Check Disney Plus status</Link>
          <Link href={"#"}>Close and reopen Disney Plus </Link>
          <Link href={"#"}>Power cycle your device </Link>
          <Link href={"#"}>Check internet connection </Link>
          <Link href={"#"}>Upgrade internet connection </Link>
          <Link href={"#"}>Check for app updates </Link>
          <Link href={"#"}>Check for device updates</Link>
          <Link href={"#"}>Clear device cache </Link>
          <Link href={"#"}>Uninstall and reinstall Disney Plus app </Link>
          <Link href={"#"}>Disney Plus error codes </Link>
        </div>
      </div>

      <div className="section blank-text">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"></p>
        </div>
        <div className="package-table-container channels">
          <h4>Check Disney Plus status</h4>
          <p className="after-heading">
            Maybe Mickey tripped over a cord and Disney+ itself is out of
            commission. Check sites like Downdetector and IsItDownRightNow, or
            the Disney+ Help Center to see if the problem is with the service
            itself. (You can also use the first two sites to check your internet
            connection.) Social media, like Disney+’s Facebook and Twitter
            accounts, are also good sources for updates. against it.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Close and reopen Disney Plus</h4>
          <p className="after-heading">
            Try closing and then reopening the Disney+ app. Give it a minute or
            two (or five) if a quick on-and-off doesn’t resolve your issue.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>Broaden your streaming options</h4>
          <p className="after-heading">
            Need more than Disney+ in your TV life? Consider the Disney Bundle,
            which includes Disney+, Hulu, and ESPN+ for $13.99 a month (or
            $19.99 monthly for the ad-free plan). Also check out our expert
            review of the Best On-Demand Streaming Services to find even more
            entertainment.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Power cycle your device</h4>
          <p className="after-heading">
            Your streaming device, smart TV, phone, or computer might be the
            problem. Turn the hardware off for a minute, or longer, and then
            turn it back on. While that device is off, try Disney+ on another
            device to rule out, or confirm, a hardware failure.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Check internet connection</h4>
          <p className="after-heading">
            Are any other streaming apps malfunctioning? It might be device or
            internet connectivity issues. Run your other apps to see how they’re
            working; Disney+ might not be the one experiencing problems.
            <br />
            Then, run a power cycle on your internet modem/router (we recommend
            turning it off/on once a month even if you’re not having issues).
            Then, run a speed test to see if your internet connection has enough
            Mbps to keep up with the Disney+ app. Most streaming services say
            3–8 Mbps is sufficient for streaming; we say 25 Mbps should be the
            household baseline.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Upgrade your internet connection</h4>
          <p className="after-heading">
            If your internet connection is slow, your streaming TV devices won’t
            work well. Consider upgrading to a faster plan, or even a new
            internet provider if one’s available in your area. Inside your home,
            an easy install like a Wi-Fi mesh network or a range extender can
            deliver a stronger signal and more speed to your device so Disney+
            won’t get stuck buffering or glitching.
          </p>
        </div>
      </div>

      <CTA
        heading={"Does your internet connection need more speed?"}
        desc={
          "Check to see what internet providers are in your neighborhood—just enter your zip code below."
        }
      />

      <div className="section blank-text-white">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"></p>
        </div>
        <div className="package-table-container channels">
          <h4>Check for app updates</h4>
          <p className="after-heading">
            You expect apps to update automatically, but it doesn’t always
            happen. Check your device’s app store (Google Play Store, Apple App
            Store) for any recent updates to Disney+.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Check for device updates</h4>
          <p className="after-heading">
            A new update to your streaming device’s system that hasn’t yet been
            installed could be hindering Disney+. Go to your device’s settings
            menu and run any available system updates.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Clear device cache</h4>
          <p className="after-heading">
            If it’s running slowly, your streaming TV device’s system might be
            getting overcrowded with data. Check the system settings and clear
            the device’s data and cache, if the function is available, to free
            space on the drive.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Uninstall and reinstall the Disney Plus app</h4>
          <p className="after-heading">
            If all else fails, start fresh by uninstalling Disney+ and then,
            from your device’s app store (Google Play Store, Apple App Store),
            reinstalling it. Only try this as a last resort, because you’ll lose
            previous settings and logins.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Disney Plus error codes</h4>
          <p className="after-heading">
            Sometimes you’ll get an error message when streaming—but who knows
            what these numbers mean? Here are some of the most common Disney+
            error codes, the issues they represent, and how to fix them so you
            can get back to streaming She-Hulk: Attorney at Law.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Code</th>
                  <th>Cause</th>
                  <th>Solution</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Error Code 42, 76</td>
                  <td>Slow/no internet connection</td>
                  <td>Check internet connection</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Error Code 9</td>
                  <td>Logged out of Disney+</td>
                  <td>Log back in with credentials</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Error Code 83</td>
                  <td>Device incompatibility or internet instability</td>
                  <td>
                    Install Disney+ on a supported device; check internet
                    connection
                  </td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Error Code 13, 75</td>
                  <td>Too many devices streaming Disney+</td>
                  <td>Disconnect devices</td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>Error Code 21</td>
                  <td>Incorrect password</td>
                  <td>Check or reset password</td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td>Error Code 31</td>
                  <td>Can’t verify location</td>
                  <td>Enable location services; disable VPN</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="section endnote page-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Methodology</h4>
          <p>
            Our TV experts have spent hundreds of hours testing streaming
            services like Disney+. For this guide, we researched common Disney+
            error codes and issues, and learned how to fix them so we could pass
            the information on to our readers. Check out the CableTV.com “How We
            Rank” page to learn more about our process.
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Disney+ Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Disney+ Bundles and Deals</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best TV Streaming Services</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Live TV Streaming Services</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>9 Streaming Bundles to Replace Cable</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

{/* <Newsletter /> */}
    </div>
  );
}

export default DisneyTroubleshootingGuide;
