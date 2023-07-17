import ME from "../assets/img/Algis.png";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <>
      <section id="about" className="mt-10">
        <div className="text-center">
          <h5 className="text-white font-thin">Get To Know</h5>
          <h2 className="text-cyan-500 text-2xl font-semibold">About Me</h2>
        </div>
        {/* About */}
        <div className="grid lg:grid-cols-2 my-10">
          <div className="lg:flex justify-center mb-10 hidden">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-900 rounded-2xl grid place-content-center">
              <div className="bg-gradient-to-t from-sky-800 to-sky-400 rounded-xl overflow-hidden rotate-6 hover:rotate-0 transition-transform">
                <img src={ME} alt="me" className="max-h-[60vh]" />
              </div>
            </div>
          </div>
          {/* Card */}
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 ml-8 lg:ml-0 mr-8">
              <a href="#experience">
                <article className="bg-[#033085fd] rounded-2xl p-6 md:p-8 text-center text-white border border-transparent hover:bg-transparent hover:border-sky-400 w-full ease-in duration-200">
                  <p className="flex justify-center text-sky-400">
                    <FaAward />
                  </p>
                  <h5 className="font-medium">Experience</h5>
                  <small className="font-light">3+ Years Working</small>
                </article>
              </a>
              <a href="#testimonial">
                <article className="bg-[#033085fd] rounded-2xl p-6 md:p-8 text-center text-white border border-transparent hover:bg-transparent hover:border-sky-400 w-full ease-in duration-200">
                  <p className="flex justify-center text-sky-400">
                    <FiUser />
                  </p>
                  <h5 className="font-medium">Clients</h5>
                  <small className="font-light">200+ Worldwide</small>
                </article>{" "}
              </a>
              <a href="#portofolio">
                <article className="bg-[#033085fd] rounded-2xl p-6 md:p-8 text-center text-white border border-transparent hover:bg-transparent hover:border-sky-400 w-full ease-in duration-200">
                  <p className="flex justify-center text-sky-400">
                    <VscFolderLibrary />
                  </p>
                  <h5 className="font-medium">Project</h5>
                  <small className="font-light">80+ Completed</small>
                </article>
              </a>
            </div>
            <p className="my-8 text-white font-light px-4 lg:px-0 text-center sm:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ab
              totam sapiente temporibus odit, voluptatem iusto voluptatibus
              praesentium labore quia earum similique modi, deleniti neque quam
              sint fugit, cupiditate provident?
            </p>
            <div className="text-center sm:text-left">
              <a
                href="contact"
                className="hover:text-[#eaeff3] border border-[#83c4fd] bg-cyan-500 hover:bg-cyan-700 p-2 ml-4 lg:ml-0"
              >
                Let`s Talk
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
