// import React, { useState } from "react";
import "./disney-originals.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { disneyNavLinks } from "../../assets/data/navLinks/disneyNavLinks";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";
import CTA from "../../components/cta-section/CTA";
import a11 from "../../assets/images/a-11.jpg";
import a12 from "../../assets/images/a-12.jpg";
import a13 from "../../assets/images/a-13.jpg";
import a14 from "../../assets/images/a-14.jpg";
import couple from "../../assets/images/couple.png";
import coupletwo from "../../assets/images/couple-two.png";
import ironsteel from "../../assets/images/iron-steel.png";
import zebrasid from "../../assets/images/zebra-sid.png";
import animecartoon from "../../assets/images/anime-cartoon.png";
import animecartoontwo from "../../assets/images/anime-cartoon-two.png";

export const metadata = {
  title: "Disney Plus Originals 2024"
};

const DisneyOriginals = () => {
  //   const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="disney-originals">
      {/* <SubNav links={disneyNavLinks} /> */}
      <div className="hidden-cost-hero global-inner-hero">
        <h1>Disney Plus Originals 2024</h1>
        <p>
          Your extensive guide to Disney’s streaming exclusives, from Star Wars
          to Marvel Studios.
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
            Disney has produced a lot of original content over the last 100-ish
            years, but is it worth subscribing to Disney+ just to get access to
            movies you already bought on DVD in the ‘00s?
            <br />
            Maybe not, but that’s where Disney+ Originals come in. These series,
            movies, and specials are exclusive to the Disney+ service, so you’ll
            have to become a subscriber if you don’t want to miss out. Here’s an
            overview of the kinds of shows you can expect on the platform in all
            of its biggest brands and categories.
          </p>
          <h4>Update, 6/1/23:</h4>
          <p>
            Disney recently removed dozens of original series and movies from
            Disney+ and Hulu in a shortsighted effort to save money in
            residuals. Obviously, we’re not fans of this strategy. The Disney
            content disappeared on May 26; check out our list of affected shows
            and movies for more information. Since those titles are still
            technically Disney+ Originals, we’re keeping them on this page, but
            will indicate shows that are no longer available for legal
            streaming.
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
          <Link href={"#"}>Best of originals </Link>
          <Link href={"#"}>Originals scheduled for removal </Link>
          <Link href={"#"}>New and upcoming originals </Link>
          <Link href={"#"}>Originals by brand </Link>
          <Link href={"#"}>Other originals </Link>
        </div>
      </div>

      <div className="section important-post">
        <div className="head">
          <h2 className="sect-heading">
            <span> The best original series </span> on Disney Plus
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
          <Link href={"#"}>watch on Disney+ </Link>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={a11} alt="" />
          </div>
          <div className="inner-content">
            <h4>The Mysterious Benedict Society | Adventure, comedy</h4>
            <p>
              Disney managed to somehow bungle the marketing for this show
              because it came and went without making much of a cultural dent,
              despite being a fantastic show. Based on the beloved children’s
              book series of the same name, The Mysterious Benedict Society
              follows a group of incredibly smart misfit children who find
              themselves roped into an eccentric old man’s plan to save the
              world from the perils of conformity.
              <br />
              In addition to a squad of talented child actors, TMBS stars Tony
              Hale (Arrested Development, Hocus Pocus 2) and Kristen Schaal
              (Gravity Falls, Bob’s Burgers).
              <br />
              Unfortunately, Disney+ removed this show from its platform on May
              26.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={a12} alt="" />
          </div>
          <div className="inner-content">
            <h4>HMoon Knight | Action, adventure</h4>
            <p>
              If you were ever obsessed with Egyptian mythology growing up, this
              one’s for you. Mild-mannered, museum employee Steven Grant has a
              sleepwalking problem, but when he wakes up on the other side of
              the world with an angry cult on his tail and a cranky moon god in
              his head, he realizes the “problem” might be bigger than he
              thought.
              <br />
              Yes, this show is canon to the Marvel Cinematic Universe, although
              you don’t have to watch any of the other shows or movies to enjoy
              it. Perfect for someone who just wants a good superhero show
              without any prerequisite homework.
            </p>
          </div>
        </div>

        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>More of the best original series on Disney Plus</h4>
          <p className="after-heading">
            As of May 23, 2023, the HBO Max app no longer works. Unfortunately,
            the switch to Max is more than just a new name—you’ll have to
            download the entirely new Max app to keep enjoying Max content.
            You’ll have to search for the Max app yourself, though, because the
            HBO Max homepage currently looks like this:
          </p>
          <ul>
            <li>Ms. Marvel</li>
            <li>Hawkeye</li>
            <li>WandaVision</li>
            <li>The Mandalorian</li>
            <li>Andor</li>
            <li>The Proud Family: Louder and Prouder</li>
          </ul>
        </div>
      </div>

      <div className="section important-post-bg-white">
        <div className="head">
          <h2 className="sect-heading">
            <span> The best original movies and specials </span> on Disney Plus
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
          <Link href={"#"}>watch on Disney+ </Link>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={a13} alt="" />
          </div>
          <div className="inner-content">
            <h4>Turning Red | Fantasy, comedy</h4>
            <p>
              This Pixar film may not have gotten the theatrical release it was
              supposed to get, but it’s more than your average
              direct-to-streaming flick. It’s about a 13-year-old girl named Mei
              Lee whose life changes when she learns about the family curse:
              that every girl eventually turns into a giant, furry, red panda.
              <br />
              It’s a fun film that mixes Chinese-Canadian culture with ‘00s
              aesthetics and boy bands. It’s definitely one of the studio’s
              best. Also, it was totally cheated out of an Oscar for Best
              Original Song. We’re just saying.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={a14} alt="" />
          </div>
          <div className="inner-content">
            <h4>Werewolf by Night | Horror, thriller</h4>
            <p>
              This black-and-white horror flick is another MCU installment that
              doesn’t require any homework. It’s a side of Marvel we haven’t
              seen before: spooky-cheesy, old-school horror.
              <br />
              Werewolf by Night is about Jack Russell, a secret werewolf trying
              to infiltrate a bloodthirsty group of monster hunters mourning the
              death of their leader. It also features other fan-favorite comics
              characters, like Man-Thing and Elsa Bloodstone.
            </p>
          </div>
        </div>

        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>Pro tip:</h4>
          <p className="after-heading">
            Check out our list of the Best Spooky Movies on Disney+ for more
            frights from the House of Mouse.
          </p>
          <h4>More of the best original movies on Disney Plus</h4>
          <br />
          <ul>
            <li>Luca</li>
            <li>Soul</li>
            <li>The Guardians of the Galaxy Holiday Special</li>
            <li>Diary of a Wimpy Kid</li>
            <li>Phineas and Ferb the Movie: Candace Against the Universe</li>
            <li>Disenchanted</li>
            <li>Z-O-M-B-I-E-S 3</li>
            <li>Muppets Haunted Mansion</li>
            <li>Hocus Pocus 2</li>
          </ul>
        </div>
      </div>

      <div className="section important-post">
        <div className="head">
          <h2 className="sect-heading">
            Original content that left Disney <span> Plus on May 26 </span>
          </h2>
          <p className="sect-desc">
            On May 18, 2023, Disney+ made the disappointing announcement that it
            would start removing its original content from the service. This
            includes a lot of titles that aren’t part of Disney’s main brands,
            like Marvel and Star Wars (although Marvel’s Runaways somehow
            disappeared as well).
            <br />
            These are TV shows, movies, and specials that the company has deemed
            too expensive, and refuses to continue paying cast and crew
            residuals on. You may assume that these titles are just the
            company’s failures—Artemis Fowl, for example, was a supreme
            disappointment to fans of the books—but there are plenty of items
            here that actually did very well, and have decent fan bases. And
            regardless of quality, this decision sucks for the writers, actors,
            and production crew who are now losing a source of income with
            almost no warning.
            <br />
            The content on the list below disappeared on May 26, 2023. There’s a
            chance some of them will be licensed out to free, ad-supported
            stream television (FAST) services, but if Disney follows HBO’s
            example, they won’t be available on demand or in full seasons. As of
            the time of posting, there are no plans to put these titles on DVD,
            either.
          </p>
        </div>
        <Image src={couple} className="couple" alt="" />
        <p className="below-table">
          The Mysterious Benedict Society, no longer available to stream on
          Disney+.
        </p>
        <div className="package-table-container channels">
          <h4>Disney Plus and Hulu Originals discontinued after May 26:</h4>
          <ul className="channel-list-3">
            <li>America the Beautiful</li>
            <li>Among the Stars</li>
            <li>Artemis Fowl</li>
            <li>A Very Boy Band Holiday</li>
            <li>Be Our Chef</li>
            <li>Best in Snow</li>
            <li>Better Nate Than Ever</li>
            <li>Beyond Infinity: Buzz and the Journey to Lightyear</li>
            <li>Big Shot</li>
            <li>Black Beauty</li>
            <li>Brain Games</li>
            <li>Brain Games: On the Road</li>
            <li>Breaking Bobby Bones</li>
            <li>Chasing Waves</li>
            <li>Cheaper by the Dozen (2022)</li>
            <li>Chorus: Success, Here We Go!</li>
            <li>Clouds</li>
            <li>Club Mickey Mouse Malaysia</li>
            <li>Diary of a Future President</li>
            <li>Disney Fairy Tale Weddings</li>
            <li>DisneyNature Penguins Life On The Edge</li>
            <li>DisneyNature In the Footsteps of the Elephant</li>
            <li>DisneyNature Diving With Dolphins</li>
            <li>DisneyNature Bear Witness</li>
            <li>Disney’s Magic Bake-Off</li>
            <li>Earth to Ned</li>
            <li>Encore!</li>
            <li>Family Reboot</li>
            <li>Flora & Ulysses</li>
            <li>Foodtastic</li>
            <li>Gina Yei</li>
            <li>Harmonious Live!</li>
            <li>The Hip Hop Nutcracker!</li>
            <li>Hollywood Stargirl</li>
            <li>It’s a Dog’s Life with Bill Farmer</li>
            <li>It’s All Right!</li>
            <li>Just Beyond</li>
            <li>Low Tone Club</li>
            <li>Magic Camp</li>
            <li>Marvel 616</li>
            <li>Marvel’s Runaways</li>
            <li>Marvel’s Project Hero</li>
            <li>More Than Robots</li>
            <li>On Pointe</li>
            <li>Own the Room</li>
            <li>Pentatonix: Around the World for the Holidays</li>
            <li>Pick the Litter</li>
            <li>Prop Culture</li>
            <li>Queen Family Sing-Along</li>
            <li>Race to the Center of the Earth</li>
            <li>Rogue Trip</li>
            <li>Shop Class</li>
            <li>Stargirl</li>
            <li>Stuntman</li>
            <li>Super/Natural</li>
            <li>The Big Fib</li>
            <li>The Chicken Squad</li>
            <li>The Magic Maker</li>
            <li>The Making of Willow</li>
            <li>The Mighty Ducks: Game Changers</li>
            <li>The Mysterious Benedict Society</li>
            <li>The One and Only Ivan</li>
            <li>The Quest</li>
            <li>The Right Stuff</li>
            <li>The Real Right Stuff</li>
            <li>The World According to Jeff Goldblum</li>
            <li>Timmy Failure</li>
            <li>Turner & Hooch</li>
            <li>Ultra Violet and Black Scorpion</li>
            <li>Weird but True!</li>
            <li>Willow</li>
            <li>Wolfgang</li>
            <li>World of Flavor with Big Moe Cason</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>New and upcoming Disney Plus originals</h4>

          <ul className="channel-list">
            <li>LEGO Marvel Avengers: Code Red (October 27)</li>
            <li>Diary of a Wimpy Kid Christmas: Cabin Fever (December 8)</li>
            <li>Behind the Attraction (November 1)</li>
            <li>The Santa Clauses Season 2 (November 8)</li>
            <li>Percy Jackson and the Olympians (December 20)</li>
            <li>Win or Lose (December TBA)</li>
            <li>Iwájú (TBA)</li>
          </ul>
        </div>
      </div>

      <div className="section important-links">
        <div className="head">
          <h2 className="sect-heading">
            Disney Plus originals by brand; <span> Jump to </span>
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
          <Link href={"#"}>Marvel Cinematic Universe </Link>
          <Link href={"#"}>Star Wars </Link>
          <Link href={"#"}>National Geographic </Link>
          <Link href={"#"}> Pixar </Link>
          <Link href={"#"}> Disney and Disney Channel </Link>
        </div>
      </div>

      <div className="section important-post">
        <div className="head">
          <h2 className="sect-heading">
            Marvel Cinematic Universe originals <span> on Disney Plus </span>
          </h2>
          <p className="sect-desc">
            Although production has since slowed down, there was a year or two
            there when it seemed like Marvel was making a new show every couple
            of months. These aren’t your traditional Marvel shows, like Agents
            of S.H.I.E.L.D., whose canon status can be tragically revoked on a
            whim. These shows are considered vital pieces of the greater Marvel
            Cinematic Universe (MCU), and you might feel lost if you try to
            watch a new movie in the theaters without them. Ms. Marvel, for
            example, is highly recommended before you see The Marvels in
            theaters later in 2023.
            <br />
            (Or not. Sometimes details, like the rules of time travel, don’t
            really stick between different franchises. And we’ve yet to find out
            when we’ll ever see Moon Knight or Kate Bishop again. We miss them!)
          </p>
        </div>
        <div className="all-links">
          <Link href={"/"}>watch the MCU on disney+</Link>
        </div>
        <Image src={coupletwo} className="couple" alt="" />
        <p className="below-table">WandaVision</p>
        <div className="grid-channels">
          <div className="package-table-container channels">
            <h4>Canon MCU TV series:</h4>
            <br />
            <ul>
              <li>She-Hulk: Attorney at Law</li>
              <li>Ms. Marvel</li>
              <li>Moon Knight</li>
              <li>Hawkeye</li>
              <li>What If…?</li>
              <li>Loki</li>
              <li>The Falcon and the Winter Soldier</li>
              <li>WandaVision</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Marvel Studios Special Presentations:</h4>
            <br />
            <ul>
              <li>The Guardians of the Galaxy Holiday Special</li>
              <li>Werewolf by Night</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>I Am Groot shorts:</h4>
            <br />
            <ul>
              <li>Groot’s First Steps</li>
              <li>The Little Guy</li>
              <li>Groot’s Pursuit</li>
              <li>Groot Takes a Bath</li>
              <li>Magnum Opus</li>
            </ul>
          </div>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>Marvel Studios Assembled:</h4>
          <br />
          <ul className="channel-list">
            <li>The Making of Black Panther: Wakanda Forever</li>
            <li>The Making of She-Hulk: Attorney at Law</li>
            <li>The Making of Thor: Love and Thunder</li>
            <li>The Making of Ms. Marvel</li>
            <li>The Making of Doctor Strange in the Multiverse of Madness</li>
            <li>The Making of Moon Knight</li>
            <li>The Making Eternals</li>
            <li>The Making of Hawkeye</li>
            <li>The Making of Shang-Chi and the Legend of the Ten Rings</li>
            <li>The Making of What If…?</li>
            <li>The Making of Black Widow</li>
            <li>The Making of Loki</li>
            <li>The Making of The Falcon and the Winter Soldier</li>
            <li>The Making of WandaVision</li>
          </ul>
        </div>
      </div>

      <div className="section  important-post-bg-white">
        <div className="head">
          <h2 className="sect-heading">
            Star Wars originals <span> on Disney Plus</span>
          </h2>
          <p className="sect-desc">
            The Star Wars cinematic universe is expanding by the day. If you
            missed the memo, The Mandalorian set a precedent for Disney to
            create other popular prequel series, like Andor and the upcoming
            Ahsoka. Most of these shows fill in the blanks for events that
            happened in between or before the three main trilogies of movies.
            <br />
            (And then there are the Lego specials, which are less about
            continuity and more about vibes).
          </p>
        </div>
        <div className="all-links">
          <Link href={"/"}>watch Star wars on disney+</Link>
        </div>
        <Image src={ironsteel} className="couple" alt="" />
        <p className="below-table">The Mandalorian</p>
        <div className="grid-channels">
          <div className="package-table-container channels">
            <h4>Documentaries/behind-the-scenes:</h4>
            <br />
            <ul>
              <li>Disney Gallery: The Mandalorian</li>
              <li>Disney Gallery: The Book of Boba Fett</li>
              <li>Obi-Wan Kenobi: A Jedi’s Return</li>
              <li>Light & Magic</li>
              <li>Under the Helmet: The Legacy of Boba Fett</li>
              <li>Star Wars: Galaxy of Sounds</li>
              <li>Star Wars: Vehicle Flythroughs</li>
              <li>Star Wars: Biomes</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Live-action shows:</h4>
            <br />
            <ul>
              <li>The Mandalorian</li>
              <li>Andor</li>
              <li>Obi-Wan Kenobi</li>
              <li>The Book of Boba Fett</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Animated shows:</h4>
            <br />
            <ul>
              <li>The Bad Batch</li>
              <li>Tales of the Jedi</li>
              <li>The Clone Wars</li>
              <li>Zen – Grogu and Dust Bunnies</li>
              <li>Lego Star Wars Holiday Special</li>
              <li>Lego Star Wars Terrifying Tales</li>
              <li>Lego Star Wars Summer Vacation</li>
              <li>Star Wars Visions</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section important-post">
        <div className="head">
          <h2 className="sect-heading">
            National Geographic originals <span> on Disney Plus </span>
          </h2>
          <p className="sect-desc">
            On the other side of Disney+, far from the remakes and reboots and
            Baby Yoda, is a collection of documentaries and educational shows
            about nature (and occasionally American history). It’s everything
            you might expect from Nat Geo, except now it’s under Disney’s
            umbrella thanks to a $52 billion corporate deal a few years back.
            <br />
            It may seem like a terrifying corporate monopoly, but Chris
            Hemsworth is there now, so that’s a bonus.
          </p>
        </div>
        <div className="all-links">
          <Link href={"/"}>watch National Geographic on disney+</Link>
        </div>
        <Image src={zebrasid} className="couple" alt="" />
        <p className="below-table">Magic of Disney’s Animal Kingdom</p>
        <div className="grid-channels">
          <div className="package-table-container channels">
            <h4>Historical drama:</h4>
            <br />
            <ul>
              <li>The Right Stuff*</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Documentary films:</h4>
            <br />
            <ul>
              <li>Own the Room*</li>
              <li>The Biggest Little Farm: The Return</li>
              <li>Explorer: The Last Tepui</li>
              <li>The Real Right Stuff*</li>
              <li>Playing with Sharks</li>
              <li>The Flagmakers</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Anthologies and variety shows:</h4>
            <br />
            <ul>
              <li>Earth Moods</li>
              <li>Weird But True!</li>
            </ul>
          </div>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>Docuseries:</h4>
          <br />
          <ul className="channel-list">
            <li>Magic of Disney’s Animal Kingdom</li>
            <li>Rogue Trip</li>
            <li>Meet the Chimps</li>
            <li>Limitless with Chris Hemsworth</li>
            <li>Secrets of the Whales</li>
            <li>Welcome to Earth</li>
            <li>Super/Natural*</li>
            <li>Epic Adventures with Bertie Gregory</li>
            <li>America the Beautiful*</li>
            <li>The World According to Jeff Goldblum*</li>
            <li>Growing Up Animal</li>
          </ul>
        </div>
      </div>

      <div className="section  important-post-bg-white">
        <div className="head">
          <h2 className="sect-heading">
            <span> Pixar originals </span> on Disney Plus
          </h2>
          <p className="sect-desc">
            Disney+ hosts every Pixar movie on its service, but you might have
            missed all of the sequel short films and spin-off shorts it’s been
            churning out in the last few years. However, if you’re looking for
            Dug Days: Carl’s Date, the planned final episode of the Up spinoff,
            you might be disappointed. It’s going to air as the pre-movie short
            ahead of Disney Pixar’s Elemental on June 13.
            <br />
            But if you want to feel like you’re watching a pre-movie Pixar short
            at the theater, check out SparkShorts. It’s everything you love
            about Pixar shorts, without the pesky feature film attached to the
            end of it.
          </p>
        </div>
        <div className="all-links">
          <Link href={"/"}>watch Pixar on disney+</Link>
        </div>
        <Image src={animecartoon} className="animecartoon" alt="" />
        <p className="below-table">Luca</p>
        <div className="grid-channels">
          <div className="package-table-container channels">
            <h4>Feature films:</h4>
            <br />
            <ul>
              <li>Luca</li>
              <li>Turning Red</li>
              <li>Soul</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Documentary/Making-of:</h4>
            <br />
            <ul>
              <li>
                Beyond Infinity: Buzz and the Journey to Lightyear (Lightyear)
              </li>
              <li>Embrace the Panda: Making Turning Red (Turning Red)</li>
              <li>A Spark Story (SparkShorts)</li>
              <li>Inside Pixar</li>
              <li>Pixar 2021</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Short films:</h4>
            <br />
            <ul>
              <li>22 vs. Earth (Soul)</li>
              <li>Ciao Alberto (Luca)</li>
              <li>Lamp Life (Toy Story 4)</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>SparkShorts:</h4>
            <br />
            <ul>
              <li>Float</li>
              <li>Loop</li>
              <li>Smash and Grab</li>
              <li>Nona</li>
              <li>Twenty Something</li>
              <li>Out</li>
              <li>Purl</li>
              <li>Burrow</li>
              <li>Kitbull</li>
              <li>Wind</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Specials:</h4>
            <br />
            <ul>
              <li>Dory’s Reef Cam (Finding Dory)</li>
              <li>A Celebration of the Music from Coco (Coco)</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Series:</h4>
            <br />
            <ul>
              <li>Dug Days (Up)</li>
              <li>Monsters at Work (Monsters, Inc.)</li>
              <li>Cars on the Road (Cars)</li>
              <li>Pixar in Real Life</li>
              <li>Pixar Popcorn</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section important-post">
        <div className="head">
          <h2 className="sect-heading">
            <span> Disney originals </span> on Disney Plus
          </h2>
          <p className="sect-desc">
            Okay, yes, technically everything on this list is Disney. But the
            company tends to use its own brand to categorize anything that isn’t
            Marvel, Star Wars, Pixar, or National Geographic. We’re using this
            section to include all the notable sub-categories of Disney
            originals that don’t fit anywhere else (and often fly under the
            radar). This section took the biggest hit in the Disney+ Purge of
            2023.
            <br />
            This category includes talk shows, movies that feel like DCOMs but
            aren’t, and behind-the-scenes looks at Disney animation and Walt
            Disney World.
          </p>
        </div>
        <div className="all-links">
          <Link href={"/"}> watch on disney+</Link>
        </div>
        <Image src={animecartoontwo} className="couple" alt="" />
        <p className="below-table">Diary of a Wimpy Kid</p>
        <div className="grid-channels">
          <div className="package-table-container channels">
            <h4>Historical drama:</h4>
            <br />
            <ul>
              <li>The Right Stuff*</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Reality TV and talk shows:</h4>
            <br />
            <ul>
              <li>Foodtastic*</li>
              <li>Turning the Tables with Robin Roberts</li>
              <li>Earth to Ned*</li>
              <li>Encore!*</li>
              <li>The Big Fib*</li>
              <li>Be Our Chef*</li>
              <li>Shop Class*</li>
              <li>Fairy Tale Weddings*</li>
              <li>Family Sundays</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>TV series:</h4>
            <br />
            <ul>
              <li>Just Beyond*</li>
              <li>Diary of a Future President*</li>
              <li>The Mysterious Benedict Society*</li>
              <li>Big Shot*</li>
              <li>Muppets Now</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>TV series:</h4>
            <br />
            <ul>
              <li>Diary of a Wimpy Kid</li>
              <li>Goofy in How to Stay at Home</li>
              <li>Chip ‘n’ Dale: Park Life</li>
              <li>The Wonderful World of Mickey Mouse</li>
              <li>Zenimation</li>
              <li>Phineas and Ferb the Movie: Candace Against the Universe</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Movies:</h4>
            <br />
            <ul>
              <li>Muppets Haunted Mansion</li>
              <li>Flora & Ulysses*</li>
              <li>Black Beauty*</li>
              <li>Safety</li>
              <li>Clouds</li>
              <li>Secret Society of Second-Born Royals</li>
              <li>Magic Camp*</li>
              <li>Stargirl*</li>
              <li>Timmy Failure: Mistakes Were Made*</li>
              <li>Togo</li>
              <li>Godmothered</li>
              <li>Noelle</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Documentaries:</h4>
            <br />
            <ul>
              <li>Disney Insider</li>
              <li>Among the Stars*</li>
              <li>Stuntman*</li>
              <li>Behind the Attraction</li>
              <li>Wolfgang*</li>
              <li>Dolphin Reef</li>
              <li>On Pointe*</li>
              <li>Becoming</li>
              <li>The Imagineering Story</li>
              <li>Into the Unknown: Making Frozen II</li>
              <li>One Day at Disney</li>
              <li>Prop Culture*</li>
              <li>It’s a Dog’s Life with Bill Farmer*</li>
              <li>Elephant</li>
              <li>Penguins: Life on the Edge*</li>
              <li>Diving with Dolphins*</li>
              <li>In the Footsteps of Elephant*</li>
              <li>Pick of the Litter*</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4>Legacy remakes and sequels:</h4>
            <br />
            <ul>
              <li>Home Sweet Home Alone</li>
              <li>The Santa Clauses</li>
              <li>Olaf Presents</li>
              <li>Once Upon a Snowman</li>
              <li>High School Musical: The Musical: The Series</li>
              <li>Lady and the Tramp</li>
              <li>Turner & Hooch*</li>
              <li>Doogie Kameāloha, M.D.</li>
              <li>The Mighty Ducks: Game Changers*</li>
              <li>Disenchanted</li>
              <li>Hocus Pocus 2</li>
              <li>Willow*</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section  important-post-bg-white">
        <div className="head">
          <h2 className="sect-heading">
            <span> Exclusive Disney Channel content </span> on Disney Plus
          </h2>
          <p className="sect-desc">
            Technically, most Disney Channel content is excluded from the
            Disney+ Original brand, since you can also find it on cable.
            However, Disney’s been pushing some of its higher-budget and more
            mature content onto the streaming service (and away from its cable
            network). For example, while the first two Z.O.M.B.I.E.S. movies
            were Disney Channel Original Movies (DCOMS), the third installment
            was a Disney+ Original. This means its budget was also higher—sort
            of like how the third High School Musical movie was totally
            different from the first two because it also went to theaters.
            <br />
            Also, 2023’s DCOM, Prom Pact, was edited down before it aired on the
            Disney Channel. The original, PG-13 version is only available on
            Disney+, apparently because producers wanted to make sure parents
            were available to explain some topics, like “sex and parties,” to
            their kids whenever it came up in the plot.
            <br />
            Disney+ hosts almost every DCOM, and while they might not be Disney
            Plus originals, they’re worth checking out, if only for nostalgia’s
            sake. Here’s some of our favorites (cue the theme song):
          </p>
        </div>
        <div className="all-links">
          <Link href={"/"}>watch DCOMs on disney+</Link>
        </div>
        <Image src={animecartoon} className="animecartoon" alt="" />
        <p className="below-table">Prom Pact</p>
        <div className="package-table-container channels">
          <h4>The best Disney Channel Original Movies on Disney Plus:</h4>
          <br />
          <ul className="channel-list">
            <li>High School Musical</li>
            <li>Teen Beach Movie</li>
            <li>Descendants</li>
            <li>Phineas and Ferb the Movie: Across the 2nd Dimension</li>
            <li>Avalon High</li>
            <li>Halloweentown</li>
            <li>Twitches</li>
            <li>Camp Rock</li>
            <li>Wizards of Waverly Place: The Movie</li>
            <li>Princess Protection Program</li>
            <li>Minute Men</li>
            <li>The Cheetah Girls</li>
            <li>Jump In!</li>
            <li>Wendy Wu: Homecoming Warrior</li>
            <li>Cow Belles</li>
            <li>Now You See It…</li>
            <li>Kim Possible the Movie: So the Drama</li>
            <li>Stuck in the Suburbs</li>
            <li>The Thirteenth Year</li>
            <li>The Luck of the Irish</li>
          </ul>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>Disney Plus Originals </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What original series are on
                Disney Plus?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  There are too many Disney+ original series to name, although
                  you can check our Disney+ Originals guide for a more
                  comprehensive look. Here’s some of our favorites:
                </p>
                <br />
                <ul>
                  <li>Willow*</li>
                  <li>The Mysterious Benedict Society*</li>
                  <li>Moon Knight</li>
                  <li>Ms. Marvel</li>
                  <li>Hawkeye</li>
                  <li>WandaVision</li>
                  <li>The Mandalorian</li>
                  <li>Andor</li>
                  <li>The Proud Family: Louder and Prouder</li>
                </ul>
                <br />
                <p>*Removed from Disney+ on May 26, 2023.</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What original series are on Disney Plus?"}
            cssClass={"faq-content"}
          >
            <p>
              There are too many Disney+ original series to name, although you
              can check our Disney+ Originals guide for a more comprehensive
              look. Here’s some of our favorites:
            </p>
            <br />
            <ul>
              <li>Willow*</li>
              <li>The Mysterious Benedict Society*</li>
              <li>Moon Knight</li>
              <li>Ms. Marvel</li>
              <li>Hawkeye</li>
              <li>WandaVision</li>
              <li>The Mandalorian</li>
              <li>Andor</li>
              <li>The Proud Family: Louder and Prouder</li>
            </ul>
            <br />
            <p>*Removed from Disney+ on May 26, 2023.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does Disney Plus have
                original movies?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Yes, Disney Plus has original movies. These include movies
                  meant specifically for Disney+, like Disenchanted, and feature
                  films like Luca and Turning Red that were originally meant for
                  the theater but were released on the streaming platform thanks
                  to the pandemic.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does Disney Plus have original movies?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, Disney Plus has original movies. These include movies meant
              specifically for Disney+, like Disenchanted, and feature films
              like Luca and Turning Red that were originally meant for the
              theater but were released on the streaming platform thanks to the
              pandemic.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What was the first Disney Plus original show?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                The first Disney+ original shows aired on November 12, 2019, and included several titles: High School Musical: The Musical: The Series, The Mandalorian, Marvel’s Hero Project, The Imagineering Story, Encore!, Disney Family Sundays, Forky Asks a Question, Pixar in Real Life, SparkShorts, and The World According to Jeff Goldblum. Several of these shows no longer exist on the service, and never received a physical release.
                </p>
               
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" What was the first Disney Plus original show?"}
            cssClass={"faq-content"}
          >
            <p>
              The first Disney+ original shows aired on November 12, 2019, and
              included several titles: High School Musical: The Musical: The
              Series, The Mandalorian, Marvel’s Hero Project, The Imagineering
              Story, Encore!, Disney Family Sundays, Forky Asks a Question,
              Pixar in Real Life, SparkShorts, and The World According to Jeff
              Goldblum. Several of these shows no longer exist on the service,
              and never received a physical release.
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
            Our team has spent thousands of hours researching the best streaming
            services to bring you thoughtful recommendations and guides. Check
            out our How We Rank page for more information on our process.
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>What to Watch This Week</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Disney+ Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>What to Watch on Disney+</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Movies to Watch on Disney+</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Disney+ Bundles and Deals</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>
                  Apple Vision Pro Will Launch With Disney+
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default DisneyOriginals;
