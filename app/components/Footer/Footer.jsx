import logo from "../../assets/images/logo.png";
import "./footer.scss";
import Searchbar from "../searchbar/Searchbar";
import Link from 'next/link'
import Image from 'next/image'
import facebookIcon from "../../assets/images/facebook.png";
import instaIcon from "../../assets/images/Insta.png";
import twitterIcon from "../../assets/images/twitter.png";
import linkedInIcon from "../../assets/images/linkedIn.png";

const Footer = () => {
  return (
    <div className='main-footer'>
        <div className="footer-1">
          <Link href="/" className="logo">
            <Image
                  src={logo}
                  alt="logo"/>
          </Link>
          <div className="form">
            <Searchbar />
          </div>
          <p>Connecting you with the best local providers for your specific needs.</p>
        </div>
        <div className="footer-2">
          <div className="tv-providers">
            <h2>TV Providers</h2>
            <div className="footer-links">
              <Link href="/">Xfinity</Link>
              <Link href="/">Spectrum</Link>
              <Link href="/">Dish</Link>
              <Link href="/">Optimum</Link>
              <Link href="/">Cox</Link>
            </div>
          </div>
          <div className="internet-providers">
            <h2>Internet Providers</h2>
            <div className="footer-links">
              <Link href="/">Spectrum</Link>
              <Link href="/">Verizon</Link>
              <Link href="/">Optimum</Link>
              <Link href="/">Xfinity</Link>
              <Link href="/">AT&T</Link>
            </div>
          </div>
          <div className="local">
          <h2>Local</h2>
            <div className="footer-links">
              <Link href="/">TV & Internet in LA</Link>
              <Link href="/">TV & Internet in New York</Link>
              <Link href="/">TV & Internet in Atlanta</Link>
              <Link href="/">TV & Internet in Houston</Link>
              <Link href="/">TV & Internet in Chicago</Link>
            </div>
          </div>
        </div>
        <div className="footer-3">
          <div className="bottom-left">
            <p>© 2024 Local Cable Internet Phone. All rights reserved.</p>
            <div className="bottom-links">
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Services</Link>
              <Link href="/">Cookies Settings</Link>
            </div>
          </div>
          <div className="bottom-right">
            <Image
                    src={facebookIcon}
                    alt="logo"/>
            <Image
                    src={instaIcon}
                    alt="logo"/>
            <Image
                    src={twitterIcon}
                    alt="logo"/>
            <Image
                    src={linkedInIcon}
                    alt="logo"/>
          </div>
        </div>
    </div>
  )
}

export default Footer