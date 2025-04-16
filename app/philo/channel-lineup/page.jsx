// import React, { useState } from "react";
import "./philo-channel-lineup.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { philoNavLinks } from "../../assets/data/navLinks/philoNavLinks";
import philoreviewboy from "../../assets/images/philo-channel-lineup-boy.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import philo from "../../assets/images/philo.png";
import philoicon from "../../assets/images/philo-icon.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa6";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Philo Channel lineup"
};

const PhiloChannelLineUp = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: philo,
      rating: "(3.5/5)",
      starImg: star,
      desc: "Cheapest (live TV streaming)",
      buttonText: "see philo deals",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: philoreviewboy,

    cardsStrip: [
      {
        subtitle: "Channels",
        title: "70+",
        icon: philoicon,
      },
      {
        subtitle: "Price:",
        title: "$25.00/mo.",
        icon: philoicon,
      },
      {
        subtitle: "Steams",
        title: "3",
        icon: philoicon,
      },
      {
        subtitle: "Cloud DVR:",
        title: "Unlimited cloud DVR (12 mos.)",
        icon: philoicon,
      },
    ],

    tableData: [
      {
        head: ["Plan", "price", "Video", "Audio", "Streams", "Details"],

        body: [
          {
            content: [
              "1.",
              " Philo",
              " $25.00/mo.",
              " 70+",
              "Unlimited (1 yr.) ",
              " 3",
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
  return (
    <div className="philo-channel-lineup">
      {/* <SubNav links={philoNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">Philo Channel lineup</h2>
          <p className="sect-desc">
            Philo carries over 70 entertainment and lifestyle networks, but no
            sports or local channels. Check out Philo’s full channel lineup and
            premium add-on options.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Philo channels</h4>
          <p>
            Philo’s channel lineup is all about entertainment and lifestyle
            networks, with a dash of news (like BBC World News) and science (the
            Science channel, of course). <br />
            There are no sports or local channels, but if you love your TLC,
            Investigation Discovery, and Hallmark (a rare find in live TV
            streaming) to the point of obsession, you probably won’t even
            notice. <br />
            Besides, carrying sports and local channels is expensive—excluding
            them is how Philo keeps the price down to $25 a month (hence our
            editorial award for cheapest live TV streaming service). You can
            invest those savings in a nice box of wine, cozy up on the couch,
            and marathon your favorite house-hunting, cooking, and murder shows.
            Go ahead, you’ve earned it.
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
          <Link href={"#"}> Philo channels </Link>
          <Link href={"#"}> Philo premium add-on channels </Link>
        </div>
      </div>

      <CTA
        heading={"You’ll need a fast internet plan to stream all that TV"}
        desc={
          " Wanna speed up your download speeds? Enter your zip code below to see top internet providers in your area."
        }
      />

      <div className="section channel-lineup">
        <div className="head">
          <h2 className="sect-heading">
            Philo <span> channels lineup</span>
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
          <Link href={"#"}> view philo plans </Link>
        </div>
        <div className="hash-linking">
          <div className="alphabets">
            {" "}
            <Link href="#a">a</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">b</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">c</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">d</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">e</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">f</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">g</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">h</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">i</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">j</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">k</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">l</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">m</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">n</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">o</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">p</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">q</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">r</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">s</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">t</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">u</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">v</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">w</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">x</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#">y</Link>
          </div>
          <div className="alphabets">
            {" "}
            <Link href="#z">z</Link>
          </div>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th> </th>
                <th>Channels</th>
                <th>Philo ($25.00/mo.)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>1. </th>
                <th id="a">A&E </th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>2. </th>
                <th>ABC</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>3. </th>
                <th>Afro</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>4. </th>
                <th>American Heroes Channel (AHC)</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>5. </th>
                <th>BBC America</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>6. </th>
                <th>MTV Live</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>7. </th>
                <th>Universo</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>8. </th>
                <th>WE tv</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th> 9.</th>
                <th>Z Living</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>10. </th>
                <th id="z">Zona Futbol</th>

                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="below-table">
          *Availability varies by area. Data effective as of post date.
        </p>
      </div>

      <div className="section bundles-and-deals">
        <div className="head">
          <h2 className="sect-heading">
            Philo <span> bundles and deals </span>
          </h2>
          <p className="sect-desc">
            Philo offers only two premium add-on channels, STARZ and MGM+. Not
            coincidentally, they’re also the least expensive premium channel
            add-ons because that’s how Philo rolls. For comparison, YouTube TV
            offers all five of the premium channels below, while Sling TV
            features over 30 add-on packages. <br />
            Philo also offers the Movies & More multi-channel package, which
            gives you Sony Movies, MGM HD, HDNet Movies, REELZ, and Cinemoi for
            $3 a month.
          </p>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th> </th>
                <th>Channels</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>1. </th>
                <th id="a">A&STARZ </th>
                <th>$9.00/mo. </th>
              </tr>
              <tr>
                <th>2. </th>
                <th>MGM+</th>
                <th>$9.00/mo. </th>
              </tr>
              <tr>
                <th>3. </th>
                <th>Movies & More</th>
                <th>$9.00/mo. </th>
              </tr>
              <tr>
                <th>4. </th>
                <th>Max</th>
                <th> </th>
              </tr>
              <tr>
                <th>5. </th>
                <th>CINEMAX</th>
                <th> </th>
              </tr>
              <tr>
                <th>6. </th>
                <th>SHOWTIME</th>
                <th> </th>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="below-table">Data effective as of post date.</p>
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Philo channels </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What channels do I get with
                Philo?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Philo’s single live TV streaming plan carries over 60
                  channels, including A&E, AMC, Comedy Central, Paramount
                  Network, Nickelodeon, TLC, HGTV, Food Network, Hallmark,
                  Lifetime, and VICE. Philo’s focus is on entertainment and
                  lifestyle channels, with no sports or local channels.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What channels do I get with Philo?"}
            cssClass={"faq-content"}
          >
            <p>
              Philo’s single live TV streaming plan carries over 60 channels,
              including A&E, AMC, Comedy Central, Paramount Network,
              Nickelodeon, TLC, HGTV, Food Network, Hallmark, Lifetime, and
              VICE. Philo’s focus is on entertainment and lifestyle channels,
              with no sports or local channels.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does Philo carry local
                channels?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Unlike live TV streaming services like YouTube TV and Hulu +
                  Live TV, Philo doesn’t carry any local channels. If you want
                  to receive local broadcast channels, you can get them for free
                  over the air with a digital antenna.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does Philo carry local channels?"}
            cssClass={"faq-content"}
          >
            <p>
              Unlike live TV streaming services like YouTube TV and Hulu + Live
              TV, Philo doesn’t carry any local channels. If you want to receive
              local broadcast channels, you can get them for free over the air
              with a digital antenna.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Can you add channels to
                Philo?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Philo has two premium channel add-ons available: STARZ ($9 a
                  month) and MGM+ ($6 a month). It also offers the Movies & More
                  multi-channel package, which gives you Sony Movies, MGM HD,
                  HDNet Movies, REELZ, and Cinemoi for $3 a month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Can you add channels to Philo?"}
            cssClass={"faq-content"}
          >
            <p>
              Philo has two premium channel add-ons available: STARZ ($9 a
              month) and MGM+ ($6 a month). It also offers the Movies & More
              multi-channel package, which gives you Sony Movies, MGM HD, HDNet
              Movies, REELZ, and Cinemoi for $3 a month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Is Hulu or Philo better?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Hulu + Live TV offers over 70 cable and local channels—plus it
                  has tons of on-demand content. Philo is niche by comparison,
                  but it’s one of the few streaming services that has the
                  Hallmark Channel. Read our Hulu vs. Philo review for a
                  complete comparison.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Is Hulu or Philo better?"}
            cssClass={"faq-content"}
          >
            <p>
              Hulu + Live TV offers over 70 cable and local channels—plus it has
              tons of on-demand content. Philo is niche by comparison, but it’s
              one of the few streaming services that has the Hallmark Channel.
              Read our Hulu vs. Philo review for a complete comparison.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Which is better: Philo or
                Sling TV?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Both Philo and Sling TV are affordable live TV streaming
                  services. But Philo has more entertainment and lifestyle
                  channels, while Sling TV is a better fit for sports fans. Read
                  our complete Sling TV vs. Philo review to learn more.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" Which is better: Philo or Sling TV?"}
            cssClass={"faq-content"}
          >
            <p>
              Both Philo and Sling TV are affordable live TV streaming services.
              But Philo has more entertainment and lifestyle channels, while
              Sling TV is a better fit for sports fans. Read our complete Sling
              TV vs. Philo review to learn more.
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
                <Link href={"#"}> Philo Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>How to Stream Local Channels</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>How to Watch Live TV Streaming Sports</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default PhiloChannelLineUp;
