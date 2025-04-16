// import React, { useState } from "react";
import "./max-what-to-watch.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { maxNavLinks } from "../../assets/data/navLinks/maxNavLinks";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
// import Newsletter from "../../components/newsletter/Newsletter";
import a1 from "../../assets/images/a-1.jpg";
import a2 from "../../assets/images/a-2.jpg";
import a3 from "../../assets/images/a-3.jpg";
import a4 from "../../assets/images/a-4.jpg";
import a5 from "../../assets/images/a-5.jpg";
import a6 from "../../assets/images/a-6.jpg";
import a7 from "../../assets/images/a-7.jpg";
import a8 from "../../assets/images/a-8.jpg";
import a9 from "../../assets/images/a-9.jpg";
import a10 from "../../assets/images/a-10.jpg";
import CTA from "../../components/cta-section/CTA";

export const metadata = {
  title: "DC Universe Shows On Max"
};

const MaxWhatToWatch = () => {
//   const [faq, setFaq] = useState();

  // let accordionHandler = (i) => { 
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="max-what-to-watch">
      {/* <SubNav links={maxNavLinks} /> */}
      <div className="hidden-cost-hero global-inner-hero">
        <h1>DC Universe Shows On Max</h1>
        <p>
          There are almost too many great shows and movies on Max—we’ve
          highlighted 90 of our favorites.
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
          <ul className="channel-list">
            <li>Everything New on Max January 2024</li>
            <li>
              True Detective: Night Country (Season 4 premiere, January 14)
            </li>
            <li>On the Roam (New series, January 18)</li>
            <li>Sort of (Season 3 premiere, January 18)</li>
            <li>Real Time with Bill Maher (Season 22 premiere, January 19)</li>
            <li>
              Who’s Talking to Chris Wallace? (Season 6 premiere, January 19)
            </li>
            <li>
              OWN Spotlight: Oprah & Danielle Brooks (Special, January 20)
            </li>
            <li>Love & Translation (New series, January 21)</li>
            <li>Battle on the Mountain (New series, January 22)</li>
            <li>Death by Fame (Season 2 premiere, January 22)</li>
            <li>The Playboy Murders (Season 2 premiere, January 22)</li>
            <li>Rick & Morty (Season 7, January 22)</li>
            <li>Rico to the Rescue (Season 2 premiere, January 24)</li>
            <li>
              Love & Marriage: D.C. (Season 2 winter premiere, January 27)
            </li>
            <li>The Unbreakable Tatiana Suarez (Movie premiere, January 31)</li>
          </ul>
          <br />
          <p>
            Other streaming services, like Netflix and Prime Video, might have
            more movies and TV shows, but Max makes up for its slightly smaller
            quantity with quality.
            <br />
            For one, it gives you access to the HBO vault, which includes
            decades of acclaimed series, like Curb Your Enthusiasm and Six Feet
            Under. For two, Max’s own shows (a.k.a. Max Originals like Hacks and
            The Flight Attendant) rank among the best you can stream.
            <br />
            It wasn’t easy to narrow down, but we’ve curated this list of some
            of our favorites currently available to stream on Max—and we didn’t
            even include all 26 seasons of South Park. Sorry, Kenny.
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
          <Link href={"#"}>Recommended TV shows on Max </Link>
          <Link href={"#"}>Recommended movies on Max </Link>
          <Link href={"#"}>More recommended shows on Max (by genre) </Link>
        </div>
      </div>

      <div className="section important-post">
        <div className="head">
          <h2 className="sect-heading">
            Recommended TV shows <span> on Max</span>
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
          <Link href={"#"}>view max plans </Link>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={a1} alt="" />
          </div>
          <div className="inner-content">
            <h4>The White Lotus | Comedy, drama</h4>
            <p>
              Set in an idyllic Hawaiian resort (The White Lotus, of course),
              the first season of Mike White’s The White Lotus follows a group
              of guests (including Jennifer Coolidge, Connie Britton, Steve
              Zahn, Jake Lacey, and Alexandra Daddario) who come to realize
              there’s a darkness behind the Lotus’s sunny façade. In keeping
              with the Mike White brand, things get weird from there. The
              even-better second season goes to Sicily with Aubrey Plaza,
              Meghann Fahy, and Michael Imperioli.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={a2} alt="" />
          </div>
          <div className="inner-content">
            <h4>Hacks | Comedy, drama</h4>
            <p>
              Veteran actress Jean Smart commands her role as Deborah Vance, a
              longtime Las Vegas comedian whose withering casino showcase
              residency is being threatened by younger acts. Reluctantly, she
              hires 20-something comedy writer Ava (Hanna Einbinder) to punch up
              her material. Sparks fly, but then a sweetly funny frenemyship is
              forged between these hacks.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={a3} alt="" />
          </div>
          <div className="inner-content">
            <h4>The Flight Attendant | Comedy, drama</h4>
            <p>
              Kaley Cuoco jettisons her Big Bang Theory sitcom image with
              Cassie, a boozy international flight attendant who wakes up from
              her latest one-night stand next to a dead body. Soon, she’s on the
              run from the authorities and the killer, never without a vodka
              soda in hand or a terrible decision in mind. The Flight Attendant
              is a darkly comedic murder mystery that doesn’t let up.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={a4} alt="" />
          </div>
          <div className="inner-content">
            <h4>Succession | Drama</h4>
            <p>
              If you think your family has problems, wait till you meet the
              Roys. As aging patriarch Logan Roy (Brian Cox) clings to his role
              as head of a billion-dollar media conglomerate, he also pits his
              children (Jeremy Strong, Sarah Snook, Kieran Culkin, and Alan
              Ruck) against each other to become his successor. This dark wealth
              satire is as unpredictable as it is biting, with almost no
              redeemable characters—and yet Succession is still addictive.
              You’ll (almost) pity the rich.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={a5} alt="" />
          </div>
          <div className="inner-content">
            <h4>Barry | Comedy, drama</h4>
            <p>
              Hitman-for-hire Barry (Bill Hader) travels to Los Angeles for a
              job, but inadvertently becomes involved with the local theater
              scene and decides to pursue acting. Unfortunately, his mentor
              (Stephen Root) and the Chechen mob (including scene-stealer
              Anthony Carrigan as “NoHo Hank”) won’t let him out of the criminal
              life. Hader kills it, in every sense, as Barry.
            </p>
          </div>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>More recommended TV shows on Max </h4>
          <p>
            Are you a T-Mobile customer? Check out the cellular provider’s
            “Netflix on Us” promotion, which essentially gives you free Netflix
            (Standard or Basic plan) with your phone service.
          </p>
          <ul className="channel-list">
            <li>Curb Your Enthusiasm</li>
            <li>Euphoria</li>
            <li>Insecure</li>
            <li>House of the Dragon</li>
            <li>The Last of Us</li>
            <li>Perry Mason</li>
            <li>Rap Sh!t</li>
            <li>The Rehearsal</li>
            <li>Watchmen</li>
            <li>The Wire</li>
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
            Recommended TV movies <span> on Max</span>
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
          <Link href={"#"}>view max plans </Link>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={a6} alt="" />
          </div>
          <div className="inner-content">
            <h4>The Menu | Drama, thriller</h4>
            <p>
              Obnoxious foodie Tyler (Nicholas Hoult) and paid escort Margot
              (Anya Taylor-Joy) sail to an exotic island to dine at Master Chef
              Slowik’s (Ralph Fiennes) ridiculously exclusive restaurant.
              Slowly, it becomes obvious that Chef Slowik has darker plans aside
              from serving a $1,200-a-plate dinner to a gaggle of annoying snobs
              (including John Leguizamo, Janet McTeer, and Judith Light). The
              Menu is tense, funny, terrifying, and mouthwatering all at
              once—eat up!
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={a7} alt="" />
          </div>
          <div className="inner-content">
            <h4>Zack Snyder’s Justice League | Action, drama</h4>
            <p>
              Zack Snyder left 2017’s Justice League to another director, who
              turned it into a colorful, quippy mess that didn’t impress critics
              or fans. Zack Snyder’s Justice League is a four-hour reset of his
              own DC universe, a spectacularly indulgent but still entertaining
              dark superhero fable that does better by its characters. Without
              ZSJL, we might not have fully appreciated The Suicide Squad.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={a8} alt="" />
          </div>
          <div className="inner-content">
            <h4>Malignant | Horror, thriller</h4>
            <p>
              Horror master James Wan (The Conjuring, Insidious, Saw) strikes
              again with Malignant, a brand-new tale of psychological terror he
              says has more in common with pulpy Italian Giallo thrillers than
              traditional American shock flicks. Madison (Annabelle Wallis) is
              tormented by constant dreams of horrific murders, only to find out
              they’re real. Maybe don’t watch Malignant alone.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={a9} alt="" />
          </div>
          <div className="inner-content">
            <h4>The Janes | Documentary</h4>
            <p>
              Sundance hit documentary The Janes looks at the underground
              Chicago network The Jane Collective, a group that secretly
              provided women with access to safe abortions before Roe v. Wade in
              the 1970s. Using safe houses, fronts, and code names to protect
              themselves, The Jane Collective operated covertly until seven
              women were arrested in a 1972 police raid. Unfortunately, The
              Janes is as relevant as ever right now.
            </p>
          </div>
        </div>

        <div className="post">
          <div className="inner-img">
            <Image src={a10} alt="" />
          </div>
          <div className="inner-content">
            <h4>Space Jam | Animated, comedy</h4>
            <p>
              On the lighter side, the best sports documentary of all time
              remains 1996’s Space Jam, the movie that simultaneously launched
              and ended Michael Jordan’s acting career. Space Jam, wherein
              Jordan leads a rag-tag team of Looney Tunes against alien
              basketball franchise The Monstars, is still a wild (if incoherent)
              ride. Space Jam: A New Legacy (2021) isn’t bad, either.
            </p>
          </div>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>More recommended movies on Max </h4>
          <p>
            Are you a T-Mobile customer? Check out the cellular provider’s
            “Netflix on Us” promotion, which essentially gives you free Netflix
            (Standard or Basic plan) with your phone service.
          </p>
          <ul className="channel-list">
            <li>The Batman</li>
            <li>Birds of Prey: Harley Quinn</li>
            <li>Jurassic Park</li>
            <li>Last Night in Soho</li>
            <li>The Matrix</li>
            <li>Nightmare Alley</li>
            <li>Nobody</li>
            <li>Old</li>
            <li>Paddington 2</li>
            <li>The Suicide Squad</li>
          </ul>
        </div>
      </div>

      <div className="section important-packages">
        <div className="head">
          <h2 className="sect-heading">
            More recommended shows <span> on Max (by genre)</span>
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

        <div className="package-table-container channels">
          <h4>Recommended Studio Ghibli movies on Max</h4>
          <br />
          <ul className="channel-list">
            <li>Nausicaä of the Valley of the Wind</li>
            <li>Howl’s Moving Castle</li>
            <li>Kiki’s Delivery Service</li>
            <li>Ponyo</li>
            <li>Castle in the Sky</li>
            <li>Princess Mononoke</li>
            <li>Spirited Away</li>
            <li>The Secret World of Arrietty</li>
            <li>The Cat Returns</li>
            <li>My Neighbor Totoro</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Recommended Max Originals</h4>
          <br />
          <ul className="channel-list">
            <li>Doom Patrol</li>
            <li>The Flight Attendant</li>
            <li>Gossip Girl</li>
            <li>Harley Quinn</li>
            <li>I Hate Suzie</li>
            <li>Peacemaker</li>
            <li>Pretty Little Liars: Original Sin</li>
            <li>Our Flag Means Death</li>
            <li>Station Eleven</li>
            <li>Tokyo Vice</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Recommended HBO series on Max</h4>
          <br />
          <ul className="channel-list">
            <li>A Black Lady Sketch Show</li>
            <li>Boardwalk Empire</li>
            <li>Lovecraft County</li>
            <li>Mare of Easttown</li>
            <li>Perry Mason</li>
            <li>Six Feet Under</li>
            <li>The Sopranos</li>
            <li>True Detective</li>
            <li>Veep</li>
            <li>We Own This City</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Recommended documentaries on Max</h4>
          <br />
          <ul className="channel-list">
            <li>Allen v. Farrow</li>
            <li>Class Action Park</li>
            <li>The Cost of Winning</li>
            <li>Generation Hustle</li>
            <li>Heaven’s Gate</li>
            <li>I’ll Be Gone in the Dark</li>
            <li>The Last Movie Stars</li>
            <li>Small Town News: KPVM Pahrump</li>
            <li>The Vow</li>
            <li>The Way Down</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Recommended reality TV shows on Max</h4>
          <br />
          <ul className="channel-list">
            <li>All That Glitters</li>
            <li>The Bachelor</li>
            <li>The Bachelorette</li>
            <li>Baketopia</li>
            <li>The Big Brunch</li>
            <li>Chillin’ Island</li>
            <li>Craftopia</li>
            <li>Haute Dog</li>
            <li>The Hype</li>
            <li>Sweet Life: Los Angeles</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Recommended LGBTQ+ shows on Max</h4>
          <br />
          <ul className="channel-list">
            <li>Angels in America</li>
            <li>Equal</li>
            <li>Gentleman Jack</li>
            <li>It’s a Sin</li>
            <li>Legendary</li>
            <li>Looking</li>
            <li>Silent Valley</li>
            <li>Trigonometry</li>
            <li>We Are Who We Are</li>
            <li>Years and Years</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Recommended kids’ shows on Max</h4>
          <br />
          <ul className="channel-list">
            <li>Apple & Onion</li>
            <li>Ben 10</li>
            <li>Craig of the Creek</li>
            <li>Dexter’s Laboratory</li>
            <li>Esme & Roy</li>
            <li>Fungies!</li>
            <li>Jellystone!</li>
            <li>The Not-So-Late Show with Elmo</li>
            <li>Sesame Street</li>
            <li>Summer Camp Island</li>
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
                <Link href={"#"}>HBO Max Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>HBO Max Deals </Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>HBO Max Channels </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

{/* <Newsletter /> */}
    </div>
  );
};

export default MaxWhatToWatch;
