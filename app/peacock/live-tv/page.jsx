// import React, { useState } from "react";
import "./peacock-live-tv.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { peacockNavLinks } from "../../assets/data/navLinks/peacockNavLinks";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
// import Newsletter from "../../components/newsletter/Newsletter";
import CTA from "../../components/cta-section/CTA";
import gtterwy from "../../assets/images/gtterwy.png";
import network from "../../assets/images/network.png";

export const metadata = {
  title: "Peacock Live TV"
};

const PeacockLiveTv = () => {
//   const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="peacock-live-tv">
      {/* <SubNav links={peacockNavLinks} /> */}
      <div className="hidden-cost-hero global-inner-hero">
        <h1>Peacock Live TV</h1>
        <p>
          Peacock is an on-demand service that also streams 75+ live channels of
          TV shows, movies, news, and sports—not to mention a 24/7 golf channel.
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
          <br />
          <p>
            Peacock is primarily an on-demand streaming service with thousands
            of TV shows and movies at your fingertips, and it also streams live
            TV. Well, sort of: Unlike YouTube TV or Sling TV, Peacock has only
            one live-right-now channel—your local NBC affiliate. Otherwise,
            Peacock has 75+ FAST channels airing 24/7 loops of movies and shows
            from the streaming service’s library. Ever used Pluto TV or Sling
            Free? It’s like that.
          </p>
        </div>
      </div>

      <CTA
        heading={"You’ll need a fast internet plan to stream all that TV"}
        desc={
          "Wanna speed up your download speeds? Enter your zip code below to see top internet providers in your area."
        }
      />

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
          <Link href={"#"}> Peacock entertainment channels </Link>
          <Link href={"#"}> Peacock news and talk channels </Link>
          <Link href={"#"}> Peacock reality TV channels </Link>
          <Link href={"#"}> Peacock sports channels </Link>
          <Link href={"#"}> Peacock crime documentary channels </Link>
          <Link href={"#"}> Peacock Spanish channels </Link>
        </div>
      </div>

      <div className="section gtterwy">
        <div className="head">
          <h2 className="sect-heading">
            Loren Ipsum <span> gtterwy</span>
          </h2>
          <p className="sect-desc">
            Peacock does carry a handful of actual live news and sports channels
            in its lineup, like NBC News Now, NFL Channel, NBC Golf Pass, NBC
            Sports, Matchday Live, and WWE. Like Paramount+, which live streams
            local CBS channels in most areas, Peacock carries
            local NBC affiliates live (in most areas). It also has channels
            dedicated to rebroadcasting newscasts from NBC channels in Boston,
            Chicago, Los Angeles, New York, Philadelphia, and South Florida.{" "}
            <br />
            Live sports events on Peacock’s channels include NBC Sunday Night
            Football, Premier League soccer matches, and WWE Network shows and
            pay-per-view events. Peacock also live streams Winter and Summer
            Olympics events not broadcast by NBC. <br />
            Most of Peacock’s other channels are self-explanatory, like Law &
            Order (episodes from the L&O universe) and SNL Vault (Saturday Night
            Live sketches and videos). Others, like Out of This World (hours
            of Ancient Aliens) are a little less so.
          </p>
        </div>

        <div className="all-links">
          <Link href={"#"}> view peacock plans </Link>
        </div>
        <Image src={gtterwy} alt="gtterwy" />
        <br />
        <p className="below-table">
          The Peacock live TV guide as viewed on a Windows 10 laptop.
        </p>
      </div>

      <div className="section live-tv-channels">
        <div className="head">
          <h2 className="sect-heading">
            Peacock <span> Live TV Channels</span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4> Peacock entertainment channels</h4>
          <br />
          <ul className="channel-list">
            <li>Black Cinema</li>
            <li>Black-Led Comedy</li>
            <li>Black Spotlight</li>
            <li>Disability on Screen</li>
            <li>Great Finds</li>
            <li>Law & Order</li>
            <li>LOL! Network</li>
            <li>Hallmark Channel</li>
            <li>Hallmark Drama</li>
            <li>Hallmark Movies & Mysteries</li>
            <li>Happy Horror Days</li>
            <li>Modern Family</li>
            <li>Monk</li>
            <li>One Chicago</li>
            <li>The Office</li>
            <li>Peacock Picks</li>
            <li>Rotten Tomatoes Movie Channel</li>
            <li>SNL Vault</li>
            <li>Sitcom Staples</li>
            <li>That ’70s Show</li>
            <li>Watch This Week</li>
            <li>The Witching Hour</li>
            <li>Women-Led Favorites</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4> Peacock news and talk channels</h4>
          <br />
          <ul className="channel-list">
            <li>Dateline 24/7</li>
            <li>Morning Joe</li>
            <li>NBC Boston News</li>
            <li>NBC Chicago News</li>
            <li>NBC Los Angeles</li>
            <li>NBC News Now</li>
            <li>NBC New York News</li>
            <li>NBC Philadelphia News</li>
            <li>NBC South Florida News</li>
            <li>Sky News</li>
            <li>Squawk Box</li>
            <li>Today All Day</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <Image src={network} alt="network" className="network"/>
          <h4> Looking for live streaming TV?</h4>
          <br />
          <p>
            Check out our up-to-date guide to the Best Live TV Streaming
            Services.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4> Peacock sports channels</h4>
          <br />
          <ul className="channel-list">
            <li>NBC GolfPass</li>
            <li>NBC Sports</li>
            <li>NFL Channel</li>
            <li>Olympic Spotlight (during Olympics)</li>
            <li>Matchday Live (Premier League TV)</li>
            <li>WWE</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4> Peacock reality TV channels</h4>
          <br />
          <ul className="channel-list">
            <li>Below Deck</li>
            <li>Chrisley</li>
            <li>Circle Country</li>
            <li>Destination Death</li>
            <li>Great Finds</li>
            <li>Hell’s Kitchen</li>
            <li>Law & Crime Network</li>
            <li>Million Dollar Listing</li>
            <li>NBC Home</li>
            <li>Nosey</li>
            <li>Peacock Reality</li>
            <li>Race Against Time</li>
            <li>Real Housewives</li>
            <li>REELZ on Patrol LIVE</li>
            <li>This Old House</li>
            <li>Top Chef</li>
            <li>Top Gear</li>
            <li>Unsolved Mysteries</li>
            <li>Vanderpump Rules</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4> Peacock crime documentary channels</h4>
          <br />
          <ul className="channel-list">
            <li>American Greed</li>
            <li>Chrisley</li>
            <li>Dateline 24/7</li>
            <li>Destination Death</li>
            <li>Family Crimes</li>
            <li>Holiday Crime Time</li>
            <li>Law & Crime Network</li>
            <li>Race Against Crime</li>
            <li>REELZ on Patrol LIVE</li>
            <li>Snapped</li>
            <li>True Crime</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4> Peacock Spanish channels</h4>
          <br />
          <ul className="channel-list">
            <li>Caso Cerrado</li>
            <li>Peacock Latino</li>
            <li>Telemundo al Día</li>
          </ul>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>Related articles </h4>

          <ul>
            <li><span className="link"><Link href={"/"}>Peacock Originals</Link></span></li>
            <li><span className="link"><Link href={"/"}>Peacock Review</Link></span></li>
            <li><span className="link"><Link href={"/"}>How to Watch Peacock with Xfinity</Link></span></li>
          </ul>
        </div>
      </div>

{/* <Newsletter /> */}
    </div>
  );
};

export default PeacockLiveTv;
