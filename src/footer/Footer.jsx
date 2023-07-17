import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="py-12 text-center bg-blue-500 mt-3">
      {/* logo */}
      <div className="mb-8">
        <a href="#" className="text-2xl font-serif font-bold">
          Algis ALkautsar
        </a>
      </div>
      {/* permalink */}
      <ul className="flex flex-wrap justify-center gap-8 mb-12">
        <li className="m-0">
          <a href="#">Home</a>
        </li>
        <li className="m-0">
          <a href="#about">About</a>
        </li>
        <li className="m-0">
          <a href="#experience">Experience</a>
        </li>
        <li className="m-0">
          <a href="#services">Service</a>
        </li>
        <li className="m-0">
          <a href="#portofolio">Portofolio</a>
        </li>
        <li className="m-0">
          <a href="#testimonial">Testimonials</a>
        </li>
        <li className="m-0">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex justify-center gap-4 mb-16">
        <a
          href="https://facebook.com"
          className="m-0 bg-zinc-800 text-white p-3 rounded-xl border border-transparent hover:bg-transparent hover:border-zinc-800 hover:text-black ease-in duration-200"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com"
          className="m-0 bg-zinc-800 text-white p-3 rounded-xl border border-transparent hover:bg-transparent hover:border-zinc-800 hover:text-black ease-in duration-200"
        >
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com"
          className="m-0 bg-zinc-800 text-white p-3 rounded-xl border border-transparent hover:bg-transparent hover:border-zinc-800 hover:text-black ease-in duration-200"
        >
          <IoLogoTwitter />
        </a>
      </div>
      <div className="mb-16">
        <small>&copy; Algis Alkautsar. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
