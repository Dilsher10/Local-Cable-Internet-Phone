// import React, { useState } from "react";
import "./verizon-channel-lineup.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { verizonNavLinks } from "../../assets/data/navLinks/verizonNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { GoArrowUpRight } from "react-icons/go";
import verizonchannellineupwomen from "../../assets/images/verizonchannellineupwomen.png";
import star from "../../assets/images/star.png";
import verizoncheckicon from "../../assets/images/verizoncheckicon.png";
import verizonlogo from "../../assets/images/verizonlogo.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import { FaCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Verizon Fios TV Channel lineup"
};

const VerizonChannelLineup = () => {
  // const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: verizonlogo,
      rating: "(4.2/5)",
      starImg: star,
      desc: "$500 contract buyout when you switch",
      buttonText: "Compare Packages",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: verizonchannellineupwomen,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "Verizon fios",
        icon: verizoncheckicon,
      },
      {
        subtitle: "Price:",
        title: "$60.00–$119.00/mo.",
        icon: verizoncheckicon,
      },
      {
        subtitle: "Channel count:",
        title: "60–425+",
        icon: verizoncheckicon,
      },
    ],

    tableData: [
      {
        head: ["Package", "Price ", "Channel count ", "Details "],

        body: [
          {
            content: ["1. ", "The Most Fios TV", "$119.00/mo.", "425+"],
            linkPath: "# ",
          },
          {
            content: ["2. ", "Your Fios TV", "$75.00/mo.", "125+"],
            linkPath: "# ",
          },
        ],
      },
    ],

    bottomDesc:
      "Data effective as of publish date. Offers and availability may vary by location and are subject to change.",
  };
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="verizon-channel-lineup">
      {/* <SubNav links={verizonNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">Verizon Fios TV Channel lineup</h2>
          <p className="sect-desc">
            Find your favorite channels, choose the right package, and add
            premium channels.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-verizon-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            Curious what channels you get with Verizon Fios TV packages? Well,
            look no further. We’ve got the Verizon Fios TV channels guide for
            More Fios and The Most Fios TV.
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
          <Link href={"#"}>Add-on packages</Link>
          <Link href={"#"}>Channel packs</Link>
          <Link href={"#"}>FAQ</Link>
        </div>
      </div>

      <CTA
        heading={"Want to see what other TV providers are in your area?"}
        desc={"Enter your ZIP code to see TV plans in your town."}
      />

      <div className="section verizon-tv-channels-lineup">
        <div className="head">
          <h2 className="sect-heading">
            Verizon Fios <span> TV channel lineup guide </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
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
                <th>Channel number</th>
                <th>More Fios TV(225+ channels)</th>
                <th>The Most Fios TV(425+ channels)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>1. </th>
                <th id="a">Local channels </th>
                <th>1–49 SD, 501–549 HD</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>2. </th>
                <th>ABC</th>
                <th>169</th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>3. </th>
                <th>Afro</th>
                <th>181/681 HD</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>4. </th>
                <th>American Heroes Channel (AHC)</th>
                <th>71/571 HD</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>5. </th>
                <th>BBC America</th>
                <th>125/625 HD</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>6. </th>
                <th>MTV Live</th>
                <th> </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>7. </th>
                <th>Universo</th>
                <th>231/731 HD</th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>8. </th>
                <th>WE tv</th>
                <th>130/1565/630 HD</th>
                <th>
                  <ImCross className="cross-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th> 9.</th>
                <th>Z Living</th>
                <th>105</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
              <tr>
                <th>10. </th>
                <th id="z">Zona Futbol</th>
                <th>102/1544/602 HD</th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
                <th>
                  <FaCheck className="check-icon" />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="below-table">Data as of post date.</p>
      </div>

      <div className="section verizon-add-on-packages-and-channels">
        <div className="head">
          <h2 className="sect-heading">
            Verizon Fios TV <span> add-on packages </span>
          </h2>
          <p className="sect-desc">
            Enhance your cable lineup with premium, sports, or international
            add-on packages.
          </p>
        </div>
        <div className="row">
          <div className="columns">
            <h3>SHOWTIME® ($15/mo.)</h3>
            <br />
            <ul>
              <li> · SHOWTIME EAST</li>
              <li> · SHOWTIME WEST</li>
              <li> · SHOWTIME 2</li>
              <li> · SHOWCASE SHOWCASE</li>
              <li> · SHOWTIME EXTREME</li>
              <li> · SHOWTIME BEYOND</li>
              <li> · SHOWTIME NEXT</li>
              <li> · SHOWTIME FAMILY ZONE</li>
              <li> · SHOWTIME WOMEN</li>
              <li> · SHOWTIME HD</li>
              <li> · SHOWCASE HD</li>
              <li> · SHOWTIME EXTREME HD</li>
            </ul>
          </div>
          <div className="columns">
            <h3>CINEMAX® ($15/mo.)</h3>
            <br />
            <ul>
              <li> · CINEMAX®</li>
              <li> · More Max</li>
              <li> · 5StarMax</li>
              <li> · ActionMax</li>
              <li> · MovieMax</li>
              <li> · OuterMax</li>
              <li> · ThrillerMax</li>
              <li> · Cinemax en Español</li>
            </ul>
          </div>
          <div className="columns">
            <h3>HBO® ($15/mo.)</h3>
            <br />
            <ul>
              <li> · HBO®</li>
              <li> · HBO2</li>
              <li> · HBO Comedy</li>
              <li> · HBO Family</li>
              <li> · HBO Latino</li>
              <li> · HBO Signature</li>
              <li> · HBO Zone</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="columns">
            <h3>STARZ®($15/mo.)</h3>
            <br />
            <ul>
              <li> · STARZ East</li>
              <li> · STARZ West</li>
              <li> · STARZ Edge</li>
              <li> · STARZ Cinema</li>
              <li> · STARZ Comedy</li>
              <li> · STARZ ENCORE ACTION</li>
              <li> · STARZ ENCORE Black</li>
              <li> · STARZ Kids & Family</li>
            </ul>
          </div>
          <div className="columns">
            <h3>EPIX® ($15/mo.)</h3>
            <br />
            <ul>
              <li> · EPIX®</li>
              <li> · EPIX2</li>
              <li> · EPIX Drive-In</li>
              <li> · EPIX Hits</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section verizon-tv-channels-packs">
        <div className="head">
          <h2 className="sect-heading">
            Verizon Fios <span> TV channel packs </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="row">
          <div className="columns">
            <h3>International add-on packages:</h3>
            <br />
            <ul>
              <li> · Spanish TV ($16/mo.)</li>
              <li> · Korean TV ($24.99/mo.)</li>
              <li> · Chinese TV – Cantonese ($37.99/mo.)</li>
              <li> · Chinese TV – Mandarin ($15.99/mo.)</li>
              <li> · Hindi TV ($34.99/mo.)</li>
              <li> · Filipino TV ($24.99/mo.)</li>
              <li> · talian TV ($16.99/mo.)</li>
              <li> · Russian TV ($24.99/mo.)</li>
              <li> · French TV ($11.99/mo.)</li>
            </ul>
          </div>
          <div className="columns">
            <h3>Sports add-ons:</h3>
            <br />
            <ul>
              <li> · FOX Soccer Plus ($14.99/mo.)</li>
              <li> · MLB Extra Innings® ($199/regular season)</li>
              <li> · MLB.TV Premium ($119/regular season)</li>
              <li> · MLS Direct Kick ($89/regular season)</li>
              <li> · NHL® Center Ice® ($164.99/regular season)</li>
              <li> · NBA League Pass ($200/regular season)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section verizon-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Verizon Fios channel lineup</span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Can Verizon channel lineups
                be customized?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Verizon Fios TV offers a $75-a-month* package called Your TV,
                  which allows you to select your top five favorite channels.
                  Verizon will use your selection to build a personalized
                  channel lineup.
                  <br />
                  You get your local ABC, CBS, FOX, NBC, The CW, Telemundo, and
                  Univision automatically, and then Verizon Fios creates a
                  customized lineup based on your top five favorite cable
                  channels. You can choose your top five from these channels:
                </p>
                <ul>
                  <li> · A&E</li>
                  <li> · AMC</li>
                  <li> · Animal Planet</li>
                  <li> · Bravo</li>
                  <li> · Cartoon Network / Adult Swim</li>
                  <li> · CBS Sports Network</li>
                  <li> · CNN</li>
                  <li> · Comedy Central</li>
                  <li> · Discovery Channel</li>
                  <li> · DIY Network</li>
                  <li> · ESPN</li>
                  <li> · Food Network</li>
                  <li> · Fox News Channel</li>
                  <li> · FS1</li>
                  <li> · FX</li>
                  <li> · Hallmark Channel</li>
                  <li> · HGTV</li>
                  <li> · MSNBC</li>
                  <li> · National Geographic Channel</li>
                  <li> · Nat Geo WILD</li>
                  <li> · NFL Network</li>
                  <li> · Nickelodeon / Nick at Nite</li>
                  <li> · OWN</li>
                  <li> · TBS</li>
                  <li> · TeenNick</li>
                  <li> · TLC</li>
                  <li> · TNT</li>
                  <li> · USA Network</li>
                </ul>
                <p>
                  *Plus taxes. For new TV residential customers. $12/mo. STB and
                  $15/mo. router charges apply. $99 setup, taxes, and terms may
                  apply. Subject to credit approval and may require a deposit.
                  Fios available in select areas.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Can Verizon channel lineups be customized?"}
            cssClass={"faq-content"}
          >
            <p>
              Verizon Fios TV offers a $75-a-month* package called Your TV,
              which allows you to select your top five favorite channels.
              Verizon will use your selection to build a personalized channel
              lineup.
              <br />
              You get your local ABC, CBS, FOX, NBC, The CW, Telemundo, and
              Univision automatically, and then Verizon Fios creates a
              customized lineup based on your top five favorite cable channels.
              You can choose your top five from these channels:
            </p>
            <ul>
              <li> · A&E</li>
              <li> · AMC</li>
              <li> · Animal Planet</li>
              <li> · Bravo</li>
              <li> · Cartoon Network / Adult Swim</li>
              <li> · CBS Sports Network</li>
              <li> · CNN</li>
              <li> · Comedy Central</li>
              <li> · Discovery Channel</li>
              <li> · DIY Network</li>
              <li> · ESPN</li>
              <li> · Food Network</li>
              <li> · Fox News Channel</li>
              <li> · FS1</li>
              <li> · FX</li>
              <li> · Hallmark Channel</li>
              <li> · HGTV</li>
              <li> · MSNBC</li>
              <li> · National Geographic Channel</li>
              <li> · Nat Geo WILD</li>
              <li> · NFL Network</li>
              <li> · Nickelodeon / Nick at Nite</li>
              <li> · OWN</li>
              <li> · TBS</li>
              <li> · TeenNick</li>
              <li> · TLC</li>
              <li> · TNT</li>
              <li> · USA Network</li>
            </ul>
            <p>
              *Plus taxes. For new TV residential customers. $12/mo. STB and
              $15/mo. router charges apply. $99 setup, taxes, and terms may
              apply. Subject to credit approval and may require a deposit. Fios
              available in select areas.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Which package has the most
                channels?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Verizon’s aptly-named The Most Fios TV plan offers the max
                  number of channels available from the provider, with over 425
                  for $119 a month†. While that does include SHOWTIME®, STARZ®,
                  and MGM+® premium channels (good), it also counts several
                  shopping channels and over 50 audio-only Music Choice radio
                  channels (not so good).
                  <br />† Plus taxes. For eligible new residential customers.
                  $99 setup, taxes, and terms may apply. Subject to credit
                  approval and may require a deposit. Fios available in select
                  areas.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Which package has the most channels?"}
            cssClass={"faq-content"}
          >
            <p>
              Verizon’s aptly-named The Most Fios TV plan offers the max number
              of channels available from the provider, with over 425 for $119 a
              month†. While that does include SHOWTIME®, STARZ®, and MGM+®
              premium channels (good), it also counts several shopping channels
              and over 50 audio-only Music Choice radio channels (not so good).
              <br />† Plus taxes. For eligible new residential customers. $99
              setup, taxes, and terms may apply. Subject to credit approval and
              may require a deposit. Fios available in select areas.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Does Verizon Fios TV
                broadcast in 4K?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Thanks to its fiber-optic internet delivery, Verizon Fios TV
                  can offer bandwidth-hungry 4K content (if you have a 4K TV,
                  that is). Few networks broadcast programming in 4K, but many
                  Fios TV on-demand movies are available in 4K, and there are a
                  handful of 4K channels available on the service.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Does Verizon Fios TV broadcast in 4K?"}
            cssClass={"faq-content"}
          >
            <p>
              Thanks to its fiber-optic internet delivery, Verizon Fios TV can
              offer bandwidth-hungry 4K content (if you have a 4K TV, that is).
              Few networks broadcast programming in 4K, but many Fios TV
              on-demand movies are available in 4K, and there are a handful of
              4K channels available on the service.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> How do I know what Fios
                channels I have?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  For a list of channels specific to your region and Fios plan,
                  type your zip code into the Fios TV channel lineup tool on
                  Verizon’s website.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" How do I know what Fios channels I have?"}
            cssClass={"faq-content"}
          >
            <p>
              For a list of channels specific to your region and Fios plan, type
              your zip code into the Fios TV channel lineup tool on Verizon’s
              website.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> How many channels do you
                get with Fios?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Verizon Fios’s smallest package, Your Fios TV, comes with 125+
                  channels. The next biggest package is More Fios TV, which
                  comes with 300+ channels, and the biggest is The Most Fios TV,
                  which comes with 425+ channels.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" How many channels do you get with Fios?"}
            cssClass={"faq-content"}
          >
            <p>
              Verizon Fios’s smallest package, Your Fios TV, comes with 125+
              channels. The next biggest package is More Fios TV, which comes
              with 300+ channels, and the biggest is The Most Fios TV, which
              comes with 425+ channels.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> What channels are included
                in Fios TV?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  Head to our Verizon Fios TV channel lineup guide for a list at
                  which channels are included in Fios TV’s packages.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" What channels are included in Fios TV?"}
            cssClass={"faq-content"}
          >
            <p>
              Head to our Verizon Fios TV channel lineup guide for a list at
              which channels are included in Fios TV’s packages.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: Verizon overview | Verizon TV | Verizon Internet | Verizon
          Phone | Verizon Bundles | Verizon Customer service
        </p>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default VerizonChannelLineup;
