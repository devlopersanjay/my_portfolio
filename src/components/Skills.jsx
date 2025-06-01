import React, { useState } from "react";
import {
  FaCss3,
  FaPhp,
  FaWordpress,
  FaDatabase,
  FaHtml5,
  FaJs,
  FaReact,
  FaGit,
  FaWindows,
  FaUbuntu,
} from "react-icons/fa";
import { SiRedux, SiMysql, SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import Education from "./Education";
import SectionTitle from "./SectionTitle";
const Skills = () => {
  return (
    <div id="skills" className="w-[88%] m-auto mt-10">
      <SectionTitle title={"Skills"} />
      <div className="flex max-sm:flex-col justify-center">
        <div className="w-1/2 max-sm:w-full max-sm:p-0 flex flex-row m flex-wrap px-4 py-8">
          <span className="p-3 m-4 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 m-4 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 m-4 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 m-4 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 m-4 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedux color="#7248b6" size={50} />
          </span>
          <span className="p-3 m-4 bg-zinc-950 flex items-center rounded-2xl">
            <SiTailwindcss color="#00aaf7" size={50} />
          </span>
          <span className="p-3 m-4 bg-zinc-950 flex items-center rounded-2xl">
            <FaPhp color="#7377ad" size={50} />
          </span>
          <span className="p-3 m-4 bg-zinc-950 flex items-center rounded-2xl">
            <FaWordpress color="#00769d" size={50} />
          </span>
          <span className="p-3 m-4 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#ef8f1d" size={50} />
          </span>
          <span className="p-3 m-4 bg-zinc-950 flex items-center rounded-2xl">
            <FaGit color="#FF4438" size={50} />
          </span>
          <span className="p-3 m-4 bg-zinc-950 flex items-center rounded-2xl">
            <FaWindows color="#00aaf7" size={50} />
          </span>
          <span className="p-3 m-4 bg-zinc-950 flex items-center rounded-2xl">
            <FaUbuntu color="#f76009" size={50} />
          </span>
          <span className="p-3 m-4 bg-zinc-950 flex items-center rounded-2xl">
            <VscVscode color="#0072b9" size={50} />
          </span>
        </div>
        <Education />
      </div>
    </div>
  );
};

export default Skills;
