// import React, { useState } from "react";
import "./peacock-what-to-watch.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { peacockNavLinks } from "../../assets/data/navLinks/peacockNavLinks";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
// import Newsletter from "../../components/newsletter/Newsletter";
import pokerface from "../../assets/images/poker-face.jpg";
import pual from "../../assets/images/pual.jpg";
import base from "../../assets/images/base.jpg";
import charmed from "../../assets/images/charmed.jpg";
import mac from "../../assets/images/mac.jpg";
import quotationIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";

export const metadata = {
  title: "What To Watch On Peacock"
};

const PeacockWhatToWatch = () => {
//   const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="peacock-what-to-watch">
      {/* <SubNav links={peacockNavLinks} /> */}
      <div className="hidden-cost-hero global-inner-hero">
        <h1>What To Watch On Peacock January 2024</h1>
        <p>
          Peacock has thousands of TV shows and movies, but where to start? We
          have over 150 suggestions.
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
            and Recreation, and Battlestar Galactica (big early-2000s energy
            here), Peacock also carries 20,000 hours of movies, TV shows, and
            sports events. But it’s not equal in all areas.
            <br />
            Peacock is best for streaming TV series—both older shows and current
            day-after-broadcast NBC titles—and its growing stable
            of gut-splitting originals like Poker Face and Paul T. Goldman. Its
            movie library is no threat to Max or Paramount+, and its live sports
            coverage still has some growing pains (though WWE wrestling, the
            Olympics, and international soccer have been solid hits for
            Peacock).
            <br />
            We’ve come up with over 150 Peacock streaming recommendations here,
            which you can watch on either of Peacock’s Premium plans
            (ad-supported or ad-free).
          </p>
          <br />
          <h4>New on Peacock in January 2024</h4>
          <ul className="channel-list">
            <li>
              America’s Got Talent: Fantasy League (New series, January 2)
            </li>
            <li>Le Brea (Season 3 premiere, January 10)</li>
            <li>Found (Season 1 winter premiere, January 10)</li>
            <li>The Traitors (Season 2 premiere, January 12)</li>
            <li>Chicago Fire (Season 12 premiere, January 18)</li>
            <li>Chicago Med (Season 9 premiere, January 18)</li>
            <li>Chicago P.D. (Season 11 premiere, January 18)</li>
            <li>Law & Order (Season 23 premiere, January 19)</li>
            <li>Law & Order: SVU (Season 25 premiere, January 19)</li>
            <li>The Irrational (Season 1 winter premiere, January 30)</li>
          </ul>
        </div>
      </div>

      <div className="section shows">
        <div className="head">
          <h2 className="sect-heading">
            Best TV Shows <span> on Peacock </span>
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
            <Image src={pokerface} alt="" />
          </div>
          <div className="inner-content">
            <h4>Poker Face | Comedy, mystery</h4>
            <p>
              Fugitive from the law Charlie Cale (Natasha Lyonne) travels New
              Mexico, taking odd jobs on the down-low and solving murders with
              her acute talent for pinpointing liars. Like Columbo with a
              bitchin’ blue Barracuda instead of a trench coat, Charlie breezes
              from locale to locale, stumbling upon a new case in every episode
              of Poker Face—a Rian Johnson (Knives Out) creation, BTW. Thanks to
              him and Lyonne’s winning performance, Peacock has one of its
              biggest hits ever.
            </p>
          </div>
        </div>
        <div className="post">
          <div className="inner-img">
            <Image src={pual} alt="" />
          </div>
          <div className="inner-content">
            <h4>Paul T. Goldman | Comedy, reality</h4>
            <p>
              The life of everyman Paul T. Goldman (Paul T. Goldman) has been
              documented for over 10 years by director Jason Woliner—maybe.
              Woliner directed Borat Subsequent Moviefilm, so he can’t be
              trusted. A “docuseries” about marital fraud victim Goldman turns
              into a bizarre true-crime satire, as non-actor Goldman portrays
              himself in a biopic and a behind-the-scenes reality show, all
              based on his book. Is anything here real? Woliner and Goldman keep
              you guessing.
            </p>
          </div>
        </div>
        <div className="post">
          <div className="inner-img">
            <Image src={base} alt="" />
          </div>
          <div className="inner-content">
            <h4>Bates Motel | Drama, thriller</h4>
            <p>
              Bates Motel, a 2013–2017 A&E series, is a modern-day prequel to
              horror classic Psycho that chronicles the origins of future killer
              Norman Bates (Freddie Highmore) and his mother Norma (Vera
              Farmiga). The dark drama doesn’t let up on the suspense and
              creeping terror over five 10-episode seasons, with Highmore and
              Farmiga turning in fantastically fraught performances. Bates
              Motel’s winding story leads nicely into Psycho, which is also on
              Peacock.
            </p>
          </div>
        </div>
        <div className="post">
          <div className="inner-img">
            <Image src={charmed} alt="" />
          </div>
          <div className="inner-content">
            <h4>Charmed | Drama, fantasy</h4>
            <p>
              The CW’s recent reboot is a nice update, but the original
              1998–2006 Charmed can’t be beaten when it comes to fun fantasy
              cheese. Witch sisters Phoebe (Alyssa Milano), Prue (Shannen
              Doherty), and Piper (Holly Marie Combs) battle demons and warlocks
              while trying to hold their personal lives together. Charmed gets
              progressively wackier over eight seasons, with new witches
              (including Rose McGowan and Kaley Cuoco) being introduced along
              the way.
            </p>
          </div>
        </div>
        <div className="post">
          <div className="inner-img">
            <Image src={mac} alt="" />
          </div>
          <div className="inner-content">
            <h4>MacGruber | Comedy</h4>
            <p>
              Several seasons as a Saturday Night Live sketch led to 2010 cult
              flick MacGruber, which surprisingly turned up again in 2021 as an
              eight-episode Peacock original series, also entitled MacGruber.
              Creator and star Will Forte takes this iteration to the limits of
              sanity and good taste, with super-patriot MacGruber being sprung
              from prison to save the world from evil supervillain Enos Queeth
              (Billy Zane). Kristen Wiig and Ryan Phillippe also return as
              sidekicks Vicki and Dixon.
            </p>
          </div>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={quotationIcon} className="mark" alt="" />
          <h4>More recommended TV shows on Peacock </h4>

          <ul className="channel-list">
            <li>30 Rock</li>
            <li>3rd Rock from the Sun</li>
            <li>The Fall</li>
            <li>House</li>
            <li>Joe vs. Carole</li>
            <li>New Amsterdam</li>
            <li>Psych</li>
            <li>Saturday Night Live</li>
            <li>Weeds</li>
            <li>Wolf Like Me</li>
          </ul>
        </div>
      </div>

      <CTA
        heading={"Stream better with a faster internet connection"}
        desc={
          "Wanna speed up your download speeds? Enter your zip code below to see top internet providers in your area."
        }
      />

      <div className="section shows">
        <div className="head">
          <h2 className="sect-heading">
            Good movies <span> on Peacock </span>
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
            <Image src={pokerface} alt="" />
          </div>
          <div className="inner-content">
            <h4>M3GAN | Horror, sci-fi</h4>
            <p>
              Seattle toy company roboticist Gemma (Allison Williams) brings AI
              prototype doll M3GAN home for her niece Cady (Violet McGraw)—what
              could possibly go wrong? As you’ve probably guessed, M3GAN becomes
              sentient and murderously protective of Cady. Unlike his similar
              Annabelle, producer/writer James Wan has injected a sense of black
              humor into M3GAN, like Chucky with better hair. If you’ve wondered
              if 2022’s most left-field hit movie earns the hype, dig in.
            </p>
          </div>
        </div>
        <div className="post">
          <div className="inner-img">
            <Image src={pual} alt="" />
          </div>
          <div className="inner-content">
            <h4>Nope | Horror, sci-fi</h4>
            <p>
              Sibling ranchers OJ (Daniel Kaluuya) and Em (Keke Palmer) discover
              an airborne alien entity feeding on their livestock, and it’s
              coming for them next if they don’t take it down. Writer/director
              Jordan Peele’s Nope has been called his “most enjoyable” and
              “creepiest” film to date, a semi-tribute to the sci-fi of Steven
              Spielberg and Paul Verhoeven that lays the tension and dark comedy
              on thick. And really, is there a better title for a horror movie
              than Nope? Nope.
            </p>
          </div>
        </div>
        <div className="post">
          <div className="inner-img">
            <Image src={base} alt="" />
          </div>
          <div className="inner-content">
            <h4>Casino | Drama</h4>
            <p>
              Martin Scorsese’s sprawling 1995 crime epic Casino is one of the
              greatest mob movies of all time, mostly because it’s so
              well-written and filmed that you don’t even notice that it’s three
              hours long. The tragicomic tale of good times gone bad in ’70s and
              ’80s Las Vegas is carried by a killer cast (Robert De Niro, Sharon
              Stone, Joe Pesci, Kevin Pollack, and James Woods) and a
              dangerously deep knowledge of Sin City mafia practices. Spoiler:
              it doesn’t end well.
            </p>
          </div>
        </div>
        <div className="post">
          <div className="inner-img">
            <Image src={charmed} alt="" />
          </div>
          <div className="inner-content">
            <h4>Speed | Action, drama</h4>
            <p>
              Speaking of the ’90s, 1994’s Speed is up there with Die Hard in
              the action-flick annals and made Keanu Reeves and Sandra Bullock
              overnight stars (but somehow, not Succession’s Alan Ruck). The
              bomb-on-the-bus thriller still holds up better than its imitators,
              and don’t skip the wrongly maligned sequel, 1997’s Speed 2: Cruise
              Control. Holdout Reeves really missed the boat on that one.
            </p>
          </div>
        </div>
        <div className="post">
          <div className="inner-img">
            <Image src={mac} alt="" />
          </div>
          <div className="inner-content">
            <h4>Copshop | Action, drama</h4>
            <p>
              A tense, blood-splashed showdown between a con man (Frank Grillo),
              a hitman (Gerard Butler), and a rookie cop (Alexis Louder)
              explodes in a small-town Nevada police station, and it’s never
              clear who’s going to get out alive. Copshop, a 2021 film directed
              by action auteur Joe Carnahan, puts the action pedal to the metal
              for a brisk 107 minutes, dropping improbable plot twists like
              bullet shells all the way. Also, Toby Huss nearly steals the show
              as a comically unhinged assassin.
            </p>
          </div>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={quotationIcon} className="mark" alt="" />
          <h4>More recommended movies on Peacock </h4>

          <ul className="channel-list">
            <li>Bad Lieutenant: Port of Call New Orleans</li>
            <li>Bernie</li>
            <li>Dawn of the Dead</li>
            <li>The Joneses</li>
            <li>Midnight Run</li>
            <li>Miss Congeniality</li>
            <li>Old School</li>
            <li>Open Water</li>
            <li>Phantasm</li>
            <li>Wanderlust</li>
          </ul>
        </div>
      </div>

      <div className="section important-packages">
        <div className="head">
          <h2 className="sect-heading">
            More Recommended shows <span> on Peacock</span>
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
          <Link href={"#"}>view peacock plans </Link>
        </div>

        <div className="grid-channel">
          <div className="package-table-container channels">
            <h4> Recommended Peacock original TV shows</h4>
            <br />
            <ul className="channel-list">
              <ul>
                <li>Poker Face</li>
                <li>The Amber Ruffin Show</li>
                <li>Bel-Air</li>
                <li>Brave New World</li>
                <li>The Girl in the Woods</li>
                <li>Paul T. Goldman</li>
                <li>Girls5eva</li>
                <li>Mr. Mercedes</li>
                <li>One of Us is Lying</li>
                <li>We Are Lady Parts</li>
              </ul>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Recommended sports on Peacock</h4>
            <br />
            <ul className="channel-list">
              <li>Golf</li>
              <li>IndyCar</li>
              <li>NFL</li>
              <li>NHL</li>
              <li>Premier League Soccer</li>
              <li>Rugby</li>
              <li>Summer/Winter Olympics</li>
              <li>Supercross</li>
              <li>Tour de France</li>
              <li>WWE</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Recommended comedy TV shows and movies on Peacock</h4>
            <br />
            <ul className="channel-list">
              <li>American Auto</li>
              <li>Brooklyn Nine-Nine</li>
              <li>Cheers</li>
              <li>Easy A</li>
              <li>Frasier</li>
              <li>Frasier</li>
              <li>Modern Family</li>
              <li>Mystery Men</li>
              <li>The Office</li>
              <li>Parks and Recreation</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Recommended drama TV shows and movies on Peacock</h4>
            <br />
            <ul className="channel-list">
              <li>Angelyne</li>
              <li>The Blacklist</li>
              <li>Covert Affairs</li>
              <li>Downton Abbey</li>
              <li>Harry Potter franchise</li>
              <li>Law & Order franchise</li>
              <li>Prime Suspect</li>
              <li>Psycho</li>
              <li>Vikings</li>
              <li>Yellowstone</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Recommended true crime TV shows and movies on Peacock</h4>
            <br />
            <ul className="channel-list">
              <li>Cold Case Files</li>
              <li>Dateline</li>
              <li>The First 48</li>
              <li>Forensic Files</li>
              <li>Homicide for the Holidays</li>
              <li>John Wayne Gacy: Devil in Disguise</li>
              <li>Killer Couples</li>
              <li>Murder for Hire</li>
              <li>Snapped</li>
              <li>Unsolved Mysteries</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Recommended reality TV shows on Peacock</h4>
            <br />
            <ul className="channel-list">
              <li>America’s Got Talent</li>
              <li>American Ninja Warrior</li>
              <li>American Pickers</li>
              <li>Bad Girls Club</li>
              <li>Below Deck</li>
              <li>Bethanny Ever After</li>
              <li>Chrisley Knows Best</li>
              <li>Keeping Up with the Kardashians</li>
              <li>Southern Charm</li>
              <li>The Real Housewives franchise</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Recommended food and travel TV shows and movies on Peacock</h4>
            <br />
            <ul className="channel-list">
              <li>Baking It</li>
              <li>Brave Wilderness</li>
              <li>Iron Chef</li>
              <li>Restaurant Startup</li>
              <li>State Plate</li>
              <li>Struggle Meals</li>
              <li>Top Chef</li>
              <li>Top Chef Masters</li>
              <li>Travel Man</li>
              <li>Wonders of Britain</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Recommended documentary TV shows and movies on Peacock</h4>
            <br />
            <ul className="channel-list">
              <li>American Greed</li>
              <li>Ancient Aliens</li>
              <li>Gadget Man</li>
              <li>Lost Speedways</li>
              <li>Paranormal Witness</li>
              <li>Queens & Cowboys: A Straight Year on the Gay Rodeo</li>
              <li>This Old House</li>
              <li>Three Days to Live</li>
              <li>True Colors</li>
              <li>Underground Britain</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Recommended sci-fi TV shows and movies on Peacock</h4>
            <br />
            <ul className="channel-list">
              <li>The Ark</li>
              <li>Battlestar Galactica</li>
              <li>Eureka</li>
              <li>Heroes</li>
              <li>Limetown</li>
              <li>Midnight, Texas</li>
              <li>Project Blue Book</li>
              <li>Resident Alien</li>
              <li>Sliders</li>
              <li>Warehouse 13</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Recommended action TV shows and movies on Peacock</h4>
            <br />
            <ul className="channel-list">
              <li>Bad Boys</li>
              <li>Hanna</li>
              <li>Hitmen</li>
              <li>Kingdom</li>
              <li>The Last Stand</li>
              <li>Mercenaries</li>
              <li>Miami Vice</li>
              <li>The Purge</li>
              <li>The Rundown</li>
              <li>Treadstone</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Recommended horror TV shows and movies on Peacock</h4>
            <br />
            <ul className="channel-list">
              <li>13 Nights of Elvira</li>
              <li>Anna</li>
              <li>Chucky</li>
              <li>Death Note</li>
              <li>Dr. Death</li>
              <li>Firestarter: Rekindled</li>
              <li>Hammer House of Horror</li>
              <li>Prom Night</li>
              <li>Sacred Lies</li>
              <li>Sleepaway Camp</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Recommended kids’ TV shows and movies on Peacock</h4>
            <br />
            <ul className="channel-list">
              <li>Antz</li>
              <li>Barney</li>
              <li>Chicken Run</li>
              <li>The Croods</li>
              <li>Garfield and Friends</li>
              <li>Little Foot</li>
              <li>Maisy</li>
              <li>Monsters vs. Aliens</li>
              <li>Top Chef Junior</li>
              <li>Trolls World Tour</li>
            </ul>
          </div>
          <div className="package-table-container channels">
            <h4> Recommended anime TV shows and movies on Peacock</h4>
            <br />
            <ul className="channel-list">
              <li>Infini-T Force</li>
              <li>JoJo’s Bizarre Adventure</li>
              <li>Jungle Emperor Leo</li>
              <li>K-On!</li>
              <li>Naruto</li>
              <li>One-Punch Man</li>
              <li>Ranma 1/2</li>
              <li>Tiger & Bunny</li>
              <li>The Twelve Kingdoms</li>
              <li>Yashahime: Princess Half-Demon</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={quotationIcon} className="mark" alt="" />
          <h4>Related articles </h4>

          <ul>
<li><span className="link"><Link href={"/"}> Peacock Review</Link></span></li>
<li><span className="link"><Link href={"/"}> Peacock Originals</Link></span></li>
<li><span className="link"><Link href={"/"}> Best On-Demand Streaming Services</Link></span></li>
</ul>
        </div>
      </div>
      
{/* <Newsletter /> */}
    </div>
  );
};

export default PeacockWhatToWatch;
