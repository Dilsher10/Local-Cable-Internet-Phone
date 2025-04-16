// import React, { useState } from "react";
import "./dish-deals.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { dishNavLinks } from "../../assets/data/navLinks/dishNavLinks";
import dish from "../../assets/images/dish.png";
import star from "../../assets/images/star.png";
import youngdelivery from "../../assets/images/youngdelivery.png";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import quotationsIcon from "../../assets/images/quotations.svg";
import CTA from "../../components/cta-section/CTA";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import quotations from "../../assets/images/quotations.svg";
// import Newsletter from "../../components/newsletter/Newsletter";
import InnerPagesHeroThree from "../../components/inner-pages-hero-three/InnerPagesHeroThree";
import { GoArrowUpRight } from "react-icons/go";

export const metadata = {
  title: "DISH Deals And Promotions"
};

const DishDeals = () => {
  // const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  let heroData = {
    column1: {
      logo: dish,
      rating: "(4.1/5)",
      starImg: star,
    },
    column2: {
      heading: "Current deals and promotions:",
      listItems: [
        {
          text: [
            // { text: "Free ", isLink: true },
            { text: "Free ", isLink: true, link: "#" },
            { text: "installation", isLink: true, link: "/installation" },
          ],
        },
        {
          // text: [{ text: "Free premium channels", isLink: true }],
          text: [{ text: "Free premium channels", isLink: true, link: "#" }],
        },
        {
          text: [
            { text: "Special offers for ", isLink: false },
            {
              text: " seniors, active military/veterans/first responders, healthcare workers, and teachers",
              isLink: true,
              link: "#"
            },
          ],
        },
        {
          text: [
            { text: "", isLink: false },
            { text: "eAutoPay", isLink: true, link: "/eautopay" },
            // { text: " discount", isLink: true },
            { text: " discount", isLink: true, link: "#" },
          ],
        },
        {
          // text: [{ text: "Multi-Sport pack", isLink: true }],
          text: [{ text: "Multi-Sport pack", isLink: true, link: "#" }],
        },
      ],
    },
    column3: {
      img: youngdelivery,
    },
    column4: {
      link: "Jump to review",
      callback1: "Call DISH",
      callback2: "1-855-548-0502",
      buttonIcon: <GoArrowUpRight className="upright-arrow-icon" />,
    },
  };
  return (
    <div className="dish-deals">
      {/* <SubNav links={dishNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">DISH Deals And Promotions</h2>
          <p className="sect-desc">
            We’ve scoured the internet to bring you the best money-saving deals
            and promotions on DISH satellite TV service
          </p>
        </div>
        <InnerPagesHeroThree data={heroData} />
        <p className="sect-desc">
          Data effective as of publish date. Offers and availability may vary by
          location and are subject to change.
        </p>
      </div>
      <StickyHeader />

      <div className="endnote is-dish-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <p>
            We named DISH the best overall TV provider and best TV provider for
            kids in our guide to the Best TV Providers because it has tons of
            channels, affordable pricing, a three-year price guarantee, a
            feature-rich mobile app, and excellent parental controls. Plus, DISH
            offers tons of great deals and promotions. Get a load of the offers
            we’ve dug up for you.
          </p>
        </div>
      </div>

      <CTA
        heading={"Find out if DISH bundles are available in your area"}
        desc={"Enter your zip code below to see is DISH in your area."}
      />

      <div className="section dish-deals-and-promotions">
        <div className="head">
          <h2 className="sect-heading">
            DISH <span> Deals And Promotions</span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Free installation</h4>
          <p className="after-heading">
            If you’re a new or qualifying former customer, DISH will waive the
            $199 installation fee when you sign up.
          </p>
          <hr />
          <div className="btn">
            <Link href={"#"}>get DISH installed Free</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Free premium channels</h4>
          <p className="after-heading">
            When you sign up for DISH TV service, you get three free months of
            SHOWTIME®, STARZ®, and the DISH Movie Pack (regularly $10 a month
            each). The DISH Movie Pack includes 14 B-list channels, but with
            that many options, something good’s got to be playing:
          </p>
          <ul>
            <li> · Crime & Investigation Network</li>
            <li> · FOX Movie Channel</li>
            <li> · HDNET MOVIES</li>
            <li> · Hallmark Movies & Mysteries</li>
            <li> · Indieplex</li>
            <li> · MGM+™</li>
            <li> · MGM Hits™</li>
            <li> · MGM+ Marquee™</li>
            <li> · MoviePlex</li>
            <li> · PixL</li>
            <li> · RetroPlex</li>
            <li> · Sony Movies</li>
            <li> · STARZ ENCORE Suspense</li>
            <li> · STARZ Kids and Family</li>
          </ul>
          <p className="after-heading">
            But be sure to cancel your premium channels before the promo ends,
            otherwise they’ll auto-renew and—dun, dun, dunnnnnn—you’ll get
            billed. <br />
            <span className="link">
              <Link href={"#"}>How to get it:</Link>
            </span>{" "}
            Automatically applied at checkout when you sign up for DISH.
          </p>
          <hr />
          <div className="btn">
            <Link href={"#"}>get these premium channels</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>DISH senior discount</h4>
          <p className="after-heading">
            With DISH 55, customers aged 55 or older get free installation, one
            free movie rental each month, worry-free equipment protection, and
            six free months of identity theft protection.
            <br />
            <span className="link">
              <Link href={"#"}>How to get it:</Link>
            </span>{" "}
            Sign up for a DISH TV package and check the box under “Special
            Offers” at checkout.
          </p>
          <hr />
          <div className="btn">
            <Link href={"#"}>Get DISH 55 Deal</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>DISH military discount</h4>
          <p className="after-heading">
            DISH offers active military, veterans, and first responders one free
            movie rental each month, a three-year price guarantee, plus the
            Stars & Stripes channel pack (regularly $10 a month) at no extra
            charge. Here are the included channels:
            <ul className="channel-list">
              <li>· American Heroes Channel</li>
              <li>· Crime and Investigation</li>
              <li>· Cowboy Channel</li>
              <li>· Destination America</li>
              <li>· getTV</li>
              <li>· Reelz</li>
              <li>· Smithsonian Channel</li>
              <li>· STARZ ENCORE Westerns</li>
            </ul>
            <span className="link">
              <Link href={"#"}>How to get it:</Link>
            </span>{" "}
            Sign up for a DISH TV package and check the box under “Special
            Offers” at checkout.
          </p>
          <hr />
          <div className="btn">
            <Link href={"#"}>get military discount</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>DISH discounts for healthcare workers and teachers</h4>
          <p className="after-heading">
            With DISH healthcare workers and teachers get one free movie rental
            each month, a three-year price guarantee, a free upgrade to DISH
            Anywhere®, plus the Heartland channel pack (regularly $6 a month) at
            no extra charge. Here are the included channels:
            <ul className="channel-list">
              <li>· BabyTV</li>
              <li>· Cowboy Channel</li>
              <li>· Cowgirl Channel</li>
              <li>· Discovery Family</li>
              <li>· Game Show Network (GSN)</li>
              <li>· Great American Living</li>
              <li>· Great American Family</li>
              <li>· Hallmark Channel</li>
              <li>· Hallmark Drama</li>
              <li>· Hallmark Movies & Mysteries</li>
              <li>· Oprah Winfrey Network (OWN)</li>
              <li>· RFD-TV</li>
              <li>· PixL</li>
              <li>· UPtv</li>
            </ul>
            <span className="link">
              <Link href={"#"}>How to get it:</Link>
            </span>{" "}
            Sign up for a DISH TV package and check the box under “Special
            Offers” at checkout.
          </p>
          <hr />
          <div className="btn">
            <Link href={"#"}>get healthcare or teacher discount</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>eAutoPay discount</h4>
          <p className="after-heading">
            eAutoPay is how DISH accepts automatic payments. You’ll save $5 a
            month by paying your bill this way—not that DISH gives you a choice
            in the matter (see below). But we can think of worse things that TV
            providers foist upon us.
            <br />
            <span className="link">
              <Link href={"#"}>How to get it: </Link>
            </span>{" "}
            Automatically applied at checkout when you sign up for DISH.
          </p>
          <hr />
          <div className="btn">
            <Link href={"#"}>get autopay discount</Link>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Multi-Sport pack</h4>
          <p className="after-heading">
            DISH is offering its Multi-Sport pack free to new residential
            customers who sign up for 120 channels or more between July 13 and
            November 13.
            <br />
            <span className="link">
              <Link href={"#"}>How to get it: </Link>
            </span>{" "}
            Automatically applied at checkout when you sign up for DISH.
          </p>
          <hr />
          <div className="btn">
            <Link href={"#"}>get Multi-Sport pack</Link>
          </div>
        </div>
      </div>

      <div className="section dish-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>DISH Network </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Does DISH Network have any
                specials?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  DISH Network has tons of special deals and promotions-check
                  out this list:\
                </p>
                <ul>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> Free installation</Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> Free premium channels</Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> Special offer for seniors</Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> DISH military discount</Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}>
                        {" "}
                        DISH discount for healthcare workers and teachers
                      </Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> Free premium channels</Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> eAutoPay discount</Link>
                    </span>
                  </li>
                  <li>
                    ·{" "}
                    <span className="link">
                      <Link href={"#"}> Multi-Sport pack</Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Does DISH Network have any specials?"}
            cssClass={"faq-content"}
          >
            <p>
              DISH Network has tons of special deals and promotions-check out
              this list:\
            </p>
            <ul>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}> Free installation</Link>
                </span>
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}> Free premium channels</Link>
                </span>
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}> Special offer for seniors</Link>
                </span>
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}> DISH military discount</Link>
                </span>
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}>
                    {" "}
                    DISH discount for healthcare workers and teachers
                  </Link>
                </span>
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}> Free premium channels</Link>
                </span>
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}> eAutoPay discount</Link>
                </span>
              </li>
              <li>
                ·{" "}
                <span className="link">
                  <Link href={"#"}> Multi-Sport pack</Link>
                </span>
              </li>
            </ul>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What is the best deal on
                DISH Network?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  The America's Top 200 plan is the best value on DISH. You get
                  240+ channels for $99.99 a month, and the price is guaranteed
                  for three years.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" What is the best deal on DISH Network?"}
            cssClass={"faq-content"}
          >
            <p>
              The America's Top 200 plan is the best value on DISH. You get 240+
              channels for $99.99 a month, and the price is guaranteed for three
              years.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How do I negotiate a better
                deal on DISH?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  You can call DISH customer retention (+1-866-974-0781, 8:00
                  p.m.-12 a.m. Eastern time) at the end of your contract to try
                  to negotiate a better deal. What DISH offers depends on the
                  representative, so be extra sweet to them when you call.DISH,
                  however, does have a package that's available only to existing
                  customers-meaning you can switch to it after your original
                  two-year contract runs out. The DISH Flex Pack ($57.99 a
                  month) has over 50 popular channels to start, and then you can
                  customize it with a variety of add-ons that have local, kids,
                  movie, or sports channels for $6.00-$15.00 a month each.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How do I negotiate a better deal on DISH?"}
            cssClass={"faq-content"}
          >
            <p>
              You can call DISH customer retention (+1-866-974-0781, 8:00
              p.m.-12 a.m. Eastern time) at the end of your contract to try to
              negotiate a better deal. What DISH offers depends on the
              representative, so be extra sweet to them when you call.DISH,
              however, does have a package that's available only to existing
              customers-meaning you can switch to it after your original
              two-year contract runs out. The DISH Flex Pack ($57.99 a month)
              has over 50 popular channels to start, and then you can customize
              it with a variety of add-ons that have local, kids, movie, or
              sports channels for $6.00-$15.00 a month each.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What is the least expensive
                DISH package?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  America's Top 120 ($79.99 a month, 190 channels) is the least
                  expensive DISH package.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" What is the least expensive DISH package?"}
            cssClass={"faq-content"}
          >
            <p>
              America's Top 120 ($79.99 a month, 190 channels) is the least
              expensive DISH package.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>Does DISH offer a senior
                discount?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  DISH's deal, DISH 55, offers discounts and perks for customers
                  55 years of age and older. When you sign up for a DISH plan by
                  phone at +1- 877-926-9611 or on the DISH site, selecting the
                  DISH 55 special offer gets you six free months of identity
                  theft protection and one free On Demand movie every month.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={"Does DISH offer a senior discount?"}
            cssClass={"faq-content"}
          >
            <p>
              DISH's deal, DISH 55, offers discounts and perks for customers 55
              years of age and older. When you sign up for a DISH plan by phone
              at +1- 877-926-9611 or on the DISH site, selecting the DISH 55
              special offer gets you six free months of identity theft
              protection and one free On Demand movie every month.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>Does DISH have any deals for
                new customers?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  DISH will waive the $199 installation fee for new and
                  qualifying former DISH customers. Check the special offers if
                  you sign up on the site or be sure to ask the representative
                  who's helping you start your service.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={"Does DISH have any deals for new customers?"}
            cssClass={"faq-content"}
          >
            <p>
              DISH will waive the $199 installation fee for new and qualifying
              former DISH customers. Check the special offers if you sign up on
              the site or be sure to ask the representative who's helping you
              start your service.
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

          <h4>Related Articles:</h4>
          <ul>
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
                <Link href={"#"}>DIRECTV Review</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>DISH vs. DIRECTV</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>DishLATINO Review</Link>
              </span>
            </li>
          </ul>
          <h4>Disclaimers:</h4>
          <p>
            55+ offer: All offers require credit qualification, 2-year
            commitment and eAutoPay. Upfront fees may apply based on credit
            qualification. Early termination fee of $20/mo. remaining applies if
            you cancel early. DirecTV Gift Card Offer: Use code DTV2DISH.
            Eligibility requires: (1) continuing active DISH service, (2)
            completion of the first 31 days of DISH service, (3) payment of
            first DISH bill, (4) submission of a recent DirecTV satellite bill
            dated no more than 6 months from the time of activation of DISH
            Services for the same name or address, and (5) online redemption
            after validation. After completing the redemption process, the gift
            card will be shipped within 4 to 6 weeks. Offer unavailable in PR &
            USVI. For full details, visit mydish.com/giftcardhelp. Prices
            include Hopper Duo for qualifying customers. Hopper, Hopper w/Sling
            or Hopper 3 $5/mo. more. Fees apply for additional TVs: Hopper
            $15/mo., Joey $7/mo., Super Joey $10/mo. After 3 mos., you will be
            billed $20/mo. for Showtime and DISH Movie Pack unless you call or
            go online to cancel. *Requires Hopper 3. †Requires Hopper/w Sling or
            Hopper 3; 2,000 hours based on 2TB hard drive. †Netflix is currently
            available on Hopper Duo, Hopper w/Sling, Hopper 3, Wally, and Joeys.
            <br />
            Active duty & veteran military offer and first responder offer: All
            offers require credit qualification, 2-year commitment and eAutoPay.
            Upfront fees may apply based on credit qualification. Early
            termination fee of $20/mo. remaining applies if you cancel early.
            DirecTV Gift Card Offer: Use code DTV2DISH. Eligibility requires:
            (1) continuing active DISH service, (2) completion of the first 31
            days of DISH service, (3) payment of first DISH bill, (4) submission
            of a recent DirecTV satellite bill dated no more than 6 months from
            the time of activation of DISH Services for the same name or
            address, and (5) online redemption after validation. After
            completing the redemption process, the gift card will be shipped
            within 4 to 6 weeks. Offer unavailable in PR & USVI. For full
            details, visit mydish.com/giftcardhelp. Prices include Hopper Duo
            for qualifying customers. Hopper, Hopper w/Sling or Hopper 3 $5/mo.
            more. Fees apply for additional TVs: Hopper $15/mo., Joey $7/mo.,
            Super Joey $10/mo. After 3 mos., you will be billed $20/mo. for
            Showtime and DISH Movie Pack unless you call or go online to cancel.
            *Requires Hopper 3. †Requires Hopper/w Sling or Hopper 3; 2,000
            hours based on 2TB hard drive. †Netflix is currently available on
            Hopper Duo, Hopper w/Sling, Hopper 3, Wally, and Joeys.
            <br />
            Healthcare offer and teacher offer: All offers require credit
            qualification, 2-year commitment and eAutoPay. Upfront fees may
            apply based on credit qualification. Early termination fee of
            $20/mo. remaining applies if you cancel early. DirecTV Gift Card
            Offer: Use code DTV2DISH. Eligibility requires: (1) continuing
            active DISH service, (2) completion of the first 31 days of DISH
            service, (3) payment of first DISH bill, (4) submission of a recent
            DirecTV satellite bill dated no more than 6 months from the time of
            activation of DISH Services for the same name or address, and (5)
            online redemption after validation. After completing the redemption
            process, the gift card will be shipped within 4 to 6 weeks. Offer
            unavailable in PR & USVI. For full details, visit
            mydish.com/giftcardhelp. Prices include Hopper Duo for qualifying
            customers. Hopper, Hopper w/Sling or Hopper 3 $5/mo. more. Fees
            apply for additional TVs: Hopper $15/mo., Joey $7/mo., Super Joey
            $10/mo. After 3 mos., you will be billed $20/mo. for Showtime and
            DISH Movie Pack unless you call or go online to cancel. *Requires
            Hopper 3. †Requires Hopper/w Sling or Hopper 3; 2,000 hours based on
            2TB hard drive. †Netflix is currently available on Hopper Duo,
            Hopper w/Sling, Hopper 3, Wally, and Joeys.
          </p>
        </div>
      </div>
      {/* <Newsletter /> */}
    </div>
  );
};

export default DishDeals;
