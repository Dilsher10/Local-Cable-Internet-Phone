// import React, { useState } from "react";
import "./direct-tv-hidden-costs.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
// import { directtvNavLinks } from "../../assets/data/navLinks/directtvNavLinks";
import CTA from "../../components/cta-section/CTA";
import quotationsIcon from "../../assets/images/quotations.svg";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import dotted from "../../assets/images/dotted.png";
import computercross from "../../assets/images/computercross.png";
import network from "../../assets/images/network.png";
import PackageTable from "../../components/package-table/PackageTable";
import Searchbar from "../../components/searchbar/Searchbar";
// import Newsletter from "../../components/newsletter/Newsletter";

export const metadata = {
  title: "DIRECTV Hidden Costs"
};

const DirectTvHiddenCosts = () => {
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

  // const [faq, setFaq] = useState();
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="direct-tv-hidden-costs">
      {/* <SubNav links={directtvNavLinks} /> */}
      <div className="direct-tv-hidden-cost-hero global-inner-hero">
        <h1>Hidden Costs Of DIRECTV</h1>
        <p>
          Our TV experts show you the true cost of DIRECTV, including
          installation fees, equipment charges, and more.
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
          <p>
            5-day free trial: Tired of cable and satellite TV but not quite sure
            if you wanna cut the cord? DIRECTV STREAM is a good streaming
            alternative for folks who want the look and feel of old-school TV
            without the installation requirements, equipment fees, and other
            headaches that come with cable.
            <br />
            <br />
            Budgeting for a DIRECTV package can be intimidating when you’re
            afraid extra fees lurk around every corner. But don’t fret—we’ve got
            all the insider knowledge on DIRECTV’s hidden fees. From contracts
            to equipment to cancellation costs, we’ll give you a clear look at
            all your options before you sign up.
          </p>
        </div>
      </div>

      <CTA
        heading={"Can you get DIRECTV where you live?"}
        desc={"Enter your zip code here to find out."}
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
          <Link href={"#"}>DIRECTV plans and promotional prices </Link>
          <Link href={"#"}>DIRECTV taxes, fees, and surcharges </Link>
          <Link href={"#"}>DIRECTV installation fees</Link>
          <Link href={"#"}>DIRECTV equipment fees </Link>
          <Link href={"#"}>DIRECTV premium channel and add-on costs</Link>
          <Link href={"#"}>DIRECTV late fees</Link>
          <Link href={"#"}>DIRECTV cancellation costs</Link>
          <Link href={"#"}>Cheapest DIRECTV package </Link>
        </div>
      </div>

      <div className="section direct-tv-blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
        </div>
        <div className="package-table-container channels">
          <Image src={dotted} alt="" className="mark" />
          <h4>DIRECTV plans and promotional prices</h4>
          <br />
          <p>
            DIRECTV requires a two-year contract but offers a two-year price
            guarantee. After those two years, you’ll pay whatever amount DIRECTV
            has raised its package prices to since you signed up, which it calls
            “the current prevailing prices.”
            <br />
            The one bonus is that DIRECTV’s deals and promotions usually include
            a nice freebie on top of your plan. Currently, you can get three
            free months of Max™ (formerly HBO Max), CINEMAX®, MGM+™, SHOWTIME®,
            and STARZ® when you sign up for the ENTERTAINMENT package and
            higher.
            <br />
            Just don’t forget to cancel those offers at the end of your promo
            period, or your DIRECTV monthly cost will go way, way up. The
            auto-renew prices for all those premium channels total $54.95
            monthly.
          </p>
        </div>
      </div>

      <div className="section direct-tv-price-hikes">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV <span> price hikes </span>
          </h2>
          <p className="sect-desc">
            DIRECTV used to raise its prices sharply in the second year of your
            two-year contract, but it’s since done away with that misleading
            pricing.
            <br /> After your two-year price guarantee, DIRECTV will charge you
            its latest package prices. If you don’t like those prices, your
            two-year agreement will be over, so you can switch to another TV
            provider like DISH.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <br />
        <p className="below-table">
          Data as of post date. Offers and availability may vary by location and
          are subject to change. *for 24 months plus taxes and fees w/ 24-mo.
          agmt. AutoPay and Paperless Bill req’d. Advanced Receiver Service Fee
          $15/mo. is extra and applies.
        </p>
      </div>

      <div className="section direct-tv-internet-plans">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV <span> DIRECTV internet plans </span>
          </h2>
          <p className="sect-desc">
            Unlike many TV providers, DIRECTV doesn’t offer its own internet
            service. But you can still bundle with AT&T Internet, even though
            the two providers are now separate businesses. That said, don’t
            expect a discount when you bundle.
            <br />
            We can help you find all the internet providers in your area and
            their lowest prices. Just enter your zip code below and hit click
            the Find button:
          </p>
        </div>
        <div className="search-bar">
          <Searchbar />
        </div>
        <div className="package-table-container channels">
          <Image src={dotted} alt="" className="mark" />
          <h4>Bundle DIRECTV with AT&T Internet</h4>
          <br />
          <p>
            If you live in an area with AT&T and bundle with either of AT&T’s
            internet services, you’ll get the option to add AT&T Internet
            service when you order DIRECTV online. To see what you’ll pay, check
            out our{" "}
            <span className="link">
              <Link href={"#"}>DIRECTV bundles review.</Link>
            </span>
          </p>
        </div>
      </div>

      <div className="section direct-tv-taxes-taxes-and-surcharges">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV <span> taxes, taxes, and surcharges </span>
          </h2>
          <p className="sect-desc">
            There are a few DIRECTV’s hidden fees you get each month.
            <br />
            You’ve got your taxes, which are determined by where you live. And
            while DIRECTV advertises the Genie DVR device as included, you’ll
            still have to pay the advanced receiver service fee of $15 to $25
            monthly. Then there’s the regional sports fee, which DIRECTV charges
            customers with CHOICE and higher-tier plans for regional sports
            channels.
            <br />
            For the most part, everything else that isn’t equipment or premium
            channels is incidental stuff you can avoid. We suggest using your
            online account to check statements and make payments, because
            talking to an agent on the phone can cost you extra.
          </p>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Fee</th> <th>Price</th> <th>What it’s for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>TV Access Fee</td>
                <td>$7.00/receiver</td>
                <td>Connecting each receiver</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Advanced Receiver Service Fee</td>
                <td>$15.00/mo.</td>
                <td>HD, DVR, and whole-home services</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Regional Sports Fee</td>
                <td>Up to $13.99/mo.</td>
                <td>Including regional sports networks</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Late Payment Fee</td>
                <td>Up to $6.25</td>
                <td>Paying your bill late</td>
              </tr>
              <tr>
                <td>5.</td>
                <td>Vacation Hold</td>
                <td>Up to $7.00/mo.</td>
                <td>
                  Holding your service for 2–6 months while you’re on vacation
                </td>
              </tr>
              <tr>
                <td>6.</td>
                <td>Returned Payment Fee</td>
                <td>Up to $30.00 (as permitted by law)</td>
                <td>Making payments that get declined</td>
              </tr>
              <tr>
                <td>7.</td>
                <td>Minimum Service</td>
                <td>Up to $9.99/mo.</td>
                <td>
                  Placing your account in minimum service status because of
                  non-payment
                </td>
              </tr>
              <tr>
                <td>8.</td>
                <td>Restoral Fee</td>
                <td>Up to $20.00 per restoral</td>
                <td>
                  Reinstating your regular service after it changed to minimum
                  service
                </td>
              </tr>
              <tr>
                <td>9.</td>
                <td>Dispatch Fee</td>
                <td>$99.00</td>
                <td>Dispatching a technician for requested repairs</td>
              </tr>
              <tr>
                <td>10.</td>
                <td>Phone Payment Fee</td>
                <td>Up to $5.00 per payment</td>
                <td>Talking to an agent to make a payment</td>
              </tr>
              <tr>
                <td>11.</td>
                <td>Order Assistance Fee</td>
                <td>Up to $5.00 per payment</td>
                <td>Speaking to an agent to order Pay Per View</td>
              </tr>
              <tr>
                <td>12.</td>
                <td>Duplicate Statement Fee</td>
                <td>Up to $1.75</td>
                <td>Sending a duplicate written statement at your request</td>
              </tr>
              <tr>
                <td>13.</td>
                <td>Ledger Request</td>
                <td>Up to $2.75</td>
                <td>
                  Posting an itemized ledger of past payments at your request
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div className="below-table">
          Data as of post date. Offers and availability may vary by location and
          are subject to change.
        </div>
      </div>

      <div className="section direct-tv-installation-fees">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV <span> installation fees </span>
          </h2>
          <p className="sect-desc">
            Installing your satellite dish requires a professional technician,
            but luckily DIRECTV doesn’t charge for that. Instead, you’ll pay
            only a small activation fee. But this is waived for online orders.
            <br />
            The exception is the additional activation fee that DIRECTV charges
            folks with lots of TVs at home. After your third TV, every
            additional hookup will cost you a $49 onetime charge. Yikes!
          </p>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Fee</th> <th>Price</th> <th>What it’s for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Activation fee</td>
                <td>$19.95</td>
                <td>Activating your DIRECTV service</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Additional activation fee</td>
                <td>$49.00 per TV connection</td>
                <td>Activating DIRECTV on 4th, 5th, 6th, and 7th TVs</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div className="below-table">
          Data as of post date. Offers and availability may vary by location and
          are subject to change.
        </div>
      </div>

      <div className="section direct-tv-equipment-fees">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV <span> equipment fees </span>
          </h2>
          <p className="sect-desc">
            DIRECTV says all its packages come with a $15 monthly advanced
            receiver service fee, which covers your DVR and HD service. But
            DIRECTV’s fees page says that fee can reach as high as $25 monthly,
            so keep an eye out for price hikes on this fee. And if you want to
            zone out in front of more than one TV, it will cost you $7 per month
            for each additional Genie Mini or Genie Mini Wireless receiver.
            <br />
            If you want to go wireless, you can try out the new Genie 2. There
            is a one-time bridge fee (for wireless setup) of $99. The Genie 2
            isn’t available everywhere yet, and users have complained it’s still
            buggy, but it has more recording time and you won’t have to go
            drilling holes all over your house.
            <br />
            To give it a shot, ask your customer service rep if Genie 2 is
            available in your area. Want to learn more about DIRECTV’s
            equipment? Check out our review of the Genie.
          </p>
        </div>
        <div className="custom-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Fee</th> <th>Price</th> <th>What it’s for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Advanced Receiver Service Fee</td>
                <td>Up to $25.00/mo.</td>
                <td>Receiving HD, DVR, and whole-home services</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Genie Mini receiver</td>
                <td>$7.00/mo. ea.</td>
                <td>Adding 1+ receivers to your package</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Genie 2 bridge fee</td>
                <td>$99.00 onetime charge</td>
                <td>Upgrading to the new Genie 2</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Equipment non-return fee</td>
                <td>$45.00–$135.00</td>
                <td>Fee for not returning equipment (varies by device)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div className="below-table">
          Data as of post date. Offers and availability may vary by location and
          are subject to change.
        </div>
      </div>

      <div className="section direct-tv-blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> </span>
          </h2>
        </div>
        <div className="package-table-container channels">
          <Image src={computercross} alt="" className="mark" />
          <h4>How to return DIRECTV equipment</h4>
          <br />
          <p>
            When you cancel your DIRECTV service, you can return it one of two
            ways:
          </p>
          <ul>
            <li>
              · Take your unboxed equipment to a FedEx Office Pack and Ship or
              The UPS Store location. Just give the representative your DIRECTV
              account number. They’ll take care of everything and give you a
              receipt confirming that you returned the devices.
            </li>
            <li>
              · DIRECTV might send you a return kit, which includes everything
              you need to box up the equipment—plus a prepaid shipping label. As
              for where to return your DIRECTV equipment, drop your box at a
              post office or FedEx location. (We’re not sure why you can’t take
              it to The UPS store for this method.)
            </li>
          </ul>
          <p>
            If you don’t return your equipment, the DIRECTV equipment return fee
            is $45–$135 depending on the device. So make sure you send back your
            stuff.
          </p>
        </div>
      </div>

      <div className="section direct-tv-premium-channel-and-add-on-costs">
        <div className="head">
          <h2 className="sect-heading">
            DIRECTV <span> premium channel and add-on costs </span>
          </h2>
          <p className="sect-desc">
            For the first three months, DIRECTV includes Max™, SHOWTIME®, STARZ
            and Cinemax® in your service. Unless you have DIRECTV PREMIER™,
            which includes them in the package, these premium channels will cost
            you $54.95 each month after the starting period.
            <br />
            But DIRECTV’s premiums aren’t all movie channels. With a solid
            lineup of special sports passes, there’s something for every sports
            fan. You can pay monthly or purchase the season of whichever sport
            your competitive heart desires (yeah, DIRECTV carries almost all of
            them) in one payment. There aren’t any special savings for doing the
            latter, so listen to your gut on this one.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Premium channels and pricing</h4>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Channel add-ons</th> <th>What it includes</th>{" "}
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Max</td>
                  <td>HBO's awesome streaming service</td>
                  <td>$15.99/mo.</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>CINEMAX</td>
                  <td>Big-name premium channel</td>
                  <td>$10.99/mo.</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>SHOWTIME</td>
                  <td>Indie-films and prestige TV</td>
                  <td>$11.99/mo.</td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>STARZ</td>
                  <td>Thousands of movies and shows</td>
                  <td>$10.99/mo.</td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>MGM+</td>
                  <td>MGM+ channels</td>
                  <td>$5.99/mo.</td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td>MOVIES EXTRA PACK</td>
                  <td>
                    More HD programming, including classic and contemporary
                    movies, short films, documentaries, and musical performances
                  </td>
                  <td>$4.99/mo.</td>
                </tr>
                <tr>
                  <td>7.</td>
                  <td>Outdoor Channel</td>
                  <td>Real-life outdoor adventures airing all day</td>
                  <td>$4.99/mo.</td>
                </tr>
                <tr>
                  <td>8.</td>
                  <td>NBA League Pass</td>
                  <td>All out-of-market NBA games</td>
                  <td>$49.99/half season</td>
                </tr>
                <tr>
                  <td>9.</td>
                  <td>NHL CENTER ICE</td>
                  <td>
                    Up to 40 out-of-market games each week and NHL Network
                    included during the NHL season
                  </td>
                  <td>$39.99/half season</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="below-table">
            Data as of post date. Offers and availability may vary by location
            and are subject to change.
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>DIRECTV late fees</h4>
          <br />
          <p>
            Sometimes unexpected things can stop you from paying your bill on
            time. DIRECTV has a small late fee charge, but it’s not too pricey.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Fee</th> <th>Price</th>
                  <th>What it’s for</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Late Payment Charge</td>
                  <td>$6.25</td>
                  <td>Not paying your bill by the due date</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="below-table">
            Data as of post date. Offers and availability may vary by location
            and are subject to change.
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>DIRECTV cancellation costs</h4>
          <br />
          <p>
            DIRECTV has a two-year contract, and you may be tempted to cancel
            when prices spike in the second year. Heads up—that will cost you a
            pretty penny. If you decide to go through with it, don’t forget to
            return your DVR and receivers, or your cancellation fees will be
            enormous.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Fee</th> <th>Price</th>
                  <th>What it’s for</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Early Termination Fee</td>
                  <td>Up to $480.00 (prorated monthly)</td>
                  <td>
                    Canceling your DIRECTV service before the end of your
                    contract
                  </td>
                </tr>
                <tr>
                  <td>1.</td>
                  <td>Equipment Non-Return Fee</td>
                  <td>$45.00–$135.00</td>
                  <td>Failing to return equipment after you cancel service</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="below-table">
            Data as of post date. Offers and availability may vary by location
            and are subject to change.
          </div>
        </div>
      </div>

      <div className="section direct-tv-blank">
        <div className="head">
          <h2 className="sect-heading">
            <span> Cheapest </span> DIRECTV package
          </h2>
          <p className="sect-desc">
            DIRECTV has a lot of great packages, but if you’re looking for the
            best way to save, go with DIRECTV ENTERTAINMENT. This affordable
            package comes with top channels like CNN, the Disney Channel, HGTV,
            the History Channel, and the USA Network.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={network} alt="" className="mark" />
          <h4>DIRECTV ENTERTAINMENT</h4>
          <br />
          <ul>
            <li>
              · $69.99/mo. for 24 months plus taxes and fees w/ 24-mo. agmt.
              AutoPay and Paperless Bill req’d. Advanced Receiver Service Fee
              $15/mo. is extra and applies.
            </li>
            <li>· 160+ channels</li>
          </ul>
          <hr className="hr" />
          <div className="btn">
            <Link href={"#"}>sign up for xfinity with no contract</Link>
          </div>
        </div>
      </div>

      <div className="section direct-tv-final-take">
        <div className="head">
          <h2 className="sect-heading">
            Final take: <span> mind DIRECTV’s two-year contract </span>
          </h2>
          <p className="sect-desc">
            DIRECTV has few hidden fees to look out for, but it guarantees its
            prices for two years. As long as you’re prepared for that, we won’t
            talk you out of DIRECTV. With its options for sports fans, it’s a
            great choice that’s available across the US.
            <br />
            But if you’re not sold on DIRECTV, we can help you find other TV
            providers in your area. Just enter your zip code below, and we’ll
            take you to the full list:
          </p>
        </div>
        <div className="search-bar">
          <Searchbar />
        </div>
      </div>

      <div className="section direct-tv-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>Hidden Costs of DIRECTV </span> FAQ
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
                <span>{faq === 1 ? "-" : "+"}</span> Why does DIRECTV charge a
                TV access fee?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  The charge is for the use of each receiver, Genie Mini, and
                  DIRECTV Ready TV devices. Before you sign up, check DIRECTV’s
                  promotional offers, which may cover the cost of the first
                  receiver.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={" Why does DIRECTV charge a TV access fee?"}
            cssClass={"faq-content"}
          >
            <p>
              The charge is for the use of each receiver, Genie Mini, and
              DIRECTV Ready TV devices. Before you sign up, check DIRECTV’s
              promotional offers, which may cover the cost of the first
              receiver.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> Does DIRECTV charge for
                equipment?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Yes, when you end your account, you can be charged up to $135
                  per device if you don’t return your equipment in the time
                  defined in your service contract.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" Does DIRECTV charge for equipment?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, when you end your account, you can be charged up to $135 per
              device if you don’t return your equipment in the time defined in
              your service contract.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> How can I get DIRECTV to
                lower my bill?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Contact the DIRECTV customer service department at
                  1-855-387-6898 and use the system prompts to speak to a
                  representative. Explain your circumstances and find out if
                  they have any promotional offers or discounts available.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={" How can I get DIRECTV to lower my bill?"}
            cssClass={"faq-content"}
          >
            <p>
              Contact the DIRECTV customer service department at 1-855-387-6898
              and use the system prompts to speak to a representative. Explain
              your circumstances and find out if they have any promotional
              offers or discounts available.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> Can I cancel DIRECTV and
                sign up again?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Yes, you can cancel your DIRECTV service, but if it is before
                  the end of your contract, you may pay a cancellation fee of up
                  to $480 (prorated monthly). You can sign up again anytime
                  after cancellation, but you may have to wait a while before
                  DIRECTV approves you for new customer deals.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" Can I cancel DIRECTV and sign up again?"}
            cssClass={"faq-content"}
          >
            <p>
              Yes, you can cancel your DIRECTV service, but if it is before the
              end of your contract, you may pay a cancellation fee of up to $480
              (prorated monthly). You can sign up again anytime after
              cancellation, but you may have to wait a while before DIRECTV
              approves you for new customer deals.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> How can I cancel DIRECTV
                without penalty?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  You cannot cancel DIRECTV online or via email, and there’s no
                  guarantee that DIRECTV will waive your cancellation fee. But
                  you can try your luck with its customer retention department
                  at 1-800-228-2020. Use the prompts to speak to a
                  representative.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"5"}
            title={" How can I cancel DIRECTV without penalty?"}
            cssClass={"faq-content"}
          >
            <p>
              You cannot cancel DIRECTV online or via email, and there’s no
              guarantee that DIRECTV will waive your cancellation fee. But you
              can try your luck with its customer retention department at
              1-800-228-2020. Use the prompts to speak to a representative.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span> Does DIRECTV charge a fee
                for not returning equipment?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  There is a DIRECTV equpiment non-return fee. It is $45–$135
                  depending on the device.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"6"}
            title={" Does DIRECTV charge a fee for not returning equipment?"}
            cssClass={"faq-content"}
          >
            <p>
              There is a DIRECTV equpiment non-return fee. It is $45–$135
              depending on the device.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote direct-tv-endnote">
        <div className="endnote-container">
          <Image
            className="quotation-img"
            src={quotationsIcon}
            alt="quotations"
          />
          <h4>Methodology</h4>
          <p>
            The team of TV experts at CableTV.com regularly research and test TV
            services like DIRECTV in order to give our readers the most accurate
            information on plans, pricing, fees, features, and functionality.
            For more on our process, see our How We Rank page.
          </p>
          <h4>Related articles</h4>
          <ul>
            <li>
              <span className="link">
                <Link href={"#"}>· DISH Review</Link>{" "}
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"#"}>· Definitive Review of the DISH Hopper 3</Link>{" "}
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"#"}>· DISH vs. DIRECTV</Link>{" "}
              </span>
            </li>
            <li>
              <span className="link">
                <Link href={"#"}>· Best TV Providers</Link>{" "}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <Newsletter /> */}
    </div>
  );
};

export default DirectTvHiddenCosts;
