import React from "react";
import prvoidence from "../assets/prvoidence.png";
import netfocus from "../assets/netfocus.png";
import fondmetal from "../assets/fondmetal.png";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <>
      <div id="projects" className="w-[88%] m-auto my-8">
        <SectionTitle title={"Projects"} />
        <div className="flex flex-col md:flex-row items-center justify-start gap-4 mt-4">
          <div
            className="w-full p-4 md:w-1/3 bg-black text-white bg-opacity-50"
            data-aos="fade-up"
            data-aos-duration="250"
            data-aos-delay="0"
          >
            <img src={prvoidence} className="w-full h-[50%]" />
            <div>
              <h2 className="font-semibold leading-tight my-2">
                Providencegroup
              </h2>
              <p className="text-sm">
                The Providence Group is a commercial real estate firm located in
                Charlotte, North Carolina. Offers a variety of commercial real
                estate services including brokerage, development &amp;
                corporate.The Providence Group ensures seamless transactions and
                tailored real estate solutions that drive growth and success.
              </p>
            </div>
          </div>
          <div
            className="w-full p-4 md:w-1/3 bg-black text-white bg-opacity-50"
            data-aos="fade-up"
            data-aos-duration="250"
            data-aos-delay="200"
          >
            <img src={netfocus} className="w-full h-[50%]" />
            <div>
              <h2 className="font-semibold leading-tight my-2">
                Netfocus IT Solutions
              </h2>
              <p className="text-sm">
                Netfocus IT Solutions &#8211; Managed IT Services Kildare,
                Dublin, Galway, Dynamics 365, Digital Transfomation Specialists,
                Microsoft Partners, IT Support.We take responsibility for all
                aspects of service delivery freeing you to focus on building
                your business.
              </p>
            </div>
          </div>
          <div
            className="w-full p-4 md:w-1/3 bg-black text-white bg-opacity-50"
            data-aos="fade-up"
            data-aos-duration="250"
            data-aos-delay="500"
          >
            <img src={fondmetal} className="w-full h-[50%]" />
            <div>
              <h2 className="font-semibold leading-tight my-2">
                Fondmetal | Italian Made Custom Wheels
              </h2>
              <p className="text-sm">
                Fondmetal’s history began in 1970 in palosco,Our advanced
                filtering system allows you to narrow down options by size,
                brand, style, and more, ensuring you get exactly what you need.
                With easy sorting features
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
