// import React, { useState } from "react";
import "./shop-verizon-fios-tv.scss";
import InnerPagesHero from "../../components/inner-pages-hero/InnerPagesHero";
import xfintyTvHeroBg from "../../assets/images/xfinity-tv-hero-bg.jpg";
// import SubNav from "../../components/sub-nav/SubNav";
// import { verizonNavLinks } from "../../assets/data/navLinks/verizonNavLinks";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import PackageTable from "../../components/package-table/PackageTable";
import CTA from "../../components/cta-section/CTA";
import quotations from "../../assets/images/quotations.svg";
import signal from "../../assets/images/signal.png";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "Verizon Fios TV Packages",
};

const ShopVerizonFiosTv = () => {
  // const [faq, setFaq] = useState(null);

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "Verizon Fios TV Packages",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "Includes up to 425+ cable channels",
      "Free TV set-top box included",
      "Free gift card worth up to $200",
      "Watch from anywhere with Fios TV Mobile app",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Plans starting at $75.00/mo.",
  };

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };

  let packageTableData = [
    {
      head: ["Package", "Price", "Channel count", "Channels", "Details"],

      body: [
        {
          content: [
            "1.",
            "Fios TV Test Drive",
            "$75.00/mo.",
            "425+",
            "BET, Cooking Channel, Disney Channel",
          ],
          linkPath: "#",
        },
        {
          content: ["2.", "Your Fios TV", "$75.00/mo.", "125+", "Customized"],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "More Fios TV",
            "$99.00/mo.",
            "300+",
            "AMC, Comedy Central, Food Network",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "The Most Fios TV",
            "$119.00/mo.",
            "425+",
            "SHOWTIME®, Logo, STARZ®",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  return (
    <div className="shop-verizon-fios-tv">
      {/* <SubNav links={verizonNavLinks} /> */}
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Top Verizon fios <span> TV plans </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>

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

      <CTA
        heading={"Want to watch Verizon Fios TV?"}
        desc={
          "Enter your zip code below to see if Fios TV packages are available in your area."
        }
      />

      <div className="section verizon-tv">
        <div className="head">
          <h2 className="sect-heading">
            Verizon TV
            <span> packages and prices </span>
          </h2>
          <p className="sect-desc">
            You’ll find a lot to like on Verizon Fios TV, whether you’re looking
            for local news or the latest hit TV shows. If you need help figuring
            out a channel plan, check out Fios TV Test Drive or Your Fios TV.
            Fios TV Test Drive gives you access to Fios TV’s full lineup for 60
            days. Once your trial period is up, Verizon will recommend the best
            Fios TV plan for your viewing habits.
            <br />
            With Your Fios TV, Verizon puts the channel lineup power into your
            hands. When you sign up for Your Fios TV, Verizon will ask for your
            five favorite channels and build a custom lineup off these
            recommendations.
            <br />
            More Fios TV offers a full slate of basic cable channels like Comedy
            Central and ESPN. It’ll be a great fit if your family is full of TV
            watchers or live sports fans. The Most Fios TV comes with a whopping
            425+ channels including SHOWTIME and STARZ. Grab this plan if you’re
            looking for Fios TV’s biggest plan and don’t want to settle for
            less.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          *With Autopay and paper-free billing. Qualifying mobile plans include
          One Unlimited for iPhone, 5G Play More, 5G Do More, and 5G Get More.
          <br />
          Data effective as of post date. Offers and availability vary by
          location and are subject to change.
        </p>
        <div className="package-table-container channels">
          <Image src={signal} alt="mark" className="mark" />
          <h4>Want to get Verizon Fios TV?</h4>
          <br />
          <p>
            Read our{" "}
            <span className="link">
              <Link href={"/"}>Verizon Fios TV review</Link>
            </span>{" "}
            to learn more about Verizon’s TV options, plans, and more.
          </p>
        </div>
      </div>

      <div className="section verizon-tv-package-channels">
        <div className="head">
          <h2 className="sect-heading">
            Verizon
            <span> TV package channels </span>
          </h2>
          <p className="sect-desc">
            With Fios TV, you won’t miss a second of your favorite shows. Here’s
            what you’ll get when you sign up for Verizon Fios TV service.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Sports</h4>
          <br />
          <p>
            From ABC to NFL RedZone, Fios TV covers every sport and every sports
            network. If you want specialty sports coverage, upgrade to The Most
            Fios TV for channels like beIN Sports and CBS Sports Network.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Spanish </h4>
          <br />
          <p>
            Fios TV’s Mundo TV ($99 monthly) and Mundo Total TV ($119 monthly)
            plans offer great channel lineups and affordable pricing for
            Spanish-speaking households. You’ll also get standard Fios TV
            add-ons like a free set-top box and a Verizon gift card worth up to
            $200.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>International </h4>
          <br />
          <p>
            Head overseas with Verizon Fios’ international channel packages,
            which offer programming from regions like China, Mexico, and the
            Caribbean. With monthly pricing that starts at only $10 per channel
            pack, it’s easy to catch your favorite international shows.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Premium </h4>
          <br />
          <p>
            During the checkout process, you can add premium cable channels like
            HBO® and CINEMAX® to your Verizon cable channel package. If you
            upgrade to The Most Fios TV, you’ll get EPIX, SHOWTIME, and STARZ
            for free.
          </p>
        </div>
      </div>

      <div className="section verizon-blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"></p>
        </div>
        <div className="package-table-container channels">
          <Image src={quotations} alt="mark" className="mark" />
          <h4>Mix and match Verizon TV and internet</h4>
          <br />
          <p>
            <span className="link">
              <Link href={"/"}>Interested in a full Verizon bundle?</Link>
            </span>{" "}
            With Verizon Fios, you can mix and match any Verizon service for
            maximum savings and the convenience of a single bill. You can save
            more than 60% on your Verizon internet plan if you have a qualifying
            Verizon Wireless plan.
          </p>
        </div>
      </div>

      <div className="section verizon-tv-features">
        <div className="head">
          <h2 className="sect-heading">
            Verizon
            <span> TV features </span>
          </h2>
          <p className="sect-desc">
            Fios TV comes with more than just TV channels. Here’s what you need
            to know about Fios TV’s great additional features.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Fios TV app</h4>
          <br />
          <p>
            The Fios TV Mobile app gives you full control over your Fios TV
            experience. You can use the mobile app to control your DVR and watch
            on demand, live, or recorded content from any device.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>4K UHD </h4>
          <br />
          <p>
            Every Fios TV set-top box supports 4K UHD TVs for the best-possible
            TV picture quality. From sports to TV shows, Fios TV lets you see TV
            how it’s meant to be seen.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Fiber-optic network </h4>
          <br />
          <p>
            Verizon’s 100% fiber-optic network delivers fast internet and
            stellar TV picture quality straight to your home.
          </p>
        </div>
      </div>

      <div className="section verizon-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Verizon TV packages </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> How fast is 5G home
                internet from Verizon?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  The main Verizon TV packages are Your Fios, More Fios TV, and
                  The Most Fios TV. Verizon TV package prices start at $75
                  monthly, and its plans include 60–425+ channels.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" How fast is 5G home internet from Verizon?"}
            cssClass={"faq-content"}
          >
            <p>
              The main Verizon TV packages are Your Fios, More Fios TV, and The
              Most Fios TV. Verizon TV package prices start at $75 monthly, and
              its plans include 60–425+ channels.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Can I get Verizon 5G in my
                home?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Verizon TV includes a free set-top box and up to 425+
                  channels. New Verizon TV customers can also get a gift card
                  worth up to $200.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Can I get Verizon 5G in my home?"}
            cssClass={"faq-content"}
          >
            <p>
              Verizon TV includes a free set-top box and up to 425+ channels.
              New Verizon TV customers can also get a gift card worth up to
              $200.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How many square feet is
                Verizon 5G home internet?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Verizon TV requires at least one set-top TV box in your home.
                  But with the Fios TV Mobile app, you can watch TV outside your
                  home on a compatible device.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How many square feet is Verizon 5G home internet?"}
            cssClass={"faq-content"}
          >
            <p>
              Verizon TV requires at least one set-top TV box in your home. But
              with the Fios TV Mobile app, you can watch TV outside your home on
              a compatible device.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What is the download speed
                of Verizon 5G Home Internet?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  You can watch Verizon Fios TV on mobile devices by downloading
                  the Fios TV Mobile app.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" What is the download speed of Verizon 5G Home Internet?"}
            cssClass={"faq-content"}
          >
            <p>
              You can watch Verizon Fios TV on mobile devices by downloading the
              Fios TV Mobile app.
            </p>
          </Accordion>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default ShopVerizonFiosTv;
