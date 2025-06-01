import React from "react";
import aboutus from "../assets/about-us.png";
import { RiArrowRightLine } from "@remixicon/react";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black
  shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-6 m-5"
    >
      <div>
        <SectionTitle title={"About"} />
        <div className="flex flex-col md:flex-row items-center text-center md:text-left p-4 md:p-8">
          <img
            className="w-full md:w-1/2 h-auto md:h-96 object-cover rounded-lg shadow-lg"
            src={aboutus}
            alt="About Us"
            data-aos="fade-right"
            data-aos-delay="500"
          />
          <div
            className="mt-4 md:mt-0 md:ml-8 max-w-xl"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <p className="text-white text-base md:text-lg leading-relaxed">
              Experienced Web Developer with 7 years of expertise in designing
              and developing dynamic, user-friendly web applications. Proficient
              in React.js, JavaScript, HTML, CSS, Redux, Redux Toolkit, and
              Tailwind CSS, with hands-on experience in web frameworks like
              React.js, WordPress, and Laravel. Skilled in MySQL database
              management and well-versed in Agile methodologies (JIRA) for
              efficient project execution. Passionate about learning new
              technologies and continuously improving development skills to stay
              updated with industry trends. Currently seeking new opportunities
              in a Front-End Development role to contribute technical expertise
              and creativity to innovative projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
