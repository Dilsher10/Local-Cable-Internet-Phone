// import React, { useState } from "react";
import "./direct-tv-customer-service.scss";
// import { directtvNavLinks } from "../../assets/data/navLinks/directtvNavLinks";
// import SubNav from "../../components/sub-nav/SubNav";
import directvone from "../../assets/images/directvone.png";
import directvtwo from "../../assets/images/directvtwo.png";
import directvthree from "../../assets/images/directvthree.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import { GoArrowUpRight } from "react-icons/go";
import phoneback from "../../assets/images/phoneback.png";
import mark from "../../assets/images/mark.png";
import messagechat from "../../assets/images/messagechat.png";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "DIRECTV Customer Service"
};

const DirectTvCustomerService = () => {
  // const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="direct-tv-customer-service">
      {/* <SubNav links={directtvNavLinks} /> */}
      <div className="direct-tv-customer-service-hero global-inner-hero">
        <h1>DIRECTV Customer Service</h1>
        <p>Call to talk to a real person about your DIRECTV service today.</p>
        <div className="container-img">
          <div className="column-img">
            <Link href={"#"}>
              <Image src={directvone} alt="customer" className="" />
            </Link>
          </div>
          <div className="column-img">
            <Link href={"#"}>
              <Image src={directvtwo} alt="customer" className="" />
            </Link>
          </div>
          <div className="column-img">
            <Link href={"#"}>
              <Image src={directvthree} alt="customer" className="" />
            </Link>
          </div>
        </div>
      </div>
      <StickyHeader />

      <div className="endnote direct-tv-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            5-day free trial: Tired of cable and satellite TV but not quite sure
            if you wanna cut the cord?{" "}
            <span className="link">
              <Link href={"#"}>DIRECTV STREAM</Link>
            </span>{" "}
            is a good streaming alternative for folks who want the look and feel
            of old-school TV without the installation requirements, equipment
            fees, and other headaches that come with cable.
            <br />
            Are you looking to get in contact with{" "}
            <span className="link">
              <Link href={"#"}>DIRECTV </Link>
            </span>
            customer service? You can call{" "}
            <span className="link">
              <Link href={"#"}>+1-800-531-5000</Link>
            </span>{" "}
            any time of day for technical support or between 8 a.m. and midnight
            ET for billing and account assistance.
            <br />
            If you prefer different forms of contact, keep scrolling for more
            specific customer support options.
          </p>
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

      <div className="section customer-services">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV <span> phone number and hours of operation </span>
          </h2>
          <p className="sect-desc">
            You can reach DIRECTV customer service and technical support at
            <span className="link">
              <Link href={"#"}>+1-800-531-5000.</Link>
            </span>{" "}
            Technical support is always available, but you can get help with
            your bill and account only from 8 a.m. to midnight ET.
          </p>
        </div>
        <br />
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

      <div className="section outages">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV <span> outages </span>
          </h2>
          <p className="sect-desc">
            You can reach DIRECTV customer service and technical support at
            <span className="link">
              <Link href={"#"}>+1-800-531-5000.</Link>
            </span>{" "}
            Sometimes bad weather can interrupt your DIRECTV service. But
            because the most crucial piece of DIRECTV equipment is floating
            weightless in space, major outages don’t happen often. You can learn
            about your local outages on{" "}
            <span className="link">
              <Link href={"#"}>DIRECTV’s website.</Link>
            </span>
          </p>
        </div>
        <br />
        <div className="two-callbacks">
          <div className="call-back">
            <div className="call-back-container">
              <div className="icon-box">
                <Image src={phoneback} alt="whatsapp" className="whatsapp" />
                <div className="icon-box-content">
                  <h4>Call DIRECTV Tech Support Now</h4>
                  <br />
                  <p>
                    Apologies for the inconvenience caused, contact 24/7
                    Technical support now.
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

      <div className="section more-customer-services">
        <div className="head">
          <h2 className="sect-heading">
            More DIRECTV <span> customer service phone numbers </span>
          </h2>
          <p className="sect-desc">
            You can reach DIRECTV on a few different customer service numbers,
            but we like
            <span className="link">
              <Link href={"#"}>+1-800-531-5000.</Link>
            </span>{" "}
            best. All these numbers will put you in contact with DIRECTV
            customer service:
            <br />
            These numbers all take you to one of two customer service protocols
            that will get you where you need to go. We wanted you to have access
            to them all, but you really only need to call one.
          </p>
        </div>
        <br />
        <div className="two-callbacks">
          <div className="call-back">
            <div className="call-back-container">
              <div className="icon-box">
                <Image src={phoneback} alt="whatsapp" className="whatsapp" />
                <div className="icon-box-content">
                  <h4>Call DIRECTV Customer Support Now</h4>
                  <br />
                  <p>
                    <span className="link">
                      <Link href={"#"}>+1-800-288-2020</Link>
                    </span>
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
                  <h4>Call DIRECTV Customer Support Now</h4>
                  <br />
                  <p>
                    <span className="link">
                      <Link href={"#"}>+1-800-288-2020</Link>
                    </span>
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
                  <h4>Call DIRECTV Customer Support Now</h4>
                  <br />
                  <p>
                    <span className="link">
                      <Link href={"#"}>+1-800-288-2020</Link>
                    </span>
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

      <div className="section service-online">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV <span> customer service online </span>
          </h2>
          <p className="sect-desc">
            <span className="link">
              <Link href={"#"}>DIRECTV’s troubleshooting portal</Link>
            </span>{" "}
            is slow and bulky. From the get-go, it wants your ID and password,
            which is supposed to help you get the most accurate information—but
            ends up being a hassle if you have a quick question.
            <br />
            And unlike many TV services, DIRECTV doesn’t offer an online chat or
            let you schedule phone calls from customer service. You’ll have to
            log in to your myAT&T account and dig in deep to get online help.
          </p>
        </div>
        <br />
        <div className="two-callbacks">
          <div className="call-back">
            <div className="call-back-container">
              <div className="icon-box">
                <Image src={phoneback} alt="whatsapp" className="whatsapp" />
                <div className="icon-box-content">
                  <h4>Log in wih DIRECTV’s troubleshooting portal</h4>
                  <br />
                  <p>Chat with our agents right away.</p>
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

      <div className="divider">
        <h4>Don’t have DIRECTV yet?</h4>
        <p>Well, you can sign up for DIRECTV service right now.</p>
      </div>

      <div className="section direct-tv-online-support">
        <div className="head">
          <h2 className="sect-heading">
            More DIRECTV <span> online support </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
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
                      <Link href={"#"}>Find your account number</Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}>
                        {" "}
                        Get your account balance and due date
                      </Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> Ways to pay your bill </Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> Who can manage accounts online </Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> Account balance refund </Link>
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
                      <Link href={"#"}>
                        {" "}
                        Add DIRECTV premium channels and packages{" "}
                      </Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> Watch DIRECTV on your computer </Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> Restore missing channels </Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}>
                        {" "}
                        Get DIRECTV On Demand and Pay Per View{" "}
                      </Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> Watch 4K Ultra HD programs </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section direct-tv-tech-support">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV <span> tech support </span>
          </h2>
          <p className="sect-desc">
            Unlike most of DIRECTV’s customer support numbers, you can reach its
            technical support 24/7. Call to{" "}
            <span className="link">
              <Link href={"#"}> +1-800-531-5000 </Link>
            </span>{" "}
            get started.
          </p>
        </div>
        <br />
        <div className="two-callbacks">
          <div className="call-back">
            <div className="call-back-container">
              <div className="icon-box">
                <Image src={phoneback} alt="whatsapp" className="whatsapp" />
                <div className="icon-box-content">
                  <h4>Call DIRECTV tech Support Now</h4>
                  <br />
                  <p>24/7 technical support </p>
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

      <div className="section direct-tv-tech-support-for-your-business">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV customer support <span> for your business </span>
          </h2>
          <p className="sect-desc">
            You won’t have to worry about DIRECTV’s business hours when it comes
            to your business’s TV service. You’ll get customer support any time
            you call
            <span className="link">
              <Link href={"#"}> +1-888-388-4249. </Link>
            </span>{" "}
          </p>
        </div>
        <br />
        <div className="two-callbacks">
          <div className="call-back">
            <div className="call-back-container">
              <div className="icon-box">
                <Image src={phoneback} alt="whatsapp" className="whatsapp" />
                <div className="icon-box-content">
                  <h4>Call DIRECTV customer support for your business</h4>
                  <br />
                  <p> 24/7 customer support for your businesses </p>
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

      <div className="section dish-bill-payment">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV <span> local customer service options </span>
          </h2>
          <p className="sect-desc">
            Head over to the local AT&T brick-and-mortar to get face-to-face
            customer service. Put your zip code in on AT&T’s website to see a
            map of your local stores and their contact info.
            <br />
            Be aware, some local options in the link above are third-party
            retailers. The good news is third-party providers make it easier to
            get DIRECTV help if you don’t have an official AT&T store in your
            area. The bad news is the wide variety of third-party retailers
            means you can’t expect the same level of customer service from each
            one.
          </p>
        </div>
        <div className="endnote endnote-start">
          <div className="endnote-container">
            <Image src={mark} alt="mark" className="mark" />
            <h4>Before you call DIRECTV</h4>
            <br />
            <ul>
              <li>
                {" "}
                1. Get your account number. You can find that on the top-right
                corner of your paper bill or see it when you sign in at myAT&T.
              </li>
              <li>
                2. Know your billing and service addresses. These exact
                locations are necessary if you’re calling to set up or move your
                DIRECTV service.
              </li>
              <li>
                3. Take notes on the problems you’re having with your DIRECTV
                service. With a list of problems, like outages or equipment
                issues, you’ll be able to answer questions faster and get the
                help you need.
              </li>
              <li>
                4. Have a pen and paper ready. You might get a lot of
                information on the phone, and you don’t want to forget it when
                you hang up.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section direct-tv-your-bill">
        <div className="head">
          <h2 className="sect-heading">
            Pay your <span> DIRECTV bill </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Online</h4>
          <p className="after-heading">
            Sign in to your DIRECTV account to pay with a credit card or your
            checking or savings account.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>By phone</h4>
          <p className="after-heading">
            With a copy of your bill and payment information on hand, dial
            +1-844-649-0648. There is a convenience fee to pay over the phone,
            so pay online if you can.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>By mail</h4>
          <p className="after-heading">
            Send your payment to DIRECTV, PO BOX 5007, Carol Stream, IL
            60197-5007.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DIRECTV pay in person options</h4>
          <p className="after-heading">
            Do you prefer to keep it local and do business face-to-face with
            cash or money order? We got you covered.
            <br />
            DIRECTV customers have the option to pay their monthly bill in
            person anywhere that accepts CheckFreePay, Western Union, MoneyGram,
            and EasyPay Finance. Every location charges a convenience fee, but
            you can view that information with AT&T’s Authorized Payment
            Locations finder.
          </p>
        </div>
      </div>

      <div className="section direct-tv-sign-up">
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
        <div className="package-table-container channels">
          <h4>Pros and cons of DIRECTV customer service</h4>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th> </th>
                  <th>Package </th>
                  <th>Price* </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1. </td>
                  <td>
                    Automatically processes your account phone number when you
                    call ins
                  </td>
                  <td>
                    Requests account information to troubleshoot many problems
                  </td>
                </tr>

                <tr>
                  <td>2. </td>
                  <td>Offers helpful online resources </td>
                  <td>Limits customer support hours</td>
                </tr>
                <tr>
                  <td>3. </td>
                  <td>Answers technical support problems 24/7 </td>
                  <td>
                    Works with third-party retailers that don’t all offer the
                    same level of service
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: DIRECTV Overview | DIRECTV Bundles | DIRECTV Channel Lineup
        </p>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> DIRECTV phone number </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What is the phone number
                for DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>The best number for DIRECTV is +1-800-531-5000.</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What is the phone number for DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>The best number for DIRECTV is +1-800-531-5000.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How do I contact DIRECTV by
                phone?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  You can contact DIRECTV by phone by calling +1-800-531-5000.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" How do I contact DIRECTV by phone?"}
            cssClass={"faq-content"}
          >
            <p>You can contact DIRECTV by phone by calling +1-800-531-5000.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What is the phone number to
                cancel DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  You can talk to a real person at DIRECTV by calling any of
                  these customer service numbers:
                </p>
                <ul>
                  <li> · <span className="link"><Link href={"#"}>+1-800-531-5000</Link></span></li>
                  <li> · <span className="link"><Link href={"#"}>+1-800-288-2020</Link></span></li>
                  <li> · <span className="link"><Link href={"#"}>+1-855-838-4388</Link></span></li>
                  <li> · <span className="link"><Link href={"#"}>+1-800-288-1145</Link></span></li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" What is the phone number to cancel DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>
              You can talk to a real person at DIRECTV by calling any of these
              customer service numbers:
            </p>
            <ul>
              <li>
                {" "}
                ·{" "}
                <span className="link">
                  <Link href={"#"}>+1-800-531-5000</Link>
                </span>
              </li>
              <li>
                {" "}
                ·{" "}
                <span className="link">
                  <Link href={"#"}>+1-800-288-2020</Link>
                </span>
              </li>
              <li>
                {" "}
                ·{" "}
                <span className="link">
                  <Link href={"#"}>+1-855-838-4388</Link>
                </span>
              </li>
              <li>
                {" "}
                ·{" "}
                <span className="link">
                  <Link href={"#"}>+1-800-288-1145</Link>
                </span>
              </li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How do I talk to a real
                person at DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  You can cancel DIRECTV by calling +1-800-531-5000 and clearly
                  stating that you want to cancel DIRECTV.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" How do I talk to a real person at DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>
              You can cancel DIRECTV by calling +1-800-531-5000 and clearly
              stating that you want to cancel DIRECTV.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default DirectTvCustomerService;
