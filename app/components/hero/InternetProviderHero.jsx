import React from 'react'
import "./hero.scss";
import heroSideimg from "../../assets/images/internet-provider/hero.png";
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Discover the Fastest Internet Providers in Texas</h1>
                <p>Are you looking for the best internet service provider in Texas? We present you with the plans and pricing of Texas internet providers. Check out the speed, flexibility, and accessibility you require, whether working remotely from a ranch in West Texas, streaming in Austin, or gaming in Houston.</p>
            </div>
            <div className="hero-sideimg">
                <Image src={heroSideimg} alt="what localcableinternetphone provides" />
            </div>
        </div>
    )
}

export default Hero;