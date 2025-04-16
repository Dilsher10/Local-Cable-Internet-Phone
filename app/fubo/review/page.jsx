// import React, { useState } from "react";
import "./fubo-review.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { fuboNavLinks } from "../../assets/data/navLinks/fuboNavLinks";
import fuboimage from "../../assets/images/fubo-image.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import fubo from "../../assets/images/fubo.png";
import fuboicon from "../../assets/images/fubo-icon.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import PackageTable from "../../components/package-table/PackageTable";
import fuboone from "../../assets/images/fubo-one.png";
import fubotwo from "../../assets/images/fubo-two.png";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Fubo Review: Plans, Pricing, And More"
};

const FuboReview = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: fubo,
      rating: "(4.5/5)",
      starImg: star,
      desc: " 200+ channels, foreign sports leagues",
      buttonText: "view fubo specs and features",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: fuboimage,

    cardsStrip: [
      {
        subtitle: "Free trial:",
        title: "7 days",
        icon: fuboicon,
      },
      {
        subtitle: "Price:",
        title: "$74.99–$94.99/mo.",
        icon: fuboicon,
      },
      {
        subtitle: "Channels:",
        title: "150–220+",
        icon: fuboicon,
      },
      {
        subtitle: "Cloud DVR:",
        title: "1,000 hrs.",
        icon: fuboicon,
      },
      {
        subtitle: "Streams:",
        title: "Up to 10",
        icon: fuboicon,
      },
    ],

    tableData: [
      {
        head: [
          "Plan",
          "price",
          "Live channels",
          "Multiple streams",
          "Cloud DVR storage",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Pro",
              "$74.99/mo.",
              "150+",
              "Up to 10",
              "1,000 hrs.",
            ],
            linkPath: "#",
          },
          {
            content: [
              "2.",
              "Elite",
              "$84.00/season",
              "200+",
              "Up to 10",
              "1,000 hrs.",
            ],
            linkPath: "#",
          },
          {
            content: [
              "3.",
              "Premier",
              "$94.00/season",
              "220+",
              "Up to 10",
              "1,000 hrs.",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      " Data effective as of post date. Offers and availability may vary by location and are subject to change.",
  };
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  let packageTableDataplans = [
    {
      head: [
        "Plan",
        "Price",
        "Live Channels",
        "Multiple Streams",
        "Cloud DVR Storage",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Pro",
            "$74.99/mo.",
            "150+",
            "Up to 10",
            "1,000 hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Elite",
            "$84.99/mo.",
            "210+",
            "Up to 10",
            "1,000 hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Premier",
            "$94.99/mo.",
            "220+",
            "Up to 10",
            "1,000 hrs.",
          ],
          linkPath: "#",
        },
        {
          content: ["4.", "Latino", "$32.99/mo.", "45+", "Up to 2", "250 hrs."],
          linkPath: "#",
        },
      ],
    },
  ];

  return (
    <div className="fubo-review">
      {/* <SubNav links={fuboNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Fubo Review 2024: Plans, Pricing, And More
          </h2>
          <p className="sect-desc">
            We’ve streamed Fubo for several years and it’s gained yardage as an
            all-inclusive TV streaming service, but it’s still a mean sports
            machine—especially for soccer fans.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>What is Fubo?</h4>
          <p>
            Fubo is an expensive streaming service, but it offers cord-cutters
            the most sports-specific channels and a sufficient lineup of
            entertainment networks. Soccer is still its specialty, but league
            channels like NBA TV, NHL Network, and NFL Network bolster its
            athletic scope. It’s one of our favorite streaming services for
            sports for a reason. <br />
            Fubo offers over 220 live channels, a 1,000-hour cloud DVR, and a
            slick interface that neatly mirrors what you’re used to with cable
            or satellite service. Fubo ranks competitively for sports channels
            in our Best Live TV Streaming Services rundown. <br />
            It’s also just fun to say “Fubo.” <br />
            Keep reading to learn whether the Fubo packages and prices hit the
            mark for your TV-viewing needs.
          </p>
          <h4>NFL Sunday Ticket pros and cons</h4>
          <p>
            As a live TV streaming service with hundreds of live channels and a
            fat DVR, Fubo is another good option for cable quitters to kick
            around. It’s a little more expensive than most, but its multitude of
            features are worth it here. <br />
            Under the name fuboTV, the service launched in 2015 as “Netflix for
            soccer.” But it has since set its sights on becoming a full-fledged
            TV streaming destination. Don’t worry, soccer fans. It still covers
            the beautiful game ridiculously well—Fubo has far from abandoned its
            original goooaaalll! <br />
            In fact, most of Fubo’s live TV streaming lineup is still made up of
            sports channels. So, if you compare it to other streaming services
            that offer more balanced entertainment-to-sports programming ratios,
            it’s still a few yards short.
          </p>
        </div>
      </div>

      <CTA
        heading={"Looking for better internet speeds?"}
        desc={
          "When it comes to live TV streaming, you’ll wanna be set up with a reliable internet provider. Enter your zip code below to see what speeds and prices are available from internet providers in your area."
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
          <Link href={"#"}>Plans and pricing </Link>
          <Link href={"#"}>Fubo channels </Link>
          <Link href={"#"}>Specs and features </Link>
        </div>
      </div>

      <div className="section cost">
        <div className="head">
          <h2 className="sect-heading">
            Fubo <span> plans and pricing </span>
          </h2>
          <p className="sect-desc">
            Fubo’s pricing is not bad when considering the number of available
            channels. But there’s a hidden regional sports fee depending on your
            billing location and how many regional sports networks (RSNs) you
            get. One RSN will cost you an added $10.99 a month, while the price
            for two or more is $13.99 a month.
          </p>
        </div>
        <PackageTable item={packageTableDataplans} />
        <p className="below-table">
          Data effective as of post date. Offers and availability may vary by
          location and are subject to change.
        </p>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="quotations" />
          <h4>Pro tip:</h4>
          <p>
            Fubo offers three English-language base plans: Pro, Elite, and
            Premier. Most features are similar across each plan, with channel
            counts being the main distinguisher.
          </p>
          <br />
          <ul>
            <li>
              Pro ($74.99 a month) delivers 150+ channels with 1,000 hours of
              cloud DVR storage. Subscribers can also stream on up to 10 screens
              simultaneously at home.
            </li>
            <li>
              Elite ($84.99 a month) has the same channels and benefits as the
              Pro plan. However, it also includes the Fubo Extra and News Plus
              add-ons and access to 4K content.
            </li>
            <li>
              Premier ($94.99 a month) features everything from the Elite plan
              plus nine SHOWTIME channels.
            </li>
          </ul>
          <br />
          <p>
            Fubo also offers the Latino package for those who prefer
            Spanish-language programming. The plan costs $32.99 a month, with
            45+ channels, 250 DVR hours, and two simultaneous streams.
          </p>
          <h4>Free trial:</h4>
          <p>
            Fubo offers a seven-day free trial for new users. You can stream
            live TV from over 150 channels for a week before fully committing to
            the service.
          </p>
        </div>
      </div>

      <div className="section channels">
        <div className="head">
          <h2 className="sect-heading">
            Fubo <span> channels </span>
          </h2>
          <p className="sect-desc">
            Cable entertainment staples like Syfy, HGTV, FX, Comedy Central, and
            USA Network all stream live on Fubo, with previously aired
            programming available on demand. If you like news, MSNBC, CNBC, Fox
            News, Fox Business, and Cheddar News are also available. You can
            find the complete list on our Fubo Channel Lineup page.
            <br />
            But wait, to paraphrase late-night infomercials, there’s less.
            Besides TBS and TNT, Fubo is also missing a few entertainment
            channels that prospective cord-cutters might overlook at first
            glance. You don’t know what you’ve got until it’s gone from your
            channel lineup.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Channels Fubo doesn’t carry</h4>
          <p>
            Those are some heavy-hitters to do without—no Cartoon Network or
            truTV? Life with no Rick and Morty or Impractical Jokers is rough.
          </p>
          <br />
          <ul className="channel-list">
            <li>A&E</li>
            <li>AMC</li>
            <li>BBC America</li>
            <li>Boomerang</li>
            <li>Cartoon Network/Adult Swim</li>
            <li>CNN</li>
            <li>CNN International</li>
            <li>CNN en Español</li>
            <li>HBO</li>
            <li>HISTORY</li>
            <li>HLN</li>
            <li>IFC</li>
            <li>Lifetime</li>
            <li>Lifetime Movie Network</li>
            <li>TBS</li>
            <li>TNT</li>
            <li>truTV</li>
            <li>Turner Classic Movies</li>
          </ul>
        </div>
      </div>

      <div className="section cost">
        <div className="head">
          <h2 className="sect-heading">
            Fubo <span> sports channels </span>
          </h2>
          <p className="sect-desc">
            Fubo carries sports, sports, and more sports—including CBS Sports,
            ESPN, FOX Sports, and NBC Sports channels. The big thumbs-down is
            that it’s missing TBS, TNT, and truTV, which carry national
            baseball, basketball, and hockey games.
            <br />
            Still, we’ve named it one of the best live TV streaming services for
            sports. You’ll see why when we list the channels below.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Fubo live sports channels (partial list)</h4>
          <p>
            Obviously, Fubo’s jam is sports—and the above list doesn’t even
            include the optional sports-package add-ons available. If your
            sports tastes lean more varied and international (is there such a
            thing as a “sports hipster”?), Fubo probably has it. Check out our
            full Fubo Sports Packages guide for a closer look at the streamer’s
            sports coverage and playback features.
          </p>
          <br />
          <ul className="channel-list">
            <li>ACC Network</li>
            <li>beIN SPORTS</li>
            <li>Big Ten Network</li>
            <li>CBS Sports Network</li>
            <li>ESPN</li>
            <li>ESPN2</li>
            <li>ESPN Deportes</li>
            <li>FS1</li>
            <li>FS2</li>
            <li>Pac-12 Network</li>
            <li>FOX Soccer Plus</li>
            <li>Fox Deportes</li>
            <li>Fubo Sports Network</li>
            <li>Golf Channel</li>
            <li>NBA TV</li>
            <li>NFL Network</li>
            <li>NFL RedZone</li>
            <li>NHL Network</li>
            <li>TUDN</li>
            <li>Regional sports networks</li>
          </ul>
        </div>
      </div>

      <div className="section channels">
        <div className="head">
          <h2 className="sect-heading">
            Fubo <span> channel add-ons </span>
          </h2>
          <p className="sect-desc">
            Fubo’s basic plans can get you over 150 channels. But you can drop a
            few more bucks if you need even more sports or some extended
            entertainment.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Fubo add-on packages</h4>

          <br />
          <ul className="channel-list">
            <li>SHOWTIME ($10.99/mo.)</li>
            <li>STARZ ($9.99/mo.)</li>
            <li>MGM+ ($5.99/mo.)</li>
            <li>SHOWTIME + STARZ + MGM+ ($19.99/mo.)</li>
            <li>Fubo Extra (57 channels; $7.99/mo.)</li>
            <li>Sports Plus with NFL RedZone (35 channels; $10.99/mo.)</li>
            <li>Adventure Plus (8 channels; $4.99/mo.)</li>
            <li>Latino Plus (40 channels; $19.99/mo.)</li>
            <li>News Plus (10 channels; $2.99/mo.)</li>
            <li>RAI Italia ($8.99/mo.)</li>
            <li>Portuguese Plus (4 channels; $14.99/mo.)</li>
            <li>International Sports Plus (15 channels; $6.99/mo.)</li>
            <li>TV5MONDE ($9.99/mo.)</li>
            <li>Entretenimiento Plus (7 channels; $9.99/mo.)</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <h4>Fubo local channels</h4>
          <p>
            Fubo doesn’t carry local channels like ABC, CBS, FOX, NBC, The CW,
            and Telemundo in all areas, but it does offer content on-demand from
            these networks.
            <br />
            Admit it: You don’t want to miss the new season of The Voice any
            more than we do. But it’s possible your plan could lack NBC in your
            area. If so, you may want to buy a digital over-the-air antenna to
            pick up local TV stations for free.
          </p>
        </div>
      </div>

      <div className="section cost">
        <div className="head">
          <h2 className="sect-heading">
            Fubo <span> specs and features </span>
          </h2>
          <p className="sect-desc">
            Fubo more than holds its own when it comes to cloud DVR hours,
            simultaneous streams, and compatible devices—outperforming top
            competitors like Hulu + Live TV and Sling TV. That said, the devil
            is in the details. Read on to understand some of Fubo’s limitations
            before you sign up.
          </p>
        </div>

        <div className="package-table-container channels">
          <h4>Fubo cloud DVR</h4>
          <br />
          <p>
            Fubo’s three English-language base plans come with 1,000 hours of
            cloud DVR space. That’s not too shabby, but unlimited DVR storage is
            becoming the norm with other services.
            <br />
            Regardless, if you like to let those House Hunters episodes and
            Swiss Super League matches accumulate, you’ll appreciate Fubo’s DVR.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Plan</th>
                  <th>Storage</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1. </td>
                  <td>Pro </td>
                  <td>1,000 hrs. included </td>
                </tr>
                <tr>
                  <td>2. </td>
                  <td>Elite </td>
                  <td>1,000 hrs. included </td>
                </tr>
                <tr>
                  <td>3. </td>
                  <td>Premier </td>
                  <td>1,000 hrs. included </td>
                </tr>
                <tr>
                  <td>4. </td>
                  <td>Latino </td>
                  <td>250 hrs. included </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <p className="below-table">Data effective as of post date.</p>
        </div>
        <div className="package-table-container channels">
          <h4>Fubo simultaneous streams</h4>
          <br />
          <p>
            Fubo’s Pro, Elite, and Premier plans give you 10 streams on the same
            home network. During our hundreds of hours of user testing, our team
            confirmed that you can’t stream Fubo at the same time on separate
            home networks. So, if you’re sharing your login with other
            households, you’ll need to factor in that little detail.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Plan</th>
                  <th>Stream</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1. </td>
                  <td> Pro</td>
                  <td>Up to 10 </td>
                </tr>
                <tr>
                  <td>2. </td>
                  <td>Elite </td>
                  <td>Up to 10 </td>
                </tr>
                <tr>
                  <td>3. </td>
                  <td>Premier </td>
                  <td>Up to 10 </td>
                </tr>
                <tr>
                  <td>4. </td>
                  <td>Latino </td>
                  <td>2 </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <p className="below-table">Data effective as of post date.</p>
        </div>
        <div className="package-table-container channels">
          <h4>Fubo compatible devices</h4>
          <br />
          <p>
            As seen in the list below, you can stream Fubo across many platforms
            that support the Fubo app and website. For the best streaming
            experience, you’ll need to keep your devices updated with the latest
            software release. Fubo also recommends an internet connection of at
            least 3 Mbs for continuous streaming.
          </p>
          <br />
          <ul className="channel-list">
            <li>Amazon Fire Cub, Stick, TVs</li>
            <li>Android phones, tablets, TVs</li>
            <li>Apple TV</li>
            <li>Chromecast, Chromecast with Google TV</li>
            <li>Hisense VIDAA</li>
            <li>iPhone, iPad, iPod</li>
            <li>LG TVs</li>
            <li>PC, Mac web browsers</li>
            <li>Roku Ultra, Express, Premiere, Stick, TVs</li>
            <li>Samsung Smart TVs</li>
            <li>Vizio SmartCast TVs</li>
            <li>Xbox One, Xbox Series S, Xbox Series X</li>
          </ul>
        </div>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} alt="" className="mark" />
          <h4>Game over!</h4>
          <br />
          <p>
            Despite being an excellent service for watching live sports, Fubo
            doesn’t play well for gamers. PlayStation, Nintendo, and NVIDIA
            platforms are not compatible.
          </p>
          <br />
        </div>
      </div>

      <div className="section channels">
        <div className="head">
          <h2 className="sect-heading">
            Fubo <span> video and audio quality </span>
          </h2>
          <p className="sect-desc">
            Fubo streams at 720p/60 fps, which is currently the standard across
            all live TV streaming services, making its HD quality comparable to
            other services like YouTube TV and Sling TV. However, some on-demand
            content streams at 1080p resolution. One thing that Fubo offers that
            the others don’t? It has 4K sports streaming, even though it’s
            limited to certain events on NBC, FOX, and FS1.
          </p>
        </div>

        <Image src={fuboone} alt="" />
        <p className="below-table">
          The Fubo home screen as seen on a Roku Streaming Stick+ device.
        </p>
        <br />
        <p>
          Fubo’s sound feed is standard 2.0 stereo audio; Dolby Digital Plus 5.1
          Surround Sound isn’t yet available. You’re not missing out on much,
          though: streaming services often advertise Dolby 5.1 sound, but that
          claim applies to only a select amount of programming.
        </p>
        <Image src={fubotwo} alt="" />
        <p className="below-table">
          The dedicated sports page on Fubo as seen on a Roku Streaming Stick+
          device.
        </p>
        <div className="package-table-container channels">
          <Image src={quotationsIcon} className="mark" alt="" />
          <h4>Don’t underestimate 4K:</h4>
          <p>
            Until you experience a soccer ball coming at your face in 4K, you
            don’t know what you’re missing. Check out CableTV.com’s take on 4K
            streaming.
          </p>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Fubo worth it?</span>
          </h2>
          <p className="sect-desc">
            NFL Sunday Ticket offers live out-of-market access on Sunday
            afternoons and is now available through YouTube TV and YouTube’s
            Primetime Channels hub. The major downside to NFL Sunday Ticket is
            its high price tag. It’s also only accessible to those with a
            high-speed internet connection, which costs extra and may not be
            available everywhere.
            <br />
            If you don’t need every live matchup, we highlight other NFL viewing
            options in our How To Watch NFL Games guide. Most cable and
            satellite TV providers carry the main NFL channels. But pairing NFL+
            with an over-the-air HD antenna or an inexpensive live TV streaming
            service is one great way to tune in without breaking the bank.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> get fubo</Link>
        </div>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Fubo </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How much does Fubo cost per
                month?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Fubo’s three English-language base plans cost between $74.99
                  and $94.99 a month. The Pro, Elite, and Premier plans have
                  over 150 channels and 1,000 hours of cloud DVR storage. Fubo
                  also offers its Latino plan for $32.99 a month—featuring 60+
                  channels and 250 hours of DVR space.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" How much does Fubo cost per month?"}
            cssClass={"faq-content"}
          >
            <p>
              Fubo’s three English-language base plans cost between $74.99 and
              $94.99 a month. The Pro, Elite, and Premier plans have over 150
              channels and 1,000 hours of cloud DVR storage. Fubo also offers
              its Latino plan for $32.99 a month—featuring 60+ channels and 250
              hours of DVR space.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Can I get Fubo for free?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Fubo isn’t free, but the streaming service does offer a
                  seven-day free trial to take it for a test drive. Live TV
                  streaming service Philo also has a free trial period.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Can I get Fubo for free?"}
            cssClass={"faq-content"}
          >
            <p>
              Fubo isn’t free, but the streaming service does offer a seven-day
              free trial to take it for a test drive. Live TV streaming service
              Philo also has a free trial period.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What's better, Hulu + Live
                or Fubo?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  For about the same price per month, Fubo carries more live
                  channels than Hulu + Live TV (Hulu + Live TV: 85+; Fubo:
                  150–220+). But Hulu + Live TV also gives you access to Hulu’s
                  large library of on-demand TV shows and movies, as well as
                  Disney+ and ESPN+—because of this, we think Hulu + Live TV is
                  a better value than Fubo.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" What's better, Hulu + Live or Fubo?"}
            cssClass={"faq-content"}
          >
            <p>
              For about the same price per month, Fubo carries more live
              channels than Hulu + Live TV (Hulu + Live TV: 85+; Fubo:
              150–220+). But Hulu + Live TV also gives you access to Hulu’s
              large library of on-demand TV shows and movies, as well as Disney+
              and ESPN+—because of this, we think Hulu + Live TV is a better
              value than Fubo.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Which is better, Sling TV
                or Fubo?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Sling TV offers cheaper plans than Fubo but has fewer channels
                  in its basic plans. Even though Sling TV features a wide array
                  of add-on channel packages, we prefer Fubo’s live TV streaming
                  experience. Our Sling TV vs. Fubo guide explains in more
                  detail how the two services compare.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Which is better, Sling TV or Fubo?"}
            cssClass={"faq-content"}
          >
            <p>
              Sling TV offers cheaper plans than Fubo but has fewer channels in
              its basic plans. Even though Sling TV features a wide array of
              add-on channel packages, we prefer Fubo’s live TV streaming
              experience. Our Sling TV vs. Fubo guide explains in more detail
              how the two services compare.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Is Fubo better than YouTube
                TV?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  YouTube TV and Fubo are close in price and channel counts, but
                  YouTube TV has the advantage of carrying more local channels
                  in most markets. It also has Warner Bros. Discovery channels
                  like TBS, TNT, and CNN and offers the NFL Sunday Ticket
                  add-on—not to mention an unlimited DVR. In this case, we’d
                  give YouTube TV the edge over Fubo.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" Is Fubo better than YouTube TV?"}
            cssClass={"faq-content"}
          >
            <p>
              YouTube TV and Fubo are close in price and channel counts, but
              YouTube TV has the advantage of carrying more local channels in
              most markets. It also has Warner Bros. Discovery channels like
              TBS, TNT, and CNN and offers the NFL Sunday Ticket add-on—not to
              mention an unlimited DVR. In this case, we’d give YouTube TV the
              edge over Fubo.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> Is Fubo free to cancel?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  Yes, you can cancel your Fubo subscription for free at any
                  time. Simply visit the Subscription and Billing page under My
                  Account to cancel your plan. Fubo may offer a discount to
                  tempt you to stay. You also have the option to pause your
                  subscription for up to three months if you plan to return and
                  don’t want to lose your account settings.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" Is Fubo free to cancel?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, you can cancel your Fubo subscription for free at any time.
              Simply visit the Subscription and Billing page under My Account to
              cancel your plan. Fubo may offer a discount to tempt you to stay.
              You also have the option to pause your subscription for up to
              three months if you plan to return and don’t want to lose your
              account settings.
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
            Our sports and TV experts spent over 100 hours streaming live sports
            and entertainment on Fubo to test its functionality, content
            offerings, and overall reliability. We also compared its prices and
            DVR capabilities to other live TV streaming services to see how it
            stacks up to its competition.
            <br />
            For more information on our methodology, check out our
            <span className="link">
              <Link href={"#"}>How We Rank</Link>
            </span>{" "}
            page.
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}> Fubo Channel Lineup</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Streaming Services</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best Streaming Services for Sports</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>How To Watch Live Sports</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default FuboReview;
