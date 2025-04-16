// import React, { useState } from "react";
import "./xfinity-availability.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import { xfinityNavLinks } from "../../assets/data/navLinks/xfinityNavLinks";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import coveragemap from "../../assets/images/coveragemap.png";
import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Xfinity Availability"
};

const XfinityAvailability = () => {
  // const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="xfinity-availability">
      {/* <SubNav links={xfinityNavLinks} /> */}
      <div className="xfinity-hidden-costs-hero global-inner-hero">
        <h1>Xfinity Availability</h1>
        <p>
        Discover if Xfinity internet and TV service is accessible in your area
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
          <h4>Limited time offer</h4>
          <p>
            Get high-speed internet and Peacock Premium for only $30 per month
            when you add{" "}
            <span className="link">
              <Link href={"#"}>Xfinity Mobile</Link>
            </span>{" "}
            to your plan.
          </p>
          <br />
        </div>
      </div>

      <StickyHeader />

      <div className="section coverage-map">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span>coverage map</span>
          </h2>
          <p className="sect-desc">
            Xfinity offers fast and reliable cable TV, internet, and digital
            phone services—but is Xfinity internet, TV, or phone service
            available in your area? Check out our Xfinity coverage map for a
            full look at where the company does (and doesn’t) offer service.
          </p>
        </div>
        <Image src={coveragemap} alt="coveragemap" className="coveragemap" />
        <div className="btn">
          <Link href={"#"}>order online</Link>
        </div>
      </div>

      <CTA
        heading={"Find Xfinity availability by zip code"}
        desc={
          "Enter your zip code and we’ll check if Xfinity has cable or fiber-optic lines in your neighborhood. If it doesn’t, don’t worry: we’ll help you find a provider that works in your area."
        }
      />

      <div className="section xfinity-availability-plans-and-package">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span>plans & package</span>
          </h2>
          <p className="sect-desc">
          Discover Xfinity packages available nearby and choose from a range of options tailored to your preferences. Explore now for entertainment that suits your area.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity plans & packages</h4>
          <p className="after-heading">
            If you’re in an Xfinity service area, you can get Xfinity internet,
            TV, or{" "}
            <span className="link">
              <Link href={"#"}>phone plans. </Link>
            </span>{" "}
            Check out our main{" "}
            <span className="link">
              <Link href={"#"}> Xfinity review </Link>
            </span>{" "}
            to learn more about Xfinity packages and prices in your area.
          </p>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Xfinity Internet: </Link>
              </span>{" "}
              You can get either Xfinity fiber and cable internet service,
              depending on where you live. Xfinity download speeds run from 75
              Mbps to 3,000 Mbps.
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Xfinity TV: </Link>
              </span>{" "}
              This cable TV service comes with up to{" "}
              <span className="link">
                <Link href={"#"}> 185+ channels. </Link>
              </span>
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>Xfinity Voice: </Link>
              </span>{" "}
              Xfinity also offers a landline phone service through digital VoIP
              (Voice over Internet Protocol).
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}> Xfinity Mobile: </Link>
              </span>{" "}
              Xfinity’s cell phone service offers nationwide phone coverage and
              discounts for Xfinity internet customers.
            </li>
          </ul>
          <div className="endnote endnote-start">
            <div className="endnote-container">
              <Image src={quotationsIcon} alt="quotations" />
              <h4>View Xfinity plans</h4>
              <p>
                Interested in learning more about Xfinity’s TV, internet, and
                voice plans?
              </p>
              <br />
              <div className="btn">
                <Link href={"#"}>view xfinity plans</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity internet availability</h4>
          <p className="after-heading">
            Xfinity’s most popular internet plans provide residential internet
            service ranging from 75 Mbps to 1 Gbps (1,000 Mbps) of download
            speed, the fastest available with cable internet. In some areas,
            Xfinity also offers fiber-optic internet service, which can reach
            download speeds of up to 3 Gbps (3,000 Mbps).
            <br />
            Check out our full{" "}
            <span className="link">
              <Link href={"#"}>Xfinity internet review </Link>
            </span>{" "}
            to learn more about Xfinity’s internet plans in your area.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity TV availability</h4>
          <p className="after-heading">
            Xfinity’s cable TV plans feature more than 185 HD channels,
            including sports, entertainment, kids, and premium movie outlets,
            both live and on demand. Xfinity TV service also includes a DVR, and
            a mobile app for on-the-go viewing.
            <br />
            Read our{" "}
            <span className="link">
              <Link href={"#"}>Xfinity TV review </Link>
            </span>{" "}
            to learn more the provider’s TV plans and check out our{" "}
            <span className="link">
              <Link href={"#"}> Xfinity channel lineup </Link>
            </span>
            guide to see the channels in each Xfinity TV package.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity bundles availability</h4>
          <p className="after-heading">
            You can save money by combining internet and TV service into a
            bundle. You can also add digital VoIP (voice over internet protocol)
            phone service for a little extra per month. Xfinity also offers
            wireless mobile and home security services in some areas, which can
            help you save up to $60.00 per month on your total bill.
            <br />
            Read our{" "}
            <span className="link">
              <Link href={"#"}> full Xfinity bundles review</Link>
            </span>{" "}
            to learn more about Xfinity’s bundle options.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Availability by state </h4>
          <p className="after-heading">
            Xfinity services are available in parts of these 40 states and the
            District of Columbia:
            <ul className="grid-ul">
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}> Alabama</Link>
                </span>
              </li>
              <li>
                · Arizona{" "}
                <span className="link">
                  <Link href={"#"}> </Link>
                </span>
              </li>
              <li>· Arkansas</li>
              <li>· California</li>
              <li>· Colorado</li>
              <li>· Connecticut</li>
              <li>· Delaware</li>
              <li>· Florida</li>
              <li>· Georgia</li>
              <li>· Idaho</li>
              <li>· Illinois</li>
              <li>· Indiana</li>
              <li>· Kansas</li>
              <li>· Kentucky</li>
              <li>· Louisiana</li>
              <li>· Maine</li>
              <li>· Maryland</li>
              <li>· Massachusetts</li>
              <li>· Michigan</li>
              <li>· Minnesota</li>
              <li>· Mississippi</li>
              <li>· Missouri</li>
              <li>· New Hampshire</li>
              <li>· New Jersey</li>
              <li>· New Mexico</li>
              <li>· New York</li>
              <li>· North Carolina</li>
              <li>· Ohio</li>
              <li>· Oregon</li>
              <li>· Pennsylvania</li>
              <li>· Rhode Island</li>
              <li>· South Carolina</li>
              <li>· Tennessee</li>
              <li>· Texas</li>
              <li>· Utah</li>
              <li>· Vermont</li>
              <li>· Virginia</li>
              <li>· Washington</li>
              <li>· West Virginia</li>
              <li>· Wisconsin</li>
            </ul>
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Availability by city </h4>
          <p className="after-heading">
            Xfinity internet, TV, and phone service is available in and around a
            number of major cities that include:
            <ul>
              <li>
                {" "}
                ·{" "}
                <span className="link">
                  <Link href={"#"}> Atlanta, GA</Link>
                </span>
              </li>
              <li>
                {" "}
                ·{" "}
                <span className="link">
                  <Link href={"#"}>Chicago, IL </Link>
                </span>
              </li>
              <li>
                {" "}
                ·{" "}
                <span className="link">
                  <Link href={"#"}> Denver, CO</Link>
                </span>
              </li>
              <li>
                {" "}
                ·{" "}
                <span className="link">
                  <Link href={"#"}>Boston, MA </Link>
                </span>
              </li>
              <li>
                {" "}
                ·{" "}
                <span className="link">
                  <Link href={"#"}>Detroit, MI </Link>
                </span>
              </li>
              <li>
                {" "}
                ·{" "}
                <span className="link">
                  <Link href={"#"}>Hartford, CT </Link>
                </span>
              </li>
              <li>
                {" "}
                ·{" "}
                <span className="link">
                  <Link href={"#"}>Houston, TX </Link>
                </span>
              </li>
              <li>
                {" "}
                ·{" "}
                <span className="link">
                  <Link href={"#"}>Indianapolis, IN </Link>
                </span>
              </li>
              <li>
                {" "}
                ·{" "}
                <span className="link">
                  <Link href={"#"}>Miami, FL </Link>
                </span>
              </li>
              <li>
                {" "}
                ·{" "}
                <span className="link">
                  <Link href={"#"}> Nashville, TN</Link>
                </span>
              </li>
              <li>
                {" "}
                ·{" "}
                <span className="link">
                  <Link href={"#"}> Philadelphia, PA</Link>
                </span>
              </li>
              <li>
                {" "}
                ·{" "}
                <span className="link">
                  <Link href={"#"}> San Francisco, CA </Link>
                </span>
              </li>
              <li>
                {" "}
                ·
                <span className="link">
                  <Link href={"#"}>Seattle, WA </Link>
                </span>
              </li>
            </ul>
          </p>
          <div className="endnote endnote-start">
            <div className="endnote-container">
              <Image src={quotationsIcon} alt="quotations" />
              <h4>View Xfinity plans</h4>
              <p>
                Xfinity internet, TV, and phone service is available in and
                around a number of major cities that include:
              </p>
              <br />
              <div className="btn">
                <Link href={"#"}>Enter your ZIP code</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section xfinity-availability-review-faq">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span> availabilit </span>FAQ
          </h2>

          <p className="sect-desc">
            TL;DR? Xfinity kills it. For more detailed info on all Xfinity
            equipment and services, see our comprehensive Xfinity equipment
            guide.
          </p>
        </div>

        <div className="faq-wrapper">
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(1)}>
                <span>{faq === 1 ? "-" : "+"}</span> What are Xfinity tV
                packages?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Xfinity TV packages by Comcast come through a cable connection
                  with up to 185+ channels. Most packages also include 20 hours
                  of DVR storage via the{" "}
                  <span className="link">
                    <Link href={"#"}>X1 DVR box, </Link>
                  </span>{" "}
                  plus the Xfinity Stream app.
                </p>
                <ul>
                  <li>· Choice TV: $20.00–$25.00/mo., 10+ channels</li>
                  <li>· Popular TV: $50.00–$60.00/mo., 125+ channels</li>
                  <li>· Ultimate TV: $68.50–$80.00/mo., 185+ channels</li>
                </ul>
                <p>
                  Check to see what Xfinity TV packages are available in your
                  area.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"1"}
            title={"What are Xfinity TV packages?"}
            cssClass={"faq-content"}
          >
          <p>
            Xfinity TV packages by Comcast come through a cable connection
            with up to 185+ channels. Most packages also include 20 hours
            of DVR storage via the{" "}
            <span className="link">
              <Link href={"#"}>X1 DVR box, </Link>
            </span>{" "}
            plus the Xfinity Stream app.
          </p>
          <ul>
            <li>· Choice TV: $20.00–$25.00/mo., 10+ channels</li>
            <li>· Popular TV: $50.00–$60.00/mo., 125+ channels</li>
            <li>· Ultimate TV: $68.50–$80.00/mo., 185+ channels</li>
          </ul>
          <p>
            Check to see what Xfinity TV packages are available in your
            area.
          </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What is the cheapest
                Xfinity TV package?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  The cheapest Xfinity internet plan is 75 Mbps for $19.99 in
                  the West region, 75 Mbps for $30.00 in the Central region, and
                  200 Mbps for $25.00/mo. in the Northeast region.
                  Unfortunately, plan pricing and naming varies by region.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"2"}
            title={"What is the cheapest Xfinity TV package?"}
            cssClass={"faq-content"}
          >
          <p>
            The cheapest Xfinity internet plan is 75 Mbps for $19.99 in
            the West region, 75 Mbps for $30.00 in the Central region, and
            200 Mbps for $25.00/mo. in the Northeast region.
            Unfortunately, plan pricing and naming varies by region.
          </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Can you get xfinity tV
                without cable?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Sorry, after April 2023, the{" "}
                  <span className="link">
                    <Link href={"#"}>Xfinity Flex </Link>
                  </span>{" "}
                  won't be free anymore. If you don't mind paying whatever its
                  new price will be, you can request it when you sign up for
                  your Xfinity internet plan (although your customer service rep
                  will probably railroad you into getting it before you get a
                  word in edgewise).
                  <br />
                  However, if you get an{" "}
                  <span className="link">
                    <Link href={"#"}>Xfinity TV plan</Link>
                  </span>
                  , you're not eligible for an Xfinity Flex. That's okay-ish
                  since you'll get the X1 DVR instead. Unfortunately, the X1
                  falls into the non-free category as well due to its $14.95 per
                  month service fee.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"3"}
            title={"Can you get xfinity TV without cable?"}
            cssClass={"faq-content"}
          >
          <p>
            Sorry, after April 2023, the{" "}
            <span className="link">
              <Link href={"#"}>Xfinity Flex </Link>
            </span>{" "}
            won't be free anymore. If you don't mind paying whatever its
            new price will be, you can request it when you sign up for
            your Xfinity internet plan (although your customer service rep
            will probably railroad you into getting it before you get a
            word in edgewise).
            <br />
            However, if you get an{" "}
            <span className="link">
              <Link href={"#"}>Xfinity TV plan</Link>
            </span>
            , you're not eligible for an Xfinity Flex. That's okay-ish
            since you'll get the X1 DVR instead. Unfortunately, the X1
            falls into the non-free category as well due to its $14.95 per
            month service fee.
          </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> what is the best package to
                get on xfinity tV?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Comcast and Xfinity are the same thing-you can't trip us up
                  with your trick question!
                </p>
                <p>
                  In 2010, Comcast started using Xfinity as its trade name for
                  TV, internet, and phone services.
                  <br />
                  And as part of Comcast, Xfinity has built-in relationships
                  with Comcast's other products, such as NBCUniversal. That's
                  one of the reasons you'll get the{" "}
                  <span className="link">
                    <Link href={"#"}>Peacock Premium</Link>
                  </span>{" "}
                  streaming service for free with your Xfinity cable TV service.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"4"}
            title={"What is the best package to get on xfinity TV?"}
            cssClass={"faq-content"}
          >
          <p>
            Comcast and Xfinity are the same thing-you can't trip us up
            with your trick question!
          </p>
          <p>
            In 2010, Comcast started using Xfinity as its trade name for
            TV, internet, and phone services.
            <br />
            And as part of Comcast, Xfinity has built-in relationships
            with Comcast's other products, such as NBCUniversal. That's
            one of the reasons you'll get the{" "}
            <span className="link">
              <Link href={"#"}>Peacock Premium</Link>
            </span>{" "}
            streaming service for free with your Xfinity cable TV service.
          </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>can you just get xfinity tV?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  The best Xfinity deal is Superfast Internet + Ultimate TV,
                  which provides 800 Mbps download speeds and 185+ cable
                  channels. Your savings may vary by region, though, and
                  depending on where you live, it could cost $115-$120 a month.
                </p>
                <p>
                  For more on Xfinity's money-saving double plays, head over to
                  our{" "}
                  <span className="link">
                    <Link href={"#"}>Xfinity bundles review</Link>
                  </span>
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"5"}
            title={"Can you just get xfinity TV?"}
            cssClass={"faq-content"}
          >
          <p>
            The best Xfinity deal is Superfast Internet + Ultimate TV,
            which provides 800 Mbps download speeds and 185+ cable
            channels. Your savings may vary by region, though, and
            depending on where you live, it could cost $115-$120 a month.
          </p>
          <p>
            For more on Xfinity's money-saving double plays, head over to
            our{" "}
            <span className="link">
              <Link href={"#"}>Xfinity bundles review</Link>
            </span>
          </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>what channels are in the
                xfinity’s basic package?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  According to our{" "}
                  <span className="link">
                    <Link href={"#"}>customer satisfaction survey,</Link>
                  </span>{" "}
                  62% of Xfinity customers are satisfied with their internet
                  service. In addition, 69% of Xfinity customers are satisfied
                  with their internet speed, tying it for first place with
                  Verizon. Cable service will always be dependent on how heavy
                  usage is in your network, so for more reliable speeds, we
                  recommend{" "}
                  <span className="link">
                    <Link href={"#"}>fiber internet</Link>
                  </span>
                  if you have the option.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"6"}
            title={"What channels are in the xfinity’s basic package?"}
            cssClass={"faq-content"}
          >
          <p>
            According to our{" "}
            <span className="link">
              <Link href={"#"}>customer satisfaction survey,</Link>
            </span>{" "}
            62% of Xfinity customers are satisfied with their internet
            service. In addition, 69% of Xfinity customers are satisfied
            with their internet speed, tying it for first place with
            Verizon. Cable service will always be dependent on how heavy
            usage is in your network, so for more reliable speeds, we
            recommend{" "}
            <span className="link">
              <Link href={"#"}>fiber internet</Link>
            </span>
            if you have the option.
          </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Xfinity Overview | Xfinity Internet | Xfinity TV | Xfinity
          Voice | Xfinity Bundles | Xfinity Channel Lineup | Xfinity Customer
          Service | Xfinity Availability Map | Xfinity Free Installation
        </p>
      </div>

      {/* <Newsletter /> */}
    </div> 
  );
};

export default XfinityAvailability;
