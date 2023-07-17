import IMG1 from "../assets/img/p1.png";
import IMG2 from "../assets/img/p2.png";
import IMG3 from "../assets/img/p3.png";
import IMG4 from "../assets/img/p4.png";
import IMG5 from "../assets/img/p5.png";
import IMG6 from "../assets/img/p6.png";

const Portofolio = () => {
  const data = [
    {
      image: IMG1,
      title: "This is a portofolio item title",
      github: "https://github.com",
      demo: "https://dribbble.com",
    },
    {
      image: IMG2,
      title: "This is a portofolio item title",
      github: "https://github.com",
      demo: "https://dribbble.com",
    },
    {
      image: IMG3,
      title: "This is a portofolio item title",
      github: "https://github.com",
      demo: "https://dribbble.com",
    },
    {
      image: IMG4,
      title: "This is a portofolio item title",
      github: "https://github.com",
      demo: "https://dribbble.com",
    },
    {
      image: IMG5,
      title: "This is a portofolio item title",
      github: "https://github.com",
      demo: "https://dribbble.com",
    },
    {
      image: IMG6,
      title: "This is a portofolio item title",
      github: "https://github.com",
      demo: "https://dribbble.com",
    },
  ];

  return (
    <>
      <section id="portofolio" className="my-32">
        <div className="text-center">
          <h5 className="text-white font-thin">My Recent Work</h5>
          <h2 className="text-cyan-500 text-2xl font-semibold mb-16">
            Portofolio
          </h2>
        </div>
        {/* container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-2 md:px-8">
          {/* item */}
          {data.map(({ image, title, github, demo }, index) => {
            return (
              <article
                key={index}
                className="p-5 border border-transparent transition bg-indigo-800 rounded-3xl hover:bg-transparent hover:border-sky-500 ease-in duration-200"
              >
                <img
                  src={image}
                  alt=""
                  className="m-0 w-full rounded-xl overflow-hidden"
                />
                <h3 className="text-white mt-5 mb-8">{title}</h3>
                <a
                  href={github}
                  target="_blank"
                  className="text-sky-400 hover:text-[#83c4fd] border border-[#83c4fd] hover:bg-[#143e62] p-2 mr-2 rounded-lg"
                >
                  Github
                </a>
                <a
                  href={demo}
                  target="_blank"
                  className="hover:text-[#eaeff3] border border-[#83c4fd] bg-cyan-500 hover:bg-cyan-700 p-2 rounded-lg"
                >
                  Live Demo
                </a>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Portofolio;
