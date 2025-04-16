// import React, { useState } from "react";
import "./youtubetv-what-to-watch.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { youtubetvNavLinks } from "../../assets/data/navLinks/youtubetvNavLinks";
import network from "../../assets/images/network.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "What To Watch On YouTube TV"
};

const YoutubeTvWhatToWatch = () => {
  //   const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };

  return (
    <div className="youtubetv-what-to-watch">
      {/* <SubNav links={youtubetvNavLinks} /> */}
      <div className="hidden-cost-hero global-inner-hero">
        <h1>What To Watch On YouTube TV</h1>
        <p>
          YouTube TV carries over 100 channels, including Paramount Network,
          Hallmark Channel, and HGTV. Here’s what we’re watching.
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
          <Image src={network} alt="quotations" />
          <h4>New on YouTube TV in December 2023</h4>
          <ul>
            <li>A Not So Royal Christmas (December 2, Hallmark Channel)</li>
            <li>NBA In-Season Tournament Championship (December 9, ABC)</li>
            <li>
              Season of Light: Christmas with the Tabernacle Choir (December 12,
              PBS)
            </li>
            <li>Sealed with a List (December 16, Hallmark Channel)</li>
            <li>Premier League on Boxing Day (December 26, USA Network)</li>
            <li>
              Dick Clark’s New Year’s Rockin’ Eve with Ryan Seacrest (December
              31, ABC)
            </li>
          </ul>
          <p>
            YouTube TV is CableTV.com’s editorial pick for best overall live TV
            streaming service thanks to its easy interface, unlimited cloud DVR
            storage, and, most of all, its wide variety of channels (over 100 in
            some markets). The service features a fat lineup of entertainment,
            sports, news, kids, and local channels to satisfy cord-cutters who
            are ditching cable, and it’s still (relatively) inexpensive.
            <br />
            Here are six of our go-to channels on YouTube TV.
          </p>
        </div>
      </div>

      <StickyHeader />

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
          <Link href={"#"}>Paramount Network </Link>
          <Link href={"#"}>Hallmark Channel </Link>
          <Link href={"#"}>Syfy </Link>
          <Link href={"#"}>Comedy Central </Link>
          <Link href={"#"}>Nickelodeon/Nick at Nite </Link>
          <Link href={"#"}>HGTV </Link>
        </div>
      </div>

      <div className="section blank-text-grey">
        <div className="head">
          <h2 className="sect-heading">
            <span> Paramount </span> Network
          </h2>
          <p className="sect-desc">
            Heard of Yellowstone? The most popular drama on basic cable and
            satellite is a Paramount Network original, as is one of the
            longest-running reality TV guilty pleasures, the extra-shouty Bar
            Rescue. The rest of the Paramount Network schedule consists of
            action and comedy movies, and blocks of TV hits like NCIS and Two
            and a Half Men. But really, it’s all about that Yellowstone.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Similar channels to Paramount Network on YouTube TV</h4>
          <br />
          <ul>
            <li>Freeform</li>
            <li>IFC</li>
            <li>MTV</li>
            <li>MTV2</li>
            <li>TBS</li>
            <li>TNT</li>
          </ul>
        </div>
      </div>

      <div className="section blank-text-white">
        <div className="head">
          <h2 className="sect-heading">
            <span> Hallmark </span> Channel
          </h2>
          <p className="sect-desc">
            It’s the undisputed champion of Christmas movies, but Hallmark
            Channel delivers the feel-good fuzzies year-round. From classics
            like Cheers, Frasier, Golden Girls, and I Love Lucy to modern fare
            like The Good Witch, When Calls the Heart, and Ride, Hallmark
            Channel is as comfy as a warm blanket and a cup of tea (or something
            stronger, if you prefer).
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Similar channels to Hallmark Channel on YouTube TV</h4>
          <br />
          <ul>
            <li>Hallmark Drama</li>
            <li>Hallmark Movies & Mysteries</li>
            <li>Animal Planet</li>
            <li>Bravo</li>
            <li>E!</li>
            <li>TCM</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <Image src={network} className="mark" alt="" />
          <h4>Sports channels on YouTube TV</h4>
          <br />
          <p>
            YouTube TV features a ballin’ array of sports channels, including
            ESPN, ESPN2, FS1, FS2, CBS Sports Network, NFL Network, NBA TV, and
            Big Ten Network. You can get even more with the Sports Plus add-on
            package, which includes FOX Soccer Plus, NFL RedZone, beIN SPORTS,
            and more.
          </p>
        </div>
      </div>

      <div className="section blank-text-grey">
        <div className="head">
          <h2 className="sect-heading">
            <span> Syfy </span> channel
          </h2>
          <p className="sect-desc">
            Syfy is home to three of our favorite current sci-fi series:
            Resident Alien (Alan Tudyk as a space invader living hilariously
            amongst us), Reginald the Vampire (an underdog creature-of-the-night
            comedy), and The Ark (a lost-in-space melodrama from Dean Devlin).
            Syfy also features round-the-clock action flicks and blocks of
            neo-vintage TV shows like Charmed, Warehouse 13, and The Twilight
            Zone (including the recent Jordan Peele revival).
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Similar channels to Syfy on YouTube TV</h4>
          <br />
          <ul>
            <li>Cartoon Network/Adult Swim</li>
            <li>Comet</li>
            <li>FX</li>
            <li>FXX</li>
            <li>Sundance TV</li>
            <li>USA Network</li>
          </ul>
        </div>
      </div>

      <div className="section blank-text-white">
        <div className="head">
          <h2 className="sect-heading">
            <span> Comedy Central </span> Channel
          </h2>
          <p className="sect-desc">
            Seinfeld, The Office, Parks and Recreation, South Park, and Brooklyn
            Nine-Nine are just a few of the shows that you’ll find every day on
            Comedy Central. TV’s hub for all things funny isn’t just about those
            classic series; CC also produces new standup specials, movies,
            originals like Awkwafina Is Nora From Queens and Digman!, and the
            news program world leaders swear by, The Daily Show.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4> Similar channels to Comedy Central on YouTube TV</h4>
          <br />
          <ul>
            <li>CMT</li>
            <li>Comedy.tv</li>
            <li>Cozi TV</li>
            <li>My TV</li>
            <li>truTV</li>
            <li>TV Land</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <Image src={network} className="mark" alt="" />
          <h4>News channels on YouTube TV</h4>
          <br />
          <p>
            If you want to stay up to speed on current events (and opinions),
            YouTube TV has plenty of news channels to choose from. Besides
            old-guard media giants like CNN, MSNC, Fox News, CNBC, and BBC World
            News, YouTube TV also carries newer upstarts like Cheddar News, News
            Nation, and The Young Turks, as well as The Weather Channel and Fox
            Weather.
          </p>
        </div>
      </div>

      <div className="section blank-text-grey">
        <div className="head">
          <h2 className="sect-heading">
            <span> Nickelodeon</span>/Nick at Nite
          </h2>
          <p className="sect-desc">
            Those of us who grew up on Clarissa Explains It All, Salute Your
            Shorts, and Rocko’s Modern Life are glad to see that Nickelodeon is
            still cranking out quality kids’ shows for the next generations.
            Some of those are new takes on classics like SpongeBob SquarePants,
            Rugrats, and PAW Patrol, but newer entries like The Really Loud
            House, Star Trek: Prodigy, and Monster High are also pretty great.
            And what awards season would be complete without the Nickelodeon
            Kids’ Choice Awards?
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Similar channels to Nickelodeon on YouTube TV</h4>
          <br />
          <ul>
            <li>Disney Channel</li>
            <li>Disney Junior</li>
            <li>Disney XD</li>
            <li>Nicktoons</li>
            <li>PBS Kids</li>
            <li>Universal Kids</li>
          </ul>
        </div>
      </div>

      <div className="section blank-text-white">
        <div className="head">
          <h2 className="sect-heading">
            <span>HGTV </span> channel
          </h2>
          <p className="sect-desc">
            When it comes to sledgehammered partitions and renovations on
            impossible deadlines, you can’t beat HGTV. House Hunters, Love It or
            List It, Home Town, Property Brothers: Forever Home, No Demo Reno,
            Good Bones, My Lottery Dream House—there are so many binge-watchable
            home-makeover shows on HGTV that you’re probably (understandably)
            wondering why any of them haven’t fixed up your house yet.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Similar channels to HGTV on YouTube TV</h4>
          <br />
          <ul>
            <li>Bounce</li>
            <li>Discovery</li>
            <li>Food Network</li>
            <li>Tastemade</li>
            <li>TLC</li>
            <li>Travel Channel</li>
          </ul>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> What to watch on YouTube TV </span> FAQ
          </h2>

          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>

        <div className="faq-wrapper">
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(1)}>
                <span>{faq === 1 ? "-" : "+"}</span> Does YouTube TV carry local
                channels?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Yes, YouTube TV carries local ABC, CBS, FOX, NBC, PBS, The CW,
                  Telemundo, Univision, and UniMás channels in most areas.
                  YouTube TV and DIRECTV STREAM are the only live TV streaming
                  services with PBS stations.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Does YouTube TV carry local channels?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, YouTube TV carries local ABC, CBS, FOX, NBC, PBS, The CW,
              Telemundo, Univision, and UniMás channels in most areas. YouTube
              TV and DIRECTV STREAM are the only live TV streaming services with
              PBS stations.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does YouTube TV carry RSNs?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  YouTube TV carries regional sports networks (RSNs) in select
                  markets. But if you want better RSN coverage, Fubo and DIRECTV
                  STREAM are the go-to live TV streaming choices for in-market
                  sports fans.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does YouTube TV carry RSNs?"}
            cssClass={"faq-content"}
          >
            <p>
              YouTube TV carries regional sports networks (RSNs) in select
              markets. But if you want better RSN coverage, Fubo and DIRECTV
              STREAM are the go-to live TV streaming choices for in-market
              sports fans.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Is YouTube TV cheaper than
                cable?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Even though it raised its monthly subscription price in 2023,
                  YouTube TV is still less expensive than most cable and
                  satellite TV plans with comparable channel lineups and
                  features. You’ll only experience cable-like prices with
                  YouTube TV if you sign up for several add-ons like NFL Sunday
                  Ticket, Max, and SHOWTIME.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Is YouTube TV cheaper than cable?"}
            cssClass={"faq-content"}
          >
            <p>
              Even though it raised its monthly subscription price in 2023,
              YouTube TV is still less expensive than most cable and satellite
              TV plans with comparable channel lineups and features. You’ll only
              experience cable-like prices with YouTube TV if you sign up for
              several add-ons like NFL Sunday Ticket, Max, and SHOWTIME.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How much is Youtube TV?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  YouTube TV costs $72.99/mo. For more detailed info on plans,
                  pricing, and bundles, check out our YouTube TV review.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" How much is Youtube TV?"}
            cssClass={"faq-content"}
          >
            <p>
              YouTube TV costs $72.99/mo. For more detailed info on plans,
              pricing, and bundles, check out our YouTube TV review.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote page-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />

          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>YouTube TV Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Live TV Streaming Services</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Streaming Services for Sports</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Philo vs. YouTube TV</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default YoutubeTvWhatToWatch;
