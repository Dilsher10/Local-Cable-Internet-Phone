// import React, { useState } from "react";
import "./spark-light-customer-service.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { sparklightNavLinks } from "../../assets/data/navLinks/sparklightNavLinks";
import sparklightone from "../../assets/images/sparklight-one.png";
import sparklighttwo from "../../assets/images/sparklight-two.png";
import sparklightthree from "../../assets/images/sparklight-three.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import { GoArrowUpRight } from "react-icons/go";
import phoneback from "../../assets/images/phoneback.png";
import mark from "../../assets/images/mark.png";
// import Newsletter from "../../components/newsletter/Newsletter";
import quotations from "../../assets/images/quotations.svg";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";

export const metadata = {
  title: "Sparklight Customer Service: 1-877-692-2253"
};

const SparkLightCustomerService = () => {
  //   const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };

  return (
    <div className="spark-light-customer-service">
      {/* <SubNav links={sparklightNavLinks} /> */}
      <div className="service-hero global-inner-hero">
        <h1>Sparklight Customer Service: 1-877-692-2253</h1>
        <p>Call to talk to a human about your Sparklight service today.</p>
        <div className="container-img">
          <div className="column-img">
            <Link href={"#"}>
              {" "}
              <Image src={sparklightone} alt="customer" className="" />
            </Link>
          </div>
          <div className="column-img">
            <Link href={"#"}>
              {" "}
              <Image src={sparklighttwo} alt="customer" className="" />
            </Link>
          </div>
          <div className="column-img">
            <Link href={"#"}>
              {" "}
              <Image src={sparklightthree} alt="customer" className="" />
            </Link>
          </div>
        </div>
      </div>

      <CTA
        heading={"Curious what other providers are in your area?"}
        desc={
          "Enter your zip code below to find the right internet and TV service for you."
        }
      />

      <div className="section important-links">
        <div className="head">
          <h2 className="sect-heading">
            Sparklight Customers; <span> I’m looking for </span>
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
          <Link href={"#"}>Hours </Link>
          <Link href={"#"}>Outages </Link>
          <Link href={"#"}>Phone support </Link>
          <Link href={"#"}>Online support </Link>
          <Link href={"#"}>Tech support </Link>
          <Link href={"#"}>Business support </Link>
          <Link href={"#"}>Local support </Link>
          <Link href={"#"}>Before you call </Link>
          <Link href={"#"}>Pay your bill </Link>
          <Link href={"#"}>Sign up for service </Link>
          <Link href={"#"}>Cancel service </Link>
          <Link href={"#"}>Pros and cons </Link>
          <Link href={"#"}>FAQ </Link>
        </div>
      </div>

      <div className="section phone-number">
        <div className="head">
          <h2 className="sect-heading">
            Contact Sparklight customer service;{" "}
            <span> Sparklight customer service hours of operation</span>
          </h2>
          <p className="sect-desc">
            You can reach Sparklight’s tech support and billing support at
            1-877-692-2253. Tech support is 24/7, while billing support is open
            weekdays from 8:00 AM–5:00 PM MST. You’ll need your account number
            or associated phone number to talk to a customer service
            representative.
            <br />
            We repeat: you will absolutely need one of the numbers mentioned
            earlier. Sparklight offers no other workaround for you to talk to a
            human being. Ugh.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={phoneback} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>Call Sparklight Customer Support Now</h4>
                <br />
                <p>Open weekdays from 8:00 AM–5:00 PM MST.</p>
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

      <div className="section outages">
        <div className="head">
          <h2 className="sect-heading">
            Sparklight
            <span> outages </span>
          </h2>
          <p className="sect-desc">
            If you’re not sure whether your internet problems are from a local
            outage or something else, give Sparklight a ring at 1-877-692-2253.
            <br />
            Should there be an outage in your area, you’ll hear an announcement
            after you enter your account number or phone number. And if you have
            more questions, you can stay on the line to talk to a service rep.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={phoneback} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>Call Sparklight Tech Support Now</h4>
                <br />
                <p>Tech support is 24/7.</p>
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

      <div className="section phone-number">
        <div className="head">
          <h2 className="sect-heading">
            Sparklight customer
            <span> service phone number</span>
          </h2>
          <p className="sect-desc">
            The number for Sparklight customer service is 1-877-692-2253. Make
            sure you have your account number or associated phone number ready
            to enter, or you won’t be able to get through to customer service.
            <br />
            We know—that’s not a helpful restriction when you’re already in
            crisis, but there’s no way around it.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={phoneback} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>Call Sparklight Customer Support Now</h4>
                <br />
                <p>Open weekdays from 8:00 AM–5:00 PM MST.</p>
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

      <div className="section outages">
        <div className="head">
          <h2 className="sect-heading">
            Sparklight
            <span> customer service online </span>
          </h2>
          <p className="sect-desc">
            Sparklight has a collection of videos and articles to answer FAQ.
            The articles are a little dense and wordy, so they may take a few
            passes to decipher.
            <br />
            If you want tech help online, Sparklight doesn’t have a chat box,
            but it does let you submit a ticket for someone to reach out to you.
            Log in to your online account, click on Support in the top bar, and
            then select Tickets. From there, you can fill out a message stating
            your technical problems.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={phoneback} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>log in your sparklight account</h4>
                <br />
                <p>Tech support is 24/7.</p>
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

      <div className="section equipment-features">
        <div className="head">
          <h2 className="sect-heading">
            Other Sparklight <span> online support </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae varius volutpat
            habitant pharetra vulputate ipsum non. Sit lectus laoreet velit
            convallis lectus tincidunt ipsum. Pellentesque enim orci nunc nisi
            eu pretium gravida. Nulla dui sit ut nibh egestas suspendisse. At
            purus massa tellus sit feugiat morbi. Purus at dolor.
          </p>
        </div>

        <div className="two-col-channel">
          <div className="package-table-container channels">
            <h4>Cox Panoramic WiFi</h4>
            <br />
            <ul>
              <li>Online Account Overview</li>
              <li>Checking Data Usage</li>
              <li>Cable TV Surcharges</li>
              <li>Payment Options</li>
              <li>How do I cancel, disconnect, or change my service?</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Cox Contour Stream Player</h4>
            <br />
            <ul>
              <li>Internet Not Working</li>
              <li>Changing Your WiFi Password</li>
              <li>WiFi ONE FAQ’s</li>
              <li>Supported Cable Modems</li>
              <li>TV Everywhere</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section outages">
        <div className="head">
          <h2 className="sect-heading">
            Sparklight
            <span> tech support </span>
          </h2>
          <p className="sect-desc">
            You can reach Sparklight’s tech support at 1-877-692-2253. Enter
            either your account number or the phone number associated with your
            account to talk to an agent."
            <br />
            If you prefer to have Sparklight call you, log in to your online
            account. In the Support section, under Tickets, you can send a
            message to Sparklight’s technical support. A technician will reach
            out to you to help—but Sparklight doesn’t indicate how long the wait
            will be.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={phoneback} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>Call Sparklight Tech Support Now</h4>
                <br />
                <p>Tech support is 24/7</p>
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

      <div className="section phone-number">
        <div className="head">
          <h2 className="sect-heading">
            Sparklight customer support
            <span> for your business </span>
          </h2>
          <p className="sect-desc">
            If you have a Sparklight Business account, call 1-877-570-0500 for
            customer support. You’ll need to provide your account number or
            associated phone number to chat with a customer representative.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={phoneback} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>lCall Sparklight Customer Support Now</h4>
                <br />
                <p>Open weekdays from 8:00 AM–5:00 PM MST.</p>
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

      <div className="section local-customer-service-options">
        <div className="head">
          <h2 className="sect-heading">
            Sparklight <span> local customer service options </span>
          </h2>
          <p className="sect-desc">
            Whether you want to talk out your Sparklight needs face-to-face or
            call someone who knows your area better, your local Sparklight
            office can probably help you out with that.
            <br />
            To find a nearby office, head over to Sparklight’s Contact Us page.
            Scroll down to the section that says “Not finding what you’re
            looking for?” and click that purple down arrow. From there, you can
            enter your ZIP code and get the address, office hours, and contact
            info for your local Sparklight location.
          </p>
        </div>

        <div className="endnote endnote-start">
          <div className="endnote-container">
            <Image src={mark} alt="mark" className="mark" />
            <h4>Before you call Sparklight</h4>
            <p>
              Your call with Sparklight will go much smoother if you prepare a
              few things beforehand:
            </p>
            <ul>
              <li>
                {" "}
                · Your account number or the phone number associated with your
                account: Sparklight’s phone system won’t connect you to a
                customer service representative unless you have one of these.
              </li>
              <li>
                {" "}
                · The last four digits of your Social Security number: You may
                need to provide information like this to confirm your identity.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section signup">
        <div className="head">
          <h2 className="sect-heading">
            Pay, Sign up or cancel <span> Your sparklight services </span>
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
            <h4>Pay your Sparklight bill</h4>
            <p>Sparklight has five different ways you can pay your bill.</p>
            <ul>
              <li>
                Easy Pay: Sign up for Easy Pay online to schedule automatic
                monthly payments.
              </li>
              <li>
                Online payments: Even if you don’t want to make automatic
                payments, you can still pay online with a Visa, MasterCard, or
                Discover credit/debit card. Heads up, American Express fans—your
                card’s no good with Sparklight.
              </li>
              <li>
                In-person: Drop by your local Sparklight store to take care of
                that bill.
              </li>
              <li>
                Mail: Send a check or money order with the bottom portion of
                your bill to Sparklight at PO BOX 78000, Phoenix, AZ 85062-8000.
              </li>
              <li>
                Phone: Call 1-877-692-2253 and use the automated bill-pay
                service. You can also ask to speak with a representative, but
                you’ll have to pay an extra $10 convenience fee should you dare
                request a human ear regarding your payment.
              </li>
            </ul>
            <div className="call-back">
              <div className="call-back-container">
                <div className="icon-box">
                  <Image src={phoneback} alt="whatsapp" className="whatsapp" />
                  <div className="icon-box-content">
                    <h4>Call Sparklight Tech Support Now</h4>
                    <br />
                    <p>Open weekdays from 8:00 AM–5:00 PM MST.</p>
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

        <div className="endnote endnote-start">
          <div className="endnote-container">
            <h4>Sign up for Sparklight service</h4>
            <p>
              You can sign up for Sparklight right now when you call. Not sure
              what plan you want? Check out our Sparklight review to see your
              options.
            </p>

            <div className="call-back">
              <div className="call-back-container">
                <div className="icon-box">
                  <Image src={phoneback} alt="whatsapp" className="whatsapp" />
                  <div className="icon-box-content">
                    <h4>Call Sparklight Tech Support Now</h4>
                    <br />
                    <p>Open weekdays from 8:00 AM–5:00 PM MST.</p>
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

        <div className="endnote endnote-start">
          <div className="endnote-container">
            <h4>Cancel your Sparklight service</h4>
            <p>
              Canceling Sparklight service varies based on whether or not you’re
              leasing equipment.
            </p>
            <ul>
              <li>
                Return the equipment yourself: If you’re renting a modem,
                set-top box, or DVR from Sparklight, pack it in the car and head
                on over to your local office. When you return it there, the
                local team can help you disconnect your Sparklight service.
              </li>
              <li>
                Have the equipment picked up: Should you require it, a
                technician can usually pick up the equipment at your house
                instead, though that will cost you a $45 convenience fee.
              </li>
              <li>
                Cancel without equipment returns: If you own the equipment, you
                don’t need to return anything. Just call Sparklight at
                1-877-692-2253 to cancel your service. Make sure you have your
                account number handy.
              </li>
            </ul>
            <div className="call-back">
              <div className="call-back-container">
                <div className="icon-box">
                  <Image src={phoneback} alt="whatsapp" className="whatsapp" />
                  <div className="icon-box-content">
                    <h4>Call Sparklight Tech Support Now</h4>
                    <br />
                    <p>Open weekdays from 8:00 AM–5:00 PM MST.</p>
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

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is sparklight customer service good? </span>
          </h2>
          <p className="sect-desc">
            In no way is Sparklight a perfect service, but it’s got a few things
            going for it. Since you can file technical support tickets online,
            you won’t have to wait on the phone if something goes down. And you
            can solve a lot of problems yourself with the online articles—even
            if they aren’t always the smoothest read.
            <br />
            Unfortunately, Sparklight isn’t accessible for Spanish-language
            speakers. And even English-language speakers will need to make sure
            they keep track of their account number or associated phone number
            since there’s no talking to a phone agent without one. Keep these
            limitations in mind when you’re reaching out to Sparklight, and you
            can avoid some trouble while you get the help you need.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>call sparklight customer service</Link>
        </div>
        <div className="package-table-container channels">
          <h4>Pros and cons of Sparklight customer service</h4>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th> </th>
                  <th>
                    Prospects <IoThumbsUpSharp />
                  </th>
                  <th>
                    Consequences <IoThumbsDownSharp />
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1. </td>
                  <td>Online technical support ticket filing</td>
                  <td>No Spanish-language customer service</td>
                </tr>
                <tr>
                  <td>2. </td>
                  <td>Online help articles and videos</td>
                  <td>Account number or phone number required for calls </td>
                </tr>
                <tr>
                  <td>3. </td>
                  <td>Easy signup and cancellation</td>
                  <td>Difficult-to-read help articles </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="section  faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Sparklight customer service </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Can I pay my Sparklight
                cable bill at Walmart?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Yes, Walmart offers money services to pay many of your bills,
                  including your cable bill from Sparklight. However, Walmart
                  charges a convenience fee starting at $1.50.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Can I pay my Sparklight cable bill at Walmart?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, Walmart offers money services to pay many of your bills,
              including your cable bill from Sparklight. However, Walmart
              charges a convenience fee starting at $1.50.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What is the phone number
                for Sparklight?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>You can reach Sparklight at 1-877-692-2253.</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" What is the phone number for Sparklight?"}
            cssClass={"faq-content"}
          >
            <p>You can reach Sparklight at 1-877-692-2253.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How much is Sparklight
                internet a month?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Sparklight’s Internet 50 package starts at $40 per month for
                  download speeds up to 50 Mbps. To see all of Sparklight’s
                  internet plans, head on over to our Sparklight internet
                  review.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How much is Sparklight internet a month?"}
            cssClass={"faq-content"}
          >
            <p>
              Sparklight’s Internet 50 package starts at $40 per month for
              download speeds up to 50 Mbps. To see all of Sparklight’s internet
              plans, head on over to our Sparklight internet review.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does Sparklight have a
                contract?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>No, all of Sparklight’s plans are contract-free.</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Does Sparklight have a contract?"}
            cssClass={"faq-content"}
          >
            <p>No, all of Sparklight’s plans are contract-free.</p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote page-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />

          <h4>Methodology:</h4>
          <p>
            Our CableTV.com experts have spent thousands of hours researching
            and testing TV and internet service providers to bring you
            comprehensive customer service guides and reviews. For more on our
            process, read{" "}
            <span className="link">
              <Link href={"#"}> How We Rank.</Link>
            </span>
          </p>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Sparklight Overview | Sparklight Internet | Sparklight TV |
          Sparklight Voice | Sparklight Bundles | Sparklight Channel lineup
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default SparkLightCustomerService;
