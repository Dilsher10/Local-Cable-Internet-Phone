// import React, { useState } from "react";
import "./sports.scss";
import BrandLogoCard from "../components/brand-logo-card/BrandLogoCard";
import Link from "next/link";
import Accordion from "@/app/components/accordion/Accordion";
import BlogCard from "../components/blog-card/BlogCard";
import { blogsTemporary } from "../assets/data/blogsTemporary";
import CTA from "../components/cta-section/CTA";
import league1 from "../assets/images/league-1.png";
import league2 from "../assets/images/league-2.png";
import league3 from "../assets/images/league-3.png";
import league4 from "../assets/images/league-4.png";
import league5 from "../assets/images/league-5.png";
import league6 from "../assets/images/league-6.png";
import league7 from "../assets/images/league-7.png";
import league8 from "../assets/images/league-8.png";
import league9 from "../assets/images/league-9.png";
import league10 from "../assets/images/league-10.png";
import tvservice1 from "../assets/images/tv-service-1.png";
import tvservice2 from "../assets/images/tv-service-2.png";
import tvservice3 from "../assets/images/tv-service-3.png";
import tvservice4 from "../assets/images/tv-service-4.svg";
import tvservice5 from "../assets/images/tv-service-5.png";
import tvservice6 from "../assets/images/tv-service-6.png";
import tvservice7 from "../assets/images/tv-service-7.svg";
import tvservice8 from "../assets/images/tv-service-8.svg";
import tvservice9 from "../assets/images/tv-service-9.svg";
import tvservice10 from "../assets/images/tv-service-10.png";
import tvservice11 from "../assets/images/tv-service-11.png";
import tvservice12 from "../assets/images/tv-service-12.png";

const Sports = () => {
  // const [accordion, setAccordion] = useState(null);

  // let accordionHandler = (i) => {
  //   if (accordion === i) {
  //     return setAccordion(null);
  //   }

  //   setAccordion(i);
  // };

  const streamingProviders = [
    {
      img: league1,
      linkName: "Read How To Watch UFC and Bellator MMA",
      linkPath: "#",
    },
    {
      img: league2,
      linkName: "Read How To Watch the Premier League",
      linkPath: "#",
    },
    {
      img: league3,
      linkName: "Read How To Watch NHL Games",
      linkPath: "#",
    },
    {
      img: league4,
      linkName: "Read How To Watch NFL Games",
      linkPath: "#",
    },
    {
      img: league5,
      linkName: "Read How To Watch NFL Games",
      linkPath: "#",
    },
    {
      img: league6,
      linkName: "Read How To Watch MLB Games",
      linkPath: "#",
    },
    {
      img: league7,
      linkName: "Read How To Watch College Football",
      linkPath: "#",
    },
    {
      img: league8,
      linkName: "Read How To Watch the UEFA Champions League",
      linkPath: "#",
    },
    {
      img: league9,
      linkName: "Read How To Watch MLS Games",
      linkPath: "#",
    },
    {
      img: league10,
      linkName: "Read How To Watch College Basketball",
      linkPath: "#",
    },
  ];

  const streamingProvidersTv = [
    {
      img: tvservice1,
      linkName: "Read directTV review",
      linkPath: "#",
    },
    {
      img: tvservice2,
      linkName: "Read dish review",
      linkPath: "#",
    },
    {
      img: tvservice3,
      linkName: "Read spectrum review",
      linkPath: "#",
    },
    {
      img: tvservice4,
      linkName: "Read xfinity review",
      linkPath: "#",
    },
    {
      img: tvservice5,
      linkName: "Read directv stream review",
      linkPath: "#",
    },
    {
      img: tvservice6,
      linkName: "Read hulu review",
      linkPath: "#",
    },
    {
      img: tvservice7,
      linkName: "Read sling TV review",
      linkPath: "#",
    },
    {
      img: tvservice8,
      linkName: "Read youtube tV review",
      linkPath: "#",
    },
    {
      img: tvservice9,
      linkName: "Read fubo review",
      linkPath: "#",
    },
    {
      img: tvservice10,
      linkName: "Read ESPN+ review",
      linkPath: "#",
    },
    {
      img: tvservice11,
      linkName: "Read Paramount+ review",
      linkPath: "#",
    },
    {
      img: tvservice12,
      linkName: "Read Peacock review",
      linkPath: "#",
    },
  ];

  const accordionData = [
    {
      title: " More sports league viewing guides",
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
    {
      title: "More sports league viewing guides",
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

  const accordionDataTvSoccer = [
    {
      title: " More NFL Guides",
      content: [
        {
          name: "Read Armstrong review",
          path: "#",
        },
        {
          name: "Read Astound Broadband powered by RCN review",
          path: "#",
        },
      ],
    },
    {
      title: " More NFL Guides",
      content: [
        {
          name: "Read Armstrong review",
          path: "#",
        },
        {
          name: "Read Astound Broadband powered by RCN review",
          path: "#",
        },
      ],
    },
    {
      title: " More NFL Guides",
      content: [
        {
          name: "Read Armstrong review",
          path: "#",
        },
        {
          name: "Read Astound Broadband powered by RCN review",
          path: "#",
        },
      ],
    },
    {
      title: " More NFL Guides",
      content: [
        {
          name: "Read Armstrong review",
          path: "#",
        },
        {
          name: "Read Astound Broadband powered by RCN review",
          path: "#",
        },
      ],
    },
    {
      title: " More NFL Guides",
      content: [
        {
          name: "Read Armstrong review",
          path: "#",
        },
        {
          name: "Read Astound Broadband powered by RCN review",
          path: "#",
        },
      ],
    },
    {
      title: " More NFL Guides",
      content: [
        {
          name: "Read Armstrong review",
          path: "#",
        },
        {
          name: "Read Astound Broadband powered by RCN review",
          path: "#",
        },
      ],
    },
    {
      title: " More NFL Guides",
      content: [
        {
          name: "Read Armstrong review",
          path: "#",
        },
        {
          name: "Read Astound Broadband powered by RCN review",
          path: "#",
        },
      ],
    },
  ];
  return (
    <div className="sports">
      <div className="section sports-hero">
        <div className="content">
          <h2>Cabletv.com’s Guide To Live Sports</h2>
          <p>
            How we watch live sports rapidly changes with each season. Cable and
            satellite TV providers are still the go-to services for watching
            most major league sports—especially those involving regional
            blackouts. But like a top college prospect, streaming services are
            on the rise.
            <br />
            We don’t want to leave you hanging on game day. So we research and
            rate the best viewing options for specific leagues and events. Keep
            scrolling for our channel guides, service reviews, and other sporty
            content.
          </p>
        </div>
      </div>

      <div className="section streaming-providers">
        <div className="head">
          <h2 className="sect-heading">
            Learn
            <span> how to watch </span> your favorite leagues
          </h2>
          <p className="sect-desc">
            Our CableTV.com sports crew have you covered with viewing guides
            dedicated to the most popular leagues worldwide. We’re talking NFL,
            Premier League, and everything in between. Our sports content knows
            no bounds!
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

      <div className="section best-streaming-services">
        <div className="head">
          <h2 className="sect-heading">
            Let’s <span> start watching! </span>
          </h2>
          <p className="sect-desc">
            Looking for sports and entertainment to watch this week? You’re sure
            to find something that catches your eye in our What To Watch guides.
          </p>
        </div>

        <div className="cards">
          {blogsTemporary.map((item, index) => (
            <BlogCard
              key={index}
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
        heading={"Recruit your next internet and TV plan before game"}
        desc={
          "Don’t miss the next kickoff, puck drop, or tip-off. Enter your zip code below to find the best internet and TV providers available in your area."
        }
      />

      <div className="section streaming-providers">
        <div className="head">
          <h2 className="sect-heading">
            Score the best TV services
            <span> for sports </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Phasellus dignissim nunc
            pharetra mi. Purus sit eu scelerisque dapibus sapien lorem varius
            sed orci.
          </p>
        </div>

        <div className="cards">
          {streamingProvidersTv.map((item, index) => (
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

      <div className="section important-links">
        <div className="head">
          <h2 className="sect-heading">
            Level up your TV plan while <span>protecting your wallet</span>
          </h2>
          <p className="sect-desc">
            It’s pretty easy to fumble your TV plan and get caught paying more
            than you should. That’s why we’re always researching money-saving
            alternatives for watching live sports.
          </p>
        </div>

        <div className="all-links">
          <Link href={"#"}>Best Streaming Services for Sports </Link>
          <Link href={"#"}>
            How To Get NFL Sunday Ticket Without YouTube TV
          </Link>
          <Link href={"#"}> How To Watch the NFL Without Cable</Link>
          <Link href={"#"}> DIRECTV Sports Packages</Link>
          <Link href={"#"}> Fubo Sports Packages</Link>
          <Link href={"#"}> What Is a Regional Sports Network?</Link>
          <Link href={"#"}> NFL on Paramount+</Link>
          <Link href={"#"}> MLB EXTRA INNINGS vs. MLB.TV</Link>
          <Link href={"#"}> Fubo Channel Lineup</Link>
          <Link href={"#"}> ESPN+ Bundles</Link>
          <Link href={"#"}> How To Get NFL Sunday Ticket Without DIRECTV</Link>
          <Link href={"#"}> How To Watch Soccer on Fubo</Link>
        </div>
      </div>

      <div className="section streaming-providers-guide-for">
        <div className="head">
          <h2 className="sect-heading">
            Guides for <span> every major event </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Phasellus dignissim nunc
            pharetra mi. Purus sit eu scelerisque dapibus sapien lorem varius
            sed orci.
          </p>
        </div>

        <div className="cards">
          {blogsTemporary.map((item, index) => (
            <BlogCard
              key={index}
              thumbnail={item.thumbnail}
              title={item.title}
              shortDesc={item.shortDesc}
              writerImg={item.writerImg}
              writerName={item.writerName}
              postDate={item.postDate}
            />
          ))}
        </div>

        <div className="grid-faq">
          {/* <div className="accordion">
          {accordionDataTvSoccer.map((item, index) => (
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
          {accordionDataTvSoccer.map((item, index) => (
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
      </div>

      <CTA
        heading={"Game day starts here"}
        desc={
          "Enter your zip code below to scope out the best TV and internet providers available for your home turf."
        }
      />

      <div className="section streaming-providers-guide-for-bg-white">
        <div className="head">
          <h2 className="sect-heading">
            Our love for sports <span> extends beyond the pitch </span>
          </h2>
          <p className="sect-desc">
            We have a confession: watching sports isn’t our only obsession. We
            also love movies, gaming, and TV, of course. But sometimes those
            interests cross over with sports.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>see more entertainment </Link>
        </div>
        <div className="cards">
          {blogsTemporary.map((item, index) => (
            <BlogCard
              key={index}
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

export default Sports;
