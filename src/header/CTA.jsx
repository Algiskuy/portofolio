import CV from "../assets/Documents/Algis Al KausarCV.jpg";

const CTA = () => {
  return (
    <>
      <div className="">
        <a
          href={CV}
          download
          className="text-[#5593c9d4] hover:text-[#83c4fd] border border-[#83c4fd] hover:bg-[#143e62] p-2 mr-2"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="hover:text-[#eaeff3] border border-[#83c4fd] bg-cyan-500 hover:bg-cyan-700 p-2"
        >
          Let`s Talk
        </a>
      </div>
    </>
  );
};

export default CTA;
