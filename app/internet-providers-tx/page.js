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
import InternetPackageTable from "../components/package-table/InternetPackageTable";
import Accordion from "../components/accordion/Accordion";
import CTA from "../components/cta-section/CTA";
import InternetProviderCard from "../components/internet-provider-card/InternetProviderCard";
import { internetProvidersOffer } from "../assets/data/internetProvidersOffer";
import IconOne from "../assets/images/internet-provider/icon-1.png";
import IconTwo from "../assets/images/internet-provider/icon-2.png";
import IconThree from "../assets/images/internet-provider/icon-3.png";
import IconFour from "../assets/images/internet-provider/icon-4.png";
import IconFive from "../assets/images/internet-provider/icon-5.png";
import { CircleSection } from "../components/circles-section/page";
import verizon from "../assets/images/brand-logos/verizon.svg";
import spectrum from "../assets/images/brand-logos/spectrum.svg";
import netflix from "../assets/images/brand-logos/netflix.svg";
import xfinity from "../assets/images/brand-logos/xfinity.svg";
import hulu from "../assets/images/brand-logos/hulu.svg";
import dish from "../assets/images/brand-logos/dish-network.svg";
import InfoCard from "../components/info-card-home/InfoCard";
import { internetInfoCards } from "../assets/data/internetInfoCards";


export default function Page() {

  let packageTableData = [
    {
      head: [
        "Internet Provider",
        "Availability in Texas",
        "Download Speed (Mbps)",
        "Upload Speed (Mbps)",
      ],

      body: [
        {
          content: [
            "1.",
            "T-Mobile",
            "39%",
            "245",
            "31",
          ],
        },

        {
          content: [
            "2.",
            "AT&T",
            "36%",
            "5,000",
            "5,000",
          ],
        },

        {
          content: [
            "3.",
            "Earthlink",
            "35%",
            "5,000",
            "5,000",
          ],
        },

        {
          content: [
            "4.",
            "Spectrum",
            "29%",
            "1,000",
            "35",
          ],
        },

        {
          content: [
            "5.",
            "Xfinity",
            "23%",
            "2,000",
            "200",
          ],
        },
        {
          content: [
            "6.",
            "Google Fiber",
            "5%",
            "8,000",
            "8,000",
          ],
        },
        {
          content: [
            "7.",
            "Ezee Fibe",
            "3%",
            "8,000",
            "8,000",
          ],
        },
        {
          content: [
            "8.",
            "Fidium Fiber",
            "3%",
            "2,000",
            "2,000",
          ],
        },
        {
          content: [
            "9.",
            "Windstream",
            "1%",
            "2,000",
            "2,000",
          ],
        },
        {
          content: [
            "10.",
            "Google Fiber Webpass",
            "1%",
            "1,000",
            "1,000",
          ],
        },
        {
          content: [
            "11.",
            "Nextlink",
            "1%",
            "5,000",
            "1,000",
          ],
        },
        {
          content: [
            "12.",
            "Brightspeed",
            "1%",
            "2,000",
            "2,000",
          ],
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
          <InternetPackageTable item={packageTableData} />
        </div>
      </div>

      <div className="section boxes">
        <div className="container">
          <div className="item1">
            <div>
              <h2 className="title">Best Internet Providers in Texas</h2>
              <p className="desc">Some of the top-notch internet service providers in Texas are Spectrum, AT&T, Google Fiber, and Frontier. These Texas internet providers offer various types of internet services, which involve fiber, cable, DSL, and satellite.</p>
            </div>
            <div>
              <Image src={BoxOne} alt="thumbnail" />
            </div>
          </div>
          <div className="item2">
            <Image src={BoxThree} alt="thumbnail" />
            <h2 className="title">Top Choice for Texas Internet Speed</h2>
            <p className="desc">The top Texas ISPs that present their customers with high-speed internet such as AT&T Fiber and Google Fiber. These internet providers in Texas are also known for their robust gigabit internet plans with appealing pricing. They also offer unlimited data options with no quarterly or yearly contract requirements.</p>
          </div>
          <div className="item3">
            <div>
              <h2 className="title">Affordable Texas Internet Options</h2>
              <p className="desc">Everyone wants to go for the affordable internet service providers in Texas. There are budget-friendly internet providers who are the best choice for cost-conscious customers. These Texas internet providers include Frontier and Astound, offering the low cost affordable internet plans.</p>
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
            Featured Offers from Top <span>Texas</span> Internet Providers
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
            Texas Internet Coverage & Availability in 2025
          </h2>
        </div>
        <div className="sideimg-card">
          <Image src={IconOne} alt="thumbnail" />
          <div className="sideimg-card-content">
            <h4 className="title">Internet Ranking of Texas</h4>
            <div className="desc">
              <p>
                The internet ranking of Texas is 12th across all the states according to BroadbandNow’s annual rankings. BroadbandNow releases these yearly rankings showcasing internet speed, accessibility, and overall coverage.
              </p>
            </div>
          </div>
        </div>
        <div className="sideimg-card">
          <Image src={IconTwo} alt="thumbnail" />
          <div className="sideimg-card-content">
            <h4 className="title">Access to Wired or Fixed Wireless Broadband</h4>
            <div className="desc">
              <p>
                About 9 out of 10 Texas residents have access to the internet in the state. The average downloading speed is about 25 Mbps, and uploading is 3 Mbps. In percent, the accessibility to customers is above 92% for wires or fixed wireless broadband.
              </p>
            </div>
          </div>
        </div>
        <div className="sideimg-card">
          <Image src={IconThree} alt="thumbnail" />
          <div className="sideimg-card-content">
            <h4 className="title">Access to Wired Low-Priced Broadband Plans</h4>
            <div className="desc">
              <p>
                More than 80% of Texans have access to broadband internet plans that are priced at $60/month or even less. Every 8 to 10 citizens of Texas have direct reach to affordable internet services.
              </p>
            </div>
          </div>
        </div>
        <div className="sideimg-card">
          <Image src={IconFour} alt="thumbnail" />
          <div className="sideimg-card-content">
            <h4 className="title">Access to Fiber-Optic Service</h4>
            <div className="desc">
              <p>
                Fiber-optic internet is available for 55% of the Texas residents. This provides a special expansion opportunity for internet providers in Texas.
              </p>
            </div>
          </div>
        </div>
        <div className="sideimg-card">
          <Image src={IconFive} alt="thumbnail" />
          <div className="sideimg-card-content">
            <h4 className="title">Number of Internet Providers in Texas</h4>
            <div className="desc">
              <p>
                There are several internet providers in Texas. The counting goes by 535 internet service providers present in Texas. Most of the Texas internet providers cover local internet services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="info-cards-section section">
        <div className="head">
          <h2 className="sect-heading">
            Types of <span>Internet Options</span> in <span> Texas </span>
          </h2>
          <p className="sect-desc">
            Let’s find out about the various internet options available in Texas.
          </p>
        </div>

        <div className="cards">
          {internetInfoCards.map((item, index) => (
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

      <CircleSection/>

      <div className="section xfinity-bundles">
        <div className="watch-card">
          <div className="watch-card-content">
            <h4 className="title">
              Texas Internet Providers Comparison with Other States
            </h4>
            <p className="desc">
              Find out the internet providers in Texas. Compare the pricing, speed, and different deals among the different US States.
            </p>
            <ul className="desc">
              <li className="desc">Internet providers in Colorado</li>
              <li className="desc">Internet providers in California</li>
            </ul>
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
            FAQs
          </h2>
        </div>
        <div className="faq-wrapper">
          <Accordion
            id={"2"}
            title={"What is the best internet provider in Texas?"}
            cssClassName={"faq-content"}
          >
            <p>
              Spectrum and AT&T are considered the top-notch internet service providers in Texas. These internet service providers are well known for their affordable pricing and fast-speed internet.
            </p>
          </Accordion>

          <Accordion
            id={"3"}
            title={"What is the average customer satisfaction with internet services in Texas?"}
            cssClassName={"faq-content"}
          >
            <p>
              Texas residents rate their internet services an average of 3.7 out of 5 stars, placing the state 21st nationally for customer satisfaction.
            </p>
          </Accordion>

          <Accordion
            id={"4"}
            title={"Which cities in Texas have the fastest internet speeds?"}
            cssClassName={"faq-content"}
          >
            <p>
              Burleson, Princeton, and Manor are cities with the fastest internet speeds, with Burleson achieving an average download speed of 386.56 Mbps.
            </p>
          </Accordion>
        </div>
      </div>

    </div>
  );
}

