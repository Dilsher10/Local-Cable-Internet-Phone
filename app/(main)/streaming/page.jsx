import "./streaming.scss";
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
import BlogCard from "../../components/blog-card/BlogCard";
import { blogsTemporary } from "../../assets/data/blogsTemporary";
import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";
import ComparisonSlider from "../../components/comparison-slider/ComparisonSlider";
import Image from "next/image";
import quotationsIcon from "../../assets/images/quotations.svg";
import Accordion from "@/app/components/accordion/Accordion";
import Link from "next/link";

export const metadata = {
  title: "Explore the Streaming Cosmos: Your Go-To Resource for Live TV and On-Demand Streaming!"
};

const Streaming = () => {
  // const [accordion, setAccordion] = useState(null);

  // let accordionHandler = (i) => {
  //   if (accordion === i) {
  //     return setAccordion(null);
  //   }

  //   setAccordion(i);
  // };

  const streamingProviders = [
    {
      img: dish,
      linkName: "Read Review",
      linkPath: "#",
    },
    {
      img: directTv,
      linkName: "Read Review",
      linkPath: "#",
    },
    {
      img: spectrum,
      linkName: "Read Review",
      linkPath: "#",
    },
    {
      img: xfinity,
      linkName: "Read Review",
      linkPath: "#",
    },
    {
      img: cox,
      linkName: "Read Review",
      linkPath: "#",
    },
    {
      img: verizon,
      linkName: "Read Review",
      linkPath: "#",
    },
    {
      img: optimum,
      linkName: "Read Review",
      linkPath: "#",
    },
    {
      img: astound,
      linkName: "Read Review",
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

  return (
    <div className="streaming">
      <div className="streaming-hero global-hero">
        <h1>
          Explore the Streaming Cosmos: Your Go-To Resource for Live TV and
          On-Demand Streaming!
        </h1>
        <p>
          At Local Internet Cable Phone, streaming is our not-so-secret passion.
          Affordable, convenient, and endlessly diverse – with the wealth of
          streaming services available, we've got everything any fan could wish
          for.
        </p>

        <div className="form">
          <p>Find Streaming Services providers in your area.</p>
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
      <div className="section endnote endnote-start">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>
            Dive into Streaming TV with Our Expert Reviews and Customer Insights
          </h4>
          <p>
            Tired of cable? Looking to save some money? Explore the world of
            streaming TV with our in-depth reviews of services and devices. We
            go beyond the surface, surveying real customers and unraveling the
            details of this cutting-edge TV tech.
          </p>
        </div>
      </div>

      <div className="section streaming-providers">
        <div className="head">
          <h2 className="sect-heading">
            Unveiling the Best: In-Depth Reviews of Premier On-Demand
            <span> Streaming Services</span>
          </h2>
          <p className="sect-desc">
            Beyond Netflix and Hulu, the streaming landscape offers a world of
            options tailored to every fan. Explore our reviews to discover the
            perfect on-demand streaming service for your unique preferences.
          </p>
        </div>

        <div className="cards">
          {streamingProviders.map((item, index) => (
            <BrandLogoCard
              key={index}
              id={index}
              img={item.img}
              linkName={item.linkName}
              linkPath={item.linkPath}
            />
          ))}
        </div>

        {/* <div className="accordion">
          {accordionData.map((item, index) => (
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(index)}>
                <span>{accordion === index ? "-" : "+"}</span> {item.title}
              </h3>
              <ol
                type="1"
                className={
                  accordion === index ? "accordion-ol show" : "accordion-ol"
                }
              >
                {item.content.map((item, index) => (
                  <li>
                    {" "}
                    <Link href={item.path}>{item.name}</Link>{" "}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div> */}
        {accordionData.map((item, index) => (
          <Accordion
            key={index}
            id={index}
            title={item.title}
            cssClass={"accordion-ol"}
          >
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

      <div className="section live-streaming">
        <div className="head">
          <h2 className="sect-heading">
            Top Picks: Find Your Ideal Live<span> TV Streaming </span> Service
            Now!
          </h2>
          <p className="sect-desc">
            Live TV streaming services serve as genuine and authentic
            alternatives to cable subscriptions. While they may not offer the
            extensive variety found in on-demand streaming platforms and can be
            relatively costly, they become indispensable for those seeking
            real-time access to sports, news, and special events. Our reviews
            are here to guide you in selecting the perfect live TV streaming
            service for your preferences.
          </p>
        </div>

        <div className="cards">
          {streamingProviders.map((item, index) => (
            <BrandLogoCard
              key={index}
              id={index}
              img={item.img}
              linkName={item.linkName}
              linkPath={item.linkPath}
            />
          ))}
        </div>
      </div>

      <div className="section best-streaming-services">
        <div className="head">
          <h2 className="sect-heading">
            <span>Stream Smarter</span> : Our Top Picks and Editor's Choice
            Awards
          </h2>
          <p className="sect-desc">
            Navigating the world of streaming services can be overwhelming with
            a plethora of logos and quirky company names. To simplify things,
            our experts compile curated lists and present Editor's Choice
            awards, ensuring you invest your time wisely in top-notch streaming
            services.
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
        heading={"Need better internet speeds for streaming?"}
        desc={
          "Enter your zip code to check out better speeds or prices available from internet providers in your area."
        }
      />

      <div className="section head-to-head-comparisons">
        <div className="head">
          <h2 className="sect-heading">
            Expert Comparisons for Informed <span> Streaming </span> Decisions
          </h2>
          <p className="sect-desc">
            Finalizing your options? Our experts conduct direct comparisons
            between leading streaming services, empowering you to make a more
            informed decision before committing to a subscription.
          </p>
        </div>

        <ComparisonSlider />
      </div>

      <div className="section lot-of-services">
        <div className="head">
          <h2 className="sect-heading">
            Drowning in Choices? Let Us Navigate the
            <span> Streaming Options </span> for You!
          </h2>
          <p className="sect-desc">
            Navigating the multitude of streaming choices can be overwhelming.
            Let us be your gentle guide, assisting you every step of the way –
            from selecting the right streaming service to mastering the art of
            bundling multiple options.
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

      <div className="section make-or-break">
        <div className="head">
          <h2 className="sect-heading">
            <span>Stream Smart: </span> Choosing Your Device Wisely
          </h2>
          <p className="sect-desc">
            Streaming devices serve as the powerhouse that fuels your streaming
            experience. Whether you opt for the high-performance muscle car of
            streaming, such as the Apple TV 4K, or the practicality of an
            economy hatchback, like the Google Chromecast, the choice is yours.
            It's all about meeting your needs and staying within your budget,
            not about keeping up with trends.
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

      <div className="section trust-us">
        <div className="head">
          <h2 className="sect-heading">
            <span> Real Talk: </span> Unveiling Customer Experiences in the
            Streaming Realm
          </h2>
          <p className="sect-desc">
            We go beyond personal opinions. Dive into real customer experiences
            and understand the nitty-gritty of how the technology performs.
            Explore customer insights and functionality details before taking
            the plunge into the world of streaming.
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

export default Streaming;
