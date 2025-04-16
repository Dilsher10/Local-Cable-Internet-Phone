// import React, { useState } from "react";
import "./disney-movies.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { disneyNavLinks } from "../../assets/data/navLinks/disneyNavLinks";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import c1 from "../../assets/images/c-1.jpg";
import c2 from "../../assets/images/c-2.jpg";
import c3 from "../../assets/images/c-3.jpg";
import c4 from "../../assets/images/c-4.jpg";
import c5 from "../../assets/images/c-5.jpg";
import c6 from "../../assets/images/c-6.jpg";
import c7 from "../../assets/images/c-7.jpg";
import c8 from "../../assets/images/c-8.jpg";
import c9 from "../../assets/images/c-9.jpg";
import c10 from "../../assets/images/c-10.jpg";
import { RiChat4Fill } from "react-icons/ri";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Movies To Watch On Disney+"
};

const DisneyMovies = () => {
//   const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="disney-movies">
      {/* <SubNav links={disneyNavLinks} /> */}
      <div className="hidden-cost-hero global-inner-hero">
        <h1>Movies To Watch On Disney+</h1>
        <p>
          Don’t be intimidated by Disney+’s massive movie catalog: we have 80
          recommendations to get you started.
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
            From Disney classics to Pixar, and from Marvel to Star Wars,
            Disney+’s library features more mega-hits and beloved franchises
            than all other streaming services combined. And its new, original
            content is pretty good too, when it sticks around for longer than a
            few months.
            <br />
            In all, Disney+ has over 500 movies available to stream—so narrowing
            down a list of our favorites wasn’t easy. We know 500 movies sounds
            like a lot; it’s best to start small. We’ve picked our favorites to
            get you started.
          </p>
        </div>
      </div>

      <div className="section important-post">
        <div className="head">
          <h2 className="sect-heading">
            Disney Plus <span> movie recommendations </span>
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
          <Link href={"#"}>view Disney+ plans </Link>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={c1} alt="" />
          </div>
          <div className="inner-content">
            <h4>Black Widow (2021)</h4>
            <p>
              One of the more recent releases from the Marvel Cinematic Universe
              is also a bit of a departure: Black Widow, the sort-of origin
              story of MCU veteran Natasha Romanoff (Scarlett Johansson), is a
              spy thriller with a soul rather than a battle-laden,
              special-effects-rich superhero blowout (but don’t worry—it still
              has some killer combat scenes).
              <br />
              Black Widow also introduces Natasha’s sister Yelena (Florence
              Pugh), a spirited, firecracker contrast to Johansson’s stoic spy.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={c2} alt="" />
          </div>
          <div className="inner-content">
            <h4>Thor: Ragnarok (2017)</h4>
            <p>
              Speaking of departures, 2017’s Thor: Ragnarok took the
              semi-serious MCU template and blew it up into super-sized comedy,
              thanks to the aggressive silliness of director Taika Waititi.
              <br />
              Ragnarok finds Thor (Chris Hemsworth) showing off his comedic
              chops while being held prisoner on a planet ruled by Grandmaster
              (Jeff Goldblum) with Hulk/Bruce Banner (Mark Ruffalo) and Loki
              (Tom Hiddleston). If you watch only one Marvel movie ever, make it
              Thor: Ragnarok.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={c3} alt="" />
          </div>
          <div className="inner-content">
            <h4>Star Wars: A New Hope (1977)</h4>
            <p>
              The one that started it all, the epic movie formerly known as
              simply Star Wars, thrilled the planet in 1977 and still holds up
              today.
              <br />
              The reluctant hero’s journey of Luke Skywalker (Mark Hamill) is
              ingrained in pop culture, spawning sequels, prequels, cartoons,
              and spin-offs for over 40 years, including Disney+ insta-hit The
              Mandalorian. Star Wars’s special effects might look a little
              clunky now, but the story is a classic good vs. evil fable full of
              underdog heart and fortitude.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={c4} alt="" />
          </div>
          <div className="inner-content">
            <h4>Rogue One: A Star Wars Story (2016)</h4>
            <p>
              Like the Han Solo–centric Solo, Rogue One is a standalone feature
              outside of the typical Star Wars trilogy releases, set just before
              the events of A New Hope (and after Disney+ prequel Andor).
              <br />
              Rogue One follows a Rebel Alliance mission to steal the plans for
              the Death Star, led by Jyn Erso (Felicity Jones), a young woman
              with a score to settle against the Empire. Come for the fresh
              story and characters, stay for the spectacular battle on the
              oceanic planet Scarif.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={c5} alt="" />
          </div>
          <div className="inner-content">
            <h4> Toy Story (1995)</h4>
            <p>
              The first Pixar full-length feature is still one of the best—how
              do you top the dream team of Woody, Buzz Lightyear, and Mr. Potato
              Head?
              <br />
              Besides scoring a rare 100% rating on Rotten Tomatoes, the
              computer-animated Toy Story is also the benchmark for “kids”
              movies that have equal appeal to adults, with jokes and heartfelt
              moments that work on several levels.
            </p>
          </div>
        </div>

        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4> Toy Story (1995)</h4>
          <h4>Pro tip:</h4>
          <br />
          <p>
            Want to expand your streaming universe from Marvel, Star Wars, and
            Pixar? Check out our guide to the Best Streaming Services to see
            what else is out there.
          </p>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={c6} alt="" />
          </div>
          <div className="inner-content">
            <h4> Monsters Inc. (2001) </h4>
            <p>
              Another Pixar landmark, Monsters Inc. is about pals Sully (voiced
              by Billy Crystal) and Mike (John Goodman), a pair of furry
              creatures who work at a factory supplying power to Monstropolis.
              <br />
              That power is generated by scaring human children, one of whom
              somehow makes her way into the factory—now it’s up to Scully and
              Mike to get her out before she’s discovered. Monsters Inc. is as
              inventive as it is hilarious, and a near equal to Toy Story.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={c7} alt="" />
          </div>
          <div className="inner-content">
            <h4> The Incredibles (2004) </h4>
            <p>
              Like Toy Story and Monsters Inc., The Incredibles was an overnight
              hit with audiences and critics upon release, introducing dazzling
              superhero action into the Pixar lexicon, as well as more adult
              themes and the studio’s first PG rating.
              <br />
              It’s also been called “the perfect Fantastic Four movie that
              Marvel can’t seem to make” by comic-book purists. Besides
              relatable family dynamics, The Incredibles also features one of
              the best Disney villains ever, Syndrome (voiced by Jason Lee).
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={c8} alt="" />
          </div>
          <div className="inner-content">
            <h4> Inside Out (2015) </h4>
            <p>
              Pixar dominates this list because, well, the studio is brimming
              with clever ideas like Inside Out, which literally animates a
              young girl’s emotions.
              <br />
              With her life in upheaval, the girl’s emotions, Joy (voiced by Amy
              Poehler), Sadness (Phyllis Smith), Fear (Bill Hader), Disgust
              (Mindy Kaling), and Anger (Lewis Black) fight to keep each other
              in check. Besides being a fantastical and colorful ride, Inside
              Out makes you feel the feels and think the thinks.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={c9} alt="" />
          </div>
          <div className="inner-content">
            <h4>Soul (2020) </h4>
            <p>
              If emotions and psychology are heavy themes for a children’s
              movie, Pixar’s Soul takes it even further with the concepts of
              life, death, and the titular soul.
              <br />
              Just as Joe (voiced by Jamie Foxx) is about to get his big break
              as a professional jazz pianist, he has an accident that puts him
              in a coma and near death. Refusing to accept this fate, Joe
              escapes the Great Before, the waiting site of souls, and returns
              to Earth with the help of 22 (Tina Fey). There’s plenty of soul in
              Soul.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={c10} alt="" />
          </div>
          <div className="inner-content">
            <h4>Fantasia (1940) </h4>
            <p>
              Twelve years after his debut, Disney star Mickey Mouse was due for
              a comeback—1940’s ambitious Fantasia was the vehicle for it. The
              gorgeously animated feature, set to classical music and mostly
              dialogue-free, includes prehistoric and mythological imagery,
              ballet-dancing hippos, and a frightening demonic interlude.
              <br />
              But it’s Mickey’s magical dabbling in the painstakingly detailed
              Sorcerer’s Apprentice section that steals the show, and Fantasia
              is still utterly unique over 80 years later.
            </p>
          </div>
        </div>
      </div>

      <div className="section features">
        <div className="head">
          <h2 className="sect-heading">
            More Disney <span> Plus movie recommendations </span>
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
          <h4> Recommended Disney+ original movies</h4>
          <p className="after-heading"></p>
          <ul className="channel-list">
            <li>Diary of a Wimpy Kid</li>
            <li>Disenchanted</li>
            <li>Godmothered</li>
            <li>Hamilton</li>
            <li>Hocus Pocus 2</li>
            <li>Lady and the Tramp</li>
            <li>Luca</li>
            <li>Peter Pan & Wendy</li>
            <li>Safety</li>
            <li>Zombies 3</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4> Recommended Star Wars movies on Disney+</h4>
          <p className="after-heading"></p>
          <ul className="channel-list">
            <li>LEGO Star Wars Holiday Special</li>
            <li>Star Wars: Attack of the Clones</li>
            <li>Star Wars: The Clone Wars</li>
            <li>Star Wars: Return of the Jedi</li>
            <li>Star Wars: Revenge of the Sith</li>
            <li>Star Wars: The Empire Strikes Back</li>
            <li>Star Wars: The Force Awakens</li>
            <li>Star Wars: The Last Jedi</li>
            <li>Star Wars: The Phantom Menace</li>
            <li>Star Wars: The Rise of Skywalker</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Recommended Marvel movies on Disney+</h4>
          <p className="after-heading"></p>
          <ul className="channel-list">
            <li>Ant-Man</li>
            <li>Avengers: Endgame</li>
            <li>Black Panther</li>
            <li>Captain America: The First Avenger</li>
            <li>Captain America: The Winter Soldier</li>
            <li>Captain Marvel</li>
            <li>Doctor Strange</li>
            <li>Guardians of the Galaxy</li>
            <li>Shang-Chi and the Legend of the 10 Rings</li>
            <li>Werewolf by Night</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Recommended Pixar movies on Disney+</h4>
          <p className="after-heading"></p>
          <ul className="channel-list">
            <li>Brave</li>
            <li>Cars</li>
            <li>Coco</li>
            <li>Finding Nemo</li>
            <li>The Good Dinosaur</li>
            <li>Luca</li>
            <li>Onward</li>
            <li>Ratatouille</li>
            <li>Up</li>
            <li>Wall-E</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Recommended animated movies on Disney+</h4>
          <p className="after-heading"></p>
          <ul className="channel-list">
            <li>Big Hero 6</li>
            <li>Bolt</li>
            <li>Fantastic Mr. Fox</li>
            <li>Frozen</li>
            <li>Lion King</li>
            <li>Mulan</li>
            <li>Raya and the Last Dragon</li>
            <li>The Simpsons Movie</li>
            <li>Tangled</li>
            <li>Wreck-It Ralph</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Recommended comedy movies on Disney+ </h4>
          <p className="after-heading"></p>
          <ul className="channel-list">
            <li>10 Things I Hate About You</li>
            <li>Cadet Kelly</li>
            <li>The Cat from Outer Space</li>
            <li>Cheaper by the Dozen</li>
            <li>D2: The Mighty Ducks</li>
            <li>Flubber</li>
            <li>Freaky Friday</li>
            <li>The Lizzie McGuire Movie</li>
            <li>Mrs. Doubtfire</li>
            <li>The Muppet Movie</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Recommended action-adventure movies on Disney+</h4>
          <p className="after-heading"></p>
          <ul className="channel-list">
            <li>Adventures in Babysitting</li>
            <li>Avatar</li>
            <li>Eight Below</li>
            <li>Free Solo</li>
            <li>Jungle Cruise</li>
            <li>Pirates of the Caribbean</li>
            <li>Princess Bride</li>
            <li>The Secret Society of Second-Born Royals</li>
            <li>Sky High</li>
            <li>Tron</li>
          </ul>
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
                <Link href={"#"}>Disney Plus Review

</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>How to Watch The Book of Boba Fett</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Streaming Services</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

{/* <Newsletter /> */}
    </div>
  );
};

export default DisneyMovies;
