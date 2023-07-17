import AVTR1 from "../assets/img/kobo.png";
import AVTR2 from "../assets/img/Algis.png";
import AVTR3 from "../assets/img/kobo.png";
import AVTR4 from "../assets/img/kobo.png";

const Testimonial = () => {
  const data = [
    {
      image: AVTR1,
      name: "Ernest",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Tempora illo labore in delectus sunt vel dicta, recusandaeexercitationem corrupti officia dolores! Voluptatum consequaturobcaecati atque magni! Aperiam architecto odit exercitationem!",
    },
    {
      image: AVTR2,
      name: "Ernest",
      review: "it exercitationem!",
    },
    {
      image: AVTR3,
      name: "Ernest",
      review: "Lorem adassssssssssssasdsasdasdasdassdaasdasdsadasdsa!",
    },
    {
      image: AVTR4,
      name: "Ernest",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Tempora illo labore in delectus sunt vel dicta, recusandaeexercitationem corrupti officia dolores! Voluptatum consequaturobcaecati atque magni! Aperiam architecto odit exercitationem!",
    },
  ];

  return (
    <>
      <section id="testimonial" className="mb-14 md:mb-32">
        <div className="text-center">
          <h5 className="text-white font-thin">Review from clients</h5>
          <h2 className="text-cyan-500 text-2xl font-semibold">Testimonials</h2>
        </div>
        {/* container */}
        <div className="md:min-w-[70%] md:max-w-[70%] lg:min-w-[45%] lg:max-w-[45%] flex snap-x snap-mandatory overflow-y-hidden gap-4 p-4">
          {/* testimonial */}
          {data.map(({ image, name, review }, index) => {
            return (
              <article
                key={index}
                className="max-w-full min-w-full text-center bg-[#033085fd] p-8 rounded-2xl snap-center"
              >
                <div className="overflow-hidden">
                  <img
                    src={image}
                    alt="user"
                    className="max-w-[4rem] max-h-[4rem] rounded-full border-4 border-cyan-700"
                  />
                </div>
                <h5 className="text-white font-medium my-4 break-words">
                  {name}
                </h5>
                <p className="text-white font-light w-[80%] m-auto break-words">
                  {review}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Testimonial;
