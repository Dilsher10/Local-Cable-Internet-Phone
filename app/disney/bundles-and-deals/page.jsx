// import React, { useState } from "react";
import "./disney-bundles-and-deals.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { disneyNavLinks } from "../../assets/data/navLinks/disneyNavLinks";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import disney from "../../assets/images/disney-logo.png";
import disneyboy from "../../assets/images/disney-boy.png";
import disneyicon from "../../assets/images/disney-icon.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import dotted from "../../assets/images/dotted.png";
import PackageTable from "../../components/package-table/PackageTable";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import { FaCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Disney Plus Bundles And Deals"
};

const DisneyBundlesAndDeals = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: disney,
      rating: "(3.5/5)",
      starImg: star,
      desc: "Save up to $28.00/mo.",
      buttonText: "read Disney plus review",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: disneyboy,

    cardsStrip: [
      {
        subtitle: "Bundle with:",
        title: "Hulu, Live TV, Disney+, ESPN+",
        icon: disneyicon,
      },
      {
        subtitle: "Free trail:",
        title: "N/A",
        icon: disneyicon,
      },
      {
        subtitle: "Bundle pricing:",
        title: "$9.99–$89.99/mo.",
        icon: disneyicon,
      },
      {
        subtitle: "Ads:",
        title: "Optional",
        icon: disneyicon,
      },
    ],

    tableData: [
      {
        head: ["Plan", "price", "Channels", "Streams", "Details"],

        body: [
          {
            content: [
              "1.",
              "Disney+, Hulu, ESPN+",
              "$9.99–$24.99/mo.",
              "N/A",
              "11",
            ],
            linkPath: "#",
          },
          {
            content: [
              "2.",
              "Disney+, Hulu + Live TV, ESPN+",
              "$76.99–$89.99/mo.",
              "85+",
              "11",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      " Data as of post date. Offers and availability are subject to change. 18+ only. Incl. Hulu (ad-supported) or Hulu (No Ads) plan. Access content from each service separately, and select ESPN+ content via Hulu. Location data required to watch certain content. Offer valid for eligible subscribers only. Subject to Disney+ and ESPN+ Subscriber Agreement. * Total streams across all apps. Disney+ has 4 streams, Hulu has 2, and ESPN+ has 5.",
  };

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };

  let packageTableData = [
    {
      head: [
        "Plan",
        "Bundle Price",
        "Includes",
        "Channels",
        "Ad-Free*",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Duo Basic",
            "$9.99/mo.",
            "Hulu, Disney+",
            "N/A",
            <ImCross key="Im1" className="cross-icon" />,
          ],
          linkPath: "#", // Replace with actual link
        },
        {
          content: [
            "2.",
            "Duo Premium",
            "$19.99/mo.",
            "Hulu, Disney+",
            "N/A",
            <FaCheck key="Fa1" className="check-icon" />,
          ],
          linkPath: "#", // Replace with actual link
        },
        {
          content: [
            "3.",
            "Trio Basic",
            "$14.99/mo.",
            "Hulu, Disney+, ESPN+",
            "N/A",
            <ImCross key="Im2" className="cross-icon" />,
          ],
          linkPath: "#", // Replace with actual link
        },
        {
          content: [
            "4.",
            "Trio Premium",
            "$24.99/mo.",
            "Hulu, Disney+, ESPN+",
            "N/A",
            <FaCheck key="Fa2" className="check-icon" />,
          ],
          linkPath: "#", // Replace with actual link
        },
        {
          content: [
            "5.",
            "Hulu (with Ads) + Live TV, Disney+ (with Ads), and ESPN+ (with Ads)",
            "$76.99/mo.",
            "70+",
            "No",
            <ImCross key="Im3" className="cross-icon" />,
          ],
          linkPath: "#", // Replace with actual link
        },
        {
          content: [
            "6.",
            "Hulu (No Ads) + Live TV, Disney+ (No Ads), and ESPN+ (with Ads)",
            "$89.99/mo.",
            "70+",
            "Yes",
            <FaCheck key="Fa3" className="check-icon" />,
          ],
          linkPath: "#", // Replace with actual link
        },
      ],
    },
  ];

  let packageTableDatapricing = [
    {
      head: ["Plan", "Price", "Details"],

      body: [
        {
          content: ["1.", "Disney+", "$7.99–$13.99/mo. or $139.99/yr."],
          linkPath: "#", // Replace with actual "View Plan" link
          reviewLink: "#", // Replace with actual "Read Disney+ Review" link
        },
        {
          content: ["2.", "Hulu", "$7.99–$17.99/mo."],
          linkPath: "#", // Replace with actual "View Plan" link
          reviewLink: "#", // Replace with actual "Read Hulu Review" link
        },
        {
          content: ["3.", "Hulu + Live TV", "$76.99–$89.99/mo."],
          linkPath: "#", // Replace with actual "View Plan" link
          reviewLink: "#", // Replace with actual "Read Hulu + Live TV Review" link
        },
        {
          content: ["4.", "ESPN+", "$10.99/mo. or $109.99/yr."],
          linkPath: "#", // Replace with actual "View Plan" link
          reviewLink: "#", // Replace with actual "Read ESPN+ Review" link
        },
      ],
    },
  ];
  let packageTableDatapricingcompetition = [
    {
      head: ["Streaming Service", "Library", "Details"],

      body: [
        {
          content: ["1.", "Amazon Prime Video", "25,000+ titles"],
          linkPath: "#", // Replace with actual "View Plan" link
          reviewLink: "#", // Replace with actual "Prime Video Review" link
        },
        {
          content: ["2.", "Discovery+", "55,000 hrs."],
          linkPath: "#", // Replace with actual "View Plan" link
          reviewLink: "#", // Replace with actual "Discovery+ Review" link
        },
        {
          content: ["3.", "Disney+", "1,438+ titles*"],
          linkPath: "#", // Replace with actual "View Plan" link
          reviewLink: "#", // Replace with actual "Disney+ Review" link
        },
        {
          content: ["4.", "Hulu", "40,000+ titles"],
          linkPath: "#", // Replace with actual "View Plan" link
          reviewLink: "#", // Replace with actual "Read Hulu Review" link
        },
        {
          content: ["5.", "Max™ (formerly HBO Max)", "3,500 titles"],
          linkPath: "#", // Replace with actual "View Plan" link
          reviewLink: "#", // Replace with actual "Max Review" link
        },
        {
          content: ["6.", "Netflix", "5,400+ titles"],
          linkPath: "#", // Replace with actual "View Plan" link
          reviewLink: "#", // Replace with actual "Netflix Review" link
        },
        {
          content: ["7.", "Paramount+", "30,000 hrs."],
          linkPath: "#", // Replace with actual "View Plan" link
          reviewLink: "#", // Replace with actual "Paramount+ Review" link
        },
        {
          content: ["8.", "Peacock", "40,000–60,000 hrs."],
          linkPath: "#", // Replace with actual "View Plan" link
          reviewLink: "#", // Replace with actual "Peacock Review" link
        },
        {
          content: ["9.", "SHOWTIME®", "2,800 titles"],
          linkPath: "#", // Replace with actual "View Plan" link
          reviewLink: "#", // Replace with actual "SHOWTIME Review" link
        },
      ],
    },
  ];

  return (
    <div className="disney-bundles-and-deals">
      {/* <SubNav links={disneyNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">Disney Plus Bundles And Deals 2024</h2>
          <p className="sect-desc">
            Our TV experts tell you how Disney+, Hulu, and ESPN+ stack up in the
            Disney+ bundle—and where you can score a deal on the package.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Bundling Disney Plus with another service</h4>
          <p>
            With the Disney Bundle, you can get Disney+ with several different
            combinations of ESPN+ and either Hulu or Hulu + Live TV. Plus, each
            bundle has a cheaper, ad-supported option. If you have the extra
            cash, the ad-free plans are the way to go—we’ll explain in more
            detail shortly.
            <br />
            You can also choose to create your own custom streaming service
            bundle by signing up for Disney+ and other streaming TV services
            separately. But you’ll have a monthly bill for each service instead
            of one easy monthly payment, and you won’t save any money.
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
          <Link href={"#"}> Disney+ deals </Link>
          <Link href={"#"}>The Disney Bundle </Link>
          <Link href={"#"}> Bundling with other streaming services</Link>
          <Link href={"#"}> The Disney Bundle library size </Link>
          <Link href={"#"}> Disney Bundle shows and movies </Link>
        </div>
      </div>

      <CTA
        heading={"You’ll need a fast internet plan to stream all that TV"}
        desc={
          "Wanna speed up your download speeds? Enter your zip code below to see top internet providers in your area."
        }
      />

      <div className="endnote blank">
        <div className="endnote-container">
          <Image src={dotted} className="mark" alt="" />
          <h4>Disney Plus deals </h4>
          <p>
            Disney+ has no current deals, but we have tips on where else to look
            for Disney+ bundle offers:
          </p>
          <br />
          <ul>
            <li>
              When you buy a new streaming device or smart TV, look for Disney+
              discounts, bundles, or extended-trial offers in the box or
              onscreen when setting up your new gadget.
            </li>
            <li>
              We’ve also seen Xbox offer up to a 30-day trial of Disney+ as a
              Game Pass Ultimate perk.
            </li>
          </ul>
        </div>
      </div>

      <div className="section cost">
        <div className="head">
          <h2 className="sect-heading">
            Disney Plus <span> bundle plans and prices </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Data as of post date. Offers and availability are subject to change.
          <br />
          18+ only. Incl. Hulu (ad-supported) or Hulu (No Ads) plan. Access
          content from each service separately, and select ESPN+ content via
          Hulu. Location data required to watch certain content. Offer valid for
          eligible subscribers only. Subject to Disney+ and ESPN+ Subscriber
          Agreement.
          <br />* There is no ad-free version of ESPN+ or Live TV.
        </p>
      </div>

      <div className="section primetime-channel">
        <div className="head">
          <h2 className="sect-heading">
            Disney+, Hulu, and ESPN+ <span> regular pricing </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus.
          </p>
        </div>
        <div className="all-links">
          <Link href={"/"}>get Disney+, Hulu, and ESPN+ bundle</Link>
        </div>
        <PackageTable item={packageTableDatapricing} />
        <p className="below-table">
          Data as of post date. Offers and availability are subject to change.
        </p>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="quotations" />
          <h4>Bundling Disney Plus with Hulu and ESPN Plus</h4>
          <p className="after-heading">
            The ad-supported “Basic” versions of the Disney+ bundles are a good
            deal to save a few dollars more on top of the money you save from
            bundling the individual services. But is saving it worth the time
            you’ll spend watching commercials every month? Yeah, if your budget
            is tight or you don’t mind watching ads. <br />
            But we always recommend ad-free plans for the best streaming TV
            experience. Trio Premium costs $10 more per month, which really ads
            up over the course of a year, but that’s still a decent savings per
            month over the regular a la carte pricing for all three services.{" "}
            <br />
            If you want live channels on top of your on-demand Disney+
            subscription, consider one of the Live TV bundles. They don’t have
            snappy names like Duo Basic or Trio Premium, but they provide an
            enormous amount of content for just one monthly billing receipt.
            It’s almost like the old days of cable TV, except Baby Yoda is
            there.
          </p>
        </div>
      </div>

      <div className="section important-links">
        <div className="head">
          <h2 className="sect-heading">
            Bundling Disney Plus <span> with other streaming services</span>
          </h2>
          <p className="sect-desc">
            We’re big fans of creating our own custom TV packages by subscribing
            to various streaming TV services. Streaming is more affordable and
            flexible than traditional cable and satellite TV—and it gives you
            the freedom to customize your content with leaner channel counts and
            deep, often themed, libraries.
            <br />
            So check out our guide 9 Streaming Bundles to Replace Cable to see
            streaming bundles we created for specific tastes and circumstances,
            tips on mixing and matching streaming services, and info on other
            prefab streaming bundles like Paramount+/SHOWTIME and AMC+.
          </p>
        </div>

        <div className="all-links">
          <Link href={"#"}> get Disney+ bundle </Link>
        </div>

        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="quotations" />
          <h4>Disney Plus bundle live TV channels</h4>
          <p className="after-heading">
            With the Disney+ bundles, you’ll be able to watch live sports with
            ESPN+—but the only way you get live TV channels in the Disney+
            bundle is if you choose the version with Hulu + Live TV, which
            includes 70+ live channels.
          </p>
          <br />
          <h4>Pro tip:</h4>
          <p className="after-heading">
            Do you need live local channels but can’t afford the Disney+ bundle
            that includes Hulu + Live TV? The Mohu Leaf 50 indoor over-the-air
            (OTA) TV antenna costs only $60. It’s surprisingly easy to install
            and will pick up every local broadcast affiliate and subchannel
            within 60 miles of your home—without a monthly payment.
          </p>
        </div>
      </div>

      <div className="section primetime-channel">
        <div className="head">
          <h2 className="sect-heading">
            Disney Plus bundle library size <span> vs. competition </span>
          </h2>
          <p className="sect-desc">
            The “Trio” Disney+ bundles—the ones with Disney+, Hulu, and ESPN+—is
            a feast of 41,000+ on-demand movies and shows. That’s more content
            than any other streaming service, as you’ll see in this table.
            <br />
            *Note: Some streaming services measure their libraries in hours
            while others do it in titles. So, when perusing this table, know
            that “titles” comfortably beats “hours.”
          </p>
        </div>

        <PackageTable item={packageTableDatapricingcompetition} />
        <p className="below-table">
          Data as of post date. Offers and availability are subject to change.
        </p>
      </div>

      <div className="section important-links">
        <div className="head">
          <h2 className="sect-heading">
            Disney Plus <span> bundle shows</span>
          </h2>
          <p className="sect-desc">
            Here is a sampling of the shows you’ll find, sorted by service.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Shows on Disney Plus (partial list)</h4>
          <p className="after-heading">
            With the Disney+ bundles, you’ll be able to watch live sports with
            ESPN+—but the only way you get live TV channels in the Disney+
            bundle is if you choose the version with Hulu + Live TV, which
            includes 70+ live channels.
          </p>
          <br />
          <ul className="channel-list">
            <li>Andi Mack</li>
            <li>Boy Meets World</li>
            <li>Doug</li>
            <li>DuckTales</li>
            <li>Even Stevens</li>
            <li>Glee</li>
            <li>Gravity Falls</li>
            <li>Hannah Montana</li>
            <li>Kim Possible</li>
            <li>Loki</li>
            <li>Lizzie McGuire</li>
            <li>The Mandalorian</li>
            <li>Ms. Marvel</li>
            <li>Moon Knight</li>
            <li>The Muppet Show</li>
            <li>The Mysterious Benedict Society</li>
            <li>Obi-Wan Kenobi</li>
            <li>Once Upon a Time</li>
            <li>Phineas & Ferb</li>
            <li>Running Wild with Bear Grylls</li>
            <li>Simpsons</li>
            <li>Spider-Man</li>
            <li>Star Wars: Rebels</li>
            <li>Suite Life of Zack & Cody</li>
            <li>That’s So Raven</li>
            <li>Wandavision</li>
            <li>Willow</li>
            <li>Wizards of Waverly Place</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Shows on Hulu (partial list)</h4>
          <p className="after-heading"></p>
          <br />
          <ul className="channel-list">
            <li>The Act</li>
            <li>American Dad</li>
            <li>Atlanta</li>
            <li>Baskets</li>
            <li>Bob’s Burgers</li>
            <li>Breeders</li>
            <li>The Dropout</li>
            <li>Family Guy</li>
            <li>Futurama</li>
            <li>The Handmaid’s Tale</li>
            <li>Hit Monkey</li>
            <li>Hot Ones</li>
            <li>How I Met Your Father</li>
            <li>It’s Always Sunny in Philadelphia</li>
            <li>Key & Peele</li>
            <li>Killing Eve</li>
            <li>King of the Hill</li>
            <li>Malcolm in the Middle</li>
            <li>Mr. Inbetween</li>
            <li>My Name Is Earl</li>
            <li>Only Murders in the Building</li>
            <li>The Orville</li>
            <li>Pam & Tommy</li>
            <li>Pen15</li>
            <li>Regular Show</li>
            <li>Reservation Dogs</li>
            <li>Rick & Morty</li>
            <li>Under the Banner of Heaven</li>
            <li>Welcome to Flatch</li>
            <li>What We Do in the Shadows</li>
            <li>Workaholics</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Shows on ESPN Plus (partial list)</h4>
          <p className="after-heading"></p>
          <br />
          <ul className="channel-list">
            <li>30 for 30 film series</li>
            <li>30 for 30 Shorts</li>
            <li>Abby’s Places</li>
            <li>After TUF</li>
            <li>America’s Caddie</li>
            <li>Backstory with Don Van Natta Jr.</li>
            <li>Bart & Hahn</li>
            <li>Bettor Days</li>
            <li>The Chael Sonnen Show</li>
            <li>Chiney & Golic Jr.</li>
            <li>College Football 150</li>
            <li>Detail</li>
            <li>E:60</li>
            <li>ESPN FC</li>
            <li>The Fantasy Show</li>
            <li>Fuera de Juego</li>
            <li>Fútbol Américas</li>
            <li>Greeny</li>
            <li>The Harder Way</li>
            <li>In the Crease</li>
            <li>Inside 30 for 30</li>
            <li>Inside the College Football Playoff</li>
            <li>Jorge Ramos y su Banda</li>
            <li>Man in the Arena: Tom Brady</li>
            <li>MLS Review</li>
            <li>More Than an Athlete</li>
            <li>NFL Primetime</li>
            <li>O.J.: Made in America</li>
            <li>Our Time: Oklahoma State</li>
            <li>Peyton’s Places</li>
            <li>PFL Presents: The Randy Couture Story</li>
            <li>Quest for the Stanley Cup</li>
            <li>Rowdy’s Places</li>
            <li>Saturdays in the South</li>
            <li>SportsNation</li>
            <li>Stephen A’s World</li>
            <li>The Bracketology Show</li>
            <li>The Ultimate Fighter</li>
            <li>Up Close</li>
            <li>Why Not Us: North Carolina Central Basketball</li>
          </ul>
        </div>
      </div>

      <div className="section primetime-channel">
        <div className="head">
          <h2 className="sect-heading">
            Disney Plus <span> bundle movies </span>
          </h2>
          <p className="sect-desc">
            The Disney+ bundle has the following films as of this writing.
            Again, we’ve sorted the list according to the services included in
            the bundle.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Movies on Disney Plus (partial list)</h4>
          <p className="after-heading"></p>
          <ul className="channel-list">
            <li>10 Things I Hate About You</li>
            <li>101 Dalmatians</li>
            <li>Aladdin</li>
            <li>Avatar</li>
            <li>Big Hero 6</li>
            <li>Blank Check</li>
            <li>Brave</li>
            <li>Cars</li>
            <li>Coco</li>
            <li>Diary of a Wimpy Kid franchise</li>
            <li>Encanto</li>
            <li>The Fault In Our Stars</li>
            <li>Flubber</li>
            <li>Freaky Friday</li>
            <li>Hamilton</li>
            <li>Home Alone franchise</li>
            <li>Hocus Pocus</li>
            <li>Incredibles</li>
            <li>Jungle Cruise</li>
            <li>Marvel movies</li>
            <li>Monsters, Inc. (and sequels)</li>
            <li>Mulan (animated and live-action)</li>
            <li>Muppet movies*</li>
            <li>The Nightmare Before Christmas</li>
            <li>Pirates of the Caribbean franchise</li>
            <li>The Rocketeer</li>
            <li>Soul</li>
            <li>Star Wars franchise</li>
            <li>Summer of Soul</li>
            <li>Toy Story franchise</li>
            <li>Turning Red</li>
            <li>Up</li>
            <li>Willow</li>
            <li>X-Men franchise</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Movies on Hulu (partial list)</h4>
          <p className="after-heading"></p>
          <ul className="channel-list">
            <li>Big Time Adolescence</li>
            <li>Big Trouble in Little China</li>
            <li>The Devil Wears Prada</li>
            <li>Dodgeball</li>
            <li>False Positive</li>
            <li>Fire Island</li>
            <li>Fresh</li>
            <li>Get Low</li>
            <li>The Girl Next Door</li>
            <li>Good Luck to You, Leo Grande</li>
            <li>Happy Feet</li>
            <li>Her Smell</li>
            <li>Hot Fuzz</li>
            <li>I Melt With You</li>
            <li>Independence Day</li>
            <li>The King’s Man</li>
            <li>Let the Right One In</li>
            <li>Machine Gun Kelly’s Life in Pink</li>
            <li>Mother/Android</li>
            <li>Muppets in Space</li>
            <li>Napoleon Dynamite</li>
            <li>Ong Bak</li>
            <li>Palm Springs</li>
            <li>Parasite</li>
            <li>The Polar Express</li>
            <li>Robots</li>
            <li>Save Yourselves!</li>
            <li>Sorry to Bother You</li>
            <li>Talladega Nights: The Ballad of Ricky Bobby</li>
            <li>There’s Something About Mary</li>
            <li>Titane</li>
            <li>Tomcats</li>
            <li>Walk Hard: The Dewey Cox Story</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Movies on ESPN+ (partial list)</h4>
          <p className="after-heading"></p>
          <ul className="channel-list">
            <li>37 Words</li>
            <li>The ‘85 Bears</li>
            <li>Al Davis vs. The NFL</li>
            <li>Bad Boys</li>
            <li>Be Water</li>
            <li>Chasing Tyson</li>
            <li>Chuck & Tito</li>
            <li>Doc & Daryl</li>
            <li>The Dominican Dream</li>
            <li>Dream On</li>
            <li>The Greatest Mixtape Ever</li>
            <li>Hit It Hard</li>
            <li>The House of Steinbrenner</li>
            <li>Lance</li>
            <li>The Last Dance</li>
            <li>Long Gone Summer</li>
            <li>Once Upon A Time In Queens</li>
            <li>The Paterno Legacy</li>
            <li>The Price of Gold</li>
            <li>Rodman: For Better or Worse</li>
            <li>Small Potatoes</li>
            <li>Unmatched</li>
            <li>Unrivaled</li>
            <li>Venus vs.</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Disney Plus bundle streams</h4>
          <p className="after-heading">
            Each service in the Disney+ bundle has its own amount of
            simultaneous streams. The industry average is three streams, so
            Disney+ has the most generous count, while ESPN+ scores a big fat
            par, and Hulu is stingy.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Plans</th>
                  <th>Streams</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1.</td>
                  <td> Disney+</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td> Hulu (and Hulu + Live TV)</td>
                  <td>2 </td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>ESPN+ </td>
                  <td> 3</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="below-table">
            Data as of post date. * Three streams for each streaming app.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Disney Plus bundle devices</h4>
          <p className="after-heading"></p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Device</th>
                  <th>Disney+</th>
                  <th>Hulu</th>
                  <th>ESPN+</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Amazon Fire Cube, Stick, TV</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Android phones, tablets</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Android TV (Sony Bravia, NVIDIA SHIELD)</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Apple AirPlay</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>Apple TV (4th gen.)</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td>Apple TV 4K</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>7.</td>
                  <td>Chromecast, Chromecast with Google TV</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>8.</td>
                  <td>Cox Contour 2, Contour Stream</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>9.</td>
                  <td>Echo Show</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>10.</td>
                  <td>Facebook Portal TV</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>11.</td>
                  <td>iPhone, iPad (Touch, iPod, iPad Mini)</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>12.</td>
                  <td>LG Smart TV (with webOS)</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>13.</td>
                  <td>Nintendo Switch</td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                </tr>
                <tr>
                  <td>14.</td>
                  <td>NVIDIA SHIELD TV Pro</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                </tr>
                <tr>
                  <td>15.</td>
                  <td>Oculus Go</td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                </tr>
                <tr>
                  <td>16.</td>
                  <td>Oculus Quest</td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                </tr>
                <tr>
                  <td>17.</td>
                  <td>PC (web browsers)</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>18.</td>
                  <td>Mac (web browsers)</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>19.</td>
                  <td>PlayStation 3, 4, 5</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>20.</td>
                  <td>Roku, Roku TV</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>21.</td>
                  <td>Samsung TVs (select models)</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>22.</td>
                  <td>TiVo Stream 4K</td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                </tr>
                <tr>
                  <td>23.</td>
                  <td>VIZIO SmartCast TV (select models)</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>24.</td>
                  <td>Wii</td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                  <td>
                    <ImCross className="cross-icon" />
                  </td>
                </tr>
                <tr>
                  <td>25.</td>
                  <td>Xbox One, Xbox Series S, Xbox Series X</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
                <tr>
                  <td>26.</td>
                  <td>Xfinity X1</td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                  <td>
                    <FaCheck className="check-icon" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="below-table">
            Data as of post date.
            <br />* ESPN+ and Hulu + Live TV are not supported on PlayStation 3.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            What’s the <span> best Disney+ deal?</span>
          </h2>
          <p className="sect-desc">
            The Disney+ bundles—both the ad-supported and ad-free versions—are a
            fantastic deal. You’ll get a ton of content (44,100+ movies and
            shows on demand, plus tons of live sporting events) for $6–$28 a
            month less than if you were to sign up for Disney+, ESPN+, and Hulu
            (or Hulu + Live TV, which adds 70+ live channels and a 50-hour cloud
            DVR) separately.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> get this deal</Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>Disney Plus bundles </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What Disney Plus bundles
                are available?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>There are four main Disney Plus bundles:</p>
                <br />
                <ul>
                  <li>
                    Duo Basic (Disney+ and Hulu, both ad-supported), $9.99/mo.
                  </li>
                  <li>
                    Duo Premium (Disney+ and Hulu, both ad-free), $19.99/mo.
                  </li>
                  <li>
                    Trio Basic (Disney+, Hulu, and ESPN+, all ad-supported),
                    $14.99/mo.
                  </li>
                  <li>
                    Trio Premium (Disney+ and Hulu, ad-free, and ad-supported
                    ESPN+), $24.99/mo.
                  </li>
                </ul>
                <p>
                  There are also two bundles available for those who want to
                  also subscribe to live TV channels.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What Disney Plus bundles are available?"}
            cssClass={"faq-content"}
          >
            <p>There are four main Disney Plus bundles:</p>
            <br />
            <ul>
              <li>
                Duo Basic (Disney+ and Hulu, both ad-supported), $9.99/mo.
              </li>
              <li>Duo Premium (Disney+ and Hulu, both ad-free), $19.99/mo.</li>
              <li>
                Trio Basic (Disney+, Hulu, and ESPN+, all ad-supported),
                $14.99/mo.
              </li>
              <li>
                Trio Premium (Disney+ and Hulu, ad-free, and ad-supported
                ESPN+), $24.99/mo.
              </li>
            </ul>
            <p>
              There are also two bundles available for those who want to also
              subscribe to live TV channels.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How much are Disney Plus
                bundles?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  The main Disney Plus bundles are $9.99–$24.99/mo. and the
                  Disney Plus bundles with Live TV are $76.99–$89.99/mo..
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" How much are Disney Plus bundles?"}
            cssClass={"faq-content"}
          >
            <p>
              The main Disney Plus bundles are $9.99–$24.99/mo. and the Disney
              Plus bundles with Live TV are $76.99–$89.99/mo..
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Is there a discount for
                Disney Plus bundles?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  The Disney+ bundles will save you $6–$28 a month over regular
                  prices depending on the version you choose.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Is there a discount for Disney Plus bundles?"}
            cssClass={"faq-content"}
          >
            <p>
              The Disney+ bundles will save you $6–$28 a month over regular
              prices depending on the version you choose.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Can I pay for the Disney
                Plus bundle for a year?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Unfortunately, there is not an annual subscription option for
                  the Disney+ bundles. You can, however, get an annual
                  subscription to ad-free Disney+ ($139.99 a year), a deal that
                  essentially gets you two free months per year.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Can I pay for the Disney Plus bundle for a year?"}
            cssClass={"faq-content"}
          >
            <p>
              Unfortunately, there is not an annual subscription option for the
              Disney+ bundles. You can, however, get an annual subscription to
              ad-free Disney+ ($139.99 a year), a deal that essentially gets you
              two free months per year.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Is Disney Plus free with
                Verizon?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Actually, select Verizon 5G mobile customers can get the
                  Disney+ bundle free at signup. It includes 41,400+ movies and
                  shows on demand from Disney+, ESPN+, and Hulu.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" Is Disney Plus free with Verizon?"}
            cssClass={"faq-content"}
          >
            <p>
              Actually, select Verizon 5G mobile customers can get the Disney+
              bundle free at signup. It includes 41,400+ movies and shows on
              demand from Disney+, ESPN+, and Hulu.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> Can you get NFL Sunday
                Ticket without DIRECTV?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  Yes, NFL Sunday Ticket is no longer available through DIRECTV.
                  Instead, you can sign up through YouTube TV or YouTube
                  Primetime Channels. We also list alternatives to watching NFL
                  Sunday Ticket in our How to Get NFL Sunday Ticket Without
                  DIRECTV guide.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" Can you get NFL Sunday Ticket without DIRECTV?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, NFL Sunday Ticket is no longer available through DIRECTV.
              Instead, you can sign up through YouTube TV or YouTube Primetime
              Channels. We also list alternatives to watching NFL Sunday Ticket
              in our How to Get NFL Sunday Ticket Without DIRECTV guide.
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
            The TV experts at CableTV.com have thousands of hours researching
            and testing streaming TV services. For this article, we researched
            pricing, plans, content, deals, features, and more for Disney+,
            Hulu, Hulu + Live TV, and ESPN+ to see how the services stack up in
            the Disney+ bundle. We also compared the Disney+ bundle to other
            available streaming TV bundles based on the same criteria.
            <br />
            Ultimately, we analyzed the data and translated it into accurate,
            helpful recommendations for our readers. For more on our process,
            see our How We Rank page.
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Hulu + Live TV review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Disney+ review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>ESPN+ review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best TV Streaming Services</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Live TV Streaming Services</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default DisneyBundlesAndDeals;
