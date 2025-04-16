// import React, { useState } from "react";
import "./xfinity-hidden-costs.scss";
// import SubNav from "../../components/sub-nav/SubNav";
import { xfinityNavLinks } from "../../assets/data/navLinks/xfinityNavLinks";
import PackageCard from "../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../assets/data/bestOffersTemporary";
import quotationsIcon from "../../assets/images/quotations.svg";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import Link from "next/link";
import Image from "next/image";
// import Newsletter from "../../components/newsletter/Newsletter";
import quotations from "../../assets/images/quotations.svg";
import Accordion from "@/app/components/accordion/Accordion";

export const metadata = {
  title: "Hidden Costs Of Xfinity: Fees, Installation Costs, And Price Increases"
};

const XfinityHiddenCosts = () => {
  // const [faq, setFaq] = useState();

  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="xfinity-hidden-costs">
      {/* <SubNav links={xfinityNavLinks} /> */}
      <div className="xfinity-hidden-costs-hero global-inner-hero">
        <h1>
          Hidden Costs Of Xfinity: Fees, Installation Costs, And Price Increases
        </h1>
        <p>
        Find out about the increased prices at the end of the year, charges for equipment, and extra costs for using too much data with Xfinity. This way, you won't be caught off guard when you see your next bill.
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
          There are expenses in providing Xfinity’s many channels and on-demand shows, but most customers only think about the package price they see advertised. However, when they receive their bill, they might be surprised by extra costs they didn’t expect. Xfinity fees aren’t terrible, but they can become significant if you’re not cautious. We'll clarify each hidden fee so you won't be caught off guard when you get your next Xfinity bill.
          </p>
          <br />
        </div>
      </div>
 
      <StickyHeader />

      <div className="section important-links">
        <div className="head">
          <h2 className="sect-heading">
            Jump to <span>important links</span>
          </h2>
          <p className="sect-desc">
          Quickly find the hidden costs you need to know about.
          </p>
        </div>

        <div className="all-links">
          <Link href={"#"}>hidden cost of xfinity tV plans</Link>
          <Link href={"#"}>hidden costs of xfinity internet plans</Link>
        </div>
      </div>

      <div className="section xfinity-hidden-costs-specs-feature">
        <div className="head">
          <h2 className="sect-heading">
            Hidden costs <span> of Xfinity TV plans</span>
          </h2>
          <p className="sect-desc">
          Here's the table listing hidden costs and fees, so you can easily track any unexpected charges.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Hidden costs of Xfinity TV plans</h4>
          <p className="after-heading">
            If you love bundling, why stop at Xfinity TV, internet, and home
            phone when you can have Xfinity cell phone service too?
            <br />
            Xfinity Mobile is only for Xfinity internet customers, and it offers
            a couple of middle-of-the-road cell phone plans—nothing too flashy.
            You can also get excellent bundle deals when you combine Xfinity
            Mobile with an Xfinity internet plan and an Xfinity Flex. Check out
            our{" "}
            <span className="link">
              <Link href={"#"}> Xfinity Mobile</Link>
            </span>{" "}
            review to learn more about the service.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Fees</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1 </td>
                  <td>Broadcast TV fee</td>
                  <td>Up to $26.85/mo.</td>
                </tr>
                <tr>
                  <td>2 </td>
                  <td>Regional sports fee</td>
                  <td>Up to $14.45/mo.</td>
                </tr>
                <tr>
                  <td>3 </td>
                  <td>Professional installation</td>
                  <td>$100.00.</td>
                </tr>
                <tr>
                  <td>4 </td>
                  <td>Self-installation kit</td>
                  <td>Up to $39.99</td>
                </tr>
                <tr>
                  <td>5 </td>
                  <td>Reactivation fee</td>
                  <td>$6.00</td>
                </tr>
                <tr>
                  <td>6 </td>
                  <td>DVR service fee</td>
                  <td>150 hours for $10.00/mo.</td>
                </tr>
                <tr>
                  <td>7 </td>
                  <td>HD technology fee</td>
                  <td>$9.95/mo.</td>
                </tr>
                <tr>
                  <td>8 </td>
                  <td>Additional TV service per TV</td>
                  <td>$8.50/mo. ea.</td>
                </tr>
                <tr>
                  <td>9 </td>
                  <td>Max® subscription</td>
                  <td>$15.99/mo.</td>
                </tr>
                <tr>
                  <td>10 </td>
                  <td>SHOWTIME® subscription</td>
                  <td>$12.00/mo.</td>
                </tr>
                <tr>
                  <td>11 </td>
                  <td>CINEMAX® subscription</td>
                  <td>$12.00/mo.</td>
                </tr>
                <tr>
                  <td>12 </td>
                  <td> STARZ® subscription</td>
                  <td>$8.99/mo.</td>
                </tr>
                <tr>
                  <td>13 </td>
                  <td>Late payment fee</td>
                  <td>$10.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity TV promotional cost: $50.00–$80.00/mo.*</h4>
          <p className="after-heading">
          Just like many other companies, Xfinity gives special prices for a short time when you join one of their new packages. Prices can change from time to time and can be different depending on where you live. You can check our review of Xfinity TV to see all the prices, but generally, you might see something like this:{" "}
            <span className="link">
              <Link href={"#"}> Xfinity TV review </Link>
            </span>{" "}
            for a full list, but you’ll probably be looking at something like
            this:
          </p>
          <br />
          <ul>
            <li>· Popular TV: $50.00–$60.00/mo.* for 125+ channels</li>
            <li>· Ultimate TV: $68.50–$80.00/mo.* for 185+ channels</li>
          </ul>
          <p className="below-table">
            *Price varies by area. For the first 12 months with no term
            agreement.
          </p>
          <p className="after-heading">
            But, like the asterisk says, Xfinity prices are only guaranteed for
            the first 12 months. Then Xfinity will switch you over to what it
            calls its “regular rate.”
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>
            Xfinity price increase after promo period: up to an additional
            $30/mo.
          </h4>
          <p className="after-heading">
          The extra money you might have to pay depends on the type of package you have and where you live. Usually, it will be somewhere between $20 and $30 more each month. You can check the exact amount for your plan in the offer terms when you sign up—Xfinity calls it the "regular rate." But don't worry, you might not have to stick to Xfinity's new price after 12 months. I had success getting in touch with Xfinity about a price increase and saved money by agreeing to a new contract for a year. It's worth contacting Xfinity using our customer service guide to see if you can get a new deal once the promotional period is over.{" "}
            <span className="link">
              <Link href={"#"}>customer service guide </Link>
            </span>{" "}
            to see if you can get a new deal after the promo period ends.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Taxes, regulatory fees, and more: vary by area and package</h4>
          <p className="after-heading">
          One extra cost that’s often hidden in the fine print is taxes. The amount you have to pay depends on the plan you pick and where you live. It’s usually not a lot, but it can be annoying to see it on your bill if you weren’t expecting it.
Regulatory fees are another small charge you’ll probably notice at the end of your bill. These come from government-required fees on the provider, and to cover the costs, Xfinity includes part of it in what you pay. Xfinity, sometimes sharing isn't nice.
You might also need to pay different service fees linked to various programming packages. Depending on the channels and services you choose, you might see charges each month for broadcast TV fees, regional sports network fees, and others.{" "}
            <span className="link">
              <Link href={"#"}>broadcast TV fees, regional sports network </Link>
            </span>{" "}
            fees, and more.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity installation fees: $100.00 professional installation</h4>
          <p className="after-heading">
          Xfinity usually charges a $100.00 fee for a professional installation, but it's stopped in-person installations in some places because of COVID-19. They also offer a self-installation kit for $15.00. If you want it shipped quickly, it costs $29.95.
You can choose the Self-Install Plus option for $39.99, where an Xfinity technician will check your home's outside connection and help with your self-installation. If you cancel your service and want to turn it back on later, Xfinity charges a $6.00 reactivation fee. For more information about Xfinity installation, visit our installation guide
            <span className="link">
              <Link href={"#"}>installation guide. </Link>
            </span>
          </p>
        </div>
        <div className="endnote endnote-start">
          <div className="endnote-container">
            <Image src={quotationsIcon} alt="quotations" />
            <h4>Cheapest Xfinity package we recommend</h4>
            <p>
              To get the best bang for your buck with Xfinity TV, we recommend
              the Popular TV package. This TV-only package gets you 140+
              channels for $50.00 or $60.00 per month for 12 months, depending
              on your area.
            </p>
            <br />
            <div className="btn">
              <Link href={"#"}>view xfinity tv plans</Link>
            </div>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity equipment fees: $17.45/mo. for HD DVR</h4>
          <p className="after-heading">
            Xfinity’s charges $8.50 monthly for its{" "}
            <span className="link">
              <Link href={"#"}>X1 DVR system. </Link>
            </span>{" "}
            Plus, it tacks on a mandatory $9.95 per month HD technology fee and
            an optional $10.00 per month for 150 hours of storage.
            <br />
            Of course, you could just go with the included TV box, which comes
            at no extra charge. But you won’t be able to record your shows, or
            even watch in HD—which affects the visual quality of your favorite
            shows. And if you want to add TV service to other rooms, that’s
            another $8.50 per month, per TV. Outfitting a home with TV service
            when you have lots of televisions can end up costing you a bunch.
            <br />
            Check out our{" "}
            <span className="link">
              <Link href={"#"}> Xfinity equipment review</Link>
            </span>{" "}
            to learn more about these devices.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Premium channel fees: Max for $15.99/mo.</h4>
          <p className="after-heading">
          With Xfinity, you can add special TV channels to your cable plan for more money. Remember, these costs are on top of what you pay for your regular cable. Some Xfinity plans already include some of these channels. Here are the prices for adding them: 
Max (formerly HBO Max): $15.99 per month 
CINEMAX: $12.00 per month 
SHOWTIME: $12.00 per month 
STARZ: $8.99 per month 
MGM+™: $5.99 per month 
THE MOVIE CHANNEL (TMC): $12.00 per month 
Not sure if they’re worth it? Check out our 2022 streaming review to find out.
          </p>
          <ul>
            <li>· Max (formerly HBO Max): $15.99/mo.</li>
            <li>· CINEMAX: $12.00/mo.</li>
            <li>· SHOWTIME: $12.00/mo.</li>
            <li>· STARZ: $8.99/mo.</li>
            <li>· MGM+™: $5.99/mo.</li>
            <li>· THE MOVIE CHANNEL (TMC): $12.00/mo.</li>
          </ul>
          <p className="after-heading">
            Wondering which of these are actually worth the extra cash? Our{" "}
            <span className="link">
              <Link href={"#"}>2022 streaming </Link>
            </span>
            review has the run-down.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Late payment fee: $10 per missed payment</h4>
          <p className="after-heading">
          If you're late paying your Xfinity bill, they add a $10 charge. They give you up to two weeks before they stop your service, but they add the fee right away. If you're struggling, it's good to call them (check our Xfinity customer service guide to find out how) to ask for more time before they cut your service.{" "}
            <span className="link">
              <Link href={"#"}>Xfinity customer service guide </Link>
            </span>
            ) to see if you can get an extended grace period.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>
            Cancellation and early termination fees: may vary by area and plan
          </h4>
          <p className="after-heading">
          If you want to stop, change, move, or pause your Xfinity service, our Xfinity cancellation guide has all the information you need. Xfinity doesn't give clear details about cancellation and early termination fees (ETF), so you'll need to call them to find out what you'll have to pay. Xfinity offers both plans with a contract and plans without one, so not everyone will have to pay ETFs.
If you end a contract or service agreement early, you'll have to pay a fee. The exact amount of this fee depends on how much time is left on your contract, and it decreases by a certain amount each month.
You can avoid ETFs by choosing a plan without a contract. However, these plans cost about $20 more per month compared to the ones with a contract, so there's still an expense involved. Discuss with your Xfinity representative to figure out which option is best for you.
3.5
          </p>
        </div>
      </div>

      <div className="section xfinity-hidden-costs-internet-plans">
        <div className="head">
          <h2 className="sect-heading">
            <span> Hidden costs</span> of Xfinity internet plans
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Nunc sollicitudin sed magna
            ac. Tristique id turpis amet sem vitae faucibus auctor in faucibus.
            Non id non mi sed. Mattis consectetur euismod ac libero viverra
            neque dictum laoreet non.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Hidden costs of Xfinity internet plans</h4>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Fees</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1 </td>
                  <td>Professional installation</td>
                  <td>$100.00</td>
                </tr>
                <tr>
                  <td>2 </td>
                  <td>Self-installation kit</td>
                  <td>$15.00</td>
                </tr>
                <tr>
                  <td>3 </td>
                  <td>Reactivation fee</td>
                  <td>$6.00</td>
                </tr>
                <tr>
                  <td>4 </td>
                  <td>Late payment fee</td>
                  <td>$10.00</td>
                </tr>
                <tr>
                  <td>5 </td>
                  <td>xFi Gateway</td>
                  <td>$14.00/mo.</td>
                </tr>
                <tr>
                  <td>6 </td>
                  <td>Xfinity Flex</td>
                  <td>$0.00 (until April 2023)</td>
                </tr>
                <tr>
                  <td>7 </td>
                  <td>Data overage fee</td>
                  <td>$10 per 50 GB (up to $100.00/mo.)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity internet promotional cost: $19.99–$80.00/mo.*</h4>
          <p className="after-heading">
          Xfinity has different internet packages that cost between $19.99 to $80.00 per month. There's also one package that's $299.95 per month, but it's not available everywhere.
Most packages give you a choice of having a contract for one year or no contract at all. In both cases, there's a special price for the first year, and then the price goes up.
Here are the packages:
Connect: Costs $19.99 to $30.00 per month for 75 Mbps.
Connect More: Costs $25.99 to $35.00 per month for 200 Mbps.
Fast: Costs $35.00 to $55.00 per month for 400 Mbps.
Superfast: Costs $60.00 to $65.00 per month for 800 Mbps.
Gigabit/Ultrafast: Costs $60.00 to $75.00 per month for 1,000 Mbps.
Gigabit Extra: Costs $70.00 to $80.00 per month for 1,200 Mbps.
          </p>
          <ul>
            <li>· Connect: $19.99/mo.–$30.00/mo.* for 75 Mbps</li>
            <li>· Connect More: $25.99/mo.–$35.00* for 200 Mbps</li>
            <li>· Fast: $35.00/mo.–$55.00/mo.* for 400 Mbps</li>
            <li>· Superfast: $60.00–$65.00/mo.* for 800 Mbps</li>
            <li>· Gigabit/Ultrafast: $60.00/mo.–$75.00/mo.* for 1,000 Mbps</li>
            <li>· Gigabit Extra: $70.00/mo.–$80.00/mo.* for 1,200 Mbps</li>
          </ul>
          <p className="below-table">
            *Varies by region. For the first 12 months. **with no term agreement
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>
            Xfinity price increase after promo period: up to an additional
            $30/mo.
          </h4>
          <p className="after-heading">
          After the promo period ends, how much more you pay for Xfinity internet depends on the plan you pick. Usually, it goes up by about $15 to $30 each month, like with TV.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Taxes, regulatory fees, and more: vary by area and package</h4>
          <p className="after-heading">
          Xfinity internet plans usually don’t have extra taxes and unnecessary fees like TV plans do. The Internet Tax Freedom Act stops governments from charging taxes on internet service. However, if you combine internet with TV, you'll still pay taxes and fees for TV.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>
            Xfinity installation fees: $100.00 for professional installation,
            $15.00 for self-installation kit
          </h4>
          <p className="after-heading">
          Xfinity offers a self-install kit for internet, which costs $15.00. If you want it delivered faster, it's $29.95. If you prefer professional help, it's $100.00, the same as for TV. Sometimes, Xfinity might not charge for installation if there's a special offer when you sign up. If you get both TV and internet together, you only pay one installation fee. In some places, certain bundles might include free professional installation, but it varies, so ask your agent when you sign up. You can find more details about installation in our Xfinity installation guide
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>
            Xfinity cancellation and early termination fees: may vary by area
            and plan
          </h4>
          <p className="after-heading">
          If you pick a package with a contract, you’ll have to pay extra if you end your service before the contract is up. Just like with Xfinity TV, the fees depend on how much time is left on your contract. Cancelling 10 months early will cost more than cancelling just two months early.
          </p>
          <p className="after-heading">
            As with Xfinity TV, the exact fees vary, but they reflect the
            remaining time in your contract. The cost of cancelling 10 months
            early will be much higher than cancelling only two months early, for
            example.
          </p>
          <div className="endnote endnote-start">
            <div className="endnote-container">
              <Image src={quotationsIcon} alt="quotations" />
              <h4>Personal cancellation experience:</h4>
              <p>
                This is Rachel—your favorite writer—here to talk about my own
                experience with cancelling Xfinity early. I thought I was going
                to be living in my condo for a while longer, so I signed up for
                a tremendous two-year deal with Xfinity.
                <br />
                But then I decided to move, and I wasn’t sure I could get
                Xfinity in my new place. So I called customer service and found
                out that the cancellation fee for my internet contract would be
                $120—that’s $10 per remaining month. If I waited a month, it
                would go down to $110.
                <br />I can’t guarantee everyone’s Xfinity cancellation fee will
                be $10 per remaining month since Xfinity doesn’t expressly list
                this amount. But that sure is a bunch of money, and I’m glad I
                don’t have to pay it—I’ll be moving somewhere with Xfinity
                coverage, so I can take my plan with me.
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity equipment fee: up to $14/mo. for xFi Gateway</h4>
          <p className="after-heading">
            With your internet plan, you can use your own modem and router.
            (Find the perfect ones for you with our{" "}
            <span className="link">
              <Link href={"#"}> list of compatible modems</Link>
            </span>
            and guide to the fastest routers.) But if you want to go with
            Xfinity’s modem/router, the xFi Gateway, you’ll need to pay as much
            as $14 per month
            <br />
            We recommend you poke around with a few packages before you decide.
            If you’d rather not pay for how much Xfinity charges for its modem,
            Xfinity has been known to include a modem/router or discount the{" "}
            <span className="link">
              <Link href={"#"}>xFi Gateway</Link>
            </span>
            when paired with some more expensive packages.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity late payment fees: $10 per missed payment</h4>
          <p className="after-heading">
          As mentioned in the TV part earlier, if Xfinity customers don’t pay on time, they may have to pay a $10 late fee. Xfinity doesn’t give any extra time for late payments, but they do allow two weeks to pay the late fee before thinking about stopping your service. If you know you’ll be late with your payment because things are tough, you can call beforehand to try and change the due date.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>How to cancel Xfinity service</h4>
          <p className="after-heading">
            The easiest way to cancel Xfinity service is to fill out a
            <span className="link">
              <Link href={"#"}>cancellation form online. </Link>
            </span>
            That way you don’t have to deal with pesky customer service
            representatives who might try to get you to stay.
            <br />
            That said, if you go the rounds with customer service, they may cut
            you a better deal. If this sounds appealing to you, contact Xfinity
            online to find out your options.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Xfinity data overage fees: $10 per 50 GB block</h4>
          <p className="after-heading">
            Most internet plans come with a 1.2 TB data cap. That means you can
            use up to 1.2 TB of data each month, after which you’ll be charged a
            fee.
            <br />
            Xfinity charges a standard $10 for every 50 GB block of data over
            the cap—even if you don’t use the whole 50 GB block. But it will
            charge you only up to $200 in these overage fees—oh wait, no, that’s
            nothing to be excited about because it’s still a ton of money.
            <br />
            Most people will probably never reach the data cap—1.2 TB is a good
            bit of data. Still, heavy downloaders or streamers who are afraid of
            running into these overage charges should consider buying the $50
            add-on for unlimited data or springing for the unlimited Gigabit Pro
            package.
          </p>
        </div>
        <div className="endnote endnote-start">
          <div className="endnote-container">
            <Image src={quotationsIcon} alt="quotations" />
            <h4>Cheapest Xfinity internet package we recommend</h4>
            <p>
              ecommend the Connect More plan for low-cost Xfinity internet. This
              package offers 200 Mbps speeds for $39.99 per month for 12 months
              with a one-year contract.
              <br />
              If you’d prefer to bundle internet and TV together, the Popular
              Double Play bundle is a good, low-cost option. It offers 125+
              channels and 400 Mbps internet download speeds for $110.70 per
              month for 12 months with a one year agreement.
            </p>
            <br />
            <div className="btn">
              <Link href={"#"}>view xfinity bundle plans</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section xfinity-hidden-cost-review-faq">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span>fees and hidden costs </span>FAQ
          </h2>

          <p className="sect-desc">
            TL;DR? Xfinity kills it. For more detailed info on all Xfinity
            equipment and services, see our comprehensive Xfinity equipment
            guide.
          </p>
        </div>

        <div className="faq-wrapper">
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(1)}>
                <span>{faq === 1 ? "-" : "+"}</span> What are Xfinity tV
                packages?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Xfinity TV packages by Comcast come through a cable connection
                  with up to 185+ channels. Most packages also include 20 hours
                  of DVR storage via the{" "}
                  <span className="link">
                    <Link href={"#"}>X1 DVR box, </Link>
                  </span>{" "}
                  plus the Xfinity Stream app.
                </p>
                <ul>
                  <li>· Choice TV: $20.00–$25.00/mo., 10+ channels</li>
                  <li>· Popular TV: $50.00–$60.00/mo., 125+ channels</li>
                  <li>· Ultimate TV: $68.50–$80.00/mo., 185+ channels</li>
                </ul>
                <p>
                  Check to see what Xfinity TV packages are available in your
                  area.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"1"}
            title={"What are Xfinity TV packages?"}
            cssClass={"faq-content"}
          >
          <p>
            Xfinity TV packages by Comcast come through a cable connection
            with up to 185+ channels. Most packages also include 20 hours
            of DVR storage via the{" "}
            <span className="link">
              <Link href={"#"}>X1 DVR box, </Link>
            </span>{" "}
            plus the Xfinity Stream app.
          </p>
          <ul>
            <li>· Choice TV: $20.00–$25.00/mo., 10+ channels</li>
            <li>· Popular TV: $50.00–$60.00/mo., 125+ channels</li>
            <li>· Ultimate TV: $68.50–$80.00/mo., 185+ channels</li>
          </ul>
          <p>
            Check to see what Xfinity TV packages are available in your
            area.
          </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What is the cheapest
                Xfinity TV package?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  The cheapest Xfinity internet plan is 75 Mbps for $19.99 in
                  the West region, 75 Mbps for $30.00 in the Central region, and
                  200 Mbps for $25.00/mo. in the Northeast region.
                  Unfortunately, plan pricing and naming varies by region.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"2"}
            title={"What is the cheapest Xfinity TV package?"}
            cssClass={"faq-content"}
          >
          <p>
            The cheapest Xfinity internet plan is 75 Mbps for $19.99 in
            the West region, 75 Mbps for $30.00 in the Central region, and
            200 Mbps for $25.00/mo. in the Northeast region.
            Unfortunately, plan pricing and naming varies by region.
          </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> Can you get xfinity tV
                without cable?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Sorry, after April 2023, the{" "}
                  <span className="link">
                    <Link href={"#"}>Xfinity Flex </Link>
                  </span>{" "}
                  won't be free anymore. If you don't mind paying whatever its
                  new price will be, you can request it when you sign up for
                  your Xfinity internet plan (although your customer service rep
                  will probably railroad you into getting it before you get a
                  word in edgewise).
                  <br />
                  However, if you get an{" "}
                  <span className="link">
                    <Link href={"#"}>Xfinity TV plan</Link>
                  </span>
                  , you're not eligible for an Xfinity Flex. That's okay-ish
                  since you'll get the X1 DVR instead. Unfortunately, the X1
                  falls into the non-free category as well due to its $14.95 per
                  month service fee.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"3"}
            title={"Can you get xfinity TV without cable?"}
            cssClass={"faq-content"}
          >
          <p>
            Sorry, after April 2023, the{" "}
            <span className="link">
              <Link href={"#"}>Xfinity Flex </Link>
            </span>{" "}
            won't be free anymore. If you don't mind paying whatever its
            new price will be, you can request it when you sign up for
            your Xfinity internet plan (although your customer service rep
            will probably railroad you into getting it before you get a
            word in edgewise).
            <br />
            However, if you get an{" "}
            <span className="link">
              <Link href={"#"}>Xfinity TV plan</Link>
            </span>
            , you're not eligible for an Xfinity Flex. That's okay-ish
            since you'll get the X1 DVR instead. Unfortunately, the X1
            falls into the non-free category as well due to its $14.95 per
            month service fee.
          </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> what is the best package to
                get on xfinity tV?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Comcast and Xfinity are the same thing-you can't trip us up
                  with your trick question!
                </p>
                <p>
                  In 2010, Comcast started using Xfinity as its trade name for
                  TV, internet, and phone services.
                  <br />
                  And as part of Comcast, Xfinity has built-in relationships
                  with Comcast's other products, such as NBCUniversal. That's
                  one of the reasons you'll get the{" "}
                  <span className="link">
                    <Link href={"#"}>Peacock Premium</Link>
                  </span>{" "}
                  streaming service for free with your Xfinity cable TV service.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"4"}
            title={"What is the best package to get on xfinity TV?"}
            cssClass={"faq-content"}
          >
          <p>
            Comcast and Xfinity are the same thing-you can't trip us up
            with your trick question!
          </p>
          <p>
            In 2010, Comcast started using Xfinity as its trade name for
            TV, internet, and phone services.
            <br />
            And as part of Comcast, Xfinity has built-in relationships
            with Comcast's other products, such as NBCUniversal. That's
            one of the reasons you'll get the{" "}
            <span className="link">
              <Link href={"#"}>Peacock Premium</Link>
            </span>{" "}
            streaming service for free with your Xfinity cable TV service.
          </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span>can you just get xfinity tV?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  The best Xfinity deal is Superfast Internet + Ultimate TV,
                  which provides 800 Mbps download speeds and 185+ cable
                  channels. Your savings may vary by region, though, and
                  depending on where you live, it could cost $115-$120 a month.
                </p>
                <p>
                  For more on Xfinity's money-saving double plays, head over to
                  our{" "}
                  <span className="link">
                    <Link href={"#"}>Xfinity bundles review</Link>
                  </span>
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"5"}
            title={"Can you just get xfinity TV?"}
            cssClass={"faq-content"}
          >
          <p>
            The best Xfinity deal is Superfast Internet + Ultimate TV,
            which provides 800 Mbps download speeds and 185+ cable
            channels. Your savings may vary by region, though, and
            depending on where you live, it could cost $115-$120 a month.
          </p>
          <p>
            For more on Xfinity's money-saving double plays, head over to
            our{" "}
            <span className="link">
              <Link href={"#"}>Xfinity bundles review</Link>
            </span>
          </p>
          </Accordion>

          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(6)}>
                <span>{faq === 6 ? "-" : "+"}</span>what channels are in the
                xfinity’s basic package?
              </h3>

              <div className={`faq-content ${faq === 6 ? "show" : ""}`}>
                <p>
                  According to our{" "}
                  <span className="link">
                    <Link href={"#"}>customer satisfaction survey,</Link>
                  </span>{" "}
                  62% of Xfinity customers are satisfied with their internet
                  service. In addition, 69% of Xfinity customers are satisfied
                  with their internet speed, tying it for first place with
                  Verizon. Cable service will always be dependent on how heavy
                  usage is in your network, so for more reliable speeds, we
                  recommend{" "}
                  <span className="link">
                    <Link href={"#"}>fiber internet</Link>
                  </span>
                  if you have the option.
                </p>
              </div>
            </div>
          </div> */}

          <Accordion
            id={"6"}
            title={"What channels are in the xfinity’s basic package?"}
            cssClass={"faq-content"}
          >
          <p>
            According to our{" "}
            <span className="link">
              <Link href={"#"}>customer satisfaction survey,</Link>
            </span>{" "}
            62% of Xfinity customers are satisfied with their internet
            service. In addition, 69% of Xfinity customers are satisfied
            with their internet speed, tying it for first place with
            Verizon. Cable service will always be dependent on how heavy
            usage is in your network, so for more reliable speeds, we
            recommend{" "}
            <span className="link">
              <Link href={"#"}>fiber internet</Link>
            </span>
            if you have the option.
          </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote intertnet-review-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Methodology:</h4>
          <p>
            Our experts poured over Xfinity cable TV and internet pricing
            information for multiple regions to uncover hard-to-find fees. For
            more information on our methodology, check out our{" "}
            <span className="link">
              <Link href={"#"}>How We Rank </Link>
            </span>{" "}
            page.
          </p>
          <h4>Related articles</h4>
          <ul>
            <li>
              <span className="link">
                <Link href={"#"}>· Hidden Costs of Spectrum </Link>
              </span>
            </li>
            <li>
              {" "}
              <span className="link">
                <Link href={"#"}>· Hidden Costs of AT&T</Link>
              </span>
            </li>
            <li>
              {" "}
              <span className="link">
                <Link href={"#"}>· Hidden Costs of Cox</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* <Newsletter /> */}
    </div>
  );
};

export default XfinityHiddenCosts;
