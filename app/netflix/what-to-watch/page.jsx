// import React, { useState } from "react";
import "./netflix-what-to-watch.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { netflixNavLinks } from "../../assets/data/navLinks/netflixNavLinks";
import quotationIcon from "../../assets/images/quotations.svg";
import bridgertondrama from "../../assets/images/bridgerton-drama.jpg";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import Link from "next/link";
import Image from "next/image";
import glow from "../../assets/images/glow.jpg";
import cobra from "../../assets/images/cobra.jpg";
import bojack from "../../assets/images/bojack.jpg";
import ozark from "../../assets/images/ozark.jpg";
import CTA from "../../components/cta-section/CTA";
import army from "../../assets/images/army.jpg";
import glass from "../../assets/images/glass.jpg";
import old from "../../assets/images/old.jpg";
import power from "../../assets/images/power.jpg";
import red from "../../assets/images/red.jpg";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "What To Watch On Netflix"
};

const NetflixWhatToWatch = () => {
//   const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="netflix-what-to-watch">
      {/* <SubNav links={netflixNavLinks} /> */}
      <div className="hidden-cost-hero global-inner-hero">
        <h1>What To Watch On Netflix December 2024</h1>
        <p>
          Scrolling endlessly through Netflix? CableTV.com has 100+ TV show and
          movie recommendations for you.
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
          <Image src={quotationIcon} alt="quotations" />
          <p>
            The old joke about scrolling through Netflix titles for hours
            without actually watching anything is all too real. Fortunately,
            we’ve managed to pull together 100+ recommendations for shows and
            movies worth checking out on Netflix. <br />
            Most are Netflix originals, which are the streaming service’s
            primary focus these days, even though older series from other
            sources (like Grey’s Anatomy, Shameless, and Seinfeld) consistently
            rank in the Big Red N’s top 10. <br />
            Stop the endless scroll and let us point you toward some Netflix
            shows and movies to watch right now.
          </p>
          <h4>New on Netflix in December 2024</h4>
          <ul className="channel-list">
            <li>May December (Movie premiere, December 1)</li>
            <li>Sweet Home (Season 2 premiere, December 1)</li>
            <li>Dew Drop Diaries (Season 2 premiere, December 4)</li>
            <li>Analog Squad (New series, December 7)</li>
            <li>The Archies (Movie premiere, December 7)</li>
            <li>Hilda (Season 3 premiere, December 7)</li>
            <li>
              World War II: From the Frontlines (New miniseries, December 7)
            </li>
            <li>High Tides (Knokke Off) (New series, December 7)</li>
            <li>My Life with the Walter Boys (New series, December 7)</li>
            <li>
              The Great British Baking Show: Holidays (Special, December 8)
            </li>
            <li>Leave the World Behind (Movie premiere, December 8)</li>
            <li>
              Kevin Hart & Chris Rock: Headliners Only (Movie premiere, December
              12)
            </li>
            <li>
              Under Pressure: The U.S. Women’s World Cup Team (New miniseries,
              December 12)
            </li>
            <li>1670 (New series, December 13)</li>
            <li>The Crown (Season 6 Pt. 2 premiere, December 14)</li>
            <li>Yu Yu Hakusho (New series, December 14)</li>
            <li>Carol & The End of the World (New series, December 15)</li>
            <li>
              Chicken Run: Dawn of the Nugget (Movie premiere, December 15)
            </li>
            <li>Maestro (Movie premiere, December 20)</li>
          </ul>
        </div>
      </div>

      <StickyHeader />

      <div className="section important-post">
        <div className="head">
          <h2 className="sect-heading">
            Best shows <span>on Netflix</span>
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
          <Link href={"#"}>view Netflix plans </Link>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={bridgertondrama} alt="" />
          </div>
          <div className="inner-content">
            <h4>Bridgerton | Drama</h4>
            <p>
              Like a mashup of Downton Abbey and Gossip Girl, super-producer
              Shonda Rhimes’s adaptation of the Bridgerton novel series has been
              called the sexiest period drama ever. It’s certainly one of the
              most inclusive, as this 1800s costume romp represents Regency-era
              London as far more racially diverse than history would dictate—as
              the show producers have said, this isn’t a documentary. Back to
              the sex and scandal: Bridgerton is binge-worthy TV at its
              frothiest.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={bojack} alt="" />
          </div>
          <div className="inner-content">
            <h4>Bojack Horseman | Animation, comedy</h4>
            <p>
              Down-and-out ’90s TV star BoJack Horseman (voiced by Will Arnett)
              spirals into alcoholism and self-loathing in Hollywood—sound like
              an odd setup for a hilarious cartoon about a talking horse? It is,
              and it works. BoJack Horseman is both a scathing satire of the
              entertainment business and a sobering look at depression, with a
              colorful cast of animals and humans dealing with both. You’ll
              laugh, you’ll cry, and you’ll believe a cartoon horse can make you
              feel all the feels.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={cobra} alt="" />
          </div>
          <div className="inner-content">
            <h4>Cobra Kai | Comedy, drama</h4>
            <p>
              When it premiered on YouTube Red (remember that?) in 2018, Karate
              Kid sequel series Cobra Kai generated much retro-’80s buzz if not
              views. That changed in 2020 when Netflix picked up the series,
              leading to Cobra Kai becoming second only to Bridgerton in
              worldwide streams. The story of childhood frenemies Danny (Ralph
              Macchio) and Johnny (William Zabka) is nostalgic, modern, funny,
              and emotional all at once, with martial-arts action and teen drama
              to boot.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={glow} alt="" />
          </div>
          <div className="inner-content">
            <h4>GLOW | Comedy, drama</h4>
            <p>
              GLOW looked like a cheeky take on the real-life story of ’80s pro
              wrestling franchise Gorgeous Ladies of Wrestling, but it proved
              itself to be a sincere celebration of female bonding and
              friendship from the first bell. Over three seasons, GLOW
              chronicled the hot-and-cold relationship between newbie wrestlers
              Ruth (Alison Brie) and Debbie (Betty Gilpin), as well as the
              high-flying ring antics of an exceptional ensemble cast of women.
              Check out these thirty all-killer, no-filler episodes.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={ozark} alt="" />
          </div>
          <div className="inner-content">
            <h4>Ozark | Drama, thriller</h4>
            <p>
              Early conclusions that Ozark was just Breaking Bad relocated to
              Missouri fell away quickly once this tense crime drama started
              racking up a body count in the first episode. To save his own skin
              from a Mexican drug cartel, Chicago financial advisor Marty (Jason
              Bateman) agrees to launder money in a waterfront resort town in
              the Ozarks. This doesn’t go over well with the local criminals,
              including ruthless Ruth (breakout star Julia Garner). Ozark always
              keeps you guessing.
            </p>
          </div>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={quotationIcon} className="mark" alt="" />
          <h4>More recommended TV shows on Netflix </h4>
          <p>
            Are you a T-Mobile customer? Check out the cellular provider’s
            “Netflix on Us” promotion, which essentially gives you free Netflix
            (Standard or Basic plan) with your phone service.
          </p>
          <ul className="channel-list">
            <li>Archive 81</li>
            <li>Black Mirror</li>
            <li>Lucifer</li>
            <li>Mindhunter</li>
            <li>Never Have I Ever</li>
            <li>Schitt’s Creek</li>
            <li>Squid Game</li>
            <li>Stranger Things</li>
            <li>Virgin River</li>
            <li>The Witcher</li>
          </ul>
        </div>
      </div>

      <CTA
        heading={
          "Shows and movies stuck buffering? Could be your internet connection."
        }
        desc={
          "Enter your zip code to find a better internet plan in your area."
        }
      />

      <div className="section important-post">
        <div className="head">
          <h2 className="sect-heading">
            Best movies <span>on Netflix</span>
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
          <Link href={"#"}>view Netflix plans </Link>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={army} alt="" />
          </div>
          <div className="inner-content">
            <h4>Army of the Dead | Action, drama</h4>
            <p>
              Director Zack Snyder jumps from the DC Universe of superheroes to
              the Netflix world of zombies with Army of the Dead, a surprisingly
              humorous horror epic. During a zombie outbreak, Dave Bautista
              (Guardians of the Galaxy) leads a military team on a side mission
              to liberate $200 million from a Las Vegas casino vault before the
              undead-ridden city is nuked. Snyder directed an equally
              entertaining Netflix prequel movie, Army of Thieves, also
              recommended.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={glass} alt="" />
          </div>
          <div className="inner-content">
            <h4>Glass Onion: A Knives Out Mystery | Comedy, mystery</h4>
            <p>
              Daniel Craig returns as detective Benoit Blanc in the sequel to
              2019’s Knives Out, joined by an all-new lineup of murder suspects
              that includes Edward Norton, Kathryn Hahn, Janelle Monáe, Kate
              Hudson, Dave Bautista, and Leslie Odom Jr., as well as several
              celebrity guest appearances to keep an eye out for). Glass Onion:
              A Knives Out Mystery is a worthy follow-up to the original, a
              twisty puzzle with as many laughs as surprises.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={old} alt="" />
          </div>
          <div className="inner-content">
            <h4>The Old Guard | Action, sci-fi</h4>
            <p>
              In The Old Guard, action queen Charlize Theron leads a squad of
              immortal warriors who take on mercenary missions for good, because
              living forever gets dull without hobbies. Based on the graphic
              novel of the same name, The Old Guard is a superhero movie that
              doesn’t look or feel like a superhero movie, balancing kick-ass
              action and LGBTQ+ undertones with ease. A sequel is in the works
              at Netflix, with Theron and the rest of the cast
              returning—franchise time!
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={power} alt="" />
          </div>
          <div className="inner-content">
            <h4>The Power of the Dog | Drama, western</h4>
            <p>
              In her first film in 12 years, writer/director Jane Campion (The
              Piano) adapts a ’60s novel about estranged 1925 Montana rancher
              brothers. Short-tempered Phil (Benedict Cumberbatch) is displeased
              when his brother George (Jesse Plemons) brings a new bride
              (Kirsten Dunst) into the ranch house, and Phil proceeds to make
              her life hell. The Power of the Dog eventually reveals Phil’s own
              demons, making for a very different kind of western.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={red} alt="" />
          </div>
          <div className="inner-content">
            <h4>Red Notice | Action, comedy</h4>
            <p>
              Heist flick Red Notice—among the most expensive Netflix
              productions ever—has serious star power: Dwayne Johnson, Gal
              Gadot, and Ryan Reynolds. An FBI profiler (Johnson) reluctantly
              teams up with an international art thief (Reynolds) to catch
              another international art thief (Gadot). As you’d expect from this
              threesome, the action is snappy, the quips are constant, and the
              plot doesn’t necessarily matter. But hey, Wonder Woman, Deadpool,
              and Black Adam are together!
            </p>
          </div>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={quotationIcon} className="mark" alt="" />
          <h4>More recommended TV shows on Netflix </h4>
          <p>
            Are you a T-Mobile customer? Check out the cellular provider’s
            “Netflix on Us” promotion, which essentially gives you free Netflix
            (Standard or Basic plan) with your phone service.
          </p>
          <ul className="channel-list">
            <li>Army of Thieves</li>
            <li>Bullet Train</li>
            <li>The Dirt</li>
            <li>El Camino</li>
            <li>Interceptor</li>
            <li>Gunpowder Milkshake</li>
            <li>The Harder They Fall</li>
            <li>I Care a Lot</li>
            <li>Spiderhead</li>
            <li>Woman King</li>
          </ul>
        </div>
      </div>

      <div className="section important-packages">
        <div className="head">
          <h2 className="sect-heading">
            More recommended shows on netflix <span>(by genre)</span>
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
          <Link href={"#"}>view netflix plans </Link>
        </div>

        <div className="grid-channel">
          <div className="package-table-container channels">
            <h4> Best Netflix original shows</h4>
            <br />
            <ul className="channel-list">
              <li>Cunk on Earth</li>
              <li>Dead to Me</li>
              <li>The Chilling Adventures of Sabrina</li>
              <li>Godless</li>
              <li>Inventing Anna</li>
              <li>Love, Death & Robots</li>
              <li>Orange is the New Black</li>
              <li>Outer Banks</li>
              <li>The Queen’s Gambit</li>
              <li>Russian Doll</li>
              <li>Sweet Tooth</li>
              <li>Wednesday</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Best comedy shows and movies on Netflix</h4>
            <br />
            <ul className="channel-list">
              <li>Arrested Development</li>
              <li>God’s Favorite Idiot</li>
              <li>The Good Place</li>
              <li>Kim’s Convenience</li>
              <li>Love</li>
              <li>New Girl</li>
              <li>Seinfeld</li>
              <li>Shameless</li>
              <li>Workin’ Moms</li>
              <li>The Wrong Missy</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Best drama shows and movies on Netflix</h4>
            <br />
            <ul className="channel-list">
              <li>Better Call Saul</li>
              <li>Breaking Bad</li>
              <li>The Crown</li>
              <li>Grey’s Anatomy</li>
              <li>The Irishman</li>
              <li>The Lincoln Lawyer</li>
              <li>The Magicians</li>
              <li>Peaky Blinders</li>
              <li>Supernatural</li>
              <li>You</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Best true-crime shows and movies on Netflix</h4>
            <br />
            <ul className="channel-list">
              <li>Abducted in Plain Sight</li>
              <li>Bad Vegan</li>
              <li>Dirty Money</li>
              <li>Don’t F**k with Cats</li>
              <li>Manhunt: Unabomber</li>
              <li>Murder Among the Mormons</li>
              <li>Narcos</li>
              <li>The Tinder Swindler</li>
              <li>When They See Us</li>
              <li>Wild Wild Country</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Best reality shows and movies on Netflix</h4>
            <br />
            <ul className="channel-list">
              <li>60 Days In</li>
              <li>Alone</li>
              <li>Bling Empire</li>
              <li>The Circle</li>
              <li>Forged in Fire</li>
              <li>Married at First Sight</li>
              <li>Queer Eye</li>
              <li>The Secret of Skinwalker Ranch</li>
              <li>Selling Sunset</li>
              <li>Too Hot to Handle</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Best food and travel shows and movies on Netflix</h4>
            <br />
            <ul className="channel-list">
              <li>Chef’s Table</li>
              <li>Dark Tourist</li>
              <li>Expedition Happiness</li>
              <li>Great British Baking Show</li>
              <li>Nailed It!</li>
              <li>Our Planet</li>
              <li>Salt Fat Acid Heat</li>
              <li>Somebody Feed Phil</li>
              <li>Stay Here</li>
              <li>World’s Most Amazing Vacation Rentals</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Best documentaries on Netflix</h4>
            <br />
            <ul className="channel-list">
              <li>Cheer</li>
              <li>The Devil Next Door</li>
              <li>Keep Sweet: Pray and Obey</li>
              <li>The Last Dance</li>
              <li>Leah Remini: Scientology and the Aftermath</li>
              <li>Making a Murderer</li>
              <li>My Octopus Teacher</li>
              <li>Our Great National Parks</li>
              <li>Tiger King</li>
              <li>Voir</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Best sci-fi shows and movies on Netflix</h4>
            <br />
            <ul className="channel-list">
              <li>All of Us Are Dead</li>
              <li>Altered Carbon</li>
              <li>Bladerunner 2024</li>
              <li>Guardians of Justice</li>
              <li>Lost in Space</li>
              <li>The OA</li>
              <li>Resident Evil</li>
              <li>Sense8</li>
              <li>The Umbrella Academy</li>
              <li>Wynonna Earp</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Best action shows and movies on Netflix</h4>
            <br />
            <ul className="channel-list">
              <li>21 Jump Street</li>
              <li>6 Underground</li>
              <li>Ava</li>
              <li>Blasted</li>
              <li>Extinction</li>
              <li>Extraction</li>
              <li>Homefront</li>
              <li>The Ice Road</li>
              <li>Kate</li>
              <li>Sky Rojo</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Best horror shows and movies on Netflix</h4>
            <br />
            <ul className="channel-list">
              <li>Ash vs. Evil Dead</li>
              <li>Black Summer</li>
              <li>Blood Red Sky</li>
              <li>Brand New Cherry Flavor</li>
              <li>Crazyhead</li>
              <li>The Fear Street Trilogy</li>
              <li>First Kill</li>
              <li>Gerald’s Game</li>
              <li>Midnight Mass</li>
              <li>The Walking Dead</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Best LGBTQ+ shows and movies on Netflix</h4>
            <br />
            <ul className="channel-list">
              <li>AJ & the Queen</li>
              <li>Bonding</li>
              <li>East Siders</li>
              <li>Elisa & Marcella</li>
              <li>Feel Good</li>
              <li>Heartstopper</li>
              <li>Kissing Game</li>
              <li>Q Force</li>
              <li>Special</li>
              <li>Queer Eye</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Best kids’ shows and movies on Netflix</h4>
            <br />
            <ul className="channel-list">
              <li>Brainchild</li>
              <li>Chip & Potato</li>
              <li>Fangbone!</li>
              <li>Go Dog Go</li>
              <li>Goosebumps</li>
              <li>Mighty Express</li>
              <li>The Mitchells vs. the Machines</li>
              <li>A Series of Unfortunate Events</li>
              <li>The Thundermans</li>
              <li>Vivo</li>
            </ul>
          </div>
        </div>
      </div>

{/* <Newsletter /> */}
    </div>
  );
};

export default NetflixWhatToWatch;
