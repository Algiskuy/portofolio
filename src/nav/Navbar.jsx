import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState("#");

  return (
    <>
      <nav className="fixed bottom-8 left-] left-1/2 -translate-x-1/2 z-10 flex bg-black/30 w-max p-3 gap-3 rounded-full backdrop-blur-sm">
        <a
          href="#"
          onClick={() => {
            setActiveNavbar("#");
          }}
          className={`text-white/80 hover:text-white p-4 rounded-full hover:bg-black/30  ${
            activeNavbar === "#" ? "bg-black/30" : ""
          }`}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => {
            setActiveNavbar("#about");
          }}
          className={`text-white/80 hover:text-white p-4 rounded-full hover:bg-black/30  ${
            activeNavbar === "#about" ? "bg-black/30" : ""
          }`}
        >
          <AiOutlineUser />
        </a>{" "}
        <a
          href="#experience"
          onClick={() => {
            setActiveNavbar("#experience");
          }}
          className={`text-white/80 hover:text-white p-4 rounded-full hover:bg-black/30  ${
            activeNavbar === "#experience" ? "bg-black/30" : ""
          }`}
        >
          <BiBook />
        </a>
        <a
          href="#services"
          onClick={() => {
            setActiveNavbar("#services");
          }}
          className={`text-white/80 hover:text-white p-4 rounded-full hover:bg-black/30  ${
            activeNavbar === "#services" ? "bg-black/30" : ""
          }`}
        >
          <RiServiceLine />
        </a>
        <a
          href="#contact"
          onClick={() => {
            setActiveNavbar("#contact");
          }}
          className={`text-white/80 hover:text-white p-4 rounded-full hover:bg-black/30  ${
            activeNavbar === "#contact" ? "bg-black/30" : ""
          }`}
        >
          <BiMessageSquareDetail />
        </a>{" "}
      </nav>
    </>
  );
};

export default Navbar;
