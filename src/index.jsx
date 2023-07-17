import About from "./about/About";
import Contact from "./contact/Contact";
import Experience from "./experiance/Experience";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Navbar from "./nav/Navbar";
import Portofolio from "./portofolio/Portofolio";
import Services from "./services/Services";
import Testimonial from "./testimonials/Testimonial";

const Index = () => {
  return (
    <>
      <div className="bg-[#052d4e]">
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Services />
        <Portofolio />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
