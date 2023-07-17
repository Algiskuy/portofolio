import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <>
      <section id="services">
        <div className="text-center">
          <h5 className="text-white font-thin">What I Offer</h5>
          <h2 className="text-cyan-500 text-2xl font-semibold mb-16">
            Services
          </h2>
        </div>
        {/* sevice_container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:px-5">
          {/* service_content1*/}
          <article className="bg-[#173875fd] rounded-b-xl w-[90%] lg:h-max border border-slate-500 hover:bg-transparent hover:border-slate-600 ease-in duration-200">
            {/* head */}
            <div className="bg-sky-500 p-8 rounded-b-xl shadow-2xl">
              <h3 className="font-medium text-center">UI/UX Design</h3>
            </div>
            {/* list */}
            <ul className="p-8">
              <li className="flex mb-2 gap-2">
                <p className="w-max text-white mt-1">
                  <BiCheck />
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>{" "}
              <li className="flex mb-2 gap-2">
                <p className="w-max text-white mt-1">
                  <BiCheck />
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>{" "}
              <li className="flex mb-2 gap-2">
                <p className="w-max text-white mt-1">
                  <BiCheck />
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>{" "}
              <li className="flex mb-2 gap-2">
                <p className="w-max text-white mt-1">
                  <BiCheck />
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>{" "}
              <li className="flex mb-2 gap-2">
                <p className="w-max text-white mt-1">
                  <BiCheck />
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>
            </ul>
          </article>
          {/* service_content2 */}
          <article className="bg-[#173875fd] rounded-b-xl w-[90%] lg:h-max border border-slate-500 hover:bg-transparent hover:border-slate-600 ease-in duration-200">
            {/* head */}
            <div className="bg-sky-500 p-8 rounded-b-xl shadow-2xl">
              <h3 className="font-medium text-center">Front End Development</h3>
            </div>
            {/* list */}
            <ul className="p-8">
              <li className="flex mb-2 gap-2">
                <p className="w-max text-white mt-1">
                  <BiCheck />
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>{" "}
              <li className="flex mb-2 gap-2">
                <p className="w-max text-white mt-1">
                  <BiCheck />
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>{" "}
              <li className="flex mb-2 gap-2">
                <p className="w-max text-white mt-1">
                  <BiCheck />
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>{" "}
              <li className="flex mb-2 gap-2">
                <p className="w-max text-white mt-1">
                  <BiCheck />
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>{" "}
              <li className="flex mb-2 gap-2">
                <p className="w-max text-white mt-1">
                  <BiCheck />
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>{" "}
              <li className="flex mb-2 gap-2">
                <p className="w-max text-white mt-1">
                  <BiCheck />
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>
            </ul>
          </article>
          {/* Service_content3 */}
          <article className="bg-[#173875fd] rounded-b-xl w-[90%] lg:h-max border border-slate-500 hover:bg-transparent hover:border-slate-600 ease-in duration-200">
            {/* head */}
            <div className="bg-sky-500 p-8 rounded-b-xl shadow-2xl">
              <h3 className="font-medium text-center">Content Creation</h3>
            </div>
            {/* list */}
            <ul className="p-8">
              <li className="flex mb-2 gap-2">
                <p className="w-max text-white mt-1">
                  <BiCheck />
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>{" "}
              <li className="flex mb-2 gap-2">
                <p className="w-max text-white mt-1">
                  <BiCheck />
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>{" "}
              <li className="flex mb-2 gap-2">
                <p className="w-max text-white mt-1">
                  <BiCheck />
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>{" "}
              <li className="flex mb-2 gap-2">
                <p className="w-max text-white mt-1">
                  <BiCheck />
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>{" "}
              <li className="flex mb-2 gap-2">
                <p className="w-max text-white mt-1">
                  <BiCheck />
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>
            </ul>
          </article>
          {/* end */}
        </div>
      </section>
    </>
  );
};

export default Services;
