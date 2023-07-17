import { BsLinkedin } from "react-icons/bs";
import { SiMedium } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <>
      <div className="absolute left-20 md:left-40 bottom-0 lg:grid gap-6 hidden ">
        <a href="https://linkedin.com" terget="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com" terget="_blank">
          <FaGithub />
        </a>
        <a href="https://medium.com" terget="_blank">
          <SiMedium />
        </a>
      </div>
    </>
  );
};

export default HeaderSocials;
