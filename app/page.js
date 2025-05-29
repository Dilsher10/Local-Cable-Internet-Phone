import "./page.scss";
import Image from "next/image";
import Link from 'next/link';
import React from "react";
import Hero from "./components/hero/Hero";
import ProvidersSection from "./components/providers-section-home/ProvidersSection";
import verizon from "./assets/images/brand-logos/verizon.svg";
import spectrum from "./assets/images/brand-logos/spectrum.svg";
import netflix from "./assets/images/brand-logos/netflix.svg";
import xfinity from "./assets/images/brand-logos/xfinity.svg";
import hulu from "./assets/images/brand-logos/hulu.svg";
import dish from "./assets/images/brand-logos/dish-network.svg";
import InfoCard from "./components/info-card-home/InfoCard";
import { infoCards } from "./assets/data/infoCards";
import PackageCard from "./components/package-card/PackageCard";
import { bestOffersTemporary } from "./assets/data/bestOffersTemporary";
import BlogCard from "./components/blog-card/BlogCard";
import { blogsTemporary } from "./assets/data/blogsTemporary";
import { AiOutlineArrowRight } from "react-icons/ai";
import Newsletter from "./components/newsletter/Newsletter";

export default function Home() {
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

      <ProvidersSection />

      <div className="section best-internet-tv-offer">
        <div className="head">
          <h2 className="sect-heading">
            Optimal Offers for <span> Internet and TV </span> Services
          </h2>
          <p className="sect-desc">
            Discover a realm of savings through our thoughtfully curated
            assortment of premier Internet and TV service offers. We've
            extensively searched the market to present you with exclusive deals
            and packages that provide outstanding value without sacrificing
            quality. Delve into these unparalleled offers to enhance your home
            entertainment and online experiences while maintaining a
            budget-friendly approach.
          </p>
        </div>

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

      <div className="section we-research">
        <div className="head">
          <h2 className="sect-heading">
            We've Got the <span> Research </span> Covered
          </h2>
          <p className="sect-desc">
            Count on us to handle the intricacies of TV and internet knowledge;
            it's our forte. Our team of experts is ready to steer you towards
            the finest services and products available.
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
              buttonIcon={item.buttonIcon}
            />
          ))}
        </div>

        <Link href="#">
          See more comparisons{" "}
          <span>
            <AiOutlineArrowRight className="right-arrow-icon" />
          </span>
        </Link>
      </div>

      <div className="section editors-choice">
        <div className="head">
          <h2 className="sect-heading">
            Peak Performance Unveiled: <span>Editor's Choice </span> Awards for
            the Best Best
          </h2>
          <p className="sect-desc">
            Revealing excellence at its peak, our Editor's Choice Awards
            celebrate the cream of the crop, offering guidance toward
            exceptional choices.
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
              buttonIcon={item.buttonIcon}
            />
          ))}
        </div>

        <Link href="#">
          See more ‘Best Of’ Guide
          <span>
            <AiOutlineArrowRight className="right-arrow-icon" />
          </span>
        </Link>
      </div>

      <div className="section quick-answers">
        <div className="head">
          <h2 className="sect-heading">
            Get <span> Swift Answers </span> with Ease
          </h2>
          <p className="sect-desc">
            Some questions become a breeze when you have the right tool at your
            disposal. Save yourself the effort—we've got the perfect toolkit
            waiting for you
          </p>
        </div>

        <div className="cards">
          {blogsTemporary.map(
            (item, index) =>
              index === 0 ||
              (1 && (
                <BlogCard
                  key={index}
                  id={index}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  shortDesc={item.shortDesc}
                  writerImg={item.writerImg}
                  writerName={item.writerName}
                  postDate={item.postDate}
                  buttonIcon={item.buttonIcon}
                />
              ))
          )}
        </div>
      </div>

      <div className="section start-watching">
        <div className="head">
          <h2 className="sect-heading">
            Lights, Camera, Action: It's Time to Start <span>watching!</span>
          </h2>
          <p className="sect-desc">
            Calling all super fans! Celebrate your passion with our TV guides,
            ensuring you catch all the entertainment you love—from pro football
            and live news to streaming originals.
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
              buttonIcon={item.buttonIcon}
            />
          ))}
        </div>

        <Link href="#">
          What to watch this week?
          <span>
            <AiOutlineArrowRight className="right-arrow-icon" />
          </span>
        </Link>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
}

