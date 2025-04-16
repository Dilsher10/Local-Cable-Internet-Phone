// import React, { useState } from "react";
import "./centurylink-customer-service.scss";
// import { directtvNavLinks } from "../../assets/data/navLinks/directtvNavLinks";
// import SubNav from "../../components/sub-nav/SubNav";
import centurylinkone from "../../assets/images/centurylinkone.png";
import centurylinktwo from "../../assets/images/centurylinktwo.png";
import centurylinkthree from "../../assets/images/centurylinkthree.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import { GoArrowUpRight } from "react-icons/go";
import phoneback from "../../assets/images/phoneback.png";
// import Newsletter from "../../components/newsletter/Newsletter";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";

export const metadata = {
  title: "CenturyLink Customer Service: 1-800-244-1111",
};

const CenturyLinkCustomerService = () => {
  //   const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="centurylink-customer-service">
      {/* <SubNav links={directtvNavLinks} /> */}
      <div className="customer-service-hero global-inner-hero">
        <h1>CenturyLink Customer Service: 1-800-244-1111</h1>
        <p>
          Call to talk to a human about your CenturyLink service today. (Para
          asistencia en español: opcion 9)
        </p>
        <div className="container-img">
          <div className="column-img">
            <Link href={"#"}>
              <Image src={centurylinkone} alt="customer" className="" />
            </Link>
          </div>
          <div className="column-img">
            <Link href={"#"}>
              <Image src={centurylinktwo} alt="customer" className="" />
            </Link>
          </div>
          <div className="column-img">
            <Link href={"#"}>
              <Image src={centurylinkthree} alt="customer" className="" />
            </Link>
          </div>
        </div>
      </div>

      <div className="section important-links">
        <div className="head">
          <h2 className="sect-heading">
            CenturyLink customers: <span> I’m looking for </span>
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
          <Link href={"#"}>Outages</Link>
          <Link href={"#"}>Phone support</Link>
          <Link href={"#"}>Online support</Link>
          <Link href={"#"}>Tech support</Link>
          <Link href={"#"}>Business support</Link>
          <Link href={"#"}>Local support</Link>
          <Link href={"#"}>Before you call</Link>
          <Link href={"#"}>Pay your bill</Link>
          <Link href={"#"}>Sign up for service</Link>
          <Link href={"#"}>Cancel service</Link>
          <Link href={"#"}>Pros and cons</Link>
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
            Contact <span> CenturyLink customer service </span>
          </h2>
          <p className="sect-desc">
            Got a question about CenturyLink service? Cool. You can reach a
            living, breathing CenturyLink representative from 8 a.m.–6 p.m.
            local time Monday–Friday. <br />
            That’s all the service says on its website, and yeah, it’s not very
            helpful. Without knowing CenturyLink’s time zone (it’s central, by
            the way), you can easily call too late or too early, wasting your
            time. This likely contributes to CenturyLink’s poor customer support
            score. <br />
            Also, Monday–Friday from 8:00 a.m.–6:00 p.m.? Like, when almost
            everyone is at work? Nobody likes sneaking in customer support calls
            at their desk or during a lunch hour. <br />
            Luckily, you can reach CenturyLink reps by chat from 8:00
            a.m.–midnight central, seven days a week. If you work during the
            day, we highly recommend this method of contacting CenturyLink.
          </p>
        </div>
        <br />
        <div className="package-table-container channels">
          <h4>CenturyLink customer service hours of operation</h4>
          <p className="after-heading"></p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Time zone</th>
                  <th>CenturyLink phone support hours (Mon.–Fri.)</th>
                  <th>CenturyLink phone support hours(Sat.)</th>
                  <th>CenturyLink chat support hours(7 days a week)</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1 </td>
                  <td>Eastern Standard Time (EST) </td>
                  <td> 9:00 a.m.–7:00 p.m. </td>
                  <td>N/A </td>
                  <td> 9:00 a.m.–1:00 a.m. </td>
                </tr>
                <tr>
                  <td>2 </td>
                  <td> Central Standard Time (CST) </td>
                  <td> 8:00 a.m.–6:00 p.m. </td>
                  <td> N/A </td>
                  <td> 8:00 a.m.–6:00 p.m. </td>
                </tr>
                <tr>
                  <td>3 </td>
                  <td> Mountain Standard Time (MST)</td>
                  <td> 7:00 a.m.–5:00 p.m. </td>
                  <td> N/A </td>
                  <td> 7:00 a.m.–11:00 p.m. </td>
                </tr>
                <tr>
                  <td>4 </td>
                  <td> Pacific Standard Time (PST)</td>
                  <td> 6:00 a.m.–4:00 p.m. </td>
                  <td> N/A </td>
                  <td> 6:00 a.m.–10:00 p.m. </td>
                </tr>
                <tr>
                  <td>5 </td>
                  <td> Alaska Standard Time (AKST)</td>
                  <td> 6:00 a.m.–4:00 p.m. </td>
                  <td> N/A </td>
                  <td> 6:00 a.m.–10:00 p.m. </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td> Hawaii-Aleutian Standard Time (HST)</td>
                  <td> 4:00 a.m.–2:00 p.m. </td>
                  <td> N/A </td>
                  <td> 4:00 a.m.–8:00 p.m. </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="two-callbacks">
            <div className="call-back">
              <div className="call-back-container">
                <div className="icon-box">
                  <Image src={phoneback} alt="whatsapp" className="whatsapp" />
                  <div className="icon-box-content">
                    <h4>Call DIRECTV Customer Support Now</h4>
                    <br />
                    <p>Bill and account assistance: 8 a.m. to midnight ET</p>
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
                    <h4>Call DIRECTV Tech Support Now</h4>
                    <br />
                    <p>Technical support: 24/7</p>
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

        <div className="package-table-container channels">
          <h4>CenturyLink outages</h4>
          <p className="after-heading">
            Uh-oh. Did your slasher movie stream cut off right when the killer
            raised their machete? Or did your internet go out when you were
            about to smoke the rest of the pack in a Forza Motorsports 7 online
            race? Did your landline go down while you were dialing 911?
            <br />
            You might be experiencing a service outage. If so, you can get help
            from CenturyLink online or on the phone by following these steps:
          </p>
          <ul>
            <li>1. Use the Test Your Services tool.</li>
            <li>2. Enter your account or billing phone number.</li>
            <li>3. Fill in your billing ZIP code.</li>
            <li>4. Click ‘Run Test’.</li>
          </ul>
          <p>
            The test will tell you if there’s a known outage in your area. If an
            outage isn’t to blame, you can click the “Internet Problems” button
            to continue troubleshooting your issue. Or call tech support by
            clicking one of the buttons below.
          </p>
          <div className="call-back">
            <div className="call-back-container">
              <div className="icon-box">
                <Image src={phoneback} alt="whatsapp" className="whatsapp" />
                <div className="icon-box-content">
                  <h4>Call DIRECTV Customer Support Now</h4>
                  <br />
                  <p>Bill and account assistance: 8 a.m. to midnight ET</p>
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

        <div className="package-table-container channels">
          <h4>CenturyLink customer service online</h4>
          <p className="after-heading">
            Do you prefer typing over talking? Do you trust your own research
            over the expertise of a call center employee? Then online customer
            service might be for you.
            <br />
            CenturyLink has several options for online help:
          </p>
          <ul>
            <li>
              Live reps available via chat from 8:00 a.m.–midnight central time,
              seven days a week (respond “agent” three times to reach a real
              person) \
            </li>
            <li>
              Live reps on Facebook Messenger and Twitter (Mon.–Fri. from 7:00
              a.m.–midnight central time, and weekends from 9:00 a.m.–7 p.m.
              central time)
            </li>
            <li>A way to email the repair department</li>
            <li>A detailed, searchable help page</li>
            <li>
              Handy customer support tools, including Internet Speed Test,
              Service Troubleshooter, Where’s My Technician?, Modem
              Compatibility, Manage My Services, and Find Product Availability
            </li>
          </ul>
          <p>
            We contacted CenturyLink customer support via chat 11 times. We’d
            call seven of the wait times normal (five minutes or less) and four
            of them too long. <br />
            The reps, for the most part, were knowledgeable. We did, however,
            have a few annoying encounters. <br />
            One rep repeatedly insisted that 1.5 Mbps would handle multiple
            video streams and online gaming—which is wildly incorrect—while
            pushing us to sign up. And on two other calls, agents were unable to
            tell us even basic details for CenturyLink’s phone service add-on,
            Easy Talk. <br />
            So 8 out of 11 chats ended pretty well, while the other three had us
            pulling our hair out. If this were school, CenturyLink would’ve
            scored a 73%—or barely a C. That’s a passing grade, but we feel like
            CenturyLink can do much better.
          </p>
          <div className="call-back">
            <div className="call-back-container">
              <div className="icon-box">
                <Image src={phoneback} alt="whatsapp" className="whatsapp" />
                <div className="icon-box-content">
                  <h4>Call DIRECTV Customer Support Now</h4>
                  <br />
                  <p>Bill and account assistance: 8 a.m. to midnight ET</p>
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

      <div className="section outages">
        <div className="head">
          <h2 className="sect-heading">
            CenturyLink <span> customer service phone number </span>
          </h2>
          <p className="sect-desc">
            To reach a CenturyLink customer service rep, dial 1-800-244-1111
            from 8:00 a.m.–6:00 p.m. central time, Monday–Friday.
          </p>
        </div>
        <br />
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={phoneback} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>Call CenturyLink customer support Now</h4>
                <br />
                <p>
                  Please check the customer support’s timings before calling.
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

      <div className="section customer-services">
        <div className="head">
          <h2 className="sect-heading">
            Other CenturyLink <span> online support </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae varius volutpat
            habitant pharetra vulputate ipsum non. Sit lectus laoreet velit
            convallis lectus tincidunt ipsum. Pellentesque enim orci nunc nisi
            eu pretium gravida. Nulla dui sit ut nibh egestas suspendisse. At
            purus massa tellus sit feugiat morbi. Purus at dolor.
          </p>
        </div>
        <br />
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Account and billing FAQ</th>
                <th>Other support FAQ</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1 </td>
                <td>Cancel your CenturyLink service </td>
                <td> Block unwanted calls </td>
              </tr>
              <tr>
                <td>2 </td>
                <td> Ways to pay your bill </td>
                <td> Download and install Norton Antivirus </td>
              </tr>
              <tr>
                <td>3 </td>
                <td> Enroll in autopay</td>
                <td> Set up your modem and activate internet </td>
              </tr>
              <tr>
                <td>4 </td>
                <td> Find your ‘My Account’ username and password</td>
                <td>Find your ‘My Account’ username and password </td>
              </tr>
              <tr>
                <td>5 </td>
                <td> Move your CenturyLink service</td>
                <td> Troubleshoot a slow internet connection </td>
              </tr>
              <tr>
                <td>6</td>
                <td> Pay your bill online</td>
                <td> Troubleshoot Wi-Fi </td>
              </tr>
              <tr>
                <td>7</td>
                <td> How to return your modem</td>
                <td> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section outages">
        <div className="head">
          <h2 className="sect-heading">
            CenturyLink <span> tech support </span>
          </h2>
          <p className="sect-desc">
            Is that dadgum internet box on the fritz again? Don’t give in to
            your urge to smack some functionality back into it. Call
            CenturyLink’s tech support department. Or send a strongly worded
            e-letter to the general “repair” email address.
          </p>
        </div>
        <br />
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={phoneback} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>Call CenturyLink tech support Now</h4>
                <br />
                <p>
                  Please check the customer support’s timings before calling.
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

      <div className="section bottom-line">
        <div className="head">
          <h2 className="sect-heading">
            CenturyLink customer support <span> for your business </span>
          </h2>
          <p className="sect-desc">
            CenturyLink business customers have a wealth of customer support
            options. In the table above, we’ve listed the chat and phone contact
            information. There are also detailed help pages for both CenturyLink
            Small Business and Enterprise support.
          </p>
        </div>
        <br />
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th> </th>
                <th> </th>
                <th>Small business</th>
                <th>
                  Enterprise (AZ, CO, ID, IA, MN, MT, NE, NM, ND, OR, SD, UT,
                  WA, WY)
                </th>
                <th>Enterprise (all other states)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1. </td>
                <td> Customer support</td>
                <td> 1-855-891-4083</td>
                <td> See list</td>
                <td> See list</td>
              </tr>
              <tr>
                <td>2. </td>
                <td>Internet & TV repair (call) </td>
                <td> 1-800-954-1211</td>
                <td> 1-800-247-7285</td>
                <td> 1-800-247-7285</td>
              </tr>
              <tr>
                <td>3. </td>
                <td>Internet & TV repair (chat) </td>
                <td> Chat Now</td>
                <td> Chat Now</td>
                <td> Chat Now</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="package-table-container channels">
          <h4>CenturyLink local customer service options</h4>
          <p className="after-heading">
            Once upon a time, CenturyLink had local stores where you could get
            customer support and make payments—but it’s closed those.
            <br />
            Some (but not all) Walmarts will accept CenturyLink payments.
            Unfortunately, the only way to know for sure is to visit your local
            Walmart and ask.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Before you call CenturyLink</h4>
          <p className="after-heading">
            So you’ve blocked out time on your calendar, and it’s time to make
            that customer support call. To save yourself time, be prepared with
            the information a CenturyLink rep will need to assist you:
          </p>
          <br />
          <ul>
            <li>
              Your account number or the phone number linked to your account
            </li>
            <li>
              Answers to any super-secret security questions you put on your
              account
            </li>
            <li>A pen and paper for notes</li>
            <li>Your choice of snacks (in case you’re on hold for a while)</li>
            <li>
              A way to distract yourself from being on hold—something shiny, a
              stress ball, a voodoo doll, etc.
            </li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Pay your CenturyLink bill</h4>
          <p className="after-heading">
            Need a way to give CenturyLink your money? See if one of these
            payment methods suits you:
          </p>
          <br />
          <ul>
            <li>Automatic payments: Sign up for CenturyLink AutoPay.</li>
            <li>By app: Download the My CenturyLink smartphone app.</li>
            <li>
              By mail: Find your payment processing center and send your check
              or money order to CenturyLink.
            </li>
            <li>
              By phone—automated phone system: With your check or credit card
              (MasterCard, Visa, American Express, Discover) ready, call
              1-800-244-1111 any time and follow the prompts. This is a free
              service.
            </li>
            <li>
              By phone—representative-assisted payment: Call 1-800-244-1111 from
              7:00 a.m.–6:00 p.m. (CT). There is a $3.50 fee for this service.
            </li>
            <li>
              In-person: CenturyLink has closed all of its brick-and-mortar
              locations, but some Walmarts will accept payments.
            </li>
            <li>Online: CenturyLink Quick Bill Pay is available 24/7.</li>
            <li>
              Through a payment service: CenturyLink accepts payments by
              electronic funds transfer (EFT) from third-party services like
              CheckFreePay and Western Union. There is a fee for using these
              services. You can make these payments in person or online.
            </li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Cancel your CenturyLink service</h4>
          <p className="after-heading">
            To cancel your CenturyLink internet or phone service:
          </p>
          <br />
          <ul>
            <li>
              1. Call 1-800-244-1111 Mon.–Fri. from 8:00 a.m.–6:00 p.m. (CT)
            </li>
            <li>
              2. Be ready for CenturyLink’s customer retention team to try and
              keep your business with special offers and options. If nothing can
              change your mind, just stay firm. It’ll be over soon enough.
            </li>
            <li>
              3. Return your equipment using the return box provided by
              CenturyLink
            </li>
          </ul>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Sign up for <span> CenturyLink service </span>
          </h2>
          <p className="sect-desc">
            What? Are you not a CenturyLink customer? Why are you reading this?
            Oh, you’re interested in becoming a customer.
            <br />
            In that case, call 866-963-6665 from 8:00 a.m.–6:00 p.m. (Mon.–Fri.)
            or 9:00 a.m.–5:00 p.m. (Sat.) central time.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>view centuryLink plans</Link>
        </div>
      </div>

      <div className="section bottom-line">
        <div className="head">
          <h2 className="sect-heading">
            Bottom line: <span> Is CenturyLink customer service good? </span>
          </h2>
          <p className="sect-desc">
            CenturyLink (like Xfinity and Spectrum) is known to have customer
            support issues. In our 2019 customer satisfaction survey covering
            the top 10 DSL and fiber internet service providers in the United
            States, CenturyLink rated 7th in customer support with a score of
            3.99 (out of 5).
            <br />
            CenturyLink ranked similarly in install/setup (8th), modem
            satisfaction (6th), and reliability (7th). Better scores in billing
            (2nd) and value (4th) kept CenturyLink’s combined rating at 3.99,
            which was good enough to finish in 5th place overall (tied with
            Frontier).
          </p>
        </div>
        <br />
        <div className="package-table-container channels">
          <h4>CenturyLink customer service hours of operation</h4>
          <p className="after-heading">
            CenturyLink still has work to do to improve its customer support.
            It’s troubling that CenturyLink has even one rep that would try to
            push a sale based on clear misinformation. Also worrisome is that
            CenturyLink’s idea of doing better through customer advocacy is to
            refer us to its existing customer support department. <br />
            But we do like that it’s so easy to reach a live rep (especially via
            chat) and that most of them know what they’re doing. The online help
            is also rather comprehensive. So CenturyLink is at least headed in
            the right direction.
          </p>
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
                  <td> Affordable fiber internet plan</td>
                  <td> Inconsistent DSL internet speeds</td>
                </tr>
                <tr>
                  <td>Fast upload and download speeds with fiber internet </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>Straightforward pricing </td>
                  <td> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> CenturyLink customer service </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What is the number for
                CenturyLink customer service?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  You can reach CenturyLink customer support by calling
                  1-800-244-1111.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What is the number for CenturyLink customer service?"}
            cssClass={"faq-content"}
          >
            <p>
              You can reach CenturyLink customer support by calling
              1-800-244-1111.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does CenturyLink have
                24-hour customer service?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  CenturyLink does not have 24-hour customer service. Phone
                  support (1-800-244-1111) is open from 8:00 a.m.–6:00 p.m.
                  (CT), Mon.–Fri. Chat support is open from 8:00 a.m.–midnight,
                  seven days a week.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does CenturyLink have 24-hour customer service?"}
            cssClass={"faq-content"}
          >
            <p>
              CenturyLink does not have 24-hour customer service. Phone support
              (1-800-244-1111) is open from 8:00 a.m.–6:00 p.m. (CT), Mon.–Fri.
              Chat support is open from 8:00 a.m.–midnight, seven days a week.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How do I contact
                CenturyLink customer service?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  There are several ways to contact CenturyLink customer
                  service.
                </p>
                <ul>
                  <li>
                    Phone: Call 1-800-244-1111 from 8:00 a.m.–6:00 p.m. (CT),
                    Mon.–Fri.
                  </li>
                  <li>
                    Chat: Live reps available via chat from 8:00 a.m.–midnight
                    (CT)
                  </li>
                  <li>
                    Facebook Messenger and Twitter (Mon.–Fri. from 7:00
                    a.m.–midnight CT and weekends from 9:00 a.m.–7 p.m. CT)
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How do I contact CenturyLink customer service?"}
            cssClass={"faq-content"}
          >
            <p>
              There are several ways to contact CenturyLink customer service.
            </p>
            <ul>
              <li>
                Phone: Call 1-800-244-1111 from 8:00 a.m.–6:00 p.m. (CT),
                Mon.–Fri.
              </li>
              <li>
                Chat: Live reps available via chat from 8:00 a.m.–midnight (CT)
              </li>
              <li>
                Facebook Messenger and Twitter (Mon.–Fri. from 7:00
                a.m.–midnight CT and weekends from 9:00 a.m.–7 p.m. CT)
              </li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What time does CenturyLink
                customer service close?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  CenturyLink phone support closes at 6:00 p.m. central on
                  Monday through Friday. Chat, Facebook, and Twitter support all
                  close at midnight central.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" What time does CenturyLink customer service close?"}
            cssClass={"faq-content"}
          >
            <p>
              CenturyLink phone support closes at 6:00 p.m. central on Monday
              through Friday. Chat, Facebook, and Twitter support all close at
              midnight central.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Who can I escalate to at
                CenturyLink business customer service?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  To escalate issues with CenturyLink, you can contact its
                  Customer Advocacy team via Facebook Messenger and Twitter
                  (Monday through Friday from 7:00 a.m.–midnight central and
                  weekends from 9:00 a.m.–7 p.m. central).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={
              " Who can I escalate to at CenturyLink business customer service?"
            }
            cssClass={"faq-content"}
          >
            <p>
              To escalate issues with CenturyLink, you can contact its Customer
              Advocacy team via Facebook Messenger and Twitter (Monday through
              Friday from 7:00 a.m.–midnight central and weekends from 9:00
              a.m.–7 p.m. central).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> How do I talk to a real
                person at CenturyLink?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  You can reach a real person at CenturyLink fairly easily by
                  calling 1-800-244-1111 (Monday through Friday 8:00 a.m.–6:00
                  p.m. central) or through chat (seven days a week, 8:00
                  a.m.–midnight central).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" How do I talk to a real person at CenturyLink?"}
            cssClass={"faq-content"}
          >
            <p>
              You can reach a real person at CenturyLink fairly easily by
              calling 1-800-244-1111 (Monday through Friday 8:00 a.m.–6:00 p.m.
              central) or through chat (seven days a week, 8:00 a.m.–midnight
              central).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(7)}>
                <span>{faq === 7 ? "-" : "+"}</span> How do I report a
                CenturyLink outage?
              </h3>

              <div className={`faq-content ${faq === 7 ? "show" : ""}`}>
                <p>
                  If you think there might be an outage in your area, you can
                  visit CenturyLink online to test your services.
                  <br />
                  After entering your account or billing phone number and zip
                  code, you’ll learn if there are known outages in your
                  neighborhood. You may also call technical support at
                  1-877-348-9005 (internet repair) or 1-877-348-9007 (phone
                  repair) to report an outage.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={" How do I report a CenturyLink outage?"}
            cssClass={"faq-content"}
          >
            <p>
              If you think there might be an outage in your area, you can visit
              CenturyLink online to test your services.
              <br />
              After entering your account or billing phone number and zip code,
              you’ll learn if there are known outages in your neighborhood. You
              may also call technical support at 1-877-348-9005 (internet
              repair) or 1-877-348-9007 (phone repair) to report an outage.
            </p>
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
            For this article, our experts spent hours finding and calling
            CenturyLink contact numbers, exploring its online chat system, and
            conduction customer satisfaction surveys.
            <br />
            At CableTV.com, we rate TV and internet service providers based on
            price, speed, features, and bang for your buck. For more information
            on our methodology, head to our
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
            page.
          </p>
        </div>
      </div>

      <div className="divider">
        <p> See also: Overview | Bundles | Internet | Phone</p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default CenturyLinkCustomerService;
