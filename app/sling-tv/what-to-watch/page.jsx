// import React, { useState } from "react";
import "./sling-tv-what-t-watch.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { slingtvNavLinks } from "../../assets/data/navLinks/slingtvNavLinks";
import quotationsIcon from "../../assets/images/quotations.svg";
import baseball from "../../assets/images/baseball.png";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
// import Newsletter from "../../components/newsletter/Newsletter";
import PackageTable from "../../components/package-table/PackageTable";
import { FaCheck } from "react-icons/fa6";

export const metadata = {
  title: "What to Watch on Sling TV"
};

const SlingTvWhatToWatch = () => {
  //   const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  let packageTableData = [
    {
      head: ["Package", "AMC availability", "Details"],

      body: [
        {
          content: ["1.", "Sports Extra", <FaCheck key="Fa1" className="check-icon" />],
          linkPath: "#",
        },
        {
          content: ["2.", "Comedy Extra", <FaCheck key="Fa2" className="check-icon" />],
          linkPath: "#",
        },
        {
          content: ["3.", "Kids Extra", <FaCheck key="Fa3" className="check-icon" />],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="sling-tv-what-t-watch">
      {/* <SubNav links={slingtvNavLinks} /> */}
      <div className="hidden-cost-hero global-inner-hero">
        <h1>What to watch on sling tV</h1>
        <p>
          There’s plenty to watch on Sling TV—we’ve collected a few of our
          favorite channels and shows to get you started.
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
          <h4>New on Sling TV in December 2023</h4>
          <br />
          <ul>
            <li>The UnBelievable with Dan Aykroyd (December 1, HISTORY)</li>
            <li>Yes, Chef! Christmas (December 10, Lifetime)</li>
            <li>Archer: Into the Cold (December 17, FX)</li>
            <li>Mom’s Christmas Boyfriend (December 21, Lifetime)</li>
            <li>NBA on Christmas Day (December 25, ESPN/ESPN3)</li>
            <li>Peach Bowl (December 29, ESPN)</li>
          </ul>
          <br />
          <p>
            Even though Sling TV’s color-coded channel lineups can be confusing,
            there’s plenty of solid TV entertainment to be had across its Orange
            and Blue plans (and the Sling Orange & Blue combo). So you don’t
            necessarily have to pay for extra add-ons to find something to
            watch.
            <br />
            We’ve rounded up five of our favorite channels available on Sling TV
            and highlighted a handful of the best original series from each.
          </p>
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
          <Link href={"#"}>AMC </Link>
          <Link href={"#"}>FX </Link>
          <Link href={"#"}>Cartoon Network/Adult Swim </Link>
          <Link href={"#"}>Food Network </Link>
          <Link href={"#"}>VICE </Link>
        </div>
      </div>

      <div className="section packages">
        <div className="head">
          <h2 className="sect-heading">
            AMC <span> channel </span>
          </h2>
          <p className="sect-desc">
            AMC is like a premium channel on basic cable, with a 24/7 mix of
            critically acclaimed original shows and blockbuster theatrical
            films. Series like Breaking Bad and The Walking Dead put AMC on the
            map, and it continues to produce high-quality originals—we also
            don’t mind the occasional Fast & Furious movies marathon.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />

        <div className="package-table-container channels">
          <h4>Sling Orange Sports Extra ($11/mo.)</h4>
          <br />
          <ul className="channel-list">
            <li>The Walking Dead</li>
            <li>Fear the Walking Dead</li>
            <li>Dark Winds</li>
            <li>A Discovery of Witches</li>
            <li>Kevin Can F**k Himself</li>
            <li>Mayfair Witches</li>
            <li>Interview with the Vampire</li>
            <li>That Dirty Black Bag</li>
            <li>Ride with Norman Reedus</li>
            <li>Lucky Hank</li>
          </ul>
          <hr />
          <div className="btn">
            <Link href={"/"}>get AMC on sling tV</Link>
          </div>
        </div>
      </div>

      <div className="section main-channel">
        <div className="head">
          <h2 className="sect-heading">
            FX <span> channel </span>
          </h2>
          <p className="sect-desc">
            Like AMC, FX is known for its roster of superlative original series
            and movie favorites—and it has more of both. From comedies like What
            We Do in the Shadows to drama anthologies like Fargo, FX pretty much
            has something for everybody (except for children; most FX shows are
            very much on the adult side).
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />

        <div className="package-table-container channels">
          <h4>FX originals (partial list)</h4>
          <br />
          <ul className="channel-list">
            <li>What We Do in the Shadows</li>
            <li>Atlanta</li>
            <li>Snowfall</li>
            <li>Mayans M.C.</li>
            <li>The Old Man</li>
            <li>American Horror Story</li>
            <li>Archer</li>
            <li>Welcome to Wrexham</li>
            <li>Dear Mama</li>
            <li>The New York Times Presents</li>
          </ul>
          <hr />
          <div className="btn">
            <Link href={"/"}>get FX on sling tV</Link>
          </div>
        </div>
      </div>

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={baseball} className="mark" alt="" />
          <h4>Sports on Sling TV </h4>
          <p>
            If you’re looking for sports channels on Sling TV, you won’t find
            much in the main plans. Sling Orange carries ESPN and ESPN2; Sling
            Blue carries FS1 and NFL Network; Sling Orange & Blue has all four.
            But, Sling TV’s Sports Extra add-on gets you several more sports
            channels for $11–$15 a month.
          </p>
        </div>
      </div>

      <div className="section main-channel">
        <div className="head">
          <h2 className="sect-heading">
            Cartoon Network/ <span>Adult Swim </span>
          </h2>
          <p className="sect-desc">
            It’s tough to beat Cartoon Network as a digital babysitter for the
            kiddies during the daytime. When it phases into Adult Swim during
            the late-night hours, it’s home to some of the most original and
            bizarre shows for grownups on TV.
            <br />
            Cartoon Network’s daylight hours aren’t to be slighted, though—shows
            like Craig of the Creek are smart enough for adults to enjoy.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />

        <div className="package-table-container channels">
          <h4>Cartoon Network/Adult Swim originals (partial list)</h4>
          <br />
          <ul className="channel-list">
            <li>Craig of the Creek</li>
            <li>Elliott from Earth</li>
            <li>Teen Titans Go!</li>
            <li>Ben 10</li>
            <li>Apple & Onion</li>
            <li>Birdgirl</li>
            <li>Rick & Morty</li>
            <li>Robot Chicken</li>
            <li>The Eric Andre Show</li>
            <li>King Star King</li>
          </ul>
          <hr />
          <div className="btn">
            <Link href={"/"}>get CN on sling tV</Link>
          </div>
        </div>
      </div>

      <div className="section packages">
        <div className="head">
          <h2 className="sect-heading">
            <span> Food Network </span> (Sling Orange, Sling Orange & Blue)
          </h2>
          <p className="sect-desc">
            If you don’t watch the Food Network, are you even living? A TV
            staple since the ’90s, Food Network has introduced the world to
            culinary stars like Bobby Flay, Giada De Laurentiis, Jamie Oliver,
            Ted Allen, Guy Fieri’s flame shirts, and many more. We need shows
            like Chopped, The Great Food Truck Race, and Cupcake Wars like we
            need, well, food.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />

        <div className="package-table-container channels">
          <h4>Food Network originals (partial list)</h4>
          <br />
          <ul className="channel-list">
            <li>Diners, Drive-Ins, and Dives</li>
            <li>Chopped</li>
            <li>The Great Food Truck Race</li>
            <li>Cupcake Wars</li>
            <li>Worst Cooks in America</li>
            <li>The Kitchen</li>
            <li>Barefoot Contessa</li>
            <li>Good Eats</li>
            <li>Cutthroat Kitchen</li>
            <li>The Best Thing I Ever Ate</li>
          </ul>
          <hr />
          <div className="btn">
            <Link href={"/"}>get food network on sling tV</Link>
          </div>
        </div>
      </div>

      <div className="section main-channel">
        <div className="head">
          <h2 className="sect-heading">
            VICE <span> channel </span>
          </h2>
          <p className="sect-desc">
            VICE (formerly known as VICELAND) is one of the most eclectic
            channels on TV. It’s a documentary, news, and reality TV network
            aimed at Millennials in its programming and attitude. Shows range
            from pro wrestling docuseries Dark Side of the Ring to foodie show
            F*ck That’s Delicious to music culture magazine Noisey to
            recreational pastime coverage like Weediquitte and Beerland.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />

        <div className="package-table-container channels">
          <h4>VICE originals (partial list)</h4>
          <br />
          <ul className="channel-list">
            <li>Bong Appetit</li>
            <li>F*ck That’s Delicious</li>
            <li>Most Expensivest</li>
            <li>Dark Side of the Ring</li>
            <li>Noisey</li>
            <li>Weediquette</li>
            <li>Tales from the Territories</li>
            <li>Dark Side of Comedy</li>
            <li>VICE News Tonight</li>
            <li>The Pizza Show</li>
          </ul>
          <hr />
          <div className="btn">
            <Link href={"/"}>get vice on sling tV</Link>
          </div>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>What to watch on Sling TV </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Does Sling TV have free
                movies?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Sling TV’s paid plans include hundreds of movies to watch live
                  and on-demand as part of the package. If you want to pay
                  nothing, there’s Sling Free, a limited-content version of
                  Sling TV that’s an ad-supported mix of live channels and
                  on-demand movies and TV shows.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Does Sling TV have free movies?"}
            cssClass={"faq-content"}
          >
            <p>
              Sling TV’s paid plans include hundreds of movies to watch live and
              on-demand as part of the package. If you want to pay nothing,
              there’s Sling Free, a limited-content version of Sling TV that’s
              an ad-supported mix of live channels and on-demand movies and TV
              shows.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Do you get local channels
                with Sling TV?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  In select markets, you can get local ABC, NBC, and FOX
                  channels on Sling TV, but only in the Sling Blue and Sling
                  Orange & Blue plans—Sling Orange carries no local networks.
                  Also, Sling TV occasionally offers deals on digital antennas
                  that allow you to receive local channels for free and
                  integrate them into your Sling TV channel interface.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Do you get local channels with Sling TV?"}
            cssClass={"faq-content"}
          >
            <p>
              In select markets, you can get local ABC, NBC, and FOX channels on
              Sling TV, but only in the Sling Blue and Sling Orange & Blue
              plans—Sling Orange carries no local networks. Also, Sling TV
              occasionally offers deals on digital antennas that allow you to
              receive local channels for free and integrate them into your Sling
              TV channel interface.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Which Sling TV plan is
                best, Orange or Blue?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  We recommend the Sling Orange & Blue plan to get the most
                  channels, but either Sling Orange or Sling Blue can be
                  customized with several add-on channel packages. It depends on
                  your taste: Sling Orange is better for kids and sports
                  programming (but has fewer channels), while Sling Blue
                  features more entertainment and news channels.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Which Sling TV plan is best, Orange or Blue?"}
            cssClass={"faq-content"}
          >
            <p>
              We recommend the Sling Orange & Blue plan to get the most
              channels, but either Sling Orange or Sling Blue can be customized
              with several add-on channel packages. It depends on your taste:
              Sling Orange is better for kids and sports programming (but has
              fewer channels), while Sling Blue features more entertainment and
              news channels.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How much is Sling TV?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Depending on which plan you choose, Sling TV will run you
                  between $40.00–$55.00/mo. Plus, add-ons and other feature
                  upgrades can increase the monthly cost.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" How much is Sling TV?"}
            cssClass={"faq-content"}
          >
            <p>
              Depending on which plan you choose, Sling TV will run you between
              $40.00–$55.00/mo. Plus, add-ons and other feature upgrades can
              increase the monthly cost.
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
                <Link href={"#"}> Sling TV Channel Lineup</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Sling TV Deals</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Sling TV vs. YouTube TV </Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Streaming Services </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default SlingTvWhatToWatch;
