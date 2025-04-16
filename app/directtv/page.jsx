// import React, { useState } from "react";
import "./direct-tv-review.scss";
// import SubNav from "../components/sub-nav/SubNav";
// import { directtvNavLinks } from "../assets/data/navLinks/directtvNavLinks";
import InnerPagesHeroTwo from "../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import directtvboy from "../assets/images/directtvboy.png";
import star from "../assets/images/star.png";
import dsign from "../assets/images/dsign.png";
import directtvlogo from "../assets/images/directtvlogo.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../components/accordion/Accordion";
import CTA from "../components/cta-section/CTA";
import dotted from "../assets/images/dotted.png";
import PackageTable from "../components/package-table/PackageTable";
import mark from "../assets/images/mark.png";
import network from "../assets/images/network.png";
import quotations from "../assets/images/quotations.svg";
// import Newsletter from "../components/newsletter/Newsletter";

export const metadata = {
  title: "DIRECT TV Network Review 2024: Plans, Pricings, And More"
};

const DirectTvReview = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: directtvlogo,
      rating: "(4.5/5)",
      starImg: star,
      desc: "Good for regional sports",
      buttonText: "Compare to competitors",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: directtvboy,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "DIRECTV",
        icon: dsign,
      },
      {
        subtitle: "Channel count:",
        title: "165–340+",
        icon: dsign,
      },
      {
        subtitle: "Price:",
        title: "$69.99–$159.99/mo.",
        icon: dsign,
      },
      {
        subtitle: "DVR:",
        title: "Up to 450 hrs.",
        icon: dsign,
      },
    ],

    tableData: [
      {
        head: ["Top packages", "Price", "Channel count", "Deals", "Details"],

        body: [
          {
            content: [
              "1.",
              "PREMIER™ All Included",
              "$169.99/mo.",
              "340+",
              "Three free months of premium channels",
            ],
            linkPath: "#",
          },

          {
            content: [
              "2.",
              "ENTERTAINMENT™ All Included",
              "$69.99/mo.",
              "165+",
              "Three free months of premium channels",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "Data effective as of post date. Offers and availability may vary by location and are subject to change.",
  };
  let packageTableData = [
    {
      head: ["Package", "Price*", "Channel count", "Details"],

      body: [
        {
          content: ["1.", "ENTERTAINMENT All Included", "$69.99/mo.", "165+"],
          linkPath: "#",
        },
        {
          content: ["2.", "CHOICE™ All Included", "$84.99/mo.", "200+"],
          linkPath: "#",
        },
        {
          content: ["3.", "CHOICE™ All Included", "$114.99/mo.", "270+"],
          linkPath: "#",
        },
        {
          content: ["4.", "PREMIER™ All Included", "$159.99/mo.", "340+"],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataCompetition = [
    {
      head: [
        "Provider",
        "Pricing*",
        "Channels",
        "DVR Storage",
        "Simultaneous recordings",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "DIRECTV",
            "$69.99–$159.99/mo.",
            "165–340+",
            "Up to 450 hrs.",
            "Up to 7",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "DISH",
            "$92.99–$117.99/mo.",
            "190–290+",
            "500 hrs.",
            "16",
          ],
          linkPath: "#",
        },
        {
          content: ["3.", "Spectrum", "$59.99/mo.", "150+", "Varies", "2–6"],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Verizon Fios",
            "$60.00–$119.00/mo.",
            "60–425+",
            "50–200 hrs.",
            "2–12",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "Xfinity ",
            "$20.00–$80.00/mo. ",
            " 10–185+",
            "20 hrs. included (upgrades available) ",
            "6 ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "6.",
            "YouTube TV ",
            "$72.99/mo. ",
            "100+ ",
            "Unlimited ",
            "3 (streams) ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "7.",
            "Max ",
            "$9.99–$19.99/mo. or $99.99–$199.99/yr. ",
            "N/A ",
            "N/A ",
            "3 (streams) ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "8.",
            "Astound Broadband powered by RCN ",
            "$116.04–$151.95/mo. ",
            "287–304+ ",
            "125–250 hrs. ",
            "2-6 ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "9.",
            "Optimum ",
            "$35.00–$115.00/mo. ",
            "50–420+ ",
            "25–150 hrs. ",
            "15 ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "10.",
            "Cox ",
            "$56.00–$139.00/mo. ",
            "75–250+ ",
            "250–1,000 hrs. ",
            "2–24 ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "11.",
            "Sparklight ",
            " $42.00–$121.75/mo.",
            "20–100+ ",
            "200 hrs. ",
            "6 ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "12.",
            "Xtream powered by Mediacom ",
            "$29.99–$129.99/mo. ",
            "50–170+ ",
            "50–250 hrs. ",
            "Unavailable ",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataChannels = [
    {
      head: ["Package", "Included popular channels", "Details"],

      body: [
        {
          content: ["1.", "ENTERTAINMENT", "ESPN, ESPN2, NBCSN, and FS1"],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "CHOICE™",
            "IFC, Nick Jr., OWN TV, Travel Channel, and UniMás",
          ],
          linkPath: "#",
        },
        {
          content: ["3.", "ULTIMATE", "El Rey, STARZ ENCORE, and TMC"],
          linkPath: "#",
        },
        {
          content: ["4.", "PREMIER™", "HBO, CINEMAX, SHOWTIME, and STARZ"],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataChannelsSportPackage = [
    {
      head: ["Package", "Description", "Details"],

      body: [
        {
          content: [
            "1.",
            "DIRECTV Sports Pack",
            "40 out-of-market sports networks, including CBS Sports Network, 17 regional Bally Sports Networks, and ESPN College Extra",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "FOX Soccer Plus",
            "Soccer matches from Liga MX, Major League Soccer, and CONCACAF Champions Cup, premium rugby matches from the National Rugby League and the Super Rugby League, and the Australian Rules Football League",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "MLB Extra Innings",
            "Up to 90 out-of-market MLB games each week throughout the MLB regular season",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "NBA League Pass",
            "Around 40 out-of-market NBA games per week during the NBA regular season",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "NHL Center Ice",
            "Up to 40 out-of-market NHL games a week, plus NHL Network",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="direct-tv-review">
      {/* <SubNav links={directtvNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            DIRECT TV Network Review 2024: Plans, Pricings, And More
          </h2>
          <p className="sect-desc">
            For the third straight year, our TV experts gave DISH our Editor's
            Choice Awards for best overall TV provider and best TV provider for
            families—learn why in this DISH review.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-direct-tv-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            5-day free trial: Tired of cable and satellite TV but not quite sure
            if you wanna cut the cord?{" "}
            <span className="link">
              <Link href={"#"}> DIRECTV STREAM </Link>
            </span>{" "}
            is a good streaming alternative for folks who want the look and feel
            of old-school TV without the installation requirements, equipment
            fees, and other headaches that come with cable.
          </p>
          <br />
          <h4>Is DIRECTV good?</h4>
          <p>
            In general, DIRECTV is good. The satellite TV provider has
            relatively high customer satisfaction scores, the powerful Genie
            DVR, and three free months of HBO Max, CINEMAX, SHOWTIME, STARZ, and
            MGM+ (formerly EPIX) when you sign up.
            <br />
            But if you go with DIRECTV, you have to sign a two-year contract,
            and two years is a long time to be stuck with a TV provider. The
            newly transparent pricing helps, even with DIRECTV charging an
            advanced receiver service fee ($15 a month)—that’s how DIRECTV can
            still say the Genie is “included.”
            <br />
            Also, remember to cancel the free premium channels offer before the
            trial period ends. Otherwise, it’ll auto-renew and ram you in the
            pocketbook.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th>
                    Prospects <IoThumbsUpSharp className="icon" />
                  </th>
                  <th>
                    Consequences <IoThumbsDownSharp className="icon" />
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>2-yr. price guarantee</td>
                  <td>2-yr. contract</td>
                </tr>
                <tr>
                  <td>Genie DVR (200–450 hrs.)</td>
                  <td>Hidden fees</td>
                </tr>
                <tr>
                  <td>3 mos. of free premium channels </td>
                  <td>No NFL Sunday Ticket</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Is DIRECTV available in your area?"}
        desc={
          "Enter your zip code below to see top TV services in your neighborhood."
        }
      />

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
          <Link href={"#"}>Deals and promotions </Link>
          <Link href={"#"}>DIRECTV packages and prices </Link>
          <Link href={"#"}>DIRECTV vs. the competition</Link>
          <Link href={"#"}>Channels</Link>
        </div>
      </div>

      <div className="endnote is-direct-tv-good">
        <div className="endnote-container">
          <Image src={dotted} alt="dotted" />
          <h4>DIRECTV promotions, deals, and more</h4>
          <p>
            DIRECTV always has deals for new customers—these are the current
            offers.
          </p>
          <ul>
            <li>
              · Gift cards: Sign up for DIRECTV & get up to a $400 VISA® Reward
              Card. Expires December 31, 2023.
            </li>
            <li>
              · Free premium channels: New DIRECTV customers get three free
              months of{" "}
              <sapn className="link">
                <Link href={"#"}> Max™, </Link>
              </sapn>
              Cinemax®, SHOWTIME®, STARZ®, and MGM+™. Deal auto-renews at $54.95
              monthly after the trial period. Note, however, that the PREMIER
              package includes all of these premium channels except MGM+ (but
              you’ll still get it free for three months).
            </li>
          </ul>
          <p>
            Check out our guide to{" "}
            <sapn className="link">
              <Link href={"#"}> DIRECTV deals </Link>{" "}
            </sapn>
            for a complete rundown of available discounts and promotions.
          </p>
          <h4>Pro tip:</h4>
          <p>
            Unfortunately, one of DIRECTV’s most popular deals, a free season of
            NFL Sunday Ticket, is no longer available. NFL Sunday Ticket is now
            exclusively offered through YouTube TV.
            <sapn className="link">
              <Link href={"#"}>YouTube TV.</Link>
            </sapn>
          </p>
        </div>
      </div>

      <div className="section direct-tv-packages-and-prices">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV <span> packages and prices </span>
          </h2>
          <p className="sect-desc">
            Until January 2023, DIRECTV pricing included the Genie DVR, and
            after the first year of the two-year contract, monthly payments
            jumped by up to 38%. That made the actual DIRECTV monthly payment,
            averaged over two years, pretty high.
          </p>
        </div>
        <div className="package-table-container channels">
          <PackageTable item={packageTableData} />
          <p className="below-table">
            Data as of post date. Offers and availability may vary by location
            and are subject to change. <br />
            *for 24 months plus taxes and fees w/ 24-mo. agmt.; AutoPay and
            Paperless Bill req’d. Advanced Receiver Service Fee $15/mo. is extra
            and applies.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Old DIRECTV pricing (averaged over two years)</h4>
          <br />
          <ul>
            <li>
              · <b>ENTERTAINMENT:</b> $84.00/mo.*
            </li>
            <li>
              · <b>CHOICE:</b>$96.00/mo.*
            </li>
            <li>
              · <b>ULTIMATE:</b> $118.00/mo.*
            </li>
            <li>
              · <b>PREMIER:</b> $171.00/mo.*
            </li>
          </ul>
          <br />
          <p>
            DIRECTV now offers a two-year price guarantee to better compete with
            DISH Network. The new packages cost about $8–$19 less than the old
            prices (using the two-year averages above), but DIRECTV now charges
            a $15-a-month Advanced Receiver Service Fee for all plans.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>
            New DIRECTV pricing (including $15/mo. Advanced Receiver Service
            Fee)
          </h4>
          <br />
          <ul>
            <li>
              · <b>ENTERTAINMENT:</b> $69.99/mo.
            </li>
            <li>
              · <b>CHOICE:</b> $84.99/mo.
            </li>
            <li>
              · <b>ULTIMATE:</b> $114.99/mo.
            </li>
            <li>
              · <b>PREMIER:</b> $159.99/mo.
            </li>
          </ul>
          <br />
          <p>
            With the Advanced Receiver Service Fee included, DIRECTV’s
            ENTERTAINMENT, CHOICE, and ULTIMATE plans cost $4–$7 more than they
            did before—but PREMIER, DIRECTV’s everything plan, is $2 cheaper. So
            DIRECTV sneaked one last little price hike into its newly
            transparent pricing.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={mark} className="mark" alt="mark" />
          <h4>Pro tip:</h4>
          <p className="after-heading">
            <span className="link">
              <Link href={"#"}>DIRECTV STREAM</Link>
            </span>{" "}
            is similar to standard DIRECTV, but it doesn’t have contracts or
            dishes.
          </p>
        </div>
      </div>

      <div className="section direct-tv-competition">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV <span>vs. the competition</span>
          </h2>
          <p className="sect-desc">
            If you’re set on satellite TV, DIRECTV has only one direct (see what
            we did there?) competitor:{" "}
            <span className="link">
              <Link href={"#"}>DISH Network.</Link>
            </span>{" "}
          </p>
        </div>
        <PackageTable item={packageTableDataCompetition} />
        <div className="package-table-container channels">
          <Image src={network} alt="network" className="mark" />
          <h4>Learn more about TV providers and streaming services</h4>
          <p className="after-heading">
            If you’re cable- or streaming-curious, you’ve got way more options.
            For quick comparisons, we’ve included cable TV providers, the best
            live TV streaming service (YouTube TV), and the best on-demand
            streaming service (HBO Max) in the table above. You can read more
            about these services in these guides:
          </p>
          <br />
          <ul>
            <li>
              <span className="link">
                <Link href={"#"}>Best TV Providers</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"#"}>Best Live TV Streaming Services</Link>
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"#"}>Best Streaming Services</Link>
              </span>
            </li>
          </ul>
          <br />
        </div>
        <div className="package-table-container channels">
          <h4>DIRECTV vs. DISH Network</h4>
          <p className="after-heading">
            DIRECTV has more channels (340+) than DISH (290+). Although DIRECTV
            lost NFL SUNDAY TICKET, it still has a few more sports channels than
            DISH and better sports add-ons—that’s why it’s our pick for the best
            TV provider for sports.
            <br />
            As mentioned earlier, DIRECTV changed its pricing to compete with
            DISH and now offers a two-year price guarantee. DIRECTV also started
            charging an Advanced Receiver Service Fee ($15 a month) with every
            plan. That puts the two satellite TV providers on more level
            ground—but DISH remains slightly more affordable and has better
            content for families, better parental controls, and a better DVR.
            <br />
            Now you can see why we call DISH the{" "}
            <span className="link">
              <Link href={"#"}>
                best overall TV provider and the best TV provider for families.
              </Link>
            </span>{" "}
            For more details, read our helpful DISH vs. DIRECTV guide.
          </p>
        </div>
      </div>

      <div className="section direct-tv-channels">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV <span> channels </span>
          </h2>
          <p className="sect-desc">
            DIRECTV has one of the beefiest channel lineups among traditional
            cable and satellite TV providers. You should know, however, that
            many channels in the more expensive DIRECTV packages are filler you
            might not need.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DIRECTV channel lineup</h4>
          <br />
          <p>
            Check out{" "}
            <span className="link">
              <Link href={"#"}>the full DIRECTV channel lineups</Link>
            </span>{" "}
            for each DIRECTV package to see what you’re getting. The package
            comparisons break it all down for you.
            <br />
            DIRECTV’s ENTERTAINMENT package covers family-favorite channels like
            ABC, some popular cable channels, and bigger sports channels like
            ESPN—but no regional sports networks. The other three plans include
            the RSNs.
          </p>
          <PackageTable item={packageTableDataChannels} />
          <p className="below-table">
            Data as of post date. Offers and availability may vary by location
            and are subject to change.
          </p>
          <br />
          <p>
            Still, DIRECTV’s channel lineups are well balanced, with PREMIER™
            standing out as one of the few packages (from any TV provider) to
            include all the big premium channels. It’s a go-big-and-go-home
            situation—you can get everything you want and never have to leave
            your couch again.
            <br />
            So, if you have the cash for DIRECTV PREMIER, it’s pretty sweet to
            have a package that includes every channel DIRECTV carries—including
            Max, SHOWTIME, CINEMAX, and STARZ. MGM+ (formerly EPIX) doesn’t come
            with PREMIER, but you’ll still get it free for three months when you
            sign up.
          </p>
          <br />
          <hr />
          <div className="btn">
            <Link href={"#"}>see full direcTV channel lineups</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <Image src={quotations} className="mark" alt="mark" />
          <h4>Pro tip:</h4>
          <p className="after-heading">
            DIRECTV doesn’t carry beIN Sports or the Pac-12 Network—but{" "}
            <span className="link">
              <Link href={"#"}>DISH </Link>
            </span>{" "}
            does.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DIRECTV sports packages</h4>
          <p className="after-heading">
            Although DIRECTV no longer carries{" "}
            <span className="link">
              <Link href={"#"}> NFL SUNDAY TICKET, </Link>
            </span>{" "}
            the provider still offers four other major sports add-on packages.
            Each package brings you out-of-market access to the top sports
            leagues in the US.
            <br />
            With both the NBA and the NHL now in season,{" "}
            <span className="link">
              <Link href={"#"}>NBA League Pass </Link>
            </span>{" "}
            and NHL Center Ice are important for megafans of basketball and
            hockey. After all, 40 out-of-market games per week from each league
            is a lot to miss out on.
            <br />
            DIRECTV also has{" "}
            <span className="link">
              <Link href={"#"}> 40 out-of-market sports networks </Link>
            </span>{" "}
            (including CBS Sports Network, 17 regional Bally Sports Networks,
            and ESPN College Extra) for an additional $13.99 monthly. To learn
            more, read our guide to{" "}
            <span className="link">
              <Link href={"#"}> DIRECTV Sports Packages. </Link>
            </span>
            <br />
            Now that you know the pros and cons of DIRECTV packages, let’s look
            at some of the{" "}
            <span className="link">
              <Link href={"#"}> DIRECTV bundles </Link>
            </span>{" "}
            with AT&T or Centurylink high-speed internet service.
          </p>
          <PackageTable item={packageTableDataChannelsSportPackage} />
        </div>
        <div className="package-table-container channels">
          <h4>DIRECTV bundles</h4>
          <p className="after-heading">
            Now that DIRECTV is no longer the property of AT&T, you might think
            you can’t bundle DIRECTV and AT&T Internet. That’s false. You can
            still add AT&T DSL or fiber internet service when you order
            DIRECTV—just don’t expect a discount.
            <br />
            Centurylink offers DIRECTV bundles, too—also with DSL and fiber
            connections—but AT&T’s service is a bit faster.
            <br />
            Check out our full review of{" "}
            <span className="link">
              <Link href={"#"}>DIRECTV bundles</Link>
            </span>{" "}
            for more information.
          </p>
        </div>
      </div>

      <CTA
        heading={"Can you get AT&T or Centurylink internet in your area?"}
        desc={"Enter your zip code below to find out!"}
      />

      <div className="section direct-tv-equipment">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV <span>equipment</span>
          </h2>
          <p className="sect-desc">
            Now that DIRECTV charges the $15-a-month Advanced Receiver Service
            Fee for its Genie DVR, is it worth it? Yes and no. DISH Network
            charges only $10 monthly for its{" "}
            <span className="link">
              <Link href={"#"}>Hopper 3 DVR</Link>
            </span>{" "}
            , which has 2.5x the storage and 3x the simultaneous recordings.
            Since price, storage, and simultaneous recordings are the most
            important DVR features, the Hopper already beats the Genie.
            <span className="link">
              <Link href={"#"}> Hopper already beats the Genie.</Link>
            </span>{" "}
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DIRECTV Genie vs. DIRECTV Hopper</h4>
          <p className="after-heading">
            That said, the DIRECTV Genie is still a powerful machine that comes
            in both wired (Genie) and wireless (Genie 2) versions. The wired
            Genie’s 200-hour HD storage capacity is enough for all eight seasons
            of The Vampire Diaries or about 80 NBA games, while the Genie 2 can
            store up to 450 HD hours—but it has an extra one-time $99 fee. You
            can also hook up more TVs with the Mini Genie ($7 more per TV
            monthly).
            <br />
            Check out our full{" "}
            <span className="link">
              <Link href={"#"}>Genie DVR review</Link>
            </span>{" "}
            for everything else you want to know.
          </p>
          <br />
          <PackageTable item={packageTableDataCompetition} />
          <p className="below-table">
            Data as of post date. Offers and availability may vary by location
            and are subject to change.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DIRECTV specs and features</h4>
          <p className="after-heading">
            To sum it up, here are some of the neatest things about DIRECTV:
          </p>
          <br />
          <ul>
            <li>
              · Out-of-market sports with FOX Soccer Plus,{" "}
              <span className="link">
                <Link href={"#"}>NBA League Pass, NHL Center Ice,</Link>
              </span>{" "}
              and{" "}
              <span className="link">
                <Link href={"#"}>MLB Extra Innings</Link>
              </span>
            </li>
            <li>· 4K HDR programming on CHOICE packages and higher</li>
            <li>
              · Choice of wired or wireless Genie DVR with 200–450 hrs. of HD
              storage
            </li>
            <li>
              · Mobile streaming with the DIRECTV app (
              <span className="link">
                <Link href={"#"}>Google Play </Link>
              </span>
              and{" "}
              <span className="link">
                <Link href={"#"}>App Store </Link>
              </span>
              )
            </li>
            <li>· 72-hour rewind on select channels</li>
            <li>· Frequent specials and promotions</li>
          </ul>
          <br />
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is DIRECTV worth it?</span>
          </h2>
          <p className="sect-desc">
            We’re hot and cold on DIRECTV’s new prices, two-year price
            guarantee, and $15 Advanced Receiver Service Fee for the Genie DVR.
            It’s fantastic that DIRECTV finally ditched its big, scary,
            non-transparent second-year rate hikes—but it’s still an expensive
            service. Also, we don’t love that DIRECTV charges the Advanced
            Receiver Service Fee while claiming that the Genie is included.
            <br />
            But we love the Genie, and DIRECTV’s perks remain impressive,
            especially its sports programming— even without NFL SUNDAY TICKET.
            That said, DIRECTV is now much closer in value to DISH, our Editor’s
            Choice pick for the best overall TV provider—but still too
            expensive.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>view plans</Link>
        </div>
      </div>

      <div className="section direct-tv-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>DIRECTV service </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Does DIRECTV service my
                area?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  DIRECTV service is available nationwide.
                  <br />
                  With the few exceptions of apartment buildings or houses
                  without a south-facing mounting surface (for the satellite
                  dish), you can get DIRECTV service from way down in the Bayou
                  all the way up to the Northern Lights.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Does DIRECTV service my area?"}
            cssClass={"faq-content"}
          >
            <p>
              DIRECTV service is available nationwide.
              <br />
              With the few exceptions of apartment buildings or houses without a
              south-facing mounting surface (for the satellite dish), you can
              get DIRECTV service from way down in the Bayou all the way up to
              the Northern Lights.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Can I install DIRECTV
                myself?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  You can’t install DIRECTV yourself. DIRECTV will dispatch a
                  technician to install your satellite dish and get your DIRECTV
                  service up and running.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Can I install DIRECTV myself?"}
            cssClass={"faq-content"}
          >
            <p>
              You can’t install DIRECTV yourself. DIRECTV will dispatch a
              technician to install your satellite dish and get your DIRECTV
              service up and running.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How can I watch DIRECTV on
                the go?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Your DIRECTV service includes on-the-go viewing with the
                  DIRECTV app. You can download the DIRECTV app on the App Store
                  or Google Play with your smartphone or tablet.
                  <br />
                  The app allows you to stream your DIRECTV live channels,
                  on-demand content, and DVR recordings while away from home—but
                  you need internet access. To watch offline, download
                  recordings from your cloud DVR before leaving the house.
                  <br />
                  <b>Heads up:</b> DIRECTV has loads of positive reviews on the
                  App Store, but Google Play users comment that a recent update
                  ruined the app’s functionality. We’ll keep our fingers crossed
                  for patches that fix the problem.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How can I watch DIRECTV on the go?"}
            cssClass={"faq-content"}
          >
            <p>
              Your DIRECTV service includes on-the-go viewing with the DIRECTV
              app. You can download the DIRECTV app on the App Store or Google
              Play with your smartphone or tablet.
              <br />
              The app allows you to stream your DIRECTV live channels, on-demand
              content, and DVR recordings while away from home—but you need
              internet access. To watch offline, download recordings from your
              cloud DVR before leaving the house.
              <br />
              <b>Heads up:</b> DIRECTV has loads of positive reviews on the App
              Store, but Google Play users comment that a recent update ruined
              the app’s functionality. We’ll keep our fingers crossed for
              patches that fix the problem.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Does DIRECTV have a mobile
                app?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>DIRECTV does not currently offer any senior discounts.</p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Does DIRECTV have a mobile app?"}
            cssClass={"faq-content"}
          >
            <p>DIRECTV does not currently offer any senior discounts.</p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>What is the cheapest DIRECTV
                package?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  DIRECTV’s cheapest offering is the ENTERTAINMENT package. At
                  $69.99 a month for the first year, it gives you 165+ channels,
                  including multiple ESPN and Disney channels, along with FX and
                  IFC. A group of premium channels—Max, Cinemax, SHOWTIME,
                  STARZ, and MGM+ (formerly EPIX)—are free for the first three
                  months. (Note: All of these premium channels except MGM+
                  already come with the PREMIER package. You can still get three
                  free months of MGM+ with PREMIER, though.)
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"What is the cheapest DIRECTV package?"}
            cssClass={"faq-content"}
          >
            <p>
              DIRECTV’s cheapest offering is the ENTERTAINMENT package. At
              $69.99 a month for the first year, it gives you 165+ channels,
              including multiple ESPN and Disney channels, along with FX and
              IFC. A group of premium channels—Max, Cinemax, SHOWTIME, STARZ,
              and MGM+ (formerly EPIX)—are free for the first three months.
              (Note: All of these premium channels except MGM+ already come with
              the PREMIER package. You can still get three free months of MGM+
              with PREMIER, though.)
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>What is the best DIRECTV
                package?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  If a diverse and hearty DIRECTV channel package is what you’re
                  shopping for, the PREMIER plan ($159.99 a month) is the
                  jackpot. The 340+ channels PREMIER delivers are a robust blend
                  of local stations, sports and entertainment networks, and, of
                  course, premium channels like CINEMAX, Max, SHOWTIME, and
                  STARZ.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"What is the best DIRECTV package?"}
            cssClass={"faq-content"}
          >
            <p>
              If a diverse and hearty DIRECTV channel package is what you’re
              shopping for, the PREMIER plan ($159.99 a month) is the jackpot.
              The 340+ channels PREMIER delivers are a robust blend of local
              stations, sports and entertainment networks, and, of course,
              premium channels like CINEMAX, Max, SHOWTIME, and STARZ.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(7)}>
                <span>{faq === 7 ? "-" : "+"}</span>How does DISH compare to
                DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 7 ? "show" : ""}`}>
                <p>
                  Like DIRECTV, DISH is a satellite TV provider. Both providers
                  have two-year contracts and guarantee against price hikes
                  during that period. DIRECTV has more channels and slightly
                  better sports options than DISH, but DISH has the better DVR.
                  And, despite recent DIRECTV pricing and policy changes, it’s
                  closer in value to DISH Network—but still more expensive. For
                  a deeper comparison, check out our DISH vs. DIRECTV guide.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={"How does DISH compare to DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>
              Like DIRECTV, DISH is a satellite TV provider. Both providers have
              two-year contracts and guarantee against price hikes during that
              period. DIRECTV has more channels and slightly better sports
              options than DISH, but DISH has the better DVR. And, despite
              recent DIRECTV pricing and policy changes, it’s closer in value to
              DISH Network—but still more expensive. For a deeper comparison,
              check out our DISH vs. DIRECTV guide.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: DIRECTV STREAM | DIRECTV Bundles | DIRECTV Channels |
          DIRECTV Customer service
        </p>
      </div>

      <div className="section endnote direct-tv-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Methodology:</h4>
          <p>
            Our TV experts have spent hundreds of hours studying and analyzing
            DIRECTV’s plans and features. We hand-tested the service’s signal
            reliability and overall user experience while evaluating its
            different channel lineups and DVR capabilities. Additionally, we
            pulled data from our annual TV Customer Satisfaction Survey to see
            how DIRECTV ranked against competitors. Check out our{" "}
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
            page to learn more about how CableTV.com approaches its reviews.
          </p>
          <h4>Disclaimers:</h4>
          <p>
            New approved residential customers, price incl. TV pkg & equip. fees
            for first TV. Add’l fees may apply to non-qualified customers. Early
            agmt termination fee applies ($20/mo.) & add’l fee(s) may apply if
            equip. not returned. Credit card req’d. Restr’s apply. $19.95
            activation & equipment lease req’d for satellite customers.
            Equipment lease req’d for DIRECTV via Internet customers in some
            sales channels.
          </p>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default DirectTvReview;
