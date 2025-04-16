// import React, { useState } from "react";
import "./dish-hopper.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import star from "../../assets/images/star.png";
import dishhopperlogo from "../../assets/images/dishhopperlogo.png";
import thumbsupwomen from "../../assets/images/thumbsupwomen.png";
// import { dishNavLinks } from "../../assets/data/navLinks/dishNavLinks";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import PackageTable from "../../components/package-table/PackageTable";
import hopperdvr from "../../assets/images/hopperdvr.png";
import voiceremote from "../../assets/images/voiceremote.png";
// import Newsletter from "../../components/newsletter/Newsletter";
import quotations from "../../assets/images/quotations.svg";
import InnerPagesHeroThree from "../../components/inner-pages-hero-three/InnerPagesHeroThree";
import { GoArrowUpRight } from "react-icons/go";

export const metadata = {
  title: "DISH Hopper 3 Review 2024"
};

const DishHopper = () => {
  // const [faq, setFaq] = useState();
  let heroData = {
    column1: {
      logo: dishhopperlogo,
      rating: "(4.1/5)",
      starImg: star,
    },
    column2: {
      heading: "DISH Hopper 3",
      listItems: [
        {
          text: [
            { text: "Price:  ", isLink: true, link: "/installation" },
            { text: "$10.00/mo.", isLink: false },
          ],
        },
        {
          text: [
            { text: "Storage:    ", isLink: true, link: "/installation" },
            { text: "500 hrs. (HD)", isLink: false },
          ],
        },
        {
          text: [
            {
              text: "Simultaneous recordings:",
              isLink: true,
              link: "/installation",
            },
            { text: "16", isLink: false },
          ],
        },
      ],
    },
    column3: {
      img: thumbsupwomen,
    },
    column4: {
      link: "read full dish review",
      callback1: "view plans",
      callback2: " ",
      buttonIcon: <GoArrowUpRight className="upright-arrow-icon" />,
    },
  };
  let packageTableData = [
    {
      head: [
        "Device",
        "DVR cost*",
        "HD storage",
        "Simultaneous recordings ",
        ,
        "Details",
      ],

      body: [
        {
          content: ["1.", "DISH Hopper 3", "$10.00/mo.", "500 hrs.", "16"],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Cox Contour Record",
            "$13.50–$30.00/mo.",
            "250–1,000 hrs.",
            "2, 6, or 24",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "DIRECTV Genie",
            "Included with package",
            "200 hrs.",
            "5",
          ],
          linkPath: "#",
        },
        {
          content: ["4.", "Xfinity X1", "$7.50–$8.50/mo.*", "150 hrs.*", "6"],
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
    <div className="dish-hopper">
      {/* <SubNav links={dishNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">DISH Hopper 3 Review 2024</h2>
          <p className="sect-desc">
            We’ve tested the Hopper 3 for several months and can confirm it’s
            the best DVR/receiver in the business—now let’s determine if it’s
            the best choice for you.
          </p>
        </div>
        <InnerPagesHeroThree data={heroData} />
        <p className="sect-desc">
          Data as of post date. Offers and availability may vary by location and
          are subject to change.
        </p>
      </div>
      <StickyHeader />

      <div className="endnote is-dish-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p className="after-heading">
            We recommend the DISH Hopper 3 DVR/receiver as the best option for
            most readers. That’s because it stores 500 hours of HD content,
            records up to 16 shows at once, supports 4K, has Bluetooth, quad
            split-screen, built-in streaming apps (Netflix, Prime Video, and
            YouTube), the DISH voice remote, and whole-home TV functionality
            (with add-on Joey receivers). <br />
            DISH also recently lowered the Hopper 3’s cost by 33% to $10 a
            month, making the box even harder to beat.
          </p>
          <h4>DISH Hopper 3 pros and cons</h4>
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
                  <td>500 hrs. of HD storage</td>
                  <td>Additional monthly fee</td>
                </tr>
                <tr>
                  <td>16 simultaneous recordings</td>
                  <td>High activation fees for some equipment</td>
                </tr>
                <tr>
                  <td>4K support </td>
                  <td>Only available for homes with four or more TVs</td>
                </tr>
                <tr>
                  <td>Voice remote </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTA
        heading={"Find out if DISH bundles are available in your area"}
        desc={"Enter your zip code below to see is DISH in your area."}
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
          <Link href={"#"}>DISH Hopper 3 vs. the competition </Link>
          <Link href={"#"}>Specs and features </Link>
          <Link href={"#"}>Our final take</Link>
          <Link href={"#"}>FAQ </Link>
        </div>
      </div>

      <div className="section dish-competition">
        <div className="head">
          <h2 className="sect-heading">
            DISH Hopper 3 <span> vs. the competition</span>
          </h2>
          <p className="sect-desc">
            To show you just how much better the Hopper 3 is, we’ve compared it
            to other providers’ DVRs in this table. The numbers are devastating
            for the Hopper 3’s rivals.
            <br />
            Sure, the Cox Contour Record 24 can record up to 24 movies or shows
            and store 1,000 HD hours of content, but it costs 50% more than the
            Hopper 3. DIRECTV’s Genie comes included with your TV package, but
            it has less than 50% of the Hopper 3’s storage capacity and 67%
            fewer simultaneous recordings. And Xfinity’s X1 gives you so little,
            but charges much more if you want additional cloud storage.
          </p>
        </div>
        <div className="package-table-container channels">
          <PackageTable item={packageTableData} />
          <p className="below-table">
            Data as of post date. Offers and availability may vary by location
            and are subject to change.*Varies by location and package. Xfinity
            also charges an additional $10-$20 per month for additional cloud
            storage.
          </p>
          <br />
          <Image src={hopperdvr} alt="hopperdvr" className="hopperdvr" />
          <p className="after-heading">
            We’re tempted to stop here and tell you to just sign up for DISH,
            ‘cause the service is also our editorial pick for the best overall
            TV provider (and the best TV provider for kids). So go ahead and do
            that if you want—or stick around to learn other cool things about
            the Hopper 3 and DISH’s other TV boxes.
          </p>
          <hr />
          <div className="btn">
            <Link href={"#"}>get the dISH Hopper 3</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>DISH Hopper 3 options</h4>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Device</th>
                  <th>DVR service price</th>
                  <th>HD storage</th>
                  <th>Supported TVs</th>
                  <th>Simultaneous recordings</th>
                  <th>Built-in streaming apps</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Hopper 3 DVR/receiver </td>
                  <td>$10.00/mo.</td>
                  <td>500 hrs.</td>
                  <td>Up to 7</td>
                  <td>16</td>
                  <td>Amazon Prime Video, Netflix, YouTube, YouTube Kids</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Hopper Duo DVR/receiver</td>
                  <td>$5.00/mo.</td>
                  <td>125 hrs.</td>
                  <td>Up to 2</td>
                  <td>2</td>
                  <td>Amazon Prime Video, Netflix, YouTube, YouTube Kids</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Wally receiver</td>
                  <td>$5.00/mo.</td>
                  <td>N/A</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Netflix</td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Joey/Wireless Joey/4K Joey</td>
                  <td>$5.00/mo.</td>
                  <td>N/A</td>
                  <td>1 per device</td>
                  <td>Depends on receiver</td>
                  <td>N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="below-table">
            Data as of post date. Offers and availability may vary by location
            and are subject to change.
          </p>
          <p className="after-heading">
            It’s worth mentioning that DISH gatekeeps the Hopper 3 until you
            connect four or more TVs—three or fewer will stick you with the
            Hopper Duo for $5 per month or the Hopper 2 for $10. With a four-TV
            plan, you’ll also need a Joey receiver to connect with each screen
            in your house, bringing your equipment fees up to $25 per month.
            <br />
            If you have only one TV, you might have to settle for a measly 125
            recording hours for your shows—but hey, at least you’ll be saving
            $20 a month.
            <br />
            For more information on the full range of DISH hardware, head over
            to our DISH roundup.
          </p>
        </div>
        <div className="endnote is-dish-good">
          <div className="endnote-container">
            <Image src={quotationsIcon} alt="quotations" />
            <h4>Pro tip:</h4>
            <p className="after-heading">
              If the Hopper 3 doesn’t seem like the DVR for you, we’ve
              researched others you might like. Check out our guide to the Best
              DVRs to explore other options.
            </p>
          </div>
        </div>
      </div>

      <CTA
        heading={"How much does DISH Network cost?"}
        desc={"Enter your zip code below to see internet options in your area."}
      />
      <div className="section dish-features">
        <div className="head">
          <h2 className="sect-heading">
            Hopper 3 DVR <span> specs and features</span>
          </h2>
          <p className="sect-desc">
            And what does the Hopper 3 do, exactly? Aside from recording and
            storing content? I’ve been testing the Hopper 3 for months now, so I
            can give you the scoop on its main features.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Storage</h4>
          <p className="after-heading">
            Does anyone watch enough TV to warrant 500 hours of storage? ‘Cause
            only the GOAT couch potato—or an entire family of couch creatures
            with divergent TV tastes—could fill up that 2TB hard drive. In our
            tests, we’ve used only 11% of that storage (and we’re great at
            watching TV).
            <br />
            If the Hopper 3 DVR’s 500-hour storage, 16 tuners, and $10 price are
            too much for you, consider signing up for DIRECTV instead. The
            DIRECTV Genie DVR/receiver has much less storage (200 hours) and
            only 5 simultaneous recordings. And it has no monthly rental
            fee—it’s included with your TV package.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Simultaneous recordings</h4>
          <p className="after-heading">
            Only the most dedicated couch creature (or a family of them) could
            find enough conflicting movies and shows to warrant 16 simultaneous
            recordings—I’ve used only three. If that’s you, the Hopper’s 16
            tuners are a good thing. Everyone gets to watch what they want.
            Eventually.
            <br />
            You might still bicker over who gets to watch their thing live, but
            even that’s avoidable if you have multiple TVs with DISH Joey
            receivers.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Quad split-screen</h4>
          <p className="after-heading">
            If you thought picture-in-picture was cool, this is a whole ‘nother
            level of multi-slacking, and we’re here for it. The Hopper 3 has
            quad split-screen so sports fans can watch four games at once. We
            asked John Sportsball, a dude we totally made up, what he thought
            and he said, “That’s . . . that’s awesome.”
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Multiroom viewing</h4>
          <p className="after-heading">
            The DISH Joey receivers let you do everything the Hopper 3 can do on
            the other TVs in your house, but your DVR recordings will be stored
            on the Hopper 3’s hard drive. You can order up to 7 Joeys, which
            cost $5 a month per device and come in three versions:
          </p>
          <ul>
            <li>
              · Joey: connects to TVs via an HDMI cable but doesn’t support 4K
            </li>
            <li>· Wireless Joey: connects via Wi-Fi but doesn’t support 4K</li>
            <li>· 4K Joey: connects via HDMI and supports a 4K display</li>
          </ul>
          <p className="after-heading">
            The Joey also works with the Hopper Duo DVR ($10 a month), but it
            supports only two Joey-connected TVs. Unfortunately, the Wally
            receiver doesn’t work with the Joey.
            <br />
            Also, look out for the leased receiver fees DISH charges for Joeys
            at signup. If you order more than three Joeys (plus the Hopper 3),
            you’ll be charged a one-time fee of $50. The fees are even spookier
            with the Wireless Joey ($25 per device) and 4K Joey ($50 per
            device). Good thing that most of us have only one or two TVs.
            <br />
            Fortunately, if you have DISH on only one or two TVs in your house
            and someone is hogging them, you can watch DISH on your smartphone
            or tablet with the DISH Anywhere app.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DISH Anywhere app</h4>
          <p className="after-heading">
            Available on Amazon Fire TV, Android, and iOS devices, the DISH
            Anywhere app allows you to watch live, on-demand, and recorded
            movies and shows on your mobile device—but for only one user at a
            time.
            <br />
            You can also set and manage DVR recordings and parental controls
            within the app from—wait for it—anywhere. Just remember that it’s
            better to use an app like this over Wi-Fi, ‘cause it uses your
            mobile data (I learned this the hard way).
            <br />
            If there’s a con to DISH Anywhere, it’s that it allows only one
            stream at a time. But that’s not so bad when you consider everything
            else you can do with the app.
            <br />
            To learn more about this helpful DISH app, check out our DISH
            Anywhere App guide.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Parental controls</h4>
          <p className="after-heading">
            While we’re on the subject, DISH has the best parental controls—and
            the Hopper 3, along with DISH Anywhere, are how you wield this
            awesome power.
            <br />
            But DISH parental controls, designed with Common Sense Media, aren’t
            just about preventing your kids from watching video nasties. You can
            also use them to guide your kids toward educational programming and
            positive role models. receivers.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>DISH voice remote</h4>
          <p className="after-heading">
            The Hopper 3 comes with the DISH voice remote with Google Assistant,
            so it can control your DISH Hopper 3, your TV, and your smart home
            devices. The DISH voice remote control also has backlit, soft-rubber
            buttons (a tactile delight), a remote locator feature, and
            programmable hotkeys. And, of course, it harnesses the awesome power
            of your voice. That’s our favorite feature, by the way—it
            understands everything I say and returns search results super fast.
          </p>
          <Image src={voiceremote} alt="voiceremote" />
        </div>
        <div className="endnote is-dish-good">
          <div className="endnote-container">
            <Image src={quotationsIcon} alt="quotations" />
            <h4>Pro tip:</h4>
            <p className="after-heading">
              Do you already have DISH, but need instructions on how to program
              your DISH voice remote? We wrote “How to Program a DISH Remote”
              for you.
            </p>
          </div>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is DISH Hopper 3 worth it? </span>
          </h2>
          <p className="sect-desc">
            The feature-rich DISH Hopper 3 is almost too powerful, with 500
            hours of HD storage, 16 simultaneous recordings, quad split-screen,
            support for up to 7 TVs (with Joey extenders), tons of built-in
            streaming TV apps, powerful parental controls, the DISH voice
            remote, and mobile viewing with the DISH Anywhere app. And it’s now
            only 10 bucks a month, which makes the Hopper 3 not only the best
            DVR out there, but also the best DVR deal. Needless to say, we
            highly recommend the DISH Hopper 3 for most people.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>get the hopper 3 DVR</Link>
        </div>
      </div>

      <div className="section dish-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>DISH Hopper 3 </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> What is the newest DISH
                Hopper?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  The DISH Hopper 3 is the newest version of the Hopper
                  DVR/receiver. It costs $10 a month in addition to your plan
                  price.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" What is the newest DISH Hopper?"}
            cssClass={"faq-content"}
          >
            <p>
              The DISH Hopper 3 is the newest version of the Hopper
              DVR/receiver. It costs $10 a month in addition to your plan price.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> How much does DISH Hopper 3
                cost?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  The DISH Hopper 3 costs $10 a month. But if you don't need its
                  500 hours of HD storage and 16 simultaneous recordings, you
                  can get the Hopper Duo (125 hours, 2 recordings) for $5 a
                  month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" How much does DISH Hopper 3 cost?"}
            cssClass={"faq-content"}
          >
            <p>
              The DISH Hopper 3 costs $10 a month. But if you don't need its 500
              hours of HD storage and 16 simultaneous recordings, you can get
              the Hopper Duo (125 hours, 2 recordings) for $5 a month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How do you get the Hopper 3
                for free?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  You can't get the DISH Hopper 3 for free. But people have
                  started GoFundMe campaigns for more trivial things...
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How do you get the Hopper 3 for free?"}
            cssClass={"faq-content"}
          >
            <p>
              You can't get the DISH Hopper 3 for free. But people have started
              GoFundMe campaigns for more trivial things...
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What remote comes with the
                Hopper 3?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  The DISH Hopper remote can control up to three devices
                  including your Hopper 3, your TV, and your smart home devices.
                  It also has backlit keys, a remote locator feature, and
                  programmable hotkeys. And it comes with Google Assistant, so
                  you can search with your voice-and get incredibly accurate
                  results quickly.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" What remote comes with the Hopper 3?"}
            cssClass={"faq-content"}
          >
            <p>
              The DISH Hopper remote can control up to three devices including
              your Hopper 3, your TV, and your smart home devices. It also has
              backlit keys, a remote locator feature, and programmable hotkeys.
              And it comes with Google Assistant, so you can search with your
              voice-and get incredibly accurate results quickly.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>How much does it cost to
                upgrade to the Hopper 3?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  If you currently have a Wally receiver, you'll pay an extra $5
                  a month to upgrade to the Hopper 3. Same deal with the DISH
                  Hopper Duo, which is now $5 a month (it used to be free).
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"How much does it cost to upgrade to the Hopper 3?"}
            cssClass={"faq-content"}
          >
            <p>
              If you currently have a Wally receiver, you'll pay an extra $5 a
              month to upgrade to the Hopper 3. Same deal with the DISH Hopper
              Duo, which is now $5 a month (it used to be free).
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>Can I buy my own DISH
                Hopper?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  Yes, you can buy-instead of rent-a DISH Hopper 3 receiver/DVR,
                  a Wally receiver, a Joey receiver, and even DISH voice
                  remotes. That doesn't mean you'll get free DISH TV service,
                  though. You'll need an OTA adapter to use the Hopper 3 with
                  your TV antenna, or you can use it to pick up free-to-air
                  satellite TV networks.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"Can I buy my own DISH Hopper?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, you can buy-instead of rent-a DISH Hopper 3 receiver/DVR, a
              Wally receiver, a Joey receiver, and even DISH voice remotes. That
              doesn't mean you'll get free DISH TV service, though. You'll need
              an OTA adapter to use the Hopper 3 with your TV antenna, or you
              can use it to pick up free-to-air satellite TV networks.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(7)}>
                <span>{faq === 7 ? "-" : "+"}</span> Can I watch Disney Plus on
                the DISH Network Hopper 3?
              </h3>

              <div className={`faq-content ${faq === 7 ? "show" : ""}`}>
                <p>
                  Unfortunately, the DISH Hopper 3 doesn't support Disney+, but
                  you may already have a device that does support Disney's
                  popular streaming app. Read our Disney+ review for more
                  information.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"7"}
            title={" Can I watch Disney Plus on the DISH Network Hopper 3?"}
            cssClass={"faq-content"}
          >
            <p>
              Unfortunately, the DISH Hopper 3 doesn't support Disney+, but you
              may already have a device that does support Disney's popular
              streaming app. Read our Disney+ review for more information.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(8)}>
                <span>{faq === 8 ? "-" : "+"}</span>What is the difference
                between the Hopper Duo and the Hopper 3?
              </h3>

              <div className={`faq-content ${faq === 8 ? "show" : ""}`}>
                <p>
                  The Hopper Duo is a receiver/DVR just like the Hopper 3, but
                  it's not as powerful. Check out the table below for details.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"8"}
            title={
              "What is the difference between the Hopper Duo and the Hoppe"
            }
            cssClass={"faq-content"}
          >
            <p>
              The Hopper Duo is a receiver/DVR just like the Hopper 3, but it's
              not as powerful. Check out the table below for details.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(9)}>
                <span>{faq === 9 ? "-" : "+"}</span> What is the difference
                between the Hopper Duo and the Hopper 3?
              </h3>

              <div className={`faq-content ${faq === 9 ? "show" : ""}`}>
                <p>
                  The Hopper Duo is a receiver/DVR just like the Hopper 3, but
                  it's not as powerful. Check out the table below for details.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"9"}
            title={
              " What is the difference between the Hopper Duo and the Hoppe"
            }
            cssClass={"faq-content"}
          >
            <p>
              The Hopper Duo is a receiver/DVR just like the Hopper 3, but it's
              not as powerful. Check out the table below for details.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="divider">
        <p>
          See also: DISH Review | DISH Channels | DISH Hopper 3 | DISH Customer
          Service | DISH Change or Cancel Service
        </p>
      </div>

      <div className="section endnote dish-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Methodology:</h4>
          <p>
            Our TV experts have logged hundreds of hours using the DISH Hopper 3
            in order to give you a first-hand assessment of its cost and
            features. For more information on our research and testing
            practices, see our
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
            page.
          </p>
          <h4>Related Articles:</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Best DVRs</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Cox Contour Record Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>DIRECTV Genie Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>DISH Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>DISH Internet</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>How to Program Your DISH Remote</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* <Newsletter /> */}
    </div>
  );
};

export default DishHopper;
