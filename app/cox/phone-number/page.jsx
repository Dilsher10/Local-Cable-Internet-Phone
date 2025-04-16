// import React, { useState } from "react";
import "./cox-customer-service.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { coxNavLinks } from "../../assets/data/navLinks/coxNavLinks";
import coxcsone from "../../assets/images/coxcsone.png";
import coxcstwo from "../../assets/images/coxcstwo.png";
import coxcsthree from "../../assets/images/coxcsthree.png";
import Link from "next/link";
import Image from "next/image";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import { GoArrowUpRight } from "react-icons/go";
import phoneback from "../../assets/images/phoneback.png";
import mark from "../../assets/images/mark.png";
// import Newsletter from "../../components/newsletter/Newsletter";
import quotations from "../../assets/images/quotations.svg";

export const metadata = {
  title: "Cox Customer Service"
};

const CoxCustomerService = () => {
  // const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };

  return (
    <div className="cox-customer-service">
      {/* <SubNav links={coxNavLinks} /> */}
      <div className="service-hero global-inner-hero">
        <h1>Cox Customer Service: +1-800-234-3993</h1>
        <p>
          Talk to a real-life person about your Cox internet and TV service;
          (Para asistencia en español: +1-800-234-3993)
        </p>
        <div className="container-img">
          <div className="column-img">
            <Link href={"#"}>
              {" "}
              <Image src={coxcsone} alt="customer" className="" />
            </Link>
          </div>
          <div className="column-img">
            <Link href={"#"}>
              {" "}
              <Image src={coxcstwo} alt="customer" className="" />
            </Link>
          </div>
          <div className="column-img">
            <Link href={"#"}>
              {" "}
              <Image src={coxcsthree} alt="customer" className="" />
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
            Cox customers: <span> I’m looking for </span>
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
          <Link href={"#"}>Phone support</Link>
          <Link href={"#"}>Cox customer service hours </Link>
          <Link href={"#"}>Outages</Link>
          <Link href={"#"}>Online support</Link>
          <Link href={"#"}>Cox internet and tech support</Link>
          <Link href={"#"}>Business support</Link>
          <Link href={"#"}>Local support</Link>
          <Link href={"#"}>Before you call</Link>
          <Link href={"#"}>Pay for, sign up for, or cancel Cox service</Link>
        </div>
      </div>

      <div className="section phone-number">
        <div className="head">
          <h2 className="sect-heading">
            Cox customer service <span> phone number </span>
          </h2>
          <p className="sect-desc">
            The phone number for Cox TV and internet customer service is
            +1-800-234-3993.
            <br />
            To sign up for Cox TV and internet service, call +1-800-234-3993
            (Monday–Friday 8:00 a.m.–6:00 p.m. and Saturday 9:00 a.m.–6:00
            p.m.).
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={phoneback} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>Call Cox customer service</h4>
                <br />
                <p>
                  Monday–Friday 8:00 a.m.–6:00 p.m. and Saturday 9:00 a.m.–6:00
                  p.m.
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
            Cox customer service <span> hours of operation </span>
          </h2>
          <p className="sect-desc">
            Cox billing and account service can be reached at +1-800-234-3993
            between the hours of 8:00 a.m. and 6:00 p.m. Monday through Friday.
            <br />
            Technical support for Cox services is available 24/7 at
            +1-800-234-3993.
          </p>
        </div>
        <div className="two-callbacks">
          <div className="call-back">
            <div className="call-back-container">
              <div className="icon-box">
                <Image src={phoneback} alt="whatsapp" className="whatsapp" />
                <div className="icon-box-content">
                  <h4>Call Cox Technical support</h4>
                  <br />
                  <p>Technical support for Cox is available 24/7</p>
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
                  <h4>Call Cox customer service</h4>
                  <br />
                  <p>
                    Monday–Friday 8:00 a.m.–6:00 p.m. and Saturday 9:00
                    a.m.–6:00 p.m.
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

      <div className="section cox-outages">
        <div className="head">
          <h2 className="sect-heading">
            Cox <span> outages</span>
          </h2>
          <p className="sect-desc">
            You can check for internet and TV service outages on the Cox site
            and through the Cox app for iOS and Android. Check out our Cox
            outage guide for all your options.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={phoneback} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>Call Cox Technical support</h4>
                <br />
                <p>Technical support for Cox is available 24/7</p>
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

      <div className="section customer-services-online">
        <div className="head">
          <h2 className="sect-heading">
            Cox customer service <span> online </span>
          </h2>
          <p className="sect-desc">
            Cox’s Contact Us page offers plenty of resources, including account
            status, troubleshooting guides, discussion forums, and an online
            chat.
            <br />
            For mobile users, there’s the Cox app for iOS and Android.
            <br />
            Cox can also be reached on Instagram, Twitter, and Facebook if you
            prefer social media.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={phoneback} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>Call Cox Technical support</h4>
                <br />
                <p>
                  Monday–Friday 8:00 a.m.–6:00 p.m. and Saturday 9:00 a.m.–6:00
                  p.m.
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

      <div className="section customer-other-online">
        <div className="head">
          <h2 className="sect-heading">
            <span> Other </span> Cox online support
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae varius volutpat
            habitant pharetra vulputate ipsum non. Sit lectus laoreet velit
            convallis lectus tincidunt ipsum. Pellentesque enim orci nunc nisi
            eu pretium gravida. Nulla dui sit ut nibh egestas suspendisse. At
            purus massa tellus sit feugiat morbi. Purus at dolor.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={phoneback} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>Call Cox customer service</h4>
                <br />
                <p>
                  Monday–Friday 8:00 a.m.–6:00 p.m. and Saturday 9:00 a.m.–6:00
                  p.m.
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

      <div className="section customer-tech-support">
        <div className="head">
          <h2 className="sect-heading">
            <span> Cox </span> tech support
          </h2>
          <p className="sect-desc">
            If you need help for your Cox internet support or customer service
            for your cable TV, Cox is available 24/7 by phone at +1-800-234-3993
            or through online chat.
          </p>
        </div>
        <div className="call-back">
          <div className="call-back-container">
            <div className="icon-box">
              <Image src={phoneback} alt="whatsapp" className="whatsapp" />
              <div className="icon-box-content">
                <h4>Call Cox Technical support</h4>
                <br />
                <p>Technical support for Cox is available 24/7</p>
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

      <div className="section customer-services-business">
        <div className="head">
          <h2 className="sect-heading">
            <span> Cox customer support </span> for your business
          </h2>
          <p className="sect-desc">
            If your business needs, or already has, Cox internet and/or TV
            service, contact Cox Business online. You can also contact Cox
            Business by phone at +1-866-456-9944 (new customers) or
            +1-866-272-5777 (current customers).
          </p>
        </div>
        <div className="two-callbacks">
          <div className="call-back">
            <div className="call-back-container">
              <div className="icon-box">
                <Image src={phoneback} alt="whatsapp" className="whatsapp" />
                <div className="icon-box-content">
                  <h4>Call Cox Business (New customers)</h4>
                  <br />
                  <p>
                    Monday–Friday 8:00 a.m.–6:00 p.m. and Saturday 9:00
                    a.m.–6:00 p.m.
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
                  <h4>Call Cox Business (Current customers)</h4>
                  <br />
                  <p>
                    Monday–Friday 8:00 a.m.–6:00 p.m. and Saturday 9:00
                    a.m.–6:00 p.m.
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

      <div className="section cox-local-customer-service-options">
        <div className="head">
          <h2 className="sect-heading">
            Cox <span> local customer service options </span>
          </h2>
          <p className="sect-desc">
            Once upon a time, Cox had local stores where you could get customer
            support and make payments—but it’s closed those.
            <br />
            Looking for a brick-and-mortar Cox store near you? Enter your zip
            code into the Cox store finder.
          </p>
        </div>

        <div className="endnote endnote-start">
          <div className="endnote-container">
            <Image src={mark} alt="mark" className="mark" />
            <h4>Before you call Cox</h4>
            <p>
              When you’re having problems with your Cox cable or internet, here
              is what to have ready when calling Cox’s customer service number:
            </p>
            <ul>
              <li>
                {" "}
                · Your street address. Have your exact details to ensure correct
                service installation and support.
              </li>
              <li>
                {" "}
                · Your preferred method of payment. Choose payment by checking
                account, savings account, credit card, debit card, or by cash in
                person.
              </li>
              <li>
                {" "}
                · Your statement preference. Choose paperless via email, online
                view, or physical paper by mail.
              </li>
              <li>
                {" "}
                · Your phone number and email address. This is so you can
                receive service updates and offers through text or email.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section customer-services-pay-sign">
        <div className="head">
          <h2 className="sect-heading">
            Pay, Sign up or cancel <span> cox services </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae varius volutpat
            habitant pharetra vulputate ipsum non. Sit lectus laoreet velit
            convallis lectus tincidunt ipsum. Pellentesque enim orci nunc nisi
            eu pretium gravida. Nulla dui sit ut nibh egestas suspendisse. At
            purus massa tellus sit feugiat morbi. Purus at dolor.
          </p>
        </div>
        <div className="two-callbacks">
          <div className="call-back">
            <div className="call-back-container">
              <div className="icon-box">
                <Image src={phoneback} alt="whatsapp" className="whatsapp" />
                <div className="icon-box-content">
                  <h4>Pay your Cox bill</h4>
                  <br />
                  <p>
                    Phone: +1-800-234-3993
                    <br />
                    Online: Contact Cox
                    <br />
                    In person: Find a Cox store
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
                  <h4>Sign up for Cox service</h4>
                  <br />
                  <p>
                    Phone: +1-800-234-3993
                    <br />
                    Online: Contact Cox
                    <br />
                    In person: Find a Cox store
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
                  <h4>Cancel your Cox service</h4>
                  <br />
                  <p>
                    Phone: +1-800-234-3993
                    <br />
                    Online: Contact Cox
                    <br />
                    In person: Find a Cox store
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
            Final take: <span> Is Cox customer service good? </span>
          </h2>
          <p className="sect-desc">
            In our most recent customer satisfaction survey of TV providers, Cox
            ranked at the top of 11 companies in tech support and customer
            service—and first in overall service satisfaction. The numbers look
            great for Cox.
            <br />
            We like Cox’s service, especially on the internet side. Its customer
            support, on the other hand, is less than stellar—be prepared for
            some potential frustration should you need to make contact.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>call cox customer service</Link>
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
        </div>
      </div>

      <div className="section endnote dish-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />

          <h4>Methodology:</h4>
          <p>
            For this article, our experts spent hours finding and calling Cox
            contact numbers, compiling the best online help resources, and
            researching customer satisfaction. For more information on our
            process, check out our How We Rank page.
          </p>
          <h4>Related articles:</h4>
          <ul>
            <li>· <span className="link"><Link href={"#"}>Frontier Review</Link></span></li>
            <li>· <span className="link"><Link href={"#"}>Mediacom Review</Link></span></li>
            <li>· <span className="link"><Link href={"#"}>AT&T Review</Link></span></li>
          </ul>
        </div>
      </div>

      <div className="divider">
        <p>See also: Overview | Bundles | Internet | Cancel</p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default CoxCustomerService;
