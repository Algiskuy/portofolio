import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const uref = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_gd3xoe6",
      "template_mvc64t9",
      uref.current,
      "OAFIRvAZHryDowPBu"
    );

    e.target.reset();
  };
  return (
    <>
      <section id="contact">
        <div className="text-center">
          <h5 className="text-white font-thin">Get In Touch</h5>
          <h2 className="text-cyan-500 text-2xl font-semibold mb-16">
            Contact
          </h2>
        </div>
        {/* container */}
        <div className="md:flex justify-center gap-10 mx-8 md:mx-0 lg:mx-16">
          {/* option */}
          <div className="mb-10 grid gap-6 m-0">
            <article className="text-white bg-indigo-800 hover:bg-transparent border border-transparent hover:border-sky-400 p-5 rounded-xl text-center m-0 ease-in duration-200">
              <MdOutlineEmail className="text-2xl mb-2" />
              <h4>Email</h4>
              <h5>algisalkautsar03@gmail.com</h5>
              <a
                href="mailto:carnabycarmanita@gmail.com"
                target="_blank"
                className="text-cyan-400 hover:text-cyan-500 mt-3 font-light"
              >
                Send a message
              </a>
            </article>
            <article className="text-white bg-indigo-800 hover:bg-transparent border border-transparent hover:border-sky-400 p-5 rounded-xl text-center m-0 ease-in duration-200">
              <RiMessengerLine className="text-2xl mb-2" />
              <h4>Messenger</h4>
              <h5>Algis Alkausar</h5>
              <a
                href="https://m.me/algisalkausar"
                target="_blank"
                className="text-cyan-400 hover:text-cyan-500 mt-3 font-light"
              >
                Send a message
              </a>
            </article>
            <article className="text-white bg-indigo-800 hover:bg-transparent border border-transparent hover:border-sky-400 p-5 rounded-xl text-center m-0 ease-in duration-200">
              <BsWhatsapp className="text-2xl mb-2" />
              <h4>WhatsApp</h4>
              <h5>+628212567</h5>
              <a
                href="https://api.whatsapp.com/send?phone=622125675055"
                target="_blank"
                className="text-cyan-400 hover:text-cyan-500 mt-3 font-light"
              >
                Send a message
              </a>
            </article>
          </div>
          <form
            ref={uref}
            onSubmit={sendEmail}
            className="m-0  md:w-1/2 mb-28 md:mb-0"
          >
            <input
              required
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="px-3 py-2 rounded-md bg-transparent border border-indigo-500 text-white font-serif break-word w-full"
            />
            <br />
            <br />
            <input
              required
              type="email"
              name="email"
              placeholder="Your Email"
              className="px-3 py-2 rounded-md bg-transparent border border-indigo-500 text-white font-serif break-word w-full"
            />
            <br />
            <br />
            <div className="m-0 ">
              <textarea
                required
                name="message"
                rows="7"
                placeholder="Your Message"
                className="p-5 mb-8 w-full rounded-md bg-transparent border border-indigo-500 resize-none text-white font-serif break-words"
              ></textarea>
            </div>
            <button
              type="submit"
              className="hover:text-[#eaeff3] border border-[#83c4fd] bg-cyan-500 hover:bg-cyan-700 p-2 rounded-lg w-max"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Contact;
