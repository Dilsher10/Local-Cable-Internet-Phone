// import React, { useState } from "react";
import "./sling-tv-add-on-packages.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { slingtvNavLinks } from "../../assets/data/navLinks/slingtvNavLinks";
import quotationsIcon from "../../assets/images/quotations.svg";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";
import PackageTable from "../../components/package-table/PackageTable";

export const metadata = {
  title: "Sling TV Add-on Packages"
};

const SlingTvAddOnPackages = () => {
//   const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  let packageTableData = [
    {
      head: [
        "Add-On Package",
        "Price With Sling Orange",
        "Price With Sling Blue",
        "Price With Sling Orange + Blue",
        "Details",
      ],

      body: [
        {
          content: ["1.", "Sports Extra", "$11/mo.", "$11/mo.", "$11/mo."],
          linkPath: "#",
        },
        {
          content: ["2.", "Comedy Extra", "$6/mo.", "$6/mo.", "$6/mo."],
          linkPath: "#",
        },
        {
          content: ["3.", "Kids Extra", "$6/mo.", "$6/mo.", "$6/mo."],
          linkPath: "#",
        },
        {
          content: ["4.", "News Extra", "$6/mo.", "$6/mo.", "$6/mo."],
          linkPath: "#",
        },
        {
          content: ["5.", "Lifestyle Extra", "$6/mo.", "$6/mo.", "$6/mo."],
          linkPath: "#",
        },
        {
          content: ["6.", "Hollywood Extra", "$6/mo.", "$6/mo.", "$6/mo."],
          linkPath: "#",
        },
        {
          content: ["7.", "Heartland Extra", "$6/mo.", "$6/mo.", "$6/mo."],
          linkPath: "#",
        },
        {
          content: ["8.", "4 Extras Deal", "$13/mo.", "$13/mo.", "$13/mo."],
          linkPath: "#",
        },
        {
          content: ["9.", "Total TV Deal", "$21/mo.", "$21/mo.", "$21/mo."],
          linkPath: "#",
        },
      ],
    },
  ];

  return (
    <div className="sling-tv-add-on-packages">
      {/* <SubNav links={slingtvNavLinks} /> */}
      <div className="hidden-cost-hero global-inner-hero">
        <h1>Sling TV Add-on Packages</h1>
        <p>
          Sling TV’s plethora of package add-ons makes it one of the most
          customizable services in the live TV streaming biz—let CableTV.com
          walk you through the wild world of Sling TV Extras.
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
            Thanks to its wide variety of channel add-on packages, you can shape
            any Sling TV plan into whatever you like. Need sports? There’s
            plenty. Like lifestyle and movie channels? Pile ’em on. Want to keep
            the kiddies occupied? Sling TV can be your babysitter (within
            reason). <br />
            Sling TV offers separate add-on channel packages, or Extras, for its
            Sling Orange and Sling Blue plans. As mentioned in our Sling TV
            review, Sling Orange is geared more toward sports and family
            channels, while Sling Blue leans more toward entertainment and news
            channels. Sling TV’s Extras packages help fill in the channel gaps
            of each. <br />
            Below are Sling TV’s add-on channel packages for its Sling Orange
            and Sling Blue plans, which differ slightly. Customization nerds
            take note: there’s a pair of packages that package these
            packages—the Sling Orange + Blue Total TV Deal gives you literally
            everything Sling TV has to offer for about $71 a month total.
          </p>
        </div>
      </div>

      <StickyHeader />

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
          <Link href={"#"}>Sports Extra </Link>
          <Link href={"#"}>Comedy Extra </Link>
          <Link href={"#"}>Kids Extra</Link>
          <Link href={"#"}>News Extra</Link>
          <Link href={"#"}>Lifestyle Extra</Link>
          <Link href={"#"}>Hollywood Extra</Link>
          <Link href={"#"}>Heartland Extra</Link>
        </div>
      </div>

      <div className="section packages">
        <div className="head">
          <h2 className="sect-heading">
            Sling TV add-on <span> packages and prices </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Compatible device and internet connection required. Offers and
          availability may vary by location and are subject to change.
        </p>
        <div className="post-grid">
          <div className="package-table-container channels">
            <h4>Sling Orange Sports Extra ($11/mo.)</h4>
            <br />
            <ul className="channel-list">
              <li>NBA TV</li>
              <li>MLB Network</li>
              <li>MLB Network Strike Zone</li>
              <li>NHL Network</li>
              <li>ESPNews</li>
              <li>ESPNU</li>
              <li>beIN SPORTS</li>
              <li>Tennis Channel</li>
              <li>ACC Network</li>
              <li>ACC Network Extra</li>
              <li>Pac-12 Network</li>
              <li>SEC Network</li>
              <li>SEC Network+</li>
              <li>Longhorn Network</li>
            </ul>
            <hr />
            <div className="btn">
              <Link href={"/"}>Get sports extra</Link>
            </div>
          </div>
          <div className="package-table-container channels">
            <h4>Sling Blue Sports Extra ($11/mo.)</h4>
            <br />

            <ul className="channel-list">
              <li>NHL Network</li>
              <li>beIN SPORTS</li>
              <li>Golf Channel</li>
              <li>Tennis Channel</li>
              <li>Big Ten Network</li>
              <li>Pac-12 Network</li>
              <li>FS2</li>
              <li>NFL RedZone</li>
              <li>NBA TV</li>
              <li>MLB Network</li>
              <li>MLB Network Strike Zone</li>
            </ul>
            <hr />
            <div className="btn">
              <Link href={"/"}>Get sports extra</Link>
            </div>
          </div>
          <div className="package-table-container channels">
            <h4>Sling Orange Comedy Extra ($6/mo.)</h4>
            <br />
            <ul className="channel-list">
              <li>Paramount Network</li>
              <li>TV Land</li>
              <li>truTV</li>
              <li>MTV</li>
              <li>MTV2</li>
              <li>CMT</li>
              <li>LOGO</li>
              <li>REVOLT TV</li>
              <li>Laff TV</li>
              <li>FETV</li>
            </ul>
            <hr />
            <div className="btn">
              <Link href={"/"}>Get comedy extra</Link>
            </div>
          </div>
          <div className="package-table-container channels">
            <h4> Sling Blue Comedy Extra ($6/mo.)</h4>
            <br />
            <ul className="channel-list">
              <li>CMT</li>
              <li>LOGO</li>
              <li>REVOLT TV</li>
              <li>Laff TV</li>
              <li>FETV</li>
              <li>Paramount Network</li>
              <li>TV Land</li>
              <li>MTV</li>
              <li>MTV2</li>
            </ul>
            <hr />
            <div className="btn">
              <Link href={"/"}>Get comedy extra</Link>
            </div>
          </div>
          <div className="package-table-container channels">
            <h4> Sling Orange Kids Extra ($6/mo.)</h4>
            <br />
            <ul className="channel-list">
              <li>Disney XD</li>
              <li>Disney Junior</li>
              <li>Boomerang</li>
              <li>Nicktoons</li>
              <li>TeenNick</li>
              <li>BabyTV</li>
            </ul>
            <hr />
            <div className="btn">
              <Link href={"/"}>Get kids extra</Link>
            </div>
          </div>
          <div className="package-table-container channels">
            <h4>Sling Blue Kids Extra ($6/mo.)</h4>
            <br />
            <ul className="channel-list">
              <li>Boomerang</li>
              <li>Nicktoons</li>
              <li>TeenNick</li>
              <li>BabyTV</li>
            </ul>
            <hr />
            <div className="btn">
              <Link href={"/"}>Get kids extra</Link>
            </div>
          </div>
          <div className="package-table-container channels">
            <h4>Sling Orange News Extra ($6/mo.)</h4>
            <br />
            <ul className="channel-list">
              <li>BBC World News</li>
              <li>HLN</li>
              <li>Science Channel</li>
              <li>Law & Crime</li>
              <li>TeenNick</li>
              <li>NewsNation</li>
              <li>Newsmax TV</li>
              <li>News18</li>
              <li>CGTN</li>
            </ul>
            <hr />
            <div className="btn">
              <Link href={"/"}>Get news extra</Link>
            </div>
          </div>
          <div className="package-table-container channels">
            <h4>Sling Blue News Extra ($6/mo.)</h4>
            <br />
            <ul className="channel-list">
              <li>CNBC</li>
              <li>FOX Business Network</li>
              <li>BBC World News</li>
              <li>Science Channel</li>
              <li>Law & Crime</li>
              <li>NewsNation</li>
              <li>Newsmax TV</li>
              <li>NDTV 24×7</li>
              <li>News18</li>
              <li>CGTN</li>
            </ul>
            <hr />
            <div className="btn">
              <Link href={"/"}>Get news extra</Link>
            </div>
          </div>
          <div className="package-table-container channels">
            <h4>Sling Orange Lifestyle Extra ($6/mo.)</h4>
            <br />
            <ul className="channel-list">
              <li>Magnolia Network</li>
              <li>VH1</li>
              <li>FYI</li>
              <li>WE tv</li>
              <li>Cooking Channel</li>
              <li>Hallmark Channel</li>
              <li>Hallmark Movies & Mysteries</li>
              <li>Hallmark Drama</li>
              <li>Lifetime Movie Network</li>
            </ul>
            <hr />
            <div className="btn">
              <Link href={"/"}>Get lifestyle extra</Link>
            </div>
          </div>
          <div className="package-table-container channels">
            <h4>Sling Blue Lifestyle Extra ($6/mo.)</h4>
            <br />
            <ul className="channel-list">
              <li>Hallmark Channel</li>
              <li>Hallmark Movies & Mysteries</li>
              <li>Hallmark Drama</li>
              <li>Lifetime Movie Network</li>
              <li>Oxygen True Crime</li>
              <li>Magnolia Network</li>
              <li>VH1</li>
              <li>FYI</li>
              <li>WE tv</li>
              <li>Cooking Channel</li>
            </ul>
            <hr />
            <div className="btn">
              <Link href={"/"}>Get lifestyle extra</Link>
            </div>
          </div>
          <div className="package-table-container channels">
            <h4>Sling Orange Hollywood Extra ($6/mo.)</h4>
            <br />
            <ul className="channel-list">
              <li>SundanceTV</li>
              <li>Turner Classic Movies</li>
              <li>HDNET MOVIES</li>
              <li>REELZ</li>
              <li>Heroes & Icons</li>
              <li>Start TV</li>
              <li>Grit</li>
              <li>Bounce</li>
            </ul>
            <hr />
            <div className="btn">
              <Link href={"/"}>Get Hollywood extra</Link>
            </div>
          </div>
          <div className="package-table-container channels">
            <h4>Sling Blue Hollywood Extra ($6/mo.)</h4>
            <br />
            <ul className="channel-list">
              <li>FXX</li>
              <li>FXM</li>
              <li>SundanceTV</li>
              <li>Turner Classic Movies</li>
              <li>HDNET MOVIES</li>
              <li>REELZ</li>
              <li>Heroes & Icons</li>
              <li>Start TV</li>
              <li>Grit</li>
              <li>Bounce</li>
            </ul>
            <hr />
            <div className="btn">
              <Link href={"/"}>Get Hollywood extra</Link>
            </div>
          </div>
          <div className="package-table-container channels">
            <h4>Sling Orange Heartland Extra ($6/mo.)</h4>
            <br />
            <ul className="channel-list">
              <li>Outdoor Channel</li>
              <li>Destination America</li>
              <li>Pursuit Channel</li>
              <li>Sportsman Channel</li>
              <li>American Heroes Channel</li>
              <li>Great American Family</li>
              <li>Great American Living</li>
              <li>INSP</li>
              <li>RFD-TV</li>
              <li>PixL</li>
              <li>The Cowboy Channel</li>
            </ul>
            <hr />
            <div className="btn">
              <Link href={"/"}>Get Heartland extra</Link>
            </div>
          </div>
          <div className="package-table-container channels">
            <h4>Sling Blue Heartland Extra ($6/mo.)</h4>
            <br />
            <ul className="channel-list">
              <li>Nat Geo Wild</li>
              <li>Outdoor Channel</li>
              <li>Destination America</li>
              <li>Pursuit Channel</li>
              <li>Sportsman Channel</li>
              <li>American Heroes Channel</li>
              <li>Great American Family</li>
              <li>Great American Living</li>
              <li>World Fishing Network</li>
              <li>INSP</li>
              <li>RFD-TV</li>
              <li>PixL</li>
              <li>The Cowboy Channel</li>
            </ul>
            <hr />
            <div className="btn">
              <Link href={"/"}>Get Heartland extra</Link>
            </div>
          </div>
          <div className="package-table-container channels">
            <h4>Sling Orange or Sling Blue 4 Extras Deal ($13/mo.)</h4>
            <br />
            <ul className="channel-list">
              <li>Sports Extra</li>
              <li>Comedy Extra</li>
              <li>Kids Extra</li>
              <li>News Extra</li>
              <li>Lifestyle Extra</li>
              <li>Hollywood Extra</li>
              <li>Heartland Extra</li>
              <li>DVR Plus (200 hrs. storage)</li>
            </ul>
            <hr />
            <div className="btn">
              <Link href={"/"}>Get total TV deal</Link>
            </div>
          </div>
          <div className="package-table-container channels">
            <h4>Sling Orange + Blue Total TV Deal ($21/mo.)</h4>
            <br />
            <ul className="channel-list">
              <li>Sports Extra</li>
              <li>Comedy Extra</li>
              <li>Kids Extra</li>
              <li>News Extra</li>
              <li>Lifestyle Extra</li>
              <li>Hollywood Extra</li>
              <li>Heartland Extra</li>
              <li>DVR Plus (200 hrs. storage)</li>
            </ul>
            <hr />
            <div className="btn">
              <Link href={"/"}>Get total TV deal</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>Sling TV add-on packages </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What add-on packages does
                Sling TV have?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Sling TV offers seven add-on channel packages to supplement
                  its 32- to- 40-channel Orange or Blue plans, or its 45-channel
                  Orange + Blue plan: Sports Extra, Comedy Extra, Kids Extra,
                  News Extra, Lifestyle Extra, Hollywood Extra, and Heartland
                  Extra.
                </p>
              </div>
            </div>
          </div> */}
<Accordion
            id={"1"}
            title={" What add-on packages does Sling TV have?"}
            cssClass={"faq-content"}
          >
           <p>
                  Sling TV offers seven add-on channel packages to supplement
                  its 32- to- 40-channel Orange or Blue plans, or its 45-channel
                  Orange + Blue plan: Sports Extra, Comedy Extra, Kids Extra,
                  News Extra, Lifestyle Extra, Hollywood Extra, and Heartland
                  Extra.
                </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Can you add individual
                channels to Sling TV?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  You can add Extra packages of standard cable channels to Sling
                  TV, but not individual channels. You can add individual
                  premium channels, like SHOWTIME or STARZ, to Sling TV.
                </p>
              </div>
            </div>
          </div> */}
<Accordion
            id={"2"}
            title={" Can you add individual channels to Sling TV?"}
            cssClass={"faq-content"}
          >
           <p>
                  You can add Extra packages of standard cable channels to Sling
                  TV, but not individual channels. You can add individual
                  premium channels, like SHOWTIME or STARZ, to Sling TV.
                </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What is the 4 Extras Deal
                on Sling TV?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Sling TV’s 4 Extras Deal allows you to combine four of its
                  Extras packages into a bundle for $13 a month on top of your
                  plan’s price (Sports Extra excluded). The 4 Extras Deal can
                  save you $11 a month over adding the packages individually.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" What is the 4 Extras Deal on Sling TV?"}
            cssClass={"faq-content"}
          >
           <p>
                  Sling TV’s 4 Extras Deal allows you to combine four of its
                  Extras packages into a bundle for $13 a month on top of your
                  plan’s price (Sports Extra excluded). The 4 Extras Deal can
                  save you $11 a month over adding the packages individually.
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

          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}> Sling TV Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Sling TV Channel Lineups</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Sling TV Deals </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

{/* <Newsletter /> */}
    </div>
  );
};

export default SlingTvAddOnPackages;
