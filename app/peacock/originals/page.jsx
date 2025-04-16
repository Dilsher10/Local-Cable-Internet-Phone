// import React, { useState } from "react";
import "./peacock-originals.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { peacockNavLinks } from "../../assets/data/navLinks/peacockNavLinks";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
// import Newsletter from "../../components/newsletter/Newsletter";
import ap from "../../assets/images/ap.jpg";
import dr from "../../assets/images/dr.jpg";
import we from "../../assets/images/we.jpg";
import one from "../../assets/images/one.jpg";
import based from "../../assets/images/based.jpg";
import amber from "../../assets/images/amber.jpg";

export const metadata = {
  title: "Peacock Original Shows"
};

const PeacockOriginals = () => {
//   const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="peacock-originals">
      {/* <SubNav links={peacockNavLinks} /> */}
      <div className="hidden-cost-hero global-inner-hero">
        <h1>Peacock Original Shows</h1>
        <p>
          It’s not all about The Office: Besides thousands of TV shows and
          movies, Peacock also carries nearly 100 exclusive original series.
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
          <h4>What shows are on Peacock?</h4>
          <br />
          <p>
            Besides being the only place where you can stream The Office, Parks
            <br />
            You probably know Peacock as that streaming service with The Office,
            New Girl, and other classics; you probably don’t know that it also
            produces its own original content. Heard of Twisted Metal,
            MacGruber, or Poker Face? They’re just three of nearly 100 Peacock
            originals.
            <br />
            Compared to other on-demand streamers like Netflix and Max, Peacock
            is still a bit of a small fry when it comes to original shows. But,
            there are some real gems to be found in Peacock’s NBCUniversal-fed
            library.
            <br />
            In addition to those, we’ve highlighted a few of our other favorite
            Peacock Originals—you can’t live on Jim and Dwight’s Office antics
            alone, so try these out.
          </p>
        </div>
      </div>

      <div className="section shows">
        <div className="head">
          <h2 className="sect-heading">
            Peacock <span> Original Shows </span>
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
          <Link href={"#"}> view peacock plans </Link>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={ap} alt="" />
          </div>
          <div className="inner-content">
            <h4>A.P. Bio | Comedy</h4>
            <p>
              When narcissistic Harvard philosophy professor Jack Griffin (Glenn
              Howerton, It’s Always Sunny in Philadelphia) loses his dream job
              to a rival, he returns to his hometown of Toledo to teach high
              school A.P. Bio. Well, not really: Jack’s bent on revenge and uses
              his class of honor roll students to get it. A.P. Bio is a
              subversively funny comedy with a killer cast of veterans
              (including Patton Oswalt and Paula Pell) and sharp young actors
              delivering 42 solid episodes.
            </p>
          </div>
        </div>
        <div className="post">
          <div className="inner-img">
            <Image src={dr} alt="" />
          </div>
          <div className="inner-content">
            <h4>Dr. Death | Drama, thriller</h4>
            <p>
              Dr. Death, a 2021 true crime miniseries based on the podcast of
              the same name, might make you swear off medical visits forever.
              Joshua Jackson stars as Dr. Christopher Duntsch, a Texas
              neurosurgeon who’s also a psychopathic narcissist with a
              malpractice body count of maimed and killed patients—hence the Dr.
              Death nickname. The eight-episode series follows Duntsch’s mental
              decline and the fellow doctors (played by Alec Baldwin and
              Christian Slater) trying to stop him. It’s a gripping, terrifying
              (and true) tale.
            </p>
          </div>
        </div>
        <div className="post">
          <div className="inner-img">
            <Image src={we} alt="" />
          </div>
          <div className="inner-content">
            <h4>We Are Lady Parts | Comedy</h4>
            <p>
              British import We Are Lady Parts is a fast and funny comedy about
              four Muslim women (Anjana Vasan, Sarah Kameela Impey, Juliette
              Motamed, and Faith Omole) who form a London punk band. Ph.D.
              student Amina (Vasan) is Lady Parts’ unlikely new lead guitarist,
              a shy nerd unlike her new band of outspoken outcasts—but, on their
              journey to land a gig, rocking leads to bonding. We Are Lady Parts
              is as much about Amina discovering herself as it is about the
              music (which includes catchy songs like “Nobody’s Gonna Honour
              Kill My Sister But Me”).
            </p>
          </div>
        </div>
        <div className="post">
          <div className="inner-img">
            <Image src={one} alt="" />
          </div>
          <div className="inner-content">
            <h4>One of Us is Lying | Drama, mystery</h4>
            <p>
              Five high school students are sent to detention, but only four
              come out alive—did one of them murder their classmate Simon?
              That’s the mystery at the center of One of Us is Lying, a 2021
              series based on Karen M. McManus’s hit YA novel. One of Us is
              Lying tells the story from each of the characters’ perspectives,
              all of whom had motives to kill Simon, who ran an online gossip
              forum with dirt on everyone at school. Like Pretty Little Liars
              meets The Breakfast Club, One of Us is Lying is a twisty mystery
              that’ produced two solid seasons.
            </p>
          </div>
        </div>
        <div className="post">
          <div className="inner-img">
            <Image src={based} alt="" />
          </div>
          <div className="inner-content">
            <h4>Based on a True Story | Comedy, drama</h4>
            <p>
              A true-crime-fanatic realtor (Kaley Cuoco) deduces the identity of
              a serial killer terrorizing L.A. and, instead of alerting the
              police, decides to launch an interview podcast with the murderer.
              Since they’re broke with a baby on the way, her ex-tennis pro
              husband (Chris Messina) agrees to her bonkers cash-in plan—and it
              gets even weirder from there. The darkly comic Based on a True
              Story was created by The Boys’ Craig Rosenberg, and season 2 is on
              the way.
            </p>
          </div>
        </div>
        <div className="post">
          <div className="inner-img">
            <Image src={amber} alt="" />
          </div>
          <div className="inner-content">
            <h4>The Amber Ruffin Show | Comedy, talk</h4>
            <p>
              In a TV-news-with-jokes landscape full of white dudes with nightly
              hour-long shows, Amber Ruffin squeezes enough real talk, gags,
              sketches, musical numbers, and margaritas into a single weekly
              half-hour to rival them all. Ruffin, a staff writer for one of
              those dudes (Seth Meyers), and sidekick Tarik Davis are the life
              of the late-night party, even when they had to perform their
              Emmy-nominated first season in an empty studio with no audience.
              The Amber Ruffin Show is the only talk show you need.
            </p>
          </div>
        </div>
      </div>

      <div className="section important-channels">
        <div className="head">
          <h2 className="sect-heading">
            More <span> Peacock original shows</span>
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
          <h4> Peacock original comedies</h4>
          <br />
          <ul className="channel-list">
            <li>A.P. Bio</li>
            <li>The Amber Ruffin Show </li>
            <li>Bubkis</li>
            <li>Bumper in Berlin</li>
            <li>Carmen Christopher: Street Special</li>
            <li>Code 404</li>
            <li>Five Bedrooms</li>
            <li>Girls5eva</li>
            <li>Good Timing with Jo Firestone</li>
            <li>Hitmen</li>
            <li>The Housewives of the North Pole</li>
            <li>Intelligence</li>
            <li>Killing It</li>
            <li>MacGruber</li>
            <li>Paul T. Goldman</li>
            <li>Poker Face</li>
            <li>Psych 3: This is Gus</li>
            <li>Rutherford Falls</li>
            <li>Saved by the Bell</li>
            <li>True Story with Ed & Randall</li>
            <li>Twisted Metal</li>
            <li>We Are Lady Parts</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4> Peacock original dramas</h4>
          <br />
          <ul className="channel-list">
            <li>Anthony</li>
            <li>Bel-Air</li>
            <li>Brave New World</li>
            <li>Capture The</li>
            <li>Dan Brown’s The Lost Symbol</li>
            <li>Days of Our Lives: A Very Salem Christmas</li>
            <li>Days of Our Lives: Beyond Salem</li>
            <li>Departure</li>
            <li>Dime Quién Soy: Mistress of War</li>
            <li>Dr. Death</li>
            <li>The Girl in the Woods</li>
            <li>Intergalactic</li>
            <li>Joe vs. Carole</li>
            <li>Mr. Mercedes</li>
            <li>One of Us is Lying</li>
            <li>The Resort</li>
            <li>Save Me</li>
            <li>Smother</li>
            <li>Vigil</li>
            <li>Wolf Like Me</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4> Peacock original reality shows</h4>
          <br />
          <ul className="channel-list">
            <li>Paris in Love</li>
            <li>The Real Housewives of Miami</li>
            <li>The Real Housewives: Ultimate Girls Trip</li>
            <li>Reported with Sam Seder</li>
            <li>Siwas Dance Pop Revolution</li>
            <li>Snoop & Martha’s Very Tasty Halloween</li>
            <li>Top Chef Family Style</li>
            <li>Unidentified with Demi Lovato</li>
            <li>Vanderpump Dogs</li>
            <li>Zerlina</li>
            <li>Baking It</li>
            <li>Born for Business</li>
            <li>Brother from Another</li>
            <li>Ex-Rated with Andy Cohen</li>
            <li>Frogger</li>
            <li>Hart to Heart</li>
            <li>Mehdi Hasan Show The</li>
            <li>Miley Cyrus Presents Stand by You</li>
            <li>Overview The</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4> Peacock original documentaries</h4>
          <br />
          <ul className="channel-list">
            <li>The ’96 Effect</li>
            <li>American Rock Stars</li>
            <li>Black Boys</li>
            <li>Chase</li>
            <li>Civil War</li>
            <li>Dr. Death: The Undoctored Story</li>
            <li>Earnin’ It: The NFL’s Forward Progress</li>
            <li>Epstein’s Shadow: Ghislaine Maxwell</li>
            <li>Fireside History with Michael Beschloss</li>
            <li>For Ball and Country</li>
            <li>Freedia Got a Gun</li>
            <li>Golden: The Journey of USA’s Elite Gymnasts</li>
            <li>Joe Montana: Cool Under Pressure</li>
            <li>John Wayne Gacy: Devil in Disguise</li>
            <li>Kamone</li>
            <li>Lost Speedways with Dale Earnhardt Jr.</li>
            <li>Michael Phelps: Memories, Medals & More</li>
            <li>Monster in the Shadows</li>
            <li>The Murder of Gabby Petito</li>
            <li>Picabo</li>
            <li>The Sit-In: Harry Belafonte Hosts the Tonight Show</li>
            <li>The Toolbox Killer</li>
            <li>True Colors</li>
            <li>Use of Force: The Policing of Black America</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4> Peacock original kids’ shows </h4>
          <br />
          <ul className="channel-list">
            <li>American Ninja Warrior Junior</li>
            <li>Archibald’s Next Big Thing is Here!</li>
            <li>Babble Bop!</li>
            <li>Backyard Blowout</li>
            <li>Cleopatra in Space</li>
            <li>Create the Escape</li>
            <li>Curious George</li>
            <li>Curious George: Cape Ahoy</li>
            <li>Curious George: Go West, Go Wild</li>
            <li>Dragons Rescue Riders: Heroes of the Sky</li>
            <li>The Kids Tonight Show</li>
            <li>Supernatural Academy</li>
            <li>Take Note</li>
            <li>Where’s Waldo?</li>
          </ul>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>Related articles </h4>

          <ul>
            <li>
              <span className="link">
                <Link href={"/"}> What to Watch on Peacock</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"/"}> Peacock Review</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"/"}> Peacock Live TV</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

{/* <Newsletter /> */}
    </div>
  );
};

export default PeacockOriginals;
