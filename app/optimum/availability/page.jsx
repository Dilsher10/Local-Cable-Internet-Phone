// import React, { useState } from "react";
import "./optimum-availability-map.scss";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { optimumNavLinks } from "../../assets/data/navLinks/optimumNavLinks";
import PackageCard from "../../components/package-card/PackageCard";
// import SubNav from "../../components/sub-nav/SubNav";
import quotationsIcon from "../../assets/images/quotations.svg";
// import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import coveragemap from "../../assets/images/coveragemap.png";
import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";
import Searchbar from "../../components/searchbar/Searchbar";

export const metadata = {
  title: "Optimum Availability"
};

const OptimumAvailabilityMap = () => {
  // const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="optimum-availability-map">
      {/* <SubNav links={optimumNavLinks} /> */}
      <div className="optimum-costs-hero global-inner-hero">
        <h1>Optimum Availability</h1>
        <p>Find out where you can get Optimum internet and TV service.</p>
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
          <h4>Optimum availability map</h4>
          <p>
            Optimum is a regional provider that offers internet, phone, and TV
            service throughout the New York tristate area as well as 17 South
            and West Coast states. Check out our coverage map for a bird’s-eye
            view of Optimum coverage in your region.
            <br />
            Optimum is officially absorbing Suddenlink’s network as of August 1,
            2022, so it may take some time before the map data is accurate
            again. In that case, enter your zip code below to see if you’re
            eligible for Optimum’s new expanded network.
          </p>
          <Image src={coveragemap} alt="coveragemap" className="coveragemap" />
        </div>
      </div>

      <div className="divider">
        <p>Get Optimum now Call; 1-855-996-3015</p>
      </div>

      <div className="section optimum-services-availability">
        <div className="head">
          <h2 className="sect-heading">
            Optimum <span> Services Availability </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Optimum internet availability</h4>
          <p className="after-heading">
            Thanks to its merger with Suddenlink, Optimum is now available in
            parts of these 20 states:
          </p>
          <ul className="grid-ul">
            <li>· Arizona</li>
            <li>· Arkansas</li>
            <li>· California</li>
            <li>· Connecticut</li>
            <li>· Idaho</li>
            <li>· Kansas</li>
            <li>· Kentucky</li>
            <li>· Louisiana</li>
            <li>· Mississippi</li>
            <li>· Missouri</li>
            <li>· Nevada</li>
            <li>· New Jersey</li>
            <li>· New Mexico</li>
            <li>· New York</li>
            <li>· North Carolina</li>
            <li>· Ohio</li>
            <li>· Oklahoma</li>
            <li>· Texas</li>
            <li>· Virginia</li>
            <li>· West Virginia</li>
          </ul>
          <p className="after-heading">
            Optimum internet plans also include access to Optimum’s Wi-Fi
            hotspot network, which gives you free internet access at locations
            including train stations, parks, and local businesses.
            <br />
            Optimum has three cable internet packages that cost $40.00 to $80.00
            per month with download speeds between 300 to 940 Mbps. Optimum also
            offers fiber internet with symmetrical upload and download speeds of
            5,000 Mbps on plans between $40.00 to $180.00 per month. Optimum’s
            fiber internet service isn’t as widely available as Optimum’s cable
            internet plans.
            <br />
            We’d recommend upgrading to Optimum’s fiber internet if it’s
            available in your area, because fiber internet offers a faster and
            more reliable connection compared to cable internet.
            <br />
            If you’re eager to get setup with Optimum service but don’t have any
            internet hardware and don’t want to purchase your own equipment, you
            can rent Optimum’s combo Wi-Fi router/modem for $10 per month. We
            normally recommend buying your own router and modem to avoid rental
            fees, but if you’d rather pay for the convenience, Optimum’s rental
            cost ($10/mo.) does include benefits like 24/7 tech support.
            <br />
            Read our Optimum internet review to learn more about Optimum
            internet service.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Optimum TV availability</h4>
          <p className="after-heading">
            Optimum offers four TV packages that include up to 340 basic and
            premium cable channels. If you get Optimum’s Altice One streaming
            device, you can watch live TV, view DVR content, and use services
            like Netflix and YouTube.
            <br />
            We break down the provider’s complete TV options in our Optimum TV
            review.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Optimum bundle availability</h4>
          <p className="after-heading">
            During the checkout process, you can get discounted service by
            combining your Optimum internet, TV, or home phone service. Read our
            Optimum bundle review to learn more about the provider’s best deals.
          </p>
        </div>
      </div>

      <CTA
        heading={"See if Optimum is available in your town"}
        desc={"Enter your zip code below to find out!"}
      />

      <div className="section optimum-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Optimum availability </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span>Is Optimum Online available
                in my area?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Optimum is available in the New York tristate area as well as
                  17 South and West Coast states. Enter your zip code below to
                  confirm that Optimum internet or TV service is in your area:
                </p>
                <br />
                <Searchbar />
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"Is Optimum Online available area?"}
            cssClass={"faq-content"}
          >
            <p>
              Optimum is available in the New York tristate area as well as 17
              South and West Coast states. Enter your zip code below to confirm
              that Optimum internet or TV service is in your area:
            </p>
            <br />
            <Searchbar />
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Where is Altice available?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Altice is the parent company of Optimum. Altice-owned
                  companies such as Suddenlink and Altice Mobile are available
                  in 21 states including New York and Pennsylvania.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Where is Altice available?"}
            cssClass={"faq-content"}
          >
            <p>
              Altice is the parent company of Optimum. Altice-owned companies
              such as Suddenlink and Altice Mobile are available in 21 states
              including New York and Pennsylvania.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How do I know if Optimum is
                available in my area?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Within Optimum’s three-state coverage area, Optimum will
                  generally be available if you’re near major cities such as
                  Stamford, Newark, or Brooklyn. But with the recent Suddenlink
                  merger, its coverage expanded to 17 new states, so you can use
                  our zip code tool to confirm if Optimum is available in your
                  neighborhood.
                </p>
                <br />
                <Searchbar />
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How do I know if Optimum is my area?"}
            cssClass={"faq-content"}
          >
            <p>
              Within Optimum’s three-state coverage area, Optimum will generally
              be available if you’re near major cities such as Stamford, Newark,
              or Brooklyn. But with the recent Suddenlink merger, its coverage
              expanded to 17 new states, so you can use our zip code tool to
              confirm if Optimum is available in your neighborhood.
            </p>
            <br />
            <Searchbar />
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Optimum Overview | Optimum Internet | Optimum TV | Optimum
          Channel Lineup | Optimum Customer Service | Change or Cancel Optimum |
          Optimum Hidden Costs
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default OptimumAvailabilityMap;
