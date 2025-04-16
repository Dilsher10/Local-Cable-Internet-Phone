// import React, { useState } from "react";
import "./hulu-what-to-watch.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { huluNavLinks } from "../../assets/data/navLinks/huluNavLinks";
import quotationIcon from "../../assets/images/quotations.svg";
import netwrok from "../../assets/images/network.png";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import Link from "next/link";
import Image from "next/image";
import e1 from "../../assets/images/e-1.jpg";
import e2 from "../../assets/images/e-2.jpg";
import e3 from "../../assets/images/e-3.jpg";
import e4 from "../../assets/images/e-4.jpg";
import e5 from "../../assets/images/e-5.jpg";
import e6 from "../../assets/images/e-6.jpg";
import e7 from "../../assets/images/e-7.jpg";
import e8 from "../../assets/images/e-8.jpg";
import e9 from "../../assets/images/e-9.jpg";
import e10 from "../../assets/images/e-10.jpg";

import CTA from "../../components/cta-section/CTA";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "What To Watch On Hulu"
};

const HuluWhatToWatch = () => {
//   const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };

  return (
    <div className="hulu-what-to-watch">
      {/* <SubNav links={huluNavLinks} /> */}
      <div className="hidden-cost-hero global-inner-hero">
        <h1>What To Watch On Hulu December 2023</h1>
        <p>
          Hulu has thousands of TV shows and movies—we’ve picked a few hundred
          of our favorites.
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
          <Image src={netwrok} alt="quotations" />
          <p>
            Netflix is known for its original content, and Prime Video is all
            about sheer quantity of movies and TV shows—Hulu falls somewhere in
            the middle. With thousands of hours of acquired content and a
            respectable slate of original productions, Hulu has—excuse the
            cliché—something for everyone.
            <br />
            Hulu also has the advantage of being the go-to service for next-day
            streaming of broadcast and cable shows from FOX, ABC, Freeform, and
            more. Add the exclusive FX content hub and live TV streaming (Hulu +
            Live TV), and you have even more viewing options with Hulu.
            <br />
            So, without further adieu, here are some of our favorite TV shows
            and movies currently available on Hulu.
          </p>
          <br />
          <h4>New on Hulu in December 2023</h4>
          <br />
          <ul>
            <li>The Jinglebell Jubilee (Movie premiere, December 3)</li>
            <li>TMZ’s Merry Elfin’ Christmas (Special, December 6)</li>
            <li>Culprits (New miniseries, December 8)</li>
            <li>Science Fair: The Series (New series, December 10)</li>
            <li>
              MasterChef Junior: Home for the Holidays (Special, December 11)
            </li>
            <li>The Masked Singer Holiday Sing-Along (Special, December 13)</li>
            <li>Celebrity Family Feud (Special, December 14)</li>
            <li>CMA Country Christmas (Special, December 14)</li>
            <li>Archer: Into the Cold (Season 14 finale, December 18)</li>
            <li>
              Lego Masters: Celebrity Holiday Bricktacular (Special, December
              19)
            </li>
            <li>2023 iHeartRadio Jingle Ball (Special, December 22)</li>
            <li>Letterkenny (Season 12 premiere, December 26)</li>
          </ul>
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
          <Link href={"#"}>Recommended TV shows on Hulu </Link>
          <Link href={"#"}>Recommended movies on Hulu </Link>
          <Link href={"#"}>More recommended shows on Hulu (by genre) </Link>
        </div>
      </div>

      <div className="section important-post">
        <div className="head">
          <h2 className="sect-heading">
            Best shows <span> on Hulu</span>
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
          <Link href={"#"}>view hulu plans </Link>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={e1} alt="" />
          </div>
          <div className="inner-content">
            <h4>What We Do in the Shadows | Comedy, supernatural</h4>
            <p>
              FX series What We Do in the Shadows (based on the 2014 movie) is
              the smartest comedy about the dumbest supernatural beings since
              Twilight. European vampires Laszlo (Matt Berry), Nadja (Natasia
              Demetriou), and Nandor (Kayvan Novak) have lived for centuries,
              but have apparently learned nothing. Which makes them more
              convincing as “human” Staten Island roommates. Well, slightly more
              convincing.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={e2} alt="" />
          </div>
          <div className="inner-content">
            <h4>Only Murders in the Building | Comedy, mystery</h4>
            <p>
              Banjo enthusiast Steve Martin’s streaming debut Only Murders in
              the Building teams him with longtime partner Martin Short and
              Selena Gomez as an unlikely, true-crime-obsessed trio
              investigating a suspicious death in their Manhattan apartment
              building. Naturally, they also record a podcast about their
              investigation—why let a perfectly good murder go to waste?
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={e3} alt="" />
          </div>
          <div className="inner-content">
            <h4>The Bear | Drama, comedy</h4>
            <p>
              When his brother dies, New York fine-dining chef “Carmy” Berzatto
              (Jeremy Allen White, Shameless) returns to Chicago to run his
              family’s less-than-fine sandwich shop. Possibly the most
              accurately chaotic kitchen depiction ever, The Bear is a
              comedic/dramatic look at restaurant (mis)management, familial
              relations, and “effing Chicago.” Five Michelin stars.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={e4} alt="" />
          </div>
          <div className="inner-content">
            <h4>Reservation Dogs | Comedy</h4>
            <p>
              Reservation Dogs follows four Native American teens desperate to
              get out of their Oklahoma reservation and travel to the mythical
              land of California—and they’re not above some criminal mischief to
              fund their escape. The show has made headlines for its Indigenous
              representation in front of and behind the cameras but, most
              importantly, Reservation Dogs is just funny as hell.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={e5} alt="" />
          </div>
          <div className="inner-content">
            <h4>Killing Eve | Action, drama</h4>
            <p>
              A cat-and-mouse crime thriller that’s far more than that, Killing
              Eve pits American MI5 agent Eve (Sandra Oh) against Russian serial
              assassin Villanelle (Jodie Comer), who always slips away—until she
              doesn’t. A mutual obsession develops between the put-upon agency
              paper-pusher and the sleek (if a little off) fashionista killer,
              spinning the story off into wildly unexpected directions.
            </p>
          </div>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={quotationIcon} className="mark" alt="" />
          <h4>More recommended TV shows on Hulu </h4>
          <ul className="channel-list">
            <li>Atlanta</li>
            <li>Dave</li>
            <li>Devs</li>
            <li>Dollface</li>
            <li>The Great</li>
            <li>The Handmaid’s Tale</li>
            <li>Letterkenny</li>
            <li>Lodge 49</li>
            <li>Solar Opposites</li>
            <li>Woke</li>
          </ul>
        </div>
      </div>

      <CTA
        heading={"Shows and movies stuck buffering?"}
        desc={
          "Could be your internet connection. Enter your zip code to find a better internet plan in your area."
        }
      />

      <div className="section important-post">
        <div className="head">
          <h2 className="sect-heading">
            Best Movies <span> on Hulu</span>
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
          <Link href={"#"}>view hulu plans </Link>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={e6} alt="" />
          </div>
          <div className="inner-content">
            <h4>Palm Springs | Comedy, sci-fi</h4>
            <p>
              A Groundhog Day-inspired tale, Palm Springs finds wedding
              attendees Nyles (Andy Samberg) and Sarah (Cristin Milioti) caught
              in a perpetual time loop—plus a mystery man with murderous intent.
              Nyles and Sarah’s endless attempts to break out of the loop cycle
              hilariously through resignation, love, disgust, and back again,
              never quite landing where you expect it to.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={e7} alt="" />
          </div>
          <div className="inner-content">
            <h4>Prey | Action, sci-fi</h4>
            <p>
              After all the movies, crossovers, comics, and videogames of the
              Predator franchise, all that was left to explore was a prequel (or
              maybe a breakfast cereal). Prey goes to the pre-extreme, 300 years
              ago, pitting young Comanche warrior woman Naru (Amber Midthunder)
              against the aggro alien on the Great Plains of America. Even
              though it never played in theaters in 2022, Prey still feels like
              a big-screen blockbuster that’s easily the best Predator
              installment since the original.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={e8} alt="" />
          </div>
          <div className="inner-content">
            <h4>Spin Me Round | Comedy, drama</h4>
            <p>
              When SoCal Italian chain restaurant manager Amber (Alison Brie) is
              picked to attend a corporate retreat in Tuscany, she thinks she’s
              getting her own Eat Pray Love romantic vacation. It begins like a
              standard rom-com but Spin Me Round soon evolves into a
              strange-but-smoldering triangle between Amber, the chain’s
              charming founder (Alessandro Nivola), and his capricious assistant
              (Aubrey Plaza). It’s a wild, unpredictable ride, but still
              engaging and funny.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={e9} alt="" />
          </div>
          <div className="inner-content">
            <h4>The Princess | Action, fantasy</h4>
            <p>
              When a princess (Joey King) runs away from her arranged marriage
              to royal Julius (Dominic Cooper), her family is taken prisoner and
              she’s locked away in a castle tower. Standard medieval stuff . . .
              until The Princess suddenly becomes Die Hard in a corset. King
              kicks visceral ass and slices her way through numerous goons in
              this unexpected feminist action flick.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={e10} alt="" />
          </div>
          <div className="inner-content">
            <h4>Boss Level | Action, sci-fi</h4>
            <p>
              A former special forces agent (Frank Grillo) is forced to live
              (and die) the same day over and over again, evading a flamboyant
              gang of assassins and solving the mystery of his vicious time
              circle (hint: Mel Gibson in villain mode is behind it). On the
              surface, Boss Level is Happy Death Day meets Crank in a video
              game, but it’s also slyly funny and occasionally even sweet.
            </p>
          </div>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={quotationIcon} className="mark" alt="" />
          <h4>More recommended movies on Hulu </h4>
          <ul className="channel-list">
            <li>Batman Begins</li>
            <li>Bladerunner 2049</li>
            <li>Deep Water</li>
            <li>Fight Club</li>
            <li>I, Tonya</li>
            <li>The Night House</li>
            <li>Parasite</li>
            <li>Scarface</li>
            <li>Spider-Man</li>
            <li>Summer of Soul</li>
          </ul>
        </div>
      </div>

      <div className="section features">
        <div className="head">
          <h2 className="sect-heading">
            More recommended shows on Hulu <span> (by genre) </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus.
          </p>
        </div>

        <div className="grid-channel">
          <div className="package-table-container channels">
            <h4> Best FX shows on Hulu</h4>
            <p className="after-heading"> </p>
            <ul className="channel-list">
              <li>American Horror Story</li>
              <li>Archer</li>
              <li>Better Things</li>
              <li>Breeders</li>
              <li>It’s Always Sunny in Philadelphia</li>
              <li>Mayans MC</li>
              <li>The Old Man</li>
              <li>Pistol</li>
              <li>Under the Banner of Heaven</li>
              <li>You’re the Worst</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Best cooking and food shows on Hulu </h4>
            <p className="after-heading"> </p>
            <ul className="channel-list">
              <li>Cupcake Wars</li>
              <li>F*ck, That’s Delicious</li>
              <li>Anthony Bourdain: No Reservations</li>
              <li>Eater’s Guide to the World</li>
              <li>Taste the Nation</li>
              <li>Diners, Drive-Ins & Dives</li>
              <li>Worst Cooks in America</li>
              <li>Hell’s Kitchen</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Best true crime shows on Hulu </h4>
            <p className="after-heading"> </p>
            <ul className="channel-list">
              <li>Captive Audience</li>
              <li>Casey Anthony: An American Murder Mystery</li>
              <li>Deadly Cults</li>
              <li>Deadly Women</li>
              <li>The Golden State Killer: It’s Not Over</li>
              <li>Homicide Hunter</li>
              <li>The Killer on Floor 32</li>
              <li>Stolen Youth</li>
              <li>Usual Suspects</li>
              <li>Wild Crime</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Best reality shows on Hulu </h4>
            <p className="after-heading"> </p>
            <ul className="channel-list">
              <li>American Pickers</li>
              <li>Are You the One?</li>
              <li>The Bachelor</li>
              <li>The Bachelorette</li>
              <li>Deep-Fried Dynasty</li>
              <li>Holey Moley</li>
              <li>The Kardashians</li>
              <li>L.A. Ink</li>
              <li>Storage Wars</li>
              <li>Total Bellas</li>{" "}
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Best sci-fi shows on Hulu </h4>
            <p className="after-heading"> </p>
            <ul className="channel-list">
              <li>12 Monkeys</li>
              <li>Buffy the Vampire Slayer</li>
              <li>Dollhouse</li>
              <li>Fear the Walking Dead</li>
              <li>Lost</li>
              <li>The Orville: New Horizons</li>
              <li>The Strain</li>
              <li>Timeless</li>
              <li>The X-Files</li>
              <li>Terminator: The Sarah Conner Chronicles</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Best documentaries on Hulu </h4>
            <p className="after-heading"> </p>
            <ul className="channel-list">
              <li>Bad Reputation</li>
              <li>City of Angels, City of Death</li>
              <li>The Curse of Von Dutch</li>
              <li>Fyre Fraud</li>
              <li>I Am Greta</li>
              <li>Love, Gilda</li>
              <li>Minding the Gap</li>
              <li>RBG</li>
              <li>Too Funny to Fail</li>
              <li>Victoria’s Secret: Angels and Demons</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Best LGBTQ+ shows on Hulu</h4>
            <p className="after-heading"> </p>
            <ul className="channel-list">
              <li>Anyone But Me</li>
              <li>Bisexual</li>
              <li>Butterfly</li>
              <li>Dante’s Cove</li>
              <li>First Day</li>
              <li>I Am Cait</li>
              <li>The L Word</li>
              <li>Love, Victor</li>
              <li>Please Like Me</li>
              <li>RuPaul’s Drag Race</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Best kids’ shows on Hulu</h4>
            <p className="after-heading"> </p>
            <ul className="channel-list">
              <li>Adventure Time</li>
              <li>Animaniacs</li>
              <li>Doc McStuffins</li>
              <li>Endlings</li>
              <li>Gravity Falls</li>
              <li>Hey Arnold!</li>
              <li>Steven Universe</li>
              <li>Teen Titans Go!</li>
              <li>The Thundermans</li>
              <li>Utopia Falls</li>{" "}
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Best anime shows on Hulu </h4>
            <p className="after-heading"> </p>
            <ul className="channel-list">
              <li>Attack on Titan</li>
              <li>Bleach</li>
              <li>Boruto: Naruto Next Generations</li>
              <li>Cowboy Bebop</li>
              <li>Dragon Ball Super</li>
              <li>Fire Force</li>
              <li>My Hero Academia</li>
              <li>One-Punch Man</li>
              <li>Sailor Moon</li>
              <li>Tokyo Ghoul</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Best FX shows on Hulu</h4>
            <p className="after-heading"> </p>
            <ul className="channel-list">
              <li>American Horror Story</li>
              <li>Archer</li>
              <li>Better Things</li>
              <li>Breeders</li>
              <li>It’s Always Sunny in Philadelphia</li>
              <li>Mayans MC</li>
              <li>The Old Man</li>
              <li>Pistol</li>
              <li>Under the Banner of Heaven</li>
              <li>You’re the Worst</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section endnote page-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotationIcon} alt="quotations" />
          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>What to Watch this Week</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Hulu Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Hulu Deals</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

{/* <Newsletter /> */}
    </div>
  );
};

export default HuluWhatToWatch;
