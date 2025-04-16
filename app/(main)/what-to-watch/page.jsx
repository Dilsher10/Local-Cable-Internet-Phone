import React from "react";
import "./what-to-watch.scss";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import dish from "../../assets/images/brand-logos/dish-network.svg";
import directTv from "../../assets/images/brand-logos/directtv.svg";
import spectrum from "../../assets/images/brand-logos/spectrum.svg";
import xfinity from "../../assets/images/brand-logos/xfinity.svg";
import BrandLogoCard from "../../components/brand-logo-card/BrandLogoCard";
import { watchCardsTemporary } from "../../assets/data/watchCardsTemporary";
import WatchCards from "../../components/what-to-watch-card/WatchCard";
import Link  from "next/link";
import Image from "next/image";
import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";
import quotationsIcon from "../../assets/images/quotations.svg";

export const metadata = {
  title: "Wondering What's Hot on the Screen?"
};

const WhatToWatch = () => {
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
  ];

  return (
    <div className="what-to-watch">
      <div className="what-to-watch-hero global-hero">
        <h1>Wondering What's Hot on the Screen?</h1>
        <p>
          Our expert picks for the ultimate weekend entertainment – featuring
          top shows, movies, sports, and more on TV.
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
            The WGA writers’ strike is over, which means the late-night talkers
            are back starting tonight: The Late with Stephen Colbert, Late Night
            with Seth Meyers (my two personal faves), Jimmy Kimmel Live, and The
            Tonight Show Starring Jimmy Fallon. (Real Time with Bill Maher and
            Last Week Tonight with John Oliver returned over the weekend, so
            check your Max.)
            <br />
            This week’s What to Watch picks include the new season premieres of
            Loki and Our Flag Means Death, the comedy-slasher flick Totally
            Killer, the returns of Chucky and Quantum Leap, the horror prequel
            Pet Sematary: Bloodlines, and MLB Playoffs action. Bring on October!
          </p>
        </div>
      </div>

      <div className="section streaming-providers">
        <div className="head">
          <h2 className="sect-heading">
            Navigate to Your Preferred <span> Streaming Service </span>
          </h2>
          <p className="sect-desc">
            Explore your favorite content seamlessly by diving into your
            preferred streaming service. Your entertainment, your way.
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

      <div className="section whats-premiering">
        <div className="head">
          <h2 className="sect-heading">
            <span>What's new</span>this week?
          </h2>
          <p className="sect-desc">
            For us TV is our passion, and understanding the strengths and
            weaknesses of each major TV provider fuels our expertise. Explore
            reviews, make the switch to a superior provider – easy as that!
          </p>
        </div>

        <div className="what-to-watch-cards">
          {watchCardsTemporary.map(
            (item, index) =>
              index === 0 && (
                <WatchCards
                  key={index}
                  id={index}
                  img={item.thumbnail}
                  title={item.title}
                  desc={item.desc}
                />
              )
          )}

          <Link href={"#"}>what to watch on peacock</Link>

          {watchCardsTemporary.map(
            (item, index) =>
              index === 1 && (
                <WatchCards
                  key={index}
                  id={index}
                  img={item.thumbnail}
                  title={item.title}
                  desc={item.desc}
                />
              )
          )}

          <Link href={"#"}>best streaming services for sports</Link>
        </div>
      </div>

      <CTA
        heading={"Watch more live sports and get the latest breaking news."}
        desc={
          "Enter your zip code to discover the best TV providers in your area."
        }
      />

      <div className="section watch-on-netflix">
        <div className="head">
          <h2 className="sect-heading">
            What to watch on <span>Netflix</span> this week
          </h2>
          <p className="sect-desc">
            TV isn't just a pastime; it's our heartbeat. Unravel the intricacies
            of each major TV provider with our reviews, and seamlessly
            transition to an upgraded viewing experience
          </p>
        </div>

        <div className="what-to-watch-cards">
          {watchCardsTemporary.map((item, index) => (
            <WatchCards
              key={index}
              id={index}
              img={item.thumbnail}
              title={item.title}
              desc={item.desc}
            />
          ))}

          <Link href={"#"}>what to watch on netflix</Link>
        </div>
      </div>

      <div className="section watch-on-max">
        <div className="head">
          <h2 className="sect-heading">
            What to watch on <span>Max</span> this week
          </h2>
          <p className="sect-desc">
            Discover an exciting lineup on Max this week, offering a captivating
            mix of entertainment. Dive into a world of thrilling shows and
            movies for an unforgettable viewing experience.
          </p>
        </div>

        <div className="what-to-watch-cards">
          {watchCardsTemporary.map((item, index) => (
            <WatchCards
              key={index}
              id={index}
              img={item.thumbnail}
              title={item.title}
              desc={item.desc}
            />
          ))}

          <Link href={"#"}>What to watch on Max</Link>
        </div>
      </div>

      <CTA
        heading={"Is your streaming quality playing hide-and-seek?"}
        desc={"Find a faster internet provider in your vicinity today.."}
      />

      <div className="section watch-on-peacock">
        <div className="head">
          <h2 className="sect-heading">
            What to tune into on<span>Peacock</span> this week
          </h2>
          <p className="sect-desc">
            Discover the must-watch picks on Peacock this week for an
            entertainment-packed experience. Tune in and elevate your viewing
            adventure!
          </p>
        </div>

        <div className="what-to-watch-cards">
          {watchCardsTemporary.map((item, index) => (
            <WatchCards
              key={index}
              id={index}
              img={item.thumbnail}
              title={item.title}
              desc={item.desc}
            />
          ))}

          <Link href={"#"}>what to watch on peacock</Link>
        </div>
      </div>

      <div className="section watch-on-prime-video">
        <div className="head">
          <h2 className="sect-heading">
            What to tune into on <span>Amazon Prime Video</span> this week?
          </h2>
          <p className="sect-desc">
            Explore the top-notch content waiting for you on Amazon Prime Video
            this week. Elevate your entertainment with the must-watch selections
            for an unforgettable viewing experience.
          </p>
        </div>

        <div className="what-to-watch-cards">
          {watchCardsTemporary.map((item, index) => (
            <WatchCards
              key={index}
              id={index}
              img={item.thumbnail}
              title={item.title}
              desc={item.desc}
            />
          ))}

          <Link href={"#"}>what to watch on Amazon Prime Video</Link>
        </div>
      </div>

      <div className="section related-articles">
        <div className="head">
          <h2 className="sect-heading">
            Related <span>articles</span>
          </h2>
          <p className="sect-desc">
            It’s well known that TV providers like to play God with our
            entertainment, and a lot of plans won’t have your favorite channels,
            shows, and movies. That’s why it’s important to know your channel
            lineup before you buy.
          </p>
        </div>

        <div className="all-links">
          <Link href={"#"}>What to Watch on Max</Link>
          <Link href={"#"}>Movies to Watch on Disney+</Link>
          <Link href={"#"}>What to Watch on Paramount+</Link>
          <Link href={"#"}>What to Watch on Hulu</Link>
          <Link href={"#"}>What to Watch on Paramount+</Link>
          <Link href={"#"}>What to Watch on Apple TV+</Link>
          <Link href={"#"}>What to Watch on Amazon Prime Video</Link>
          <Link href={"#"}>What to Watch on Sling TV</Link>
          <Link href={"#"}>What to Watch on Netflix</Link>
        </div>
      </div>

      <div className="section w2w-wildcards">
        <div className="head">
          <h2 className="sect-heading">
            Weekly <span> Wonders </span>
          </h2>
          <p className="sect-desc">
            Dive into the best of the week with our top picks – simple joys,
            endless fun!
          </p>
        </div>

        <div className="what-to-watch-cards">
          {watchCardsTemporary.map((item, index) => (
            <WatchCards
              key={index}
              id={index}
              img={item.thumbnail}
              title={item.title}
              desc={item.desc}
            />
          ))}

          <Link href={"#"}>Find out more</Link>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default WhatToWatch;                   
