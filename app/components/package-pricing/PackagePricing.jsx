import React from "react";
import "./package-pricing.scss";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";

const PackagePricing = () => {
  return (
    <div className="package-pricing">
      <div className="container">
        <div className="column">
          <h2>Connect plan</h2>
          <p>
            The Xfinity Connect internet plan gives you reliable speeds at a
            great price. If your home has one or two internet users, this is a
            good, low cost internet package.
          </p>
          <hr/>
          <h3>75<small>Mbps</small></h3>
          <p>starting from $19.99–$30.00/mo.</p>
          <ul>
            <li><FaCheck className="icon" /> Sharing photos</li>
            <li><FaCheck className="icon" /> Watching videos</li>
            <li><FaCheck className="icon" /> Shopping online</li>
            <li><FaCheck className="icon" /> Audio conferencing</li>
          </ul>
          <div className="btn">
            <Link href={"#"}>get Connect</Link>
          </div>
        </div>
        <div className="column">
          <h2>Connect More plan</h2>
          <p>
            The Xfinity Connect More internet plan is fast enough to support a
            couple folks streaming HD movies. This is a great package for an
            average-sized household.
          </p>
          <hr/>
          <h3>200<small>Mbps</small></h3>
          <p>starting from $25.00-$35.00/mo.</p>
          <ul>
            <li><FaCheck className="icon" />  Watching videos</li>
            <li><FaCheck className="icon" />  Video conferencing</li>
            <li><FaCheck className="icon" />  Gaming online</li>
            <li><FaCheck className="icon" />  Streaming on 2 to 3 devices</li>
          </ul>
          <div className="btn">
            <Link href={"#"}>get Connect More</Link>
          </div>
        </div>
        <div className="column">
          <h2>Gigabit</h2>
          <p>
            The Xfinity Connect More internet plan is fast enough to support a
            couple folks streaming HD movies. This is a great package for an
            average-sized household.
          </p>
          <hr/>
          <h3>1200<small>Mbps</small></h3>
          <p>starting from $25.00-$35.00/mo.</p>
          <ul>
            <li><FaCheck className="icon" /> Video conferencing</li>
            <li><FaCheck className="icon" /> Gaming online</li>
            <li><FaCheck className="icon" /> Streaming on 3 or more devices</li>
            <li><FaCheck className="icon" /> Sharing large files</li>
          </ul>
          <div className="btn">
            <Link href={"#"}>get Gigabit Extra</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagePricing;
