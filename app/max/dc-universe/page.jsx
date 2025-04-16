// import React, { useState } from "react";
import "./max-dc-universe.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { maxNavLinks } from "../../assets/data/navLinks/maxNavLinks";
import quotationsIcon from "../../assets/images/quotations.svg";
import network from "../../assets/images/network.png";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";
import PackageTable from "../../components/package-table/PackageTable";

export const metadata = {
  title: "DC Universe Shows On Max"
};

const MaxDcUniverse = () => {
  //   const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  let packageTableData = [
    {
      head: ["Package", "Mid-season price", "Channels", "Streams", , "Details"],

      body: [
        {
          content: [
            "1.",
            "Max (with ads)",
            "$174.00/season",
            "100+",
            "Unlimited",
          ],
          linkPath: "#",
        },
        {
          content: ["2.", "Max ", "$194.00/season ", "100+", "Unlimited"],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="max-dc-universe">
      {/* <SubNav links={maxNavLinks} /> */}
      <div className="hidden-cost-hero global-inner-hero">
        <h1>DC Universe Shows On Max</h1>
        <p>
          Our resident TV geeks tell you all about the—POW!—streaming delights
          of the DC Universe hub on Max.
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
          <h4>What is the DC Universe hub on Max?</h4>
          <br />
          <p>
            The DC Universe hub—included with your MaxTM (formerly HBO Max)
            subscription—lets you stream 160+ live-action and animated series
            and movies based on DC comic books. You won’t find every DC film or
            TV adaptation, but there’s enough content to satisfy hardcore DC
            fans.
            <br />
            Now, compelled by Wonder Woman’s golden lasso, we’ll tell you the
            juicy details about the DC Universe in the following guide. We might
            even tell you where to stream the DC Universe movies and shows
            missing from Max
          </p>
        </div>
      </div>

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
          <Link href={"#"}>How to stream DC Universe </Link>
          <Link href={"#"}>DC Universe movies and shows</Link>
          <Link href={"#"}>DC Universe animated movies and shows</Link>
          <Link href={"#"}>DC shows missing from Max</Link>
          <Link href={"#"}>Max plans and pricing</Link>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={network} className="mark" alt="" />
          <h4>How to stream DC Universe </h4>
          <p>
            It’s easy. Just subscribe to Max (if you haven’t already), navigate
            to the Hubs section, select “DC,” and choose an adventure.
            <br />
            But, of course, you’ll need an internet connection. Max suggests a
            minimum of 5 Mbps for HD streaming and at least 50 Mbps to stream in
            4K.
          </p>
        </div>
      </div>

      <div className="section movies-and-show">
        <div className="head">
          <h2 className="sect-heading">
            DC Universe <span> movies and shows </span>
          </h2>
          <p className="sect-desc">
            Like we said, the DC Universe hub doesn’t have every movie and show
            based on DC comics titles. But it’s still quite the library, and all
            future DC titles will land here. Some new Warner Bros.–produced DC
            movies will even premiere on Max (but most will come to the service
            after a 45-day theatrical window).
            <br />
            Let’s break down the current library (and see where to stream some
            of the missing DC shows and movies).
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DC Universe content breakdown</h4>
          <p className="after-heading"></p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th> </th>
                  <th>Live-action films </th>
                  <th>Live-action series </th>
                  <th>Animated films </th>
                  <th>Animated series </th>
                  <th>Documentaries </th>
                  <th>Podcasts </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1.</td>
                  <td>39</td>
                  <td>14</td>
                  <td>94</td>
                  <td>14</td>
                  <td>3</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>DC movies on Max (complete list)</h4>
          <p className="after-heading">
            Below we show you all 39 of the live-action DC Universe movies on
            Max as of December 18, 2023. As you can see, DC fans, it’s a
            quality-rich lineup. You can relive the memories of the original
            Superman quadrilogy, every Batman movie, and the Dark Knight
            trilogy—and also experience the contemporary thrills of the Suicide
            Squad and Harley Quinn movies, Blue Beetle, The Flash, and Zack
            Snyder’s Justice League.
          </p>
          <ul className="channel-list">
            <li>Aquaman</li>
            <li>Batkid Begins</li>
            <li>Batman (1966)</li>
            <li>Batman (1989)</li>
            <li>The Batman (2022)</li>
            <li>Batman and Robin</li>
            <li>Batman Begins</li>
            <li>Batman Forever</li>
            <li>Batman Returns</li>
            <li>Batman vs. Superman: Dawn of Justice (Ultimate Edition)</li>
            <li>
              Birds of Prey and The Fantabulous Emancipation of One Harley Quinn
            </li>
            <li>Black Adam</li>
            <li>Blue Beetle</li>
            <li>Catwoman</li>
            <li>Constantine</li>
            <li>The Dark Knight</li>
            <li>The Dark Knight Rises</li>
            <li>The Flash (2023)</li>
            <li>Green Lantern</li>
            <li>Joker</li>
            <li>Justice League</li>
            <li>Man of Steel</li>
            <li>Necessary Evil: The Super-villains of DC Comics</li>
            <li>Shazam!</li>
            <li>Shazam! Fury of the Gods</li>
            <li>Suicide Squad (2016)</li>
            <li>The Suicide Squad (2021)</li>
            <li>Supergirl (1984)</li>
            <li>Superman the Movie</li>
            <li>Superman II</li>
            <li>Superman III</li>
            <li>Superman IV: The Quest for Peace</li>
            <li>Superman Returns</li>
            <li>V for Vendetta</li>
            <li>Watchmen</li>
            <li>Wonder Woman</li>
            <li>Wonder Woman 1984</li>
            <li>Zack Snyder’s Justice League*</li>
            <li>Zack Snyder’s Justice League: Justice is Gray*</li>
          </ul>
          <br />
          <p className="below-table">* Max Original</p>
        </div>
        <div className="package-table-container channels">
          <h4>DC shows on Max (complete list)</h4>
          <p className="after-heading">
            Are these the best DC shows on the Max DC Universe hub? Well,
            they’re the only live-action DC series on the service. But James
            Gunn’s Peacemaker and Watchmen are phenomenal.
          </p>
          <ul className="channel-list">
            <li>Batwoman</li>
            <li>DMZ*</li>
            <li>Doom Patrol*</li>
            <li>Gotham</li>
            <li>Gotham Knights</li>
            <li>Lois & Clark: The New Adventures of Superman</li>
            <li>Naomi</li>
            <li>The Peacemaker*</li>
            <li>Pennyworth: The Origin of Batman’s Butler*</li>
            <li>Stargirl</li>
            <li>Superman & Lois</li>
            <li>Superpowered: The DC Story</li>
            <li>Titans*</li>
            <li>Watchmen</li>
            <li>Wonder Woman</li>
          </ul>
          <br />
          <p className="below-table">* Max Original</p>
        </div>
      </div>

      <div className="section animation">
        <div className="head">
          <h2 className="sect-heading">
            DC Universe <span> Max animation </span>
          </h2>
          <p className="sect-desc">
            If you’re wondering where to watch DC animated movies and shows,
            Max’s DC Universe is the place. I mean, we’re talking about content
            based on comic books, so it’s no surprise that 108 of the 160+
            current DC Universe titles are animated.
            <br />
            Unfortunately, we can’t list all 94 animated DC movies here, but
            here’s a partial list that includes the entire DC Animated Movie
            Universe and then some. And, following that, a complete list of DC
            animated series on Max.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DC Universe animated movies (partial list)</h4>
          <ul className="channel-list">
            <li>Batman: Assault on Arkham</li>
            <li>Batman: Bad Blood</li>
            <li>Batman: Hush</li>
            <li>Batman: The Long Halloween, Part One</li>
            <li>Batman: The Long Halloween, Part Two</li>
            <li>Batman: Mask of the Phantasm</li>
            <li>Batman: Soul of the Dragon</li>
            <li>Batman: The Doom That Came to Gotham</li>
            <li>Batman Beyond: Return of the Joker</li>
            <li>Batman vs. Robin</li>
            <li>Constantine: City of Demons</li>
            <li>The Death of Superman</li>
            <li>Green Lantern: Beware My Power.</li>
            <li>Injustice</li>
            <li>Justice League: The Flashpoint Paradox</li>
            <li>Justice League: Throne of Atlantis</li>
            <li>Justice League: War World</li>
            <li>Justice League vs. Teen Titans</li>
            <li>Justice League: War</li>
            <li>Justice League Dark</li>
            <li>Justice League Dark: Apokolips War</li>
            <li>Justice Society: World War II</li>
            <li>The League of Superpets</li>
            <li>Legion of Super-Heroes</li>
            <li>The Lego Batman Movie</li>
            <li>Lego Batman the Movie: DC Super Heroes Unite</li>
            <li>Lego The Flash</li>
            <li>Lego Justice League vs. Bizarro League</li>
            <li>Lego Shazam! Magic and Monsters</li>
            <li>Teen Titans Go! vs. Teen Titans</li>
            <li>Vixen</li>
            <li>Reign of the Supermen</li>
            <li>Son of Batman</li>
            <li>Suicide Squad: Hell to Pay</li>
            <li>Superman/Batman: Apocalypse</li>
            <li>Superman: Man of Tomorrow</li>
            <li>Teen Titans: The Judas Contract</li>
            <li>Teen Titans: Trouble in Tokyo</li>
            <li>Teen Titans Go! To the Movies</li>
            <li>Wonder Woman: Bloodlines</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>DC Universe animated series (complete list)</h4>

          <ul className="channel-list">
            <li>The Adventures of Aquaman</li>
            <li>The Batman (2004)</li>
            <li>Batman Beyond</li>
            <li>Batman: The Animated Series</li>
            <li>Batwheels</li>
            <li>Harley Quinn</li>
            <li>Justice League</li>
            <li>Meet the Batwheels</li>
            <li>My Adventures with Superman</li>
            <li>Static Shock</li>
            <li>Superman: The Animated Series</li>
            <li>Watchmen: The Complete Motion Comic</li>
            <li>Wonder Woman</li>
            <li>Young Justice</li>
          </ul>
          <br />
          <p className="below-table">* Max Original</p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>Looks can be DC-ving</h4>
          <p className="after-heading">
            Some DC Universe hub content—like Justice League Dark, Peacemaker,
            The Suicide Squad, and Harley Quinn—is rated TV-MA. To ensure your
            children don’t pick up flowery phrases or a taste for
            ultra-violence, use the Max parental controls (see the “Settings”
            tab) to create age-appropriate profiles for all of your children.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DC shows missing from Max</h4>
          <p className="after-heading">
            Unfortunately, not every DC movie and series is streaming on the Max
            DC Universe hub. We’ve listed the absent content below, along with
            alternate ways to watch everything.
            <br />
            “VOD” (video on demand) means that you can rent or purchase the
            title on Apple TV, Prime Video, Redbox, Roku, Vudu, and other
            services.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DC movies missing from Max</h4>
          <ul>
            <li>The Kitchen (VOD)</li>
            <li>
              The Return of Swamp Thing 1989 (Fubo, Night Flight Plus, Pluto TV,
              Tubi, VOD)
            </li>
            <li>Stardust (Amazon Prime Video, Fubo, MGM+, Paramount+, VOD)</li>
            <li>Superman II: The Richard Donner Cut (VOD)</li>
            <li>Swamp Thing (Freevee, Tubi, VOD)</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>DC shows missing from Max</h4>
          <ul className="channel-list">
            <li>Arrow (Netflix, VOD)</li>
            <li>Black Lightning (Netflix, VOD)</li>
            <li>The Flash 1990 (VOD)</li>
            <li>The Flash 2014 (DIRECTV, Netflix, VOD)</li>
            <li>Krypton (Tubi, VOD)</li>
            <li>DC’s Legends of Tomorrow (Netflix, VOD)</li>
            <li>Smallville (Hulu, VOD)</li>
            <li>Supergirl (Netflix, VOD)</li>
            <li>Swamp Thing animated series*</li>
            <li>Swamp Thing 1990 (Pluto TV, VOD)</li>
            <li>Swamp Thing 2019 (Tubi, VOD)</li>
          </ul>
          <br />
          <p className="below-table">
            * Unavailable to stream as of Mar. 3, 2022
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>Pro tip:</h4>
          <p className="after-heading">
            Wanna get your DC fix while you’re driving? The Max Original podcast
            Batman: The Audio Adventures has 10 episodes waiting to bring action
            to your boring commute.
          </p>
        </div>
      </div>

      <div className="section primetime-channel">
        <div className="head">
          <h2 className="sect-heading">
            Max <span> plans and pricing </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is dC on max worth it?</span>
          </h2>
          <p className="sect-desc">
            The Max DC Universe hub is the official and best place to watch DC
            movies and shows. The Max streaming service already offers amazing
            BANG! for your buck, but the DC Universe adds heaps of value to the
            service with an almost-complete library of live action and animated
            DC shows and movies. If you’re a DC Comics fan, you should
            definitely subscribe.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> get max</Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> How to watch DC Universe on Max </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How do I stream DC
                Universe?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  To stream the DC Universe hub on Max, make sure you have at
                  least a 5 Mbps internet connection for HD streaming (or 50
                  Mbps for 4K streaming), and follow these steps:
                </p>
                <br />
                <ul>
                  <li>Open Max.</li>
                  <li>Navigate to the Hubs section.</li>
                  <li>Select DC Universe.</li>
                  <li>Choose something to watch.</li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" How do I stream DC Universe?"}
            cssClass={"faq-content"}
          >
            <p>
              To stream the DC Universe hub on Max, make sure you have at least
              a 5 Mbps internet connection for HD streaming (or 50 Mbps for 4K
              streaming), and follow these steps:
            </p>
            <br />
            <ul>
              <li>Open Max.</li>
              <li>Navigate to the Hubs section.</li>
              <li>Select DC Universe.</li>
              <li>Choose something to watch.</li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does HBO Max have all DC
                movies?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Unfortunately, the DC Universe hub on Max doesn’t have every
                  DC movie. Here’s a list of DC movies and series that are
                  missing from Max—with notes on where to stream them elsewhere
                  (if possible).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does HBO Max have all DC movies?"}
            cssClass={"faq-content"}
          >
            <p>
              Unfortunately, the DC Universe hub on Max doesn’t have every DC
              movie. Here’s a list of DC movies and series that are missing from
              Max—with notes on where to stream them elsewhere (if possible).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span>Is Batman 2022 be on HBO
                Max?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  The Batman (2022), a Warner Bros. production, is available on
                  Max.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"Is Batman 2022 be on HBO Max?"}
            cssClass={"faq-content"}
          >
            <p>
              The Batman (2022), a Warner Bros. production, is available on Max.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Is Max free if you have
                HBO?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  If you subscribe to HBO through a cable or satellite TV
                  provider or a live TV streaming service, you do have access to
                  Max at no extra cost.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Is Max free if you have HBO?"}
            cssClass={"faq-content"}
          >
            <p>
              If you subscribe to HBO through a cable or satellite TV provider
              or a live TV streaming service, you do have access to Max at no
              extra cost.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Is there a DC Universe
                streaming service?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  The original DC Universe streaming service has been replaced
                  by Max’s DC Universe hub with tons of DC Comics–based movies
                  and shows.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" Is there a DC Universe streaming service?"}
            cssClass={"faq-content"}
          >
            <p>
              The original DC Universe streaming service has been replaced by
              Max’s DC Universe hub with tons of DC Comics–based movies and
              shows.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>Does Max include DC
                Universe?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  Max includes the DC Universe hub, which contains 141 movies
                  and shows based on DC Comics characters.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"Does Max include DC Universe?"}
            cssClass={"faq-content"}
          >
            <p>
              Max includes the DC Universe hub, which contains 141 movies and
              shows based on DC Comics characters.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(7)}>
                <span>{faq === 7 ? "-" : "+"}</span>Can I watch Young Justice on
                Max?
              </h3>

              <div className={`faq-content ${faq === 7 ? "show" : ""}`}>
                <p>
                  You can watch all four seasons of Young Justice on the Max DC
                  Universe hub.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={"Can I watch Young Justice on Max?"}
            cssClass={"faq-content"}
          >
            <p>
              You can watch all four seasons of Young Justice on the Max DC
              Universe hub.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(8)}>
                <span>{faq === 8 ? "-" : "+"}</span>What are the best DC shows
                on Max?
              </h3>

              <div className={`faq-content ${faq === 8 ? "show" : ""}`}>
                <p>
                  Our favorite DC shows on Max are Doom Patrol, Harley Quinn,
                  Peacemaker, Super Friends, the classic Wonder Woman series,
                  and Young Justice.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"8"}
            title={"What are the best DC shows on Max?"}
            cssClass={"faq-content"}
          >
            <p>
              Our favorite DC shows on Max are Doom Patrol, Harley Quinn,
              Peacemaker, Super Friends, the classic Wonder Woman series, and
              Young Justice.
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
          <h4>Methodology:</h4>
          <p>
            We’ve watched hundreds of hours of Max, including dozens of hours of
            content on the service’s DC Universe hub. We took that testing
            experience and compared it to the hundreds of hours we’ve spent with
            other streaming services to determine how valuable Max’s plans,
            pricing, features, and ultimately its DC content compares. For more
            on our process, see our{" "}
            <span className="link">
              <Link href={"#"}>How We Rank </Link> page.
            </span>
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Max review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best TV Service Providers</Link>
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
                <Link href={"#"}>Best Streaming Services</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Streaming Services for Horror Fans</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default MaxDcUniverse;
