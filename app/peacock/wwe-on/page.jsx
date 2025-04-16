// import React, { useState } from "react";
import "./peacock-wwe-on.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { peacockNavLinks } from "../../assets/data/navLinks/peacockNavLinks";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "WWE On Peacock"
};

const PeacockWweOn = () => {
  //   const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="peacock-wwe-on">
      {/* <SubNav links={peacockNavLinks} /> */}
      <div className="hidden-cost-hero global-inner-hero">
        <h1>WWE On Peacock</h1>
        <p>
          The WWE hub on Peacock has (almost) everything a pro wrestling fan
          could ask for, all included with a basic Peacock subscription.
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
          <h4>The Royal Rumble is almost here:</h4>
          <br />
          <p>
            The 2024 edition of the WWE Royal Rumble streams on Saturday,
            January 27, 5 p.m. PT/8 p.m. ET, exclusively on Peacock (WWE Network
            outside of the U.S.).
          </p>
          <br />
          <p>
            In 2021, pro wrestling subscription streamer WWE Network
            transitioned all content, including live pay-per-view events like
            WrestleMania and the Royal Rumble, to NBCUniversal streaming service
            Peacock (in the United States). That’s tens of thousands of hours of
            squared-circle action included with a standard Peacock sub—as Ric
            Flair would so eloquently put it, “Wooo!”
            <br />
            The WWE hub on Peacock features over 60 years of new and classic
            wrestling content from not only World Wrestling Entertainment but
            also acquired legacy franchises like WCW and ECW. Minus a couple of
            omissions that will irk cord-cutting fans of Raw and SmackDown, WWE
            on Peacock hits like an elbow off the top rope.
          </p>
        </div>
      </div>

      <div className="section shows">
        <div className="head">
          <h2 className="sect-heading">
            WWE on Peacock <span> categories and shows </span>
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
        <div className="package-table-container channels">
          <h4>WWE Events</h4>
          <p className="after-heading">
            Live, formerly pay-per-view events are the crown jewel of Peacock’s
            WWE hub, exclusively streaming big-time battle bashes like the
            above-mentioned WrestleMania, Summer Slam, and, well, Crown Jewel.
            You can watch live as the action is happening, or on-demand the next
            day, at no extra cost beyond your Peacock subscription (either the
            ad-supported or ad-free plan). Considering that WWE PPV events used
            to cost upwards of $50 each through cable or satellite, not a bad
            deal.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Best of WWE</h4>
          <p className="after-heading">
            The Best of WWE category is a varied grab-bag of compilation shows
            like The 50 Greatest Finishing Moves in WWE History, WrestleMania’s
            Legendary Moments, and The Top 100 Moments in Raw History, as well
            as historical docuseries like The 50 Greatest, WWE Hall of Fame, and
            Break It Down. There’s also a dedicated 24/7 Best of WWE channel in
            Peacock’s “Live” TV section if you’d just rather let it loop than
            choose a show.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>WWE Rivalries</h4>
          <p className="after-heading">
            If you love a grudge match—what wrestling fan doesn’t?—WWE Rivalries
            features such docs as The Rock vs. John Cena, WWE Top 25 Rivalries,
            and Dream Match Mania. Many shows under Peacock’s WWE mantle cross
            over into other categories, which means past PPV events also fall in
            WWE Rivalries, like Money in the Bank, Backlash, and Elimination
            Chamber. You can also find WWE’s vintage Rebellion events here—check
            The Rock vs. Triple H in a steel cage match in 1999!
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>WWE Superstars</h4>
          <p className="after-heading">
            WWE Superstars shares several titles with other sections in the WWE
            hub, mostly documentaries focusing on individual wrestlers like
            Brock Lesnar, Sasha Banks, and the legendary Stone Cold Steve
            Austin. There’s also Uncool with Alexa Bliss, a talk show wherein
            the one-time women’s champion interviews fellow wrestlers and
            celebrities, and The Bump, a weekly SportsCenter-style roundtable
            series. Young Rock, Dwayne Johnson’s autobiographical NBC sitcom,
            can also be found in the WWE hub, because why not?
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>WWE Documentaries</h4>
          <p className="after-heading">
            They’re suspiciously scandal-free and corporate, but WWE’s deep
            bench of documentaries is still an entertaining look into the
            careers of wrestling’s best. Becky Lynch, Roman Reigns, Charlotte
            Flair, Goldberg, Rey Mysterio, Bianca Belair, Drew McIntyre, and
            dozens of other current WWE personalities are profiled, and you can
            also find classic docs about Chris Jericho, Hulk Hogan, The Dudley
            Boyz, and other wrestling legends. If you’re looking for
            down-and-dirty wrestling hot goss, check out Dark Side of the Ring
            on VICE and Hulu.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>WWE TV</h4>
          <p className="after-heading">
            Weekly WWE network TV shows Raw (USA Network) and SmackDown (FOX,
            FS1) aren’t available to stream as quickly as PPV events and
            farm-league series NXT, both of which reach Peacock the day after
            broadcast. Thanks to an exclusive deal with Hulu, Raw and SmackDown
            episodes are delayed by 30 days on Peacock, which is as weird as WWE
            chairman Vince McMahon’s recent black hair and mustache makeover
            that makes him look like a lost Mario brother.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>WWE Home Video</h4>
          <p className="after-heading">
            Old-school wrestling aficionados could spend many a weekend soaking
            up the WWE Home Video selection, which features dozens of VHS-era
            titles centered on “Macho Man” Randy Savage and Miss Elizabeth, Bret
            “The Hitman” Hart, The Ultimate Warrior, “Rowdy” Roddy Piper, Shawn
            Michaels, Paul Bearer, and more. If there’s a more inspirational
            documentary than 1989’s “Hacksaw” Jim Duggan feature, we’ve yet to
            see it.
          </p>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>WWE on Peacock </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Are WWE pay-per-view events
                free on Peacock?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  WWE premium live events like WrestleMania and Royal Rumble are
                  available to stream at no extra cost on Peacock. Before moving
                  to Peacock, WWE live events would cost $50 or more through
                  pay-per-view channels on cable and satellite TV.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Are WWE pay-per-view events free on Peacock?"}
            cssClass={"faq-content"}
          >
            <p>
              WWE premium live events like WrestleMania and Royal Rumble are
              available to stream at no extra cost on Peacock. Before moving to
              Peacock, WWE live events would cost $50 or more through
              pay-per-view channels on cable and satellite TV.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Are Raw and SmackDown
                episodes available the next day on Peacock?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Monday night episodes of Raw (which airs on USA Network) and
                  Friday night episodes of SmackDown (airing on FOX or sometimes
                  FS1) are made available on Peacock 30 days after the airdate,
                  not the next day. Only WWE premium live events and USA
                  Network’s NXT are available the next day on Peacock.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={
              " Are Raw and SmackDown episodes available the next day on Peacock?"
            }
            cssClass={"faq-content"}
          >
            <p>
              Monday night episodes of Raw (which airs on USA Network) and
              Friday night episodes of SmackDown (airing on FOX or sometimes
              FS1) are made available on Peacock 30 days after the airdate, not
              the next day. Only WWE premium live events and USA Network’s NXT
              are available the next day on Peacock.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Are Raw and SmackDown
                episodes available the next day on Hulu?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Raw and SmackDown episodes are available to stream the day
                  after they air on USA Network and FOX due to an exclusive deal
                  that was made before WWE Network moved to Peacock. When that
                  deal with Hulu expires, it’s expected that Peacock will bid to
                  acquire next-day streaming rights to Raw and SmackDown.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={
              " Are Raw and SmackDown episodes available the next day on Hulu?"
            }
            cssClass={"faq-content"}
          >
            <p>
              Raw and SmackDown episodes are available to stream the day after
              they air on USA Network and FOX due to an exclusive deal that was
              made before WWE Network moved to Peacock. When that deal with Hulu
              expires, it’s expected that Peacock will bid to acquire next-day
              streaming rights to Raw and SmackDown.
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
            Our experts spent over two dozen hours watching and researching NFL
            Sunday Ticket on DIRECTV. Since YouTube took over the out-of-market
            package, we continued our research to determine if it’s a worthy TV
            add-on. We also compared its features and coverage to similar
            services and standard TV plans.
            <br />
            Check out our How We Rank page to learn more about our methods.
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Peacock Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>What to Watch on Peacock</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Streaming Services for Sports</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default PeacockWweOn;
