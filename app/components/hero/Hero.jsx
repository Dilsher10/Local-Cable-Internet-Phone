import React from 'react'
import "./hero.scss";
import heroSideimg from "../../assets/images/home-page/hero-sideimg.png";
import Searchbar from '../searchbar/Searchbar.jsx';
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-content">
            <h1>Explore Fast and Reliable Internet + Cable TV Providers Nearby</h1>
            <p>Enter your ZIP or Explore by State to Find the Best Services in Your Area.</p>
            <div className="form">
                <Searchbar />
            </div>
        </div>
        <div className="hero-sideimg">
            <Image src={heroSideimg} alt="what localcableinternetphone provides" />
        </div>
    </div>
  )
}

export default Hero