import CTA from "./CTA";
import ME from "../assets/img/Algis.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <>
      <div className="text-center pt-8 text-white max-h-[100vh]">
        <h5>Hello I`m</h5>
        <h1 className="text-3xl">Carnaby</h1>
        <h5 className="text-[#5593c9] text-sm">Front End Developer</h5>
        <br />
        <CTA />
        <br />
        <HeaderSocials />
        <div className="flex justify-center">
          <div className=" min-h-[30rem] max-h-[30rem] rounded-t-full bg-cyan-500 bg-gradient-to-t from-sky-800 to-sky-400 w-max pt-20 px-2 overflow-hidden">
            <img src={ME} alt="me" className="h-[30rem]" />
          </div>
        </div>
        <a
          href="#contact"
          className="absolute right-14 md:right-32 bottom-10 rotate-90 text-cyan-600 hover:text-cyan-500 font-thin hidden lg:block"
        >
          Scroll Down
        </a>
      </div>
    </>
  );
};

export default Header;
