import "./page.scss";
import Image from "next/image";
import Link from 'next/link';
import React from "react";
import Hero from "../components/hero/InternetProviderHero";
import TexasMap from "../assets/images/internet-provider/texasmap.png";
import UsMap from "../assets/images/internet-provider/usmap.png";
import BoxOne from "../assets/images/internet-provider/box-1.PNG";
import BoxTwo from "../assets/images/internet-provider/box-2.PNG";
import BoxThree from "../assets/images/internet-provider/box-3.PNG";
import PackageTable from "../components/package-table/PackageTable";
import Accordion from "../components/accordion/Accordion";
import CTA from "../components/cta-section/CTA";
import InternetProviderCard from "../components/internet-provider-card/InternetProviderCard";
import { internetProvidersOffer } from "../assets/data/internetProvidersOffer";
import IconOne from "../assets/images/internet-provider/icon-1.png";
import IconTwo from "../assets/images/internet-provider/icon-2.png";
import IconThree from "../assets/images/internet-provider/icon-3.png";
import IconFour from "../assets/images/internet-provider/icon-4.png";
import IconFive from "../assets/images/internet-provider/icon-5.png";





import verizon from "../assets/images/brand-logos/verizon.svg";
import spectrum from "../assets/images/brand-logos/spectrum.svg";
import netflix from "../assets/images/brand-logos/netflix.svg";
import xfinity from "../assets/images/brand-logos/xfinity.svg";
import hulu from "../assets/images/brand-logos/hulu.svg";
import dish from "../assets/images/brand-logos/dish-network.svg";
import InfoCard from "../components/info-card-home/InfoCard";
import { infoCards } from "../assets/data/infoCards";


export default function Page() {

  let packageTableData = [
    {
      head: [
        "Top packages",
        "Price",
        "Channels",
        "Popular channels",
        "column name",
        "Internet speed",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Popular TV",
            "$50.00/mo.",
            "125+",
            "AMC, Comedy Central, Disney Channel",
            "$0.40",
            "N/A",
          ],
          linkPath: "#",
        },

        {
          content: [
            "2.",
            "Ultimate TV",
            "$68.50/mo.",
            "185+",
            "IFC, Disney XD, Nat Geo Wild",
            "$0.37",
            "N/A",
          ],
          linkPath: "#",
        },

        {
          content: [
            "3.",
            "Gigabit Extra Internet + Ultimate TV",
            "$130.00/mo.",
            "185+",
            "Cooking Channel, Cartoon Network, MLB Network",
            "$0.70",
            "1,200 Mbps",
          ],
          linkPath: "#",
        },

        {
          content: [
            "4.",
            "Gigabit Extra Internet + Ultimate TV",
            "$130.00/mo.",
            "185+",
            "Cooking Channel, Cartoon Network, MLB Network",
            "$0.70",
            "1,200 Mbps",
          ],
          linkPath: "#",
        },

        {
          content: [
            "5.",
            "Gigabit Extra Internet + Ultimate TV",
            "$130.00/mo.",
            "185+",
            "Cooking Channel, Cartoon Network, MLB Network",
            "$0.70",
            "1,200 Mbps",
          ],
          linkPath: "#",
        },
      ],
    },
  ];

  return (
    <div className="home">
      <Hero />

      <div className="logos-strip">
        <Link href="#" className="logos-strip-img">
          <Image src={verizon} alt="verizon-logo" />
        </Link>
        <Link href="#" className="logo-strip-img">
          <Image src={spectrum} alt="spectrum-logo" />
        </Link>
        <Link href="#" className="logo-strip-img">
          <Image src={netflix} alt="netflix-logo" />
        </Link>
        <Link href="#" className="logo-strip-img">
          <Image src={xfinity} alt="xfinity-logo" />
        </Link>
        <Link href="#" className="logo-strip-img">
          <Image src={hulu} alt="hulu-logo" />
        </Link>
        <Link href="#" className="logo-strip-img">
          <Image src={dish} alt="dish-logo" />
        </Link>
      </div>

      <div className="section xfinity-bundles">
        <div className="watch-card">
          <div className="watch-card-content">
            <h4 className="title">
              Top Internet Providers in Texas.
            </h4>
            <p className="desc">
              Texas is going digital — and we’re bringing you along. Experience high-speed internet like never before with the most trusted Internet Providers in Texas.
            </p>
            <p className="desc">
              Reliable connections, ultra-fast speeds, and service you can count on — no matter where you are in the Lone Star State. Whether for work, entertainment, or staying connected, we deliver internet built for your lifestyle.
            </p>
          </div>
          <Image src={TexasMap} alt="thumbnail" className="texasMap" />
        </div>
      </div>

      <div className="section top-xfinity-tv-packages">
        <div className="head">
          <h2 className="sect-heading">
            Best Internet Providers in <span>Texas</span> with Availability and Max Speeds.
          </h2>
        </div>
        <div className="package-table-container west-region">
          <h4>Xfinity TV: West region</h4>
          <PackageTable item={packageTableData} />
        </div>
      </div>

      <div className="section boxes">
        <div class="container">
          <div class="item1">
            <div>
              <h2 className="title">Best Internet Providers in Texas</h2>
              <p className="desc">Some of the top-notch internet service providers in Texas are Spectrum, AT&T, Google Fiber, and Frontier. These Texas internet providers offer various types of internet services, which involve fiber, cable, DSL, and satellite.</p>
            </div>
            <div>
              <Image src={BoxOne} alt="thumbnail" />
            </div>
          </div>
          <div class="item2">
            <Image src={BoxThree} alt="thumbnail" />
            <h2 className="title">Best Internet Providers in Texas</h2>
              <p className="desc">Some of the top-notch internet service providers in Texas are Spectrum, AT&T, Google Fiber, and Frontier. These Texas internet providers offer various types of internet services, which involve fiber, cable, DSL, and satellite.</p>
          </div>
          <div class="item3">
            <div>
              <h2 className="title">Best Internet Providers in Texas</h2>
              <p className="desc">Some of the top-notch internet service providers in Texas are Spectrum, AT&T, Google Fiber, and Frontier. These Texas internet providers offer various types of internet services, which involve fiber, cable, DSL, and satellite.</p>
            </div>
            <div>
              <Image src={BoxTwo} alt="thumbnail" />
            </div>
          </div>
        </div>
      </div>






      <CTA
        heading={"Ready to start watching your favorite shows?"}
        desc={
          "Xfinity TV plans vary by region. Enter your zip code below to see which packages are available in your area."
        }
      />




      <div className="section best-internet-tv-offer">
        <div className="head">
          <h2 className="sect-heading">
            Optimal Offers for <span> Internet and TV </span> Services
          </h2>
        </div>

        <div className="cards">
          {internetProvidersOffer.map((item, index) => (
            <InternetProviderCard
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


      <div className="section xfinity-tv-equipments">
        <div className="head">
          <h2 className="sect-heading">
            Experience <span>top user-rated</span> Xfinity TV equipment and
            services
          </h2>
          <p className="sect-desc">
            From the advanced X1 to its award-winning voice remote, Xfinity has
            some of the best TV equipment on the market. But what do Xfinity’s
            actual customers think? Check out our annual TV customer satisfaction survey
            to see how Xfinity TV equipment compares to the competition.
          </p>
        </div>
        <div className="sideimg-card">
          <Image src={IconOne} alt="thumbnail" />
          <div className="sideimg-card-content">
            <h4 className="title">Xfinity X1 DVR</h4>
            <div className="desc">
              <p>
                You showed up to save money, and we’re here for it. When you
                pick the right Xfinity bundle, you’ll get exactly what you
                deserve—a great deal. We’ve researched prices and compiled
                pricing comparison tables for
              </p>
            </div>
          </div>
        </div>
        <div className="sideimg-card">
          <Image src={IconTwo} alt="thumbnail" />
          <div className="sideimg-card-content">
            <h4 className="title">Xfinity X1 DVR</h4>
            <div className="desc">
              <p>
                You showed up to save money, and we’re here for it. When you
                pick the right Xfinity bundle, you’ll get exactly what you
                deserve—a great deal. We’ve researched prices and compiled
                pricing comparison tables for
              </p>
            </div>
          </div>
        </div>
        <div className="sideimg-card">
          <Image src={IconThree} alt="thumbnail" />
          <div className="sideimg-card-content">
            <h4 className="title">Xfinity X1 DVR</h4>
            <div className="desc">
              <p>
                You showed up to save money, and we’re here for it. When you
                pick the right Xfinity bundle, you’ll get exactly what you
                deserve—a great deal. We’ve researched prices and compiled
                pricing comparison tables for
              </p>
            </div>
          </div>
        </div>
        <div className="sideimg-card">
          <Image src={IconFour} alt="thumbnail" />
          <div className="sideimg-card-content">
            <h4 className="title">Xfinity X1 DVR</h4>
            <div className="desc">
              <p>
                You showed up to save money, and we’re here for it. When you
                pick the right Xfinity bundle, you’ll get exactly what you
                deserve—a great deal. We’ve researched prices and compiled
                pricing comparison tables for
              </p>
            </div>
          </div>
        </div>
        <div className="sideimg-card">
          <Image src={IconFive} alt="thumbnail" />
          <div className="sideimg-card-content">
            <h4 className="title">Xfinity X1 DVR</h4>
            <div className="desc">
              <p>
                You showed up to save money, and we’re here for it. When you
                pick the right Xfinity bundle, you’ll get exactly what you
                deserve—a great deal. We’ve researched prices and compiled
                pricing comparison tables for
              </p>
            </div>
          </div>
        </div>
      </div>




      <div className="info-cards-section section">
        <div className="head">
          <h2 className="sect-heading">
            Transform Your <span>Viewing</span> And <span> Surfing </span>{" "}
            Experience
          </h2>
          <p className="sect-desc">
            Simplify and Accelerate Your Quest for Top-tier TV and Internet
            Options in Your Area with LocalCableInternetPhone’s User-Friendly
            Platform
          </p>
        </div>

        <div className="cards">
          {infoCards.map((item, index) => (
            <InfoCard
              key={index}
              icon={item.icon}
              heading={item.heading}
              desc={item.desc}
              buttonText={item.buttonText}
              buttonLink={item.buttonLink}
            />
          ))}
        </div>
      </div>



      <div className="section xfinity-bundles">
        <div className="watch-card">
          <div className="watch-card-content">
            <h4 className="title">
              Save up to $60 per month with Xfinity bundles <br /> and deals
            </h4>
            <p className="desc">
              You showed up to save money, and we’re here for it. When you pick
              the right Xfinity bundle, you’ll get exactly what you deserve—a
              great deal. We’ve researched prices and compiled pricing
              comparison tables for Xfinity TV bundle deals in your area.
            </p>
            <p className="desc">
              In addition to your budget-friendly bundling options, please go
              crazy with all of Xfinity’s current deals and promotions.
            </p>
          </div>
          <div>
            <Image src={UsMap} alt="thumbnail" className="usMap" />
          </div>
        </div>
      </div>


      {/* Faq */}

      <div className="section xfinity-tv-faq">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span>TV</span> FAQ
          </h2>

          <p className="sect-desc">
            TL;DR? Xfinity kills it. For more detailed info on all Xfinity
            equipment and services, see our comprehensive Xfinity equipment
            guide.
          </p>
        </div>

        <div className="faq-wrapper">
          <Accordion
            id={"2"}
            title={"What are Xfinity TV packages?"}
            cssClass={"faq-content"}
          >
            <p>
              Xfinity TV packages by Comcast come through a cable connection
              with up to 185+ channels. Most packages also include 20 hours of
              DVR storage via the X1 DVR box, plus the Xfinity Stream app.
            </p>
            <ul>
              <li>
                <span className="bold">Choice TV: </span>
                $20.00–$25.00/mo., 10+ channels
              </li>
              <li>
                <span className="bold">Popular TV: </span>
                $50.00–$60.00/mo., 125+ channels
              </li>
              <li>
                <span className="bold">Ultimate TV: </span>
                $68.50–$80.00/mo., 185+ channels
              </li>
            </ul>

            <p>
              Check to see what Xfinity TV packages are available in your area.
            </p>
          </Accordion>

          <Accordion
            id={"3"}
            title={"What is the cheapest Xfinity TV package?"}
            cssClass={"faq-content"}
          >
            <p>
              The cheapest Xfinity TV package is{" "}
              <span className="bold"> Choice TV</span>, a basic cable package
              that offers 10+ channels for $20.00–$25.00/mo.
            </p>
            <p>
              The cheapest regular cable package is{" "}
              <span className="bold"> Popular TV</span> ($50.00–$60.00/mo., 125+
              channels).
            </p>
            <p>
              Looking for more ways to cut monthly costs? We like the way you
              think! View Xfinity’s{" "}
              <span className="link">
                <Link href={"#"}>current deals and promotions</Link>
              </span>
              .
            </p>
          </Accordion>

          <Accordion
            id={"4"}
            title={"What are Xfinity TV packages?"}
            cssClass={"faq-content"}
          >
            <p>
              Xfinity TV packages by Comcast come through a cable connection
              with up to 185+ channels. Most packages also include 20 hours of
              DVR storage via the X1 DVR box, plus the Xfinity Stream app.
            </p>
            <ul>
              <li>
                <span className="bold">Choice TV: </span>
                $20.00–$25.00/mo., 10+ channels
              </li>
              <li>
                <span className="bold">Popular TV: </span>
                $50.00–$60.00/mo., 125+ channels
              </li>
              <li>
                <span className="bold">Ultimate TV: </span>
                $68.50–$80.00/mo., 185+ channels
              </li>
            </ul>

            <p>
              Check to see what Xfinity TV packages are available in your area.
            </p>
          </Accordion>

          <Accordion
            id={"5"}
            title={"What are Xfinity TV packages?"}
            cssClass={"faq-content"}
          >
            <p>
              Xfinity TV packages by Comcast come through a cable connection
              with up to 185+ channels. Most packages also include 20 hours of
              DVR storage via the X1 DVR box, plus the Xfinity Stream app.
            </p>
            <ul>
              <li>
                <span className="bold">Choice TV: </span>
                $20.00–$25.00/mo., 10+ channels
              </li>
              <li>
                <span className="bold">Popular TV: </span>
                $50.00–$60.00/mo., 125+ channels
              </li>
              <li>
                <span className="bold">Ultimate TV: </span>
                $68.50–$80.00/mo., 185+ channels
              </li>
            </ul>

            <p>
              Check to see what Xfinity TV packages are available in your area.
            </p>
          </Accordion>

          <Accordion
            id={"6"}
            title={"What are Xfinity TV packages?"}
            cssClass={"faq-content"}
          >
            <p>
              Xfinity TV packages by Comcast come through a cable connection
              with up to 185+ channels. Most packages also include 20 hours of
              DVR storage via the X1 DVR box, plus the Xfinity Stream app.
            </p>
            <ul>
              <li>
                <span className="bold">Choice TV: </span>
                $20.00–$25.00/mo., 10+ channels
              </li>
              <li>
                <span className="bold">Popular TV: </span>
                $50.00–$60.00/mo., 125+ channels
              </li>
              <li>
                <span className="bold">Ultimate TV: </span>
                $68.50–$80.00/mo., 185+ channels
              </li>
            </ul>

            <p>
              Check to see what Xfinity TV packages are available in your area.
            </p>
          </Accordion>
        </div>
      </div>

    </div>
  );
}

