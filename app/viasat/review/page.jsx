// import React, { useState } from "react";
import "./viasat-review.scss";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
// import SubNav from "../../components/sub-nav/SubNav";
// import { visatNavLinks } from "../../assets/data/navLinks/visatNavLinks";
import viasatboy from "../../assets/images/viasat-bro.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import viasat from "../../assets/images/viasat.png";
import viasaticon from "../../assets/images/viasat-icon.png";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/app/components/accordion/Accordion";
import CTA from "../../components/cta-section/CTA";
import Searchbar from "../../components/searchbar/Searchbar";
// import Newsletter from "../../components/newsletter/Newsletter";
import dotted from "../../assets/images/dotted.png";
import PackageTable from "../../components/package-table/PackageTable";

export const metadata = {
  title: "Viasat Review: Plans, Prices, And More"
};

const ViasatReview = () => {
  //   const [faq, setFaq] = useState();

  let heroData = {
    card1: {
      logo: viasat,
      rating: "(3.5/5)",
      starImg: star,
      desc: "Affordable internet",
      buttonText: "view plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: viasatboy,

    cardsStrip: [
      {
        subtitle: "Service provider:",
        title: "T-Mobile",
        icon: viasaticon,
      },
      {
        subtitle: "Price:",
        title: "$69.99–$299.99/mo..",
        icon: viasaticon,
      },
      {
        subtitle: "Internet speed:",
        title: "Up to 100 Mbps",
        icon: viasaticon,
      },
    ],

    tableData: [
      {
        head: [
          "Package",
          "Price",
          "Download speeds up to",
          "Upload speeds up to",
          "Data cap",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "Choice 50/100 GB",
              "$69.99/mo.",
              "25 Mbps",
              "3 Mbps",
              "100 GB",
            ],
            linkPath: "#",
          },

          {
            content: [
              "2.",
              "Choice 100/300 GB",
              "$199.99/mo.",
              "100 Mbps",
              "3 Mbps",
              "300 GB",
            ],
            linkPath: "#",
          },
          {
            content: [
              "3.",
              "Choice 100/500 GB",
              "$299.99/mo.",
              "100 Mbps",
              "3 Mbps",
              "500 GB",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      " Data effective as of publish date. Offers and availability vary by location and are subject to change. *Prices and availability vary by location. Installation fees, monthly equipment lease fees, and taxes may apply. After 100/300/500 GB of High-Speed Data usage, you still have unlimited access to Standard Data, which may result in slower speed.",
  };
  let packageTableData = [
    {
      head: [
        "Package",
        "Price",
        "Download speeds up to",
        "Upload speeds",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Go Fast (no contract)",
            "$49.99/mo. *",
            "100 Mbps",
            "5 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Go Faster",
            "$69.99/mo.*",
            "250 Mbps",
            "Up to 10 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Go Even Faster",
            "$89.99/mo.†",
            "500 Mbps",
            "10 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Go Super Fast",
            "$109.99/mo.‡",
            "1,000 Mbps",
            "35 Mbps",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "Go Beyond Fast",
            "$149.99/mo.*",
            "2,000 Mbps",
            "100 Mbps",
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
    <div className="viasat-review">
      {/* <SubNav links={visatNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            Viasat Review 2024: Plans, Prices, And More
          </h2>
          <p className="sect-desc">
            Viasat is the best internet you can get if you live outside of DSL
            and cable service areas.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>Is Viasat any good?</h4>
          <p>
            Viasat (formerly Excede) is the best satellite internet internet
            service provider right now. It has faster speeds and higher data
            caps than HughesNet, so it’s our top satellite pick for best rural
            internet providers in the United States.
            <br />
            But if you need to replace your land-based internet, like Xfinity,
            AT&T, or CenturyLink, look elsewhere. Viasat has too many
            shortcomings to give you a good bang for your buck, and its latency
            is a total drag.
          </p>
          <h4>Viasat Pros and cons</h4>
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
                  <td> High-speed rural internet</td>
                  <td>High latency</td>
                </tr>
                <tr>
                  <td>Reliable service</td>
                  <td>Prices vary by area</td>
                </tr>
                <tr>
                  <td>Flexibility for leaves of absence</td>
                  <td>Misleading pricing</td>
                </tr>
              </tbody>
            </table>
          </div>
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
          <Link href={"#"}> Internet packages </Link>
          <Link href={"#"}> Deals and promotions </Link>
          <Link href={"#"}> Equipment </Link>
          <Link href={"#"}> Viasat Voice </Link>
        </div>
      </div>

      <CTA
        heading={" Find out if Viasat is available in your area"}
        desc={"Enter your zip code above to find out."}
      />

      <div className="section internet-plans-and-prices">
        <div className="head">
          <h2 className="sect-heading">
            Viasat <span> internet plans and prices </span>
          </h2>
          <p className="sect-desc">
            The plans above are listed from worst to best—shoot for a plan with
            the most speed and data you can afford. Unfortunately, Viasat’s
            plans and internet prices vary by area. The only way to know your
            specific plan options is checking your address on Viasat’s website.
            You will likely see different speeds, data caps, and prices than the
            ones in the table above. <br />
            And while Viasat’s Unlimited plans offer higher speeds and data
            usage, keep in mind that all its internet prices rise after three
            months. Viasat’s cheaper plans don’t offer the amount of speed and
            data most people need. If you have the option, fork out the extra
            cash to avoid the headaches that come with slow internet. <br />
            Also, keep in mind that Viasat offers only internet service, so
            you’ll have to look elsewhere for TV service. Go for DISH and
            DIRECTV for satellite TV—you can compare them both in our
            head-to-head review.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}> get viasat now </Link>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data effective as of publish date. Offers and availability vary by
          location and are subject to change. <br />
          *Prices and availability vary by location. Installation fees, monthly
          equipment lease fees, and taxes may apply. After 100/150/300/500 GB of
          High-Speed Data usage, you still have unlimited access to Standard
          Data, which may result in slower speed.
        </p>
        <div className="package-table-container channels">
          <h4>Viasat data caps </h4>
          <br />
          <p>
            One of Viasat’s biggest problems is its data caps. Even the Viasat
            Unlimited plans, which give you “unlimited data,” slow your internet
            speeds dramatically once you hit your data cap. <br />
            The best way to avoid slowing is to choose a plan with a lot of
            data. While Choice 100/500 GB isn’t available in all areas, its data
            allowance and zippy download speeds are the best we’ve seen from
            Viasat. If you can get it at your home, it’s the one we’d
            recommend—as long as you can handle the enormous monthly bills.{" "}
            <br />
            If you’re considering switching over from the one other satellite
            internet provider, HughesNet, you may want to take a look at
            Viasat’s Choice 25 plan. It’s a close match to HughesNet’s best
            plans—same speeds, but in many areas it comes with more data at a
            lower price.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4> Viasat internet equipment </h4>
          <br />
          <p>
            Unlike DSL and cable internet, satellite internet doesn’t have
            standardized technology for modems. That means you won’t be able to
            find a third-party modem—you have to use what Viasat provides.{" "}
            <br />
            You have to lease your equipment from Viasat for $12.99 per month or
            buy it outright for $299.99. Heads up—Viasat’s combo modem/Wi-Fi
            router will provide wireless coverage, or you can use your own
            wireless router. <br />
            These equipment rental prices are pretty typical for internet
            providers, but we’re extra bummed to see them from Viasat. Since
            there’s no option to buy this equipment elsewhere, we’d rather see
            it included in the Viasat internet cost from the get-go.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4> Viasat Voice</h4>
          <br />
          <p>
            Viasat also offers an internet/phone bundle under the name Viasat
            Voice. The Voice half of the bundle is $25.00 per month for the
            first three months—a $10 savings, and not a bad price compared to
            similar providers. <br />
            Viasat Voice isn’t a traditional landline or cell plan. It’s a VoIP,
            or Voice over Internet Protocol. This means that it relies on your
            satellite internet connection instead of phone lines and cell
            towers. It might be a good option if you would otherwise have a
            spotty cell connection in your area. It also offers unlimited local
            and long distance calling in the United States and Canada, none of
            which will count against your monthly data caps.
          </p>
        </div>
      </div>

      <div className="section blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
          <p className="sect-desc"></p>
        </div>
        <div className="package-table-container channels">
          <Image src={dotted} alt="mark" className="mark" />
          <h4>Viasat internet deals and promotions</h4>
          <br />
          <p>
            Viasat offers promotional pricing, but these deals last only for the
            first three months of your two-year contract. After that, your price
            could jump anywhere from $20 to $100 more per month depending on
            your plan. Gross.
            <br />
            However, we are fans of Viasat’s Hibernation Plan. After you’ve been
            a Viasat customer for one month, you can switch to the
            $9.99-per-month Hibernation Plan for two to six months. This leave
            of absence is a great way to save money if you live at your Viasat
            residence for only a few months out of the year.
          </p>
          <br />
          <h4>Viasat internet deals</h4>
          <br />
          <ul>
            <li>Three-month promotional pricing to save $20–$100 per month</li>
            <li>
              Hibernation plans for only $9.99 per month while away from home
            </li>
          </ul>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> Is Viasat worth it? </span>
          </h2>
          <p className="sect-desc">
            Internet is an essential utility, so if your home doesn’t connect to
            land-based internet networks, we recommend Viasat’s satellite
            internet over dial-up internet. You’ll have access to the internet,
            home of the sum of human knowledge (and our friendly website). But
            Viasat comes with high costs (monetarily), and the data caps mean
            significant slowing after you hit your limits. So if you’re thinking
            of getting Viasat for your weekend getaway cabin rather than a
            primary residence, consider if the cost is worth it. Maybe you
            should forfeit streaming capabilities for more time listening to the
            birds sing.
            <br />
            Before you make your final decision, be sure to double check for
            other internet providers near you. Cable and DSL services are your
            better bet for quality internet. If you enter your zip code below,
            we’ll pull up a list of all the providers in your area. Don’t
            worry—we don’t keep or share your information.
          </p>
        </div>
        <Searchbar />
      </div>

      <div className="section faq">
        <div className="head">
          <h2 className="sect-heading">
            <span> Viasat</span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Why is Viasat internet so
                slow?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  If you’re experiencing slow speeds with Viasat, it could be
                  because you’ve reached your data cap. After you reach that
                  threshold–60 GB on its cheapest plan—Viasat will throttle your
                  connection, causing slow internet. When this happens, Viasat
                  recommends either waiting for your allowance to reset the next
                  month or purchasing additional data directly.
                  <br />
                  But many Viasat users still experience slowness in the form of
                  latency—the round-trip time it takes for information to go
                  from you to the internet and back to your computer.
                  <br />
                  Every time you click on a new web link, that request has to go
                  to Viasat’s satellite in outer space, then down to its network
                  operation center. The info you requested then has to go up to
                  the satellite and down to your house.
                  <br />
                  This journey is an incredible undertaking, so it’s a massive
                  feat of human ingenuity that your latency can be counted in
                  only milliseconds. But with that much latency, we don’t
                  recommend satellite internet for online gaming.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Why is Viasat internet so slow?"}
            cssClass={"faq-content"}
          >
            <p>
              If you’re experiencing slow speeds with Viasat, it could be
              because you’ve reached your data cap. After you reach that
              threshold–60 GB on its cheapest plan—Viasat will throttle your
              connection, causing slow internet. When this happens, Viasat
              recommends either waiting for your allowance to reset the next
              month or purchasing additional data directly.
              <br />
              But many Viasat users still experience slowness in the form of
              latency—the round-trip time it takes for information to go from
              you to the internet and back to your computer.
              <br />
              Every time you click on a new web link, that request has to go to
              Viasat’s satellite in outer space, then down to its network
              operation center. The info you requested then has to go up to the
              satellite and down to your house.
              <br />
              This journey is an incredible undertaking, so it’s a massive feat
              of human ingenuity that your latency can be counted in only
              milliseconds. But with that much latency, we don’t recommend
              satellite internet for online gaming.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Is Viasat satellite
                internet good for Netflix?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Viasat can be a good option for Netflix, but you have to be
                  careful not to use all your data. Set your Netflix quality to
                  Medium (this will look as good as a VHS), and you’ll use only
                  0.7 GB per hour. But if you want to watch lots of Netflix,
                  pick a Viasat plan with plenty of data.
                  <br />
                  Of course, if you do things on the internet other than watch
                  Netflix, you could run out of data sooner. Viewing pictures,
                  checking email, and visiting web pages uses your data too.
                  With Viasat, you have to be as miserly with your data as
                  Scrooge McDuck with his mountain of gold.
                  <br />
                  Check out our full guide for better Netflix internet options.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Is Viasat satellite internet good for Netflix?"}
            cssClass={"faq-content"}
          >
            <p>
              Viasat can be a good option for Netflix, but you have to be
              careful not to use all your data. Set your Netflix quality to
              Medium (this will look as good as a VHS), and you’ll use only 0.7
              GB per hour. But if you want to watch lots of Netflix, pick a
              Viasat plan with plenty of data.
              <br />
              Of course, if you do things on the internet other than watch
              Netflix, you could run out of data sooner. Viewing pictures,
              checking email, and visiting web pages uses your data too. With
              Viasat, you have to be as miserly with your data as Scrooge McDuck
              with his mountain of gold.
              <br />
              Check out our full guide for better Netflix internet options.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Is Viasat internet service
                really unlimited?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Because Viasat won’t charge you or cut off your internet usage
                  entirely when you go over your allocated data, Viasat plans
                  are considered unlimited. But once you hit your data cap,
                  you’re likely to notice your download speeds become starkly
                  slower.
                  <br />
                  Whether you’re calling via phone to discuss your bill or
                  popping into a Cox store, be prepared by having a copy of your
                  bill handy.
                  <br />
                  Viasat won’t prioritize your internet usage again until the
                  next month, so other users who haven’t hit their data caps
                  will get to cut ahead of you. But slow internet is still
                  internet, and it will be handy to have in an emergency. It
                  just might not be as fun to stream TV while it spends a long
                  time buffering.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" Is Viasat internet service really unlimited?"}
            cssClass={"faq-content"}
          >
            <p>
              Because Viasat won’t charge you or cut off your internet usage
              entirely when you go over your allocated data, Viasat plans are
              considered unlimited. But once you hit your data cap, you’re
              likely to notice your download speeds become starkly slower.
              <br />
              Whether you’re calling via phone to discuss your bill or popping
              into a Cox store, be prepared by having a copy of your bill handy.
              <br />
              Viasat won’t prioritize your internet usage again until the next
              month, so other users who haven’t hit their data caps will get to
              cut ahead of you. But slow internet is still internet, and it will
              be handy to have in an emergency. It just might not be as fun to
              stream TV while it spends a long time buffering.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Is Viasat better than
                HughesNet?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  We generally recommend Viasat over HughesNet, because Viasat
                  offers faster download speeds of up to 150 Mbps. You’re
                  limited to download speeds of up to 25 Mbps on HughesNet,
                  although HughesNet has some plans that are cheaper than
                  Viasat’s 25 Mbps plans.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Is Viasat better than HughesNet?"}
            cssClass={"faq-content"}
          >
            <p>
              We generally recommend Viasat over HughesNet, because Viasat
              offers faster download speeds of up to 150 Mbps. You’re limited to
              download speeds of up to 25 Mbps on HughesNet, although HughesNet
              has some plans that are cheaper than Viasat’s 25 Mbps plans.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> Is Viasat good for
                streaming movies?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Viasat can stream high-definition TV shows or movies, which
                  typically need a download speed of at least 5 Mbps. But if
                  you’re regularly streaming content, you’ll need to watch your
                  data usage to ensure you don’t hit Viasat’s data caps.
                  <br />
                  Check out our article for “Is Satellite Internet Good for
                  Streaming?” to get more information.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" Is Viasat good for streaming movies?"}
            cssClass={"faq-content"}
          >
            <p>
              Viasat can stream high-definition TV shows or movies, which
              typically need a download speed of at least 5 Mbps. But if you’re
              regularly streaming content, you’ll need to watch your data usage
              to ensure you don’t hit Viasat’s data caps.
              <br />
              Check out our article for “Is Satellite Internet Good for
              Streaming?” to get more information.
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
            The experts at CableTV.com have spent hours comparing satellite
            internet prices and plans to bring you the best deals on the market.
            Our editorial ratings focus on prices, speeds, reliability, customer
            satisfaction, and equipment, among other things. For more
            information, check ou
            <span className="link">
              <Link href={"#"}> How We Rank </Link>
            </span>
            page.
          </p>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default ViasatReview;
