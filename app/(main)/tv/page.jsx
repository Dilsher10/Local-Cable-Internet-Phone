import React from "react";
import "./tv.scss";
import Searchbar from "../../components/searchbar/Searchbar";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import PackageCard from "../../components/package-card/PackageCard";
import BrandLogoCard from "../../components/brand-logo-card/BrandLogoCard";
import dish from "../../assets/images/brand-logos/dish-network.svg";
import directTv from "../../assets/images/brand-logos/directtv.svg";
import spectrum from "../../assets/images/brand-logos/spectrum.svg";
import xfinity from "../../assets/images/brand-logos/xfinity.svg";
import cox from "../../assets/images/brand-logos/cox.svg";
import verizon from "../../assets/images/brand-logos/verizon.svg";
import optimum from "../../assets/images/brand-logos/optimum.svg";
import astound from "../../assets/images/brand-logos/astound.svg";
import netflix from "../../assets/images/brand-logos/netflix.svg";
import youtube from "../../assets/images/brand-logos/youtube.svg";
import hulu from "../../assets/images/brand-logos/hulu.svg";
import philo from "../../assets/images/brand-logos/philo.svg";
import googleFiber from "../../assets/images/brand-logos/google-fiber.svg";
import peacock from "../../assets/images/brand-logos/peacock.svg";
import BlogCard from "../../components/blog-card/BlogCard";
import { blogsTemporary } from "../../assets/data/blogsTemporary";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
// import Newsletter from "../../components/newsletter/Newsletter";
import ComparisonSlider from "../../components/comparison-slider/ComparisonSlider";

export const metadata = {
  title: "Unlocking the World of Television"
};

const Tv = () => {
  const tvProviders = [
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

  const streamingServices = [
    {
      img: netflix,
      linkPath: "#",
    },
    {
      img: youtube,
      linkPath: "#",
    },
    {
      img: hulu,
      linkPath: "#",
    },
    {
      img: philo,
      linkPath: "#",
    },
    {
      img: googleFiber,
      linkPath: "#",
    },
    {
      img: peacock,
      linkPath: "#",
    },
  ];

  return (
    <div className="tv">
      <div className="tv-hero global-hero">
        <h1>Unlocking the World of Television</h1>
        <p>
          Our TV experts dedicate thousands of hours each year to thoroughly
          research and review TV services and products. Why? To link you with
          top-notch brands at unbeatable prices. Plus, we have a genuine passion
          for indulging in plenty of free TV. It's not entirely selfless, to be
          honest. Scroll down to explore a plethora of our valuable content, and
          let's kick off the viewing experience!Our TV experts dedicate
          thousands of hours each year to thoroughly research and review TV
          services and products. Why? To link you with top-notch brands at
          unbeatable prices. Plus, we have a genuine passion for indulging in
          plenty of free TV. It's not entirely selfless, to be honest. Scroll
          down to explore a plethora of our valuable content, and let's kick off
          the viewing experience!
        </p>

        <div className="form">
          <p>Find TV providers in your area.</p>
          <Searchbar />
        </div>
      </div>

      <div className="best-internet-tv-offer">
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

      <div className="section tv-providers">
        <div className="head">
          <h2 className="sect-heading">
            Ease Your <span> TV </span> Hunt: Let Us Navigate the Options for
            You.
          </h2>
          <p className="sect-desc">
            For us, TV isn't just a pastime—it's our passion. Delving into the
            strengths and weaknesses of each major TV provider is our expertise.
            Explore our reviews, make the switch to a superior provider, and
            voila—seamless improvement, just like that!
          </p>
        </div>

        <div className="cards">
          {tvProviders.map((item, index) => (
            <BrandLogoCard
              key={index}
              id={index}
              img={item.img}
              linkPath={item.linkPath}
            />
          ))}
        </div>
      </div>

      <div className="section the-internet-for-deals">
        <div className="head">
          <h2 className="sect-heading">
            Unearthing Savings: Where Our TV Experts Find the{" "}
            <span> Best Deals Online </span>
          </h2>
          <p className="sect-desc">
            Quality TV might seem pricey, but does it have to be? Our content is
            consistently refreshed with the newest pricing and deals, ensuring
            you stay in the loop and on budget.
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

      <div className="section comparing-tv-providers">
        <div className="head">
          <h2 className="sect-heading">
            <span>Comparing TV providers</span> has never been easier
          </h2>
          <p className="sect-desc">
            Labeling a brand as good or bad is one thing. Scrutinizing their
            details side by side gives you a better overview of your options.
          </p>
        </div>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Service Provider</th>
                <th>Max Channel Count</th>
                <th>Tech Type</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1.</td>
                <td>Astond Broadband</td>
                <td>285+</td>
                <td>Cable</td>
                <td>
                  <Link href={"#"}>View Plans</Link>
                </td>
              </tr>

              <tr>
                <td>2.</td>
                <td>Cox</td>
                <td>250+</td>
                <td>Cable</td>
                <td>
                  <Link href={"#"}>View Plans</Link>
                </td>
              </tr>

              <tr>
                <td>3.</td>
                <td>DIRECTTV</td>
                <td>330+</td>
                <td>Satellite</td>
                <td>
                  <Link href={"#"}>View Plans</Link>
                </td>
              </tr>

              <tr>
                <td>4.</td>
                <td>DISH</td>
                <td>290+</td>
                <td>Satellite</td>
                <td>
                  <Link href={"#"}>View Plans</Link>
                </td>
              </tr>

              <tr>
                <td>5.</td>
                <td>Mediacom</td>
                <td>170+</td>
                <td>Cable</td>
                <td>
                  <Link href={"#"}>View Plans</Link>
                </td>
              </tr>

              <tr>
                <td>6.</td>
                <td>Optimum</td>
                <td>420+</td>
                <td>Cable</td>
                <td>
                  <Link href={"#"}>View Plans</Link>
                </td>
              </tr>

              <tr>
                <td>7.</td>
                <td>Spectrum</td>
                <td>125+</td>
                <td>Cable</td>
                <td>
                  <Link href={"#"}>View Plans</Link>
                </td>
              </tr>

              <tr>
                <td>8.</td>
                <td>Sparklight (Cable One)</td>
                <td>Up to 100</td>
                <td>Cable</td>
                <td>
                  <Link href={"#"}>View Plans</Link>
                </td>
              </tr>

              <tr>
                <td>9.</td>
                <td>Verizon Fios</td>
                <td>425+</td>
                <td>Fiber</td>
                <td>
                  <Link href={"#"}>View Plans</Link>
                </td>
              </tr>

              <tr>
                <td>10.</td>
                <td>Xfinity</td>
                <td>260+</td>
                <td>Cable</td>
                <td>
                  <Link href={"#"}>View Plans</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <CTA
        heading={
          "Are you curious about which TV service providers operate in your area?"
        }
        desc={
          "Input your ZIP code to discover the TV providers available in your area."
        }
      />
      <div className="section channel-lineup">
        <div className="head">
          <h2 className="sect-heading">
            Every <span>channel lineup</span> is unique like a fingerprint
          </h2>
          <p className="sect-desc">
            TV providers often wield control over our entertainment options, and
            many plans may not include your preferred channels, shows, and
            movies. That's why understanding your channel lineup before making a
            purchase is crucial.
          </p>
        </div>

        <div className="all-links">
          <Link href="#">Optimum Channel Lineup</Link>
          <Link href="#">Verizon Fios Channel Lineup</Link>
          <Link href="#">Direct Channel Lineup</Link>
          <Link href="#">Sparklight Channel Lineup</Link>
          <Link href="#">Xfinity Channel Lineup</Link>
          <Link href="#">Cox Channel Lineup</Link>
          <Link href="#">Spectrum Channel Lineup</Link>
        </div>
      </div>

      <div className="section head-to-head-comparisons">
        <div className="head">
          <h2 className="sect-heading">
            Side-by-Side <span> Comparisons </span>
          </h2>
          <p className="sect-desc">
            We understand there are limited TV providers in your area. We put
            national brands against their direct rivals, providing
            straightforward comparisons to help you make the best choice for TV
            in your neighborhood.
          </p>
        </div>

        <ComparisonSlider />
      </div>

      <div className="section streaming-services">
        <div className="head">
          <h2 className="sect-heading">
            We Enjoy reviewing <span>streaming services</span>, too
          </h2>
          <p className="sect-desc">
            Crystal Clear Prediction: Streaming is the TV Future. No genius is
            required—many of us opt for live TV streaming over traditional
            cable. Explore our reviews to discover why.
          </p>
        </div>

        <div className="cards">
          {streamingServices.map((item, index) => (
            <BrandLogoCard
              key={index}
              id={index}
              img={item.img}
              linkPath={item.linkPath}
            />
          ))}
        </div>

        <Link href={"#"}>
          learn more
          <span>
            <AiOutlineArrowRight className="right-arrow-icon" />
          </span>
        </Link>
      </div>

      <div className="section latest-tv-gadgets">
        <div className="head">
          <h2 className="sect-heading">
            Upgrade Your View, Amplify Your Experience
          </h2>
          <p className="sect-desc">
            Why compromise with an amazing TV package when you can pair it with
            the perfect equipment? Whether you're looking to upgrade your aging
            plasma TV or bring prime-time entertainment to your patio, we've got
            you covered.
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

export default Tv;
