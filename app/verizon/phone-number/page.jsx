// import React, { useState } from "react";
import "./verizon-customer-service.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { verizonNavLinks } from "../../assets/data/navLinks/verizonNavLinks";
import verizoncsone from "../../assets/images/verizoncsone.png";
import verizoncstwo from "../../assets/images/verizoncstwo.png";
import verizoncsthree from "../../assets/images/verizoncsthree.png";
import Link from "next/link";
import Image from "next/image";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import { GoArrowUpRight } from "react-icons/go";
import phoneback from "../../assets/images/phoneback.png";
import mark from "../../assets/images/mark.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Verizon Fios Customer Service: 1-800-837-4966"
};

const VerizonCustomerService = () => {
  // const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="verizon-customer-service ">
      {/* <SubNav links={verizonNavLinks} /> */}
      <div className="service-hero global-inner-hero">
        <h1>Verizon Fios Customer Service: 1-800-837-4966</h1>
        <p>
          Our experts put in the hours to verify every way to contact Verizon
          Fios. (Para español preciona estrella)
        </p>
        <div className="container-img">
          <div className="column-img">
            <Link href={"#"}>
              {" "}
              <Image src={verizoncsone} alt="customer" className="" />
            </Link>
          </div>
          <div className="column-img">
            <Link href={"#"}>
              {" "}
              <Image src={verizoncstwo} alt="customer" className="" />
            </Link>
          </div>
          <div className="column-img">
            <Link href={"#"}>
              {" "}
              <Image src={verizoncsthree} alt="customer" className="" />
            </Link>
          </div>
        </div>
      </div>

      <div className="endnote is-verizon-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            If you need help from Verizon Fios customer service, call
            +1-800-837-4966 (VERIZON). You can get regular customer service
            (billing, plan changes—the works) from 8 a.m. to 5 p.m. EST, but
            tech support is available 24/7.
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
            Verizon customers: <span> I’m looking for </span>
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
          <Link href={"#"}>Outages </Link>
          <Link href={"#"}>Before you call </Link>
          <Link href={"#"}>Online support </Link>
          <Link href={"#"}>Business support </Link>
          <Link href={"#"}>Local support </Link>
          <Link href={"#"}>Pay your bill </Link>
          <Link href={"#"}>Cancel service </Link>
        </div>
      </div>

      <div className="section customer-services">
        <div className="head">
          <h2 className="sect-heading">
            Verizon Fios customer service <span> hours of operation </span>
          </h2>
          <p className="sect-desc">
            Verizon Fios residential customer service is available
            Monday-Friday, 8 a.m. to 5 p.m EST. This service includes online
            chat and phone convos, depending on your human-interaction
            preferences.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={phoneback} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>Call verizon customer service</h4>
                <br />
                <p>8 a.m. to 5 p.m. EST, Monday through Friday.</p>
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

      <div className="section cox-local-customer-service-options">
        <div className="head">
          <h2 className="sect-heading">
            Verizon Fios <span> outages </span>
          </h2>
          <p className="sect-desc">
            You can check the status of Verizon Fios service outages on the
            company site, if you can get to it (because, you know, outage).
            Calling might be the best option to get updates.
          </p>
        </div>

        <div className="endnote endnote-start">
          <div className="endnote-container">
            <Image src={mark} alt="mark" className="mark" />
            <h4>Before you call Verizon Fios</h4>
            <p>
              You’ll want to have a few items at the ready before calling or
              online chatting with Verizon Fios. They include the following:
            </p>
            <ul>
              <li>
                {" "}
                · Your street address. Simple enough—you know where you live,
                right?
              </li>
              <li>
                {" "}
                · Your preferred method of payment. Verizon will strongly
                suggest auto-payment via checking account, savings account,
                credit card, or debit card.
              </li>
              <li>
                {" "}
                · Your statement preference. Like every company these days,
                Verizon will steer you toward paperless online billing
                statements. But, if you still like your snail mail, it can
                accommodate.
              </li>
              <li>
                {" "}
                · Your phone number and email address. Sure, you’ll get the
                occasional sales ad—but you’ll also receive important updates
                and special offers.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section customer-services">
        <div className="head">
          <h2 className="sect-heading">
            Verizon Fios customer service <span> phone number </span>
          </h2>
          <p className="sect-desc">
            For home fiber-optic questions or general Verizon questions, you can
            reach Verizon Fios at +1-800-837-4966.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={phoneback} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>Call verizon customer service</h4>
                <br />
                <p>8 a.m. to 5 p.m. EST, Monday through Friday.</p>
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

      <div className="section customer-service-online">
        <div className="head">
          <h2 className="sect-heading">
            Verizon Fios <span> customer service online </span>
          </h2>
          <p className="sect-desc">
            There are several ways to get Verizon’s help online. The best place
            to start is the company’s support page. There you can check your
            account status, troubleshoot problems, and browse thousands of
            discussion forums. For mobile users, there’s the My Fios app for iOS
            and Android. Through it, you can online chat with Verizon support or
            call directly—same as the website, just a little more
            mobile-friendly.
            <br />
            You can also reach out on Verizon Fios’s Facebook, Twitter, and
            YouTube feeds—sometimes going public yields faster results. Just
            don’t be a troll about it.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>log in now</Link>
        </div>
      </div>

      <div className="section verizon-fios-online-support">
        <div className="head">
          <h2 className="sect-heading">
            Other Verizon Fios <span> online support </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae varius volutpat
            habitant pharetra vulputate ipsum non. Sit lectus laoreet velit
            convallis lectus tincidunt ipsum. Pellentesque enim orci nunc nisi
            eu pretium gravida. Nulla dui sit ut nibh egestas suspendisse. At
            purus massa tellus sit feugiat morbi. Purus at dolor.
          </p>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th> </th>
                <th>Account and billing FAQ</th>
                <th>Other support FAQ</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1. </td>
                <td>
                  <span className="link">
                    <Link href={"/"}>How to pay your bill</Link>
                  </span>
                </td>
                <td>
                  1.{" "}
                  <span className="link">
                    <Link href={"/"}>Check for outages</Link>
                  </span>
                </td>
              </tr>
              <tr>
                <td>2. </td>
                <td>
                  <span className="link">
                    <Link href={"/"}>How to view your bill</Link>
                  </span>
                </td>
                <td>
                  2.{" "}
                  <span className="link">
                    <Link href={"/"}>Setting up a home network</Link>
                  </span>{" "}
                </td>
              </tr>
              <tr>
                <td>3. </td>
                <td>
                  <span className="link">
                    <Link href={"/"}>More account FAQs</Link>
                  </span>
                </td>
                <td>
                  3.{" "}
                  <span className="link">
                    <Link href={"/"}>TV programming and features</Link>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section tech-support">
        <div className="head">
          <h2 className="sect-heading">
            Verizon Fios <span> tech support </span>
          </h2>
          <p className="sect-desc">
            For your home internet service needs, you can contact Verizon Fios
            24/7 at +1-800-837-4966 or via online chat.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={phoneback} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>Call verizon Technical support</h4>
                <br />
                <p>Technical support for verizon is available 24/7</p>
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

      <div className="section customer-support-for-your-business">
        <div className="head">
          <h2 className="sect-heading">
            Verizon Fios customer support <span> for your business </span>
          </h2>
          <p className="sect-desc">
            Unlike home service, Verizon Fios support for businesses operates 8
            a.m. to 5 p.m. EST, Monday through Friday.
            <br />
            For Fios business internet and TV customer service,{" "}
            <span className="link">
              <Link href={"/"}>call +1-800-837-4966.</Link>
            </span>
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={phoneback} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>Call verizon customer service</h4>
                <br />
                <p>8 a.m. to 5 p.m. EST, Monday through Friday.</p>
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

      <div className="section verizon-local-customer-service-options">
        <div className="head">
          <h2 className="sect-heading">
            Verizon Fios <span> local customer service options </span>
          </h2>
          <p className="sect-desc">
            If you’d like to interact with Verizon Fios physically rather than
            virtually, you can find an actual brick-and-mortar locale using
            Verizon’s store locator to pay your bill in person.
            <br />
            There’s no fee for paying with cash, credit, or debit at Verizon
            company locations—just make sure to bring a billing statement,
            account number, or phone number. You can also pay your Verizon Fios
            bills in cash at CVS and 7-Eleven stores for an additional $2.99.
          </p>
        </div>
        <div className="row">
          <div className="columns">
            <h3>Pay your Verizon Fios bill</h3>
            <br />
            <p>
              <b>Phone: </b>{" "}
              <span className="link">
                <Link href={"/"}>+1-800-837-4966</Link>
              </span>
            </p>
            <br />
            <p>
              <b>Online: </b>{" "}
              <span className="link">
                <Link href={"/"}> My Verizon</Link>
              </span>
            </p>
            <br />
            <p>
              <b>App: </b> My Fios mobile app for or{" "}
              <span className="link">
                <Link href={"/"}> iOS</Link>
              </span>{" "}
              <span className="link">
                <Link href={"/"}>Android.</Link>
              </span>
            </p>
            <br />
            <p>
              <b>In person: </b> Find a{" "}
              <span className="link">
                <Link href={"/"}> Verizon store.</Link>
              </span>
            </p>
            <br />
            <div className="call-back">
              <div className="call-back-container">
                <div className="icon-box">
                  <Image src={phoneback} alt="whatsapp" className="whatsapp" />
                  <div className="icon-box-content">
                    <h4>Call verizon customer service</h4>
                    <br />
                    <p>8 a.m. to 5 p.m. EST, Monday through Friday.</p>
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

          <div className="columns">
            <h3>Sign up for Verizon Fios service</h3>
            <br />
            <p>
              <b>Phone: </b>{" "}
              <span className="link">
                <Link href={"/"}>+1-800-837-4966</Link>
              </span>
            </p>
            <br />
            <p>
              <b>Online: </b>{" "}
              <span className="link">
                <Link href={"/"}> My Verizon</Link>
              </span>
            </p>
            <br />
            <p>
              <b>App: </b> My Fios mobile app for or{" "}
              <span className="link">
                <Link href={"/"}> iOS</Link>
              </span>{" "}
              <span className="link">
                <Link href={"/"}>Android.</Link>
              </span>
            </p>
            <br />
            <p>
              <b>In person: </b> Find a{" "}
              <span className="link">
                <Link href={"/"}> Verizon store.</Link>
              </span>
            </p>
            <br />
            <div className="call-back">
              <div className="call-back-container">
                <div className="icon-box">
                  <Image src={phoneback} alt="whatsapp" className="whatsapp" />
                  <div className="icon-box-content">
                    <h4>Call verizon customer service</h4>
                    <br />
                    <p>8 a.m. to 5 p.m. EST, Monday through Friday.</p>
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
        <div className="row-center">
          <div className="columns">
            <h3>Cancel your Verizon Fios service</h3>
            <br />
            <p>
              <b>Phone: </b>{" "}
              <span className="link">
                <Link href={"/"}>+1-800-837-4966</Link>
              </span>
            </p>
            <br />
            <p>
              <b>Online: </b>{" "}
              <span className="link">
                <Link href={"/"}> My Verizon</Link>
              </span>
            </p>
            <br />
            <p>
              <b>App: </b> My Fios mobile app for or{" "}
              <span className="link">
                <Link href={"/"}> iOS</Link>
              </span>{" "}
              <span className="link">
                <Link href={"/"}>Android.</Link>
              </span>
            </p>
            <br />
            <p>
              <b>In person: </b> Find a{" "}
              <span className="link">
                <Link href={"/"}> Verizon store.</Link>
              </span>
            </p>
            <br />
            <div className="call-back">
              <div className="call-back-container">
                <div className="icon-box">
                  <Image src={phoneback} alt="whatsapp" className="whatsapp" />
                  <div className="icon-box-content">
                    <h4>Call verizon customer service</h4>
                    <br />
                    <p>8 a.m. to 5 p.m. EST, Monday through Friday.</p>
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

      <div className="section pros-and-cons">
        <div className="head">
          <h2 className="sect-heading">
            Pros and cons of <span> Verizon Fios customer service </span>
          </h2>
          <p className="sect-desc">
            Of the many ways to get ahold of Verizon Fios customer service, we
            prefer the online chat option; the reps are responsive and friendly,
            in our experience. Our last resort would be the Verizon Fios app—it
            works OK for checking on your account, but not so much for
            communication.
          </p>
        </div>
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
                <td>Weekday support</td>
                <td>Limited business support hours</td>
              </tr>
              <tr>
                <td>Multiple ways to contact</td>
                <td>Limited payment options</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Verizon customer support good? </span>
          </h2>
          <p className="sect-desc">
            We’re big fans of all the ways Verizon Fios allows its customers to
            connect with customer service solutions. We recommend calling
            +1-800-837-4966 or trying out the online chat feature.
            <br />
            It’s unfortunate that there’s limited hours for customer service (8
            a.m. to 5 p.m. EST), but at least you can reach tech support
            anytime.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>call verizon customer service</Link>
        </div>
      </div>

      <div className="section endnote verizon-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Methodology</h4>
          <p>
            For this article, our experts spent hours hunting down and testing
            Verizon Fios contact numbers, exploring its online help resources,
            and researching what customer said about their experience.
            <br />
            You can learn more about our methodology on our{" "}
            <span className="link">
              <Link href={"/"}>How We Rank</Link>
            </span>{" "}
            page.
          </p>
          <h4> Related articles</h4>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"/"}>Verizon Fios vs. Spectrum Internet</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"/"}>Verizon Fios vs. Optimum Internet</Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"/"}>Verizon Fios vs. Xfinity Internet</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Verizon Overview | Verizon Internet | Verizon TV | Verizon
          Channel lineups | Verizon Phone | Verizon Bundles
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default VerizonCustomerService;
