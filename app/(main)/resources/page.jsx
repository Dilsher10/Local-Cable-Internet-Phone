import React from "react";
import "./resources.scss";
import CTA from "../../components/cta-section/CTA";
import BlogCard from "../../components/blog-card/BlogCard";
import { blogsTemporary } from "../../assets/data/blogsTemporary";
// import Newsletter from "../../components/newsletter/Newsletter";
import HeroSlider from "@/app/components/hero-slider/HeroSlider";

export const metadata = {
  title: "Best TV Service Providers for 2024: Plans, Prices, and More"
};

const Resources = () => {
  return (
    <div className="resources">
      <HeroSlider/>

      <CTA
        heading={"Find Internet Providers Near You"}
        desc={
          "Enter your zip code below to find out what Internet providers are available in your area."
        }
      />

      <div className="section premiering">
        <div className="head">
          <h2 className="sect-heading">
            This Week's <span>Premieres</span> What's Hitting the Spotligh
          </h2>
          <p className="sect-desc">
            Step into the spotlight with this week's premieres. From gripping
            dramas to uproarious comedies, discover what's making waves in the
            world of entertainment.
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

export default Resources;
