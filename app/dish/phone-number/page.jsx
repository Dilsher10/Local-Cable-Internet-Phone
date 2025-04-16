// import React, { useState } from "react";
import "./dish-customer-service.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { dishNavLinks } from "../../assets/data/navLinks/dishNavLinks";
import dishphoneone from "../../assets/images/dishphoneone.png";
import dishphonetwo from "../../assets/images/dishphonetwo.png";
import dishphonethree from "../../assets/images/dishphonethree.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import { GoArrowUpRight } from "react-icons/go";
import messagechat from "../../assets/images/messagechat.png";
import phoneback from "../../assets/images/phoneback.png";
import mark from "../../assets/images/mark.png";
// import Newsletter from "../../components/newsletter/Newsletter";
import quotations from "../../assets/images/quotations.svg";

export const metadata = {
  title: "DISH Customer Service"
};

const DishCustomerService = () => {
  // const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="dish-customer-service">
      {/* <SubNav links={dishNavLinks} /> */}
      <div className="dish-customer-service-hero global-inner-hero">
        <h1>DISH Customer Service</h1>
        <p>Talk to a real-life person about your DISH service today.</p>
        <div className="container-img">
          <div className="column-img">
            <Link href={"#"}>
              {" "}
              <Image src={dishphoneone} alt="customer" className="" />
            </Link>
          </div>
          <div className="column-img">
            <Link href={"#"}>
              {" "}
              <Image src={dishphonetwo} alt="customer" className="" />
            </Link>
          </div>
          <div className="column-img">
            <Link href={"#"}>
              {" "}
              <Image src={dishphonethree} alt="customer" className="" />
            </Link>
          </div>
        </div>
      </div>
      <StickyHeader />

      <div className="endnote is-dish-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            Do you need to contact DISH for customer support, to report an
            outage, or pay your bill? We’ve compiled this guide to DISH customer
            service so you can have all the right contact numbers in one place.
          </p>
        </div>
      </div>

      <div className="section important-links">
        <div className="head">
          <h2 className="sect-heading">
            Current customers: <span> I’m looking for </span>
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
          <Link href={"#"}>Hours</Link>
          <Link href={"#"}>Local support </Link>
          <Link href={"#"}>Tech support</Link>
          <Link href={"#"}>Outages</Link>
          <Link href={"#"}>Sign up for service</Link>
          <Link href={"#"}>Business support</Link>
          <Link href={"#"}>Cancel service</Link>
          <Link href={"#"}>Phone and online chat support</Link>
          <Link href={"#"}>Pay your bill</Link>
        </div>
      </div>

      <CTA
        heading={"Curious what other providers are in your area?"}
        desc={
          "Enter your zip code below to find the right internet and TV service for you."
        }
      />

      <div className="section customer-services">
        <div className="head">
          <h2 className="sect-heading">
            Contact DISH <span> customer service </span>
          </h2>
          <p className="sect-desc">
            DISH customer service hours are 8:00 a.m. to midnight (EST), seven
            days a week. For your convenience, here’s how that breaks down
            across time zones. (Hours below are for both chat and phone
            support.)
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DISH customer service hours of operation</h4>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th> </th>
                  <th>Time zone</th>
                  <th>DISH phone support hours (Mon.–Fri.)</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1. </td>
                  <td>Eastern Standard Time (EST)</td>
                  <td>8:00 a.m.–midnight</td>
                </tr>
                <tr>
                  <td>2. </td>
                  <td>Central Standard Time (CST)</td>
                  <td>7:00 a.m.–11:00 p.m. </td>
                </tr>
                <tr>
                  <td>3. </td>
                  <td>Mountain Standard Time (MST)</td>
                  <td>6:00 a.m.–10:00 p.m.</td>
                </tr>
                <tr>
                  <td>4. </td>
                  <td>Pacific Standard Time (PST)</td>
                  <td>5:00 a.m.–9:00 p.m.</td>
                </tr>
                <tr>
                  <td>5. </td>
                  <td>Alaska Standard Time (AKST) </td>
                  <td>4:00 a.m.–8:00 p.m.</td>
                </tr>
                <tr>
                  <td>6. </td>
                  <td>Hawaii-Aleutian Standard Time (HST) </td>
                  <td>2:00 a.m.–6:00 p.m. </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="after-heading">
            For most US customers, there is ample time to contact DISH after
            work (assuming you work a nine-to-five job). <br />
            That said, when you adjust for time differences, Alaskan residents
            have a tighter window. But Hawaiian residents really get the short
            end of the deal since DISH’s customer service hours are almost
            entirely during average sleep and work hours. <br />
            If your schedule is more flexible, DISH suggests calling between
            2:30 p.m. and 6:30 p.m. (EST), which is likely when they experience
            lower call volume. <br />
            For technical support matters, DISH representatives are available 24
            hours a day at 1-855-402-3233.
          </p>
          <div className="two-callbacks">
            <div className="call-back">
              <div className="call-back-container">
                <div className="icon-box">
                  <Image src={phoneback} alt="whatsapp" className="whatsapp" />
                  <div className="icon-box-content">
                    <h4>Call DISH Customer Support Now</h4>
                    <br />
                    <p>
                      Please check the time in the above DISH customer service
                      hours of operation table before calling.
                    </p>
                  </div>
                </div>
                <hr />
              </div>
              <Link href={"#"}>
                <p>call now</p>
                <div className="arrow-icon-box">
                  <GoArrowUpRight className="upright-arrow-icon" />
                </div>
              </Link>
            </div>
            <div className="call-back">
              <div className="call-back-container">
                <div className="icon-box">
                  <Image src={phoneback} alt="whatsapp" className="whatsapp" />
                  <div className="icon-box-content">
                    <h4>Call DISH Customer Support Now</h4>
                    <br />
                    <p>
                      Please check the time in the above DISH customer service
                      hours of operation table before calling.
                    </p>
                  </div>
                </div>
                <hr />
              </div>
              <Link href={"#"}>
                <p>call now</p>
                <div className="arrow-icon-box">
                  <GoArrowUpRight className="upright-arrow-icon" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section dish-outages">
        <div className="head">
          <h2 className="sect-heading">
            DISH <span> outages </span>
          </h2>
          <p className="sect-desc">
            Do you suspect a service interruption in your area? Don’t waste time
            with one of those outage-detection sites—that only confirms you have
            a problem (which you already knew). <br />
            If you want action so you can finish your late-night screening of
            John Wick ASAP, remember that DISH technical support reps are
            available around the clock. Call ‘em up. They’re awake.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={phoneback} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>Call DISH tech Support Now</h4>
                <br />
                <p>
                  Please check the time in the above DISH customer service hours
                  of operation table before calling.
                </p>
              </div>
            </div>
            <hr />
          </div>
          <Link href={"#"}>
            <p>call now</p>
            <div className="arrow-icon-box">
              <GoArrowUpRight className="upright-arrow-icon" />
            </div>
          </Link>
        </div>
      </div>

      <div className="section dish-phone-number">
        <div className="head">
          <h2 className="sect-heading">
            DISH customer service <span> phone number </span>
          </h2>
          <p className="sect-desc">
            For all other questions, dial 1-800-333-3474 to reach a
            representative. <br />
            After you indicate your language preference, you’ll be asked if
            you’re a current or potential new DISH customer. If you’re already
            with DISH, press 1. The automated menu will ask for your account
            number or phone number, then connect you to a rep. If you’re a new
            customer seeking information to help you decide whether to sign up
            for DISH, press 2 and you’ll be transferred to a rep.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={phoneback} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>Call DISH Customer Support Now</h4>
                <br />
                <p>
                  Please check the time in the above DISH customer service hours
                  of operation table before calling.
                </p>
              </div>
            </div>
            <hr />
          </div>
          <Link href={"#"}>
            <p>call now</p>
            <div className="arrow-icon-box">
              <GoArrowUpRight className="upright-arrow-icon" />
            </div>
          </Link>
        </div>
      </div>

      <div className="section dish-online">
        <div className="head">
          <h2 className="sect-heading">
            DISH customer service <span> online </span>
          </h2>
          <p className="sect-desc">
            But who actually talks on the phone nowadays? If the idea of another
            person’s voice is just so 2005, a DISH rep can answer your questions
            through a private, text-only chat. To open a chat window, visit the
            DISH customer support page and scroll all the way down to find the
            “Chat With Us” button. Once you click, a virtual agent will greet
            you. To get a live rep, respond “agent”—three tries should do the
            trick.
            <br />
            You’ll see a message that says “XX seconds to chat blastoff.” Don’t
            believe that. It’s unreliable. But the waits, in our tests, were
            between one and five minutes. Once a DISH rep joined the chat, they
            were friendly and worked to understand and answer our questions. If
            you’re the independent type, DISH has a user-friendly, searchable
            support page so you can help yourself.
            <br />
            You can also contact DISH reps via Facebook and Twitter.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={messagechat} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>Chat with DISH Customer Support Now</h4>
                <br />
                <p>
                  Please check the time in the above DISH customer service hours
                  of operation table before calling.
                </p>
              </div>
            </div>
            <hr />
          </div>
          <Link href={"#"}>
            <p>call now</p>
            <div className="arrow-icon-box">
              <GoArrowUpRight className="upright-arrow-icon" />
            </div>
          </Link>
        </div>
        <div className="endnote endnote-start">
          <div className="endnote-container">
            <Image src={quotationsIcon} alt="quotations" />
            <h4>Other ways to reach DISH</h4>
            <p>
              If you’re already a DISH customer, here are a few ways to get in
              touch:
              <br />
              <span className="link">
                <Link href={"#"}>DISH Online Support Center:</Link>
              </span>{" "}
              This contains articles and videos covering most any question about
              service, from remote programming to signal troubleshooting.
              <br />
              <span className="link">
                <Link href={"@"}>My DISH: </Link>
              </span>{" "}
              Here you can check on your account and payments or change
              packages.
              <br />
              Use a forum: Consult fellow DISH customers in{" "}
              <span className="link">
                <Link href={"#"}> MyDISH Communities.</Link>
              </span>
              <br />
              You can also contact DISH on{" "}
              <span className="link">
                <Link href={"#"}>Facebook</Link>
              </span>{" "}
              and{" "}
              <span className="link">
                <Link href={"#"}> Twitter.</Link>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="section dish-online-support">
        <div className="head">
          <h2 className="sect-heading">
            Other <span> DISH online support </span>
          </h2>
          <p className="sect-desc">
            At local Xfinity retail stores, you can manage your account,
            exchange equipment, and learn more about Xfinity services in-person.
            Use the Xfinity retail store locator to find the nearest Xfinity
            store or service center.
          </p>
        </div>
        <div className="endnote endnote-start">
          <div className="endnote-container">
            <div className="flex-container">
              <div>
                <h4>Account and billing FAQ</h4>
                <ul>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> Ways to View Your Bill</Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> Ways to Pay Your Bill</Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> Taxes and Fees</Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> Understanding Charges and Credits</Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> Changing Your Bill Due Date</Link>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Other support FAQ</h4>
                <ul>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> Google Assistant Support</Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> DISH Anywhere System Requirements</Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> Troubleshooting</Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> New DISH Voice Remote</Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> Program Remote to TV</Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section dish-tech-support">
        <div className="head">
          <h2 className="sect-heading">
            DISH <span> tech support </span>
          </h2>
          <p className="sect-desc">
            When your connection drops out during an episode of Ballers, DISH
            provides live, 24/7 tech support by phone. If you prefer to chat,
            that option is available during regular customer support hours: 8:00
            a.m. to midnight (EST).
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={phoneback} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>Call DISH tech Support Now</h4>
                <br />
                <p>
                  Please check the time in the above DISH customer service hours
                  of operation table before calling.
                </p>
              </div>
            </div>
            <hr />
          </div>
          <Link href={"#"}>
            <p>call now</p>
            <div className="arrow-icon-box">
              <GoArrowUpRight className="upright-arrow-icon" />
            </div>
          </Link>
        </div>
      </div>

      <div className="section dish-business">
        <div className="head">
          <h2 className="sect-heading">
            DISH customer support <span> for your business </span>
          </h2>
          <p className="sect-desc">
            Since business owners have different support needs, there’s a
            separate customer service line for DISH business customers:
            1-888-661-8432.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={phoneback} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>Call DISH customer support for your business</h4>
                <br />
                <p>
                  Please check the time in the above DISH customer service hours
                  of operation table before calling.
                </p>
              </div>
            </div>
            <hr />
          </div>
          <Link href={"#"}>
            <p>call now</p>
            <div className="arrow-icon-box">
              <GoArrowUpRight className="upright-arrow-icon" />
            </div>
          </Link>
        </div>
      </div>

      <div className="section dish-bill-payment">
        <div className="head">
          <h2 className="sect-heading">
            DISH local <span> bill payment options </span>
          </h2>
          <p className="sect-desc">
            Do you like to keep it local? And do business face-to-face and with
            cash? We feel you.
            <br />
            DISH customers may pay their monthly bill in person anywhere that
            accepts Moneygram Express Payments, Western Union, CheckFreePay, and
            EPay. Find a location with DISH’s Pay-in-Cash Locator. As shown
            above, these services charge a fee.
          </p>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th> </th>
                <th>In-person payment method </th>
                <th>Fee </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1. </td>
                <td>Moneygram Express Payments</td>
                <td>$6.99</td>
              </tr>

              <tr>
                <td>2. </td>
                <td>Western Union </td>
                <td>$2.50</td>
              </tr>
              <tr>
                <td>3. </td>
                <td> Western Union SwiftPay </td>
                <td>$6.75</td>
              </tr>
              <tr>
                <td>4. </td>
                <td> CheckFreePay </td>
                <td>$2.50</td>
              </tr>
              <tr>
                <td>5. </td>
                <td> EPay </td>
                <td>$3.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="endnote endnote-start">
          <div className="endnote-container">
            <Image src={mark} alt="mark" className="mark" />
            <h4>Before you call DISH</h4>
            <p>
              A little preparation never hurts. Before you pick up the phone, be
              ready with the following information:
            </p>
            <ul>
              <li>
                {" "}
                · Your exact address. Your neighbor probably doesn’t want a dish
                on their roof.
              </li>
              <li>
                {" "}
                · Your credit card or preferred method of payment. DISH will
                nudge you toward paperless billing, but it’s not mandatory.
              </li>
              <li>
                {" "}
                · Your phone number and email address. DISH sends out notices
                and special offers to these, which can be useful.
              </li>
              <li>
                {" "}
                · A snack and a beverage. If you call during a high-demand time
                (lunch hour, right after work, etc.), you might have to wait a
                while to talk to a real person
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section dish-your-bill">
        <div className="head">
          <h2 className="sect-heading">
            Pay your <span> DISH bill </span>
          </h2>
          <p className="sect-desc">
            There are a couple ways to submit your DISH Network payment:
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>What if I can’t pay my DISH bill?</h4>
          <p className="after-heading">
            If you can’t pay your bill, you may qualify for DISH’s payment grace
            period. This payment extension option gives you up to nine more days
            to submit your payment without service interruption. But it will
            cost you an extra $15 and can be used only once per billing period.
            To check your eligibility, follow these simple steps:
          </p>
          <ul>
            <li>Go to the My DISH login page and log in to your account.</li>
            <li>
              In the Bill section of the Account Summary page, click on “Payment
              Extension.” (If this option doesn’t appear, your bill may be
              current or you may not qualify.)
            </li>
            <li>Find the payment option you’d like and click Submit.</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Pay with AutoPay</h4>
          <p className="after-heading">
            As of February 13, 2020, you can use your PayPal account for
            AutoPay. Don’t got PayPal? No problemo. Your debit card, credit
            card, or bank account will get the job done, too. Just head to My
            DISH to log in and sign up.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Pay your DISH bill by phone</h4>
          <p className="after-heading">
            As of February 13, 2020, you can use your PayPal account for
            AutoPay. Don’t got PayPal? No problemo. Your debit card, credit
            card, or bank account will get the job done, too. Just head to My
            DISH to log in and sign up.
          </p>
          <ul>
            <li>Dial 1-800-333-3474.</li>
            <li>
              Press one of the following numbers
              <ul>
                <li>Press 1 for bill pay.</li>
                <li>Press 2 for Pay-Per-View orders.</li>
                <li>Press 3 to change or add services.</li>
                <li>Preciona 8 para servicio en español.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="section dish-sign-up">
        <div className="head">
          <h2 className="sect-heading">
            <span> Sign up or Cancel </span> your DISH services
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae varius volutpat
            habitant pharetra vulputate ipsum non. Sit lectus laoreet velit
            convallis lectus tincidunt ipsum. Pellentesque enim orci nunc nisi
            eu pretium gravida. Nulla dui sit ut nibh egestas suspendisse. At
            purus massa tellus sit feugiat morbi. Purus at dolor.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Sign up for DISH service</h4>
          <ul>
            <li>Visit DISH online.</li>
            <li>
              Review the available internet, phone, and TV service packages.
            </li>
            <li>Choose one or more of the above.</li>
            <li>
              Complete your transaction online or dial 1-800-333-3474 to have a
              DISH rep help you through the rest of the process.
            </li>
            <li>
              Await your install date, and then go nuts with your new DISH
              setup.
            </li>
          </ul>
          <div className="call-back">
            <div className="call-back-container">
              <div className="icon-box">
                <Image src={messagechat} alt="whatsapp" className="whatsapp" />
                <div className="icon-box-content">
                  <h4>Call DISH Support Now</h4>
                  <br />
                  <p>
                    Please check the time in the above DISH customer service
                    hours of operation table before calling.
                  </p>
                </div>
              </div>
              <hr />
            </div>
            <Link href={"#"}>
              <p>call now</p>
              <div className="arrow-icon-box">
                <GoArrowUpRight className="upright-arrow-icon" />
              </div>
            </Link>
          </div>
          <hr />
          <div className="btn">
            <Link href={"#"}>sign up for dish</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Cancel your DISH service</h4>
          <ul>
            <li>Visit DISH online’s Cancel My Service page.</li>
            <li>
              Review the Lower Your Bill, Move for Free, and Pause Your Service
              (1-888-876-7918) options. If one of them suits you more than
              cancellation, call the number associated with each deal.
            </li>
            <li>
              If you still want to cancel, call 1-866-974-0781 between 8:00 p.m.
              and midnight (EST).
            </li>
          </ul>
          <div className="call-back">
            <div className="call-back-container">
              <div className="icon-box">
                <Image src={messagechat} alt="whatsapp" className="whatsapp" />
                <div className="icon-box-content">
                  <h4>Call DISH Support Now</h4>
                  <br />
                  <p>
                    Please check the time in the above DISH customer service
                    hours of operation table before calling.
                  </p>
                </div>
              </div>
              <hr />
            </div>
            <Link href={"#"}>
              <p>call now</p>
              <div className="arrow-icon-box">
                <GoArrowUpRight className="upright-arrow-icon" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is DISH worth it? </span>
          </h2>
          <p className="sect-desc">
            After using it for ourselves, we can see why DISH customer service
            rated so well in our survey. We dig how easy it is to reach a live
            person and to use the self-guided support page. The many ways to
            contact DISH—and the 24/7 live tech support—make the experience even
            more convenient.
            <br />
            With so many helpful options available, it makes our complaints
            (inaccurate wait times on chat and odd support hours for Alaska and
            Hawaii)—minor.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>call now to sign up</Link>
        </div>
      </div>

      <div className="section dish-faq">
        <div className="head">
          <h2 className="sect-heading">
            DISH <span> customer service </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span>What number do I call to
                cancel DISH Network?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  To cancel DISH service by phone, call 1-866-974-0781 between
                  8:00 p.m. and midnight (EST).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"What number do I call to cancel DISH Network?"}
            cssClass={"faq-content"}
          >
            <p>
              To cancel DISH service by phone, call 1-866-974-0781 between 8:00
              p.m. and midnight (EST).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How do I talk to a real
                person at DISH Network?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  You can reach a real person at DISH by calling 1-800-333-3474
                  or opening a chat window between the hours of 8:00a.m. and
                  midnight (EST).For technical support issues, you can call the
                  same number (or 1-855-402-3233). You can also use chat. Both
                  technical support services are available 24 hours a day, seven
                  days a week.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={"How do I talk to a real person at DISH Network?"}
            cssClass={"faq-content"}
          >
            <p>
              You can reach a real person at DISH by calling 1-800-333-3474 or
              opening a chat window between the hours of 8:00a.m. and midnight
              (EST).For technical support issues, you can call the same number
              (or 1-855-402-3233). You can also use chat. Both technical support
              services are available 24 hours a day, seven days a week.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span>How do I find my four-digit
                security code for DISH?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  If you've forgotten your four-digit security code for DISH and
                  you haven't already set up a reminder, you'll need to reset
                  it.There are two ways to reset your security code for DISH:
                </p>
                <ul>
                  <li>
                    Log in to the MyDISH.com. Go into My Profile, then click
                    Security Info. Enter your new four-digit security code.
                    You'll be asked to confirm the new PIN and set up a reminder
                    in case you forget it again. Click Submit.
                  </li>
                  <li>
                    Log in to the DISH app on your smartphone. Click through
                    this path: Account Security Account Preferences Security
                    Info. Enter your new PIN, confirm it, and set a reminder in
                    case you forget it again. Click Save Settings.
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"How do I find my four-digit security code for DISH?"}
            cssClass={"faq-content"}
          >
            <p>
              If you've forgotten your four-digit security code for DISH and you
              haven't already set up a reminder, you'll need to reset it.There
              are two ways to reset your security code for DISH:
            </p>
            <ul>
              <li>
                Log in to the MyDISH.com. Go into My Profile, then click
                Security Info. Enter your new four-digit security code. You'll
                be asked to confirm the new PIN and set up a reminder in case
                you forget it again. Click Submit.
              </li>
              <li>
                Log in to the DISH app on your smartphone. Click through this
                path: Account Security Account Preferences Security Info. Enter
                your new PIN, confirm it, and set a reminder in case you forget
                it again. Click Save Settings.
              </li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> If I chat with DISH
                customer service, what information will I need?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Before chatting with DISH customer service, existing DISH
                  customers should be ready with their DISH account number. You
                  might also be asked a few questions to verify your
                  identity.New customers should be ready with any questions,
                  their package choice, a payment method, and a willingness to
                  share their phone number and email address. We also highly
                  recommend a snack, a drink, and a fidget spinner.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={
              "If I chat with DISH customer service, what information will I need?"
            }
            cssClass={"faq-content"}
          >
            <p>
              Before chatting with DISH customer service, existing DISH
              customers should be ready with their DISH account number. You
              might also be asked a few questions to verify your identity.New
              customers should be ready with any questions, their package
              choice, a payment method, and a willingness to share their phone
              number and email address. We also highly recommend a snack, a
              drink, and a fidget spinner.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> How do I cancel DISH
                without calling customer service?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Unfortunately, there is no option to cancel DISH online.
                  You'll need to call the DISH customer retention department
                  (1-866-974-0781, 8:00 p.m.-midnight eastern time), which will
                  try to keep your business with special offers and options.You
                  can prepare for this call by visiting DISH's Cancel My Service
                  page and reviewing the Lower Your Bill, Move for Free, and
                  Pause Your Service options. If one of them suits you more than
                  cancellation, let the rep know and proceed from there.If you
                  still want to cancel, just let the rep know that you've
                  reviewed all of the options online and you'd like to move
                  straight to cancelling your service.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"How do I cancel DISH without calling customer service?"}
            cssClass={"faq-content"}
          >
            <p>
              Unfortunately, there is no option to cancel DISH online. You'll
              need to call the DISH customer retention department
              (1-866-974-0781, 8:00 p.m.-midnight eastern time), which will try
              to keep your business with special offers and options.You can
              prepare for this call by visiting DISH's Cancel My Service page
              and reviewing the Lower Your Bill, Move for Free, and Pause Your
              Service options. If one of them suits you more than cancellation,
              let the rep know and proceed from there.If you still want to
              cancel, just let the rep know that you've reviewed all of the
              options online and you'd like to move straight to cancelling your
              service.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> How do I pay my DISH bill
                by phone?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  To pay your DISH bill by telephone, call 800-333-DISH and use
                  the automated system to pay or to be connected to a customer
                  service representative who will assist you with making a
                  payment. If you need to reach bill-pay assistance for
                  DishLATINO, call 1-888-599-3474.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"How do I pay my DISH bill by phone?"}
            cssClass={"faq-content"}
          >
            <p>
              To pay your DISH bill by telephone, call 800-333-DISH and use the
              automated system to pay or to be connected to a customer service
              representative who will assist you with making a payment. If you
              need to reach bill-pay assistance for DishLATINO, call
              1-888-599-3474.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> Where is my DISH account
                number?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  You can find your account number by logging into your MyDISH
                  account and viewing the My Profile section. If you can't
                  remember your login information, click Forgot Username or
                  Forgot Password to retrieve or reset your information.If you
                  receive a paper bill via mail, your account number is also
                  listed on that statement.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={"Where is my DISH account number?"}
            cssClass={"faq-content"}
          >
            <p>
              You can find your account number by logging into your MyDISH
              account and viewing the My Profile section. If you can't remember
              your login information, click Forgot Username or Forgot Password
              to retrieve or reset your information.If you receive a paper bill
              via mail, your account number is also listed on that statement.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: DISH Overview | DISH Internet | DISH Bundles | DISH Channel
          lineup
        </p>
      </div>

      <div className="section endnote dish-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />

          <h4>Methodology:</h4>
          <p>
            At CableTV.com, we’re constantly researching and communicating with
            TV providers like DISH to ensure we have the most accurate DISH
            information available. We’ve compiled this guide to contacting DISH
            because so that you can resolve your DISH customer and technical
            support issues faster. For more information on our process, see our
            <span className="link">
              <Link href={"#"}> How We Rank</Link>
            </span>{" "}
            page.
          </p>
        </div>
      </div>
      {/* <Newsletter /> */}
    </div>
  );
};

export default DishCustomerService;
