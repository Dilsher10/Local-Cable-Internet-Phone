// import React, { useState } from "react";
import "./disney-what-to-watch.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { disneyNavLinks } from "../../assets/data/navLinks/disneyNavLinks";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import b1 from "../../assets/images/b-1.jpg";
import b2 from "../../assets/images/b-2.jpg";
import b3 from "../../assets/images/b-3.jpg";
import b4 from "../../assets/images/b-4.jpg";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "What To Watch On Disney Plus"
};

const DisneyWhatToWatch = () => {
  //   const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="disney-what-to-watch">
      {/* <SubNav links={disneyNavLinks} /> */}
      <div className="hidden-cost-hero global-inner-hero">
        <h1>What To Watch On Disney Plus January 2024</h1>
        <p>
          The Disney+ library is a deep one. We’ve picked a few of our favorite
          TV shows and movies to get you started.
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
            Disney+ has nearly 700 TV shows and movies in its Scrooge McDuck
            vault—where even to begin? We got the ball rolling with our Movies
            to Watch on Disney+ recommendations guide, and now we’re expanding
            into TV series and even more movies. Sure, there’s a little overlap,
            but have you ever complained about taking the same ride twice at
            Disneyland? Didn’t think so.
          </p>
          <br />
          <h4>New on Disney+ in January 2024</h4>
          <br />
          <ul className="channel-list">
            <li>Ax Men (season 10, January 3)</li>
            <li>Forged in Fire (seasons 7 and 8, January 3)</li>
            <li>History’s Greatest Mysteries (season 3, January 3)</li>
            <li>Modern Marvels (seasons 20 and 21, January 3)</li>
            <li>Storage Wars (seasons 12 and 13, January 3)</li>
            <li>X-Men (2000) (movie, January 5)</li>
            <li>The Incredible Pol Farm (series premiere, January 7)</li>
            <li>Marvel Studios’ Echo (series premiere, January 9)</li>
            <li>
              America’s Funniest Home Videos (seasons 24, 25, and 26, January
              17)
            </li>
            <li>Siempre Fui Yo (season 2 premiere, January 17)</li>
            <li>The Last Repair Shop (documentary, January 23)</li>
            <li>A Real Bug’s Life (series premiere, January 24)</li>
            <li>Me & Mickey (season 2, January 31)</li>
            <li>Choir (series premiere, January 31)</li>
            <li>Assembled: The Making of Echo (special, January 31)</li>
          </ul>
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
          <Link href={"#"}>Recommended TV shows on Disney+</Link>
          <Link href={"#"}> Recommended movies on Disney+ </Link>
          <Link href={"#"}>
            {" "}
            More recommended TV shows and movies on Disney+ (by genre){" "}
          </Link>
        </div>
      </div>

      <div className="section important-post">
        <div className="head">
          <h2 className="sect-heading">
            <span> Best shows </span> on Disney Plus
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
            <Image src={b1} alt="" />
          </div>
          <div className="inner-content">
            <h4>The Mandalorian | Action, sci-fi</h4>
            <p>
              The first Disney+ live-action Star Wars series remains the
              best—sorry, Book of Boba Fett and Obi-Wan Kenobi. The Mandalorian,
              which follows the titular character (voiced by the ever-helmeted
              Pedro Pascal) adventuring throughout the post-Empire galaxy,
              became an overnight hit in 2019 thanks to its compelling stories,
              dazzling CGI, and breakout character Baby Yoda (now known as
              Grogu, but still cute). Catch up on two seasons of pure Star Wars
              magic.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={b2} alt="" />
          </div>
          <div className="inner-content">
            <h4>Andor | Drama, sci-fi</h4>
            <p>
              However, The Mandalorian got some competition in 2022 from Andor.
              A sprawling prequel to Rogue One, Andor is a standout in the Star
              Wars universe. The series is more like Cold War thriller Tinker
              Tailor Soldier Spy than any other Disney+ Star Wars show, kind of
              a “Star Wars for adults.” Proof: The tense tale of Rebel Alliance
              fighter pilot Cassian Andor (Diego Luna) was written and directed
              by the people behind House of Cards, The Americans, and Black
              Mirror.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={b3} alt="" />
          </div>
          <div className="inner-content">
            <h4>Ms. Marvel | Action, comedy</h4>
            <p>
              This Disney+ series is different from its previous Marvel
              originals: it’s young, fun, color-splashed, culturally diverse,
              and veers even closer to YA territory than recent Spider-Man
              movies. Sixteen-year-old Muslim girl Kamala (Iman Vellani) is the
              biggest Captain Marvel fan in New Jersey, if not the world—so what
              happens when she’s suddenly gifted with superpowers similar to
              those of her hero? You get Ms. Marvel, a different MCU saga than
              you’ve ever seen before, in a great way
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={b4} alt="" />
          </div>
          <div className="inner-content">
            <h4>The Beatles: Get Back | Documentary, music</h4>
            <p>
              In 1969, Michael Lindsay-Hogg shot over 60 hours of footage of the
              Beatles’ final recording sessions, which became the albums Abbey
              Road and Let It Be. His resulting 1970 film Let It Be was only 80
              minutes long (including the Beatles’ famed London rooftop
              concert); director Peter Jackson (The Lord of the Rings) has
              edited the rest of the material into a six-hour rock-doc epic in
              three parts (Jackson likes his trilogies). Get Back is a must for
              Beatlemaniacs.
            </p>
          </div>
        </div>

        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4> More recommended TV shows on Disney Plus</h4>
          <br />
          <ul className="channel-list">
            <li>America’s National Parks</li>
            <li>Amphibia</li>
            <li>Darkwing Duck</li>
            <li>Glee</li>
            <li>High School Musical: The Musical: The Series</li>
            <li>Miraculous: Tales of Ladybug and Cat Noir</li>
            <li>Rapunzel’s Tangled Adventure</li>
            <li>Snowdrop</li>
            <li>The Ghost and Molly McGee</li>
            <li>The Simpsons</li>
          </ul>
          <br />
          <h4>Pro tip:</h4>
          <br />
          <p>
            Looking for titles like Just Beyond, Willow, and Marvel’s Runaways?
            Unfortunately, Disney+ removed dozens of original series from its
            platform in May 2023. If a new original series looks interesting to
            you, your best bet is to watch it fast before the next Disney purge.
          </p>
        </div>
      </div>

      <div className="section features">
        <div className="head">
          <h2 className="sect-heading">
            Best movies <span> on Disney Plus </span>
          </h2>
          <p className="sect-desc">
            Check out our Movies to Watch on Disney+ guide.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4> More recommended movies on Disney Plus</h4>
          <p className="after-heading"></p>
          <ul className="channel-list">
            <li>Black Is King</li>
            <li>Brave</li>
            <li>Enchanted</li>
            <li>Fantastic Mr. Fox</li>
            <li>The Little Mermaid</li>
            <li>Night at the Museum</li>
            <li>The Princess Diaries</li>
            <li>The Rocketeer</li>
            <li>Toy Story</li>
            <li>West Side Story</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4> Best Star Wars shows and movies on Disney Plus</h4>
          <p className="after-heading"></p>
          <ul className="channel-list">
            <li>The Book of Boba Fett</li>
            <li>Obi-Wan Kenobi</li>
            <li>Star Wars: A New Hope</li>
            <li>Star Wars: Rebels</li>
            <li>Star Wars: Return of the Jedi</li>
            <li>Star Wars: The Bad Batch</li>
            <li>Star Wars: The Clone Wars</li>
            <li>Star Wars: The Empire Strikes Back</li>
            <li>Star Wars: The Force Awakens</li>
            <li>Star Wars: The Last Jedi</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Best Marvel shows and movies on Disney Plus</h4>
          <p className="after-heading"></p>
          <ul className="channel-list">
            <li>Captain America: The Winter Soldier</li>
            <li>Daredevil</li>
            <li>Jessica Jones</li>
            <li>Hawkeye</li>
            <li>Iron Man</li>
            <li>Loki</li>
            <li>Moon Knight</li>
            <li>Shang-Chi and the Legend of the Ten Rings</li>
            <li>Thor: Ragnarok</li>
            <li>WandaVision</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Best kids’ shows and movies on Disney Plus</h4>
          <p className="after-heading"></p>
          <ul className="channel-list">
            <li>Bluey</li>
            <li>Dino ranch</li>
            <li>Jessie</li>
            <li>K.C. Undercover</li>
            <li>Kickin’ It</li>
            <li>Lab Rats</li>
            <li>Phil of the Future</li>
            <li>Shake It Up</li>
            <li>The Suite Life of Zack & Cody</li>
            <li>Wizards of Waverly Place</li>
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
          <h4>Best action/adventure shows and movies on Disney Plus</h4>
          <p className="after-heading"></p>
          <ul className="channel-list">
            <li>Adventures In Babysitting</li>
            <li>Alias</li>
            <li>Avatar</li>
            <li>Free Guy</li>
            <li>Free Solo</li>
            <li>Inspector Gadget</li>
            <li>Into the Woods</li>
            <li>Kazaam</li>
            <li>Once Upon a Time</li>
            <li>The Villains of Valley View</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Best animated shows and movies on Disney Plus</h4>
          <p className="after-heading"></p>
          <ul className="channel-list">
            <li>Baymax!</li>
            <li>DuckTales</li>
            <li>Dug Days</li>
            <li>Finding Nemo</li>
            <li>Gravity Falls</li>
            <li>Monsters Inc.</li>
            <li>Phineas & Ferb</li>
            <li>Ron’s Gone Wrong</li>
            <li>Turning Red</li>
            <li>Wreck-It Ralph</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Best comedy shows and movies on Disney Plus</h4>
          <p className="after-heading"></p>
          <ul className="channel-list">
            <li>8 Simple Rules</li>
            <li>10 Things I Hate About You</li>
            <li>Black-ish</li>
            <li>Diary of Wimpy Kid</li>
            <li>Grown-ish</li>
            <li>Hannah Montana</li>
            <li>Hocus Pocus</li>
            <li>Home Alone</li>
            <li>Muppets Now</li>
            <li>The Simpsons</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Best drama movies on Disney Plus</h4>
          <p className="after-heading"></p>
          <ul className="channel-list">
            <li>Black Beauty</li>
            <li>Dan In Real Life</li>
            <li>Edward Scissorhands</li>
            <li>The Fault In Our Stars</li>
            <li>Finest Hours</li>
            <li>Glory Road</li>
            <li>The Greatest Showman</li>
            <li>Mr. Holland’s Opus</li>
            <li>Remember the Titans</li>
            <li>While You Were Sleeping</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Best documentaries on Disney Plus</h4>
          <p className="after-heading"></p>
          <ul className="channel-list">
            <li>Atlantis Rising</li>
            <li>Drain the Oceans</li>
            <li>Howard</li>
            <li>The Imagineering Story</li>
            <li>Live Below Zero</li>
            <li>The Pixar Story</li>
            <li>Sharks of Lost Island</li>
            <li>Stuntman</li>
            <li>Summer of Soul</li>
            <li>Viking Warrior Women</li>
          </ul>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Disney Plus Originals </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What's the best thing on
                Disney Plus?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  The “best” is subjective, but we’re partial to these Disney+
                  originals:
                </p>
                <br />
                <ul>
                  <li>The Mandalorian</li>
                  <li>Andor</li>
                  <li>Ms. Marvel</li>
                  <li>The Beatles: Get Back</li>
                  <li>Doogie Kamealoha, M.D.</li>
                </ul>
                <p>We also like these movies on D</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What's the best thing on Disney Plus?"}
            cssClass={"faq-content"}
          >
            <p>
              The “best” is subjective, but we’re partial to these Disney+
              originals:
            </p>
            <br />
            <ul>
              <li>The Mandalorian</li>
              <li>Andor</li>
              <li>Ms. Marvel</li>
              <li>The Beatles: Get Back</li>
              <li>Doogie Kamealoha, M.D.</li>
            </ul>
            <p>We also like these movies on D</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is Harry Potter on Disney
                Plus?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  The Harry Potter movie series is not on Disney+. You can
                  stream the Hogwarts adventures on HBO Max and Peacock.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Is Harry Potter on Disney Plus?"}
            cssClass={"faq-content"}
          >
            <p>
              The Harry Potter movie series is not on Disney+. You can stream
              the Hogwarts adventures on HBO Max and Peacock.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What's on Disney Plus for
                Adults?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  There are plenty of documentaries and movies on Disney+ for
                  grownups, as well as the gritty Marvel series that originated
                  on Netflix: Daredevil, Jessica Jones, The Punisher, and
                  others.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" What's on Disney Plus for Adults?"}
            cssClass={"faq-content"}
          >
            <p>
              There are plenty of documentaries and movies on Disney+ for
              grownups, as well as the gritty Marvel series that originated on
              Netflix: Daredevil, Jessica Jones, The Punisher, and others.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> When will Avatar 2 be on
                Disney Plus?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Avatar: The Way of Water will be available to stream on
                  Disney+ starting on Wednesday, June 7. The Avatar sequel will
                  also be available to stream on Max (formerly HBO Max) on that
                  same date.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" When will Avatar 2 be on Disney Plus?"}
            cssClass={"faq-content"}
          >
            <p>
              Avatar: The Way of Water will be available to stream on Disney+
              starting on Wednesday, June 7. The Avatar sequel will also be
              available to stream on Max (formerly HBO Max) on that same date.
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
                <Link href={"#"}>Disney+ Review</Link>
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
                <Link href={"#"}>Best Streaming Services 2022</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default DisneyWhatToWatch;
