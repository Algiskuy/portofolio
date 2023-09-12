import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <>
      <section id="experience">
        <div className="text-center">
          <h5 className="text-white font-thin">What Skills I Have</h5>
          <h2 className="text-cyan-500 text-2xl font-semibold mb-16">
            My Experience
          </h2>
        </div>
        {/* experience_container */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* fontend */}
          <div className="bg-[#033085fd] p-4 sm:p-8 rounded-3xl w-[90%] sm:w-[80%] border-2 border-transparent hover:bg-transparent hover:border-sky-500 hover:border-2 ease-in duration-200">
            <h3 className="text-white text-center mb-8">
              Front End Development
            </h3>
            {/* content */}
            <div className="grid grid-cols-2 gap-4">
              {/* details */}
              <article className="text-white m-0 flex">
                <p className="max-w-max mt-1 text-sky-300">
                  <BsPatchCheckFill />
                </p>
                <div className="ml-4">
                  <h4>HTML 5</h4>
                  <small>Beginer</small>
                </div>
              </article>
              <article className="text-white m-0 flex">
                <p className="max-w-max mt-1 text-sky-300">
                  <BsPatchCheckFill />
                </p>
                <div className="ml-4">
                  <h4>CSS</h4>
                  <small>Beginer</small>
                </div>
              </article>{" "}
              <article className="text-white m-0 flex">
                <p className="max-w-max mt-1 text-sky-300">
                  <BsPatchCheckFill />
                </p>
                <div className="ml-4">
                  <h4>JavaScript</h4>
                  <small>Beginer</small>
                </div>
              </article>{" "}
              <article className="text-white m-0 flex">
                <p className="max-w-max mt-1 text-sky-300">
                  <BsPatchCheckFill />
                </p>
                <div className="ml-4">
                  <h4>Tailwindcss</h4>
                  <small>Beginer</small>
                </div>
              </article>{" "}
              <article className="text-white m-0 flex">
                <p className="max-w-max mt-1 text-sky-300">
                  <BsPatchCheckFill />
                </p>
                <div className="ml-4">
                  <h4>React js + vite</h4>
                  <small>Beginer</small>
                </div>
              </article>
            </div>
          </div>
          {/* backend */}
          <div className="bg-[#033085fd] p-4 sm:p-8 rounded-3xl w-[90%] sm:w-[80%] border-2 border-transparent hover:bg-transparent hover:border-sky-500 hover:border-2 ease-in duration-200">
            <h3 className="text-white text-center mb-8">BackEnd Development</h3>
            {/* content */}
            <div className="grid grid-cols-2 gap-4">
              {/* details */}
              <article className="text-white  m-0 flex">
                <p className="max-w-max mt-1 text-sky-300">
                  <BsPatchCheckFill />
                </p>
                <div className="ml-4">
                  <h4>HTML 5</h4>
                  <small>Beginer</small>
                </div>
              </article>
              <article className="text-white  m-0 flex">
                <p className="max-w-max mt-1 text-sky-300">
                  <BsPatchCheckFill />
                </p>
                <div className="ml-4">
                  <h4>CSS</h4>
                  <small>Beginer</small>
                </div>
              </article>{" "}
              <article className="text-white  m-0 flex">
                <p className="max-w-max mt-1 text-sky-300">
                  <BsPatchCheckFill />
                </p>
                <div className="ml-4">
                  <h4>JavaScript</h4>
                  <small>Beginer</small>
                </div>
              </article>{" "}
              <article className="text-white  m-0 flex">
                <p className="max-w-max mt-1 text-sky-300">
                  <BsPatchCheckFill />
                </p>
                <div className="ml-4">
                  <h4>Tailwindcss</h4>
                  <small>Beginer</small>
                </div>
              </article>{" "}
              <article className="text-white  m-0 flex">
                <p className="max-w-max mt-1 text-sky-300">
                  <BsPatchCheckFill />
                </p>
                <div className="ml-4">
                  <h4>React js + vite</h4>
                  <small>Beginer</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
