import React, { useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      id="experience"
      className="w-[88%] m-auto mt-8"
      data-aos="fade-up"
      data-aos-duration="250"
      data-aos-delay="400"
    >
      {/* <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1> */}
      <SectionTitle title={"Experience"} />
      <div className="flex flex-col gap-2 md:flex-row">
        <div
          style={{ backgroundColor: "#BBFBFF" }}
          className="w-full md:w-1/3 text-black mt-4 p-4 items-center"
        >
          <h2 className="text-lg leading-tight mb-2">
            Infosys - Technology Analyst
          </h2>
          <div className="flex md: flex-wrap items-start text-sm leading-tight font-thin">
            <span className="flex mr-2 md: mb-2">
              <FaCalendarAlt className="mr-2" /> Jan 2023 - Present
            </span>
            <span className="flex">
              <FaLocationDot className="mr-2" /> Pune, Maharashtra
            </span>
          </div>
          <ul className="text-sm p-2">
            <li>
              - Infosys | SAPSE Project – Product Replenishment Strategy
              Solution
            </li>
            <li>
              - Developed responsive, user-friendly, and intuitive front-end
              interfaces for the product replenishment strategy solution.
            </li>
            <li>
              - Utilized HTML, CSS, JavaScript, React, and Redux to build
              dynamic and scalable web applications.
            </li>
            <li>
              - Focused on enhancing user experience by designing
              well-structured UI components and interactive features.
            </li>
            <li>
              - Contributed to frontend feature development that supported
              inventory management and product replenishment strategies, helping
              clients optimize stock levels and automate reordering processes
              based on data insights.
            </li>
            <li>
              - Ensured the product met client design expectations and
              maintained a consistent UI by documenting UI specifications and
              frontend design patterns for the team and stakeholders.
            </li>
          </ul>
        </div>
        <div
          style={{ backgroundColor: "#BBFBFF" }}
          className="w-full md:w-1/3 text-black mt-4 p-4 items-center"
        >
          <h2 className="text-lg leading-tight mb-2">
            Netsol ITSolution - Web Developer
          </h2>
          <div className="flex md: flex-wrap items-start text-sm leading-tight font-thin">
            <span className="flex mr-2 md: mb-2">
              <FaCalendarAlt className="mr-2" /> Jan 2022 - Sept 2022
            </span>
            <span className="flex">
              <FaLocationDot className="mr-2" /> Surat, Gujarat
            </span>
          </div>
          <ul className="text-sm p-2">
            <li>
              - Developed a Property Management Application designed for small
              to mid-sized hotels and hotel groups to streamline report
              management and guest interactions.
            </li>
            <li>
              - Implemented MVC architecture to ensure a structured, scalable,
              and maintainable codebase.
            </li>
            <li>
              - Designed and developed responsive UI components using HTML, CSS,
              and Bootstrap for an intuitive user experience.
            </li>
            <li>
              - Analyzed business requirements and applied systematic approaches
              to implement, document, and optimize key functionalities.
            </li>
          </ul>
        </div>
        <div
          style={{ backgroundColor: "#BBFBFF" }}
          className="w-full md:w-1/3 text-black mt-4 p-4 items-center"
        >
          <h2 className="text-lg leading-tight mb-2">
            Dynamic Dreamz - Web Developer
          </h2>
          <div className="flex md: flex-wrap items-start text-sm leading-tight font-thin">
            <span className="flex mr-2 md: mb-2">
              <FaCalendarAlt className="mr-2" /> Dec 2017 - Jan 2022
            </span>
            <span className="flex">
              <FaLocationDot className="mr-2" /> Surat, Gujarat
            </span>
          </div>
          <ul className="text-sm p-2">
            <li>
              - Developed blog and service-based websites using the WordPress
              framework, ensuring a dynamic and user-friendly experience.
            </li>
            <li>
              - Enabled users to easily manage content through WordPress,
              ensuring real-time updates reflected on the UI.
            </li>
            <li>
              - Built a blog-based website, implementing structured content
              management for blog posts and optimizing user experience.
            </li>
            <li>
              - Collaborated with designers to create clean interfaces and
              ensure intuitive interactions for seamless user engagement.
            </li>
            <li>
              - Managed project workflow efficiently, aligning with client needs
              and business goals.
            </li>
            <li>
              - Conducted quality assurance (QA) tests to identify and resolve
              bugs, enhancing usability and performance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
