import Link from "next/link";
import { Logo } from "./Logo";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-3">
            <div>
              <Logo className="logobg" />
              <br />
              <span>
                Questions? Reach us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <h3>+1 801 234 5678</h3>
              <br />
              <button href="/contact" className="button-primary">
                <Link href="/contact">Contact us</Link>
              </button>
            </div>
            <ul className="footer-link">
              <h3>COMPANY</h3>
              <li>
                <Link href="/about">About Hozon</Link>
              </li>
              <li>
                <Link href="/team">Our team</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/blogs">Blog</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className="connect">
                <li>
                  <Link href="https://facebook.com">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="https://behance.com">
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="https://instagram">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="https://linkedin.com">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2023 Hozon. All Rights Reserved.</span>
            </div>
            <div className="connect">
              <span>Privacy Notice</span>
              <span> &nbsp; | &nbsp; </span>
              <span>Terms & Conditions</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
