// import React, { useState } from "react";
import "./internet.scss";
import Searchbar from "../../components/searchbar/Searchbar";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import PackageCard from "../../components/package-card/PackageCard";
import BrandLogoCard from "../../components/brand-logo-card/BrandLogoCard";
import Accordion from "../../components/accordion/Accordion";
import dish from "../../assets/images/brand-logos/dish-network.svg";
import directTv from "../../assets/images/brand-logos/directtv.svg";
import spectrum from "../../assets/images/brand-logos/spectrum.svg";
import xfinity from "../../assets/images/brand-logos/xfinity.svg";
import cox from "../../assets/images/brand-logos/cox.svg";
import verizon from "../../assets/images/brand-logos/verizon.svg";
import optimum from "../../assets/images/brand-logos/optimum.svg";
import astound from "../../assets/images/brand-logos/astound.svg";
import BlogCard from "../../components/blog-card/BlogCard";
import { blogsTemporary } from "../../assets/data/blogsTemporary";
import CTA from "../../components/cta-section/CTA";
import Newsletter from "../../components/newsletter/Newsletter";
import ComparisonSlider from "../../components/comparison-slider/ComparisonSlider";
import Link from "next/link";

export const metadata = {
  title: "Connect, Explore, Conquer: Elevate Your Online Experience with Us - Your Gateway to Seamless Internet Services!"
};

const Internet = () => {
  // const [accordion, setAccordion] = useState(null);

  const internetProviders = [
    {
      img: dish,
      linkPath: "#",
    },
    {
      img: directTv,
      linkPath: "#",
    },
    {
      img: spectrum,
      linkPath: "#",
    },
    {
      img: xfinity,
      linkPath: "#",
    },
    {
      img: cox,
      linkPath: "#",
    },
    {
      img: verizon,
      linkPath: "#",
    },
    {
      img: optimum,
      linkPath: "#",
    },
    {
      img: astound,
      linkPath: "#",
    },
  ];

  const accordionData = [
    {
      title: " more on-demand streaming services",
      content: [
        {
          name: "Read Armstrong review",
          path: "#",
        },
        {
          name: "Read Astound Broadband powered by RCN review",
          path: "#",
        },
        {
          name: "Read Astound Broadband powered by Wave review",
          path: "#",
        },
        {
          name: "Read Breezeline Review",
          path: "#",
        },
        {
          name: "Read EarthLink review",
          path: "#",
        },
        {
          name: "Read Frontier review",
          path: "#",
        },
        {
          name: "Read HughesNet review",
          path: "#",
        },
        {
          name: "Read Google Fiber review",
          path: "#",
        },
        {
          name: "Read MetroNet review",
          path: "#",
        },
        {
          name: "Read Midco review",
          path: "#",
        },
        {
          name: "Read Quantum review",
          path: "#",
        },
        {
          name: "Read Rise Broadband review",
          path: "#",
        },
        {
          name: "Read Sparklight review",
          path: "#",
        },
        {
          name: "Read Vyve Broadband review",
          path: "#",
        },
        {
          name: "Read Windstream review",
          path: "#",
        },
        {
          name: "Read Xtream powered by Mediacom review",
          path: "#",
        },
        {
          name: "Read Ziply Fiber review",
          path: "#",
        },
      ],
    },
  ];

  // let accordionHandler = (i) => {
  //   if (accordion === i) {
  //     return setAccordion(null);
  //   }

  //   setAccordion(i);
  // };

  return (
    <div className="internet">
      <div className="internet-hero global-hero">
        <h1>
          Connect, Explore, Conquer: Elevate Your Online Experience with Us -
          Your Gateway to Seamless Internet Services!
        </h1>
        <p>
          We're smitten with the online world. In fact, our fascination goes
          beyond a mere crush; it's a full-blown obsession. That's precisely why
          we meticulously compile information on pricing, speed, and
          availability from the top internet service providers (ISPs). With our
          data, you can confidently select the provider that best suits your
          needs.
        </p>

        <div className="form">
          <p>Find Internet providers in your area.</p>
          <Searchbar />
        </div>
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

      <div className="section internet-providers">
        <div className="head">
          <h2 className="sect-heading">
            Unleashing Blazing Connections: Explore Top-Tier
            <span>internet providers</span> for a Seamless Online Experience!
          </h2>
          <p className="sect-desc">
            Honestly, a lot of internet providers don't have the best
            reputation. But don't worry; just take your time reading and
            understanding. Avoid making a quick decision so you can avoid any
            headaches later on.
          </p>
        </div>

        <div className="cards">
          {internetProviders.map((item, index) => (
            <BrandLogoCard
              key={index}
              id={index}
              img={item.img}
              linkPath={item.linkPath}
            />
          ))}
        </div>

        
        {accordionData.map((item, index) => (
          <Accordion 
            key={index}
            id = {index}
            title = {item.title}
            cssClass={"accordion-ol"}>
            <ol type="1">
              {item.content.map((item, index) => (
                <li key={index}>
                  {" "}
                  <Link href={item.path}>{item.name}</Link>{" "}
                </li>
              ))}
            </ol>
          </Accordion>
        ))}
      </div>

      <div className="section best-isp-deals">
        <div className="head">
          <h2 className="sect-heading">
            Maximize Savings, Elevate Speed: Unleash Top-Tier{" "}
            <span>ISP Deals </span> Today
          </h2>
          <p className="sect-desc">
            Whether you decide to combine services or take advantage of a
            compelling introductory offer, we're here to assist you in cutting
            costs significantly on your upcoming internet service provider
            (ISP).
          </p>
        </div>

        <div className="cards">
          {blogsTemporary.map((item, index) => (
            <BlogCard
              key={index}
              id={index}
              thumbnail={item.thumbnail}
              title={item.title}
              shortDesc={item.shortDesc}
              writerImg={item.writerImg}
              writerName={item.writerName}
              postDate={item.postDate}
            />
          ))}
        </div>
      </div>

      <div className="section head-to-head-comparisons">
        <div className="head">
          <h2 className="sect-heading">
            Battle of Bandwidth: Compare <span>Top Internet Providers</span>
          </h2>
          <p className="sect-desc">
            Our experts pit leading internet providers against each other in a
            showdown with no holds barred. Explore the fierce competition among
            ISPs in your area to find the ultimate champion.
          </p>
        </div>

        <ComparisonSlider />
      </div>

      <div className="section cheap-internet-options">
        <div className="head">
          <h2 className="sect-heading">
            Affordable Internet Solutions:{" "}
            <span> Our Expertise in Cost-Effective Connectivity</span>
            thing
          </h2>
          <p className="sect-desc">
            Stretching Your Budget? Explore Low-Income Internet Discounts,
            Special Offers, and More with Our Helpful Guides and Reviews.
          </p>
        </div>

        <div className="cards">
          {blogsTemporary.map((item, index) => (
            <BlogCard
              key={index}
              id={index}
              thumbnail={item.thumbnail}
              title={item.title}
              shortDesc={item.shortDesc}
              writerImg={item.writerImg}
              writerName={item.writerName}
              postDate={item.postDate}
            />
          ))}
        </div>
      </div>

      <CTA
        heading={
          "Find the Right Internet Service Providers in Your Neighborhood!"
        }
        desc={
          "Enter Your Zip Code to Explore Available Internet Providers in Your Area."
        }
      />

      <div className="section need-for-speed">
        <div className="head">
          <h2 className="sect-heading">
            <span> Game on </span>, stream strong!
          </h2>
          <p className="sect-desc">
            For all the gamers, streamers, and content creators out there,
            remember: when speed matters, don't cut corners.
          </p>
        </div>

        <div className="cards">
          {blogsTemporary.map((item, index) => (
            <BlogCard
              key={index}
              id={index}
              thumbnail={item.thumbnail}
              title={item.title}
              shortDesc={item.shortDesc}
              writerImg={item.writerImg}
              writerName={item.writerName}
              postDate={item.postDate}
            />
          ))}
        </div>
      </div>

      <div className="section fast-and-reliable">
        <div className="head">
          <h2 className="sect-heading">
            <span>Fast and steady:</span> rural internet, redefined!
          </h2>
          <p className="sect-desc">
            Many of our cherished readers reside in the embrace of vast fields
            and serene mountains. Who wouldn't? The exciting update is that
            rural internet is advancing, becoming faster and more dependable
            with each passing year.
          </p>
        </div>

        <div className="cards">
          {blogsTemporary.map((item, index) => (
            <BlogCard
              key={index}
              id={index}
              thumbnail={item.thumbnail}
              title={item.title}
              shortDesc={item.shortDesc}
              writerImg={item.writerImg}
              writerName={item.writerName}
              postDate={item.postDate}
            />
          ))}
        </div>
      </div>

      <div className="section modems-and-routers">
        <div className="head">
          <h2 className="sect-heading">
            Nerding out on <span>modems and routers</span> because your
            connection deserves the best!
          </h2>
          <p className="sect-desc">
            Stay out of the slow lane with our expert guides on upgrading modems
            and Wi-Fi routers..
          </p>
        </div>

        <div className="cards">
          {blogsTemporary.map((item, index) => (
            <BlogCard
              key={index}
              id={index}
              thumbnail={item.thumbnail}
              title={item.title}
              shortDesc={item.shortDesc}
              writerImg={item.writerImg}
              writerName={item.writerName}
              postDate={item.postDate}
            />
          ))}
        </div>
      </div>

      <div className="section top-vpns">
        <div className="head">
          <h2 className="sect-heading">
            Elevate your security game with the <span>best VPNs </span> in town.
          </h2>
          <p className="sect-desc">
            Skip the drama of Russian bots, malware, and government
            surveillance. Dive into our VPN content for a secure online space.
          </p>
        </div>

        <div className="cards">
          {blogsTemporary.map((item, index) => (
            <BlogCard
              key={index}
              id={index}
              thumbnail={item.thumbnail}
              title={item.title}
              shortDesc={item.shortDesc}
              writerImg={item.writerImg}
              writerName={item.writerName}
              postDate={item.postDate}
            />
          ))}
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default Internet;
