import { BsTiktok, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-gray-800 text-white p-1 lg:p-6 md:p-10">
      <div className="container mx-auto">
        {/* Top Links Section */}

        <nav className="grid md:flex lg:flex gap-3 text-xl">
          <div className="">
            <Link to='/about'><a className="link link-hover">ABOUT</a></Link>
            <a className="link link-hover mx-4">GIFT CARDS</a>
            <a className="link link-hover">CAREERS</a>
          </div>
          <div>
            <a className="link link-hover mr-4">WINGBLAST CHARITIES</a>
          </div>
          <div>
            <a className="link link-hover">CONTACT US</a>
          </div>
        </nav>
        {/* Secondary Links Section */}
        {/* <nav className="grid grid-cols-2 gap-1 mt-4 text-center text-xs sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-11 justify-center"> */}
        <nav className="flex flex-wrap justify-center gap-4">
          <a className="link link-hover">Cookies Settings</a>
          <a className="link link-hover">Promotions & Offers</a>
          <Link to='/termsofuser'><a className="link link-hover">Terms Of User</a></Link>
          <Link to='/privacy'><a className="link link-hover">Privacy</a></Link>
          <a className="link link-hover">Sitemap</a>
          <a className="link link-hover">Accessibility</a>
          <a className="link link-hover">Own a Wingblast</a>
          <a className="link link-hover">Nutritional Info</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">California Privacy</a>
          <a className="link link-hover">Do Not Sell My Info</a>
        </nav>

        {/* Divider */}
        <span className="h-[1px] my-4 bg-white w-full"></span>

        {/* Social Icons Section */}
        <nav className="flex justify-center space-x-4 md:space-x-6 mb-6">
          <a className="text-xl md:text-2xl hover:text-gray-400">
            <FaFacebook />
          </a>
          <a className="text-xl md:text-2xl hover:text-gray-400">
            <BsYoutube />
          </a>
          <a className="text-xl md:text-2xl hover:text-gray-400">
            <FaInstagram />
          </a>
          <a className="text-xl md:text-2xl hover:text-gray-400">
            <BsTwitter />
          </a>
          <a className="text-xl md:text-2xl hover:text-gray-400">
            <BsTiktok />
          </a>
        </nav>

        {/* Divider */}
        <span className="h-[1px] bg-white w-full"></span>

        {/* Copyright Section */}
        <aside className="text-center text-xs md:text-sm mt-4">
          <p>Copyright © {new Date().getFullYear()} - Designer by Md Shifat Rahman</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
