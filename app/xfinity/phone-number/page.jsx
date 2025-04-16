import React from "react";
import "./xfinity-customer-service.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import { xfinityNavLinks } from "../../assets/data/navLinks/xfinityNavLinks";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import Image from "next/image";
import whatsapp from "../../assets/images/whatsapp.png";
import danger from "../../assets/images/danger.png";
import { GoArrowUpRight } from "react-icons/go";
import texh from "../../assets/images/texh.png";
import laptopback from "../../assets/images/laptopback.png";
import phoneback from "../../assets/images/phoneback.png";
// import Newsletter from "../../components/newsletter/Newsletter";
import quotations from "../../assets/images/quotations.svg";
import customerone from "../../assets/images/customerone.png";
import customertwo from "../../assets/images/customertwo.png";
import customerthree from "../../assets/images/customerthree.png";

export const metadata = {
  title: "Xfinity Customer Service"
};

const XfinityCustomerService = () => {
  return ( 
    <div className="xfinity-customer-service">
      {/* <SubNav links={xfinityNavLinks} /> */}
      <div className="xfinity-customer-hero">
        <h1>Xfinity Customer Service</h1>
        <p>Chat with a real person about your Xfinity service today.</p>
        <div className="container-img">
          <div className="column-img">
            <Image src={customerthree} alt="customer" className="" />
          </div>
          <div className="column-img">
            <Image src={customertwo} alt="customer" className="" />
          </div>
          <div className="column-img">
            <Image src={customerone} alt="customer" className="" />
          </div>
        </div>
      </div> 

      <CTA
        heading={"Curious what other providers are in your area?"}
        desc={
          "Enter your zip code below to find the right internet and TV service for you."
        }
      />
      <div className="section endnote endnote-start">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            On{" "}
            <span className="link">
              <Link href={"#"}> Xfinity’s website,</Link>
            </span>
            You can talk to real salespeople or use the shopping tool on Xfinity’s website to find out about their internet, phone, and cable TV deals. The sales page helps you combine services and check things like how fast you can download and what channels you can get. If you want to sign up for Xfinity, just click the buttons to talk to someone from Xfinity.
          </p>
          <br />
        </div>
      </div>

      <div className="section important-links">
        <div className="head">
          <h2 className="sect-heading">
            Current customers: <span> I’m looking for</span>
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
          <Link href={"#"}>Over-the-phone support</Link>
          <Link href={"#"}>Xfinity customer service hours</Link>
          <Link href={"#"}>Xfinity outages </Link>
          <Link href={"#"}> Online support</Link>
          <Link href={"#"}>Tech support </Link>
          <Link href={"#"}>Business support </Link>
          <Link href={"#"}> Local support</Link>
          <Link href={"#"}> Xfinity bill pay</Link>
          <Link href={"#"}> Xfinity service cancellation</Link>
        </div>
        <div className=" endnote endnote-start">
          <div className="endnote-container">
            <Image src={danger} alt="danger" />
            <h4>Before you call Xfinity</h4>
            <p>
            Xfinity’s chat and call scheduling services help fix many issues you might face during a support call, but they’ll still need to confirm who you are over the phone or chat. To make your call quicker, follow these tips
              <br />
              To save time during your call, follow these tips:
            </p>
            <ul>
              <li>
                Make sure you have your name, account number, and address ready.
                Your account number is on top of your PDF or paper bill.
              </li>
              <li>
                Make sure your callback number is the same as the phone number
                registered to your Xfinity account. This makes it faster for
                Xfinity agents to pull up your account and answer your
                questions.
              </li>
              <li>
                If you’re planning a move, have your new address and service
                transfer dates nearby.
              </li>
              <li>
                Keep a pencil and notepad nearby to jot down any notes, costs,
                or dates related to your billing issues.
              </li>
            </ul>
            <p>
              <i>
                {" "}
                If you don’t have your account number on hand, Xfinity can still
                verify your account with billing or personal account details.
                Xfinity can also send a verification code to your registered
                phone number or email address.
              </i>
            </p>
            <br />
          </div>
        </div>
      </div>

      <div className="section customer-phone-number">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span>customer service</span>phone number
          </h2>
          <p className="sect-desc">
            <span className="link">
              <Link href={"#"}> Xfinity’s callback service </Link>
            </span>
            Xfinity's callback service allows you to pick a time to talk to a customer service agent. This service deals with questions about Xfinity internet and billing, saving you from waiting on hold for a long time. Before your scheduled call, you can use the time to do other things like prepare meals, watch TV, do yard work, or take a walk.
During the call, the customer service rep will already have your account ready, so it saves time. You can access the callback service on the Xfinity website or the Xfinity My Account mobile app.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={whatsapp} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>customer service phone number</h4>
                <br />
                <p>Between 8:00 a.m. and 9:00 p.m. ET Monday through Sunday.</p>
              </div>
            </div>
            <hr />
          </div>
          <Link href={"#"}>
            <p>schedule a callback</p>
            <div className="arrow-icon-box">
              <GoArrowUpRight className="upright-arrow-icon" />
            </div>
          </Link>
        </div>
      </div>

      <div className="section service-hours">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity customer service <span> hours of operation</span>
          </h2>
          <p className="sect-desc">
          Xfinity's phone and chat agents are available from 8:00 a.m. to 9:00 p.m. ET every day of the week. If you need help outside these hours, you can talk to Xfinity Assistant, a 24/7 automated chatbot that can answer common questions about your account, technical issues, or bills.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={whatsapp} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>customer service phone number</h4>
                <br />
                <p>Between 8:00 a.m. and 9:00 p.m. ET Monday through Sunday.</p>
              </div>
            </div>
            <hr />
          </div>
          <Link href={"#"}>
            <p>schedule a callback</p>
            <div className="arrow-icon-box">
              <GoArrowUpRight className="upright-arrow-icon" />
            </div>
          </Link>
        </div>
      </div>

      <div className="section customer-outages">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span> outages </span>
          </h2>
          <p className="sect-desc">
          You can find the Xfinity Outage Map on the Xfinity Status Center website and the Xfinity My Account app, which you can download from Google Play or the App Store. The map displays where outages are happening and gives an idea of how many people are affected.
If you want to check for outages, you can also tweet @XfinitySupport or text OUT to 266278. Remember, to get text alerts, you need to register your phone on your Xfinity account. For more ways to check for outages, take a look at our Xfinity outage guide.
            <br />
            You can also tweet at @t{" "}
            <span className="link">
              <Link href={"#"}> XfinitySuppor </Link>
            </span>
            , Xfinity’s live support account on Twitter, or text OUT to 266278
            to check for outages. To receive text alerts, your phone needs to be
            registered through your Xfinity account. Check out our{" "}
            <span className="link">
              <Link href={"#"}>Xfinity outage </Link>
            </span>
            guide for your full list of options.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={whatsapp} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>customer service phone number</h4>
                <br />
                <p>Between 8:00 a.m. and 9:00 p.m. ET Monday through Sunday.</p>
              </div>
            </div>
            <hr />
          </div>
          <Link href={"#"}>
            <p>schedule a callback</p>
            <div className="arrow-icon-box">
              <GoArrowUpRight className="upright-arrow-icon" />
            </div>
          </Link>
        </div>
      </div>

      <div className="section service-online">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span> customer service </span> online
          </h2>
          <p className="sect-desc">
          The Xfinity Assistant chatbot helps with simple stuff like changing your billing address or setting up cable service. For tougher problems, you can ask for a phone call or chat with a live customer service rep. If it's late or you prefer to DIY, check out the support section on Xfinity's website. There are lots of FAQs there, covering things like fixing Wi-Fi problems, paying bills, and setting up Xfinity equipment.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={whatsapp} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>customer service phone number</h4>
                <br />
                <p>Between 8:00 a.m. and 9:00 p.m. ET Monday through Sunday.</p>
              </div>
            </div>
            <hr />
          </div>
          <Link href={"#"}>
            <p>schedule a callback</p>
            <div className="arrow-icon-box">
              <GoArrowUpRight className="upright-arrow-icon" />
            </div>
          </Link>
        </div>
      </div>

      <div className="section important-links online-support">
        <div className="head">
          <h2 className="sect-heading">
            Other Xfinity <span>online support</span>
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
          <Link href={"#"}>Understanding Your Bill</Link>
          <Link href={"#"}>Ways to Sign In to Xfinity My Account</Link>
          <Link href={"#"}>Bill Payment Options Overview</Link>
          <Link href={"#"}>Perform A Speed Test</Link>
          <Link href={"#"}>X1 Remote Setup </Link>
          <Link href={"#"}>Business support </Link>
          <Link href={"#"}> Overview of Xfinity Gateways</Link>
        </div>
      </div>

      <div className="section tech-support">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span> tech support</span>
          </h2>
          <p className="sect-desc">
          If you're having problems with things like your Xfinity Wi-Fi, you can call Xfinity for help or chat with an agent online. They also have helpful articles on their website that guide you through setting up and using your Xfinity services.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={texh} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>Xfinity tech support</h4>
                <br />
                <p>Between 8:00 a.m. and 9:00 p.m. ET Monday through Sunday.</p>
              </div>
            </div>
            <hr />
          </div>
          <Link href={"#"}>
            <p>schedule a callback</p>
            <div className="arrow-icon-box">
              <GoArrowUpRight className="upright-arrow-icon" />
            </div>
          </Link>
        </div>
        <div className="endnote endnote-start">
          <div className="endnote-container">
            <Image src={quotationsIcon} alt="quotations" />
            <h4>Related articles</h4>
            <br />
            <ul>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>Xfinity Stream App Guide </Link>
                </span>
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}> Xfinity Installation Guide</Link>
                </span>
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>How to Change or Cancel Xfinity Service </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section support-business">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity customer support for <span> your business </span>
          </h2>
          <p className="sect-desc">
          Comcast Business customers can call Xfinity anytime at 1-800-391-3000 for help. You can also chat with Comcast Business agents for extra support. Chat hours vary, but they're usually between 9 a.m. and 5 p.m.
            <br />
            If you need help outside these hours, Comcast Business has an after-hours team. They'll take note of your issue and someone will contact you the next business day. For quick help, check out Comcast Business support web page. It has articles on business internet, TV, and phone issues.{" "}
            <span className="link">
              <Link href={"#"}> Comcast Business support web page </Link>
            </span>
            features articles that focus on business-specific internet, TV, and
            phone questions.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={whatsapp} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>customer service phone number</h4>
                <br />
                <p>Between 8:00 a.m. and 9:00 p.m. ET Monday through Sunday.</p>
              </div>
            </div>
            <hr />
          </div>
          <Link href={"#"}>
            <p>schedule a callback</p>
            <div className="arrow-icon-box">
              <GoArrowUpRight className="upright-arrow-icon" />
            </div>
          </Link>
        </div>
      </div>

      <div className="section tech-support">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span> local customer service </span> options
          </h2>
          <p className="sect-desc">
          You can handle your account, swap equipment, and get info about Xfinity services in person at nearby Xfinity stores. Just use the Xfinity retail store locator to find the closest one.
          </p>
        </div>
        <div className="endnote endnote-start">
          <div className="endnote-container">
            <h4>Pay your Xfinity bill</h4>
            <br />
            <ul>
              <li>
                · To pay online, visit your Xfinity account page and click "Make a Payment" under the Billing tab. You can also use the Xfinity Assistant chatbot for online payments.
              </li>
              <li>
                · For phone payments, call 1-800-934-6489 and press 2 for Xfinity’s automated system. Have your account number handy.
              </li>
              <li>
                · If you want to pay by phone, call 1-800-934-6489 and press 2
                to reach Xfinity’s automated payment system. Make sure your
                account number is nearby.
              </li>
              <li>
                · On the Xfinity My Account app, found on Google Play or the App Store, tap "Billing" on the home page and then "Pay Now."
              </li>
              <li>
                · To pay by mail, send a check using the insert from your Xfinity paper bill. You can also pay in-person at a local Xfinity store
              </li>
            </ul>
            <div className="two-callbacks">
              <div className="call-back">
                <div className="call-back-container">
                  <div className="icon-box">
                    <Image src={laptopback} alt="whatsapp" className="whatsapp" />
                    <div className="icon-box-content">
                      <h4>Pay your Xfinity bill</h4>
                      <br />
                      <p>
                        call 1-800-934-6489 and press 2 to reach Xfinity’s
                        automated payment system
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>
                <Link href={"#"}>
                  <p>schedule a callback</p>
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
                      <h4>Pay your Xfinity bill</h4>
                      <br />
                      <p>
                        online payments through the Xfinity Assistant chatbot.
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>
                <Link href={"#"}>
                  <p>schedule a callback</p>
                  <div className="arrow-icon-box">
                    <GoArrowUpRight className="upright-arrow-icon" />
                  </div>
                </Link>
              </div>
            </div> 
          </div>
        </div>
      </div>

      <div className="section suspend-xfinity-service">
        <div className="head">
          <h2 className="sect-heading">
            <span> Cancel, change, or suspend your </span> Xfinity service
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae varius volutpat
            habitant pharetra vulputate ipsum non. Sit lectus laoreet velit
            convallis lectus tincidunt ipsum. Pellentesque enim orci nunc nisi
            eu pretium gravida. Nulla dui sit ut nibh egestas suspendisse. At
            purus massa tellus sit feugiat morbi. Purus at dolor.
          </p>
        </div>

        <div className="endnote endnote-start">
          <div className="endnote-container">
            <h4>Changing Xfinity services</h4>
            <br />
            <p>
              To change your{" "}
              <span className="link">
                <Link href={"#"}>Xfinity package, </Link>
              </span>
              schedule an Xfinity{" "}
              <span className="link">
                <Link href={"#"}>phone callback </Link>
              </span>
              or speak to a live{" "}
              <span className="link">
                <Link href={"#"}> Xfinity chat</Link>
              </span>
              agent. You can also add premium TV channels and cancel Xfinity
              Advanced Security or Instant TV services through the Xfinity
              website.
            </p>
            <div className="call-back">
              <div className="call-back-container">
                <div className="icon-box">
                  <Image src={phoneback} alt="whatsapp" className="whatsapp" />
                  <div className="icon-box-content">
                    <h4>Xfinity tech support</h4>
                    <br />
                    <p>
                      Between 8:00 a.m. and 9:00 p.m. ET Monday through Sunday.
                    </p>
                  </div>
                </div>
                <hr />
              </div>
              <Link href={"#"}>
                <p>schedule a callback</p>
                <div className="arrow-icon-box">
                  <GoArrowUpRight className="upright-arrow-icon" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="endnote endnote-start">
          <div className="endnote-container">
            <h4>Pausing Xfinity services</h4>
            <br />
            <p>
              Visit{" "}
              <span className="link">
                <Link href={"#"}>ComcastSeasonal.com </Link>
              </span>
              or mention seasonal plans to an Xfinity customer support agent to
              suspend your Xfinity service. Depending on your subscriptions,
              you’ll pay a discounted rate over the suspension period.
            </p>
            <div className="call-back">
              <div className="call-back-container">
                <div className="icon-box">
                  <Image src={phoneback} alt="whatsapp" className="whatsapp" />
                  <div className="icon-box-content">
                    <h4>Xfinity tech support</h4>
                    <br />
                    <p>
                      Between 8:00 a.m. and 9:00 p.m. ET Monday through Sunday.
                    </p>
                  </div>
                </div>
                <hr />
              </div>
              <Link href={"#"}>
                <p>schedule a callback</p>
                <div className="arrow-icon-box">
                  <GoArrowUpRight className="upright-arrow-icon" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="endnote endnote-start">
          <div className="endnote-container">
            <h4>Canceling Xfinity services</h4>
            <br />
            <p>
            If you want to cancel your Xfinity services, you have a few options: you can ask for a phone call, chat with an agent online, or go to an Xfinity store nearby. You can also fill out a cancellation form online or send one by mail to the address below:
Comcast Cable ATTN: Service Change Requests 1701 JFK Blvd. Philadelphia, PA 19103
Xfinity will confirm your request by mail or email within two business days.{" "}
              <span className="link">
                <Link href={"#"}>phone callback, </Link>
              </span>
              connect to a{" "}
              <span className="link">
                <Link href={"#"}>chat agent, </Link>
              </span>{" "}
              or visit your{" "}
              <span className="link">
                <Link href={"#"}>local Xfinity store. </Link>
              </span>
              You can also complete an{" "}
              <span className="link">
                <Link href={"#"}>online cancellation form </Link>
              </span>
              or mail a form that includes your full name, service address,
              account number, and phone number to:
            </p>
            <ul>
              <li>Comcast Cable</li>
              <li> ATTN: Service Change Requests</li>
              <li> 1701 JFK Blvd.</li>
              <li> Philadelphia, PA 19103</li>
            </ul>
            <p>
              Xfinity will confirm mail and email requests within two business
              days.
            </p>
          </div>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Xfinity Overview | Xfinity Internet | Xfinity TV | Xfinity
          Voice | Xfinity Bundles | Xfinity Channel Lineup | Xfinity Customer
          Service | Xfinity Availability Map | Xfinity Free Installation
        </p>
      </div>

      <div className="section endnote intertnet-review-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Methodology:</h4>
          <p>
          Our experts have put in a lot of time studying companies like Xfinity to gather the best advice on dealing with customer service and tech support. To learn more, check out our How We Rank page.{" "}
            <span className="link">
              <Link href={"#"}>How We Rank </Link>
            </span>{" "}
            page.
          </p>
        </div>
      </div>
      {/* <Newsletter /> */}
    </div>
  );
};

export default XfinityCustomerService;
